"use strict";(self.webpackChunkmaplibregrid=self.webpackChunkmaplibregrid||[]).push([[897],{29818:function(e,t,a){a.d(t,{Z:function(){return D}});var o=a(4942),r=a(63366),i=a(87462),n=a(72791),l=a(28182),c=a(94419),s=a(96248),d=a(14036),p=a(24082),u=a(60627),m=a(35527),v=a(31402),h=a(66934),b=a(75878),f=a(21217);function g(e){return(0,f.Z)("MuiDialog",e)}var Z=(0,b.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var x=(0,n.createContext)({}),y=a(52739),k=a(13967),C=a(80184),W=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],w=(0,h.ZP)(y.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,t){return t.backdrop}})({zIndex:-1}),S=(0,h.ZP)(p.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,t){return t.root}})({"@media print":{position:"absolute !important"}}),M=(0,h.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,t){var a=e.ownerState;return[t.container,t["scroll".concat((0,d.Z)(a.scroll))]]}})((function(e){var t=e.ownerState;return(0,i.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===t.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===t.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),P=(0,h.ZP)(m.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,t){var a=e.ownerState;return[t.paper,t["scrollPaper".concat((0,d.Z)(a.scroll))],t["paperWidth".concat((0,d.Z)(String(a.maxWidth)))],a.fullWidth&&t.paperFullWidth,a.fullScreen&&t.paperFullScreen]}})((function(e){var t=e.theme,a=e.ownerState;return(0,i.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===a.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===a.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===a.maxWidth&&(0,o.Z)({maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):"".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit)},"&.".concat(Z.paperScrollBody),(0,o.Z)({},t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),a.maxWidth&&"xs"!==a.maxWidth&&(0,o.Z)({maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)},"&.".concat(Z.paperScrollBody),(0,o.Z)({},t.breakpoints.down(t.breakpoints.values[a.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&(0,o.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(Z.paperScrollBody),{margin:0,maxWidth:"100%"}))})),D=n.forwardRef((function(e,t){var a=(0,v.Z)({props:e,name:"MuiDialog"}),o=(0,k.Z)(),p={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},h=a["aria-describedby"],b=a["aria-labelledby"],f=a.BackdropComponent,Z=a.BackdropProps,y=a.children,D=a.className,B=a.disableEscapeKeyDown,F=void 0!==B&&B,I=a.fullScreen,O=void 0!==I&&I,R=a.fullWidth,N=void 0!==R&&R,T=a.maxWidth,j=void 0===T?"sm":T,V=a.onBackdropClick,A=a.onClose,G=a.open,L=a.PaperComponent,H=void 0===L?m.Z:L,q=a.PaperProps,E=void 0===q?{}:q,K=a.scroll,z=void 0===K?"paper":K,X=a.TransitionComponent,Y=void 0===X?u.Z:X,J=a.transitionDuration,Q=void 0===J?p:J,U=a.TransitionProps,$=(0,r.Z)(a,W),_=(0,i.Z)({},a,{disableEscapeKeyDown:F,fullScreen:O,fullWidth:N,maxWidth:j,scroll:z}),ee=function(e){var t=e.classes,a=e.scroll,o=e.maxWidth,r=e.fullWidth,i=e.fullScreen,n={root:["root"],container:["container","scroll".concat((0,d.Z)(a))],paper:["paper","paperScroll".concat((0,d.Z)(a)),"paperWidth".concat((0,d.Z)(String(o))),r&&"paperFullWidth",i&&"paperFullScreen"]};return(0,c.Z)(n,g,t)}(_),te=n.useRef(),ae=(0,s.Z)(b),oe=n.useMemo((function(){return{titleId:ae}}),[ae]);return(0,C.jsx)(S,(0,i.Z)({className:(0,l.default)(ee.root,D),closeAfterTransition:!0,components:{Backdrop:w},componentsProps:{backdrop:(0,i.Z)({transitionDuration:Q,as:f},Z)},disableEscapeKeyDown:F,onClose:A,open:G,ref:t,onClick:function(e){te.current&&(te.current=null,V&&V(e),A&&A(e,"backdropClick"))},ownerState:_},$,{children:(0,C.jsx)(Y,(0,i.Z)({appear:!0,in:G,timeout:Q,role:"presentation"},U,{children:(0,C.jsx)(M,{className:(0,l.default)(ee.container),onMouseDown:function(e){te.current=e.target===e.currentTarget},ownerState:_,children:(0,C.jsx)(P,(0,i.Z)({as:H,elevation:24,role:"dialog","aria-describedby":h,"aria-labelledby":ae},E,{className:(0,l.default)(ee.paper,E.className),ownerState:_,children:(0,C.jsx)(x.Provider,{value:oe,children:y})}))})}))}))}))},39891:function(e,t,a){a.d(t,{Z:function(){return S}});var o=a(4942),r=a(63366),i=a(87462),n=a(72791),l=a(28182),c=a(94419),s=a(94860),d=a(66934),p=a(31402),u=a(66199),m=a(23701),v=a(40162),h=a(42071),b=a(75878);var f=(0,b.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var g=(0,b.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var Z=(0,b.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),x=a(21217);function y(e){return(0,x.Z)("MuiMenuItem",e)}var k=(0,b.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=a(80184),W=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],w=(0,d.ZP)(m.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,r=e.ownerState;return(0,i.Z)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,o.Z)(t,"&.".concat(k.selected),(0,o.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(k.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,s.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,o.Z)(t,"&.".concat(k.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,o.Z)(t,"&.".concat(k.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,o.Z)(t,"&.".concat(k.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),(0,o.Z)(t,"& + .".concat(f.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),(0,o.Z)(t,"& + .".concat(f.inset),{marginLeft:52}),(0,o.Z)(t,"& .".concat(Z.root),{marginTop:0,marginBottom:0}),(0,o.Z)(t,"& .".concat(Z.inset),{paddingLeft:36}),(0,o.Z)(t,"& .".concat(g.root),{minWidth:36}),t),!r.dense&&(0,o.Z)({},a.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,(0,o.Z)({},"& .".concat(g.root," svg"),{fontSize:"1.25rem"})))})),S=n.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiMenuItem"}),o=a.autoFocus,s=void 0!==o&&o,d=a.component,m=void 0===d?"li":d,b=a.dense,f=void 0!==b&&b,g=a.divider,Z=void 0!==g&&g,x=a.disableGutters,k=void 0!==x&&x,S=a.focusVisibleClassName,M=a.role,P=void 0===M?"menuitem":M,D=a.tabIndex,B=a.className,F=(0,r.Z)(a,W),I=n.useContext(u.Z),O=n.useMemo((function(){return{dense:f||I.dense||!1,disableGutters:k}}),[I.dense,f,k]),R=n.useRef(null);(0,v.Z)((function(){s&&R.current&&R.current.focus()}),[s]);var N,T=(0,i.Z)({},a,{dense:O.dense,divider:Z,disableGutters:k}),j=function(e){var t=e.disabled,a=e.dense,o=e.divider,r=e.disableGutters,n=e.selected,l=e.classes,s={root:["root",a&&"dense",t&&"disabled",!r&&"gutters",o&&"divider",n&&"selected"]},d=(0,c.Z)(s,y,l);return(0,i.Z)({},l,d)}(a),V=(0,h.Z)(R,t);return a.disabled||(N=void 0!==D?D:-1),(0,C.jsx)(u.Z.Provider,{value:O,children:(0,C.jsx)(w,(0,i.Z)({ref:V,role:P,tabIndex:N,component:m,focusVisibleClassName:(0,l.default)(j.focusVisible,S),className:(0,l.default)(j.root,B)},F,{ownerState:T,classes:j}))})}))}}]);
//# sourceMappingURL=897.cd7e10b8.chunk.js.map