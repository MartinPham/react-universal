const resolvePath = require('babel-plugin-module-resolver').resolvePath;
 
require('@babel/polyfill');
require('@babel/register')(require('../../cli.config'));


require('../../src/index.cli');