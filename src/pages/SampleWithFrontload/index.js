import React from 'react';
import {BasePurePage} from 'pages/Page';


import compose from 'utils/redux/compose';

import reducer from './reducer';
import changeText from './actions/changeText';

import textSelector from "./selectors/textSelector";

import { ID } from "./constants";


class Page extends BasePurePage {
	state = {
		number: 1
	}
	render() {
		return (
			<div>
				Sample
				text: {this.props.text}<br/>
				<br/>
				<button
					onClick={() => this.props.dispatch(changeText('From button'))}
				>Change text</button>
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


const mapState = {
	text: textSelector,
};

const frontload = async props =>
{
	const data = await (new Promise(resolve => setTimeout(() => resolve('From async'), 2000)))
	console.log('frontload loaded', data)
	props.dispatch(changeText(data))
};

export default compose({
	ID,
	mapState,
	reducer,
	frontload
})(Page)