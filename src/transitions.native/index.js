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
	},
	fade: {
		test: 'fade(In|Out)',
		timeout: 150,
	}
};

// shame... no dynamic import atm
modules.reveal.transformer = require('./reveal');
modules.slide.transformer = require('./slide');
modules.fly.transformer = require('./fly');
modules.fade.transformer = require('./fade');

export default modules;