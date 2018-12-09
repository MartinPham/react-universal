// THIS FILE IS FOR CLI

const resolvePath = require('babel-plugin-module-resolver').resolvePath;

module.exports = {
	babelrc: false,
    configFile: false,
    // cacheDirectory: false,
    // cacheCompression: false,    
	// cache: false,
	ignore: [/\/(build|node_modules)\//],
	presets: [
		[
			'@babel/preset-env',
			{ 
				targets: { 
					node: 'current' 
				} 
			}
		], 
		'@babel/preset-react'
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-proposal-export-default-from',
		[
			'@babel/plugin-transform-react-jsx', {
				pragma: 'React',
				pragmaFrag: 'React.Fragment'
			}
		],
		'./cli/import-assets',
		[
			'module-resolver',
			{
				'root': './src',
				'alias': {
					// '(.+)': (a) => {
					// 	console.log(a)
					// }, // different react
					'^react-redux$': 'ink-redux', // different redux
					'^react-frontload$': './cli/react-frontload', // different react-frontload
					'^react-router$': 'ink-router', // different redux
					'^react$': './cli/react', // different react
					// '^(.*)\.(png|jpg|jpeg|gif)$': './cli/noop', // no image
					'^(.*).(css|scss)$': './cli/noop', // no css
					'^transitions$': './src/transitions.cli', // different react
					'^components/Component$': './src/components/Component.cli', // different Component
					// '\.\/render': './render.cli', // different render - not working
					'^pages/(.+)/async$': './src/pages/\\1', // ignore async component
					'^utils/storage$': './src/utils/storage.cli', // ignore async component
				}
				
				,resolvePath(sourcePath, currentFile, opts) {

			        let path = resolvePath(sourcePath, currentFile, opts);

			        if(sourcePath === './render') // manual fix
			        {
			        	path = './render.cli';
			        }
			        // console.log('>>> resolvePath ', sourcePath, currentFile, opts, ' == ', path);

			        return path;
			    }
			}
		],


	]
};