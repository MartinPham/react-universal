import React from 'react';
import {BasePurePage} from 'pages/Page';


import compose from 'utils/redux/compose';
import { createStructuredSelector } from 'reselect';

import push from 'components/Navigator/actions/push';
import go from 'components/Navigator/actions/go';
import goBack from 'components/Navigator/actions/goBack';
import goForward from 'components/Navigator/actions/goForward';


import reducer from './reducer';
import saga from './saga';
import increaseCounter from './actions/increaseCounter';

import anotherCounterSelector from "./selectors/anotherCounterSelector";
import counterSelector from "./selectors/counterSelector";
import funnyCounterSelector from "./selectors/funnyCounterSelector";

import { ID } from "./constants";


class Page extends BasePurePage {
	state = {
		number: 1
	}
	render() {
		return (
			<div>
				Sample
				counter: {this.props.counter}<br/>
				funny counter: {this.props.funnyCounter}<br/>
				another counter: {this.props.anotherCounter}<br/>
				<br/>
				<button
					onClick={() => this.props.increaseCounter(5)}
				>Increase counter</button>
				<br/>
				<button
					onClick={() => this.setState({
						number: Math.random()
					})}
				>Change state.number = {this.state.number}</button>
				<hr/>

				<hr/>
				<button
					onClick={() => this.props.push('@Sample', { random: Math.random() }, 'flyLeft')}
				>Go Sample (flyLeft)</button>
				<hr/>

				<button
					onClick={() => this.props.push('@Sample', { random: Math.random() }, 'flyUp')}
				>Go Sample (flyUp)</button>

				<hr/>


				<button
					onClick={() => this.props.goBack()}
				>Go Back</button>
				<hr/>

				<button
					onClick={() => this.props.goForward()}
				>Go Forward</button>

				<hr/>
				<button
					onClick={() => this.props.go(-2)}
				>Go -2</button>
				<hr/>
				<button
					onClick={() => this.props.go(2)}
				>Go +2</button>

        </div>
		)
	}
}

Page.displayName = ID;


const mapState = createStructuredSelector({
	counter: counterSelector,
	funnyCounter: funnyCounterSelector,
	anotherCounter: anotherCounterSelector,
});

const mapDispatch = dispatch => ({
    push: (path, data, transition) => dispatch(push(path, data, transition)),
    go: (index) => dispatch(go(index)),
    goBack: () => dispatch(goBack()),
	goForward: () => dispatch(goForward()),
	increaseCounter: (plus) => dispatch(increaseCounter(plus))
});

export default compose({
	ID,
	mapState,
	mapDispatch,
	reducer,
	saga
})(Page)