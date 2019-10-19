import React from 'react';
import log from 'loglevel';
import {Link as A} from 'components/Navigator';

export default (props) => {
	log.info(`[Test2] render`)
	
	return (
		<div>
			<h1>Test</h1>
			sample sample sample sample sample <br/>
			sample sample sample sample sample <br/>
			sample sample sample sample sample <br/>
			sample sample sample sample sample <br/>

			<hr/>
			<A href={`@Home?r=${Math.random()}`} transition='flyLeft'>Home</A>
			<br/>
			<A href={`@Test?r=${Math.random()}`} transition='flyLeft'>Test fly</A>
			<br/>
			<A href={`@Test2?r=${Math.random()}`} transition='flyLeft'>Test 2 fly</A>
		</div>
	);
}
