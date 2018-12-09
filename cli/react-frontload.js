import React from './react';
import {Component} from 'ink';

class FrontloadConnectedComponent extends Component {
	componentDidMount ()
	{
		this.props.frontload(this.props.componentProps);
	}

  	render () 
  	{
    	return (<this.props.component {...this.props.componentProps} />);
  	}
}

export const frontloadConnect = (frontload, options = {}) => (component) => (props) => (
  <FrontloadConnectedComponent
    frontload={frontload}
    component={component}
    componentProps={props}
    options={options} />
)

