!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).EmblaCarousel=e()}(this,(function(){"use strict";function n(){return(n=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function e(n,e){var t={start:function(){return 0},center:function(n){return r(n)/2},end:r};function r(n){return e-n}return{measure:function(r){return"number"==typeof n?e*Number(n):t[n](r)}}}function t(n,e){var t=Math.abs(n-e);function r(e){return e<n}function o(n){return n>e}function i(n){return r(n)||o(n)}return{constrain:function(t){return i(t)?r(t)?n:e:t},length:t,max:e,min:n,reachedAny:i,reachedMax:o,reachedMin:r,removeOffset:function(n){return t?n-t*Math.ceil((n-e)/t):n}}}function r(n,e,o){var i=t(0,n),a=i.min,u=i.constrain,c=n+1,s=d(e);function d(n){return o?Math.abs((c+n)%c):u(n)}function f(){return s}function l(n){return s=d(n),p}var p={add:function(n){return l(f()+n)},clone:function(){return r(n,f(),o)},get:f,set:l,min:a,max:n};return p}function o(){var n=[];var e={add:function(t,r,o,i){return void 0===i&&(i=!1),t.addEventListener(r,o,i),n.push((function(){return t.removeEventListener(r,o,i)})),e},removeAll:function(){return n=n.filter((function(n){return n()})),e}};return e}function i(n){var e=n;function t(n){return e/=n,o}function r(n){return"number"==typeof n?n:n.get()}var o={add:function(n){return e+=r(n),o},divide:t,get:function(){return e},multiply:function(n){return e*=n,o},normalize:function(){return 0!==e&&t(e),o},set:function(n){return e=r(n),o},subtract:function(n){return e-=r(n),o}};return o}function a(n){return n?n/Math.abs(n):0}function u(n,e){return Math.abs(n-e)}function c(n,e){for(var t=[],r=0;r<n.length;r+=e)t.push(n.slice(r,r+e));return t}function s(n){return Object.keys(n).map(Number)}function d(n){return n[f(n)]}function f(n){return Math.max(0,n.length-1)}function l(n,e){var t=n.classList;e&&t.contains(e)&&t.remove(e)}function p(n,e){var t=n.classList;e&&!t.contains(e)&&t.add(e)}function g(n,e,t,r,c,s,d,f,l,p,g,m,v,h,x){var y=n.scroll,b=n.cross,w=["INPUT","SELECT","TEXTAREA"],M=i(0),S=i(0),E=i(0),A=o(),T=o(),C={mouse:2.5,touch:3.5},D={mouse:5,touch:7},P=c?5:20,B=!1,I=!1,L=!1,k=!1;function z(n){if(!(k="mousedown"===n.type)||0===n.button){var e,o,i=u(r.get(),d.get())>=2,a=k||!i,c=(e=n.target,o=e.nodeName||"",!(w.indexOf(o)>-1)),f=i||k&&c;B=!0,s.pointerDown(n),E.set(r),r.set(d),p.useBaseMass().useSpeed(80),function(){var n=k?document:t;T.add(n,"touchmove",O).add(n,"touchend",N).add(n,"mousemove",O).add(n,"mouseup",N)}(),M.set(s.readPoint(n,y)),S.set(s.readPoint(n,b)),v.emit("pointerDown"),a&&(L=!1),f&&n.preventDefault()}}function O(n){if(!I&&!k){if(!n.cancelable)return N();var t=s.readPoint(n,y).get(),o=s.readPoint(n,b).get(),i=u(t,M.get()),a=u(o,S.get());if(!(I=i>a)&&!L)return N()}var c=s.pointerMove(n);!L&&c&&(L=!0),f.start(),r.add(e.applyTo(c)),n.preventDefault()}function N(){var n=g.byDistance(0,!1).index!==m.get(),t=s.pointerUp()*(c?D:C)[k?"mouse":"touch"],o=function(n,e){var t=m.clone().add(-1*a(n)),r=t.get()===m.min||t.get()===m.max,o=g.byDistance(n,!c).distance;return c||Math.abs(n)<20?o:!h&&r?.6*o:x&&e?.5*o:g.byIndex(t.get(),0).distance}(e.applyTo(t),n),i=function(n,e){if(0===n||0===e)return 0;if(Math.abs(n)<=Math.abs(e))return 0;var t=u(Math.abs(n),Math.abs(e));return Math.abs(t/n)}(t,o),d=u(r.get(),E.get())>=.5,f=n&&i>.75,y=Math.abs(t)<20,b=f?12:P,w=f?1+2.5*i:1;d&&!k&&(L=!0),I=!1,B=!1,T.removeAll(),p.useSpeed(y?9:b).useMass(w),l.distance(o,!c),k=!1,v.emit("pointerUp")}function F(n){L&&n.preventDefault()}return{addActivationEvents:function(){var n=t;A.add(n,"touchmove",(function(){})).add(n,"touchend",(function(){})).add(n,"touchstart",z).add(n,"mousedown",z).add(n,"touchcancel",N).add(n,"contextmenu",N).add(n,"click",F)},clickAllowed:function(){return!L},pointerDown:function(){return B},removeAllEvents:function(){A.removeAll(),T.removeAll()}}}function m(n,e,t){var r,o,u=(r=2,o=Math.pow(10,r),function(n){return Math.round(n*o)/o}),c=i(0),s=i(0),d=i(0),f=0,l=e,p=t;function g(n){return l=n,v}function m(n){return p=n,v}var v={direction:function(){return f},seek:function(e){d.set(e).subtract(n);var t,r,o,i=(t=d.get(),(o=0)+(t-(r=0))/(100-r)*(l-o));return f=a(d.get()),d.normalize().multiply(i).subtract(c),function(n){n.divide(p),s.add(n)}(d),v},settle:function(e){var t=e.get()-n.get(),r=!u(t);return r&&n.set(e),r},update:function(){c.add(s),n.add(c),s.multiply(0)},useBaseMass:function(){return m(t)},useBaseSpeed:function(){return g(e)},useMass:m,useSpeed:g};return v}function v(n,e,t,r){var o=!1;return{constrain:function(i){if(!o&&n.reachedAny(t.get())&&n.reachedAny(e.get())){var a=i?.7:.45,u=t.get()-e.get();t.subtract(u*a),!i&&Math.abs(u)<10&&(t.set(n.constrain(t.get())),r.useSpeed(10).useMass(3))}},toggleActive:function(n){o=!n}}}function h(n,e,r,o,i){var a=t(-e+n,r[0]),u=o.map(a.constrain);return{snapsContained:function(){if(e<=n)return[a.max];if("keepSnaps"===i)return u;var r=function(){var n=u[0],e=d(u),r=u.lastIndexOf(n),o=u.indexOf(e)+1;return t(r,o)}(),o=r.min,c=r.max;return u.slice(o,c)}()}}function x(n,e,r,o,i){var a=t(r.min+e.measure(.1),r.max+e.measure(.1)),u=a.reachedMin,c=a.reachedMax;return{loop:function(e){if(function(n){return 1===n?c(o.get()):-1===n&&u(o.get())}(e)){var t=n*(-1*e);i.forEach((function(n){return n.add(t)}))}}}}function y(n){var e=n.max,t=n.length;return{get:function(n){return(n-e)/-t}}}function b(n,e,t,r,o,i){var a,u,s=n.startEdge,f=n.endEdge,l=o.map((function(n){return r[s]-n[s]})).map(t.measure).map((function(n){return-Math.abs(n)})),p=(a=c(l,i).map((function(n){return n[0]})),u=c(o,i).map((function(n){return d(n)[f]-n[0][s]})).map(t.measure).map(Math.abs).map(e.measure),a.map((function(n,e){return n+u[e]})));return{snaps:l,snapsAligned:p}}function w(n,e,t,r,o){var i=r.reachedAny,a=r.removeOffset,u=r.constrain;function c(n,e){return Math.abs(n)<Math.abs(e)?n:e}function s(e,r){var o=e,i=e+t,a=e-t;if(!n)return o;if(!r)return c(c(o,i),a);var u=c(o,1===r?i:a);return Math.abs(u)*r}return{byDistance:function(t,r){var c=o.get()+t,d=function(t){var r=n?a(t):u(t);return{index:e.map((function(n){return n-r})).map((function(n){return s(n,0)})).map((function(n,e){return{diff:n,index:e}})).sort((function(n,e){return Math.abs(n.diff)-Math.abs(e.diff)}))[0].index,distance:r}}(c),f=d.index,l=d.distance,p=!n&&i(c);return!r||p?{index:f,distance:t}:{index:f,distance:t+s(e[f]-l,0)}},byIndex:function(n,t){return{index:n,distance:s(e[n]-o.get(),t)}},shortcut:s}}function M(n,e,t,r,o,i,a,u){var c,d=s(r),f=s(r).reverse(),l=(c=o[0]-1,m(g(f,c),"end")).concat(function(){var n=e-o[0]-1;return m(g(d,n),"start")}());function p(n,e){return n.reduce((function(n,e){return n-r[e]}),e)}function g(n,e){return n.reduce((function(n,t){return p(n,e)>0?n.concat([t]):n}),[])}function m(n,e){var r="start"===e,o=r?-t:t,u=i.findSlideBounds(o);return n.map((function(n){var e=r?0:-t,o=r?t:0,i=u.filter((function(e){return e.index===n}))[0][r?"end":"start"];return{point:i,getTarget:function(){return a.get()>i?e:o},index:n,location:-1}}))}return{canLoop:function(){return l.every((function(n){var t=n.index;return p(d.filter((function(n){return n!==t})),e)<=0}))},clear:function(){l.forEach((function(e){var t=e.index;u[t].style[n.startEdge]=""}))},loop:function(){l.forEach((function(e){var t=e.getTarget,r=e.location,o=e.index,i=t();i!==r&&(u[o].style[n.startEdge]=i+"%",e.location=i)}))},loopPoints:l}}function S(n,e,t){var r=o(),i=r.removeAll,a=0;function u(n){9===n.keyCode&&(a=(new Date).getTime())}function c(o,i){r.add(o,"focus",(function(){if(!((new Date).getTime()-a>10)){n.scrollLeft=0;var r=Math.floor(i/t);e.index(r,0)}}),!0)}return{addActivationEvents:function(n){r.add(document,"keydown",u,!1),n.forEach(c)},removeAllEvents:i}}function E(n,e,t){var r=t.style,o="x"===n.scroll?function(n){return"translate3d("+n+"%,0px,0px)"}:function(n){return"translate3d(0px,"+n+"%,0px)"},i=!1;return{clear:function(){r.transform=""},to:function(n){i||(r.transform=o(e.applyTo(n.get())))},toggleActive:function(n){i=!n}}}function A(n,o,a,u,c){var l,p=u.align,A=u.axis,T=u.direction,C=u.startIndex,D=u.inViewThreshold,P=u.loop,B=u.speed,I=u.dragFree,L=u.slidesToScroll,k=u.skipSnaps,z=u.containScroll,O=o.getBoundingClientRect(),N=a.map((function(n){return n.getBoundingClientRect()})),F=function(n){var e="rtl"===n?-1:1;return{applyTo:function(n){return n*e}}}(T),U=function(n,e){var t="y"===n?"y":"x";return{scroll:t,cross:"y"===n?"x":"y",startEdge:"y"===t?"top":"rtl"===e?"right":"left",endEdge:"y"===t?"bottom":"rtl"===e?"left":"right",measureSize:function(n){var e=n.width,r=n.height;return"x"===t?e:r}}}(A,T),V=(l=U.measureSize(O),{measure:function(n){return 0===l?0:n/l*100},totalPercent:100}),H=V.totalPercent,R=e(p,H),j=function(n,e,t,r,o){var i=n.measureSize,a=n.startEdge,u=n.endEdge,c=r.map(i);return{slideSizes:c.map(e.measure),slideSizesWithGaps:r.map((function(n,e,r){var i=e===f(r),s=window.getComputedStyle(d(t)),l=parseFloat(s.getPropertyValue("margin-"+u));return i?c[e]+(o?l:0):r[e+1][a]-n[a]})).map(e.measure).map(Math.abs)}}(U,V,a,N,P),G=j.slideSizes,q=j.slideSizesWithGaps,W=b(U,R,V,O,N,L),X=W.snaps,J=W.snapsAligned,Y=-d(X)+d(q),K=h(H,Y,X,J,z).snapsContained,Q=!P&&""!==z?K:J,Z=function(n,e,r){var o,i;return{limit:(o=e[0],i=d(e),t(r?o-n:i,o))}}(Y,Q,P).limit,$=r(f(Q),C,P),_=$.clone(),nn=s(a),en=function(n){var e=0;function t(n,t){return function(){n===!!e&&t()}}function r(){e=window.requestAnimationFrame(n)}return{proceed:t(!0,r),start:t(!1,r),stop:t(!0,(function(){window.cancelAnimationFrame(e),e=0}))}}((function(){P||dn.scrollBounds.constrain(dn.dragHandler.pointerDown()),dn.scrollBody.seek(on).update();var n=dn.scrollBody.settle(on);n&&!dn.dragHandler.pointerDown()&&(dn.animation.stop(),c.emit("settle")),n||c.emit("scroll"),P&&(dn.scrollLooper.loop(dn.scrollBody.direction()),dn.slideLooper.loop()),dn.translate.to(rn),dn.animation.proceed()})),tn=Q[$.get()],rn=i(tn),on=i(tn),an=m(rn,B,1),un=w(P,Q,Y,Z,on),cn=function(n,e,t,r,o,i){function a(r){var a=r.distance,u=r.index!==e.get();a&&(n.start(),o.add(a)),u&&(t.set(e.get()),e.set(r.index),i.emit("select"))}return{distance:function(n,e){a(r.byDistance(n,e))},index:function(n,t){var o=e.clone().set(n);a(r.byIndex(o.get(),t))}}}(en,$,_,un,on,c),sn=function(n,e,t,r,o,i){var a=Math.min(Math.max(i,.01),.99),u=(o?[0,e,-e]:[0]).reduce((function(n,e){return n.concat(c(e,a))}),[]);function c(e,o){var i=t.map((function(n){return n*(o||0)}));return r.map((function(r,o){return{start:r-t[o]+i[o]+e,end:r+n-i[o]+e,index:o}}))}return{check:function(n){return u.reduce((function(e,t){var r=t.index,o=t.start,i=t.end;return-1===e.indexOf(r)&&o<n&&i>n?e.concat([r]):e}),[])},findSlideBounds:c}}(H,Y,G,X,P,D),dn={animation:en,axis:U,direction:F,dragHandler:g(U,F,n,on,I,function(n,e){var t=n.scroll,r={x:"clientX",y:"clientY"},o=i(0),a=i(0),u=i(0),c=i(0),s=[],d=(new Date).getTime(),f=!1;function l(n,e){f=!n.touches;var t=r[e],o=f?n[t]:n.touches[0][t];return c.set(o)}return{pointerDown:function(n){var r=l(n,t);return o.set(r),u.set(r),e.measure(o.get())},pointerMove:function(n){var r=l(n,t),o=(new Date).getTime(),i=o-d;return i>=10&&(i>=100&&(s=[]),s.push(r.get()),d=o),a.set(r).subtract(u),u.set(r),e.measure(a.get())},pointerUp:function(){var n=(new Date).getTime()-d,t=u.get(),r=s.slice(-5).map((function(n){return t-n})).sort((function(n,e){return Math.abs(n)<Math.abs(e)?1:-1}))[0];return u.set(n>100||!r?0:r),s=[],e.measure(u.get())},readPoint:l}}(U,V),rn,en,cn,an,un,$,c,P,k),pxToPercent:V,index:$,indexPrevious:_,limit:Z,location:rn,options:u,scrollBody:an,scrollBounds:v(Z,rn,on,an),scrollLooper:x(Y,V,Z,rn,[rn,on]),scrollProgress:y(Z),scrollSnaps:Q,scrollTarget:un,scrollTo:cn,slideFocus:S(n,cn,L),slideLooper:M(U,H,Y,q,Q,sn,rn,a),slidesInView:sn,slideIndexes:nn,target:on,translate:E(U,F,o)};return dn}var T={align:"center",axis:"x",containScroll:"",direction:"ltr",dragFree:!1,draggable:!0,draggableClass:"is-draggable",draggingClass:"is-dragging",inViewThreshold:0,loop:!1,skipSnaps:!0,selectedClass:"is-selected",slidesToScroll:1,speed:10,startIndex:0};return function(e,t){var r,i,a,u,c,s,d,f=function(){var n={};function e(e){return n[e]||[]}var t={emit:function(n){return e(n).forEach((function(e){return e(n)})),t},off:function(r,o){return n[r]=e(r).filter((function(n){return n!==o})),t},on:function(r,o){return n[r]=e(r).concat([o]),t}};return t}(),g=o(),m=(r=function(){if(y){var n=u.axis.measureSize(e.getBoundingClientRect());M!==n&&B(),f.emit("resize")}},i=500,a=0,function(){window.clearTimeout(a),a=window.setTimeout(r,i)||0}),v=B,h=f.on,x=f.off,y=!1,b=n({},T),w=n({},b),M=0;function S(){if(!e)throw new Error("Missing root node 😢");var n,t=e.querySelector("*");if(!t)throw new Error("Missing container node 😢");s=t,d=Array.prototype.slice.call(s.children),n=getComputedStyle(e,":before").content,c={get:function(){try{return JSON.parse(n.slice(1,-1).replace(/\\/g,""))}catch(n){}return{}}}}function E(t){if(S(),b=n({},b,t),w=n({},b,c.get()),u=A(e,s,d,w,f),g.add(window,"resize",m),u.translate.to(u.location),M=u.axis.measureSize(e.getBoundingClientRect()),w.loop){if(!u.slideLooper.canLoop())return P(),E({loop:!1});u.slideLooper.loop()}w.draggable&&s.offsetParent&&d.length&&(u.dragHandler.addActivationEvents(),w.draggableClass&&p(e,w.draggableClass),w.draggingClass&&f.on("pointerDown",C).on("pointerUp",C)),d.length&&u.slideFocus.addActivationEvents(d),w.selectedClass&&(D(),f.on("select",D).on("pointerUp",D)),y||(setTimeout((function(){return f.emit("init")}),0),y=!0)}function C(n){var t=w.draggingClass;"pointerDown"===n?p(e,t):l(e,t)}function D(){var n=w.selectedClass,e=I(!0);L(!0).forEach((function(e){return l(d[e],n)})),e.forEach((function(e){return p(d[e],n)}))}function P(){u.dragHandler.removeAllEvents(),u.slideFocus.removeAllEvents(),u.animation.stop(),g.removeAll(),u.translate.clear(),u.slideLooper.clear(),l(e,w.draggableClass),d.forEach((function(n){return l(n,w.selectedClass)})),f.off("select",D).off("pointerUp",D).off("pointerDown",C).off("pointerUp",C)}function B(e){if(y){var t=n({startIndex:z()},e);P(),E(t),f.emit("reInit")}}function I(n){var e=u[n?"target":"location"].get(),t=w.loop?"removeOffset":"constrain";return u.slidesInView.check(u.limit[t](e))}function L(n){var e=I(n);return u.slideIndexes.filter((function(n){return-1===e.indexOf(n)}))}function k(n,e,t){u.scrollBody.useBaseMass().useSpeed(e?100:w.speed),y&&u.scrollTo.index(n,t||0)}function z(){return u.index.get()}return E(t),{canScrollNext:function(){return u.index.clone().add(1).get()!==z()},canScrollPrev:function(){return u.index.clone().add(-1).get()!==z()},clickAllowed:function(){return u.dragHandler.clickAllowed()},containerNode:function(){return s},dangerouslyGetEngine:function(){return u},destroy:function(){y&&(P(),y=!1,f.emit("destroy"))},off:x,on:h,previousScrollSnap:function(){return u.indexPrevious.get()},reInit:v,rootNode:function(){return e},scrollNext:function(n){k(u.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){k(u.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return u.scrollProgress.get(u.location.get())},scrollSnapList:function(){return u.scrollSnaps.map(u.scrollProgress.get)},scrollTo:k,selectedScrollSnap:z,slideNodes:function(){return d},slidesInView:I,slidesNotInView:L}}}));
