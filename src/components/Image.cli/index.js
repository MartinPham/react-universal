import React from "react";
// import {Text} from "ink";
import {PureComponent} from 'components/Component';

import terminalImage from 'terminal-image';
import Box from 'ink-box';

export default class Image extends PureComponent {
    state = {
    	image: null
    };

    componentDidMount() {
    	terminalImage
    		.buffer(this.props.src)
    		.then(image => this.setState({
    			image
    		}));
    }

    render() {
    	if(this.state.image !== null)
    	{
    		return (
    			<>
    				<div />
	    			<Box float="center">
	    				{this.state.image}
					</Box>
					<div />
				</>
			);
    	}
  		

    	return null;
    }
}