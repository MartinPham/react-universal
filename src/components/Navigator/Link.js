import React from "react";
import { ReactReduxContext } from 'react-redux';
import push from 'components/Navigator/actions/push';
import {generateUrl} from 'utils/url';

const isModifiedEvent = (event) => {
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

  
export default class Link extends React.PureComponent {
	static contextType = ReactReduxContext;
	store = null;


	constructor(props, context) {
		super(props, context);
		this.store = context.store;
	}


	render() {
		const {href, target, onClick, children, data, transition, originPosition} = this.props;

		let finalHref = href;
		let finalData = data;

		if(finalHref[0] === '@')
		{
			finalHref = generateUrl(finalHref, finalData);
			finalData = {};
		}
		

		const handleClick = (event) => {
			if (onClick) onClick(event);

			if (
				!event.defaultPrevented && // onClick prevented default
				event.button === 0 && // ignore everything but left clicks
				(!target || target === "_self") && // let browser handle "target=_blank" etc.
				!isModifiedEvent(event) // ignore clicks with modifier keys
			) {
				event.preventDefault();
		

			

				this.store.dispatch(push(finalHref, finalData, transition, originPosition));
			}

		}

		return (
			<a href={finalHref} target={target} onClick={handleClick}>
				{children}
			</a>
		)
	}
}