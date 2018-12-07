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
                            timeout={300}
                            mountOnEnter={false}
                            unmountOnExit={false}
                        >
                            {(state) => {

                                console.log(location.pathname, transition, direction, originPosition, state);

                                const component = (
                                    <AuthProvider>
                                        <Switch location={location}>
                                            {$props.children}
                                        </Switch>
                                    </AuthProvider>
                                );

                                if(state === 'entered' || state === 'exited')
                                {
                                    return component;
                                }
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


                                // console.log(location.pathname, transition, direction, state, transform[transition][direction][state].from, transform[transition][direction][state].to);

                                // console.log(
                                //     location.pathname,
                                //     transition,
                                //     direction,
                                //     state,
                                //     originPosition,
                                //     transform[transition][direction][state]
                                // );

                                return (
                                    <TransitionView
                                        style={{
                                            zIndex: transform[transition][direction][state].zIndex,
                                            elevation: transform[transition][direction][state].elevation
                                        }}
                                        from={transform[transition][direction][state].from}
                                        to={transform[transition][direction][state].to}
                                        duration={300}
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
