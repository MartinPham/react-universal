import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import log from 'loglevel';

const QUERY = gql`
{
  tasks {
    name
  }
}
`;

export default (props) => {
	log.info(`[SampleGraphQLHook] render`)
	
	const {loading, error, data} = useQuery(QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	
	return (
		<div>
			Home
			<hr/>
			<ol>
				{data.tasks.map((task, key) => (<li key={key}>{task.name}</li>))}
			</ol>
		</div>
	);
}
