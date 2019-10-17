import React from 'react';

import quickConnect from 'utils/redux/quickConnect';
import {ID} from './constants';
import initialState from './state';
import increaseCounter from './actions/increaseCounter';


class Page extends React.PureComponent {
	state = {
		number: 1
	}
	render() {
		return (
			<div>
				Sample
				counter: {this.props.counter}<br/>
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
					onClick={() => this.props.navigator.push('@Sample', { random: Math.random() }, 'flyLeft')}
				>Go Sample (flyLeft)</button>
				<hr/>

				<button
					onClick={() => this.props.navigator.push('@Sample', { random: Math.random() }, 'flyUp')}
				>Go Sample (flyUp)</button>

				<hr/>


				<button
					onClick={() => this.props.navigator.goBack()}
				>Go Back</button>
				<hr/>

				<button
					onClick={() => this.props.navigator.goForward()}
				>Go Forward</button>

				<hr/>
				<button
					onClick={() => this.props.navigator.go(-2)}
				>Go -2</button>
				<hr/>
				<button
					onClick={() => this.props.navigator.go(2)}
				>Go +2</button>

        </div>
		)
	}
}


export default quickConnect(
	ID,
	[
		'counter',
	],
	initialState
)(Page)