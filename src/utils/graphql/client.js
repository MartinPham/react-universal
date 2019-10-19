import {split} from "apollo-link"
import {HttpLink, createHttpLink} from "apollo-link-http"
import {WebSocketLink} from "apollo-link-ws"
import {getMainDefinition} from "apollo-utilities"
import {ApolloClient} from "apollo-client"
import {InMemoryCache} from "apollo-cache-inmemory"
import parameters from 'config/parameters'
import log from 'loglevel'

let clientInstance = null

export default () => {
	if(clientInstance === null)
	{
		log.info('[graphql] Creating graphql client instance')
		
		const apolloOptions = {
			cache: new InMemoryCache()
		}

		if(parameters.graphql.subscriptionEndpoint)
		{
			// Create an http link:
			const httpLink = new HttpLink({
				uri: parameters.graphql.endpoint
			})

			// Create a WebSocket link:
			const wsLink = new WebSocketLink({
				uri: parameters.graphql.subscriptionEndpoint,
				options: {
					reconnect: true
				}
			})

			// using the ability to split links, you can send data to each link
			// depending on what kind of operation is being sent
			const link = split(
				// split based on operation type
				({ query }) => {
					const definition = getMainDefinition(query)
					return (
						definition.kind === "OperationDefinition"
						&& definition.operation === "subscription"
					)
				},
				wsLink,
				httpLink
			)

			apolloOptions.link = link
		} else {
			apolloOptions.link = createHttpLink({ 
				uri: parameters.graphql.endpoint
			})
		}

		clientInstance = new ApolloClient(apolloOptions)
	}

	return clientInstance
}
