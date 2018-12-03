import React from 'react';
// import {push, goBack, replace} from 'react-router-redux';
import pushAction from 'components/Navigator/actions/push';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/redux/injectReducer';
import injectSaga from 'utils/redux/injectSaga';

import reducer from './reducer';
import saga from './saga';
import dataSelector from './selectors/dataSelector';
import { ID } from './constants';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Route, Switch } from 'react-router-dom';
// import "../../styles/Navigator.scss";
import BaseComponent from 'components/BaseComponent';

 // // Little hack here, because react-router is very hard to inject
 // window.onpopstate = e => {
 // 	e.preventDefault();
 // 	e.stopImmediatePropagation();
 // 
 // 	// //log('ON POP STATE!', window.store);
 // 	// window.store.dispatch(pushAction('@@back', {}, 'right'))
 // 	/*
 // 	let transitionHistory = window.store.getState().getIn(['Navigator', 'data', 'transitionHistory']);
 // 	let backTransition = 'back';
 // 
 // 	if(typeof transitionHistory == 'object' && transitionHistory.last())
 // 	{
 // 		let lastTransition = transitionHistory.last();
 // 
 // 		if(lastTransition == 'revealIn')
 // 		{
 // 			backTransition = 'revealOut';
 // 		}else if(lastTransition == 'left')
 // 		{
 // 			backTransition = 'right';
 // 		}else if(lastTransition == 'up')
 // 		{
 // 			backTransition = 'down';
 // 		}
 // 	}
 // 
 // 
 // 	window.store.dispatch(pushAction('@@back', {}, backTransition));
 // 	*/
 // 	// window.store.dispatch(pushAction('@@back'));
 // 	// window.store.dispatch(pushAction('@@@back', {}, 'right'));
 // 	window.store.dispatch(pushAction('@@back'));
 // 	// window.store.dispatch(pushAction('@back', {}))
 // };

class Component extends BaseComponent {
	// componentWillReceiveProps(nextProps)
	// {
	//  //log('componentWillReceiveProps', this.props.data.toJS(), nextProps.data.toJS());
	// }
	// xshouldComponentUpdate(nextProps, nextState)
	// {
	//  //log('shouldComponentUpdate', this.props.data.toJS(), nextProps.data.toJS());
	//  return this.props.data.get('transitionDirection') == nextProps.data.get('transitionDirection');
	// }

	// constructor() {
	//  super();
	//
	//  // this.history = ['/'];
	//
	//  // this.navTransition = 'right';
	//
	//  // this.state = {
	//  //  navTransition: 'right'
	//  // };
	// }

	push = (location, path, data) => {
		// //log('>>> push', location, path, data);
		// dispatch(push(path));

		if (path && typeof path !== 'undefined') {
			let pathname = path;
			let search = '';

			const questionPosition = path.indexOf('?');
			if (questionPosition > -1) {
				pathname = path.substring(0, questionPosition);
				search = path.substring(questionPosition);
			}

			// if(pathname + search == '/takePhoto?v=1')
			// {
			//  dispatch(replace({
			//      pathname: pathname,
			//      search: search,
			//      state: data
			//  }));
			//  return;
			// }
			// window.scrollTo(0, 0);

			this.props.history.push({
				pathname,
				search,
				state: {
					referer: location,
					params: data,
				},
			});

			// window.routerHistory.push({
			//                      pathname: pathname,
			//                      search: search,
			//                      state: {
			//                          referer: location,
			//                          params: data
			//                      }
			//                  })
		} else {
			// window.location.reload();
		}
	};
	pop = () => {

		// //log('>>> pop');
		this.props.history.goBack();
	};

	componentWillReceiveProps(nextProps) {
		// if(nextProps.data !== this.props.value){alert(nextProps.value)}
		// log('componentWillReceiveProps', this.props, this.props.data.toJS(), nextProps.data.toJS());

		// //log(this.props.data.get('path') ,' vs ', nextProps.data.get('path'));
		if (this.props.data.get('path') !== nextProps.data.get('path')) {
			// //log(this.props.data.get('path') , ' different to ', nextProps.data.get('path'));
			// this.history.push(nextProps.data.get('path'));
			// //log(this.history)

			// this.navTransition = 'left';

			if (nextProps.data.get('transition').endsWith('-back')) {
				// //log(nextProps.data.get('transition'), ' has -back');
				this.pop();
			} else {
				// //log(nextProps.data.get('transition'), ' doenst have -back');
				this.push(
					this.props.location ? this.props.location.toJS() : null,
					nextProps.data.get('path'),
					nextProps.data.get('data'),
				);
			}

			// this.props.push(nextProps.data.get('path'), nextProps.data.get('data'));

			// this.state.setState({
			//  navTransition: 'left'
			// }, () => {
			//  // this.props.push(nextProps.data.get('path'));
			// });
		}
	}

