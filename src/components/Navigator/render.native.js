

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
import { Animated, Dimensions } from 'react-native';

class AnimatedView extends React.Component {
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
            elevation: 3,
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

                                const window = Dimensions.get('window');

                                let transform = {};


                                if(
                                    transition === 'slideLeft'
                                    || transition === 'slideRight'
                                )
                                {

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
                                            }
                                        },
                                        exiting: {
                                            from: {
                                                opacity: 1,
                                                left: 0
                                            },
                                            to: {
                                                opacity: 0,
                                                left: -window.width
                                            }
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
                                            }
                                        },
                                        exiting: {
                                            from: {
                                                opacity: 1,
                                                left: 0
                                            },
                                            to: {
                                                opacity: 0,
                                                left: window.width
                                            }
                                        }
                                    };
                                } else if(
                                    transition === 'slideUp'
                                    || transition === 'slideDown'
                                )
                                {


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
                                            }
                                        },
                                        exiting: {
                                            from: {
                                                opacity: 1,
                                                top: 0
                                            },
                                            to: {
                                                opacity: 0,
                                                top: -window.height
                                            }

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
                                            }
                                        },
                                        exiting: {
                                            from: {
                                                opacity: 0,
                                                top: 0
                                            },
                                            to: {
                                                opacity: 1,
                                                top: window.height
                                            }

                                        }
                                    };
                                }



                                // console.log(location.pathname, transition, direction, state, transform[transition][direction][state].from, transform[transition][direction][state].to);

                                console.log(location.pathname, transition, direction, state);
                                return (
                                    <AnimatedView
                                        style={{zIndex}}
                                        from={transform[transition][direction][state].from}
                                        to={transform[transition][direction][state].to}
                                        duration={300}
                                    >
                                        {component}
                                    </AnimatedView>
                                );

                            }}


                        </Transition>
                    </TransitionGroup>
                );
            }}
        />
    );
}
