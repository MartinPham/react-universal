import {Route} from "react-router";
import React from "react";

export default (routes, user, token) => Object.keys(routes).map((routeId) => {
    const route = routes[routeId];

    // console.log(`${process.env.PUBLIC_URL}${route.path}`);

    let finalPath = (process.env.PUBLIC_URL || '') + route.path;
    // console.log(finalPath);

    let Component = route.source;

    return (
        <Route
            key={routeId}
            path={finalPath}
            render={() => {
                if(typeof route.firewall !== 'undefined')
                {
                    Component = route.firewall(Component, user, token);
                }

                return (<Component/>);
            }}
            exact={typeof route.exact === 'undefined' ? false : route.exact}
        />
    );
});