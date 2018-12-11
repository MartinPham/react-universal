import { Dimensions } from 'react-native';

const enteringDuration = 300;
const exitingDuration = 300;

export default (originPosition) => {
	let transform = {};

	const window = Dimensions.get('window');

	transform['slideLeft'] = {};
	transform['slideRight'] = {};

	transform['slideLeft'].forward = transform['slideRight'].back = {
		entering: {
			from: {
				opacity: 0,
				left: window.width
			},
			to: {
				opacity: 1,
				left: 0
			},
			zIndex: 10,
			elevation: 10,
			duration: enteringDuration,
		},
		exiting: {
			from: {
				opacity: 1,
				left: 0
			},
			to: {
				opacity: 0,
				left: -window.width
			},
			zIndex: 1,
			elevation: 1,
			duration: exitingDuration,
		}
	};
	transform['slideLeft'].forward.entered = transform['slideRight'].back.entered = {
		...transform['slideLeft'].forward.entering,
		from: transform['slideLeft'].forward.entering.to,
		to: transform['slideLeft'].forward.entering.to
	};
	transform['slideLeft'].forward.exited = transform['slideRight'].back.exited = {
		...transform['slideLeft'].forward.exiting,
		from: transform['slideLeft'].forward.exiting.to,
		to: transform['slideLeft'].forward.exiting.to
	};

	transform['slideLeft'].back = transform['slideRight'].forward = {
		entering: {
			from: {
				opacity: 0,
				left: -window.width
			},
			to: {
				opacity: 1,
				left: 0
			},
			zIndex: 10,
			elevation: 10,
			duration: enteringDuration,
		},
		exiting: {
			from: {
				opacity: 1,
				left: 0
			},
			to: {
				opacity: 0,
				left: window.width
			},
			zIndex: 1,
			elevation: 1,
			duration: exitingDuration,
		}
	};
	transform['slideLeft'].back.entered = transform['slideRight'].forward.entered = {
		...transform['slideLeft'].back.entering,
		from: transform['slideLeft'].back.entering.to,
		to: transform['slideLeft'].back.entering.to
	};
	transform['slideLeft'].back.exited = transform['slideRight'].forward.exited = {
		...transform['slideLeft'].back.exiting,
		from: transform['slideLeft'].back.exiting.to,
		to: transform['slideLeft'].back.exiting.to
	};









	transform['slideUp'] = {};
	transform['slideDown'] = {};

	transform['slideUp'].forward = transform['slideDown'].back = {
		entering: {
			from: {
				opacity: 0,
				top: window.height
			},
			to: {
				opacity: 1,
				top: 0
			},
			zIndex: 10,
			duration: enteringDuration,
		},
		exiting: {
			from: {
				opacity: 1,
				top: 0
			},
			to: {
				opacity: 0,
				top: -window.height
			},
			zIndex: 1,
			duration: exitingDuration,

		}
	};
	transform['slideUp'].forward.entered = transform['slideDown'].back.entered = {
		...transform['slideUp'].forward.entering,
		from: transform['slideUp'].forward.entering.to,
		to: transform['slideUp'].forward.entering.to
	};
	transform['slideUp'].forward.exited = transform['slideDown'].back.exited = {
		...transform['slideUp'].forward.exiting,
		from: transform['slideUp'].forward.exiting.to,
		to: transform['slideUp'].forward.exiting.to
	};	

	transform['slideUp'].back = transform['slideDown'].forward = {
		entering: {
			from: {
				opacity: 0,
				top: -window.height
			},
			to: {
				opacity: 1,
				top: 0
			},
			zIndex: 10,
			duration: enteringDuration,
		},
		exiting: {
			from: {
				opacity: 0,
				top: 0
			},
			to: {
				opacity: 1,
				top: window.height
			},
			zIndex: 1,
			duration: exitingDuration,

		}
	};
	transform['slideUp'].back.entered = transform['slideDown'].forward.entered = {
		...transform['slideUp'].back.entering,
		from: transform['slideUp'].back.entering.to,
		to: transform['slideUp'].back.entering.to
	};
	transform['slideUp'].back.exited = transform['slideDown'].forward.exited = {
		...transform['slideUp'].back.exiting,
		from: transform['slideUp'].back.exiting.to,
		to: transform['slideUp'].back.exiting.to
	};


	return transform;
}

