import React from 'react';


export default ($this, $props, $state, ...$extra) => {
    const {id, path, exact, firewall, user, token, ...parameters} = {...$props};

    // console.log('=> Route render ' + id);


    let Component = parameters.source;

    // let finalPath = (process.env.PUBLIC_URL || '') + path;

    if (
        firewall !== null &&
        typeof firewall !== 'undefined'
    ) {
        // console.log('=> Route render: firewall ' + id);
        Component = firewall(Component, $props);
    }

    // console.log(Component);

    return (
    	<Component
			path={path}
    	/>
    );
}