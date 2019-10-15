import React from 'react';
import {Link as A} from 'components/Navigator';
import log from 'loglevel';
import styles from './styles.module.scss';

export default class Home extends React.PureComponent {
	render()
	{
		const props = this.props

		log.info('[Home] render', props)

		return (
			<div className={styles.container}>
				<h1>"HOME {props.text}"</h1>
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
				<br/>
				<A href="/sample/zzz?test=1" transition="flyLeft" data={{a: 'b'}}>Click here</A>
			</div>
		);
	}
}
