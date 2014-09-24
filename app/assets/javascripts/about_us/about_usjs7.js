/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};e.fn.bxSlider=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(s)}),this;var r={},o=this;t.el=this;var a=e(window).width(),l=e(window).height(),d=function(){r.settings=e.extend({},n,s),r.settings.slideWidth=parseInt(r.settings.slideWidth),r.children=o.children(r.settings.slideSelector),r.children.length<r.settings.minSlides&&(r.settings.minSlides=r.children.length),r.children.length<r.settings.maxSlides&&(r.settings.maxSlides=r.children.length),r.settings.randomStart&&(r.settings.startSlide=Math.floor(Math.random()*r.children.length)),r.active={index:r.settings.startSlide},r.carousel=r.settings.minSlides>1||r.settings.maxSlides>1,r.carousel&&(r.settings.preloadImages="all"),r.minThreshold=r.settings.minSlides*r.settings.slideWidth+(r.settings.minSlides-1)*r.settings.slideMargin,r.maxThreshold=r.settings.maxSlides*r.settings.slideWidth+(r.settings.maxSlides-1)*r.settings.slideMargin,r.working=!1,r.controls={},r.interval=null,r.animProp="vertical"==r.settings.mode?"top":"left",r.usingCSS=r.settings.useCSS&&"fade"!=r.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return r.cssPrefix=t[i].replace("Perspective","").toLowerCase(),r.animProp="-"+r.cssPrefix+"-transform",!0;return!1}(),"vertical"==r.settings.mode&&(r.settings.maxSlides=r.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(r.settings.slideSelector).each(function(){e(this).data("origStyle",e(this).attr("style"))}),c()},c=function(){o.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),r.viewport=o.parent(),r.loader=e('<div class="bx-loading" />'),r.viewport.prepend(r.loader),o.css({width:"horizontal"==r.settings.mode?100*r.children.length+215+"%":"auto",position:"relative"}),r.usingCSS&&r.settings.easing?o.css("-"+r.cssPrefix+"-transition-timing-function",r.settings.easing):r.settings.easing||(r.settings.easing="swing"),m(),r.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),r.viewport.parent().css({maxWidth:f()}),r.settings.pager||r.viewport.parent().css({margin:"0 auto 0px"}),r.children.css({"float":"horizontal"==r.settings.mode?"left":"none",listStyle:"none",position:"relative"}),r.children.css("width",g()),"horizontal"==r.settings.mode&&r.settings.slideMargin>0&&r.children.css("marginRight",r.settings.slideMargin),"vertical"==r.settings.mode&&r.settings.slideMargin>0&&r.children.css("marginBottom",r.settings.slideMargin),"fade"==r.settings.mode&&(r.children.css({position:"absolute",zIndex:0,display:"none"}),r.children.eq(r.settings.startSlide).css({zIndex:50,display:"block"})),r.controls.el=e('<div class="bx-controls" />'),r.settings.captions&&k(),r.active.last=r.settings.startSlide==v()-1,r.settings.video&&o.fitVids();var t=r.children.eq(r.settings.startSlide);"all"==r.settings.preloadImages&&(t=r.children),r.settings.ticker?r.settings.pager=!1:(r.settings.pager&&x(),r.settings.controls&&S(),r.settings.auto&&r.settings.autoControls&&T(),(r.settings.controls||r.settings.autoControls||r.settings.pager)&&r.viewport.after(r.controls.el)),u(t,p)},u=function(t,i){var n=t.find("img, iframe").length;if(0==n)return i(),void 0;var s=0;t.find("img, iframe").each(function(){e(this).one("load",function(){++s==n&&i()}).each(function(){this.complete&&e(this).load()})})},p=function(){if(r.settings.infiniteLoop&&"fade"!=r.settings.mode&&!r.settings.ticker){var t="vertical"==r.settings.mode?r.settings.minSlides:r.settings.maxSlides,i=r.children.slice(0,t).clone().addClass("bx-clone"),n=r.children.slice(-t).clone().addClass("bx-clone");o.append(i).prepend(n)}r.loader.remove(),y(),"vertical"==r.settings.mode&&(r.settings.adaptiveHeight=!0),r.viewport.height(h()),o.redrawSlider(),r.settings.onSliderLoad(r.active.index),r.initialized=!0,r.settings.responsive&&e(window).bind("resize",q),r.settings.auto&&r.settings.autoStart&&L(),r.settings.ticker&&D(),r.settings.pager&&P(r.settings.startSlide),r.settings.controls&&M(),r.settings.touchEnabled&&!r.settings.ticker&&$()},h=function(){var t=0,n=e();if("vertical"==r.settings.mode||r.settings.adaptiveHeight)if(r.carousel){var s=1==r.settings.moveSlides?r.active.index:r.active.index*_();for(n=r.children.eq(s),i=1;i<=r.settings.maxSlides-1;i++)n=s+i>=r.children.length?n.add(r.children.eq(i-1)):n.add(r.children.eq(s+i))}else n=r.children.eq(r.active.index);else n=r.children;return"vertical"==r.settings.mode?(n.each(function(){t+=e(this).outerHeight()}),r.settings.slideMargin>0&&(t+=r.settings.slideMargin*(r.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),t},f=function(){var e="100%";return r.settings.slideWidth>0&&(e="horizontal"==r.settings.mode?r.settings.maxSlides*r.settings.slideWidth+(r.settings.maxSlides-1)*r.settings.slideMargin:r.settings.slideWidth),e},g=function(){var e=r.settings.slideWidth,t=r.viewport.width();return 0==r.settings.slideWidth||r.settings.slideWidth>t&&!r.carousel||"vertical"==r.settings.mode?e=t:r.settings.maxSlides>1&&"horizontal"==r.settings.mode&&(t>r.maxThreshold||t<r.minThreshold&&(e=(t-r.settings.slideMargin*(r.settings.minSlides-1))/r.settings.minSlides)),e},m=function(){var e=1;if("horizontal"==r.settings.mode&&r.settings.slideWidth>0)if(r.viewport.width()<r.minThreshold)e=r.settings.minSlides;else if(r.viewport.width()>r.maxThreshold)e=r.settings.maxSlides;else{var t=r.children.first().width();e=Math.floor(r.viewport.width()/t)}else"vertical"==r.settings.mode&&(e=r.settings.minSlides);return e},v=function(){var e=0;if(r.settings.moveSlides>0)if(r.settings.infiniteLoop)e=r.children.length/_();else for(var t=0,i=0;t<r.children.length;)++e,t=i+m(),i+=r.settings.moveSlides<=m()?r.settings.moveSlides:m();else e=Math.ceil(r.children.length/m());return e},_=function(){return r.settings.moveSlides>0&&r.settings.moveSlides<=m()?r.settings.moveSlides:m()},y=function(){if(r.children.length>r.settings.maxSlides&&r.active.last&&!r.settings.infiniteLoop){if("horizontal"==r.settings.mode){var e=r.children.last(),t=e.position();b(-(t.left-(r.viewport.width()-e.width())),"reset",0)}else if("vertical"==r.settings.mode){var i=r.children.length-r.settings.minSlides,t=r.children.eq(i).position();b(-t.top,"reset",0)}}else{var t=r.children.eq(r.active.index*_()).position();r.active.index==v()-1&&(r.active.last=!0),void 0!=t&&("horizontal"==r.settings.mode?b(-t.left,"reset",0):"vertical"==r.settings.mode&&b(-t.top,"reset",0))}},b=function(e,t,i,n){if(r.usingCSS){var s="vertical"==r.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";o.css("-"+r.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==t?(o.css(r.animProp,s),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),j()})):"reset"==t?o.css(r.animProp,s):"ticker"==t&&(o.css("-"+r.cssPrefix+"-transition-timing-function","linear"),o.css(r.animProp,s),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(n.resetValue,"reset",0),z()}))}else{var a={};a[r.animProp]=e,"slide"==t?o.animate(a,i,r.settings.easing,function(){j()}):"reset"==t?o.css(r.animProp,e):"ticker"==t&&o.animate(a,speed,"linear",function(){b(n.resetValue,"reset",0),z()})}},w=function(){for(var t="",i=v(),n=0;i>n;n++){var s="";r.settings.buildPager&&e.isFunction(r.settings.buildPager)?(s=r.settings.buildPager(n),r.pagerEl.addClass("bx-custom-pager")):(s=n+1,r.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+s+"</a></div>"}r.pagerEl.html(t)},x=function(){r.settings.pagerCustom?r.pagerEl=e(r.settings.pagerCustom):(r.pagerEl=e('<div class="bx-pager" />'),r.settings.pagerSelector?e(r.settings.pagerSelector).html(r.pagerEl):r.controls.el.addClass("bx-has-pager").append(r.pagerEl),w()),r.pagerEl.delegate("a","click",A)},S=function(){r.controls.next=e('<a class="bx-next" href="">'+r.settings.nextText+"</a>"),r.controls.prev=e('<a class="bx-prev" href="">'+r.settings.prevText+"</a>"),r.controls.next.bind("click",C),r.controls.prev.bind("click",N),r.settings.nextSelector&&e(r.settings.nextSelector).append(r.controls.next),r.settings.prevSelector&&e(r.settings.prevSelector).append(r.controls.prev),r.settings.nextSelector||r.settings.prevSelector||(r.controls.directionEl=e('<div class="bx-controls-direction" />'),r.controls.directionEl.append(r.controls.prev).append(r.controls.next),r.controls.el.addClass("bx-has-controls-direction").append(r.controls.directionEl))},T=function(){r.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+r.settings.startText+"</a></div>"),r.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+r.settings.stopText+"</a></div>"),r.controls.autoEl=e('<div class="bx-controls-auto" />'),r.controls.autoEl.delegate(".bx-start","click",I),r.controls.autoEl.delegate(".bx-stop","click",E),r.settings.autoControlsCombine?r.controls.autoEl.append(r.controls.start):r.controls.autoEl.append(r.controls.start).append(r.controls.stop),r.settings.autoControlsSelector?e(r.settings.autoControlsSelector).html(r.controls.autoEl):r.controls.el.addClass("bx-has-controls-auto").append(r.controls.autoEl),H(r.settings.autoStart?"stop":"start")},k=function(){r.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!=t&&(""+t).length&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},C=function(e){r.settings.auto&&o.stopAuto(),o.goToNextSlide(),e.preventDefault()},N=function(e){r.settings.auto&&o.stopAuto(),o.goToPrevSlide(),e.preventDefault()},I=function(e){o.startAuto(),e.preventDefault()},E=function(e){o.stopAuto(),e.preventDefault()},A=function(t){r.settings.auto&&o.stopAuto();var i=e(t.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=r.active.index&&o.goToSlide(n),t.preventDefault()},P=function(t){var i=r.children.length;return"short"==r.settings.pagerType?(r.settings.maxSlides>1&&(i=Math.ceil(r.children.length/r.settings.maxSlides)),r.pagerEl.html(t+1+r.settings.pagerShortSeparator+i),void 0):(r.pagerEl.find("a").removeClass("active"),r.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")}),void 0)},j=function(){if(r.settings.infiniteLoop){var e="";0==r.active.index?e=r.children.eq(0).position():r.active.index==v()-1&&r.carousel?e=r.children.eq((v()-1)*_()).position():r.active.index==r.children.length-1&&(e=r.children.eq(r.children.length-1).position()),"horizontal"==r.settings.mode?b(-e.left,"reset",0):"vertical"==r.settings.mode&&b(-e.top,"reset",0)}r.working=!1,r.settings.onSlideAfter(r.children.eq(r.active.index),r.oldIndex,r.active.index)},H=function(e){r.settings.autoControlsCombine?r.controls.autoEl.html(r.controls[e]):(r.controls.autoEl.find("a").removeClass("active"),r.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},M=function(){1==v()?(r.controls.prev.addClass("disabled"),r.controls.next.addClass("disabled")):!r.settings.infiniteLoop&&r.settings.hideControlOnEnd&&(0==r.active.index?(r.controls.prev.addClass("disabled"),r.controls.next.removeClass("disabled")):r.active.index==v()-1?(r.controls.next.addClass("disabled"),r.controls.prev.removeClass("disabled")):(r.controls.prev.removeClass("disabled"),r.controls.next.removeClass("disabled")))},L=function(){r.settings.autoDelay>0?setTimeout(o.startAuto,r.settings.autoDelay):o.startAuto(),r.settings.autoHover&&o.hover(function(){r.interval&&(o.stopAuto(!0),r.autoPaused=!0)},function(){r.autoPaused&&(o.startAuto(!0),r.autoPaused=null)})},D=function(){var t=0;if("next"==r.settings.autoDirection)o.append(r.children.clone().addClass("bx-clone"));else{o.prepend(r.children.clone().addClass("bx-clone"));var i=r.children.first().position();t="horizontal"==r.settings.mode?-i.left:-i.top}b(t,"reset",0),r.settings.pager=!1,r.settings.controls=!1,r.settings.autoControls=!1,r.settings.tickerHover&&!r.usingCSS&&r.viewport.hover(function(){o.stop()},function(){var t=0;r.children.each(function(){t+="horizontal"==r.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=r.settings.speed/t,n="horizontal"==r.settings.mode?"left":"top",s=i*(t-Math.abs(parseInt(o.css(n))));z(s)}),z()},z=function(e){speed=e?e:r.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"==r.settings.autoDirection?t=o.find(".bx-clone").first().position():i=r.children.first().position();var n="horizontal"==r.settings.mode?-t.left:-t.top,s="horizontal"==r.settings.mode?-i.left:-i.top,a={resetValue:s};b(n,"ticker",speed,a)},$=function(){r.touch={start:{x:0,y:0},end:{x:0,y:0}},r.viewport.bind("touchstart",F)},F=function(e){if(r.working)e.preventDefault();else{r.touch.originalPos=o.position();var t=e.originalEvent;r.touch.start.x=t.changedTouches[0].pageX,r.touch.start.y=t.changedTouches[0].pageY,r.viewport.bind("touchmove",O),r.viewport.bind("touchend",B)}},O=function(e){var t=e.originalEvent,i=Math.abs(t.changedTouches[0].pageX-r.touch.start.x),n=Math.abs(t.changedTouches[0].pageY-r.touch.start.y);if(3*i>n&&r.settings.preventDefaultSwipeX?e.preventDefault():3*n>i&&r.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=r.settings.mode&&r.settings.oneToOneTouch){var s=0;if("horizontal"==r.settings.mode){var o=t.changedTouches[0].pageX-r.touch.start.x;s=r.touch.originalPos.left+o}else{var o=t.changedTouches[0].pageY-r.touch.start.y;s=r.touch.originalPos.top+o}b(s,"reset",0)}},B=function(e){r.viewport.unbind("touchmove",O);var t=e.originalEvent,i=0;if(r.touch.end.x=t.changedTouches[0].pageX,r.touch.end.y=t.changedTouches[0].pageY,"fade"==r.settings.mode){var n=Math.abs(r.touch.start.x-r.touch.end.x);n>=r.settings.swipeThreshold&&(r.touch.start.x>r.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())}else{var n=0;"horizontal"==r.settings.mode?(n=r.touch.end.x-r.touch.start.x,i=r.touch.originalPos.left):(n=r.touch.end.y-r.touch.start.y,i=r.touch.originalPos.top),!r.settings.infiniteLoop&&(0==r.active.index&&n>0||r.active.last&&0>n)?b(i,"reset",200):Math.abs(n)>=r.settings.swipeThreshold?(0>n?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):b(i,"reset",200)}r.viewport.unbind("touchend",B)},q=function(){var t=e(window).width(),i=e(window).height();(a!=t||l!=i)&&(a=t,l=i,o.redrawSlider())};return o.goToSlide=function(t,i){if(!r.working&&r.active.index!=t)if(r.working=!0,r.oldIndex=r.active.index,r.active.index=0>t?v()-1:t>=v()?0:t,r.settings.onSlideBefore(r.children.eq(r.active.index),r.oldIndex,r.active.index),"next"==i?r.settings.onSlideNext(r.children.eq(r.active.index),r.oldIndex,r.active.index):"prev"==i&&r.settings.onSlidePrev(r.children.eq(r.active.index),r.oldIndex,r.active.index),r.active.last=r.active.index>=v()-1,r.settings.pager&&P(r.active.index),r.settings.controls&&M(),"fade"==r.settings.mode)r.settings.adaptiveHeight&&r.viewport.height()!=h()&&r.viewport.animate({height:h()},r.settings.adaptiveHeightSpeed),r.children.filter(":visible").fadeOut(r.settings.speed).css({zIndex:0}),r.children.eq(r.active.index).css("zIndex",51).fadeIn(r.settings.speed,function(){e(this).css("zIndex",50),j()});else{r.settings.adaptiveHeight&&r.viewport.height()!=h()&&r.viewport.animate({height:h()},r.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!r.settings.infiniteLoop&&r.carousel&&r.active.last)if("horizontal"==r.settings.mode){var a=r.children.eq(r.children.length-1);s=a.position(),n=r.viewport.width()-a.outerWidth()}else{var l=r.children.length-r.settings.minSlides;s=r.children.eq(l).position()}else if(r.carousel&&r.active.last&&"prev"==i){var d=1==r.settings.moveSlides?r.settings.maxSlides-_():(v()-1)*_()-(r.children.length-r.settings.maxSlides),a=o.children(".bx-clone").eq(d);s=a.position()}else if("next"==i&&0==r.active.index)s=o.find("> .bx-clone").eq(r.settings.maxSlides).position(),r.active.last=!1;else if(t>=0){var c=t*_();s=r.children.eq(c).position()}if("undefined"!=typeof s){var u="horizontal"==r.settings.mode?-(s.left-n):-s.top;b(u,"slide",r.settings.speed)}}},o.goToNextSlide=function(){if(r.settings.infiniteLoop||!r.active.last){var e=parseInt(r.active.index)+1;o.goToSlide(e,"next")}},o.goToPrevSlide=function(){if(r.settings.infiniteLoop||0!=r.active.index){var e=parseInt(r.active.index)-1;o.goToSlide(e,"prev")}},o.startAuto=function(e){r.interval||(r.interval=setInterval(function(){"next"==r.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},r.settings.pause),r.settings.autoControls&&1!=e&&H("stop"))},o.stopAuto=function(e){r.interval&&(clearInterval(r.interval),r.interval=null,r.settings.autoControls&&1!=e&&H("start"))},o.getCurrentSlide=function(){return r.active.index},o.getSlideCount=function(){return r.children.length},o.redrawSlider=function(){r.children.add(o.find(".bx-clone")).outerWidth(g()),r.viewport.css("height",h()),r.settings.ticker||y(),r.active.last&&(r.active.index=v()-1),r.active.index>=v()&&(r.active.last=!0),r.settings.pager&&!r.settings.pagerCustom&&(w(),P(r.active.index))},o.destroySlider=function(){r.initialized&&(r.initialized=!1,e(".bx-clone",this).remove(),r.children.each(function(){void 0!=e(this).data("origStyle")?e(this).attr("style",e(this).data("origStyle")):e(this).removeAttr("style")}),void 0!=e(this).data("origStyle")?this.attr("style",e(this).data("origStyle")):e(this).removeAttr("style"),e(this).unwrap().unwrap(),r.controls.el&&r.controls.el.remove(),r.controls.next&&r.controls.next.remove(),r.controls.prev&&r.controls.prev.remove(),r.pagerEl&&r.pagerEl.remove(),e(".bx-caption",this).remove(),r.controls.autoEl&&r.controls.autoEl.remove(),clearInterval(r.interval),r.settings.responsive&&e(window).unbind("resize",q))},o.reloadSlider=function(e){void 0!=e&&(s=e),o.destroySlider(),d()},d(),this}}(jQuery);