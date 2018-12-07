// THIS FILE IS FOR CLI

const resolvePath = require('babel-plugin-module-resolver').resolvePath;

module.exports = {
	cache: false,
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
		'@babel/plugin-proposal-export-default-from',
		[
			'@babel/plugin-transform-react-jsx', {
				pragma: 'React',
				pragmaFrag: 'React.Fragment'
			}
		],
		[
			'module-resolver',
			{
				'root': './src',
				'alias': {
					// '(.+)': (a) => {
					// 	console.log(a)
					// }, // different react
					'^react-redux$': 'ink-redux', // different redux
					'^react-router$': 'ink-router', // different redux
					'^react$': './cli/react', // different react
					'^transitions$': './src/transitions.cli', // different react
					'^components/Component$': './src/components/Component.cli', // different Component
					// '\.\/render': './render.cli', // different render
					'^pages/(.+)/async$': './src/pages/\\1', // ignore async component
					'^utils/storage$': './src/utils/storage.cli', // ignore async component
				}
				
				,resolvePath(sourcePath, currentFile, opts) {

			        let path = resolvePath(sourcePath, currentFile, opts);


			        if(sourcePath === './render')
			        {
			        	path = './render.cli';
			        }
			        // console.log('>>>', sourcePath, currentFile, opts, ' == ', path);

			        return path;
			    }
			}
		],
	]
};