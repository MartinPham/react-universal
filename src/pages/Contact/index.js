import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';
// import log from 'utils/log';

import push from 'components/Navigator/actions/push';

import reducer from './reducer';
import saga from './saga';

import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";

import render from './render';
import goBack from "../../components/Navigator/actions/goBack";
import goForward from "../../components/Navigator/actions/goForward";

class Page extends React.Component {
    render() {
        return render(this, this.props, this.state);
    }
}

Page.displayName = ID;


const mapState = createStructuredSelector({

});

const mapDispatch = dispatch => ({
    push: (path, data, transition) => dispatch(push(path, data, transition)),
    goBack: () => dispatch(goBack()),
    goForward: () => dispatch(goForward()),
});


const withConnect = connect(
    mapState,
    mapDispatch
);




const withReducer = injectReducer({ key: ID, reducer });
const withSaga = injectSaga({ key: ID, saga });


export default compose(
    withReducer,
    withSaga,
    withConnect,
)(Page);
