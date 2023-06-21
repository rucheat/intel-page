var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* jQuery v1.10.1 | (c) 2005, 2013 */
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/* jQuery Migrate v1.2.1 | (c) 2005, 2013 */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
// jquery browser plugin extracted from migration plugin
(function (jQuery, window, undefined) {
    //"use strict";
    var matched, browser;

    jQuery.uaMatch = function (ua) {
        ua = ua.toLowerCase();

        var match = /(yabrowser)[ \/]([\w.]+)/.exec(ua) ||
            /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };

    // Don't clobber any existing jQuery.browser in case it's different
    if (!jQuery.browser) {
        matched = jQuery.uaMatch(window.navigator.userAgent);
        browser = {};

        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version;
        }

        // Chrome is Webkit, but Webkit is also Safari.
        if (browser.chrome) {
            browser.webkit = true;
        } else if (browser.yabrowser) {
            browser.webkit = true;
        } else if (browser.webkit) {
            browser.safari = true;
        }

        jQuery.browser = browser;
    }

})(jQuery, window);

/*----------------------------------- browser check and applying class name to body element -----------------------------------------*/
// global variables to utilize every where
var uA, bN, bV, bvClass, OS, dE;
var bvClass = bM = dT = wk = "";
(function (jQuery, window, undefined) {
	dE = document.documentElement;
    uA = window.navigator.userAgent.toLowerCase();
    var matchSt = /(trident)[ \/]([\w.]+)/.exec(uA) || [],
        trident = matchSt[1] || "",
        tV = matchSt[2] || "0",
		dM = document.documentMode;

    //for all IE
    if ($.browser.msie) {
        bN = "ie";
        bV = $.browser.version;
    }

    //for all IE compatible view	
    if (trident == "trident") {
		var cvReg;
        if (bV === "7.0" && tV === "4.0") {
            bM = " ie8_cv";
			cvReg = /(^|\s)ie7(\s|$)/;
        }
        if (bV === "7.0" && tV === "5.0" || bV === "8.0" && tV === "5.0") {
            bM = " ie9_cv";
			cvReg = (/(^|\s)ie7(\s|$)/)? /(^|\s)ie7(\s|$)/ : /(^|\s)ie8(\s|$)/;
        }
		cvReg = (/(^|\s)ie7(\s|$)/)? /(^|\s)ie7(\s|$)/ : /(^|\s)ie8(\s|$)/;
		dE.className = dE.className.replace(cvReg, '$1$2');
		
		if (parseFloat(bV) !== parseFloat(dM)){			
			bV = dM;
		}		
    }
	
    //for opera
    if ($.browser.opera) {
        bN = "opera";
        bV = $.browser.version;
    }
    //for mozilla
    if ($.browser.mozilla) {
        bN = "ff";
        bV = $.browser.version;
    }
    //for chrome
    if ($.browser.chrome) {
        bN = "chrome";
        bV = $.browser.version;
    }
    //for yandex
    if ($.browser.yabrowser) {
        bN = "yandex";
        bV = $.browser.version;
    }
    //for safari
    if ($.browser.safari) {
        bN = "safari";
        bV = $.browser.version;
    }

    //for safari
    if ($.browser.webkit) {
        wk = " webkit";
    }

    /* mobile devices detection */
    if (uA.indexOf("mobile") !== -1) {
        dT = " mobile";
    }
    if (uA.indexOf("iphone") !== -1) {
        bN = "m_safari";
        OS = " iphone";
    }
    if (uA.indexOf("ipad") !== -1) {
        bN = "m_safari";
        OS = " ipad";
    }
    if (uA.indexOf("android") !== -1) {
        OS = " android";
    }
    if (uA.indexOf("blackberry") !== -1) {
        OS = " blackBerry";
    }
    if (uA.indexOf("windows") !== -1) {
        OS = " win";
    }
    if (uA.indexOf("macintosh") !== -1) {
        OS = " mac";
    }

    // convert the version from "." to "_"
    bvClass = parseFloat(bV).toString().replace(/[.\s]+/g, "_");

    // set the browser details as a class name to the root element that is hrml
    dE.className += OS + " " + bN + " " + bN + bvClass + bM + dT + wk;
	
})(jQuery, window);
/*----------------------------------- end of browser check and applying class name to body element -----------------------------------------*/

// shuffle rotating showcase - moved from jquery.custom.js
(function ($) {
	$.fn.shuffle = function () {
		var allElems = this.get(),
			getRandom = function (max) {
				return Math.floor(Math.random() * max);
			},
			shuffled = $.map(allElems, function () {
				var random = getRandom(allElems.length),
					randEl = $(allElems[random]).clone(true)[0];
				allElems.splice(random, 1);
				return randEl;
			});
		this.each(function (i) {
			$(this).replaceWith($(shuffled[i]));
		});
		return $(shuffled);
	};
})(jQuery);

// preload images - moved from jquery.custom.js
(function ($) {
	$.fn.preload = function () {
		this.each(function () {
			var imageObject = new Image();
			imageObject.src = this;
		});
	}
})(jQuery);

// add height to the parent element of absolute carousel element - moved from jquery.custom.js
(function ($) {
	$.fn.eqlHgts = function (parm1, parm2, parm3) {
		var ele = $(this),
			maxH = null,
			hi = 0,
			gallery = $(this).closest('.module').find('.gallery-controls');
			
		ele.each(function () {
			var h = $(this).height();
			if ($(this).index() === 0) {
				hi = 0;
			}
			if (h > hi) {
				hi = h;
				maxH = $(this);
			}
			
			// check for maxH object
			if(maxH != null){
				if(parm2 === "panel" && maxH.siblings(".gallery-controls").length !== 0){
					//check if it panel and has gallery add min-height + 40 for gallery elements
					maxH.parent().css('min-height', hi+40);
				}else{
					//if gallery not available just add min-height as it is
					maxH.parent().css('min-height', hi);
				}
			}else{
				$(this).parent().css('min-height', hi);
			}
		});
		if (parm1 === "blade") {
			gallery.find(".large")
				.filter(function () {					
					var pHeight,
						moduleContent = $(this).closest('.module').find('.module-content'),
						contentItems = moduleContent.find('.content-items'),
						panel = moduleContent.find('.panel:visible');
						
					if (contentItems.length) {
						pHeight = contentItems.height() / 2;
					} else if (panel.length) {
						pHeight = (panel.height() / 2)-20;						
					} else {
						pHeight = moduleContent.height() / 2;
					}
					$(this).css("top", -(pHeight + 40));
				});
		}
		return this;
	};
})(jQuery);

// sidebar arrow animation
(function ($) {
	$.fn.sidebarArrow = function () {
		var elem 		= $(this),
			ps 			= $(elem).position().top,
			h 			= $(elem).height(),
			sideBarUl 	= $(elem).closest("ul"),
			activeArrow = sideBarUl.find('.active_link_arrow'),
			imgH 		= activeArrow.height();
			
		// animate arrow	
		activeArrow.animate({
			"top": ps + (h / 2) - (imgH / 2 - 2)
		}, 300, "linear");
		
		// fix for dynamic height for panels
		var sideBarH	= sideBarUl.outerHeight(true),
		panels		  	= sideBarUl.closest('.module').find('.panel.selected'),
		panelsHeight 	= panels.height();
		
		// check for height variation and update
		if(sideBarH > panelsHeight){
			panels.css('min-height', sideBarH);
		}
		// return element for chining
		return this;
	}
})(jQuery);

// slider for B2B components moved from jquery.modules.js
(function ($) {
	function Slider(element, opts) {
		this.element = $(element);
		this.opts = $.extend({
			slContSel: "module-slider-container",
			slItemSel: "module-slider-item",
			slControlsSel: "module-slider-controls",
			slDotsSel: "module-slider-dots",
			slLeftSel: "module-slider-left",
			slRightSel: "module-slider-right",
			speed: 800,
			checkControlsAfter: false
		}, opts);
		this.init();
	}

	Slider.prototype.init = function () {
		var instance = this;
		var items = $("." + this.opts.slItemSel, this.element);
		var itemsCount = items.length;
		this.itemWidth = items.width();
		this.clickable = true;
		this.element.width(this.itemWidth);

		this.maxIndex = itemsCount - 1;
		this.currentIndex = 0;
		$("." + this.opts.slContSel, this.element).css('width', itemsCount * this.itemWidth);
		if (itemsCount == 1 || itemsCount == 0) {
			this.element.next("." + this.opts.slControlsSel)
				.find("." + this.opts.slLeftSel + " a").hide();
			this.element.next("." + this.opts.slControlsSel)
				.find("." + this.opts.slRightSel + " a").hide();
			this.element.next("." + this.opts.slControlsSel)
				.find("." + this.opts.slDotsSel + " a").hide();
			return;
		}
		for (var i = 0; i < itemsCount; i++) {
			$(document.createElement("li"))
				.html("<a rel=" + i + " href=\"#\">" + (i + 1) + "</a>")
				.appendTo(this.element.next("." + this.opts.slControlsSel).find("." + this.opts.slDotsSel))
				.click(function (event) {
				event.preventDefault();
				instance.animate($("a", $(this)).attr('rel'));
			});
		}
		this.element.next("." + this.opts.slControlsSel)
			.find("." + this.opts.slLeftSel + " a").click(function (event) {
			event.preventDefault();
			instance.animate("prev");
		});
		this.element.next("." + this.opts.slControlsSel)
			.find("." + this.opts.slRightSel + " a").click(function (event) {
			event.preventDefault();
			instance.animate("next");
		});
		this.recalcControls();
		this.setCurrent(0);
		this.checkControls();
	};

	Slider.prototype.recalcControls = function () {
		var sliderControls = this.element.next("." + this.opts.slControlsSel);
		var sliderControlsW = sliderControls.find("." + this.opts.slLeftSel).outerWidth() + sliderControls.find("." + this.opts.slRightSel).outerWidth() + sliderControls.find("." + this.opts.slDotsSel).outerWidth();
		sliderControls.css("padding-left", (sliderControls.outerWidth() - sliderControlsW) / 2);
	}

	Slider.prototype.setCurrent = function (index) {
		index = parseInt(index);
		this.element.next("." + this.opts.slControlsSel)
			.find("." + this.opts.slDotsSel + " li").removeClass("active");
		this.element.next("." + this.opts.slControlsSel)
			.find("." + this.opts.slDotsSel + " li").eq(index).addClass("active");
	};

	Slider.prototype.animate = function (dir) {
		var instance = this;

		function adjust() {
			if (instance.currentIndex > instance.maxIndex) instance.currentIndext = 0;
			if (instance.currentIndex < 0) instance.currentIndex = instance.maxIndex;
			$("." + instance.opts.slContSel, instance.element)
				.css("margin-left", (instance.currentIndex * instance.itemWidth * -1));
			instance.clickable = true;
			instance.setCurrent(instance.currentIndex);
			if (!instance.opts.checkControlsAfter) {
				instance.checkControls();
			}
		}

		if (this.clickable) {
			this.clickable = false;
			var ot = this.currentIndex;
			switch (dir) {
			case "next":
				this.currentIndex = (ot >= this.maxIndex) ? parseInt(this.maxIndex) : parseInt(this.currentIndex) + 1;
				break;
			case "prev":
				this.currentIndex = (this.currentIndex <= 0) ? 0 : parseInt(this.currentIndex) - 1;
				break;
			case "first":
				this.currentIndex = 0;
				break;
			case "last":
				this.currentIndex = this.maxIndex;
				break;
			default:
				this.currentIndex = dir;
				break;
			}
			var diff = Math.abs(ot - this.currentIndex);
			var speed = diff * this.opts.speed;
			var p = (this.currentIndex * this.itemWidth * -1);
			if (!this.opts.checkControlsAfter) {
				this.checkControls();
			}
			$("." + this.opts.slContSel, this.element).animate({
				marginLeft: p
			}, {
				queue: false,
				duration: speed,
				complete: adjust
			});
		}
	};

	Slider.prototype.checkControls = function () {
		if (this.currentIndex == this.maxIndex) {
			this.element.next("." + this.opts.slControlsSel)
				.find("." + this.opts.slRightSel + " a").hide();
		} else {
			this.element.next("." + this.opts.slControlsSel)
				.find("." + this.opts.slRightSel + " a").show();
		}
		if (this.currentIndex == 0) {
			this.element.next("." + this.opts.slControlsSel)
				.find("." + this.opts.slLeftSel + " a").hide();
		} else {
			this.element.next("." + this.opts.slControlsSel)
				.find("." + this.opts.slLeftSel + " a").show();
		}
	};

	$.fn.extend({
		slider: function (opts) {
			return this.each(function () {
				this.slider = new Slider(this, opts);
			});
		},
		recalcSlControls: function () {
			return this.each(function () {
				this.slider.recalcControls();
			});
		}
	});
})(jQuery);

// RSS feed - moved from footer.js
(function ($) {
	$.fn.rssfeed = function (url, options, fn) {
		var defaults = {
			limit: 10,
			showerror: true,
			errormsg: '',
			key: null,
			ssl: false
		};
		var options = $.extend(defaults, options);
		return this
			.each(function (i, e) {
			var $e = $(e);
			var s = '';
			if (options.ssl)
				s = 's';
			if (!$e.hasClass('rssFeed'))
				$e.addClass('rssFeed');
			if (url == null)
				return false;
			var api = window.location.protocol + s + "//web.archive.org/web/20171002185606/https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url);
			if (options.limit != null)
				api += "&num=" + options.limit;
			if (options.key != null)
				api += "&key=" + options.key;
			api += "&output=json_xml"
			$.getJSON(api, function (data) {
				if (data.responseStatus == 200) {
					_process(e, data.responseData,
						options);
					if ($.isFunction(fn))
						fn.call(this, $e);
				} else {
					if (options.showerror)
						if (options.errormsg != '') {
							var msg = options.errormsg;
						} else {
							var msg = data.responseDetails;
						};
					$(e)
						.html(
						'<div class="rssError"><p>' + msg + '</p></div>');
				};
			});
		});
	};
	var _process = function (e, data, options) {
		var feeds = data.feed;
		if (!feeds) {
			return false;
		}
		var html = '';
		var row = 'odd';
		var xml = getXMLDocument(data.xmlString);
		html += '<ul class="news-items">';
		for (var i = 0; i < feeds.entries.length; i++) {
			var entry = feeds.entries[i];
			if (i == 0) {
				html += '<li class="news-item selected"><a href=' + entry.link + '>' + entry.title + '</a></li>';
			} else {
				html += '<li class="news-item"><a href=' + entry.link + '>' + entry.title + '</a></li>';
			}
		}
		html += "</ul>"
		$(e).html(html);
	};

	function getXMLDocument(string) {
		var browser = navigator.appName;
		var xml;
		if (browser == 'Microsoft Internet Explorer') {
			xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = 'false'
			xml.loadXML(string);
		} else {
			xml = (new DOMParser()).parseFromString(string, 'text/xml');
		}
		return xml;
	}
})(jQuery);
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

var docViewer;

function getDocViewer(){
    if(docViewer)
        return docViewer;
    else
        docViewer = window.FlexPaperViewer_Instance.getApi();
        
    return docViewer;
}

/**
*
* FlexPaper constructor (name of swf, name of placeholder, config)
*
*/
window.FlexPaperViewer = window.$f = function() {
    var config = arguments[2].config;
    
    window.FlexPaperViewer_Instance = flashembed(arguments[1], {
    
            src: arguments[0]+".swf",
            version: [10, 0],
            expressInstall: "js/expressinstall.swf"
        },{
            SwfFile : escape(config.SwfFile),
            Scale : config.Scale, 
            ZoomTransition : config.ZoomTransition,
            ZoomTime : config.ZoomTime,
            ZoomInterval : config.ZoomInterval,
            FitPageOnLoad : config.FitPageOnLoad,
            FitWidthOnLoad : config.FitWidthOnLoad,
            PrintEnabled : config.PrintEnabled,
            FullScreenAsMaxWindow : config.FullScreenAsMaxWindow,
            ProgressiveLoading : config.ProgressiveLoading,
            MinZoomSize : config.MinZoomSize,
            MaxZoomSize : config.MaxZoomSize,
            SearchMatchAll : config.SearchMatchAll,
            SearchServiceUrl : config.SearchServiceUrl,
            InitViewMode : config.InitViewMode,
            BitmapBasedRendering : config.BitmapBasedRendering,
            StartAtPage : config.StartAtPage,
            
            ViewModeToolsVisible : config.ViewModeToolsVisible,
            ZoomToolsVisible : config.ZoomToolsVisible,
            NavToolsVisible : config.NavToolsVisible,
            CursorToolsVisible : config.CursorToolsVisible,
            SearchToolsVisible : config.SearchToolsVisible,
              
            localeChain : config.localeChain,
            key : config.key
    });
};



/**
 * Handles the event of external links getting clicked in the document. 
 *
 * @example onExternalLinkClicked("https://web.archive.org/web/20171002185606/http://www.google.com")
 *
 * @param String link
 */
function onExternalLinkClicked(link){
   // alert("link " + link + " clicked" );
   window.location.href = link;
}

/**
 * Recieves progress information about the document being loaded
 *
 * @example onProgress( 100,10000 );
 *
 * @param int loaded
 * @param int total
 */
function onProgress(loadedBytes,totalBytes){
}

/**
 * Handles the event of a document is in progress of loading
 *
 */
function onDocumentLoading(){
}

/**
 * Receives messages about the current page being changed
 *
 * @example onCurrentPageChanged( 10 );
 *
 * @param int pagenum
 */
function onCurrentPageChanged(pagenum){
}

/**
 * Receives messages about the document being loaded
 *
 * @example onDocumentLoaded( 20 );
 *
 * @param int totalPages
 */
function onDocumentLoaded(totalPages){
}

/**
 * Handles the event of a document is in progress of loading
 *
 */
function onPageLoading(pageNumber){
}

/**
 * Receives messages about the page loaded
 *
 * @example onPageLoaded( 1 );
 *
 * @param int pageNumber
 */
function onPageLoaded(pageNumber){
}

/**
 * Receives error messages when a document is not loading properly
 *
 * @example onDocumentLoadedError( "Network error" );
 *
 * @param String errorMessage
 */
