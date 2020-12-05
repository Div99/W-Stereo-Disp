(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.K=b.prototype}
function oa(){this.o=!1;this.i=null;this.l=void 0;this.f=1;this.j=this.m=0;this.A=this.h=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.B=function(a){this.l=a};
function qa(a,b){a.h={ya:b,za:!0};a.f=a.m||a.j}
oa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function x(a,b,c){a.f=c;return{value:b}}
oa.prototype.N=function(a){this.f=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.j=c)}
function sa(a){a.m=0;var b=a.h.ya;a.h=null;return b}
function ta(a){this.f=new oa;this.h=a}
function va(a,b){pa(a.f);var c=a.f.i;if(c)return wa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return xa(a)}
function wa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.o=!1,e;var f=e.value}catch(g){return a.f.i=null,qa(a.f,g),xa(a)}a.f.i=null;d.call(a.f,f);return xa(a)}
function xa(a){for(;a.f.f;)try{var b=a.h(a.f);if(b)return a.f.o=!1,{value:b.value,done:!1}}catch(c){a.f.l=void 0,qa(a.f,c)}a.f.o=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.za)throw b.ya;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function ya(a){this.next=function(b){pa(a.f);a.f.i?b=wa(a,a.f.i.next,b,a.f.B):(a.f.B(b),b=xa(a));return b};
this["throw"]=function(b){pa(a.f);a.f.i?b=wa(a,a.f.i["throw"],b,a.f.B):(qa(a.f,b),b=xa(a));return b};
this["return"]=function(b){return va(a,b)};
this[Symbol.iterator]=function(){return this}}
function za(a,b){var c=new ya(new ta(b));na&&a.prototype&&na(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ba="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)y(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ba});
t("Promise",function(a){function b(g){this.f=0;this.i=void 0;this.h=[];this.o=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.l()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.I),reject:g(this.l)}};
b.prototype.I=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.T(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.H(g):this.m(g)}};
b.prototype.H=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.U(h,g):this.m(g)};
b.prototype.l=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.i=h;2===this.f&&this.J();this.A()};
b.prototype.J=function(){var g=this;e(function(){if(g.D()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.A=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.T=function(g){var h=this.j();g.ia(h.resolve,h.reject)};
b.prototype.U=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(w){try{l(q(w))}catch(B){m(B)}}:r}
var l,m,p=new b(function(q,r){l=q;m=r});
this.ia(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ia=function(g,h){function k(){switch(l.f){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ia(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(w){return function(B){q[w]=B;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).ia(p(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ca(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ca(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ca(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ca(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Aa(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)y(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!y(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!y(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&y(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&y(k,g)&&y(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&y(k,g)&&y(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.h[l];if(m&&y(h.h,l))for(var p=0;p<m.length;p++){var q=m[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:p,C:q}}return{id:l,list:m,index:-1,C:void 0}}
function e(h){this.h={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.h[l.id]=[]);l.C?l.C.value=k:(l.C={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.C),this.f.previous.next=l.C,this.f.previous=l.C,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.C&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.h[h.id],h.C.previous.next=h.C.next,h.C.next.previous=h.C.previous,h.C.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.h={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).C};
e.prototype.get=function(h){return(h=d(this,h).C)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)y(b,d)&&c.push(b[d]);return c}});
var z=this||self;function A(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Da(a){if(a&&a!=z)return Ea(a.document);null===Fa&&(Fa=Ea(z.document));return Fa}
var Ga=/^[\w+/_-]+[=]{0,2}$/,Fa=null;function Ea(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ga.test(a)?a:""}
function C(a,b){for(var c=a.split("."),d=b||z,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ha(){}
function Ia(a){a.ra=void 0;a.getInstance=function(){return a.ra?a.ra:a.ra=new a}}
function Ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ka(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function La(a){return Object.prototype.hasOwnProperty.call(a,Ma)&&a[Ma]||(a[Ma]=++Na)}
var Ma="closure_uid_"+(1E9*Math.random()>>>0),Na=0;function Oa(a,b,c){return a.call.apply(a.bind,arguments)}
function Pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E=Oa:E=Pa;return E.apply(null,arguments)}
function Qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function G(){return Date.now()}
function Ra(a,b){A(a,b,void 0)}
function H(a,b){function c(){}
c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ek=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
;function Ta(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ta);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
H(Ta,Error);Ta.prototype.name="CustomError";function Ua(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.h=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ya=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Za=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function $a(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function ab(a,b){var c=Wa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function db(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function eb(a,b){var c=Ka(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function fb(a){var b=gb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hb(a){for(var b in a)return!1;return!0}
function ib(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lb(a[c]);return b}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ob;function pb(){if(void 0===ob){var a=null,b=z.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Sa,createScript:Sa,createScriptURL:Sa})}catch(c){z.console&&z.console.error(c.message)}ob=a}else ob=a}return ob}
;function qb(a,b){this.f=b===rb?a:""}
qb.prototype.W=!0;qb.prototype.V=function(){return this.f.toString()};
qb.prototype.qa=!0;qb.prototype.ma=function(){return 1};
function sb(a){if(a instanceof qb&&a.constructor===qb)return a.f;Ja(a);return"type_error:TrustedResourceUrl"}
var rb={};var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ub(a,b){if(b)a=a.replace(vb,"&amp;").replace(wb,"&lt;").replace(xb,"&gt;").replace(yb,"&quot;").replace(zb,"&#39;").replace(Ab,"&#0;");else{if(!Bb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(vb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(wb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(xb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(yb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(zb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ab,"&#0;"))}return a}
var vb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,Bb=/[\x00&<>"']/;function Cb(a,b){return a<b?-1:a>b?1:0}
;function J(a,b){this.f=b===Db?a:""}
J.prototype.W=!0;J.prototype.V=function(){return this.f.toString()};
J.prototype.qa=!0;J.prototype.ma=function(){return 1};
function Eb(a){if(a instanceof J&&a.constructor===J)return a.f;Ja(a);return"type_error:SafeUrl"}
var Gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof J)return a;a="object"==typeof a&&a.W?a.V():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return new J(a,Db)}
var Db={},Kb=new J("about:invalid#zClosurez",Db);var Lb;a:{var Mb=z.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function K(a){return-1!=Lb.indexOf(a)}
;function Ob(a,b,c){this.f=c===Pb?a:"";this.h=b}
Ob.prototype.qa=!0;Ob.prototype.ma=function(){return this.h};
Ob.prototype.W=!0;Ob.prototype.V=function(){return this.f.toString()};
var Pb={};function Qb(a,b){var c=pb();c=c?c.createHTML(a):a;return new Ob(c,b,Pb)}
;function Rb(a,b){var c=b instanceof J?b:Jb(b);a.href=Eb(c)}
function Sb(a,b){a.src=sb(b);var c=Da(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Tb(a){return a=ub(a,void 0)}
function Ub(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zb(a){var b=[],c;for(c in a)Yb(c,a[c],b);return b.join("&")}
function $b(a,b){var c=Zb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ac=/#|$/;function bc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function cc(a){cc[" "](a);return a}
cc[" "]=Ha;var dc=K("Opera"),ec=K("Trident")||K("MSIE"),fc=K("Edge"),gc=K("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),hc=-1!=Lb.toLowerCase().indexOf("webkit")&&!K("Edge");function ic(){var a=z.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){var a=Lb;if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,pc={},qc;if(z.document&&ec){var rc=ic();qc=rc?rc:parseInt(nc,10)||void 0}else qc=void 0;var sc=qc;var tc=K("Firefox")||K("FxiOS"),uc=K("iPhone")&&!K("iPod")&&!K("iPad")||K("iPod"),vc=K("iPad");var wc={},xc=null;
function yc(a){var b=3;Ka(a);void 0===b&&(b=0);if(!xc){xc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));wc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===xc[h]&&(xc[h]=g)}}}b=wc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var L=window;function zc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Bc[c])c=Bc[c];else{c=String(c);if(!Bc[c]){var f=/function\s+([^\(]+)/m.exec(c);Bc[c]=f?f[1]:"[Anonymous]"}c=Bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Ac(a,b){b||(b={});b[Cc(a)]=!0;var c=a.stack||"",d=a.fk;d&&!b[Cc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Ac(d,b));return c}
function Cc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Bc={};function Dc(a){this.f=a||{cookie:""}}
n=Dc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.pk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Aa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=tb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Aa:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=tb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ec=new Dc("undefined"==typeof document?null:document);var Fc=!ec||9<=Number(sc);function Gc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Gc.prototype;n.clone=function(){return new Gc(this.x,this.y)};
n.equals=function(a){return a instanceof Gc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Hc(a,b){this.width=a;this.height=b}
n=Hc.prototype;n.clone=function(){return new Hc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ic(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Jc(a,b){db(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Kc.hasOwnProperty(d)?a.setAttribute(Kc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Kc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Lc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Fc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Tb(g.name),'"');if(g.type){f.push(' type="',Tb(g.type),'"');var h={};nb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Mc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Jc(f,g));2<d.length&&Nc(e,f,d);return f}
function Nc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ka(f)||D(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(D(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}I(g?bb(f):f,d)}}}
function Mc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Oc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Pc(a){var b=Qc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Rc(){var a=[];Pc(function(b){a.push(b)});
return a}
var Qc={Gb:"allow-forms",Hb:"allow-modals",Ib:"allow-orientation-lock",Jb:"allow-pointer-lock",Kb:"allow-popups",Lb:"allow-popups-to-escape-sandbox",Mb:"allow-presentation",Nb:"allow-same-origin",Ob:"allow-scripts",Pb:"allow-top-navigation",Qb:"allow-top-navigation-by-user-activation"},Sc=Va(function(){return Rc()});
function Tc(){var a=Mc(document,"IFRAME"),b={};I(Sc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function M(){this.h=this.h;this.B=this.B}
M.prototype.h=!1;M.prototype.dispose=function(){this.h||(this.h=!0,this.u())};
function Uc(a,b){a.h?b():(a.B||(a.B=[]),a.B.push(b))}
M.prototype.u=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Vc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ka(d)?Wc.apply(null,d):Vc(d)}}
;var Xc={};function Yc(a){if(a!==Xc)throw Error("Bad secret");}
;function Zc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var $c;function ad(){}
function bd(a,b){Yc(b);this.f=a}
v(bd,ad);bd.prototype.toString=function(){return this.f.toString()};
var cd=null===($c=Zc())||void 0===$c?void 0:$c.emptyHTML;new bd(null!==cd&&void 0!==cd?cd:"",Xc);var dd;function ed(){}
function fd(a,b){Yc(b);this.f=a}
v(fd,ed);fd.prototype.toString=function(){return this.f.toString()};
var gd=null===(dd=Zc())||void 0===dd?void 0:dd.emptyScript;new fd(null!==gd&&void 0!==gd?gd:"",Xc);function hd(){}
function id(a,b){Yc(b);this.f=a}
v(id,hd);id.prototype.toString=function(){return this.f};new id("about:blank",Xc);new id("about:invalid#zTSz",Xc);function jd(a){kd();var b=pb();a=b?b.createScriptURL(a):a;return new qb(a,rb)}
var kd=Ha;function ld(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var md=(new Date).getTime();function nd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function od(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],B=e[2],F=e[3],Fb=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var ua=F^w&(B^F);var oc=1518500249}else ua=w^B^F,oc=1859775393;else 60>r?(ua=w&B|F&(w|B),oc=2400959708):(ua=w^B^F,oc=3395469782);ua=((p<<5|p>>>27)&4294967295)+ua+Fb+oc+q[r]&4294967295;Fb=F;F=B;B=(w<<30|w>>>2)&4294967295;w=p;p=ua}e[0]=e[0]+p&4294967295;e[1]=e[1]+
w&4294967295;e[2]=e[2]+B&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Fb&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],w=0,B=p.length;w<B;++w)r.push(p.charCodeAt(w));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64;for(;r<q;)if(f[l++]=p[r++],m++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64}
function d(){var p=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var w=24;0<=w;w-=8)p[q++]=e[r]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ma:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function pd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),qd(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=qd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function qd(a){var b=od();b.update(a);return b.Ma().toLowerCase()}
;function rd(a){var b=nd(String(z.location.href)),c;(c=z.__SAPISID||z.__APISID||z.__OVERRIDE_SID)?c=!0:(c=new Dc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,c||(c=new Dc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(z.location.href);return d&&c&&b?[b,pd(nd(d),
c,a||null)].join(" "):null}return null}
;function sd(){this.h=[];this.f=-1}
sd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.f=-1)};
sd.prototype.get=function(a){return!!this.h[a]};
function td(a){-1==a.f&&(a.f=Za(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function ud(a,b){this.i=a;this.j=b;this.h=0;this.f=null}
ud.prototype.get=function(){if(0<this.h){this.h--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function vd(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.f,a.f=b)}
;function wd(a){z.setTimeout(function(){throw a;},0)}
var xd;
function yd(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=Mc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=E(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.va;c.va=null;e()}};
return function(e){d.next={va:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function zd(){this.h=this.f=null}
var Bd=new ud(function(){return new Ad},function(a){a.reset()});
zd.prototype.add=function(a,b){var c=Bd.get();c.set(a,b);this.h?this.h.next=c:this.f=c;this.h=c};
zd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Ad(){this.next=this.scope=this.f=null}
Ad.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Ad.prototype.reset=function(){this.next=this.scope=this.f=null};function Cd(a,b){Dd||Ed();Fd||(Dd(),Fd=!0);Gd.add(a,b)}
var Dd;function Ed(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);Dd=function(){a.then(Hd)}}else Dd=function(){var b=Hd;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!K("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(xd||(xd=yd()),xd(b)):z.setImmediate(b)}}
var Fd=!1,Gd=new zd;function Hd(){for(var a;a=Gd.remove();){try{a.f.call(a.scope)}catch(b){wd(b)}vd(Bd,a)}Fd=!1}
;function Id(){this.h=-1}
;function Jd(){this.h=64;this.f=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.h;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
H(Jd,Id);Jd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function Kd(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Jd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.h,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Kd(this,a,d),d+=this.h;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.h){Kd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.h){Kd(this,e);f=0;break}}this.i=f;this.l+=b}};
Jd.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.h-(this.i-56));for(var c=this.h-1;56<=c;c--)this.m[c]=b&255,b/=256;Kd(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Ld="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function Md(){}
Md.prototype.next=function(){throw Ld;};
Md.prototype.L=function(){return this};
function Nd(a){if(a instanceof Md)return a;if("function"==typeof a.L)return a.L(!1);if(Ka(a)){var b=0,c=new Md;c.next=function(){for(;;){if(b>=a.length)throw Ld;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Od(a,b){if(Ka(a))try{I(a,b,void 0)}catch(c){if(c!==Ld)throw c;}else{a=Nd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ld)throw c;}}}
function Pd(a){if(Ka(a))return bb(a);a=Nd(a);var b=[];Od(a,function(c){b.push(c)});
return b}
;function Qd(a,b){this.i={};this.f=[];this.P=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Qd)for(c=Rd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Rd(a){Sd(a);return a.f.concat()}
n=Qd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.h!=a.h)return!1;var c=b||Td;Sd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Td(a,b){return a===b}
n.isEmpty=function(){return 0==this.h};
n.clear=function(){this.i={};this.P=this.h=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.h--,this.P++,this.f.length>2*this.h&&Sd(this),!0):!1};
function Sd(a){if(a.h!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.h!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.h++,this.f.push(a),this.P++);this.i[a]=b};
n.forEach=function(a,b){for(var c=Rd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Qd(this)};
n.L=function(a){Sd(this);var b=0,c=this.P,d=this,e=new Md;e.next=function(){if(c!=d.P)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Ld;var f=d.f[b++];return a?f:d.i[f]};
return e};function Ud(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Vd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Wd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Ud(a).match(/\S+/g)||[],c=0<=Wa(c,b);return c}
function Xd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Wd(a,"inverted-hdpi")&&Vd(a,Xa(a.classList?a.classList:Ud(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Yd=!ec||9<=Number(sc),Zd;
if(Zd=ec){var $d;if(Object.prototype.hasOwnProperty.call(pc,"9"))$d=pc["9"];else{for(var ae=0,be=tb(String(nc)).split("."),ce=tb("9").split("."),de=Math.max(be.length,ce.length),ee=0;0==ae&&ee<de;ee++){var fe=be[ee]||"",ge=ce[ee]||"";do{var he=/(\d*)(\D*)(.*)/.exec(fe)||["","","",""],ie=/(\d*)(\D*)(.*)/.exec(ge)||["","","",""];if(0==he[0].length&&0==ie[0].length)break;ae=Cb(0==he[1].length?0:parseInt(he[1],10),0==ie[1].length?0:parseInt(ie[1],10))||Cb(0==he[2].length,0==ie[2].length)||Cb(he[2],ie[2]);
fe=he[3];ge=ie[3]}while(0==ae)}$d=pc["9"]=0<=ae}Zd=!$d}var je=Zd,ke=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",Ha,b),z.removeEventListener("test",Ha,b)}catch(c){}return a}();function le(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.h=!1}
le.prototype.stopPropagation=function(){this.h=!0};
le.prototype.preventDefault=function(){this.defaultPrevented=!0};function me(a,b){le.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
H(me,le);var ne={2:"touch",3:"pen",4:"mouse"};
me.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(gc){a:{try{cc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ne[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&this.preventDefault()};
me.prototype.stopPropagation=function(){me.K.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
me.prototype.preventDefault=function(){me.K.preventDefault.call(this);var a=this.i;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,je)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var oe="closure_listenable_"+(1E6*Math.random()|0),pe=0;function qe(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.ja=e;this.key=++pe;this.X=this.ha=!1}
function re(a){a.X=!0;a.listener=null;a.f=null;a.src=null;a.ja=null}
;function se(a){this.src=a;this.listeners={};this.f=0}
se.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=te(a,b,d,e);-1<g?(b=a[g],c||(b.ha=!1)):(b=new qe(b,this.src,f,!!d,e),b.ha=c,a.push(b));return b};
se.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=te(e,b,c,d);return-1<b?(re(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function ue(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(re(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function te(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.ja==d)return e}return-1}
;var ve="closure_lm_"+(1E6*Math.random()|0),we={},xe=0;function ye(a,b,c,d,e){if(d&&d.once)ze(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.f.add(String(b),c,!1,D(d)?!!d.capture:!!d,e):Be(a,b,c,!1,d,e)}
function Be(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=Ce(a);h||(a[ve]=h=new se(a));c=h.add(b,c,d,g,f);if(!c.f){d=De();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)ke||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ee(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xe++}}
function De(){var a=Fe,b=Yd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.f.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):Be(a,b,c,!0,d,e)}
function Ge(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ge(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=Ae(c),a&&a[oe])?a.f.remove(String(b),c,d,e):a&&(a=Ce(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=te(b,c,d,e)),(c=-1<a?b[a]:null)&&He(c))}
function He(a){if("number"!==typeof a&&a&&!a.X){var b=a.src;if(b&&b[oe])ue(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ee(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xe--;(c=Ce(b))?(ue(c,a),0==c.f&&(c.src=null,b[ve]=null)):re(a)}}}
function Ee(a){return a in we?we[a]:we[a]="on"+a}
function Ie(a,b,c,d){var e=!0;if(a=Ce(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.X&&(f=Je(f,d),e=e&&!1!==f)}return e}
function Je(a,b){var c=a.listener,d=a.ja||a.src;a.ha&&He(a);return c.call(d,b)}
function Fe(a,b){if(a.X)return!0;if(!Yd){var c=b||C("window.event"),d=new me(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.h&&0<=g;g--){d.f=c[g];var h=Ie(c[g],f,!0,d);e=e&&h}for(g=0;!d.h&&g<c.length;g++)d.f=c[g],h=Ie(c[g],f,!1,d),e=e&&h}return e}return Je(a,new me(b,this))}
function Ce(a){a=a[ve];return a instanceof se?a:null}
var Ke="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ae(a){if("function"===typeof a)return a;a[Ke]||(a[Ke]=function(b){return a.handleEvent(b)});
return a[Ke]}
;function Le(){M.call(this);this.f=new se(this);this.m=this;this.j=null}
H(Le,M);Le.prototype[oe]=!0;Le.prototype.addEventListener=function(a,b,c,d){ye(this,a,b,c,d)};
Le.prototype.removeEventListener=function(a,b,c,d){Ge(this,a,b,c,d)};
Le.prototype.dispatchEvent=function(a){var b=this.j;if(b){var c=[];for(var d=1;b;b=b.j)c.push(b),++d}b=this.m;d=a.type||a;if("string"===typeof a)a=new le(a,b);else if(a instanceof le)a.target=a.target||b;else{var e=a;a=new le(d,b);nb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.h&&0<=f;f--){var g=a.f=c[f];e=Me(g,d,!0,a)&&e}a.h||(g=a.f=b,e=Me(g,d,!0,a)&&e,a.h||(e=Me(g,d,!1,a)&&e));if(c)for(f=0;!a.h&&f<c.length;f++)g=a.f=c[f],e=Me(g,d,!1,a)&&e;return e};
Le.prototype.u=function(){Le.K.u.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,re(d[e]);delete a.listeners[c];a.f--}}this.j=null};
function Me(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.X&&g.capture==c){var h=g.listener,k=g.ja||g.src;g.ha&&ue(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ne(a){var b=[];Oe(new Pe,a,b);return b.join("")}
function Pe(){}
function Oe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Oe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Qe(d,c),c.push(":"),Oe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Qe(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Re={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Se=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Qe(a,b){b.push('"',a.replace(Se,function(c){var d=Re[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Re[c]=d);return d}),'"')}
;function Te(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Ue(a){this.f=0;this.o=void 0;this.j=this.h=this.i=null;this.l=this.m=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){Ve(b,2,c)},function(c){Ve(b,3,c)})}catch(c){Ve(this,3,c)}}
function We(){this.next=this.context=this.onRejected=this.h=this.f=null;this.i=!1}
We.prototype.reset=function(){this.context=this.onRejected=this.h=this.f=null;this.i=!1};
var Xe=new ud(function(){return new We},function(a){a.reset()});
function Ye(a,b,c){var d=Xe.get();d.h=a;d.onRejected=b;d.context=c;return d}
function Ze(a){return new Ue(function(b,c){c(a)})}
Ue.prototype.then=function(a,b,c){return $e(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ue.prototype.$goog_Thenable=!0;function af(a,b){return $e(a,null,b,void 0)}
Ue.prototype.cancel=function(a){if(0==this.f){var b=new bf(a);Cd(function(){cf(this,b)},this)}};
function cf(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?cf(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):df(c),ef(c,e,3,b)))}a.i=null}else Ve(a,3,b)}
function ff(a,b){a.h||2!=a.f&&3!=a.f||gf(a);a.j?a.j.next=b:a.h=b;a.j=b}
function $e(a,b,c,d){var e=Ye(null,null,null);e.f=new Ue(function(f,g){e.h=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof bf?g(h):f(k)}catch(l){g(l)}}:g});
e.f.i=a;ff(a,e);return e.f}
Ue.prototype.A=function(a){this.f=0;Ve(this,2,a)};
Ue.prototype.D=function(a){this.f=0;Ve(this,3,a)};
function Ve(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.D;if(d instanceof Ue){ff(d,Ye(e||Ha,f||null,a));var g=!0}else if(Te(d))d.then(e,f,a),g=!0;else{if(D(d))try{var h=d.then;if("function"===typeof h){hf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.f=b,a.i=null,gf(a),3!=b||c instanceof bf||jf(a,c))}}
function hf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function gf(a){a.m||(a.m=!0,Cd(a.B,a))}
function df(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
Ue.prototype.B=function(){for(var a;a=df(this);)ef(this,a,this.f,this.o);this.m=!1};
function ef(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,kf(b,c,d);else try{b.i?b.h.call(b.context):kf(b,c,d)}catch(e){lf.call(null,e)}vd(Xe,b)}
function kf(a,b,c){2==b?a.h.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function jf(a,b){a.l=!0;Cd(function(){a.l&&lf.call(null,b)})}
var lf=wd;function bf(a){Ta.call(this,a)}
H(bf,Ta);bf.prototype.name="cancel";function N(a){M.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.i={};this.o=!!a}
H(N,M);n=N.prototype;n.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function mf(a,b,c,d){if(b=a.i[b]){var e=a.f;(b=$a(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Y(b)}}
n.Y=function(a){var b=this.f[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.f[a+1]=Ha):(c&&ab(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.R=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];nf(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Y(c)}}return 0!=e}return!1};
function nf(a,b,c){Cd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.i[a];b&&(I(b,this.Y,this),delete this.i[a])}else this.f.length=0,this.i={}};
n.u=function(){N.K.u.call(this);this.clear();this.j.length=0};function of(a){this.f=a}
of.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Ne(b))};
of.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
of.prototype.remove=function(a){this.f.remove(a)};function pf(a){this.f=a}
H(pf,of);function qf(a){this.data=a}
function rf(a){return void 0===a||a instanceof qf?a:new qf(a)}
pf.prototype.set=function(a,b){pf.K.set.call(this,a,rf(b))};
pf.prototype.h=function(a){a=pf.K.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
pf.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function sf(a){this.f=a}
H(sf,pf);sf.prototype.set=function(a,b,c){if(b=rf(b)){if(c){if(c<G()){sf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=G()}sf.K.set.call(this,a,b)};
sf.prototype.h=function(a){var b=sf.K.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<G()||c&&c>G())sf.prototype.remove.call(this,a);else return b}};function tf(){}
;function uf(){}
H(uf,tf);uf.prototype.clear=function(){var a=Pd(this.L(!0)),b=this;I(a,function(c){b.remove(c)})};function vf(a){this.f=a}
H(vf,uf);n=vf.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.L=function(a){var b=0,c=this.f,d=new Md;d.next=function(){if(b>=c.length)throw Ld;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function wf(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
H(wf,vf);function xf(a,b){this.h=a;this.f=null;if(ec&&!(9<=Number(sc))){yf||(yf=new Qd);this.f=yf.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),yf.set(a,this.f));try{this.f.load(this.h)}catch(c){this.f=null}}}
H(xf,uf);var zf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},yf=null;function Af(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return zf[b]})}
n=xf.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(Af(a),b);Bf(this)};
n.get=function(a){a=this.f.getAttribute(Af(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(Af(a));Bf(this)};
n.L=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Md;d.next=function(){if(b>=c.length)throw Ld;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Bf(this)};
function Bf(a){try{a.f.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Cf(a,b){this.h=a;this.f=b+"::"}
H(Cf,uf);Cf.prototype.set=function(a,b){this.h.set(this.f+a,b)};
Cf.prototype.get=function(a){return this.h.get(this.f+a)};
Cf.prototype.remove=function(a){this.h.remove(this.f+a)};
Cf.prototype.L=function(a){var b=this.h.L(!0),c=this,d=new Md;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.h.get(e)};
return d};function Df(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ef=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",Ef,void 0);function O(a){Df(Ef,arguments)}
function P(a,b){return a in Ef?Ef[a]:b}
function Ff(){return P("PLAYER_CONFIG",{})}
;var Gf=[];function Hf(a){Gf.forEach(function(b){return b(a)})}
function If(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Jf(b),Hf(b)}}:a}
function Jf(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),O("ERRORS",b))}
function Kf(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),O("ERRORS",b))}
;var Lf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Lf,void 0);function Mf(a){Df(Lf,arguments)}
;function Nf(a,b,c,d){Ec.set(""+a,b,{Aa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Q(a){a=Of(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Pf(a,b){var c=Of(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Of(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;function Qf(a){a&&(a.dataset?a.dataset[Rf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Sf(a,b){return a?a.dataset?a.dataset[Rf(b)]:a.getAttribute("data-"+b):null}
var Tf={};function Rf(a){return Tf[a]||(Tf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function R(a,b){"function"===typeof a&&(a=If(a));return window.setTimeout(a,b)}
function Uf(a){window.clearTimeout(a)}
;var Vf=z.ytPubsubPubsubInstance||new N,Wf=z.ytPubsubPubsubSubscribedKeys||{},Xf=z.ytPubsubPubsubTopicToKeys||{},Yf=z.ytPubsubPubsubIsSynchronous||{};function Zf(a,b){var c=$f();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Wf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Yf[a]?f():R(f,0)}catch(g){Jf(g)}},void 0);
Wf[d]=!0;Xf[a]||(Xf[a]=[]);Xf[a].push(d);return d}return 0}
function ag(a){var b=$f();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),I(a,function(c){b.unsubscribeByKey(c);delete Wf[c]}))}
function bg(a,b){var c=$f();c&&c.publish.apply(c,arguments)}
function cg(a){var b=$f();if(b)if(b.clear(a),a)dg(a);else for(var c in Xf)dg(c)}
function $f(){return z.ytPubsubPubsubInstance}
function dg(a){Xf[a]&&(a=Xf[a],I(a,function(b){Wf[b]&&delete Wf[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Y;N.prototype.publish=N.prototype.R;N.prototype.clear=N.prototype.clear;A("ytPubsubPubsubInstance",Vf,void 0);A("ytPubsubPubsubTopicToKeys",Xf,void 0);A("ytPubsubPubsubIsSynchronous",Yf,void 0);A("ytPubsubPubsubSubscribedKeys",Wf,void 0);var eg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,fg=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function gg(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(eg,""),c=c.replace(fg,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else hg(a,b,c)}
function hg(a,b,c){c=void 0===c?null:c;var d=ig(a),e=document.getElementById(d),f=e&&Sf(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Zf(d,b),b=""+La(b),jg[b]=f),g||(e=kg(a,d,function(){Sf(e,"loaded")||(Qf(e),bg(d),R(Qa(cg,d),0))},c)))}
function kg(a,b,c,d){d=void 0===d?null:d;var e=Mc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,jd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function lg(a){a=ig(a);var b=document.getElementById(a);b&&(cg(a),b.parentNode.removeChild(b))}
function mg(a,b){if(a&&b){var c=""+La(b);(c=jg[c])&&ag(c)}}
function ig(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ub(a)}
var jg={};function ng(){}
function og(a,b){return pg(a,1,b)}
;function qg(){}
v(qg,ng);function pg(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):R(a,c||0)}
qg.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
qg.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};
Ia(qg);qg.getInstance();var rg=[],sg=!1;function tg(){if(!Q("disable_ad_status_on_html5_clients")&&(!Q("condition_ad_status_fetch_on_consent_cookie_html5_clients")||Ec.get("CONSENT","").startsWith("YES+"))&&"1"!=eb(Ff(),"args","privembed")){var a=function(){sg=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
try{gg("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}rg.push(og(function(){sg||"google_ad_status"in window||(mg("//static.doubleclick.net/instream/ad_status.js",a),sg=!0,O("DCLKSTAT",3))},5E3))}}
function ug(){return parseInt(P("DCLKSTAT",0),10)}
;var vg=0;A("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++vg},void 0);var wg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wg||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.h=a.pageY}}catch(e){}}
function yg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.h=a.clientY+b}}
xg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var gb=z.ytEventsEventsListeners||{};A("ytEventsEventsListeners",gb,void 0);var zg=z.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",zg,void 0);
function Ag(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return fb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Bg=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Cg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ag(a,b,c,d);if(e)return e;e=++zg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xg(h);if(!Oc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xg(h);
h.currentTarget=a;return c.call(a,h)};
g=If(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);gb[e]=[a,b,c,g,d];return e}
function Dg(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in gb){var c=gb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete gb[b]}}))}
;var Eg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Fg(a){this.A=a;this.f=null;this.l=0;this.o=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.H=Cg(window,"mousemove",E(this.I,this));a=E(this.D,this);"function"===typeof a&&(a=If(a));this.J=window.setInterval(a,25)}
H(Fg,M);Fg.prototype.I=function(a){void 0===a.f&&yg(a);var b=a.f;void 0===a.h&&yg(a);this.f=new Gc(b,a.h)};
Fg.prototype.D=function(){if(this.f){var a=Eg();if(0!=this.l){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.A();this.m=d}this.l=a;this.o=this.f;this.j=(this.j+1)%4}};
Fg.prototype.u=function(){window.clearInterval(this.J);Dg(this.H)};var Gg={};
function Hg(a){var b=void 0===a?{}:a;a=void 0===b.Sa?!0:b.Sa;b=void 0===b.hb?!1:b.hb;if(null==C("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?G()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Ig();Cg(document,"keydown",Ig);Cg(document,"keyup",Ig);Cg(document,"mousedown",Ig);Cg(document,"mouseup",Ig);a&&(b?Cg(window,"touchmove",function(){Jg("touchmove",200)},{passive:!0}):(Cg(window,"resize",function(){Jg("resize",200)}),Cg(window,"scroll",function(){Jg("scroll",200)})));
new Fg(function(){Jg("mouse",100)});
Cg(document,"touchstart",Ig,{passive:!0});Cg(document,"touchend",Ig,{passive:!0})}}
function Jg(a,b){Gg[a]||(Gg[a]=!0,og(function(){Ig();Gg[a]=!1},b))}
function Ig(){null==C("_lact",window)&&Hg();var a=G();A("_lact",a,window);-1==C("_fact",window)&&A("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function Kg(){var a=C("_lact",window),b;null==a?b=-1:b=Math.max(G()-a,0);return b}
;var Lg=window,S=Lg.ytcsi&&Lg.ytcsi.now?Lg.ytcsi.now:Lg.performance&&Lg.performance.timing&&Lg.performance.now&&Lg.performance.timing.navigationStart?function(){return Lg.performance.timing.navigationStart+Lg.performance.now()}:function(){return(new Date).getTime()};var Mg=Pf("initial_gel_batch_timeout",1E3),Ng=Math.pow(2,16)-1,Og=null,Pg=0,Qg=void 0,Rg=0,Sg=0,Tg=0,Ug=!0,Vg=z.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Vg,void 0);var Wg=z.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Wg,void 0);function Xg(a){a=void 0===a?!1:a;return new Ue(function(b){Uf(Rg);Uf(Sg);Sg=0;Qg&&Qg.isReady()?(Yg(b,a),Vg.clear()):(Zg(),b())})}
function Zg(){Q("web_gel_timeout_cap")&&!Sg&&(Sg=R(Xg,6E4));Uf(Rg);var a=P("LOGGING_BATCH_TIMEOUT",Pf("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&Ug&&(a=Mg);Rg=R(Xg,a)}
function Yg(a,b){var c=Qg;b=void 0===b?!1:b;for(var d=Math.round(S()),e=Vg.size,f=u(Vg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=lb({context:$g(c.G||ah())});h.events=k;(k=Wg[g])&&bh(h,g,k);delete Wg[g];ch(h,d);dh(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Pg=Math.round(S()-d)},
onError:function(){e--;e||a()},
ub:b});Ug=!1}}
function ch(a,b){a.requestTimeMs=String(b);Q("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&Q("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Ng/2));d++;d>Ng&&(d=1);O("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Og&&Pg&&Q("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Og,roundtripMs:String(Pg)});Og=c;Pg=0}}
function bh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var eh=z.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",eh,void 0);
function fh(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||S());e[a]=b;a=Kg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};Q("log_sequence_info_on_gel_web")&&d.O&&(a=e.context,b=d.O,eh[b]=b in eh?eh[b]+1:0,a.sequence={index:eh[b],groupKey:b},d.Na&&delete eh[d.O]);d=d.M;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Wg[d.token]=a,a=d.token);d=Vg.get(a)||[];Vg.set(a,d);d.push(e);c&&(Qg=new c);c=Pf("web_logging_max_batch")||
100;e=S();d.length>=c?Xg(!0):10<=e-Tg&&(Zg(),Tg=e)}
;function gh(){var a=hh;C("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function ih(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;var jh={q:!0,search_query:!0};function kh(a){for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?cb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){jh.hasOwnProperty(f[0])||(k.args=[{key:f[0],value:f[1],query:a}],Jf(k))}}return c}
function lh(a){var b=[];db(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function mh(a){"?"==a.charAt(0)&&(a=a.substr(1));return kh(a)}
function nh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=mh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $b(a,e)+d}
;function oh(a){var b=ph;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(qh(b),rh(b));b.ca_type="image";a&&(b.bid=a);return b}
function qh(a){var b={};b.dt=md;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.h.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function rh(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new Hc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new Hc(-12245933,-12245933)}k=m;m={};l=new sd;z.SVGElement&&
z.document.createElementNS&&l.set(0);c=Tc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);z.crypto&&z.crypto.subtle&&l.set(3);z.TextDecoder&&z.TextEncoder&&l.set(4);l=td(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.h;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var ph=new function(){var a=window.document;this.f=window;this.h=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return lh(oh(a))},void 0);var sh="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function th(){if(!sh)return null;var a=sh();return"open"in a?a:null}
function uh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var vh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},wh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
xh=!1;
function yh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Vb)[1]||null,e=Xb(a);d&&e?(d=c,c=a.match(Vb),d=d.match(Vb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Xb(c)==e&&(Number(c.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;d=Q("web_ajax_ignore_global_headers_if_set");for(var f in vh)e=P(vh[f]),!e||!c&&Xb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Xb(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Xb(a))b["X-YouTube-Ad-Signals"]=lh(oh(void 0));return b}
function zh(a){var b=window.location.search,c=Xb(a),d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=mh(b),f={};I(wh,function(g){e[g]&&(f[g]=e[g])});
return nh(a,f||{},!1)}
function Ah(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Bh(a,b);var d=Ch(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Uf(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||z;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.sa&&b.sa.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Ea&&0<b.timeout&&(f=R(function(){e||(e=!0,Uf(f),b.Ea.call(b.context||z))},b.timeout))}else Dh(a,b)}
function Dh(a,b){var c=b.format||"JSON";a=Bh(a,b);var d=Ch(a,b),e=!1,f=Eh(a,function(k){if(!e){e=!0;h&&Uf(h);var l=uh(k),m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=Fh(a,c,k,b.gk);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||z;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.sa&&b.sa.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.Z&&0<b.timeout){var g=b.Z;var h=R(function(){e||(e=!0,f.abort(),Uf(h),g.call(b.context||z,f))},b.timeout)}return f}
function Bh(a,b){b.jk&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.tb;d&&(d[c]&&delete d[c],a=nh(a,d||{},!0));return a}
function Ch(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.F,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.ik||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.F&&b.F[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=mh(e),nb(e,f),e=b.Fa&&"JSON"==b.Fa?JSON.stringify(e):Zb(e));f=e||f&&!hb(f);!xh&&f&&"POST"!=b.method&&(xh=!0,Jf(Error("AJAX request with postData should use POST")));
return e}
function Fh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Kf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Gh(a):null)e={},I(a.getElementsByTagName("*"),function(g){e[g.tagName]=Hh(g)})}d&&Ih(e);
return e}
function Ih(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else Ih(a[b])}}
function Gh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Hh(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Eh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&If(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=th();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Q("debug_forward_web_query_parameters")&&(a=zh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=yh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Jh(){for(var a={},b=u(Object.entries(mh(P("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Kh(){return"INNERTUBE_API_KEY"in Ef&&"INNERTUBE_API_VERSION"in Ef}
function ah(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),Ta:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ua:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Wa:P("INNERTUBE_CONTEXT_HL",void 0),Va:P("INNERTUBE_CONTEXT_GL",void 0),Xa:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",Za:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ya:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function $g(a){var b={client:{hl:a.Wa,gl:a.Va,clientName:a.Ua,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ta}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=P("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=P("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&Q("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,Jh());return b}
function Lh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.dk||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().ck:b=rd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),Q("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function Mh(a){a=Object.assign({},a);delete a.Authorization;var b=rd();if(b){var c=new Jd;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=yc(c.digest())}return a}
;function Nh(){var a=new wf;(a=a.isAvailable()?new Cf(a,"yt.innertube"):null)||(a=new xf("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new sf(a):null;this.h=document.domain||window.location.hostname}
Nh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,G()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ne(b))}catch(f){return}else e=escape(b);Nf(a,e,c,this.h)};
Nh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Ec.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Nh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.h;Ec.remove(""+a,"/",void 0===b?"youtube.com":b)};var Oh;function Ph(){Oh||(Oh=new Nh);return Oh}
function Qh(a,b,c,d){if(d)return null;d=Ph().get("nextId",!0)||1;var e=Ph().get("requests",!0)||{};e[d]={method:a,request:b,authState:Mh(c),requestTime:Math.round(S())};Ph().set("nextId",d+1,86400,!0);Ph().set("requests",e,86400,!0);return d}
function Rh(a){var b=Ph().get("requests",!0)||{};delete b[a];Ph().set("requests",b,86400,!0)}
function Sh(a){var b=Ph().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=Mh(Lh(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),dh(a,d.method,e,{}));delete b[c]}}Ph().set("requests",b,86400,!0)}}
;function Th(a,b){this.version=a;this.args=b}
;function Uh(a,b){this.topic=a;this.f=b}
Uh.prototype.toString=function(){return this.topic};var Vh=C("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Y;N.prototype.publish=N.prototype.R;N.prototype.clear=N.prototype.clear;A("ytPubsub2Pubsub2Instance",Vh,void 0);var Wh=C("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",Wh,void 0);var Xh=C("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",Xh,void 0);var Yh=C("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Yh,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Zh(a,b){var c=$h();c&&c.publish.call(c,a.toString(),a,b)}
function ai(a){var b=bi,c=$h();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=C("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Wh[d])try{if(f&&b instanceof Uh&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.P){var l=new h;h.P=l.version}var m=h.P}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
bb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Jf(p)}},Yh[b.toString()]?C("yt.scheduler.instance")?og(g):R(g,0):g())});
Wh[d]=!0;Xh[b.toString()]||(Xh[b.toString()]=[]);Xh[b.toString()].push(d);return d}
function ci(){var a=di,b=ai(function(c){a.apply(void 0,arguments);ei(b)});
return b}
function ei(a){var b=$h();b&&("number"===typeof a&&(a=[a]),I(a,function(c){b.unsubscribeByKey(c);delete Wh[c]}))}
function $h(){return C("ytPubsub2Pubsub2Instance")}
;var fi=[],gi=!1;function hi(a,b){gi||(fi.push({type:"EVENT",eventType:a,payload:b}),10<fi.length&&fi.shift())}
;function ii(a){if(!a)throw Error();throw a;}
function ji(a){return a}
function T(a){var b=this;this.h=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.h(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
T.all=function(a){return new T(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={S:0};f.S<a.length;f={S:f.S},++f.S)ki(T.resolve(a[f.S]).then(function(g){return function(h){d[g.S]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
T.resolve=function(a){return new T(function(b,c){a instanceof T?a.then(b,c):b(a)})};
T.reject=function(a){return new T(function(b,c){c(a)})};
T.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:ji,e=null!==b&&void 0!==b?b:ii;return new T(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){li(c,c,d,f,g)}),c.onRejected.push(function(){mi(c,c,e,f,g)})):"FULFILLED"===c.state.status?li(c,c,d,f,g):"REJECTED"===c.state.status&&mi(c,c,e,f,g)})};
function ki(a,b){a.then(void 0,b)}
function li(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof T?ni(a,b,f,d,e):d(f)}catch(g){e(g)}}
function mi(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof T?ni(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ni(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof T?ni(a,b,f,d,e):d(f)},function(f){e(f)})}
;function oi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function pi(a){return new Promise(function(b,c){oi(a,b,c)})}
function U(a){return new T(function(b,c){oi(a,b,c)})}
;function qi(a,b){return new T(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function V(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(V,Error);var ri={},si=(ri.AUTH_INVALID="No user identifier specified.",ri.EXPLICIT_ABORT="Transaction was explicitly aborted.",ri.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ri.MISSING_OBJECT_STORE="Object store not created.",ri.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",ri.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ri.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ri);
function ti(a,b,c){b=void 0===b?{}:b;c=void 0===c?si[a]:c;V.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,ti.prototype);gi||(fi.push({type:"ERROR",payload:this}),10<fi.length&&fi.shift())}
v(ti,V);function ui(a,b,c){ti.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,ui.prototype)}
v(ui,ti);function vi(a){ti.call(this,"MISSING_OBJECT_STORE",{kk:a},si.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,vi.prototype)}
v(vi,ti);function wi(a,b){this.f=a;this.options=b;this.transactionCount=0;this.i=Math.round(S());this.h=!1}
n=wi.prototype;n.add=function(a,b,c){return xi(this,[a],"readwrite",function(d){return yi(d,a).add(b,c)})};
n.clear=function(a){return xi(this,[a],"readwrite",function(b){return yi(b,a).clear()})};
n.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return xi(this,[a],"readonly",function(c){return yi(c,a).count(b)})};
n["delete"]=function(a,b){return xi(this,[a],"readwrite",function(c){return yi(c,a)["delete"](b)})};
n.get=function(a,b){return xi(this,[a],"readwrite",function(c){return yi(c,a).get(b)})};
function xi(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.f.transaction(b,c);e=new zi(e);d=Ai(e,d);Bi(a,d,b.join(),c);return d}
function Bi(a,b,c,d){bc(a,function f(){var g,h,k=this,l,m,p;return za(f,function(q){if(1==q.f)return g=Math.round(S()),ra(q,2),x(q,b,4);if(2!=q.f)h=Math.round(S()),Ci(k,!0,c,h-g),q.f=0,q.m=0;else{l=sa(q);m=Math.round(S());var r=l,w=k.f.name,B=k.transactionCount,F;"QuotaExceededError"===r.name?F=new ti("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:w,mode:d}):"UnknownError"===r.name&&(F=new ti("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:w,mode:d}));F&&hi("QUOTA_EXCEEDED",{dbName:w,objectStoreNames:c,
transactionCount:B,transactionMode:d});p=m-g;l instanceof ui&&(hi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:p,transactionCount:k.transactionCount,dbDuration:m-k.i}),k.h=!0);Ci(k,!1,c,p);q.f=0}})})}
function Ci(a,b,c,d){hi("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.h,duration:d,isSuccessful:b})}
function Di(a){this.f=a}
n=Di.prototype;n.add=function(a,b){return U(this.f.add(a,b))};
n.clear=function(){return U(this.f.clear()).then(function(){})};
n.count=function(a){return U(this.f.count(a))};
function Ei(a,b){return Fi(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
n["delete"]=function(a){return a instanceof IDBKeyRange?Ei(this,a):U(this.f["delete"](a))};
n.get=function(a){return U(this.f.get(a))};
n.index=function(a){return new Gi(this.f.index(a))};
n.getName=function(){return this.f.name};
function Fi(a,b,c){a=a.f.openCursor(b.query,b.direction);return Hi(a).then(function(d){return qi(d,c)})}
function zi(a){var b=this;this.f=a;this.h=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;if(e)d(e);else if(!b.aborted){e=ui;for(var f=b.f.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.f.db.name,b.f.mode);d(e)}})})}
function Ai(a,b){var c=new Promise(function(d,e){ki(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
zi.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new ti("EXPLICIT_ABORT");};
zi.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function yi(a,b){var c=a.f.objectStore(b),d=a.h.get(c);d||(d=new Di(c),a.h.set(c,d));return d}
function Gi(a){this.f=a}
Gi.prototype.count=function(a){return U(this.f.count(a))};
Gi.prototype["delete"]=function(a){return Ii(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Gi.prototype.get=function(a){return U(this.f.get(a))};
Gi.prototype.getKey=function(a){return U(this.f.getKey(a))};
function Ii(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Hi(a).then(function(d){return qi(d,c)})}
function Ji(a,b){this.request=a;this.cursor=b}
function Hi(a){return U(a).then(function(b){return null===b?null:new Ji(a,b)})}
n=Ji.prototype;n.advance=function(a){this.cursor.advance(a);return Hi(this.request)};
n["continue"]=function(a){this.cursor["continue"](a);return Hi(this.request)};
n["delete"]=function(){return U(this.cursor["delete"]()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.getValue=function(){return this.cursor.value};
n.update=function(a){return U(this.cursor.update(a))};function Ki(a,b,c){return bc(this,function e(){var f,g,h,k,l,m,p,q,r,w;return za(e,function(B){if(1==B.f)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.sb,m=g.upgrade,p=g.closed,r=function(){q||(q=new wi(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(F){if(null===F.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");F.dataLoss&&"none"!==F.dataLoss&&hi("IDB_DATA_CORRUPTED",{reason:F.dataLossMessage||"unknown reason",dbName:a});var Fb=r(),ua=new zi(f.transaction);m&&m(Fb,F.oldVersion,F.newVersion,ua)}),h&&f.addEventListener("blocked",function(){h()}),x(B,pi(f),2);
w=B.l;k&&w.addEventListener("versionchange",function(){k(r())});
w.addEventListener("close",function(){hi("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:w.version});l&&l()});
return B["return"](r())})})}
function Li(a,b,c){c=void 0===c?{}:c;return Ki(a,b,c)}
function Mi(a,b){b=void 0===b?{}:b;return bc(this,function d(){var e,f,g;return za(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return x(h,pi(e),0)})})}
;var Ni=uc||vc;function Oi(a){var b=Lb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Pi(a){this.name="YtIdbMeta";this.options=a;this.h=!1}
function Qi(a,b,c){c=void 0===c?{}:c;return Li(a,b,c)}
Pi.prototype["delete"]=function(a){a=void 0===a?{}:a;return Mi(this.name,a)};
Pi.prototype.open=function(){var a=this;if(!this.f){var b,c=function(){a.f===b&&(a.f=void 0)},d={blocking:function(f){f.close()},
closed:c,sb:c,upgrade:this.options.upgrade},e=function(){return bc(a,function g(){var h=this,k,l,m;return za(g,function(p){switch(p.f){case 1:return ra(p,2),x(p,Qi(h.name,h.options.version,d),4);case 4:k=p.l;if(!tc){p.N(5);break}a:{var q=u(Object.keys(h.options.bb));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.f.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.N(5);break}if(!tc||h.h){p.N(7);break}h.h=!0;return x(p,h["delete"](),8);case 8:return p["return"](e());case 7:throw new vi(l);
case 5:return p["return"](k);case 2:m=sa(p);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return p["return"](Qi(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.f=b=e()}return this.f};var Ri=new Pi({bb:{databases:!0},upgrade:function(a,b){1>b&&a.f.createObjectStore("databases",{keyPath:"actualName"})}});
function Si(a){return bc(this,function c(){var d;return za(c,function(e){if(1==e.f)return x(e,Ri.open(),2);d=e.l;return e["return"](xi(d,["databases"],"readwrite",function(f){var g=yi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return U(g.f.put(a,void 0)).then(function(){})})}))})})}
function Ti(){return bc(this,function b(){var c;return za(b,function(d){if(1==d.f)return x(d,Ri.open(),2);c=d.l;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new Le;var Ui;
function Vi(){return bc(this,function b(){var c,d,e;return za(b,function(f){switch(f.f){case 1:var g;if(g=Ni)g=/WebKit\/([0-9]+)/.exec(Lb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Lb),g=!(g&&602<=parseInt(g[1],10)));if(g&&!Q("ytidb_allow_on_ios_safari_v8_and_v9")||fc)return f["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return f["return"](!1)}catch(h){return f["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return f["return"](!1);if(!Q("ytidb_new_supported_check_with_delete")){f.N(2);
break}ra(f,3);return x(f,Ti(),5);case 5:return f["return"](!0);case 3:return sa(f),f["return"](!1);case 2:if(!Q("ytidb_new_supported_check_with_add_and_delete")){f.N(6);break}ra(f,7);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return x(f,Si(d),9);case 9:return x(f,Ti(),10);case 10:return f["return"](!0);case 7:return sa(f),f["return"](!1);case 6:return ra(f,11,12),x(f,Li("yt-idb-test-do-not-use"),14);case 14:if(e=f.l,!e)return f["return"](!1);
case 12:f.A=[f.h];f.m=0;f.j=0;if(e)try{e.close()}catch(h){}g=f.A.splice(0)[0];(g=f.h=f.h||g)?g.za?f.f=f.m||f.j:void 0!=g.N&&f.j<g.N?(f.f=g.N,f.h=null):f.f=f.j:f.f=13;break;case 11:return sa(f),f["return"](!1);case 13:return f["return"](!0)}})})}
function Wi(){if(void 0!==Ui)return Ui;var a=S();gi=!0;return Ui=Vi().then(function(b){gi=!1;hi("IS_SUPPORTED_COMPLETED",{duration:Math.round(S()-a),isSupported:b});return b})}
;function Xi(){Le.call(this);this.l=!1;this.i=Yi();Zi(this);$i(this)}
v(Xi,Le);function Yi(){var a=window.navigator.onLine;return void 0===a?!0:a}
function $i(a){window.addEventListener("online",function(){a.i=!0;aj(a)})}
function Zi(a){window.addEventListener("offline",function(){a.i=!1;aj(a)})}
function aj(a){a.l&&(Kf(new V("NetworkStatusManager state did not match poll",S()-0)),a.l=!1)}
;function bj(a,b){b=void 0===b?{}:b;Wi().then(function(){Xi.f||(Xi.f=new Xi);Xi.f.i!==Yi()&&Kf(new V("NetworkStatusManager isOnline does not match window status"));Dh(a,b)})}
function cj(a,b){b=void 0===b?{}:b;Wi().then(function(){Dh(a,b)})}
;function dj(a){var b=this;this.G=null;a?this.G=a:Kh()&&(this.G=ah());pg(function(){Sh(b)},0,5E3)}
dj.prototype.isReady=function(){!this.G&&Kh()&&(this.G=ah());return!!this.G};
function dh(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Kf(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new V("innertube xhrclient not ready",b,c,d);Jf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",F:c,Fa:"JSON",Z:function(){d.Z()},
Ea:d.Z,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
Da:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
lk:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.G.Xa)&&(g=e);var h=a.G.Za||!1,k=Lh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.G.innertubeApiVersion+"/"+b;var l={alt:"json"};a.G.Ya&&f.headers.Authorization||(l.key=a.G.innertubeApiKey);var m=nh(""+g+e,l||{},!0);Wi().then(function(p){if(d.retry&&Q("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(Q("networkless_gel")&&!p||!Q("networkless_gel"))var q=Qh(b,
c,k,h);if(q){var r=f.onSuccess,w=f.Da;f.onSuccess=function(B,F){Rh(q);r(B,F)};
c.Da=function(B,F){Rh(q);w(B,F)}}}try{Q("use_fetch_for_op_xhr")?Ah(m,f):Q("networkless_gel")&&d.retry?(f.method="POST",!d.ub&&Q("nwl_send_fast_on_unload")?cj(m,f):bj(m,f)):(f.method="POST",f.F||(f.F={}),Dh(m,f))}catch(B){if("InvalidAccessError"==B.name)q&&(Rh(q),q=0),Kf(Error("An extension is blocking network request."));
else throw B;}q&&pg(function(){Sh(a)},0,5E3)})}
;function ej(a,b,c){c=void 0===c?{}:c;var d=dj;P("ytLoggingEventsDefaultDisabled",!1)&&dj==dj&&(d=null);fh(a,b,d,c)}
;var fj=[{Ba:function(a){return"Cannot read property '"+a.key+"'"},
ta:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Ba:function(a){return"Cannot call '"+a.key+"'"},
ta:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function gj(){this.f=[];this.h=[]}
var hj;var ij=new N;function jj(a,b,c,d){c+="."+a;a=kj(b);d[c]=a;return c.length+a.length}
function kj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var lj=new Set,mj=0,nj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function oj(a){pj(a,"WARNING")}
function pj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(Q("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(window&&window.yterr||g)&&!(5<=mj)&&0!==a.sampleWeight)){f=zc(a);g=f.message||"Unknown Error";d=f.name||"UnknownError";var h=f.stack||a.f||"Not available";Q("kevlar_js_fixes")&&h.startsWith(d+": "+g)&&(e=h.split("\n"),e.shift(),h=e.join("\n"));e=f.lineNumber||"Not available";f=f.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var q=c,r=0;r<m.length&&!(m[r]&&(k+=
jj(r,m[r],p,q),500<k));r++);else if("object"===typeof m)for(q in q=void 0,r=c,m){if(m[q]&&(k+=jj(q,m[q],p,r),500<k))break}else c[p]=kj(m),k+=c[p].length;else c[p]=kj(m),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,q=kj(m[l]),c[k]=q,p+=k.length+q.length,500<p))break}else c.params=kj(m);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=navigator.vendor);c={message:g,name:d,lineNumber:e,
fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(fj);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.ta[c.name])for(e=u(g.ta[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["error."+e[h]]=d[h+1];c.message=g.Ba(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(lj.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||
0<=c.stack.indexOf("/mytube.js"))){"ERROR"===b?ij.R("handleError",c):"WARNING"===b&&ij.R("handleWarning",c);if(Q("kevlar_gel_error_routing")){a=b;a:{g=u(nj);for(d=g.next();!d.done;d=g.next())if(Oi(d.value.toLowerCase())){g=!0;break a}g=!1}if(!g){d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);g=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==g.length&&(1!==g.length||isNaN(Number(g[0]))?2!==g.length||isNaN(Number(g[0]))||isNaN(Number(g[1]))||(d.lineNumber=Number(g[0]),d.columnNumber=
Number(g[1])):d.lineNumber=Number(g[0]));hj||(hj=new gj);g=hj;e=c.message;f=c.name;a:{h=u(g.h);for(l=h.next();!l.done;l=h.next())if(l=l.value,c.message&&c.message.match(l.f)){h=l.weight;break a}h=u(g.f);for(l=h.next();!l.done;l=h.next())if(l=l.value,l.La(c)){h=l.weight;break a}h=1}e={level:"ERROR_LEVEL_UNKNOWN",message:e,errorClassName:f,sampleWeight:h};"ERROR"===a?e.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(e.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href};
P("FEXP_EXPERIMENTS")&&(d.experimentIds=P("FEXP_EXPERIMENTS"));d.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+g.h.length+"&cb="+g.f.length},{key:"client.params.serviceWorker",value:"false"}];if(g=c.params)for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.kvPairs.push({key:"client."+h,value:String(g[h])});g=P("SERVER_NAME",void 0);f=P("SERVER_VERSION",void 0);g&&f&&(d.kvPairs.push({key:"server.name",value:g}),d.kvPairs.push({key:"server.version",value:f}));ej("clientError",
{errorMetadata:d,stackTrace:a,logMessage:e});Xg()}}if(!Q("suppress_error_204_logging")){a=c.params||{};b={tb:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},F:{url:P("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.F){c.stack&&(b.F.stack=c.stack);g=u(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,b.F["client."+d]=a[d];if(a=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",
void 0))for(g=u(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.F[d]=a[d];a=P("SERVER_NAME",void 0);g=P("SERVER_VERSION",void 0);a&&g&&(b.F["server.name"]=a,b.F["server.version"]=g)}Dh(P("ECATCHER_REPORT_HOST","")+"/error_204",b)}lj.add(c.message);mj++}}}
function qj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;function rj(){this.h=!1;this.f=null}
rj.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.h=!0,gg(b,function(){g.h=!1;window.botguard?sj(g,c,d,f):(lg(b),oj(new V("Unable to load Botguard","from "+b)))},e)):a&&(e=Mc(document,"SCRIPT"),e.textContent=a,e.nonce=Da(),document.head.appendChild(e),document.head.removeChild(e),window.botguard?sj(this,c,d,f):oj(Error("Unable to load Botguard from JS")))};
function sj(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ha)}catch(e){oj(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){oj(e)}c&&c(b)}}
rj.prototype.dispose=function(){this.f=null};var tj=new rj;function uj(){return!!tj.f}
function vj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return tj.f?tj.f.invoke(void 0,void 0,a):null}
;var wj=G().toString();
function xj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=G();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(wj)for(a=1,b=0;b<wj.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^wj.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var yj=z.ytLoggingDocDocumentNonce_||xj();A("ytLoggingDocDocumentNonce_",yj,void 0);var zj=1;function Aj(a){this.f=a}
function Bj(a){return new Aj({trackingParams:a})}
function Cj(a){var b=zj++;return new Aj({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0})}
Aj.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
Aj.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Aj.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function Dj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Ej(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Fj(a){return P(Ej(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",Fj,void 0);function Gj(a){return(a=Fj(void 0===a?0:a))?new Aj({veType:a,youtubeData:void 0}):null}
function Hj(){var a=P("csn-to-ctt-auth-info");a||(a={},O("csn-to-ctt-auth-info",a));return a}
function W(a){a=void 0===a?0:a;var b=P(Dj(a));if(!b&&!P("USE_CSN_FALLBACK",!0))return null;b||0!=a||(Q("kevlar_client_side_screens")||Q("c3_client_side_screens")?b="UNDEFINED_CSN":b=P("EVENT_ID"));return b?b:null}
A("yt_logging_screen.getCurrentCsn",W,void 0);function Ij(a,b,c){var d=Hj();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function Jj(a){return Hj()[a]}
A("yt_logging_screen.getCttAuthInfo",Jj,void 0);function Kj(a,b,c,d){c=void 0===c?0:c;if(a!==P(Dj(c))||b!==P(Ej(c)))if(Ij(a,d,c),O(Dj(c),a),O(Ej(c),b),0==c||Q("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&fh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:yj,clientScreenNonce:a},dj)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",Kj,void 0);function Lj(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Xb(window.location.href);g&&f.push(g);g=Xb(d);if(0<=Wa(f,g)||!g&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Vb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:W()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Ub(d).toString(36),e=e?Zb(e):"",Nf(b,e,k||5))}else k=b,e="ST-"+Ub(d).toString(36),k=k?Zb(k):"",Nf(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=$b(a,l)+m;a=a instanceof J?a:Jb(a);c.href=Eb(a)}return!0}
;function Mj(a){Th.call(this,1,arguments);this.csn=a}
v(Mj,Th);var bi=new Uh("screen-created",Mj),Nj=[],Pj=Oj,Qj=0;function Rj(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:Ya(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(hb(e)||!e.trackingParams&&!e.veType)&&oj(Error("Child VE logged with no data"));d={M:Jj(b),O:b};"UNDEFINED_CSN"==b?Sj("visualElementAttached",c,d):a?fh("visualElementAttached",c,a,d):ej("visualElementAttached",c,d)}
function Tj(a,b){var c=Q("use_default_events_client")?void 0:dj,d={csn:a,ve:b.getAsJson(),eventType:1},e={M:Jj(a),O:a};"UNDEFINED_CSN"==a?Sj("visualElementShown",d,e):c?fh("visualElementShown",d,c,e):ej("visualElementShown",d,e)}
function Uj(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={M:Jj(b),O:b};"UNDEFINED_CSN"==b?Sj("visualElementGestured",c,d):a?fh("visualElementGestured",c,a,d):ej("visualElementGestured",c,d)}
function Oj(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return yc(b)}
function Sj(a,b,c){Nj.push({payloadName:a,payload:b,options:c});Qj||(Qj=ci())}
function di(a){if(Nj){for(var b=u(Nj),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,fh(c.payloadName,c.payload,null,c.options));Nj.length=0}Qj=0}
;function Vj(a,b,c){Rj(Q("use_default_events_client")?void 0:dj,a,b,[c])}
;var Wj={ac:29434,dc:3611,Ae:3854,Qf:42993,vi:4724,bj:96370,vb:27686,wb:85013,xb:23462,zb:42016,Ab:62407,Bb:26926,yb:43781,Cb:51236,Db:79148,Eb:50160,Fb:77504,Rb:87907,Sb:18630,Tb:54445,Ub:80935,Vb:105675,Wb:37521,Xb:47786,Yb:98349,Zb:6827,cc:7282,fc:32276,ec:76278,hc:93911,ic:106531,jc:27259,kc:27262,lc:27263,mc:21759,nc:27107,oc:62936,pc:49568,qc:38408,sc:80637,tc:68727,uc:68728,wc:80353,xc:80356,yc:74610,zc:45707,Ac:83962,Bc:83970,Cc:46713,Dc:89711,Ec:74612,Fc:93265,Gc:74611,Ic:113533,Jc:93252,
Kc:99357,Mc:94521,Nc:114252,Oc:113532,Pc:94522,Lc:94583,Qc:88E3,Rc:93253,Sc:93254,Tc:94387,Uc:94388,Vc:93255,Wc:97424,Hc:72502,Xc:110111,Yc:76019,Zc:89431,bd:110466,cd:77240,dd:60508,ed:105350,fd:73393,gd:113534,hd:92098,jd:84517,kd:83759,ld:80357,md:86113,nd:72598,od:72733,pd:107349,qd:97615,rd:31402,sd:84774,td:95117,ud:98930,vd:98931,wd:98932,xd:43347,yd:45474,zd:100352,Ad:84758,Bd:98443,Cd:74613,Dd:74614,Ed:64502,Fd:74615,Gd:74616,Hd:74617,Id:77820,Jd:74618,Kd:93278,Ld:93274,Md:93275,Nd:93276,
Od:22110,Pd:29433,Qd:82047,Rd:113550,Sd:75836,Td:75837,Ud:42352,Vd:84512,Wd:76065,Xd:75989,Yd:16623,Zd:32594,ae:27240,be:32633,ce:74858,ee:3945,de:16989,ge:45520,he:25488,ie:25492,je:25494,ke:55760,le:14057,me:18451,ne:57204,oe:57203,pe:17897,qe:57205,re:18198,se:17898,te:17909,ue:43980,we:46220,xe:11721,ye:49954,ze:96369,Be:56251,Ce:25624,De:16906,Ee:99999,Fe:68172,Ge:27068,He:47973,Ie:72773,Je:26970,Ke:26971,Le:96805,Me:17752,Ne:73233,Oe:109512,Pe:22256,Qe:14115,Re:22696,Se:89278,Te:89277,Ue:109513,
Ve:43278,We:43459,Xe:43464,Ye:89279,Ze:43717,af:55764,bf:22255,cf:89281,df:40963,ef:43277,ff:43442,gf:91824,hf:96367,jf:36850,kf:72694,lf:37414,mf:36851,nf:73491,pf:54473,qf:43375,rf:46674,sf:32473,tf:72901,uf:72906,vf:50947,wf:50612,xf:50613,yf:50942,zf:84938,Af:84943,Bf:84939,Cf:84941,Df:84944,Ef:84940,Ff:84942,Gf:35585,Hf:51926,If:79983,Jf:63238,Kf:18921,Lf:63241,Mf:57893,Nf:41182,Of:33424,Pf:22207,Rf:36229,Sf:22206,Tf:22205,Uf:18993,Vf:19001,Wf:18990,Xf:18991,Yf:18997,Zf:18725,ag:19003,cg:36874,
dg:44763,eg:33427,fg:67793,gg:22182,hg:37091,jg:34650,kg:50617,lg:47261,mg:22287,ng:25144,og:97917,pg:62397,qg:36961,rg:108035,sg:27426,tg:27857,ug:27846,vg:27854,wg:69692,xg:61411,yg:39299,zg:38696,Ag:62520,Bg:36382,Cg:108701,Dg:50663,Eg:36387,Fg:14908,Gg:37533,Hg:105443,Ig:61635,Jg:62274,Kg:65702,Lg:65703,Mg:65701,Ng:76256,Og:37671,Pg:49953,Qg:36216,Rg:28237,Sg:39553,Tg:29222,Ug:26107,Vg:38050,Wg:26108,Xg:26109,Yg:26110,Zg:66881,ah:28236,bh:14586,dh:57929,eh:74723,fh:44098,gh:44099,hh:23528,ih:61699,
jh:59149,kh:101951,lh:97346,mh:95102,nh:64882,oh:63595,ph:63349,qh:95101,rh:75240,sh:27039,uh:68823,vh:21537,wh:83464,xh:75707,yh:83113,zh:101952,Ah:101953,Bh:79610,Ch:24402,Dh:24400,Eh:32925,Fh:57173,Gh:64423,Hh:64424,Ih:33986,Jh:100828,Kh:21409,Lh:11070,Mh:11074,Nh:17880,Oh:14001,Qh:30709,Rh:30707,Sh:30711,Th:30710,Uh:30708,Ph:26984,Vh:63648,Wh:63649,Xh:51879,Yh:111059,Zh:5754,ai:20445,bi:110386,ci:113746,di:66557,fi:17310,gi:28631,hi:21589,ii:68012,ji:60480,ki:31571,li:76980,mi:41577,ni:45469,
oi:38669,ri:13768,si:13777,ti:62985,wi:59369,xi:43927,yi:43928,zi:12924,Ai:100355,Ci:56219,Di:27669,Ei:10337,Bi:47896,Fi:107598,Gi:96639,Hi:107536,Ii:96661,Ji:96658,Ki:96660,Li:104443,Mi:96659,Ni:106442,Oi:63667,Pi:63668,Qi:63669,Ri:78314,Si:55761,Ti:96368,Ui:67374,Vi:48992,Wi:49956,Xi:31961,Yi:26388,Zi:23811,aj:5E4,cj:47355,dj:47356,ej:37935,fj:45521,gj:21760,hj:83769,ij:49977,jj:49974,kj:93497,lj:93498,mj:34325,nj:100081,oj:35309,pj:68314,qj:25602,rj:100339,sj:59018,tj:18248,uj:50625,vj:9729,wj:37168,
xj:37169,yj:21667,zj:16749,Aj:18635,Bj:39305,Cj:18046,Dj:53969,Ej:8213,Fj:93926,Gj:102852,Hj:110099,Ij:22678,Jj:69076,Kj:100856,Lj:17736,Mj:3832,Nj:55759,Oj:64031,Pj:93044,Qj:93045,Rj:34388,Sj:17657,Tj:17655,Uj:39579,Vj:39578,Wj:77448,Xj:8196,Yj:11357,Zj:69877,ak:8197,bk:82039};function Xj(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||kb(b);this.assets=a.assets||{};this.attrs=a.attrs||kb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Xj.prototype.clone=function(){var a=new Xj,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ja(c)?a[b]=kb(c):a[b]=c}return a};function Yj(){M.call(this);this.f=[]}
v(Yj,M);Yj.prototype.u=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.La)}M.prototype.u.call(this)};var Zj=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ak(a){a=a||"";if(window.spf){var b=a.match(Zj);spf.style.load(a,b?b[1]:"",void 0)}else bk(a)}
function bk(a){var b=ck(a),c=document.getElementById(b),d=c&&Sf(c,"loaded");d||c&&!d||(c=dk(a,b,function(){Sf(c,"loaded")||(Qf(c),bg(b),R(Qa(cg,b),0))}))}
function dk(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=jd(a);d.rel="stylesheet";d.href=sb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ck(a){var b=Mc(document,"A");Rb(b,new J(a,Db));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ub(a)}
;function ek(a,b,c,d){M.call(this);var e=this;this.o=this.ea=a;this.I=b;this.A=!1;this.api={};this.ca=this.H=null;this.J=new N;Uc(this,Qa(Vc,this.J));this.l={};this.U=this.da=this.j=this.la=this.f=null;this.T=!1;this.m=this.D=null;this.fa={};this.Ia=["onReady"];this.ka=null;this.ua=NaN;this.aa={};this.i=d;fk(this);this.ga("WATCH_LATER_VIDEO_ADDED",this.cb.bind(this));this.ga("WATCH_LATER_VIDEO_REMOVED",this.eb.bind(this));this.ga("onAdAnnounce",this.Ka.bind(this));this.Ja=new Yj(this);Uc(this,Qa(Vc,
this.Ja));this.ba=0;c?this.ba=R(function(){e.loadNewVideoConfig(c)},0):d&&(gk(this),hk(this))}
v(ek,M);n=ek.prototype;n.getId=function(){return this.I};
n.loadNewVideoConfig=function(a){if(!this.h){this.ba&&(Uf(this.ba),this.ba=0);a instanceof Xj||(a=new Xj(a));this.la=a;this.f=a.clone();gk(this);this.da||(this.da=ik(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.o.style.width=ld(Number(a)||String(a));if(a=this.f.attrs.height)this.o.style.height=ld(Number(a)||String(a));hk(this);this.A&&jk(this)}};
function gk(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.j=b||a.j;"video-player"==a.j&&(a.j=a.I,a.i?a.i.rootElementId=a.I:a.f.attrs.id=a.I);a.o.id==a.j&&(a.j+="-player",a.i?a.i.rootElementId=a.j:a.f.attrs.id=a.j)}
n.Pa=function(){return this.la};
function jk(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function kk(a){var b=!0,c=lk(a);c&&a.f&&(a=mk(a),b=Sf(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function hk(a){if(!a.h&&!a.T){var b=kk(a);if(b&&"html5"==(lk(a)?"html5":null))a.U="html5",a.A||nk(a);else if(ok(a),a.U="html5",b&&a.m)a.ea.appendChild(a.m),nk(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.D=function(){c=!0;var d=pk(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.ea,e,a.i);nk(a)};
a.T=!0;b?a.D():(gg(mk(a),a.D),(b=a.i?a.i.cssUrl:a.f.assets.css)&&ak(b),qk(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function lk(a){var b=Ic(a.j);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.j));return b}
function nk(a){if(!a.h){var b=lk(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,!pk(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||rk(a)):a.ua=R(function(){nk(a)},50)}}
function rk(a){fk(a);a.A=!0;var b=lk(a);b.addEventListener&&(a.H=sk(a,b,"addEventListener"));b.removeEventListener&&(a.ca=sk(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=sk(a,b,e))}for(var f in a.l)a.H(f,a.l[f]);jk(a);a.da&&a.da(a.api);a.J.R("onReady",a.api)}
function sk(a,b,c){var d=b[c];return function(){try{return a.ka=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ka=e,Kf(e))}}}
function fk(a){a.A=!1;if(a.ca)for(var b in a.l)a.ca(b,a.l[b]);for(var c in a.aa)Uf(parseInt(c,10));a.aa={};a.H=null;a.ca=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ga.bind(a);a.api.removeEventListener=a.jb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Qa.bind(a);a.api.getPlayerType=a.Ra.bind(a);a.api.getCurrentVideoConfig=a.Pa.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.ab.bind(a)}
n.ab=function(){return this.A};
n.ga=function(a,b){var c=this,d=ik(this,b);if(d){if(!(0<=Wa(this.Ia,a)||this.l[a])){var e=tk(this,a);this.H&&this.H(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.A&&R(function(){d(c.api)},0)}};
n.jb=function(a,b){if(!this.h){var c=ik(this,b);c&&mf(this.J,a,c)}};
function ik(a,b){var c=b;if("string"==typeof b){if(a.fa[b])return a.fa[b];c=function(){var d=C(b);d&&d.apply(z,arguments)};
a.fa[b]=c}return c?c:null}
function tk(a,b){var c="ytPlayer"+b+a.I;a.l[b]=c;z[c]=function(d){var e=R(function(){if(!a.h){a.J.R(b,d);var f=a.aa,g=String(e);g in f&&delete f[g]}},0);
ib(a.aa,String(e))};
return c}
n.Ka=function(a){bg("a11y-announce",a)};
n.cb=function(a){bg("WATCH_LATER_VIDEO_ADDED",a)};
n.eb=function(a){bg("WATCH_LATER_VIDEO_REMOVED",a)};
n.Ra=function(){return this.U||(lk(this)?"html5":null)};
n.Qa=function(){return this.ka};
function ok(a){a.cancel();fk(a);a.U=null;a.f&&(a.f.loaded=!1);var b=lk(a);b&&(kk(a)||!qk(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));for(a=a.ea;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.D){var a=mk(this);mg(a,this.D)}Uf(this.ua);this.T=!1};
n.u=function(){ok(this);if(this.m&&this.f&&this.m.destroy)try{this.m.destroy()}catch(b){Jf(b)}this.fa=null;for(var a in this.l)z[this.l[a]]=null;this.la=this.f=this.api=null;delete this.ea;delete this.o;M.prototype.u.call(this)};
function qk(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function mk(a){return a.i?a.i.jsUrl:a.f.assets.js}
function pk(a,b){if(a.i)var c=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(c=a.f.args.fflags);return"true"==kh(c||"")[b]}
;var uk={},vk="player_uid_"+(1E9*Math.random()>>>0);
function wk(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=Ic(d):e=d;d=e;e=vk+"_"+La(d);var f=uk[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new ek(d,e,a,b);uk[e]=f;bg("player-added",f.api);Uc(f,Qa(xk,f));return f.api}
function xk(a){delete uk[a.getId()]}
;function yk(a){a=void 0===a?!1:a;M.call(this);this.f=new N(a);Uc(this,Qa(Vc,this.f))}
H(yk,M);yk.prototype.subscribe=function(a,b,c){return this.h?0:this.f.subscribe(a,b,c)};
yk.prototype.l=function(a,b){this.h||this.f.R.apply(this.f,arguments)};function zk(a,b,c){yk.call(this);this.i=a;this.j=b;this.m=c}
v(zk,yk);function Ak(a,b,c){if(!a.h){var d=a.i;d.h||a.j!=d.f||(a={id:a.m,command:b},c&&(a.data=c),d.f.postMessage(Ne(a),d.j))}}
zk.prototype.u=function(){this.j=this.i=null;yk.prototype.u.call(this)};function Bk(a){M.call(this);this.f=a;this.f.subscribe("command",this.Ga,this);this.i={};this.l=!1}
v(Bk,M);n=Bk.prototype;n.start=function(){this.l||this.h||(this.l=!0,Ak(this.f,"RECEIVING"))};
n.Ga=function(a,b,c){if(this.l&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.i||(c=E(this.lb,this,a),this.i[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Ck(this,d.event);break;default:this.j.isReady()&&this.j.isExternalMethodAvailable(a,c||null)&&(b=Dk(a,b||{}),c=this.j.handleExternalCall(a,b,c||null),(c=Ek(a,c))&&this.l&&!this.h&&Ak(this.f,a,c))}}};
n.lb=function(a,b){this.l&&!this.h&&Ak(this.f,a,this.na(a,b))};
n.na=function(a,b){if(null!=b)return{value:b}};
function Ck(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
n.u=function(){var a=this.f;a.h||mf(a.f,"command",this.Ga,this);this.f=null;for(var b in this.i)Ck(this,b);M.prototype.u.call(this)};function Fk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Gk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Hk(a)}
function Hk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Ik(a,b,c,d){if(D(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Jk(a,b){Bk.call(this,b);this.j=a;this.start()}
v(Jk,Bk);Jk.prototype.addEventListener=function(a,b){this.j.addEventListener(a,b)};
Jk.prototype.removeEventListener=function(a,b){this.j.removeEventListener(a,b)};
function Dk(a,b){switch(a){case "loadVideoById":return b=Hk(b),[b];case "cueVideoById":return b=Hk(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Ik(b),[b];case "cuePlaylist":return b=Ik(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Ek(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Jk.prototype.na=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Bk.prototype.na.call(this,a,b)};
Jk.prototype.u=function(){Bk.prototype.u.call(this);delete this.j};function Kk(a,b,c){M.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.A="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.o=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.A=e.origin);d.i=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.l&&(!d.m||0<=Wa(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.f=this.l=null;window.addEventListener("message",this.o)}
v(Kk,M);Kk.prototype.sendMessage=function(a,b){var c=b||this.i;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.A)}catch(e){Kf(e)}}};
Kk.prototype.u=function(){window.removeEventListener("message",this.o);M.prototype.u.call(this)};function Lk(){var a=this.h=new Kk(!!P("WIDGET_ID_ENFORCE")),b=E(this.ib,this);a.l=b;a.m=null;this.h.channel="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a;this.j=[];this.m=!1;this.l={}}
n=Lk.prototype;n.ib=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.l[a]||"onReady"==a||(this.addEventListener(a,Mk(this,a)),this.l[a]=!0)):this.Ca(a,b,c)};
n.Ca=function(){};
function Mk(a,b){return E(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Oa=function(){this.m=!0;this.sendMessage("initialDelivery",this.oa());this.sendMessage("onReady");I(this.j,this.Ha,this);this.j=[]};
n.oa=function(){return null};
function Nk(a,b){a.sendMessage("infoDelivery",b)}
n.Ha=function(a){this.m?this.h.sendMessage(a):this.j.push(a)};
n.sendMessage=function(a,b){this.Ha({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.h=null};function Ok(a){Lk.call(this);this.f=a;this.i=[];this.addEventListener("onReady",E(this.fb,this));this.addEventListener("onVideoProgress",E(this.pb,this));this.addEventListener("onVolumeChange",E(this.qb,this));this.addEventListener("onApiChange",E(this.kb,this));this.addEventListener("onPlaybackQualityChange",E(this.mb,this));this.addEventListener("onPlaybackRateChange",E(this.nb,this));this.addEventListener("onStateChange",E(this.ob,this));this.addEventListener("onWebglSettingsChanged",E(this.rb,
this))}
v(Ok,Lk);n=Ok.prototype;n.Ca=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Fk(a)){var d=b;if(D(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Hk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Gk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Ik.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Fk(a)&&Nk(this,this.oa())}};
n.fb=function(){var a=E(this.Oa,this);this.h.f=a};
n.addEventListener=function(a,b){this.i.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.oa=function(){if(!this.f)return null;var a=this.f.getApiInterface();ab(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=G()/1E3;return b};
n.ob=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:G()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Nk(this,a)};
n.mb=function(a){Nk(this,{playbackQuality:a})};
n.nb=function(a){Nk(this,{playbackRate:a})};
n.kb=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.qb=function(){Nk(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.pb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:G()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Nk(this,a)};
n.rb=function(){var a={sphericalProperties:this.f.getSphericalProperties()};Nk(this,a)};
n.dispose=function(){Lk.prototype.dispose.call(this);for(var a=0;a<this.i.length;a++){var b=this.i[a];this.f.removeEventListener(b.eventType,b.listener)}this.i=[]};function Pk(a,b,c){M.call(this);this.f=a;this.j=c;this.l=Cg(window,"message",E(this.m,this));this.i=new zk(this,a,b);Uc(this,Qa(Vc,this.i))}
v(Pk,M);Pk.prototype.m=function(a){var b;if(b=!this.h)if(b=a.origin==this.j)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.i,c.h||c.l("command",b.command,b.data,a.origin))}};
Pk.prototype.u=function(){Dg(this.l);this.f=null;M.prototype.u.call(this)};function Qk(){var a=kb(Rk),b;return af(new Ue(function(c,d){a.onSuccess=function(e){uh(e)?c(e):d(new Sk("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Sk("Unknown request error","net.unknown",e))};
a.Z=function(e){d(new Sk("Request timed out","net.timeout",e))};
b=Dh("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof bf&&b.abort();
return Ze(c)})}
function Sk(a,b,c){Ta.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Sk,Ta);function Tk(){this.h=0;this.f=null}
Tk.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.f),Te(a)?a:Uk(a)):2===this.h&&b?(a=b.call(c,this.f),Te(a)?a:Vk(a)):this};
Tk.prototype.getValue=function(){return this.f};
Tk.prototype.$goog_Thenable=!0;function Vk(a){var b=new Tk;a=void 0===a?null:a;b.h=2;b.f=void 0===a?null:a;return b}
function Uk(a){var b=new Tk;a=void 0===a?null:a;b.h=1;b.f=void 0===a?null:a;return b}
;function Wk(a){Ta.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Xk;this.isTimeout=a instanceof Sk&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof bf}
v(Wk,Ta);Wk.prototype.name="BiscottiError";function Xk(){Ta.call(this,"Biscotti ID is missing from server")}
v(Xk,Ta);Xk.prototype.name="BiscottiMissingError";var Rk={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Yk=null;
function hh(){if(Q("disable_biscotti_fetch_on_html5_clients"))return Ze(Error("Fetching biscotti ID is disabled."));if(Q("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Ec.get("CONSENT","").startsWith("YES+"))return Ze(Error("User has not consented - not fetching biscotti id."));if("1"===eb(Ff(),"args","privembed"))return Ze(Error("Biscotti ID is not available in private embed mode"));Yk||(Yk=af(Qk().then(Zk),function(a){return $k(2,a)}));
return Yk}
function Zk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Xk;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Xk;a=a.id;ih(a);Yk=Uk(a);al(18E5,2);return a}
function $k(a,b){var c=new Wk(b);ih("");Yk=Vk(c);0<a&&al(12E4,a-1);throw c;}
function al(a,b){R(function(){af(Qk().then(Zk,function(c){return $k(b,c)}),Ha)},a)}
function bl(){try{var a=C("yt.ads.biscotti.getId_");return a?a():hh()}catch(b){return Ze(b)}}
;function cl(a){if("1"!==eb(Ff(),"args","privembed")){a&&gh();try{bl().then(function(){},function(){}),R(cl,18E5)}catch(b){Jf(b)}}}
;var X=C("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",X,void 0);function dl(){this.f=P("ALT_PREF_COOKIE_NAME","PREF");var a=Ec.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(X[d]=c.toString())}}}
n=dl.prototype;n.get=function(a,b){el(a);fl(a);var c=void 0!==X[a]?X[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){el(a);fl(a);if(null==b)throw Error("ExpectedNotNull");X[a]=b.toString()};
n.remove=function(a){el(a);fl(a);delete X[a]};
n.save=function(){Nf(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in X)delete X[a]};
n.dump=function(){var a=[],b;for(b in X)a.push(b+"="+encodeURIComponent(String(X[b])));return a.join("&")};
function fl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function el(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function gl(a){a=void 0!==X[a]?X[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ia(dl);function hl(){this.h=new Set;this.f=new Set;this.i=new Map}
hl.prototype.clear=function(){this.h.clear();this.f.clear();this.i.clear()};
Ia(hl);function il(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!jl(a)||c.some(function(e){return!jl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())kl(a,d.value);return a}
function kl(a,b){for(var c in b)if(jl(b[c])){if(c in a&&!jl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});kl(a[c],b[c])}else if(ll(b[c])){if(c in a&&!ll(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);ml(a[c],b[c])}else a[c]=b[c];return a}
function ml(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,jl(d)?a.push(kl({},d)):ll(d)?a.push(ml([],d)):a.push(d);return a}
function jl(a){return"object"===typeof a&&!Array.isArray(a)}
function ll(a){return"object"===typeof a&&Array.isArray(a)}
;var nl={},ol=0;
function pl(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Oi("cobalt")){if(a){a instanceof J||(a="object"==typeof a&&a.W?a.V():String(a),Ib.test(a)?a=new J(a,Db):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Hb))&&Gb.test(b[1])?new J(a,Db):null));a=Eb(a||Kb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ob)){b="object"==typeof a;var f=null;b&&a.qa&&(f=a.ma());a=Qb(ub(b&&a.W?a.V():String(a)),f)}a instanceof Ob&&a.constructor===Ob?a=a.f:(Ja(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Ne(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Lc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Eh(a,b,"POST",e,d);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Eh(a,b,"GET","",d);else{b:{try{var g=new Ua({url:a});if(g.i&&g.h||g.j){var h=Wb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ac);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>l)w=l;q+=3;r=decodeURIComponent(a.substr(q,w-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(B){}f=!1}f?ql(a)?(b&&b(),f=!0):f=!1:f=!1;f||rl(a,b)}}
function ql(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function rl(a,b){var c=new Image,d=""+ol++;nl[d]=c;c.onload=c.onerror=function(){b&&nl[d]&&b();delete nl[d]};
c.src=a}
;function sl(a,b){Th.call(this,1,arguments)}
v(sl,Th);function tl(a,b){Th.call(this,1,arguments)}
v(tl,Th);var ul=new Uh("aft-recorded",sl),vl=new Uh("timing-sent",tl);var wl=window;function xl(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var yl=wl.performance||wl.mozPerformance||wl.msPerformance||wl.webkitPerformance||new xl;var zl=!1;E(yl.clearResourceTimings||yl.webkitClearResourceTimings||yl.mozClearResourceTimings||yl.msClearResourceTimings||yl.oClearResourceTimings||Ha,yl);function Al(a){var b=Bl(a);if(b.aft)return b.aft;a=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Cl(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ra("ytcsi."+(a||"")+"data_",b));return b}
function Dl(a){a=Cl(a);a.info||(a.info={});return a.info}
function Bl(a){a=Cl(a);a.tick||(a.tick={});return a.tick}
function El(a){var b=Cl(a).nonce;b||(b=xj(),Cl(a).nonce=b);return b}
function Fl(a){var b=Bl(a||""),c=Al(a);c&&!zl&&(Zh(ul,new sl(Math.round(c-b._start),a)),zl=!0)}
;function Gl(){var a=C("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function Hl(a){a=a||"";var b=C("ytcsi.reference");b||(Gl(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=Gl(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Il=z.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Il,void 0);function Jl(){this.f=0}
function Kl(){Jl.f||(Jl.f=new Jl);return Jl.f}
Jl.prototype.tick=function(a,b,c){Ll(this,"tick_"+a+"_"+b)||ej("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Jl.prototype.info=function(a,b){var c=Object.keys(a).join("");Ll(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,ej("latencyActionInfo",c))};
Jl.prototype.span=function(a,b){var c=Object.keys(a).join("");Ll(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,ej("latencyActionSpan",a))};
function Ll(a,b){Il[b]=Il[b]||{count:0};var c=Il[b];c.count++;c.time=S();a.f||(a.f=pg(function(){var d=S(),e;for(e in Il)Il[e]&&6E4<d-Il[e].time&&delete Il[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||oj(c)),!0):!1}
;var Y={},Ml=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid=
"requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",
Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",
Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Nl="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Ol={},Pl=(Ol.ccs="CANARY_STATE_",
Ol.mver="MEASUREMENT_VERSION_",Ol.pis="PLAYER_INITIALIZED_STATE_",Ol.yt_pt="LATENCY_PLAYER_",Ol.pa="LATENCY_ACTION_",Ol.yt_vst="VIDEO_STREAM_TYPE_",Ol),Ql="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Rl(a){return!!P("FORCE_CSI_ON_GEL",!1)||Q("csi_on_gel")||!!Cl(a).useGel}
function Sl(a){a=Cl(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Tl(a,b,c){if(null!==b)if(Dl(c)[a]=b,Rl(c)){var d=b;b=Sl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Ml){b=Ml[a];0<=Wa(Nl,b)&&(d=!!d);a in Pl&&"string"===typeof d&&(d=Pl[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=il({},e)}else 0<=Wa(Ql,a)||oj(new V("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Rl(c)&&(b=Hl(c||""),il(b.info,f),b=Sl(c),"gelInfos"in b||(b.gelInfos={}),il(b.gelInfos,f),c=El(c),Kl().info(f,c))}else Hl(c||"").info[a]=b}
function Ul(a,b,c){var d=Bl(c);if(Q("use_first_tick")&&Vl(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;yl.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),yl.mark(e))}e=b||S();d[a]=e;e=Sl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||S();if(Rl(c)){Hl(c||"").tick[a]=b||S();e=El(c);if("_start"===a){var f=Kl();Ll(f,"baseline_"+e)||ej("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Kl().tick(a,e,b);Fl(c);e=!0}else e=!1;if(!e){if(!C("yt.timing."+(c||"")+"pingSent_")&&
(f=P((c||"")+"TIMING_ACTION",void 0),e=Bl(c),C("ytglobal.timing"+(c||"")+"ready_")&&f&&Vl("_start")&&Al(c)))if(Fl(c),c)Wl(c);else{f=!0;var g=P("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Wl(c)}Hl(c||"").tick[a]=b||S()}return d[a]}
function Vl(a,b){var c=Bl(b);return a in c}
function Wl(a){if(!Rl(a)){var b=Bl(a),c=Dl(a),d=b._start,e=P("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:P((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Al(a);var h=Bl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Dl(a).yt_pvis&&"youtube"===e&&(Tl("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=S();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;Q("debug_csi_data")&&(c=C("yt.timing.csiData"),c||(c=[],Ra("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var r=void 0===r?"":r;ql(f,r)||pl(f,void 0,void 0,void 0,r)}else pl(f);A("yt.timing."+(a||"")+"pingSent_",!0,void 0);Zh(vl,new tl(m.aft+(Number(g)||0),a))}}
var Xl=window;Xl.ytcsi&&(Xl.ytcsi.info=Tl,Xl.ytcsi.tick=Ul);function Yl(){this.j=[];this.l=[];this.f=[];this.h=this.m=!1;this.o=new Map}
function Zl(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.h&&a.i&&a.i();var g=W(c),h=Gj(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Rj(a.client,g,h,[Bj(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Rj(a.client,g,h,[Bj(d.playerResponse.trackingParams)]))})}
function $l(a,b,c,d){if(a.h&&!d)a.j.push([b,c]);else{var e=W(d);c=c||Gj(d);e&&c&&Rj(a.client,e,c,[b])}}
function am(a,b){var c=void 0===c?0:c;a.o.set(b,c);"UNDEFINED_CSN"===W(c)||a.h||$l(a,b,void 0,c)}
Yl.prototype.clickCommand=function(a){var b=W();if(!a.clickTrackingParams||!b)return!1;Uj(this.client,b,Bj(a.clickTrackingParams));return!0};
function bm(a,b,c){c=void 0===c?{}:c;a.h=!0;a.i=function(){cm(a,b,c);var f=Gj(c.layer);if(f){for(var g=u(a.j),h=g.next();!h.done;h=g.next())h=h.value,$l(a,h[0],h[1]||f,c.layer);f=u(a.l);for(g=f.next();!g.done;g=f.next()){h=g.value;g=h[0];var k=h[1];if(a.h)a.l.push([g,k]);else{var l=Bj(g);if(h=W())g=a.client,k={csn:h,ve:l.getAsJson(),clientData:k},l={M:Jj(h),O:h},"UNDEFINED_CSN"==h?Sj("visualElementStateChanged",k,l):g?fh("visualElementStateChanged",k,g,l):ej("visualElementStateChanged",k,l)}}}};
W(c.layer)||a.i();if(c.xa)for(var d=u(c.xa),e=d.next();!e.done;e=d.next())Zl(a,e.value,c.layer);else pj(Error("Delayed screen needs a data promise."))}
function cm(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.gb?c.gb:c.layer;var e=W(d);d=Gj(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));if(e&&"UNDEFINED_CSN"!==e&&d){var g=a.client,h=!0,k=(h=void 0===h?!1:h)?16:8;k={csn:e,ve:d.getAsJson(),eventType:k};h={M:Jj(e),O:e,Na:h};"UNDEFINED_CSN"==e?Sj("visualElementHidden",k,h):g?fh("visualElementHidden",k,g,h):ej("visualElementHidden",
k,h)}try{var l=a.client;g=f;var m=c.wa,p=c.M,q=Pj(),r={csn:q,pageVe:(new Aj({veType:b,youtubeData:void 0})).getAsJson()};g&&g.visualElement?r.implicitGesture={parentCsn:g.clientScreenNonce,gesturedVe:g.visualElement.getAsJson()}:g&&oj(new V("newScreen() parent element does not have a VE - rootVe",b));m&&(r.cloneCsn=m);m={M:p,O:q};l?fh("screenCreated",r,l,m):ej("screenCreated",r,m);Zh(bi,new Mj(q));var w=q}catch(B){qj(B,{nk:b,rootVe:d,parentVisualElement:void 0,hk:e,mk:f,wa:c.wa});pj(B);return}Kj(w,
b,c.layer,c.M);a.f[a.f.length-1]&&!a.f[a.f.length-1].csn&&(a.f[a.f.length-1].csn=w||"");Tl("csn",w);hl.getInstance().clear();b=Gj(c.layer);e&&"UNDEFINED_CSN"!==e&&b&&(Q("web_mark_root_visible")||Q("music_web_mark_root_visible"))&&Tj(w,b);a.h=!1;a.i=void 0;e=u(a.o);for(w=e.next();!w.done;w=e.next())w=u(w.value),f=w.next().value,w.next().value===c.layer&&b&&$l(a,f,b,c.layer);Q("c3_client_side_screens")&&!a.m&&(c=Cj(49980),e=Cj(49981),Ra("historyVes",{backButtonVe:c,forwardButtonVe:e}),am(a,c),am(a,
e),a.m=!0)}
;var Z=null,dm=null,em=null,fm={};function gm(a){var b=a.id;a=Cj(a.ve_type);fm[b]=a;b=W();var c=Gj();b&&c&&Vj(b,c,a)}
function hm(){var a=Z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function im(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Kj(b,a),a=Gj()))for(var c in fm){var d=fm[c];d&&Vj(b,a,d)}}
function jm(a){fm[a.id]=Bj(a.tracking_params)}
function km(a){var b=W();a=fm[a.id];b&&a&&Uj(Q("use_default_events_client")?void 0:dj,b,a)}
function lm(a){a=a.ids;var b=W();if(b)for(var c=0;c<a.length;c++){var d=fm[a[c]];d&&Tj(b,d)}}
;A("yt.setConfig",O,void 0);A("yt.config.set",O,void 0);A("yt.setMsg",Mf,void 0);A("yt.msgs.set",Mf,void 0);A("yt.logging.errors.log",pj,void 0);
A("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);if(!a){var b=P("PLAYER_VARS",void 0);b&&(a={args:b})}cl(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);if((c=P("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){if(!c.serializedForcedExperimentIds){var d=
window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=mh(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Z=wk(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1)}else Z=wk(a);Z.addEventListener("onScreenChanged",im);Z.addEventListener("onLogClientVeCreated",gm);Z.addEventListener("onLogServerVeCreated",jm);Z.addEventListener("onLogVeClicked",km);Z.addEventListener("onLogVesShown",lm);Z.addEventListener("onVideoDataChange",
hm);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?em=new Ok(Z):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(dm=new Pk(window.parent,a,b),em=new Jk(Z,dm.i));tg()},void 0);
var mm=If(function(){Ul("ol");var a=dl.getInstance(),b=!!((gl("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Wd(document.body,"exp-invert-logo"))if(c&&!Wd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Wd(d,"inverted-hdpi")){var e=Ud(d);Vd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Wd(document.body,"inverted-hdpi")&&Xd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=gl(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete X[b]:(c=d.toString(16),X[b]=c.toString()),a.save());Yl.f||(Yl.f=new Yl);a=Yl.f;c=16623;var f=void 0===f?{}:f;Object.values(Wj).includes(c)||(oj(new V("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.f.push({rootVe:c,key:f.key||""});a.j=[];a.l=[];f.xa?bm(a,c,f):cm(a,c,f)}),nm=If(function(){Z&&Z.sendAbandonmentPing&&Z.sendAbandonmentPing();
P("PL_ATT")&&tj.dispose();for(var a=0,b=rg.length;a<b;a++){var c=rg[a];if(!isNaN(c)){var d=C("yt.scheduler.instance.cancelJob");d?d(c):Uf(c)}}rg.length=0;lg("//static.doubleclick.net/instream/ad_status.js");sg=!1;O("DCLKSTAT",0);Wc(em,dm);Z&&(Z.removeEventListener("onScreenChanged",im),Z.removeEventListener("onLogClientVeCreated",gm),Z.removeEventListener("onLogServerVeCreated",jm),Z.removeEventListener("onLogVeClicked",km),Z.removeEventListener("onLogVesShown",lm),Z.removeEventListener("onVideoDataChange",
hm),Z.destroy());fm={}});
window.addEventListener?(window.addEventListener("load",mm),window.addEventListener("unload",nm)):window.attachEvent&&(window.attachEvent("onload",mm),window.attachEvent("onunload",nm));Ra("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||uj);Ra("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||vj);Ra("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||ug);
Ra("yt.player.exports.navigate",C("yt.player.exports.navigate")||Lj);Ra("yt.util.activity.init",C("yt.util.activity.init")||Hg);Ra("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||Kg);Ra("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||Ig);}).call(this);
