"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[268],{5808:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var r=t(9439),o=t(2791),a=t(1134),l=t(4695),s=t(8007),i=t(3027),c=t(9513),d=t.n(c),u=t(1694),m=t.n(u),f=t(4261),h=t(184);var x=function(e){var n=e.onChange,t=e.onBlur,r=(e.onFocus,e.value),o=e.name,a=e.inputRef,l=e.placeholder,s=e.error,c=e.id,u=e.dateFormat,x=e.maxDate,b=e.minDate,p=e.disabled,v=e.dark,g=m()({"ne-datepicker-container":!0,dark:v});return(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)(d(),{selected:r,onChange:n,onBlur:t,onFocus:function(e){return e.target.blur()},placeholderText:l,name:o,id:c,disabled:p,ref:a,maxDate:x,minDate:b,dateFormat:u,className:"form-control",autoComplete:"no-auto-complete_"+(0,f.Z)()}),(0,h.jsx)("i",{className:"date-icon"}),s&&s.message?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(i.Z.Control.Feedback,{type:"invalid",children:s.message})}):null]})},b=t(2976),p=t(1413),v={option:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{backgroundColor:n.isSelected?"#0a9246":"#FFFFFF",":hover":{backgroundColor:"#000",color:"#ffffff"}})},menu:function(e,n){return(0,p.Z)({},e)},menuList:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#636363",fontSize:"18px"})},control:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{borderColor:"#cdc6c1",boxShadow:"none",":hover":{borderColor:"#cdc6c1"}})},indicatorSeparator:function(e,n){return(0,p.Z)({},e)},valueContainer:function(e,n){return(0,p.Z)({},e)},dropdownIndicator:function(e,n){return(0,p.Z)({},e)},placeholder:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#c2bfbf",fontSize:"18px"})},singleValue:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#636363",fontSize:"18px"})}},g={option:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{backgroundColor:n.isSelected?"#556ee6":"#FFFFFF",":hover":{backgroundColor:"#90a0ee",color:"#ffffff"}})},input:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#BFC8E2"})},menu:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{zIndex:999999})},menuList:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#636363",fontSize:"14.4px"})},control:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{height:"calc(1.9em + .94rem + 2px)",borderRadius:".5rem",backgroundColor:"#464D61",borderColor:"1.5px solid #58627F",boxShadow:"none",":hover":{borderColor:"#58627F"}})},indicatorSeparator:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{backgroundColor:"#353535"})},indicatorsContainer:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#676767"})},valueContainer:function(e,n){return(0,p.Z)({},e)},dropdownIndicator:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#676767"})},placeholder:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#BFC8E2",fontSize:"14.4px"})},singleValue:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#BFC8E2",fontSize:"14.4px"})}},j=function(e,n,t){var r=n.label,o=(n.value,e.filter((function(e){return e.label.toLowerCase()===r.toLowerCase()&&e.label.toLowerCase().startsWith(t.toLowerCase())})));return r.toLowerCase().startsWith(t.toLowerCase())||o.length>0};var Z=function(e){var n=e.onChange,t=e.onBlur,r=e.value,o=e.name,a=e.inputRef,l=e.placeholder,s=e.error,c=e.id,d=e.className,u=e.options,m=(e.isSearchable,e.isClearable),f=e.isDisabled,x=e.dark;return(0,h.jsxs)("div",{children:[(0,h.jsx)(b.ZP,{options:u,value:r,onChange:n,isClearable:void 0==m||m,isSearchable:!1,styles:x?g:v,onBlur:t,name:o,className:d,id:c,ref:a,isDisabled:f,placeholder:l,components:{IndicatorSeparator:function(){return null}},filterOption:function(e,n){return j(u,e,n)}}),s&&s.value&&s.value.message?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(i.Z.Control.Feedback,{type:"invalid",children:s.value.message})}):s&&s&&s.message?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(i.Z.Control.Feedback,{type:"invalid",children:s.message})}):null]})},S=t(5486),C=t(8399),y=t(3540),w=t(2344),F=t(2426),N=t.n(F);function k(e){e.onSuccess;var n,t=e.onClose,a=e.shouldShow,l=e.formValues,s=(0,o.useState)(""),i=(0,r.Z)(s,2),c=i[0],d=i[1];return(0,o.useEffect)((function(){if(l){var e=N()(l.date).format("D"),n=N()(l.date).format("MMMM"),t=l.waqt.value,r=w,o="<p>";o=o+"Start: <span>"+N()(r[n][e][t].Start,"HH:mm").format("h:mm a")+"</span><br/>End: <span>"+(r[n][e][t].End?N()(r[n][e][t].End,"HH:mm").format("h:mm a"):"Until Next Waqt")+"</span>",d(o+="</p>")}}),[l]),(0,h.jsx)(o.Fragment,{children:(0,h.jsxs)(C.Z,{show:a,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,h.jsx)(C.Z.Header,{children:N()(l.date).format("D MMMM ")+(null===l||void 0===l||null===(n=l.waqt)||void 0===n?void 0:n.value)+" Timings"}),(0,h.jsx)(C.Z.Body,{children:(0,h.jsx)("div",{className:"modal-body content",children:(0,y.ZP)(c)})}),(0,h.jsx)(C.Z.Footer,{children:(0,h.jsx)("div",{className:"btn-wrap mb-3",children:(0,h.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:t,children:"Close"})})})]})})}var M=t(37),D=s.Ry().shape({location:s.Ry().nullable()});function B(e){var n=e.onClose,t=e.shouldShow,r=(0,a.cI)({resolver:(0,l.X)(D),defaultValues:{location:void 0}}),s=r.control,i=(r.formState.errors,r.formState,r.setValue),c=r.handleSubmit;return(0,o.useEffect)((function(){var e=localStorage.getItem("location");e&&i("location",JSON.parse(e))}),[]),(0,h.jsx)(o.Fragment,{children:(0,h.jsxs)(C.Z,{show:t,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,h.jsx)(C.Z.Header,{children:"Set Location"}),(0,h.jsx)(C.Z.Body,{children:(0,h.jsx)("div",{className:"modal-body content",children:(0,h.jsx)(a.Qr,{control:s,name:"location",render:function(e){var n=e.field,t=n.onChange,r=n.onBlur,o=n.value,a=n.name,l=n.ref,s=e.fieldState;s.invalid,s.isTouched,s.isDirty,s.error,e.formState;return(0,h.jsx)(Z,{name:a,onChange:t,onBlur:r,inputRef:l,options:S.Lm,value:o,placeholder:"Select location"})}})})}),(0,h.jsx)(C.Z.Footer,{children:(0,h.jsx)("div",{className:"btn-wrap mb-3",children:(0,h.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:c((function(e){localStorage.setItem("location",JSON.stringify(e.location)),n()})),children:"Submit"})})})]})})}var I=s.Ry().shape({date:s.Z_(),waqt:s.Ry().nullable()});function H(){var e=(0,a.cI)({resolver:(0,l.X)(I),defaultValues:{date:new Date,waqt:""}}),n=e.control,t=(e.formState.errors,e.formState,e.setValue),s=e.handleSubmit,i=(0,o.useState)(!1),c=(0,r.Z)(i,2),d=c[0],u=c[1],m=(0,o.useState)(!1),f=(0,r.Z)(m,2),b=f[0],p=f[1],v=(0,o.useState)(),g=(0,r.Z)(v,2),j=g[0],C=g[1];return(0,o.useEffect)((function(){var e=(0,M.Z)();t("waqt",{value:e,label:e})}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("h2",{className:"page-title",children:["Prayer Timings",(0,h.jsx)("a",{style:{right:"15px",position:"absolute"},onClick:function(){p(!0)},children:(0,h.jsx)("i",{className:"fa-solid fa-location-dot"})})]}),(0,h.jsxs)("form",{onSubmit:s((function(e){console.log({values:e}),u(!0),C(e)})),noValidate:!0,children:[(0,h.jsxs)("div",{className:"form-box-new",children:[(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{className:"form-label",children:"Date"}),(0,h.jsx)(a.Qr,{control:n,name:"date",render:function(e){var n=e.field,t=n.onChange,r=n.onBlur,o=n.value,a=(n.name,n.ref),l=e.fieldState;l.invalid,l.isTouched,l.isDirty,l.error,e.formState;return(0,h.jsx)(x,{onChange:function(e){t(e)},onBlur:r,value:o,dateFormat:"dd-MMMM-yyyy",inputRef:a,placeholder:"Select Date"})}})]}),(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{className:"form-label",children:"Namaj Waqt"}),(0,h.jsx)(a.Qr,{control:n,name:"waqt",render:function(e){var n=e.field,t=n.onChange,r=n.onBlur,o=n.value,a=n.name,l=n.ref,s=e.fieldState;s.invalid,s.isTouched,s.isDirty,s.error,e.formState;return(0,h.jsx)(Z,{name:a,onChange:t,onBlur:r,inputRef:l,options:S.Q0,value:o,placeholder:"Select Waqt"})}})]}),(0,h.jsx)("div",{className:"btn-wrap",children:(0,h.jsx)("button",{type:"submit",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",children:"View Timing"})})]}),d&&j&&(0,h.jsx)(k,{shouldShow:d,formValues:j,onClose:function(){u(!1)}}),b&&(0,h.jsx)(B,{shouldShow:b,onClose:function(){p(!1)}})]})]})}var E=t(1311);function L(){var e=(0,o.useState)(),n=(0,r.Z)(e,2),t=n[0],a=n[1],l=(0,o.useState)(),s=(0,r.Z)(l,2),i=s[0],c=s[1];return(0,o.useEffect)((function(){var e=N()(),n=e.format("D"),t=e.format("MMMM"),r=w,o=(0,M.Z)(),l=Object.keys(r[t][n]),s=l.indexOf(o);s==l.length-1?(o=l[0],e.format("HH:mm")>"22:00"&&(n=N()().add(1,"days").format("D"),t=N()().add(1,"days").format("MMMM"))):o=l[s+1];c(o),console.log(t,n),a(N()(r[t][n][o].Start,"HH:mm").format("h:mm a"))})),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{className:"page-title",children:"Upcoming Prayer"}),(0,h.jsxs)("div",{className:"content text-white",children:["Waqt: ",(0,h.jsx)("span",{children:i})]}),(0,h.jsxs)("div",{className:"content text-white",children:["Time: ",(0,h.jsx)("span",{children:t})]})]})}function q(e){var n=e.type;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h4",{className:"msg-text",children:n||"Qur'an"}),(0,h.jsx)("div",{style:{height:220,textAlign:"center"},children:(0,h.jsx)("iframe",{src:"https://alim.org/"+((null===n||void 0===n?void 0:n.toLowerCase())||"insight")+"-of-the-day/widget/",height:"100%",width:"100%"})})]})}function R(e){var n=e.shouldShow,t=e.setShowInsightsModal;return(0,h.jsx)(o.Fragment,{children:(0,h.jsxs)(C.Z,{show:n,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,h.jsxs)(C.Z.Header,{children:["Insights of the Day",(0,h.jsx)("button",{type:"button",className:"",onClick:function(){return t(!1)},style:{background:"none",border:"none",color:"#fff"},children:(0,h.jsx)("i",{className:"fa fa-times"})})]}),(0,h.jsx)(C.Z.Body,{children:(0,h.jsxs)("div",{className:"modal-body content",children:[(0,h.jsx)(q,{}),(0,h.jsx)(q,{type:"Hadith"})]})})]})})}function V(){var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),t=n[0],a=n[1];return(0,o.useEffect)((function(){var e=localStorage.getItem("day"),n=(new Date).getDate()+"";e?n!=e&&(a(!0),localStorage.setItem("day",n)):localStorage.setItem("day",n)}),[]),(0,h.jsxs)(o.Fragment,{children:[(0,h.jsx)(E.Z,{}),(0,h.jsxs)("section",{className:"main-container",children:[(0,h.jsx)(H,{}),(0,h.jsx)(L,{}),(0,h.jsx)("div",{className:"btn-wrap",children:(0,h.jsx)("button",{className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",onClick:function(){return a(!0)},children:"Insights of the Day"})})]}),t&&(0,h.jsx)(R,{shouldShow:t,setShowInsightsModal:a})]})}}}]);
//# sourceMappingURL=Home.8e26f75e.chunk.js.map