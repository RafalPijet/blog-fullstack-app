(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{109:function(e,t,n){e.exports=n(276)},135:function(e,t,n){},136:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},163:function(e,t){},234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},274:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(39),o=n.n(c),s=n(21),i=n(27),l=n(31),u=n(104),p=n(56),m=n(41),d=n(8),f=n.n(d),h=n(22),v=n(36),g=n.n(v),E="http://localhost:8000/api";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=function(e){return"app/".concat("posts","/").concat(e)},j=P("LOAD_POSTS"),y=P("LOAD_POST"),w=P("LOAD_POST_PAGE"),_=P("START_REQUEST"),k=P("STOP_REQUEST"),x=P("ERROR_REQUEST"),S=P("RESET_REQUEST"),A=function(e){return{payload:e,type:w}},N=function(){return{type:_}},C=function(){return{type:k}},D=function(e){return{error:e,type:x}},I=function(e){return e.posts.data},R=function(e){return e.posts.singlePost},q=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},T=function(e){return e.posts.request},H={data:[],request:{pending:!1,error:null,success:null},singlePost:{},amount:0,postsPerPage:10,presentPage:1};var M=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case j:return O({},e,{data:t.payload});case y:return O({},e,{singlePost:t.post});case w:return O({},e,{presentPage:t.payload.presentPage,postsPerPage:t.payload.postsPerPage,amount:t.payload.amount,data:Object(p.a)(t.payload.posts)});case _:return O({},e,{request:{pending:!0,error:null,success:null}});case k:return O({},e,{request:{pending:!1,error:null,success:!0}});case x:return O({},e,{request:{pending:!1,error:t.error,success:!1}});case S:return O({},e,{request:{pending:!1,error:null,success:null}});default:return e}}}),B=Object(l.e)(M,Object(l.d)(Object(l.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),U=n(10),L=n(11),F=n(13),Q=n(12),X=n(14),G=n(30),J=(n(135),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),V=(n(136),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(s.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))}))}),W=Object(G.e)(function(e){return r.a.createElement(V,e)}),Y=(n(140),function(e){function t(){var e,n;Object(U.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).state={links:[{path:"/",title:"Home"},{path:"/posts/new",title:"Add post"},{path:"/posts",title:"Posts"},{path:"/posts/random",title:"Random post"},{path:"/contact",title:"Contact"}]},n}return Object(X.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(J,null),r.a.createElement(W,{links:e}))}}]),t}(r.a.Component)),z=(n(141),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),K=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(z,null,r.a.createElement(Y,null),t))},Z=(n(142),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),$=function(){return r.a.createElement("div",null,r.a.createElement(Z,null,"Contact"),r.a.createElement("p",null,"Your Favourite Blooger Ltd."),r.a.createElement("p",null,"9432 Division Street"),r.a.createElement("p",null,"Stone Mountain, GA 30083"),r.a.createElement("p",null,"Mobile Number: 207-914-3411"))},ee=(n(143),n(26)),te=(n(144),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(ee.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({},c,{className:"button button--".concat(n)}),a)}),ne=(n(145),function(e){var t=e.children,n=Object(ee.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),ae=n(106),re=n.n(ae),ce=function(e){var t=e.children,n=Object(ee.a)(e,["children"]);return r.a.createElement("div",Object.assign({},n,{className:"html-box"}),re()(t))},oe=function(e){var t=e.id,n=e.title,a=e.content,c=e.author;return r.a.createElement("article",{className:"post-summary"},r.a.createElement(ne,null,n),r.a.createElement("p",null,"Author: ",c),r.a.createElement(ce,null,function(e,t){if(t>0){if(e.length>t){var n=e.substr(0,t);return n.substr(0,n.lastIndexOf(" "))+"..."}return e}return"Error"}(a,60)),r.a.createElement(s.b,{to:"/posts/"+t},r.a.createElement(te,{variant:"primary"},"Read More")))},se=function(e){var t=e.posts;return r.a.createElement("div",null,r.a.createElement("section",{className:"posts-list"},t.map(function(e){return r.a.createElement(oe,Object.assign({key:e.id},e))})))},ie=n(55),le=(n(234),function(){return r.a.createElement(ie.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),ue=n(37),pe=(n(235),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(ee.a)(e,["variant","children"]);return r.a.createElement(ie.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(ue.c,null);case"success":return r.a.createElement(ue.a,null);case"warning":case"error":return r.a.createElement(ue.b,null);default:return r.a.createElement(ue.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),me=(n(236),function(e){function t(){var e,n;Object(U.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).state={isActive:void 0===n.props.isActive||n.props.isActive,presentPage:n.props.initialPage,leftArrowIsHidden:!0,rightArrowIsHidden:!1},n.changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n.changeWithArrow=function(){var e=Object(h.a)(f.a.mark(function e(t){var a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state.presentPage,r=n.props.onPageChange,!t){e.next=7;break}return e.next=5,n.setState({presentPage:a-1});case 5:e.next=9;break;case 7:return e.next=9,n.setState({presentPage:a+1});case 9:r(n.state.presentPage);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(X.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,n=e.pages;t>1?this.setState({leftArrowIsHidden:!1}):this.setState({leftArrowIsHidden:!0}),t<n?this.setState({rightArrowIsHidden:!1}):this.setState({rightArrowIsHidden:!0})}},{key:"render",value:function(){var e=this.props.pages,t=this.state,n=t.presentPage,a=t.leftArrowIsHidden,c=t.rightArrowIsHidden,o=t.isActive,s=this.changePage,i=this.changeWithArrow;return r.a.createElement("div",{hidden:!o,className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},r.a.createElement("li",{className:"pagination__list__item",onClick:function(){return i(!0)},hidden:a},"<"),Object(p.a)(Array(e)).map(function(e,t){return r.a.createElement("li",{key:++t,onClick:function(){return s(t)},className:"pagination__list__item".concat(t===n?" pagination__list__item--active":"")},t)}),r.a.createElement("li",{className:"pagination__list__item",onClick:function(){return i(!1)},hidden:c},">")))}}]),t}(r.a.Component)),de=function(e){function t(){var e,n;Object(U.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).loadPostsPage=function(e){var t=n.props;(0,t.loadPostsByPage)(e,t.postsPerPage||3)},n}return Object(X.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadPostsByPage,n=e.initialPage,a=e.postsPerPage;t(void 0!==n?n:1,a||3)}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.request,a=e.pages,c=e.initialPage,o=e.pagination,s=e.selectedPage,i=this.loadPostsPage;return!n.pending&&n.success&&t.length>0?r.a.createElement("div",null,r.a.createElement(se,{posts:t}),r.a.createElement(me,{pages:a,onPageChange:i,initialPage:void 0!==c?c:s,isActive:o})):n.pending||null===n.success?r.a.createElement(le,null):n.pending||null===n.error?!n.pending&&n.success&&0===t.length?r.a.createElement(pe,{variant:"info"},"No posts"):void 0:r.a.createElement(pe,{variant:"error"},n.error)}}]),t}(r.a.Component),fe=Object(i.b)(function(e){return{posts:I(e),request:T(e),pages:q(e),selectedPage:(t=e,t.posts.presentPage)};var t},function(e){return{loadPostsByPage:function(t,n){return e(function(e,t){return function(){var n=Object(h.a)(f.a.mark(function n(a){var r,c,o,s;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(N()),n.prev=1,r=(e-1)*t,c=t,n.next=6,g.a.get("".concat(E,"/posts/range/").concat(r,"/").concat(c));case 6:o=n.sent,s={posts:o.data.posts,amount:o.data.amount,postsPerPage:t,presentPage:e},a(A(s)),a(C()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),a(D(n.t0.message));case 15:case"end":return n.stop()}},n,null,[[1,12]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))}}})(de),he=function(){return r.a.createElement("div",null,r.a.createElement(Z,null,"Blog"),r.a.createElement(fe,{postsPerPage:3,pagination:!1}))},ve=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 - Page Not Found"))},ge=function(e){function t(){return Object(U.a)(this,t),Object(F.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.props.quantity;return 0!==e?r.a.createElement("div",null,"Posts amount: ".concat(e)):r.a.createElement("div",null,"- no posts -")}}]),t}(r.a.Component),Ee=Object(i.b)(function(e){return{quantity:(t=e,t.posts.data.length)};var t})(ge),be=function(){return r.a.createElement("div",null,r.a.createElement(Z,null,"Posts list"),r.a.createElement(Ee,null),r.a.createElement(fe,null))},Oe=n(107),Pe=n.n(Oe),je=(n(240),n(241),n(242),function(e){var t=e.value,n=e.label,a=e.onChange,c=Object(ee.a)(e,["value","label","onChange"]);return r.a.createElement("label",{className:"text-field"},r.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),r.a.createElement("input",Object.assign({},c,{value:t,onChange:a,className:"text-field__input"})))}),ye=(n(243),function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)});n(244);function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ke=function(e){function t(){var e,n;Object(U.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).state={post:{id:"",title:"",author:"",content:""}},n.handleChange=function(e){var t=n.state.post;n.setState({post:_e({},t,Object(m.a)({},e.target.name,e.target.value))})},n.handleEditor=function(e){var t=n.state.post;n.setState({post:_e({},t,{content:e})})},n.addPost=function(e){var t=n.props.addPost,a=n.state.post;e.preventDefault(),t({title:a.title,author:a.author,content:a.content})},n.updatePost=function(e){var t=n.props.updatePost,a=n.state.post;e.preventDefault(),t(a)},n}return Object(X.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isEdit,n=e.resetRequest,a=e.getPost;if(n(),t){var r=a;this.setState({post:{id:r.id,title:r.title,author:r.author,content:r.content}})}}},{key:"render",value:function(){var e=this.state.post,t=this.handleChange,n=this.handleEditor,a=this.addPost,c=this.updatePost,o=this.props,s=o.request,i=o.isEdit;return s.error?r.a.createElement(pe,{variant:"error"},s.error):s.success?r.a.createElement(pe,{variant:"success"},i?"Post has been updated!":"Post has been added!"):s.pending?r.a.createElement(le,null):r.a.createElement("form",{onSubmit:i?c:a},r.a.createElement(je,{label:"Title",value:e.title,onChange:t,name:"title"}),r.a.createElement(je,{label:"Author",value:e.author,onChange:t,name:"author"}),r.a.createElement(ye,null,"Edit post content"),r.a.createElement(Pe.a,{className:"content-editor",text:e.content,onChange:n,options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),r.a.createElement(te,{variant:"primary"},i?"Update post":"Add post"))}}]),t}(r.a.Component),xe=Object(i.b)(function(e){return{request:T(e),getPost:R(e)}},function(e){return{addPost:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark(function t(n){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(N()),t.prev=1,t.next=4,g.a.post("".concat(E,"/posts"),e);case 4:n(C()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(D(t.t0.message));case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e({type:S})},updatePost:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark(function t(n){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(N()),t.prev=1,t.next=4,g.a.put("".concat(E,"/posts"),e).then(function(){return n(C())}).catch(function(e){return n(D(e.message))});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),n(D(t.t0.message));case 9:case"end":return t.stop()}},t,null,[[1,6]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(ke),Se=function(){return r.a.createElement("div",null,r.a.createElement(Z,null,"Add Post"),r.a.createElement(xe,{isEdit:!1}))},Ae=function(){return r.a.createElement("div",null,r.a.createElement(Z,null,"Edit Post"),r.a.createElement(xe,{isEdit:!0}))},Ne=n(43),Ce=n(108),De=function(e){function t(){var e,n;Object(U.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).state={singlePost:{}},n.singleHandling=Object(h.a)(f.a.mark(function e(){var t,a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.loadPost,r=t.id,e.next=3,a(r);case 3:n.setState({singlePost:n.props.singlePost});case 4:case"end":return e.stop()}},e)})),n.randomHandling=Object(h.a)(f.a.mark(function e(){var t,a,r,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.loadPost,r=t.loadPosts,e.next=3,r();case 3:return c=n.props.posts,e.next=6,a(c[Math.round(Math.random()*(c.length-1))].id);case 6:n.setState({singlePost:n.props.singlePost});case 7:case"end":return e.stop()}},e)})),n}return Object(X.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.isRandom,t=this.randomHandling,n=this.singleHandling;e?t():n()}},{key:"render",value:function(){var e=this.state.singlePost,t=this.props,n=t.request,a=t.location;return!n.pending&&n.success?r.a.createElement("div",null,r.a.createElement(ne,null,e.title),r.a.createElement(Ne.FacebookProvider,{appId:"710139419429929"},r.a.createElement(Ne.ShareButton,{className:"button",href:"".concat("http://localhost:3000/").concat(a.pathname)},r.a.createElement(Ce.a,{title:"share"}))),r.a.createElement("p",null,"Author: ",e.author),r.a.createElement(ce,null,e.content),r.a.createElement(s.b,{to:"/posts/edit"},r.a.createElement(te,{variant:"info"},"Edit post")),r.a.createElement(Ne.FacebookProvider,{appId:"710139419429929"},r.a.createElement(Ne.Comments,{href:"".concat("http://localhost:3000/").concat(a.pathname)}))):n.pending||null===n.success?r.a.createElement(le,null):n.pending||null===n.error?n.pending||!1!==n.success||null!==n.error?void 0:r.a.createElement(pe,{variant:"warning"},"Post don't exist"):r.a.createElement(pe,{variant:"error"},n.error)}}]),t}(r.a.Component),Ie=Object(G.e)(function(e){return r.a.createElement(De,e)}),Re=Object(i.b)(function(e){return{singlePost:R(e),request:T(e),posts:I(e)}},function(e){return{loadPost:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark(function t(n){var a;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(N()),t.prev=1,t.next=4,g.a.get("".concat(E,"/posts/").concat(e));case 4:null!==(a=t.sent).data?(n({post:a.data,type:y}),n(C())):n(D("Post with id:".concat(e," don't exist"))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(D(t.t0.message));case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()}(t))},loadPosts:function(){return e(function(){var e=Object(h.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(N()),e.prev=1,e.next=4,g.a.get("".concat(E,"/posts"));case 4:n=e.sent,t({payload:n.data,type:j}),t(C()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(D(e.t0.message));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}())}}})(Ie),qe=function(e){return r.a.createElement("div",null,r.a.createElement(Z,null,"SinglePost"),r.a.createElement(Re,{id:e.match.params.id}))},Te=function(){return r.a.createElement("div",null,r.a.createElement(Z,null,"Random Post"),r.a.createElement(Re,{isRandom:!0}))},He=function(e){function t(){return Object(U.a)(this,t),Object(F.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K,null,r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",exact:!0,component:he}),r.a.createElement(G.a,{path:"/posts",exact:!0,component:be}),r.a.createElement(G.a,{path:"/posts/new",exact:!0,component:Se}),r.a.createElement(G.a,{path:"/posts/edit",exac:!0,component:Ae}),r.a.createElement(G.a,{path:"/posts/random",exac:!0,component:Te}),r.a.createElement(G.a,{path:"/contact",exact:!0,component:$}),r.a.createElement(G.a,{path:"/posts/:id",exact:!0,component:qe}),r.a.createElement(G.a,{component:ve}))))}}]),t}(r.a.Component);n(274),n(275);o.a.render(r.a.createElement(function(){return r.a.createElement(i.a,{store:B},r.a.createElement(s.a,null,r.a.createElement(He,null)))},null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.6c440c40.chunk.js.map