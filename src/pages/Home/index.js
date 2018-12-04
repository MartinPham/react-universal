import React from 'react';


import { frontloadConnect } from "react-frontload";
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';
import log from 'utils/log';

import push from 'components/Navigator/actions/push';

import reducer from './reducer';
import saga from './saga';

import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";

import changeText from "./actions/changeText";
import textSelector from "./selectors/textSelector";
import altTextSelector from "./selectors/altTextSelector";

import render from './render';
import goBack from "../../components/Navigator/actions/goBack";
import goForward from "../../components/Navigator/actions/goForward";



class Component extends React.Component {
    render()
    {
        return render(this, this.props, this.state);
    }
}




Component.displayName = ID;


const mapState = createStructuredSelector({
    text: textSelector(),
    altText: altTextSelector(),
});

const mapDispatch = dispatch => ({
    changeText: (text) => {
        dispatch(changeText(text))
    },
    push: (path, data, transition) => dispatch(push(path, data, transition)),
    goBack: () => dispatch(goBack()),
    goForward: () => dispatch(goForward()),
});



const frontload = async props =>
{
	log('frontload async...')
    const data = await (new Promise(resolve => setTimeout(() => resolve('ok async'), 1)));
    props.changeText(data);
};


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
)(
    frontloadConnect(frontload, {
        onMount: true,
        onUpdate: false
    })(Component)
);


// export default compose(
//     withReducer,
//     withSaga,
//     withConnect,
// )(Component);