const modules = {
	reveal: {
		test: '(revealIn|revealOut)',
		timeout: 500,
	},
	slide: {
		test: 'slide(Left|Right|Up|Down)',
		timeout: 500,
	},
	fly: {
		test: 'fly(Left|Right|Up|Down)',
		timeout: 500,
	},
	none: {
		test: 'none',
		timeout: 100,
	}
};


// load modules
for(let moduleId in modules)
{
	import('./' + moduleId + '/styles.scss');
	modules[moduleId].main = require('./' + moduleId).default;
}

export default modules;