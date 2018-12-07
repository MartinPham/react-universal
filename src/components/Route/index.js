import React from 'react';
import BaseComponent from 'components/Component';
import { Route } from 'react-router';
import {ID} from "./constants";
import {createStructuredSelector} from "reselect";

import selectUser from "components/AuthProvider/selectors/selectUser";
import selectToken from "components/AuthProvider/selectors/selectToken";

import {connect} from "react-redux";

class Component extends BaseComponent {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {id, path, exact, firewall, user, token, ...parameters} = {...this.props};

        // console.log('=> Route render ' + id);


        let component = parameters.source;

        // let finalPath = (process.env.PUBLIC_URL || '') + path;

        if (
            firewall !== null &&
            typeof firewall !== 'undefined'
        ) {
            // console.log('=> Route render: firewall ' + id);
            component = firewall(component, this.props);
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
}


Component.displayName = ID;


const mapState = createStructuredSelector({
    user: selectUser(),
    token: selectToken()
});

const mapDispatch = dispatch => ({

});




const withConnect = connect(
    mapState,
    mapDispatch
);


export default withConnect(Component);