function onDocumentLoadedError(errMessage){
}

/**
 * Receives error messages when a document has finished printed
 *
 * @example onDocumentPrinted();
 *
 */
function onDocumentPrinted(){
}



/** 
 * 
 * FlexPaper embedding functionality. Based on FlashEmbed
 *
 */

(function() {
        
    var IE = document.all,
         URL = 'https://web.archive.org/web/20171002185606/http://www.adobe.com/go/getflashplayer',
         JQUERY = typeof jQuery == 'function', 
         RE = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/,
         GLOBAL_OPTS = { 
            // very common opts
            width: '100%',
            height: '100%',     
            id: "_" + ("" + Math.random()).slice(9),
            
            // flashembed defaults
            allowfullscreen: true,
            allowscriptaccess: 'always',
            quality: 'high',    
            
            // flashembed specific options
            version: [3, 0],
            onFail: null,
            expressInstall: null, 
            w3c: false,
            cachebusting: false                  
    };
    
    // version 9 bugfix: (http://blog.deconcept.com/2006/07/28/swfobject-143-released/)
    if (window.attachEvent) {
        window.attachEvent("onbeforeunload", function() {
            __flash_unloadHandler = function() {};
            __flash_savedUnloadHandler = function() {};
        });
    }
    
    // simple extend
    function extend(to, from) {
        if (from) {
            for (var key in from) {
                if (from.hasOwnProperty(key)) {
                    to[key] = from[key];
                }
            }
        } 
        return to;
    }   

    // used by asString method  
    function map(arr, func) {
        var newArr = []; 
        for (var i in arr) {
            if (arr.hasOwnProperty(i)) {
                newArr[i] = func(arr[i]);
            }
        }
        return newArr;
    }

    window.flashembed = function(root, opts, conf) {
    
        // root must be found / loaded  
        if (typeof root == 'string') {
            root = document.getElementById(root.replace("#", ""));
        }
        
        // not found
        if (!root) { return; }
        
        root.onclick = function(){return false;}
        
        if (typeof opts == 'string') {
            opts = {src: opts}; 
        }

        return new Flash(root, extend(extend({}, GLOBAL_OPTS), opts), conf); 
    };  
    
    // flashembed "static" API
    var f = extend(window.flashembed, {
        
        conf: GLOBAL_OPTS,
    
        getVersion: function()  {
            var fo, ver;
            
            try {
                ver = navigator.plugins["Shockwave Flash"].description.slice(16); 
            } catch(e) {
                
                try  {
                    fo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                    ver = fo && fo.GetVariable("$version");
                    
                } catch(err) {
                try  {
                    fo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    ver = fo && fo.GetVariable("$version");  
                } catch(err2) { }                       
                } 
            }
            
            ver = RE.exec(ver);
            return ver ? [ver[1], ver[3]] : [0, 0];
        },
        
        asString: function(obj) { 

            if (obj === null || obj === undefined) { return null; }
            var type = typeof obj;
            if (type == 'object' && obj.push) { type = 'array'; }
            
            switch (type){  
                
                case 'string':
                    obj = obj.replace(new RegExp('(["\\\\])', 'g'), '\\$1');
                    
                    // flash does not handle %- characters well. transforms "50%" to "50pct" (a dirty hack, I admit)
                    obj = obj.replace(/^\s?(\d+\.?\d+)%/, "$1pct");
                    return '"' +obj+ '"';
                    
                case 'array':
                    return '['+ map(obj, function(el) {
                        return f.asString(el);
                    }).join(',') +']'; 
                    
                case 'function':
                    return '"function()"';
                    
                case 'object':
                    var str = [];
                    for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                            str.push('"'+prop+'":'+ f.asString(obj[prop]));
                        }
                    }
                    return '{'+str.join(',')+'}';
            }
            
            // replace ' --> "  and remove spaces
            return String(obj).replace(/\s/g, " ").replace(/\'/g, "\"");
        },
        
        getHTML: function(opts, conf) {

            opts = extend({}, opts);
            
            /******* OBJECT tag and it's attributes *******/
            var html = '<object width="' + opts.width + 
                '" height="' + opts.height + 
                '" id="' + opts.id + 
                '" name="' + opts.id + '"';
            
            if (opts.cachebusting) {
                opts.src += ((opts.src.indexOf("?") != -1 ? "&" : "?") + Math.random());        
            }           
            
            if (opts.w3c || !IE) {
                html += ' data="' +opts.src+ '" type="application/x-shockwave-flash"';      
            } else {
                html += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';    
            }
            
            html += '>'; 
            
            /******* nested PARAM tags *******/
            if (opts.w3c || IE) {
                html += '<param name="movie" value="' +opts.src+ '" />';    
            } 
            
            // not allowed params
            opts.width = opts.height = opts.id = opts.w3c = opts.src = null;
            opts.onFail = opts.version = opts.expressInstall = null;
            
            for (var key in opts) {
                if (opts[key]) {
                    html += '<param name="'+ key +'" value="'+ opts[key] +'" />';
                }
            }   
        
            /******* FLASHVARS *******/
            var vars = "";
            
            if (conf) {
                for (var k in conf) { 
                    if (conf[k]) {
                        var val = conf[k]; 
                        vars += k +'='+ (/function|object/.test(typeof val) ? f.asString(val) : val) + '&';
                    }
                }
                vars = vars.slice(0, -1);
                html += '<param name="flashvars" value=\'' + vars + '\' />';
            }
            html+='<param name="wmode" value="opaque"/>';
            html += "</object>";    
            
            return html;                
        },
        
        isSupported: function(ver) {
            return VERSION[0] > ver[0] || VERSION[0] == ver[0] && VERSION[1] >= ver[1];         
        }       
        
    });
    
    var VERSION = f.getVersion(); 
    
    function Flash(root, opts, conf) {  
                                                    
        // version is ok
        if (f.isSupported(opts.version)) {
            root.innerHTML = f.getHTML(opts, conf);
            
        // express install
        } else if (opts.expressInstall && f.isSupported([6, 65])) {
            root.innerHTML = f.getHTML(extend(opts, {src: opts.expressInstall}), {
                MMredirectURL: location.href,
                MMplayerType: 'PlugIn',
                MMdoctitle: document.title
            }); 
            
        } else {
            
            // fail #2.1 custom content inside container
            if (!root.innerHTML.replace(/\s/g, '')) {
                /* root.innerHTML = 
                    "<h2>Flash version " + opts.version + " or greater is required</h2>" + 
                    "<h3>" + 
                        (VERSION[0] > 0 ? "Your version is " + VERSION : "You have no flash plugin installed") +
                    "</h3>" + 
                    
                    (root.tagName == 'A' ? "<p>Click here to download latest version</p>" : 
                        "<p>Download latest version from <a href='" + URL + "'>here</a></p>");
                */
                var pageHost = ((document.location.protocol == "https:") ? "https://" : "http://");
                
                root.innerHTML = "<a href='https://web.archive.org/web/20171002185606/http://www.adobe.com/go/getflashplayer'><img src='" 
                                        + pageHost + "www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a>";
                                            
                if (root.tagName == 'A') {  
                    root.onclick = function() {
                        location.href = URL;
                    };
                }               
            }
            
            // onFail
            if (opts.onFail) {
                var ret = opts.onFail.call(this);
                if (typeof ret == 'string') { root.innerHTML = ret; }   
            }           
        }
        
        // http://flowplayer.org/forum/8/18186#post-18593
        if (IE) {
            window[opts.id] = document.getElementById(opts.id);
        } 
        
        // API methods for callback
        extend(this, {
                
            getRoot: function() {
                return root;    
            },
            
            getOptions: function() {
                return opts;    
            },

            
            getConf: function() {
                return conf;    
            }, 
            
            getApi: function() {
                return root.firstChild; 
            }
            
        }); 
    }
    
    // setup jquery support
    if (JQUERY) {
        
        // tools version number
        jQuery.tools = jQuery.tools || {version: '1.2.5'};
        
        jQuery.tools.flashembed = {  
            conf: GLOBAL_OPTS
        };  
        
        jQuery.fn.flashembed = function(opts, conf) {       
            return this.each(function() { 
                $(this).data("flashembed", flashembed(this, opts, conf));
            });
        }; 
    } 
    
})();
$(function() {

    var menuWidth = 0;
    var timer = 300;
    var closeTimer = 500;
    var menuHeight = 0;
    var primaryHeight = 0;
    var primaryHeightCalculated = false;
    var contentHeight = 0;
    var contentCloseHeight = 0;
    
    var menuContainer = ".uheader .newmenu-container";
    var menuContents = ".uheader .newmenu-container .newmenu-contents";
    var primary = ".uheader .newmenu-container .newmenu-contents div.level.primary";
    var middle1 = ".uheader .newmenu-container .newmenu-contents div.level.middle.one";
    var middle2 = ".uheader .newmenu-container .newmenu-contents div.level.middle.two";
    var content = ".uheader .newmenu-container .newmenu-contents div.level.menu-content";
    var selectedImgOneHidden = true;
    var selectedImgTwoHidden = true;
    
    var middle1Margin = 0-$(primary).width();
    $(middle1).css("margin-left", middle1Margin);
    var middle2Margin = 0-$(middle1).width();
    $(middle2).css("margin-left", middle2Margin);
    var contentMargin = 0-($(primary).width()+$(middle1).width());
    $(content).css("margin-left", contentMargin);
    
    var programIdentifier = "";
    var menuIsOpen = false;
    
    if ($.browser.msie) {
        $(primary + " img.selectedImg").attr("src", "/etc/designs/intel/us/en/images/new-menu-background-white-selected-IE.png");
        $(middle1 + " img.selectedImg").each(function(i) {
            $(this).attr("src", "/etc/designs/intel/us/en/images/new-menu-background-white-selected-IE.png");
        });
        $(middle2 + " img.selectedImg").each(function(i) {
            $(this).attr("src", "/etc/designs/intel/us/en/images/new-menu-background-white-selected-IE.png");
        });
    }
    
    function calculatePrimaryHeight () {
        $(primary + " " + " div.primaryItemContainer").each(function(index) {
            primaryHeight += $(this).outerHeight(true);
        });
        if ($.browser.msie) {
            primaryHeight += 1;
        }
        primaryHeightCalculated = true;
    }
    
    function calculateHeight(level, element) {
        var levelShowing = $(level).hasClass("open");
        var doHideShow = false;
        var height = 0;
        if (!levelShowing) {
            $(level).css({visibility:"hidden", display:"block"});
        }
        if ($(element).css("display") == "none") {
            doHideShow = true;
        }
        if (doHideShow) {
            $(element).show();
        }
        if (level == content) {
            
            // Set the heights of the column with links and the surrounding div
            var totalLinksHeight = 0;
            var columnHeight = 0;
            
            $(element + " div.links-column").each(function(i) {
                if ($(this).hasClass("no-column-two")) {
                    totalLinksHeight += $(this).outerHeight(true);
                } else {
                    if ($(this).hasClass("one")) {
                        columnHeight = $(this).outerHeight(true);
                        if ($(this).next().hasClass("two")) {
                            if ($(this).next().outerHeight(true) > columnHeight) {
                                columnHeight = $(this).next().outerHeight(true);
                            }
                        }
                    }
                    totalLinksHeight += columnHeight;
                    columnHeight = 0;
                }
            });
                        
            // Set the height of the highlight component
            if ($(element + " h2").length > 0) {
                totalLinksHeight += $(element + " h2").outerHeight(true);
            }
            
            if ($(element + " div.highlight").length > 0) {
                var highlightHeight = $(element + " div.highlight div.highlight-img").outerHeight(true);
                if ($(element + " div.highlight div.highlight-content").outerHeight(true) > highlightHeight) {
                    highlightHeight = $(element + " div.highlight div.highlight-content").outerHeight(true);
                }
                $(element + " div.highlight").css("height", highlightHeight);
                totalLinksHeight += $(element + " div.highlight").outerHeight(true);
            }

            $(element).css("height", totalLinksHeight);
            
            contentHeight = $(element).outerHeight(true);
            contentCloseHeight = $(content + " div.new-menu-close-button").height() + 5;
            height = contentHeight + contentCloseHeight;
            
        } else {
            height = $(element).outerHeight(true);
        }
        if (doHideShow) {
            $(element).hide();
        }
        if (!levelShowing) {
            $(level).css({visibility:"", display:""});
        }
        return height;
    }
    
    // Bottom align the highlights area
    function addExtraContentMargins (menuHeight, contentElement) {
        var extraMargin = 22;
        var eleForMargin = contentElement + " h2";
        if (menuHeight > (contentHeight + contentCloseHeight)) {
            extraMargin = menuHeight - (contentHeight + contentCloseHeight);
            if ($("body").hasClass("ie7_0")) {
                $(eleForMargin).css("height", "20px");
            }
        }
        if (extraMargin < 22) {
            extraMargin = 22;
        }
        $(eleForMargin).css("padding-top", extraMargin);
        $(eleForMargin).addClass("margin-set");
        $(contentElement).css("height", contentHeight + extraMargin);
        return (contentHeight + extraMargin + contentCloseHeight);
    }
    
    // Set the Menu height
    function setHeight (middle1Element, middle2Element, contentElement) {
        var heightToSet = 0;
        
        if (middle1Element != "") {
            heightToSet = calculateHeight(middle1, middle1Element);
        }
        if (middle2Element != "") {
            if (calculateHeight(middle2, middle2Element) > heightToSet) {
                heightToSet = calculateHeight(middle2, middle2Element);
            }
        }
        if (contentElement != "") {
            if (calculateHeight(content, contentElement) > heightToSet) {
                heightToSet = calculateHeight(content, contentElement);
            }
        }
        
        if (heightToSet < primaryHeight) {
            heightToSet = primaryHeight-1 //Remove 1 for the border bottom on the last primary item;
        }

        if ($(contentElement + " div.highlight").length > 0 && !$(contentElement + " h2").hasClass("margin-set")) {
            heightToSet = addExtraContentMargins(heightToSet, contentElement);
        }
        
        $(primary).height(heightToSet);
        $(middle1).height(heightToSet);
        $(middle2).height(heightToSet);
        $(content).height(heightToSet);
    }
    
    // Set the Selected Image
    function setSelectedImage (element) { 
        var pos = $(element).position().top;
        var height = $(element).height();
        var imgHeight = $("img", $(element).parent()).height();
        $("img", $(element).parent()).show();
        if ($("img", $(element).parent()).css("margin-top") != "0px") {
            $("img", $(element).parent()).animate({"margin-top": pos+(height/2)-(imgHeight/2)}, timer, "linear");
        } else {
            $("img", $(element).parent()).css("margin-top", pos+(height/2)-(imgHeight/2));
        }
        if ($(element).parent().parent().hasClass("middle") && $(element).parent().parent().hasClass("one") && selectedImgOneHidden) {
            $("img", $(element).parent()).hide();
            selectedImgOneHidden = false; 
        }
        if ($(element).parent().parent().hasClass("middle") && $(element).parent().parent().hasClass("two") && selectedImgTwoHidden) {
            $("img", $(element).parent()).hide();
            selectedImgTwoHidden = false; 
        }
    }
    
    function setSelectedImagePrimary (element) {
        var pos = $(element).position().top;
        var height = $(element).height();
        var imgHeight = $("img", $(element).parent()).height();
        $("img", $(element).parent()).show();
        $("img", $(element).parent()).css("margin-top", pos+(height/2)-(imgHeight/2)-3);
    }
    
    // Open a middle 1 level item
    function openMiddle1Item (middle1ToOpen) {
        var elementToSelect = "first";
        if (programIdentifier != "" && !menuIsOpen) {
            elementToSelect = programIdentifier;
        }
        var middle2ToOpen = "";
        var contentToOpen = "";
        var nextToOpen = $(middle1 + " " + middle1ToOpen + " p." + elementToSelect).attr("menucontainer");
        if (nextToOpen.indexOf("_content") < 0) {
            middle2ToOpen = nextToOpen;
            contentToOpen = $(middle2 + " " + middle2ToOpen + " p." + elementToSelect).attr("menucontainer");
        } else {
            contentToOpen = nextToOpen;
        }
        
        $(middle1 + " div.middle-content").hide().removeClass("open");
        $(middle1 + " " + middle1ToOpen).show().addClass("open");
        $(middle1 + " " + middle1ToOpen + " p.middle-item").removeClass("selected");
        $(middle1 + " " + middle1ToOpen + " p." + elementToSelect).addClass("selected");
        if (!$(middle1).hasClass("open")) {
            $(middle1).show().addClass("open");
            $(middle1).animate({'margin-left': '0px'}, timer, "linear", function() {
                // Open the associated content level or the middle2 level (if any)
                $(middle1 + " img.selectedImg").show();
                if (middle2ToOpen == "") {
                    openContentItem(contentToOpen, true);
                } else {
                    openMiddle2Item(middle2ToOpen, contentToOpen);
                }
            });
        } else {
            if (middle2ToOpen == "") {
                openContentItem(contentToOpen, true);
            } else {
                openMiddle2Item(middle2ToOpen, contentToOpen);
            }
        }
        setSelectedImage(middle1 + " " + middle1ToOpen + " p." + elementToSelect);
    }
    
    // Open a middle 2 level item
    function openMiddle2Item (middle2ToOpen, contentToOpen) {
        var elementToSelect = "first";
        if (programIdentifier != "" && !menuIsOpen) {
            elementToSelect = programIdentifier;
        }
        $(content + " div.main-content.open").hide();
        $(content + " " + contentToOpen).show();
        $(middle2 + " div.middle-content").hide().removeClass("open");
        $(middle2 + " " + middle2ToOpen).show().addClass("open");
        $(middle2 + " " + middle2ToOpen + " p.middle-item").removeClass("selected");
        $(middle2 + " " + middle2ToOpen + " p." + elementToSelect).addClass("selected");
        if (!$(middle2).hasClass("open")) {
            $(middle2).show().addClass("open");
            $(middle2).animate({'margin-left': '0px'}, timer, "linear", function() {
                $(middle2 + " img.selectedImg").show();
                openContentItem(contentToOpen, false);
            });
        } else {
            openContentItem(contentToOpen, false);
        }
        setSelectedImage(middle2 + " " + middle2ToOpen + " p." + elementToSelect);
    }

    function lazyLoadImages() {
        menuLazyImageLoadHandler = function(){};
        //window.setTimeout( function (){
            var textarea = $("#lazyloadmenutextarea");
            textarea.before(textarea.text());
            textarea.html("");
            textarea.hide();
        //}, 50);
    }

    menuLazyImageLoadHandler = lazyLoadImages;

    // Open a content level item
    function openContentItem (contentToOpen, closeMiddle2) {
        $(content + " div.main-content").hide().removeClass("open");
        $(content + " " + contentToOpen).show().addClass("open");
        if (!$(content).hasClass("open")) {
            $(content).show().addClass("open");
            $(content).animate({'margin-left': '0px'}, timer, "linear", function() {
            });
        }
        if (closeMiddle2 && $(middle2).hasClass("open")) {
            $(middle2).animate({'margin-left': middle2Margin}, timer, "linear", function() {
                $(middle2 + " div.middle-content p.middle-item").removeClass("selected");
                $(middle2 + " div.middle-content").removeClass("open");
                $(middle2).hide().removeClass("open");
            });
        }
        menuIsOpen = true;
    }
    
    // Open the primary level
    function openPrimary (element) {
        menuLazyImageLoadHandler();
        var elementToSelect = "first";
        if (programIdentifier != "" && !menuIsOpen) {
            elementToSelect = programIdentifier;
        }
        setSelectedImagePrimary($(element));
        $(primary + " div.primaryItemContainer.selected").removeClass("selected");
        $(element).addClass("selected");
        var middle1Element = $("p", element).attr("menucontainer");
        var middle2Element = "";
        var contentElement = "";
        if ($(middle1 + " " + middle1Element + " p." + elementToSelect).attr("menucontainer").indexOf("_content") < 0) {
            middle2Element = $(middle1 + " " + middle1Element + " p." + elementToSelect).attr("menucontainer");
            contentElement = $(middle2 + " " + middle2Element + " p." + elementToSelect).attr("menucontainer");
            setHeight(middle1 + " " + middle1Element, middle2 + " " + middle2Element, content + " " + contentElement);
        } else {
            contentElement = $(middle1 + " " + middle1Element + " p." + elementToSelect).attr("menucontainer");
            setHeight(middle1 + " " + middle1Element, "", content + " " + contentElement);
        }
        if (programIdentifier != "" && !menuIsOpen) {
            $(primary).animate({height: 'toggle'}, timer, "linear", function() {
                $(primary).addClass("open");
                if (!primaryHeightCalculated) calculatePrimaryHeight();
                openMiddle1Item (middle1Element);
            });
        } else {
            openMiddle1Item (middle1Element);
        }
    }
    
    // Hide all levels on menu close
    function closePrimary () {
        $(primary + " img").css({"margin-top": "0px", "display": "none"});
        $(primary + " div.primaryItemContainer.selected").removeClass("selected");
        $(primary).animate({height: 'toggle'}, closeTimer, "linear", function() {
            $(menuContents).hide();
            $(menuContainer).hide();
            $(this).height(primaryHeight);
            $(this).removeClass("open");
            $(menuContainer).removeClass("open");
        });
    }
    
    function menuClose () {
        if ($(content).hasClass("open")) {
            $(content + " div.main-content").hide().removeClass("open");
            $(content).animate({'margin-left': contentMargin, 'height': 'toggle'}, closeTimer, "linear");
            $(content).delay(closeTimer/2).hide().removeClass("open");
        }
        if ($(middle2).hasClass("open")) {
            $(middle2 + " div.middle-content").hide().removeClass("open");
            $(middle2 + " div.middle-content p.middle-item").removeClass("selected");
            $(middle2).animate({'margin-left': middle2Margin, 'height': 'toggle'}, closeTimer, "linear", function() {
                $(middle2).hide().removeClass("open");
            });
        }
        if ($(middle1).hasClass("open")) {
            $(middle1 + " div.middle-content").hide().removeClass("open");
            $(middle1 + " div.middle-content p.middle-item").removeClass("selected");
            $(middle1).animate({'margin-left': middle1Margin, 'height': 'toggle'}, closeTimer, "linear", function() {
                $(middle1).hide().removeClass("open");
            }); 
        }
        closePrimary();
        $("#header ul li.newmenu a").removeClass("open");
        selectedImgOneHidden = true;
        selectedImgTwoHidden = true;
        menuIsOpen = false;
    }
    
    // Open the appropriate menu levels on open
    function menuOpen () {
        $(menuContainer).show().addClass("open");
        $(menuContents).show();
        $("#header ul li.newmenu a").addClass("open");
        if (typeof $(menuContents).attr("programidentifier") !== "undefined" && $(menuContents).attr("programidentifier") !== false) {
            programIdentifier = "PI-" + $(menuContents).attr("programidentifier");
            openPrimary ($(primary + " div.primaryItemContainer." + programIdentifier));
        } else {
            $(primary).animate({height: 'toggle'}, timer, "linear");
            $(primary).addClass("open");
            if (!primaryHeightCalculated) calculatePrimaryHeight();
        }
    }
    
    // Show/Hide Menu
    $("#header ul li.newmenu, #header ul li.newmenu a").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        if ($(menuContainer).hasClass("open")) {
            menuClose();
        } else {
            menuOpen();
        }
    });
    
    $("body").click(function(e) {
        if (($(menuContainer).hasClass("open") && !$(e.target).hasClass("dont-close-menu")) && ($(e.target).closest("#background-chooser").length == 0 && !$(e.target).hasClass("slider-item"))) {
            menuClose();
        }
    });
    
    $(document).delegate(content + " div.new-menu-close-button span", "click", function() {
        menuClose();
    });
    
    $(document).delegate(primary + " div.primaryItemContainer", "click", function() {
        if (!$(this).hasClass("selected")) {
            openPrimary(this);
        }
    });
    
    $(document).delegate(middle1 + " div.middle-content p.middle-item", "click", function() {
        if (!$(this).hasClass("linkItem") && !$(this).hasClass("selected")) {
            $(middle1 + " div.middle-content").removeClass("open");
            $(middle1 + " div.middle-content p.middle-item.selected").removeClass("selected");
            $(this).addClass("selected");
            $(this).parent().addClass("open");
            setSelectedImage(this);
            var middle2Element = "";
            var contentElement = "";
            if ($(this).attr("menucontainer").indexOf("_content") < 0) {
                middle2Element = $(this).attr("menucontainer");
                contentElement = $(middle2 + " " + middle2Element + " p.first").attr("menucontainer");
                setHeight(middle1 + " div.middle-content.open", middle2 + " " + middle2Element, content + " " + contentElement);
                openMiddle2Item (middle2Element, contentElement);
            } else {
                contentElement = $(this).attr("menucontainer");
                setHeight(middle1 + " div.middle-content.open", "", content + " " + contentElement);
                openContentItem(contentElement, true);
            }
        }
    });
    
    $(document).delegate(middle2 + " div.middle-content p.middle-item", "click", function() {
        if (!$(this).hasClass("selected")) {
            $(middle2 + " div.middle-content").removeClass("open");
            $(middle2 + " div.middle-content p.middle-item.selected").removeClass("selected");
            $(this).addClass("selected");
            $(this).parent().addClass("open");
            setSelectedImage(this);
            var contentElement = $(this).attr("menucontainer");
            setHeight(middle1 + " div.middle-content.open", middle2 + " div.middle-content.open", content + " " + contentElement);
            openContentItem(contentElement, false);
        }
    });
    
});
/* last edit on 11-10-2012 at 14:58 IST by jgarberx*/
var interval;
var newsinterval;
var homeTimer = lockInterval = controlshidden = noloop = 0;
var noloopShowcase = 0;
var shuffleImg = 1; //added for image shuffle
var carouselStart = "";
var stopTicker = false;
var scrolling = false;
// timers in milliseconds
var pageLoadTimerDelay = 5000; // how long before the background changes after
// the home page is loaded
var inactivityTimerDelay = 5000; // how long the mouse is inactive before the
// background changes
var transitionInterval = 3000; // time between switching backgrounds
var slideTimer = 100; // time it takes to slide menus
var accordionTimer = 500; // time it takes to slide accordions
var fadeDuration = 600; // how long it takes for background and search to fade
// and for dienamic to retract
var menuTimeout = 500; // how long the mouse is outside of the menu before it
// closes.
var tickerScrollSpeed = 7000; // how long it takes for the last visible letter
// to scroll across the bottom of the screen

