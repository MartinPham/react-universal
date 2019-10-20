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
import {getBoundingRect} from 'utils/dom';
import store from 'utils/redux/store';

import './styles.scss';

export {default as Route} from './components/Route';
export {default as Link} from './components/Link';
export {default as SharedElement} from './components/SharedElement';

const preloadedInitialState = getPreloadState(ID, initialState)



class Navigator extends React.PureComponent {
	lastSharedElements = []
	transitionTimeout = 500
	sharedElementTransitionTimeout = 500
	ghostLayer = null
	ghostLayerBackground = null
	ghostLayerElements = null
	reduxStore = null

	componentDidMount()
	{
		this.reduxStore = store()


		sharedHistory().listen(location => {
			this.props.dispatch(updateStack(location))
		})

		this.ghostLayer = document.createElement('div')
		this.ghostLayer.id = 'NavigatorSharedElementTransitionGhost'

		this.ghostLayerBackground = document.createElement('div')
		this.ghostLayerBackground.id = 'NavigatorSharedElementTransitionGhostBackground'
		this.ghostLayer.appendChild(this.ghostLayerBackground)
		
		this.ghostLayerElements = document.createElement('div')
		this.ghostLayerElements.id = 'NavigatorSharedElementTransitionGhostElements'
		this.ghostLayer.appendChild(this.ghostLayerElements)


		document.body.appendChild(this.ghostLayer)
	}

	render()
	{
		log.info('[Navigator] render', this.context)

		const location = this.props.location
		if(location === null) return null

		let timeout = this.transitionTimeout

		const direction = this.props.direction
		const transition = this.props.transition
		const originPosition = this.props.originPosition

		let style = null

		for(let moduleId in transitionModules)
		{
			
			const module = transitionModules[moduleId]

			if((new RegExp(module.test)).test(transition))
			{

				style = (<style>{module.main.style(originPosition)}</style>)
				timeout = module.timeout
				
				break
			}
		}



		return (
			<>
				{style}

				<TransitionGroup id="NavigatorTransitionGroup" className={`${transition}-${direction}`}>
					<CSSTransition
						key={location.key}
						timeout={timeout}
						classNames="pageTransition"
						mountOnEnter={false}
						unmountOnExit={false}

						onExit={html => {
							log.info('onExit transition', this.reduxStore.getState().Navigator.transition)

							if(this.reduxStore.getState().Navigator.transition !== 'none') return;

							const shareds = html.querySelectorAll('*[data-shared-element="1"]')
					
					
							if(shareds.length > 0)
							{
								const positions = [];
						
								shareds.forEach(shared => {
									const key = shared.dataset.key
						
									const rect = getBoundingRect(shared)
						
									positions[key] = rect
								})
						
						
								this.ghostLayerElements.innerHTML = ''
								this.ghostLayerBackground.style.opacity = 1
								this.ghostLayer.style.display = 'block'
						
								shareds.forEach(shared => {
									const key = shared.dataset.key
						
									const rect = positions[key]
						
									log.info('start ' + key, rect)
						
						
									shared.style.position = 'absolute'
									shared.style.transition = 'all 0.5s'
									shared.style.top = rect.top + 'px'
									shared.style.left = rect.left + 'px'
									shared.style.width = rect.width + 'px'
									shared.style.height = rect.height + 'px'
									shared.style.margin = 0
						
						
									this.lastSharedElements[key] = shared
						
									this.ghostLayerElements.appendChild(shared)
								})
							}
					
						}}
						
						onEntered={html => {
							log.info('onEntered transition', this.reduxStore.getState().Navigator.transition)

							
							
							const finishTransition = () => {
								this.ghostLayerBackground.style.opacity = 0

								setTimeout(() => {
									this.ghostLayer.style.display = 'none'
									this.ghostLayerElements.innerHTML = ''
								}, 110)
							}
							if(this.reduxStore.getState().Navigator.transition === 'none') 
							{
								if(Object.keys(this.lastSharedElements).length > 0)
								{
									
									// this.ghostLayerBackground.style.opacity = 1

									Object.keys(this.lastSharedElements).forEach(key => {
										const shared = html.querySelector(`*[data-key="${key}"]`)

										if(!shared)
										{
											this.ghostLayerElements.removeChild(this.lastSharedElements[key])
										}
									})

									const shareds = html.querySelectorAll('*[data-shared-element="1"]')
									if(shareds.length > 0)
									{
										const positions = [];
							
										shareds.forEach(shared => {
											const key = shared.dataset.key
								
											const rect = getBoundingRect(shared)
								
											positions[key] = rect
										})
										
										shareds.forEach(shared => {
											const key = shared.dataset.key
								
											const rect = positions[key]
								
											log.info('end ' + key, rect)
								
											if(this.lastSharedElements[key])
											{
												this.lastSharedElements[key].style.position = 'absolute'
												this.lastSharedElements[key].style.top = rect.top + 'px'
												this.lastSharedElements[key].style.backgroundImage = shared.style.backgroundImage;
												this.lastSharedElements[key].style.backgroundColor = shared.style.backgroundColor;
												this.lastSharedElements[key].style.borderRadius = shared.style.borderRadius;
												this.lastSharedElements[key].style.color = shared.style.color;
												this.lastSharedElements[key].style.fontWeight = shared.style.fontWeight;
												this.lastSharedElements[key].style.fontSize = shared.style.fontSize;
												this.lastSharedElements[key].style.padding = shared.style.padding;
												this.lastSharedElements[key].style.opacity = shared.style.opacity;
												this.lastSharedElements[key].style.textShadow = shared.style.textShadow;
												this.lastSharedElements[key].style.transform = shared.style.transform;
												this.lastSharedElements[key].style.filter = shared.style.filter;
												this.lastSharedElements[key].style.left = rect.left + 'px'
												this.lastSharedElements[key].style.width = rect.width + 'px'
												this.lastSharedElements[key].style.height = rect.height + 'px'
												this.lastSharedElements[key].style.margin = 0
											}
										})
								
										setTimeout(finishTransition, this.sharedElementTransitionTimeout)
									} else {
										finishTransition()
									}
								} else {
									finishTransition()
								}
							} else {
								finishTransition()
							}
							
						}}
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