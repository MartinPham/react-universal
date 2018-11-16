import React, { Component } from 'react';
import Page from '../../components/page';
import { changeText } from '../../../modules/test';

import { frontloadConnect } from 'react-frontload'


import { connect } from 'react-redux';




class About extends Component {
	componentWillMount() {
		console.log('componentWillMount')
        this.props.changeText('will mount');
    }
	render()
	{
		return (
		  <Page id="about" title="About" description="This is about really cool stuff.">
		    <p>What we're all about</p>
		    <p>ups omg oohhh</p>
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
 

// export default connect(
//   mapState,
//   mapDispatch
// )(About);

export default connect(
  mapState,
  mapDispatch
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(About)
);