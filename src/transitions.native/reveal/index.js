import { Dimensions } from 'react-native';

export default (originPosition) => {
    let transform = {};

    const window = Dimensions.get('window');

    transform['revealIn'] = {};
    transform['revealOut'] = {};

    // console.log('creating', originPosition, originPosition.top, originPosition.left, originPosition.width, originPosition.height);

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
            elevation: 10
        },
        exiting: {
            from: {
            },
            to: {
            },
            zIndex: 1,
            elevation: 1
        }
    };

    transform['revealIn'].back = transform['revealOut'].forward = {
        entering: {
            from: {
            },
            to: {
            },
            zIndex: 1,
            elevation: 1
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
            elevation: 10
        }
    };


    // console.log('created', transform);


    return transform;
}

