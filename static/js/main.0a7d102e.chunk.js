(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){e.exports=n.p+"static/media/preloader.6f09789b.gif"},116:function(e,t,n){},117:function(e,t,n){e.exports={item:"Post_item__1KPgc"}},119:function(e,t,n){e.exports=n(246)},131:function(e,t,n){},23:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__39FO8",dialogsItems:"Dialogs_dialogsItems__SBEmb",dialog:"Dialogs_dialog__3t9-J",active:"Dialogs_active__3AiiA",messages:"Dialogs_messages__3Biby",message:"Dialogs_message__2KBzP"}},246:function(e,t,n){"use strict";n.r(t);n(81),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(22),r=n(4),o=n.n(r),s=n(9),u=n(12),c=n(248).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3835033e-7e15-405d-977a-d647f22572da"}}),i={getUsers:function(e,t){return c.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},followUser:function(e){return c.post("follow/".concat(e)).then(function(e){return e.data})},unfollowUser:function(e){return c.delete("follow/".concat(e)).then(function(e){return e.data})}},l=function(e){return c.get("profile/"+e).then(function(e){return e.data})},p=function(e){return c.get("profile/status/"+e).then(function(e){return e.data})},m=function(e){return c.put("profile/status",{status:e}).then(function(e){return e.data})},f=function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},d=function(e){return c.put("profile",e).then(function(e){return e.data})},g=function(){return c.get("auth/me").then(function(e){return e.data})},b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then(function(e){return e.data})},h=function(){return c.delete("auth/login").then(function(e){return e.data})},E=function(){return c.get("security/get-captcha-url").then(function(e){return e.data})},v={initialized:!1,error:""},O=function(e){return{type:"SET_ERROR_MESSAGE",payload:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(u.a)({},e,{initialized:!0});case"SET_ERROR_MESSAGE":return Object(u.a)({},e,{error:t.payload});default:return e}},y={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},_=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},w=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},P=function(){return function(){var e=Object(s.a)(o.a.mark(function e(t){var n,a,r,s,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,s=a.email,u=a.login,t(_(r,s,u,!0)));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},S=function(){return function(){var e=Object(s.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:n=e.sent,a=n.url,t(w(a));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(u.a)({},e,{captchaUrl:null},t.payload);case"GET_CAPTCHA_URL_SUCCESS":return Object(u.a)({},e,t.payload);default:return e}},C=n(11),A={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your react?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(u.a)({},e,{messages:Object(C.a)(e.messages).concat([{id:6,message:t.payload}])});default:return e}},I={pages:[{id:1,namePage:"Profile"},{id:2,namePage:"Messages"},{id:3,namePage:"News"},{id:4,namePage:"Music"},{id:5,namePage:"Users"},{id:6,namePage:"Settings"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;arguments.length>1&&arguments[1];return e},F=n(13),N={posts:[{id:1,message:"It is react",likesCount:12},{id:2,message:"It is Js",likesCount:15},{id:3,message:"It is Html",likesCount:10},{id:4,message:"It is CSS",likesCount:20}],profile:null,status:""},x=function(e){return{type:"SET-STATUS",status:e}},M=function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n,a){var r,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,d(e);case 3:if(s=t.sent,n(O(s.messages[0]||"")),0!==s.resultCode){t.next=11;break}if(null==r){t.next=10;break}n(M(r)),t.next=11;break;case 10:throw new Error("userId can't be null");case 11:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(u.a)({},e,{posts:Object(C.a)(e.posts).concat([{id:5,likesCount:0,message:t.payload}])});case"DELETE_POST":return Object(u.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});case"SET_USER_PROFILE":var n=t.profile.contacts;return Object(u.a)({},e,{profile:function(e,t){return Object(u.a)({},e.profile,{contacts:Object.keys(t).reduce(function(e,n){return t[n]?Object(u.a)({},e,Object(F.a)({},n,t[n])):Object(u.a)({},e,Object(F.a)({},n,""))},{})})}(t,n)});case"SET-STATUS":return Object(u.a)({},e,{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(u.a)({},e,{profile:Object(u.a)({},e.profile,{photos:t.photos})})}return e},R=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(u.a)({},e,a):e})},z={users:[],pageSize:5,totalItemsCount:0,currentPage:1,isFetching:!1,followingProgress:[]},G=function(e){return{type:"UNFOLLOW",userId:e}},q=function(e){return{type:"FOLLOW",userId:e}},J=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},B=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},V=function(){var e=Object(s.a)(o.a.mark(function e(t,n,a,r){var s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0,n)),e.next=3,a(n);case 3:0===(s=e.sent).resultCode&&t(r(n)),t(B(!1,n)),t(O(s.messages[0]||""));case 7:case"end":return e.stop()}},e,this)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(u.a)({},e,{users:R(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(u.a)({},e,{users:R(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(u.a)({},e,{users:t.users});case"SET_CARRENT_PAGE":return Object(u.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(u.a)({},e,{totalItemsCount:t.count});case"TOGGLE_IS_FETCHING":return Object(u.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)({},e,{followingProgress:t.isFetching?Object(C.a)(e.followingProgress).concat([t.userId]):e.followingProgress.filter(function(e){return e!==t.userId})});default:return e}},W=n(107),K=Object(a.b)({profilePage:L,dialogsPage:T,navbar:U,usersPage:H,auth:k,app:j}),Y=Object(a.d)(K,Object(a.a)(W.a)),Q=n(1),Z=n.n(Q),X=n(54),$=n.n(X),ee=n(6),te=n(8),ne=n(15),ae=n(7),re=n(14),oe=(n(131),n(33)),se=n(45),ue=n.n(se),ce=n(21),ie=function(e){var t=e.pageElements.map(function(e){return Z.a.createElement("div",{className:ue.a.item,key:e.namePage},Z.a.createElement(ce.b,{to:e.namePage.toLowerCase(),className:function(e){return e.isActive?ue.a.active:ue.a.item}},e.namePage))});return Z.a.createElement("nav",{className:ue.a.nav},t)},le=Object(oe.b)(function(e){return{pageElements:e.navbar.pages}},function(){return{}})(ie),pe=n(0),me=n(23),fe=n.n(me),de=function(e){var t="/messages/"+e.id;return Z.a.createElement("div",{className:fe.a.dialog},Z.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiTTq70tFP6pkvJIbaX8TVUUVfYjA049osQ&usqp=CAU",alt:""}),Z.a.createElement(ce.b,{className:function(e){return e.isActive?fe.a.active:fe.a.item},to:t},e.name))},ge=function(e){return Z.a.createElement("div",{className:fe.a.message},e.message)},be=n(16),he=n(17),Ee=n(25),ve=n(38),Oe=n.n(ve),je=function(e){var t=e.field,n=e.form,a=n.touched,r=n.errors,o=e.typeField,s=Object(Ee.a)(e,["field","form","typeField"]),u=a[t.name]&&r[t.name];return Z.a.createElement("div",{className:Oe.a.formControl+" "+(u?Oe.a.error:"")},"textarea"===o?Z.a.createElement("textarea",Object.assign({},t,s)):Z.a.createElement("input",Object.assign({},t,s)),a[t.name]&&r[t.name]&&Z.a.createElement("div",{className:Oe.a.error},r[t.name]))},ye=function(e){return Z.a.createElement(be.c,{initialValues:{enterMessage:""},onSubmit:function(t,n){e.addMessage(t),n.resetForm()},validationSchema:he.a({enterMessage:he.b().max(5,"Must be 5 characters or less").required("Required")})},function(e){return Z.a.createElement(be.b,null,Z.a.createElement(be.a,{placeholder:"Enter your message",name:"enterMessage",component:je,typeField:"textarea"}),Z.a.createElement("div",null,Z.a.createElement("button",{type:"submit"},"Add message")))})},_e=function(e){var t=e.dialogsPage.dialogs.map(function(e){return Z.a.createElement(de,{key:e.id,name:e.name,id:e.id})}),n=e.dialogsPage.messages.map(function(e){return Z.a.createElement(ge,{key:e.id,message:e.message})});return Z.a.createElement("div",{className:fe.a.dialogs},Z.a.createElement("div",{className:fe.a.dialogsItems},t),Z.a.createElement("div",{className:fe.a.messages},n,Z.a.createElement(ye,{addMessage:function(t){e.addMessage(t.enterMessage)}})))},we=n(19),Pe=function(e){return{isAuth:e.auth.isAuth}};function Se(e){return function(t){var n=Object(pe.k)(),a=Object(pe.m)(),r=Object(pe.o)();return Z.a.createElement(e,Object.assign({},t,{router:{location:n,navigate:a,params:r}}))}}var ke=Object(a.c)(Object(we.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{addMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",payload:e}}(t))}}}),Se,function(e){return Object(we.b)(Pe,{})(function(t){var n=t.isAuth,a=Object(Ee.a)(t,["isAuth"]);return n?Z.a.createElement(e,a):Z.a.createElement(pe.a,{to:"/login",replace:!0})})})(_e),Ce=n(64),Ae=n.n(Ce),Te=n(5),Ie=n(67),Ue=n.n(Ie),Fe=n(78),Ne=n.n(Fe),xe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=void 0===a?1:a,o=e.onPageChanged,s=void 0===o?function(e){return e}:o,u=e.portionSize,c=void 0===u?10:u,i=Math.ceil(t/n),l=[],p=1;p<=i;p++)l.push(p);var m=Math.ceil(i/c),f=Object(Q.useState)(1),d=Object(Te.a)(f,2),g=d[0],b=d[1],h=(g-1)*c+1,E=g*c;return Z.a.createElement("div",{className:Ne()(Ue.a.paginator)},g>1&&Z.a.createElement("button",{onClick:function(){b(g-1)}},"PREV"),l.filter(function(e){return e>=h&&e<=E}).map(function(e){return Z.a.createElement("span",{className:Ne()(Object(F.a)({},Ue.a.selectedPage,r===e),Ue.a.pageNumber),key:e,onClick:function(t){s(e)}},e)}),m>g&&Z.a.createElement("button",{onClick:function(){b(g+1)}},"NEXT"))},Me=n(65),De=n.n(Me),Le=function(e){var t=e.user,n=e.followingProgress,a=e.unfollow,r=e.follow;return Z.a.createElement("div",null,Z.a.createElement("span",null,Z.a.createElement("div",null,Z.a.createElement(ce.b,{to:"/profile/"+t.id},Z.a.createElement("img",{src:null!=t.photos.small?t.photos.small:De.a,className:Ae.a.userPhoto,alt:""}))),Z.a.createElement("div",null,t.followed?Z.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Unfollow"):Z.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Follow"))),Z.a.createElement("span",null,Z.a.createElement("span",null,Z.a.createElement("div",null,t.name),Z.a.createElement("div",null,t.status)),Z.a.createElement("span",null,Z.a.createElement("div",null," ","user.location.country"," "),Z.a.createElement("div",null," ","user.location.city"," "))))},Re=function(e){var t=e.currentPage,n=e.totalItemsCount,a=e.pageSize,r=e.onPageChanged,o=e.users,s=Object(Ee.a)(e,["currentPage","totalItemsCount","pageSize","onPageChanged","users"]);return Z.a.createElement("div",{className:Ae.a.pageUsers},Z.a.createElement(xe,{currentPage:t,onPageChanged:r,totalItemsCount:n,pageSize:a}),Z.a.createElement("div",null,o.map(function(e){return Z.a.createElement(Le,{user:e,followingProgress:s.followingProgress,key:e.id,unfollow:s.unfollow,follow:s.follow})})))},ze=n(115),Ge=n.n(ze),qe=function(){return Z.a.createElement("div",null,Z.a.createElement("img",{src:Ge.a,alt:""}))},Je=n(118),Be=Object(Je.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),Ve=function(e){function t(){var e,n;Object(ee.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(ne.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.setCurrentPage(e),n.props.requestUsersThunkCreator(e,n.props.pageSize)},n}return Object(re.a)(t,e),Object(te.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Z.a.createElement(Z.a.Fragment,null,this.props.isFetching?Z.a.createElement(qe,null):null,Z.a.createElement(Re,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingProgress:this.props.followingProgress,toggleFollowingProgress:this.props.toggleFollowingProgress}))}}]),t}(Z.a.Component),He=Object(a.c)(Object(we.b)(function(e){return{users:Be(e),pageSize:function(e){return e.usersPage.pageSize}(e),totalItemsCount:function(e){return e.usersPage.totalItemsCount}(e),currentPage:function(e){return e.usersPage.currentPage}(e),isFetching:function(e){return e.usersPage.isFetching}(e),followingProgress:function(e){return e.usersPage.followingProgress}(e)}},{follow:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.followUser.bind(e);case 2:a=t.sent,V(n,e,a,q);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.unfollowUser.bind(e);case 2:a=t.sent,V(n,e,a,G);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET_CARRENT_PAGE",currentPage:e}},toggleFollowingProgress:B,requestUsersThunkCreator:function(e,t){return function(){var n=Object(s.a)(o.a.mark(function n(a){var r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(J(!0)),n.next=3,i.getUsers(e,t);case 3:r=n.sent,a(J(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 7:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}}),Se)(Ve),We=n(116),Ke=n.n(We),Ye=n(39),Qe=n.n(Ye),Ze=function(e){var t=Object(Q.useState)(!1),n=Object(Te.a)(t,2),a=n[0],r=n[1],o=Object(Q.useState)(e.status),s=Object(Te.a)(o,2),u=s[0],c=s[1];Object(Q.useEffect)(function(){c(e.status)},[e.status]);return Z.a.createElement("div",null,!a&&Z.a.createElement("div",null,Z.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"No Status")),a&&Z.a.createElement("div",null,Z.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,type:"text",onBlur:function(){r(!1),e.updateStatus(u)},value:u})))},Xe=function(e){var t=e.props,n=e.outEditMode,a=t.profile,r=a.contacts,c=a.photos,i=a.userId,l=Object(Ee.a)(a,["contacts","photos","userId"]),p=Object(oe.c)();return Z.a.createElement("div",{className:Qe.a.aboutMeBlockForm},Z.a.createElement(be.c,{initialValues:Object(u.a)({},r,l),onSubmit:function(){var e=Object(s.a)(o.a.mark(function e(t){var a,r,s,u,l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.aboutMe,r=t.lookingForAJob,s=t.lookingForAJobDescription,u=t.fullName,l=Object(Ee.a)(t,["aboutMe","lookingForAJob","lookingForAJobDescription","fullName"]),e.next=3,p(D({aboutMe:a,lookingForAJob:r,lookingForAJobDescription:s,fullName:u,contacts:l,userId:i,photos:c}));case 3:n();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),validationSchema:he.a().shape({fullName:Object(he.b)().required(),facebook:Object(he.b)().url().nullable(),website:Object(he.b)().url().nullable(),vk:Object(he.b)().url().nullable(),twitter:Object(he.b)().url().nullable(),instagram:Object(he.b)().url().nullable(),youtube:Object(he.b)().url().nullable(),github:Object(he.b)().url().nullable(),mainLink:Object(he.b)().url().nullable()})},function(e){return Z.a.createElement(be.b,null,Z.a.createElement("div",null,Z.a.createElement("button",{type:"submit"},"Save")),Z.a.createElement("div",null,Z.a.createElement("label",null,Z.a.createElement("b",null,"Full name:"),Z.a.createElement(be.a,{component:je,name:"fullName",placeholder:"fullName",type:"input",typeField:"input"}))),Z.a.createElement("div",null,Z.a.createElement("label",null,Z.a.createElement("b",null,"Looking for a job:"),Z.a.createElement(be.a,{component:je,name:"lookingForAJob",placeholder:"lookingForAJob",type:"checkbox",typeField:"input"}))),Z.a.createElement("div",null,Z.a.createElement("label",null,Z.a.createElement("b",null,"My professional skills:"),Z.a.createElement(be.a,{component:je,name:"lookingForAJobDescription",placeholder:"lookingForAJobDescription",type:"input",typeField:"input"}))),Z.a.createElement("div",null,Z.a.createElement("label",null,Z.a.createElement("b",null,"About me:"),Z.a.createElement(be.a,{component:je,name:"aboutMe",placeholder:"aboutMe",type:"input",typeField:"textarea"}))),Z.a.createElement("div",null,Z.a.createElement("b",null,"Contacts:"),Object.keys(t.profile.contacts).map(function(e){return Z.a.createElement("div",{key:e},Z.a.createElement("label",null,Z.a.createElement("b",null,e,":"),Z.a.createElement(be.a,{component:je,name:e,placeholder:e,type:"input",typeField:"input"})))})))}))},$e=function(e){var t=e.contactTitle,n=e.contactValue;return Z.a.createElement("div",null,Z.a.createElement("b",null,t,":")," ",n)},et=function(e){var t=e.props,n=e.isOwner,a=e.goToEditMode;return Z.a.createElement("div",{className:Qe.a.aboutMeBlock},Z.a.createElement("div",null,n&&Z.a.createElement("button",{onClick:a},"Edit")),Z.a.createElement("div",null,Z.a.createElement("b",null,"Full name:")," ",t.profile.fullName),Z.a.createElement("div",null,Z.a.createElement("b",null,"Looking for a job: ")," ",t.profile.lookingForAJob?"yes":"no"),t.profile.lookingForAJob&&Z.a.createElement("div",null,Z.a.createElement("b",null,"My professional skills:"),t.profile.lookingForAJobDescription),Z.a.createElement("div",null,Z.a.createElement("b",null,"About me:")," ",t.profile.aboutMe),Z.a.createElement("div",null,Z.a.createElement("b",null,"Contacts:"),Object.keys(t.profile.contacts).map(function(e){return t.profile.contacts[e]?Z.a.createElement($e,{key:e,contactTitle:e,contactValue:t.profile.contacts[e]}):null})))},tt=function(e){var t=Object(Q.useState)(!1),n=Object(Te.a)(t,2),a=n[0],r=n[1];if(!e.profile)return Z.a.createElement(qe,null);return Z.a.createElement("div",{className:Qe.a.descriptionBlock},Z.a.createElement("div",{className:Qe.a.photoStatusBlock},Z.a.createElement("img",{src:e.profile.photos.large||De.a,alt:""}),e.isOwner&&Z.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),Z.a.createElement(Ze,{status:e.status,updateStatus:e.updateStatus})),a?Z.a.createElement(Xe,{outEditMode:function(){r(!1)},props:e}):Z.a.createElement(et,{goToEditMode:function(){r(!0)},props:e,isOwner:e.isOwner}))},nt=n(79),at=n.n(nt),rt=n(117),ot=n.n(rt),st=function(e){return Z.a.createElement("div",{className:ot.a.item},Z.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",alt:""}),e.message,Z.a.createElement("div",null,Z.a.createElement("span",null,"like")," ",e.likesCount))},ut=function(e){return Z.a.createElement(be.c,{initialValues:{addPost:""},onSubmit:function(t,n){e.addPost(t),n.resetForm()},validationSchema:he.a({addPost:he.b().max(5,"Must be 5 characters or less").required("Required")})},function(e){return Z.a.createElement(be.b,null,Z.a.createElement(be.a,{name:"addPost",component:je,typeField:"textarea"}),Z.a.createElement("div",null,Z.a.createElement("button",{type:"submit"},"Add post")))})},ct=function(e){var t=e.posts.map(function(e){return Z.a.createElement(st,{key:e.id,message:e.message,likesCount:e.likesCount})});return Z.a.createElement("div",{className:at.a.postsBlock},Z.a.createElement("h3",null,"My posts"),Z.a.createElement(ut,{addPost:function(t){e.addPost(t.addPost)}}),Z.a.createElement("div",{className:at.a.posts},t))},it=Object(we.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",payload:e}}(t))}}})(ct),lt=function(e){return Z.a.createElement("div",{className:Ke.a.content},Z.a.createElement(tt,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,authorizedUserId:e.authorizedUserId}),Z.a.createElement(it,null))},pt=function(e){function t(){var e,n;Object(ee.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(ne.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(r)))).getProfileData=function(e){n.props.profileThunkCreator(e),n.props.getUsersStatusThunk(e)},n}return Object(re.a)(t,e),Object(te.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.authorizedUserId,n=e.router;e.isAuth&&(n.params.userId?this.getProfileData(n.params.userId):this.getProfileData(t))}},{key:"componentDidUpdate",value:function(e,t,n){var a=this.props.router.params.userId,r=this.props.isAuth;if(a&&e.isAuth!==r)return this.getProfileData(this.props.router.params.userId);(e.isAuth!==r&&!a||a!==e.router.params.userId&&this.props.authorizedUserId)&&this.getProfileData(this.props.authorizedUserId)}},{key:"render",value:function(){return Z.a.createElement("div",null,Z.a.createElement(lt,Object.assign({},this.props,{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunk,savePhoto:this.props.savePhotoThunk})))}}]),t}(Z.a.Component),mt=Object(a.c)(Object(we.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{profileThunkCreator:M,getUsersStatusThunk:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:a=t.sent,n(x(a));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},updateStatusThunk:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:0===(a=t.sent).resultCode&&n(x(e)),n(O(a.messages[0]||""));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},savePhotoThunk:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:0===(a=t.sent).resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.photos}),n(O(a.messages[0]||""));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}),Se)(pt),ft=n(80),dt=n.n(ft),gt=function(e){var t=Object(pe.m)();return Z.a.createElement("header",{className:dt.a.header},Z.a.createElement("img",{src:"https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",alt:""}),Z.a.createElement("div",{className:dt.a.loginBlock},e.isAuth?Z.a.createElement("div",null,e.login," - ",Z.a.createElement("button",{onClick:function(){e.logout(),t("login")}},"Log Out")):Z.a.createElement(ce.b,{to:"/login"},"Login")))},bt=function(e){function t(){return Object(ee.a)(this,t),Object(ne.a)(this,Object(ae.a)(t).apply(this,arguments))}return Object(re.a)(t,e),Object(te.a)(t,[{key:"render",value:function(){return Z.a.createElement(gt,this.props)}}]),t}(Z.a.Component),ht=Object(we.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:0===(n=e.sent).resultCode&&t(_(null,null,null,!1)),t(O(n.messages[0]||""));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(bt),Et=function(e){var t=Object(pe.m)();return Z.a.createElement(be.c,{initialValues:{email:"",password:"",rememberMe:!1,captcha:""},onSubmit:function(){var n=Object(s.a)(o.a.mark(function n(a,r){var s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.login(a.email,a.password,a.rememberMe,a.captcha);case 2:if(!(s=n.sent).messages.length){n.next=5;break}return n.abrupt("return",r.setErrors({validationError:s.messages[0]}));case 5:t("/profile");case 6:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),validationSchema:he.a().shape({email:he.b().email("Invalid email").required("Required"),password:he.b().min(2,"Too Short!").max(50,"Too Long!").required("Required")})},function(t){return Z.a.createElement(be.b,null,Z.a.createElement("div",null,Z.a.createElement(be.a,{component:je,name:"email",placeholder:"Email",type:"input",typeField:"input"})),Z.a.createElement("div",null,Z.a.createElement(be.a,{component:je,type:"password",name:"password",placeholder:"Password",typeField:"input"})),Z.a.createElement("div",null,Z.a.createElement(be.a,{component:je,name:"rememberMe",type:"checkbox",typeField:"input"}),"remember me"),Z.a.createElement("div",null,e.captchaUrl&&Z.a.createElement("img",{src:e.captchaUrl,alt:""}),e.captchaUrl&&Z.a.createElement("div",null,Z.a.createElement("label",null,Z.a.createElement(be.a,{component:je,name:"captcha",type:"input",typeField:"input",required:!0})))),Z.a.createElement("div",null,t.errors.validationError&&Z.a.createElement("div",{className:Oe.a.formError},t.errors.validationError)),Z.a.createElement("div",null,Z.a.createElement("button",{type:"submit"},"Login")))})},vt=Object(a.c)(Object(we.b)(function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl,error:e.app.error}},{login:function(e,t,n,a,r){return function(){var r=Object(s.a)(o.a.mark(function r(s){var u;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b(e,t,n,a);case 2:return 0===(u=r.sent).resultCode?s(P()):10===u.resultCode&&s(S()),s(O(u.messages[0]||"")),r.abrupt("return",u);case 6:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}()}}),Se)(function(e){return console.log(e.error),Z.a.createElement("div",null,Z.a.createElement("h1",null,"LOGIN"),Z.a.createElement(Et,{captchaUrl:e.captchaUrl,login:e.login}))}),Ot=function(){var e,t=Object(we.c)(function(e){return{error:e.app.error}}).error,n=Object(Q.useState)(!1),a=Object(Te.a)(n,2),r=a[0],o=a[1];return Object(Q.useEffect)(function(){t&&(o(!0),e=setTimeout(function(){o(!1),clearTimeout(e)},5e3))},[t]),r&&Z.a.createElement("div",null,t)},jt=function(e){function t(){return Object(ee.a)(this,t),Object(ne.a)(this,Object(ae.a)(t).apply(this,arguments))}return Object(re.a)(t,e),Object(te.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return Z.a.createElement("div",{className:"app-wrapper"},Z.a.createElement(ht,null),Z.a.createElement(le,null),Z.a.createElement("div",{className:"app-wrapper-content"},Z.a.createElement(pe.d,null,Z.a.createElement(pe.b,{path:"/login/*",element:Z.a.createElement(vt,null)}),Z.a.createElement(pe.b,{path:"/profile/*",element:Z.a.createElement(mt,null)}),Z.a.createElement(pe.b,{path:"/profile/:userId/",element:Z.a.createElement(mt,null)}),Z.a.createElement(pe.b,{path:"/messages/*",element:Z.a.createElement(ke,null)}),Z.a.createElement(pe.b,{path:"/users/*",element:Z.a.createElement(He,null)}),Z.a.createElement(pe.b,{path:"*",element:Z.a.createElement("div",null,"404 NOT FOUND")}))),Z.a.createElement(Ot,null))}}]),t}(Z.a.Component),yt=Object(a.c)(Object(we.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(P());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}})(jt));$.a.render(Z.a.createElement(ce.a,null,Z.a.createElement(we.a,{store:Y},Z.a.createElement(yt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3vc46",error:"FormsControls_error__3wrrq",formError:"FormsControls_formError__3kgtU"}},39:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3zvkp",view:"ProfileInfo_view__2a-EN"}},45:function(e,t,n){e.exports={nav:"Navbar_nav__bMTYk",item:"Navbar_item__y3jn9",active:"Navbar_active__3x1bB"}},64:function(e,t,n){e.exports={pageUsers:"Users_pageUsers__3Zbrw",userPhoto:"Users_userPhoto__2icTJ"}},65:function(e,t,n){e.exports=n.p+"static/media/user-img.12d3f356.png"},67:function(e,t,n){e.exports={paginator:"Paginator_paginator__2JChu",pageNumber:"Paginator_pageNumber__3caSd",selectedPage:"Paginator_selectedPage__1Wk9e"}},79:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2b0ns",posts:"MyPosts_posts__3nIIQ",error:"MyPosts_error__3rcKU"}},80:function(e,t,n){e.exports={header:"Header_header__2qH9C",loginBlock:"Header_loginBlock__1lp2b"}},81:function(e,t,n){}},[[119,2,1]]]);
//# sourceMappingURL=main.0a7d102e.chunk.js.map