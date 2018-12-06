const modules = {
	reveal: {
		test: '(revealIn|revealOut)'
	},
	slide: {
		test: 'slide(Left|Right|Up|Down)'
	},
	fly: {
		test: 'fly(Left|Right|Up|Down)'
	}
};


// load modules
for(let moduleId in modules)
{
	import('./' + moduleId + '/styles.scss');
	modules[moduleId].styleInjector = require('./' + moduleId);
}

export default modules;