import { Dimensions } from 'react-native';

const enteringDuration = 300;
const exitingDuration = 300;

export default (originPosition) => {
	let transform = {};
	//
	// const window = Dimensions.get('window');

	transform['fadeIn'] = {};
	transform['fadeOut'] = {};

	transform['fadeIn'].forward = transform['fadeOut'].back = {
		entering: {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			zIndex: 10,
			elevation: 10,
			duration: enteringDuration,
		},
		exiting: {
			from: {
			},
			to: {
			},
			zIndex: 1,
			elevation: 1,
			duration: exitingDuration,
		}
	};
	transform['fadeIn'].forward.entered = transform['fadeOut'].back.entered = {
		...transform['fadeIn'].forward.entering,
		from: transform['fadeIn'].forward.entering.to,
		to: transform['fadeIn'].forward.entering.to
	};
	transform['fadeIn'].forward.exited = transform['fadeOut'].back.exited = {
		...transform['fadeIn'].forward.exiting,
		from: transform['fadeIn'].forward.exiting.to,
		to: transform['fadeIn'].forward.exiting.to
	};

	transform['fadeIn'].back = transform['fadeOut'].forward = {
		entering: {
			from: {
			},
			to: {
			},
			zIndex: 1,
			elevation: 1,
			duration: enteringDuration,
		},
		exiting: {
			from: {
				opacity: 1,
			},
			to: {
				opacity: 0,
			},
			zIndex: 10,
			elevation: 10,
			duration: exitingDuration,
		}
	};
	transform['fadeIn'].back.entered = transform['fadeOut'].forward.entered = {
		...transform['fadeIn'].back.entering,
		from: transform['fadeIn'].back.entering.to,
		to: transform['fadeIn'].back.entering.to
	};
	transform['fadeIn'].back.exited = transform['fadeOut'].forward.exited = {
		...transform['fadeIn'].back.exiting,
		from: transform['fadeIn'].back.exiting.to,
		to: transform['fadeIn'].back.exiting.to
	};


	return transform;
}

