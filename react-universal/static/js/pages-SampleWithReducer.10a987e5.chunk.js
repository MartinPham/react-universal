(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[6,10,11,12],{25:function(t,e,n){"use strict";n.r(e);var r=n(36),a=n(29),u=n(38),o=n(37),l=n(39),c=n(0),i=n.n(c),f=n(22),s=n(51),m=n(65),p=n(66),b=n(67),E=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(l)))).state={number:1},n}return Object(l.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",null,"Sample counter: ",this.props.counter,i.a.createElement("br",null),"funny counter: ",this.props.funnyCounter,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return t.props.dispatch(Object(m.default)(5))}},"Increase counter"),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return t.setState({number:Math.random()})}},"Change state.number = ",this.state.number),i.a.createElement("hr",null),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.props.navigator.push("@Sample",{random:Math.random()},"flyLeft")}},"Go Sample (flyLeft)"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.props.navigator.push("@Sample",{random:Math.random()},"flyUp")}},"Go Sample (flyUp)"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.props.navigator.goBack()}},"Go Back"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.props.navigator.goForward()}},"Go Forward"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.props.navigator.go(-2)}},"Go -2"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.props.navigator.go(2)}},"Go +2"))}}]),e}(i.a.PureComponent),h=Object(s.b)({counter:p.default,funnyCounter:b.default});e.default=Object(f.b)(h)(E)},65:function(t,e,n){"use strict";n.r(e);var r=n(18);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:r.INCREASE_COUNTER,plus:t}}},66:function(t,e,n){"use strict";n.r(e);var r=n(35),a=n(18),u=n(49);e.default=Object(u.a)("counter")(a.ID,r.default)},67:function(t,e,n){"use strict";n.r(e);var r=n(35),a=n(18),u=n(49);e.default=Object(u.a)("counter",null,(function(t){return console.log("making funny.."),"[-- ".concat(t," --]")}))(a.ID,r.default)}}]);
//# sourceMappingURL=pages-SampleWithReducer.10a987e5.chunk.js.map