import React from "react";
import BaseComponent from 'components/Component';
import {Animated} from "react-native";

export default class TransitionView extends BaseComponent {
    constructor(props)
    {
        super(props);

        const from = props.from;
        const to = props.to;
        const duration = props.duration;

        console.log('%%%%%%% constructor');

        // const from = props.from;
        // const to = props.to;
        // const duration = props.duration;

        this.state = {

        };

     

        this.animatedParallel = null;
    }

	// shouldComponentUpdate(nextProps, nextState)
	// {
	// 	return false;
	// }
	static getDerivedStateFromProps(props, state) {

        const from = props.from;
        const to = props.to;
        const duration = props.duration;

        console.log('%%%%%%% getDerivedStateFromProps');

        const newState = {};
        if(duration > 0)
        {
	        console.log('%%%%%%% duration > 0 -> set initial transition');

		    Object.keys(from).forEach((styleName) => {
		        // console.log(styleName, 'from', from[styleName], props.to[styleName])
		        newState['transition_' + styleName] = new Animated.Value(from[styleName])  // Initial value for opacity: 0
		    });	   
        }

		return newState;
	}

    componentDidMount() {

        const from = this.props.from;
        const to = this.props.to;
        const duration = this.props.duration;

        console.log('%%%%%%% componentDidMount');


    }

    componentDidUpdate() {
        const from = this.props.from;
        const to = this.props.to;
        const duration = this.props.duration;


        console.log('%%%%%%% componentDidUpdate');


        const parallel = [];

        if(duration > 0)
        {

        	console.log('%%%%%%% duration > 0 -> set up transition');

	        Object.keys(from).forEach((styleName) => {
	            parallel.push(Animated.timing(this.state['transition_' + styleName], {
	                toValue: to[styleName],
	                duration: duration
	            }))
	        });	
        }



        if(duration > 0 && parallel.length > 0)
        {
        	console.log('%%%%%%% duration > 0 && parallel > 0 -> start transition');

        	if(this.animatedParallel !== null)
        	{
        		// this.animatedParallel.stop();
        		return;
        	}

	        this.animatedParallel = Animated.parallel(parallel).start(() => {
	            // callback
	            this.animatedParallel = null;
	        });
        }
    }

    render() {
        const from = this.props.from;
        const to = this.props.to;
        const duration = this.props.duration;


        console.log('%%%%%%% render');

        let style = {
            ...this.props.style,
            // elevation: 3,
            position: 'absolute',
            backgroundColor: '#ffffff',
            height: '100%',
            width: '100%',
        };


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