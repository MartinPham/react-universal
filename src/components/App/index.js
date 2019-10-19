import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {StylesProvider} from '@material-ui/core/styles';
import Navigator from 'components/Navigator';
import {Route} from 'components/Navigator';
import log from 'loglevel';
import routes from 'config/routes';
import theme from 'config/theme';
import sharedHistory from 'utils/sharedHistory';
import Header from 'components/Header';
import Drawer from 'components/Drawer';
// import {ApolloProvider} from '@apollo/react-hooks';
// import graphqlClient from 'utils/graphql/client';

export default (props) => {
	log.info('[App] render')

	return (
		// <ApolloProvider client={graphqlClient()}>
			<ThemeProvider theme={theme}>
				<StylesProvider injectFirst>
					<Drawer/>
					<Header/>
					<Navigator>
						{
							Object.keys(routes).map((routeId) => {
								const route = routes[routeId];
						
								return (
									<Route
										key={routeId}
										id={routeId}
										{...{
											...route,
											path: sharedHistory().basename + route.path
										}}
										route={route}
										pageData={props.pageData}
									/>
								);
							})
						}
					</Navigator>
				</StylesProvider>
			</ThemeProvider>
		// </ApolloProvider>
  	);
}
