import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import updateStack from './actions/updateStack';
import {ID} from './constants';
import initialState from './state';
import getPreloadState from 'utils/redux/getPreloadState';
import select from 'utils/select';
import transitionModules from './transitions';
import {Switch} from 'react-router';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import sharedHistory from 'utils/sharedHistory';
import log from 'loglevel';

import './styles.scss';

export {default as Route} from './components/Route';
export {default as Link} from './components/Link';

const preloadedInitialState = getPreloadState(ID, initialState)

class Navigator extends React.PureComponent {
	componentDidMount()
	{
		sharedHistory().listen(location => {
			this.props.dispatch(updateStack(location))
		})
	}

	render()
	{
		log.info('[Navigator] render')

		const location = this.props.location
		if(location === null) return null

		let styleInjection = null

		const direction = this.props.direction
		const transition = this.props.transition
		const originPosition = this.props.originPosition

		let timeout = 500

		for(let moduleId in transitionModules)
		{
			const module = transitionModules[moduleId]

			if((new RegExp(module.test)).test(transition))
			{
				styleInjection = (<style>{module.styleInjector.default(originPosition)}</style>)
				timeout = module.timeout
				break
			}
		}


		return (
			<>
				{styleInjection}

				<TransitionGroup id="NavigatorTransitionGroup" className={`${transition}-${direction}`}>
					<CSSTransition
						key={location.key}
						timeout={timeout}
						classNames="pageTransition"
						mountOnEnter={false}
						unmountOnExit={false}
					>
						<div className="NavigatorTransition">
							<Switch location={location}>
								{this.props.children}
							</Switch>
						</div>
					</CSSTransition>
				</TransitionGroup>
			</>
		)
	}
}


const mapState = createStructuredSelector({
	transition: select('transition')(ID, preloadedInitialState),
	direction: select('direction')(ID, preloadedInitialState),
	originPosition: select('originPosition')(ID, preloadedInitialState),
	location: select('location')(ID, preloadedInitialState)
})

const withConnect = connect(
	mapState
)


export default withConnect(Navigator)