/*
import React from 'react';
import { Switch } from 'react-router';

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <Switch>
            {$props.children}
        </Switch>
    );
}
*/


import React from 'react';
import {BackHandler} from 'react-native';
import { Switch, Route } from 'react-router';
import { Transition, TransitionGroup } from 'react-transition-group';
import TransitionView from 'components/TransitionView.native';

import AuthProvider from 'components/AuthProvider';

import transitionModules from 'transitions.native';



let direction = 'forward';
let transition = 'slideLeft';
let originPosition = {};

export const componentDidMount = ($this, $props, $state, $routes, ...$extra) => {
    BackHandler.addEventListener('hardwareBackPress', $this.handleBackPress);
}

export const componentWillUnmount = ($this, $props, $state, $routes, ...$extra) => {
    BackHandler.removeEventListener('hardwareBackPress', $this.handleBackPress);
}


export default ($this, $props, $state, $routes, ...$extra) => {
    direction = $props.direction;
    transition = $props.transition;
    originPosition = $props.originPosition && $props.originPosition.toJS() || {};

    return (
        <Route
            render={({ location }) => {
                return (
                    <TransitionGroup component={null} className={`pageTransition ${$props.transition}-${$props.direction}`}>
                        <Transition
                            key={location.key}
                            timeout={200}
                            mountOnEnter={false}
                            unmountOnExit={false}
                        >
                            {(state) => {
                                // console.log('@@@@@@@@', location.pathname, transition, direction, state)

                                // console.log(location.pathname, transition, direction, originPosition, state);

                                const component = (
                                    // <AuthProvider>
                                        <Switch location={location}>
                                            {$props.children}
                                        </Switch>
                                    // </AuthProvider>
                                );

                                const transitionProps = {};

                                // if(state === 'entered' || state === 'exited')
                                // {
                                // 	console.log('@@@@@@@@ ====> render component');
                                //     return component;
                                // }
                                // if(state === 'entered')
                                // {
                                //     state = 'entering';
                                // } else if(state === 'exited')
                                // {
                                //     return component;
                                // }
                                // let zIndex = 1;
                                //
                                // if(state === 'entering')
                                // {
                                //     zIndex = 10;
                                // }

								// if(state !== 'entered' && state !== 'exited')
        //                         {

	                                let transform = {};
	                                transform[transition] = {};
	                                transform[transition][direction] = {};
	                                transform[transition][direction][state] = {
	                                    from: {},
	                                    to: {},
	                                    zIndex: 1,
	                                    elevation: 1
	                                };

	                                for(let moduleId in transitionModules)
	                                {
	                                    const module = transitionModules[moduleId];


	                                    if((new RegExp(module.test)).test(transition))
	                                    {
	                                        
	                                        transform = {
	                                            ...transform,
	                                            ...module.transformer.default(originPosition)
	                                        };

	                                        break;
	                                    }
	                                }

	                                transitionProps.style = {
                                            zIndex: transform[transition][direction][state].zIndex,
                                            elevation: transform[transition][direction][state].elevation
                                        };

	                                transitionProps.from = transform[transition][direction][state].from;

	                                transitionProps.to = transform[transition][direction][state].to;

	                                transitionProps.duration = 200;
                                // }

								if(state === 'entered' || state === 'exited')
								{
									transitionProps.duration = 0;
									// delete transitionProps.from;
								}

                                // console.log('@@@@@@@@', location.pathname, transition, direction, state, transitionProps)

                                return (
                                    <TransitionView
                                        {...transitionProps}
                                    >
                                        {component}
                                    </TransitionView>
                                );

                            }}


                        </Transition>
                    </TransitionGroup>
                );
            }}
        />
    );
}
