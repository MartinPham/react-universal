import React from 'react';
import { Switch, Route } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './styles.scss';


// import log from "utils/log";
import AuthProvider from "components/AuthProvider";
// import Navigator from "./index";


// import './transitions/slide/styles.scss';
// import './transitions/fly/styles.scss';
// import './transitions/reveal/styles.scss';


import transitionModules from 'transitions';


export const componentDidMount = ($this, $props, $state, $routes, ...$extra) => {

};

export const componentWillUnmount = ($this, $props, $state, $routes, ...$extra) => {

};


export default ($this, $props, $state, ...$extra) => {
    return (
    <AuthProvider>
        <Route
            render={({ location }) => {
                let styleInjection = null;

                const transition = $props.transition;
                const originPosition = $props.originPosition.toJS();

                // let transitionModuleName = '';


                for(let moduleId in transitionModules)
                {
                    const module = transitionModules[moduleId];

                    if((new RegExp(module.test)).test(transition))
                    {
                        styleInjection = (<style>{module.styleInjector.default(originPosition)}</style>);
                        break;
                    }
                }


                return (
                	<>
                        {styleInjection}

                        <TransitionGroup id="NavigatorTransitionGroup" className={`${$props.transition}-${$props.direction}`}>
                            <CSSTransition
                                key={location.key}
                                timeout={5000}
                                classNames="pageTransition"
                                mountOnEnter={false}
                                unmountOnExit={false}
                            >
                                <div className="NavigatorTransition">
                                        <Switch location={location}>
                                            {$props.children}
                                        </Switch>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>

						{/*<div id="NavigatorTransitionGhost"/>*/}
                    </>
                );
            }}
        />
    </AuthProvider>
    );

}
