

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
import { Switch, Route } from 'react-router';
import { Transition, TransitionGroup } from 'react-transition-group';
import TransitionView from './transitions.native/TransitionView';

import createSlideTransform from './transitions.native/slide';



let direction = 'forward';
let transition = 'slideLeft';

export default ($this, $props, $state, $routes, ...$extra) => {
    direction = $props.direction;
    transition = $props.transition;

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

                                const component = (<Switch location={location}>{$props.children}</Switch>);

                                if(state === 'entered' || state === 'exited')
                                {
                                    return component;
                                }

                                let zIndex = 1;

                                if(state === 'entering')
                                {
                                    zIndex = 10;
                                }

                                let transform = {};
                                transform[transition] = {};
                                transform[transition][direction] = {};
                                transform[transition][direction][state] = {
                                    from: {},
                                    to: {}
                                };

                                if(
                                    transition === 'slideLeft'
                                    || transition === 'slideRight'
                                    || transition === 'slideUp'
                                    || transition === 'slideDown'
                                ) {
                                    transform = createSlideTransform();
                                }


                                // console.log(location.pathname, transition, direction, state, transform[transition][direction][state].from, transform[transition][direction][state].to);

                                // console.log(location.pathname, transition, direction, state);
                                return (
                                    <TransitionView
                                        style={{zIndex}}
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
