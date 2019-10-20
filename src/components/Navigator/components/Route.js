import React from 'react';
import {connect} from 'react-redux';
import push from '../actions/push';
import goBack from '../actions/goBack';
import goForward from '../actions/goForward';
import go from '../actions/go';
import log from 'loglevel';
import queryString from 'query-string';
import {getPlatform, PLATFORM_BROWSER, PLATFORM_NODE} from 'utils/platform';
import loadable from '@loadable/component';

const AsyncPage = loadable(async (props) => import(/* webpackChunkName: "[request]" */`pages/${props.page}`))

class Route extends React.Component {
	shouldComponentUpdate()
	{
		return false
	}

	pageProps = {}
	Page = null
	PageFallback = (props) => <div/>
	DataFallback = (props) => <div/>

	constructor(initialProps)
	{
		super(initialProps)



		const state = {

		}

		const {page: pageSource, id, exact, path, computedMatch, location, pageData, ...props} = initialProps
		log.info(`[Route] constructor ${path}`)

		const navigator = {
			push: (path, data = {}, transition = '', originPosition = {}) => props.dispatch(push(path, data, transition, originPosition)),
			go: (steps) => props.dispatch(go(steps)),
			goBack: () => props.dispatch(goBack()),
			goForward: () => props.dispatch(goForward()),
		}

		let page = id

		if(pageSource)
		{
			if(typeof pageSource !== 'string')
			{
				this.Page = pageSource
			} else {
				page = pageSource
			}
		}


		const pageProps = {
			...props,
			id,
			page,
			queryParams: queryString.parse(location.search),
			data: (location.state && location.state.data) || {},
			navigator,
			location,
			params: computedMatch.params
		}



		if(getPlatform() === PLATFORM_BROWSER)
		{
			if(this.Page === null)
			{
				try {
					this.PageFallback = require('../../../pages/' + pageProps.page + '/components/PageFallback.js').default
				} catch (error)
				{
					log.debug('[Route] loading Page Fallback error', error)
				}
			}
			
			try {
				this.DataFallback = require('../../../pages/' + pageProps.page + '/components/DataFallback.js').default
			} catch (error)
			{
				log.debug('[Route] loading Data Fallback error', error)
			}
		}

		state.componentIsReady = true

		if(getPlatform() === PLATFORM_BROWSER)
		{
			if(global.__PAGE_DATA__ && global.__PAGE_DATA__[location.key])
			{
				log.info('[Route] apply loaded inital data')
				pageProps.initialData = {...global.__PAGE_DATA__[location.key]}
			} else {
				log.info('[Route] loading inital data')
				state.componentIsReady = false

				import('../../../pages/' + pageProps.page + '/data.js')
						.then(module => {
							return module.default({
								route: {...pageProps.route},
								location: {...location},
								params: {...pageProps.params},
								queryParams: {...pageProps.queryParams},
							})
						})
						.catch(error => {
							log.debug('[Route] inital data promise error', error)
						})
						.then(data => {
							this.pageProps.initialData = {...data}
							global.__PAGE_DATA__ = global.__PAGE_DATA__ || {}
							global.__PAGE_DATA__[location.key] = {...data}
							
							this.setState({
								componentIsReady: true
							}, () => {
								log.info('[Route] force update with initial data')
								this.forceUpdate()
							})
						})
				
			}
		} else if(getPlatform() === PLATFORM_NODE)
		{
			pageProps.initialData = {...pageData[location.key]}
		}


		this.pageProps = pageProps
		this.state = state
	}
	
	render()
	{
		log.info('[Route] render', this.pageProps)
		
		if(!this.state.componentIsReady)
		{
			return <this.DataFallback {...this.pageProps}/>
		}

		if(this.Page !== null)
		{
			return <this.Page {...this.pageProps}/>
		}
		return <AsyncPage {...this.pageProps} fallback={this.PageFallback(this.pageProps)}/>

	}
}

const withConnect = connect(
	(state) => ({ state })
)


export default withConnect(Route)