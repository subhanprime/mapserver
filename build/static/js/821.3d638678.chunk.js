"use strict";(self.webpackChunkmaplibregrid=self.webpackChunkmaplibregrid||[]).push([[821],{29002:function(e,n,t){t(72791);var i=t(36151),o=t(80184);n.Z=function(e){return(0,o.jsx)(i.Z,{sx:{py:1,fontSize:{xs:"12px",md:"15px"},width:"100%",marginTop:"10px",borderRadius:"10px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white",fontWeight:700},children:e.text})}},37532:function(e,n,t){t.d(n,{Z:function(){return u}});t(72791);var i={display:"flex",justifyContent:"space-between",alignItems:"center",width:"25%",color:"lightgray"},o=t(68870),r=t(53767),s=t(20890),l=t(3746),a=t(17237),d=t(60786),c=t(80184);var u=function(e){var n,t,u=e.userlikeviews,x=e.howManyViews,p=null===u||void 0===u||null===(n=u.likesList)||void 0===n?void 0:n.length,f=null===u||void 0===u||null===(t=u.favoritesList)||void 0===t?void 0:t.length,g=null===x||void 0===x?void 0:x.length;return(0,c.jsx)(o.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",my:1},children:(0,c.jsx)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:(0,c.jsxs)(r.Z,{spacing:1,direction:"row",children:[(0,c.jsxs)(o.Z,{style:i,children:[(0,c.jsx)(d.Z,{fontSize:"small"}),(0,c.jsx)(s.Z,{fontSize:"small",sx:{ml:.5},children:p>0?p:0})]}),(0,c.jsxs)(o.Z,{style:i,children:[(0,c.jsx)(a.Z,{fontSize:"small",sx:{ml:1}}),(0,c.jsxs)(s.Z,{fontSize:"small",sx:{ml:.5},children:[" ",f||0]})]}),(0,c.jsxs)(o.Z,{style:i,children:[(0,c.jsx)(l.Z,{fontSize:"small",sx:{ml:1}}),(0,c.jsx)(s.Z,{fontSize:"small",sx:{ml:.5},children:g||0})]})]})})})}},30762:function(e,n,t){t(74165),t(15861);var i=t(29439),o=t(57621),r=t(68870),s=t(39504),l=t(20890),a=t(36151),d=t(11087),c=t(72791),u=t(56305),x=(t(29002),t(37532)),p=(t(11912),t(55794)),f=(t(76943),t(59434)),g=t(91689),h=t(97410),v=t(80184);n.Z=function(e){(0,h.Z)(),(0,f.I0)();var n=(0,c.useState)(!1),t=(0,i.Z)(n,2),m=(t[0],t[1],(0,c.useState)(!1)),Z=(0,i.Z)(m,2),j=Z[0],w=(Z[1],(0,f.v9)((function(e){return e})).ceilSlice.userdetails),b=(w.role&&(null===w||void 0===w||w.role.filter((function(e){return null!==e}))),["mov","mp4","avi","wmf","flv","webm"]),k=(e.address,e.locations,e.id),y=e.name,S=e.filelink,D=e.Image,F=e.file,I=(e.user,e.productTotalPrice),C=e.userlikeviews,z=e.howManyViews,B=e.paidStatusContract,P=(e.failedNftmint,null===F||void 0===F?void 0:F.split(".")),L=null===P||void 0===P?void 0:P.pop();return(0,v.jsxs)(v.Fragment,{children:[j&&(0,v.jsx)(p.Z,{loading:p.Z}),(0,v.jsxs)(o.Z,{sx:{backgroundColor:"background.secondary",minHeight:"440px",maxHeight:"475px",borderRadius:"15px"},children:[(0,v.jsx)(r.Z,{sx:{position:"relative",minHeight:"250px"},children:null!==b&&void 0!==b&&b.includes(L)?(0,v.jsx)(v.Fragment,{children:null!==b&&void 0!==b&&b.includes(L)?(0,v.jsx)(r.Z,{sx:{borderRadius:"10px 10px 0px 0px",overflow:"hidden",width:"100%",height:"250px"},children:(0,v.jsx)("video",{src:"".concat(u.J,"/upload/").concat(F),width:"100%",margin:"0px",controls:!0,autoPlay:!1,style:{minHeight:"260px"}})}):null}):(0,v.jsx)(r.Z,{sx:function(e){return{boxShadow:"light"===e.palette.mode?"rgb(242,231,231) 10px 10px 20px 22px inset, rgb(242,231,231) 10px 18px 36px 28px inset":"rgb(21 0 47 / 60%) 10px 10px 20px 22px inset, rgb(21 0 47 / 60%) 10px 18px 36px 28px inset",backgroundImage:F||S?"url(".concat(u.J,"/upload/").concat(F,")")||0:D?"url(".concat(u.J,"/upload/").concat(D,")"):"url(".concat(g,")"),backgroundPosition:"center",backgroundSize:"cover",height:"250px",width:"100%"}}})}),(0,v.jsxs)(s.Z,{sx:{m:{xs:0}},children:[(0,v.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,v.jsx)(l.Z,{gutterBottom:!0,sx:{pb:1,maxWidth:"250px",overfolow:"hidden",fontSize:"15px",fontWeight:"bold"},component:"h2",children:y}),(0,v.jsx)(x.Z,{userlikeviews:C,howManyViews:z})]}),(0,v.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,v.jsx)(l.Z,{sx:{fontSize:"15px"},children:" Price"}),(0,v.jsx)(l.Z,{sx:{fontSize:"15px",backgroundColor:"background.buttonBg",px:1,py:"5px",borderRadius:"7px"},children:I?0+I+" ETH":"0"})]}),(0,v.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"centers"},children:[(0,v.jsx)(l.Z,{component:"p",sx:{fontSize:"1rem",color:"gray",fontWeight:700},children:"status"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(l.Z,{color:B?"green":"red",component:"p",sx:{fontSize:"12px",ml:1,mt:1,fontWeight:700,textAlign:"right"},children:B?"Mint succes":"pending"})})]}),(0,v.jsx)(d.rU,{to:"/nftDetail/".concat(k),style:{textDecoration:"none"},children:(0,v.jsx)(r.Z,{sx:{width:"100%",display:"flex",alignItems:"center"},children:(0,v.jsx)(a.Z,{sx:{clipPath:"polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",fontFamily:"'Poppins'",fontWeight:700,fontSize:"12px",py:2,px:3,mt:2,color:"black",width:"70%",mx:"auto"},children:"View Details"})})})]})]})]})}},61431:function(e,n,t){t(72791);var i=t(24891),o=t(68870),r=t(36151),s=t(31009),l=t(98333),a=t(11087),d=t(80184);n.Z=function(e){var n=e.PreviousButton,t=e.paginationsHandles,c=e.NextButton,u=e.menuItems,x=e.page,p=e.totalPages;return(0,d.jsx)(o.Z,{sx:{m:1,mb:2},children:(0,d.jsxs)(i.Z,{direction:"row",alignItems:"right",justifyContent:"center",children:[1===x?(0,d.jsx)(r.Z,{startIcon:(0,d.jsx)(s.Z,{}),sx:{width:"20px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white","&:hover":{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"}},disabled:!0}):(0,d.jsx)(r.Z,{onClick:function(){n()},startIcon:(0,d.jsx)(s.Z,{}),sx:{cursor:"pointer",width:"20px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white","&:hover":{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"}}}),(null===u||void 0===u?void 0:u.length)>0&&u.map((function(e,n){return(0,d.jsx)(d.Fragment,{children:n<5?(0,d.jsx)(r.Z,{sx:{cursor:"pointer"},component:a.OL,to:"#",onClick:function(){t(n+1)},children:n+1},n+1):""})})),x!==p?(0,d.jsx)(r.Z,{to:"#",onClick:function(){c()},startIcon:(0,d.jsx)(l.Z,{}),sx:{cursor:"pointer",width:"20px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white","&:hover":{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"}}}):(0,d.jsx)(r.Z,{startIcon:(0,d.jsx)(l.Z,{}),sx:{width:"20px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white","&:hover":{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"}},disabled:!0})]})})}},70821:function(e,n,t){t.d(n,{Z:function(){return Z}});var i=t(74165),o=t(15861),r=t(29439),s=t(72791),l=t(52791),a=t(61889),d=t(59434),c=t(30762),u=t(68870),x=t(20890),p=t(80184),f=function(e){var n=e.text;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(u.Z,{sx:function(e){return{mx:"auto",mt:5,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:"light"===e.palette.mode?"#F4F4F4":"#3A3A3A",height:"300px",borderRadius:"10px"}},children:(0,p.jsx)(x.Z,{textAlign:"center",sx:{fontSize:{xs:"20px",md:"40px ",fontWeight:"bold"}},children:n})})})},g=t(56488),h=t(55794),v=t(61431),m=t(76943);function Z(e){var n=e.Nfts,t=e.AllNfts,u=e.faildNFT,x=e.favourite,Z=e.follow,j=(0,d.I0)(),w=(0,s.useState)(0),b=(0,r.Z)(w,2),k=b[0],y=b[1],S=(0,s.useState)(),D=(0,r.Z)(S,2),F=(D[0],D[1]),I=s.useState(1),C=(0,r.Z)(I,2),z=C[0],B=C[1],P=(0,s.useState)([]),L=(0,r.Z)(P,2),N=L[0],A=L[1],H=(0,s.useState)(!1),T=(0,r.Z)(H,2),W=T[0],M=T[1],V=(0,d.v9)((function(e){return e})).ceilSlice,R=V.userNfts,E=V.ceildetails,J=V.failsNfts,G=V.userdetails,K=(0,s.useState)(!1),O=(0,r.Z)(K,2),U=O[0],_=O[1],q=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,(0,g.Gs)(n);case 3:t=e.sent,M(!1),A(t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,(0,g.DK)(n,z);case 3:"ok"===(t=e.sent).status&&A(null===t||void 0===t?void 0:t.data),"ok"===(null===t||void 0===t?void 0:t.status)&&j((0,m.Dx)(t)),M(!1);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){(0,o.Z)((0,i.Z)().mark((function e(){var o,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0!==n&&!1!==n||n&&A(E),t&&(F(null===R||void 0===R?void 0:R.currentPage),y(null===R||void 0===R?void 0:R.totalPages),Q(null===G||void 0===G?void 0:G.walletAddress)),Z&&(null===G||void 0===G||null===(o=G.follows)||void 0===o?void 0:o.length)>0&&q(null===G||void 0===G?void 0:G.follows,z),x&&(null===G||void 0===G||null===(r=G.favoritesList)||void 0===r?void 0:r.length)>0&&q(null===G||void 0===G?void 0:G.favoritesList,z),!0===u&&A(J);case 5:case"end":return e.stop()}}),e)})))()}),[U,z]);for(var X=[],Y=1;Y<=k;Y++)X.push(Y);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.Z,{loading:W}),(0,p.jsxs)(l.Z,{sx:{width:"100%",mx:"auto"},children:[(0,p.jsx)(a.ZP,{container:!0,my:2,children:(null===N||void 0===N?void 0:N.length)>0?null===N||void 0===N?void 0:N.map((function(e,n){var t=e.address,i=e._id,o=e.name,r=e.lang,s=e.long,l=e.filelink,d=e.capturesImage,u=e.file,x=e.productTotalPrice,f=e.user,g=e.favoritesList,h=e.likesList,v=e.howManyViews,m=e.paidStatusContract;return(0,p.jsx)(a.ZP,{item:!0,xs:12,sm:6,lg:4,p:2,children:(0,p.jsx)(c.Z,{address:t,locations:{lang:r,long:s},id:i,name:o,Image:d,user:f,filelink:l,file:u,productTotalPrice:x,checker:true,userlikeviews:{likesList:h,favoritesList:g},howManyViews:v,paidStatusContract:m,failedNftmint:_})},n+i)})):(0,p.jsx)(f,{text:" Empty  NFTs ...."})}),t&&(0,p.jsx)(v.Z,{PreviousButton:function(){B((function(e){return e-1}))},paginationsHandles:function(e){x&&q(null===G||void 0===G?void 0:G.favoritesList),Z&&q(null===G||void 0===G?void 0:G.follows),B(e)},NextButton:function(){B((function(e){return e+1}))},menuItems:X,page:z,totalPages:k})]})]})}},97410:function(e,n,t){t(72791);var i=t(26960);n.Z=function(){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t={position:"top-right",heading:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",hideAfter:arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,bar:{size:"5px"}};"success"==n?i.Z.success(e,t):"error"==n?i.Z.error(e,t):"warn"==n?i.Z.warn(e,t):i.Z.info(e,t)}}},91689:function(e,n,t){e.exports=t.p+"static/media/bloctech.b504c6946de55390a53d.jpg"}}]);
//# sourceMappingURL=821.3d638678.chunk.js.map