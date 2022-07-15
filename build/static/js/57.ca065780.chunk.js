(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[57],{1249:function(e,t,a){"use strict";var i=a(831),s=a(12),o=a(4),c=a(9),n=a(2),r=a(0),d=(a(138),a(11)),l=a(103),u=a(8),b=a(13),p=a(609),m=a(677),j=a(838),x=a(95),h=a(71),f=a(84);function O(e){return Object(h.a)("MuiAccordion",e)}var g=Object(f.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=a(1),y=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],A=Object(u.a)(m.a,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(o.a)({},"& .".concat(g.region),t.region),t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,i={duration:a.transitions.duration.shortest};return t={position:"relative",transition:a.transitions.create(["margin"],i),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:a.palette.divider,transition:a.transitions.create(["opacity","background-color"],i)},"&:first-of-type":{"&:before":{display:"none"}}},Object(o.a)(t,"&.".concat(g.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(o.a)(t,"&.".concat(g.disabled),{backgroundColor:a.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(o.a)({},"&.".concat(g.expanded),{margin:"16px 0"}))})),M=r.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiAccordion"}),o=a.children,u=a.className,m=a.defaultExpanded,h=void 0!==m&&m,f=a.disabled,g=void 0!==f&&f,M=a.disableGutters,S=void 0!==M&&M,w=a.expanded,z=a.onChange,L=a.square,V=void 0!==L&&L,R=a.TransitionComponent,C=void 0===R?p.a:R,k=a.TransitionProps,E=Object(c.a)(a,y),I=Object(x.a)({controlled:w,default:h,name:"Accordion",state:"expanded"}),G=Object(s.a)(I,2),H=G[0],N=G[1],T=r.useCallback((function(e){N(!H),z&&z(e,!H)}),[H,z,N]),_=r.Children.toArray(o),q=Object(i.a)(_),P=q[0],D=q.slice(1),B=r.useMemo((function(){return{expanded:H,disabled:g,disableGutters:S,toggle:T}}),[H,g,S,T]),W=Object(n.a)({},a,{square:V,disabled:g,disableGutters:S,expanded:H}),F=function(e){var t=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(l.a)(a,O,t)}(W);return Object(v.jsxs)(A,Object(n.a)({className:Object(d.default)(F.root,u),ref:t,ownerState:W,square:V},E,{children:[Object(v.jsx)(j.a.Provider,{value:B,children:P}),Object(v.jsx)(C,Object(n.a)({in:H,timeout:"auto"},k,{children:Object(v.jsx)("div",{"aria-labelledby":P.props.id,id:P.props["aria-controls"],role:"region",className:F.region,children:D})}))]}))}));t.a=M},1250:function(e,t,a){"use strict";var i=a(4),s=a(9),o=a(2),c=a(0),n=a(11),r=a(103),d=a(8),l=a(13),u=a(605),b=a(838),p=a(71),m=a(84);function j(e){return Object(p.a)("MuiAccordionSummary",e)}var x=Object(m.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),h=a(1),f=["children","className","expandIcon","focusVisibleClassName","onClick"],O=Object(d.a)(u.a,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme,s=e.ownerState,c={duration:a.transitions.duration.shortest};return Object(o.a)((t={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],c)},Object(i.a)(t,"&.".concat(x.focusVisible),{backgroundColor:a.palette.action.focus}),Object(i.a)(t,"&.".concat(x.disabled),{opacity:a.palette.action.disabledOpacity}),Object(i.a)(t,"&:hover:not(.".concat(x.disabled,")"),{cursor:"pointer"}),t),!s.disableGutters&&Object(i.a)({},"&.".concat(x.expanded),{minHeight:64}))})),g=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,a=e.ownerState;return Object(o.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(i.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(x.expanded),{margin:"20px 0"}))})),v=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(i.a)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(x.expanded),{transform:"rotate(180deg)"})})),y=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),i=a.children,d=a.className,u=a.expandIcon,p=a.focusVisibleClassName,m=a.onClick,x=Object(s.a)(a,f),y=c.useContext(b.a),A=y.disabled,M=void 0!==A&&A,S=y.disableGutters,w=y.expanded,z=y.toggle,L=Object(o.a)({},a,{expanded:w,disabled:M,disableGutters:S}),V=function(e){var t=e.classes,a=e.expanded,i=e.disabled,s=e.disableGutters,o={root:["root",a&&"expanded",i&&"disabled",!s&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!s&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(r.a)(o,j,t)}(L);return Object(h.jsxs)(O,Object(o.a)({focusRipple:!1,disableRipple:!0,disabled:M,component:"div","aria-expanded":w,className:Object(n.default)(V.root,d),focusVisibleClassName:Object(n.default)(V.focusVisible,p),onClick:function(e){z&&z(e),m&&m(e)},ref:t,ownerState:L},x,{children:[Object(h.jsx)(g,{className:V.content,ownerState:L,children:i}),u&&Object(h.jsx)(v,{className:V.expandIconWrapper,ownerState:L,children:u})]}))}));t.a=y},1251:function(e,t,a){"use strict";var i=a(2),s=a(9),o=a(0),c=a(11),n=a(103),r=a(8),d=a(13),l=a(71),u=a(84);function b(e){return Object(l.a)("MuiAccordionDetails",e)}Object(u.a)("MuiAccordionDetails",["root"]);var p=a(1),m=["className"],j=Object(r.a)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),x=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),o=a.className,r=Object(s.a)(a,m),l=a,u=function(e){var t=e.classes;return Object(n.a)({root:["root"]},b,t)}(l);return Object(p.jsx)(j,Object(i.a)({className:Object(c.default)(u.root,o),ref:t,ownerState:l},r))}));t.a=x},1673:function(e,t,a){"use strict";var i=a(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a(113)),o=a(1),c=(0,s.default)([(0,o.jsx)("path",{d:"M17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM8.08 5.03C6.37 6 5.05 7.58 4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44z",opacity:".3"},"0"),(0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55 1.83 2.26 4.62 3.7 7.75 3.7.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"},"1"),(0,o.jsx)("circle",{cx:"9",cy:"13",r:"1.25"},"2"),(0,o.jsx)("circle",{cx:"15",cy:"13",r:"1.25"},"3")],"FaceTwoTone");t.default=c},1674:function(e,t,a){"use strict";var i=a(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a(113)),o=a(1),c=(0,s.default)([(0,o.jsx)("path",{d:"M12 11h2v2h-2v2h2v2h-2v2h8V9h-8v2zm4 0h2v2h-2v-2zm0 4h2v2h-2v-2z",opacity:".3"},"0"),(0,o.jsx)("path",{d:"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-4-8h2v2h-2zm0 4h2v2h-2z"},"1")],"DomainTwoTone");t.default=c},1815:function(e,t,a){"use strict";a.r(t);var i=a(72),s=a(222),o=a(271),c=a(75),n=a(941),r=a(135),d=a(704),l=a(51),u=a(794),b=a.n(u),p=a(1673),m=a.n(p),j=a(1674),x=a.n(j),h=a(983),f=a.n(h),O=a(1),g=[{id:"basic1",title:"Accordion #1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic2",title:"Accordion #2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic3",title:"Accordion #3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}],v=[{id:"basic1",title:"Accordion #1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic2",title:"Accordion #2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic3",disabled:!0,title:"Accordion #3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}],y=[{id:"basic1",defaultExpand:!0,title:"Accordion #1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic2",title:"Accordion #2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic3",title:"Accordion #3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}],A=[{id:"basic1",title:"Accordion #1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic2",expanded:!0,title:"Accordion #2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic3",title:"Accordion #3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}],M=[{id:"basic1",defaultExpand:!0,title:"Accordion #1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic2",title:"Accordion #2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic3",defaultExpand:!0,title:"Accordion #3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}],S=[{id:"basic1",defaultExpand:!0,title:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m.a,{fontSize:"small",color:"primary",sx:{mr:.5}}),Object(O.jsx)(i.a,{variant:"subtitle1",color:"primary",children:"Profile"})]}),content:Object(O.jsxs)(s.a,{container:!0,spacing:2,children:[Object(O.jsx)(s.a,{item:!0,xs:12,children:Object(O.jsx)(i.a,{variant:"subtitle1",children:"Joseph William"})}),Object(O.jsx)(s.a,{item:!0,xs:12,children:Object(O.jsx)(o.a,{})}),Object(O.jsx)(s.a,{item:!0,children:Object(O.jsx)(i.a,{variant:"body2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})},{id:"basic2",title:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x.a,{fontSize:"small",color:"error",sx:{mr:.5}}),Object(O.jsx)(i.a,{variant:"subtitle1",color:"error",children:"Address"})]}),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},{id:"basic3",title:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{fontSize:"small",color:"secondary",sx:{mr:.5}}),Object(O.jsx)(i.a,{variant:"subtitle1",color:"secondary",children:"Account Info"})]}),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}];t.default=function(){return Object(O.jsx)(r.a,{title:"Accordion",secondary:Object(O.jsx)(d.a,{link:"https://next.material-ui.com/components/accordion/"}),children:Object(O.jsxs)(s.a,{container:!0,spacing:l.c,children:[Object(O.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(c.a,{title:"Basic Accordion",children:Object(O.jsx)(n.a,{data:g})})}),Object(O.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(c.a,{title:"Disabled Accordion",children:Object(O.jsx)(n.a,{data:v})})}),Object(O.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(c.a,{title:"Default Expand Accordion",children:Object(O.jsx)(n.a,{data:y})})}),Object(O.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(c.a,{title:"Fixed Expand Accordion",children:Object(O.jsx)(n.a,{data:A})})}),Object(O.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(c.a,{title:"Controlled/Toggle Accordion",children:Object(O.jsx)(n.a,{data:y,toggle:!0,defaultExpandedId:"basic1"})})}),Object(O.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(c.a,{title:"Square Accordion",children:Object(O.jsx)(n.a,{data:y,square:!0,toggle:!0,defaultExpandedId:"basic1"})})}),Object(O.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(c.a,{title:"Multiple Expanded Accordion",children:Object(O.jsx)(n.a,{data:M})})}),Object(O.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(c.a,{title:"Customize Accordion",children:Object(O.jsx)(n.a,{expandIcon:Object(O.jsx)(b.a,{}),data:S})})})]})})}},702:function(e,t,a){"use strict";var i=a(5),s=a(74),o=a(37),c=a(680),n=a(1),r=["color","outline","size","sx"];t.a=function(e){var t=e.color,a=e.outline,d=e.size,l=e.sx,u=Object(s.a)(e,r),b=Object(o.a)(),p=t&&!a&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},m=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},j={};switch(d){case"badge":j={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":j={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":j={width:b.spacing(5),height:b.spacing(5)};break;case"lg":j={width:b.spacing(9),height:b.spacing(9)};break;case"xl":j={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":j={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:j={}}return Object(n.jsx)(c.a,Object(i.a)({sx:Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},p),m),j),l)},u))}},704:function(e,t,a){"use strict";var i=a(37),s=a(1788),o=a(605),c=a(678),n=a(702),r=a(1);t.a=function(e){var t=e.title,a=e.link,d=e.icon,l=Object(i.a)();return Object(r.jsx)(s.a,{title:t||"Reference",placement:"left",children:Object(r.jsxs)(o.a,{disableRipple:!0,children:[!d&&Object(r.jsx)(n.a,{component:c.a,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(r.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(r.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:l.palette.primary[800]}),Object(r.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:l.palette.primary.main}),Object(r.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:l.palette.primary[800]}),Object(r.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:l.palette.primary.main})]}),Object(r.jsx)("defs",{children:Object(r.jsx)("clipPath",{id:"clip0",children:Object(r.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),d&&Object(r.jsx)(n.a,{component:c.a,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:d})]})})}},774:function(e,t,a){"use strict";var i=a(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a(113)),o=a(1),c=(0,s.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=c},794:function(e,t,a){"use strict";var i=a(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a(113)),o=a(1),c=(0,s.default)((0,o.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.default=c},831:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(293),s=a(290),o=a(140),c=a(294);function n(e){return Object(i.a)(e)||Object(s.a)(e)||Object(o.a)(e)||Object(c.a)()}},838:function(e,t,a){"use strict";var i=a(0),s=i.createContext({});t.a=s},941:function(e,t,a){"use strict";var i=a(12),s=a(0),o=a(37),c=a(160),n=a(1249),r=a(1251),d=a(1250),l=a(774),u=a.n(l),b=a(1);t.a=function(e){var t=e.data,a=e.defaultExpandedId,l=void 0===a?null:a,p=e.expandIcon,m=e.square,j=e.toggle,x=Object(o.a)(),h=Object(s.useState)(null),f=Object(i.a)(h,2),O=f[0],g=f[1];return Object(s.useEffect)((function(){g(l)}),[l]),Object(b.jsx)(c.a,{sx:{width:"100%"},children:t&&t.map((function(e){return Object(b.jsxs)(n.a,{defaultExpanded:!e.disabled&&e.defaultExpand,expanded:!j&&!e.disabled&&e.expanded||j&&O===e.id,disabled:e.disabled,square:m,onChange:(t=e.id,function(e,a){return j&&g(!!a&&t)}),children:[Object(b.jsx)(d.a,{expandIcon:p||!1===p?p:Object(b.jsx)(u.a,{}),sx:{color:"dark"===x.palette.mode?"grey.500":"grey.800",fontWeight:500},children:e.title}),Object(b.jsx)(r.a,{children:e.content})]},e.id);var t}))})}},983:function(e,t,a){"use strict";var i=a(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a(113)),o=a(1),c=(0,s.default)([(0,o.jsx)("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z",opacity:".3"},"0"),(0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"},"1")],"MonetizationOnTwoTone");t.default=c}}]);
//# sourceMappingURL=57.ca065780.chunk.js.map