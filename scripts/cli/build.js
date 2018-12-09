process.env.NODE_ENV = "production";
process.env.CLI_BUILDTIME = true;

const fs = require('fs');
fs.writeFileSync(__dirname + '/../../.cli-imported-assets', '');

const { build } = require("@craco/craco/lib/cra");
const craWebpackConfig = require('./webpackConfig.cli');



build();


// console.log(process.env.imported_assets)