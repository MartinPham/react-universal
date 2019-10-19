import React from 'react';
import push from '../actions/push';
import goBack from '../actions/goBack';
import goForward from '../actions/goForward';
import go from '../actions/go';

export default (Component) => (props) =>  {
	const navigator = {
		push: (path, data = {}, transition = '', originPosition = {}) => props.dispatch(push(path, data, transition, originPosition)),
		go: (steps) => props.dispatch(go(steps)),
		goBack: () => props.dispatch(goBack()),
		goForward: () => props.dispatch(goForward()),
	}

	return <Component navigator={navigator}/>
}