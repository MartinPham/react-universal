process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('./webpackConfig');


const compiler = webpack(webpackConfig);

console.log('[Webpack][client] Compiling');

const callback = (error, stats) => {
	if (error) {
		console.log('[Webpack][client] Errors')
		console.error(error.stack || error);
		if (error.details) {
		  	console.error(error.details);
		}
		return;
	}
	
	const info = stats.toJson();

	if (stats.hasErrors()) {
		console.log('[Webpack][client] Compiler errors')

		console.error(info.errors);
	} else {
		if (stats.hasWarnings()) {
			console.log('[Webpack][client] Compiler warnings')
			console.warn(info.warnings);
		}
	
		console.log('[Webpack][client] Compiled')
	}


}

if(process.argv.indexOf('--watch') > -1)
{
	compiler.watch({

	}, callback);
} else {
	compiler.run(callback);
}
