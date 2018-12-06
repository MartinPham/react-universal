import React from 'react';

const failedComponent = () => (<div>Failed</div>);

export default (component, user, token) => {
    console.trace('check firewall', user, token);

    if (token && user) {
        console.log('if token & user is set -> proceed');

        return component;
    }

    console.log('if token || user is set -> failed');


	return failedComponent;
};
