const modules = {
	reveal: {
		test: '(revealIn|revealOut)',
		timeout: 150,
	},
	slide: {
		test: 'slide(Left|Right|Up|Down)',
		timeout: 150,
	},
	fly: {
		test: 'fly(Left|Right|Up|Down)',
		timeout: 150,
	}
};


// load modules
for(let moduleId in modules)
{
	import('./' + moduleId + '/styles.scss');
	modules[moduleId].styleInjector = require('./' + moduleId);
}

export default modules;