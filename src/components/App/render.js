import React from 'react';
import { Route } from 'react-router';

import Navigator from 'components/Navigator';
import routes from "config/routes";


export default ($this, $props, $state, $routes, ...$extra) => {
    console.log('app render');

    const user = '';
    const token = '';

    /*
    return (
        <Navigator routes={routes} />
    );
    */


    return (
        <Navigator>
                {
                    Object.keys($routes).map((routeId) => {
                        const route = $routes[routeId];

                        // console.log(`${process.env.PUBLIC_URL}${route.path}`);

                        let finalPath = (process.env.PUBLIC_URL || '') + route.path;
                        // console.log(finalPath);

                        let component = route.source;

                        if(typeof route.firewall !== 'undefined')
                        {
                            component = route.firewall(component, user, token);
                        }


                        return (
                            <Route
                                key={routeId}
                                path={finalPath}
                                component={component}
                                exact={typeof route.exact === 'undefined' ? false : route.exact}
                            />
                        );
                    })
                }
        </Navigator>
    );

}