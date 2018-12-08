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
                        styleInjection = (<style jsx="">{module.styleInjector.default(originPosition)}</style>);
                        break;
                    }
                }

//                 if(
//                     transition === 'revealIn'
//                     || transition === 'revealOut'
//                 ) {
//                     transitionModuleName = 'reveal';
//                 }else if(
//                     transition === 'slideLeft'
//                     || transition === 'slideRight'
//                     || transition === 'slideUp'
//                     || transition === 'slideDown'
//                 ) {
//                     transitionModuleName = 'slide';
//                 }else if(
//                     transition === 'flyLeft'
//                     || transition === 'flyRight'
//                     || transition === 'flyUp'
//                     || transition === 'flyDown'
//                 ) {
//                     transitionModuleName = 'fly';
//                 }
// 
//                 try {
// 
// 
//                     //import('./transitions/' + transitionModuleName)
//                     //    .then(module => {
//                     //        module.default()
//                     //    });
// 
//                     const transitionModule = require('./transitions/' + transitionModuleName).default;
// 
//                     styleInjection = (<style jsx="">{transitionModule(originPosition)}</style>);
//                 } catch (e) {
//                     log.error('Could not load transition ' + transition);
//                 }


                return (
                    <>
                        {styleInjection}

                        <TransitionGroup className={`pageTransition ${$props.transition}-${$props.direction}`}>
                            <CSSTransition
                                key={location.key}
                                timeout={280}
                                classNames="pageTransition"
                                mountOnEnter={false}
                                unmountOnExit={false}
                            >
                                <div className="pageTransitionContent">

                                    <AuthProvider>
                                        <Switch location={location}>
                                            {$props.children}
                                        </Switch>
                                    </AuthProvider>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </>
                );
            }}
        />
    );

}
