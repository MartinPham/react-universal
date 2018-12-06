import { Dimensions } from 'react-native';

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
            elevation: 10
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
            elevation: 1
        }
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
            elevation: 10
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
            elevation: 1
        }
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
            zIndex: 10
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
            zIndex: 1

        }
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
            zIndex: 10
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
            zIndex: 1

        }
    };


    return transform;
}

