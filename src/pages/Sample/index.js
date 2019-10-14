import React from 'react';
import log from 'loglevel';

export default (props) => {

	const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'white', 'black']
	const [id] = React.useState(Math.random())
	const [background] = React.useState(colors[Math.floor(Math.random() * colors.length)])

	log.info('[Sample] render')

	return (
    	<div style={{backgroundColor: background}}>
			<h1>ID: {props.params.id}</h1>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>
      		Sample<br/>

			<button onClick={() => props.navigator.push(`/sample/${id}?r=` + Math.random())}>Sample ID = {id}</button>
    	</div>
  	);
};
