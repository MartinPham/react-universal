import React from 'react';
import {BasePurePage} from 'pages/Page';


import compose from 'utils/redux/compose';
import { createStructuredSelector } from 'reselect';

import push from 'components/Navigator/actions/push';
import go from 'components/Navigator/actions/go';
import goBack from 'components/Navigator/actions/goBack';
import goForward from 'components/Navigator/actions/goForward';


import textSelector from "./selectors/textSelector";
import uppercaseTextSelector from "./selectors/uppercaseTextSelector";

import { ID } from "./constants";


class Page extends BasePurePage {
	state = {
		number: 1
	}
	render() {
		return (
			<div>
				<h1>Sample with selector</h1>
				text: {this.props.text}<br/>
				uppercase text: {this.props.uppercaseText}<br/>
				<br/>
				<button
					onClick={() => this.setState({
						number: Math.random()
					})}
				>Change state.number = {this.state.number}</button>
				<hr/>
				<button
					onClick={() => this.props.dispatch(push('@Sample', { random: Math.random() }, 'flyLeft'))}
				>Go Sample (flyLeft)</button>
				<hr/>

				<button
					onClick={() => this.props.dispatch(push('@Sample', { random: Math.random() }, 'flyUp'))}
				>Go Sample (flyUp)</button>

				<hr/>


				<button
					onClick={() => this.props.dispatch(goBack())}
				>Go Back</button>
				<hr/>

				<button
					onClick={() => this.props.dispatch(goForward())}
				>Go Forward</button>

				<hr/>
				<button
					onClick={() => this.props.dispatch(go(-2))}
				>Go -2</button>
				<hr/>
				<button
					onClick={() => this.props.dispatch(go(2))}
				>Go +2</button>

        </div>
		)
	}
}

Page.displayName = ID;


const mapState = {
	text: textSelector,
	uppercaseText: uppercaseTextSelector,
};

export default compose({
	ID,
	mapState
})(Page)