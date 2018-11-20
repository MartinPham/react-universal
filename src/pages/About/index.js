import React from 'react';
import {ID} from "./constants";



// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import injectReducer from '../../utils/redux/injectReducer';
// import injectSaga from '../../utils/redux/injectSaga';
// import reducer from './reducer';
// import saga from './saga';

// import { createStructuredSelector } from 'reselect';
//
// import changeText from "./actions/changeText";
// import textSelector from "./selectors/textSelector";
// import altTextSelector from "./selectors/altTextSelector";

class Component extends React.Component {
    render()
    {
    	console.log('render with props', this.props, global.window && window.store && window.store.getState());
    	
        return (<div id="About">

            <div>ABOUT US</div>

            <input />

        </div>);
    }
}

Component.displayName = ID;

export default Component;