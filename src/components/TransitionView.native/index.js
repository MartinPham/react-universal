import React from "react";
import BaseComponent from 'components/Component';
import {Animated} from "react-native";

export default class TransitionView extends BaseComponent {
	/*
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
    */

	state = {};
	animatedParallel = null;

	// shouldComponentUpdate(nextProps, nextState)
	// {
	// 	return false;
	// }
	static getDerivedStateFromProps(props, state) {

        const from = props.from;
        // const to = props.to;
        const duration = props.duration;
        // const delay = props.delay;

        console.log('%%%%%%% getDerivedStateFromProps');

        const newState = {};
        if(duration > 0)
        {
	        console.log('%%%%%%% duration > 0 -> set initial transition');

		    Object.keys(from).forEach((styleName) => {
		        // console.log(styleName, 'from', from[styleName], props.to[styleName])
				if(styleName === 'transform')
				{
					Object.keys(from[styleName]).forEach((transformName) => {
						newState['transition_' + styleName + '_' + transformName]
							= new Animated.Value(from[styleName][transformName]);
					});
				} else {
					newState['transition_' + styleName] = new Animated.Value(from[styleName])
				}
		    });	   
        }

		return newState;
	}

	_setUpTransition = (from, to, duration, delay) => {
		const parallel = [];

		if(duration > 0)
		{

			console.log('%%%%%%% duration > 0 -> set up transition');

			Object.keys(from).forEach((styleName) => {
				if(styleName === 'transform')
				{
					Object.keys(from[styleName]).forEach((transformName) => {
						parallel.push(Animated.timing(this.state['transition_' + styleName + '_' + transformName], {
							delay: delay,
							toValue: to[styleName][transformName],
							duration: duration
						}));
					});
				} else {
					parallel.push(Animated.timing(this.state['transition_' + styleName], {
						delay: delay,
						toValue: to[styleName],
						duration: duration
					}));
				}
			});
		}



		if(duration > 0 && parallel.length > 0)
		{
			console.log('%%%%%%% duration > 0 && parallel > 0 -> start transition');

			if(this.animatedParallel !== null)
			{
				// this.animatedParallel.stop();

				console.log('%%%%%%% animation parallel is running -> skip');
				return;
			}

			this.animatedParallel = Animated.parallel(parallel).start(() => {
				// callback
				this.animatedParallel = null;
			});
		}
	};

    componentDidMount() {

        const from = this.props.from;
        const to = this.props.to;
        const duration = this.props.duration;
		const delay = this.props.delay;

        console.log('%%%%%%% componentDidMount');

		this._setUpTransition(from, to, duration, delay);
    }

    componentDidUpdate() {
        const from = this.props.from;
        const to = this.props.to;
        const duration = this.props.duration;
		const delay = this.props.delay;


        console.log('%%%%%%% componentDidUpdate');



		this._setUpTransition(from, to, duration, delay);
    }

    render() {
        const from = this.props.from;
        // const to = this.props.to;
        const duration = this.props.duration;
		// const delay = this.props.delay;




        let style = {
            ...this.props.style,
            // elevation: 3,
        };

		// let transform = [
		// ];

		if(duration > 0)
		{
			console.log('%%%%%%% duration > 0 -> bind transition');

			Object.keys(from).forEach((styleName) => {
				if(styleName === 'transform')
				{
					style[styleName] = style[styleName] || [];
					Object.keys(from[styleName]).forEach((transformName) => {
						// transform.push({
						style[styleName].push({
							[transformName] : this.state['transition_' + styleName + '_' + transformName]
						});
					});
				} else {
					style[styleName] = this.state['transition_' + styleName];
				}

			});
		}

		console.log('%%%%%%% render', this.state, style);
        return (
            <Animated.View                 // Special animatable View
                style={style}
				// transform={transform}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}