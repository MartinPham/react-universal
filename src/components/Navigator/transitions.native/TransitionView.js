import React from "react";
import {Animated} from "react-native";

export default class TransitionView extends React.Component {
    constructor(props)
    {
        super(props);

        const from = props.from;

        this.state = {

        };

        Object.keys(from).forEach((styleName) => {
            // console.log(styleName, 'from', from[styleName], props.to[styleName])
            this.state['transition_' + styleName] = new Animated.Value(from[styleName])  // Initial value for opacity: 0
        });


    }


    componentDidMount() {
        const parallel = [];

        const from = this.props.from;

        Object.keys(from).forEach((styleName) => {
            parallel.push(Animated.timing(this.state['transition_' + styleName], {
                toValue: this.props.to[styleName],
                duration: this.props.duration
            }))
        });

        Animated.parallel(parallel).start(() => {
            // callback
        });
    }

    render() {

        let style = {
            ...this.props.style,
            // elevation: 3,
            position: 'absolute',
            backgroundColor: '#ffffff',
            height: '100%',
            width: '100%',
        };

        const from = this.props.from;

        Object.keys(from).forEach((styleName) => {
            style[styleName] = this.state['transition_' + styleName];
        });

        return (
            <Animated.View                 // Special animatable View
                style={style}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}