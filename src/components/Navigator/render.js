import React from 'react';
import { Switch, Route } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.scss';

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
			<Route
				render={({ location }) => {
					return (
						<TransitionGroup className={`pageTransition ${$props.transition}-${$props.direction}`}>
							<CSSTransition
								key={location.key}
								timeout={1000}
								classNames="pageTransition"
								mountOnEnter={false}
								unmountOnExit={false}
							>
								<div>
									<Switch location={location}>{$props.children}</Switch>
								</div>
							</CSSTransition>
						</TransitionGroup>
					);
				}}
			/>
    );
}