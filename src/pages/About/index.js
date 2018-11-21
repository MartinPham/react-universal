import React from 'react';
import {ID} from "./constants";


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


// import { Text, View, TextInput, Button } from 'react-native';
// import { Link } from "react-router-native";
import { Link } from "react-router-dom";
import {frontloadConnect} from "react-frontload";

let View = (props) => (<div {...props}/>);
let Text = (props) => (<div {...props}/>);
let Button = ({onPress, title, ...props}) => (<button {...props} onClick={onPress}>{title}</button>);
let TextInput = ({onChangeText, ...props}) => (<input {...props} onChange={(event) => onChangeText(event.target.value)}/>);



class Component extends React.Component {
    render()
    {

        return (<View>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text>ABOUT US!!!</Text>
            <Text>text: </Text>
            <Text>altText: </Text>

            <TextInput />

            <Button
                onPress={() => this.props.changeText("I am from the Button")}
                title="Hey"
            />

            <Link
                to={`/about`}
            >
                <Text>Go to About</Text>
            </Link>
        </View>);
    }
}



// export default Component;

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
    const data = await (new Promise(resolve => setTimeout(() => resolve('ok async'), 1000)));
    props.changeText(data);
};


const withConnect = connect(
    mapState,
    mapDispatch
);


// export default withConnect(Component);

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