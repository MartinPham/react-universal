// THIS FILE IS FOR REACT-NATIVE


module.exports = function(api) {
	api.cache(false);

	if(process.env && process.env.NODE_ENV ==='cli')
	{
		// avoid override cli config
		return {};
	}

	return {
		presets: ['babel-preset-expo'],
		plugins: [
            [
                "module-resolver",
                {
                	"root": "./src",
                    "alias": {
						"^pages/(.+)/async$": "./src/pages/\\1", // ignore async component
						"^styles$": "styles.native", // different style
						"^render$": "render.native", // different render
						"^utils/storage$": "./src/utils/storage.native", // different storage
						"^utils/reactotron$": "./src/utils/reactotron.native" // different storage
                    }
                }
            ],
		]
	};
};
