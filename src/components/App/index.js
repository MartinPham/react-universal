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

                        // console.log(`${process.env.PUBLIC_URL}${route.path}`);

                        // let finalPath = (process.env.PUBLIC_URL || '') + route.path;
                        // console.log(finalPath);
                        //
                        // let component = route.source;

                        // if(typeof route.firewall !== 'undefined')
                        // {
                        //     component = route.firewall(component, user, token);
                        // }


                        return (
                            <Route
                                key={routeId}
                                id={routeId}
                                {...route}
                            />
                        );
                    })
                }

            </Navigator>
        );
	}
}

export default App;
