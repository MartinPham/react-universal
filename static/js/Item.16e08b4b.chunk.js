(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{116:function(t,e,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,f=s&&s(Object);t.exports=function t(e,n,l){if("string"!==typeof n){if(f){var p=s(n);p&&p!==f&&t(e,p,l)}var d=o(n);i&&(d=d.concat(i(n)));for(var j=0;j<d.length;++j){var b=d[j];if(!r[b]&&!a[b]&&(!l||!l[b])){var m=u(n,b);try{c(e,b,m)}catch(O){}}}return e}return e}},117:function(t,e,n){"use strict";n.d(e,"b",function(){return u}),n.d(e,"a",function(){return s});var r=n(11),a=n(16),c=n(15),o=n(17),i=n(19),u=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(o.a)(e,t),e}(i.b),s=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(o.a)(e,t),e}(i.a)},118:function(t,e,n){"use strict";var r=n(11),a=n(18),c=n(16),o=n(15),i=n(17),u=n(1),s=n.n(u),f=n(19),l=n(3),p=n.n(l),d=n(116),j=n.n(d),b=n(119);e.a=function(t){var e=t.key,n=t.reducer;return function(t){var u=function(u){function f(){var t,e;Object(r.a)(this,f);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=Object(c.a)(this,(t=Object(o.a)(f)).call.apply(t,[this].concat(a)))).injectors=Object(b.a)(e.context.store),e}return Object(i.a)(f,u),Object(a.a)(f,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(e,n)}},{key:"render",value:function(){return s.a.createElement(t,this.props)}}]),f}(f.b);return u.WrappedComponent=t,u.contextTypes={store:p.a.object.isRequired},u.displayName="withReducer(".concat(t.displayName||t.name||"Component",")"),j()(u,t)}}},119:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return c});var r=n(52);function a(t,e){return function(e,n){if(!Reflect.has(t.injectedReducers,e)||t.injectedReducers[e]!==n){t.injectedReducers[e]=n;var a=Object(r.a)(t.injectedReducers);t.replaceReducer(a)}}}function c(e){return"undefined"===typeof e&&(e=t.store),{injectReducer:a(e)}}}).call(this,n(51))},120:function(t,e,n){"use strict";var r=n(11),a=n(18),c=n(16),o=n(15),i=n(17),u=n(1),s=n.n(u),f=n(19),l=n(3),p=n.n(l),d=n(116),j=n.n(d),b=n(121);e.a=function(t){var e=t.key,n=t.saga,u=t.mode;return function(t){var l=function(f){function l(){var t,e;Object(r.a)(this,l);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=Object(c.a)(this,(t=Object(o.a)(l)).call.apply(t,[this].concat(a)))).injectors=Object(b.a)(e.context.store),e}return Object(i.a)(l,f),Object(a.a)(l,[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(e,{saga:n,mode:u},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(e)}},{key:"render",value:function(){return s.a.createElement(t,this.props)}}]),l}(f.b);return l.WrappedComponent=t,l.contextTypes={store:p.a.object.isRequired},l.displayName="withSaga(".concat(t.displayName||t.name||"Component",")"),j()(l,t)}}},121:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return s});var r=n(26),a="@@saga-injector/restart-on-remount",c="@@saga-injector/daemon",o="@@saga-injector/once-till-unmount";function i(t,e){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,u=Object(r.a)({},n,{mode:n.mode||a}),s=u.saga,f=u.mode,l=Reflect.has(t.injectedSagas,e);if(!l||l&&f!==c&&f!==o){var p=t.runSaga(s,i);t.injectedSagas[e]=Object(r.a)({},u,{task:p})}}}function u(t,e){return function(e){if(Reflect.has(t.injectedSagas,e)){var n=t.injectedSagas[e];n.mode&&n.mode!==c&&(n.task.cancel(),t.injectedSagas[e]="done")}}}function s(e){return"undefined"===typeof e&&(e=t.store),{injectSaga:i(e),ejectSaga:u(e)}}}).call(this,n(51))},122:function(t,e,n){"use strict";var r=n(5);e.a=function(){return{type:r.c}}},125:function(t,e,n){"use strict";var r=n(5);e.a=function(t){return{type:r.a,index:t}}},128:function(t,e,n){"use strict";n.r(e);var r=n(11),a=n(18),c=n(16),o=n(15),i=n(17),u=n(117),s=n(21),f=n(27),l=n(118),p=n(120),d=n(36),j=n(125),b=n(53),m=n(122),O={example:"1"};var h=n(4),v=n.n(h),y=v.a.mark(g);function g(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},y,this)}var k=n(20),w="Item",R=n(1),E=n.n(R),C=n(69),S=n(54),x=n.n(S),P=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return console.log("PAGE RENDER: Item"),t=this.props,this.state,E.a.createElement("div",null,E.a.createElement(C.a,{image:x.a}),"Item ups zz",E.a.createElement("button",{onClick:function(){return t.push("/contact",{},"slideLeft")}},"Go Contact (slideLeft)"),E.a.createElement("button",{onClick:function(){return t.push("/contact",{},"slideUp")}},"Go Contact (slideUp)"),E.a.createElement("br",null),E.a.createElement("button",{onClick:function(){return t.goBack()}},"Go Back"),E.a.createElement("button",{onClick:function(){return t.goForward()}},"Go Forward"),E.a.createElement("button",{onClick:function(){return t.go(-2)}},"Go -2"),E.a.createElement("button",{onClick:function(){return t.go(2)}},"Go +2"));var t}}]),e}(u.b);P.displayName=w;var N=Object(k.b)({}),G=Object(s.b)(N,function(t){return{push:function(e,n,r){return t(Object(d.a)(e,n,r))},go:function(e){return t(Object(j.a)(e))},goBack:function(){return t(Object(b.a)())},goForward:function(){return t(Object(m.a)())}}}),T=Object(l.a)({key:w,reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return(arguments.length>1?arguments[1]:void 0).type,t}}),W=Object(p.a)({key:w,saga:g});e.default=Object(f.d)(T,W,G)(P)}}]);
//# sourceMappingURL=Item.16e08b4b.chunk.js.map