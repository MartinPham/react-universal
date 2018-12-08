// import React from 'react';
import BasePage from 'pages/Page';

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';
// import log from 'utils/log';

import push from 'components/Navigator/actions/push';
import go from 'components/Navigator/actions/go';
import goBack from 'components/Navigator/actions/goBack';
import goForward from 'components/Navigator/actions/goForward';

import reducer from './reducer';
import saga from './saga';

import { createStructuredSelector } from 'reselect';

import textSelector from "./selectors/textSelector";
import changeText from "./actions/changeText";

import { ID } from "./constants";

import render from './render';

class Page extends BasePage {
	render() {
	    // console.log('PAGE RENDER: About');
		return render(this, this.props, this.state);
	}
}

Page.displayName = ID;


const mapState = createStructuredSelector({
	text: textSelector(),
});

const mapDispatch = dispatch => ({
	changeText: (text) => {
		dispatch(changeText(text))
	},
    push: (path, data, transition) => dispatch(push(path, data, transition)),
    go: (index) => dispatch(go(index)),
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
