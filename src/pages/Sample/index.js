import React from 'react';
import log from 'loglevel';
import styles from './styles.module.scss';
import {Link as A} from 'components/Navigator';

export default (props) => {
	log.info('[Sample] render')

	const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'white', 'black']
	const [id] = React.useState(Math.random())
	const [background] = React.useState(colors[Math.floor(Math.random() * colors.length)])


	return (
    	<div style={{backgroundColor: background}}>
			<div className={styles.heading}>ID: {props.params.id}</div>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>

			<button onClick={() => props.navigator.push(`/sample/${id}?r=` + Math.random())}>Sample ID = {id}</button>
			<br/>
			<A href="/" transition="flyUp">Home here</A>
    	</div>
  	);
};
