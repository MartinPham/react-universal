import React from 'react';
import {connect} from 'react-redux';
import push from '../actions/push';
import goBack from '../actions/goBack';
import goForward from '../actions/goForward';
import go from '../actions/go';
import log from 'loglevel';
import queryString from 'query-string';
import {getPlatform, PLATFORM_BROWSER} from 'utils/platform';
import loadable from '@loadable/component';

const AsyncPage = loadable(async (props) => import(/* webpackChunkName: "[request]" */`pages/${props.page}`))

class Route extends React.Component {
	shouldComponentUpdate()
	{
		return false
	}

	pageProps = {}

	constructor(initialProps)
	{
		super(initialProps)

		const state = {
			Fallback: () => <div/>
		}

		const {page, exact, path, computedMatch, location, ...props} = initialProps
		log.info(`[Route] constructor ${path}`, props)

		const navigator = {
			push: (path, data = {}, transition = '', originPosition = {}) => props.dispatch(push(path, data, transition, originPosition)),
			go: (steps) => props.dispatch(go(steps)),
			goBack: () => props.dispatch(goBack()),
			goForward: () => props.dispatch(goForward()),
		}

		const pageProps = {
			...props,
			page,
			queryParams: queryString.parse(location.search),
			data: (location.state && location.state.data) || {},
			navigator,
			location,
			params: computedMatch.params
		}

		state.componentIsReady = true

		if(getPlatform() === PLATFORM_BROWSER)
		{
			if(window.__PAGE_DATA__ && window.__PAGE_DATA__[location.key])
			{
				log.info('[Route] apply loaded inital data', window.__PAGE_DATA__)
				pageProps.initialData = {...window.__PAGE_DATA__[location.key]}
			} else {
				log.info('[Route] loading inital data')

				import('../../../pages/' + pageProps.page + '/data.js')
						.then(module => {
							if(module.Fallback)
							{
								this.setState({
									Fallback: module.Fallback
								}, () => {
									this.forceUpdate()
								})
							}

							return module.default({
								params: {...pageProps.params},
								queryParams: {...pageProps.queryParams},
							})
						})
						.catch(error => {
							log.info('[Route] inital data promise error', error)
						})
						.then(data => {
							this.pageProps.initialData = {...data}
							window.__PAGE_DATA__[location.key] = {...data}
							
							this.setState({
								componentIsReady: true
							}, () => {
								this.forceUpdate()
							})
						})
				state.componentIsReady = false
			}
		}


		this.pageProps = pageProps
		this.state = state
	}
	
	render()
	{
		log.info('[Route] render', this.pageProps.path)
		
		if(!this.state.componentIsReady)
		{
			return <this.state.Fallback {...this.pageProps}/>
		}
		
		return <AsyncPage {...this.pageProps}/>

	}
}

const withConnect = connect(
	(state) => ({ state })
)


export default withConnect(Route)