import React from 'react';
// import { Heading } from "./styles";
import {getBoundingRect} from "utils/dom";
import {BasePurePage} from 'pages/Page';

import compose from 'utils/redux/compose';


import reducer from './reducer';
import saga from './saga';



import { ID } from "./constants";

import changeText from "./actions/changeText";
import textSelector from "./selectors/textSelector";
import altTextSelector from "./selectors/altTextSelector";
import objectTextSelector from "./selectors/objectTextSelector";
import objectSelector from "./selectors/objectSelector";


import changeObject from "./actions/changeObject";
import changeObjectText from "./actions/changeObjectText";

import A from 'components/Navigator/Link';


class Page extends BasePurePage {
	state = {
		count: 1
	};

	render()
	{
		return (
			<div>
				<h1>Hello world!!!</h1>
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
	
						this.navigator.push('@Sample', {}, 'revealIn', position);
					}}
				>Go Sample page</button>
	
				<button
					onClick={() => this.navigator.push('/', {}, 'flyDown')}
				>Go Home</button>
				<br/>
				<button
					onClick={() => this.navigator.push('@Sample?a=b', {}, 'flyLeft')}
				>Go Sample (flyLeft)</button>
				<br/>
	
				<button
					onClick={() => this.navigator.push('@Dashboard?x=1&y=2', {}, 'flyUp')}
				>Go dashboard (flyUp)</button>
				<br/>
	
				<button
					onClick={() => this.navigator.push('@Login?z=3', { x: 4 }, 'flyUp')}
				>Go login (flyUp)</button>
				<br/>
	
				<button
					onClick={() => this.navigator.goBack()}
				 >Go Back</button>
				<br/>
	
				<button
					onClick={() => this.navigator.goForward()}
				 >Go Forward</button>
				<br/>
				<hr/>

				<br/>
				<A href='@SampleWithParam?id=3' data={{id: 'test', y:2}} transition='flyLeft'>Go Sample with param</A>

				<br/>
				<A href='@SampleWithFrontload?id=3' data={{id: 'test', y:2}} transition='flyLeft'>Go Sample with frontload</A>

				<br/>
				<A href='@SampleWithSelector?a=b' data={{x: 1, y:2}} transition='flyLeft'>Go Sample with selector</A>
				
				<br/>
				<A href='@SampleWithReducer?b=c' data={{x: 1, b:2}} transition='flyLeft'>Go Sample with reducer</A>
				
				<br/>
				<A href='@SampleWithSaga?c=d' data={{c: 1, y:2}} transition='flyLeft'>Go Sample with saga</A>
				
				<br/>
				<hr/>

				<A href='/sample?a=b&x=3' data={{x: 1, y:2}} transition='flyLeft'>Go with link (directly)</A>
			</div>
		);
	}
}


const frontload = async props =>
{
	const data = await (new Promise(resolve => setTimeout(() => resolve('ciao mondo from async'), 1000)));
	props.dispatch(changeText(data))
};



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
	saga,
	frontload
})(Page)