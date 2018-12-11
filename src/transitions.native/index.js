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

// shame... no dynamic import atm
modules.reveal.transformer = require('./reveal');
modules.slide.transformer = require('./slide');
modules.fly.transformer = require('./fly');

export default modules;