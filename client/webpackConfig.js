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


module.exports = webpackConfig