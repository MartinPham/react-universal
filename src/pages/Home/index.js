import React from 'react';
import { Heading } from "./styles";
import {getBoundingRect} from "utils/dom";
import {BasePurePage} from 'pages/Page';


import compose from 'utils/redux/compose';

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
				<input type="text" value={this.props.text} onChange={(event) => this.props.dispatch(changeText(event.target.value))}/>
				<hr/>
	
				<button
					onClick={() => this.props.dispatch(changeText("I am from the Button"))}
				>Change text</button>
				<hr/>
				<p>object.text selector: {this.props.objectText}</p>
				<p>object selector: {JSON.stringify(this.props.object)}</p>
				<hr/>
				<button
					onClick={() => this.props.dispatch(changeObjectText('zzz'))}
				>Change Object Text</button>
				<hr/>
				<button
					onClick={() => this.props.dispatch(changeObject({
							text: "omg",
							msg: Math.random()
						}))}
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
	
						this.props.dispatch(push('@Sample', {}, 'revealIn', position));
					}}
				>Go Sample page</button>
	
				<button
					onClick={() => this.props.dispatch(push('/', {}, 'flyDown'))}
				>Go Home</button>
				<br/>
				<button
					onClick={() => this.props.dispatch(push('@Sample?a=b', {}, 'flyLeft'))}
				>Go Sample (flyLeft)</button>
				<br/>
	
				<button
					onClick={() => this.props.dispatch(push('@Dashboard?x=1&y=2', {}, 'flyUp'))}
				>Go dashboard (flyUp)</button>
				<br/>
	
				<button
					onClick={() => this.props.dispatch(push('@Login?z=3', { x: 4 }, 'flyUp'))}
				>Go login (flyUp)</button>
				<br/>
	
				<button
					onClick={() => this.props.dispatch(goBack())}
				 >Go Back</button>
				<br/>
	
				<button
					onClick={() => this.props.dispatch(goForward())}
				 >Go Forward</button>
				<br/>
				<hr/>

				<br/>
				<button
					onClick={() => this.props.dispatch(push('@SampleWithSelector?a=b', {}, 'flyLeft'))}
				>Go Sample with selector</button>
				<br/>
				<button
					onClick={() => this.props.dispatch(push('@SampleWithReducer?a=b', {}, 'flyLeft'))}
				>Go Sample with reducer</button>
				<br/>
				<button
					onClick={() => this.props.dispatch(push('@SampleWithSaga?a=b', {}, 'flyLeft'))}
				>Go Sample with saga</button>
				<br/>
			</div>
		);
	}
}




Page.displayName = ID;


const mapState = {
	text: textSelector,
	altText: altTextSelector,
	objectText: objectTextSelector,
	object: objectSelector,
};



export default compose({
	ID,
	mapState,
	reducer,
	saga
})(Page)