module.exports = {
	babel: {
		loaderOptions: (babelLoaderOptions, { env, paths }) => { 
			if(babelLoaderOptions.plugins)
			{
				babelLoaderOptions.plugins.push('@loadable/babel-plugin')
			}
			return babelLoaderOptions; 
		}
	},
	webpack: {
		configure: (webpackConfig, { env, paths }) => { 
			const LoadablePlugin = require('@loadable/webpack-plugin')

			webpackConfig.plugins.push(new LoadablePlugin())
			return webpackConfig;
		}
	}
};