(this["webpackJsonpdeath-battle"]=this["webpackJsonpdeath-battle"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(7),a=n.n(c),r=(n(12),n(2)),o=n(3),d=n(5),l=n(4),h=n(0),u=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var t=[],e=this.props.data,n=0;n<e.length;)t.push(Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/content/"+e[n].id,"data-id":e[n].id,onClick:function(t){t.preventDefault(),this.props.onChangePage(t.target.dataset.id)}.bind(this),children:e[n].title})},e[n].id)),n+=1;return Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:t})})}}]),n}(i.Component),b=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:Object(h.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),this.props.onChangePage()}.bind(this),children:this.props.title})}),this.props.sub]})}}]),n}(i.Component),j=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("article",{children:[Object(h.jsxs)("h2",{children:[" ",this.props.title]}),this.props.desc]})}}]),n}(i.Component),p=(n(14),function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={mode:"read",selected_content_id:2,subject:{title:"WEB",sub:"World Wide Web"},welcome:{title:"Welcome",desc:"Hello React!!"},contents:[{id:1,title:"HTML",desc:"HTML is for information"},{id:2,title:"CSS",desc:"CSS is for design"},{id:3,title:"JavaScript",desc:"Javascript is for interactive"}]},i}return Object(o.a)(n,[{key:"render",value:function(){console.log("App render");var t,e=null;if("welcome"===this.state.mode)t=this.state.welcome.title,e=this.state.welcome.desc;else if("read"===this.state.mode)for(var n=0;n<this.state.contents.length;){var i=this.state.contents[n];if(i.id===this.state.selected_content_id){t=i.title,e=i.desc;break}n+=1}return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:function(){this.setState({mode:"welcome"})}.bind(this)}),Object(h.jsx)(u,{onChangePage:function(t){this.setState({mode:"read",selected_content_id:Number(t)})}.bind(this),data:this.state.contents}),Object(h.jsx)(j,{title:t,desc:e})]})}}]),n}(i.Component)),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),c(t),a(t)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.c5050e1a.chunk.js.map