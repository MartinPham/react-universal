// import React from "react";
import BaseComponent from 'components/Component';


export class Router extends BaseComponent {
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