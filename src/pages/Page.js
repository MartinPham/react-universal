import Component, {PureComponent} from 'components/Component';
import { ReactReduxContext } from 'react-redux';
import push from 'components/Navigator/actions/push';
import goBack from "components/Navigator/actions/goBack";
import goForward from "components/Navigator/actions/goForward";
import go from "components/Navigator/actions/go";
import queryString from 'query-string';

class Navigator {
	store = null;
	history = null;
	location = null;
	match = null;
	query = {};
	data = {};
	param = {};

	constructor(store, history, location, match) {
		this.store = store;
		this.history = history;
		this.location = location;

		this.query = queryString.parse(this.location.search)
		this.data = (location.state || {}).data || {}
		this.param = match.params || {}
	}

	push = (path, data = {}, transition = '', originPosition = {}) => {
		this.store.dispatch(push(path, data, transition, originPosition))
	}

	goBack = () => {
		this.store.dispatch(goBack())
	}

	goForward = () => {
		this.store.dispatch(goForward())
	}

	go = (index) => {
		this.store.dispatch(go(index))
	}
}


export default class BasePage extends Component {
	static contextType = ReactReduxContext;
	store = null;


	constructor(props, context) {
		super(props, context);
		this.store = context.store;
		this.navigator = new Navigator(this.store, this.props.history, this.props.location, this.props.match)
	}



}


export class BasePurePage extends PureComponent {
	static contextType = ReactReduxContext;
	store = null;


	constructor(props, context) {
		super(props, context);
		this.store = context.store;
		this.navigator = new Navigator(this.store, this.props.history, this.props.location, this.props.match)
	}
}