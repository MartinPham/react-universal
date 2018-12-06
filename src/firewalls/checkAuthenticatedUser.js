import React from 'react';
import Redirect from 'components/Redirect';



export default (component, {user, token, ...parameters}) => {
    // console.trace('check firewall', user, token, parameters);

    if (token && user) {
        // console.log('if token & user is set -> proceed');

        return component;
    }

    // console.log('if token || user is set -> failed');

    const refererLocation = parameters.location;
    let refererUrl = refererLocation.pathname + refererLocation.search + refererLocation.hash;

	return () => (
	    <Redirect
            to={'/login'}
            data={{
                refererUrl
            }}
        />
    );
};
