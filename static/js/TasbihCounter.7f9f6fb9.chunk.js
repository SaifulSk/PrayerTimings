"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[333],{8511:function(n,e,s){s.d(e,{Z:function(){return f}});var a=s(9439),i=s(2791),r=s(7689),t=s(1087),c=s(5486),l=s(8399),o=s(184);function d(n){var e=n.onSuccess,s=n.onClose,a=n.shouldShow,r=n.message,t=n.type;return(0,o.jsx)(i.Fragment,{children:(0,o.jsxs)(l.Z,{show:a,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,o.jsx)(l.Z.Body,{children:(0,o.jsx)("div",{className:"modal-body",children:(0,o.jsx)("h4",{className:"msg-text",children:r})})}),(0,o.jsxs)(l.Z.Footer,{children:[(0,o.jsx)("div",{className:"btn-wrap mb-3",children:(0,o.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",onClick:s,children:2==t?"No":"Ok"})}),2==t&&(0,o.jsx)("div",{className:"btn-wrap mb-3",children:(0,o.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:e,children:"Yes"})})]})]})})}var u=s(2426),m=s.n(u);function h(n){var e=n.shouldShow,s=n.setShowRamadanModal,r=(0,i.useState)(),t=(0,a.Z)(r,2),c=t[0],d=t[1];return(0,i.useEffect)((function(){var n=m()(),e=m()("24-03","DD-MM");d(n.diff(e,"days")+1)}),[]),(0,o.jsx)(i.Fragment,{children:(0,o.jsxs)(l.Z,{show:e,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,o.jsxs)(l.Z.Header,{children:["Ramadan Day ",c,(0,o.jsx)("button",{type:"button",className:"",onClick:function(){return s(!1)},style:{background:"none",border:"none",color:"#fff"},children:(0,o.jsx)("i",{className:"fa fa-times"})})]}),(0,o.jsx)(l.Z.Body,{children:(0,o.jsx)("div",{className:"modal-body content",children:c&&(0,o.jsx)("img",{className:"ramadan-day-img",src:"http://www.quranreading.com/blog/wp-content/uploads/2014/07/"+c+".png"})})})]})})}var f=function(){var n=(0,i.useState)(!1),e=(0,a.Z)(n,2),s=e[0],l=e[1],u=(0,i.useState)(!1),m=(0,a.Z)(u,2),f=m[0],j=m[1],x=(0,r.s0)(),g=function(n){var e=document.getElementById("sidebarCollapse"),s=document.getElementById("sidebar"),a=document.getElementById("overlay");n?e&&(null===s||void 0===s||s.classList.add("active"),null===a||void 0===a||a.classList.add("active")):e&&(null===s||void 0===s||s.classList.remove("active"),null===a||void 0===a||a.classList.remove("active"))};return(0,i.useEffect)((function(){localStorage.getItem("location")||localStorage.setItem("location",JSON.stringify({label:"Kolkata",value:"+00:00:00"}))}),[]),(0,i.useEffect)((function(){j(!0)}),[]),(0,i.useEffect)((function(){}),[f]),(0,o.jsxs)("section",{className:"top-nav",children:[(0,o.jsxs)("nav",{id:"sidebar",className:"mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar",style:{overflow:"visible"},children:[(0,o.jsx)("div",{id:"dismiss",onClick:function(){return g(!1)},children:(0,o.jsx)("i",{className:"fa fa-arrow-left"})}),(0,o.jsxs)("div",{className:"sidebar-header",style:{fontWeight:"bold"},children:["Islamic ",(0,o.jsx)("span",{style:{color:"#0a9246"},children:"KnowHow"})]}),(0,o.jsxs)("ul",{className:"list-unstyled components",children:[(0,o.jsx)("li",{onClick:function(){return g(!1)},children:(0,o.jsx)(t.rU,{to:c.ns.NAMES_OF_ALLAH,children:"99 Names Of Allah"})}),(0,o.jsx)("li",{onClick:function(){return g(!1)},children:(0,o.jsx)("a",{onClick:function(){l(!0)},children:"Go to Quran.com"})}),(0,o.jsx)("li",{onClick:function(){return g(!1)},children:(0,o.jsx)("a",{href:"https://sunnah.com",target:"_blank",children:"Hadiths"})}),(0,o.jsx)("li",{onClick:function(){return g(!1)},children:(0,o.jsx)(t.rU,{to:c.ns.HOME,children:"Prayer Timings"})}),(0,o.jsx)("li",{onClick:function(){g(!1),window.open("/PrayerTimings/qaida.pdf","_blank")},children:(0,o.jsx)("a",{children:"Learn Arabic"})}),(0,o.jsx)("li",{onClick:function(){return g(!1)},children:(0,o.jsx)(t.rU,{to:c.ns.TASBIH_COUNTER,children:"Tasbih Counter"})}),(0,o.jsx)("li",{onClick:function(){return g(!1)},children:(0,o.jsx)(t.rU,{to:c.ns.HIJRI_CALENDAR,children:"Hijri Calendar"})}),(0,o.jsx)("li",{onClick:function(){return g(!1)},children:(0,o.jsx)("a",{href:"https://muslimnames.com",target:"_blank",children:"Muslim Names"})})]})]}),(0,o.jsx)("nav",{className:"navbar navbar-light",children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("button",{type:"button",id:"sidebarCollapse",className:"btn-none",children:(0,o.jsx)("span",{className:"open-nav",onClick:function(){return g(!0)},children:(0,o.jsx)("img",{src:"/PrayerTimings/images/menu.svg",alt:"menu"})})}),(0,o.jsx)("button",{className:"navbar-toggler btn-none d-inline-block ml-auto user-image",type:"button",onClick:function(){x(c.ns.HOME)},children:(0,o.jsx)("img",{src:"/PrayerTimings/images/logo.png"})})]})}),(0,o.jsx)("div",{className:"overlay",id:"overlay",onClick:function(){return g(!1)}}),s&&(0,o.jsx)(d,{shouldShow:s,onClose:function(){l(!1)},onSuccess:function(){window.open("https://quran.com","_blank"),l(!1)},message:"Wudu is must before opening this. Are you ready?",type:2}),f&&(0,o.jsx)(h,{shouldShow:f,setShowRamadanModal:j})]})}},5675:function(n,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=s(2791),i=s(8511),r=s(9439),t=s(184);function c(){var n=(0,a.useState)(0),e=(0,r.Z)(n,2),s=e[0],i=e[1];return(0,a.useEffect)((function(){var n=Number(localStorage.getItem("tasbihCount"));return n>0&&i(n),function(){}}),[]),(0,a.useEffect)((function(){localStorage.setItem("tasbihCount",String(s))}),[s]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:"page-title",children:"Tasbih Counter"}),(0,t.jsx)("span",{className:"count-val",children:s}),(0,t.jsx)("div",{className:"plus-btn-wrap",children:(0,t.jsx)("a",{onClick:function(){return i(s+1)},children:(0,t.jsx)("i",{className:"fa fa-plus"})})}),s>0&&(0,t.jsx)("div",{className:"plus-btn-wrap reset-btn-wrap",children:(0,t.jsx)("a",{onClick:function(){return i(0)},children:(0,t.jsx)("img",{src:"/PrayerTimings/images/reset.png"})})})]})}var l=s(1413),o=s(5486);function d(){var n=Array.from({length:12},(function(n,e){return e+1})),e=(0,a.useState)(Array.from({length:12},(function(n,e){return 0}))),s=(0,r.Z)(e,2),i=s[0],c=s[1];return(0,a.useEffect)((function(){var n=localStorage.getItem("zikr");n&&c(JSON.parse(n))}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{className:"page-title",children:"Zikr Counters"}),(0,t.jsx)("div",{className:"desc-text",children:"The remembrance of Allah. The effort of total concentration with sincerity on God, to realise His nearness and company, and removing all other thoughts is called zikr. Everything which can be instrumental in invoking God, such as a name, a sign, an act, a word, a prayer, or recitations of the Holy Quran, or invoking blessings on the Holy Quran, or invoking blessings on the Holy Prophet (durood sharif), or entreaties, or spiritual conditions and similar acts which enhance the remembrance of the beloved and increase communion with Him, are covered by the term zikr."}),n.map((function(n){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h4",{children:[n,". ",Object.keys(o.uG)[n-1]]}),(0,t.jsxs)("div",{className:"zikr-wrap",children:[(0,t.jsx)("div",{className:"zikr-img",children:(0,t.jsx)("img",{src:"images/Zikr/"+n+".png"})}),(0,t.jsx)("div",{className:"zikr-meaning",children:Object.values(o.uG)[n-1]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-6",children:(0,t.jsx)("span",{className:"count-val",children:i[n-1]})}),(0,t.jsx)("div",{className:"col-"+(i[n-1]>0?"3":"6"),children:(0,t.jsx)("div",{className:"plus-btn-wrap",children:(0,t.jsx)("a",{onClick:function(){return function(n){var e=(0,l.Z)({},i);e[n-1]=e[n-1]+1,c(e),localStorage.setItem("zikr",JSON.stringify(e))}(n)},children:(0,t.jsx)("i",{className:"fa fa-plus"})})})}),i[n-1]>0?(0,t.jsx)("div",{className:"col-3",children:(0,t.jsx)("div",{className:"plus-btn-wrap reset-btn-wrap",children:(0,t.jsx)("a",{onClick:function(){return function(n){var e=(0,l.Z)({},i);e[n-1]=0,c(e),localStorage.setItem("zikr",JSON.stringify(e))}(n)},children:(0,t.jsx)("img",{src:"/PrayerTimings/images/reset.png"})})})}):null]})]})]})}))]})}function u(){return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(i.Z,{}),(0,t.jsxs)("section",{className:"main-container",children:[(0,t.jsx)(c,{}),(0,t.jsx)(d,{})]})]})}}}]);
//# sourceMappingURL=TasbihCounter.7f9f6fb9.chunk.js.map