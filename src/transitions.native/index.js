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

// shame... no dynamic import atm
modules.reveal.transformer = require('./reveal');
modules.slide.transformer = require('./slide');
modules.fly.transformer = require('./fly');

export default modules;