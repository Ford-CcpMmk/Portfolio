function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,r){var n,i;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.19a811eb.js","eyyUD":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,f,d,p={},h="object"==typeof document&&document.all,g=(d={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;p=d.IS_HTMLDDA?function(e){return"function"==typeof e||e===g}:function(e){return"function"==typeof e};var v,y={},m={};v=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var b=Function.prototype,_=b.call,w=v&&b.bind.bind(_,_);m=v?w:function(e){return function(){return _.apply(e,arguments)}};var k,E,S;S=function(e){return null==e};var $=TypeError;E=function(e){if(S(e))throw $("Can't call method on "+e);return e};var O=Object;k=function(e){return O(E(e))};var j=m({}.hasOwnProperty);y=Object.hasOwn||function(e,t){return j(k(e),t)};var L,M=Function.prototype,x=c&&Object.getOwnPropertyDescriptor,P=y(M,"name"),T={EXISTS:P,PROPER:P&&"something"===function(){}.name,CONFIGURABLE:P&&(!c||c&&x(M,"name").configurable)}.CONFIGURABLE,I={},H={},q=Object.defineProperty;L=function(e,t){try{q(a,e,{value:t,configurable:!0,writable:!0})}catch(r){a[e]=t}return t};var A="__core-js_shared__",F=a[A]||L(A,{});H=F;var N=m(Function.toString);p(H.inspectSource)||(H.inspectSource=function(e){return N(e)}),I=H.inspectSource;var C,R,D=a.WeakMap;R=p(D)&&/native code/.test(String(D));var W={},U=d.all;W=d.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:p(e)||e===U}:function(e){return"object"==typeof e?null!==e:p(e)};var G,B,z,J={},Y=a.document,V=W(Y)&&W(Y.createElement);z=function(e){return V?Y.createElement(e):{}},B=!c&&!u((function(){return 7!=Object.defineProperty(z("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(W(e))return e;throw Z(X(e)+" is not an object")};var ee,te,re={},ne=Function.prototype.call;re=v?ne.bind(ne):function(){return ne.apply(ne,arguments)};var ie,oe={},ae=function(e){return p(e)?e:void 0};ie=function(e,t){return arguments.length<2?ae(a[e]):a[e]&&a[e][t]};var se={};se=m({}.isPrototypeOf);var ce,ue,le,fe={};fe=ie("navigator","userAgent")||"";var de,pe,he=a.process,ge=a.Deno,ve=he&&he.versions||ge&&ge.version,ye=ve&&ve.v8;ye&&(pe=(de=ye.split("."))[0]>0&&de[0]<4?1:+(de[0]+de[1])),!pe&&fe&&(!(de=fe.match(/Edge\/(\d+)/))||de[1]>=74)&&(de=fe.match(/Chrome\/(\d+)/))&&(pe=+de[1]),le=pe,ue=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&le&&le<41})),ce=ue&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var me=Object;oe=ce?function(e){return"symbol"==typeof e}:function(e){var t=ie("Symbol");return p(t)&&se(t.prototype,me(e))};var be,_e,we,ke=String;we=function(e){try{return ke(e)}catch(e){return"Object"}};var Ee=TypeError;_e=function(e){if(p(e))return e;throw Ee(we(e)+" is not a function")},be=function(e,t){var r=e[t];return S(r)?void 0:_e(r)};var Se,$e=TypeError;Se=function(e,t){var r,n;if("string"===t&&p(r=e.toString)&&!W(n=re(r,e)))return n;if(p(r=e.valueOf)&&!W(n=re(r,e)))return n;if("string"!==t&&p(r=e.toString)&&!W(n=re(r,e)))return n;throw $e("Can't convert object to primitive value")};var Oe;(Oe=function(e,t){return H[e]||(H[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var je,Le=0,Me=Math.random(),xe=m(1..toString);je=function(e){return"Symbol("+(void 0===e?"":e)+")_"+xe(++Le+Me,36)};var Pe=Oe("wks"),Te=a.Symbol,Ie=Te&&Te.for,He=ce?Te:Te&&Te.withoutSetter||je,qe=TypeError,Ae=function(e){if(!y(Pe,e)||!ue&&"string"!=typeof Pe[e]){var t="Symbol."+e;ue&&y(Te,e)?Pe[e]=Te[e]:Pe[e]=ce&&Ie?Ie(t):He(t)}return Pe[e]}("toPrimitive");te=function(e,t){if(!W(e)||oe(e))return e;var r,n=be(e,Ae);if(n){if(void 0===t&&(t="default"),r=re(n,e,t),!W(r)||oe(r))return r;throw qe("Can't convert object to primitive value")}return void 0===t&&(t="number"),Se(e,t)},ee=function(e){var t=te(e,"string");return oe(t)?t:t+""};var Fe=TypeError,Ne=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,Re="enumerable",De="configurable",We="writable";G=c?Q?function(e,t,r){if(K(e),t=ee(t),K(r),"function"==typeof e&&"prototype"===t&&"value"in r&&We in r&&!r[We]){var n=Ce(e,t);n&&n[We]&&(e[t]=r.value,r={configurable:De in r?r[De]:n[De],enumerable:Re in r?r[Re]:n[Re],writable:!1})}return Ne(e,t,r)}:Ne:function(e,t,r){if(K(e),t=ee(t),K(r),B)try{return Ne(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Fe("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var Ue;Ue=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},J=c?function(e,t,r){return G(e,t,Ue(1,r))}:function(e,t,r){return e[t]=r,e};var Ge,Be=Oe("keys");Ge=function(e){return Be[e]||(Be[e]=je(e))};var ze={};ze={};var Je,Ye,Ve,Qe="Object already initialized",Ke=a.TypeError,Xe=a.WeakMap;if(R||H.state){var Ze=H.state||(H.state=new Xe);Ze.get=Ze.get,Ze.has=Ze.has,Ze.set=Ze.set,Je=function(e,t){if(Ze.has(e))throw Ke(Qe);return t.facade=e,Ze.set(e,t),t},Ye=function(e){return Ze.get(e)||{}},Ve=function(e){return Ze.has(e)}}else{var et=Ge("state");ze[et]=!0,Je=function(e,t){if(y(e,et))throw Ke(Qe);return t.facade=e,J(e,et,t),t},Ye=function(e){return y(e,et)?e[et]:{}},Ve=function(e){return y(e,et)}}var tt=(C={set:Je,get:Ye,has:Ve,enforce:function(e){return Ve(e)?Ye(e):Je(e,{})},getterFor:function(e){return function(t){var r;if(!W(t)||(r=Ye(t)).type!==e)throw Ke("Incompatible receiver, "+e+" required");return r}}}).enforce,rt=C.get,nt=Object.defineProperty,it=c&&!u((function(){return 8!==nt((function(){}),"length",{value:8}).length})),ot=String(String).split("String"),at=f=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!y(e,"name")||T&&e.name!==t)&&(c?nt(e,"name",{value:t,configurable:!0}):e.name=t),it&&r&&y(r,"arity")&&e.length!==r.arity&&nt(e,"length",{value:r.arity});try{r&&y(r,"constructor")&&r.constructor?c&&nt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tt(e);return y(n,"source")||(n.source=ot.join("string"==typeof t?t:"")),e};Function.prototype.toString=at((function(){return p(this)&&rt(this).source||I(this)}),"toString"),l=function(e,t,r){return r.get&&f(r.get,t,{getter:!0}),r.set&&f(r.set,t,{setter:!0}),G(e,t,r)};var st;st=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var ct=a.RegExp,ut=ct.prototype;c&&u((function(){var e=!0;try{ct(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(ut,"flags").get.call(t)!==n||r!==n}))&&l(ut,"flags",{configurable:!0,get:st});var lt,ft,dt,pt={}.propertyIsEnumerable,ht=Object.getOwnPropertyDescriptor,gt=ht&&!pt.call({1:2},1);dt=gt?function(e){var t=ht(this,e);return!!t&&t.enumerable}:pt;var vt,yt,mt={},bt=m({}.toString),_t=m("".slice);yt=function(e){return _t(bt(e),8,-1)};var wt=Object,kt=m("".split);mt=u((function(){return!wt("z").propertyIsEnumerable(0)}))?function(e){return"String"==yt(e)?kt(e,""):wt(e)}:wt,vt=function(e){return mt(E(e))};var Et,St=Object.getOwnPropertyDescriptor,$t=ft=c?St:function(e,t){if(e=vt(e),t=ee(t),B)try{return St(e,t)}catch(e){}if(y(e,t))return Ue(!re(dt,e,t),e[t])};Et=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(p(r)&&f(r,o,n),n.global)i?e[t]=r:L(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:G(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var Ot,jt,Lt,Mt,xt,Pt={},Tt={},It=Math.ceil,Ht=Math.floor;Tt=Math.trunc||function(e){var t=+e;return(t>0?Ht:It)(t)},xt=function(e){var t=+e;return t!=t||0===t?0:Tt(t)};var qt=Math.max,At=Math.min;Mt=function(e,t){var r=xt(e);return r<0?qt(r+t,0):At(r,t)};var Ft,Nt,Ct=Math.min;Nt=function(e){return e>0?Ct(xt(e),9007199254740991):0},Ft=function(e){return Nt(e.length)};var Rt=function(e){return function(t,r,n){var i,o=vt(t),a=Ft(o),s=Mt(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},Dt={includes:Rt(!0),indexOf:Rt(!1)}.indexOf,Wt=m([].push);Lt=function(e,t){var r,n=vt(e),i=0,o=[];for(r in n)!y(ze,r)&&y(n,r)&&Wt(o,r);for(;t.length>i;)y(n,r=t[i++])&&(~Dt(o,r)||Wt(o,r));return o};var Ut,Gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");jt=Object.getOwnPropertyNames||function(e){return Lt(e,Gt)},Ut=Object.getOwnPropertySymbols;var Bt=m([].concat);Pt=ie("Reflect","ownKeys")||function(e){var t=jt(K(e));return Ut?Bt(t,Ut(e)):t},Ot=function(e,t,r){for(var n=Pt(t),i=G,o=ft,a=0;a<n.length;a++){var s=n[a];y(e,s)||r&&y(r,s)||i(e,s,o(t,s))}};var zt={},Jt=/#|\.prototype\./,Yt=function(e,t){var r=Qt[Vt(e)];return r==Xt||r!=Kt&&(p(t)?u(t):!!t)},Vt=Yt.normalize=function(e){return String(e).replace(Jt,".").toLowerCase()},Qt=Yt.data={},Kt=Yt.NATIVE="N",Xt=Yt.POLYFILL="P";zt=Yt,lt=function(e,t){var r,n,i,o,s,c=e.target,u=e.global,l=e.stat;if(r=u?a:l?a[c]||L(c,{}):(a[c]||{}).prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(s=$t(r,n))&&s.value:r[n],!zt(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Ot(o,i)}(e.sham||i&&i.sham)&&J(o,"sham",!0),Et(r,n,o,e)}};var Zt,er={},tr=Function.prototype,rr=tr.apply,nr=tr.call;er="object"==typeof Reflect&&Reflect.apply||(v?nr.bind(rr):function(){return nr.apply(rr,arguments)});var ir,or,ar=(or=function(e){if("Function"===yt(e))return m(e)})(or.bind);ir=function(e,t){return _e(e),void 0===t?e:v?ar(e,t):function(){return e.apply(t,arguments)}};var sr={};sr=ie("document","documentElement");var cr={};cr=m([].slice);var ur,lr=TypeError;ur=function(e,t){if(e<t)throw lr("Not enough arguments");return e};var fr;fr=/(?:ipad|iphone|ipod).*applewebkit/i.test(fe);var dr;dr="process"==yt(a.process);var pr,hr,gr,vr,yr=a.setImmediate,mr=a.clearImmediate,br=a.process,_r=a.Dispatch,wr=a.Function,kr=a.MessageChannel,Er=a.String,Sr=0,$r={},Or="onreadystatechange";try{pr=a.location}catch(e){}var jr=function(e){if(y($r,e)){var t=$r[e];delete $r[e],t()}},Lr=function(e){return function(){jr(e)}},Mr=function(e){jr(e.data)},xr=function(e){a.postMessage(Er(e),pr.protocol+"//"+pr.host)};yr&&mr||(yr=function(e){ur(arguments.length,1);var t=p(e)?e:wr(e),r=cr(arguments,1);return $r[++Sr]=function(){er(t,void 0,r)},hr(Sr),Sr},mr=function(e){delete $r[e]},dr?hr=function(e){br.nextTick(Lr(e))}:_r&&_r.now?hr=function(e){_r.now(Lr(e))}:kr&&!fr?(vr=(gr=new kr).port2,gr.port1.onmessage=Mr,hr=ir(vr.postMessage,vr)):a.addEventListener&&p(a.postMessage)&&!a.importScripts&&pr&&"file:"!==pr.protocol&&!u(xr)?(hr=xr,a.addEventListener("message",Mr,!1)):hr=Or in z("script")?function(e){sr.appendChild(z("script"))[Or]=function(){sr.removeChild(this),jr(e)}}:function(e){setTimeout(Lr(e),0)});var Pr=(Zt={set:yr,clear:mr}).clear;lt({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Pr},{clearImmediate:Pr});var Tr=Zt.set;lt({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==Tr},{setImmediate:Tr});var Ir=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),s=new M(n||[]);return i(a,"_invoke",{value:$(e,r,s)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(i,o,a,s){var c=f(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function $(e,t,r){var n=d;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw o;return P()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(e,t,r);if("normal"===c.type){if(n=r.done?h:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function O(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function x(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Ir}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Ir:Function("r","regeneratorRuntime = r")(Ir)}const Hr="https://forkify-api.herokuapp.com/api/v2/recipes/",qr="8b5f0673-3cd9-4b18-abfc-4836256b1376",Ar=async function(e,t){try{const n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([n,(r=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${r} second`))}),1e3*r)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){throw e}var r},Fr={recipe:{},search:{query:"",results:[],page:1,resultsPerpage:10},bookmarks:[]},Nr=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},Cr=function(e=Fr.search.page){Fr.search.page=e;const t=(e-1)*Fr.search.resultsPerpage,r=e*Fr.search.resultsPerpage;return Fr.search.results.slice(t,r)},Rr=function(){localStorage.setItem("bookmarks",JSON.stringify(Fr.bookmarks))},Dr=function(e){Fr.bookmarks.push(e),e.id===Fr.recipe.id&&(Fr.recipe.bookmarked=!0),Rr()};!function(){const e=localStorage.getItem("bookmarks");e&&(Fr.bookmarks=JSON.parse(e))}();var Wr;Wr=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Ur{render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;const t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach(((e,t)=>{const r=i[t];e.isEqualNode(r)||""===e.firstChild?.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((e=>r.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${r(Wr)}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${r(Wr)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${r(Wr)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var Gr;function Br(e,t,r,n,i){const o=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&o.push(t);let a=0,s=1,c=e,u=t;for(;a<=o.length;)c%o[a]==0&&u%o[a]==0?(s*=o[a],c/=o[a],u/=o[a]):a++;return function(e,t,r,n){return 1===e&&1===t?`${r=`${n}${(parseInt(r)+1).toString()}`}`:0===t?`${n}${r}`:"0"==r?`${n}${t}/${e}`:`${n}${r} ${t}/${e}`}(u,c,r,n)}Gr=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const r=e.toString(),n=r.split(".");let i,o=n[0];if("0"==i&&"0"!==o)return o;if("0"==i&&"0"==o)return"0";if(i=r.length>=17?n[1].slice(0,n[1].length-1):n[1],"99"==i&&"0"!==o)return`${o} 99/100`;if("99"==i&&"0"==o)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return o;let a=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&i.length>2){let e=a[0].split("").reverse().join(""),r=a[1].split("").reverse().join("");if(r.length>1){let e=r.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(r=e[0])}return r.length>1&&r.length%2==0&&(r=parseInt(r.slice(0,r.length/2),10)-parseInt(r.slice(r.length/2,r.length),10)==0?r.slice(0,r.length/2):r),function(e,t,r,n,i){const o=!0,a=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return Br(l,(u-1)*s,n,i,o)}(i,r,e,o,t)}return function(e,t,r){const n=!1,i=parseInt(e,10),o=Math.pow(10,e.length);return Br(i,o,t,r,n)}(i,o,t)};var zr=new class extends Ur{_parentElement=document.querySelector(".recipe");_data;_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--update-servings");if(!r)return;const{updateTo:n}=r.dataset;+n>0&&e(+n)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return` \n    <figure class="recipe__fig">\n      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n      <h1 class="recipe__title">\n        <span>${this._data.title}</span>\n      </h1>\n    </figure>\n\n    <div class="recipe__details">\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${r(Wr)}#icon-clock"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n        <span class="recipe__info-text">minutes</span>\n      </div>\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${r(Wr)}#icon-users"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n        <span class="recipe__info-text">servings</span>\n\n        <div class="recipe__info-buttons">\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n            <svg>\n              <use href="${r(Wr)}#icon-minus-circle"></use>\n            </svg>\n          </button>\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n            <svg>\n              <use href="${r(Wr)}#icon-plus-circle"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n\n      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n      <svg>\n      <use href="${r(Wr)}#icon-user"></use>\n      </svg>\n    </div>\n      <button class="btn--round btn--bookmark">\n        <svg class="">\n          <use href="${r(Wr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n        </svg>\n      </button>\n    </div>\n\n    <div class="recipe__ingredients">\n      <h2 class="heading--2">Recipe ingredients</h2>\n      <ul class="recipe__ingredient-list">\n\n      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n\n      </ul>\n    </div>\n\n    <div class="recipe__directions">\n      <h2 class="heading--2">How to cook it</h2>\n      <p class="recipe__directions-text">\n        This recipe was carefully designed and tested by\n        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n        directions at their website.\n      </p>\n      <a\n        class="btn--small recipe__btn"\n        href="${this._data.sourceUrl}"\n        target="_blank"\n      >\n        <span>Directions</span>\n        <svg class="search__icon">\n          <use href="${r(Wr)}#icon-arrow-right"></use>\n        </svg>\n      </a>\n    </div>`}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${r(Wr)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?r(Gr)(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n  `}};var Jr=new class{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};class Yr extends Ur{_generateMarkup(){return this._data.map(this._generateMarkupPreview).join()}_generateMarkupPreview(e){const t=window.location.hash.slice(1);return`\n        <li class="preview">\n        <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">\n          <figure class="preview__fig">\n            <img src="${e.image}" alt="Test" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${e.title}</h4>\n            <p class="preview__publisher">${e.publisher}</p>\n            <div class="preview__user-generated ${e.key?"":"hidden"}">\n              <svg>\n              <use href="${r(Wr)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n          \n        </a>\n      </li>\n    `}}var Vr=new class extends Yr{_parentElement=document.querySelector(".results");_errorMessage="No recipes for this query. Please try another one!";_successMessage="Start by searching for a recipe or an ingredient. Have fun!"};var Qr=new class extends Ur{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--inline");if(!r)return;const n=+r.dataset.goto;e(n)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerpage);return 1===e&&t>1?this._generateMarkupButton(1):e===t&&t>1?this._generateMarkupButton(-1):e<t?`${this._generateMarkupButton(1)+this._generateMarkupButton(-1)}`:""}_generateMarkupButton(e){const t=this._data.page;return`\n      <button data-goto = "${e+t}"class="btn--inline pagination__btn--${e>0?"next":"prev"}">\n      <span>Page ${e+t}</span>\n      <svg class="search__icon">\n        <use href="${r(Wr)}#icon-arrow-${e>0?"right":"left"}"></use>\n      </svg>\n    </button> `}};var Kr=new class extends Yr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find an bookmark a recipe ;)";_successMessage="Start by searching for a recipe or an ingredient. Have fun!";addHandlerRender(e){window.addEventListener("load",e)}};var Xr=new class extends Ur{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const r=[...new FormData(this)],n=Object.fromEntries(r);e(n)}))}_generateMarkup(){}};const Zr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;zr.renderSpinner(),Vr.update(Cr()),Kr.update(Fr.bookmarks),await async function(e){try{const t=await Ar(`${Hr}${e}?key=${qr}`);Fr.recipe=Nr(t),Fr.bookmarks.some((t=>t.id===e))?Fr.recipe.bookmarked=!0:Fr.recipe.bookmarked=!1,console.log(Fr.recipe)}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),zr.render(Fr.recipe)}catch(e){zr.renderError()}},en=async function(){try{Vr.renderSpinner();const e=Jr.getQuery();if(!e)return;await async function(e){try{Fr.search.query=e;const t=await Ar(`${Hr}?search=${e}&key=${qr}`);console.log(t),Fr.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Fr.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),Vr.render(Cr(1)),Qr.render(Fr.search)}catch(e){console.log(e)}},tn=function(e){Vr.render(Cr(e)),Qr.render(Fr.search)},rn=function(e){!function(e){Fr.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Fr.recipe.servings})),Fr.recipe.servings=e}(e),zr.update(Fr.recipe)},nn=function(){Fr.recipe.bookmarked?function(e){const t=Fr.bookmarks.findIndex((t=>t.id===e));Fr.bookmarks.splice(t,1),e===Fr.recipe.id&&(Fr.recipe.bookmarked=!1),Rr()}(Fr.recipe.id):Dr(Fr.recipe),zr.update(Fr.recipe),Kr.render(Fr.bookmarks)},on=function(){Kr.render(Fr.bookmarks)},an=async function(e){try{Xr.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format ;)");const[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}})),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await Ar(`${Hr}?key=${qr}`,r);Fr.recipe=Nr(n),Dr(Fr.recipe)}catch(e){throw e}}(e),console.log(Fr.recipe),zr.render(Fr.recipe),Xr.renderMessage(),Kr.render(Fr.bookmarks),window.history.pushState(null,"",`#${Fr.recipe.id}`),setTimeout((function(){Xr.toggleWindow()}),2500)}catch(e){console.error("💥",e),Xr.renderError(e.message)}};Kr.addHandlerRender(on),zr.addHandlerRender(Zr),zr.addHandlerUpdateServings(rn),zr.addHandlerAddBookmark(nn),Jr.addHandlerSearch(en),Qr.addHandlerClick(tn),Xr.addHandlerUpload(an);
//# sourceMappingURL=index.19a811eb.js.map