	render() {
		// //log('render', this.props.data.toJS());
		const props = this.props;
		return (
			<Route
				render={({ location }) => {
					// //log('location >>> ', location)
					// /childFactory={this.factoryMaker(location)}
					let transition = this.props.data.get('transition');
					transition = transition.replace('-back', '');
					transition = transition.replace('-bback', '');

					// //log('transition', transition);
					// //log('require', './transitions/' + transition);

					// if (transition && transition != 'undefined') {
					// 	try {
					// 		require(`./transitions/${transition}`).default.render(this.props);
					// 	} catch (e) {
					// 		console.error('Load transition failed ', transition);
					// 	}
					// }

					// //log('key = ', location.key, ' >>> ', location.pathname)
					return (
						<TransitionGroup>
							<CSSTransition
								key={location.key}
								timeout={this.props.data.get('transition') === 'none' ? 0 : 350}
								classNames="pageTransition"
								mountOnEnter={false}
								unmountOnExit={false}
								onEnter={(node, isAppearing) => {
									// let origin = this.props.data.get("origin");
									// if (origin)
									// {
									//  origin = origin.split(',');
									//  let page = node.querySelector('.Page');
									//  page.style.top = origin[0] + 'px';
									//  page.style.left = origin[1] + 'px';
									//  page.style.width = origin[2] + 'px';
									//  page.style.height = origin[3] + 'px';
									//
									//  // let originPage = document.querySelector('.pageTransition-exit > .Page');
									//  // let destinationOffset = {
									//  //   // top: originPage.documentOffsetTop,
									//  //   // left: originPage.documentOffsetLeft,
									//  //   // width: originPage.offsetWidth,
									//  //   // height: originPage.offsetHeight,
									//  // };
									//
									//  // //log('onEnter', node, origin, originPage, destinationOffset);
									//  // return;
									//  setInterval(
									//      function ()
									//      {
									//          // //log('onEnter interval', node, page.style.top, page.style.left, page.style.width, page.style.height);
									//          if (parseInt(page.style.top) > 0)
									//          {
									//              page.style.top = (parseInt(page.style.top) - (origin[0] - 0) / 100) + 'px';
									//          }
									//          if (parseInt(page.style.left) > 0)
									//          {
									//              page.style.left = (parseInt(page.style.left) - (origin[1] - 0) / 100) + 'px';
									//          }
									//          if (parseInt(page.style.width) < window.innerWidth)
									//          {
									//              page.style.width = (parseInt(page.style.width) + (window.innerWidth - origin[2]) / 100) + 'px';
									//          }
									//          if (parseInt(page.style.height) < window.innerHeight)
									//          {
									//              page.style.height = (parseInt(page.style.height) + (window.innerHeight - origin[3]) / 100) + 'px';
									//          }
									//      },
									//      5
									//  )
									//  //
									//  // var style = document.createElement('style');
									//  // style.type = 'text/css';
									//  // style.innerHTML = '\
									//  // .revealIn.pageTransition-enter.pageTransition-enter-active > .Page {\
									//  //   top: ' + origin[0] + 'px;\
									//  //   left: ' + origin[1] + 'px;\
									//  //   width: ' + origin[2] + 'px;\
									//  //   height: ' + origin[3] + 'px;\
									//  //   transition: all 5000ms;\
									//  // }';
									//  // document.getElementsByTagName('head')[0].appendChild(style);
									// }
								}}
								onEntered={(node, isAppearing) => {
									// let origin = this.props.data.get("origin");
									// if (origin)
									// {
									//   // //log(origin)
									//   // let page = node.querySelector('.Page');
									//   // page.style.clipPath = 'circle(100% at 10px 10px)';
									// }
									// let page = node.querySelector('.Page');
									// page.style.top = '0px';
									// page.style.left = '0px';
									// page.style.width = 'auto';
									// page.style.height = 'auto';
									// page.style.bottom = '0px';
									// page.style.right = '0px';
								}}
							>
								{/* <div className={ getPathDepth(location) - this.state.prevDepth >= 0 ? 'left' : 'right' }> */}
								<div
									className={this.props.data
										.get('transition')
										.replace('-bback', '-back')}
								>
									<Switch location={location}>{this.props.children}</Switch>
								</div>
							</CSSTransition>
						</TransitionGroup>
					);
				}}
			/>

			/*
			<TransitionGroup>
				<CSSTransition
					key={location.pathname}
					timeout={500}
					classNames={this.props.data.get('transitionDirection')}
					mountOnEnter={true}
					unmountOnExit={true}>
					<Switch>
						{this.props.children}
					</Switch>
				</CSSTransition>
			</TransitionGroup>
			*/
		);
	}
}

const mapDispatchToProps = dispatch => ({
	/*
	push: (location, path, data) =>
	{
		// //log('>>> push', location, path, data);
		// dispatch(push(path));

		if(path && typeof path != 'undefined')
		{
			let pathname = path;
			let search = '';

			let questionPosition = path.indexOf('?');
			if (questionPosition > -1)
			{
				pathname = path.substring(
					0,
					questionPosition
				);
				search = path.substring(questionPosition);
			}

			// if(pathname + search == '/takePhoto?v=1')
			// {
			//  dispatch(replace({
			//      pathname: pathname,
			//      search: search,
			//      state: data
			//  }));
			//  return;
			// }


			dispatch(push({
							  pathname: pathname,
							  search: search,
							  state: {
								  referer: location,
								  params: data
							  }
						  }));

			// window.routerHistory.push({
			//                      pathname: pathname,
			//                      search: search,
			//                      state: {
			//                          referer: location,
			//                          params: data
			//                      }
			//                  })
		} else {
			window.location.reload()
		}

	},
	pop: () =>
	{
		// //log('>>> pop');
		dispatch(goBack());
	},
	*/
});

Component.displayName = ID;

const mapStateToProps = createStructuredSelector({
	data: dataSelector(),
});

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

const withReducer = injectReducer({ key: ID, reducer });
const withSaga = injectSaga({ key: ID, saga });

export default compose(
	withReducer,
	withSaga,
	withConnect,
)(Component);
