import React from 'react';
import log from 'loglevel';
import styles from './styles.module.scss';
import {Link as A} from 'components/Navigator';

export default (props) => {
	log.info('[Sample] render')

	return (
    	<div>
			<div className={styles.heading}>Sample With Initial Data</div>
      		<div>
				{props.initialData.text}
			</div>

			<A href="/" transition="flyUp">Home here</A>
    	</div>
  	);
};
