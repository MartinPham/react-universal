// import React from "react";
import {PureComponent} from 'components/Component';
import PropTypes from 'prop-types';

export class Router extends PureComponent {

	static childContextTypes = {
		history: PropTypes.object,
	};
	
	state = {
		location: null
	};


	unlisten = null;

   	componentDidMount() {
		this.unlisten = this.props.history.listen(location => {
			// console.log('history change', location, this.props.history);
			this.setState({
				location
			})
		});  	
    }

	getChildContext() {
		return {
			history: this.props.history
		};
	}    

    componentWillUnmount() {
    	this.unlisten();
    }

    render() {

        return this.props.children;
    }
}