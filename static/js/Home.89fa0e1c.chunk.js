"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[268],{5538:function(e,n,r){r.r(n),r.d(n,{default:function(){return R}});var t=r(2791),o=r(9439),a=r(1134),l=r(4695),i=r(8007),s=r(3027),c=r(9513),d=r.n(c),u=r(1694),m=r.n(u),f=r(4261),h=r(184);var x=function(e){var n=e.onChange,r=e.onBlur,t=(e.onFocus,e.value),o=e.name,a=e.inputRef,l=e.placeholder,i=e.error,c=e.id,u=e.dateFormat,x=e.maxDate,p=e.minDate,b=e.disabled,v=e.dark,j=m()({"ne-datepicker-container":!0,dark:v});return(0,h.jsxs)("div",{className:j,children:[(0,h.jsx)(d(),{selected:t,onChange:n,onBlur:r,onFocus:function(e){return e.target.blur()},placeholderText:l,name:o,id:c,disabled:b,ref:a,maxDate:x,minDate:p,dateFormat:u,className:"form-control",autoComplete:"no-auto-complete_"+(0,f.Z)()}),(0,h.jsx)("i",{className:"date-icon"}),i&&i.message?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(s.Z.Control.Feedback,{type:"invalid",children:i.message})}):null]})},p=r(1721),b=r(1413),v={option:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{backgroundColor:n.isSelected?"#0a9246":"#FFFFFF",":hover":{backgroundColor:"#000",color:"#ffffff"}})},menu:function(e,n){return(0,b.Z)({},e)},menuList:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{color:"#636363",fontSize:"18px"})},control:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{borderColor:"#cdc6c1",boxShadow:"none",":hover":{borderColor:"#cdc6c1"}})},indicatorSeparator:function(e,n){return(0,b.Z)({},e)},valueContainer:function(e,n){return(0,b.Z)({},e)},dropdownIndicator:function(e,n){return(0,b.Z)({},e)},placeholder:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{color:"#c2bfbf",fontSize:"18px"})},singleValue:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{color:"#636363",fontSize:"18px"})}},j={option:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{backgroundColor:n.isSelected?"#556ee6":"#FFFFFF",":hover":{backgroundColor:"#90a0ee",color:"#ffffff"}})},input:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{color:"#BFC8E2"})},menu:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{zIndex:999999})},menuList:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{color:"#636363",fontSize:"14.4px"})},control:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{height:"calc(1.9em + .94rem + 2px)",borderRadius:".5rem",backgroundColor:"#464D61",borderColor:"1.5px solid #58627F",boxShadow:"none",":hover":{borderColor:"#58627F"}})},indicatorSeparator:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{backgroundColor:"#353535"})},indicatorsContainer:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{color:"#676767"})},valueContainer:function(e,n){return(0,b.Z)({},e)},dropdownIndicator:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{color:"#676767"})},placeholder:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{color:"#BFC8E2",fontSize:"14.4px"})},singleValue:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{color:"#BFC8E2",fontSize:"14.4px"})}},Z=function(e,n,r){var t=n.label,o=(n.value,e.filter((function(e){return e.label.toLowerCase()===t.toLowerCase()&&e.label.toLowerCase().startsWith(r.toLowerCase())})));return t.toLowerCase().startsWith(r.toLowerCase())||o.length>0};var g=function(e){var n=e.onChange,r=e.onBlur,t=e.value,o=e.name,a=e.inputRef,l=e.placeholder,i=e.error,c=e.id,d=e.className,u=e.options,m=(e.isSearchable,e.isClearable),f=e.isDisabled,x=e.dark;return(0,h.jsxs)("div",{children:[(0,h.jsx)(p.ZP,{options:u,value:t,onChange:n,isClearable:void 0==m||m,isSearchable:!1,styles:x?j:v,onBlur:r,name:o,className:d,id:c,ref:a,isDisabled:f,placeholder:l,components:{IndicatorSeparator:function(){return null}},filterOption:function(e,n){return Z(u,e,n)}}),i&&i.value&&i.value.message?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(s.Z.Control.Feedback,{type:"invalid",children:i.value.message})}):i&&i&&i.message?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(s.Z.Control.Feedback,{type:"invalid",children:i.message})}):null]})},S=r(5486),C=r(8399),w=r(3540),F=r(2968),y=r(2426),N=r.n(y);function k(e){e.onSuccess;var n,r=e.onClose,a=e.shouldShow,l=e.formValues,i=(0,t.useState)(""),s=(0,o.Z)(i,2),c=s[0],d=s[1];return(0,t.useEffect)((function(){if(l){var e=N()(l.date).format("D"),n=N()(l.date).format("MMMM"),r=l.waqt.value,t=F,o="<p>";o=o+"Start: <span>"+N()(t[n][e][r].Start,"HH:mm").format("h:mm a")+"</span><br/>End: <span>"+(t[n][e][r].End?N()(t[n][e][r].End,"HH:mm").format("h:mm a"):"Until Next Waqt")+"</span>",d(o+="</p>")}}),[l]),(0,h.jsx)(t.Fragment,{children:(0,h.jsxs)(C.Z,{show:a,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,h.jsx)(C.Z.Header,{children:N()(l.date).format("D MMMM ")+(null===l||void 0===l||null===(n=l.waqt)||void 0===n?void 0:n.value)+" Timings"}),(0,h.jsx)(C.Z.Body,{children:(0,h.jsx)("div",{className:"modal-body content",children:(0,w.ZP)(c)})}),(0,h.jsx)(C.Z.Footer,{children:(0,h.jsx)("div",{className:"btn-wrap mb-3",children:(0,h.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:r,children:"Close"})})})]})})}var M=r(37),D=i.Ry().shape({location:i.Ry().nullable()});function B(e){var n=e.onClose,r=e.shouldShow,o=(0,a.cI)({resolver:(0,l.X)(D),defaultValues:{location:void 0}}),i=o.control,s=(o.formState.errors,o.formState,o.setValue),c=o.handleSubmit;return(0,t.useEffect)((function(){var e=localStorage.getItem("location");e&&s("location",JSON.parse(e))}),[]),(0,h.jsx)(t.Fragment,{children:(0,h.jsxs)(C.Z,{show:r,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,h.jsx)(C.Z.Header,{children:"Set Location"}),(0,h.jsx)(C.Z.Body,{children:(0,h.jsx)("div",{className:"modal-body content",children:(0,h.jsx)(a.Qr,{control:i,name:"location",render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name,l=n.ref,i=e.fieldState;i.invalid,i.isTouched,i.isDirty,i.error,e.formState;return(0,h.jsx)(g,{name:a,onChange:r,onBlur:t,inputRef:l,options:S.Lm,value:o,placeholder:"Select location"})}})})}),(0,h.jsx)(C.Z.Footer,{children:(0,h.jsx)("div",{className:"btn-wrap mb-3",children:(0,h.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:c((function(e){localStorage.setItem("location",JSON.stringify(e.location)),n()})),children:"Submit"})})})]})})}var H=i.Ry().shape({date:i.Z_(),waqt:i.Ry().nullable()});function q(){var e=(0,a.cI)({resolver:(0,l.X)(H),defaultValues:{date:new Date,waqt:""}}),n=e.control,r=(e.formState.errors,e.formState,e.setValue),i=e.handleSubmit,s=(0,t.useState)(!1),c=(0,o.Z)(s,2),d=c[0],u=c[1],m=(0,t.useState)(!1),f=(0,o.Z)(m,2),p=f[0],b=f[1],v=(0,t.useState)(),j=(0,o.Z)(v,2),Z=j[0],C=j[1];return(0,t.useEffect)((function(){var e=(0,M.Z)();r("waqt",{value:e,label:e})}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("h2",{className:"page-title",children:["Prayer Timings",(0,h.jsx)("a",{style:{right:"15px",position:"absolute"},onClick:function(){b(!0)},children:(0,h.jsx)("i",{className:"fa-solid fa-location-dot"})})]}),(0,h.jsxs)("form",{onSubmit:i((function(e){console.log({values:e}),u(!0),C(e)})),noValidate:!0,children:[(0,h.jsxs)("div",{className:"form-box-new",children:[(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{className:"form-label",children:"Date"}),(0,h.jsx)(a.Qr,{control:n,name:"date",render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=(n.name,n.ref),l=e.fieldState;l.invalid,l.isTouched,l.isDirty,l.error,e.formState;return(0,h.jsx)(x,{onChange:function(e){r(e)},onBlur:t,value:o,dateFormat:"dd-MMMM-yyyy",inputRef:a,placeholder:"Select Date"})}})]}),(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{className:"form-label",children:"Namaj Waqt"}),(0,h.jsx)(a.Qr,{control:n,name:"waqt",render:function(e){var n=e.field,r=n.onChange,t=n.onBlur,o=n.value,a=n.name,l=n.ref,i=e.fieldState;i.invalid,i.isTouched,i.isDirty,i.error,e.formState;return(0,h.jsx)(g,{name:a,onChange:r,onBlur:t,inputRef:l,options:S.Q0,value:o,placeholder:"Select Waqt"})}})]}),(0,h.jsx)("div",{className:"btn-wrap",children:(0,h.jsx)("button",{type:"submit",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",children:"View Timing"})})]}),d&&Z&&(0,h.jsx)(k,{shouldShow:d,formValues:Z,onClose:function(){u(!1)}}),p&&(0,h.jsx)(B,{shouldShow:p,onClose:function(){b(!1)}})]})]})}var E=r(8511);function L(){var e=(0,t.useState)(),n=(0,o.Z)(e,2),r=n[0],a=n[1],l=(0,t.useState)(),i=(0,o.Z)(l,2),s=i[0],c=i[1];return(0,t.useEffect)((function(){var e=N()(new Date),n=e.format("D"),r=e.format("MMMM"),t=F,o=(0,M.Z)(),l=Object.keys(t[r][n]),i=l.indexOf(o);(console.log(e.format("HH:mm")),i==l.length-1)?(o=l[0],e.format("HH:mm")>"22:00"&&(n=e.add(1,"days").format("D"),r=e.add(1,"days").format("MMMM"))):o=l[i+1];c(o),a(N()(t[r][n][o].Start,"HH:mm").format("h:mm a"))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{className:"page-title",children:"Upcoming Prayer"}),(0,h.jsxs)("div",{className:"content text-white",children:["Waqt: ",(0,h.jsx)("span",{children:s})]}),(0,h.jsxs)("div",{className:"content text-white",children:["Time: ",(0,h.jsx)("span",{children:r})]})]})}function R(){return(0,h.jsxs)(t.Fragment,{children:[(0,h.jsx)(E.Z,{}),(0,h.jsxs)("section",{className:"main-container",children:[(0,h.jsx)(q,{}),(0,h.jsx)(L,{})]})]})}}}]);
//# sourceMappingURL=Home.89fa0e1c.chunk.js.map