(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[27],{1117:function(e,t,n){var r=n(725),i=n(707),o=n(708),s=n(719),a=n(720),l=n(721),u=n(709),p=n(722),c=n(700);function h(e,t,n){return t=l(t),s(e,a()?Reflect.construct(t,n||[],l(e).constructor):t.apply(e,n))}var d,f=Object.create,y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,E=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,g=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var i,o=c(m(t));try{var s=function(){var o=i.value;P.call(e,o)||o===n||y(e,o,{get:function(){return t[o]},enumerable:!(r=v(t,o))||r.enumerable})};for(o.s();!(i=o.n()).done;)s()}catch(a){o.e(a)}finally{o.f()}}return e},b=function(e,t,n){return function(e,t,n){t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},k={};!function(e,t){for(var n in t)y(e,n,{get:t[n],enumerable:!0})}(k,{default:function(){return j}}),e.exports=(d=k,g(y({},"__esModule",{value:!0}),d));var L=function(e,t,n){return n=null!=e?f(E(e)):{},g(!t&&e&&e.__esModule?n:y(n,"default",{value:e,enumerable:!0}),e)}(n(0)),S=n(743),w=n(748),I="undefined"!==typeof navigator,O=I&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,R=I&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||O)&&!window.MSStream,M=I&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,A=/www\.dropbox\.com\/.+/,D=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,j=function(e){"use strict";function t(){var e;return i(this,t),e=h(this,t,arguments),b(u(e),"onReady",(function(){var t;return(t=e.props).onReady.apply(t,arguments)})),b(u(e),"onPlay",(function(){var t;return(t=e.props).onPlay.apply(t,arguments)})),b(u(e),"onBuffer",(function(){var t;return(t=e.props).onBuffer.apply(t,arguments)})),b(u(e),"onBufferEnd",(function(){var t;return(t=e.props).onBufferEnd.apply(t,arguments)})),b(u(e),"onPause",(function(){var t;return(t=e.props).onPause.apply(t,arguments)})),b(u(e),"onEnded",(function(){var t;return(t=e.props).onEnded.apply(t,arguments)})),b(u(e),"onError",(function(){var t;return(t=e.props).onError.apply(t,arguments)})),b(u(e),"onPlayBackRateChange",(function(t){return e.props.onPlaybackRateChange(t.target.playbackRate)})),b(u(e),"onEnablePIP",(function(){var t;return(t=e.props).onEnablePIP.apply(t,arguments)})),b(u(e),"onDisablePIP",(function(t){var n=e.props,r=n.onDisablePIP,i=n.playing;r(t),i&&e.play()})),b(u(e),"onPresentationModeChange",(function(t){if(e.player&&(0,S.supportsWebKitPresentationMode)(e.player)){var n=e.player.webkitPresentationMode;"picture-in-picture"===n?e.onEnablePIP(t):"inline"===n&&e.onDisablePIP(t)}})),b(u(e),"onSeek",(function(t){e.props.onSeek(t.target.currentTime)})),b(u(e),"mute",(function(){e.player.muted=!0})),b(u(e),"unmute",(function(){e.player.muted=!1})),b(u(e),"renderSourceElement",(function(e,t){return"string"===typeof e?L.default.createElement("source",{key:t,src:e}):L.default.createElement("source",r({key:t},e))})),b(u(e),"renderTrack",(function(e,t){return L.default.createElement("track",r({key:t},e))})),b(u(e),"ref",(function(t){e.player&&(e.prevPlayer=e.player),e.player=t})),e}return p(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);var e=this.getSource(this.props.url);e&&(this.player.src=e),(R||this.props.config.forceDisableHls)&&this.player.load()}},{key:"componentDidUpdate",value:function(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,S.isMediaStream)(this.props.url)||this.props.url instanceof Array||(this.player.srcObject=null)}},{key:"componentWillUnmount",value:function(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}},{key:"addListeners",value:function(e){var t=this.props,n=t.url,r=t.playsinline;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(n)||e.addEventListener("canplay",this.onReady),r&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}},{key:"removeListeners",value:function(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}},{key:"shouldUseAudio",value:function(e){return!e.config.forceVideo&&(!e.config.attributes.poster&&(w.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio))}},{key:"shouldUseHLS",value:function(e){return!!(M&&this.props.config.forceSafariHLS||this.props.config.forceHLS)||!R&&!this.props.config.forceDisableHls&&(w.HLS_EXTENSIONS.test(e)||D.test(e))}},{key:"shouldUseDASH",value:function(e){return w.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}},{key:"shouldUseFLV",value:function(e){return w.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}},{key:"load",value:function(e){var t=this,n=this.props.config,r=n.hlsVersion,i=n.hlsOptions,o=n.dashVersion,s=n.flvVersion;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,S.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",r),"Hls").then((function(n){if(t.hls=new n(i),t.hls.on(n.Events.MANIFEST_PARSED,(function(){t.props.onReady()})),t.hls.on(n.Events.ERROR,(function(e,r){t.props.onError(e,r,t.hls,n)})),D.test(e)){var r=e.match(D)[1];t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",r))}else t.hls.loadSource(e);t.hls.attachMedia(t.player),t.props.onLoaded()})),this.shouldUseDASH(e)&&(0,S.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",o),"dashjs").then((function(n){t.dash=n.MediaPlayer().create(),t.dash.initialize(t.player,e,t.props.playing),t.dash.on("error",t.props.onError),parseInt(o)<3?t.dash.getDebug().setLogToBrowserConsole(!1):t.dash.updateSettings({debug:{logLevel:n.Debug.LOG_LEVEL_NONE}}),t.props.onLoaded()})),this.shouldUseFLV(e)&&(0,S.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",s),"flvjs").then((function(n){t.flv=n.createPlayer({type:"flv",url:e}),t.flv.attachMediaElement(t.player),t.flv.on(n.Events.ERROR,(function(e,r){t.props.onError(e,r,t.flv,n)})),t.flv.load(),t.props.onLoaded()})),e instanceof Array)this.player.load();else if((0,S.isMediaStream)(e))try{this.player.srcObject=e}catch(a){this.player.src=window.URL.createObjectURL(e)}}},{key:"play",value:function(){var e=this.player.play();e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.player.currentTime=e,t||this.pause()}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"enablePIP",value:function(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,S.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}},{key:"disablePIP",value:function(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,S.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}},{key:"setPlaybackRate",value:function(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}},{key:"getDuration",value:function(){if(!this.player)return null;var e=this.player,t=e.duration,n=e.seekable;return t===1/0&&n.length>0?n.end(n.length-1):t}},{key:"getCurrentTime",value:function(){return this.player?this.player.currentTime:null}},{key:"getSecondsLoaded",value:function(){if(!this.player)return null;var e=this.player.buffered;if(0===e.length)return 0;var t=e.end(e.length-1),n=this.getDuration();return t>n?n:t}},{key:"getSource",value:function(e){var t=this.shouldUseHLS(e),n=this.shouldUseDASH(e),r=this.shouldUseFLV(e);if(!(e instanceof Array||(0,S.isMediaStream)(e)||t||n||r))return A.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.playing,i=e.loop,o=e.controls,s=e.muted,a=e.config,l=e.width,u=e.height,p=this.shouldUseAudio(this.props)?"audio":"video",c={width:"auto"===l?l:"100%",height:"auto"===u?u:"100%"};return L.default.createElement(p,r({ref:this.ref,src:this.getSource(t),style:c,preload:"auto",autoPlay:n||void 0,controls:o,muted:s,loop:i},a.attributes),t instanceof Array&&t.map(this.renderSourceElement),a.tracks.map(this.renderTrack))}}]),t}(L.Component);b(j,"displayName","FilePlayer"),b(j,"canPlay",w.canPlay.file)}}]);
//# sourceMappingURL=reactPlayerFilePlayer.b9a815db.chunk.js.map