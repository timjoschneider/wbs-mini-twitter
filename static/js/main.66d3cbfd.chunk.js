(this["webpackJsonpmaterial-ui"]=this["webpackJsonpmaterial-ui"]||[]).push([[0],{82:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(23),r=c.n(s),i=(c(82),c(129)),j=c(128),o=c(17),b=c(22),l=c(18),u=c(8),d=c(49),O=c.n(d),h=c(57),p=function(){var e=Object(h.a)(O.a.mark((function e(t){var c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if(!(c=e.sent).ok){e.next=9;break}return e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:throw new Error(c.statusText);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),m=c(127),x=c(118),f=c(15),g=c(120),v=c(121),k=c(122),w=c(34),N=c(131),y=c(67),C=c.n(y),_=c(66),S=c.n(_),I=c(2),R=Object(x.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(o.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"400px"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%"},e.breakpoints.up("md"),{width:"100%"})}}));function E(e){var t=e.onClick,c=R();return Object(I.jsx)("div",{className:c.grow,children:Object(I.jsx)(g.a,{position:"static",children:Object(I.jsxs)(v.a,{children:[Object(I.jsx)(k.a,{color:"inherit",children:Object(I.jsx)(S.a,{})}),Object(I.jsx)(w.a,{className:c.title,variant:"h6",noWrap:!0,children:"Mini-Twitter"}),Object(I.jsxs)("div",{className:c.search,children:[Object(I.jsx)("div",{className:c.searchIcon,children:Object(I.jsx)(C.a,{})}),Object(I.jsx)(N.a,{placeholder:"Search Posts...",classes:{root:c.inputRoot,input:c.inputInput},onChange:t,onKeyPress:t})]})]})})})}var T=function(){return Object(I.jsxs)("div",{className:"footer-container",style:{backgroundColor:"#bdbdbd",color:"#00227b"},children:["\xa9 2021 Copyright: Avril, Diego, Janis, Kajal, Montaser, Priyanka, Tim",Object(I.jsx)("br",{}),Object(I.jsx)("a",{className:"text-dark",href:"https://github.com/kajalben/wbs-mini-twitter",children:Object(I.jsx)("b",{style:{color:"#00227b"},children:"mini-twitter"})})]})},P=c(123),A=c(124),D=c(125),F=c(69),L=c.n(F),B=c(68),J=c.n(B),M=c(20),U=function(e){var t=e.onClick;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(M.b,{to:"/profile",activeClassName:"active-link",children:Object(I.jsxs)(P.a,{button:!0,children:[Object(I.jsx)(A.a,{children:Object(I.jsx)(J.a,{})}),Object(I.jsx)(D.a,{primary:"Profile"})]})}),Object(I.jsxs)(P.a,{button:!0,onClick:t,children:[Object(I.jsx)(A.a,{children:Object(I.jsx)(L.a,{})}),Object(I.jsx)(M.b,{to:"/post/messages",activeClassName:"active-link",children:Object(I.jsx)(D.a,{primary:"Inbox"})})]})]})},H=c(97),K=c(132),W=c(70),G=c.n(W),q=Object(x.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",cursor:"pointer","& > *":{margin:e.spacing(1),width:"calc(100%)"}},paper:{padding:"0.5rem"},purple:{backgroundColor:"#00227b"}}}));function z(e){var t=e._id,c=e.date,n=e.text,s=e.image_url,r=e.user,i=e.users,j=Object(a.useState)(),o=Object(l.a)(j,2),b=o[0],d=o[1],O=Object(u.f)(),h=q();Object(a.useEffect)((function(){var e=i.find((function(e){return e._id===r}));e&&d(e)}),[]);return Object(I.jsx)("div",{className:h.root,children:b&&Object(I.jsx)(H.a,{className:h.paper,elevation:3,children:Object(I.jsxs)("div",{className:"card-container",children:[Object(I.jsxs)("div",{className:"card-menu",children:[Object(I.jsx)(K.a,{alt:"Travis Howard",src:b.profile_img_url,className:h.large}),Object(I.jsxs)("span",{children:[Object(I.jsx)(G.a,{}),function(e){return" "+new Date(e).toDateString()}(c)]})]}),Object(I.jsx)("div",{className:"card-text",children:n}),Object(I.jsx)("img",{className:"card-img",src:s,alt:"image",onClick:function(e){return function(e){O.push("/post/messages/".concat(e))}(t)}})]})})})}var Q=function(e){var t=e.messages,c=e.users,a=Object(u.h)(),n=a.id,s=a.type,r=Object(u.g)();return Object(I.jsx)("div",{children:"/"===r.pathname||"messages"===s?n?t.filter((function(e){return e._id===n})).map((function(e){return Object(I.jsx)(z,Object(b.a)(Object(b.a)({},e),{},{users:c}),e._id)})):t.map((function(e){return Object(I.jsx)(z,Object(b.a)(Object(b.a)({},e),{},{users:c}),e._id)})):"user"===s&&n?t.filter((function(e){return e.user===n})).map((function(e){return Object(I.jsx)(z,Object(b.a)(Object(b.a)({},e),{},{users:c}),e._id)})):void 0})},V=function(e){var t=e.text,c=e.image_url,a=e.email;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"user-container",children:[Object(I.jsx)("img",{src:c,alt:"user-image"}),Object(I.jsx)("p",{children:t}),Object(I.jsx)("span",{children:a})]})})},X=function(e){var t=e.users,c=Object(u.f)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{className:"users-container",children:t.map((function(e){return Object(I.jsxs)(a.Fragment,{children:[Object(I.jsx)("img",{src:e.profile_img_url,alt:"user-profile-image",onClick:function(t){return function(e){console.log("id ="+e),c.push("/post/user/".concat(e))}(e._id)}}),Object(I.jsx)("p",{children:e.name})]},e._id)}))})})},Y=c(126),Z=c(130),$=function(e){var t=e.checked,c=e.onChange;return Object(I.jsx)("div",{className:"users-container",children:Object(I.jsx)(Y.a,{control:Object(I.jsx)(Z.a,{checked:t,onChange:c,name:"checkedA",color:"primary"}),label:"Sort Posts By Date"})})};var ee=function(){var e,t=Object(a.useState)(),c=Object(l.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(),i=Object(l.a)(r,2),j=i[0],d=i[1],O=Object(a.useState)(),h=Object(l.a)(O,2),x=h[0],f=h[1],g=Object(a.useState)(!0),v=Object(l.a)(g,2),k=v[0],w=v[1],N=Object(a.useState)(),y=Object(l.a)(N,2),C=y[0],_=y[1],S=Object(a.useState)(),R=Object(l.a)(S,2),P=R[0],A=R[1],D=Object(a.useState)(!1),F=Object(l.a)(D,2),L=F[0],B=F[1];Object(a.useEffect)((function(){J(),M("https://twittersucksbad.herokuapp.com/users/"),H("https://twittersucksbad.herokuapp.com/messages/6038c20f6a1c98b418758f2f")}),[]),Object(a.useEffect)((function(){J()}),[P,L]);var J=function(){w(!0);var e="https://twittersucksbad.herokuapp.com/messages/";if(P){var t=P.replace(/[^\w\d\s.]+/g,"").toLowerCase();e="https://twittersucksbad.herokuapp.com/messages?text=".concat(t)}L&&(e="https://twittersucksbad.herokuapp.com/messages?date=desc");var c=encodeURI(e);p(c).then((function(e){w(!1),s(e)}))},M=function(e){w(!0);var t=encodeURI(e);p(t).then((function(e){w(!1),d(e.data)}))},H=function(e){w(!0);var t=encodeURI(e);p(t).then((function(e){w(!1),f(e)}))},K=function(){return k?Object(I.jsx)("span",{className:"spinner",children:Object(I.jsx)("i",{className:"fas fa-spinner"})}):n.length?Object(I.jsx)(Q,{messages:n,users:j}):Object(I.jsx)("span",{className:"error-message",children:"Try again! No Twitts were found"})};return Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(m.a,(e={className:"grid-contianer"},Object(o.a)(e,"className","grid-container"),Object(o.a)(e,"container",!0),Object(o.a)(e,"children",[Object(I.jsx)(m.a,{item:!0,xs:12,children:Object(I.jsx)(E,{onClick:function(e){"Enter"===e.key&&A(C),_(e.target.value)}})}),Object(I.jsxs)(m.a,{container:!0,style:{minHeight:"calc(100vh - 136px)",marginTop:"0.5rem"},children:[Object(I.jsx)(m.a,{item:!0,xs:12,sm:12,md:2,children:Object(I.jsx)(U,{onClick:function(){return A("")}})}),Object(I.jsx)(m.a,{item:!0,xs:12,sm:12,md:5,children:Object(I.jsxs)(u.c,{children:[Object(I.jsx)(u.a,{exact:!0,path:"/",children:n&&j&&K()}),Object(I.jsx)(u.a,{path:"/post/:type/:id?",children:n&&j&&K()}),Object(I.jsx)(u.a,{exact:!0,path:"/profile/",children:x&&Object(I.jsx)(V,Object(b.a)({},x))})]})}),Object(I.jsx)(m.a,{item:!0,xs:12,sm:12,md:3,children:j&&Object(I.jsx)($,{checked:L,onChange:function(){B(!L)}})}),Object(I.jsx)(m.a,{item:!0,xs:12,sm:12,md:2,children:j&&Object(I.jsx)(X,{users:j})})]}),Object(I.jsx)(m.a,{item:!0,xs:12,children:Object(I.jsx)(T,{})})]),e))})},te=c(45),ce=c(71),ae=Object(ce.a)({palette:{primary:{main:"#00227b"},secondary:{main:"#8d8d8d"},error:{main:te.a.A400},background:{default:"#fff"}}});r.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(M.a,{basename:"/",children:Object(I.jsxs)(j.a,{theme:ae,children:[Object(I.jsx)(i.a,{}),Object(I.jsx)(ee,{})]})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.66d3cbfd.chunk.js.map