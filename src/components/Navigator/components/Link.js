import React from 'react';
import {connect} from 'react-redux';
import push from 'components/Navigator/actions/push';
import {generateUrl} from 'utils/url';
import sharedHistory from 'utils/sharedHistory';


const isModifiedEvent = (event) => {
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

  
class Link extends React.PureComponent {
	render() {
		const {href, target, onClick, children, data, transition, originPosition, dispatch} = this.props;

		let finalHref = href;
		let finalData = data;

		if(finalHref[0] === '@')
		{
			finalHref = generateUrl(finalHref, finalData);
			// finalData = {};
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
		

			

				dispatch(push(finalHref, finalData, transition, originPosition));
			}

		}

		return (
			<a href={sharedHistory().basename + finalHref} target={target} onClick={handleClick}>
				{children}
			</a>
		)
	}
}

const withConnect = connect(

)

export default withConnect(Link)