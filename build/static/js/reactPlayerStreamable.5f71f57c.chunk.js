(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[32],{1110:function(e,n,t){var r=t(707),o=t(708),a=t(719),u=t(720),l=t(721),c=t(709),i=t(722),s=t(700);function p(e,n,t){return n=l(n),a(e,u()?Reflect.construct(n,t||[],l(e).constructor):n.apply(e,t))}var y,f=Object.create,d=Object.defineProperty,m=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,v=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty,P=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var o,a=s(h(n));try{var u=function(){var a=o.value;b.call(e,a)||a===t||d(e,a,{get:function(){return n[a]},enumerable:!(r=m(n,a))||r.enumerable})};for(a.s();!(o=a.n()).done;)u()}catch(l){a.e(l)}finally{a.f()}}return e},k=function(e,n,t){return function(e,n,t){n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},g={};!function(e,n){for(var t in n)d(e,t,{get:n[t],enumerable:!0})}(g,{default:function(){return L}}),e.exports=(y=g,P(d({},"__esModule",{value:!0}),y));var O=function(e,n,t){return t=null!=e?f(v(e)):{},P(!n&&e&&e.__esModule?t:d(t,"default",{value:e,enumerable:!0}),e)}(t(0)),j=t(743),w=t(748),L=function(e){"use strict";function n(){var e;return r(this,n),e=p(this,n,arguments),k(c(e),"callPlayer",j.callPlayer),k(c(e),"duration",null),k(c(e),"currentTime",null),k(c(e),"secondsLoaded",null),k(c(e),"mute",(function(){e.callPlayer("mute")})),k(c(e),"unmute",(function(){e.callPlayer("unmute")})),k(c(e),"ref",(function(n){e.iframe=n})),e}return i(n,e),o(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var n=this;(0,j.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((function(e){n.iframe&&(n.player=new e.Player(n.iframe),n.player.setLoop(n.props.loop),n.player.on("ready",n.props.onReady),n.player.on("play",n.props.onPlay),n.player.on("pause",n.props.onPause),n.player.on("seeked",n.props.onSeek),n.player.on("ended",n.props.onEnded),n.player.on("error",n.props.onError),n.player.on("timeupdate",(function(e){var t=e.duration,r=e.seconds;n.duration=t,n.currentTime=r})),n.player.on("buffered",(function(e){var t=e.percent;n.duration&&(n.secondsLoaded=n.duration*t)})),n.props.muted&&n.player.mute())}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),n||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=this.props.url.match(w.MATCH_URL_STREAMABLE)[1];return O.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/".concat(e),frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}]),n}(O.Component);k(L,"displayName","Streamable"),k(L,"canPlay",w.canPlay.streamable)}}]);
//# sourceMappingURL=reactPlayerStreamable.5f71f57c.chunk.js.map