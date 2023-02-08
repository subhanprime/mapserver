"use strict";(self.webpackChunkmaplibregrid=self.webpackChunkmaplibregrid||[]).push([[645],{83645:function(e,r,t){t.r(r);var n=t(74165),o=t(15861),a=t(29439),i=t(68870),s=t(20890),l=t(53767),d=t(63466),u=t(72791),c=t(61372),f=t(96848),m=t(57689),p=t(11087),h=t(19218),x=t(92506),g=t(81724),b=t(75985),v=(t(5462),t(56488)),Z=t(29002),w=t(3746),j=t(20165),y=t(24310),A=t(80184),C=g.Ry({username:g.Z_().min(2,"Too Short!").max(70,"Too Long!").required("Required"),email:g.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:g.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")});r.default=function(){var e=(0,u.useState)(!1),r=(0,a.Z)(e,2),t=r[0],g=r[1],k=(0,u.useContext)(y.G).address,S=(0,u.useState)(""),E=(0,a.Z)(S,2),R=E[0],W=E[1],T=(0,m.s0)(),I=(0,u.useState)(null),P=(0,a.Z)(I,2),q=P[0],D=P[1],z=(0,u.useState)(null),B=(0,a.Z)(z,2),L=B[0],_=B[1];function F(e){D(e.coords.latitude),_(e.coords.longitude)}(0,u.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(F):console.log("Error while geting  location ... ")}),[]),(0,u.useEffect)((function(){W(k)}),[k]);var G=(0,x.TA)({initialValues:{username:"",email:"",password:""},validationSchema:C,onSubmit:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var t,o,a,i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=r.username,o=r.email,a=r.password,i={username:t,email:o,password:a,wallet:R,latLng:[q,L]},k){e.next=6;break}return b.Am.error("Please connect with Wallet"),e.abrupt("return",!1);case 6:return e.next=8,(0,v.a$)(i);case 8:"ok"===(null===(s=e.sent)||void 0===s?void 0:s.status)&&(b.Am.success(null===s||void 0===s?void 0:s.message),setTimeout((function(){T("/login")}),2e3)),"error"===(null===s||void 0===s?void 0:s.status)&&b.Am.error(null===s||void 0===s?void 0:s.message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error in user registration",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(r){return e.apply(this,arguments)}}()});return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(i.Z,{sx:{backgroundImage:"url(".concat(c,")"),minHeight:"100vh",width:"100%",position:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",alignItems:"start"},children:(0,A.jsxs)(i.Z,{sx:{width:{xs:"90%",sm:"70%",md:"35%",lg:"28%"},marginX:"auto",p:3,backgroundImage:"url(".concat(f,")"),backgroundSize:"100% 100%",mt:14,color:"white"},children:[(0,A.jsx)(s.Z,{variant:"h6",textAlign:"center",fontWeight:"bold",sx:{marginY:"5px"},children:"REGISTER"}),(0,A.jsx)(s.Z,{children:"Please connect to wallet for Register. because you cannot fill the text fields."}),(0,A.jsxs)(l.Z,{spacing:1,children:[(0,A.jsxs)("form",{children:[(0,A.jsxs)(i.Z,{children:[(0,A.jsx)(s.Z,{variant:"body2",children:"USERNAME"}),(0,A.jsx)(h.Z,{fullWidth:!0,type:"text",placeholder:"username",name:"username",autoComplete:"off",value:G.values.username,onChange:G.handleChange,error:G.touched.username&&Boolean(G.errors.username),helperText:G.touched.username&&G.errors.username,sx:function(e){return{backgroundColor:"light"===e.palette.mode?"#ffffff":"#3A3A3A",borderRadius:"8px",border:"none",input:{color:"light"===e.palette.mode?"#00000":"#ffffff"}}}})]}),(0,A.jsxs)(i.Z,{my:1.5,children:[(0,A.jsx)(s.Z,{variant:"body2",children:"Wallet"}),(0,A.jsx)(h.Z,{fullWidth:!0,type:"text",placeholder:"Wallet Address",name:"wallet",autoComplete:"off",value:k,sx:function(e){return{backgroundColor:"light"===e.palette.mode?"#ffffff":"#3A3A3A",borderRadius:"8px",border:"none",input:{color:"light"===e.palette.mode?"#00000":"#ffffff"}}},readOnly:!0})]}),(0,A.jsxs)(i.Z,{my:1.5,children:[(0,A.jsx)(s.Z,{variant:"body2",children:"EMAIL ADDRESS"}),(0,A.jsx)(h.Z,{fullWidth:!0,type:"email",placeholder:"Email",name:"email",autoComplete:"off",value:G.values.email,onChange:G.handleChange,error:G.touched.email&&Boolean(G.errors.email),helperText:G.touched.email&&G.errors.email,sx:function(e){return{backgroundColor:"light"===e.palette.mode?"#ffffff":"#3A3A3A",borderRadius:"8px",border:"none",input:{color:"light"===e.palette.mode?"#00000":"#ffffff"}}}})]}),(0,A.jsxs)(i.Z,{my:1.5,children:[(0,A.jsx)(s.Z,{variant:"body2",children:"PASSWORD"}),(0,A.jsx)(h.Z,{fullWidth:!0,placeholder:"Password",name:"password",type:t?"text":"password",value:G.values.password,onChange:G.handleChange,error:G.touched.password&&Boolean(G.errors.password),helperText:G.touched.password&&G.errors.password,sx:function(e){return{backgroundColor:"light"===e.palette.mode?"#ffffff":"#3A3A3A",borderRadius:"8px",border:"none",input:{color:"light"===e.palette.mode?"#00000":"#ffffff"}}},InputProps:{endAdornment:(0,A.jsx)(d.Z,{sx:{cursor:"pointer"},position:"end",onClick:function(){g(!t)},children:t?(0,A.jsx)(j.Z,{}):(0,A.jsx)(w.Z,{})})}})]}),(0,A.jsx)(i.Z,{onClick:G.handleSubmit,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,A.jsx)(Z.Z,{text:"Register"})})]}),(0,A.jsx)(i.Z,{component:p.rU,to:"/login",sx:{display:"flex",color:"white",fontSize:"20px",justifyContent:"center",mt:2},children:"Login Instead?"})]})]})})})}},29002:function(e,r,t){t(72791);var n=t(36151),o=t(80184);r.Z=function(e){return(0,o.jsx)(n.Z,{sx:{py:1,fontSize:{xs:"12px",md:"15px"},width:"100%",marginTop:"30px",borderRadius:"10px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white",fontWeight:700},children:e.text})}},96848:function(e,r,t){e.exports=t.p+"static/media/bg.933c5d2ce6cec75eb954.png"},61372:function(e,r,t){e.exports=t.p+"static/media/earth.bd03ef1e7b90814515d5.png"}}]);
//# sourceMappingURL=645.21a01c34.chunk.js.map