var popTitle;
var popDesc;

$(function () {
    var sbV = parseInt(bV);
    setNavClassFromCookie();
    /* --- Start of IE10 Touch Fix ---*/

    $('body.ie .uheader.header #header li.directory').attr('aria-haspopup', 'true');
    $('body.ie .uheader.header div.unav li.subnavtext').each(function (index) {
        $(this).attr('aria-haspopup', 'true');
    });

    /* --- END of IE10 Touch Fix --- */

    if ($('.printlogo').length == 0) {
        $("<img src='/etc/designs/intel/us/en/images/printlogo.png' class='printlogo' style='display:none'/>").prependTo("body");
    }
    // fix for no-border issue menu third element in all browsers
    $('.navigation:nth-child(3)').addClass("nobodr");
    //set zebra colors on the table
    $(".cust-table table tr td:first-child").addClass("addcolor");
    $(".cust-table table tr:even").addClass("evenrows");
    $(".cust-table table tr:odd").addClass("oddrows");



    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    try {
        $(".pdf-link").fancybox({
            width: "900",
            height: "660",
            autoScale: "true"
        });
    } catch (err) {}
    // clear input on focus (header search form) then return text if field is
    // still empty on blur
    var clearMe = '';
    $('.clearOnFocus[title="password"], .clearOnFocus[title="Password"]').live("focus click", function () {
        if ($(this).siblings().length > 0) {
            $(this).hide().siblings().removeClass("hidden").show();
        }
    });
    centerVertically($(".centerMeVertically").not(".imagetext centerMeVertically"));
    centerVertically($(".imagetext .centerMeVertically"), 0, 305);
    $('.clearOnFocus[type="password"]').blur(function () {
        if ($(this).siblings().length > 0 && $(this).val() == "") {
            $(this).hide().siblings().removeClass("hidden").show();
        }
    });
    $('body').delegate('.clearOnFocus', 'focus', function () {
        if ($(this).val() == $(this).attr('title')) {
            clearMe = $(this).val();
            $(this).val('');
        }
    });
    $('body').delegate('.clearOnFocus', 'blur', function () {
        if ($(this).val() == '') {
            $(this).val(clearMe);
        }
    });
    // END clear input on focus

    /*** TEMPLATES 2.0 REACT BAR JS ***/

    /*var backButtonLength = $('.header-menu-new ul.new-share-bar li.back-button').width();
     var tagsLength = $('.header-menu-new ul.new-share-bar li.tags-area').width();
     var shareLength = $('.header-menu-new ul.new-share-bar li.share-buttons').width();
     var backButtonPadding = $('.header-menu-new ul.new-share-bar li.back-button').outerWidth(true) - backButtonLength;
     var tagsPadding = $('.header-menu-new ul.new-share-bar li.tags-area').outerWidth(true) - tagsLength;
     var sharePadding = $('.header-menu-new ul.new-share-bar li.share-buttons').outerWidth(true) - shareLength;
     var availableLength = 960 - (backButtonPadding + tagsPadding + sharePadding + backButtonLength + shareLength);
     $('.header-menu-new ul.new-share-bar li.tags-area').width(availableLength);
     var allTagsPadding = $('.header-menu-new ul.new-share-bar li.tags-area ul li.tags-list').outerWidth(true) - $('.header-menu-new ul.new-share-bar li.tags-area ul li.tags-list').width();
     var tagsAvailableLength = availableLength - ($('.header-menu-new ul.new-share-bar li.tags-area ul li.tagged-as').outerWidth(true) + allTagsPadding);
     $('.header-menu-new ul.new-share-bar li.tags-area ul li.tags-list').width(tagsAvailableLength);*/

    $(".share-buttons-toggle").bind("click", function () {
        $(".extra-share-buttons").toggle();
        $(".share-buttons-toggle span.share-more").toggle();
        $(".share-buttons-toggle span.share-less").toggle();
    });

    /*** END TEMPLATES 2.0 REACT BAR JS ***/

    $('.module ul.sidebar li a').on('click', function (e) {
        e.preventDefault();
        var index = $(this).parent("li").index();
        var currentPanel = $(this).parents('.module-content').find('.panel').eq(index);
        $(this).addClass('selected').parent().siblings().find('a').removeClass('selected');
        $(currentPanel).addClass('selected').siblings().removeClass('selected');
        //added new functionality to change the view more text - US1482
        // check for only related material block

        if ($(this).parents('.related-comp').hasClass('module')) {
            var viewM = $(this).parents('.related-comp').find(".relatedViewMore");
            //switch statement starts
            switch ($(this).data('name')) {
                case "assetdetail":
                    viewM.find("span").text(viewM.data('viewcontent'));
                    viewM.attr("href", viewM.data('urlcontent'));
                    break;
                case "topiccollection":
                    viewM.find("span").text(viewM.data('viewtopics'));
                    viewM.attr("href", viewM.data('urltopics'));
                    break;
                case "productcollection":
                    viewM.find("span").text(viewM.data('viewproducts'));
                    break;
            }
            //switch statement ends
        }
    });
    $('#main-hero .home-toggle, .collection-hero .home-toggle').bind("click", function (e) {
        e.preventDefault();
        $('#main-hero .business-toggle, .collection-hero .business-toggle').removeClass("active");
        $('#main-hero .home-toggle, .collection-hero .home-toggle').addClass("active");
        $('#main-hero, .collection-hero ').removeClass("business").addClass("home");
        if ($('#main-hero .carousel-controls.home .carousel-dot.active, .collection-hero .carousel-controls.home .carousel-dot.active').hasClass("grey")) {
            $("#main-hero, .collection-hero ").removeClass("blue").addClass("grey");
        }
        if ($('#main-hero .carousel-controls.home .carousel-dot.active, .collection-hero .carousel-controls.home .carousel-dot.active').hasClass("blue")) {
            $("#main-hero, .collection-hero ").removeClass("grey").addClass("blue");
        }
    });
    $('#main-hero .business-toggle, .collection-hero .business-toggle').bind("click", function (e) {
        e.preventDefault();
        $('#main-hero .home-toggle, .collection-hero .home-toggle').removeClass("active");
        $('#main-hero .business-toggle, .collection-hero .business-toggle').addClass("active");
        $('#main-hero, .collection-hero ').removeClass("home").addClass("business");
        if ($('#main-hero .carousel-controls.business .carousel-dot.active, .collection-hero .carousel-controls.business .carousel-dot.active').hasClass("grey")) {
            $("#main-hero, .collection-hero ").removeClass("blue").addClass("grey");
        }
        if ($('#main-hero .carousel-controls.business .carousel-dot.active, .collection-hero .carousel-controls.business .carousel-dot.active').hasClass("blue")) {
            $("#main-hero, .collection-hero ").removeClass("grey").addClass("blue");
        }
    });
    $(".business-toggle").live("mouseenter", function (e) {
        showTooltip($(this).attr("alt"), $(this));
    });
    $(".home-toggle").live("mouseenter", function (e) {
        showTooltip($(this).attr("alt"), $(this));
    });
    /*
     * $(".save").live("mouseenter", function(e) {
     * showTooltip($(this).attr('title'), $(this)); });
     */
    $(".business-toggle, .home-toggle, .save").live("mouseleave", function () {
        var $this = $(this);
        window.setTimeout(function () {
            if ($(".tooltip-flyout").attr("hasmouse") != "true" && $this.attr("hasmouse") != "true") {
                hideTooltip();
            }
        }, 150);
    });
    if ($('#lookup-hero table').not(".legend").find("tr").length > 5) {
        $('#lookup-hero table').not(".legend").find("tr").each(function (index) {
            if (index >= 5) {
                $(this).addClass("hidden");
            }
        });
        $('#lookup-hero .show-more').removeClass("hidden");
    }
    $(".cust-table").find("table:eq(0)").each(function (index) {
        if ($(this).find("tr").length > 6) {
            $(this).find("tr").each(function (index) {
                if (index >= 6) {
                    $(this).addClass("hidden");
                }
            });
            $(this).siblings().find("tr").addClass("hidden");
            var I = $(".view-more-products").data("viewmoreproducttext");
            var H = $(".view-more-products").data("viewlessproducttext");
            $(this).parent().append('<a href="#" class="show-more-a">' + I + '</a><a href="#" class="show-less-a hidden">' + H + "</a>")
        }
    });

    $('.cust-table .show-more-a').click(function (event) {
        event.preventDefault();
        $(this).siblings().find("tr").removeClass("hidden");
        $(this).siblings('.show-less-a').removeClass("hidden");
        $(this).addClass("hidden");
    });

    $('.cust-table .show-less-a').click(function (event) {
        event.preventDefault();
        $(this).siblings().each(function (index) {
            $(".cust-table").find("table:eq(0)").each(function (index) {
                if ($(this).find("tr").length > 6) {
                    $(this).find("tr").each(function (index) {
                        if (index >= 6) {
                            $(this).addClass("hidden");
                        }
                    });
                }
                $(this).siblings().find("tr").addClass("hidden");
            });
        });
        $(this).siblings('.show-more-a').removeClass("hidden");
        $(this).addClass("hidden");
    });

    $('#lookup-hero .show-more, .cust-table .show-more').live("click", function (event) {
        event.preventDefault();
        $(this).parents('#lookup-hero, .cust-table').find("table tr, .show-less").removeClass("hidden");
        $(this).addClass("hidden");
    });
    $('#lookup-hero .show-less, .cust-table .show-less').live("click", function (event) {
        event.preventDefault();
        $(this).parents('#lookup-hero, .cust-table').find("table tr").each(function (index) {
            if (index >= 6) {
                $(this).addClass("hidden");
            }
        });
        $(this).parents('#lookup-hero, .cust-table').find(".show-more").removeClass("hidden");
        $(this).addClass("hidden");
    });
    // video detail page code
    if ($('body').hasClass('video-detail')) {
        // $('.video-panel:not(:first)').addClass('hidden');
        $('.video-nav ul li a').bind('click', function (e) {
            e.preventDefault();
            var videoPanel = '#' + $(this).attr('rel');
            $('.video-panel').addClass('hidden');
            $(videoPanel).removeClass('hidden');
        });
        // $('.conversation div:not(:first)').addClass('hidden');
        $('#conversations-hero ul li a').bind('click', function (e) {
            e.preventDefault();
            var convoPanel = '#' + $(this).attr('rel');
            $('#conversations-hero ul li a').removeClass('selected');
            $(this).addClass('selected');
            $('.conversation div').addClass('hidden');
            $(convoPanel).removeClass('hidden');
        });
    } // video detail page code
    /***************************************************************************
     * BEGIN TITLE CODE
     **************************************************************************/
    $(".module .header").live("click", function (event) {
        // event.preventDefault();
        if (event.target == this) {
            $(this).siblings(".content").slideToggle();
        }
    });
    /***************************************************************************
     * END TITLE CODE
     **************************************************************************/
    /***************************************************************************
     * BEGIN MENU CODE
     **************************************************************************/
    $(".subheading.show-more").live("click", function (event) {
        event.preventDefault();
        $(this).parent().removeClass("collapsed");
        updateMenuHeight();
    });
    $(".subheading.show-less").live("click", function (event) {
        event.preventDefault();
        $(this).parent().addClass("collapsed");
        updateMenuHeight();
    });
    $(".directory").live("click mouseenter", function (event) {
        if (event.type == "click" && $(this).attr("hasmouse") == "true") {
            event.preventDefault();
            $(this).attr("hasmouse", "");
            closeNavMenu(1);
        } else {
            $(this).attr("hasmouse", "true");
            if (!$(this).find("a").hasClass("selected")) {
                $(".directory a, .sites a, .library a, .my-intel .link, .my-intel-link, .save").removeClass("selected");
                closeMyIntel();
                closeSigninBox();
                $(this).find("a").addClass("selected");
                $(this).addClass("selected");
                $("#menu-wrapper").show();
                $("#subnav-wrapper").css({
                    position: "fixed",
                    top: "61px"
                });
                $(".boxnav.navbg").slideDown(slideTimer);
                //Razorfish requirement page no.14
                $(".subnavtext:first-child").trigger('click');
                updateMenuHeight();
            }
        }
    });
    $("#close-menu").live("click", function (event) {
        event.preventDefault();
        closeNavMenu(1);
    });
    $(".subnavtext").each(function (index) {
        $(this).bind("click mouseenter", function (event) {
            if (event.type == "click") {
                event.preventDefault();
            }
            $(this).attr("hasmouse", "true");
            var $this = $(this);
            var timeout = 1;
            if (event.type == "mouseenter") {
                timeout = 100;
            }
            window.setTimeout(function () {
                if (!$this.hasClass("active") && $this.attr("hasmouse") == "true") {
                    $(".subnavtext").removeClass("active");
                    $(".submenu").hide();
                    $(".submenu").eq(index).show();
                    $("#submenu-wrapper").slideDown(slideTimer, function () {
                        if ($this.attr("hasmouse") == "true") {
                            $(".subnavtext").removeClass("active");
                            $this.addClass("active");
                            updateMenuHeight();
                        }
                    });
                    closeNavMenu();
                }
            }, timeout);
        });
    });
    $(".subnavtext").live("mouseleave", function (event) {
        $(this).attr("hasmouse", "");
    });
    $(".boxnav, .directory").live("mouseenter", function (event) {
        $(this).attr("hasmouse", "true");
    });
    $(".boxnav, .directory").live("mouseleave", function (event) {
        $(this).attr("hasmouse", "");
        closeNavMenu();
    });
    $("#menu-close-btn").live("click", function (event) {
        event.preventDefault();
        closeNavMenu(1, true);
    });
    $(".language").live("click", function (event) {
        event.preventDefault();
        $("#language-chooser").slideToggle(fadeDuration, function () {
            $("#language-chooser").toggleClass("hidden");
            $(".language").toggleClass("selected");
        });
    });
    $("#language-chooser .close-button").live("click", function (event) {
        event.preventDefault();
        closeLanguageMenu(1, true);
    });
    $(".tools").live("click", function (e) {
        e.preventDefault();
        $("#tools-chooser").slideToggle(fadeDuration, function () {
            $("#tools-chooser").toggleClass("hidden");
            $(".tools").toggleClass("selected");
        });
    });
    $("#tools-chooser .close-button").live("click", function (event) {
        event.preventDefault();
        closeToolsMenu(1, true);
    });
    /*
     * $("#tools-chooser ul img").hover(function(e) { var itemInfo = '#' +
     * $(this).attr('class'); var position = $(this).position();
     * $(itemInfo).css({ position: 'absolute', top: position.top + 45, left:
     * position.left + 40 }).show(); }, function() { var itemInfo = '#' +
     * $(this).attr('class'); $(itemInfo).hide(); });
     */
    $(".my-intel-link").bind("mouseenter", function (e) {
        $this = $(this);
        $this.attr("hasmouse", "true");
        var x = ($this.offset().left + ($this.outerWidth() / 2 * 0)) + 20;
        var y = ($this.offset().top + $this.outerHeight()) + 20;
        window.setTimeout(function () {
            if ($this.attr("hasmouse") == "true" && $(".tooltip-flyout").attr("hasmouse") != "true") {
                showTooltip($this.attr("alt"), $this);
            }
        }, 100);
    });
    $(".save, .my-intel-link").bind("mouseleave", function (e) {
        if (!($(e.target).hasClass("my-intel-link") || $(e.target).hasClass("save")) || true) {
            $(this).attr("hasmouse", "");
        }
        window.setTimeout(function () {
            if ($(".tooltip-flyout").attr("hasmouse") != "true" && $(".my-intel-link, .save").attr("hasmouse") != "true") {
                hideTooltip();
            }
        }, 150);
    });
    $(".save, .my-intel-link").bind("click", function (e) {
        e.preventDefault();
        if ($(".my-intel-link, .save").hasClass("selected")) {
            closeMyIntel(1, true);
        } else {
            //saveHistory();
            closeSigninBox();
            $(".my-intel .link, .currentpage").removeClass("selected");
            $(".boxnav.myintelbg").slideDown(function () {
                $(".my-intel-link, .save").addClass("selected");
            });
        }
    });
    $(".create-btn").bind("click", function (e) {
        e.preventDefault();
        $(".register-myintel").addClass("boxnav myintelbg").removeClass("hidden").show();
        $(".savedcontent").addClass("hidden").removeClass("boxnav myintelbg").hide();
    });
    $(".register-myintel .cancel").bind("click", function (e) {
        e.preventDefault();
        $(".savedcontent").addClass("boxnav myintelbg").removeClass("hidden").show();
        $(".register-myintel").addClass("hidden").removeClass("boxnav myintelbg").hide();
    });
    $(".savedcontent .sign-in").live("click", function (e) {
        e.preventDefault();
        $(".savedcontent .navigationmyintelfirst ul.login").addClass("hidden").hide();
        $(".savedcontent .navigationmyintelfirst ul.profile").removeClass("hidden").show();
    });
    $(".savedcontent .log-out").live("click", function (e) {
        // e.preventDefault();
        $(".savedcontent .navigationmyintelfirst ul.profile").addClass("hidden").hide();
        $(".savedcontent .navigationmyintelfirst ul.login").removeClass("hidden").show();
    });
    $(".myintelbg .close-button, .myintel-close-btn").live("click", function (event) {
        event.preventDefault();
        closeMyIntel();
    });
    $(".searchmyintel li a").live("click", function (e) {
        e.preventDefault();
        $(".searchmyintel li a").removeClass("selected");
        $(this).addClass("selected");
        var index = $(".searchmyintel li a").index(this);
        $(".middlemyintel > div").removeClass("selected").addClass("hidden");
        $(".middlemyintel > div").eq(index).addClass("selected").removeClass("hidden");
    });
    $("#footnotes .close-button").live("click", function (e) {
        e.preventDefault();
        $(this).removeClass("close-button").addClass("open-button").parents(".module").addClass("closed").find(".module-content").slideUp();
        $(this).attr("title", $(this).attr("data-id-open"));
    });
    $("#footnotes .open-button").live("click", function (e) {
        e.preventDefault();
        $(this).removeClass("open-button").addClass("close-button").parents(".module").removeClass("closed").find(".module-content").slideDown();
        $(this).attr("title", $(this).attr("data-id-close"));
    });
    $(document).bind('click', function (event) {
        if ($(event.target).parents(".boxnav.navbg, .directory, .sites, .library, .background-slider-items").length == 0) {
            if (!$(event.target).hasClass("slider-item") || $(event.target).attr("hasmouse") != "true") { // keep
                // nav
                // menu
                // from
                // closing
                // on
                // background
                // change
                closeNavMenu(1);
            }
        }
        if ($(event.target).parents(".menu-wrappermyintel, .savedcontent, .register-myintel, .my-intel-link, .save, .tooltip-flyout, .background-slider-items").length == 0 && !$(event.target).hasClass("savedcontent") && !$(event.target).hasClass("save") && !$(event.target).hasClass("my-intel-link") && !$(event.target).hasClass("register-myintel")) {
            if (!$(event.target).hasClass("slider-item") || $(event.target).attr("hasmouse") == "true") { // keep
                // nav
                // menu
                // from
                // closing
                // on
                // background
                // change
                closeMyIntel(1);
            }
        }
        if ($(event.target).parents("#language-chooser, .language, .background-slider-items").length == 0 && !$(event.target).hasClass("language") && !$(event.target).hasClass("slider-item")) {
            closeLanguageMenu(1);
        }
        if ($(event.target).parents("#tools-chooser, .tools, .background-slider-items").length == 0 && !$(event.target).hasClass("tools") && !$(event.target).hasClass("slider-item")) {
            closeToolsMenu(1);
        }
        if ($(event.target).parents("#hpsform, .predictive-search, .background-slider-items, #rotatingshowcase a").length == 0 && !$(event.target).hasClass("predictive-search") && !$(event.target).hasClass("slider-item") && !$(event.target).hasClass("prev") && !$(event.target).hasClass("next")) {
            $('#hpsform .predictive-search').addClass('hideme');
            $('#searchBox').attr('value', $('#searchBox').attr('title'));
        }
        /*
         * --------------------- Sigin Functionality
         * -------------------------------
         */
        if ($(event.target).parents(".signin-nav-box, .sign-in-link").length == 0 && !$(event.target).hasClass("signin-nav-box")) {
            closeSigninBox(1);
        }
    });
    // added for saved content navigation for myintel
    $('.searchmyintel li.savedCont a').mouseenter(

        function () {
            $('.recetlyViewedframe').hide();
            $('.savedframe').show();
        }, function () {
            $('.recetlyViewedframe').hide();
        });
    $('.searchmyintel li.recentViewed a').mouseenter(

        function () {
            $('.savedframe').hide();
            $('.recetlyViewedframe').show();
        }, function () {
            $('.recetlyViewedframe').hide();
            $('.savedframe').show();
        });
    /***************************************************************************
     * END MENU CODE
     **************************************************************************/
    /***************************************************************************
     * BEGIN CONTENT LIBRARY CODE
     **************************************************************************/
    $(".see-all.more").bind("click", function (e) {
        e.preventDefault();
        $(this).siblings().show();
        $(this).hide();
    });
    $(".see-all.less").bind("click", function (e) {
        e.preventDefault();
        $(this).siblings(".filter").slice(5).hide();
        $(this).siblings(".more").show();
        $(this).hide();
    });
    $(".see-all a").live("click", function (e) {
        $(this).parent().trigger("click");
    });
    $(".close-btn, .filter-checkbox").live("click", function (e) {
        e.preventDefault();
        closePreviews();
    });
    $(".preview-btn").live("click", function (e) {
        e.preventDefault();
        closePreviews();
        $(this).addClass("hidden");
        $(this).siblings(".open-btn").addClass("hidden");
        $(this).parents(".list-item-content-wrapper").find(".list-item-desc").addClass("hidden");
        $(this).parents(".list-item-content-wrapper").find(".list-item-descLong").removeClass("hidden");
        $(this).siblings(".view-btn, .close-btn").removeClass("hidden");
        $(this).parents(".list-item, .list-item-wrapper").addClass("open")
        var maxHeight = $(this).parents(".list-item-content-wrapper").outerHeight();
        if ($(this).parents(".list-item").find(".list-item-img-wrapper").length > 0) {
            if ($(this).parents(".list-item").find(".list-item-img-wrapper").outerHeight() > maxHeight) {
                maxHeight = $(this).parents(".list-item").find(".list-item-img-wrapper").outerHeight();
            }
        }
        $(this).parents(".list-item-content-wrapper, .list-item-img-wrapper").css("height", maxHeight);
        $(this).parents(".list-item-wrapper").css("height", maxHeight + 60);
        matchHeights();
    });
    /***************************************************************************
     * END CONTENT LIBRARY CODE
     **************************************************************************/
    /***************************************************************************
     * BEGIN FILTER CODE
     **************************************************************************/
    $(".filter-list-title").live("click", function (event) {
        event.preventDefault();
        if (!$(this).hasClass("no-toggle") && !$(this).parents(".filter-list-wrapper").hasClass("no-toggle")) { // don't
            // toggle
            // the
            // tools
            // section!
            if ($(this).parents("#filter-list-list").hasClass("locked")) {
                $(this).toggleClass("closed");
                $(this).parent(".filter-list-wrapper").siblings(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list-title").addClass("closed");
                $(this).parents("#filter-list-list").find(".filter-list-title.closed").siblings(".filter-list,.toggle-options").slideUp(slideTimer, function () {
                    matchHeights();
                });
                if ($(this).hasClass("closed")) // this just closed, open the
                // next
                {
                    if ($(this).parent(".filter-list-wrapper").next(".filter-list-wrapper").length > 0) // if
                    // there
                    // is a
                    // next,
                    // open
                    // it...
                    {
                        $(this).parent(".filter-list-wrapper").next(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list-title").removeClass("closed");
                        $(this).parent(".filter-list-wrapper").next(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list, .toggle-options").not(".hidden").slideDown(slideTimer, function () {
                            matchHeights();
                        });
                    } else { //...otherwise manipulate previous one
                        $(this).parent(".filter-list-wrapper").prev(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list-title").removeClass("closed");
                        $(this).parent(".filter-list-wrapper").prev(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list, .toggle-options").not(".hidden").slideDown(slideTimer, function () {
                            matchHeights();
                        });
                    }
                } else { //otherwise open it
                    $(this).removeClass("closed");
                    $(this).siblings(".filter-list, .toggle-options").not(".hidden").slideDown(accordionTimer, function () {
                        matchHeights();
                    });
                }
            } else {
                //fully open this puppy
                $(this).siblings("ul").children("li").show();
                $(this).siblings("ul").children("li.see-all.more").hide();
                //close all other open elements
                $(".filter-list-title").parent(".filter-list-wrapper").not(".filter-list-wrapper.no-toggle").find(".filter-list-title").not(this).addClass("closed");
                $(".filter-list-title").parents(".filter-list-wrapper").find(".filter-list-title.closed").siblings(".filter-list,.toggle-options").slideUp(slideTimer, function () {
                    matchHeights();
                });
                //open this element
                if ($(this).hasClass("closed")) {
                    $(this).removeClass("closed");
                    $(this).siblings(".filter-list, .toggle-options").not(".hidden").slideDown('fast', function () {
                        matchHeights();
                        // on click see all rather than only 5
                        $(".see-all.more").siblings().show();
                        $(".see-all.more").hide();
                    });
                } else {
                    $(this).addClass("closed");
                    $(this).siblings(".filter-list, .toggle-options").slideUp('fast', function () {
                        matchHeights();
                    });
                }
            }
        }
    });
    $(".filter-list-toggle .toggle-option").live("click", function (event) {
        event.preventDefault();
        if (!$(this).hasClass("active")) {
            var index = $(this).index();
            $(this).addClass("active");
            $(this).siblings(".toggle-option").removeClass("active");
            $(this).parents(".filter-list-wrapper").find(".filter-list.option").addClass("hidden").hide().removeClass("active");
            $(this).parents(".filter-list-wrapper").find(".filter-list.option").eq(index).addClass("active").removeClass("hidden").show();
        }
    });
    /***************************************************************************
     * END FILTER CODE
     **************************************************************************/
    /***************************************************************************
     * VIDEO DETAIL PAGE CODE
     **************************************************************************/
    if ($('body').hasClass('video-detail')) {
        // $('.video-panel:not(:first)').addClass('hidden');
        $('.video-nav ol li a').bind('click', function (e) {
            e.preventDefault();
            var videoPanel = '#' + $(this).attr('rel');
            $('.video-panel').addClass('hidden');
            $(videoPanel).removeClass('hidden');
        });
        $('.conversation #forums, .conversation #blogs').addClass('hidden');
        $('#conversations-hero ul li a').bind('click', function (e) {
            e.preventDefault();
            var convoPanel = '#' + $(this).attr('rel');
            $('#conversations-hero ul li').removeClass('selected');
            $('.conversation #forums, .conversation #blogs, .conversation #tweets').removeClass('selected').addClass('hidden');
            $(this).parent().removeClass('hidden').addClass('selected');
            $(convoPanel).removeClass('hidden');
        });
    }
    /***************************************************************************
     * END VIDEO DETAIL PAGE CODE
     **************************************************************************/
    /***************************************************************************
     * BEGIN CAROUSEL CODE
     **************************************************************************/
    $('#gallery-hero ul li a').bind('click', function (e) {
        e.preventDefault();
        $(this).parent().addClass('selected-photo').siblings().removeClass('selected-photo');
        $('#gallery-hero .image-viewer').show();
        $(".thumbs-viewer").hide();
        $(".view-gallery").show();
        var $controls = $(this).parents(".module").find(".carousel-controls");
        $controls.attr("itemContainer", ".image-viewer");
        $controls.find(".carousel-dot").remove();
        for (var i = 0; i < $(".image-viewer-wrapper .carousel-item").length; i++) {
            $controls.find(".carousel-right").before('<img class="carousel-dot" src="/etc/designs/intel/us/en/images/blank.png" />');
        }
        var index = $('#gallery-hero ul li a').index(this);
        if (index == 0) {
            $controls.find(".carousel-left").css("visibility", "hidden");
        } else {
            $controls.find(".carousel-left").css("visibility", "");
        }
        if (index == ($("#gallery-hero ul li a").length - 1)) {
            $controls.find(".carousel-right").css("visibility", "hidden");
        } else {
            $controls.find(".carousel-right").css("visibility", "");
        }
        $(".image-viewer-wrapper .carousel-item").removeClass("active").css({
            "z-index": "",
            left: ""
        });
        $controls.find(".carousel-dot").eq(index).addClass("active");
        $(".image-viewer-wrapper .carousel-item").eq(index).addClass("active").css({
            "z-index": "1",
            left: 0
        });
    });
    $('#gallery-hero a.view-gallery').bind('click', function (e) {
        e.preventDefault();
        $('#gallery-hero .image-viewer').hide();
        $(".thumbs-viewer").show();
        $(".view-gallery").hide();
        var $controls = $(this).parents(".module").find(".carousel-controls");
        $controls.attr("itemcontainer", ".thumbs-viewer");
        $controls.find(".carousel-dot").remove();
        for (var i = 0; i < $(".thumbs-viewer .carousel-item").length; i++) {
            $controls.find(".carousel-right").before('<img class="carousel-dot" src="/etc/designs/intel/us/en/images/blank.png" />');
        }
        $controls.find(".carousel-dot").first().addClass("active");
    });

    $(".carousel-dot").live("click", function (event) {
        event.preventDefault();
        var index = $(this).index() - $(this).siblings(".carousel-left").length; // this
        // would
        // return
        // 1
        // for
        // the
        // first
        // index
        // normally
        // if
        // we
        // do
        // not
        // account
        // for
        // the
        // left
        // arrow
        if (!$(this).hasClass("active")) {
            var itemContainer = $(this).parents(".gallery-controls").find(".carousel-controls").attr("itemContainer");
            if ($(itemContainer).length > 1) {
                var base = $(this).parent().parent();
                while (base.find(itemContainer).length < 1) {
                    base = base.parent();
                }
                itemContainer = base.find(itemContainer);
            }
            var carouselItem = $(itemContainer).find(".carousel-item").eq(index);
            var carouselItemPrev = $(itemContainer).find(".carousel-item.active");
            var direction = 1;
            if (($(this).parent().find(".carousel-dot.active").position().left - $(this).position().left) < 0) {
                direction = -1;
            }
            carouselItemPrev.css({
                left: 0
            });
            $(this).parent().find(".carousel-dot").removeClass("active");
            $(this).addClass("active");
            var $this = $(this);
            if ($(this).prev(".carousel-dot").length == 0) {
                $(this).parent().find('.carousel-left').css("visibility", "hidden");
            } else {
                $(this).parent().find('.carousel-left').css("visibility", "");
            }
            if ($(this).next(".carousel-dot").length == 0) {
                $(this).parent().find('.carousel-right').css("visibility", "hidden");
            } else {
                $(this).parent().find('.carousel-right').css("visibility", "");
            }
            $(itemContainer).find(".carousel-item").not(".active").css({
                "z-index": "1",
                left: (-direction * ($(itemContainer).innerWidth()+80))
            });
            $(itemContainer).find(".carousel-item").css("z-index", "0").removeClass("active");
            carouselItemPrev.css("z-index", "1").animate({
                left: (direction * ($(itemContainer).innerWidth()+80))
            }, 500);
            carouselItem.css("z-index", "1").animate({
                left: 0
            }, 500, function () {
                $(itemContainer).find(".carousel-item").not(carouselItem).removeClass("active").css({
                    left: $(itemContainer).innerWidth()+80
                });
                carouselItem.addClass("active");
                carouselItemPrev.css("z-index", "0");
                if ($this.hasClass("grey")) {
                    $(itemContainer).parents(".module").removeClass("blue").addClass("grey");
                } else if ($this.hasClass("blue")) {
                    $(itemContainer).parents(".module").removeClass("grey").addClass("blue");
                }
            });
        }
    });
    $(".carousel-right").live("click", function (event) {
        event.preventDefault();
        var itemContainer = $(this).parent().attr("itemContainer");
        if ($(itemContainer).length > 1) {
            var base = $(this).parent().parent();
            while (base.find(itemContainer).length < 1) {
                base = base.parent();
            }
            itemContainer = base.find(itemContainer);
        }
        nextCarousel($(itemContainer), $(this).parent());
    });
    $(".carousel-left").live("click", function (event) {
        event.preventDefault();
        var itemContainer = $(this).parent().attr("itemContainer");
        if ($(itemContainer).length > 1) {
            var base = $(this).parent().parent();
            while (base.find(itemContainer).length < 1) {
                base = base.parent();
            }
            itemContainer = base.find(itemContainer);
        }
        prevCarousel($(itemContainer), $(this).parent());
    });
    /***************************************************************************
     * END CAROUSEL CODE
     **************************************************************************/
    /***************************************************************************
     * FOOTER CODE
     **************************************************************************/
    $("#footer .latest-news .toggle").live("click", function (e) {
        e.preventDefault();
        toggleFooterNews();
    });
    scrolling = false;
    if (newsinterval != undefined) {
        newsinterval = window.clearInterval(newsinterval);
    }
    newsinterval = window.setInterval(scrollTicker, tickerScrollSpeed);
    /***************************************************************************
     * END FOOTER CODE
     **************************************************************************/
    /***************************************************************************
     * NAVIGATION MENUS WITH CARATS
     **************************************************************************/
    $("ul.subnav li").bind("click mouseenter", function (index) {
        var mywidth = $(this).outerWidth();
        var myoffset = $(this).position();
        var myx = Math.round(myoffset.left);
        var moveto = myx + Math.round(mywidth / 2) - 1000;
        var mybgpos = moveto + "px bottom";
        if (!$(this).children(".sign-in-link").length > 0 || $(this).children(".lock-icon").length > 0) {
            $("ul.subnav").css("background-position", mybgpos);
        }
    });
    $("ul.subnav li").bind("mouseleave", function (index) {
        if ($("ul.subnav li.selected").length > 0) {
            var mywidth = $("ul.subnav li.selected").outerWidth();
            var myoffset = $("ul.subnav li.selected").position();
            var myx = Math.round(myoffset.left);
            var moveto = myx + Math.round(mywidth / 2) - 1000;
            var mybgpos = moveto + "px bottom";
            $("ul.subnav").css("background-position", mybgpos);
        }
    });
    /*
     * this gets reset in: window.setTimeout()
     */
    $(".my-intel .link, .sign-in-link .link").live("click mouseenter", function (index) {
        var mywidth = $(this).width();
        var myoffset = $(this).offset();
        var myx = Math.round(myoffset.left);
        var moveto = myx + Math.round(mywidth / 2) - 4000;
        if ($(this).is(".my-intel-link") || $(this).is(".save")) {
            moveto -= $("#my-intel-count").width();
        }
        var mybgpos = moveto + "px top";
        if (!$(this).parents(".sign-in-link").length > 0 || $(this).children(".lock-icon").length > 0) {
            $(".home.wrapper #header").css("background-position", mybgpos);
        }
    });
    $(".my-intel .link, .sign-in-link .link").live("mouseleave", function (index) {
        if ($(".my-intel .link.selected").length > 0) {
            var mywidth = $(".my-intel .link.selected").width();
            var myoffset = $(".my-intel .link.selected").offset();
            var myx = Math.round(myoffset.left);
            var moveto = myx + Math.round(mywidth / 2) - 4000;
            if ($(this).is(".my-intel-link") || $(this).is(".save")) {
                moveto -= $("#my-intel-count").width();
            }
            var mybgpos = moveto + "px top";
            $(".home.wrapper #header").css("background-position", mybgpos);
        } else {
            $(".home.wrapper #header").css("background-position", "");
        }
    });
    /*
     * added for carat for sign in link
     */
    $(".sign-in-link .link").live("click mouseenter", function (index) {
        var mywidth = $(this).width();
        var myoffset = $(this).offset();
        var myx = Math.round(myoffset.left);
        var moveto = myx + Math.round(mywidth / 2) - 3990;
        if ($(this).is(".sign-in-link") || $(this).is(".save")) {
            moveto -= $("#sign-in-link").width();
        }
        var mybgpos = moveto + "px top";
        if ($(this).children(".down-arrow").length <= 0) {
            $(".wrapper #header").css("background-position", mybgpos);
        }
    });
    $(".sign-in-link .link").live("mouseleave", function (index) {
        if ($(".my-intel .link.selected").length > 0) {
            var mywidth = $(".my-intel .link.selected").width();
            var myoffset = $(".my-intel .link.selected").offset();
            var myx = Math.round(myoffset.left);
            var moveto = myx + Math.round(mywidth / 2) - 4000;
            if ($(this).is(".sign-in-link") || $(this).is(".save")) {
                moveto -= $("#sign-in-link").width();
            }
            var mybgpos = moveto + "px top";
            $(".wrapper #header").css("background-position", mybgpos);
        } else {
            $(".wrapper #header").css("background-position", "");
        }
    });
    /***************************************************************************
     * end NAVIGATION MENUS WITH CARATS
     **************************************************************************/
    /***************************************************************************
     * CHAT CODE
     **************************************************************************/
    $(".prochatbox .toggle").live("click", function (e) {
        e.preventDefault();
        toggleChat();
    });
    /***************************************************************************
     * END CHAT CODE
     **************************************************************************/
    /***************************************************************************
     * MISC CODE
     **************************************************************************/
    /* TODO: FIND OUT WHY THIS IS NECCESSARY AND FIX THE ROOT PROBLEM */
    $(".shopblade .img-wrap").bind("click", function (e) {
        window.location = $(this).parent().attr("href");
    });

    /* CONVERSATIONS FEATURE AND SHOWCASE FEATURE Next/Prev CODE */

    $('.marquee-module a.prev').bind('click', function (e) {
        e.preventDefault();
        var currPanel = $(this).parent().find('ul li.selected');
        if ($(this).parent().find('ul li.selected').length < 1) {
            currPanel = $(this).parent().find('ul li:visible');
        }
        if ($(this).parent().find('ul li:visible') < 1) {
            currPanel = $(this).parent().find('ul li:first-child');
        }
        if ($(currPanel).is(':first-child')) {
            $(currPanel).removeClass('selected').siblings('li').last().addClass('selected');
        } else {
            $(currPanel).removeClass('selected').prev().addClass('selected');
        }
    });
    if (!noloopShowcase) {
        interval = window.clearTimeout(interval);
        interval = window.setTimeout('rotatingshowcase()', transitionInterval);
    }

    $('.marquee-module a.next').bind('click', function (e) {
        e.preventDefault();
        var currPanel = $(this).parent().find('ul li.selected');
        if ($(this).parent().find('ul li.selected').length < 1) {
            currPanel = $(this).parent().find('ul li:visible');
        }
        if ($(this).parent().find('ul li:visible') < 1) {
            currPanel = $(this).parent().find('ul li:first-child');
        }
        $(currPanel).removeClass('selected');
        var notLi = true;
        while (notLi) {
            if ($(currPanel).is(':last-child')) {
                currPanel = $(currPanel).siblings('li').first();
                notLi = false;
                break;
            }
            currPanel = $(currPanel).next();
            if ($(currPanel).is('li')) {
                notLi = false;
                break;
            }
        }
        $(currPanel).addClass('selected');
        if (!noloopShowcase) {
            if ($(this).parents('#rotatingshowcase').find('ul li').length > 1) {
                interval = window.clearTimeout(interval);
                interval = window.setTimeout('rotatingshowcase()', transitionInterval);
            }
        }
    });

    /* END CONVERSATIONS FEATURE AND SHOWCASE FEATURE Next/Prev CODE */

    if ($(".filter-lists-container").length > 0) {
        matchHeights();
    }
    if ($("#background-player").length > 0) {
        if ($("#background-player img").length > 0) {
            var img = new Image();
            $(img).load(function () {
                centerInParent($("#background-wrapper .background-item"));
            });
            img.src = $("#background-player img").attr("src");
        }
    }
    $("#content").not(".home #content").css("min-height", ($(".boxnav.navbg").outerHeight() + 60) + "px");
    $(window).resize(function () {
        if ($(".filter-lists-container").length > 0) {
            matchHeights();
        }
        updateMenuHeight();
    });
    $('#specs-hero ul.specs-navigation li.selected ul').slideDown(200);
    $('#specs-hero ul.specs-navigation li a.filter').bind('click', function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass('selected')) {} else {
            $('#specs-hero ul.specs-navigation li').removeClass('selected');
            $(this).parent().addClass('selected');
            $('#specs-hero ul.specs-navigation li ul').slideUp(200);
            $(this).next('ul').slideDown(200);
        }
    });
    $('#comp-hero ul.laptops-desktops li a').bind('click', function (event) {
        event.preventDefault();
        $('#comp-hero ul.laptops-desktops li a').removeClass('selected');
        $(this).addClass('selected');
    });
    $('#comp-hero .content-detail:first').slideDown(200);
    $("#comp-hero .family-head").hover(

        function () {
            $(this).addClass('hover');
        }, function () {
            $(this).removeClass('hover');
        });
    $('#comp-hero .family-head').bind('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected').next('.content-detail').slideUp(200);
        } else {
            $(this).addClass('selected').next('.content-detail').slideDown(200);
        }
    });
    $('#comp-hero a.compare-button').bind('click', function (e) {
        e.preventDefault();
        var prevComparedItems = $('#comp-hero a.compare-selected').length;
        if ($(this).hasClass('compare-select')) {
            $(this).removeClass('compare-select').addClass('compare-selected').text('Selected');
        } else if ($(this).hasClass('compare-selected')) {
            $(this).removeClass('compare-selected').addClass('compare-select').text('Select');
        }
        var newComparedItems = $('#comp-hero a.compare-selected').length;
        $('#compare-items h3 span').text(newComparedItems);
        if (newComparedItems == 5 && prevComparedItems == 4) {
            $('#comp-hero a.compare-select').removeClass('compare-select').addClass('compare-full').text('Queue Full');
        } else if (newComparedItems == 4 && prevComparedItems == 5) {
            $('#comp-hero a.compare-full').removeClass('compare-full').addClass('compare-select').text('Select');
        }
    });
    $('#comp-hero #compare-items a.remove-all').bind('click', function (e) {
        e.preventDefault();
        $('#comp-hero #compare-items ul li').html('');
        $('#comp-hero a.compare-selected, #comp-hero a.compare-full').removeClass('compare-selected').removeClass('compare-full').addClass('compare-select').text('Select');
    });
    $('#comp-hero #compare-items li a.remove').bind('click', function (e) {
        e.preventDefault();
        $(this).parent().html('');
    });
    $("#comp-hero table.family th span").hover(function (e) {
        var videoPanel = '#' + $(this).attr('class');
        $(videoPanel).css({
            position: 'absolute',
            top: e.pageY + 25,
            left: e.pageX
        }).show();
    }, function () {
        var videoPanel = '#' + $(this).attr('class');
        $(videoPanel).hide();
    });
    // $('#lookup-hero .content-detail:first').slideDown(200);
    $("#lookup-hero .family-head").hover(

        function () {
            $(this).addClass('hover');
        }, function () {
            $(this).removeClass('hover');
        });
    $('#lookup-hero .family-head').bind('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected').next('.content-detail').slideUp(200);
        } else {
            $(this).addClass('selected').next('.content-detail').slideDown(200);
        }
    });
    $('.assetcontentpar table.striped tr:even').addClass('even');
    $('.assetcontentpar table.striped tr:odd').addClass('odd');
    $('ul.share-page li.toggle a').bind('click', function (event) {
        event.preventDefault();
        $('ul.share-page li.extra').toggleClass('visible');
        $('ul.share-page li.toggle').toggleClass('less');
    });
    $('ul.share-page-top li.toggle a').bind('click', function (event) {
        event.preventDefault();
        $('ul.share-page-top li.extra').toggleClass('visible');
        $('ul.share-page-top li.toggle').toggleClass('less');
        $('ul.share-page-top').toggleClass('less-width');
    });

    $('ul.share-page-top li:not(.function) a, ul.share-page li:not(.toggle) a').bind('click', function (event) {
        $('#share-popup').toggleClass('visible');
    });
    $('#share-popup a.close').bind('click', function (e) {
        e.preventDefault();
        $('#share-popup').toggleClass('visible');
    });
    $("#content .module").first().addClass("print-me");
    $("#footnotes").addClass("print-me");
    if ((navigator.userAgent.indexOf('iPad') != -1)) {
        $(".ipad").removeClass("hidden").show();
        $(".nonipad").addClass("hidden").hide();
    }
    // new ie drop shadow
    if (bN == 'ie' && sbV < '9.0') {
        $("#menu-wrapper").append("<div class='ie_shadow'></div>");
    }

    // prevent all the <a> tags which has href value "#"
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    //new code for password in sign in
    var clrSgn = '';
    $('.clrSgn').live('focus', function () {
        if ($(this).val() == $(this).attr('title')) {
            clrSgn = $(this).val();
            $(this).val('');
            $(this).css({
                'color': '#000',
                'border-color': '#0071C5'
            });
        }
    });
    $('.clrSgn').live('blur', function () {
        if ($(this).val() == '') {
            $(this).val(clrSgn);
            $(this).css({
                'color': '#666',
                'border-color': '#8E8F8F'
            });
        }
    });
    $('.typTxt').show();
    $('.typPass').hide();
    $('.typTxt').live('focus click', function () {
        $(this).hide();
        $('.typPass').show();
        $('.typPass').css({
            'color': '#000',
            'border-color': '#0071C5'
        });
        setTimeout(function () {
            $('.typPass').focus();
        }, 10);
    });
    $('.typPass').live('blur', function () {
        if ($('.typPass').val() == '') {
            $('.typTxt').show();
            $('.typPass').hide();
            $('.typTxt').css({
                'color': '#666',
                'border-color': '#8E8F8F'
            });
        }
    });
    // pdf link tooltip customization
    $(".pdf-view").bind("mouseenter", function (e) {
        $this = $(this);
        $this.attr("hasmouse", "true");
        var previewUrl = $this.attr('data-preview');
        var downloadUrl = $this.attr('data-download');
        var previewtext = $this.attr('data-previewtext');
        var downloadtext = $this.attr('data-downloadtext');
        var titletext = $this.attr('data-titletext');
        var fileSize = ' &nbsp; | &nbsp;' + $this.attr('data-size');
        var pdfLinks = '<a data-wap="{&quot;linktype&quot;:&quot;previewpdf&quot;}" href="' + previewUrl + '">' + previewtext + '</a> &nbsp; | &nbsp; <a data-wap="{&quot;linktype&quot;:&quot;downloadpdf&quot;}" href="' + downloadUrl + '" title="' + titletext + '">' + downloadtext + '</a>' + fileSize;
        var x = ($this.offset().left) - 70;
        var y = $this.offset().top;

        window.setTimeout(function () {
            if ($this.attr("hasmouse") == "true" && $(".tooltip-flyout").attr("hasmouse") != "true") {
                showTooltip('', x, y);
                $('.tooltip-flyout .content p').html(pdfLinks);
                if (bN == 'ie' && sbV < '8.0') {
                    $('.tooltip-flyout').width($('.tooltip-flyout .content p').width() + 11);
                }
                $('.tooltip-flyout').addClass('pdf-tip');
                $('.tooltip-flyout').addClass('wapwrapper');
                $('.tooltip-flyout').attr("data-component", "tooltip-flyout");
                $('.tooltip-flyout').attr("data-component-id", "1");
            }
        }, 100);
    });
    $(".pdf-view").bind("mouseleave", function (e) {
        if (!$(e.target).hasClass("pdf-view") || true) {
            $(this).attr("hasmouse", "");
        }
        window.setTimeout(function () {
            if ($(".tooltip-flyout").attr("hasmouse") != "true" && $(".pdf-view").attr("hasmouse") != "true") {
                hideTooltip();
                $('.tooltip-flyout .content p').html('');
                $('.tooltip-flyout').width('');
                $('.tooltip-flyout').removeClass('pdf-tip');
                $('.tooltip-flyout').removeClass('wapwrapper');
                $('.tooltip-flyout').removeAttr("data-component");
                $('.tooltip-flyout').removeAttr("data-component-id");
            }
        }, 250);
    });
    /* ------------------------------------- start of predictive search keyboard navigation ---------------------------------------------*/
    var searchBoxUserVal;
    $('#searchBox').focusin(function (e) {
        $('#predictive-search ul li').find('a').removeClass('result_hover');
        if (searchBoxUserVal !== null && ($('#searchBox').val() !== '')) {
            $('#searchBox').val(searchBoxUserVal);
        } else {
            $('#searchBox').val('');
        }
    });
    $('#searchBox').keydown(function (e) {
        searchBoxUserVal = $('#searchBox').val();
        if (e.keyCode == 40) {
            e.preventDefault();
            if ($('#bestResults').children().length > 0) {
                $('#bestResults a').focus().addClass('result_hover');
            } else {
                $('#otherResults li:first-child a').focus().addClass('result_hover');
            }
        } else if (e.keyCode == 38) {
            $('#otherResults li:last-child').children('a').focus().addClass('result_hover');
        }
    });
    $(document).delegate('#bestResults a.result_hover', 'keydown', function (e) {
        if (e.keyCode == 40) {
            e.preventDefault();
            $(this).removeClass('result_hover');
            $('#otherResults li:first-child a').focus().addClass('result_hover');
        } else if (e.keyCode == 38) {
            $(this).removeClass('result_hover');
            $('#searchBox').focus();
        }
    });
    $(document).delegate('#otherResults li a.result_hover', 'keydown', function (e) {
        if (e.keyCode == 40) {
            e.preventDefault();
            $(this).removeClass('result_hover');
            $(this).parent('li').next('li').children('a').focus().addClass('result_hover');
            if ($(this).parent('li').next('li').html() == null) {
                $('#searchBox').focus();
            }
        } else if (e.keyCode == 38) {
            $(this).parent('li').prev('li').children('a').focus().addClass('result_hover');
            $(this).removeClass('result_hover');
            if ($(this).parent('li').prev('li').html() == null) {
                if ($('#bestResults').children().length > 0) {
                    $('#bestResults a').focus().addClass('result_hover');
                } else {
                    //$('#otherResults li:last-child a').focus().addClass('result_hover');
                    $('#searchBox').focus();
                }
            }
        }
    });
    // key down

    $(document).delegate('#bestResults', 'mouseover', function (e) {
        searchBoxUserVal = $('#searchBox').val();
        $('#predictive-search ul li').find('a').removeClass('result_hover');
        $(this).children('a').focus().addClass('result_hover');
        if (searchBoxUserVal !== null) {
            $('#searchBox').val(searchBoxUserVal);
        }
    });

    $(document).delegate('#otherResults li', 'mouseover', function (e) {
        searchBoxUserVal = $('#searchBox').val();
        $('#predictive-search ul li').find('a').removeClass('result_hover');
        $(this).children('a').focus().addClass('result_hover');
        if (searchBoxUserVal !== null) {
            $('#searchBox').val(searchBoxUserVal);
        }
    }); /* ------------------------------------- end of predictive search keyboard navigation ---------------------------------------------*/

    /*------ Start of benchmark Performance component -------*/
    $('.collapsable .module-header').bind('click', function (e) {
        e.preventDefault();
        $(this).siblings('.module-content').slideToggle();
        $(this).children('a').toggleClass("close-button");
        $(this).parent('.collapsable').toggleClass('closed');
        //make sure it will hide the optional component is hidden
        if ($(this).parent('.collapsable').hasClass('closed')) {
            $(this).siblings('.module-content').children('.optionalComponent').hide();
            $(this).siblings('.module-content').children('.show-config-details').removeClass('toggle-view');
        }
    });
    $('.show-config-details').bind('click', function (e) {
        e.preventDefault();
        $(this).siblings('.optionalComponent').slideToggle();
        $(this).toggleClass('roll-up');
    });
    // shufffle if enabled
    if (!shuffleImg) {
        $('.rotatingShowcaseFeature li').shuffle();
    } /*------ End of Benchmark Performance Component -------*/

    // old browser
    if (bN == 'ff' && sbV >= 3 || bN == 'ie' && sbV >= 7 || bN == 'safari' && sbV >= 3 || bN == 'chrome' && sbV >= 5 || bN == 'yandex' && sbV >= 1) {
        $('body').addClass('new_browser');
    } else {
        $('body').addClass('old_browser');
    }

    // coverflow content
    var covFlow = [];
    $('ul.flow li canvas.content').each(function () {
        imgWidth = $(this).attr("src");
        covFlow.push(imgWidth);
    });
    $('ul.flow li img.content').each(function () {
        imgWidth = $(this).attr("src");
        covFlow.push(imgWidth);
    });
    //   $(covFlow).preload();
    $(".ContentFlow a.item, .ContentFlow .item a, .ContentFlow .item canvas").live("click", function (e) {
        if (!$(this).hasClass("active")) {
            e.preventDefault();
        }
    });

    // iframe height issue fix
    if ($('.iframe iframe').length) {
        $('.iframe iframe').load(function () {
            var h = $(this).contents().height();
            $(this).height(h);
        });
    }

    // tooltip implimentation for tools image icons
    $('.tool-images').delegate('.toolicontooltip', "mouseenter", function (e) {
        showTooltip($(this).data("title"), $(this));
    });

    $('.tool-images').delegate('.toolicontooltip', "mouseleave", function (e) {
        hideTooltip();
    });
    /*INC001389416 fix the element alignment and height issue in the collection product blade */
    $('.module-type-4 .panel ul').find('li:even').addClass('clearfloat');

}); //end of document ready function


