"use strict";(self.webpackChunkprayer_timing=self.webpackChunkprayer_timing||[]).push([[200],{8511:function(t,n,e){e.d(n,{Z:function(){return m}});var i=e(9439),a=e(2791),r=e(7689),s=e(1087),o=e(5486),c=e(8399),l=e(184);function u(t){var n=t.onSuccess,e=t.onClose,i=t.shouldShow,r=t.message,s=t.type;return(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(c.Z,{show:i,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,l.jsx)(c.Z.Body,{children:(0,l.jsx)("div",{className:"modal-body",children:(0,l.jsx)("h4",{className:"msg-text",children:r})})}),(0,l.jsxs)(c.Z.Footer,{children:[(0,l.jsx)("div",{className:"btn-wrap mb-3",children:(0,l.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-orange ripple-effect w-100 mt-3",onClick:e,children:2==s?"No":"Ok"})}),2==s&&(0,l.jsx)("div",{className:"btn-wrap mb-3",children:(0,l.jsx)("button",{type:"button",className:"rkmd-btn btn-lg btn-red ripple-effect w-100 mt-3",onClick:n,children:"Yes"})})]})]})})}var h=e(2426),d=e.n(h);function f(t){var n=t.shouldShow,e=t.setShowRamadanModal,r=(0,a.useState)(),s=(0,i.Z)(r,2),o=s[0],u=s[1];return(0,a.useEffect)((function(){var t=d()(),n=d()("24-03","DD-MM");u(t.diff(n,"days")+1)}),[]),(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(c.Z,{show:n,backdrop:"static",keyboard:!1,centered:!0,contentClassName:"custom-modal",children:[(0,l.jsxs)(c.Z.Header,{children:["Ramadan Day ",o,(0,l.jsx)("button",{type:"button",className:"",onClick:function(){return e(!1)},style:{background:"none",border:"none",color:"#fff"},children:(0,l.jsx)("i",{className:"fa fa-times"})})]}),(0,l.jsx)(c.Z.Body,{children:(0,l.jsx)("div",{className:"modal-body content",children:(0,l.jsx)("img",{className:"ramadan-day-img",src:"http://www.quranreading.com/blog/wp-content/uploads/2014/07/"+o+".png"})})})]})})}var m=function(){var t=(0,a.useState)(!1),n=(0,i.Z)(t,2),e=n[0],c=n[1],h=(0,a.useState)(!1),d=(0,i.Z)(h,2),m=d[0],g=d[1],D=(0,r.s0)(),M=function(t){var n=document.getElementById("sidebarCollapse"),e=document.getElementById("sidebar"),i=document.getElementById("overlay");t?n&&(null===e||void 0===e||e.classList.add("active"),null===i||void 0===i||i.classList.add("active")):n&&(null===e||void 0===e||e.classList.remove("active"),null===i||void 0===i||i.classList.remove("active"))};return(0,a.useEffect)((function(){localStorage.getItem("location")||localStorage.setItem("location",JSON.stringify({label:"Kolkata",value:"+00:00:00"}))}),[]),(0,a.useEffect)((function(){g(!0)}),[]),(0,a.useEffect)((function(){}),[m]),(0,l.jsxs)("section",{className:"top-nav",children:[(0,l.jsxs)("nav",{id:"sidebar",className:"mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar",style:{overflow:"visible"},children:[(0,l.jsx)("div",{id:"dismiss",onClick:function(){return M(!1)},children:(0,l.jsx)("i",{className:"fa fa-arrow-left"})}),(0,l.jsxs)("div",{className:"sidebar-header",style:{fontWeight:"bold"},children:["Islamic ",(0,l.jsx)("span",{style:{color:"#0a9246"},children:"KnowHow"})]}),(0,l.jsxs)("ul",{className:"list-unstyled components",children:[(0,l.jsx)("li",{onClick:function(){return M(!1)},children:(0,l.jsx)(s.rU,{to:o.ns.NAMES_OF_ALLAH,children:"99 Names Of Allah"})}),(0,l.jsx)("li",{onClick:function(){return M(!1)},children:(0,l.jsx)("a",{onClick:function(){c(!0)},children:"Go to Quran.com"})}),(0,l.jsx)("li",{onClick:function(){return M(!1)},children:(0,l.jsx)("a",{href:"https://sunnah.com",target:"_blank",children:"Hadiths"})}),(0,l.jsx)("li",{onClick:function(){return M(!1)},children:(0,l.jsx)(s.rU,{to:o.ns.HOME,children:"Prayer Timings"})}),(0,l.jsx)("li",{onClick:function(){M(!1),window.open("/PrayerTimings/qaida.pdf","_blank")},children:(0,l.jsx)("a",{children:"Learn Arabic"})}),(0,l.jsx)("li",{onClick:function(){return M(!1)},children:(0,l.jsx)(s.rU,{to:o.ns.TASBIH_COUNTER,children:"Tasbih Counter"})}),(0,l.jsx)("li",{onClick:function(){return M(!1)},children:(0,l.jsx)(s.rU,{to:o.ns.HIJRI_CALENDAR,children:"Hijri Calendar"})}),(0,l.jsx)("li",{onClick:function(){return M(!1)},children:(0,l.jsx)("a",{href:"https://muslimnames.com",target:"_blank",children:"Muslim Names"})})]})]}),(0,l.jsx)("nav",{className:"navbar navbar-light",children:(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsx)("button",{type:"button",id:"sidebarCollapse",className:"btn-none",children:(0,l.jsx)("span",{className:"open-nav",onClick:function(){return M(!0)},children:(0,l.jsx)("img",{src:"/PrayerTimings/images/menu.svg",alt:"menu"})})}),(0,l.jsx)("button",{className:"navbar-toggler btn-none d-inline-block ml-auto user-image",type:"button",onClick:function(){D(o.ns.HOME)},children:(0,l.jsx)("img",{src:"/PrayerTimings/images/logo.png"})})]})}),(0,l.jsx)("div",{className:"overlay",id:"overlay",onClick:function(){return M(!1)}}),e&&(0,l.jsx)(u,{shouldShow:e,onClose:function(){c(!1)},onSuccess:function(){window.open("https://quran.com","_blank"),c(!1)},message:"Wudu is must before opening this. Are you ready?",type:2}),m&&(0,l.jsx)(f,{shouldShow:m,setShowRamadanModal:g})]})}},7027:function(t,n,e){e.r(n),e.d(n,{default:function(){return c}});var i=e(2791),a=e(8511),r=e(4948),s=e.n(r),o=e(184);function c(){return(0,i.useEffect)((function(){console.log(s()(new Date).format("iD/iM/iYY"))}),[]),(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(a.Z,{}),(0,o.jsx)("section",{className:"main-container",children:(0,o.jsx)("h2",{className:"page-title",children:"Hijri Calendar"})})]})}},4948:function(t,n,e){var i,a,r;r=this,i=[e(2426)],void 0===(a=function(t){return r.moment=function(t){if(null==t)throw new Error("Cannot find moment");var n,e={ummalquraData:[28607,28636,28665,28695,28724,28754,28783,28813,28843,28872,28901,28931,28960,28990,29019,29049,29078,29108,29137,29167,29196,29226,29255,29285,29315,29345,29375,29404,29434,29463,29492,29522,29551,29580,29610,29640,29669,29699,29729,29759,29788,29818,29847,29876,29906,29935,29964,29994,30023,30053,30082,30112,30141,30171,30200,30230,30259,30289,30318,30348,30378,30408,30437,30467,30496,30526,30555,30585,30614,30644,30673,30703,30732,30762,30791,30821,30850,30880,30909,30939,30968,30998,31027,31057,31086,31116,31145,31175,31204,31234,31263,31293,31322,31352,31381,31411,31441,31471,31500,31530,31559,31589,31618,31648,31676,31706,31736,31766,31795,31825,31854,31884,31913,31943,31972,32002,32031,32061,32090,32120,32150,32180,32209,32239,32268,32298,32327,32357,32386,32416,32445,32475,32504,32534,32563,32593,32622,32652,32681,32711,32740,32770,32799,32829,32858,32888,32917,32947,32976,33006,33035,33065,33094,33124,33153,33183,33213,33243,33272,33302,33331,33361,33390,33420,33450,33479,33509,33539,33568,33598,33627,33657,33686,33716,33745,33775,33804,33834,33863,33893,33922,33952,33981,34011,34040,34069,34099,34128,34158,34187,34217,34247,34277,34306,34336,34365,34395,34424,34454,34483,34512,34542,34571,34601,34631,34660,34690,34719,34749,34778,34808,34837,34867,34896,34926,34955,34985,35015,35044,35074,35103,35133,35162,35192,35222,35251,35280,35310,35340,35370,35399,35429,35458,35488,35517,35547,35576,35605,35635,35665,35694,35723,35753,35782,35811,35841,35871,35901,35930,35960,35989,36019,36048,36078,36107,36136,36166,36195,36225,36254,36284,36314,36343,36373,36403,36433,36462,36492,36521,36551,36580,36610,36639,36669,36698,36728,36757,36786,36816,36845,36875,36904,36934,36963,36993,37022,37052,37081,37111,37141,37170,37200,37229,37259,37288,37318,37347,37377,37406,37436,37465,37495,37524,37554,37584,37613,37643,37672,37701,37731,37760,37790,37819,37849,37878,37908,37938,37967,37997,38027,38056,38085,38115,38144,38174,38203,38233,38262,38292,38322,38351,38381,38410,38440,38469,38499,38528,38558,38587,38617,38646,38676,38705,38735,38764,38794,38823,38853,38882,38912,38941,38971,39001,39030,39059,39089,39118,39148,39178,39208,39237,39267,39297,39326,39355,39385,39414,39444,39473,39503,39532,39562,39592,39621,39650,39680,39709,39739,39768,39798,39827,39857,39886,39916,39946,39975,40005,40035,40064,40094,40123,40153,40182,40212,40241,40271,40300,40330,40359,40389,40418,40448,40477,40507,40536,40566,40595,40625,40655,40685,40714,40744,40773,40803,40832,40862,40892,40921,40951,40980,41009,41039,41068,41098,41127,41157,41186,41216,41245,41275,41304,41334,41364,41393,41422,41452,41481,41511,41540,41570,41599,41629,41658,41688,41718,41748,41777,41807,41836,41865,41894,41924,41953,41983,42012,42042,42072,42102,42131,42161,42190,42220,42249,42279,42308,42337,42367,42397,42426,42456,42485,42515,42545,42574,42604,42633,42662,42692,42721,42751,42780,42810,42839,42869,42899,42929,42958,42988,43017,43046,43076,43105,43135,43164,43194,43223,43253,43283,43312,43342,43371,43401,43430,43460,43489,43519,43548,43578,43607,43637,43666,43696,43726,43755,43785,43814,43844,43873,43903,43932,43962,43991,44021,44050,44080,44109,44139,44169,44198,44228,44258,44287,44317,44346,44375,44405,44434,44464,44493,44523,44553,44582,44612,44641,44671,44700,44730,44759,44788,44818,44847,44877,44906,44936,44966,44996,45025,45055,45084,45114,45143,45172,45202,45231,45261,45290,45320,45350,45380,45409,45439,45468,45498,45527,45556,45586,45615,45644,45674,45704,45733,45763,45793,45823,45852,45882,45911,45940,45970,45999,46028,46058,46088,46117,46147,46177,46206,46236,46265,46295,46324,46354,46383,46413,46442,46472,46501,46531,46560,46590,46620,46649,46679,46708,46738,46767,46797,46826,46856,46885,46915,46944,46974,47003,47033,47063,47092,47122,47151,47181,47210,47240,47269,47298,47328,47357,47387,47417,47446,47476,47506,47535,47565,47594,47624,47653,47682,47712,47741,47771,47800,47830,47860,47890,47919,47949,47978,48008,48037,48066,48096,48125,48155,48184,48214,48244,48273,48303,48333,48362,48392,48421,48450,48480,48509,48538,48568,48598,48627,48657,48687,48717,48746,48776,48805,48834,48864,48893,48922,48952,48982,49011,49041,49071,49100,49130,49160,49189,49218,49248,49277,49306,49336,49365,49395,49425,49455,49484,49514,49543,49573,49602,49632,49661,49690,49720,49749,49779,49809,49838,49868,49898,49927,49957,49986,50016,50045,50075,50104,50133,50163,50192,50222,50252,50281,50311,50340,50370,50400,50429,50459,50488,50518,50547,50576,50606,50635,50665,50694,50724,50754,50784,50813,50843,50872,50902,50931,50960,50990,51019,51049,51078,51108,51138,51167,51197,51227,51256,51286,51315,51345,51374,51403,51433,51462,51492,51522,51552,51582,51611,51641,51670,51699,51729,51758,51787,51816,51846,51876,51906,51936,51965,51995,52025,52054,52083,52113,52142,52171,52200,52230,52260,52290,52319,52349,52379,52408,52438,52467,52497,52526,52555,52585,52614,52644,52673,52703,52733,52762,52792,52822,52851,52881,52910,52939,52969,52998,53028,53057,53087,53116,53146,53176,53205,53235,53264,53294,53324,53353,53383,53412,53441,53471,53500,53530,53559,53589,53619,53648,53678,53708,53737,53767,53796,53825,53855,53884,53913,53943,53973,54003,54032,54062,54092,54121,54151,54180,54209,54239,54268,54297,54327,54357,54387,54416,54446,54476,54505,54535,54564,54593,54623,54652,54681,54711,54741,54770,54800,54830,54859,54889,54919,54948,54977,55007,55036,55066,55095,55125,55154,55184,55213,55243,55273,55302,55332,55361,55391,55420,55450,55479,55508,55538,55567,55597,55627,55657,55686,55716,55745,55775,55804,55834,55863,55892,55922,55951,55981,56011,56040,56070,56100,56129,56159,56188,56218,56247,56276,56306,56335,56365,56394,56424,56454,56483,56513,56543,56572,56601,56631,56660,56690,56719,56749,56778,56808,56837,56867,56897,56926,56956,56985,57015,57044,57074,57103,57133,57162,57192,57221,57251,57280,57310,57340,57369,57399,57429,57458,57487,57517,57546,57576,57605,57634,57664,57694,57723,57753,57783,57813,57842,57871,57901,57930,57959,57989,58018,58048,58077,58107,58137,58167,58196,58226,58255,58285,58314,58343,58373,58402,58432,58461,58491,58521,58551,58580,58610,58639,58669,58698,58727,58757,58786,58816,58845,58875,58905,58934,58964,58994,59023,59053,59082,59111,59141,59170,59200,59229,59259,59288,59318,59348,59377,59407,59436,59466,59495,59525,59554,59584,59613,59643,59672,59702,59731,59761,59791,59820,59850,59879,59909,59939,59968,59997,60027,60056,60086,60115,60145,60174,60204,60234,60264,60293,60323,60352,60381,60411,60440,60469,60499,60528,60558,60588,60618,60648,60677,60707,60736,60765,60795,60824,60853,60883,60912,60942,60972,61002,61031,61061,61090,61120,61149,61179,61208,61237,61267,61296,61326,61356,61385,61415,61445,61474,61504,61533,61563,61592,61621,61651,61680,61710,61739,61769,61799,61828,61858,61888,61917,61947,61976,62006,62035,62064,62094,62123,62153,62182,62212,62242,62271,62301,62331,62360,62390,62419,62448,62478,62507,62537,62566,62596,62625,62655,62685,62715,62744,62774,62803,62832,62862,62891,62921,62950,62980,63009,63039,63069,63099,63128,63157,63187,63216,63246,63275,63305,63334,63363,63393,63423,63453,63482,63512,63541,63571,63600,63630,63659,63689,63718,63747,63777,63807,63836,63866,63895,63925,63955,63984,64014,64043,64073,64102,64131,64161,64190,64220,64249,64279,64309,64339,64368,64398,64427,64457,64486,64515,64545,64574,64603,64633,64663,64692,64722,64752,64782,64811,64841,64870,64899,64929,64958,64987,65017,65047,65076,65106,65136,65166,65195,65225,65254,65283,65313,65342,65371,65401,65431,65460,65490,65520,65549,65579,65608,65638,65667,65697,65726,65755,65785,65815,65844,65874,65903,65933,65963,65992,66022,66051,66081,66110,66140,66169,66199,66228,66258,66287,66317,66346,66376,66405,66435,66465,66494,66524,66553,66583,66612,66641,66671,66700,66730,66760,66789,66819,66849,66878,66908,66937,66967,66996,67025,67055,67084,67114,67143,67173,67203,67233,67262,67292,67321,67351,67380,67409,67439,67468,67497,67527,67557,67587,67617,67646,67676,67705,67735,67764,67793,67823,67852,67882,67911,67941,67971,68e3,68030,68060,68089,68119,68148,68177,68207,68236,68266,68295,68325,68354,68384,68414,68443,68473,68502,68532,68561,68591,68620,68650,68679,68708,68738,68768,68797,68827,68857,68886,68916,68946,68975,69004,69034,69063,69092,69122,69152,69181,69211,69240,69270,69300,69330,69359,69388,69418,69447,69476,69506,69535,69565,69595,69624,69654,69684,69713,69743,69772,69802,69831,69861,69890,69919,69949,69978,70008,70038,70067,70097,70126,70156,70186,70215,70245,70274,70303,70333,70362,70392,70421,70451,70481,70510,70540,70570,70599,70629,70658,70687,70717,70746,70776,70805,70835,70864,70894,70924,70954,70983,71013,71042,71071,71101,71130,71159,71189,71218,71248,71278,71308,71337,71367,71397,71426,71455,71485,71514,71543,71573,71602,71632,71662,71691,71721,71751,71781,71810,71839,71869,71898,71927,71957,71986,72016,72046,72075,72105,72135,72164,72194,72223,72253,72282,72311,72341,72370,72400,72429,72459,72489,72518,72548,72577,72607,72637,72666,72695,72725,72754,72784,72813,72843,72872,72902,72931,72961,72991,73020,73050,73080,73109,73139,73168,73197,73227,73256,73286,73315,73345,73375,73404,73434,73464,73493,73523,73552,73581,73611,73640,73669,73699,73729,73758,73788,73818,73848,73877,73907,73936,73965,73995,74024,74053,74083,74113,74142,74172,74202,74231,74261,74291,74320,74349,74379,74408,74437,74467,74497,74526,74556,74586,74615,74645,74675,74704,74733,74763,74792,74822,74851,74881,74910,74940,74969,74999,75029,75058,75088,75117,75147,75176,75206,75235,75264,75294,75323,75353,75383,75412,75442,75472,75501,75531,75560,75590,75619,75648,75678,75707,75737,75766,75796,75826,75856,75885,75915,75944,75974,76003,76032,76062,76091,76121,76150,76180,76210,76239,76269,76299,76328,76358,76387,76416,76446,76475,76505,76534,76564,76593,76623,76653,76682,76712,76741,76771,76801,76830,76859,76889,76918,76948,76977,77007,77036,77066,77096,77125,77155,77185,77214,77243,77273,77302,77332,77361,77390,77420,77450,77479,77509,77539,77569,77598,77627,77657,77686,77715,77745,77774,77804,77833,77863,77893,77923,77952,77982,78011,78041,78070,78099,78129,78158,78188,78217,78247,78277,78307,78336,78366,78395,78425,78454,78483,78513,78542,78572,78601,78631,78661,78690,78720,78750,78779,78808,78838,78867,78897,78926,78956,78985,79015,79044,79074,79104,79133,79163,79192,79222,79251,79281,79310,79340,79369,79399,79428,79458,79487,79517,79546,79576,79606,79635,79665,79695,79724,79753,79783,79812,79841,79871,79900,79930,79960,79990]},i=/(\[[^\[]*\])|(\\)?i(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,a=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,r=/\d\d?/,s=/\d{1,3}/,o=/\d{3}/,c=/\d{1,4}/,l=/[+\-]?\d{1,6}/,u=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.?)|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,h=/Z|[\+\-]\d\d:?\d\d/i,d=/T/i,f=/[\+\-]?\d+(\.\d{1,3})?/,m={hd:"idate",hm:"imonth",hy:"iyear"},g={},D="DDD w M D".split(" "),M="M D w".split(" "),_={iM:function(){return this.iMonth()+1},iMMM:function(t){return this.localeData().iMonthsShort(this,t)},iMMMM:function(t){return this.localeData().iMonths(this,t)},iD:function(){return this.iDate()},iDDD:function(){return this.iDayOfYear()},iw:function(){return this.iWeek()},iYY:function(){return v(this.iYear()%100,2)},iYYYY:function(){return v(this.iYear(),4)},iYYYYY:function(){return v(this.iYear(),5)},igg:function(){return v(this.iWeekYear()%100,2)},igggg:function(){return this.iWeekYear()},iggggg:function(){return v(this.iWeekYear(),5)}};function Y(t,n){return function(e){return v(t.call(this,e),n)}}function y(t,n){return function(e){return this.localeData().ordinal(t.call(this,e),n)}}for(;D.length;)n=D.pop(),_["i"+n+"o"]=y(_["i"+n],n);for(;M.length;)n=M.pop(),_["i"+n+n]=Y(_["i"+n],2);function p(t,n){var e;for(e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function v(t,n){for(var e=t+"";e.length<n;)e="0"+e;return e}function b(t){return"[object Array]"===Object.prototype.toString.call(t)}function j(t){return t?m[t]||t.toLowerCase().replace(/(.)s$/,"$1"):t}function x(t,n,e,i){var a=t._isUTC?"UTC":"";t._d["set"+a+"FullYear"](n),t._d["set"+a+"Month"](e),t._d["set"+a+"Date"](i)}function w(t){function n(){}return n.prototype=t,new n}function k(t){return Object.getPrototypeOf?Object.getPrototypeOf(t):"".__proto__?t.__proto__:t.constructor.prototype}_.iDDDD=Y(_.iDDD,3),p(k(t.localeData()),{_iMonths:["Muharram","Safar","Rabi' al-Awwal","Rabi' al-Thani","Jumada al-Ula","Jumada al-Alkhirah","Rajab","Sha\u2019ban","Ramadhan","Shawwal","Thul-Qi\u2019dah","Thul-Hijjah"],iMonths:function(t){return this._iMonths[t.iMonth()]},_iMonthsShort:["Muh","Saf","Rab-I","Rab-II","Jum-I","Jum-II","Raj","Sha","Ram","Shw","Dhu-Q","Dhu-H"],iMonthsShort:function(t){return this._iMonthsShort[t.iMonth()]},iMonthsParse:function(t){var n,e,i;for(this._iMonthsParse||(this._iMonthsParse=[]),n=0;n<12;n+=1)if(this._iMonthsParse[n]||(e=R([2e3,(2+n)%12,25]),i="^"+this.iMonths(e,"")+"$|^"+this.iMonthsShort(e,"")+"$",this._iMonthsParse[n]=new RegExp(i.replace(".",""),"i")),this._iMonthsParse[n].test(t))return n}});var S={iMonths:"\u0645\u062d\u0631\u0645_\u0635\u0641\u0631_\u0631\u0628\u064a\u0639 \u0627\u0644\u0623\u0648\u0644_\u0631\u0628\u064a\u0639 \u0627\u0644\u062b\u0627\u0646\u064a_\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u0623\u0648\u0644\u0649_\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u0622\u062e\u0631\u0629_\u0631\u062c\u0628_\u0634\u0639\u0628\u0627\u0646_\u0631\u0645\u0636\u0627\u0646_\u0634\u0648\u0627\u0644_\u0630\u0648 \u0627\u0644\u0642\u0639\u062f\u0629_\u0630\u0648 \u0627\u0644\u062d\u062c\u0629".split("_"),iMonthsShort:"\u0645\u062d\u0631\u0645_\u0635\u0641\u0631_\u0631\u0628\u064a\u0639 \u0661_\u0631\u0628\u064a\u0639 \u0662_\u062c\u0645\u0627\u062f\u0649 \u0661_\u062c\u0645\u0627\u062f\u0649 \u0662_\u0631\u062c\u0628_\u0634\u0639\u0628\u0627\u0646_\u0631\u0645\u0636\u0627\u0646_\u0634\u0648\u0627\u0644_\u0630\u0648 \u0627\u0644\u0642\u0639\u062f\u0629_\u0630\u0648 \u0627\u0644\u062d\u062c\u0629".split("_")};if("function"===typeof t.updateLocale)t.updateLocale("ar-sa",S);else{var C=t.locale();t.defineLocale("ar-sa",S),t.locale(C)}function N(t){var n,e=t.match(i),a=e.length;for(n=0;n<a;n+=1)_[e[n]]&&(e[n]=_[e[n]]);return function(i){var r="";for(n=0;n<a;n+=1)r+=e[n]instanceof Function?"["+e[n].call(i,t)+"]":e[n];return r}}function O(n,e){switch(n){case"iDDDD":case"DDDD":return o;case"iYYYY":case"YYYY":return c;case"iYYYYY":case"YYYYY":return l;case"iDDD":case"S":case"SS":case"SSS":case"DDD":return s;case"iMMM":case"iMMMM":case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return u;case"iMM":case"iDD":case"iYY":case"iM":case"iD":case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return r;case"a":case"A":return t.localeData(e._l)._meridiemParse;case"X":return f;case"Z":case"ZZ":return h;case"T":return d;default:return new RegExp(n.replace("\\",""))}}function F(n,e,i){var a,r=i._a;switch(n){case"iM":case"iMM":r[1]=null==e?0:~~e-1;break;case"iMMM":case"iMMMM":null!=(a=t.localeData(i._l).iMonthsParse(e))?r[1]=a:i._isValid=!1;break;case"iD":case"iDD":case"iDDD":case"iDDDD":null!=e&&(r[2]=~~e);break;case"iYY":r[0]=~~e+(~~e>47?1300:1400);break;case"iYYYY":case"iYYYYY":r[0]=~~e}null==e&&(i._isValid=!1)}function I(t){var n,e,i=t._a[0],a=t._a[1],r=t._a[2];return null==i&&null==a&&null==r?[0,0,1]:(i=i||0,a=a||0,((r=r||1)<1||r>R.iDaysInMonth(i,a))&&(t._isValid=!1),e=T((n=A(i,a,r)).gy,n.gm,n.gd),t._hDiff=0,~~e.hy!==i&&(t._hDiff+=1),~~e.hm!==a&&(t._hDiff+=1),~~e.hd!==r&&(t._hDiff+=1),[n.gy,n.gm,n.gd])}function H(t){var n,e,a,r=t._f.match(i),s=t._i,o=r.length;for(t._a=[],n=0;n<o;n+=1)(a=(O(e=r[n],t).exec(s)||[])[0])&&(s=s.slice(s.indexOf(a)+a.length)),_[e]&&F(e,a,t);return s&&(t._il=s),I(t)}function E(t,n){var e,i,a,r,s,o,c=t._f.length;if(0===c)return P(new Date(NaN));for(e=0;e<c;e+=1)i=t._f[e],s=0,(a=P(t._i,i,t._l,n)).isValid()&&(s+=a._hDiff,a._il&&(s+=a._il.length),(null==o||s<o)&&(o=s,r=a));return r}function L(t){var n,e,a,r=t._i,s="",o="",c=t._f.match(i),l=c.length;for(n=0;n<l;n+=1)(a=(O(e=c[n],t).exec(r)||[])[0])&&(r=r.slice(r.indexOf(a)+a.length)),_[e]instanceof Function||(o+=e,a&&(s+=a));t._i=s,t._f=o}function Z(t,n,e){var i,a=e-n,r=e-t.day();return r>a&&(r-=7),r<a-7&&(r+=7),i=R(t).add(r,"d"),{week:Math.ceil(i.iDayOfYear()/7),year:i.iYear()}}function P(n,e,i,a){var r,s,o,c={_i:n,_f:e,_l:i};if(e){if(b(e))return E(c,a);r=H(c),L(c),e="YYYY-MM-DD-"+c._f,n=v(r[0],4)+"-"+v(r[1]+1,2)+"-"+v(r[2],2)+"-"+c._i}return s=a?t.utc(n,e,i):t(n,e,i),!1===c._isValid&&(s._isValid=!1),s._hDiff=c._hDiff||0,p(o=w(R.fn),s),o}function R(t,n,e){return P(t,n,e,!1)}function T(t,n,e){var i=G(B(t,n+1,e));return i.hm-=1,i}function A(t,n,e){var i=J(U(t,n+1,e));return i.gm-=1,i}return p(R,t),R.fn=w(t.fn),R.utc=function(t,n,e){return P(t,n,e,!0)},R.fn.format=function(n){var e,i,r=this;if(n){for(e=5,i=function(t){return r.localeData().longDateFormat(t)||t};e>0&&a.test(n);)e-=1,n=n.replace(a,i);g[n]||(g[n]=N(n)),n=g[n](this)}return t.fn.format.call(this,n)},R.fn.iYear=function(n){var e,i,a;return"number"===typeof n?(i=T(this.year(),this.month(),this.date()),e=Math.min(i.hd,R.iDaysInMonth(n,i.hm)),x(this,(a=A(n,i.hm,e)).gy,a.gm,a.gd),this.month()===a.gm&&this.date()===a.gd&&this.year()===a.gy||x(this,a.gy,a.gm,a.gd),t.updateOffset(this),this):T(this.year(),this.month(),this.date()).hy},R.fn.iMonth=function(n){var e,i,a;if(null!=n){if("string"===typeof n){if(!((n=this.localeData().iMonthsParse(n))>=0))return this;n-=1}return i=T(this.year(),this.month(),this.date()),e=Math.min(i.hd,R.iDaysInMonth(i.hy,n)),this.iYear(i.hy+W(n,12)),(n=q(n,12))<0&&(n+=12,this.iYear(this.iYear()-1)),x(this,(a=A(this.iYear(),n,e)).gy,a.gm,a.gd),this.month()===a.gm&&this.date()===a.gd&&this.year()===a.gy||x(this,a.gy,a.gm,a.gd),t.updateOffset(this),this}return T(this.year(),this.month(),this.date()).hm},R.fn.iDate=function(n){var e,i;return"number"===typeof n?(x(this,(i=A((e=T(this.year(),this.month(),this.date())).hy,e.hm,n)).gy,i.gm,i.gd),this.month()===i.gm&&this.date()===i.gd&&this.year()===i.gy||x(this,i.gy,i.gm,i.gd),t.updateOffset(this),this):T(this.year(),this.month(),this.date()).hd},R.fn.iDayOfYear=function(t){var n=Math.round((R(this).startOf("day")-R(this).startOf("iYear"))/864e5)+1;return null==t?n:this.add(t-n,"d")},R.fn.iDaysInMonth=function(){return parseInt(R(this).endOf("iMonth").format("iDD"))},R.fn.iWeek=function(t){var n=Z(this,this.localeData()._week.dow,this.localeData()._week.doy).week;return null==t?n:this.add(7*(t-n),"d")},R.fn.iWeekYear=function(t){var n=Z(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==t?n:this.add(t-n,"y")},R.fn.add=function(n,e){var i;return null===e||isNaN(+e)||(i=n,n=e,e=i),"iyear"===(e=j(e))?this.iYear(this.iYear()+n):"imonth"===e?this.iMonth(this.iMonth()+n):"idate"===e?this.iDate(this.iDate()+n):t.fn.add.call(this,n,e),this},R.fn.subtract=function(n,e){var i;return null===e||isNaN(+e)||(i=n,n=e,e=i),"iyear"===(e=j(e))?this.iYear(this.iYear()-n):"imonth"===e?this.iMonth(this.iMonth()-n):"idate"===e?this.iDate(this.iDate()-n):t.fn.subtract.call(this,n,e),this},R.fn.startOf=function(n){return"iyear"===(n=j(n))||"imonth"===n?("iyear"===n&&this.iMonth(0),this.iDate(1),this.hours(0),this.minutes(0),this.seconds(0),this.milliseconds(0),this):t.fn.startOf.call(this,n)},R.fn.endOf=function(t){return void 0===(t=j(t))||"milisecond"===t?this:this.startOf(t).add(1,"isoweek"===t?"week":t).subtract(1,"milliseconds")},R.fn.clone=function(){return R(this)},R.fn.iYears=R.fn.iYear,R.fn.iMonths=R.fn.iMonth,R.fn.iDates=R.fn.iDate,R.fn.iWeeks=R.fn.iWeek,R.iDaysInMonth=function(t,n){var i=V(t,n+1);return e.ummalquraData[i]-e.ummalquraData[i-1]},R.iConvert={toHijri:T,toGregorian:A},R;function W(t,n){return~~(t/n)}function q(t,n){return t-~~(t/n)*n}function U(t,n,i){var a=V(t,n);return i+e.ummalquraData[a-1]-1+24e5}function G(t){var n=t-24e5,i=$(n),a=i+16260,r=Math.floor((a-1)/12);return{hy:r+1,hm:a-12*r,hd:n-e.ummalquraData[i-1]+1}}function B(t,n,e){var i=W(1461*(t+W(n-8,6)+100100),4)+W(153*q(n+9,12)+2,5)+e-34840408;return i=i-W(3*W(t+100100+W(n-8,6),100),4)+752}function J(t){var n,e,i,a;return n=(n=4*t+139361631)+4*W(3*W(4*t+183187720,146097),4)-3908,e=5*W(q(n,1461),4)+308,i=W(q(e,153),5)+1,a=q(W(e,153),12)+1,{gy:W(n,1461)-100100+W(8-a,6),gm:a,gd:i}}function V(t,n){return 12*(t-1)+1+(n-1)-16260}function $(t){for(var n=0;n<e.ummalquraData.length;n+=1)if(e.ummalquraData[n]>t)return n}}(t),r.moment}.apply(n,i))||(t.exports=a)}}]);
//# sourceMappingURL=HijriCalendar.e68c04ca.chunk.js.map