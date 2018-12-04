import React, { Component } from 'react';


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

import { SafeAreaView as View, Text, Button, TextInput } from 'react-native';

class Page extends Component {
    render()
    {
        log('render with props', this.props);

        return (<View>
        	<Text></Text>
        	<Text></Text>
            <Heading>Hello world!!!</Heading>

            <Text>text: {this.props.text}</Text>
            <Text>altText: {this.props.altText}</Text>

            <TextInput value={this.props.text} onChangeText={(value) => this.props.changeText(value)}/>

            <Button
                onPress={() => this.props.changeText("I am from the Button")}
                title="Hey"
            />
        </View>);
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
)(Page);

