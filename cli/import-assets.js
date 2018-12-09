'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created at 16/5/15.
 * @Author Ling.
 * @Email i@zeroling.com
 *
 * Patched at 08/12/2018 by Martin Pham <i@martinpham.com>
 */

function matchImages(sourceName) {
  "use strict";

  if(typeof sourceName !=='string')
  {
  	return null;
  }

  var fileExt = sourceName.match(/\.(jpe?g|tiff?|png|svg|gif|webp)$/);
  return (fileExt || [, null])[1];
}

exports.default = function (_ref) {
  var types = _ref.types;
  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path) {
        // path.node.specifiers
        var source = path.node.source;
        if (source && source['type'] === 'StringLiteral' && matchImages(source['value'])) {
          var id = source;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = path.node.specifiers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var specifier = _step.value;

              if (specifier.type === 'ImportDefaultSpecifier') {
                id = specifier.local.name;
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if(process.env.CLI_BUILDTIME)
		  {
		  	// console.log(source, path.node);
			  require('fs').appendFileSync(__dirname + '/../.cli-imported-assets', source.value + "\n");
		  }

          path.replaceWith(types.variableDeclaration('const', [types.variableDeclarator(types.identifier(id), 
          	types.identifier(
          		'(process.env.NODE_ENV === "development")' +
				' ? ' +
				'require(\'fs\').readFileSync(__dirname + \'/' + source.value + '\')' +
				' : ' +
				'require(\'fs\').readFileSync(__dirname + \'/' + source.value.replace('../../', './') + '\')'
			)
          	// types.identifier('__dirname')
          	)]));
        }
      },
      CallExpression: function CallExpression(path) {
        var src = path.node.arguments[0] && path.node.arguments[0]['value'];
        if (src && matchImages(src)) {
          if (path.node.callee.type === 'Identifier' && path.node.callee.name === 'require') {
            // require()
            path.replaceWith(types.identifier('require(\'fs\').zzzreadFileSync(\'' + src + '\')'));
          } else if (path.node.callee.type === 'MemberExpression' && path.node.callee.property.name === 'ensure') {
            // todo require.ensure()
          }
        }
      }
    }
  };
};

module.exports = exports['default'];