function replaceVal() {
    $('#predictive-search ul li a').each(function (index) {
        $(this).focusin(function () {
            var myNewVal = $(this).text();
            $('#searchBox').val(myNewVal);
        });
    });
}

function rotatingshowcase() {
    $('#rotatingshowcase').click(function stopPropagation(e) {
        if(e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.returnValue = false;
        }
    });
    $('#rotatingshowcase a.next').click();
} /*------------------------------------------ close new sigin box ------------------------------------------*/

function closeSigninBox(duration, override) {
    if ($(".sign-in-link, .tooltip-flyout, .signin-nav-box").attr("hasmouse") != "true" || override) {
        $(".signin-nav-box").slideUp("fast", function () {
            $(".sign-in-link .link a").removeClass("selected");
            $(".currentpage").addClass("selected");
        });
        if ($(".sign-in-link .link.selected").length > 0) {
            var mywidth = $(".sign-in-link .link.selected").width();
            var myoffset = $(".sign-in-link .link.selected").offset();
            var myx = Math.round(myoffset.left);
            var moveto = myx + Math.round(mywidth / 2) - 4000;
            if ($(this).is(".sign-in-link") || $(this).is(".save")) {
                moveto -= $("#sign-in-link").width();
            }
            var mybgpos = moveto + "px top";
            $(".home.wrapper #header").css("background-position", mybgpos);
        } else {
            $(".home.wrapper #header").css("background-position", "");
        }
    }
}

