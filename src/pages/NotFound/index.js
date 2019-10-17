import React from 'react';
import {Link as A} from 'components/Navigator';

export default (props) => (
	<>
		<h1>404 - Not Found</h1>

		Try some links:
		<ol>
			<li><A href='@Home?test=0'>Home</A></li>
			<li><A href='@Sample?test=1x' data={{testData: 'hey 1'}} transition='flyUp'>Sample (flyUp)</A></li>
			<li><A href='@Sample?test=1y' data={{testData: 'hey 2'}} transition='flyLeft'>Sample (flyLeft)</A></li>
			<li><A href='@Sample?test=1z' data={{testData: 'hey 3'}} transition='revealIn'>Sample (revealIn)</A></li>
			<li><A href='@SampleSame?test=2' data={{id: 'test'}}>Same Sample</A></li>
			<li><A href='@SampleWithParam?test=3' data={{id: 'testParam'}}>Sample With Params</A></li>
			<li><A href='@SampleWithSelector?test=4'>Sample With Selector</A></li>
			<li><A href='@SampleWithReducer?test=5'>Sample With Reducer</A></li>
			<li><A href='@SampleWithSaga?test=6'>Sample With Saga</A></li>
			<hr/>
			<li><button onClick={() => props.navigator.goBack()}>Go Back</button></li>
			<li><button onClick={() => props.navigator.goForward()}>Go Forward</button></li>
			<li><button onClick={() => props.navigator.go(-2)}>Go -2 pages</button></li>
		</ol>
	</>
)
