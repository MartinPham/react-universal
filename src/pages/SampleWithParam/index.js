import React from 'react';

import {Link as A} from 'components/Navigator';

export default (props) => {
	console.log('props', props)
	
	return (
		<div>
			<h1>Sample with param id = {props.params.id} . {props.initialData.text}</h1>

			<hr/>
			<A href='@Sample' data={{ random: Math.random() }} transition='flyLeft'>Go Sample (flyLeft)</A>
			<hr/>

			<A href='@Sample' data={{ random: Math.random() }} transition='flyUp'>Go Sample (flyUp)</A>
			<hr/>

			<button
				onClick={() => props.navigator.goBack()}
			>Go Back</button>
			<hr/>

			<button
				onClick={() => props.navigator.goForward()}
			>Go Forward</button>

			<hr/>
			<button
				onClick={() => props.navigator.go(-2)}
			>Go -2</button>
			<hr/>
			<button
				onClick={() => props.navigator.go(2)}
			>Go +2</button>
		</div>
	);
}