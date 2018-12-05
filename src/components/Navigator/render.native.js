import React from 'react';

export default ($this, $props, $state, $routes, ...$extra) => {
    return $props.children;
}

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
/*

import React from 'react';
import { Switch, Route } from 'react-router';
import { Transition, TransitionGroup } from 'react-transition-group';
import TransitionView from './transitions.native/TransitionView';

import createSlideTransform from './transitions.native/slide';
import createRevealTransform from './transitions.native/reveal';
import createFlyTransform from './transitions.native/fly';



let direction = 'forward';
let transition = 'slideLeft';
let originPosition = {};

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

                                // console.log(location.pathname, transition, direction, originPosition, state);

                                const component = (<Switch location={location}>{$props.children}</Switch>);

                                if(state === 'entered' || state === 'exited')
                                {
                                    return component;
                                }

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
                                    zIndex: 1
                                };

                                if(
                                    transition === 'slideLeft'
                                    || transition === 'slideRight'
                                    || transition === 'slideUp'
                                    || transition === 'slideDown'
                                ) {
                                    transform = {
                                        ...transform,
                                        ...createSlideTransform(originPosition)
                                    };
                                }
                                else if(
                                    transition === 'flyLeft'
                                    || transition === 'flyRight'
                                    || transition === 'flyUp'
                                    || transition === 'flyDown'
                                ) {
                                    transform = {
                                        ...transform,
                                        ...createFlyTransform(originPosition)
                                    };
                                }
                                else if(
                                    transition === 'revealIn'
                                    || transition === 'revealOut'
                                ) {

                                    transform = {
                                        ...transform,
                                        ...createRevealTransform(originPosition)
                                    };
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
                                        style={{zIndex: transform[transition][direction][state].zIndex}}
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
*/
