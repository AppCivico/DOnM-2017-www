const https = require('https');
const fs = require('fs');

const DOMAIN = process.env.NODE_ENV === 'production' ? 'https://api.2017.deolhonasmetas.org.br' : 'https://dapidonm.eokoe.com';

const sourcesAndDests = [
	{
		url: '/api/region',
		dataDest: './static/dist/js/districts.json',
		contentFolder: './content/distritos',
		jsonRootElement: 'regions',
	},

	{
		url: '/api/project',
		dataDest: './static/dist/js/projects.json',
		contentFolder: './content/projetos',
		jsonRootElement: 'projects',
	},

	{
		url: '/api/goal',
		dataDest: './static/dist/js/goals.json',
		contentFolder: './content/metas',
		jsonRootElement: 'goals',
	},
];

// @see https://gist.github.com/mathewbyrne/1280286#gistcomment-2100112
function slugify(str) {
	const from = 'ąàáäâãåæćçęęèéëêìíïîłńòóöôõøśùúüûñżź';
	const to = 'aaaaaaaacceeeeeeiiiilnoooooosuuuunzz';
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

function savePages(fileData) {
	const fileContent = fs.readFileSync(fileData.dataDest, 'utf-8');
	const jsonElements = JSON.parse(fileContent)[fileData.jsonRootElement];
	const pageList = [];

	if (typeof (jsonElements) === 'undefined' || jsonElements === null) {
		throw new Error(`error on parse ${fileData.dataDest}: ${fileData.jsonRootElement}`);
	}

	jsonElements.forEach((page) => {
		const filename = `${fileData.contentFolder}/${slugify(page.name || page.title)}.md`;

		if (pageList.indexOf(filename) !== -1) {
			throw new Error(`${filename} already exists.`);
		}

		const contentFile = fs.createWriteStream(filename, { flags: 'w' });

		contentFile.on('open', () => {
			console.log(`Writing ${filename}`); // eslint-disable-line no-console
		});


		contentFile.on('error', (err) => { // Handle errors
			fs.unlink(filename); // Delete the file async. (But we don't check the result)
			throw new Error(`error on writing ${filename}. ${err.message}`);
		});

		contentFile.on('finish', () => {
			contentFile.close();
		});

		contentFile.on('close', () => {
			console.log(`${filename} saved.`); // eslint-disable-line no-console
		});

		const frontMatter = `---
date: ${new Date().toISOString()}
draft: false
title: "${page.name || page.title}"
id: ${page.id}
---
		`;

		contentFile.write(frontMatter);

		pageList[pageList.length] = filename;
	});
}


function download(url, fileData, cb) {
	const file = fs.createWriteStream(fileData.dataDest);

	const request = https.get(url, (response) => {
		// check if response is success
		if (response.statusCode !== 200) {
			if (cb) cb(`Response status was ${response.statusCode}`);
		}

		response.pipe(file);

		file.on('finish', () => {
			file.close(cb(fileData)); // close() is async, call cb after close completes.
			console.log(`${url} saved as ${fileData.dataDest}`); // eslint-disable-line no-console
		});
	});

	request.on('error', (err) => { // Handle errors
		fs.unlink(fileData.dataDest); // Delete the file async. (But we don't check the result)
		if (cb) cb(err.message);
	});

	file.on('error', (err) => { // Handle errors
		fs.unlink(fileData.dataDest); // Delete the file async. (But we don't check the result)
		if (cb) cb(err.message);
	});
}

sourcesAndDests.forEach((file) => {
	const fileData = file;

	download(`${DOMAIN}${file.url}`, fileData, savePages);
});