function matchHeights() {
    /*
     * if ($(".filter-lists-container").length > 0 && $(".list-wrapper").length > 0) {
     * $(".filter-lists-container").height($(".list-wrapper").outerHeight() + 35);
     * $("#filter-list-list").height($(".list-wrapper").outerHeight() - (35 + 22));
     * $('#filter-list-list').jScrollPane(); } else if
     * ($(".filter-lists-container").length > 0 && $("#main-hero, .collection-hero
     * ").length > 0) { $(".filter-lists-container").height($("#main-hero,
     * .collection-hero ").outerHeight());
     * $("#filter-list-list").height($(".filter-lists-container").outerHeight() -
     * (34 + $("#main-hero, .collection-hero ").find(".title").outerHeight() +
     * $("#main-hero, .collection-hero ").find(".subtitle").outerHeight()));
     * $('#filter-list-list').jScrollPane(); }
     */
}

function nextBGCarousel() {
    if ($("#background-slider-items").position().left > ($(".slider-item").length - 4) * -57 && !$("#next-arrow").hasClass("disabled")) {
        var distance = 57 * 4;
        $(".slider-item").show();
        $("#background-slider-items").animate({
            left: '-=' + distance
        }, 'fast', function () {
            $(".slider-arrow").addClass("disabled");
            var leftPosition = $("#background-slider-items").position().left;
            var w = $("#background-slider-wrapper").innerWidth();
            // shrink the selected item if it is out of sight so it doesn't push
            // the others
            if (($(".slider-item.selected").position().left + leftPosition) < 0) {
                $(".slider-item.selected").css({
                    width: 55,
                    height: 36
                });
            } else {
                $(".slider-item.selected").css({
                    width: '',
                    height: ''
                });
            }
            // hide everything to the right of the 4th visible item
            $(".slider-item").each(function (index) {
                if (($(this).position().left + $(this).outerWidth() + leftPosition) > w) {
                    $(this).hide();
                }
            });
            if ($("#background-slider-items").position().left < 0) {
                $("#prev-arrow").removeClass("disabled");
            } else {
                $("#prev-arrow").addClass("disabled");
            }
            if ($("#background-slider-items").position().left <= ($(".slider-item").length - 4) * -57) {
                $("#next-arrow").addClass("disabled");
            } else {
                $("#next-arrow").removeClass("disabled");
            }
        });
    }
}

