"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[268],{8370:function(e,n,t){t.d(n,{Z:function(){return d}});t(2791);var r=t(2976),o=(t(5721),t(1413)),a={option:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{backgroundColor:n.isSelected?"#0a9246":"#FFFFFF",":hover":{backgroundColor:"#000",color:"#ffffff"}})},menu:function(e,n){return(0,o.Z)({},e)},menuList:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{color:"#636363",fontSize:"18px"})},control:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{borderColor:"#cdc6c1",boxShadow:"none",":hover":{borderColor:"#cdc6c1"}})},indicatorSeparator:function(e,n){return(0,o.Z)({},e)},valueContainer:function(e,n){return(0,o.Z)({},e)},dropdownIndicator:function(e,n){return(0,o.Z)({},e)},placeholder:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{color:"#c2bfbf",fontSize:"18px"})},singleValue:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{color:"#636363",fontSize:"18px"})}},l={option:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{backgroundColor:n.isSelected?"#556ee6":"#FFFFFF",":hover":{backgroundColor:"#90a0ee",color:"#ffffff"}})},input:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{color:"#BFC8E2"})},menu:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{zIndex:999999})},menuList:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{color:"#636363",fontSize:"14.4px"})},control:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{height:"calc(1.9em + .94rem + 2px)",borderRadius:".5rem",backgroundColor:"#464D61",borderColor:"1.5px solid #58627F",boxShadow:"none",":hover":{borderColor:"#58627F"}})},indicatorSeparator:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{backgroundColor:"#353535"})},indicatorsContainer:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{color:"#676767"})},valueContainer:function(e,n){return(0,o.Z)({},e)},dropdownIndicator:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{color:"#676767"})},placeholder:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{color:"#BFC8E2",fontSize:"14.4px"})},singleValue:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{color:"#BFC8E2",fontSize:"14.4px"})}},s=t(3027),i=t(184),c=function(e,n,t){var r=n.label,o=(n.value,e.filter((function(e){return e.label.toLowerCase()===r.toLowerCase()&&e.label.toLowerCase().startsWith(t.toLowerCase())})));return r.toLowerCase().startsWith(t.toLowerCase())||o.length>0};var d=function(e){var n=e.onChange,t=e.onBlur,o=e.value,d=e.name,u=e.inputRef,m=e.placeholder,f=e.error,h=e.id,x=e.className,p=e.options,v=(e.isSearchable,e.isClearable),j=e.isDisabled,b=e.dark;return(0,i.jsxs)("div",{children:[(0,i.jsx)(r.ZP,{options:p,value:o,onChange:n,isClearable:void 0==v||v,isSearchable:!1,styles:b?l:a,onBlur:t,name:d,className:x,id:h,ref:u,isDisabled:j,placeholder:m,components:{IndicatorSeparator:function(){return null}},filterOption:function(e,n){return c(p,e,n)}}),f&&f.value&&f.value.message?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z.Control.Feedback,{type:"invalid",children:f.value.message})}):f&&f&&f.message?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z.Control.Feedback,{type:"invalid",children:f.message})}):null]})}},7375:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(2791),o=t(9439),a=t(1134),l=t(4695),s=t(8007),i=t(3027),c=t(9513),d=t.n(c),u=(t(5721),t(1694)),m=t.n(u),f=t(4261),h=t(184);var x=function(e){var n=e.onChange,t=e.onBlur,r=(e.onFocus,e.value),o=e.name,a=e.inputRef,l=e.placeholder,s=e.error,c=e.id,u=e.dateFormat,x=e.maxDate,p=e.minDate,v=e.disabled,j=e.dark,b=m()({"ne-datepicker-container":!0,dark:j});return(0,h.jsxs)("div",{className:b,children:[(0,h.jsx)(d(),{selected:r,onChange:n,onBlur:t,onFocus:function(e){return e.target.blur()},placeholderText:l,name:o,id:c,disabled:v,ref:a,maxDate:x,minDate:p,dateFormat:u,className:"form-control",autoComplete:"no-auto-complete_"+(0,f.Z)()}),(0,h.jsx)("i",{className:"date-icon"}),s&&s.message?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(i.Z.Control.Feedback,{type:"invalid",children:s.message})}):null]})},p=t(8370),v=t(5486),j=t(8399),b=t(3540),Z=t(2344),g=t(2426),S=t.n(g);function C(e){e.onSuccess;var n,t=e.onClose,a=e.shouldShow,l=e.formValues,s=(0,r.useState)(""),i=(0,o.Z)(s,2),c=i[0],d=i[1];return(0,r.useEffect)((function(){if(l){var e=S()(l.date).format("D"),n=S()(l.date).format("MMMM"),t=l.waqt.value,r=Z,o="<p>";o=o+"Start: <span>"+S()(r[n][e][t].Start,"HH:mm").format("h:mm a")+"</span><br/>End: <span>"+(r[n][e][t].End?S()(r[n][e][t].End,"HH:mm").format("h:mm a"):"Until Next Waqt")+"</span>",d(o+="</p>")}}),[l]),(0,h.jsx)(r.Fragment,{children:(0,h.jsxs)(j.Z,{show:a,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,h.jsx)(j.Z.Header,{children:S()(l.date).format("D MMMM ")+(null===l||void 0===l||null===(n=l.waqt)||void 0===n?void 0:n.value)+" Timings"}),(0,h.jsx)(j.Z.Body,{children:(0,h.jsx)("div",{className:"modal-body content",children:(0,b.ZP)(c)})}),(0,h.jsx)(j.Z.Footer,{children:(0,h.jsx)("div",{className:"btn-wrap mb-3",children:(0,h.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:t,children:"Close"})})})]})})}var w=t(37),y=s.Ry().shape({location:s.Ry().nullable()});function F(e){var n=e.onClose,t=e.shouldShow,o=(0,a.cI)({resolver:(0,l.X)(y),defaultValues:{location:void 0}}),s=o.control,i=(o.formState.errors,o.formState,o.setValue),c=o.handleSubmit;return(0,r.useEffect)((function(){var e=localStorage.getItem("location");e&&i("location",JSON.parse(e))}),[]),(0,h.jsx)(r.Fragment,{children:(0,h.jsxs)(j.Z,{show:t,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,h.jsx)(j.Z.Header,{children:"Set Location"}),(0,h.jsx)(j.Z.Body,{children:(0,h.jsx)("div",{className:"modal-body content",children:(0,h.jsx)(a.Qr,{control:s,name:"location",render:function(e){var n=e.field,t=n.onChange,r=n.onBlur,o=n.value,a=n.name,l=n.ref,s=e.fieldState;s.invalid,s.isTouched,s.isDirty,s.error,e.formState;return(0,h.jsx)(p.Z,{name:a,onChange:t,onBlur:r,inputRef:l,options:v.Lm,value:o,placeholder:"Select location"})}})})}),(0,h.jsx)(j.Z.Footer,{children:(0,h.jsx)("div",{className:"btn-wrap mb-3",children:(0,h.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:c((function(e){localStorage.setItem("location",JSON.stringify(e.location)),n()})),children:"Submit"})})})]})})}var M=s.Ry().shape({date:s.Z_(),waqt:s.Ry().nullable()});function N(){var e=(0,a.cI)({resolver:(0,l.X)(M),defaultValues:{date:new Date,waqt:""}}),n=e.control,t=(e.formState.errors,e.formState,e.setValue),s=e.handleSubmit,i=(0,r.useState)(!1),c=(0,o.Z)(i,2),d=c[0],u=c[1],m=(0,r.useState)(!1),f=(0,o.Z)(m,2),j=f[0],b=f[1],Z=(0,r.useState)(),g=(0,o.Z)(Z,2),S=g[0],y=g[1];return(0,r.useEffect)((function(){var e=(0,w.Z)();t("waqt",{value:e,label:e})}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("h2",{className:"page-title",children:["Prayer Timings",(0,h.jsx)("a",{style:{right:"15px",position:"absolute"},onClick:function(){b(!0)},children:(0,h.jsx)("i",{className:"fa-solid fa-location-dot"})})]}),(0,h.jsxs)("form",{onSubmit:s((function(e){console.log({values:e}),u(!0),y(e)})),noValidate:!0,children:[(0,h.jsxs)("div",{className:"form-box-new",children:[(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{className:"form-label",children:"Date"}),(0,h.jsx)(a.Qr,{control:n,name:"date",render:function(e){var n=e.field,t=n.onChange,r=n.onBlur,o=n.value,a=(n.name,n.ref),l=e.fieldState;l.invalid,l.isTouched,l.isDirty,l.error,e.formState;return(0,h.jsx)(x,{onChange:function(e){t(e)},onBlur:r,value:o,dateFormat:"dd-MMMM-yyyy",inputRef:a,placeholder:"Select Date"})}})]}),(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{className:"form-label",children:"Namaj Waqt"}),(0,h.jsx)(a.Qr,{control:n,name:"waqt",render:function(e){var n=e.field,t=n.onChange,r=n.onBlur,o=n.value,a=n.name,l=n.ref,s=e.fieldState;s.invalid,s.isTouched,s.isDirty,s.error,e.formState;return(0,h.jsx)(p.Z,{name:a,onChange:t,onBlur:r,inputRef:l,options:v.Q0,value:o,placeholder:"Select Waqt"})}})]}),(0,h.jsx)("div",{className:"btn-wrap",children:(0,h.jsx)("button",{type:"submit",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",children:"View Timing"})})]}),d&&S&&(0,h.jsx)(C,{shouldShow:d,formValues:S,onClose:function(){u(!1)}}),j&&(0,h.jsx)(F,{shouldShow:j,onClose:function(){b(!1)}})]})]})}var k=t(5237);function D(e){var n=e.shouldShow,t=e.closeAzanModal,a=e.waqt,l=(0,r.useRef)(null),s=(0,r.useState)(!1),i=(0,o.Z)(s,2),c=i[0],d=i[1];return(0,r.useEffect)((function(){setTimeout((function(){d(!0)}),15e3)}),[]),(0,h.jsx)(r.Fragment,{children:(0,h.jsxs)(j.Z,{show:n,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,h.jsxs)(j.Z.Header,{children:[a," Azan",c&&(0,h.jsx)("button",{type:"button",className:"",onClick:function(){return t()},style:{background:"none",border:"none",color:"#fff"},children:(0,h.jsx)("i",{className:"fa fa-times"})})]}),(0,h.jsx)(j.Z.Body,{children:(0,h.jsxs)("div",{className:"modal-body content",children:[(0,h.jsxs)("video",{width:"100%",id:"azanVid",preload:"auto",autoPlay:!0,muted:!0,onClick:function(){return function(){var e=null===l||void 0===l?void 0:l.current;e&&(e.muted=!1)}()},onEnded:function(){return t()},ref:l,children:["Fajr"==a?(0,h.jsx)("source",{src:"images/FajrAzan.mp4",type:"video/mp4"}):(0,h.jsx)("source",{src:"images/Azan.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,h.jsx)("h4",{className:"msg-text",children:"Click the above video to listen to the Adhan"})]})})]})})}function B(e){e.type;var n=(0,r.useState)(),t=(0,o.Z)(n,2),a=t[0],l=t[1],s=(0,r.useState)(),i=(0,o.Z)(s,2),c=i[0],d=i[1],u=(0,r.useState)(),m=(0,o.Z)(u,2),f=m[0],x=m[1],p=(0,r.useState)(),j=(0,o.Z)(p,2),g=j[0],C=j[1],y=(0,r.useState)(!1),F=(0,o.Z)(y,2),M=F[0],N=F[1],k=(0,r.useState)(!1),B=(0,o.Z)(k,2),E=B[0],H=B[1],q=Z,z=v.UA,T=function(e){return("0"+e).slice(-2)},I=function(){var e=S()(),n=e.format("D"),t=e.format("MMMM"),r=Z,o=(0,w.Z)(),a=Object.keys(r[t][n]),s=a.indexOf(o);s==a.length-1?(o=a[0],e.format("HH:mm")>"22:00"&&(n=S()().add(1,"days").format("D"),t=S()().add(1,"days").format("MMMM"))):o=a[s+1];d(o),console.log(t,n);var i=S()(r[t][n][o].Start,"HH:mm").format("h:mm a");return l(i),L(i),i},L=function(e){var n=(S()(e,"h:mm a").diff(S()(),"seconds")+86400)%86400;console.log({sec:n});var t=setInterval((function(){C(t),x(function(e){var n=Math.floor(e/60);e%=60;var t=Math.floor(n/60);return n%=60,"".concat(T(t),":").concat(T(n),":").concat(T(e))}(n)),--n<0&&(clearInterval(t),N(!0))}),1e3)};return(0,r.useEffect)((function(){var e=(0,w.Z)(),n=I(),t=q[S()().format("MMMM")][S()().format("D")][e].End?S()().diff(S()(q[S()().format("MMMM")][S()().format("D")][e].End,"HH:mm")):S()().diff(S()(n,"h:mm a").subtract(1,"minutes"));return console.log({diff:t}),t<0&&H(!0),function(){clearInterval(g)}}),[]),(0,h.jsxs)(h.Fragment,{children:[E?(0,h.jsxs)(h.Fragment,{children:["Tahajjud"!=(0,w.Z)()&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("h3",{className:"page-title",children:[(0,w.Z)()," Prayers"]}),z[(0,w.Z)()].map((function(e,n){return(0,h.jsx)("div",{className:"content text-white",children:(0,b.ZP)(e)},n)}))]}),(0,h.jsxs)("div",{className:"highlight-text content",children:["Current Waqt ",(0,h.jsxs)("span",{children:["(",(0,w.Z)(),")"]})," ends at ",(0,h.jsx)("span",{children:q[S()().format("MMMM")][S()().format("D")][(0,w.Z)()].End?S()(q[S()().format("MMMM")][S()().format("D")][(0,w.Z)()].End,"HH:mm").format("h:mm a"):S()(a,"h:mm a").subtract(1,"minutes").format("h:mm a")})]})]}):null,(0,h.jsx)("h3",{className:"page-title",children:"Upcoming Prayer"}),(0,h.jsxs)("div",{className:"content text-white",children:["Waqt: ",(0,h.jsx)("span",{children:c})]}),(0,h.jsxs)("div",{className:"content text-white",children:["Time: ",(0,h.jsx)("span",{children:a})]}),(0,h.jsxs)("div",{className:"content text-white",children:["Time Left: ",(0,h.jsx)("span",{children:f})]}),M&&c&&"Tahajjud"!=c&&(0,h.jsx)(D,{shouldShow:M,closeAzanModal:function(){N(!1),I()},waqt:c})]})}function E(){return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(k.Z,{}),(0,h.jsxs)("section",{className:"main-container",children:[(0,h.jsx)(N,{}),(0,h.jsx)(B,{})]})]})}},5721:function(){}}]);
//# sourceMappingURL=Home.875ecb80.chunk.js.map