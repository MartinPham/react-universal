import React from 'react';
import { Switch, Route } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './styles.scss';

import './transitions/slide/styles.scss';
import './transitions/fly/styles.scss';
import './transitions/reveal/styles.scss';

import log from "utils/log";

export const componentDidMount = ($this, $props, $state, $routes, ...$extra) => {
    
};

export const componentWillUnmount = ($this, $props, $state, $routes, ...$extra) => {
    
};


export default ($this, $props, $state, ...$extra) => {

	/*
    const routeComponents =
	Object.keys($props.routes).map((routeId) => {
        const route = $props.routes[routeId];

        // console.log(`${process.env.PUBLIC_URL}${route.path}`);

        let finalPath = (process.env.PUBLIC_URL || '') + route.path;
        // console.log(finalPath);

        let component = route.source;

        if(typeof route.firewall !== 'undefined')
        {
            component = route.firewall(component, $props.user, $props.token);
        }


        return (
            <Route
                key={routeId}
                path={finalPath}
                component={component}
                exact={typeof route.exact === 'undefined' ? false : route.exact}
            />
        );
    });

    const location = $props.location.toJS();

    let styleInjection = null;

    const transition = $props.transition;
    const originPosition = $props.originPosition.toJS();

    let transitionModuleName = '';
    if(
        transition === 'revealIn'
        || transition === 'revealOut'
    ) {
        transitionModuleName = 'reveal';
    }else if(
        transition === 'slideLeft'
        || transition === 'slideRight'
        || transition === 'slideUp'
        || transition === 'slideDown'
    ) {
        transitionModuleName = 'slide';
    }else if(
        transition === 'flyLeft'
        || transition === 'flyRight'
        || transition === 'flyUp'
        || transition === 'flyDown'
    ) {
        transitionModuleName = 'fly';
    }

    try {


        //import('./transitions/' + transitionModuleName)
        //    .then(module => {
        //        module.default()
        //    });

        const transitionModule = require('./transitions/' + transitionModuleName).default;

        styleInjection = (<style jsx="">{transitionModule(originPosition)}</style>);
    } catch (e) {
        log.error('Could not load transition ' + transition);
    }


    return (
		<>
            {styleInjection}

            <TransitionGroup className={`pageTransition ${$props.transition}-${$props.direction}`}>
                <CSSTransition
                    key={location.key}
                    timeout={250}
                    classNames="pageTransition"
                    mountOnEnter={false}
                    unmountOnExit={false}
                >
                    <div className="pageTransitionContent">
                        <Switch location={location}>{routeComponents}</Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
		</>
    );
	*/

	const routeComponents = $props.children;

    return (
			<Route
				render={({ location }) => {
					let styleInjection = null;

					const transition = $props.transition;
                    const originPosition = $props.originPosition.toJS();

                    let transitionModuleName = '';
					if(
						transition === 'revealIn'
						|| transition === 'revealOut'
					) {
                        transitionModuleName = 'reveal';
					}else if(
						transition === 'slideLeft'
						|| transition === 'slideRight'
						|| transition === 'slideUp'
						|| transition === 'slideDown'
					) {
                        transitionModuleName = 'slide';
					}else if(
                        transition === 'flyLeft'
                        || transition === 'flyRight'
                        || transition === 'flyUp'
                        || transition === 'flyDown'
					) {
                        transitionModuleName = 'fly';
					}

                    try {


                        //import('./transitions/' + transitionModuleName)
                        //    .then(module => {
                        //        module.default()
                        //    });

                        const transitionModule = require('./transitions/' + transitionModuleName).default;

                        styleInjection = (<style jsx="">{transitionModule(originPosition)}</style>);
                    } catch (e) {
                        log.error('Could not load transition ' + transition);
                    }


					return (
						<>
							{styleInjection}

							<TransitionGroup className={`pageTransition ${$props.transition}-${$props.direction}`}>
								<CSSTransition
									key={location.key}
									timeout={250}
									classNames="pageTransition"
									mountOnEnter={false}
									unmountOnExit={false}
								>
									<div className="pageTransitionContent">
										<Switch location={location}>{routeComponents}</Switch>
									</div>
								</CSSTransition>
							</TransitionGroup>
						</>
					);
				}}
			/>
    );

}