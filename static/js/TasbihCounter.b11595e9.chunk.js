"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[333],{1311:function(n,e,s){s.d(e,{Z:function(){return u}});var i=s(9439),t=s(2791),r=s(7689),a=s(1087),l=s(8868),c=s(8399),o=s(184);function d(n){var e=n.onSuccess,s=n.onClose,i=n.shouldShow,r=n.message,a=n.type;return(0,o.jsx)(t.Fragment,{children:(0,o.jsxs)(c.Z,{show:i,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,o.jsx)(c.Z.Body,{children:(0,o.jsx)("div",{className:"modal-body",children:(0,o.jsx)("h4",{className:"rider-name-content",children:r})})}),(0,o.jsxs)(c.Z.Footer,{children:[(0,o.jsx)("div",{className:"btn-wrap mb-3",children:(0,o.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",onClick:s,children:2==a?"No":"Ok"})}),2==a&&(0,o.jsx)("div",{className:"btn-wrap mb-3",children:(0,o.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:e,children:"Yes"})})]})]})})}var u=function(){var n=(0,t.useState)(!1),e=(0,i.Z)(n,2),s=e[0],c=e[1],u=(0,r.s0)(),m=function(n){var e=document.getElementById("sidebarCollapse"),s=document.getElementById("sidebar"),i=document.getElementById("overlay");n?e&&(null===s||void 0===s||s.classList.add("active"),null===i||void 0===i||i.classList.add("active")):e&&(null===s||void 0===s||s.classList.remove("active"),null===i||void 0===i||i.classList.remove("active"))};return(0,o.jsxs)("section",{className:"top-nav",children:[(0,o.jsxs)("nav",{id:"sidebar",className:"mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar",style:{overflow:"visible"},children:[(0,o.jsx)("div",{id:"dismiss",onClick:function(){return m(!1)},children:(0,o.jsx)("i",{className:"fa fa-arrow-left"})}),(0,o.jsxs)("div",{className:"sidebar-header",style:{fontWeight:"bold"},children:["Islamic ",(0,o.jsx)("span",{style:{color:"#0a9246"},children:"KnowHow"})]}),(0,o.jsxs)("ul",{className:"list-unstyled components",children:[(0,o.jsx)("li",{onClick:function(){return m(!1)},children:(0,o.jsx)("a",{onClick:function(){c(!0)},children:"Go to Quran.com"})}),(0,o.jsx)("li",{onClick:function(){return m(!1)},children:(0,o.jsx)(a.rU,{to:l.ns.HOME,children:"Prayer Timings"})}),(0,o.jsx)("li",{onClick:function(){return m(!1)},children:(0,o.jsx)("a",{href:"https://muslimnames.com",target:"_blank",children:"Muslim Baby Names"})}),(0,o.jsx)("li",{onClick:function(){return m(!1)},children:(0,o.jsx)(a.rU,{to:l.ns.LEARN_ARABIC,children:"Learn Arabic"})}),(0,o.jsx)("li",{onClick:function(){return m(!1)},children:(0,o.jsx)(a.rU,{to:l.ns.TASBIH_COUNTER,children:"Tasbih Counter"})}),(0,o.jsx)("li",{onClick:function(){return m(!1)},children:(0,o.jsx)(a.rU,{to:l.ns.HIJRI_CALENDAR,children:"Hijri Calendar"})})]})]}),(0,o.jsx)("nav",{className:"navbar navbar-light",children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("button",{type:"button",id:"sidebarCollapse",className:"btn-none",children:(0,o.jsx)("span",{className:"open-nav",onClick:function(){return m(!0)},children:(0,o.jsx)("img",{src:"/PrayerTimings/images/menu.svg",alt:"menu"})})}),(0,o.jsx)("button",{className:"navbar-toggler btn-none d-inline-block ml-auto user-image",type:"button",onClick:function(){u(l.ns.HOME)},children:(0,o.jsx)("img",{src:"/PrayerTimings/images/logo.png"})})]})}),(0,o.jsx)("div",{className:"overlay",id:"overlay",onClick:function(){return m(!1)}}),s&&(0,o.jsx)(d,{shouldShow:s,onClose:function(){c(!1)},onSuccess:function(){window.open("https://quran.com","_blank")},message:"Wudu is must before opening this. Are you ready?",type:2})]})}},5884:function(n,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=s(2791),t=s(1311),r=s(9439),a=s(184);function l(){var n=(0,i.useState)(0),e=(0,r.Z)(n,2),s=e[0],t=e[1];return(0,i.useEffect)((function(){var n=Number(localStorage.getItem("tasbihCount"));return n>0&&t(n),function(){console.log("Out",s)}}),[]),(0,i.useEffect)((function(){localStorage.setItem("tasbihCount",String(s))}),[s]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"page-title",children:"Tasbih Counter"}),(0,a.jsx)("span",{className:"count-val",children:s}),(0,a.jsx)("div",{className:"plus-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return t(s+1)},children:(0,a.jsx)("i",{className:"fa fa-plus"})})}),s>0&&(0,a.jsx)("div",{className:"plus-btn-wrap reset-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return t(0)},children:(0,a.jsx)("img",{src:"/PrayerTimings/images/reset.png"})})})]})}function c(){return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(t.Z,{}),(0,a.jsx)("section",{className:"main-container",children:(0,a.jsx)(l,{})})]})}}}]);
//# sourceMappingURL=TasbihCounter.b11595e9.chunk.js.map