var https = require('https');
var fs = require('fs');

const DOMAIN = process.env['NODE_ENV'] === 'production'
			? 'https://api.2017.deolhonasmetas.org.br'
			: 'https://dapidonm.eokoe.com';

var sourcesAndDests = [
	{
		url:           '/api/region',
		dataDest:      './data/districts.json',
		contentFolder: './content/distritos'
	}
];

var currentContentFolder;

// @see https://gist.github.com/mathewbyrne/1280286#gistcomment-2100112
var slugify = function (str) {
	const from  = "ąàáäâãåæćçęęèéëêìíïîłńòóöôõøśùúüûñçżź";
	const to    = "aaaaaaaacceeeeeeiiiilnoooooosuuuunczz";
	const regex = new RegExp('[' + from.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1') + ']', 'g');

	if (str === null) return '';

	str = String(str).toLowerCase().replace(regex, function(c) {
		return to.charAt(from.indexOf(c)) || '-';
	});

	return str.replace(/[^\w\s-]/g, '').replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};


var savePages = function() {
	let fileContent = fs.readFileSync(this.path, 'utf-8');

	let jsonElements = JSON.parse(fileContent).region;

	let pageList = [];

	for (let page of jsonElements){
		let filename = currentContentFolder+'/'+slugify(page.name)+'.md';

		if (pageList.indexOf(filename) !== -1){
			throw `${filename} already exists.`;
		}

		let contentFile = fs.createWriteStream(filename, {'flags': 'w'});

		contentFile.on("open", () => {
			console.log(`Writing ${filename}`);
		});

		contentFile.on("close", () => {
			console.log(`${filename} saved.`)
		});

		let frontMatter = `---
date: ${new Date().toISOString()}
draft: false
title: ${page.name}
id: ${page.id}
---
		`;

		contentFile.write(frontMatter);

		pageList[pageList.length] = filename;

		contentFile.close();
	}
}

var download = function(url, dest, cb) {
	var file = fs.createWriteStream(dest);

	var request = https.get(url, function(response) {
		// check if response is success
		if (response.statusCode !== 200) {
			if (cb) cb('Response status was ' + response.statusCode);
		}

		response.pipe(file);

		file.on('finish', function() {
			file.close(cb); // close() is async, call cb after close completes.
			console.log(`${url} saved as ${dest}`);
		});
	});

	request.on('error', function(err) { // Handle errors
		fs.unlink(dest); // Delete the file async. (But we don't check the result)
		if (cb) cb(err.message);
	});

	file.on('error', function(err) { // Handle errors
		fs.unlink(dest); // Delete the file async. (But we don't check the result)
		if (cb) cb(err.message);
	});
};

for (let file of sourcesAndDests) {
	currentContentFolder = file.contentFolder;

	download(`${DOMAIN}${file.url}`, file.dataDest, savePages);
}


