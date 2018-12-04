process.env.NODE_ENV = "production";

const clearModule = require('clear-module');
clearModule.all();

const { log } = require("@craco/craco/lib/logger");
const { craPaths, loadWebpackProdConfig, overrideWebpackProdConfig, build } = require("@craco/craco/lib/cra");
const { loadCracoConfig } = require("@craco/craco/lib/config");
const { overrideWebpack } = require("@craco/craco/lib/features/webpack");

log("Override started with arguments: ", process.argv);
log("For environment: ", process.env.NODE_ENV);

const context = {
    env: process.env.NODE_ENV,
    paths: craPaths
};

const cracoConfig = loadCracoConfig(context);
const craWebpackConfig = loadWebpackProdConfig();

overrideWebpack(cracoConfig, craWebpackConfig, overrideWebpackProdConfig, context);


const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const resolveModule = relativePath => path.resolve(appDirectory + '/src', relativePath);


const nodeExternals = require('webpack-node-externals');


craWebpackConfig.output.path = resolveApp('build');
craWebpackConfig.target = 'node';
craWebpackConfig.devtool = false;
craWebpackConfig.entry = [resolveModule('index.server.js')];

craWebpackConfig.output.filename = 'index.js';
craWebpackConfig.output.chunkFilename = 'js/[name].[chunkhash:8].chunk.js';
craWebpackConfig.output.libraryTarget = 'commonjs2';

craWebpackConfig.optimization.runtimeChunk = false;

craWebpackConfig.plugins = craWebpackConfig.plugins.filter(function(plugin){
  return ['MiniCssExtractPlugin'].indexOf(plugin.constructor.name) > -1;
});

craWebpackConfig.externals = [
    nodeExternals()
];

module.exports = craWebpackConfig;