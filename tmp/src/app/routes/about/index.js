import React, { Component } from 'react';
import Page from '../../components/page';
import reducer from '../../../modules/test';
import saga from '../../../modules/saga';
import { changeText } from '../../../modules/test';

import { frontloadConnect } from 'react-frontload'


import { connect } from 'react-redux';
import { compose } from 'redux';


import injectReducer from '../../../utils/redux/injectReducer';
import injectSaga from '../../../utils/redux/injectSaga';




class About extends Component {
	componentWillMount() {
		console.log('componentWillMount')
        this.props.changeText('will mount');
        // this.props.changeText('will mount xxx');
    }

    
	render()
	{
		return (
		  <Page id="about" title="About" description="This is about really cool stuff.">
		    <p>What we're all about</p>
		    <p>ups omg oohhh omg dcm vcl</p>
		    <p>currentAltText: {this.props.currentAltText}</p>
		    <p><input type="text" 
		    onChange={(event) => this.props.changeText(event.target.value)}
		    value={this.props.currentText}
		    /></p>
		  </Page>
		);
	}
}


const mapState = state => ({
  currentText: state.test.text,
  currentAltText: state.test.altText,
});

const mapDispatch = dispatch => ({
	changeText: (text) => {
		console.log('changeText ' + text)
		dispatch(changeText(text))
	},
});



const frontload = async props =>
{
	const data = await (new Promise(resolve => setTimeout(() => resolve('ok async'), 1000)));
	props.changeText(data);
}


const withConnect = connect(
  mapState,
  mapDispatch
);




const withReducer = injectReducer({ key: "test", reducer });
const withSaga = injectSaga({ key: "test", saga });

Page.displayName = "About";

export default compose(
	withReducer,
	withSaga,
	withConnect,
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(About)
);

// export default connect(
//   mapState,
//   mapDispatch
// )(
//   frontloadConnect(frontload, {
//     onMount: true,
//     onUpdate: false
//   })(About)
// );