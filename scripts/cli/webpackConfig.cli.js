process.env.NODE_ENV = "production";

const clearModule = require('clear-module');
const webpack = require('webpack');
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
craWebpackConfig.entry = [resolveModule('index.cli.js')];

craWebpackConfig.output.filename = 'index.js';
// craWebpackConfig.output.chunkFilename = '';
craWebpackConfig.output.libraryTarget = 'commonjs2';

craWebpackConfig.optimization.minimizer = craWebpackConfig.optimization.minimizer.filter(function(minimizer){
	return minimizer.constructor.name ==='TerserPlugin';
});
craWebpackConfig.optimization.splitChunks = {};
craWebpackConfig.optimization.runtimeChunk = false;

craWebpackConfig.plugins = [
	// new webpack.optimize.LimitChunkCountPlugin({
 //         maxChunks: 1
 //    })
 	new webpack.DefinePlugin({
		'process.env.PLATFORM': JSON.stringify(process.env.PLATFORM)
	})
];

craWebpackConfig.module.rules[2].oneOf = craWebpackConfig.module.rules[2].oneOf.filter(function(rule){
  	return rule.loader.indexOf('/node_modules/babel-loader/') > -1
});
craWebpackConfig.module.rules[2].oneOf = craWebpackConfig.module.rules[2].oneOf.map(function(rule){
	rule.options = require('../../cli.config');
  	return rule;
});

craWebpackConfig.externals = [
    nodeExternals()
];

// console.log(craWebpackConfig);die();

module.exports = craWebpackConfig;