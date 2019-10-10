import Component, {PureComponent} from 'components/Component';
import { ReactReduxContext } from 'react-redux';
import push from 'components/Navigator/actions/push';
import goBack from "components/Navigator/actions/goBack";
import goForward from "components/Navigator/actions/goForward";
import go from "components/Navigator/actions/go";

export default class BasePage extends Component {
	static contextType = ReactReduxContext;
	store = null;


	constructor(props, context) {
		super(props, context);
		this.store = context.store;
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


export class BasePurePage extends PureComponent {
	static contextType = ReactReduxContext;
	store = null;


	constructor(props, context) {
		super(props, context);
		this.store = context.store;
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