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
            zIndex: 10
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
            zIndex: 1
        }
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
            zIndex: 1
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
            zIndex: 10
        }
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
            zIndex: 10
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
            zIndex: 1

        }
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
            zIndex: 1
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
            zIndex: 10

        }
    };


    return transform;
}

