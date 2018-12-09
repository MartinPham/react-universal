process.env.NODE_ENV = "production";
process.env.CLI_BUILDTIME = true;

const fs = require('fs');
const path = require('path');
try {
	fs.mkdirSync(__dirname + '/../../build-cli/images');
} catch (e) {
	console.log(e)
}


fs.readFileSync(__dirname + '/../../.cli-imported-assets', 'utf8').split("\n").forEach(asset => {
	if(asset !== '')
	{
		let finalAsset = asset.replace(/\.\.\//g, '', '');

		console.log('Copy ', finalAsset);
		try {
			fs.copyFileSync(__dirname + '/../../src/' + finalAsset, __dirname + '/../../build-cli/' + finalAsset);
		} catch (e) {
			console.log(e)
		}

	}
});

fs.unlinkSync(__dirname + '/../../.cli-imported-assets');