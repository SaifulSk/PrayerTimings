"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[333],{2371:function(n,e,s){s.d(e,{Z:function(){return f}});var t=s(9439),i=s(2791),r=s(7689),a=s(1087),o=s(5486),c=s(6563),l=s(184);function u(n){var e=n.onSuccess,s=n.onClose,t=n.shouldShow,r=n.message,a=n.type;return(0,l.jsx)(i.Fragment,{children:(0,l.jsxs)(c.Z,{show:t,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,l.jsx)(c.Z.Body,{children:(0,l.jsx)("div",{className:"modal-body",children:(0,l.jsx)("h4",{className:"msg-text",children:r})})}),(0,l.jsxs)(c.Z.Footer,{children:[(0,l.jsx)("div",{className:"btn-wrap mb-3",children:(0,l.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",onClick:s,children:2==a?"No":"Ok"})}),2==a&&(0,l.jsx)("div",{className:"btn-wrap mb-3",children:(0,l.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:e,children:"Yes"})})]})]})})}function d(n){var e=n.type;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h4",{className:"msg-text",children:e||"Qur'an"}),(0,l.jsx)("div",{style:{height:230,textAlign:"center"},children:(0,l.jsx)("iframe",{src:"https://alim.org/widgets/"+((null===e||void 0===e?void 0:e.toLowerCase())||"insight"),height:"100%",width:"100%"})})]})}function h(n){var e=n.shouldShow,s=n.setShowInsightsModal;return(0,i.useEffect)((function(){var n=document.getElementById("azan");n&&n.play()}),[]),(0,l.jsx)(i.Fragment,{children:(0,l.jsxs)(c.Z,{show:e,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,l.jsxs)(c.Z.Header,{children:["Insights of the Day",(0,l.jsx)("button",{type:"button",className:"",onClick:function(){return s(!1)},style:{background:"none",border:"none",color:"#fff"},children:(0,l.jsx)("i",{className:"fa fa-times"})})]}),(0,l.jsx)(c.Z.Body,{children:(0,l.jsxs)("div",{className:"modal-body content",children:[(0,l.jsx)(d,{}),(0,l.jsx)(d,{type:"Hadith"})]})})]})})}var m=s(577);var f=function(){var n=(0,i.useState)(!1),e=(0,t.Z)(n,2),s=e[0],c=e[1],d=(0,i.useState)(!1),f=(0,t.Z)(d,2),g=f[0],x=(f[1],(0,r.s0)()),j={error:function(n){m.Am.error(n)},show:function(n){(0,m.Am)(n)},success:function(n){m.Am.success(n)},warning:function(n){m.Am.warning(n)}},b=(0,i.useState)(!1),v=(0,t.Z)(b,2),p=v[0],k=v[1],y=function(n){var e=document.getElementById("sidebarCollapse"),s=document.getElementById("sidebar"),t=document.getElementById("overlay");n?e&&(null===s||void 0===s||s.classList.add("active"),null===t||void 0===t||t.classList.add("active")):e&&(null===s||void 0===s||s.classList.remove("active"),null===t||void 0===t||t.classList.remove("active"))},N=function(n){navigator.geolocation&&navigator.geolocation.getCurrentPosition("mosque"==n?w:C,(function(){return j.error("Please turn on the location")}))},w=function(n){window.open("https://www.google.com/maps/search/mosque+nearby/@"+n.coords.latitude+","+n.coords.longitude,"_blank")},C=function(n){console.log({position:n}),window.open("https://myislam.org/qibla-ar","_blank")};return(0,i.useEffect)((function(){localStorage.getItem("location")||localStorage.setItem("location",JSON.stringify({label:"Kolkata",value:"+00:00:00"}))}),[]),(0,i.useEffect)((function(){}),[]),(0,i.useEffect)((function(){}),[g]),(0,i.useEffect)((function(){var n=localStorage.getItem("day"),e=(new Date).getDate()+"";n?e!=n&&(k(!0),localStorage.setItem("day",e)):(k(!0),localStorage.setItem("day",e))}),[]),(0,l.jsxs)("section",{className:"top-nav",children:[(0,l.jsxs)("nav",{id:"sidebar",className:"mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar",style:{overflow:"visible"},children:[(0,l.jsx)("div",{id:"dismiss",onClick:function(){return y(!1)},children:(0,l.jsx)("i",{className:"fa fa-times"})}),(0,l.jsxs)("div",{className:"sidebar-header",style:{fontWeight:"bold"},children:["Islamic ",(0,l.jsx)("span",{style:{color:"#0a9246"},children:"KnowHow"})]}),(0,l.jsxs)("ul",{className:"list-unstyled components",children:[(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)(a.rU,{to:o.ns.NAMES_OF_ALLAH,children:"99 Names Of Allah"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)("a",{onClick:function(){c(!0)},children:"Go to Quran.com"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)("a",{href:"https://sunnah.com",target:"_blank",children:"Hadiths"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)("a",{onClick:function(){return N("qibla")},children:"Qibla Direction"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)(a.rU,{to:o.ns.DUAS,children:"Duas"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)("a",{href:"https://www.youtube.com/playlist?list=PLqIZQ02Yb0hmre39-7qk-4e3-eJ4WtM1c",target:"_blank",children:"Prophets' Life Videos"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)(a.rU,{to:o.ns.HOME,children:"Prayer Timings"})}),(0,l.jsx)("li",{onClick:function(){y(!1),window.open("/PrayerTimings/qaida.pdf","_blank")},children:(0,l.jsx)("a",{children:"Learn Arabic"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)(a.rU,{to:o.ns.TASBIH_COUNTER,children:"Tasbih Counter"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)(a.rU,{to:o.ns.HIJRI_CALENDAR,children:"Hijri Calendar"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)("a",{href:"https://muslimnames.com",target:"_blank",children:"Muslim Names"})}),(0,l.jsx)("li",{onClick:function(){return y(!1)},children:(0,l.jsx)("a",{onClick:function(){return N("mosque")},children:"Mosques Near Me"})})]})]}),(0,l.jsx)("nav",{className:"navbar navbar-light",children:(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsx)("button",{type:"button",id:"sidebarCollapse",className:"btn-none",children:(0,l.jsx)("span",{className:"open-nav",onClick:function(){return y(!0)},children:(0,l.jsx)("img",{src:"/PrayerTimings/images/menu.png",alt:"menu"})})}),(0,l.jsx)("button",{className:"navbar-toggler btn-none d-inline-block ml-auto user-image",type:"button",onClick:function(){x(o.ns.HOME)},children:(0,l.jsx)("img",{src:"/PrayerTimings/images/logo.png"})})]})}),(0,l.jsx)("div",{className:"insight-btn-wrap",children:(0,l.jsx)("button",{className:"btn insight-btn",onClick:function(){return k(!0)},children:"Insights of the Day"})}),(0,l.jsx)("div",{className:"overlay",id:"overlay",onClick:function(){return y(!1)}}),s&&(0,l.jsx)(u,{shouldShow:s,onClose:function(){c(!1)},onSuccess:function(){window.open("https://quran.com","_blank"),c(!1)},message:"Wudu is must for opening Al Qur'an. Have you done wudu?",type:2}),p&&(0,l.jsx)(h,{shouldShow:p,setShowInsightsModal:k})]})}},5675:function(n,e,s){s.r(e),s.d(e,{default:function(){return d}});var t=s(2791),i=s(2371),r=s(9439),a=s(184);function o(){var n=(0,t.useState)(0),e=(0,r.Z)(n,2),s=e[0],i=e[1];return(0,t.useEffect)((function(){var n=Number(localStorage.getItem("tasbihCount"));return n>0&&i(n),function(){}}),[]),(0,t.useEffect)((function(){localStorage.setItem("tasbihCount",String(s))}),[s]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"page-title",children:"Tasbih Counter"}),(0,a.jsx)("span",{className:"count-val",children:s}),(0,a.jsx)("div",{className:"plus-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return i(s+1)},children:(0,a.jsx)("i",{className:"fa fa-plus"})})}),s>0&&(0,a.jsx)("div",{className:"plus-btn-wrap reset-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return i(0)},children:(0,a.jsx)("img",{src:"/PrayerTimings/images/reset.png"})})})]})}var c=s(1413),l=s(5486);function u(){var n=Array.from({length:12},(function(n,e){return e+1})),e=(0,t.useState)(Array.from({length:12},(function(n,e){return 0}))),s=(0,r.Z)(e,2),i=s[0],o=s[1];return(0,t.useEffect)((function(){var n=localStorage.getItem("zikr");n&&o(JSON.parse(n))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"page-title",children:"Zikr Counters"}),(0,a.jsx)("div",{className:"desc-text",children:"The remembrance of Allah. The effort of total concentration with sincerity on God, to realise His nearness and company, and removing all other thoughts is called zikr. Everything which can be instrumental in invoking God, such as a name, a sign, an act, a word, a prayer, or recitations of the Holy Quran, or invoking blessings on the Holy Quran, or invoking blessings on the Holy Prophet (durood sharif), or entreaties, or spiritual conditions and similar acts which enhance the remembrance of the beloved and increase communion with Him, are covered by the term zikr."}),n.map((function(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h4",{children:[n,". ",Object.keys(l.uG)[n-1]]}),(0,a.jsxs)("div",{className:"zikr-wrap",children:[(0,a.jsx)("div",{className:"zikr-img",children:(0,a.jsx)("img",{src:"images/Zikr/"+n+".png"})}),(0,a.jsx)("div",{className:"zikr-meaning",children:Object.values(l.uG)[n-1]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)("span",{className:"count-val",children:i[n-1]})}),(0,a.jsx)("div",{className:"col-"+(i[n-1]>0?"3":"6"),children:(0,a.jsx)("div",{className:"plus-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return function(n){var e=(0,c.Z)({},i);e[n-1]=e[n-1]+1,o(e),localStorage.setItem("zikr",JSON.stringify(e))}(n)},children:(0,a.jsx)("i",{className:"fa fa-plus"})})})}),i[n-1]>0?(0,a.jsx)("div",{className:"col-3",children:(0,a.jsx)("div",{className:"plus-btn-wrap reset-btn-wrap",children:(0,a.jsx)("a",{onClick:function(){return function(n){var e=(0,c.Z)({},i);e[n-1]=0,o(e),localStorage.setItem("zikr",JSON.stringify(e))}(n)},children:(0,a.jsx)("img",{src:"/PrayerTimings/images/reset.png"})})})}):null]})]})]})}))]})}function d(){return(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsxs)("section",{className:"main-container",children:[(0,a.jsx)(o,{}),(0,a.jsx)(u,{})]})]})}}}]);
//# sourceMappingURL=TasbihCounter.7c0e2e88.chunk.js.map