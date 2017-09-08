
const https = require('https');
const fs = require('fs');

const DOMAIN = process.env.NODE_ENV === 'production' ? 'https://api.2017.deolhonasmetas.org.br' : 'https://dapidonm.eokoe.com';

const sourcesAndDests = [
	{
		url: '/api/region',
		dataDest: './data/districts.json',
		contentFolder: './content/distritos',
	},
];

let currentContentFolder;

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

function userException(message) {
	this.message = message;
	this.name = 'userException';
}

function savePages() {
	const fileContent = fs.readFileSync(this.path, 'utf-8');
	const jsonElements = JSON.parse(fileContent).region;
	const pageList = [];

	jsonElements.forEach((page) => {
		const filename = `${currentContentFolder}/${slugify(page.name)}.md`;

		if (pageList.indexOf(filename) !== -1) {
			throw new userException(`${filename} already exists.`);
		}

		const contentFile = fs.createWriteStream(filename, { flags: 'w' });

		contentFile.on('open', () => {
			console.log(`Writing ${filename}`);
		});

		contentFile.on('close', () => {
			console.log(`${filename} saved.`);
		});

		const frontMatter = `---
date: ${new Date().toISOString()}
draft: false
title: ${page.name}
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
			console.log(`${url} saved as ${dest}`);
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
	currentContentFolder = file.contentFolder;

	download(`${DOMAIN}${file.url}`, file.dataDest, savePages);
});