function prevBGCarousel() {
    if ($("#background-slider-items").position().left < 0 && !$("#prev-arrow").hasClass("disabled")) {
        $(".slider-arrow").addClass("disabled");
        var distance = 57 * 4;
        $(".slider-item").show();
        $("#background-slider-items").animate({
            left: '+=' + distance
        }, 'fast', function () {
            var leftPosition = $("#background-slider-items").position().left;
            var w = $("#background-slider-wrapper").innerWidth();
            // shrink the selected item if it is out of sight so it doesn't push
            // the others
            if (($(".slider-item.selected").position().left + leftPosition) < 0) {
                $(".slider-item.selected").css({
                    width: 55,
                    height: 36
                });
            } else {
                $(".slider-item.selected").css({
                    width: '',
                    height: ''
                });
            }
            // hide everything to the right of the 4th visible item
            $(".slider-item").each(function (index) {
                if (($(this).position().left + $(this).outerWidth() + leftPosition) > w) {
                    $(this).hide();
                }
            });
            if ($("#background-slider-items").position().left >= 0) {
                $("#prev-arrow").addClass("disabled");
            } else {
                $("#prev-arrow").removeClass("disabled");
            }
            if ($("#background-slider-items").position().left <= ($(".slider-item").length - 4) * -57) {
                $("#next-arrow").addClass("disabled");
            } else {
                $("#next-arrow").removeClass("disabled");
            }
        });
    }
}

function resetBGCarousel() {
    if ($("#background-slider-items").position().left < 0 && !$("#prev-arrow").hasClass("disabled")) {
        $(".slider-arrow").addClass("disabled");
        $(".slider-item").show();
        $("#background-slider-items").animate({
            left: 0
        }, 'fast', function () {
            var leftPosition = $("#background-slider-items").position().left;
            var w = $("#background-slider-wrapper").innerWidth();
            // shrink the selected item if it is out of sight so it doesn't push
            // the others
            if (($(".slider-item.selected").position().left + leftPosition) < 0) {
                $(".slider-item.selected").css({
                    width: 55,
                    height: 36
                });
            } else {
                $(".slider-item.selected").css({
                    width: '',
                    height: ''
                });
            }
            // hide everything to the right of the 4th visible item
            $(".slider-item").each(function (index) {
                if (($(this).position().left + $(this).outerWidth() + leftPosition) > w) {
                    $(this).hide();
                }
            });
            if ($("#background-slider-items").position().left >= 0) {
                $("#prev-arrow").addClass("disabled");
            } else {
                $("#prev-arrow").removeClass("disabled");
            }
            if ($("#background-slider-items").position().left <= ($(".slider-item").length - 4) * -57) {
                $("#next-arrow").addClass("disabled");
            } else {
                $("#next-arrow").removeClass("disabled");
            }
        });
    }
}

function changeBG(color, contentdiv, slideritem, headline, text, link) {
    if (!color) {
        var color = "#ffffff";
    }
    if (!contentdiv) {
        var contentdiv = "";
    }
    if (!headline) {
        var headline = "";
    }
    if (!text) {
        var text = "";
    }
    if (!link) {
        var link = "";
    }
    if (slideritem && !$(slideritem).hasClass("selected") && !$(slideritem).hasClass("disabled")) {
        $(".slider-item").addClass("disabled");
        var selectedImage, dot;
        $(".slider-item.selected").css({
            width: '',
            height: ''
        });
        $(".slider-item").each(function (index) {
            if ($(this).hasClass("selected")) {
                $(this).removeClass("selected");
                var selectedImage = $(this).attr("src");
                var dot = selectedImage.lastIndexOf('.75.49');
                if (dot >= 0) {
                    selectedImage = selectedImage.replace(".75.49", ".57.38");
                }
                $(this).attr("src", selectedImage);
            }
        });
        selectedImage = $(slideritem).attr("src");
        dot = selectedImage.lastIndexOf('.');
        if (dot >= 0 && selectedImage.indexOf(".75.49") == -1) {
            selectedImage = selectedImage.replace(".57.38", ".75.49");
        }
        $(slideritem).attr("src", selectedImage).addClass("selected");
        var $oldItem = $("#background-wrapper").children();
        if ($(contentdiv).hasClass("background-video")) {
            // $("#" +
            // INTEL_VIDEOPLAYER_ID).find("param[name=flashvars]").val("videoWidth=640&videoHeight=480&videoPath="
            // + $(content).attr("data") +
            // "&useFlashPlayerControls=true&debug=true");
            if ($("#background-video-player .videoContainer img").length > 0) {
                $("#background-video-player .videoContainer img").attr("src", $(contentdiv).attr("still"));
            } else {
                $("#background-video-player .videoContainer").prepend("<img alt='' src='" + $(contentdiv).attr("still") + "' />");
            }
            $("#background-video-player").hide().css("background-color", color).prependTo($("#background-wrapper")).fadeIn(fadeDuration, function () {
                if ($(contentdiv).hasClass("background-video")) {
                    intelVideoLoadVideo($(contentdiv).attr("data"));
                    hideHomeControls();
                    lockInterval = 1;
                    if (homeTimer) {
                        interval = window.clearTimeout(interval);
                    }
                    intelVideoPlay();
                } else if (controlshidden) {
                    showHomeControls();
                }
            });
            $("#background-wrapper").animate({
                backgroundColor: color
            }, fadeDuration);
            centerInParent($("#background-video-player"));
        } else {
            $(contentdiv).hide().css("background-color", color).prependTo($("#background-wrapper")).fadeIn(fadeDuration);
            $("#background-wrapper").animate({
                backgroundColor: color
            }, fadeDuration);
            centerInParent($(contentdiv));
        }
        $("#background-wrapper").animate({
            backgroundColor: color
        }, fadeDuration);
        centerInParent($(contentdiv));
        $oldItem.fadeOut(fadeDuration, function () {
            $oldItem.appendTo("#background-items");
            $(".slider-item").removeClass("disabled");
            $("body, #content").css("background-color", color);
        });
        if (headline != "") {
            $("#home-copy h2").text(headline);
            $("#home-copy h4 a").text(text).attr("href", link);
        }
    }
    if (!lockInterval && !noloop) {
        if (!homeTimer) {
            homeTimer = 1;
            interval = window.setTimeout(nextBG, transitionInterval);
        } else {
            interval = window.clearTimeout(interval);
            interval = window.setTimeout(nextBG, transitionInterval);
        }
    }
}

