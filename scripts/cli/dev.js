process.env.NODE_ENV = 'development';

require('@babel/polyfill');
require('@babel/register')(require('../../cli.config'));


require('../../src/index.cli');