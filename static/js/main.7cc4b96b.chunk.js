(window.webpackJsonpbokmarker=window.webpackJsonpbokmarker||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),s=a.n(o),i=(a(17),a(11)),l=a(1),c=a(2),m=a(4),u=a(3),k=a(5),d=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleName,a=e.handleURL,n=e.addBookMark,o=e.sitename,s=e.siteurl;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",onChange:t,placeholder:"Enter Site name",value:o,name:"sitename"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",onChange:a,placeholder:"Enter URL",value:s,name:"siteurl"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add Bookmark"))))}}]),t}(n.Component),h=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.sitename,n=t.siteurl,o=t.id;return r.a.createElement("li",{className:"bookmarkitem"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7"},a),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"btn btn-success"},"Visit"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.handleDelete(o)}},"Delete"))))}}]),t}(n.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.handleDelete;return this.props.bookmarks.map((function(a){return r.a.createElement(h,{key:a.id,item:a,bookmark:e.props.bookmark,handleDelete:function(){return t(a.id)}})}))}}]),t}(n.Component),p=a(6),f=a.n(p),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sitename:"",siteurl:"",bookmarks:[],id:f()()},a.handleName=function(e){a.setState({sitename:e.target.value})},a.handleURL=function(e){a.setState({siteurl:e.target.value})},a.addBookMark=function(e){if(e.preventDefault(),""!==a.state.sitename||!a.state.siteurl){var t={sitename:a.state.sitename,siteurl:a.state.siteurl,id:a.state.id},n=[].concat(Object(i.a)(a.state.bookmarks),[t]);a.setState({bookmarks:n,sitename:"",siteurl:"",id:f()()})}},a.handleDelete=function(e){var t=a.state.bookmarks.filter((function(t){return t.id!==e}));a.setState({bookmarks:t})},a}return Object(k.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){localStorage.getItem("bookmarks")&&this.setState({bookmarks:JSON.parse(localStorage.getItem("bookmarks"))})}},{key:"componentDidMount",value:function(){localStorage.getItem("bookmarks")?this.setState({bookmarks:this.state.bookmarks}):console.log("using data from local")}},{key:"UNSAFE_componentWillUpdate",value:function(e,t){localStorage.setItem("bookmarks",JSON.stringify(t.bookmarks))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Bookmarker Application"),r.a.createElement(d,{sitename:this.state.sitename,siteurl:this.state.siteurl,addBookMark:this.addBookMark,handleName:this.handleName,handleURL:this.handleURL}),r.a.createElement(b,{bookmarks:this.state.bookmarks,handleDelete:this.handleDelete}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.7cc4b96b.chunk.js.map