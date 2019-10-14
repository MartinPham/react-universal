import React from 'react';
import {connect} from 'react-redux';
import push from '../actions/push';
import goBack from '../actions/goBack';
import goForward from '../actions/goForward';
import go from '../actions/go';
import log from 'loglevel';
import queryString from 'query-string';

class Route extends React.Component {
	shouldComponentUpdate()
	{
		return false
	}

	render()
	{
		const {component: Component, exact, path, computedMatch, location, ...props} = this.props
		log.info(`[Route] render ${path}`, props)

		const navigator = {
			push: (path, data = {}, transition = '', originPosition = {}) => props.dispatch(push(path, data, transition, originPosition)),
			go: (steps) => props.dispatch(go(steps)),
			goBack: () => props.dispatch(goBack()),
			goForward: () => props.dispatch(goForward()),
		}

		return <Component 
					{...props} 
					queryParams={queryString.parse(location.search)}
					navigator={navigator} 
					location={location} 
					params={computedMatch.params}
					/>
	}
}

const withConnect = connect(

)

export default withConnect(Route)