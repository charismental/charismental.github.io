(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,m=[];u<o.length;u++)i=o[u],n[i]&&m.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},i={app:0},n={app:0},r=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9e10f172"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={about:1};i[e]?t.push(i[e]):0!==i[e]&&s[e]&&t.push(i[e]=new Promise(function(t,s){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"8aafb47c"}[e]+".css",n=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===n))return t()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){l=m[o],u=l.getAttribute("data-href");if(u===a||u===n)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||n,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.request=a,delete i[e],d.parentNode.removeChild(d),s(r)},d.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){i[e]=0}));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,s){a=n[e]=[t,s]});t.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e),l=function(t){u.onerror=u.onload=null,clearTimeout(m);var s=n[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,s[1](r)}n[e]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"1e92":function(e,t,s){"use strict";var a=s("3ba5"),i=s.n(a);i.a},"2f0f":function(e,t,s){"use strict";var a=s("f025"),i=s.n(a);i.a},"3ba5":function(e,t,s){},"3ce8":function(e,t,s){"use strict";var a=s("d08e"),i=s.n(a);i.a},"41d9":function(e,t,s){"use strict";var a=s("47cc"),i=s.n(a);i.a},"47cc":function(e,t,s){},"52ad":function(e,t,s){"use strict";var a=s("6a41"),i=s.n(a);i.a},5692:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("f499"),i=s.n(a),n=(s("cadf"),s("551c"),s("097d"),s("2b0e")),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Slide",{attrs:{width:"360",burgerIcon:!1,noOverlay:"",isOpen:e.menuToggle},on:{closeMenu:e.menuDisable}},[s("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[s("i",{staticClass:"material-icons"},[e._v("info")]),s("span",[e._v("About")])]),s("router-link",{attrs:{to:"/history"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[s("i",{staticClass:"material-icons"},[e._v("skip_previous")]),s("span",[e._v("History")])]),s("router-link",{attrs:{to:"/queue"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[s("i",{staticClass:"material-icons"},[e._v("skip_next")]),s("span",[e._v("Upcoming")])]),s("router-link",{attrs:{to:"/schedule"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[s("i",{staticClass:"material-icons"},[e._v("schedule")]),s("span",[e._v("Schedule")])]),s("router-link",{attrs:{to:"/requests"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[s("i",{staticClass:"material-icons"},[e._v("music_note")]),s("span",[e._v("Requests")])]),s("router-link",{attrs:{to:"/donate"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[s("i",{staticClass:"material-icons"},[e._v("attach_money")]),s("span",[e._v("Donate")])]),s("router-link",{attrs:{to:"/contact"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[s("i",{staticClass:"material-icons"},[e._v("feedback")]),s("span",[e._v("Contact")])]),s("router-link",{attrs:{to:"/favorites"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[s("i",{staticClass:"material-icons"},[e._v("favorite")]),s("span",[e._v("Favorites")])]),s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"material-icons"},[e._v("library_music")]),s("input",{attrs:{type:"radio",id:"high",value:"8000"},domProps:{checked:8e3===e.streamPort},on:{click:function(t){e.pauseChangeQuality(8e3)}}}),s("label",{attrs:{for:"high"}},[e._v("HQ")]),s("input",{attrs:{type:"radio",id:"med",value:"8006"},domProps:{checked:8006===e.streamPort},on:{click:function(t){e.pauseChangeQuality(8006)}}}),s("label",{attrs:{for:"med"}},[e._v("MQ")]),s("input",{attrs:{type:"radio",id:"low",value:"8004"},domProps:{checked:8004===e.streamPort},on:{click:function(t){e.pauseChangeQuality(8004)}}}),s("label",{attrs:{for:"low"}},[e._v("LQ")])])],1),s("player"),e.expandedPlayer?e._e():s("router-view"),s("more-info-modal")],1)},o=[],c=s("cebc"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:[e.expandedPlayer?"player":"player1"]},[s("top-bar"),s("current-album-art"),s("current-meta"),s("feedback",{attrs:{song:e.songInfo}}),s("timer"),s("div",{staticClass:"play-container",on:{click:e.playPause,keyup:function(t){return"button"in t||!e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?e.playPause(t):null}}},[e.isPlaying?s("i",{staticClass:"material-icons",class:[e.expandedPlayer?"md-96":"md-48"]},[e._v("pause_circle_outline")]):s("i",{staticClass:"material-icons",class:[e.expandedPlayer?"md-96":"md-48"]},[e._v("play_circle_outline")]),s("audio",{attrs:{id:"audio",src:e.currentStream}},[e._v("\n      Your browser does not support the audio element.\n      ")])]),s("div",{staticClass:"more-info"},[s("i",{staticClass:"material-icons",class:[e.expandedPlayer?"md-84":"md-36"],on:{click:function(t){e.setToggleModal(e.songInfo)}}},[e._v("more_horiz")])])],1)},u=[],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"timer"},[s("div",{class:[e.expandedPlayer?"expanded-timer":"minimized-timer",6===e.time.length?"three":"",7===e.time.length?"four":""]},[s("span",[e._v(e._s(e.time||"00:00"))])])])},d=[],p=s("2f62"),g={name:"Timer",computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer"]),{currentTime:function(){return this.$store.state.currentTime},time:function(){return this.minutes+":"+this.seconds},minutes:function(){var e=Math.floor(this.currentTime/60);return e>=10?e:"0"+e},seconds:function(){var e=this.currentTime-60*this.minutes;return e>=10?e:"0"+e}})},v=g,f=(s("1e92"),s("2877")),h=Object(f["a"])(v,m,d,!1,null,null,null);h.options.__file="Timer.vue";var b=h.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"feedback",class:[e.expandedPlayer?"expanded-feedback":"minimized-feedback"]},[s("i",{staticClass:"material-icons",class:[!1===e.approval?"active":""],attrs:{title:"Thumbs Down"},on:{click:function(t){e.add({song:e.song,approval:!1})}}},[e._v("thumb_down_alt")]),s("i",{staticClass:"material-icons",class:[!0===e.approval?"active":""],attrs:{title:"Thumbs Up"},on:{click:function(t){e.add({song:e.song,approval:!0})}}},[e._v("thumb_up_alt")])])},_=[],C=(s("20d6"),s("bc3a")),M=s.n(C),w={name:"Feedback",props:["song"],data:function(){return{approval:"",ratedSong:""}},computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","mySongs","moreInfoModalDisplay"]),{api:function(){return"https://api.mlab.com/api/1/databases/songlist/collections/rated?apiKey=MxT5bRs11urXAq91rBbbZdGRkVyxC0rB&q={%22songid%22:%22".concat(this.song.songid,"%22}")}}),methods:Object(c["a"])({setSong:function(){var e=this;M.a.get(this.api).then(function(e){return e.data[0]}).then(function(t){e.ratedSong=t})},dislike:function(){this.ratedSong&&M.a.put(this.api,{_id:{$oid:this.ratedSong._id.$oid},title:this.ratedSong.title,artist:this.ratedSong.artist,album:this.ratedSong.album,minsec:this.ratedSong.minsec,combine:this.ratedSong.combine,picture:this.ratedSong.picture,buycd:this.ratedSong.buycd,songid:this.ratedSong.songid,likes:this.ratedSong.likes,dislikes:this.ratedSong.dislikes+1})}},Object(p["d"])(["addToMySongs","removeFromMySongs","updateMySongsApproval"]),{setInitialApproval:function(e){var t=this.mySongs.some(function(t){return t.songid===e.songid});if(t){var s=this.mySongs.findIndex(function(t){return t.songid===e.songid});this.approval=this.mySongs[s].approval}else this.approval=""},add:function(e){var t=this.approval;if(t===e.approval)this.approval="",this.removeFromMySongs(e);else{var s=this.mySongs.some(function(t){return t.songid===e.song.songid});this.approval=e.approval,s?(!1===e.approval&&this.dislike(),this.updateMySongsApproval(e)):(!1===e.approval&&this.dislike(),this.addToMySongs(e))}}}),mounted:function(){this.setInitialApproval(this.song),this.setSong()},watch:{song:function(){this.setInitialApproval(this.song)},moreInfoModalDisplay:function(){this.setInitialApproval(this.song)}}},k=w,P=(s("99d2"),Object(f["a"])(k,y,_,!1,null,null,null));P.options.__file="Feedback.vue";var j=P.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"top-bar"},[s("div",{staticClass:"arrow-icon",on:{click:e.toggleExpandedPlayer}},[e.expandedPlayer?s("i",{staticClass:"material-icons md-36"},[e._v("expand_less")]):s("i",{staticClass:"material-icons md-36"},[e._v("expand_more")])]),s("div",{staticClass:"title-bar"},[s("router-link",{attrs:{to:"/requests"},nativeOn:{click:function(t){return e.minimizePlayer(t)}}},[s("span",[e._v("Radiomv.org")])])],1),e._m(0),s("div",{staticClass:"hamburger",on:{click:e.toggleMenu}},[e.menuToggle?e._e():s("i",{staticClass:"material-icons md-36"},[e._v("menu")])])])},O=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"live-notice"},[s("span",{staticClass:"live"},[e._v("LIVE  ")]),s("div",{staticClass:"live-dot"})])}],x={name:"TopBar",computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","menuToggle"])),methods:Object(c["a"])({},Object(p["d"])(["toggleExpandedPlayer","toggleMenu","minimizePlayer"]))},T=x,q=(s("f4ef"),Object(f["a"])(T,S,O,!1,null,null,null));q.options.__file="TopBar.vue";var I=q.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"current-album-art",class:[e.expandedPlayer?"expanded":"minimized"]},[s("img",{attrs:{src:e.itemImg(e.songInfo),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:e.songInfo.title},on:{click:function(t){e.setToggleModal(e.songInfo)}}})])},E=[],$={computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","songInfo","loading"])),methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{itemImg:function(e){var t="https://radiomv.org/samHTMweb/";return e.picture?t+e.picture:this.loading?t+"loading.gif":t+"customMissing.jpg"}})},H=$,R=(s("a707"),Object(f["a"])(H,A,E,!1,null,null,null));R.options.__file="CurrentAlbumArt.vue";var D=R.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"current-meta",class:[e.expandedPlayer?"expanded-meta":"minimized-meta"]},[s("div",{staticClass:"marquee-container"},[s("span",{staticClass:"title",class:[e.marqueeTrigger(e.songInfo.title,24)?"marquee":""]},[e._v(e._s(e.songInfo.title))])]),s("div",{staticClass:"marquee-container"},[s("span",{staticClass:"artist",class:[e.marqueeTrigger(e.songInfo.artist,33)?"marquee":""]},[e._v(e._s(e.songInfo.artist))])]),s("div",{staticClass:"marquee-container"},[s("span",{staticClass:"album",class:[e.marqueeTrigger(e.songInfo.album,33)?"marquee":""]},[e._v(e._s(e.songInfo.album))])])])},z=[],L={name:"Current-Meta",computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","songInfo"])),methods:{marqueeTrigger:function(e,t){return!!(e&&e.length>t)}}},N=L,Q=(s("52ad"),Object(f["a"])(N,B,z,!1,null,null,null));Q.options.__file="CurrentMeta.vue";var F=Q.exports,U={name:"Player",components:{Feedback:j,Timer:b,TopBar:I,CurrentAlbumArt:D,CurrentMeta:F},methods:Object(c["a"])({},Object(p["d"])(["newInterval"]),{},Object(p["b"])(["getSongInfo","playPause","pause","setToggleModal"]),{setNavigatorMeta:function(){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:this.songInfo.title,artist:this.songInfo.artist,album:this.songInfo.album,artwork:"https://radiomv.org/samHTMweb/".concat(this.songInfo.picture)}))}}),computed:Object(c["a"])({},Object(p["e"])(["isPlaying","expandedPlayer","refreshInterval","songInfo","menuToggle"]),{},Object(p["c"])(["currentStream"])),created:function(){this.getSongInfo(),this.newInterval(setInterval(this.getSongInfo,this.refreshInterval))}},J=U,Z=(s("6131"),Object(f["a"])(J,l,u,!1,null,null,null));Z.options.__file="Player.vue";var W=Z.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition-group",{attrs:{name:"fade"}},[e.moreInfoModalDisplay?s("div",{key:"1",staticClass:"more-info-modal"},[s("img",{attrs:{src:"https://radiomv.org/samHTMweb/"+e.modalObject.picture,alt:""}}),s("div",{staticClass:"modal-inner"},[s("span",{staticClass:"more-info-header"},[e._v(e._s(e.modalObject.title))]),s("div",{staticClass:"divider"},[s("hr")]),s("div",{staticClass:"modal-body"},[s("span",{staticClass:"more-info-artist"},[s("i",{staticClass:"material-icons"},[e._v("whatshot")]),e._v(" Artist: "+e._s(e.modalObject.artist))]),s("span",{staticClass:"more-info-album"},[s("i",{staticClass:"material-icons"},[e._v("album")]),e._v(" Album: "+e._s(e.modalObject.album))]),s("span",{staticClass:"more-info-duration"},[s("i",{staticClass:"material-icons"},[e._v("av_timer")]),e._v("Duration: "+e._s(e.modalObject.minsec))]),e.modalObject.buycd?s("span",{staticClass:"more-info-buycd"},[s("a",{attrs:{href:e.modalObject.buycd,target:"_blank"}},[s("i",{staticClass:"material-icons"},[e._v("exit_to_app")]),e._v("Buy CD")])]):e._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:e.modalObject.songid,expression:"modalObject.songid"}],staticClass:"request-span"},[s("a",{on:{click:e.ajaxSongRequest}},[!e.modalObject.type||"S"===e.modalObject.type&&!e.modalObjectUnrequestable?s("span",{staticClass:"more-info-request"},[s("i",{staticClass:"material-icons"},[e._v("audiotrack")]),e.requesting?s("span",{staticClass:"loading"},[e._v("Requesting")]):s("span",[e._v("Click to request this song")])]):e._e()])]),s("div",{staticClass:"feedback-container"},[s("feedback",{attrs:{song:e.modalObject}})],1),e.requestHeader?s("div",{staticClass:"request-response"},[s("h1",{staticClass:"request-response-header",class:["Request Successful"===e.requestHeader?"request-success":""]},[e._v(e._s(e.requestHeader))]),s("h3",[e._v(e._s(e.requestBody))])]):e._e(),s("div",{staticClass:"modal-close"},[s("i",{staticClass:"material-icons",on:{click:e.closeModal}},[e._v("clear")])])])])]):e._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:e.moreInfoModalDisplay,expression:"moreInfoModalDisplay"}],key:"2",staticClass:"modal-overlay",on:{click:e.closeModal}})])},X=[],G=(s("a481"),s("6762"),s("2fdb"),{name:"More-Info-Modal",components:{Feedback:j},data:function(){return{corsProxy:"https://cors-anywhere.herokuapp.com/",requestUrl:"http://request.audiorealm.com/req/req.html?songID=",portHost:"&samport=1221&samhost=67.182.155.220",requestHeader:"",requestBody:"",requesting:!1}},computed:Object(c["a"])({},Object(p["e"])(["moreInfoModalDisplay","modalObject","songInfo","songHistory","songQueue"]),{modalObjectUnrequestable:function(){var e=this.songHistory.concat(this.songQueue).map(function(e){return e.songid});return e.includes(this.modalObject.songid)}}),watch:{requestHeader:function(){"Request Successful"===this.requestHeader&&this.updateRequestSongs(this.modalObject)}},methods:Object(c["a"])({},Object(p["d"])(["modalClose"]),{},Object(p["b"])(["updateRequestSongs"]),{closeModal:function(){this.requestHeader="",this.requestBody="",this.modalClose()},ajaxSongRequest:function(){var e=this;this.requesting=!0;var t=new DOMParser;M.a.get("".concat(this.corsProxy).concat(this.requestUrl).concat(this.modalObject.songid).concat(this.portHost),{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(s){var a=t.parseFromString(s.data,"text/html"),i=a.getElementById("content");e.requestHeader=i.children[0].innerHTML,e.requestBody=i.children[1].innerHTML.replace("<br>",""),e.requesting=!1,setTimeout(function(){e.closeModal()},3300)})}})}),K=G,Y=(s("2f0f"),Object(f["a"])(K,V,X,!1,null,null,null));Y.options.__file="MoreInfoModal.vue";var ee=Y.exports,te=s("db0f"),se={components:{Player:W,MoreInfoModal:ee,Slide:te["Slide"]},computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","menuToggle","streamPort"])),methods:Object(c["a"])({},Object(p["d"])(["minimizePlayer","menuDisable"]),{},Object(p["b"])(["pauseChangeQuality"]))},ae=se,ie=(s("034f"),Object(f["a"])(ae,r,o,!1,null,null,null));ie.options.__file="App.vue";var ne=ie.exports,re=s("8c4f"),oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"history"},[s("div",{staticClass:"history-header"},[e._m(0),s("span",{staticClass:"history-title"},[e._v("Recent History")]),e._m(1),s("div",{staticClass:"history-body"},[s("simplebar",{attrs:{id:"history-container","data-simplebar-auto-hide":"true"}},e._l(e.songHistory.slice(0,29),function(t,a){return s("div",{key:a,staticClass:"history-item"},[s("div",{staticClass:"history-album"},[s("img",{staticClass:"history-img",attrs:{src:e.itemImg(t),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){e.setToggleModal(t)}}})]),s("div",{staticClass:"history-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.title))]),s("span",{staticClass:"artist",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.artist))]),s("hr")])])}),0)],1)])])},ce=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])}],le=s("8d3b"),ue=(s("f138"),{name:"history",components:{simplebar:le["a"]},computed:Object(c["a"])({},Object(p["e"])(["songHistory"])),methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{itemImg:function(e){var t="https://radiomv.org/samHTMweb/";return e.picture?t+e.picture:t+"customMissing.jpg"},itemUrl:function(e){return e.buycd?e.buycd:"https://www.radiomv.org"}})}),me=ue,de=(s("8f59"),Object(f["a"])(me,oe,ce,!1,null,null,null));de.options.__file="History.vue";var pe=de.exports,ge=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"queue"},[s("div",{staticClass:"queue-header"},[e._m(0),s("span",{staticClass:"queue-title"},[e._v("Upcoming")]),e._m(1),s("div",{staticClass:"queue-body"},[s("simplebar",{attrs:{id:"queue-container","data-simplebar-auto-hide":"true"}},[e._l(e.songQueue.slice(0,-1),function(t,a){return s("div",{key:a,staticClass:"queue-item"},[s("div",{staticClass:"queue-album"},[s("img",{staticClass:"queue-img",attrs:{src:e.itemImg(t),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){e.setToggleModal(t)}}})]),s("div",{staticClass:"queue-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.title))]),s("span",{staticClass:"artist",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.artist))]),s("hr")])])}),e.requestSongs.length?s("div",{staticClass:"requested-placeholder"},e._l(e.requestSongs,function(t,a){return s("div",{key:a,staticClass:"queue-item"},[s("div",{staticClass:"queue-album"},[s("img",{staticClass:"queue-img",attrs:{src:e.itemImg(t),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){e.setToggleModal(t)}}})]),s("div",{staticClass:"queue-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.title))]),s("span",{staticClass:"artist",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.artist))]),s("hr")])])}),0):e._e()],2)],1)])])},ve=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])}],fe={name:"history",components:{simplebar:le["a"]},computed:Object(c["a"])({},Object(p["e"])(["songQueue","requestSongs"])),methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{itemImg:function(e){var t="https://radiomv.org/samHTMweb/";return e.picture?t+e.picture:t+"customMissing.jpg"},itemUrl:function(e){return e.buycd?e.buycd:"https://www.radiomv.org"}})},he=fe,be=(s("7d58"),Object(f["a"])(he,ge,ve,!1,null,null,null));be.options.__file="ComingUp.vue";var ye=be.exports,_e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"request"},[s("div",{staticClass:"request-header"},[e._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"},{name:"focus",rawName:"v-focus"}],staticClass:"request-input",attrs:{type:"text",placeholder:"Search music..."},domProps:{value:e.search},on:{keyup:e.getSongs,input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._m(1),s("div",{staticClass:"request-body"},[s("simplebar",{attrs:{id:"request-container","data-simplebar-auto-hide":"true"}},e._l(e.searchResults,function(t,a){return s("div",{key:a,staticClass:"request-item"},[s("div",{staticClass:"request-album"},[s("img",{staticClass:"history-img",attrs:{src:e.itemImg(t),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){e.setToggleModal(t)}}})]),s("div",{staticClass:"request-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.title))]),s("span",{staticClass:"artist",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.artist))]),s("hr")])])}),0)],1)])])},Ce=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])}],Me=(s("386d"),{name:"requests",components:{simplebar:le["a"]},directives:{focus:{inserted:function(e){e.focus()}}},data:function(){return{search:"",api1:"https://api.mlab.com/api/1/databases/songlist/collections/songs?apiKey=MxT5bRs11urXAq91rBbbZdGRkVyxC0rB&q={%22combine%22:{%20$regex:%20%27(?i).*",api2:".*%27%20}}",searchResults:""}},methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{getSongs:function(){var e=this;this.search&&this.search.length>=3&&M.a.get(this.api1+this.search+this.api2).then(function(e){return e.data}).then(function(t){e.searchResults=t})},itemImg:function(e){var t="https://radiomv.org/samHTMweb/";return e.picture?t+e.picture:t+"customMissing.jpg"}})}),we=Me,ke=(s("aaaa"),Object(f["a"])(we,_e,Ce,!1,null,null,null));ke.options.__file="Requests.vue";var Pe=ke.exports,je=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"schedule"},[s("div",{staticClass:"schedule-header"},[e._m(0),s("span",{staticClass:"schedule-title"},[e._v("Schedule")]),e._m(1),s("div",{staticClass:"schedule-body"},[s("simplebar",{attrs:{id:"schedule-container","data-simplebar-auto-hide":"true"}},e._l(e.schedule,function(t,a){return s("div",{key:a,staticClass:"schedule-item"},[s("div",{staticClass:"schedule-img-container"},[s("img",{staticClass:"schedule-img",attrs:{src:t.picture}})]),s("div",{staticClass:"schedule-ministry-info"},[s("span",{staticClass:"time-slot"},[e._v(e._s(t.timeslot))]),s("span",{staticClass:"ministry-name"},[e._v(e._s(t.ministry))]),s("span",{staticClass:"speaker"},[e._v(e._s(t.speaker))]),s("hr")])])}),0)],1)])])},Se=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])}],Oe={name:"schedule",components:{simplebar:le["a"]},data:function(){return{schedule:[{speaker:"David Pawson",ministry:"David Pawson Teaching Library",timeslot:"12:30AM - 1:30AM",picture:"../../assets/david.png",homepage:"https://www.davidpawson.org/"},{speaker:"Alexander Scourby",ministry:"Bible Reading",timeslot:"2:00AM - 2:30AM",picture:"../../assets/scourby.png",homepage:"https://www.scourby.com/"},{speaker:"Alistair Begg",ministry:"Truth for Life",timeslot:"3:30AM - 4:00AM",picture:"../../assets/alistair.png",homepage:"https://www.truthforlife.org/"},{speaker:"Chuck Missler",ministry:"66/40 with Chuck Missler",timeslot:"4:00AM - 4:30AM",picture:"../../assets/chuck.png",homepage:"https://www.khouse.org/"},{speaker:"Jamie Buckingham",ministry:"Risky Living Ministries",timeslot:"5:00AM - 6:00AM",picture:"../../assets/jamie.png",homepage:"https://www.jamiebuckinghamministries.com/"},{speaker:"Dr. John Casteel",ministry:"John Casteel Ministries",timeslot:"6:30AM - 7:30AM",picture:"../../assets/john.png",homepage:"http://www.johncasteel.com/"},{speaker:"Steve Schell",ministry:"Life Lessons Radio",timeslot:"8:00AM - 8:30AM",picture:"../../assets/steve.png",homepage:"https://www.lifelessonsradio.org/"},{speaker:"Curtis Dougherty",ministry:"Curtis Dougherty Ministries",timeslot:"8:30AM - 9:45AM",picture:"../../assets/curtis.png",homepage:"https://www.cascadechapel.org/"},{speaker:"David Pawson",ministry:"David Pawson Teaching Library",timeslot:"10:00AM - 11:00AM",picture:"../../assets/david.png",homepage:"https://www.davidpawson.org/"},{speaker:"Paul Washer",ministry:"HeartCry Missionary Society",timeslot:"11:00AM - 12:00PM",picture:"../../assets/paul.png",homepage:"http://www.heartcrymission.com/"},{speaker:"Alistair Begg",ministry:"Truth for Life",timeslot:"12:30PM - 1:00PM",picture:"../../assets/alistair.png",homepage:"https://www.truthforlife.org/"},{speaker:"Ern Baxter",ministry:"Ern Baxter Teaching Legacy",timeslot:"1:30PM - 2:45PM",picture:"../../assets/ern.png",homepage:"https://www.radiomv.org/"},{speaker:"Alexander Scourby",ministry:"Bible Reading",timeslot:"2:50PM - 3:20PM",picture:"../../assets/scourby.png",homepage:"https://www.scourby.com/"},{speaker:"Jamie Buckingham",ministry:"Risky Living Ministries",timeslot:"3:30PM - 4:30PM",picture:"../../assets/jamie.png",homepage:"https://www.jamiebuckinghamministries.com/"},{speaker:"Curtis Dougherty",ministry:"Curtis Dougherty Ministries",timeslot:"4:30PM - 5:45PM",picture:"../../assets/curtis.png",homepage:"https://www.cascadechapel.org/"},{speaker:"Alexander Scourby",ministry:"Bible Reading",timeslot:"5:45PM - 6:15PM",picture:"../../assets/scourby.png",homepage:"https://www.scourby.com/"},{speaker:"Steve Schell",ministry:"Life Lessons Radio",timeslot:"6:30PM - 7:00PM",picture:"../../assets/steve.png",homepage:"https://www.lifelessonsradio.org/"},{speaker:"Derek Prince",ministry:"Derek Prince Ministries",timeslot:"7:00PM - 8:15PM",picture:"../../assets/derek.png",homepage:"https://www.derekprince.org/"},{speaker:"Chuck Missler",ministry:"66/40 with Chuck Missler",timeslot:"8:30PM - 9:00PM",picture:"../../assets/chuck.png",homepage:"https://www.khouse.org/"},{speaker:"Paul Washer",ministry:"HeartCry Missionary Society",timeslot:"9:30PM - 10:30PM",picture:"../../assets/paul.png",homepage:"http://www.heartcrymission.com/"},{speaker:"Ern Baxter",ministry:"Ern Baxter Teaching Legacy",timeslot:"11:00PM - 12:15AM",picture:"../../assets/ern.png",homepage:"https://www.radiomv.org/"}]}}},xe=Oe,Te=(s("41d9"),Object(f["a"])(xe,je,Se,!1,null,null,null));Te.options.__file="Schedule.vue";var qe=Te.exports,Ie=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ae=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"donate"},[s("div",{staticClass:"donate-header"},[s("div",{staticClass:"divider"},[s("hr")]),s("span",{staticClass:"donate-title"},[e._v("Donate")]),s("div",{staticClass:"divider"},[s("hr")]),s("div",{staticClass:"donate-body"},[s("p",[e._v("Radio of the Master's Voice is a one-of-a-kind station that is dedicated to the transmission of true worship and Spirit-inspired messages that will foster real spiritual growth in listeners. We are completely non-profit, and do not air advertisements--our station is completely faith-based and listener-supported.")]),s("p",[e._v("Thank you for your interest in supporting our mission, please check in again at a later time to see other donation options.")])])])])}],Ee=(s("3ce8"),{}),$e=Object(f["a"])(Ee,Ie,Ae,!1,null,null,null);$e.options.__file="Donate.vue";var He=$e.exports,Re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contact"},[s("div",{staticClass:"contact-header"},[e._m(0),s("span",{staticClass:"contact-title"},[e._v("Contact Us")]),e._m(1),s("div",{staticClass:"contact-body"},[s("form",{staticClass:"contact-form",attrs:{action:"https://getsimpleform.com/messages?form_api_token=34dc617384ac3409b37bd57d5a771cca",method:"post"}},[s("div",[s("div",[s("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),s("div",[s("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email.value,expression:"email.value"}],class:{email:e.email,error:!e.email.valid},attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:e.email.value},on:{input:function(t){t.target.composing||e.$set(e.email,"value",t.target.value)}}})]),s("div",[s("label",{staticClass:"label",attrs:{for:"textarea"}},[e._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.text,expression:"message.text"}],staticClass:"message",attrs:{name:"textarea",id:"textarea",required:"",maxlength:e.message.maxlength},domProps:{value:e.message.text},on:{input:function(t){t.target.composing||e.$set(e.message,"text",t.target.value)}}}),s("span",{staticClass:"counter"},[e._v(e._s(e.message.text.length)+" / "+e._s(e.message.maxlength))])]),e._m(2)])])])])])},De=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("input",{attrs:{type:"submit",value:"Send Form"}})])}],Be={name:"contact",data:function(){return{name:"",email:{value:"",valid:!0},message:{text:"",maxlength:255},submitted:!1}},methods:{validate:function(e,t){"email"===e&&(this.email.valid=!!this.isEmail(t))},isEmail:function(e){var t=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;return t.test(e)}},watch:{"email.value":function(e){this.validate("email",e)}}},ze=Be,Le=(s("db9a"),Object(f["a"])(ze,Re,De,!1,null,"7d70eede",null));Le.options.__file="Contact.vue";var Ne=Le.exports,Qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"favorites"},[s("div",{staticClass:"favorites-header"},[e._m(0),s("span",{staticClass:"favorites-title"},[e._v("My Favorites")]),e._m(1),s("div",{staticClass:"favorites-body"},[s("simplebar",{attrs:{id:"favorites-container","data-simplebar-auto-hide":"true"}},e._l(e.favoriteSongs,function(t){return s("div",{key:t.songid,staticClass:"favorites-item"},[s("div",{staticClass:"favorites-album"},[s("img",{staticClass:"favorites-img",attrs:{src:e.itemImg(t),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){e.setToggleModal(t)}}})]),s("div",{staticClass:"favorites-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.title))]),s("span",{staticClass:"artist",on:{click:function(s){e.setToggleModal(t)}}},[e._v(e._s(t.artist))]),s("hr")])])}),0)],1)])])},Fe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"divider"},[s("hr")])}],Ue={name:"favorites",components:{simplebar:le["a"]},computed:Object(c["a"])({},Object(p["e"])(["mySongs"]),{},Object(p["c"])(["favoriteSongs"])),methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{itemImg:function(e){var t="https://radiomv.org/samHTMweb/";return e.picture?t+e.picture:t+"customMissing.jpg"},itemUrl:function(e){return e.buycd?e.buycd:"https://www.radiomv.org"}})},Je=Ue,Ze=(s("d6c7"),Object(f["a"])(Je,Qe,Fe,!1,null,null,null));Ze.options.__file="Favorites.vue";var We=Ze.exports;n["a"].use(re["a"]);var Ve=new re["a"]({base:"/",routes:[{path:"/history",name:"history",component:pe},{path:"/schedule",name:"schedule",component:qe},{path:"/queue",name:"coming-up",component:ye},{path:"/donate",name:"donate",component:He},{path:"/requests",name:"requests",component:Pe},{path:"/contact",name:"contact",component:Ne},{path:"/favorites",name:"favorites",component:We},{path:"/",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),Xe=s("75fc");n["a"].use(p["a"]);var Ge=new p["a"].Store({state:{streamPort:8e3,refreshInterval:1e4,interval:"",currentTime:0,timerInterval:null,timerRunning:!1,requestSongs:[],mySongs:[],songInfo:"",songHistory:"",songQueue:"",modalObject:"",trailers:["Curtis Dougherty","David Pawson","Derek Prince","Ern Baxter","Jamie Buckingham","John Casteel","Paul Washer","Scourby"],menuToggle:!1,history:!1,isPlaying:!1,loading:!0,moreInfoModalDisplay:!1,expandedPlayer:!0},mutations:{initializeStore:function(e){if(localStorage.getItem("mySongs")){var t=JSON.parse(localStorage.getItem("mySongs"));e.mySongs=Object(Xe["a"])(t)}},addToMySongs:function(e,t){var s=t.song,a=t.approval,i=s;s.approval=a,e.mySongs.push(i)},updateMySongsApproval:function(e,t){var s=e.mySongs.findIndex(function(e){return e.songid===t.song.songid});e.mySongs[s].approval=t.approval},removeFromMySongs:function(e,t){var s=e.mySongs.findIndex(function(e){return e.songid===t.song.songid});e.mySongs.splice(s,1)},setStreamPort:function(e,t){e.streamPort=t},toggleMenu:function(e){e.menuToggle=!e.menuToggle},menuDisable:function(e){e.menuToggle=!1},setModalObject:function(e,t){e.modalObject=t},toggleExpandedPlayer:function(e){e.expandedPlayer=!e.expandedPlayer},expandPlayerCloseMenu:function(e){e.expandedPlayer=!0,e.menuToggle=!1},minimizePlayer:function(e){e.expandedPlayer=!1,e.menuToggle=!1},toggleMoreInfoModal:function(e){e.moreInfoModalDisplay=!e.moreInfoModalDisplay},modalClose:function(e){e.moreInfoModalDisplay=!1},countupTimer:function(e){e.timerRunning&&e.currentTime++},setTimerRunning:function(e,t){e.timerRunning=t},setTimerInterval:function(e,t){e.timerInterval=t},setSongInfo:function(e,t){e.songInfo=t.song_info,e.songHistory=t.song_history,e.songQueue=t.song_queue,e.requestSongs=[]},historyToggle:function(e){e.history=!e.history},isPlaying:function(e,t){e.isPlaying=t},newInterval:function(e,t){e.interval=t},setLoading:function(e,t){e.loading=t}},actions:{pauseChangeQuality:function(e,t){var s=e.dispatch,a=e.commit;s("pause"),a("setStreamPort",t),setTimeout(function(){return s("playPause")},200)},getSongInfo:function(e){var t=e.state,s=e.commit,a=t.songInfo;M.a.get("https://radiomv.org/samHTMweb/info.json").then(function(e){return e.data}).then(function(e){a.title&&a.title===e.song_info.title||(s("setSongInfo",e),!0===t.loading&&s("setLoading",!1))})},updateRequestSongs:function(e,t){var s=e.state;s.requestSongs.push(t)},setToggleModal:function(e,t){var s=e.commit;s("setModalObject",t),s("toggleMoreInfoModal")},playPause:function(e){var t=e.commit,s=e.dispatch;audio.paused?(audio.play(),t("isPlaying",!0),s("timerRun")):s("pause")},pause:function(e){var t=e.commit,s=e.dispatch;audio.pause(),t("isPlaying",!1),s("timerPause")},timerRun:function(e){var t=e.state,s=e.commit;s("setTimerRunning",!0),s("setTimerInterval",setInterval(function(){t.timerRunning&&t.currentTime++},1e3))},timerPause:function(e){var t=e.state,s=e.commit;s("setTimerRunning",!1),clearInterval(t.timerInterval)}},getters:{currentStream:function(e){return"http://136.0.16.57:".concat(e.streamPort,"/.stream")},favoriteSongs:function(e){return e.mySongs.filter(function(e){return 1==e.approval})}}});n["a"].config.productionTip=!1,new n["a"]({router:Ve,store:Ge,beforeCreate:function(){this.$store.commit("initializeStore")},render:function(e){return e(ne)}}).$mount("#app"),Ge.subscribe(function(e,t){localStorage.setItem("mySongs",i()(t.mySongs))})},6131:function(e,t,s){"use strict";var a=s("bf75"),i=s.n(a);i.a},"61a9":function(e,t,s){},"64a9":function(e,t,s){},"6a41":function(e,t,s){},"7d58":function(e,t,s){"use strict";var a=s("fb06"),i=s.n(a);i.a},"8f59":function(e,t,s){"use strict";var a=s("61a9"),i=s.n(a);i.a},"99d2":function(e,t,s){"use strict";var a=s("b64b"),i=s.n(a);i.a},a707:function(e,t,s){"use strict";var a=s("5692"),i=s.n(a);i.a},aaaa:function(e,t,s){"use strict";var a=s("dff7"),i=s.n(a);i.a},ae2c:function(e,t,s){},b64b:function(e,t,s){},bcff:function(e,t,s){},bd75:function(e,t,s){},bf75:function(e,t,s){},d08e:function(e,t,s){},d6c7:function(e,t,s){"use strict";var a=s("ae2c"),i=s.n(a);i.a},db9a:function(e,t,s){"use strict";var a=s("bcff"),i=s.n(a);i.a},dff7:function(e,t,s){},f025:function(e,t,s){},f4ef:function(e,t,s){"use strict";var a=s("bd75"),i=s.n(a);i.a},fb06:function(e,t,s){}});
//# sourceMappingURL=app.fe4c6cfa.js.map