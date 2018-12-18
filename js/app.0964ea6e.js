(function(t){function e(e){for(var i,s,o=e[0],u=e[1],l=e[2],m=0,p=[];m<o.length;m++)s=o[m],a[s]&&p.push(a[s][0]),a[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var i={},a={app:0},n=[];function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=i,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var i=r("64a9"),a=r.n(i);a.a},"2f1f":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("RadioPlayer")],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"radio-player"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.history,expression:"history"}],attrs:{id:"history"}},[r("simplebar",{attrs:{id:"history-container","data-simplebar-auto-hide":"true"}},t._l(t.songHistory,function(e,i){return r("div",{key:i,staticClass:"history-item"},[r("div",{staticClass:"history-album"},[r("a",{attrs:{href:t.itemUrl(e),target:"_blank"}},[r("img",{staticClass:"history-img",attrs:{src:t.itemImg(e),alt:"song.title"}})])]),r("a",{attrs:{href:t.itemUrl(e),target:"_blank"}},[r("div",{staticClass:"history-meta"},[r("span",{staticClass:"song-name"},[t._v(t._s(t._f("truncate")(t._f("uppercase")(e.title),36)))]),r("span",{staticClass:"artist"},[t._v(t._s(e.artist))]),r("hr")])])])}),0),r("div",{staticClass:"item item-history",attrs:{id:"clear"},on:{click:function(e){t.history=!t.history}}},[r("i",{staticClass:"material-icons md-36",attrs:{title:"Click to return to Radio Player"}},[t._v("clear")])]),r("div",{staticClass:"item item-history paused",class:[t.isPlaying?"playing":"paused"],attrs:{id:"history-play",title:"Play/Pause the Radio"},on:{click:t.playPause,keyup:function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?t.playPause(e):null}}}),t._m(0)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.history,expression:"!history"}],attrs:{id:"player"}},[r("div",{staticClass:"item item-pic"},[r("div",{staticClass:"album"},[r("a",{attrs:{href:t.itemUrl(t.songInfo),target:"_blank"}},[r("img",{attrs:{src:t.itemImg(t.songInfo),alt:t.songInfo.title}})])])]),r("div",{staticClass:"item item-play"},[r("div",{staticClass:"play-button-div"},[r("div",{staticClass:"play-button paused",class:[t.isPlaying?"playing":"paused"],on:{click:t.playPause,keyup:function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?t.playPause(e):null}}},[r("audio",{attrs:{id:"audio",src:t.currentStream}},[t._v("\n              Your browser does not support the audio element.\n        ")])])])]),r("div",{staticClass:"item item-meta"},[r("a",{attrs:{href:t.itemUrl(t.songInfo),target:"_blank"}},[r("span",{staticClass:"song-name"},[t._v(t._s(t._f("truncate")(t._f("uppercase")(t.songInfo.title),22)))])]),r("span",{staticClass:"artist"},[t._v(t._s(t.songInfo.artist))]),r("span",{staticClass:"album-name"},[t._v(t._s(t._f("truncate")(t.songInfo.album,36)))])]),r("div",{staticClass:"item item-history",on:{click:function(e){t.history=!t.history}}},[r("i",{staticClass:"material-icons md-36",attrs:{title:"Click to view recent history"}},[t._v("history")])]),r("div",{staticClass:"item"}),t._m(1),r("div",{staticClass:"item radios"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStream,expression:"currentStream"}],attrs:{type:"radio",id:"hq",value:"http://136.0.16.57:8000/.stream"},domProps:{checked:t._q(t.currentStream,"http://136.0.16.57:8000/.stream")},on:{change:[function(e){t.currentStream="http://136.0.16.57:8000/.stream"},t.pause]}}),r("label",{attrs:{for:"hq"}},[t._v("HQ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStream,expression:"currentStream"}],attrs:{type:"radio",id:"mq",value:"http://136.0.16.57:8006/.stream"},domProps:{checked:t._q(t.currentStream,"http://136.0.16.57:8006/.stream")},on:{change:[function(e){t.currentStream="http://136.0.16.57:8006/.stream"},t.pause]}}),r("label",{attrs:{for:"mq"}},[t._v("MQ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStream,expression:"currentStream"}],attrs:{type:"radio",id:"lq",value:"http://136.0.16.57:8004/.stream"},domProps:{checked:t._q(t.currentStream,"http://136.0.16.57:8004/.stream")},on:{change:[function(e){t.currentStream="http://136.0.16.57:8004/.stream"},t.pause]}}),r("label",{attrs:{for:"lq"}},[t._v("LQ")])]),r("div",{staticClass:"item item-timer"},[r("div",{staticClass:"timer"},[t._v(t._s(t.time||"00:00"))])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item item-history",attrs:{id:"history-volume"}},[r("i",{staticClass:"material-icons md-36",attrs:{title:"Adjust volume"}},[t._v("volume_up")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item item-volume"},[r("div",{staticClass:"volume"},[r("i",{staticClass:"material-icons md-36"},[t._v("volume_up")])])])}],u=r("8d3b"),l=(r("f138"),r("bc3a")),c=r.n(l),m={name:"RadioPlayer",data:function(){return{count:"",history:!1,currentTime:0,timerInterval:null,timerRunning:!1,timerPaused:!1,currentStream:"http://136.0.16.57:8000/.stream",isPlaying:!1,songInfo:"",songHistory:"",refreshInterval:1e4,interval:"",url:"https://radiomv.org/samHTMweb/info1.json",historyUrl:"https://radiomv.org/samHTMweb/"}},components:{simplebar:u["a"]},filters:{uppercase:function(t){return t.toUpperCase()},truncate:function(t,e){return t.length>e&&(t=t.substring(0,e-3)+"..."),t}},methods:{itemImg:function(t){var e="https://radiomv.org/samHTMweb/";return t.picture?e+t.picture:e+"customMissing.jpg"},itemUrl:function(t){return t.buycd?t.buycd:"https://www.radiomv.org"},timerRun:function(){this.timerRunning=!0,this.timerInterval=setInterval(this.countupTimer,1e3)},timerPause:function(){this.timerRunning=!1,clearInterval(this.timerInterval)},timerReset:function(){var t=this;this.timerRunning=!1,clearInterval(function(){t.interval}),this.currentTime=0},countupTimer:function(){1==this.timerRunning&&this.currentTime++},pause:function(){audio.pause(),this.isPlaying=!1,this.timerPause()},playPause:function(){audio.paused?(audio.play(),this.isPlaying=!0,this.timerRun()):this.pause()},getSongInfo:function(){var t=this;c.a.get(this.url).then(function(e){t.songInfo=e.data.song_info,t.songHistory=e.data.song_history}).catch(function(t){window.alert(t)})}},computed:{time:function(){return this.minutes+":"+this.seconds},minutes:function(){var t=Math.floor(this.currentTime/60);return t>=10?t:"0"+t},seconds:function(){var t=this.currentTime-60*this.minutes;return t>=10?t:"0"+t}},created:function(){var t=this;this.getSongInfo(),this.interval=setInterval(this.getSongInfo,this.refreshInterval),window.addEventListener("keydown",function(e){" "==e.key&&t.playPause()})}},p=m,d=(r("d6d5"),r("2877")),f=Object(d["a"])(p,s,o,!1,null,null,null);f.options.__file="RadioPlayer.vue";var v=f.exports,h={name:"app",components:{RadioPlayer:v}},y=h,g=(r("034f"),Object(d["a"])(y,a,n,!1,null,null,null));g.options.__file="App.vue";var _=g.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(_)}}).$mount("#app")},"64a9":function(t,e,r){},d6d5:function(t,e,r){"use strict";var i=r("2f1f"),a=r.n(i);a.a}});
//# sourceMappingURL=app.0964ea6e.js.map