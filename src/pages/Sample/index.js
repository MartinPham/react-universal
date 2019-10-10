import React from 'react';
import {BasePurePage} from 'pages/Page';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import push from 'components/Navigator/actions/push';
import go from 'components/Navigator/actions/go';
import goBack from 'components/Navigator/actions/goBack';
import goForward from 'components/Navigator/actions/goForward';



import { ID } from "./constants";


class Page extends BasePurePage {
	render() {
		return (
			<div>
				Sample

				<hr/>
				<button
					onClick={() => this.props.push('@Sample', { random: Math.random() }, 'flyLeft')}
				>Go Sample (flyLeft)</button>
				<hr/>

				<button
					onClick={() => this.props.push('@Sample', { random: Math.random() }, 'flyUp')}
				>Go Sample (flyUp)</button>

				<hr/>


				<button
					onClick={() => this.props.goBack()}
				>Go Back</button>
				<hr/>

				<button
					onClick={() => this.props.goForward()}
				>Go Forward</button>

				<hr/>
				<button
					onClick={() => this.props.go(-2)}
				>Go -2</button>
				<hr/>
				<button
					onClick={() => this.props.go(2)}
				>Go +2</button>

        </div>
		)
	}
}

Page.displayName = ID;


const mapState = createStructuredSelector({

});

const mapDispatch = dispatch => ({
    push: (path, data, transition) => dispatch(push(path, data, transition)),
    go: (index) => dispatch(go(index)),
    goBack: () => dispatch(goBack()),
    goForward: () => dispatch(goForward()),
});

export default connect(
    mapState,
    mapDispatch
)(Page);