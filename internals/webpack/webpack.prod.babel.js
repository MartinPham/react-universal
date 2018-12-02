// Important modules this config uses
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = require('./webpack.base.babel')({
	
	target: 'web', // Make web variables accessible to webpack, e.g. window
	mode: 'production',

	// In production, we skip all hot-reloading stuff
	entry: [path.join(process.cwd(), 'src/index.js')],

	// Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].chunk.js'
	},

	optimization: {
		minimize: true,
		// minimizer: [
		//   new UglifyJsPlugin({

		//   })
		// ],
		nodeEnv: 'production',
		sideEffects: true,
		concatenateModules: true,
		splitChunks: { chunks: 'all' },
		runtimeChunk: true,
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

		// Minify and optimize the index.html
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
			inject: true,
		}),

		new ManifestPlugin({
	      	fileName: 'asset-manifest.json',
	      	publicPath: '/',
	    }),
		

		// Put it in the end to capture all the HtmlWebpackPlugin's
		// assets manipulations and do leak its manipulations to HtmlWebpackPlugin
// 		new OfflinePlugin({
// 			relativePaths: false,
// 			publicPath: '/',
// 			appShell: '/',
// 
// 			// No need to cache .htaccess. See http://mxs.is/googmp,
// 			// this is applied before any match in `caches` section
// 			excludes: ['.htaccess'],
// 
// 			caches: {
// 				main: [':rest:'],
// 
// 				// All chunks marked as `additional`, loaded after main section
// 				// and do not prevent SW to install. Change to `optional` if
// 				// do not want them to be preloaded at all (cached only when first loaded)
// 				additional: ['*.chunk.js'],
// 			},
// 
// 			// Removes warning for about `additional` section usage
// 			safeToUseOptionalCaches: true,
// 		}),

		new WebpackPwaManifest({
			name: 'PAM',
			short_name: 'PAM',
			description: 'PAM',
			background_color: '#fafafa',
			theme_color: '#b1624d',
			icons: [
				{
					src: path.resolve('src/images/icon-512x512.png'),
					sizes: [72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512],
				},
			],
		}),

		new HashedModuleIdsPlugin({
			hashFunction: 'sha256',
			hashDigest: 'hex',
			hashDigestLength: 20,
		}),
	],

	performance: {
		assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
	},
});
