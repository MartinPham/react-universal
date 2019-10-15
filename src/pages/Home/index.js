import React from 'react';
import {Link as A} from 'components/Navigator';
import log from 'loglevel';
import styles from './styles.module.scss';


export default (props) => {
	log.info('[Home] render')

	return (
    	<div className={styles.container}>
			<h1>HOME</h1>
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
			<A href="/sample" transition="flyLeft">Click here</A>
    	</div>
	);
}
