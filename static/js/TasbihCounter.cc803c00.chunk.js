"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[333],{8511:function(e,n,s){s.d(n,{Z:function(){return j}});var a=s(9439),r=s(2791),t=s(7689),i=s(1087),l=s(8868),c=s(8399),o=s(184);function d(e){var n=e.onSuccess,s=e.onClose,a=e.shouldShow,t=e.message,i=e.type;return(0,o.jsx)(r.Fragment,{children:(0,o.jsxs)(c.Z,{show:a,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,o.jsx)(c.Z.Body,{children:(0,o.jsx)("div",{className:"modal-body",children:(0,o.jsx)("h4",{className:"rider-name-content",children:t})})}),(0,o.jsxs)(c.Z.Footer,{children:[(0,o.jsx)("div",{className:"btn-wrap mb-3",children:(0,o.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",onClick:s,children:2==i?"No":"Ok"})}),2==i&&(0,o.jsx)("div",{className:"btn-wrap mb-3",children:(0,o.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:n,children:"Yes"})})]})]})})}var u=s(2426),m=s.n(u);function h(e){var n=e.shouldShow;return(0,o.jsx)(r.Fragment,{children:(0,o.jsxs)(c.Z,{show:n,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,o.jsx)(c.Z.Header,{children:"Ramadan Kareem"}),(0,o.jsx)(c.Z.Body,{children:(0,o.jsx)("div",{className:"modal-body content",children:(0,o.jsx)("img",{src:"/PrayerTimings/images/ramadan.webp",style:{width:"100%"}})})})]})})}var j=function(){var e=(0,r.useState)(!1),n=(0,a.Z)(e,2),s=n[0],c=n[1],u=(0,r.useState)(!1),j=(0,a.Z)(u,2),f=j[0],x=j[1],g=(0,t.s0)(),b=function(e){var n=document.getElementById("sidebarCollapse"),s=document.getElementById("sidebar"),a=document.getElementById("overlay");e?n&&(null===s||void 0===s||s.classList.add("active"),null===a||void 0===a||a.classList.add("active")):n&&(null===s||void 0===s||s.classList.remove("active"),null===a||void 0===a||a.classList.remove("active"))};return(0,r.useEffect)((function(){localStorage.getItem("location")||localStorage.setItem("location",JSON.stringify({label:"Kolkata",value:"+00:00:00"}))}),[]),(0,r.useEffect)((function(){var e=localStorage.getItem("ramadanDate");e?m()(new Date).format("DD-MM")!=e&&x(!0):(x(!0),localStorage.setItem("ramadanDate",m()(new Date).format("DD-MM")))}),[]),(0,r.useEffect)((function(){f&&setTimeout((function(){x(!1)}),7e3)}),[f]),(0,o.jsxs)("section",{className:"top-nav",children:[(0,o.jsxs)("nav",{id:"sidebar",className:"mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar",style:{overflow:"visible"},children:[(0,o.jsx)("div",{id:"dismiss",onClick:function(){return b(!1)},children:(0,o.jsx)("i",{className:"fa fa-arrow-left"})}),(0,o.jsxs)("div",{className:"sidebar-header",style:{fontWeight:"bold"},children:["Islamic ",(0,o.jsx)("span",{style:{color:"#0a9246"},children:"KnowHow"})]}),(0,o.jsxs)("ul",{className:"list-unstyled components",children:[(0,o.jsx)("li",{onClick:function(){return b(!1)},children:(0,o.jsx)("a",{onClick:function(){c(!0)},children:"Go to Quran.com"})}),(0,o.jsx)("li",{onClick:function(){return b(!1)},children:(0,o.jsx)("a",{href:"https://sunnah.com",target:"_blank",children:"Go to Sunnah.com"})}),(0,o.jsx)("li",{onClick:function(){return b(!1)},children:(0,o.jsx)(i.rU,{to:l.ns.HOME,children:"Prayer Timings"})}),(0,o.jsx)("li",{onClick:function(){return b(!1)},children:(0,o.jsx)("a",{href:"https://muslimnames.com",target:"_blank",children:"Muslim Baby Names"})}),(0,o.jsx)("li",{onClick:function(){return b(!1)},children:(0,o.jsx)(i.rU,{to:l.ns.LEARN_ARABIC,children:"Learn Arabic"})}),(0,o.jsx)("li",{onClick:function(){return b(!1)},children:(0,o.jsx)(i.rU,{to:l.ns.TASBIH_COUNTER,children:"Tasbih Counter"})}),(0,o.jsx)("li",{onClick:function(){return b(!1)},children:(0,o.jsx)(i.rU,{to:l.ns.HIJRI_CALENDAR,children:"Hijri Calendar"})})]})]}),(0,o.jsx)("nav",{className:"navbar navbar-light",children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("button",{type:"button",id:"sidebarCollapse",className:"btn-none",children:(0,o.jsx)("span",{className:"open-nav",onClick:function(){return b(!0)},children:(0,o.jsx)("img",{src:"/PrayerTimings/images/menu.svg",alt:"menu"})})}),(0,o.jsx)("button",{className:"navbar-toggler btn-none d-inline-block ml-auto user-image",type:"button",onClick:function(){g(l.ns.HOME)},children:(0,o.jsx)("img",{src:"/PrayerTimings/images/logo.png"})})]})}),(0,o.jsx)("div",{className:"overlay",id:"overlay",onClick:function(){return b(!1)}}),s&&(0,o.jsx)(d,{shouldShow:s,onClose:function(){c(!1)},onSuccess:function(){window.open("https://quran.com","_blank")},message:"Wudu is must before opening this. Are you ready?",type:2}),f&&(0,o.jsx)(h,{shouldShow:f})]})}},5675:function(e,n,s){s.r(n),s.d(n,{default:function(){return u}});var a=s(2791),r=s(8511),t=s(9439),i=s(184);function l(){var e=(0,a.useState)(0),n=(0,t.Z)(e,2),s=n[0],r=n[1];return(0,a.useEffect)((function(){var e=Number(localStorage.getItem("tasbihCount"));return e>0&&r(e),function(){}}),[]),(0,a.useEffect)((function(){localStorage.setItem("tasbihCount",String(s))}),[s]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:"page-title",children:"Tasbih Counter"}),(0,i.jsx)("span",{className:"count-val",children:s}),(0,i.jsx)("div",{className:"plus-btn-wrap",children:(0,i.jsx)("a",{onClick:function(){return r(s+1)},children:(0,i.jsx)("i",{className:"fa fa-plus"})})}),s>0&&(0,i.jsx)("div",{className:"plus-btn-wrap reset-btn-wrap",children:(0,i.jsx)("a",{onClick:function(){return r(0)},children:(0,i.jsx)("img",{src:"/PrayerTimings/images/reset.png"})})})]})}var c=s(1413),o=s(8868);function d(){var e=Array.from({length:12},(function(e,n){return n+1})),n=(0,a.useState)(Array.from({length:12},(function(e,n){return 0}))),s=(0,t.Z)(n,2),r=s[0],l=s[1];return(0,a.useEffect)((function(){var e=localStorage.getItem("zikr");e&&l(JSON.parse(e))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{className:"page-title",children:"Zikr Counters"}),e.map((function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h4",{children:[e,". ",Object.keys(o.uG)[e-1]]}),(0,i.jsxs)("div",{className:"zikr-wrap",children:[(0,i.jsx)("div",{className:"zikr-img",children:(0,i.jsx)("img",{src:"images/Zikr/"+e+".png"})}),(0,i.jsx)("div",{className:"zikr-meaning",children:Object.values(o.uG)[e-1]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-6",children:(0,i.jsx)("span",{className:"count-val",children:r[e-1]})}),(0,i.jsx)("div",{className:"col-"+(r[e-1]>0?"3":"6"),children:(0,i.jsx)("div",{className:"plus-btn-wrap",children:(0,i.jsx)("a",{onClick:function(){return function(e){var n=(0,c.Z)({},r);n[e-1]=n[e-1]+1,l(n),localStorage.setItem("zikr",JSON.stringify(n))}(e)},children:(0,i.jsx)("i",{className:"fa fa-plus"})})})}),r[e-1]>0?(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("div",{className:"plus-btn-wrap reset-btn-wrap",children:(0,i.jsx)("a",{onClick:function(){return function(e){var n=(0,c.Z)({},r);n[e-1]=0,l(n),localStorage.setItem("zikr",JSON.stringify(n))}(e)},children:(0,i.jsx)("img",{src:"/PrayerTimings/images/reset.png"})})})}):null]})]})]})}))]})}function u(){return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(r.Z,{}),(0,i.jsxs)("section",{className:"main-container",children:[(0,i.jsx)(l,{}),(0,i.jsx)(d,{})]})]})}}}]);
//# sourceMappingURL=TasbihCounter.cc803c00.chunk.js.map