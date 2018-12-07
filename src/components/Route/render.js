import React from 'react';

import { Route } from 'react-router';


export default ($this, $props, $state, ...$extra) => {
    const {id, path, exact, firewall, user, token, ...parameters} = {...$props};

    // console.log('=> Route render ' + id);


    let component = parameters.source;

    // let finalPath = (process.env.PUBLIC_URL || '') + path;

    if (
        firewall !== null &&
        typeof firewall !== 'undefined'
    ) {
        // console.log('=> Route render: firewall ' + id);
        component = firewall(component, $props);
    }

    // console.log(finalPath);

    return (
        <Route
            path={path}
            component={component}
            exact={typeof exact === 'undefined' ? false : exact}
            {...parameters}
        />
    );
}