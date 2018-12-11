// import React from 'react';
import {PureComponent} from 'components/Component';
import {ID} from "./constants";
import {createStructuredSelector} from "reselect";


import {connect} from "react-redux";
import push from "components/Navigator/actions/push";

// import platform, {PLATFORM_CLI} from "utils/platform";

class Component extends PureComponent {
    // shouldComponentUpdate() {
    //     return false;
    // }

    componentDidMount() {
        setTimeout(() => {
            this.props.push(this.props.to, this.props.data || {})
        }, 1000);
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