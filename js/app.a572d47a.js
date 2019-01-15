(function(t){function e(e){for(var s,n,o=e[0],u=e[1],l=e[2],m=0,d=[];m<o.length;m++)n=o[m],r[n]&&d.push(r[n][0]),r[n]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,o=1;o<i.length;o++){var u=i[o];0!==r[u]&&(s=!1)}s&&(a.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},r={app:0},a=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),r=i.n(s);r.a},"2f1f":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("RadioPlayer")],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"radio-player"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.history,expression:"history"}],attrs:{id:"history"}},[i("simplebar",{attrs:{id:"history-container","data-simplebar-auto-hide":"true"}},t._l(t.songHistory,function(e,s){return i("div",{key:s,staticClass:"history-item"},[i("div",{staticClass:"history-album"},[i("a",{attrs:{href:t.itemUrl(e),target:"_blank"}},[i("img",{staticClass:"history-img",attrs:{src:t.itemImg(e),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"}})])]),i("a",{attrs:{href:t.itemUrl(e),target:"_blank"}},[i("div",{staticClass:"history-meta marquee-container"},[i("span",{staticClass:"song-name",class:[e.title.length>=26?"marquee":"normal"]},[t._v(t._s(t._f("uppercase")(e.title)))]),i("span",{staticClass:"artist"},[t._v(t._s(e.artist))]),i("hr")])])])}),0),i("div",{staticClass:"item item-history",attrs:{id:"clear"},on:{click:function(e){t.history=!t.history}}},[i("i",{staticClass:"material-icons md-36",attrs:{title:"Click to return to Radio Player"}},[t._v("clear")])]),i("div",{staticClass:"item item-history paused",class:[t.isPlaying?"playing":"paused"],attrs:{id:"history-play",title:"Play/Pause the Radio"},on:{click:t.playPause,keyup:function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?t.playPause(e):null}}}),i("div",{staticClass:"item item-history",attrs:{id:"history-volume"},on:{click:t.muteToggle}},[t.volume>0?i("i",{staticClass:"material-icons md-36",attrs:{title:"Mute audio"}},[t._v("volume_up")]):i("i",{staticClass:"material-icons md-36",attrs:{title:"Unmute audio"}},[t._v("volume_off")])])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.history,expression:"!history"}],attrs:{id:"player"}},[i("div",{staticClass:"item item-pic"},[i("div",{staticClass:"album"},[i("a",{attrs:{href:t.itemUrl(t.songInfo),target:"_blank"}},[i("img",{attrs:{src:t.itemImg(t.songInfo),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:t.songInfo.title}})])])]),i("div",{staticClass:"item item-play"},[i("div",{staticClass:"play-button-div"},[i("div",{staticClass:"play-button paused",class:[t.isPlaying?"playing":"paused"],on:{click:t.playPause,keyup:function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?t.playPause(e):null}}},[i("audio",{attrs:{id:"audio",src:t.currentStream}},[t._v("\n              Your browser does not support the audio element.\n        ")])])])]),i("div",{staticClass:"item item-meta"},[i("a",{attrs:{href:t.itemUrl(t.songInfo),target:"_blank"}},[i("div",{staticClass:"marquee-container"},[i("span",{staticClass:"song-name",class:[t.songInfo.title.length>=22?"marquee":"normal"]},[t._v(t._s(t._f("uppercase")(t.songInfo.title)))])])]),i("span",{staticClass:"artist"},[t._v(t._s(t.songInfo.artist))]),i("div",{staticClass:"marquee-container"},[i("span",{staticClass:"album-name",class:[t.songInfo.album.length>=36?"marquee":"normal"]},[t._v(t._s(t.songInfo.album))])]),i("br"),i("hr")]),i("div",{staticClass:"item item-history",on:{click:function(e){t.history=!t.history}}},[i("i",{staticClass:"material-icons md-36",attrs:{title:"Click to view recent history"}},[t._v("history")])]),i("div",{staticClass:"item"}),i("div",{staticClass:"item item-volume"},[t.volumeAdjust?i("div",{staticClass:"volume",on:{touchend:function(e){t.volumeAdjust=!t.volumeAdjust},mouseleave:function(e){t.volumeAdjust=!t.volumeAdjust}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],attrs:{type:"range",id:"volume-slider",name:"volume-slider",min:"0",max:"100",step:"1"},domProps:{value:t.volume},on:{__r:function(e){t.volume=e.target.value}}})]):i("div",{staticClass:"volume",on:{click:t.muteToggle,mouseenter:function(e){t.volumeAdjust=!t.volumeAdjust}}},[t.volume>0?i("i",{staticClass:"material-icons md-36",attrs:{title:"Adjust volume"}},[t._v("volume_up")]):i("i",{staticClass:"material-icons md-36",attrs:{title:"Adjust volume"}},[t._v("volume_off")])])]),i("div",{staticClass:"item radios"},[i("span",[t._v("Stream Quality:")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStream,expression:"currentStream"}],attrs:{type:"radio",id:"hq",value:"http://136.0.16.57:8000/.stream"},domProps:{checked:t._q(t.currentStream,"http://136.0.16.57:8000/.stream")},on:{change:[function(e){t.currentStream="http://136.0.16.57:8000/.stream"},t.pause]}}),i("label",{attrs:{for:"hq"}},[t._v("HQ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStream,expression:"currentStream"}],attrs:{type:"radio",id:"mq",value:"http://136.0.16.57:8006/.stream"},domProps:{checked:t._q(t.currentStream,"http://136.0.16.57:8006/.stream")},on:{change:[function(e){t.currentStream="http://136.0.16.57:8006/.stream"},t.pause]}}),i("label",{attrs:{for:"mq"}},[t._v("MQ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStream,expression:"currentStream"}],attrs:{type:"radio",id:"lq",value:"http://136.0.16.57:8004/.stream"},domProps:{checked:t._q(t.currentStream,"http://136.0.16.57:8004/.stream")},on:{change:[function(e){t.currentStream="http://136.0.16.57:8004/.stream"},t.pause]}}),i("label",{attrs:{for:"lq"}},[t._v("LQ")])]),i("div",{staticClass:"item item-timer"},[i("div",{staticClass:"timer"},[t._v(t._s(t.time||"00:00"))])])])])},o=[],u=i("8d3b"),l=(i("f138"),i("bc3a")),c=i.n(l),m={name:"RadioPlayer",data:function(){return{previousVolume:75,volume:75,volumeAdjust:!1,count:"",history:!1,currentTime:0,timerInterval:null,timerRunning:!1,timerPaused:!1,currentStream:"http://136.0.16.57:8000/.stream",isPlaying:!1,muted:!1,songInfo:"",songHistory:"",refreshInterval:1e4,interval:"",url:"https://radiomv.org/samHTMweb/info1.json",historyUrl:"https://radiomv.org/samHTMweb/"}},components:{simplebar:u["a"]},filters:{uppercase:function(t){return t.toUpperCase()},truncate:function(t,e){return t.length>e&&(t=t.substring(0,e-3)+"..."),t}},methods:{scrollToTop:function(){window.scrollTo(0,0)},itemImg:function(t){var e="https://radiomv.org/samHTMweb/";return t.picture?e+t.picture:e+"customMissing.jpg"},itemUrl:function(t){return t.buycd?t.buycd:"https://www.radiomv.org"},timerRun:function(){this.timerRunning=!0,this.timerInterval=setInterval(this.countupTimer,1e3)},timerPause:function(){this.timerRunning=!1,clearInterval(this.timerInterval)},timerReset:function(){var t=this;this.timerRunning=!1,clearInterval(function(){t.interval}),this.currentTime=0},countupTimer:function(){1==this.timerRunning&&this.currentTime++},pause:function(){audio.pause(),this.isPlaying=!1,this.timerPause()},playPause:function(){audio.paused?(audio.play(),this.isPlaying=!0,this.timerRun()):this.pause()},muteToggle:function(){if(0!=this.volume)return this.previousVolume=this.volume,this.volume=0;this.volume=this.previousVolume},getSongInfo:function(){var t=this;c.a.get(this.url).then(function(e){t.songInfo=e.data.song_info,t.songHistory=e.data.song_history}).catch(function(t){window.alert(t)})}},watch:{volume:function(){audio.volume=this.volume/100}},computed:{time:function(){return this.minutes+":"+this.seconds},minutes:function(){var t=Math.floor(this.currentTime/60);return t>=10?t:"0"+t},seconds:function(){var t=this.currentTime-60*this.minutes;return t>=10?t:"0"+t}},created:function(){var t=this;this.getSongInfo(),this.interval=setInterval(this.getSongInfo,this.refreshInterval),window.addEventListener("keydown",function(e){" "==e.key&&t.playPause()})}},d=m,v=(i("d6d5"),i("2877")),p=Object(v["a"])(d,n,o,!1,null,null,null);p.options.__file="RadioPlayer.vue";var h=p.exports,f={name:"app",components:{RadioPlayer:h}},g=f,y=(i("034f"),Object(v["a"])(g,r,a,!1,null,null,null));y.options.__file="App.vue";var _=y.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(_)}}).$mount("#app")},"64a9":function(t,e,i){},d6d5:function(t,e,i){"use strict";var s=i("2f1f"),r=i.n(s);r.a}});
//# sourceMappingURL=app.a572d47a.js.map