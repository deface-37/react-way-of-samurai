(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"g",(function(){return S})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return O}));var r=n(6),a=n.n(r),c=n(14),u=n(37),o=n(7),i=n(31),l=n(12),s=function(e){return l.c.get("profile/"+e).then((function(e){return e.data}))},f=function(e){return l.c.get("profile/status/"+e).then((function(e){return e.data}))},d=function(e){return l.c.put("profile/status",{status:e}).then((function(e){return e.data}))},m=function(e){var t=new FormData;return t.append("image",e),l.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},p=function(e){return l.c.put("profile",e).then((function(e){return e.data}))},E={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},h={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:r=t.sent,n(h.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,n(h.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:0===t.sent.resultCode&&n(h.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:0===(r=t.sent).resultCode&&n(h.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,p(e);case 3:if(0!==(u=t.sent).resultCode){t.next=12;break}if(null==c){t.next=9;break}n(g(c)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(i.a)("edit-profile",{_error:u.messages[0]})),t.abrupt("return",Promise.reject(u.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n])});case"SN/PROFILE/SET_STATUS":return Object(o.a)({},e,{status:t.status});case"SN/PROFILE/SET_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});case"SN/PROFILE/DELETE_POST":return Object(o.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(o.a)({},e,{profile:Object(o.a)({},e.profile,{photos:t.photos})});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r,a,c=n(140),u=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1cdd9f77-c60e-4af5-b194-659e4ebd5d41"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(37),a=n(7),c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u={sendMessage:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},135:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},142:function(e,t,n){e.exports=n.p+"static/media/preloader.6e7c9db7.svg"},145:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3KF9d"}},174:function(e,t,n){e.exports=n(313)},179:function(e,t,n){},18:function(e,t,n){e.exports={nav:"Navbar_nav__3iznz",item:"Navbar_item__3a6eA",activeLink:"Navbar_activeLink__3tHG5"}},180:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d}));var r=n(93),a=n(0),c=n.n(a),u=n(45),o=n.n(u),i=n(92),l=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return c.a.createElement("div",{className:o.a.formControl+" "+(u?o.a.error:"")},c.a.createElement("div",null,a),u&&c.a.createElement("span",null,r))},s=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("input",Object.assign({},t,n)))};function d(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},313:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),c=n(62),u=n.n(c),o=(n(179),n(63)),i=n(64),l=n(68),s=n(69),f=(n(180),n(18)),d=n.n(f),m=n(19),p=function(){return a.a.createElement("nav",{className:d.a.nav},a.a.createElement("div",{className:d.a.item},a.a.createElement(m.b,{to:"/profile",activeClassName:d.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},a.a.createElement(m.b,{to:"/dialogs",activeClassName:d.a.activeLink},"Messages")),a.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},a.a.createElement(m.b,{to:"/users",activeClassName:d.a.activeLink},"Users")),a.a.createElement("div",{className:d.a.item},a.a.createElement("a",null,"News")),a.a.createElement("div",{className:d.a.item},a.a.createElement("a",null,"Music")),a.a.createElement("div",{className:d.a.item},a.a.createElement("a",null,"Settings")))},E=n(10),h=n(97),g=n.n(h),v=function(e){return a.a.createElement("header",{className:g.a.header},a.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),a.a.createElement("div",{className:g.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")," "):a.a.createElement(m.b,{to:"/login"},"Login")))},S=n(9),b=n(6),O=n.n(b),_=n(14),w=n(7),j=n(12),P=n(31),N=function(){return j.c.get("auth/me").then((function(e){return e.data}))},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return j.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},C=function(){return j.c.delete("auth/login")},T=function(){return j.c.get("security/get-captcha-url").then((function(e){return e.data}))},I={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},U=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},k=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},R=function(){return function(){var e=Object(_.a)(O.a.mark((function e(t){var n,r,a,c,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:(n=e.sent).resultCode===j.b.Success&&(r=n.data,a=r.id,c=r.login,u=r.email,t(U(a,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(_.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,r=n.url,t(k(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(w.a)({},e,{},t.payload);default:return e}},x=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(v,this.props)}}]),n}(a.a.Component),F=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(_.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:0===e.sent.data.resultCode&&t(U(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(x),D=n(137),G=n(25),z=n(65),H=n(45),M=n.n(H),V=Object(D.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(G.c)("Email","email",[z.b],G.a),Object(G.c)("Password","password",[z.b],G.a,{type:"password"}),Object(G.c)(void 0,"rememberMe",[],G.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(G.c)("Symbols from image","captcha",[z.b],G.a,{}),n&&a.a.createElement("div",{className:M.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),B=function(){var e=Object(S.d)((function(e){return e.auth.captchaUrl})),t=Object(S.d)((function(e){return e.auth.isAuth})),n=Object(S.c)();return t?a.a.createElement(E.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(V,{onSubmit:function(e){var t,r,a,c;n((t=e.email,r=e.password,a=e.rememberMe,c=e.captcha,function(){var e=Object(_.a)(O.a.mark((function e(n){var u,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,r,a,c);case 2:(u=e.sent).resultCode===j.b.Success?n(R()):(u.resultCode===j.a.CaptchaIsRequired&&n(L()),o=u.messages.length>0?u.messages[0]:"Some error",n(Object(P.a)("login",{_error:o})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e}))},W=n(8),X={initialized:!1},q=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(w.a)({},e,{initialized:!0});default:return e}},Z=n(67),K=n(104),J=n(134),$={},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$;arguments.length>1&&arguments[1];return e},ee=n(37),te=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)({},e,{},r):e}))},ne={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return j.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return j.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return j.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},re={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},ae=function(e){return{type:"SN/USERS/SET_USERS",users:e}},ce=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},ue=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},oe=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},ie=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},le=function(e,t,n){return function(){var r=Object(_.a)(O.a.mark((function r(a,c){var u;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(ie(!0)),a(ce(e)),a(ue(n)),r.next=5,ne.getUsers(e,t,n.term,n.friend);case 5:u=r.sent,a(ie(!1)),a(ae(u.items)),a(oe(u.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(w.a)({},e,{users:te(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(w.a)({},e,{users:te(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(w.a)({},e,{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(w.a)({},e,{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(w.a)({},e,{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(w.a)({},e,{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(w.a)({},e,{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(w.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(ee.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},fe=n(143),de=n(138),me=Object(W.c)({profilePage:K.b,dialogsPage:J.b,sidebar:Q,usersPage:se,auth:A,form:de.a,app:Y}),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,Ee=Object(W.e)(me,pe(Object(W.a)(fe.a)));window.__store__=Ee;var he=Ee;function ge(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"loading...")},a.a.createElement(e,t))}}var ve=n(144),Se=Object(ve.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),be=function(e){return e.usersPage.pageSize},Oe=function(e){return e.usersPage.totalUsersCount},_e=function(e){return e.usersPage.currentPage},we=function(e){return e.usersPage.isFetching},je=function(e){return e.usersPage.followingInProgress},Pe=function(e){return e.usersPage.filter},Ne=n(70),ye=n(103),Ce=n(76),Te=n.n(Ce),Ie=n(101),Ue=n.n(Ie),ke=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,u=void 0===c?1:c,o=e.onPageChanged,i=void 0===o?function(e){return e}:o,l=e.portionSize,s=void 0===l?10:l,f=Math.ceil(t/n),d=[],m=1;m<=f;m++)d.push(m);var p=Math.ceil(f/s),E=Object(r.useState)(1),h=Object(ye.a)(E,2),g=h[0],v=h[1],S=(g-1)*s+1,b=g*s;return a.a.createElement("div",{className:Ue()(Te.a.paginator)},g>1&&a.a.createElement("button",{onClick:function(){v(g-1)}},"PREV"),d.filter((function(e){return e>=S&&e<=b})).map((function(e){return a.a.createElement("span",{className:Ue()(Object(Ne.a)({},Te.a.selectedPage,u===e),Te.a.pageNumber),key:e,onClick:function(t){i(e)}},e)})),p>g&&a.a.createElement("button",{onClick:function(){v(g+1)}},"NEXT"))},Re=n(145),Le=n.n(Re),Ae=n(135),xe=n.n(Ae),Fe=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:xe.a,className:Le.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},De=n(52),Ge=function(e){return{}},ze=a.a.memo((function(e){return a.a.createElement("div",null,a.a.createElement(De.c,{initialValues:{term:e.initialValue.term,friend:String(e.initialValue.friend)},validate:Ge,onSubmit:function(t,n){var r=n.setSubmitting,a={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(a),r(!1)}},(function(e){var t=e.isSubmitting;return a.a.createElement(De.b,null,a.a.createElement(De.a,{type:"text",name:"term"}),a.a.createElement(De.a,{name:"friend",as:"select"},a.a.createElement("option",{value:"null"},"All"),a.a.createElement("option",{value:"true"},"Only followed"),a.a.createElement("option",{value:"false"},"Only unfollowed")),a.a.createElement("button",{type:"submit",disabled:t},"Find"))})))})),He=n(148),Me=function(e){var t=Object(S.d)(Se),n=Object(S.d)(Oe),c=Object(S.d)(_e),u=Object(S.d)(be),o=Object(S.d)(Pe),i=Object(S.d)(je),l=Object(E.g)(),s=Object(S.c)(),f=He.parse(l.location.search),d=Object(w.a)({},o),m=c;f.term&&(d.term=f.term),f.friend&&(d.friend="true"===f.friend||"false"!==f.friend&&null),f.page&&"1"!==f.page&&(m=+f.page),Object(r.useEffect)((function(){s(le(m,u,d))}),[]);var p=function e(t){s(e(t))},h=function e(t){s(e(t))};return a.a.createElement("div",null,a.a.createElement(ze,{onFilterChanged:function(e){l.push({pathname:"/users",search:"?term=".concat(e.term,"&friend=").concat(e.friend,"&page=").concat(m)}),s(le(1,u,e))},initialValue:d}),a.a.createElement(ke,{currentPage:c,onPageChanged:function(e){l.push({pathname:"/users",search:"?term=".concat(o.term,"&friend=").concat(o.friend,"&page=").concat(e)}),s(le(e,u,o))},totalItemsCount:n,pageSize:u}),a.a.createElement("div",null,t.map((function(e){return a.a.createElement(Fe,{user:e,followingInProgress:i,key:e.id,unfollow:h,follow:p})}))))},Ve=function(e){var t=Object(S.d)(we);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,e.pageTitle),t?a.a.createElement(Z.a,null):null,a.a.createElement(Me,null))},Be=a.a.lazy((function(){return n.e(4).then(n.bind(null,319))})),We=a.a.lazy((function(){return n.e(3).then(n.bind(null,318))})),Xe=ge(Be),qe=ge(We),Ye=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("Some error occured")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(F,null),a.a.createElement(p,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(E.d,null,a.a.createElement(E.b,{exact:!0,path:"/",render:function(){return a.a.createElement(E.a,{to:"/profile"})}}),a.a.createElement(E.b,{path:"/dialogs",render:function(){return a.a.createElement(Xe,null)}}),a.a.createElement(E.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(qe,null)}}),a.a.createElement(E.b,{path:"/users",render:function(){return a.a.createElement(Ve,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0438"})}}),a.a.createElement(E.b,{path:"/login",render:function(){return a.a.createElement(B,null)}}),a.a.createElement(E.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))):a.a.createElement(Z.a,null)}}]),n}(r.Component),Ze=Object(W.d)(E.h,Object(S.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(R());Promise.all([t]).then((function(){e(q())}))}}}))(Ye),Ke=function(){return a.a.createElement(m.a,null,a.a.createElement(S.a,{store:he},a.a.createElement(Ze,null)))};u.a.render(a.a.createElement(Ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1w5-L",error:"FormsControls_error__H6nuI",formSummaryError:"FormsControls_formSummaryError__2iG6H"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},67:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(142),u=n.n(c);t.a=function(){return a.a.createElement("div",{style:{backgroundColor:"white"}},a.a.createElement("img",{src:u.a}))}},76:function(e,t,n){e.exports={paginator:"Paginator_paginator__3XTp-",pageNumber:"Paginator_pageNumber__3ZLKa",selectedPage:"Paginator_selectedPage__18w4-"}},97:function(e,t,n){e.exports={header:"Header_header__2e1ZH",loginBlock:"Header_loginBlock__1lXxR"}}},[[174,1,2]]]);
//# sourceMappingURL=main.46d69763.chunk.js.map