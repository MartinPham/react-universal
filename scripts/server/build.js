process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('./webpackConfig.server');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
	if(err)
	{
		console.error(err);
	} else {
		// console.log(stats);
	}
});