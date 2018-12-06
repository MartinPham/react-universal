import React from 'react';


// import { frontloadConnect } from "react-frontload";
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

import changeText from "./actions/changeText";
import textSelector from "./selectors/textSelector";
import altTextSelector from "./selectors/altTextSelector";

import render from './render';
import goBack from "../../components/Navigator/actions/goBack";
import goForward from "../../components/Navigator/actions/goForward";



class Page extends React.Component {
    render()
    {

        console.log('HOME RENDER: Home')
        return render(this, this.props, this.state);
    }
}




Page.displayName = ID;


const mapState = createStructuredSelector({
    text: textSelector(),
    altText: altTextSelector(),
});

const mapDispatch = dispatch => ({
    changeText: (text) => {
        dispatch(changeText(text))
    },
    push: (path, data, transition, originPosition) => dispatch(push(path, data, transition, originPosition)),
    goBack: () => dispatch(goBack()),
    goForward: () => dispatch(goForward()),
});



// const frontload = async props =>
// {
    // const data = await (new Promise(resolve => setTimeout(() => resolve('ciao mondo from async'), 1000)));
    // props.changeText(data);
// };


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
    // frontloadConnect(frontload, {
    //     onMount: true,
    //     onUpdate: false
    // })(Page)
    Page
);


// export default compose(
//     withReducer,
//     withSaga,
//     withConnect,
// )(Page);