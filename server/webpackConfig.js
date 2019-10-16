process.env.NODE_ENV = "production";

const clearModule = require('clear-module');
clearModule.all();

const {createWebpackProdConfig} = require('@craco/craco');
const {loadCracoConfig} = require("@craco/craco/lib/config");
const {getCraPaths} = require("@craco/craco/lib/cra");

const context = {
    env: process.env.NODE_ENV
};


const cracoConfig = loadCracoConfig(context);
context.paths = getCraPaths(cracoConfig);

const webpackConfig = createWebpackProdConfig(cracoConfig, context);

const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const resolveModule = relativePath => path.resolve(appDirectory + '/src', relativePath);


const nodeExternals = require('webpack-node-externals');


webpackConfig.output.path = resolveApp('build.server');
webpackConfig.target = 'node';
webpackConfig.devtool = false;
webpackConfig.entry = [resolveModule('index.server.js')];

webpackConfig.output.filename = 'index.js';
webpackConfig.output.chunkFilename = 'js/[name].[chunkhash:8].chunk.js';
webpackConfig.output.libraryTarget = 'commonjs2';

webpackConfig.optimization.runtimeChunk = false;

webpackConfig.plugins = webpackConfig.plugins.filter(function(plugin){
  return ['MiniCssExtractPlugin'].indexOf(plugin.constructor.name) > -1 || ['LoadablePlugin'].indexOf(plugin.constructor.name) > -1;
});


webpackConfig.externals = [
    nodeExternals()
];

module.exports = webpackConfig