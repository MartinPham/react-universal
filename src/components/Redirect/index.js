import React from 'react';
import BaseComponent from 'components/Component';
import {ID} from "./constants";
import {createStructuredSelector} from "reselect";


import {connect} from "react-redux";
import push from "components/Navigator/actions/push";

class Component extends BaseComponent {
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.push(this.props.to, this.props.data || {})
        }, 400);
    }

    render() {
        return null;
    }
}


Component.displayName = ID;


const mapState = createStructuredSelector({

});

const mapDispatch = dispatch => ({
    push: (path, data, transition) => dispatch(push(path, data, transition))
});




const withConnect = connect(
    mapState,
    mapDispatch
);


export default withConnect(Component);