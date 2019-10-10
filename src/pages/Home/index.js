import React from 'react';
import { Heading } from "./styles";
import {getBoundingRect} from "utils/dom";
import {BasePurePage} from 'pages/Page';


// import { frontloadConnect } from "react-frontload";
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';


import push from 'components/Navigator/actions/push';

import reducer from './reducer';
import saga from './saga';

import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";

import changeText from "./actions/changeText";
import textSelector from "./selectors/textSelector";
import altTextSelector from "./selectors/altTextSelector";
import objectTextSelector from "./selectors/objectTextSelector";
import objectSelector from "./selectors/objectSelector";


import goBack from "components/Navigator/actions/goBack";
import goForward from "components/Navigator/actions/goForward";
import changeObject from "./actions/changeObject";
import changeObjectText from "./actions/changeObjectText";



class Page extends BasePurePage {
	state = {
		count: 1
	};

	render()
	{
		return (
			<div>
				<Heading>Hello world!!!</Heading>
				<hr/>
				<p>text selector: {this.props.text}</p>
				<p>altText selector: {this.props.altText}</p>
				<hr/>
				text selector & input: 
				<input type="text" value={this.props.text} onChange={(event) => this.props.changeText(event.target.value)}/>
				<hr/>
	
				<button
					onClick={() => this.props.changeText("I am from the Button")}
				>Change text</button>
				<hr/>
				<p>object.text selector: {this.props.objectText}</p>
				<p>object selector: {JSON.stringify(this.props.object)}</p>
				<hr/>
				<button
					onClick={() => this.props.changeObjectText('zzz')}
				>Change Object Text</button>
				<hr/>
				<button
					onClick={() => this.props.changeObject({
							text: "omg",
							msg: Math.random()
						})}
				>Change Object</button>
				<hr/>
	
				<b>state.count: {this.state.count}</b>
				<br/>
				<button
					onClick={() => this.setState(state => ({
						count: state.count + 1
					}))}
				>Increase State.count</button>
				<br/>
				<br/>
	
				<button
					onClick={(event) => {
						const target = event.currentTarget;
						let position = getBoundingRect(target);
	
						this.props.push('@Sample', {}, 'revealIn', position);
					}}
				>Go Sample page</button>
	
				<button
					onClick={() => this.props.push('/', {}, 'flyDown')}
				>Go Home</button>
				<br/>
				<button
					onClick={() => this.props.push('@Sample?a=b', {}, 'flyLeft')}
				>Go Sample (flyLeft)</button>
				<br/>
	
				<button
					onClick={() => this.props.push('@Dashboard?x=1&y=2', {}, 'flyUp')}
				>Go dashboard (flyUp)</button>
				<br/>
	
				<button
					onClick={() => this.props.push('@Login?z=3', {}, 'flyUp')}
				>Go login (flyUp)</button>
				<br/>
	
				<button
					onClick={() => this.props.goBack()}
				 >Go Back</button>
				<br/>
	
				<button
					onClick={() => this.props.goForward()}
				 >Go Forward</button>
				<br/>
			</div>
		);
	}
}




Page.displayName = ID;


const mapState = createStructuredSelector({
	text: textSelector,
	altText: altTextSelector,
	objectText: objectTextSelector,
	object: objectSelector,
});

const mapDispatch = dispatch => ({
	changeText: (text) => {
		dispatch(changeText(text))
	},
	changeObjectText: (text) => {
		dispatch(changeObjectText(text))
	},
	changeObject: (object) => {
		dispatch(changeObject(object))
	},
	push: (path, data, transition, originPosition) => dispatch(push(path, data, transition, originPosition)),
	goBack: () => dispatch(goBack()),
	goForward: () => dispatch(goForward()),
});



// const frontload = async props =>
// {
// 	const data = await (new Promise(resolve => setTimeout(() => resolve('ciao mondo from async'), 1000)));
// 	props.changeText(data);
// };


const withConnect = connect(
	mapState,
	mapDispatch
);




const withReducer = injectReducer({ key: ID, reducer });
const withSaga = injectSaga({ key: ID, saga });


export default compose(
	withReducer,
	withSaga,
	withConnect,
)(
	// frontloadConnect(frontload, {
	//     onMount: true,
	//     onUpdate: false
	// })(Page)
	Page
);

