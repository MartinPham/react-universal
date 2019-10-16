process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('./webpackConfig');


const compiler = webpack(webpackConfig);

console.log('[Webpack][server] Compiling');

const callback = (error, stats) => {
	if (error) {
		console.log('[Webpack][server] Errors')
		console.error(error.stack || error);
		if (error.details) {
		  	console.error(error.details);
		}
		return;
	}
	
	const info = stats.toJson();

	if (stats.hasErrors()) {
		console.log('[Webpack][server] Compiler errors')

		console.error(info.errors);
	} else {
		if (stats.hasWarnings()) {
			console.log('[Webpack][server] Compiler warnings')
			console.warn(info.warnings);
		}
	
		console.log('[Webpack][server] Compiled')
	}


}

if(process.argv.indexOf('--watch') > -1)
{
	compiler.watch({

	}, callback);
} else {
	compiler.run(callback);
}
