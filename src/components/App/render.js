import React from 'react';
import { Route } from 'react-router';
import Navigator from 'components/Navigator';


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <Navigator>
                {
                    Object.keys($routes).map((routeId) => {
                        const route = $routes[routeId];

                        return (
                            <Route
                                key={routeId}
                                path={route.path}
                                component={route.source}
                                exact={typeof route.exact === 'undefined' ? false : route.exact}
                            />
                        );
                    })
                }
        </Navigator>
    );
}