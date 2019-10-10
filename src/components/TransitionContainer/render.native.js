import React from "react";
import {Animated} from "react-native";

export const getDerivedStateFromProps = (props, state) => {

        const from = props.from;
        // const to = props.to;
        const duration = props.duration;
        // const delay = props.delay;

        // console.log('%%%%%%% getDerivedStateFromProps');

        const newState = {};
        if(duration > 0)
        {
	        // console.log('%%%%%%% duration > 0 -> set initial transition');

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

const _setUpTransition = ($this, $props, $state, from, to, duration, delay) => {
		const parallel = [];

		if(duration > 0)
		{

			// console.log('%%%%%%% duration > 0 -> set up transition');

			Object.keys(from).forEach((styleName) => {
				if(styleName === 'transform')
				{
					Object.keys(from[styleName]).forEach((transformName) => {
						parallel.push(Animated.timing($state['transition_' + styleName + '_' + transformName], {
							delay: delay,
							toValue: to[styleName][transformName],
							duration: duration
						}));
					});
				} else {
					parallel.push(Animated.timing($state['transition_' + styleName], {
						delay: delay,
						toValue: to[styleName],
						duration: duration
					}));
				}
			});
		}



		if(duration > 0 && parallel.length > 0)
		{
			// console.log('%%%%%%% duration > 0 && parallel > 0 -> start transition');

			if($this.animatedParallel !== null)
			{
				// this.animatedParallel.stop();

				// console.log('%%%%%%% animation parallel is running -> skip');
				return;
			}

			$this.animatedParallel = Animated.parallel(parallel).start(() => {
				// callback
				$this.animatedParallel = null;
			});
		}
	};

export const componentDidMount = ($this, $props, $state) => {

        const from = $props.from;
        const to = $props.to;
        const duration = $props.duration;
		const delay = $props.delay;

        // console.log('%%%%%%% componentDidMount');

		_setUpTransition($this, $props, $state, from, to, duration, delay);
    }

export const componentDidUpdate = ($this, $props, $state) => {
        const from = $props.from;
        const to = $props.to;
        const duration = $props.duration;
		const delay = $props.delay;


        // console.log('%%%%%%% componentDidUpdate');



		_setUpTransition($this, $props, $state, from, to, duration, delay);
    }

export default ($this, $props, $state) => {
        const from = $props.from;
        // const to = $props.to;
        const duration = $props.duration;
		// const delay = $props.delay;




        let style = {
            ...$props.style,
            // elevation: 3,
        };

		// let transform = [
		// ];

		if(duration > 0)
		{
			// console.log('%%%%%%% duration > 0 -> bind transition');

			Object.keys(from).forEach((styleName) => {
				if(styleName === 'transform')
				{
					style[styleName] = style[styleName] || [];
					Object.keys(from[styleName]).forEach((transformName) => {
						// transform.push({
						style[styleName].push({
							[transformName] : $state['transition_' + styleName + '_' + transformName]
						});
					});
				} else {
					style[styleName] = $state['transition_' + styleName];
				}

			});
		}

		// console.log('%%%%%%% render', this.state, style);
        return (
            <Animated.View                 // Special animatable View
                style={style}
				// transform={transform}
            >
                {$props.children}
            </Animated.View>
        );
    }
