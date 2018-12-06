import React from 'react';
// import {Route} from 'react-router';
import Route from 'components/Route';

import routes from 'config/routes';
import Navigator from "components/Navigator";
// import AuthProvider from 'components/AuthProvider';





class App extends React.Component {
	render() {
	    console.log('--- Render App');

        return (
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
        );
	}
}

export default App;
