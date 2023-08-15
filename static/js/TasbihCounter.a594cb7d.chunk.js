"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[333],{1311:function(e,n,s){s.d(n,{Z:function(){return u}});var i=s(9439),r=s(2791),t=s(7689),a=s(1087),l=s(5486),c=s(8399),o=s(184);function d(e){var n=e.onSuccess,s=e.onClose,i=e.shouldShow,t=e.message,a=e.type;return(0,o.jsx)(r.Fragment,{children:(0,o.jsxs)(c.Z,{show:i,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,o.jsx)(c.Z.Body,{children:(0,o.jsx)("div",{className:"modal-body",children:(0,o.jsx)("h4",{className:"msg-text",children:t})})}),(0,o.jsxs)(c.Z.Footer,{children:[(0,o.jsx)("div",{className:"btn-wrap mb-3",children:(0,o.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",onClick:s,children:2==a?"No":"Ok"})}),2==a&&(0,o.jsx)("div",{className:"btn-wrap mb-3",children:(0,o.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:n,children:"Yes"})})]})]})})}var u=function(){var e=(0,r.useState)(!1),n=(0,i.Z)(e,2),s=n[0],c=n[1],u=(0,r.useState)(!1),m=(0,i.Z)(u,2),h=m[0],f=(m[1],(0,t.s0)()),j=function(e){var n=document.getElementById("sidebarCollapse"),s=document.getElementById("sidebar"),i=document.getElementById("overlay");e?n&&(null===s||void 0===s||s.classList.add("active"),null===i||void 0===i||i.classList.add("active")):n&&(null===s||void 0===s||s.classList.remove("active"),null===i||void 0===i||i.classList.remove("active"))};return(0,r.useEffect)((function(){localStorage.getItem("location")||localStorage.setItem("location",JSON.stringify({label:"Kolkata",value:"+00:00:00"}))}),[]),(0,r.useEffect)((function(){}),[]),(0,r.useEffect)((function(){}),[h]),(0,o.jsxs)("section",{className:"top-nav",children:[(0,o.jsxs)("nav",{id:"sidebar",className:"mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar",style:{overflow:"visible"},children:[(0,o.jsx)("div",{id:"dismiss",onClick:function(){return j(!1)},children:(0,o.jsx)("i",{className:"fa fa-arrow-left"})}),(0,o.jsxs)("div",{className:"sidebar-header",style:{fontWeight:"bold"},children:["Islamic ",(0,o.jsx)("span",{style:{color:"#0a9246"},children:"KnowHow"})]}),(0,o.jsxs)("ul",{className:"list-unstyled components",children:[(0,o.jsx)("li",{onClick:function(){return j(!1)},children:(0,o.jsx)(a.rU,{to:l.ns.NAMES_OF_ALLAH,children:"99 Names Of Allah"})}),(0,o.jsx)("li",{onClick:function(){return j(!1)},children:(0,o.jsx)("a",{onClick:function(){c(!0)},children:"Go to Quran.com"})}),(0,o.jsx)("li",{onClick:function(){return j(!1)},children:(0,o.jsx)("a",{href:"https://sunnah.com",target:"_blank",children:"Hadiths"})}),(0,o.jsx)("li",{onClick:function(){return j(!1)},children:(0,o.jsx)("a",{href:"https://www.youtube.com/playlist?list=PLqIZQ02Yb0hmre39-7qk-4e3-eJ4WtM1c",target:"_blank",children:"Prophets Lives Videos"})}),(0,o.jsx)("li",{onClick:function(){return j(!1)},children:(0,o.jsx)(a.rU,{to:l.ns.HOME,children:"Prayer Timings"})}),(0,o.jsx)("li",{onClick:function(){j(!1),window.open("/PrayerTimings/qaida.pdf","_blank")},children:(0,o.jsx)("a",{children:"Learn Arabic"})}),(0,o.jsx)("li",{onClick:function(){return j(!1)},children:(0,o.jsx)(a.rU,{to:l.ns.TASBIH_COUNTER,children:"Tasbih Counter"})}),(0,o.jsx)("li",{onClick:function(){return j(!1)},children:(0,o.jsx)(a.rU,{to:l.ns.HIJRI_CALENDAR,children:"Hijri Calendar"})}),(0,o.jsx)("li",{onClick:function(){return j(!1)},children:(0,o.jsx)("a",{href:"https://muslimnames.com",target:"_blank",children:"Muslim Names"})})]})]}),(0,o.jsx)("nav",{className:"navbar navbar-light",children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("button",{type:"button",id:"sidebarCollapse",className:"btn-none",children:(0,o.jsx)("span",{className:"open-nav",onClick:function(){return j(!0)},children:(0,o.jsx)("img",{src:"/PrayerTimings/images/menu.svg",alt:"menu"})})}),(0,o.jsx)("button",{className:"navbar-toggler btn-none d-inline-block ml-auto user-image",type:"button",onClick:function(){f(l.ns.HOME)},children:(0,o.jsx)("img",{src:"/PrayerTimings/images/logo.png"})})]})}),(0,o.jsx)("div",{className:"overlay",id:"overlay",onClick:function(){return j(!1)}}),s&&(0,o.jsx)(d,{shouldShow:s,onClose:function(){c(!1)},onSuccess:function(){window.open("https://quran.com","_blank"),c(!1)},message:"Wudu is must before opening this. Are you ready?",type:2})]})}},5675:function(e,n,s){s.r(n),s.d(n,{default:function(){return u}});var i=s(2791),r=s(1311),t=s(9439),a=s(184);function l(){var e=(0,i.useState)(0),n=(0,t.Z)(e,2),s=n[0],r=n[1];return(0,i.useEffect)((function(){var e=Number(localStorage.getItem("tasbihCount"));return e>0&&r(e),function(){}}),[]),(0,i.useEffect)((function(){localStorage.setItem("tasbihCount",String(s))}),[s]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"page-title",children:"Tasbih Counter"}),(0,a.jsx)("span",{className:"count-val",children:s}),(0,a.jsx)("div",{className:"plus-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return r(s+1)},children:(0,a.jsx)("i",{className:"fa fa-plus"})})}),s>0&&(0,a.jsx)("div",{className:"plus-btn-wrap reset-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return r(0)},children:(0,a.jsx)("img",{src:"/PrayerTimings/images/reset.png"})})})]})}var c=s(1413),o=s(5486);function d(){var e=Array.from({length:12},(function(e,n){return n+1})),n=(0,i.useState)(Array.from({length:12},(function(e,n){return 0}))),s=(0,t.Z)(n,2),r=s[0],l=s[1];return(0,i.useEffect)((function(){var e=localStorage.getItem("zikr");e&&l(JSON.parse(e))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"page-title",children:"Zikr Counters"}),(0,a.jsx)("div",{className:"desc-text",children:"The remembrance of Allah. The effort of total concentration with sincerity on God, to realise His nearness and company, and removing all other thoughts is called zikr. Everything which can be instrumental in invoking God, such as a name, a sign, an act, a word, a prayer, or recitations of the Holy Quran, or invoking blessings on the Holy Quran, or invoking blessings on the Holy Prophet (durood sharif), or entreaties, or spiritual conditions and similar acts which enhance the remembrance of the beloved and increase communion with Him, are covered by the term zikr."}),e.map((function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h4",{children:[e,". ",Object.keys(o.uG)[e-1]]}),(0,a.jsxs)("div",{className:"zikr-wrap",children:[(0,a.jsx)("div",{className:"zikr-img",children:(0,a.jsx)("img",{src:"images/Zikr/"+e+".png"})}),(0,a.jsx)("div",{className:"zikr-meaning",children:Object.values(o.uG)[e-1]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)("span",{className:"count-val",children:r[e-1]})}),(0,a.jsx)("div",{className:"col-"+(r[e-1]>0?"3":"6"),children:(0,a.jsx)("div",{className:"plus-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return function(e){var n=(0,c.Z)({},r);n[e-1]=n[e-1]+1,l(n),localStorage.setItem("zikr",JSON.stringify(n))}(e)},children:(0,a.jsx)("i",{className:"fa fa-plus"})})})}),r[e-1]>0?(0,a.jsx)("div",{className:"col-3",children:(0,a.jsx)("div",{className:"plus-btn-wrap reset-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return function(e){var n=(0,c.Z)({},r);n[e-1]=0,l(n),localStorage.setItem("zikr",JSON.stringify(n))}(e)},children:(0,a.jsx)("img",{src:"/PrayerTimings/images/reset.png"})})})}):null]})]})]})}))]})}function u(){return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(r.Z,{}),(0,a.jsxs)("section",{className:"main-container",children:[(0,a.jsx)(l,{}),(0,a.jsx)(d,{})]})]})}}}]);
//# sourceMappingURL=TasbihCounter.a594cb7d.chunk.js.map