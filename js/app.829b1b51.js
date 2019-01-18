(function(t){function e(e){for(var r,s,o=e[0],u=e[1],l=e[2],m=0,v=[];m<o.length;m++)s=o[m],a[s]&&v.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02b4":function(t,e,n){"use strict";var r=n("e848"),a=n.n(r);a.a},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"1e92":function(t,e,n){"use strict";var r=n("3ba5"),a=n.n(r);a.a},"2f1f":function(t,e,n){},"3ba5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("RadioPlayer")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"radio-player"}},[n("history",{directives:[{name:"show",rawName:"v-show",value:t.history,expression:"history"}]}),n("player",{directives:[{name:"show",rawName:"v-show",value:!t.history,expression:"!history"}]})],1)},o=[],u=n("be94"),l=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"history"}},[n("simplebar",{attrs:{id:"history-container","data-simplebar-auto-hide":"true"}},t._l(t.songHistory,function(e,r){return n("div",{key:r,staticClass:"history-item"},[n("div",{staticClass:"history-album"},[n("a",{attrs:{href:t.itemUrl(e),target:"_blank"}},[n("img",{staticClass:"history-img",attrs:{src:t.itemImg(e),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:"song.title"}})])]),n("div",{staticClass:"history-meta marquee-container"},[n("a",{attrs:{href:t.itemUrl(e),target:"_blank"}},[n("span",{staticClass:"song-name",class:[e.title.length>=26?"marquee":"normal"]},[t._v(t._s(t._f("uppercase")(e.title)))])]),n("span",{staticClass:"artist"},[t._v(t._s(e.artist))]),n("hr")])])}),0),n("div",{staticClass:"item-history",attrs:{id:"clear"},on:{click:t.historyToggle}},[n("i",{staticClass:"material-icons md-36",attrs:{title:"Click to return to Radio Player"}},[t._v("clear")])]),n("div",{staticClass:"item-history paused",class:[t.isPlaying?"playing":"paused"],attrs:{id:"history-play",title:"Play/Pause the Radio"},on:{click:t.playPause,keyup:function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?t.playPause(e):null}}}),n("volume")],1)},m=[],v=n("8d3b"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.volumeAdjust?n("div",{staticClass:"volume-slider",on:{touchend:t.volumeAdjustToggle,mouseleave:t.volumeAdjustToggle}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],attrs:{type:"range",id:"volume-slider-input",name:"volume-slider",orient:"vertical",min:"0",max:"100",step:"1"},domProps:{value:t.volume},on:{__r:function(e){t.volume=e.target.value}}})]):n("div",{staticClass:"volume-icon",on:{mouseenter:t.volumeAdjustToggle}},[t.volume>0?n("i",{staticClass:"material-icons md-36",attrs:{title:"Adjust audio"}},[t._v("volume_up")]):n("i",{staticClass:"material-icons md-36",attrs:{title:"Adjust audio"}},[t._v("volume_off")])])])},p=[],f={name:"Volume",computed:Object(u["a"])({},Object(l["d"])(["volumeAdjust"]),{volume:{get:function(){return this.$store.state.volume},set:function(t){this.$store.commit("updateVolume",t)}}}),methods:Object(u["a"])({},Object(l["c"])(["volumeAdjustToggle"])),watch:{volume:function(){audio.volume=this.volume/100}}},g=f,h=(n("02b4"),n("2877")),y=Object(h["a"])(g,d,p,!1,null,null,null);y.options.__file="Volume.vue";var b=y.exports,_=(n("f138"),{name:"History",components:{simplebar:v["a"],Volume:b},computed:Object(u["a"])({},Object(l["d"])(["songHistory","isPlaying"])),methods:Object(u["a"])({},Object(l["c"])(["historyToggle"]),Object(l["b"])(["getSongInfo","playPause","pause"]),{itemImg:function(t){var e="https://radiomv.org/samHTMweb/";return t.picture?e+t.picture:e+"customMissing.jpg"},itemUrl:function(t){return t.buycd?t.buycd:"https://www.radiomv.org"}}),created:function(){var t=this;window.addEventListener("keydown",function(e){" "==e.key&&t.playPause()})}}),j=_,w=(n("bc3f"),Object(h["a"])(j,c,m,!1,null,"2a324b42",null));w.options.__file="History.vue";var P=w.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"player"}},[n("div",{staticClass:"item-pic"},[n("div",{staticClass:"album"},[n("a",{attrs:{href:t.itemUrl(t.songInfo),target:"_blank"}},[n("img",{attrs:{src:t.itemImg(t.songInfo),onerror:"this.src='https://radiomv.org/samHTMweb/customMissing.jpg'",alt:t.songInfo.title}})])])]),n("div",{staticClass:"item-play"},[n("div",{staticClass:"play-button-div"},[n("div",{staticClass:"play-button paused",class:[t.isPlaying?"playing":"paused"],on:{click:t.playPause,keyup:function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?t.playPause(e):null}}},[n("audio",{attrs:{id:"audio",src:t.currentStream}},[t._v("\n            Your browser does not support the audio element.\n      ")])])])]),n("div",{staticClass:"item-meta"},[n("a",{attrs:{href:t.itemUrl(t.songInfo),target:"_blank"}},[n("div",{staticClass:"marquee-container",class:[t.songInfo.title.length>=22?"marquee":"normal"]},[n("span",{staticClass:"song-name"},[t._v(t._s(t._f("uppercase")(t.songInfo.title)))])])]),n("span",{staticClass:"artist"},[t._v(t._s(t.songInfo.artist))]),n("div",{staticClass:"marquee-container",class:[t.songInfo.album.length>=36?"marquee":"normal"]},[n("span",{staticClass:"album-name"},[t._v(t._s(t.songInfo.album))])]),n("br"),n("hr")]),n("div",{staticClass:"item-history",on:{click:t.historyToggle}},[n("i",{staticClass:"material-icons md-36",attrs:{title:"Click to view recent history"}},[t._v("history")])]),n("volume",{staticClass:"item-volume"}),n("div",{staticClass:"radios"},[n("span",[t._v("Stream Quality:")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStream,expression:"currentStream"}],attrs:{type:"radio",id:"hq",value:"http://136.0.16.57:8000/.stream"},domProps:{checked:t._q(t.currentStream,"http://136.0.16.57:8000/.stream")},on:{change:[function(e){t.currentStream="http://136.0.16.57:8000/.stream"},t.pause]}}),n("label",{attrs:{for:"hq"}},[t._v("HQ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStream,expression:"currentStream"}],attrs:{type:"radio",id:"mq",value:"http://136.0.16.57:8006/.stream"},domProps:{checked:t._q(t.currentStream,"http://136.0.16.57:8006/.stream")},on:{change:[function(e){t.currentStream="http://136.0.16.57:8006/.stream"},t.pause]}}),n("label",{attrs:{for:"mq"}},[t._v("MQ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentStream,expression:"currentStream"}],attrs:{type:"radio",id:"lq",value:"http://136.0.16.57:8004/.stream"},domProps:{checked:t._q(t.currentStream,"http://136.0.16.57:8004/.stream")},on:{change:[function(e){t.currentStream="http://136.0.16.57:8004/.stream"},t.pause]}}),n("label",{attrs:{for:"lq"}},[t._v("LQ")])]),n("timer")],1)},T=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-timer"},[n("div",{staticClass:"timer"},[t._v(t._s(t.time||"00:00"))])])},O=[],S={name:"Timer",computed:{currentTime:function(){return this.$store.state.currentTime},time:function(){return this.minutes+":"+this.seconds},minutes:function(){var t=Math.floor(this.currentTime/60);return t>=10?t:"0"+t},seconds:function(){var t=this.currentTime-60*this.minutes;return t>=10?t:"0"+t}}},k=S,x=(n("1e92"),Object(h["a"])(k,C,O,!1,null,null,null));x.options.__file="Timer.vue";var q=x.exports,A={name:"Player",components:{Timer:q,Volume:b},data:function(){return{currentStream:"http://136.0.16.57:8000/.stream"}},methods:Object(u["a"])({},Object(l["c"])(["historyToggle","volumeAdjustToggle"]),Object(l["b"])(["playPause","pause","muteToggle"]),{itemImg:function(t){var e="https://radiomv.org/samHTMweb/";return t.picture?e+t.picture:e+"customMissing.jpg"},itemUrl:function(t){return t.buycd?t.buycd:"https://www.radiomv.org"}}),watch:{volume:function(){audio.volume=this.volume/100}},computed:Object(u["a"])({},Object(l["d"])(["songInfo","isPlaying","volumeAdjust"]),{volume:{get:function(){return this.$store.state.volume},set:function(t){this.$store.commit("updateVolume",t)}}}),created:function(){var t=this;window.addEventListener("keydown",function(e){" "==e.key&&t.playPause()})}},M=A,R=(n("6131"),Object(h["a"])(M,I,T,!1,null,null,null));R.options.__file="Player.vue";var V=R.exports,H={name:"RadioPlayer",components:{History:P,Player:V},methods:Object(u["a"])({},Object(l["b"])(["getSongInfo"]),Object(l["c"])(["newInterval"])),created:function(){this.getSongInfo(),this.newInterval(setInterval(this.getSongInfo,this.refreshInterval))},computed:Object(u["a"])({},Object(l["d"])(["refreshInterval"]),{history:function(){return this.$store.state.history}})},$=H,E=(n("d6d5"),Object(h["a"])($,s,o,!1,null,null,null));E.options.__file="RadioPlayer.vue";var U=E.exports,N={name:"app",components:{RadioPlayer:U}},Q=N,L=(n("034f"),Object(h["a"])(Q,a,i,!1,null,null,null));L.options.__file="App.vue";var J=L.exports,Y=n("bc3a"),z=n.n(Y);r["a"].use(l["a"]);var B=new l["a"].Store({state:{previousVolume:"",volume:75,volumeAdjust:!1,refreshInterval:1e4,interval:"",currentTime:0,timerInterval:null,timerRunning:!1,songInfo:"",songHistory:"",history:!1,isPlaying:!1},mutations:{volumeAdjustToggle:function(t){t.volumeAdjust=!t.volumeAdjust},updateVolume:function(t,e){t.volume=e},setPreviousVolume:function(t,e){t.previousVolume=e},countupTimer:function(t){t.timerRunning&&t.currentTime++},setTimerRunning:function(t,e){t.timerRunning=e},setTimerInterval:function(t,e){t.timerInterval=e},setSongInfo:function(t,e){t.songInfo=e.song_info,t.songHistory=e.song_history},historyToggle:function(t){t.history=!t.history},isPlaying:function(t,e){t.isPlaying=e},newInterval:function(t,e){t.interval=e}},actions:{getSongInfo:function(t){var e=t.commit;z.a.get("https://radiomv.org/samHTMweb/info1.json").then(function(t){return t.data}).then(function(t){e("setSongInfo",t)}).catch(function(t){window.alert(t)})},playPause:function(t){var e=t.commit,n=t.dispatch;audio.paused?(audio.play(),e("isPlaying",!0),n("timerRun")):n("pause")},pause:function(t){var e=t.commit,n=t.dispatch;audio.pause(),e("isPlaying",!1),n("timerPause")},timerRun:function(t){var e=t.state,n=t.commit;n("setTimerRunning",!0),n("setTimerInterval",setInterval(function(){e.timerRunning&&e.currentTime++},1e3))},timerPause:function(t){var e=t.state,n=t.commit;n("setTimerRunning",!1),clearInterval(e.timerInterval)},muteToggle:function(t){var e=t.state,n=t.commit;0==e.volume?n("updateVolume",e.previousVolume):(n("setPreviousVolume",e.volume),n("updateVolume",0))}}});r["a"].config.productionTip=!1,r["a"].filter("truncate",function(t,e){return t.length>e&&(t=t.substring(0,e-3)+"..."),t}),r["a"].filter("uppercase",function(t){return t.toUpperCase()}),new r["a"]({store:B,render:function(t){return t(J)}}).$mount("#app")},"5b70":function(t,e,n){},6131:function(t,e,n){"use strict";var r=n("bf75"),a=n.n(r);a.a},"64a9":function(t,e,n){},bc3f:function(t,e,n){"use strict";var r=n("5b70"),a=n.n(r);a.a},bf75:function(t,e,n){},d6d5:function(t,e,n){"use strict";var r=n("2f1f"),a=n.n(r);a.a},e848:function(t,e,n){}});
//# sourceMappingURL=app.829b1b51.js.map