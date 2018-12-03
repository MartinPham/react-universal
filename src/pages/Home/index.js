import React from 'react';


import { frontloadConnect } from "react-frontload";
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';
import log from 'utils/log';


import reducer from './reducer';
import saga from './saga';

import { createStructuredSelector } from 'reselect';


import { ID } from "./constants";

import changeText from "./actions/changeText";
import textSelector from "./selectors/textSelector";
import altTextSelector from "./selectors/altTextSelector";

import { Heading } from "./styles";



class Component extends React.Component {
    render()
    {
        log('render with props', this.props);

        return (<div>
            <Heading>Hello world!!! oh hey</Heading>
            <Heading>I'm a baby baby shark 😇 🤬</Heading>
            <p>text: {this.props.text}</p>
            <p>altText: {this.props.altText}</p>

            <input type="text" value={this.props.text} onChange={(event) => this.props.changeText(event.target.value)}/>

            <button
                onClick={() => this.props.changeText("I am from the Button")}
            >Hey</button>
        </div>);
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