import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {ID} from './constants';
import updateStack from './actions/updateStack';
import select from 'utils/select';
import initialState from './state';
import transitionModules from './transitions';
import {Switch} from 'react-router';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import sharedHistory from 'utils/sharedHistory';
import log from 'loglevel';

import './styles.scss';

export {default as Route} from './components/Route';
export {default as Link} from './components/Link';

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
	transition: select('transition')(ID, initialState),
	direction: select('direction')(ID, initialState),
	originPosition: select('originPosition')(ID, initialState),
	location: select('location')(ID, initialState)
})

const withConnect = connect(
	mapState
)


export default withConnect(Navigator)