(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)i=o[u],n[i]&&m.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a85da55e"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s={about:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=new Promise(function(e,s){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"95a9a4ad"}[t]+".css",n=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===n))return e()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){l=m[o],u=l.getAttribute("data-href");if(u===a||u===n)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],d.parentNode.removeChild(d),s(r)},d.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){i[t]=0}));var a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,s){a=n[t]=[e,s]});e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(m);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,s[1](r)}n[t]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var d=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"1e92":function(t,e,s){"use strict";var a=s("3ba5"),i=s.n(a);i.a},"2f0f":function(t,e,s){"use strict";var a=s("f025"),i=s.n(a);i.a},"3ba5":function(t,e,s){},"3ce8":function(t,e,s){"use strict";var a=s("d08e"),i=s.n(a);i.a},"41d9":function(t,e,s){"use strict";var a=s("47cc"),i=s.n(a);i.a},"47cc":function(t,e,s){},"52ad":function(t,e,s){"use strict";var a=s("6a41"),i=s.n(a);i.a},5692:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("f499"),i=s.n(a),n=(s("cadf"),s("551c"),s("097d"),s("2b0e")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Slide",{attrs:{width:"360",burgerIcon:!1,noOverlay:"",isOpen:t.menuToggle},on:{closeMenu:t.menuDisable}},[s("router-link",{attrs:{to:"/"},nativeOn:{click:function(e){return t.minimizePlayer(e)}}},[s("i",{staticClass:"material-icons"},[t._v("info")]),s("span",[t._v("About")])]),s("router-link",{attrs:{to:"/history"},nativeOn:{click:function(e){return t.minimizePlayer(e)}}},[s("i",{staticClass:"material-icons"},[t._v("skip_previous")]),s("span",[t._v("History")])]),s("router-link",{attrs:{to:"/queue"},nativeOn:{click:function(e){return t.minimizePlayer(e)}}},[s("i",{staticClass:"material-icons"},[t._v("skip_next")]),s("span",[t._v("Upcoming")])]),s("router-link",{attrs:{to:"/schedule"},nativeOn:{click:function(e){return t.minimizePlayer(e)}}},[s("i",{staticClass:"material-icons"},[t._v("schedule")]),s("span",[t._v("Schedule")])]),s("router-link",{attrs:{to:"/requests"},nativeOn:{click:function(e){return t.minimizePlayer(e)}}},[s("i",{staticClass:"material-icons"},[t._v("music_note")]),s("span",[t._v("Requests")])]),s("router-link",{attrs:{to:"/donate"},nativeOn:{click:function(e){return t.minimizePlayer(e)}}},[s("i",{staticClass:"material-icons"},[t._v("attach_money")]),s("span",[t._v("Donate")])]),s("router-link",{attrs:{to:"/contact"},nativeOn:{click:function(e){return t.minimizePlayer(e)}}},[s("i",{staticClass:"material-icons"},[t._v("feedback")]),s("span",[t._v("Contact")])]),s("router-link",{attrs:{to:"/favorites"},nativeOn:{click:function(e){return t.minimizePlayer(e)}}},[s("i",{staticClass:"material-icons"},[t._v("favorite")]),s("span",[t._v("Favorites")])]),s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"material-icons"},[t._v("library_music")]),s("input",{attrs:{type:"radio",id:"high",value:"8000"},domProps:{checked:8e3===t.streamPort},on:{click:function(e){t.pauseChangeQuality(8e3)}}}),s("label",{attrs:{for:"high"}},[t._v("HQ")]),s("input",{attrs:{type:"radio",id:"med",value:"8006"},domProps:{checked:8006===t.streamPort},on:{click:function(e){t.pauseChangeQuality(8006)}}}),s("label",{attrs:{for:"med"}},[t._v("MQ")]),s("input",{attrs:{type:"radio",id:"low",value:"8004"},domProps:{checked:8004===t.streamPort},on:{click:function(e){t.pauseChangeQuality(8004)}}}),s("label",{attrs:{for:"low"}},[t._v("LQ")])])],1),s("player"),t.expandedPlayer?t._e():s("router-view"),s("more-info-modal")],1)},o=[],c=s("cebc"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:[t.expandedPlayer?"player":"player1"]},[s("top-bar"),s("current-album-art"),s("current-meta"),s("feedback",{attrs:{song:t.songInfo}}),s("timer"),s("div",{staticClass:"play-container",on:{click:t.playPause,keyup:function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?t.playPause(e):null}}},[t.isPlaying?s("i",{staticClass:"material-icons",class:[t.expandedPlayer?"md-96":"md-48"]},[t._v("pause_circle_outline")]):s("i",{staticClass:"material-icons",class:[t.expandedPlayer?"md-96":"md-48"]},[t._v("play_circle_outline")]),s("audio",{attrs:{id:"audio",src:t.currentStream}},[t._v("\n      Your browser does not support the audio element.\n      ")])]),s("div",{staticClass:"more-info"},[s("i",{staticClass:"material-icons",class:[t.expandedPlayer?"md-84":"md-36"],on:{click:function(e){t.setToggleModal(t.songInfo)}}},[t._v("more_horiz")])])],1)},u=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer"},[s("div",{class:[t.expandedPlayer?"expanded-timer":"minimized-timer",6===t.time.length?"three":"",7===t.time.length?"four":""]},[s("span",[t._v(t._s(t.time||"00:00"))])])])},d=[],p=s("2f62"),g={name:"Timer",computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer"]),{currentTime:function(){return this.$store.state.currentTime},time:function(){return this.minutes+":"+this.seconds},minutes:function(){var t=Math.floor(this.currentTime/60);return t>=10?t:"0"+t},seconds:function(){var t=this.currentTime-60*this.minutes;return t>=10?t:"0"+t}})},v=g,f=(s("1e92"),s("2877")),h=Object(f["a"])(v,m,d,!1,null,null,null),b=h.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"feedback",class:[t.expandedPlayer?"expanded-feedback":"minimized-feedback"]},[s("i",{staticClass:"material-icons",class:[!1===t.approval?"active":""],attrs:{title:"Thumbs Down"},on:{click:function(e){t.add({song:t.song,approval:!1})}}},[t._v("thumb_down_alt")]),s("i",{staticClass:"material-icons",class:[!0===t.approval?"active":""],attrs:{title:"Thumbs Up"},on:{click:function(e){t.add({song:t.song,approval:!0})}}},[t._v("thumb_up_alt")])])},_=[],C=(s("20d6"),s("bc3a")),M=s.n(C),w={name:"Feedback",props:["song"],data:function(){return{approval:"",ratedSong:""}},computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","mySongs","moreInfoModalDisplay"]),{api:function(){return"https://api.mlab.com/api/1/databases/songlist/collections/rated?apiKey=MxT5bRs11urXAq91rBbbZdGRkVyxC0rB&q={%22songid%22:%22".concat(this.song.songid,"%22}")}}),methods:Object(c["a"])({setSong:function(){var t=this;M.a.get(this.api).then(function(t){return t.data[0]}).then(function(e){t.ratedSong=e})},dislike:function(){this.ratedSong&&M.a.put(this.api,{_id:{$oid:this.ratedSong._id.$oid},title:this.ratedSong.title,artist:this.ratedSong.artist,album:this.ratedSong.album,minsec:this.ratedSong.minsec,combine:this.ratedSong.combine,picture:this.ratedSong.picture,buycd:this.ratedSong.buycd,songid:this.ratedSong.songid,likes:this.ratedSong.likes,dislikes:this.ratedSong.dislikes+1})}},Object(p["d"])(["addToMySongs","removeFromMySongs","updateMySongsApproval"]),{setInitialApproval:function(t){var e=this.mySongs.some(function(e){return e.songid===t.songid});if(e){var s=this.mySongs.findIndex(function(e){return e.songid===t.songid});this.approval=this.mySongs[s].approval}else this.approval=""},add:function(t){var e=this.approval;if(e===t.approval)this.approval="",this.removeFromMySongs(t);else{var s=this.mySongs.some(function(e){return e.songid===t.song.songid});this.approval=t.approval,s?(!1===t.approval&&this.dislike(),this.updateMySongsApproval(t)):(!1===t.approval&&this.dislike(),this.addToMySongs(t))}}}),mounted:function(){this.setInitialApproval(this.song),this.setSong()},watch:{song:function(){this.setInitialApproval(this.song)},moreInfoModalDisplay:function(){this.setInitialApproval(this.song)}}},k=w,j=(s("99d2"),Object(f["a"])(k,y,_,!1,null,null,null)),P=j.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-bar"},[s("div",{staticClass:"arrow-icon",on:{click:t.toggleExpandedPlayer}},[t.expandedPlayer?s("i",{staticClass:"material-icons md-36"},[t._v("expand_less")]):s("i",{staticClass:"material-icons md-36"},[t._v("expand_more")])]),s("div",{staticClass:"title-bar"},[s("router-link",{attrs:{to:"/requests"},nativeOn:{click:function(e){return t.minimizePlayer(e)}}},[s("span",[t._v("GraceWay Radio")])])],1),t._m(0),s("div",{staticClass:"hamburger",on:{click:t.toggleMenu}},[t.menuToggle?t._e():s("i",{staticClass:"material-icons md-36"},[t._v("menu")])])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"live-notice"},[s("span",{staticClass:"live"},[t._v("LIVE  ")]),s("div",{staticClass:"live-dot"})])}],x={name:"TopBar",computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","menuToggle"])),methods:Object(c["a"])({},Object(p["d"])(["toggleExpandedPlayer","toggleMenu","minimizePlayer"]))},T=x,q=(s("f4ef"),Object(f["a"])(T,S,O,!1,null,null,null)),I=q.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"current-album-art",class:[t.expandedPlayer?"expanded":"minimized"]},[s("img",{attrs:{src:t.itemImg(t.songInfo),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:t.songInfo.title},on:{click:function(e){t.setToggleModal(t.songInfo)}}})])},E=[],$={computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","songInfo","loading"])),methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{itemImg:function(t){var e="https://radiomv.org/samHTMweb/";return t.picture?e+t.picture:this.loading?e+"loading.gif":e+"customMissing.jpg"}})},H=$,R=(s("a707"),Object(f["a"])(H,A,E,!1,null,null,null)),D=R.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"current-meta",class:[t.expandedPlayer?"expanded-meta":"minimized-meta"]},[s("div",{staticClass:"marquee-container"},[s("span",{staticClass:"title",class:[t.marqueeTrigger(t.songInfo.title,24)?"marquee":""]},[t._v(t._s(t.songInfo.title))])]),s("div",{staticClass:"marquee-container"},[s("span",{staticClass:"artist",class:[t.marqueeTrigger(t.songInfo.artist,33)?"marquee":""]},[t._v(t._s(t.songInfo.artist))])]),s("div",{staticClass:"marquee-container"},[s("span",{staticClass:"album",class:[t.marqueeTrigger(t.songInfo.album,33)?"marquee":""]},[t._v(t._s(t.songInfo.album))])])])},z=[],L={name:"Current-Meta",computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","songInfo"])),methods:{marqueeTrigger:function(t,e){return!!(t&&t.length>e)}}},N=L,Q=(s("52ad"),Object(f["a"])(N,B,z,!1,null,null,null)),U=Q.exports,F={name:"Player",components:{Feedback:P,Timer:b,TopBar:I,CurrentAlbumArt:D,CurrentMeta:U},methods:Object(c["a"])({},Object(p["d"])(["newInterval"]),{},Object(p["b"])(["getSongInfo","playPause","pause","setToggleModal"]),{setNavigatorMeta:function(){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:this.songInfo.title,artist:this.songInfo.artist,album:this.songInfo.album,artwork:"https://radiomv.org/samHTMweb/".concat(this.songInfo.picture)}))}}),computed:Object(c["a"])({},Object(p["e"])(["isPlaying","expandedPlayer","refreshInterval","songInfo","menuToggle"]),{},Object(p["c"])(["currentStream"])),created:function(){this.getSongInfo(),this.newInterval(setInterval(this.getSongInfo,this.refreshInterval))}},J=F,Z=(s("6131"),Object(f["a"])(J,l,u,!1,null,null,null)),W=Z.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition-group",{attrs:{name:"fade"}},[t.moreInfoModalDisplay?s("div",{key:"1",staticClass:"more-info-modal"},[s("img",{attrs:{src:"https://radiomv.org/samHTMweb/"+t.modalObject.picture,alt:""}}),s("div",{staticClass:"modal-inner"},[s("span",{staticClass:"more-info-header"},[t._v(t._s(t.modalObject.title))]),s("div",{staticClass:"divider"},[s("hr")]),s("div",{staticClass:"modal-body"},[s("span",{staticClass:"more-info-artist"},[s("i",{staticClass:"material-icons"},[t._v("whatshot")]),t._v(" Artist: "+t._s(t.modalObject.artist))]),s("span",{staticClass:"more-info-album"},[s("i",{staticClass:"material-icons"},[t._v("album")]),t._v(" Album: "+t._s(t.modalObject.album))]),s("span",{staticClass:"more-info-duration"},[s("i",{staticClass:"material-icons"},[t._v("av_timer")]),t._v("Duration: "+t._s(t.modalObject.minsec))]),t.modalObject.buycd?s("span",{staticClass:"more-info-buycd"},[s("a",{attrs:{href:t.modalObject.buycd,target:"_blank"}},[s("i",{staticClass:"material-icons"},[t._v("exit_to_app")]),t._v("Buy CD")])]):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.modalObject.songid,expression:"modalObject.songid"}],staticClass:"request-span"},[s("a",{on:{click:t.ajaxSongRequest}},[!t.modalObject.type||"S"===t.modalObject.type&&!t.modalObjectUnrequestable?s("span",{staticClass:"more-info-request"},[s("i",{staticClass:"material-icons"},[t._v("audiotrack")]),t.requesting?s("span",{staticClass:"loading"},[t._v("Requesting")]):s("span",[t._v("Click to request this song")])]):t._e()])]),s("div",{staticClass:"feedback-container"},[s("feedback",{attrs:{song:t.modalObject}})],1),t.requestHeader?s("div",{staticClass:"request-response"},[s("h1",{staticClass:"request-response-header",class:["Request Successful"===t.requestHeader?"request-success":""]},[t._v(t._s(t.requestHeader))]),s("h3",[t._v(t._s(t.requestBody))])]):t._e(),s("div",{staticClass:"modal-close"},[s("i",{staticClass:"material-icons",on:{click:t.closeModal}},[t._v("clear")])])])])]):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.moreInfoModalDisplay,expression:"moreInfoModalDisplay"}],key:"2",staticClass:"modal-overlay",on:{click:t.closeModal}})])},X=[],K=(s("a481"),s("6762"),s("2fdb"),{name:"More-Info-Modal",components:{Feedback:P},data:function(){return{corsProxy:"https://cors-anywhere.herokuapp.com/",requestUrl:"http://request.audiorealm.com/req/req.html?songID=",portHost:"&samport=1221&samhost=67.182.155.220",requestHeader:"",requestBody:"",requesting:!1}},computed:Object(c["a"])({},Object(p["e"])(["moreInfoModalDisplay","modalObject","songInfo","songHistory","songQueue"]),{modalObjectUnrequestable:function(){var t=this.songHistory.concat(this.songQueue).map(function(t){return t.songid});return t.includes(this.modalObject.songid)}}),watch:{requestHeader:function(){"Request Successful"===this.requestHeader&&this.updateRequestSongs(this.modalObject)}},methods:Object(c["a"])({},Object(p["d"])(["modalClose"]),{},Object(p["b"])(["updateRequestSongs"]),{closeModal:function(){this.requestHeader="",this.requestBody="",this.modalClose()},ajaxSongRequest:function(){var t=this;this.requesting=!0;var e=new DOMParser;M.a.get("".concat(this.corsProxy).concat(this.requestUrl).concat(this.modalObject.songid).concat(this.portHost),{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(s){var a=e.parseFromString(s.data,"text/html"),i=a.getElementById("content");t.requestHeader=i.children[0].innerHTML,t.requestBody=i.children[1].innerHTML.replace("<br>",""),t.requesting=!1,setTimeout(function(){t.closeModal()},3300)})}})}),V=K,Y=(s("2f0f"),Object(f["a"])(V,G,X,!1,null,null,null)),tt=Y.exports,et=s("db0f"),st={components:{Player:W,MoreInfoModal:tt,Slide:et["Slide"]},computed:Object(c["a"])({},Object(p["e"])(["expandedPlayer","menuToggle","streamPort"])),methods:Object(c["a"])({},Object(p["d"])(["minimizePlayer","menuDisable"]),{},Object(p["b"])(["pauseChangeQuality"]))},at=st,it=(s("034f"),Object(f["a"])(at,r,o,!1,null,null,null)),nt=it.exports,rt=s("8c4f"),ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"history"},[s("div",{staticClass:"history-header"},[t._m(0),s("span",{staticClass:"history-title"},[t._v("Recent History")]),t._m(1),s("div",{staticClass:"history-body"},[s("simplebar",{attrs:{id:"history-container","data-simplebar-auto-hide":"true"}},t._l(t.songHistory.slice(0,29),function(e,a){return s("div",{key:a,staticClass:"history-item"},[s("div",{staticClass:"history-album"},[s("img",{staticClass:"history-img",attrs:{src:t.itemImg(e),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){t.setToggleModal(e)}}})]),s("div",{staticClass:"history-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.title))]),s("span",{staticClass:"artist",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.artist))]),s("hr")])])}),0)],1)])])},ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])}],lt=s("8d3b"),ut=(s("f138"),{name:"history",components:{simplebar:lt["a"]},computed:Object(c["a"])({},Object(p["e"])(["songHistory"])),methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{itemImg:function(t){var e="https://radiomv.org/samHTMweb/";return t.picture?e+t.picture:e+"customMissing.jpg"},itemUrl:function(t){return t.buycd?t.buycd:"https://www.radiomv.org"}})}),mt=ut,dt=(s("8f59"),Object(f["a"])(mt,ot,ct,!1,null,null,null)),pt=dt.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"queue"},[s("div",{staticClass:"queue-header"},[t._m(0),s("span",{staticClass:"queue-title"},[t._v("Upcoming")]),t._m(1),s("div",{staticClass:"queue-body"},[s("simplebar",{attrs:{id:"queue-container","data-simplebar-auto-hide":"true"}},[t._l(t.songQueue.slice(0,-1),function(e,a){return s("div",{key:a,staticClass:"queue-item"},[s("div",{staticClass:"queue-album"},[s("img",{staticClass:"queue-img",attrs:{src:t.itemImg(e),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){t.setToggleModal(e)}}})]),s("div",{staticClass:"queue-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.title))]),s("span",{staticClass:"artist",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.artist))]),s("hr")])])}),t.requestSongs.length?s("div",{staticClass:"requested-placeholder"},t._l(t.requestSongs,function(e,a){return s("div",{key:a,staticClass:"queue-item"},[s("div",{staticClass:"queue-album"},[s("img",{staticClass:"queue-img",attrs:{src:t.itemImg(e),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){t.setToggleModal(e)}}})]),s("div",{staticClass:"queue-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.title))]),s("span",{staticClass:"artist",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.artist))]),s("hr")])])}),0):t._e()],2)],1)])])},vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])}],ft={name:"history",components:{simplebar:lt["a"]},computed:Object(c["a"])({},Object(p["e"])(["songQueue","requestSongs"])),methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{itemImg:function(t){var e="https://radiomv.org/samHTMweb/";return t.picture?e+t.picture:e+"customMissing.jpg"},itemUrl:function(t){return t.buycd?t.buycd:"https://www.radiomv.org"}})},ht=ft,bt=(s("7d58"),Object(f["a"])(ht,gt,vt,!1,null,null,null)),yt=bt.exports,_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"request"},[s("div",{staticClass:"request-header"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"},{name:"focus",rawName:"v-focus"}],staticClass:"request-input",attrs:{type:"text",placeholder:"Search music..."},domProps:{value:t.search},on:{keyup:t.getSongs,input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._m(1),s("div",{staticClass:"request-body"},[s("simplebar",{attrs:{id:"request-container","data-simplebar-auto-hide":"true"}},t._l(t.searchResults,function(e,a){return s("div",{key:a,staticClass:"request-item"},[s("div",{staticClass:"request-album"},[s("img",{staticClass:"history-img",attrs:{src:t.itemImg(e),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){t.setToggleModal(e)}}})]),s("div",{staticClass:"request-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.title))]),s("span",{staticClass:"artist",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.artist))]),s("hr")])])}),0)],1)])])},Ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])}],Mt=(s("386d"),{name:"requests",components:{simplebar:lt["a"]},directives:{focus:{inserted:function(t){t.focus()}}},data:function(){return{search:"",api1:"https://api.mlab.com/api/1/databases/songlist/collections/songs?apiKey=MxT5bRs11urXAq91rBbbZdGRkVyxC0rB&q={%22combine%22:{%20$regex:%20%27(?i).*",api2:".*%27%20}}",searchResults:""}},methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{getSongs:function(){var t=this;this.search&&this.search.length>=3&&M.a.get(this.api1+this.search+this.api2).then(function(t){return t.data}).then(function(e){t.searchResults=e})},itemImg:function(t){var e="https://radiomv.org/samHTMweb/";return t.picture?e+t.picture:e+"customMissing.jpg"}})}),wt=Mt,kt=(s("aaaa"),Object(f["a"])(wt,_t,Ct,!1,null,null,null)),jt=kt.exports,Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"schedule"},[s("div",{staticClass:"schedule-header"},[t._m(0),s("span",{staticClass:"schedule-title"},[t._v("Schedule")]),t._m(1),s("div",{staticClass:"schedule-body"},[s("simplebar",{attrs:{id:"schedule-container","data-simplebar-auto-hide":"true"}},t._l(t.schedule,function(e,a){return s("div",{key:a,staticClass:"schedule-item"},[s("div",{staticClass:"schedule-img-container"},[s("img",{staticClass:"schedule-img",attrs:{src:e.picture}})]),s("div",{staticClass:"schedule-ministry-info"},[s("span",{staticClass:"time-slot"},[t._v(t._s(e.timeslot))]),s("span",{staticClass:"ministry-name"},[t._v(t._s(e.ministry))]),s("span",{staticClass:"speaker"},[t._v(t._s(e.speaker))]),s("hr")])])}),0)],1)])])},St=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])}],Ot={name:"schedule",components:{simplebar:lt["a"]},data:function(){return{schedule:[{speaker:"David Pawson",ministry:"David Pawson Teaching Library",timeslot:"12:30AM - 1:30AM",picture:"../../assets/david.png",homepage:"https://www.davidpawson.org/"},{speaker:"Alexander Scourby",ministry:"Bible Reading",timeslot:"2:00AM - 2:30AM",picture:"../../assets/scourby.png",homepage:"https://www.scourby.com/"},{speaker:"Alistair Begg",ministry:"Truth for Life",timeslot:"3:30AM - 4:00AM",picture:"../../assets/alistair.png",homepage:"https://www.truthforlife.org/"},{speaker:"Chuck Missler",ministry:"66/40 with Chuck Missler",timeslot:"4:00AM - 4:30AM",picture:"../../assets/chuck.png",homepage:"https://www.khouse.org/"},{speaker:"Jamie Buckingham",ministry:"Risky Living Ministries",timeslot:"5:00AM - 6:00AM",picture:"../../assets/jamie.png",homepage:"https://www.jamiebuckinghamministries.com/"},{speaker:"Dr. John Casteel",ministry:"John Casteel Ministries",timeslot:"6:30AM - 7:30AM",picture:"../../assets/john.png",homepage:"http://www.johncasteel.com/"},{speaker:"Steve Schell",ministry:"Life Lessons Radio",timeslot:"8:00AM - 8:30AM",picture:"../../assets/steve.png",homepage:"https://www.lifelessonsradio.org/"},{speaker:"Curtis Dougherty",ministry:"Curtis Dougherty Ministries",timeslot:"8:30AM - 9:45AM",picture:"../../assets/curtis.png",homepage:"https://www.cascadechapel.org/"},{speaker:"David Pawson",ministry:"David Pawson Teaching Library",timeslot:"10:00AM - 11:00AM",picture:"../../assets/david.png",homepage:"https://www.davidpawson.org/"},{speaker:"Paul Washer",ministry:"HeartCry Missionary Society",timeslot:"11:00AM - 12:00PM",picture:"../../assets/paul.png",homepage:"http://www.heartcrymission.com/"},{speaker:"Alistair Begg",ministry:"Truth for Life",timeslot:"12:30PM - 1:00PM",picture:"../../assets/alistair.png",homepage:"https://www.truthforlife.org/"},{speaker:"Ern Baxter",ministry:"Ern Baxter Teaching Legacy",timeslot:"1:30PM - 2:45PM",picture:"../../assets/ern.png",homepage:"https://www.radiomv.org/"},{speaker:"Alexander Scourby",ministry:"Bible Reading",timeslot:"2:50PM - 3:20PM",picture:"../../assets/scourby.png",homepage:"https://www.scourby.com/"},{speaker:"Jamie Buckingham",ministry:"Risky Living Ministries",timeslot:"3:30PM - 4:30PM",picture:"../../assets/jamie.png",homepage:"https://www.jamiebuckinghamministries.com/"},{speaker:"Curtis Dougherty",ministry:"Curtis Dougherty Ministries",timeslot:"4:30PM - 5:45PM",picture:"../../assets/curtis.png",homepage:"https://www.cascadechapel.org/"},{speaker:"Alexander Scourby",ministry:"Bible Reading",timeslot:"5:45PM - 6:15PM",picture:"../../assets/scourby.png",homepage:"https://www.scourby.com/"},{speaker:"Steve Schell",ministry:"Life Lessons Radio",timeslot:"6:30PM - 7:00PM",picture:"../../assets/steve.png",homepage:"https://www.lifelessonsradio.org/"},{speaker:"Derek Prince",ministry:"Derek Prince Ministries",timeslot:"7:00PM - 8:15PM",picture:"../../assets/derek.png",homepage:"https://www.derekprince.org/"},{speaker:"Chuck Missler",ministry:"66/40 with Chuck Missler",timeslot:"8:30PM - 9:00PM",picture:"../../assets/chuck.png",homepage:"https://www.khouse.org/"},{speaker:"Paul Washer",ministry:"HeartCry Missionary Society",timeslot:"9:30PM - 10:30PM",picture:"../../assets/paul.png",homepage:"http://www.heartcrymission.com/"},{speaker:"Ern Baxter",ministry:"Ern Baxter Teaching Legacy",timeslot:"11:00PM - 12:15AM",picture:"../../assets/ern.png",homepage:"https://www.radiomv.org/"}]}}},xt=Ot,Tt=(s("41d9"),Object(f["a"])(xt,Pt,St,!1,null,null,null)),qt=Tt.exports,It=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"donate"},[s("div",{staticClass:"donate-header"},[s("div",{staticClass:"divider"},[s("hr")]),s("span",{staticClass:"donate-title"},[t._v("Donate")]),s("div",{staticClass:"divider"},[s("hr")]),s("div",{staticClass:"donate-body"},[s("p",[t._v("GraceWay Radio is a one-of-a-kind station that is dedicated to the transmission of true worship and Spirit-inspired messages that will foster real spiritual growth in listeners. We are completely non-profit, and do not air advertisements--our station is completely faith-based and listener-supported.")]),s("p",[t._v("Thank you for your interest in supporting our mission, please check in again at a later time to see other donation options.")])])])])}],Et=(s("3ce8"),{}),$t=Object(f["a"])(Et,It,At,!1,null,null,null),Ht=$t.exports,Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact"},[s("div",{staticClass:"contact-header"},[t._m(0),s("span",{staticClass:"contact-title"},[t._v("Contact Us")]),t._m(1),s("div",{staticClass:"contact-body"},[s("form",{staticClass:"contact-form",attrs:{action:"https://getsimpleform.com/messages?form_api_token=34dc617384ac3409b37bd57d5a771cca",method:"post"}},[s("div",[s("div",[s("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),s("div",[s("label",{staticClass:"label",attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email.value,expression:"email.value"}],class:{email:t.email,error:!t.email.valid},attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:t.email.value},on:{input:function(e){e.target.composing||t.$set(t.email,"value",e.target.value)}}})]),s("div",[s("label",{staticClass:"label",attrs:{for:"textarea"}},[t._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message.text,expression:"message.text"}],staticClass:"message",attrs:{name:"textarea",id:"textarea",required:"",maxlength:t.message.maxlength},domProps:{value:t.message.text},on:{input:function(e){e.target.composing||t.$set(t.message,"text",e.target.value)}}}),s("span",{staticClass:"counter"},[t._v(t._s(t.message.text.length)+" / "+t._s(t.message.maxlength))])]),t._m(2)])])])])])},Dt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{attrs:{type:"submit",value:"Send Form"}})])}],Bt={name:"contact",data:function(){return{name:"",email:{value:"",valid:!0},message:{text:"",maxlength:255},submitted:!1}},methods:{validate:function(t,e){"email"===t&&(this.email.valid=!!this.isEmail(e))},isEmail:function(t){var e=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;return e.test(t)}},watch:{"email.value":function(t){this.validate("email",t)}}},zt=Bt,Lt=(s("fe47"),Object(f["a"])(zt,Rt,Dt,!1,null,"24931dfe",null)),Nt=Lt.exports,Qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"favorites"},[s("div",{staticClass:"favorites-header"},[t._m(0),s("span",{staticClass:"favorites-title"},[t._v("My Favorites")]),t._m(1),s("div",{staticClass:"favorites-body"},[s("simplebar",{attrs:{id:"favorites-container","data-simplebar-auto-hide":"true"}},t._l(t.favoriteSongs,function(e){return s("div",{key:e.songid,staticClass:"favorites-item"},[s("div",{staticClass:"favorites-album"},[s("img",{staticClass:"favorites-img",attrs:{src:t.itemImg(e),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"},on:{click:function(s){t.setToggleModal(e)}}})]),s("div",{staticClass:"favorites-meta"},[s("span",{staticClass:"song-name",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.title))]),s("span",{staticClass:"artist",on:{click:function(s){t.setToggleModal(e)}}},[t._v(t._s(e.artist))]),s("hr")])])}),0)],1)])])},Ut=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])}],Ft={name:"favorites",components:{simplebar:lt["a"]},computed:Object(c["a"])({},Object(p["e"])(["mySongs"]),{},Object(p["c"])(["favoriteSongs"])),methods:Object(c["a"])({},Object(p["b"])(["setToggleModal"]),{itemImg:function(t){var e="https://radiomv.org/samHTMweb/";return t.picture?e+t.picture:e+"customMissing.jpg"},itemUrl:function(t){return t.buycd?t.buycd:"https://www.radiomv.org"}})},Jt=Ft,Zt=(s("d6c7"),Object(f["a"])(Jt,Qt,Ut,!1,null,null,null)),Wt=Zt.exports;n["a"].use(rt["a"]);var Gt=new rt["a"]({base:"/",routes:[{path:"/history",name:"history",component:pt},{path:"/schedule",name:"schedule",component:qt},{path:"/queue",name:"coming-up",component:yt},{path:"/donate",name:"donate",component:Ht},{path:"/requests",name:"requests",component:jt},{path:"/contact",name:"contact",component:Nt},{path:"/favorites",name:"favorites",component:Wt},{path:"/",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),Xt=s("75fc");n["a"].use(p["a"]);var Kt=new p["a"].Store({state:{streamPort:8e3,refreshInterval:1e4,interval:"",currentTime:0,timerInterval:null,timerRunning:!1,requestSongs:[],mySongs:[],songInfo:"",songHistory:"",songQueue:"",modalObject:"",trailers:["Curtis Dougherty","David Pawson","Derek Prince","Ern Baxter","Jamie Buckingham","John Casteel","Paul Washer","Scourby"],menuToggle:!1,history:!1,isPlaying:!1,loading:!0,moreInfoModalDisplay:!1,expandedPlayer:!0},mutations:{initializeStore:function(t){if(localStorage.getItem("mySongs")){var e=JSON.parse(localStorage.getItem("mySongs"));t.mySongs=Object(Xt["a"])(e)}},addToMySongs:function(t,e){var s=e.song,a=e.approval,i=s;s.approval=a,t.mySongs.push(i)},updateMySongsApproval:function(t,e){var s=t.mySongs.findIndex(function(t){return t.songid===e.song.songid});t.mySongs[s].approval=e.approval},removeFromMySongs:function(t,e){var s=t.mySongs.findIndex(function(t){return t.songid===e.song.songid});t.mySongs.splice(s,1)},setStreamPort:function(t,e){t.streamPort=e},toggleMenu:function(t){t.menuToggle=!t.menuToggle},menuDisable:function(t){t.menuToggle=!1},setModalObject:function(t,e){t.modalObject=e},toggleExpandedPlayer:function(t){t.expandedPlayer=!t.expandedPlayer},expandPlayerCloseMenu:function(t){t.expandedPlayer=!0,t.menuToggle=!1},minimizePlayer:function(t){t.expandedPlayer=!1,t.menuToggle=!1},toggleMoreInfoModal:function(t){t.moreInfoModalDisplay=!t.moreInfoModalDisplay},modalClose:function(t){t.moreInfoModalDisplay=!1},countupTimer:function(t){t.timerRunning&&t.currentTime++},setTimerRunning:function(t,e){t.timerRunning=e},setTimerInterval:function(t,e){t.timerInterval=e},setSongInfo:function(t,e){t.songInfo=e.song_info,t.songHistory=e.song_history,t.songQueue=e.song_queue,t.requestSongs=[]},historyToggle:function(t){t.history=!t.history},isPlaying:function(t,e){t.isPlaying=e},newInterval:function(t,e){t.interval=e},setLoading:function(t,e){t.loading=e}},actions:{pauseChangeQuality:function(t,e){var s=t.dispatch,a=t.commit;s("pause"),a("setStreamPort",e),setTimeout(function(){return s("playPause")},200)},getSongInfo:function(t){var e=t.state,s=t.commit,a=e.songInfo;M.a.get("https://radiomv.org/samHTMweb/info.json").then(function(t){return t.data}).then(function(t){a.title&&a.title===t.song_info.title||(s("setSongInfo",t),!0===e.loading&&s("setLoading",!1))})},updateRequestSongs:function(t,e){var s=t.state;s.requestSongs.push(e)},setToggleModal:function(t,e){var s=t.commit;s("setModalObject",e),s("toggleMoreInfoModal")},playPause:function(t){var e=t.commit,s=t.dispatch;audio.paused?(audio.play(),e("isPlaying",!0),s("timerRun")):s("pause")},pause:function(t){var e=t.commit,s=t.dispatch;audio.pause(),e("isPlaying",!1),s("timerPause")},timerRun:function(t){var e=t.state,s=t.commit;s("setTimerRunning",!0),s("setTimerInterval",setInterval(function(){e.timerRunning&&e.currentTime++},1e3))},timerPause:function(t){var e=t.state,s=t.commit;s("setTimerRunning",!1),clearInterval(e.timerInterval)}},getters:{currentStream:function(t){return"http://136.0.16.57:".concat(t.streamPort,"/.stream")},favoriteSongs:function(t){return t.mySongs.filter(function(t){return 1==t.approval})}}});n["a"].config.productionTip=!1,new n["a"]({router:Gt,store:Kt,beforeCreate:function(){this.$store.commit("initializeStore")},render:function(t){return t(nt)}}).$mount("#app"),Kt.subscribe(function(t,e){localStorage.setItem("mySongs",i()(e.mySongs))})},6131:function(t,e,s){"use strict";var a=s("bf75"),i=s.n(a);i.a},"61a9":function(t,e,s){},"64a9":function(t,e,s){},"6a41":function(t,e,s){},"7d58":function(t,e,s){"use strict";var a=s("fb06"),i=s.n(a);i.a},"8c1f":function(t,e,s){},"8f59":function(t,e,s){"use strict";var a=s("61a9"),i=s.n(a);i.a},"99d2":function(t,e,s){"use strict";var a=s("b64b"),i=s.n(a);i.a},a707:function(t,e,s){"use strict";var a=s("5692"),i=s.n(a);i.a},aaaa:function(t,e,s){"use strict";var a=s("dff7"),i=s.n(a);i.a},ae2c:function(t,e,s){},b64b:function(t,e,s){},bd75:function(t,e,s){},bf75:function(t,e,s){},d08e:function(t,e,s){},d6c7:function(t,e,s){"use strict";var a=s("ae2c"),i=s.n(a);i.a},dff7:function(t,e,s){},f025:function(t,e,s){},f4ef:function(t,e,s){"use strict";var a=s("bd75"),i=s.n(a);i.a},fb06:function(t,e,s){},fe47:function(t,e,s){"use strict";var a=s("8c1f"),i=s.n(a);i.a}});
//# sourceMappingURL=app.d4bb8387.js.map