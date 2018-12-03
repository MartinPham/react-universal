import BaseComponent from 'components/BaseComponent';

// import './style.scss';
import { getAllParams } from 'utils/queryString';
import PropTypes from 'prop-types';

class Page extends BaseComponent {
	state = {};

	constructor(props) {
		super(props);

		this.queryParams = getAllParams();
		this.params = props.match.params;
		this.data = {};
		this.action = null;
		this.referer = null;
		this.location = null;


		if (props) {
			if (props.location) {
				this.location = props.location;

				if (props.location.state) {
					if (props.location.state.referer) {
						this.referer = props.location.state.referer;
					}
					if (props.location.state.params) {
						this.data = props.location.state.params;
					}
				}
			}
			if (props.history && props.history.action) {
				this.action = props.history.action;
			}
		}
	}

	go(path, data, transition, origin) {
		this.props.go(path, data, transition, origin);
	}
}

Page.contextTypes = {
	...BaseComponent.contextTypes
};

export default Page;
