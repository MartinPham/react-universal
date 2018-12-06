import React from 'react';
import {Route} from "react-router";


class Component extends React.Component {
    shouldComponentUpdate(nextProps, nextState)
    {
        return false;
    }

    render()
    {
        console.log('render routelist');

        return (
            <>
                {
                    Object.keys(this.props.routes).map((routeId) => {
                        const route = this.props.routes[routeId];

                        // console.log(`${process.env.PUBLIC_URL}${route.path}`);

                        let finalPath = (process.env.PUBLIC_URL || '') + route.path;
                        console.log(finalPath);

                        let Component = route.source;

                        return (
                            <Route
                                key={routeId}
                                path={finalPath}
                                render={() => {
                                    console.log('render route ' + routeId);


                                    if(typeof route.firewall !== 'undefined')
                                    {
                                        Component = route.firewall(Component, this.props.user, this.props.token);
                                    }

                                    return (<Component/>);
                                }}
                                exact={typeof route.exact === 'undefined' ? false : route.exact}
                            />
                        );
                    })
                }
            </>
        );
    }
}

export default Component;