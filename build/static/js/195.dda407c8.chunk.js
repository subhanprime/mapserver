"use strict";(self.webpackChunkmaplibregrid=self.webpackChunkmaplibregrid||[]).push([[195],{39791:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(74165),a=r(15861),o=r(29439),i=r(1413),l=r(72791),u=r(55931),d=r(29818),s=r(68870),c=r(20890),p=r(13400),f=r(4834),v=r(91720),h=r(90679),x=r.p+"static/media/earth.bd03ef1e7b90814515d5.png",g=r(56305),b=r(59434),y=r(11912),Z=r(76943),j=r(29002),m=r(59274),k=r(97410),w=r(80184),C=l.forwardRef((function(e,t){return(0,w.jsx)(u.Z,(0,i.Z)({direction:"down",ref:t},e))}));function P(e){var t=(0,k.Z)(),r=(0,b.I0)(),u=(0,b.v9)((function(e){return e})).ceilSlice.userdetails,P=(0,l.useState)(null===u||void 0===u?void 0:u.name),O=(0,o.Z)(P,2),M=O[0],B=O[1],D=(0,l.useState)(null===u||void 0===u?void 0:u.facebook),W=(0,o.Z)(D,2),z=W[0],S=W[1],E=(0,l.useState)(null===u||void 0===u?void 0:u.instagram),F=(0,o.Z)(E,2),I=F[0],H=F[1],L=(0,l.useState)(null===u||void 0===u?void 0:u.twitter),R=(0,o.Z)(L,2),V=R[0],A=R[1],_=(0,l.useState)(null===u||void 0===u?void 0:u.linkdin),T=(0,o.Z)(_,2),J=T[0],N=T[1],U=l.useState(e.open),G=(0,o.Z)(U,2),K=G[0],q=G[1],Q=l.useState({userProfile:"",userHeader:""}),X=(0,o.Z)(Q,2),Y=X[0],$=X[1],ee=l.useState({profileBase64:"",headerBase64:""}),te=(0,o.Z)(ee,2),re=te[0],ne=te[1],ae=new FormData,oe=function(){q(!1),e.modalFunc(!1)},ie=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(a,o){var i,l,u,d,s,c,p,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!o){e.next=9;break}return e.next=4,y.Z.put("".concat(g.J,"/updateBanner"),a);case 4:s=e.sent,c=s.data,i=c,e.next=14;break;case 9:return e.next=11,y.Z.put("".concat(g.J,"/updateProfile"),a);case 11:p=e.sent,f=p.data,i=f;case 14:"ok"===(null===(l=i)||void 0===l?void 0:l.status)&&(r((0,Z.nI)(i)),t("user profile update successfully","success",3,"Success")),$({userProfile:"",userHeader:""}),!o&&B(""),ne({profileBase64:"",headerBase64:""}),"error"===(null===(u=i)||void 0===u?void 0:u.status)&&t("".concat(null===(d=i)||void 0===d?void 0:d.message),"error",3,"Failed"),!o&&oe(),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.log("update profile error",e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t,r){return e.apply(this,arguments)}}();function le(e){var r=e.target.name,n=e.target.files[0],a=n.size/1048576;if(a>=2&&!r)return t("image is grater than 2MB","error",3,"Failed"),!1;if(a>=5&&r)return t("image is grater than 5MB","error",3,"Failed"),!1;var o=new FileReader;o.readAsDataURL(n),o.onload=function(){if("headerfile"===r){ne((0,i.Z)((0,i.Z)({},re),{},{headerBase64:null===o||void 0===o?void 0:o.result})),$((0,i.Z)((0,i.Z)({},Y),{},{userHeader:n})),ae.append("file",n),ae.append("id",null===u||void 0===u?void 0:u.id);ie(ae,"headerfile")}else $((0,i.Z)((0,i.Z)({},Y),{},{userProfile:n})),ne((0,i.Z)((0,i.Z)({},re),{},{profileBase64:null===o||void 0===o?void 0:o.result}))}}var ue=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ae.append("file",null===Y||void 0===Y?void 0:Y.userProfile),ae.append("username",M),ae.append("facebook",z),ae.append("instagram",I),ae.append("twitter",V),ae.append("linkdin",J),ae.append("id",null===u||void 0===u?void 0:u.id),ie(ae);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,w.jsx)("div",{children:(0,w.jsx)(d.Z,{TransitionComponent:C,open:K,onClose:oe,maxWidth:"xs",fullWidth:!0,sx:{"& .css-twia2z-MuiPaper-root-MuiDialog-paper":{borderRadius:"10px"}},children:(0,w.jsxs)(s.Z,{p:2,children:[(0,w.jsx)(c.Z,{align:"center",sx:{backgroundImage:"linear-gradient(90deg, #6E08C6 18.7%, #CA0FDF 72.33%)",backgroundClip:"text",color:"transparent",fontWeight:"bold"},children:"Edit Profile"}),(0,w.jsxs)(s.Z,{display:"flex",alignItems:"center",flexDirection:"column",sx:{border:"2px solid black",height:"120px",position:"relative"},children:[null!==u&&void 0!==u&&u.banner||null!==re&&void 0!==re&&re.headerBase64?(0,w.jsx)("img",{src:null!==re&&void 0!==re&&re.headerBase64?null===re||void 0===re?void 0:re.headerBase64:"".concat(g.J,"/upload/").concat(null===u||void 0===u?void 0:u.banner),alt:"not found",style:m.uP}):(0,w.jsx)("img",{src:x,alt:"not found",style:m.uP}),(0,w.jsxs)(p.Z,{color:"primary","aria-label":"upload picture",component:"label",style:m.xm,sx:{right:"10px"},children:[(0,w.jsx)("input",{hidden:!0,accept:"image/*",type:"file",name:"headerfile",onChange:le}),(0,w.jsx)(v.Z,{sx:{fontSize:"20px"}})]}),(0,w.jsx)(s.Z,{sx:{position:"absolute",left:"50%",transform:"translate(-50%, 30%)"},children:(0,w.jsxs)(s.Z,{sx:{position:"relative"},children:[null!==u&&void 0!==u&&u.profileImage||null!==re&&void 0!==re&&re.profileBase64?(0,w.jsx)("img",{src:null!==re&&void 0!==re&&re.profileBase64?null===re||void 0===re?void 0:re.profileBase64:"".concat(g.J,"/upload/").concat(null===u||void 0===u?void 0:u.profileImage),alt:"not found",style:m.s2}):(0,w.jsx)("img",{src:h,alt:"not found",style:m.s2}),(0,w.jsxs)(p.Z,{color:"primary","aria-label":"upload picture",component:"label",style:m.xm,sx:{right:"-5px"},children:[(0,w.jsx)("input",{hidden:!0,accept:"image/*",type:"file",name:"file",onChange:le}),(0,w.jsx)(v.Z,{sx:{fontSize:"20px"}})]})]})})]}),(0,w.jsxs)(s.Z,{mt:8,py:1,children:[(0,w.jsx)(c.Z,{children:"User Name"}),(0,w.jsx)(f.ZP,{placeholder:"Enter user name",type:"text",value:M,style:m.h7,sx:{backgroundColor:"background.inputbg"},onChange:function(e){B(e.target.value)}})]}),(0,w.jsxs)(s.Z,{py:1,children:[(0,w.jsx)(c.Z,{children:"Wallet"}),(0,w.jsx)(f.ZP,{placeholder:"Enter your Wallet",type:"text",value:null===u||void 0===u?void 0:u.walletAddress,readOnly:!0,style:m.h7,sx:{backgroundColor:"background.inputbg"}})]}),(0,w.jsxs)(s.Z,{py:1,children:[(0,w.jsx)(c.Z,{children:"Email"}),(0,w.jsx)(f.ZP,{placeholder:"Enter your email",type:"email",value:null===u||void 0===u?void 0:u.email,readOnly:!0,style:m.h7,sx:{backgroundColor:"background.inputbg"}})]}),(0,w.jsxs)(s.Z,{py:1,children:[(0,w.jsx)(c.Z,{children:"Twitter"}),(0,w.jsx)(f.ZP,{placeholder:"Enter your twitter address",type:"twitter",value:V,style:m.h7,sx:{backgroundColor:"background.inputbg"},onChange:function(e){return A(e.target.value)}})]}),(0,w.jsxs)(s.Z,{py:1,children:[(0,w.jsx)(c.Z,{children:"Instagram"}),(0,w.jsx)(f.ZP,{placeholder:"Enter your Instagram address",type:"twitter",value:I,style:m.h7,sx:{backgroundColor:"background.inputbg"},onChange:function(e){return H(e.target.value)}})]}),(0,w.jsxs)(s.Z,{py:1,children:[(0,w.jsx)(c.Z,{children:"Facebook"}),(0,w.jsx)(f.ZP,{placeholder:"Enter your Facebook address",type:"twitter",value:z,style:m.h7,sx:{backgroundColor:"background.inputbg"},onChange:function(e){return S(e.target.value)}})]}),(0,w.jsxs)(s.Z,{py:1,children:[(0,w.jsx)(c.Z,{children:"Linkdin"}),(0,w.jsx)(f.ZP,{placeholder:"Enter your Linkdin address",type:"twitter",value:J,style:m.h7,sx:{backgroundColor:"background.inputbg"},onChange:function(e){return N(e.target.value)}})]}),(0,w.jsxs)(s.Z,{py:1,sx:{display:"flex",justifyContent:"space-between"},children:[(0,w.jsx)(s.Z,{onClick:ue,sx:{width:"45%"},children:(0,w.jsx)(j.Z,{text:"save"})}),(0,w.jsx)(s.Z,{onClick:oe,sx:{width:"45%"},children:(0,w.jsx)(j.Z,{text:"Cancel"})})]})]})})})}},59274:function(e,t,r){r.d(t,{D1:function(){return n},h7:function(){return l},s2:function(){return a},uP:function(){return i},xm:function(){return o}});var n={width:"170px",height:"170px",borderRadius:"15px"},a={width:"120px",height:"120px",borderRadius:"10px"},o={position:"absolute",top:"10px",color:"white",background:"#C70EDF","&:hover":{background:"#C70EDF"}},i={height:"120px",width:"100%",backgroundPosition:"top",backgroundRepeat:"no-repeat"},l={width:"100%",borderRadius:"5px",border:"1px solid lightgray",padding:"5px 20px",backgroundColor:"background.inputbg"}},20865:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(29439),a=r(72791),o=r(80911),i=r(64387),l=r(66120),u=r(36520),d=r(13400),s=r(59434),c=r(76943),p=r(57689),f=r(80184);function v(){var e=(0,p.s0)(),t=(0,s.I0)(),r=a.useState(null),v=(0,n.Z)(r,2),h=v[0],x=v[1],g=Boolean(h);return(0,f.jsxs)("div",{children:[(0,f.jsx)(u.Z,{title:"Setting",placement:"top",children:(0,f.jsx)(d.Z,{id:"demo-positioned-button","aria-controls":g?"demo-positioned-menu":void 0,"aria-haspopup":"true","aria-expanded":g?"true":void 0,onClick:function(e){x(e.currentTarget)},sx:{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",borderRadius:"5px"},children:(0,f.jsx)(l.Z,{fontSize:"small",sx:{color:"white"}})})}),(0,f.jsxs)(o.Z,{sx:{mt:7},id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:h,open:g,onClose:function(){x(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[(0,f.jsx)(i.Z,{onClick:function(){e("/userwallet")},children:"My Account"}),(0,f.jsx)(i.Z,{onClick:function(){localStorage.removeItem("maptoken"),t((0,c.nI)({})),setTimeout((function(){e("/login")}),1e3)},children:"Logout"})]})]})}},41286:function(e,t,r){var n=r(64836);t.Z=void 0;var a=n(r(45649)),o=r(80184),i=(0,a.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=i},42093:function(e,t,r){var n=r(64836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n)}(r(72791));var a=n(r(45649)),o=r(80184);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var l=(0,a.default)((0,o.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");t.Z=l},21880:function(e,t,r){var n=r(64836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n)}(r(72791));var a=n(r(45649)),o=r(80184);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var l=(0,a.default)((0,o.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");t.Z=l},7317:function(e,t,r){var n=r(64836);t.Z=void 0;var a=n(r(45649)),o=r(80184),i=(0,a.default)((0,o.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=i},56310:function(e,t,r){var n=r(64836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n)}(r(72791));var a=n(r(45649)),o=r(80184);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var l=(0,a.default)((0,o.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");t.Z=l},91720:function(e,t,r){var n=r(64836);t.Z=void 0;var a=n(r(45649)),o=r(80184),i=(0,a.default)([(0,o.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,o.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera");t.Z=i},74668:function(e,t,r){var n=r(64836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n)}(r(72791));var a=n(r(45649)),o=r(80184);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var l=(0,a.default)((0,o.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.Z=l},90679:function(e,t,r){e.exports=r.p+"static/media/auther.8ed7d70ee5cf4d4fd791.PNG"}}]);
//# sourceMappingURL=195.dda407c8.chunk.js.map