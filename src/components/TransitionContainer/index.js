import React from "react";
import {PureComponent} from 'components/Component';

import render, {getDerivedStateFromProps, componentDidMount, componentDidUpdate} from './render';

export default class TransitionView extends PureComponent {
	
	state = {};
	animatedParallel = null;


	static getDerivedStateFromProps(props, state) {
		return getDerivedStateFromProps(props, state);
	}

    componentDidMount() {
    	return componentDidMount(this, this.props, this.state);
    }

    componentDidUpdate() {
    	return componentDidMount(this, this.props, this.state);
    }

    render() {
        return render(this, this.props, this.state);
    }
}