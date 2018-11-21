const orgConfigFile = 'react-scripts/config/webpack.config.prod';

const config = require(orgConfigFile);
delete require.cache[require.resolve(orgConfigFile)];

// require.cache = {};

const path = require('path');
const fs = require('fs-extra');
const paths = require('react-scripts/config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const nodeExternals = require('webpack-node-externals');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};


paths.appServerJs = resolveModule(resolveApp, 'src/server');
// paths.appServerBuild = paths.appBuild;
paths.appServerBuild = resolveApp('server-build');



config.target = 'node';
config.entry = [paths.appServerJs];
config.output.path = paths.appServerBuild;
config.output.filename = 'index.js';
config.output.chunkFilename = 'js/[name].[chunkhash:8].chunk.js';
// config.output.library = 'server';
// config.output.libraryExport = 'default';
config.output.libraryTarget = 'commonjs2';

// delete config.optimization.splitChunks;
delete config.optimization.runtimeChunk;
config.plugins = config.plugins.filter(function(plugin){
  return ['MiniCssExtractPlugin'].indexOf(plugin.constructor.name) > -1;
});
// config.module.rules.forEach(function(rule){
//   if(rule.oneOf)
//   {
//     rule.oneOf.forEach(function(subRule){
//       if(subRule.loader.indexOf('/node_modules/babel-loader/') > -1)
//       {
//         subRule.options.babelrc = true;
//       }
//     });
//   }
// });


// config.plugins.push(new LoadablePlugin());

config.externals = [
    nodeExternals()
];

module.exports = config;