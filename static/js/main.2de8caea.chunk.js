(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){e.exports={row:"login_row__2KzBg",button:"login_button__1mFk-",asyncButton:"login_asyncButton__3M5la login_button__1mFk-"}},25:function(e,t,n){e.exports={top:"dashboard_top__FN0dB",column:"dashboard_column__t1DRn"}},42:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),s=(n(42),n(35)),i=n(26),u=n(9),l=n(3),d=n(14),j=n.n(d),p=n(22),b=n(11),h=n(15),x=n.n(h);function O(e){var t=e.email,n=e.password;return x.a.post("https://cors-anywhere.herokuapp.com/http://35.207.169.147/auth",{email:t,password:n})}function m(e){return x.a.defaults.headers.common={Authorization:"Bearer ".concat(e)},x.a.get("https://cors-anywhere.herokuapp.com/http://35.207.169.147/results")}var f=Object(b.b)("user/login",function(){var e=Object(p.a)(j.a.mark((function e(t,n){var r,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,c=n.rejectWithValue,e.prev=2,e.next=5,O({email:r,password:a});case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",c(e.t0));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(b.b)("user/fetchResults",function(){var e=Object(p.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,m(t);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),g=n(23),k=n.n(g),w=n(1);function y(){var e=Object(u.c)((function(e){return e})).user,t=Object(u.b)(),n=a.a.useState(""),r=Object(i.a)(n,2),c=r[0],o=r[1],s=a.a.useState(""),d=Object(i.a)(s,2),j=d[0],p=d[1];return e.tokenReceived&&!e.tokenExpired?Object(w.jsx)(l.a,{to:"/dashboard"}):Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:k.a.row,style:{marginTop:"100px"},children:[Object(w.jsx)("input",{type:"text",style:{margin:"5px",padding:"10px"},placeholder:"email",onChange:function(e){o(e.target.value)}}),Object(w.jsx)("input",{type:"text",style:{margin:"5px",padding:"10px"},placeholder:"password",onChange:function(e){p(e.target.value)}}),Object(w.jsx)("button",{className:k.a.asyncButton,onClick:function(){t(f({email:c,password:j}))},children:"Login"}),e.error?"Some Error occurred. Please try again":""]})})}var _=n(25),S=n.n(_);function B(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})).user,n=t.results,a=t.tokenExpired,c=localStorage.getItem("token");return n={event:"finish",horse:{id:1,name:"chepauk"},time:11232},Object(r.useEffect)((function(){n||e(v(c))}),[]),a||!c?Object(w.jsx)(l.a,{to:"login"}):n?Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:S.a.top,children:[Object(w.jsx)("h1",{children:"This is Dashboard"}),Object(w.jsxs)("div",{className:S.a.column,children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Event"}),Object(w.jsx)("span",{children:n.event})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Horse"}),Object(w.jsx)("span",{children:n.horse.name})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Time"}),Object(w.jsx)("span",{children:n.time})]})]})]})}):(e(v(localStorage.getItem("token"))),"Fetching Results...")}var E=n(37),N=(n(68),localStorage.getItem("token"));var R=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(E.a,{children:Object(w.jsxs)(l.d,{children:[Object(w.jsx)(l.b,{path:"/",exact:!0,render:function(e){return Object(w.jsx)(l.a,{to:{pathname:N?"/dashboard":"/login",state:{from:e.location}}})}}),Object(w.jsx)(l.b,{exact:!0,path:"/login",component:y}),Object(w.jsx)(l.b,{path:"/dashboard",exact:!0,render:function(e){return N?Object(w.jsx)(B,Object(s.a)({},e)):Object(w.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I,F=n(10),L=Object(b.c)({name:"user",initialState:{isLoading:!0},reducers:{},extraReducers:(I={},Object(F.a)(I,f.pending,(function(e){e.isLoading=!0})),Object(F.a)(I,f.fulfilled,(function(e,t){localStorage.setItem("token",t.payload.data.token),e.tokenReceived=t.payload.data.token})),Object(F.a)(I,f.rejected,(function(e,t){e.isLoading=!1,e.error=!0})),Object(F.a)(I,v.fulfilled,(function(e,t){e.results=t.payload.data,e.error=!1})),Object(F.a)(I,v.rejected,(function(e,t){"Access denied"===t.payload.response.data.error&&(e.tokenExpired=!0)})),I)}),W=Object(b.a)({reducer:{user:L.reducer}});o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(u.a,{store:W,children:Object(w.jsx)(R,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[69,1,2]]]);
//# sourceMappingURL=main.2de8caea.chunk.js.map