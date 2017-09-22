const https = require('https');
const fs = require('fs');

const DOMAIN = process.env.NODE_ENV === 'production' ? 'https://api.2017.deolhonasmetas.org.br' : 'https://dapidonm.eokoe.com';

const sourcesAndDests = [
	{
		url: '/api/region',
		dataDest: './data/districts.json',
		contentFolder: './content/distritos',
		jsonRootElement: 'region',
	},
];

let currentElement;

// @see https://gist.github.com/mathewbyrne/1280286#gistcomment-2100112
function slugify(str) {
	const from = 'ąàáäâãåæćçęęèéëêìíïîłńòóöôõøśùúüûñçżź';
	const to = 'aaaaaaaacceeeeeeiiiilnoooooosuuuunczz';
	let regex = from.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');

	regex = new RegExp(`[${regex}]`, 'g');

	if (str === null) return '';

	return String(str)
		.toLowerCase()
		.replace(regex, c => to.charAt(from.indexOf(c)) || '-')
		.replace(/[^\w\s-]/g, '')
		.replace(/([A-Z])/g, '-$1')
		.replace(/[-_\s]+/g, '-')
		.toLowerCase();
}

function savePages() {
	const fileContent = fs.readFileSync(this.path, 'utf-8');
	const jsonElements = JSON.parse(fileContent)[currentElement.jsonRootElement];
	const pageList = [];

	jsonElements.forEach((page) => {
		const filename = `${currentElement.contentFolder}/${slugify(page.name || page.title)}.md`;

		if (pageList.indexOf(filename) !== -1) {
			throw new Error(`${filename} already exists.`);
		}

		const contentFile = fs.createWriteStream(filename, { flags: 'w' });

		contentFile.on('open', () => {
			console.log(`Writing ${filename}`); // eslint-disable-line no-console
		});

		contentFile.on('close', () => {
			console.log(`${filename} saved.`); // eslint-disable-line no-console
		});

		const frontMatter = `---
date: ${new Date().toISOString()}
draft: true
title: ${page.name || page.title}
id: ${page.id}
---
		`;

		contentFile.write(frontMatter);

		pageList[pageList.length] = filename;

		contentFile.close();
	});
}


function download(url, dest, cb) {
	const file = fs.createWriteStream(dest);

	const request = https.get(url, (response) => {
		// check if response is success
		if (response.statusCode !== 200) {
			if (cb) cb(`Response status was ${response.statusCode}`);
		}

		response.pipe(file);

		file.on('finish', () => {
			file.close(cb); // close() is async, call cb after close completes.
			console.log(`${url} saved as ${dest}`); // eslint-disable-line no-console
		});
	});

	request.on('error', (err) => { // Handle errors
		fs.unlink(dest); // Delete the file async. (But we don't check the result)
		if (cb) cb(err.message);
	});

	file.on('error', (err) => { // Handle errors
		fs.unlink(dest); // Delete the file async. (But we don't check the result)
		if (cb) cb(err.message);
	});
}

sourcesAndDests.forEach((file) => {
	currentElement = file;

	download(`${DOMAIN}${file.url}`, file.dataDest, savePages);
});
