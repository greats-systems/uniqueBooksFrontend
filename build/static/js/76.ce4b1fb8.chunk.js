(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[76],{1792:function(e,t,c){"use strict";c.r(t);var n=c(12),a=c(5),r=c(0),o=c(37),i=c(848),l=c(800),s=c(795),d=c(743),u=c(825),j=c(160),b=c(685),h=c(72),v=c(1788),O=c(683),p=c(402),f=c(222),x=c(691),m=c(681),g=c(798),S=c(799),z=c(801),y=c(1929),C=c(660),M=c(279),k=c(135),w=c(6),P=c(287),H=c(718),L=c.n(H),I=c(748),T=c.n(I),V=c(732),R=c.n(V),_=c(731),D=c.n(_),A=c(730),B=c.n(A),E=c(834),N=c.n(E),F=c(749),q=c.n(F),J=c(1);function G(e,t,c){return t[c]<e[c]?-1:t[c]>e[c]?1:0}var W=function(e,t){return"desc"===e?function(e,c){return G(e,c,t)}:function(e,c){return-G(e,c,t)}};function K(e,t){var c=e.map((function(e,t){return[e,t]}));return c.sort((function(e,c){var n=t(e[0],c[0]);return 0!==n?n:e[1]-c[1]})),c.map((function(e){return e[0]}))}var Q=[{id:"name",numeric:!1,label:"Customer Name",align:"left"},{id:"location",numeric:!0,label:"Location",align:"left"},{id:"orders",numeric:!0,label:"Orders",align:"right"},{id:"date",numeric:!0,label:"Registered",align:"center"},{id:"status",numeric:!1,label:"Status",align:"center"}];function U(e){var t=e.onSelectAllClick,c=e.order,n=e.orderBy,a=e.numSelected,r=e.rowCount,o=e.onRequestSort,b=e.selected;return Object(J.jsx)(i.a,{children:Object(J.jsxs)(l.a,{children:[Object(J.jsx)(s.a,{padding:"checkbox",sx:{pl:3},children:Object(J.jsx)(d.a,{color:"primary",indeterminate:a>0&&a<r,checked:r>0&&a===r,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),a>0&&Object(J.jsx)(s.a,{padding:"none",colSpan:6,children:Object(J.jsx)(X,{numSelected:b.length})}),a<=0&&Q.map((function(e){return Object(J.jsx)(s.a,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:n===e.id&&c,children:Object(J.jsxs)(u.a,{active:n===e.id,direction:n===e.id?c:"asc",onClick:(t=e.id,function(e){o(e,t)}),children:[e.label,n===e.id?Object(J.jsx)(j.a,{component:"span",sx:C.a,children:"desc"===c?"sorted descending":"sorted ascending"}):null]})},e.id);var t})),a<=0&&Object(J.jsx)(s.a,{sortDirection:!1,align:"center",sx:{pr:3},children:"Action"})]})})}var X=function(e){var t=e.numSelected;return Object(J.jsxs)(b.a,{sx:Object(a.a)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?Object(J.jsxs)(h.a,{color:"inherit",variant:"h4",children:[t," Selected"]}):Object(J.jsx)(h.a,{variant:"h6",id:"tableTitle",children:"Nutrition"}),Object(J.jsx)(j.a,{sx:{flexGrow:1}}),t>0&&Object(J.jsx)(v.a,{title:"Delete",children:Object(J.jsx)(O.a,{size:"large",children:Object(J.jsx)(L.a,{fontSize:"small"})})})]})};t.default=function(){var e=Object(o.a)(),t=Object(w.d)(),c=r.useState("asc"),a=Object(n.a)(c,2),i=a[0],u=a[1],j=r.useState("calories"),b=Object(n.a)(j,2),C=b[0],H=b[1],L=r.useState([]),I=Object(n.a)(L,2),V=I[0],_=I[1],A=r.useState(0),E=Object(n.a)(A,2),F=E[0],G=E[1],Q=r.useState(5),X=Object(n.a)(Q,2),Y=X[0],Z=X[1],$=r.useState(""),ee=Object(n.a)($,2),te=ee[0],ce=ee[1],ne=r.useState([]),ae=Object(n.a)(ne,2),re=ae[0],oe=ae[1],ie=Object(w.e)((function(e){return e.customer})).customers;r.useEffect((function(){t(Object(P.b)())}),[t]),r.useEffect((function(){oe(ie)}),[ie]);var le=function(e,t){var c=V.indexOf(t),n=[];-1===c?n=n.concat(V,t):0===c?n=n.concat(V.slice(1)):c===V.length-1?n=n.concat(V.slice(0,-1)):c>0&&(n=n.concat(V.slice(0,c),V.slice(c+1))),_(n)},se=F>0?Math.max(0,(1+F)*Y-re.length):0;return Object(J.jsxs)(k.a,{title:"Customer List",content:!1,children:[Object(J.jsx)(p.a,{children:Object(J.jsxs)(f.a,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[Object(J.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(J.jsx)(x.a,{InputProps:{startAdornment:Object(J.jsx)(m.a,{position:"start",children:Object(J.jsx)(B.a,{fontSize:"small"})})},onChange:function(e){var t=null===e||void 0===e?void 0:e.target.value;if(ce(t||""),t){var c=re.filter((function(e){var c=!0,n=!1;return["name","email","location","orders"].forEach((function(c){e[c].toString().toLowerCase().includes(t.toString().toLowerCase())&&(n=!0)})),n||(c=!1),c}));oe(c)}else oe(ie)},placeholder:"Search Customer",value:te,size:"small"})}),Object(J.jsxs)(f.a,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[Object(J.jsx)(v.a,{title:"Copy",children:Object(J.jsx)(O.a,{size:"large",children:Object(J.jsx)(D.a,{})})}),Object(J.jsx)(v.a,{title:"Print",children:Object(J.jsx)(O.a,{size:"large",children:Object(J.jsx)(R.a,{})})}),Object(J.jsx)(v.a,{title:"Filter",children:Object(J.jsx)(O.a,{size:"large",children:Object(J.jsx)(T.a,{})})})]})]})}),Object(J.jsx)(g.a,{children:Object(J.jsxs)(S.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[Object(J.jsx)(U,{theme:e,numSelected:V.length,order:i,orderBy:C,onSelectAllClick:function(e){if(e.target.checked){var t=re.map((function(e){return e.name}));_(t)}else _([])},onRequestSort:function(e,t){u(C===t&&"asc"===i?"desc":"asc"),H(t)},rowCount:re.length,selected:V}),Object(J.jsxs)(z.a,{children:[K(re,W(i,C)).slice(F*Y,F*Y+Y).map((function(t,c){if("number"===typeof t)return null;var n,a=(n=t.name,-1!==V.indexOf(n)),r="enhanced-table-checkbox-".concat(c);return Object(J.jsxs)(l.a,{hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(J.jsx)(s.a,{padding:"checkbox",sx:{pl:3},onClick:function(e){return le(0,t.name)},children:Object(J.jsx)(d.a,{color:"primary",checked:a,inputProps:{"aria-labelledby":r}})}),Object(J.jsxs)(s.a,{component:"th",id:r,scope:"row",onClick:function(e){return le(0,t.name)},sx:{cursor:"pointer"},children:[Object(J.jsxs)(h.a,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ",t.name," "]}),Object(J.jsxs)(h.a,{variant:"caption",children:[" ",t.email," "]})]}),Object(J.jsx)(s.a,{children:t.location}),Object(J.jsx)(s.a,{align:"right",children:t.orders}),Object(J.jsx)(s.a,{align:"center",children:t.date}),Object(J.jsxs)(s.a,{align:"center",children:[1===t.status&&Object(J.jsx)(M.a,{label:"Complete",size:"small",chipcolor:"success"}),2===t.status&&Object(J.jsx)(M.a,{label:"Processing",size:"small",chipcolor:"orange"}),3===t.status&&Object(J.jsx)(M.a,{label:"Confirm",size:"small",chipcolor:"primary"})]}),Object(J.jsxs)(s.a,{align:"center",sx:{pr:3},children:[Object(J.jsx)(O.a,{color:"primary",size:"large",children:Object(J.jsx)(N.a,{sx:{fontSize:"1.3rem"}})}),Object(J.jsx)(O.a,{color:"secondary",size:"large",children:Object(J.jsx)(q.a,{sx:{fontSize:"1.3rem"}})})]})]},c)})),se>0&&Object(J.jsx)(l.a,{style:{height:53*se},children:Object(J.jsx)(s.a,{colSpan:6})})]})]})}),Object(J.jsx)(y.a,{rowsPerPageOptions:[5,10,25],component:"div",count:re.length,rowsPerPage:Y,page:F,onPageChange:function(e,t){G(t)},onRowsPerPageChange:function(e){Z(parseInt(null===e||void 0===e?void 0:e.target.value,10)),G(0)}})]})}},718:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),o=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},730:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),o=(0,a.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=o},731:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),o=(0,a.default)([(0,r.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");t.default=o},732:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),o=(0,a.default)([(0,r.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,r.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,r.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,r.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");t.default=o},743:function(e,t,c){"use strict";var n=c(4),a=c(9),r=c(2),o=c(0),i=c(103),l=c(86),s=c(185),d=c(39),u=c(1),j=Object(d.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),b=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),v=c(10),O=c(13),p=c(8),f=c(71),x=c(84);function m(e){return Object(f.a)("MuiCheckbox",e)}var g=Object(x.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),S=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],z=Object(p.a)(s.a,{shouldForwardProp:function(e){return Object(p.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var c=e.ownerState;return[t.root,c.indeterminate&&t.indeterminate,"default"!==c.color&&t["color".concat(Object(v.a)(c.color))]]}})((function(e){var t,c=e.theme,a=e.ownerState;return Object(r.a)({color:c.palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:Object(l.a)("default"===a.color?c.palette.action.active:c.palette[a.color].main,c.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(t={},Object(n.a)(t,"&.".concat(g.checked,", &.").concat(g.indeterminate),{color:c.palette[a.color].main}),Object(n.a)(t,"&.".concat(g.disabled),{color:c.palette.action.disabled}),t))})),y=Object(u.jsx)(b,{}),C=Object(u.jsx)(j,{}),M=Object(u.jsx)(h,{}),k=o.forwardRef((function(e,t){var c,n,l=Object(O.a)({props:e,name:"MuiCheckbox"}),s=l.checkedIcon,d=void 0===s?y:s,j=l.color,b=void 0===j?"primary":j,h=l.icon,p=void 0===h?C:h,f=l.indeterminate,x=void 0!==f&&f,g=l.indeterminateIcon,k=void 0===g?M:g,w=l.inputProps,P=l.size,H=void 0===P?"medium":P,L=Object(a.a)(l,S),I=x?k:p,T=x?k:d,V=Object(r.a)({},l,{color:b,indeterminate:x,size:H}),R=function(e){var t=e.classes,c=e.indeterminate,n=e.color,a={root:["root",c&&"indeterminate","color".concat(Object(v.a)(n))]},o=Object(i.a)(a,m,t);return Object(r.a)({},t,o)}(V);return Object(u.jsx)(z,Object(r.a)({type:"checkbox",inputProps:Object(r.a)({"data-indeterminate":x},w),icon:o.cloneElement(I,{fontSize:null!=(c=I.props.fontSize)?c:H}),checkedIcon:o.cloneElement(T,{fontSize:null!=(n=T.props.fontSize)?n:H}),ownerState:V,ref:t},L,{classes:R}))}));t.a=k},748:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),o=(0,a.default)((0,r.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterListTwoTone");t.default=o},749:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),o=(0,a.default)([(0,r.jsx)("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"},"1")],"EditTwoTone");t.default=o},825:function(e,t,c){"use strict";var n=c(4),a=c(9),r=c(2),o=c(103),i=c(11),l=c(0),s=c(605),d=c(39),u=c(1),j=Object(d.a)(Object(u.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),b=c(8),h=c(13),v=c(10),O=c(71),p=c(84);function f(e){return Object(O.a)("MuiTableSortLabel",e)}var x=Object(p.a)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),m=["active","children","className","direction","hideSortIcon","IconComponent"],g=Object(b.a)(s.a,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var c=e.ownerState;return[t.root,c.active&&t.active]}})((function(e){var t=e.theme;return Object(n.a)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:t.palette.text.secondary},"&:hover":Object(n.a)({color:t.palette.text.secondary},"& .".concat(x.icon),{opacity:.5})},"&.".concat(x.active),Object(n.a)({color:t.palette.text.primary},"& .".concat(x.icon),{opacity:1,color:t.palette.text.secondary}))})),S=Object(b.a)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var c=e.ownerState;return[t.icon,t["iconDirection".concat(Object(v.a)(c.direction))]]}})((function(e){var t=e.theme,c=e.ownerState;return Object(r.a)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===c.direction&&{transform:"rotate(0deg)"},"asc"===c.direction&&{transform:"rotate(180deg)"})})),z=l.forwardRef((function(e,t){var c=Object(h.a)({props:e,name:"MuiTableSortLabel"}),n=c.active,l=void 0!==n&&n,s=c.children,d=c.className,b=c.direction,O=void 0===b?"asc":b,p=c.hideSortIcon,x=void 0!==p&&p,z=c.IconComponent,y=void 0===z?j:z,C=Object(a.a)(c,m),M=Object(r.a)({},c,{active:l,direction:O,hideSortIcon:x,IconComponent:y}),k=function(e){var t=e.classes,c=e.direction,n={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat(Object(v.a)(c))]};return Object(o.a)(n,f,t)}(M);return Object(u.jsxs)(g,Object(r.a)({className:Object(i.default)(k.root,d),component:"span",disableRipple:!0,ownerState:M,ref:t},C,{children:[s,x&&!l?null:Object(u.jsx)(S,{as:y,className:Object(i.default)(k.icon),ownerState:M})]}))}));t.a=z},834:function(e,t,c){"use strict";var n=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(113)),r=c(1),o=(0,a.default)([(0,r.jsx)("path",{d:"M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"},"1")],"VisibilityTwoTone");t.default=o}}]);
//# sourceMappingURL=76.ce4b1fb8.chunk.js.map