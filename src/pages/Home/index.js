import React from 'react';
import {Link} from 'components/Navigator';
import log from 'loglevel';


export default (props) => {
	log.info('[Home] render')

	return (
    	<div style={{backgroundColor: 'white'}}>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>
      		Home Home Home Home Home Home Home Home Home Home Home Home <br/>

			<button onClick={() => props.navigator.push('/sample')}>Sample</button>
			<br/>
			{/* <button onClick={() => history.push('/sample')}>Sample h</button> */}
			<br/>
			<Link href="/sample">Click here</Link>
    	</div>
	);
}
