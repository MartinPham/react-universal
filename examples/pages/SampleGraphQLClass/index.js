import React from 'react';
import gql from 'graphql-tag';
import log from 'loglevel';
import {Query} from "react-apollo";

const QUERY = gql`
{
  tasks {
    name
  }
}
`;

export default class SampleGraphQLClass extends React.Component {
	render()
	{
		log.info(`[SampleGraphQLClass] render`)
		
		return (
			<div>
				<h1>Test</h1>
				<hr/>
				<Query query={QUERY}>
					{({ loading, error, data }) => {
						if (loading) return "Loading...";
						if (error) return `Error! ${error.message}`;

						return (
							<ul>
							{data.tasks.map((task, key) => (
								<li key={key}>{task.name}</li>
							))}
							</ul>
						);
					}}
				</Query>
			</div>
		)
	}
}