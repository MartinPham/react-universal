import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import textSelector from './selectors/textSelector';
import uppercaseTextSelector from './selectors/uppercaseTextSelector';
// import {ID} from './constants';


class Page extends React.PureComponent {
	state = {
		number: 1
	}

	render() {
		return (
			<div>
				<h1>Sample with selector</h1>
				text: {this.props.text}<br/>
				{/* text (from props): {this.props.state[ID].text}<br/> */}
				uppercase text: {this.props.uppercaseText}<br/>
				<br/>
				<button
					onClick={() => this.setState({
						number: Math.random()
					})}
				>Change state.number = {this.state.number}</button>
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


const mapState = createStructuredSelector({
	text: textSelector,
	uppercaseText: uppercaseTextSelector,
})

export default connect(
	mapState
)(Page)