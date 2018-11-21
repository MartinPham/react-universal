exports.ids=[2],exports.modules={30:function(e,t,n){e.exports=n(29)},31:function(e,t,n){"use strict";function r(e,t,n,r,a,c,o){try{var u=e[c](o),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(a,c){var o=e.apply(t,n);function u(e){r(o,a,c,u,i,"next",e)}function i(e){r(o,a,c,u,i,"throw",e)}u(void 0)})}}n.d(t,"a",function(){return a})},32:function(e,t,n){"use strict";var r=n(4),a=n(5),c=n(7),o=n(6),u=n(8),i=n(0),s=n.n(i),l=n(26),f=n.n(l),d=n(27),j=n.n(d),m=n(17);function p(e){return{injectReducer:function(e,t){return function(t,n){if(!Reflect.has(e.injectedReducers,t)||e.injectedReducers[t]!==n){e.injectedReducers[t]=n;var r=Object(m.a)(e.history,e.injectedReducers);e.replaceReducer(r)}}}(e)}}t.a=function(e){var t=e.key,n=e.reducer;return function(e){var i=function(i){function l(){var e,t;Object(r.a)(this,l);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(t=Object(c.a)(this,(e=Object(o.a)(l)).call.apply(e,[this].concat(a)))).injectors=p(t.context.store),t}return Object(u.a)(l,i),Object(a.a)(l,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,n)}},{key:"render",value:function(){return s.a.createElement(e,this.props)}}]),l}(s.a.Component);return i.WrappedComponent=e,i.contextTypes={store:f.a.object.isRequired},i.displayName="withReducer(".concat(e.displayName||e.name||"Component",")"),j()(i,e)}}},33:function(e,t,n){"use strict";var r=n(4),a=n(5),c=n(7),o=n(6),u=n(8),i=n(0),s=n.n(i),l=n(26),f=n.n(l),d=n(27),j=n.n(d),m=n(18),p="@@saga-injector/restart-on-remount",h="@@saga-injector/daemon",v="@@saga-injector/once-till-unmount";function b(e){return{injectSaga:function(e,t){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=Object(m.a)({},n,{mode:n.mode||p}),c=a.saga,o=a.mode,u=Reflect.has(e.injectedSagas,t);if(!u||u&&o!==h&&o!==v){var i=e.runSaga(c,r);e.injectedSagas[t]=Object(m.a)({},a,{task:i})}}}(e),ejectSaga:function(e,t){return function(t){if(Reflect.has(e.injectedSagas,t)){var n=e.injectedSagas[t];n.mode&&n.mode!==h&&(n.task.cancel(),e.injectedSagas[t]="done")}}}(e)}}t.a=function(e){var t=e.key,n=e.saga,i=e.mode;return function(e){var l=function(l){function f(){var e,t;Object(r.a)(this,f);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(t=Object(c.a)(this,(e=Object(o.a)(f)).call.apply(e,[this].concat(a)))).injectors=b(t.context.store),t}return Object(u.a)(f,l),Object(a.a)(f,[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(t,{saga:n,mode:i},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(t)}},{key:"render",value:function(){return s.a.createElement(e,this.props)}}]),f}(s.a.Component);return l.WrappedComponent=e,l.contextTypes={store:f.a.object.isRequired},l.displayName="withSaga(".concat(e.displayName||e.name||"Component",")"),j()(l,e)}}},35:function(e,t,n){"use strict";n.r(t);var r=n(30),a=n.n(r),c=n(31),o=n(4),u=n(5),i=n(7),s=n(6),l=n(8),f=n(19),d=n(0),j=n.n(d),m="About",p=m+"/ChangeText",h=n(9),v=n(2),b=n(32),g=n(33),O={},x=n(15),y=Object(x.a)(m,O),k=n(28),E=function(e){return{type:"About/ChangeAltText",text:e}},S=a.a.mark(T);function T(e){var t,n;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.text,r.next=3,new Promise(function(e){return setTimeout(function(){return e("saga loaded")},1e3)});case 3:return n=r.sent,r.next=6,Object(k.put)(E(t+" & "+n));case 6:case"end":return r.stop()}},S,this)}var C=a.a.mark(w);function w(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.takeLatest)(p,T);case 2:case"end":return e.stop()}},C,this)}var R=n(14),A=function(e){return e[m]||O},P=function(e){return e[m]||O},N=n(16),W=n(12),H=function(e){return j.a.createElement("div",e)},M=function(e){return j.a.createElement("div",e)},U=function(e){var t=e.onPress,n=e.title,r=Object(f.a)(e,["onPress","title"]);return j.a.createElement("button",Object.assign({},r,{onClick:t}),n)},I=function(e){var t=e.onChangeText,n=Object(f.a)(e,["onChangeText"]);return j.a.createElement("input",Object.assign({},n,{onChange:function(e){return t(e.target.value)}}))},q=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return j.a.createElement(H,null,j.a.createElement(M,null," "),j.a.createElement(M,null," "),j.a.createElement(M,null," "),j.a.createElement(M,null," "),j.a.createElement(M,null,"ABOUT US - CHI SIAMO HOH!!!"),j.a.createElement(M,null,"text: "),j.a.createElement(M,null,"altText: "),j.a.createElement(I,null),j.a.createElement(U,{onPress:function(){return e.props.changeText("I am from the Button")},title:"Hey"}),j.a.createElement(N.Link,{to:"/about"},j.a.createElement(M,null,"Go to About")))}}]),t}(j.a.Component);q.displayName=m;var B=Object(R.createStructuredSelector)({text:Object(R.createSelector)(A,function(e){return e.get("text")}),altText:Object(R.createSelector)(P,function(e){return e.get("altText")})}),L=function(){var e=Object(c.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){return setTimeout(function(){return e("ok async")},1e3)});case 2:n=e.sent,t.changeText(n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),G=Object(h.connect)(B,function(e){return{changeText:function(t){e(function(e){return{type:p,text:e}}(t))}}}),z=Object(b.a)({key:m,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return function(e,t){return e.set("text",t.text)}(e,t);case"About/ChangeAltText":return function(e,t){return e.set("altText",t.text)}(e,t);default:return e}}}),D=Object(g.a)({key:m,saga:w});t.default=Object(v.compose)(z,D,G)(Object(W.frontloadConnect)(L,{onMount:!0,onUpdate:!1})(q))}};