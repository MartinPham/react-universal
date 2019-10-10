import React from 'react';
import {BasePurePage} from 'pages/Page';


import compose from 'utils/redux/compose';

import reducer from './reducer';
import increaseCounter from './actions/increaseCounter';

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
					onClick={() => this.push('@Sample', { random: Math.random() }, 'flyLeft')}
				>Go Sample (flyLeft)</button>
				<hr/>

				<button
					onClick={() => this.push('@Sample', { random: Math.random() }, 'flyUp')}
				>Go Sample (flyUp)</button>

				<hr/>


				<button
					onClick={() => this.goBack()}
				>Go Back</button>
				<hr/>

				<button
					onClick={() => this.goForward()}
				>Go Forward</button>

				<hr/>
				<button
					onClick={() => this.go(-2)}
				>Go -2</button>
				<hr/>
				<button
					onClick={() => this.go(2)}
				>Go +2</button>

        </div>
		)
	}
}

Page.displayName = ID;


const mapState = {
	counter: counterSelector,
	funnyCounter: funnyCounterSelector,
};


export default compose({
	ID,
	mapState,
	reducer
})(Page)