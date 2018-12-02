// Important modules this config uses
const path = require('path');
// const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = require('./webpack.base.babel')({
	mode: 'production',
	target: 'node',

	// In production, we skip all hot-reloading stuff
	entry: [path.join(process.cwd(), 'src/server.js')],


	// Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
	output: {
		path: path.resolve(process.cwd(), 'build-server'),
		publicPath: '/',
		filename: 'index.js',
		chunkFilename: '[name].[chunkhash].chunk.js',
		libraryTarget: 'umd'
	},

	optimization: {
		// minimize: true,
		// minimizer: [
		//   new UglifyJsPlugin({

		//   })
		// ],
		// nodeEnv: 'production',
		// sideEffects: true,
		// concatenateModules: true,
	    splitChunks: {
	      chunks: 'all',
	      name: false,
	    },
		// runtimeChunk: true,
	},

	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			// filename: "[name].css",
			// chunkFilename: "[id].css"
			filename: '[name].[chunkhash].css',
			chunkFilename: '[name].[chunkhash].chunk.css',
		}),

	 //    new ManifestPlugin({
	 //      fileName: 'asset-manifest.json',
	 //      publicPath: '/',
	 //    }),
		// 

		new HashedModuleIdsPlugin({
			hashFunction: 'sha256',
			hashDigest: 'hex',
			hashDigestLength: 20,
		}),
	],

	performance: {
		assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
	},

	externals: [
		nodeExternals()
	]
});
