webpackJsonp([2,0],{0:function(t,i,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var o=s(39),n=e(o),r=s(76),h=e(r);new n.default({el:"app",render:function(t){return t(h.default)}})},37:function(t,i){},38:function(t,i){},72:function(t,i,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var o=s(77),n=e(o);i.default={components:{PullToRefresh:n.default},data:function(){return{items:[2,3,4,5,1,2,3,4,5,2,3,4,5,1,2,3,4,5,2,3,4,5,2,3,4,5]}},methods:{onPullup:function(t){var i=this;console.log("onPullup"),setTimeout(function(){console.log("finshCallback"),i.items=i.items.concat([6,6,6,6,6,6,6,6,6,6,6]),t()},3e3)},onPulldown:function(t){var i=this;console.log("onPulldown"),setTimeout(function(){console.log("finshCallback"),i.items=[9,9,9,9,9,9,9,9,9,9,9,9,9,9],t()},3e3)},testClick:function(t){window.alert("click "+t.target.innerHTML)}}}},73:function(t,i,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var o=s(75),n=e(o),r="下拉刷新",h="释放加载",a="加载中，请稍后",l="上拉刷新",c="释放加载",p="加载中，请稍后",u=-1,d=0,f=1,m=2,v="release",g="refresh",y=0,x=8e3,S=50,T=50;i.default={props:{disablePulldown:{type:Boolean,default:!1},disablePullup:{type:Boolean,default:!1}},data:function(){return{displaypullDownDiv:!1,displaypullUpDiv:!1,pullUpTip:l,pullDownTip:r,refreshStep:u,eleId:"bajianscroll",pulldownChangeStyle:"",pullupChangeStyle:"",pullDownDiff:0}},mounted:function(){this.$nextTick(function(){var t=this;this.eleId="bajian"+Math.round(1e3*Math.random()),setTimeout(function(){t.registerDrag()},50)})},methods:{registerDrag:function(){this.myscroll=new n.default("#"+this.eleId),this.myscroll.on("scroll",this._onTouchMove),this.myscroll.on("scrollEnd",this._onTouchEnd)},_onTouchMove:function(){if(this.refreshStep!=m)if(!this.disablePulldown&&this.myscroll.y>5&&this.myscroll.y<S/2){if(this.pullDownDiff=S-this.myscroll.y,this.refreshStep===d)return;this.displaypullDownDiv=!0,this.displaypullUpDiv=!1,this.pulldownChangeStyle="",this.pullDownTip=r,this.refreshStep=d}else if(!this.disablePulldown&&this.myscroll.y>=S)this.pulldownChangeStyle=v,this.pullDownTip=h,this.refreshStep=f;else if(!this.disablePullup&&this.myscroll.y<-5&&-this.myscroll.y>=T-this.myscroll.maxScrollY)this.pullupChangeStyle=v,this.pullUpTip=c,this.refreshStep=f;else if(!this.disablePullup&&this.myscroll.y<-5&&this.myscroll.y<this.myscroll.maxScrollY&&this.myscroll.y>-T/2+this.myscroll.maxScrollY){if(this.refreshStep===d)return;this.displaypullUpDiv=!0,this.displaypullDownDiv=!1,this.pullupChangeStyle="",this.pullUpTip=l,this.refreshStep=d}},reset:function(){var t=this;this.refreshStep!=u&&(this.refreshStep=u,this.disablePulldown||(this.displaypullDownDiv=!1,this.pulldownChangeStyle=""),this.disablePullup||(this.displaypullUpDiv=!1,this.pullupChangeStyle=""),setTimeout(function(){t.myscroll.refresh()},0),clearTimeout(y))},_onTouchEnd:function(){var t=this;this.pullDownDiff=0,this.refreshStep==f?(this.disablePullup||this.pullupChangeStyle!=v?this.disablePulldown||this.pulldownChangeStyle!=v||(this.pulldownChangeStyle=g,this.pullDownTip=a,this.refreshStep=m,this.$emit("on-pulldown",this.reset)):(this.myscroll.maxScrollY<-10&&this.myscroll.scrollTo(0,this.myscroll.maxScrollY-T),this.pullupChangeStyle=g,this.pullUpTip=p,this.refreshStep=m,this.$emit("on-pullup",this.reset)),y=window.setTimeout(function(){t.refreshStep==m&&t.reset()},x)):this.refreshStep!=m&&this.reset()}}}},74:function(t,i,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var o=s(71),n=e(o);!function(i,s,e){function o(t,i){this.wrapper="string"==typeof t?s.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var e in i)this.options[e]=i[e];this.translateZ=this.options.HWCompositing&&l.hasPerspective?" translateZ(0)":"",this.options.useTransition=l.hasTransition&&this.options.useTransition,this.options.useTransform=l.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?l.ease[this.options.bounceEasing]||l.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,3==this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function r(t,i,e){var o=s.createElement("div"),n=s.createElement("div");return e===!0&&(o.style.cssText="position:absolute;z-index:9999",n.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),n.className="iScrollIndicator","h"==t?(e===!0&&(o.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",n.style.height="100%"),o.className="iScrollHorizontalScrollbar"):(e===!0&&(o.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",n.style.width="100%"),o.className="iScrollVerticalScrollbar"),o.style.cssText+=";overflow:hidden",i||(o.style.pointerEvents="none"),o.appendChild(n),o}function h(t,e){this.wrapper="string"==typeof e.el?s.querySelector(e.el):e.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var o in e)this.options[o]=e[o];this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(l.addEvent(this.indicator,"touchstart",this),l.addEvent(i,"touchend",this)),this.options.disablePointer||(l.addEvent(this.indicator,l.prefixPointerEvent("pointerdown"),this),l.addEvent(i,l.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(l.addEvent(this.indicator,"mousedown",this),l.addEvent(i,"mouseup",this))),this.options.fade&&(this.wrapperStyle[l.style.transform]=this.scroller.translateZ,this.wrapperStyle[l.style.transitionDuration]=l.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var a=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.oRequestAnimationFrame||i.msRequestAnimationFrame||function(t){i.setTimeout(t,1e3/60)},l=function(){function t(t){return r!==!1&&(""===r?t:r+t.charAt(0).toUpperCase()+t.substr(1))}var o={},n=s.createElement("div").style,r=function(){for(var t,i=["t","webkitT","MozT","msT","OT"],s=0,e=i.length;s<e;s++)if(t=i[s]+"ransform",t in n)return i[s].substr(0,i[s].length-1);return!1}();o.getTime=Date.now||function(){return(new Date).getTime()},o.extend=function(t,i){for(var s in i)t[s]=i[s]},o.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},o.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},o.prefixPointerEvent=function(t){return i.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t},o.momentum=function(t,i,s,o,n,r){var h,a,l=t-i,c=e.abs(l)/s;return r=void 0===r?6e-4:r,h=t+c*c/(2*r)*(l<0?-1:1),a=c/r,h<o?(h=n?o-n/2.5*(c/8):o,l=e.abs(h-t),a=l/c):h>0&&(h=n?n/2.5*(c/8):0,l=e.abs(t)+h,a=l/c),{destination:e.round(h),duration:a}};var h=t("transform");return o.extend(o,{hasTransform:h!==!1,hasPerspective:t("perspective")in n,hasTouch:"ontouchstart"in i,hasPointer:i.PointerEvent||i.MSPointerEvent,hasTransition:t("transition")in n}),o.isBadAndroid=/Android /.test(i.navigator.appVersion)&&!/Chrome\/\d/.test(i.navigator.appVersion),o.extend(o.style={},{transform:h,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),o.hasClass=function(t,i){var s=new RegExp("(^|\\s)"+i+"(\\s|$)");return s.test(t.className)},o.addClass=function(t,i){if(!o.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}},o.removeClass=function(t,i){if(o.hasClass(t,i)){var s=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s," ")}},o.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},o.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},o.extend(o.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),o.extend(o.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return e.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var i=.22,s=.4;return 0===t?0:1==t?1:s*e.pow(2,-10*t)*e.sin((t-i/4)*(2*e.PI)/i)+1}}}),o.tap=function(t,i){var e=s.createEvent("Event");e.initEvent(i,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)},o.click=function(t){var i,e=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)||(i=s.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,t.view,1,e.screenX,e.screenY,e.clientX,e.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),i._constructed=!0,e.dispatchEvent(i))},o}();o.prototype={version:"5.1.3",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if((1==l.eventType[t.type]||0===t.button)&&this.enabled&&(!this.initiated||l.eventType[t.type]===this.initiated)){!this.options.preventDefault||l.isBadAndroid||l.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=l.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=l.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,i=this.getComputedPosition(),this._translate(e.round(i.x),e.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&l.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,o,n,r=t.touches?t.touches[0]:t,h=r.pageX-this.pointX,a=r.pageY-this.pointY,c=l.getTime();if(this.pointX=r.pageX,this.pointY=r.pageY,this.distX+=h,this.distY+=a,o=e.abs(this.distX),n=e.abs(this.distY),!(c-this.endTime>300&&o<10&&n<10)){if(this.directionLocked||this.options.freeScroll||(o>n+this.options.directionLockThreshold?this.directionLocked="h":n>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);a=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}h=this.hasHorizontalScroll?h:0,a=this.hasVerticalScroll?a:0,i=this.x+h,s=this.y+a,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+h/3:i>0?0:this.maxScrollX),(s>0||s<this.maxScrollY)&&(s=this.options.bounce?this.y+a/3:s>0?0:this.maxScrollY),this.directionX=h>0?-1:h<0?1:0,this.directionY=a>0?-1:a<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y,1==this.options.probeType&&this._execEvent("scroll")),this.options.probeType>1&&this._execEvent("scroll")}}},_end:function(t){if(this.enabled&&l.eventType[t.type]===this.initiated){this.options.preventDefault&&!l.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var i,s,o=(t.changedTouches?t.changedTouches[0]:t,l.getTime()-this.startTime),n=e.round(this.x),r=e.round(this.y),h=e.abs(n-this.startX),a=e.abs(r-this.startY),c=0,p="";if(this.isInTransition=0,this.initiated=0,this.endTime=l.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(n,r),!this.moved)return this.options.tap&&l.tap(t,this.options.tap),this.options.click&&l.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&o<200&&h<100&&a<100)return void this._execEvent("flick");if(this.options.momentum&&o<300&&(i=this.hasHorizontalScroll?l.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:n,duration:0},s=this.hasVerticalScroll?l.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:r,duration:0},n=i.destination,r=s.destination,c=e.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var u=this._nearestSnap(n,r);this.currentPage=u,c=this.options.snapSpeed||e.max(e.max(e.min(e.abs(n-u.x),1e3),e.min(e.abs(r-u.y),1e3)),300),n=u.x,r=u.y,this.directionX=0,this.directionY=0,p=this.options.bounceEasing}return n!=this.x||r!=this.y?((n>0||n<this.maxScrollX||r>0||r<this.maxScrollY)&&(p=l.ease.quadratic),void this.scrollTo(n,r,c,p)):void this._execEvent("scrollEnd")}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=l.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);s>-1&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||l.ease.circular,this.isInTransition=this.options.useTransition&&s>0,!s||this.options.useTransition&&e.style?(this._transitionTimingFunction(e.style),this._transitionTime(s),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,o,n){if(t=t.nodeType?t:this.scroller.querySelector(t)){var r=l.offset(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,s===!0&&(s=e.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),o===!0&&(o=e.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=s||0,r.top-=o||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,i=void 0===i||null===i||"auto"===i?e.max(e.abs(this.x-r.left),e.abs(this.y-r.top)):i,this.scrollTo(r.left,r.top,i,n)}},_transitionTime:function(t){if(t=t||0,this.scrollerStyle[l.style.transitionDuration]=t+"ms",!t&&l.isBadAndroid&&(this.scrollerStyle[l.style.transitionDuration]="0.001s"),this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTime(t)},_transitionTimingFunction:function(t){if(this.scrollerStyle[l.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[l.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=e.round(t),i=e.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(t){var s=t?l.removeEvent:l.addEvent,e=this.options.bindToWrapper?this.wrapper:i;s(i,"orientationchange",this),s(i,"resize",this),this.options.click&&s(this.wrapper,"click",this,!0),this.options.disableMouse||(s(this.wrapper,"mousedown",this),s(e,"mousemove",this),s(e,"mousecancel",this),s(e,"mouseup",this)),l.hasPointer&&!this.options.disablePointer&&(s(this.wrapper,l.prefixPointerEvent("pointerdown"),this),s(e,l.prefixPointerEvent("pointermove"),this),s(e,l.prefixPointerEvent("pointercancel"),this),s(e,l.prefixPointerEvent("pointerup"),this)),l.hasTouch&&!this.options.disableTouch&&(s(this.wrapper,"touchstart",this),s(e,"touchmove",this),s(e,"touchcancel",this),s(e,"touchend",this)),s(this.scroller,"transitionend",this),s(this.scroller,"webkitTransitionEnd",this),s(this.scroller,"oTransitionEnd",this),s(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,s,e=i.getComputedStyle(this.scroller,null);return this.options.useTransform?(e=e[l.style.transform].split(")")[0].split(", "),t=+(e[12]||e[4]),s=+(e[13]||e[5])):(t=+e.left.replace(/[^-\d.]/g,""),s=+e.top.replace(/[^-\d.]/g,"")),{x:t,y:s}},_initIndicators:function(){function t(t){for(var i=n.indicators.length;i--;)t.call(n.indicators[i])}var i,s=this.options.interactiveScrollbars,e="string"!=typeof this.options.scrollbars,o=[],n=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(i={el:r("v",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,customStyle:e,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(i.el),o.push(i)),this.options.scrollX&&(i={el:r("h",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,customStyle:e,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(i.el),o.push(i))),this.options.indicators&&(o=o.concat(this.options.indicators));for(var a=o.length;a--;)this.indicators.push(new h(this,o[a]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){t(function(){this.fade()})}),this.on("scrollCancel",function(){t(function(){this.fade()})}),this.on("scrollStart",function(){t(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){t(function(){this.fade(1,!0)})})),this.on("refresh",function(){t(function(){this.refresh()})}),this.on("destroy",function(){t(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){l.addEvent(this.wrapper,"wheel",this),l.addEvent(this.wrapper,"mousewheel",this),l.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){l.removeEvent(this.wrapper,"wheel",this),l.removeEvent(this.wrapper,"mousewheel",this),l.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation();var i,s,o,n,r=this;if(void 0===this.wheelTimeout&&r._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){r._execEvent("scrollEnd"),r.wheelTimeout=void 0},400),"deltaX"in t)1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,s=-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,s=-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return o=this.currentPage.pageX,n=this.currentPage.pageY,i>0?o--:i<0&&o++,s>0?n--:s<0&&n++,void this.goToPage(o,n);o=this.x+e.round(this.hasHorizontalScroll?i:0),n=this.y+e.round(this.hasVerticalScroll?s:0),o>0?o=0:o<this.maxScrollX&&(o=this.maxScrollX),n>0?n=0:n<this.maxScrollY&&(n=this.maxScrollY),this.scrollTo(o,n,0),this.options.probeType>1&&this._execEvent("scroll")}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,o,n,r,h=0,a=0,l=0,c=this.options.snapStepX||this.wrapperWidth,p=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(this.options.snap===!0)for(s=e.round(c/2),o=e.round(p/2);l>-this.scrollerWidth;){for(this.pages[h]=[],t=0,n=0;n>-this.scrollerHeight;)this.pages[h][t]={x:e.max(l,this.maxScrollX),y:e.max(n,this.maxScrollY),width:c,height:p,cx:l-s,cy:n-o},n-=p,t++;l-=c,h++}else for(r=this.options.snap,t=r.length,i=-1;h<t;h++)(0===h||r[h].offsetLeft<=r[h-1].offsetLeft)&&(a=0,i++),this.pages[a]||(this.pages[a]=[]),l=e.max(-r[h].offsetLeft,this.maxScrollX),n=e.max(-r[h].offsetTop,this.maxScrollY),s=l-e.round(r[h].offsetWidth/2),o=n-e.round(r[h].offsetHeight/2),this.pages[a][i]={x:l,y:n,width:r[h].offsetWidth,height:r[h].offsetHeight,cx:s,cy:o},l>this.maxScrollX&&a++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||e.max(e.max(e.min(e.abs(this.x-this.startX),1e3),e.min(e.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var s=0,o=this.pages.length,n=0;if(e.abs(t-this.absStartX)<this.snapThresholdX&&e.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);s<o;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}for(o=this.pages[s].length;n<o;n++)if(i>=this.pages[0][n].cy){i=this.pages[0][n].y;break}return s==this.currentPage.pageX&&(s+=this.directionX,s<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),n==this.currentPage.pageY&&(n+=this.directionY,n<0?n=0:n>=this.pages[0].length&&(n=this.pages[0].length-1),i=this.pages[0][n].y),{x:t,y:i,pageX:s,pageY:n}},goToPage:function(t,i,s,o){o=o||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||e.max(e.max(e.min(e.abs(n-this.x),1e3),e.min(e.abs(r-this.y),1e3)),300):s,this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,s,o)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s++,s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s--,s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(t){var s,e={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==(0,n.default)(this.options.keyBindings))for(s in this.options.keyBindings)"string"==typeof this.options.keyBindings[s]&&(this.options.keyBindings[s]=this.options.keyBindings[s].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(s in e)this.options.keyBindings[s]=this.options.keyBindings[s]||e[s];l.addEvent(i,"keydown",this),this.on("destroy",function(){l.removeEvent(i,"keydown",this)})},_key:function(t){if(this.enabled){var i,s=this.options.snap,o=s?this.currentPage.pageX:this.x,n=s?this.currentPage.pageY:this.y,r=l.getTime(),h=this.keyTime||0,a=.25;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(e.round(i.x),e.round(i.y)),this.isInTransition=!1),this.keyAcceleration=r-h<200?e.min(this.keyAcceleration+a,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?o+=s?1:this.wrapperWidth:n+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?o-=s?1:this.wrapperWidth:n-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:o=s?this.pages.length-1:this.maxScrollX,n=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=0,n=0;break;case this.options.keyBindings.left:o+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:n+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:o-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:n-=s?1:5+this.keyAcceleration>>0;break;default:return}if(s)return void this.goToPage(o,n);o>0?(o=0,this.keyAcceleration=0):o<this.maxScrollX&&(o=this.maxScrollX,this.keyAcceleration=0),n>0?(n=0,this.keyAcceleration=0):n<this.maxScrollY&&(n=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(o,n,0),this.keyTime=r}},_animate:function(t,i,s,e){function o(){var u,d,f,m=l.getTime();return m>=p?(n.isAnimating=!1,n._translate(t,i),void(n.resetPosition(n.options.bounceTime)||n._execEvent("scrollEnd"))):(m=(m-c)/s,f=e(m),u=(t-r)*f+r,d=(i-h)*f+h,n._translate(u,d),n.isAnimating&&a(o),void(3==n.options.probeType&&n._execEvent("scroll")))}var n=this,r=this.x,h=this.y,c=l.getTime(),p=c+s;this.isAnimating=!0,o()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}}},h.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.interactive&&(l.removeEvent(this.indicator,"touchstart",this),l.removeEvent(this.indicator,l.prefixPointerEvent("pointerdown"),this),l.removeEvent(this.indicator,"mousedown",this),l.removeEvent(i,"touchmove",this),l.removeEvent(i,l.prefixPointerEvent("pointermove"),this),l.removeEvent(i,"mousemove",this),l.removeEvent(i,"touchend",this),l.removeEvent(i,l.prefixPointerEvent("pointerup"),this),l.removeEvent(i,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var s=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=s.pageX,this.lastPointY=s.pageY,this.startTime=l.getTime(),this.options.disableTouch||l.addEvent(i,"touchmove",this),this.options.disablePointer||l.addEvent(i,l.prefixPointerEvent("pointermove"),this),this.options.disableMouse||l.addEvent(i,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t,r=l.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),1==this.scroller.options.probeType&&r-this.startTime>300?(this.startTime=r,this.scroller._execEvent("scroll")):this.scroller.options.probeType>1&&this.scroller._execEvent("scroll"),t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),l.removeEvent(i,"touchmove",this),l.removeEvent(i,l.prefixPointerEvent("pointermove"),this),l.removeEvent(i,"mousemove",this),this.scroller.options.snap){var s=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),o=this.options.snapSpeed||e.max(e.max(e.min(e.abs(this.scroller.x-s.x),1e3),e.min(e.abs(this.scroller.y-s.y),1e3)),300);this.scroller.x==s.x&&this.scroller.y==s.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=s,this.scroller.scrollTo(s.x,s.y,o,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0,this.indicatorStyle[l.style.transitionDuration]=t+"ms",!t&&l.isBadAndroid&&(this.indicatorStyle[l.style.transitionDuration]="0.001s")},transitionTimingFunction:function(t){this.indicatorStyle[l.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",
this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(l.addClass(this.wrapper,"iScrollBothScrollbars"),l.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(l.removeClass(this.wrapper,"iScrollBothScrollbars"),l.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=e.max(e.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=e.max(e.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&e.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&e.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=e.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=e.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=e.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=e.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",i=this.maxPosY+this.indicatorHeight-this.height):i=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[l.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?e.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?e.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[l.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},o.utils=l,"undefined"!=typeof t&&t.exports?t.exports=o:i.IScroll=o}(window,document,Math)},75:function(t,i,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var o=s(74),n=e(o),r=function(t,i){for(var s in i)t[s]=i[s];return t},h=function(t,i){var s,e={probeType:2,scrollbars:"custom",mouseWheel:!0,fadeScrollbars:!0,bounce:!0,listenX:!1,interactiveScrollbars:!0,shrinkScrollbars:"scale",click:!0,momentum:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/}};return e=r(e,i||{}),n.default.utils.isBadAndroid=!1,s=new n.default(t,e),s.refresh(),s};"undefined"!=typeof t&&t.exports?t.exports=h:window.scroll=h},76:function(t,i,s){var e,o;s(37),e=s(72);var n=s(78);o=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(o=e=e.default),"function"==typeof o&&(o=o.options),o.render=n.render,o.staticRenderFns=n.staticRenderFns,t.exports=e},77:function(t,i,s){var e,o;s(38),e=s(73);var n=s(79);o=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(o=e=e.default),"function"==typeof o&&(o=o.options),o.render=n.render,o.staticRenderFns=n.staticRenderFns,o._scopeId="data-v-4384eb17",t.exports=e},78:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;return i("div",{attrs:{id:"app"}},[i("pull-to-refresh",{staticClass:"page",on:{"on-pullup":t.onPullup,"on-pulldown":t.onPulldown}},[i("ul",{on:{click:function(i){t.testClick(i)}}},[t._l(t.items,function(s,e){return i("li",{key:e},["\n        # item "+t._s(e)+" \n      "])})])])," "])},staticRenderFns:[]}},79:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;return i("div",{staticClass:"pull-container",attrs:{id:t.eleId}},[i("div",{staticClass:"scroller"},[i("div",{staticClass:"pulldown",class:[t.pulldownChangeStyle,{hide:!t.displaypullDownDiv}],style:{"margin-top":"-"+t.pullDownDiff+"px"}},[i("div",{staticClass:"pulldown-icon"})," ",i("div",{staticClass:"pulldown-label"},[t._s(t.pullDownTip)])])," ",t._t("default")," ",i("div",{staticClass:"pullup",class:[t.pullupChangeStyle,{hide:!t.displaypullUpDiv}]},[i("div",{staticClass:"pullup-icon"})," ",i("div",{staticClass:"pullup-label"},[t._s(t.pullUpTip)])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=app.cf5465bf8dad174700b3.js.map