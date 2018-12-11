import { Dimensions } from 'react-native';

const enteringDuration = 300;
const exitingDuration = 300;

export default (originPosition) => {
    let transform = {};

    const window = Dimensions.get('window');

    transform['revealIn'] = {};
    transform['revealOut'] = {};

    // console.log('creating reveal', );

    transform['revealIn'].forward = transform['revealOut'].back = {
        entering: {
            from: {
                top: originPosition.top,
                left: originPosition.left,
                width: originPosition.width,
                height: originPosition.height
            },
            to: {
                top: 0,
                left: 0,
                width: window.width,
                height: window.height
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
    transform['revealIn'].forward.entered = transform['revealOut'].back.entered = {
		...transform['revealIn'].forward.entering,
		from: transform['revealIn'].forward.entering.to,
		to: transform['revealIn'].forward.entering.to
	};
	transform['revealIn'].forward.exited = transform['revealOut'].back.exited = {
		...transform['revealIn'].forward.exiting,
		from: transform['revealIn'].forward.exiting.to,
		to: transform['revealIn'].forward.exiting.to
	};


	

    transform['revealIn'].back = transform['revealOut'].forward = {
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
                top: 0,
                left: 0,
                width: window.width,
                height: window.height
            },
            to: {
                top: originPosition.top,
                left: originPosition.left,
                width: originPosition.width,
                height: originPosition.height
            },
            zIndex: 10,
            elevation: 10,
			duration: exitingDuration,
        }
    };
    transform['revealIn'].back.entered = transform['revealOut'].forward.entered = {
		...transform['revealIn'].back.entering,
		from: transform['revealIn'].back.entering.to,
		to: transform['revealIn'].back.entering.to
	};
	transform['revealIn'].back.exited = transform['revealOut'].forward.exited = {
		...transform['revealIn'].back.exiting,
		from: transform['revealIn'].back.exiting.to,
		to: transform['revealIn'].back.exiting.to
	};


    // console.log('created', transform);


    return transform;
}

