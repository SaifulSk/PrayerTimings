"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[268],{8370:function(e,n,a){a.d(n,{Z:function(){return d}});a(2791);var t=a(2976),r=(a(5721),a(1413)),o={option:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{backgroundColor:n.isSelected?"#0a9246":"#FFFFFF",":hover":{backgroundColor:"#000",color:"#ffffff"}})},menu:function(e,n){return(0,r.Z)({},e)},menuList:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{color:"#636363",fontSize:"18px"})},control:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{borderColor:"#cdc6c1",boxShadow:"none",":hover":{borderColor:"#cdc6c1"}})},indicatorSeparator:function(e,n){return(0,r.Z)({},e)},valueContainer:function(e,n){return(0,r.Z)({},e)},dropdownIndicator:function(e,n){return(0,r.Z)({},e)},placeholder:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{color:"#c2bfbf",fontSize:"18px"})},singleValue:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{color:"#636363",fontSize:"18px"})}},l={option:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{backgroundColor:n.isSelected?"#556ee6":"#FFFFFF",":hover":{backgroundColor:"#90a0ee",color:"#ffffff"}})},input:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{color:"#BFC8E2"})},menu:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{zIndex:999999})},menuList:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{color:"#636363",fontSize:"14.4px"})},control:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{height:"calc(1.9em + .94rem + 2px)",borderRadius:".5rem",backgroundColor:"#464D61",borderColor:"1.5px solid #58627F",boxShadow:"none",":hover":{borderColor:"#58627F"}})},indicatorSeparator:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{backgroundColor:"#353535"})},indicatorsContainer:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{color:"#676767"})},valueContainer:function(e,n){return(0,r.Z)({},e)},dropdownIndicator:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{color:"#676767"})},placeholder:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{color:"#BFC8E2",fontSize:"14.4px"})},singleValue:function(e,n){return(0,r.Z)((0,r.Z)({},e),{},{color:"#BFC8E2",fontSize:"14.4px"})}},s=a(3027),i=a(184),c=function(e,n,a){var t=n.label,r=(n.value,e.filter((function(e){return e.label.toLowerCase()===t.toLowerCase()&&e.label.toLowerCase().startsWith(a.toLowerCase())})));return t.toLowerCase().startsWith(a.toLowerCase())||r.length>0};var d=function(e){var n=e.onChange,a=e.onBlur,r=e.value,d=e.name,u=e.inputRef,m=e.placeholder,f=e.error,h=e.id,p=e.className,v=e.options,x=(e.isSearchable,e.isClearable),b=e.isDisabled,j=e.dark;return(0,i.jsxs)("div",{children:[(0,i.jsx)(t.ZP,{options:v,value:r,onChange:n,isClearable:void 0==x||x,isSearchable:!1,styles:j?l:o,onBlur:a,name:d,className:p,id:h,ref:u,isDisabled:b,placeholder:m,components:{IndicatorSeparator:function(){return null}},filterOption:function(e,n){return c(v,e,n)}}),f&&f.value&&f.value.message?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z.Control.Feedback,{type:"invalid",children:f.value.message})}):f&&f&&f.message?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z.Control.Feedback,{type:"invalid",children:f.message})}):null]})}},6372:function(e,n,a){a.r(n),a.d(n,{default:function(){return I}});var t=a(2791),r=a(9439),o=a(1134),l=a(4695),s=a(8007),i=a(5486),c=a(6563),d=a(8370),u=a(184),m=s.Ry().shape({location:s.Ry().nullable()});function f(e){var n=e.onClose,a=e.shouldShow,r=(0,o.cI)({resolver:(0,l.X)(m),defaultValues:{location:void 0}}),s=r.control,f=(r.formState.errors,r.formState,r.setValue),h=r.handleSubmit;return(0,t.useEffect)((function(){var e=localStorage.getItem("location");e&&f("location",JSON.parse(e))}),[]),(0,u.jsx)(t.Fragment,{children:(0,u.jsxs)(c.Z,{show:a,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,u.jsxs)(c.Z.Header,{children:["Set Location",(0,u.jsx)("button",{type:"button",className:"",onClick:n,style:{background:"none",border:"none",color:"#fff"},children:(0,u.jsx)("i",{className:"fa fa-times"})})]}),(0,u.jsx)(c.Z.Body,{children:(0,u.jsx)("div",{className:"modal-body content",children:(0,u.jsx)(o.Qr,{control:s,name:"location",render:function(e){var n=e.field,a=n.onChange,t=n.onBlur,r=n.value,o=n.name,l=n.ref,s=e.fieldState;s.invalid,s.isTouched,s.isDirty,s.error,e.formState;return(0,u.jsx)(d.Z,{name:o,onChange:a,onBlur:t,inputRef:l,options:i.Lm,value:r,placeholder:"Select location"})}})})}),(0,u.jsx)(c.Z.Footer,{children:(0,u.jsx)("div",{className:"btn-wrap mb-3",children:(0,u.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:h((function(e){localStorage.setItem("location",JSON.stringify(e.location)),n()})),children:"Submit"})})})]})})}a(5721);var h=a(3027);var p=function(e){var n=e.onChange,a=(e.onBlur,e.value),t=e.name,r=(e.inputRef,e.placeholder,e.error),o=(e.id,e.options);return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"radio-wrapper",children:o.map((function(e,r){return(0,u.jsxs)("label",{className:"container-radio",children:[e.label,(0,u.jsx)("input",{type:"radio",checked:a==e.value,name:t,value:e.value,onChange:function(e){n(e.target.value)}}),(0,u.jsx)("span",{className:"checkmark"})]},r)}))}),r&&r.message?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(h.Z.Control.Feedback,{type:"invalid",children:r.message})}):null]})},v=a(9513),x=a.n(v),b=a(1694),j=a.n(b),g=a(4261);var w=function(e){var n=e.onChange,a=e.onBlur,t=(e.onFocus,e.value),r=e.name,o=e.inputRef,l=e.placeholder,s=e.error,i=e.id,c=e.dateFormat,d=e.maxDate,m=e.minDate,f=e.disabled,p=e.dark,v=e.showMonthYearPicker,b=e.showWeekNumbers,w=e.showWeekPicker,S=e.inline,Z=j()({"ne-datepicker-container":!0,dark:p});return(0,u.jsxs)("div",{className:Z,children:[(0,u.jsx)(x(),{selected:t,onChange:n,onBlur:a,onFocus:function(e){return e.target.blur()},placeholderText:l,name:r,id:i,disabled:f,ref:o,maxDate:d,minDate:m,dateFormat:c,className:"form-control",autoComplete:"no-auto-complete_"+(0,g.Z)(),showMonthYearPicker:v,showWeekNumbers:b,showWeekPicker:w,inline:S}),(0,u.jsx)("i",{className:"date-icon"}),s&&s.message?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(h.Z.Control.Feedback,{type:"invalid",children:s.message})}):null]})},S=a(3540),Z=a(2344),y=a(2426),C=a.n(y);function N(e){e.onSuccess;var n,a=e.onClose,o=e.shouldShow,l=e.formValues,s=e.type,i=(0,t.useState)(""),d=(0,r.Z)(i,2),m=d[0],f=d[1];return(0,t.useEffect)((function(){if(l){var e=C()(l.date).format("D"),n=C()(l.date).format("MMMM"),a=l.waqt.value,t=Z,r="";if("Daywise"==s)"All"!=a?r=r+"<p>Start: <span>"+C()(t[n][e][a].Start,"HH:mm").format("h:mm a")+"</span><br/>End: <span>"+(t[n][e][a].End?C()(t[n][e][a].End,"HH:mm").format("h:mm a"):"Until Next Waqt")+"</span></p>":Object.keys(t[n][e]).map((function(a){r=r+"<div class='col-6 waqt-card'><h4 class='page-title'>"+a+"</h4><p>Start: <span>"+C()(t[n][e][a].Start,"HH:mm").format("h:mm a")+"</span><br/>End: <span>"+(t[n][e][a].End?C()(t[n][e][a].End,"HH:mm").format("h:mm a"):"Until Next Waqt")+"</span></p></div>"}));else if("All"!=a)for(var o=0;o<("Weekwise"==s?7:Number(C()(l.date).endOf("month").format("D")));o++){var i=C()(l.date).add(o,"days").format("D"),c=C()(l.date).add(o,"days").format("MMMM");r=r+"<div class='col-6 waqt-card'><h4 class='page-title'>"+c+" "+i+"</h4><p>Start: <span>"+C()(t[c][i][a].Start,"HH:mm").format("h:mm a")+"</span><br/>End: <span>"+(t[c][i][a].End?C()(t[c][i][a].End,"HH:mm").format("h:mm a"):"Until Next Waqt")+"</span></p></div>"}else for(var d=function(){var e=C()(l.date).add(u,"days").format("D"),n=C()(l.date).add(u,"days").format("MMMM");r=r+"<h3 class='page-title'>"+n+" "+e+"</h3>",Object.keys(t[n][e]).map((function(a){r=r+"<div class='col-6 waqt-card'><h4 class='page-title'>"+a+"</h4><p>Start: <span>"+C()(t[n][e][a].Start,"HH:mm").format("h:mm a")+"</span><br/>End: <span>"+(t[n][e][a].End?C()(t[n][e][a].End,"HH:mm").format("h:mm a"):"Until Next Waqt")+"</span></p></div>"}))},u=0;u<("Weekwise"==s?7:Number(C()(l.date).endOf("month").format("D")));u++)d();f(r)}}),[l]),(0,u.jsx)(t.Fragment,{children:(0,u.jsxs)(c.Z,{show:o,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,u.jsxs)(c.Z.Header,{children:[("Daywise"==s?C()(l.date).format("D MMMM "):"Weekwise"==s?C()(l.date).format("D MMMM ")+" - "+C()(l.date).add(6,"days").format("D MMMM "):C()(l.date).format("MMMM "))+(null===l||void 0===l||null===(n=l.waqt)||void 0===n?void 0:n.value)+" Timings",(0,u.jsx)("button",{type:"button",className:"",onClick:a,style:{background:"none",border:"none",color:"#fff"},children:(0,u.jsx)("i",{className:"fa fa-times"})})]}),(0,u.jsx)(c.Z.Body,{children:(0,u.jsx)("div",{className:"content row",children:(0,S.ZP)(m)})}),(0,u.jsx)(c.Z.Footer,{children:(0,u.jsx)("div",{className:"btn-wrap mb-3",children:(0,u.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:a,children:"Close"})})})]})})}var M=a(37),k=s.Ry().shape({date:s.Z_(),waqt:s.Ry().nullable().required("Please select waqt")});function D(){var e=(0,o.cI)({resolver:(0,l.X)(k),defaultValues:{date:new Date,waqt:""}}),n=e.control,a=e.formState.errors,s=(e.formState,e.setValue),c=e.handleSubmit,m=(0,t.useState)(!1),f=(0,r.Z)(m,2),h=f[0],p=f[1],v=(0,t.useState)(!1),x=(0,r.Z)(v,2),b=(x[0],x[1],(0,t.useState)()),j=(0,r.Z)(b,2),g=j[0],S=j[1];return(0,t.useEffect)((function(){var e=(0,M.Z)();s("waqt",{value:e,label:e})}),[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:c((function(e){console.log({values:e}),p(!0),S(e)})),noValidate:!0,children:[(0,u.jsxs)("div",{className:"form-box-new",children:[(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"Date"}),(0,u.jsx)(o.Qr,{control:n,name:"date",render:function(e){var n=e.field,a=n.onChange,t=n.onBlur,r=n.value,o=(n.name,n.ref),l=e.fieldState;l.invalid,l.isTouched,l.isDirty,l.error,e.formState;return(0,u.jsx)(w,{onChange:function(e){a(e)},onBlur:t,value:r,dateFormat:"dd-MMMM-yyyy",inputRef:o,placeholder:"Select Date"})}})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"Namaj Waqt"}),(0,u.jsx)(o.Qr,{control:n,name:"waqt",render:function(e){var n=e.field,t=n.onChange,r=n.onBlur,o=n.value,l=n.name,s=n.ref,c=e.fieldState;c.invalid,c.isTouched,c.isDirty,c.error,e.formState;return(0,u.jsx)(d.Z,{name:l,onChange:t,onBlur:r,inputRef:s,options:i.Q0,value:o,error:a.waqt,placeholder:"Select Waqt"})}})]}),(0,u.jsx)("div",{className:"btn-wrap",children:(0,u.jsx)("button",{type:"submit",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",children:"View Timing"})})]}),h&&g&&(0,u.jsx)(N,{shouldShow:h,formValues:g,onClose:function(){p(!1)},type:"Daywise"})]})})}var F=s.Ry().shape({date:s.Z_(),waqt:s.Ry().nullable()});function q(){var e=(0,o.cI)({resolver:(0,l.X)(F),defaultValues:{date:new Date((new Date).setDate((new Date).getDate()-(new Date).getDay())),waqt:""}}),n=e.control,a=(e.formState.errors,e.formState,e.setValue),s=e.handleSubmit,c=(0,t.useState)(!1),m=(0,r.Z)(c,2),f=m[0],h=m[1],p=(0,t.useState)(!1),v=(0,r.Z)(p,2),x=(v[0],v[1],(0,t.useState)()),b=(0,r.Z)(x,2),j=b[0],g=b[1];return(0,t.useEffect)((function(){var e=(0,M.Z)();a("waqt",{value:e,label:e})}),[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:s((function(e){console.log({values:e}),h(!0),g(e)})),noValidate:!0,children:[(0,u.jsxs)("div",{className:"form-box-new",children:[(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"Week"}),(0,u.jsx)(o.Qr,{control:n,name:"date",render:function(e){var n=e.field,a=n.onChange,t=n.onBlur,r=n.value,o=(n.name,n.ref),l=e.fieldState;l.invalid,l.isTouched,l.isDirty,l.error,e.formState;return(0,u.jsx)(w,{onChange:function(e){a(e),console.log({e:e})},onBlur:t,value:r,dateFormat:"I, R",showWeekNumbers:!0,showWeekPicker:!0,inputRef:o,placeholder:"Select Week"})}})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"Namaj Waqt"}),(0,u.jsx)(o.Qr,{control:n,name:"waqt",render:function(e){var n=e.field,a=n.onChange,t=n.onBlur,r=n.value,o=n.name,l=n.ref,s=e.fieldState;s.invalid,s.isTouched,s.isDirty,s.error,e.formState;return(0,u.jsx)(d.Z,{name:o,onChange:a,onBlur:t,inputRef:l,options:i.Q0,value:r,placeholder:"Select Waqt"})}})]}),(0,u.jsx)("div",{className:"btn-wrap",children:(0,u.jsx)("button",{type:"submit",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",children:"View Timing"})})]}),f&&j&&(0,u.jsx)(N,{shouldShow:f,formValues:j,onClose:function(){h(!1)},type:"Weekwise"})]})})}var E=s.Ry().shape({date:s.Z_(),waqt:s.Ry().nullable()});function B(){var e=(0,o.cI)({resolver:(0,l.X)(E),defaultValues:{date:new Date((new Date).getFullYear(),(new Date).getMonth(),1),waqt:""}}),n=e.control,a=(e.formState.errors,e.formState,e.setValue),s=e.handleSubmit,c=(0,t.useState)(!1),m=(0,r.Z)(c,2),f=m[0],h=m[1],p=(0,t.useState)(!1),v=(0,r.Z)(p,2),x=(v[0],v[1],(0,t.useState)()),b=(0,r.Z)(x,2),j=b[0],g=b[1];return(0,t.useEffect)((function(){var e=(0,M.Z)();a("waqt",{value:e,label:e})}),[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:s((function(e){console.log({values:e}),h(!0),g(e)})),noValidate:!0,children:[(0,u.jsxs)("div",{className:"form-box-new",children:[(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"Month"}),(0,u.jsx)(o.Qr,{control:n,name:"date",render:function(e){var n=e.field,a=n.onChange,t=n.onBlur,r=n.value,o=(n.name,n.ref),l=e.fieldState;l.invalid,l.isTouched,l.isDirty,l.error,e.formState;return(0,u.jsx)(w,{onChange:function(e){a(e),console.log({e:e})},onBlur:t,value:r,showMonthYearPicker:!0,dateFormat:"MMMM-yyyy",inputRef:o,placeholder:"Select Month"})}})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)("label",{className:"form-label",children:"Namaj Waqt"}),(0,u.jsx)(o.Qr,{control:n,name:"waqt",render:function(e){var n=e.field,a=n.onChange,t=n.onBlur,r=n.value,o=n.name,l=n.ref,s=e.fieldState;s.invalid,s.isTouched,s.isDirty,s.error,e.formState;return(0,u.jsx)(d.Z,{name:o,onChange:a,onBlur:t,inputRef:l,options:i.Q0,value:r,placeholder:"Select Waqt"})}})]}),(0,u.jsx)("div",{className:"btn-wrap",children:(0,u.jsx)("button",{type:"submit",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",children:"View Timing"})})]}),f&&j&&(0,u.jsx)(N,{shouldShow:f,formValues:j,onClose:function(){h(!1)},type:"Monthwise"})]})})}var H=s.Ry().shape({waqt:s.Ry().nullable()});function W(){var e=(0,o.cI)({resolver:(0,l.X)(H),defaultValues:{type:"Daywise"}}),n=e.control,a=(e.formState.errors,e.formState,e.setValue,e.handleSubmit,(0,t.useState)(!1)),s=(0,r.Z)(a,2),c=s[0],d=s[1],m=(0,t.useState)("Daywise"),h=(0,r.Z)(m,2),v=h[0],x=h[1];return(0,t.useEffect)((function(){}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h2",{className:"page-title",children:["Prayer Timings",(0,u.jsx)("a",{style:{right:"15px",position:"absolute"},onClick:function(){d(!0)},children:(0,u.jsx)("i",{className:"fa-solid fa-location-dot"})})]}),(0,u.jsxs)("div",{className:"mb-3 text-white",children:[(0,u.jsx)("label",{className:"form-label",children:"Type"}),(0,u.jsx)(o.Qr,{control:n,name:"type",render:function(e){var n=e.field,a=n.onChange,t=n.onBlur,r=n.value,o=n.name,l=n.ref,s=e.fieldState;s.invalid,s.isTouched,s.isDirty,s.error,e.formState;return(0,u.jsx)(p,{name:o,onChange:function(e){a(e),function(e){x(e)}(e)},onBlur:t,inputRef:l,options:i.uk,value:r})}})]}),"Daywise"==v?(0,u.jsx)(D,{}):"Weekwise"==v?(0,u.jsx)(q,{}):(0,u.jsx)(B,{}),c&&(0,u.jsx)(f,{shouldShow:c,onClose:function(){d(!1)}})]})}var R=a(2371);function V(e){var n,a=e.shouldShow,o=e.closeAzanModal,l=e.waqt,s=(0,t.useRef)(null),i=(0,t.useState)(!1),d=(0,r.Z)(i,2),m=d[0],f=d[1];return(0,t.useEffect)((function(){setTimeout((function(){f(!0)}),15e3)}),[]),(0,u.jsx)(t.Fragment,{children:(0,u.jsxs)(c.Z,{show:a,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,u.jsxs)(c.Z.Header,{children:[l," Azan",m&&(0,u.jsx)("button",{type:"button",className:"",onClick:function(){return o()},style:{background:"none",border:"none",color:"#fff"},children:(0,u.jsx)("i",{className:"fa fa-times"})})]}),(0,u.jsx)(c.Z.Body,{children:(0,u.jsxs)("div",{className:"modal-body content",children:[(0,u.jsxs)("video",{width:"100%",id:"azanVid",preload:"auto",autoPlay:!0,muted:!0,onClick:function(){return function(){var e=null===s||void 0===s?void 0:s.current;e&&(e.muted=!1)}()},onEnded:function(){return o()},ref:s,children:["Fajr"==l?(0,u.jsx)("source",{src:"images/FajrAzan.mp4",type:"video/mp4"}):(0,u.jsx)("source",{src:"images/Azan.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),1==(null===s||void 0===s||null===(n=s.current)||void 0===n?void 0:n.muted)&&(0,u.jsx)("h4",{className:"msg-text",children:"Click the above video to listen to the Adhan"})]})})]})})}function T(e){e.type;var n=(0,t.useState)(),a=(0,r.Z)(n,2),o=a[0],l=a[1],s=(0,t.useState)(),c=(0,r.Z)(s,2),d=c[0],m=c[1],f=(0,t.useState)(),h=(0,r.Z)(f,2),p=h[0],v=h[1],x=(0,t.useState)(),b=(0,r.Z)(x,2),j=b[0],g=b[1],w=(0,t.useState)(!1),y=(0,r.Z)(w,2),N=y[0],k=y[1],D=(0,t.useState)(!1),F=(0,r.Z)(D,2),q=F[0],E=F[1],B=Z,H=i.UA,W=function(e){return("0"+e).slice(-2)},R=function(){var e=C()(),n=e.format("D"),a=e.format("MMMM"),t=Z,r=(0,M.Z)(),o=Object.keys(t[a][n]),s=o.indexOf(r);s==o.length-1?(r=o[0],e.format("HH:mm")>"22:00"&&(n=C()().add(1,"days").format("D"),a=C()().add(1,"days").format("MMMM"))):r=o[s+1];m(r),console.log(a,n);var i=C()(t[a][n][r].Start,"HH:mm").format("h:mm a");return l(i),T(i),i},T=function(e){var n=(C()(e,"h:mm a").diff(C()(),"seconds")+86400)%86400;console.log({sec:n});var a=setInterval((function(){g(a),v(function(e){var n=Math.floor(e/60);e%=60;var a=Math.floor(n/60);return n%=60,"".concat(W(a),":").concat(W(n),":").concat(W(e))}(n)),--n<0&&(clearInterval(a),k(!0))}),1e3)};return(0,t.useEffect)((function(){var e=(0,M.Z)(),n=R(),a=B[C()().format("MMMM")][C()().format("D")][e].End?C()().diff(C()(B[C()().format("MMMM")][C()().format("D")][e].End,"HH:mm")):C()().diff(C()(n,"h:mm a").subtract(1,"minutes"));return console.log({diff:a}),a<0&&E(!0),function(){clearInterval(j)}}),[]),(0,u.jsxs)(u.Fragment,{children:[q?(0,u.jsxs)(u.Fragment,{children:["Tahajjud"!=(0,M.Z)()&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h3",{className:"page-title",children:[(0,M.Z)()," Prayers"]}),H[(0,M.Z)()].map((function(e,n){return(0,u.jsx)("div",{className:"content text-white",children:(0,S.ZP)(e)},n)}))]}),(0,u.jsxs)("div",{className:"highlight-text content",children:["Current Waqt ",(0,u.jsxs)("span",{children:["(",(0,M.Z)(),")"]})," ends at ",(0,u.jsx)("span",{children:B[C()().format("MMMM")][C()().format("D")][(0,M.Z)()].End?C()(B[C()().format("MMMM")][C()().format("D")][(0,M.Z)()].End,"HH:mm").format("h:mm a"):C()(o,"h:mm a").subtract(1,"minutes").format("h:mm a")})]})]}):null,(0,u.jsx)("h3",{className:"page-title",children:"Upcoming Prayer"}),(0,u.jsxs)("div",{className:"content text-white",children:["Waqt: ",(0,u.jsx)("span",{children:d})]}),(0,u.jsxs)("div",{className:"content text-white",children:["Time: ",(0,u.jsx)("span",{children:o})]}),(0,u.jsxs)("div",{className:"content text-white",children:["Time Left: ",(0,u.jsx)("span",{children:p})]}),N&&d&&"Tahajjud"!=d&&(0,u.jsx)(V,{shouldShow:N,closeAzanModal:function(){k(!1),R()},waqt:d})]})}function I(){return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(R.Z,{}),(0,u.jsxs)("section",{className:"main-container",children:[(0,u.jsx)(W,{}),(0,u.jsx)(T,{})]})]})}},5721:function(){}}]);
//# sourceMappingURL=Home.ec065a50.chunk.js.map