function nextBG() {
    var $next = $(".slider-item.selected").next(".slider-item");
    if ($(".slider-item.selected").next(".slider-item").length <= 0) {
        $next = $(".slider-item").first();
    }
    var bgID = $(".slider-item.selected").attr("onclick") + ",";
    bgID = bgID.replace("'#", "").replace("'", "").split(',')[1];
    if (bgID == carouselStart || noloop == 1) {
        lockInterval = 1;
        noloop = 1;
        if (homeTimer) {
            interval = window.clearTimeout(interval);
        }
    } else {
        if (carouselStart == "") {
            carouselStart = bgID;
        }
        var leftPosition = $("#background-slider-items").position().left;
        var w = $("#background-slider-wrapper").innerWidth();
        $next.show();
        if (($next.position().left + $next.outerWidth() + leftPosition) > w) {
            $("#next-arrow").trigger("click");
        } else if (($next.position().left + $next.outerWidth() + leftPosition) < 0) {
            resetBGCarousel();
        }
        $next.trigger("click");
    }
}

function centerInParent(element, topOffset, leftOffset) {
    if (!topOffset) {
        var topOffset = 0;
    }
    if (!leftOffset) {
        var leftOffset = 0;
    }
    var maxWidth = $(element).parent().outerWidth() - (leftOffset);
    var maxHeight = $(element).parent().outerHeight() - (topOffset);
    var elementTop = (maxHeight - $(element).innerHeight()) / 2;
    var elementLeft = (maxWidth - $(element).innerWidth()) / 2;
    $(element).css({
        position: 'absolute',
        top: elementTop,
        left: elementLeft
    });
}

function centerVertically(element, topOffset, maxHeight) {
    if (!topOffset) {
        var topOffset = 0;
    }
    if (!maxHeight) {
        var maxHeight = $(element).parent().outerHeight() - (topOffset);
    }
    var elementTop = (maxHeight - $(element).outerHeight()) / 2;
    $(element).css({
        position: 'absolute',
        top: elementTop,
        'margin-top': '0px',
        'margin-bottom': '0px'
    });
}

function closePreviews() {
    $(".list-item, .list-item-wrapper, .list-item-content-wrapper, .list-item-img-wrapper").removeClass("open").css("height", "");
    $(".view-btn, .close-btn, .list-item-descLong").addClass("hidden");
    $(".preview-btn, .open-btn, .list-item-desc").removeClass("hidden");
    matchHeights();
}

function closeMyIntel(duration, override) {
    if ($(".boxnav.myintelbg, .tooltip-flyout, .save, .my-intel-link").attr("hasmouse") != "true" || override) {
        $(".boxnav.myintelbg").slideUp("fast", function () {
            $(".my-intel-link, .save").removeClass("selected");
            $(".currentpage").addClass("selected");
            $(".register-myintel").removeClass("boxnav myintelbg").addClass("hidden");
            $(".savedcontent").addClass("boxnav myintelbg");
        });
        if ($(".my-intel .link.selected").length > 0) {
            var mywidth = $(".my-intel .link.selected").width();
            var myoffset = $(".my-intel .link.selected").offset();
            var myx = Math.round(myoffset.left);
            var moveto = myx + Math.round(mywidth / 2) - 4000;
            if ($(this).is(".my-intel-link") || $(this).is(".save")) {
                moveto -= $("#my-intel-count").width();
            }
            var mybgpos = moveto + "px top";
            $(".home.wrapper #header").css("background-position", mybgpos);
        } else {
            $(".home.wrapper #header").css("background-position", "");
        }
    }
}

function closeNavMenu(timeout, override) {
    if (!timeout) {
        var timeout = menuTimeout;
    }
    if (!override) {
        var override = false;
    }
    if (override) {
        $(".subnavtext").removeClass("active");
        $(".directory, .directory a, .sites a, .library a").removeClass("selected");
        $("#submenu-wrapper").slideUp(slideTimer);
        $(".boxnav.navbg").slideUp(slideTimer, function () {
            updateMenuHeight();
            $("#menu-wrapper").hide();
            if (!$(".my-intel-link, .save").hasClass("selected")) {
                $(".currentpage").addClass("selected");
            }
        });
        return;
    }
    window.setTimeout(function () {
        if ($(".boxnav.navbg").attr("hasmouse") != "true" && $(".directory").attr("hasmouse") != "true") {
            $(".subnavtext").removeClass("active");
            $(".directory, .directory a, .sites a, .library a").removeClass("selected");
            $("#submenu-wrapper").slideUp(slideTimer);
            $(".boxnav.navbg").slideUp(slideTimer, function () {
                updateMenuHeight();
                $("#menu-wrapper").hide();
                if (!$(".my-intel-link, .save").hasClass("selected")) {
                    $(".currentpage").addClass("selected");
                } /* reset the background-position */
                $("ul.subnav").css("background-position", "left bottom");
            });
        }
    }, timeout);
}

function updateMenuHeight() {
    $(".navright, .home #content, body").css("min-height", "");
    if ($("#submenu-wrapper:visible").length > 0) {
        $("#content").css("min-height", ($(".boxnav.navbg").outerHeight() + 60) + "px");
        $("body").css("min-height", ($(".boxnav.navbg").outerHeight() + 65) + "px");
        $(".navright, .navigation").css("min-height", "").css("min-height", ($(".boxnav.navbg").innerHeight() - 135));
        $("#background-player, #background-wrapper").height($("body").innerHeight());
        $(".ie_shadow").css("min-height", "").css("min-height", ($(".boxnav.navbg").innerHeight() - 45)).show(); //added for shadow in ie
    } else {
        $(".ie_shadow").hide().css("min-height", ""); //added for shadow in ie
        $("body, .home #content, #background-player, #background-wrapper, .navright, .navigation").css("min-height", "");
        $("#background-player, #background-wrapper").height($(".home.wrapper").innerHeight());
    }
    // re-center home page
    if ($("#background-player").length > 0) {
        centerInParent($("#background-wrapper").children(".background-item").first());
    }
}

function toggleFooterNews() {
    if ($("#footer .latest-news a").hasClass("open")) {
        stopTicker = true;
        $(".news-items").stop().css({
            left: ""
        });
        window.clearInterval(newsinterval);
        $("#footer .latest-news").animate({
            width: 68
        }, 'fast', function () {
            $("#footer .latest-news").addClass("closed")
        });
        $("#footer .latest-news a").removeClass("open");
    } else {
        scrolling = false;
        if (newsinterval != undefined) {
            newsinterval = window.clearInterval(newsinterval);
        }
        newsinterval = window.setInterval(scrollTicker, tickerScrollSpeed);
        $("#footer .latest-news a").addClass("open");
    }
}

function getBackButton(assocArray, defaultBack, ttype) {
    if (assocArray[ttype] != undefined) {
        return assocArray[ttype];
    }
    return defaultBack;
}

function closeLanguageMenu() {
    $("#language-chooser").slideUp(fadeDuration);
    $(".language").removeClass("selected");
}

function closeToolsMenu() {
    $("#tools-chooser").slideUp(fadeDuration);
    $(".tools").removeClass("selected");
}

function nextCarousel(container, carousel) {
    if ($(container).find(".carousel-item.active").length > 0) {
        $(container).find(".carousel-item").not(".active").css({
            left: $(container).innerWidth()+80
        });
        var carouselItemPrev = $(container).find(".carousel-item.active");
        carouselItemPrev.css({
            left: 0
        });
        var carouselDotNext = $(carousel).find(".carousel-dot.active").next(".carousel-dot");
        if (carouselDotNext.length == 0) {
            carouselDotNext = $(carousel).find(".carousel-dot").first();
        }
        var carouselItemNext = $(container).find(".carousel-item.active").next(".carousel-item");
        if (carouselItemNext.length == 0) {
            carouselItemNext = $(container).find(".carousel-item").first();
        }
        $(carousel).find(".carousel-dot").removeClass("active");
        $(carouselDotNext).addClass("active");
        if ($(carousel).find(".carousel-dot.active").prev(".carousel-dot").length == 0) {
            $(carousel).find('.carousel-left').css("visibility", "hidden");
        } else {
            $(carousel).find('.carousel-left').css("visibility", "");
        }
        if ($(carousel).find(".carousel-dot.active").next(".carousel-dot").length == 0) {
            $(carousel).find('.carousel-right').css("visibility", "hidden");
        } else {
            $(carousel).find('.carousel-right').css("visibility", "");
        }
        $(container).find(".carousel-item").css("z-index", "0").removeClass("active");
        carouselItemNext.css("z-index", "1");
        carouselItemPrev.animate({
            left: -($(container).innerWidth()+80)
        }, 500);
        carouselItemNext.animate({
            left: 0
        }, 500, function () {
            $(container).find(".carousel-item").not(carouselItemNext).removeClass("active").css({
                left: $(container).innerWidth()+80
            });
            carouselItemNext.addClass("active");
        });
    }
}

function prevCarousel(container, carousel) {
    if ($(container).find(".carousel-item.active").length > 0) {
        $(container).find(".carousel-item").not(".active").css({
            left: -($(container).innerWidth() + 80)
        });
        var carouselItemPrev = $(container).find(".carousel-item.active");
        carouselItemPrev.css({
            left: 0
        });
        var carouselDotNext = $(carousel).find(".carousel-dot.active").prev(".carousel-dot");
        if (carouselDotNext.length == 0) {
            carouselDotNext = $(carousel).find(".carousel-dot").last();
        }
        var carouselItemNext = $(container).find(".carousel-item.active").prev(".carousel-item");
        if (carouselItemNext.length == 0) {
            carouselItemNext = $(container).find(".carousel-item").last();
        }
        $(carousel).find(".carousel-dot").removeClass("active");
        $(carouselDotNext).addClass("active");
        if ($(carousel).find(".carousel-dot.active").prev(".carousel-dot").length == 0) {
            $(carousel).find('.carousel-left').css("visibility", "hidden");
        } else {
            $(carousel).find('.carousel-left').css("visibility", "");
        }
        if ($(carousel).find(".carousel-dot.active").next(".carousel-dot").length == 0) {
            $(carousel).find('.carousel-right').css("visibility", "hidden");
        } else {
            $(carousel).find('.carousel-right').css("visibility", "");
        }
        $(container).find(".carousel-item").css("z-index", "0").removeClass("active");
        carouselItemNext.css("z-index", "1");
        carouselItemPrev.animate({
            left: $(container).innerWidth()+80
        }, 500);
        carouselItemNext.animate({
            left: 0
        }, 500, function () {
            $(container).find(".carousel-item").not(carouselItemNext).removeClass("active").css({
                left: -($(container).innerWidth()+80)
            });
            carouselItemNext.addClass("active");
        });
    }
}

function scrollTicker() {
    if ((stopTicker != undefined && stopTicker) || scrolling) {
        return false;
    }
    scrolling = true;
    var currentItem = $("#footer .latest-news .news-item.selected").show();
    var nextItem = currentItem.next(".news-item");
    if (currentItem.next(".news-item").length <= 0) {
        nextItem = $("#footer .latest-news .news-item:first");
    }
    currentItem.fadeOut('fast', function () {
        currentItem.removeClass("selected");
        nextItem.fadeIn('fast', function () {
            nextItem.addClass("selected");
            stopTicker = false;
            scrolling = false;
        });
    });
}

function createTooltip(text) {
    var tooltipHTML = '<div class="tooltip-flyout hidden">';
    tooltipHTML += '<div class="top">';
    tooltipHTML += '<div class="right"></div>';
    tooltipHTML += '</div>';
    tooltipHTML += '<div class="middle">';
    tooltipHTML += '<div class="right">';
    tooltipHTML += '<div class="content">';
    tooltipHTML += '<p>' + text + '</p>';
    tooltipHTML += '</div>';
    tooltipHTML += '</div>';
    tooltipHTML += '</div>';
    tooltipHTML += '<div class="bottom">';
    tooltipHTML += '<div class="right"></div>';
    tooltipHTML += '</div>';
    tooltipHTML += '</div>';
    $('body').append(tooltipHTML);
    $(".tooltip-flyout").live("mouseenter", function (e) {
        $(this).attr("hasmouse", "true");
    });
    $(".tooltip-flyout").live("mouseleave", function (e) {
        $(this).attr("hasmouse", "");
        window.setTimeout(function () {
            hideTooltip();
        }, 100);
    });
    $(".tooltip-flyout").live("click", function (e) {
        if (!$(this).hasClass('pdf-tip')) {
            e.preventDefault();
            $(this).attr("hasmouse", "");
            hideTooltip();
        }
    });
}

function showTooltip(text, posx, posy) {
    if (!posx && !posy) {
        var posx = 0;
        var posy = 0;
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
    } else if (!posy) {
        var $this = $(posx);
        var posx = $this.offset().left + $this.outerWidth() / 4;
        var posy = $this.offset().top + ($this.outerHeight() / 2);
        $(".tooltip-flyout").die("click");
        $(".tooltip-flyout").live("click", function (e) {
            // $this.trigger("click");
            $(".tooltip-flyout").attr("hasmouse", "");
            hideTooltip();
        });
    }
    if ($(".tooltip-flyout").length < 1) {
        createTooltip(text);
    } else {
        $(".tooltip-flyout .content p").text(text);
    }
    $(".tooltip-flyout").offset({
        top: 0,
        left: 0
    });
    // set the bottom left corner of the tooltip to the center of the anchor
    $(".tooltip-flyout").removeClass("hidden").show();
    var left = posx - $(".tooltip-flyout").outerWidth() - 30;
    var top = posy + ($(".tooltip-flyout").outerHeight() / 3);
    if (top < 50) {
        top = 50;
    }
    if (left < 0) {
        left = 0;
    }
    $(".tooltip-flyout").css({
        top: top + "px",
        left: left + "px"
    });
}

function hideTooltip() {
    if ($(".tooltip-flyout").attr("hasmouse") != "true") {
        $(".tooltip-flyout").addClass("hidden").hide();
    }
}

