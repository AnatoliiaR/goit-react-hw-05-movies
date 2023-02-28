"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{888:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(791),o=n(87),u=n(689),l=n(390),d="MovieDetails_title__RBndM",v="MovieDetails_img__D3WH9",h="MovieDetails_info__0TKY1",p="MovieDetails_tleft__fJYXC",f="MovieDetails_td__rmCVc",x="MovieDetails_button__PGjyO",m="MovieDetails_list__y5Rs9",_="MovieDetails_link__wf74g",j="MovieDetails_subtitle__8i-fx",w=n(184),g=function(){var e,t=(0,c.useState)(),n=(0,a.Z)(t,2),i=n[0],g=n[1],b=(0,u.UO)().id,k=(0,u.s0)(),M=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/";return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.h_)(b);case 3:t=e.sent,g(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[b]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("button",{className:x,onClick:function(){return k(M)},children:"Go back"}),(0,w.jsx)("h1",{className:d,children:null===i||void 0===i?void 0:i.title}),(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{className:v,src:"https://image.tmdb.org/t/p/w500".concat(null===i||void 0===i?void 0:i.poster_path),alt:null===i||void 0===i?void 0:i.title})}),(0,w.jsx)("div",{children:(0,w.jsx)("table",{className:p,children:(0,w.jsxs)("tbody",{children:[(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:f,children:(0,w.jsx)("p",{children:"User Score: "})}),(0,w.jsx)("td",{children:(0,w.jsxs)("span",{children:[Math.round(10*(null===i||void 0===i?void 0:i.vote_average)),"%"]})})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:f,children:(0,w.jsx)("p",{children:"Genres:"})}),(0,w.jsx)("td",{children:(0,w.jsx)("p",{children:null===i||void 0===i?void 0:i.genres.map((function(e){return e.name})).join(", ")})})]}),(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{className:f,children:(0,w.jsx)("p",{children:"Overview:"})}),(0,w.jsx)("td",{children:(0,w.jsx)("p",{children:null===i||void 0===i?void 0:i.overview})})]})]})})})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h3",{className:j,children:"Additional information"}),(0,w.jsxs)("ul",{className:m,children:[(0,w.jsx)("li",{children:(0,w.jsx)(o.OL,{className:_,to:"cast",state:{from:M},children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(o.OL,{className:_,to:"reviews",state:{from:M},children:"Reviews"})})]}),(0,w.jsx)(u.j3,{})]})]})}},390:function(e,t,n){n.d(t,{Hq:function(){return u},Tg:function(){return c},h_:function(){return o},oO:function(){return d},uM:function(){return l}});var r=n(861),a=n(757),i=n.n(a),s=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"248abd3b176f582e9e747718a352534c"}}),c=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,a,c,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n="week",r="movie",e.next=5,s.get("/trending/".concat(r,"/").concat(n,"?page=").concat(t));case 5:return a=e.sent,c=a.data,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie",e.next=3,s.get("/".concat("movie","/").concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,c,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,r="movie",e.next=4,s.get("/search/".concat(r,"?page=").concat(n,"&query=").concat(t));case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie",e.next=3,s.get("/".concat("movie","/").concat(t,"/credits"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie",e.next=3,s.get("/".concat("movie","/").concat(t,"/reviews"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=888.ba974fb0.chunk.js.map