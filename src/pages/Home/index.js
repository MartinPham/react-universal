import React from 'react';
import {Link as A} from 'components/Navigator';
import log from 'loglevel';
import styles from './styles.module.scss';


export default class Home extends React.PureComponent {
	render()
	{
		const props = this.props

		
		console.log('data = ', this.props.initialData)


		log.info('[Home] render', props)

		return (
			<div className={styles.container}>
				<h1>"HOME {props.text}" - {this.props.initialData.text}</h1>
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
	
				<button onClick={() => props.navigator.push('@Sample?z=1')}>Sample</button>
				<br/>
				<br/>
				<A href="@Sample?test=1" transition="flyLeft" data={{a: 'b'}}>Click here</A>
				<br/>
				<A href="@SampleSame?test=1" transition="flyLeft" data={{id: 'zzz', big: 'ooo'}}>Click here 2</A>
				<br/>
				<A href="@SampleWithParam?test=1" transition="flyLeft" data={{id: 'kkk', big: 'ooo'}}>Click here 3</A>
			</div>
		);
	}
}
