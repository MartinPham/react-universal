(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[8,18,19,20,21],{27:function(t,e,n){"use strict";n.r(e);var a=n(36),r=n(29),l=n(38),u=n(37),c=n(39),o=n(0),i=n.n(o),m=n(22),s=n(51),f=n(72),p=n(73),h=function(t){function e(){var t,n;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={number:1},n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"Sample with selector"),"text: ",this.props.text,i.a.createElement("br",null),"uppercase text: ",this.props.uppercaseText,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return t.setState({number:Math.random()})}},"Change state.number = ",this.state.number),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.navigator.push("@Sample",{random:Math.random()},"flyLeft")}},"Go Sample (flyLeft)"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.navigator.push("@Sample",{random:Math.random()},"flyUp")}},"Go Sample (flyUp)"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.navigator.goBack()}},"Go Back"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.navigator.goForward()}},"Go Forward"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.navigator.go(-2)}},"Go -2"),i.a.createElement("hr",null),i.a.createElement("button",{onClick:function(){return t.navigator.go(2)}},"Go +2"))}}]),e}(i.a.PureComponent),b=Object(s.b)({text:f.default,uppercaseText:p.default});e.default=Object(m.b)(b)(h)},63:function(t,e,n){"use strict";n.r(e),n.d(e,"ID",(function(){return a}));var a="SampleWithSelector"},64:function(t,e,n){"use strict";n.r(e),e.default={text:"text from initial"}},72:function(t,e,n){"use strict";n.r(e);var a=n(64),r=n(63),l=n(49);e.default=Object(l.a)("text")(r.ID,a.default)},73:function(t,e,n){"use strict";n.r(e);var a=n(64),r=n(63),l=n(49);e.default=Object(l.a)("text",null,(function(t){return console.log("making upper case..."),t.toUpperCase()}))(r.ID,a.default)}}]);
//# sourceMappingURL=pages-SampleWithSelector.5fafdbbd.chunk.js.map