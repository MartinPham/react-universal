import React from 'react';
import { Route } from 'react-router';
import Navigator from 'components/Navigator';


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <Navigator>
                {
                    Object.keys($routes).map((routeId) => {
                        const route = $routes[routeId];

                        // console.log(`${process.env.PUBLIC_URL}${route.path}`);

                        let finalPath = (process.env.PUBLIC_URL || '') + route.path;

                        return (
                            <Route
                                key={routeId}
                                path={finalPath}
                                component={route.source}
                                exact={typeof route.exact === 'undefined' ? false : route.exact}
                            />
                        );
                    })
                }
        </Navigator>
    );
}