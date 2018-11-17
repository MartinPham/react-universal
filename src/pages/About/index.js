import React from 'react';
import {ID} from "./constants";
import { Text, View, TextInput, Button } from 'react-native';



import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../utils/redux/injectReducer';
import injectSaga from '../../utils/redux/injectSaga';
import reducer from './reducer';
import saga from './saga';

import { createStructuredSelector } from 'reselect';

import changeText from "./actions/changeText";
import textSelector from "./selectors/textSelector";
import altTextSelector from "./selectors/altTextSelector";
// import platform, {PLATFORM_BROWSER, PLATFORM_NATIVE} from "../../utils/platform";


// let View = (props) => (<div {...props}/>);
// let Text = (props) => (<div {...props}/>);
// let Button = (props) => (<button {...props} onClick={props.onPress}>{props.title}</button>);
// let TextInput = (props) => (<input {...props} onChange={(event) => props.onChangeText(event.target.value)}/>);



class Component extends React.Component {
    render()
    {
        return (<View>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text>ABOUT US</Text>
            <Text>text: {this.props.text}</Text>
            <Text>altText: {this.props.altText}</Text>

            <TextInput value={this.props.text} onChangeText={(text) => this.props.changeText(text)}/>

            <Button
                onPress={() => this.props.changeText("I am from the Button")}
                title="Hey"
            />
        </View>);
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



// const frontload = async props =>
// {
    // const data = await (new Promise(resolve => setTimeout(() => resolve('ok async'), 1000)));
    // props.changeText(data);
// };


const withConnect = connect(
    mapState,
    mapDispatch
);




const withReducer = injectReducer({ key: ID, reducer });
const withSaga = injectSaga({ key: ID, saga });


// export default compose(
//     withReducer,
//     withSaga,
//     withConnect,
// )(
//     frontloadConnect(frontload, {
//         onMount: true,
//         onUpdate: false
//     })(Component)
// );


export default compose(
    withReducer,
    withSaga,
    withConnect,
)(Component);