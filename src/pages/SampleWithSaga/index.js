import React from 'react';
import {BasePurePage} from 'pages/Page';


import compose from 'utils/redux/compose';


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
					onClick={() => this.props.dispatch(increaseCounter(5))}
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
					onClick={() => this.navigator.push('@Sample', { random: Math.random() }, 'flyLeft')}
				>Go Sample (flyLeft)</button>
				<hr/>

				<button
					onClick={() => this.navigator.push('@Sample', { random: Math.random() }, 'flyUp')}
				>Go Sample (flyUp)</button>

				<hr/>


				<button
					onClick={() => this.navigator.goBack()}
				>Go Back</button>
				<hr/>

				<button
					onClick={() => this.navigator.goForward()}
				>Go Forward</button>

				<hr/>
				<button
					onClick={() => this.navigator.go(-2)}
				>Go -2</button>
				<hr/>
				<button
					onClick={() => this.navigator.go(2)}
				>Go +2</button>

        </div>
		)
	}
}

Page.displayName = ID;

const frontload = async props =>
{
	console.log('frontload dispatch', props)
	props.dispatch(increaseCounter(100))

};

const mapState = {
	counter: counterSelector,
	funnyCounter: funnyCounterSelector,
	anotherCounter: anotherCounterSelector,
};

export default compose({
	ID,
	mapState,
	reducer,
	saga,
	frontload
})(Page)