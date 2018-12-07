import React from "react";
import {Text} from "ink";
import BaseComponent from 'components/Component';

import terminalImage from 'terminal-image';
import Box from 'ink-box';

export default class Image extends BaseComponent {
    state = {
    	image: null
    }

    componentDidMount() {
    	terminalImage
    		.file(this.props.src)
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