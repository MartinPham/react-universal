import { Dimensions } from 'react-native';

export default (originPosition) => {
    let transform = {};

    const window = Dimensions.get('window');

    transform['flyLeft'] = {};
    transform['flyRight'] = {};

    transform['flyLeft'].forward = transform['flyRight'].back = {
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
            elevation: 10
        },
        exiting: {
            from: {
                opacity: 1,
                left: 0,
            },
            to: {
                opacity: 0,
                left: -window.width * 0.2
            },
            zIndex: 1,
            elevation: 1
        }
    };
    transform['flyLeft'].forward.entered = transform['flyRight'].back.entered = {
		...transform['flyLeft'].forward.entering,
		from: transform['flyLeft'].forward.entering.to,
		to: transform['flyLeft'].forward.entering.to
	};
	transform['flyLeft'].forward.exited = transform['flyRight'].back.exited = {
		...transform['flyLeft'].forward.exiting,
		from: transform['flyLeft'].forward.exiting.to,
		to: transform['flyLeft'].forward.exiting.to
	};

    transform['flyLeft'].back = transform['flyRight'].forward = {
        entering: {
            from: {
                opacity: 0,
                left: -window.width * 0.2
            },
            to: {
                opacity: 1,
                left: 0,
            },
            zIndex: 1,
            elevation: 1
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
            zIndex: 10,
            elevation: 10
        }
    };
    transform['flyLeft'].back.entered = transform['flyRight'].forward.entered = {
		...transform['flyLeft'].back.entering,
		from: transform['flyLeft'].back.entering.to,
		to: transform['flyLeft'].back.entering.to
	};
	transform['flyLeft'].back.exited = transform['flyRight'].forward.exited = {
		...transform['flyLeft'].back.exiting,
		from: transform['flyLeft'].back.exiting.to,
		to: transform['flyLeft'].back.exiting.to
	};












    transform['flyUp'] = {};
    transform['flyDown'] = {};

    transform['flyUp'].forward = transform['flyDown'].back = {
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
            elevation: 10
        },
        exiting: {
            from: {
                opacity: 1,
                top: 0
            },
            to: {
                opacity: 0,
                top: window.height * 0.1
            },
            zIndex: 1,
            elevation: 1

        }
    };

	transform['flyUp'].forward.entered = transform['flyDown'].back.entered = {
		...transform['flyUp'].forward.entering,
		from: transform['flyUp'].forward.entering.to,
		to: transform['flyUp'].forward.entering.to
	};
	transform['flyUp'].forward.exited = transform['flyDown'].back.exited = {
		...transform['flyUp'].forward.exiting,
		from: transform['flyUp'].forward.exiting.to,
		to: transform['flyUp'].forward.exiting.to
	};	

    transform['flyUp'].back = transform['flyDown'].forward = {
        entering: {
            from: {
                opacity: 0,
                top: window.height * 0.1
            },
            to: {
                opacity: 1,
                top: 0
            },
            zIndex: 1,
            elevation: 1
        },
        exiting: {
            from: {
                opacity: 1,
                top: 0
            },
            to: {
                opacity: 0,
                top: window.height
            },
            zIndex: 10,
            elevation: 10

        }
    };
    transform['flyUp'].back.entered = transform['flyDown'].forward.entered = {
		...transform['flyUp'].back.entering,
		from: transform['flyUp'].back.entering.to,
		to: transform['flyUp'].back.entering.to
	};
	transform['flyUp'].back.exited = transform['flyDown'].forward.exited = {
		...transform['flyUp'].back.exiting,
		from: transform['flyUp'].back.exiting.to,
		to: transform['flyUp'].back.exiting.to
	};


    return transform;
}

