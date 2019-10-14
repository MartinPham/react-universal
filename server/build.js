process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('./webpackConfig');


const compiler = webpack(webpackConfig);

console.log('[Webpack] Compiling');

const callback = (error, stats) => {
	if (error) {
		console.log('[Webpack] Errors')
		console.error(error.stack || error);
		if (error.details) {
		  	console.error(error.details);
		}
		return;
	}
	
	const info = stats.toJson();

	if (stats.hasErrors()) {
		console.log('[Webpack] Compiler errors')

		console.error(info.errors);
	} else {
		if (stats.hasWarnings()) {
			console.log('[Webpack] Compiler warnings')
			console.warn(info.warnings);
		}
	
		console.log('[Webpack] Compiled')
	}


}

if(process.argv.indexOf('--watch') > -1)
{
	compiler.watch({

	}, callback);
} else {
	compiler.run(callback);
}
