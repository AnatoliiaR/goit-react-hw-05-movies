"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{31:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(87),a=n(689),c="MovieList_list__yjDCC",u="MovieList_link__+cn-g",s=n(184),o=function(e){var t=e.results;console.log(t);var n=(0,a.TH)(),o=t.map((function(e){var t=e.id,a=e.title;e.overview;return(0,s.jsx)("li",{children:(0,s.jsx)(r.rU,{className:u,to:"/movies/".concat(t),state:{from:n},children:a})},t)}));return(0,s.jsx)("ul",{className:c,children:o})},i=o;o.defaultProps={results:[]}},891:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(433),a=n(861),c=n(439),u=n(757),s=n.n(u),o=n(791),i=n(134),f={search:""},p=n(942),h=n(413),l=function(e){var t=e.initialState,n=e.onSubmit,r=(0,o.useState)((0,h.Z)({},t)),a=(0,c.Z)(r,2),u=a[0],s=a[1];return{state:u,setState:s,handleChange:function(e){var t=e.target,n=t.name,r=t.value;s((function(e){return(0,h.Z)((0,h.Z)({},e),{},(0,p.Z)({},n,r))}))},handleSubmit:function(e){e.preventDefault(),n((0,h.Z)({},u)),s((0,h.Z)({},t))}}},v="Searchbar_Searchbar__5WKzV",m="Searchbar_SearchForm__XuPyK",d="Searchbar_SearchFormButton__dksRa",b="Searchbar_SearchFormInput__FT6Bx",x=n(184);var _=function(e){var t=e.onSubmit,n=l({onSubmit:t,initialState:f}),r=n.state,a=n.handleChange,c=n.handleSubmit,u=r.search;return(0,x.jsx)("div",{className:v,children:(0,x.jsxs)("form",{className:m,onSubmit:c,children:[(0,x.jsx)("button",{className:d,type:"submit",children:(0,x.jsx)("span",{children:(0,x.jsx)(i.RB5,{color:"black",size:"2rem"})})}),(0,x.jsx)("input",{className:b,type:"text",name:"search",value:u,autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:a})]})})},g=n(390),S=n(31),Z=n(87),w=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],u=t[1],i=(0,Z.lr)(),f=(0,c.Z)(i,2),p=f[0],h=f[1],l=p.get("search"),v=p.get("page");(0,o.useEffect)((function(){if(l){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.Hq)(l,v);case 3:t=e.sent,u((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t.results))})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l,v,u]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{onSubmit:function(e){var t=e.search;h({search:t,page:1}),u([])},search:l}),n&&(0,x.jsx)(S.Z,{results:n})]})}},390:function(e,t,n){n.d(t,{Hq:function(){return i},Tg:function(){return s},h_:function(){return o},oO:function(){return p},uM:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"248abd3b176f582e9e747718a352534c"}}),s=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,a,s,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n="week",r="movie",e.next=5,u.get("/trending/".concat(r,"/").concat(n,"?page=").concat(t));case 5:return a=e.sent,s=a.data,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie",e.next=3,u.get("/".concat("movie","/").concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,s,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,r="movie",e.next=4,u.get("/search/".concat(r,"?page=").concat(n,"&query=").concat(t));case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie",e.next=3,u.get("/".concat("movie","/").concat(t,"/credits"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie",e.next=3,u.get("/".concat("movie","/").concat(t,"/reviews"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=891.39327d58.chunk.js.map