function toggleChat() {
    $("#lpInvite").slideToggle();
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function setAgnosticCookie() {
    if (readCookie("usertype") == null) {
        createCookie("usertype", "agnostic", 60);
        setNavClassFromCookie();
    }
}

function setConsumerCookie() {
    createCookie("usertype", "consumer", 60);
    setNavClassFromCookie();
}

function setBusinessCookie() {
    createCookie("usertype", "business", 60);
    setNavClassFromCookie();
}

function setNavClassFromCookie() {
    var usertype = readCookie("usertype");
    if (usertype == "business") {
        $(".boxnav.navbg").addClass("business").removeClass("consumer");
        if ($(".slider-item.work").length > 0) {
            $(".slider-item.work").first().trigger("click");
        }
    } else {
        $(".boxnav.navbg").addClass("consumer").removeClass("business");
        if ($(".slider-item.home").length > 0) {
            $(".slider-item.home").first().trigger("click");
        }
    }
}

function hide_popUp() {
    $('#contBlockOverlay').remove();
    $('#hideBG').remove();
}
//mouse in slide down
$('.edNavBar li').live('mouseenter', function (e) {
    $(this).attr("hasmouse", "true");
    $(this).children('.dropdown-menu').slideDown('fast', function () {
        $(this).children('.drpdwn-content-block').find("a:last-child").addClass('last-child');
        $(".edNavBar").find('li').removeClass("active");
        $(this).parent('li').addClass("active");
    });
});
//mouse out slide up
$('.edNavBar li').live('mouseleave', function (e) {
    $(this).attr("hasmouse", "");
    $(this).children('.dropdown-menu').slideUp('fast', function () {
        $(this).children('.drpdwn-content-block').find("a:last-child").removeClass('last-child');
        $(".edNavBar").find('li').removeClass("active");
    });
});
var currentURLDirs = jQuery(location).attr('pathname').split("/");
if (currentURLDirs[1] == "content" && currentURLDirs[2] == "www" && currentURLDirs[3] == "cn" && currentURLDirs[4] == "zh") {
    $.getScript("/etc/designs/intel/us/en/js/radar.js");
}
$(function () {
    if ($('.conversation-bubble p').hasClass('not-shown') != "false") {
        $('#conversationFeature .marquee-module.images p.not-shown').parent().children('.comment').addClass('author');
    }
    
    // clear float for b2b hot-topics
    $('.module-type-4 .panel ul').find('li:even').addClass('clearfloat');
    
    // remove top margin for the li and clear element
    $('.sidebar-two-column-blade .panel ul, .module.related-comp .panel1 ul, .small-icon-2col .panel ul').each(function(){
        _this = $(this);
        _this.find('li:even').addClass('clear-element');
        _this.find('li:nth-child(-n+2)').addClass('no-margin-top');
    });
    
    $('.three-column-blade ul, .small-icon-3col ul').each(function(){
        _this = $(this);
        _this.find('li:nth-child(4n)').addClass('clear-element');
        _this.find('li:nth-child(-n+3)').addClass('no-margin-top');
    });
    
    // custom filtered component specific script moved from JSP
    if ($('.customfiltered').length) {
        if ($('.customfiltered .panel:visible > .carousel-item').length) {
            $('.customfiltered .panel:visible > .carousel-item').eqlHgts('blade', 'panel');
        }
        if ($('.customfiltered .content-items > .carousel-item').length) {
            $('.customfiltered .content-items > .carousel-item').eqlHgts('blade');
        }

        $('.customfiltered .sidebar a').on('click', function (e) {
            var relPanel = $(this).attr('rel'),
                selectedPannel = $(this).parents('.sidebar').siblings("."+ relPanel),
                styled;
            selectedPannel.filter(function () {
                return styled = $(this).attr('style');
            });
            if (typeof styled === "undefined" && selectedPannel.children().hasClass('carousel-item')) {
                selectedPannel.children('.carousel-item').eqlHgts('blade', 'panel');
            }
        });
    }

    /* related images & videos functionality moved from JSP */
    if ($('.video-carousal').length) {
        $(".video-carousal ul:first-child").addClass('active').css('left', '0');

        // this will dynamically change the width of the video carousal and make the elements align center if items less than 4
        $('.video-carousal ul:first-child').each(function (index) {
            if ($(this).find("li").length < 4) {
                var itm = ($(this).find("li").length) * ($(this).find("li").outerWidth() + 40);
                $(this).addClass('clearfix').css({
                    width: itm,
                    position: 'relative',
                    margin: '0 auto'
                });
            }
        });

        $(window).load(function () {
            if ($('.video-carousal > .carousel-item').length) {
                $('.video-carousal > .carousel-item').eqlHgts('blade');
            }
        });
    }

    //softwaretoolsblade - moved from JSP
    if ($('.softwaresupportblade').length) {
        //$('.softwaresupportblade ul.carousel-item li:even').addClass('clearfloat');

        if ($('.softwaresupportblade .panel:visible > .carousel-item').length) {
            $('.softwaresupportblade .panel:visible > .carousel-item').eqlHgts('blade', 'panel');
        }

        $('.softwaresupportblade .sidebar a').on('click', function (e) {
            var selectedPanel = $(this).attr('rel');
            $(this).closest('.module').find('.' + selectedPanel + ' > .carousel-item').eqlHgts('blade', 'panel');
        });
    }
    // benchmark blades carousal
    if ($('.benchmark-blade').length) {
        $('.benchmark-blade .module-content > .carousel-item').eqlHgts('blade');
    }
    // related blades carousal
    if ($('.related-comp').length) {
        $('.related-comp .panel:visible').find('.carousel-item').eqlHgts('blade', 'panel');       
        $('.related-comp .sidebar a').on('click', function (e) {
            var selectedPanel = $(this).attr('rel');
            $(this).closest('.module').find('.' + selectedPanel + ' > .carousel-item').eqlHgts('blade', 'panel');
        });
    }
    // technical document blades carousal
    if ($('.technicaldocument').length) {
        $('.technicaldocument .panel:visible > .carousel-item').eqlHgts('blade', 'panel');
    }
    // shop blades carousal
    if ($('.shop .module-content > .carousel-item').length){
        $('.shop .module-content > .carousel-item').eqlHgts('blade');
    }
    // relatedTechnologies
    if ($('.relatedtechnologies .module-content > .carousel-item').length){
        $('.relatedtechnologies .module-content > .carousel-item').eqlHgts('blade');
    }	
	// toolscollectionblade
    if ($('.tools-carousel > .carousel-item').length){
        $('.tools-carousel > .carousel-item').eqlHgts('blade');
    }     

	// b2bbladepicks
	
	if($('.b2bbladepicks .module-content > .carousel-item').length){
		$('.b2bbladepicks .module-content > .carousel-item').eqlHgts('blade');
	}
	
	
    // balde sidebar arrow animation
    var sidebarElements = ".module ul.sidebar li a";
    $(sidebarElements).on("click", function (e) {
        $(this).sidebarArrow();
    });
    $(sidebarElements + ".selected").each(function () {
        $(this).sidebarArrow();
    });
}); //end of document ready function

function titleURL(URLText) {
    document.getElementById('viewMoreId').href = URLText;
}
$(function() {
    $(".module-type-1 .sidebar a, .module-type-2 .sidebar a, .module-type-4 .sidebar a").bind("click", function(e) {
        e.preventDefault();
        $(this).addClass("selected").parent().siblings().find("a").removeClass("selected");
        $(this).closest(".module").find(".panel").eq($(this).closest("li").index()).addClass("selected").siblings().removeClass("selected");
            $(this).closest(".module").find(".panel .module-slider-wrap").recalcSlControls();
    });
    if($('.module-slider-wrap').length) {
      $(".module .module-slider-wrap").slider({speed : 300});
    }
});

/* plugin code moved to jquery.plugins.js*/

$(window).load(function () {
    
    var rrTotalHeight = $(".right-rail").height();
    var contentWellHeight = $(".content-well").height();
    
    if (!$("#content div.module").hasClass("in-author-mode")) {


        
        // Find total height of all right-rail components
        var rrComponentsHeight = $(".rr-components .rightrailcustomizable").outerHeight();
        
        // Compute Right Rail Height
        var rrTopHeight = $(".rr-top").outerHeight();
        var rrBottomHeight = $(".rr-bottom").outerHeight();
        
        // Set variables for number of pixels to scroll (customizable)
        var down = 200;
        var up = 200;
        
        // Set variables for scroll time in milliseconds (customizable)
        var scrollTime = 800;
        
        // Set variables for scrolling
        var currPos = 0;
        var viewableArea = 0;
        var minViewableArea = 50;
        var showControls = false;
    
        // This is the case where the right rail content is MORE than the content-well content
        if ((rrComponentsHeight + rrTopHeight + rrBottomHeight) > contentWellHeight) {
            showControls = true;
            viewableArea = contentWellHeight - (rrTopHeight + rrBottomHeight);
            if (viewableArea < minViewableArea) {
                viewableArea = minViewableArea;
            }
            if (contentWellHeight < (rrTopHeight + rrBottomHeight + viewableArea)) {
                contentWellHeight = rrTopHeight + rrBottomHeight + viewableArea;
            }
            $(".rr-components").height(viewableArea);
            $(".right-rail").height(contentWellHeight);
        } 
        
        // This is the case where the right rail content is LESS than the content-well content
        if ((rrComponentsHeight + rrTopHeight + rrBottomHeight) < contentWellHeight) {
            $(".right-rail").height(rrComponentsHeight + rrTopHeight + rrBottomHeight);
            viewableArea = rrComponentsHeight;
        }
        
        //alert("contentWellHeight: " + contentWellHeight + "\nrrTopHeight: " + rrTopHeight + "\nrrBottomHeight: " + rrBottomHeight + "\nrrComponentsHeight: " + rrComponentsHeight);
        //alert("rrTotalHeight: " + rrTotalHeight);
        
        if (showControls) {
            $(".controls").show();
            $(".rr-bottom .controls .scroll .down").bind("click", function(e) {
                if ($(this).hasClass("active")) {
                    if ((rrComponentsHeight-(currPos+viewableArea)) < down) {
                        currPos = rrComponentsHeight-viewableArea;
                        $(this).removeClass("active");
                    } else {
                        currPos += down;
                    }
                    if (currPos+viewableArea == rrComponentsHeight) {
                        $(this).removeClass("active");
                    }
                    $(".rr-components").animate({scrollTop: currPos}, scrollTime);
                    if (currPos != 0 && !($(".rr-bottom .controls .scroll .up").hasClass("active"))) {
                        $(".rr-bottom .controls .scroll .up").addClass("active");
                    }
                }   
            });
            $(".rr-bottom .controls .scroll .up").bind("click", function(e) {
                if ($(this).hasClass("active")) {
                    if (currPos < up) {
                        currPos = 0;
                        $(this).removeClass("active");
                    } else {
                        currPos -= up;
                    }
                    if (currPos == 0) {
                        $(this).removeClass("active");
                    }
                    $(".rr-components").animate({scrollTop: currPos}, scrollTime);
                    if (currPos != (rrComponentsHeight-viewableArea) && !($(".rr-bottom .controls .scroll .down").hasClass("active"))) {
                        $(".rr-bottom .controls .scroll .down").addClass("active");
                    }
                }    
            });
        }    
    }
    
    /***** This is for the right rail content binder *****/
    /*
     $(".rr-components .content-binder .cb-link").children("a").each(function(e) {
        if (checkIfVisited($(this).attr("href"))) {
            $(this).parent("div.cb-link").addClass("visited");
        }
    }); 
    
    $(".rr-components .content-binder .cb-link").children("a").bind("click", function(e) {
        $(this).parent("div.cb-link").addClass("visited");
        document.cookie = $(this).attr("href") + "=hasBeenVisited";
    }); */
    
    $(".rr-components .content-binder .cb-link.with-image").hover(
        function() {
            $(this).children("a").children("div.image-desc").show();
        },
        function() {
            $(this).children("a").children("div.image-desc").hide();
        }
    );
    
});
/*
var cookies = document.cookie.split(';');
function checkIfVisited (url) {
    for(var i=0; i<cookies.length; i++) {
        var value = cookies[i];
        if(value.indexOf(url) != -1){
             return true;
        }
    }
    return false;
} */
$(document).ready(function (e) {
    var panel;
    // set default value for panel
    var sideBar = $('.sidebar-compatible-products');
    if (sideBar.hasClass('has-sub')) {
        panel = sideBar.find(".sub-categories:first li:first a").attr("rel");
    } else {
        panel = sideBar.find(".category.first a").attr("rel");
    }

    function toggleCarouselVisibility() {
        var carouselLength = $("#compatibleProducts ." + panel).children("ul").length; 
        var carouselDot = '<img alt="selector" class="carousel-dot" src="/etc/designs/intel/us/en/images/blank.png">',
            carouselActiveDot = '<img alt="selector" class="carousel-dot active" src="/etc/designs/intel/us/en/images/blank.png">',
            carouselRight = '<img alt="next" class="carousel-right" src="/etc/designs/intel/us/en/images/carouselRight.png">',
            carouselLeft = '<img alt="next" class="carousel-left" src="/etc/designs/intel/us/en/images/carouselLeft.png" style="visibility: hidden;">';
        
        // to make sure always first pagination in the panel active.
        $("#compatibleProducts ." + panel).find('.carousel-item').removeClass('active').removeAttr('style');
        $("#compatibleProducts ." + panel).find('.carousel-item:first').addClass('active').css({
            'z-index': 1,
            'left': 0
        });

        $("#compatibleProducts .gallery-controls").css("visibility", "hidden");
        $("#compatibleProducts .gallery-controls .carousel-controls").attr("itemcontainer", "");
        $("#compatibleProducts .carousel-controls").html("");

        if (carouselLength > 1) {
            $("#compatibleProducts .gallery-controls").css("visibility", "visible");
            $("#compatibleProducts .gallery-controls .carousel-controls").attr("itemcontainer", "." + panel);
            $("#compatibleProducts .carousel-controls").append(carouselLeft + carouselActiveDot);
            while (carouselLength > 1) {
                $("#compatibleProducts .carousel-controls").append(carouselDot);
                carouselLength--;
            }
            $("#compatibleProducts .carousel-controls").append(carouselRight);
        }
    }

    //call to initialise carousel controles
    toggleCarouselVisibility();

    $("#compatibleProducts .module-content ul.sidebar-compatible-products.has-sub li.category").click(function () {
        $("#compatibleProducts .module-content ul.sidebar-compatible-products.has-sub li.sub-categories").hide();
        $("#compatibleProducts .module-content ul.sidebar-compatible-products.has-sub li.collapse").addClass("expand");
        $("#compatibleProducts .module-content ul.sidebar-compatible-products.has-sub li.collapse").removeClass("collapse");
        $(this).next().show();
        $("ul li:first a", $(this).next()).addClass("selected");
        panel = $("ul li:first a", $(this).next()).attr("rel");
        toggleCarouselVisibility();
        $(this).addClass("collapse");
        $(this).removeClass("expand");
    });

    $("#compatibleProducts .sidebar-compatible-products li.category a").click(function () {
        if ($(".sidebar-compatible-products").hasClass("has-sub")) {
            panel = $(this).attr("rel") + "-sub1";
        } else {
            panel = $(this).attr("rel");
        }
        $("#compatibleProducts .sidebar-compatible-products li.category a").removeClass("selected");
        $("#compatibleProducts div.panel").removeClass("selected");
        $(this).addClass("selected");
        $("." + panel).addClass("selected");
        toggleCarouselVisibility();
    });

    $("#compatibleProducts .sidebar-compatible-products li.sub-categories ul li a").click(function () {
        panel = $(this).attr("rel");
        $("#compatibleProducts .sidebar-compatible-products li.sub-categories ul li a").removeClass("selected");
        $("#compatibleProducts div.panel").removeClass("selected");
        $(this).addClass("selected");
        $("." + panel).addClass("selected");
        toggleCarouselVisibility();
    });

    /* END Compatible Products JS */
    
    /* Dynamic Heights of Navigation */

    var navHeight = 0;
    $('.productDetailNavigation .navItems ul.items').each(function (index) {
        if ($(this).height() > navHeight) {
            navHeight = $(this).height();
        }
    });
    
    $('.productDetailNavigation .navItems ul.items').each(function (index) {
        $(this).css('height', navHeight);
    });

    /* END Dynamic Heights of Navigation */

    /* Smooth Scroll JS */

    var scrollTimer = 600;
    var windowOffset = 150;
    var additionalOffset = 275;
    var scrollPosTo = 0;
    
    function collapseNav() {
        $('.productDetailNavigation .navItems').css('display', 'none');
        $('.pdtNavShowToggle p.expand').show();
        $('.pdtNavShowToggle p.close').hide();
        $('.pdtNavShowToggle').removeClass('close');
        $('.pdtNavShowToggle').addClass('expand');
    }

    $(".productDetailNavigation .navItems ul li a").bind('click', function (e) {
        $(".productDetailNavigation .navItems ul li.selected").removeClass("selected");
        $(".productDetailNavigation .navSection div.item.selected").removeClass("selected");
        $(this).parent().addClass("selected");
        $(this).parent().css('background', '');
        var index = $(this).parent().parent().index() + 1;
        $('.productDetailNavigation .navSection div.item:nth-child(' + index + ')').addClass("selected");

        if ($(this).parent().parent().parent().parent().hasClass("fixed")) {
            $('.productDetailNavigation.collapseVersion .navItems').css('display', 'none');
        }

        e.preventDefault();
        eleId = $(this).attr("href");

        if (eleId == "#") {
            scrollPosTo = 0;
        } else {
            if (!$(".productDetailNavigation").hasClass("fixed")) {
                scrollPosTo = $(eleId).position().top - windowOffset - additionalOffset;
            } else {
                scrollPosTo = $(eleId).position().top - windowOffset;
            }
        }
//        console.log(eleId + ": " + scrollPosTo);
        if (scrollPosTo < 0) { 
            scrollPosTo = 0;
        }
        collapseNav();
        $('html, body').stop().animate({
            scrollTop: scrollPosTo
        }, scrollTimer, 'swing');
//        console.log(scrollPosTo);
    });

    /* END Smooth Scroll JS */
    
    /* Sticky Navigation JS */
    if ($('.productDetailNavigation .navSection').length){ //check for the element existance and skip this block if it null
        var theLoc = $('.productDetailNavigation .navSection').position().top;
        $(window).scroll(function () {
            //console.log("theLoc: " + theLoc + "\nwindow: " + $(window).scrollTop());
            if (theLoc >= $(window).scrollTop()) {
                if ($('.productDetailNavigation').hasClass('fixed')) {
                    $('.productDetailNavigation').removeClass('fixed');                    
                }
            } else {
                if (!$('.productDetailNavigation').hasClass('fixed')) {
                    $('.productDetailNavigation').addClass('fixed');
                }
            }
        });
    }
    $('.pdtNavShowToggle p.close').click(function(e) {
        $('.productDetailNavigation .navItems').css('display', 'none');
        $('.pdtNavShowToggle p.expand').show();
        $(this).hide();
        $('.pdtNavShowToggle').removeClass('close');
        $('.pdtNavShowToggle').addClass('expand');
        $('.productDetailNavigation .navSection div.item').css('cursor', 'pointer');
    });
    $('.pdtNavShowToggle p.expand').click(function(e) {
        $('.productDetailNavigation .navItems').css('display', '');
        $('.pdtNavShowToggle p.close').show();
        $(this).hide();
        $('.pdtNavShowToggle').removeClass('expand');
        $('.pdtNavShowToggle').addClass('close');
        $('.productDetailNavigation .navSection div.item').css('cursor', 'text');
    });
    $('.productDetailNavigation .navSection div.item').click(function(e) {
        if ($('.pdtNavShowToggle p').hasClass('expand')) {
            $('.productDetailNavigation .navItems').css('display', '');
            $('.pdtNavShowToggle p.close').show();
            $('.pdtNavShowToggle p.expand').hide();
            $('.pdtNavShowToggle').removeClass('expand');
            $('.pdtNavShowToggle').addClass('close');
            $('.productDetailNavigation .navSection div.item').css('cursor', 'text');
        }
    });
    
    /* END Sticky Navigation JS */
    
});
/**
 * ezMark (Minified) - A Simple Checkbox and Radio button Styling plugin. This plugin allows you to use a custom Image for 
 * Checkbox or Radio button. Its very simple, small and easy to use.
 * 
 * Copyright (c) Abdullah Rubiyath <http://www.itsalif.info/>.
 * Released under MIT License
 * 
 * @author Abdullah Rubiyath
 * @version 1.0
 * @date June 27, 2010
 */
(function($){$.fn.ezMark=function(options){options=options||{};var defaultOpt={checkboxCls:options.checkboxCls||'ez-checkbox',radioCls:options.radioCls||'ez-radio',checkedCls:options.checkedCls||'ez-checked',selectedCls:options.selectedCls||'ez-selected',hideCls:'ez-hide'};return this.each(function(){var $this=$(this);var wrapTag=$this.attr('type')=='checkbox'?'<div class="'+defaultOpt.checkboxCls+'">':'<div class="'+defaultOpt.radioCls+'">';if($this.attr('type')=='checkbox'){$this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function(){if($(this).is(':checked')){$(this).parent().addClass(defaultOpt.checkedCls);}
else{$(this).parent().removeClass(defaultOpt.checkedCls);}});if($this.is(':checked')){$this.parent().addClass(defaultOpt.checkedCls);}}
else if($this.attr('type')=='radio'){$this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function(){$('input[name="'+$(this).attr('name')+'"]').each(function(){if($(this).is(':checked')){$(this).parent().addClass(defaultOpt.selectedCls);}else{$(this).parent().removeClass(defaultOpt.selectedCls);}});});if($this.is(':checked')){$this.parent().addClass(defaultOpt.selectedCls);}}});}})(jQuery);


}
/*
     FILE ARCHIVED ON 18:56:06 Oct 02, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:22:01 Jun 21, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 280.045
  exclusion.robots: 0.124
  exclusion.robots.policy: 0.115
  cdx.remote: 0.059
  esindex: 0.009
  LoadShardBlock: 248.206 (3)
  PetaboxLoader3.datanode: 165.255 (4)
  PetaboxLoader3.resolve: 135.46 (3)
  load_resource: 77.84
*/
