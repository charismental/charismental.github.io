(function(e){function t(t){for(var s,i,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)i=o[u],n[i]&&m.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},i={app:0},n={app:0},r=[];function o(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9e10f172"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise(function(t,a){for(var s="css/"+({about:"about"}[e]||e)+"."+{about:"8aafb47c"}[e]+".css",n=l.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===n))return t()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){c=m[o],u=c.getAttribute("data-href");if(u===s||u===n)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var s=t&&t.target&&t.target.src||n,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.request=s,delete i[e],d.parentNode.removeChild(d),a(r)},d.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){i[e]=0}));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise(function(t,a){s=n[e]=[t,a]});t.push(s[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e),c=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+s+": "+i+")");r.type=s,r.request=i,a[1](r)}n[e]=void 0}};var m=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},"1e92":function(e,t,a){"use strict";var s=a("3ba5"),i=a.n(s);i.a},"2f0f":function(e,t,a){"use strict";var s=a("f025"),i=a.n(s);i.a},"3ba5":function(e,t,a){},"3ce8":function(e,t,a){"use strict";var s=a("d08e"),i=a.n(s);i.a},"41d9":function(e,t,a){"use strict";var s=a("47cc"),i=a.n(s);i.a},"47cc":function(e,t,a){},"52ad":function(e,t,a){"use strict";var s=a("6a41"),i=a.n(s);i.a},5692:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Slide",{attrs:{width:"360",burgerIcon:!1,noOverlay:"",isOpen:e.menuToggle},on:{closeMenu:e.menuDisable}},[a("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){return e.expandPlayerCloseMenu(t)}}},[a("i",{staticClass:"material-icons"},[e._v("home")]),a("span",[e._v("Home")])]),a("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[a("i",{staticClass:"material-icons"},[e._v("skip_previous")]),a("span",[e._v("History")])]),a("router-link",{attrs:{to:"/queue"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[a("i",{staticClass:"material-icons"},[e._v("skip_next")]),a("span",[e._v("Upcoming")])]),a("router-link",{attrs:{to:"/schedule"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[a("i",{staticClass:"material-icons"},[e._v("schedule")]),a("span",[e._v("Schedule")])]),a("router-link",{attrs:{to:"/requests"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[a("i",{staticClass:"material-icons"},[e._v("music_note")]),a("span",[e._v("Requests")])]),a("router-link",{attrs:{to:"/donate"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[a("i",{staticClass:"material-icons"},[e._v("attach_money")]),a("span",[e._v("Donate")])]),a("router-link",{attrs:{to:"/about"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[a("i",{staticClass:"material-icons"},[e._v("info")]),a("span",[e._v("About")])]),a("router-link",{attrs:{to:"/contact"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[a("i",{staticClass:"material-icons"},[e._v("feedback")]),a("span",[e._v("Contact")])]),a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"material-icons"},[e._v("library_music")]),a("input",{attrs:{type:"radio",id:"high",value:"8000"},domProps:{checked:8e3===e.streamPort},on:{click:function(t){e.pauseChangeQuality(8e3)}}}),a("label",{attrs:{for:"high"}},[e._v("HQ")]),a("input",{attrs:{type:"radio",id:"med",value:"8006"},domProps:{checked:8006===e.streamPort},on:{click:function(t){e.pauseChangeQuality(8006)}}}),a("label",{attrs:{for:"med"}},[e._v("MQ")]),a("input",{attrs:{type:"radio",id:"low",value:"8004"},domProps:{checked:8004===e.streamPort},on:{click:function(t){e.pauseChangeQuality(8004)}}}),a("label",{attrs:{for:"low"}},[e._v("LQ")])])],1),a("player"),e.expandedPlayer?e._e():a("router-view"),a("more-info-modal")],1)},n=[],r=a("cebc"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[e.expandedPlayer?"player":"player1"]},[a("top-bar"),a("current-album-art"),a("current-meta"),a("feedback"),a("timer"),a("div",{staticClass:"play-container",on:{click:e.playPause,keyup:function(t){return"button"in t||!e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?e.playPause(t):null}}},[e.isPlaying?a("i",{staticClass:"material-icons",class:[e.expandedPlayer?"md-96":"md-48"]},[e._v("pause_circle_outline")]):a("i",{staticClass:"material-icons",class:[e.expandedPlayer?"md-96":"md-48"]},[e._v("play_circle_outline")]),a("audio",{attrs:{id:"audio",src:e.currentStream}},[e._v("\n      Your browser does not support the audio element.\n      ")])]),a("div",{staticClass:"more-info"},[a("i",{staticClass:"material-icons",class:[e.expandedPlayer?"md-84":"md-36"],on:{click:function(t){e.setToggleModal(e.songInfo)}}},[e._v("more_horiz")])])],1)},l=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"timer"},[a("div",{class:[e.expandedPlayer?"expanded-timer":"minimized-timer",6===e.time.length?"three":"",7===e.time.length?"four":""]},[a("span",[e._v(e._s(e.time||"00:00"))])])])},u=[],m=a("2f62"),d={name:"Timer",computed:Object(r["a"])({},Object(m["e"])(["expandedPlayer"]),{currentTime:function(){return this.$store.state.currentTime},time:function(){return this.minutes+":"+this.seconds},minutes:function(){var e=Math.floor(this.currentTime/60);return e>=10?e:"0"+e},seconds:function(){var e=this.currentTime-60*this.minutes;return e>=10?e:"0"+e}})},p=d,g=(a("1e92"),a("2877")),v=Object(g["a"])(p,c,u,!1,null,null,null);v.options.__file="Timer.vue";var f=v.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"feedback",class:[e.expandedPlayer?"expanded-feedback":"minimized-feedback"]},[a("i",{staticClass:"material-icons",class:[!1===e.approval?"active":""],attrs:{title:"Thumbs Down"},on:{click:e.thumbsDown}},[e._v("thumb_down_alt")]),a("i",{staticClass:"material-icons",class:[!0===e.approval?"active":""],attrs:{title:"Thumbs Up"},on:{click:e.thumbsUp}},[e._v("thumb_up_alt")])])},b=[],_={name:"Feedback",computed:Object(r["a"])({},Object(m["e"])(["expandedPlayer","songInfo","approval"])),methods:Object(r["a"])({},Object(m["d"])(["thumbsUp","thumbsDown"])),watch:{songInfo:function(){this.approval&&(this.approval="")}}},y=_,C=(a("99d2"),Object(g["a"])(y,h,b,!1,null,null,null));C.options.__file="Feedback.vue";var M=C.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"top-bar"},[a("div",{staticClass:"arrow-icon",on:{click:e.toggleExpandedPlayer}},[e.expandedPlayer?a("i",{staticClass:"material-icons md-36"},[e._v("expand_less")]):a("i",{staticClass:"material-icons md-36"},[e._v("expand_more")])]),a("div",{staticClass:"title-bar"},[a("router-link",{attrs:{to:"/requests"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[a("span",[e._v("Radiomv.org")])])],1),e._m(0),a("div",{staticClass:"hamburger",on:{click:e.toggleMenu}},[e.menuToggle?e._e():a("i",{staticClass:"material-icons md-36"},[e._v("menu")])])])},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"live-notice"},[a("span",{staticClass:"live"},[e._v("LIVE  ")]),a("div",{staticClass:"live-dot"})])}],P={name:"TopBar",computed:Object(r["a"])({},Object(m["e"])(["expandedPlayer","menuToggle"])),methods:Object(r["a"])({},Object(m["d"])(["toggleExpandedPlayer","toggleMenu","minimizePlayer"]))},j=P,x=(a("f4ef"),Object(g["a"])(j,w,k,!1,null,null,null));x.options.__file="TopBar.vue";var O=x.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"current-album-art",class:[e.expandedPlayer?"expanded":"minimized"]},[a("img",{attrs:{src:e.itemImg(e.songInfo),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:e.songInfo.title},on:{click:function(t){e.setToggleModal(e.songInfo)}}})])},T=[],I={computed:Object(r["a"])({},Object(m["e"])(["expandedPlayer","songInfo","loading"])),methods:Object(r["a"])({},Object(m["b"])(["setToggleModal"]),{itemImg:function(e){var t="https://radiomv.org/samHTMweb/";return e.picture?t+e.picture:this.loading?t+"loading.gif":t+"customMissing.jpg"}})},S=I,A=(a("a707"),Object(g["a"])(S,q,T,!1,null,null,null));A.options.__file="CurrentAlbumArt.vue";var E=A.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"current-meta",class:[e.expandedPlayer?"expanded-meta":"minimized-meta"]},[a("div",{staticClass:"marquee-container"},[a("span",{staticClass:"title",class:[e.marqueeTrigger(e.songInfo.title,24)?"marquee":""]},[e._v(e._s(e.songInfo.title))])]),a("div",{staticClass:"marquee-container"},[a("span",{staticClass:"artist",class:[e.marqueeTrigger(e.songInfo.artist,33)?"marquee":""]},[e._v(e._s(e.songInfo.artist))])]),a("div",{staticClass:"marquee-container"},[a("span",{staticClass:"album",class:[e.marqueeTrigger(e.songInfo.album,33)?"marquee":""]},[e._v(e._s(e.songInfo.album))])])])},H=[],R={name:"Current-Meta",computed:Object(r["a"])({},Object(m["e"])(["expandedPlayer","songInfo"])),methods:{marqueeTrigger:function(e,t){return!!(e&&e.length>t)}}},$=R,B=(a("52ad"),Object(g["a"])($,D,H,!1,null,null,null));B.options.__file="CurrentMeta.vue";var z=B.exports,L={name:"Player",components:{Feedback:M,Timer:f,TopBar:O,CurrentAlbumArt:E,CurrentMeta:z},methods:Object(r["a"])({},Object(m["d"])(["newInterval"]),{},Object(m["b"])(["getSongInfo","playPause","pause","setToggleModal"]),{setNavigatorMeta:function(){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:this.songInfo.title,artist:this.songInfo.artist,album:this.songInfo.album,artwork:"https://radiomv.org/samHTMweb/".concat(this.songInfo.picture)}))}}),computed:Object(r["a"])({},Object(m["e"])(["isPlaying","expandedPlayer","refreshInterval","songInfo","menuToggle"]),{},Object(m["c"])(["currentStream"])),created:function(){this.getSongInfo(),this.newInterval(setInterval(this.getSongInfo,this.refreshInterval))}},N=L,Q=(a("6131"),Object(g["a"])(N,o,l,!1,null,null,null));Q.options.__file="Player.vue";var U=Q.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition-group",{attrs:{name:"fade"}},[e.moreInfoModalDisplay?a("div",{key:"1",staticClass:"more-info-modal"},[a("img",{attrs:{src:"https://radiomv.org/samHTMweb/"+e.modalObject.picture,alt:""}}),a("div",{staticClass:"modal-inner"},[a("span",{staticClass:"more-info-header"},[e._v(e._s(e.modalObject.title))]),a("div",{staticClass:"divider"},[a("hr")]),a("div",{staticClass:"modal-body"},[a("span",{staticClass:"more-info-artist"},[a("i",{staticClass:"material-icons"},[e._v("whatshot")]),e._v(" Artist: "+e._s(e.modalObject.artist))]),a("span",{staticClass:"more-info-album"},[a("i",{staticClass:"material-icons"},[e._v("album")]),e._v(" Album: "+e._s(e.modalObject.album))]),a("span",{staticClass:"more-info-duration"},[a("i",{staticClass:"material-icons"},[e._v("av_timer")]),e._v("Duration: "+e._s(e.modalObject.minsec))]),e.modalObject.buycd?a("span",{staticClass:"more-info-buycd"},[a("a",{attrs:{href:e.modalObject.buycd,target:"_blank"}},[a("i",{staticClass:"material-icons"},[e._v("exit_to_app")]),e._v("Buy CD")])]):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:e.modalObject.songid,expression:"modalObject.songid"}],staticClass:"request-span"},[a("a",{on:{click:e.ajaxSongRequest}},["S"===e.modalObject.type?a("span",{staticClass:"more-info-request"},[a("i",{staticClass:"material-icons"},[e._v("audiotrack")]),e.requesting?a("span",{staticClass:"loading"},[e._v("Requesting")]):a("span",[e._v("Click to request this song")])]):e._e()])]),e.requestHeader?a("div",{staticClass:"request-response"},[a("h1",{staticClass:"request-response-header",class:["Request Successful"===e.requestHeader?"request-success":""]},[e._v(e._s(e.requestHeader))]),a("h3",[e._v(e._s(e.requestBody))])]):e._e(),a("div",{staticClass:"modal-close"},[a("i",{staticClass:"material-icons",on:{click:e.closeModal}},[e._v("clear")])])])])]):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:e.moreInfoModalDisplay,expression:"moreInfoModalDisplay"}],key:"2",staticClass:"modal-overlay",on:{click:e.closeModal}})])},J=[],Z=(a("a481"),a("bc3a")),F=a.n(Z),W={name:"More-Info-Modal",data:function(){return{corsProxy:"https://cors-anywhere.herokuapp.com/",requestUrl:"http://request.audiorealm.com/req/req.html?songID=",portHost:"&samport=1221&samhost=73.254.166.70",requestHeader:"",requestBody:"",requesting:!1}},computed:Object(r["a"])({},Object(m["e"])(["moreInfoModalDisplay","modalObject"])),watch:{requestHeader:function(){"Request Successful"===this.requestHeader&&this.updateRequestSongs(this.modalObject)}},methods:Object(r["a"])({},Object(m["d"])(["modalClose"]),{},Object(m["b"])(["updateRequestSongs"]),{closeModal:function(){this.requestHeader="",this.requestBody="",this.modalClose()},ajaxSongRequest:function(){var e=this;this.requesting=!0;var t=new DOMParser;F.a.get("".concat(this.corsProxy).concat(this.requestUrl).concat(this.modalObject.songid).concat(this.portHost),{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(a){var s=t.parseFromString(a.data,"text/html"),i=s.getElementById("content");e.requestHeader=i.children[0].innerHTML,e.requestBody=i.children[1].innerHTML.replace("<br>",""),e.requesting=!1,setTimeout(function(){e.closeModal()},3300)})}})},X=W,G=(a("2f0f"),Object(g["a"])(X,V,J,!1,null,null,null));G.options.__file="MoreInfoModal.vue";var K=G.exports,Y=a("db0f"),ee={name:"home",components:{Player:U,MoreInfoModal:K,Slide:Y["Slide"]},computed:Object(r["a"])({},Object(m["e"])(["expandedPlayer","menuToggle","streamPort"])),methods:Object(r["a"])({},Object(m["d"])(["minimizePlayer","expandPlayerCloseMenu","menuDisable"]),{},Object(m["b"])(["pauseChangeQuality"]))},te=ee,ae=(a("034f"),Object(g["a"])(te,i,n,!1,null,null,null));ae.options.__file="App.vue";var se=ae.exports,ie=a("8c4f"),ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"history"},[a("div",{staticClass:"history-header"},[e._m(0),a("span",{staticClass:"history-title"},[e._v("Recent History")]),e._m(1),a("div",{staticClass:"history-body"},[a("simplebar",{attrs:{id:"history-container","data-simplebar-auto-hide":"true"}},e._l(e.songHistory.slice(0,29),function(t,s){return a("div",{key:s,staticClass:"history-item"},[a("div",{staticClass:"history-album"},[a("img",{staticClass:"history-img",attrs:{src:e.itemImg(t),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(a){e.setToggleModal(t)}}})]),a("div",{staticClass:"history-meta"},[a("span",{staticClass:"song-name",on:{click:function(a){e.setToggleModal(t)}}},[e._v(e._s(t.title))]),a("span",{staticClass:"artist",on:{click:function(a){e.setToggleModal(t)}}},[e._v(e._s(t.artist))]),a("hr")])])}),0)],1)])])},re=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])}],oe=a("8d3b"),le=(a("f138"),{name:"history",components:{simplebar:oe["a"]},computed:Object(r["a"])({},Object(m["e"])(["songHistory"])),methods:Object(r["a"])({},Object(m["b"])(["setToggleModal"]),{itemImg:function(e){var t="https://radiomv.org/samHTMweb/";return e.picture?t+e.picture:t+"customMissing.jpg"},itemUrl:function(e){return e.buycd?e.buycd:"https://www.radiomv.org"}})}),ce=le,ue=(a("8f59"),Object(g["a"])(ce,ne,re,!1,null,null,null));ue.options.__file="History.vue";var me=ue.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"queue"},[a("div",{staticClass:"queue-header"},[e._m(0),a("span",{staticClass:"queue-title"},[e._v("Upcoming")]),e._m(1),a("div",{staticClass:"queue-body"},[a("simplebar",{attrs:{id:"queue-container","data-simplebar-auto-hide":"true"}},[e._l(e.songQueue.slice(0,-1),function(t,s){return a("div",{key:s,staticClass:"queue-item"},[a("div",{staticClass:"queue-album"},[a("img",{staticClass:"queue-img",attrs:{src:e.itemImg(t),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(a){e.setToggleModal(t)}}})]),a("div",{staticClass:"queue-meta"},[a("span",{staticClass:"song-name",on:{click:function(a){e.setToggleModal(t)}}},[e._v(e._s(t.title))]),a("span",{staticClass:"artist",on:{click:function(a){e.setToggleModal(t)}}},[e._v(e._s(t.artist))]),a("hr")])])}),e.requestSongs.length?a("div",{staticClass:"requested-placeholder"},e._l(e.requestSongs,function(t,s){return a("div",{key:s,staticClass:"queue-item"},[a("div",{staticClass:"queue-album"},[a("img",{staticClass:"queue-img",attrs:{src:e.itemImg(t),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(a){e.setToggleModal(t)}}})]),a("div",{staticClass:"queue-meta"},[a("span",{staticClass:"song-name",on:{click:function(a){e.setToggleModal(t)}}},[e._v(e._s(t.title))]),a("span",{staticClass:"artist",on:{click:function(a){e.setToggleModal(t)}}},[e._v(e._s(t.artist))]),a("hr")])])}),0):e._e()],2)],1)])])},pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])}],ge={name:"history",components:{simplebar:oe["a"]},computed:Object(r["a"])({},Object(m["e"])(["songQueue","requestSongs"])),methods:Object(r["a"])({},Object(m["b"])(["setToggleModal"]),{itemImg:function(e){var t="https://radiomv.org/samHTMweb/";return e.picture?t+e.picture:t+"customMissing.jpg"},itemUrl:function(e){return e.buycd?e.buycd:"https://www.radiomv.org"}})},ve=ge,fe=(a("7d58"),Object(g["a"])(ve,de,pe,!1,null,null,null));fe.options.__file="ComingUp.vue";var he=fe.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"request"},[a("div",{staticClass:"request-header"},[e._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"},{name:"focus",rawName:"v-focus"}],staticClass:"request-input",attrs:{type:"text",placeholder:"Search music..."},domProps:{value:e.search},on:{keyup:e.getSongs,input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._m(1),a("div",{staticClass:"request-body"},[a("simplebar",{attrs:{id:"request-container","data-simplebar-auto-hide":"true"}},e._l(e.searchResults,function(t,s){return a("div",{key:s,staticClass:"request-item"},[a("div",{staticClass:"request-album"},[a("img",{staticClass:"history-img",attrs:{src:e.itemImg(t),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(a){e.setToggleModal(t)}}})]),a("div",{staticClass:"request-meta"},[a("span",{staticClass:"song-name",on:{click:function(a){e.setToggleModal(t)}}},[e._v(e._s(t.title))]),a("span",{staticClass:"artist",on:{click:function(a){e.setToggleModal(t)}}},[e._v(e._s(t.artist))]),a("hr")])])}),0)],1)])])},_e=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])}],ye=(a("386d"),{name:"requests",components:{simplebar:oe["a"]},directives:{focus:{inserted:function(e){e.focus()}}},data:function(){return{search:"",api1:"https://api.mlab.com/api/1/databases/songlist/collections/songs?apiKey=MxT5bRs11urXAq91rBbbZdGRkVyxC0rB&q={%22combine%22:{%20$regex:%20%27(?i).*",api2:".*%27%20}}",searchResults:""}},methods:Object(r["a"])({},Object(m["b"])(["setToggleModal"]),{getSongs:function(){var e=this;this.search&&this.search.length>=3&&F.a.get(this.api1+this.search+this.api2).then(function(e){return e.data}).then(function(t){e.searchResults=t})},itemImg:function(e){var t="https://radiomv.org/samHTMweb/";return e.picture?t+e.picture:t+"customMissing.jpg"}})}),Ce=ye,Me=(a("aaaa"),Object(g["a"])(Ce,be,_e,!1,null,null,null));Me.options.__file="Requests.vue";var we=Me.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"schedule"},[a("div",{staticClass:"schedule-header"},[e._m(0),a("span",{staticClass:"schedule-title"},[e._v("Schedule")]),e._m(1),a("div",{staticClass:"schedule-body"},[a("simplebar",{attrs:{id:"schedule-container","data-simplebar-auto-hide":"true"}},e._l(e.schedule,function(t,s){return a("div",{key:s,staticClass:"schedule-item"},[a("div",{staticClass:"schedule-img-container"},[a("img",{staticClass:"schedule-img",attrs:{src:t.picture}})]),a("div",{staticClass:"schedule-ministry-info"},[a("span",{staticClass:"time-slot"},[e._v(e._s(t.timeslot))]),a("span",{staticClass:"ministry-name"},[e._v(e._s(t.ministry))]),a("span",{staticClass:"speaker"},[e._v(e._s(t.speaker))]),a("hr")])])}),0)],1)])])},Pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])}],je={name:"schedule",components:{simplebar:oe["a"]},data:function(){return{schedule:[{speaker:"David Pawson",ministry:"David Pawson Teaching Library",timeslot:"12:30AM - 1:30AM",picture:"../../assets/david.png",homepage:"https://www.davidpawson.org/"},{speaker:"Alexander Scourby",ministry:"Bible Reading",timeslot:"2:00AM - 2:30AM",picture:"../../assets/scourby.png",homepage:"https://www.scourby.com/"},{speaker:"Alistair Begg",ministry:"Truth for Life",timeslot:"3:30AM - 4:00AM",picture:"../../assets/alistair.png",homepage:"https://www.truthforlife.org/"},{speaker:"Chuck Missler",ministry:"66/40 with Chuck Missler",timeslot:"4:00AM - 4:30AM",picture:"../../assets/chuck.png",homepage:"https://www.khouse.org/"},{speaker:"Jamie Buckingham",ministry:"Risky Living Ministries",timeslot:"5:00AM - 6:00AM",picture:"../../assets/jamie.png",homepage:"https://www.jamiebuckinghamministries.com/"},{speaker:"Dr. John Casteel",ministry:"John Casteel Ministries",timeslot:"6:30AM - 7:30AM",picture:"../../assets/john.png",homepage:"http://www.johncasteel.com/"},{speaker:"Steve Schell",ministry:"Life Lessons Radio",timeslot:"8:00AM - 8:30AM",picture:"../../assets/steve.png",homepage:"https://www.lifelessonsradio.org/"},{speaker:"Curtis Dougherty",ministry:"Curtis Dougherty Ministries",timeslot:"8:30AM - 9:45AM",picture:"../../assets/curtis.png",homepage:"https://www.cascadechapel.org/"},{speaker:"David Pawson",ministry:"David Pawson Teaching Library",timeslot:"10:00AM - 11:00AM",picture:"../../assets/david.png",homepage:"https://www.davidpawson.org/"},{speaker:"Paul Washer",ministry:"HeartCry Missionary Society",timeslot:"11:00AM - 12:00PM",picture:"../../assets/paul.png",homepage:"http://www.heartcrymission.com/"},{speaker:"Alistair Begg",ministry:"Truth for Life",timeslot:"12:30PM - 1:00PM",picture:"../../assets/alistair.png",homepage:"https://www.truthforlife.org/"},{speaker:"Ern Baxter",ministry:"Ern Baxter Teaching Legacy",timeslot:"1:30PM - 2:45PM",picture:"../../assets/ern.png",homepage:"https://www.radiomv.org/"},{speaker:"Alexander Scourby",ministry:"Bible Reading",timeslot:"2:50PM - 3:20PM",picture:"../../assets/scourby.png",homepage:"https://www.scourby.com/"},{speaker:"Jamie Buckingham",ministry:"Risky Living Ministries",timeslot:"3:30PM - 4:30PM",picture:"../../assets/jamie.png",homepage:"https://www.jamiebuckinghamministries.com/"},{speaker:"Curtis Dougherty",ministry:"Curtis Dougherty Ministries",timeslot:"4:30PM - 5:45PM",picture:"../../assets/curtis.png",homepage:"https://www.cascadechapel.org/"},{speaker:"Alexander Scourby",ministry:"Bible Reading",timeslot:"5:45PM - 6:15PM",picture:"../../assets/scourby.png",homepage:"https://www.scourby.com/"},{speaker:"Steve Schell",ministry:"Life Lessons Radio",timeslot:"6:30PM - 7:00PM",picture:"../../assets/steve.png",homepage:"https://www.lifelessonsradio.org/"},{speaker:"Derek Prince",ministry:"Derek Prince Ministries",timeslot:"7:00PM - 8:15PM",picture:"../../assets/derek.png",homepage:"https://www.derekprince.org/"},{speaker:"Chuck Missler",ministry:"66/40 with Chuck Missler",timeslot:"8:30PM - 9:00PM",picture:"../../assets/chuck.png",homepage:"https://www.khouse.org/"},{speaker:"Paul Washer",ministry:"HeartCry Missionary Society",timeslot:"9:30PM - 10:30PM",picture:"../../assets/paul.png",homepage:"http://www.heartcrymission.com/"},{speaker:"Ern Baxter",ministry:"Ern Baxter Teaching Legacy",timeslot:"11:00PM - 12:15AM",picture:"../../assets/ern.png",homepage:"https://www.radiomv.org/"}]}}},xe=je,Oe=(a("41d9"),Object(g["a"])(xe,ke,Pe,!1,null,null,null));Oe.options.__file="Schedule.vue";var qe=Oe.exports,Te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ie=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"donate"},[a("div",{staticClass:"donate-header"},[a("div",{staticClass:"divider"},[a("hr")]),a("span",{staticClass:"donate-title"},[e._v("Donate")]),a("div",{staticClass:"divider"},[a("hr")]),a("div",{staticClass:"donate-body"},[a("p",[e._v("Radio of the Master's Voice is a one-of-a-kind station that is dedicated to the transmission of true worship and Spirit-inspired messages that will foster real spiritual growth in listeners. We are completely non-profit, and do not air advertisements--our station is completely faith-based and listener-supported.")]),a("p",[e._v("Thank you for your interest in supporting our mission, please check in again at a later time to see other donation options.")])])])])}],Se=(a("3ce8"),{}),Ae=Object(g["a"])(Se,Te,Ie,!1,null,null,null);Ae.options.__file="Donate.vue";var Ee=Ae.exports,De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact"},[a("div",{staticClass:"contact-header"},[e._m(0),a("span",{staticClass:"contact-title"},[e._v("Contact Us")]),e._m(1),a("div",{staticClass:"contact-body"},[a("form",{staticClass:"contact-form",attrs:{action:"https://getsimpleform.com/messages?form_api_token=34dc617384ac3409b37bd57d5a771cca",method:"post"}},[a("div",[a("div",[a("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",[a("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email.value,expression:"email.value"}],class:{email:e.email,error:!e.email.valid},attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:e.email.value},on:{input:function(t){t.target.composing||e.$set(e.email,"value",t.target.value)}}})]),a("div",[a("label",{staticClass:"label",attrs:{for:"textarea"}},[e._v("Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.text,expression:"message.text"}],staticClass:"message",attrs:{name:"textarea",id:"textarea",required:"",maxlength:e.message.maxlength},domProps:{value:e.message.text},on:{input:function(t){t.target.composing||e.$set(e.message,"text",t.target.value)}}}),a("span",{staticClass:"counter"},[e._v(e._s(e.message.text.length)+" / "+e._s(e.message.maxlength))])]),e._m(2)])])])])])},He=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider"},[a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{attrs:{type:"submit",value:"Send Form"}})])}],Re={name:"contact",data:function(){return{name:"",email:{value:"",valid:!0},message:{text:"",maxlength:255},submitted:!1}},methods:{validate:function(e,t){"email"===e&&(this.email.valid=!!this.isEmail(t))},isEmail:function(e){var t=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;return t.test(e)}},watch:{"email.value":function(e){this.validate("email",e)}}},$e=Re,Be=(a("db9a"),Object(g["a"])($e,De,He,!1,null,"7d70eede",null));Be.options.__file="Contact.vue";var ze=Be.exports;s["a"].use(ie["a"]);var Le=new ie["a"]({base:"/",routes:[{path:"/",name:"history",component:me},{path:"/Schedule",name:"schedule",component:qe},{path:"/queue",name:"coming-up",component:he},{path:"/donate",name:"donate",component:Ee},{path:"/requests",name:"requests",component:we},{path:"/contact",name:"contact",component:ze},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]});s["a"].use(m["a"]);var Ne=new m["a"].Store({state:{streamPort:8e3,previousVolume:"",volume:90,volumeAdjust:!1,refreshInterval:1e4,interval:"",currentTime:0,timerInterval:null,timerRunning:!1,requestSongs:[],songInfo:"",songHistory:"",songQueue:"",modalObject:"",trailers:["Curtis Dougherty","David Pawson","Derek Prince","Ern Baxter","Jamie Buckingham","John Casteel","Paul Washer","Scourby"],approval:"",menuToggle:!1,history:!1,isPlaying:!1,loading:!0,moreInfoModalDisplay:!1,expandedPlayer:!0},mutations:{setStreamPort:function(e,t){e.streamPort=t},thumbsUp:function(e){!0===e.approval?e.approval="":e.approval=!0},thumbsDown:function(e){!1===e.approval?e.approval="":e.approval=!1},toggleMenu:function(e){e.menuToggle=!e.menuToggle},menuDisable:function(e){e.menuToggle=!1},setModalObject:function(e,t){e.modalObject=t},toggleExpandedPlayer:function(e){e.expandedPlayer=!e.expandedPlayer},expandPlayerCloseMenu:function(e){e.expandedPlayer=!0,e.menuToggle=!1},minimizePlayer:function(e){e.expandedPlayer=!1,e.menuToggle=!1},toggleMoreInfoModal:function(e){e.moreInfoModalDisplay=!e.moreInfoModalDisplay},modalClose:function(e){e.moreInfoModalDisplay=!1},volumeAdjustToggle:function(e){e.volumeAdjust=!e.volumeAdjust},updateVolume:function(e,t){e.volume=t},setPreviousVolume:function(e,t){e.previousVolume=t},countupTimer:function(e){e.timerRunning&&e.currentTime++},setTimerRunning:function(e,t){e.timerRunning=t},setTimerInterval:function(e,t){e.timerInterval=t},setSongInfo:function(e,t){e.songInfo=t.song_info,e.songHistory=t.song_history,e.songQueue=t.song_queue,e.requestSongs=[]},historyToggle:function(e){e.history=!e.history},isPlaying:function(e,t){e.isPlaying=t},newInterval:function(e,t){e.interval=t},setLoading:function(e,t){e.loading=t}},actions:{pauseChangeQuality:function(e,t){var a=e.dispatch,s=e.commit;a("pause"),s("setStreamPort",t),setTimeout(function(){return a("playPause")},200)},getSongInfo:function(e){var t=e.state,a=e.commit,s=t.songInfo;F.a.get("https://radiomv.org/samHTMweb/info.json").then(function(e){return e.data}).then(function(e){s.title&&s.title===e.song_info.title||(a("setSongInfo",e),!0===t.loading&&a("setLoading",!1))})},updateRequestSongs:function(e,t){var a=e.state;a.requestSongs.push(t)},setToggleModal:function(e,t){var a=e.commit;a("setModalObject",t),a("toggleMoreInfoModal")},playPause:function(e){var t=e.commit,a=e.dispatch;audio.paused?(audio.play(),t("isPlaying",!0),a("timerRun")):a("pause")},pause:function(e){var t=e.commit,a=e.dispatch;audio.pause(),t("isPlaying",!1),a("timerPause")},timerRun:function(e){var t=e.state,a=e.commit;a("setTimerRunning",!0),a("setTimerInterval",setInterval(function(){t.timerRunning&&t.currentTime++},1e3))},timerPause:function(e){var t=e.state,a=e.commit;a("setTimerRunning",!1),clearInterval(t.timerInterval)},muteToggle:function(e){var t=e.state,a=e.commit;0===t.volume?a("updateVolume",t.previousVolume):(a("setPreviousVolume",t.volume),a("updateVolume",0))}},getters:{currentStream:function(e){return"http://136.0.16.57:".concat(e.streamPort,"/.stream")}}});s["a"].config.productionTip=!1,new s["a"]({router:Le,store:Ne,render:function(e){return e(se)}}).$mount("#app")},6131:function(e,t,a){"use strict";var s=a("bf75"),i=a.n(s);i.a},"61a9":function(e,t,a){},"64a9":function(e,t,a){},"6a41":function(e,t,a){},"7d58":function(e,t,a){"use strict";var s=a("fb06"),i=a.n(s);i.a},"8f59":function(e,t,a){"use strict";var s=a("61a9"),i=a.n(s);i.a},"99d2":function(e,t,a){"use strict";var s=a("b64b"),i=a.n(s);i.a},a707:function(e,t,a){"use strict";var s=a("5692"),i=a.n(s);i.a},aaaa:function(e,t,a){"use strict";var s=a("dff7"),i=a.n(s);i.a},b64b:function(e,t,a){},bcff:function(e,t,a){},bd75:function(e,t,a){},bf75:function(e,t,a){},d08e:function(e,t,a){},db9a:function(e,t,a){"use strict";var s=a("bcff"),i=a.n(s);i.a},dff7:function(e,t,a){},f025:function(e,t,a){},f4ef:function(e,t,a){"use strict";var s=a("bd75"),i=a.n(s);i.a},fb06:function(e,t,a){}});
//# sourceMappingURL=app.e072bb13.js.map