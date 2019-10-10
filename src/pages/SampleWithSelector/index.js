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
	text: textSelector,
	uppercaseText: uppercaseTextSelector,
});

const mapDispatch = dispatch => ({
    push: (path, data, transition) => dispatch(push(path, data, transition)),
    go: (index) => dispatch(go(index)),
    goBack: () => dispatch(goBack()),
    goForward: () => dispatch(goForward()),
});

export default compose({
	ID,
	mapState,
	mapDispatch
})(Page)