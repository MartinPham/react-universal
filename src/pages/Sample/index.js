import {BasePurePage} from 'pages/Page';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import push from 'components/Navigator/actions/push';
import go from 'components/Navigator/actions/go';
import goBack from 'components/Navigator/actions/goBack';
import goForward from 'components/Navigator/actions/goForward';



import { ID } from "./constants";

import render from './render';

class Page extends BasePurePage {
	render() {
		return render(this, this.props, this.state);
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
);