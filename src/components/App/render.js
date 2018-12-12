import React from 'react';

import Route from 'components/Route';
import Navigator from "components/Navigator";

import routes from 'config/routes';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




const theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#1e88e5',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			// light: '#0066ff',
			main: '#f50057',
			// dark: will be calculated from palette.secondary.main,
			// contrastText: '#ffcc00',
		},
		// error: will use the default color
	},
	typography: {
		useNextVariants: true,
	},
});

const Header = () => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="h6" color="inherit" noWrap>
				React Universal
			</Typography>
		</Toolbar>
	</AppBar>
);


export default ($this, $props, $state, ...$extra) => {
        return (
			<MuiThemeProvider theme={theme}>
				<Header/>
				<Navigator>
					{
						Object.keys(routes).map((routeId) => {
							const route = routes[routeId];


							const pathPrefix = (process.env.PUBLIC_URL || '');


							return (
								<Route
									key={routeId}
									id={routeId}
									{...{
										...route,
										path: pathPrefix + route.path
									}}
								/>
							);
						})
					}

				</Navigator>
			</MuiThemeProvider>
        );
}