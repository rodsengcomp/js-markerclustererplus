!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).MarkerClusterer=e()}(this,(function(){"use strict";var t=function(t){try{return!!t()}catch(t){return!0}},e=!t((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var i=function(t){return t&&t.Math==Math&&t},o=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||function(){return this}()||Function("return this")(),s=/#|\.prototype\./,a=function(e,r){var n=l[u(e)];return n==h||n!=c&&("function"==typeof r?t(r):!!r)},u=a.normalize=function(t){return String(t).replace(s,".").toLowerCase()},l=a.data={},c=a.NATIVE="N",h=a.POLYFILL="P",p=a,f=function(t){return"object"==typeof t?null!==t:"function"==typeof t},g=o.document,d=f(g)&&f(g.createElement),_=function(t){return d?g.createElement(t):{}},m=!e&&!t((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),y=function(t){if(!f(t))throw TypeError(String(t)+" is not an object");return t},v=function(t,e){if(!f(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!f(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!f(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!f(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},x=Object.defineProperty,b={f:e?x:function(t,e,r){if(y(t),e=v(e,!0),y(r),m)try{return x(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},S=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},M=e?function(t,e,r){return b.f(t,e,S(1,r))}:function(t,e,r){return t[e]=r,t},E=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},I=function(t){return Object(E(t))},C={}.hasOwnProperty,k=function(t,e){return C.call(I(t),e)},w=function(t,e){try{M(o,t,e)}catch(r){o[t]=e}return e},O="__core-js_shared__",T=o[O]||w(O,{}),A=Function.toString;"function"!=typeof T.inspectSource&&(T.inspectSource=function(t){return A.call(t)});var P,L,z,j=T.inspectSource,R=o.WeakMap,N="function"==typeof R&&/native code/.test(j(R)),B=n((function(t){(t.exports=function(t,e){return T[t]||(T[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.11.0",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),Z=0,D=Math.random(),F=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++Z+D).toString(36)},H=B("keys"),U=function(t){return H[t]||(H[t]=F(t))},$={},G="Object already initialized",V=o.WeakMap;if(N){var W=T.state||(T.state=new V),X=W.get,Y=W.has,K=W.set;P=function(t,e){if(Y.call(W,t))throw new TypeError(G);return e.facade=t,K.call(W,t,e),e},L=function(t){return X.call(W,t)||{}},z=function(t){return Y.call(W,t)}}else{var q=U("state");$[q]=!0,P=function(t,e){if(k(t,q))throw new TypeError(G);return e.facade=t,M(t,q,e),e},L=function(t){return k(t,q)?t[q]:{}},z=function(t){return k(t,q)}}var J,Q={set:P,get:L,has:z,enforce:function(t){return z(t)?L(t):P(t,{})},getterFor:function(t){return function(e){var r;if(!f(e)||(r=L(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},tt=n((function(t){var e=Q.get,r=Q.enforce,n=String(String).split("String");(t.exports=function(t,e,i,s){var a,u=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,c=!!s&&!!s.noTargetGet;"function"==typeof i&&("string"!=typeof e||k(i,"name")||M(i,"name",e),(a=r(i)).source||(a.source=n.join("string"==typeof e?e:""))),t!==o?(u?!c&&t[e]&&(l=!0):delete t[e],l?t[e]=i:M(t,e,i)):l?t[e]=i:w(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||j(this)}))})),et={}.toString,rt=function(t){return et.call(t).slice(8,-1)},nt=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return y(r),function(t){if(!f(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(r,n):r.__proto__=n,r}}():void 0),it=function(t,e,r){var n,i;return nt&&"function"==typeof(n=e.constructor)&&n!==r&&f(i=n.prototype)&&i!==r.prototype&&nt(t,i),t},ot="".split,st=t((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==rt(t)?ot.call(t,""):Object(t)}:Object,at=function(t){return st(E(t))},ut=Math.ceil,lt=Math.floor,ct=function(t){return isNaN(t=+t)?0:(t>0?lt:ut)(t)},ht=Math.min,pt=function(t){return t>0?ht(ct(t),9007199254740991):0},ft=Math.max,gt=Math.min,dt=function(t,e){var r=ct(t);return r<0?ft(r+e,0):gt(r,e)},_t=function(t){return function(e,r,n){var i,o=at(e),s=pt(o.length),a=dt(n,s);if(t&&r!=r){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===r)return t||a||0;return!t&&-1}},mt={includes:_t(!0),indexOf:_t(!1)}.indexOf,yt=function(t,e){var r,n=at(t),i=0,o=[];for(r in n)!k($,r)&&k(n,r)&&o.push(r);for(;e.length>i;)k(n,r=e[i++])&&(~mt(o,r)||o.push(r));return o},vt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],xt=Object.keys||function(t){return yt(t,vt)},bt=e?Object.defineProperties:function(t,e){y(t);for(var r,n=xt(e),i=n.length,o=0;i>o;)b.f(t,r=n[o++],e[r]);return t},St=o,Mt=function(t){return"function"==typeof t?t:void 0},Et=function(t,e){return arguments.length<2?Mt(St[t])||Mt(o[t]):St[t]&&St[t][e]||o[t]&&o[t][e]},It=Et("document","documentElement"),Ct=U("IE_PROTO"),kt=function(){},wt=function(t){return"<script>"+t+"</"+"script>"},Ot=function(){try{J=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Ot=J?function(t){t.write(wt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(J):((e=_("iframe")).style.display="none",It.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(wt("document.F=Object")),t.close(),t.F);for(var r=vt.length;r--;)delete Ot.prototype[vt[r]];return Ot()};$[Ct]=!0;var Tt=Object.create||function(t,e){var r;return null!==t?(kt.prototype=y(t),r=new kt,kt.prototype=null,r[Ct]=t):r=Ot(),void 0===e?r:bt(r,e)},At=vt.concat("length","prototype"),Pt={f:Object.getOwnPropertyNames||function(t){return yt(t,At)}},Lt={}.propertyIsEnumerable,zt=Object.getOwnPropertyDescriptor,jt={f:zt&&!Lt.call({1:2},1)?function(t){var e=zt(this,t);return!!e&&e.enumerable}:Lt},Rt=Object.getOwnPropertyDescriptor,Nt={f:e?Rt:function(t,e){if(t=at(t),e=v(e,!0),m)try{return Rt(t,e)}catch(t){}if(k(t,e))return S(!jt.f.call(t,e),t[e])}},Bt="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Zt=RegExp("^"+Bt+Bt+"*"),Dt=RegExp(Bt+Bt+"*$"),Ft=function(t){return function(e){var r=String(E(e));return 1&t&&(r=r.replace(Zt,"")),2&t&&(r=r.replace(Dt,"")),r}},Ht={start:Ft(1),end:Ft(2),trim:Ft(3)},Ut=Pt.f,$t=Nt.f,Gt=b.f,Vt=Ht.trim,Wt="Number",Xt=o.Number,Yt=Xt.prototype,Kt=rt(Tt(Yt))==Wt,qt=function(t){var e,r,n,i,o,s,a,u,l=v(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=Vt(l)).charCodeAt(0))||45===e){if(88===(r=l.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+l}for(s=(o=l.slice(2)).length,a=0;a<s;a++)if((u=o.charCodeAt(a))<48||u>i)return NaN;return parseInt(o,n)}return+l};if(p(Wt,!Xt(" 0o1")||!Xt("0b1")||Xt("+0x1"))){for(var Jt,Qt=function(e){var r=arguments.length<1?0:e,n=this;return n instanceof Qt&&(Kt?t((function(){Yt.valueOf.call(n)})):rt(n)!=Wt)?it(new Xt(qt(r)),n,Qt):qt(r)},te=e?Ut(Xt):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),ee=0;te.length>ee;ee++)k(Xt,Jt=te[ee])&&!k(Qt,Jt)&&Gt(Qt,Jt,$t(Xt,Jt));Qt.prototype=Yt,Yt.constructor=Qt,tt(o,Wt,Qt)}var re,ne,ie={f:Object.getOwnPropertySymbols},oe=Et("Reflect","ownKeys")||function(t){var e=Pt.f(y(t)),r=ie.f;return r?e.concat(r(t)):e},se=function(t,e){for(var r=oe(e),n=b.f,i=Nt.f,o=0;o<r.length;o++){var s=r[o];k(t,s)||n(t,s,i(e,s))}},ae=Nt.f,ue=function(t,e){var r,n,i,s,a,u=t.target,l=t.global,c=t.stat;if(r=l?o:c?o[u]||w(u,{}):(o[u]||{}).prototype)for(n in e){if(s=e[n],i=t.noTargetGet?(a=ae(r,n))&&a.value:r[n],!p(l?n:u+(c?".":"#")+n,t.forced)&&void 0!==i){if(typeof s==typeof i)continue;se(s,i)}(t.sham||i&&i.sham)&&M(s,"sham",!0),tt(r,n,s,t)}},le=Array.isArray||function(t){return"Array"==rt(t)},ce="process"==rt(o.process),he=Et("navigator","userAgent")||"",pe=o.process,fe=pe&&pe.versions,ge=fe&&fe.v8;ge?ne=(re=ge.split("."))[0]+re[1]:he&&(!(re=he.match(/Edge\/(\d+)/))||re[1]>=74)&&(re=he.match(/Chrome\/(\d+)/))&&(ne=re[1]);var de=ne&&+ne,_e=!!Object.getOwnPropertySymbols&&!t((function(){return!Symbol.sham&&(ce?38===de:de>37&&de<41)})),me=_e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ye=B("wks"),ve=o.Symbol,xe=me?ve:ve&&ve.withoutSetter||F,be=function(t){return k(ye,t)&&(_e||"string"==typeof ye[t])||(_e&&k(ve,t)?ye[t]=ve[t]:ye[t]=xe("Symbol."+t)),ye[t]},Se=be("species"),Me=function(t,e){var r;return le(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!le(r.prototype)?f(r)&&null===(r=r[Se])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},Ee=function(t,e,r){var n=v(e);n in t?b.f(t,n,S(0,r)):t[n]=r},Ie=be("species"),Ce=function(e){return de>=51||!t((function(){var t=[];return(t.constructor={})[Ie]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},ke=Ce("splice"),we=Math.max,Oe=Math.min,Te=9007199254740991,Ae="Maximum allowed length exceeded";ue({target:"Array",proto:!0,forced:!ke},{splice:function(t,e){var r,n,i,o,s,a,u=I(this),l=pt(u.length),c=dt(t,l),h=arguments.length;if(0===h?r=n=0:1===h?(r=0,n=l-c):(r=h-2,n=Oe(we(ct(e),0),l-c)),l+r-n>Te)throw TypeError(Ae);for(i=Me(u,n),o=0;o<n;o++)(s=c+o)in u&&Ee(i,o,u[s]);if(i.length=n,r<n){for(o=c;o<l-n;o++)a=o+r,(s=o+n)in u?u[a]=u[s]:delete u[a];for(o=l;o>l-n+r;o--)delete u[o-1]}else if(r>n)for(o=l-n;o>c;o--)a=o+r-1,(s=o+n-1)in u?u[a]=u[s]:delete u[a];for(o=0;o<r;o++)u[o+c]=arguments[o+2];return u.length=l-n+r,i}});var Pe=Ce("slice"),Le=be("species"),ze=[].slice,je=Math.max;ue({target:"Array",proto:!0,forced:!Pe},{slice:function(t,e){var r,n,i,o=at(this),s=pt(o.length),a=dt(t,s),u=dt(void 0===e?s:e,s);if(le(o)&&("function"!=typeof(r=o.constructor)||r!==Array&&!le(r.prototype)?f(r)&&null===(r=r[Le])&&(r=void 0):r=void 0,r===Array||void 0===r))return ze.call(o,a,u);for(n=new(void 0===r?Array:r)(je(u-a,0)),i=0;a<u;a++,i++)a in o&&Ee(n,i,o[a]);return n.length=i,n}});var Re={};Re[be("toStringTag")]="z";var Ne="[object z]"===String(Re),Be=be("toStringTag"),Ze="Arguments"==rt(function(){return arguments}()),De=Ne?rt:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Be))?r:Ze?rt(e):"Object"==(n=rt(e))&&"function"==typeof e.callee?"Arguments":n},Fe=Ne?{}.toString:function(){return"[object "+De(this)+"]"};Ne||tt(Object.prototype,"toString",Fe,{unsafe:!0});var He=function(){var t=y(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Ue="toString",$e=RegExp.prototype,Ge=$e.toString,Ve=t((function(){return"/a/b"!=Ge.call({source:"a",flags:"b"})})),We=Ge.name!=Ue;(Ve||We)&&tt(RegExp.prototype,Ue,(function(){var t=y(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in $e)?He.call(t):r)}),{unsafe:!0});var Xe=function(t,e){return(Xe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)};function Ye(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}Xe(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var Ke,qe,Je=function(){return(Je=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},Qe=[].join,tr=st!=Object,er=(Ke=",",!!(qe=[]["join"])&&t((function(){qe.call(null,Ke||function(){throw 1},1)})));function rr(t,e){return RegExp(t,e)}ue({target:"Array",proto:!0,forced:tr||!er},{join:function(t){return Qe.call(at(this),void 0===t?",":t)}}),ue({target:"Object",stat:!0,forced:t((function(){xt(1)}))},{keys:function(t){return xt(I(t))}});var nr,ir,or={UNSUPPORTED_Y:t((function(){var t=rr("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:t((function(){var t=rr("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},sr=RegExp.prototype.exec,ar=B("native-string-replace",String.prototype.replace),ur=sr,lr=(nr=/a/,ir=/b*/g,sr.call(nr,"a"),sr.call(ir,"a"),0!==nr.lastIndex||0!==ir.lastIndex),cr=or.UNSUPPORTED_Y||or.BROKEN_CARET,hr=void 0!==/()??/.exec("")[1];(lr||hr||cr)&&(ur=function(t){var e,r,n,i,o=this,s=cr&&o.sticky,a=He.call(o),u=o.source,l=0,c=t;return s&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),c=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(u="(?: "+u+")",c=" "+c,l++),r=new RegExp("^(?:"+u+")",a)),hr&&(r=new RegExp("^"+u+"$(?!\\s)",a)),lr&&(e=o.lastIndex),n=sr.call(s?r:o,c),s?n?(n.input=n.input.slice(l),n[0]=n[0].slice(l),n.index=o.lastIndex,o.lastIndex+=n[0].length):o.lastIndex=0:lr&&n&&(o.lastIndex=o.global?n.index+n[0].length:e),hr&&n&&n.length>1&&ar.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n});var pr=ur;ue({target:"RegExp",proto:!0,forced:/./.exec!==pr},{exec:pr});var fr=be("species"),gr=!t((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),dr="$0"==="a".replace(/./,"$0"),_r=be("replace"),mr=!!/./[_r]&&""===/./[_r]("a","$0"),yr=!t((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),vr=function(e,r,n,i){var o=be(e),s=!t((function(){var t={};return t[o]=function(){return 7},7!=""[e](t)})),a=s&&!t((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[fr]=function(){return r},r.flags="",r[o]=/./[o]),r.exec=function(){return t=!0,null},r[o](""),!t}));if(!s||!a||"replace"===e&&(!gr||!dr||mr)||"split"===e&&!yr){var u=/./[o],l=n(o,""[e],(function(t,e,r,n,i){return e.exec===RegExp.prototype.exec?s&&!i?{done:!0,value:u.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:dr,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:mr}),c=l[0],h=l[1];tt(String.prototype,e,c),tt(RegExp.prototype,o,2==r?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)})}i&&M(RegExp.prototype[o],"sham",!0)},xr=be("match"),br=be("species"),Sr=function(t,e){var r,n=y(t).constructor;return void 0===n||null==(r=y(n)[br])?e:function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}(r)},Mr=function(t){return function(e,r){var n,i,o=String(E(e)),s=ct(r),a=o.length;return s<0||s>=a?t?"":void 0:(n=o.charCodeAt(s))<55296||n>56319||s+1===a||(i=o.charCodeAt(s+1))<56320||i>57343?t?o.charAt(s):n:t?o.slice(s,s+2):i-56320+(n-55296<<10)+65536}},Er={codeAt:Mr(!1),charAt:Mr(!0)}.charAt,Ir=function(t,e,r){return e+(r?Er(t,e).length:1)},Cr=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==rt(t))throw TypeError("RegExp#exec called on incompatible receiver");return pr.call(t,e)},kr=or.UNSUPPORTED_Y,wr=[].push,Or=Math.min,Tr=4294967295;vr("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n,i,o=String(E(this)),s=void 0===r?Tr:r>>>0;if(0===s)return[];if(void 0===t)return[o];if(!f(n=t)||!(void 0!==(i=n[xr])?i:"RegExp"==rt(n)))return e.call(o,t,s);for(var a,u,l,c=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,h+"g");(a=pr.call(g,o))&&!((u=g.lastIndex)>p&&(c.push(o.slice(p,a.index)),a.length>1&&a.index<o.length&&wr.apply(c,a.slice(1)),l=a[0].length,p=u,c.length>=s));)g.lastIndex===a.index&&g.lastIndex++;return p===o.length?!l&&g.test("")||c.push(""):c.push(o.slice(p)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var i=E(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,r):n.call(String(i),e,r)},function(t,i){var o=r(n,t,this,i,n!==e);if(o.done)return o.value;var s=y(t),a=String(this),u=Sr(s,RegExp),l=s.unicode,c=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(kr?"g":"y"),h=new u(kr?"^(?:"+s.source+")":s,c),p=void 0===i?Tr:i>>>0;if(0===p)return[];if(0===a.length)return null===Cr(h,a)?[a]:[];for(var f=0,g=0,d=[];g<a.length;){h.lastIndex=kr?0:g;var _,m=Cr(h,kr?a.slice(g):a);if(null===m||(_=Or(pt(h.lastIndex+(kr?g:0)),a.length))===f)g=Ir(a,g,l);else{if(d.push(a.slice(f,g)),d.length===p)return d;for(var v=1;v<=m.length-1;v++)if(d.push(m[v]),d.length===p)return d;g=f=_}}return d.push(a.slice(f)),d}]}),kr);var Ar=Math.floor,Pr="".replace,Lr=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,zr=/\$([$&'`]|\d{1,2})/g,jr=function(t,e,r,n,i,o){var s=r+t.length,a=n.length,u=zr;return void 0!==i&&(i=I(i),u=Lr),Pr.call(o,u,(function(o,u){var l;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":l=i[u.slice(1,-1)];break;default:var c=+u;if(0===c)return o;if(c>a){var h=Ar(c/10);return 0===h?o:h<=a?void 0===n[h-1]?u.charAt(1):n[h-1]+u.charAt(1):o}l=n[c-1]}return void 0===l?"":l}))},Rr=Math.max,Nr=Math.min;vr("replace",2,(function(t,e,r,n){var i=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,o=n.REPLACE_KEEPS_$0,s=i?"$":"$0";return[function(r,n){var i=E(this),o=null==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!i&&o||"string"==typeof n&&-1===n.indexOf(s)){var a=r(e,t,this,n);if(a.done)return a.value}var u=y(t),l=String(this),c="function"==typeof n;c||(n=String(n));var h=u.global;if(h){var p=u.unicode;u.lastIndex=0}for(var f=[];;){var g=Cr(u,l);if(null===g)break;if(f.push(g),!h)break;""===String(g[0])&&(u.lastIndex=Ir(l,pt(u.lastIndex),p))}for(var d,_="",m=0,v=0;v<f.length;v++){g=f[v];for(var x=String(g[0]),b=Rr(Nr(ct(g.index),l.length),0),S=[],M=1;M<g.length;M++)S.push(void 0===(d=g[M])?d:String(d));var E=g.groups;if(c){var I=[x].concat(S,b,l);void 0!==E&&I.push(E);var C=String(n.apply(void 0,I))}else C=jr(x,l,b,S,E,n);b>=m&&(_+=l.slice(m,b)+C,m=b+x.length)}return _+l.slice(m)}]}));var Br=function t(){!function(t,e){for(var r in e.prototype)t.prototype[r]=e.prototype[r]}(t,google.maps.OverlayView)};function Zr(t){return Object.keys(t).reduce((function(e,r){return t[r]&&e.push(r+":"+t[r]),e}),[]).join(";")}function Dr(t){return t?t+"px":void 0}var Fr=function(t){function e(e,r){var n=t.call(this)||this;return n.cluster_=e,n.styles_=r,n.center_=null,n.div_=null,n.sums_=null,n.visible_=!1,n.style=null,n.setMap(e.getMap()),n}return Ye(e,t),e.prototype.onAdd=function(){var t,e,r=this,n=this.cluster_.getMarkerClusterer(),i=google.maps.version.split("."),o=i[0],s=i[1],a=100*parseInt(o,10)+parseInt(s,10);this.div_=document.createElement("div"),this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",(function(){e=t})),google.maps.event.addDomListener(this.div_,"mousedown",(function(){t=!0,e=!1})),a>=332&&google.maps.event.addDomListener(this.div_,"touchstart",(function(t){t.stopPropagation()})),google.maps.event.addDomListener(this.div_,"click",(function(i){if(t=!1,!e){if(google.maps.event.trigger(n,"click",r.cluster_),google.maps.event.trigger(n,"clusterclick",r.cluster_),n.getZoomOnClick()){var o=n.getMaxZoom(),s=r.cluster_.getBounds();n.getMap().fitBounds(s),setTimeout((function(){n.getMap().fitBounds(s),null!==o&&n.getMap().getZoom()>o&&n.getMap().setZoom(o+1)}),100)}i.cancelBubble=!0,i.stopPropagation&&i.stopPropagation()}})),google.maps.event.addDomListener(this.div_,"mouseover",(function(){google.maps.event.trigger(n,"mouseover",r.cluster_)})),google.maps.event.addDomListener(this.div_,"mouseout",(function(){google.maps.event.trigger(n,"mouseout",r.cluster_)}))},e.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)},e.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px"}},e.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},e.prototype.show=function(){this.div_&&(this.div_.className=this.className_,this.div_.style.cssText=this.createCss_(this.getPosFromLatLng_(this.center_)),this.div_.innerHTML=(this.style.url?this.getImageElementHtml():"")+this.getLabelDivHtml(),void 0===this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""),this.visible_=!0},e.prototype.getLabelDivHtml=function(){return'\n<div aria-label="'+this.cluster_.getMarkerClusterer().ariaLabelFn(this.sums_.text)+'" style="'+Zr({position:"absolute",top:Dr(this.anchorText_[0]),left:Dr(this.anchorText_[1]),color:this.style.textColor,"font-size":Dr(this.style.textSize),"font-family":this.style.fontFamily,"font-weight":this.style.fontWeight,"font-style":this.style.fontStyle,"text-decoration":this.style.textDecoration,"text-align":"center",width:Dr(this.style.width),"line-height":Dr(this.style.textLineHeight)})+'" tabindex="0">\n  <span aria-hidden="true">'+this.sums_.text+"</span>\n</div>\n"},e.prototype.getImageElementHtml=function(){var t=(this.style.backgroundPosition||"0 0").split(" "),e=parseInt(t[0].replace(/^\s+|\s+$/g,""),10),r=parseInt(t[1].replace(/^\s+|\s+$/g,""),10),n={};if(this.cluster_.getMarkerClusterer().getEnableRetinaIcons())n={width:Dr(this.style.width),height:Dr(this.style.height)};else{var i=[-1*r,-1*e+this.style.width,-1*r+this.style.height,-1*e];n={clip:"rect("+i[0]+"px, "+i[1]+"px, "+i[2]+"px, "+i[3]+"px)"}}var o=this.sums_.url?{width:"100%",height:"100%"}:{},s=Zr(Je(Je({position:"absolute",top:Dr(r),left:Dr(e)},n),o));return'<img alt="'+this.sums_.text+'" aria-hidden="true" src="'+this.style.url+'" style="'+s+'"/>'},e.prototype.useStyle=function(t){this.sums_=t;var e=Math.max(0,t.index-1);e=Math.min(this.styles_.length-1,e),this.style=this.sums_.url?Je(Je({},this.styles_[e]),{url:this.sums_.url}):this.styles_[e],this.anchorText_=this.style.anchorText||[0,0],this.anchorIcon_=this.style.anchorIcon||[Math.floor(this.style.height/2),Math.floor(this.style.width/2)],this.className_=this.cluster_.getMarkerClusterer().getClusterClass()+" "+(this.style.className||"cluster-"+e)},e.prototype.setCenter=function(t){this.center_=t},e.prototype.createCss_=function(t){return Zr({"z-index":""+this.cluster_.getMarkerClusterer().getZIndex(),top:Dr(t.y),left:Dr(t.x),width:Dr(this.style.width),height:Dr(this.style.height),cursor:"pointer",position:"absolute","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-o-user-select":"none","user-select":"none"})},e.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return e.x=Math.floor(e.x-this.anchorIcon_[1]),e.y=Math.floor(e.y-this.anchorIcon_[0]),e},e}(Br),Hr=function(){function t(t){this.markerClusterer_=t,this.map_=this.markerClusterer_.getMap(),this.minClusterSize_=this.markerClusterer_.getMinimumClusterSize(),this.averageCenter_=this.markerClusterer_.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new Fr(this,this.markerClusterer_.getStyles())}return t.prototype.getSize=function(){return this.markers_.length},t.prototype.getMarkers=function(){return this.markers_},t.prototype.getCenter=function(){return this.center_},t.prototype.getMap=function(){return this.map_},t.prototype.getMarkerClusterer=function(){return this.markerClusterer_},t.prototype.getBounds=function(){for(var t=new google.maps.LatLngBounds(this.center_,this.center_),e=this.getMarkers(),r=0;r<e.length;r++)t.extend(e[r].getPosition());return t},t.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_},t.prototype.addMarker=function(t){if(this.isMarkerAlreadyAdded_(t))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,r=(this.center_.lat()*(e-1)+t.getPosition().lat())/e,n=(this.center_.lng()*(e-1)+t.getPosition().lng())/e;this.center_=new google.maps.LatLng(r,n),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();t.isAdded=!0,this.markers_.push(t);var i=this.markers_.length,o=this.markerClusterer_.getMaxZoom();if(null!==o&&this.map_.getZoom()>o)t.getMap()!==this.map_&&t.setMap(this.map_);else if(i<this.minClusterSize_)t.getMap()!==this.map_&&t.setMap(this.map_);else if(i===this.minClusterSize_)for(var s=0;s<i;s++)this.markers_[s].setMap(null);else t.setMap(null);return!0},t.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},t.prototype.calculateBounds_=function(){var t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},t.prototype.updateIcon=function(){var t=this.markers_.length,e=this.markerClusterer_.getMaxZoom();if(null!==e&&this.map_.getZoom()>e)this.clusterIcon_.hide();else if(t<this.minClusterSize_)this.clusterIcon_.hide();else{var r=this.markerClusterer_.getStyles().length,n=this.markerClusterer_.getCalculator()(this.markers_,r);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(n),this.clusterIcon_.show()}},t.prototype.isMarkerAlreadyAdded_=function(t){if(this.markers_.indexOf)return-1!==this.markers_.indexOf(t);for(var e=0;e<this.markers_.length;e++)if(t===this.markers_[e])return!0;return!1},t}(),Ur=function(t,e,r){return void 0!==t[e]?t[e]:r};return function(t){function e(r,n,i){void 0===n&&(n=[]),void 0===i&&(i={});var o=t.call(this)||this;return o.options=i,o.markers_=[],o.clusters_=[],o.listeners_=[],o.activeMap_=null,o.ready_=!1,o.ariaLabelFn=o.options.ariaLabelFn||function(){return""},o.zIndex_=o.options.zIndex||Number(google.maps.Marker.MAX_ZINDEX)+1,o.gridSize_=o.options.gridSize||60,o.minClusterSize_=o.options.minimumClusterSize||2,o.maxZoom_=o.options.maxZoom||null,o.styles_=o.options.styles||[],o.title_=o.options.title||"",o.zoomOnClick_=Ur(o.options,"zoomOnClick",!0),o.averageCenter_=Ur(o.options,"averageCenter",!1),o.ignoreHidden_=Ur(o.options,"ignoreHidden",!1),o.enableRetinaIcons_=Ur(o.options,"enableRetinaIcons",!1),o.imagePath_=o.options.imagePath||e.IMAGE_PATH,o.imageExtension_=o.options.imageExtension||e.IMAGE_EXTENSION,o.imageSizes_=o.options.imageSizes||e.IMAGE_SIZES,o.calculator_=o.options.calculator||e.CALCULATOR,o.batchSize_=o.options.batchSize||e.BATCH_SIZE,o.batchSizeIE_=o.options.batchSizeIE||e.BATCH_SIZE_IE,o.clusterClass_=o.options.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(o.batchSize_=o.batchSizeIE_),o.setupStyles_(),o.addMarkers(n,!0),o.setMap(r),o}return Ye(e,t),e.prototype.onAdd=function(){var t=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.prevZoom_=this.getMap().getZoom(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",(function(){var e=t.getMap(),r=e.minZoom||0,n=Math.min(e.maxZoom||100,e.mapTypes[e.getMapTypeId()].maxZoom),i=Math.min(Math.max(t.getMap().getZoom(),r),n);t.prevZoom_!=i&&(t.prevZoom_=i,t.resetViewport_(!1))})),google.maps.event.addListener(this.getMap(),"idle",(function(){t.redraw_()}))]},e.prototype.onRemove=function(){for(var t=0;t<this.markers_.length;t++)this.markers_[t].getMap()!==this.activeMap_&&this.markers_[t].setMap(this.activeMap_);for(t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();this.clusters_=[];for(t=0;t<this.listeners_.length;t++)google.maps.event.removeListener(this.listeners_[t]);this.listeners_=[],this.activeMap_=null,this.ready_=!1},e.prototype.draw=function(){},e.prototype.setupStyles_=function(){if(!(this.styles_.length>0))for(var t=0;t<this.imageSizes_.length;t++){var r=this.imageSizes_[t];this.styles_.push(e.withDefaultStyle({url:this.imagePath_+(t+1)+"."+this.imageExtension_,height:r,width:r}))}},e.prototype.fitMapToMarkers=function(t){for(var e=this.getMarkers(),r=new google.maps.LatLngBounds,n=0;n<e.length;n++)!e[n].getVisible()&&this.getIgnoreHidden()||r.extend(e[n].getPosition());this.getMap().fitBounds(r,t)},e.prototype.getGridSize=function(){return this.gridSize_},e.prototype.setGridSize=function(t){this.gridSize_=t},e.prototype.getMinimumClusterSize=function(){return this.minClusterSize_},e.prototype.setMinimumClusterSize=function(t){this.minClusterSize_=t},e.prototype.getMaxZoom=function(){return this.maxZoom_},e.prototype.setMaxZoom=function(t){this.maxZoom_=t},e.prototype.getZIndex=function(){return this.zIndex_},e.prototype.setZIndex=function(t){this.zIndex_=t},e.prototype.getStyles=function(){return this.styles_},e.prototype.setStyles=function(t){this.styles_=t},e.prototype.getTitle=function(){return this.title_},e.prototype.setTitle=function(t){this.title_=t},e.prototype.getZoomOnClick=function(){return this.zoomOnClick_},e.prototype.setZoomOnClick=function(t){this.zoomOnClick_=t},e.prototype.getAverageCenter=function(){return this.averageCenter_},e.prototype.setAverageCenter=function(t){this.averageCenter_=t},e.prototype.getIgnoreHidden=function(){return this.ignoreHidden_},e.prototype.setIgnoreHidden=function(t){this.ignoreHidden_=t},e.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_},e.prototype.setEnableRetinaIcons=function(t){this.enableRetinaIcons_=t},e.prototype.getImageExtension=function(){return this.imageExtension_},e.prototype.setImageExtension=function(t){this.imageExtension_=t},e.prototype.getImagePath=function(){return this.imagePath_},e.prototype.setImagePath=function(t){this.imagePath_=t},e.prototype.getImageSizes=function(){return this.imageSizes_},e.prototype.setImageSizes=function(t){this.imageSizes_=t},e.prototype.getCalculator=function(){return this.calculator_},e.prototype.setCalculator=function(t){this.calculator_=t},e.prototype.getBatchSizeIE=function(){return this.batchSizeIE_},e.prototype.setBatchSizeIE=function(t){this.batchSizeIE_=t},e.prototype.getClusterClass=function(){return this.clusterClass_},e.prototype.setClusterClass=function(t){this.clusterClass_=t},e.prototype.getMarkers=function(){return this.markers_},e.prototype.getTotalMarkers=function(){return this.markers_.length},e.prototype.getClusters=function(){return this.clusters_},e.prototype.getTotalClusters=function(){return this.clusters_.length},e.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw_()},e.prototype.addMarkers=function(t,e){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&this.pushMarkerTo_(t[r]);e||this.redraw_()},e.prototype.pushMarkerTo_=function(t){var e=this;t.getDraggable()&&google.maps.event.addListener(t,"dragend",(function(){e.ready_&&(t.isAdded=!1,e.repaint())})),t.isAdded=!1,this.markers_.push(t)},e.prototype.removeMarker=function(t,e){var r=this.removeMarker_(t);return!e&&r&&this.repaint(),r},e.prototype.removeMarkers=function(t,e){for(var r=!1,n=0;n<t.length;n++){var i=this.removeMarker_(t[n]);r=r||i}return!e&&r&&this.repaint(),r},e.prototype.removeMarker_=function(t){var e=-1;if(this.markers_.indexOf)e=this.markers_.indexOf(t);else for(var r=0;r<this.markers_.length;r++)if(t===this.markers_[r]){e=r;break}return-1!==e&&(t.setMap(null),this.markers_.splice(e,1),!0)},e.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=[]},e.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout((function(){for(var e=0;e<t.length;e++)t[e].remove()}),0)},e.prototype.getExtendedBounds=function(t){var e=this.getProjection(),r=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),n=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),i=e.fromLatLngToDivPixel(r);i.x+=this.gridSize_,i.y-=this.gridSize_;var o=e.fromLatLngToDivPixel(n);o.x-=this.gridSize_,o.y+=this.gridSize_;var s=e.fromDivPixelToLatLng(i),a=e.fromDivPixelToLatLng(o);return t.extend(s),t.extend(a),t},e.prototype.redraw_=function(){this.createClusters_(0)},e.prototype.resetViewport_=function(t){for(var e=0;e<this.clusters_.length;e++)this.clusters_[e].remove();this.clusters_=[];for(e=0;e<this.markers_.length;e++){var r=this.markers_[e];r.isAdded=!1,t&&r.setMap(null)}},e.prototype.distanceBetweenPoints_=function(t,e){var r=(e.lat()-t.lat())*Math.PI/180,n=(e.lng()-t.lng())*Math.PI/180,i=Math.sin(r/2)*Math.sin(r/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))},e.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},e.prototype.addToClosestCluster_=function(t){for(var e=4e4,r=null,n=0;n<this.clusters_.length;n++){var i,o=(i=this.clusters_[n]).getCenter();if(o){var s=this.distanceBetweenPoints_(o,t.getPosition());s<e&&(e=s,r=i)}}r&&r.isMarkerInClusterBounds(t)?r.addMarker(t):((i=new Hr(this)).addMarker(t),this.clusters_.push(i))},e.prototype.createClusters_=function(t){var e=this;if(this.ready_){var r;0===t&&(google.maps.event.trigger(this,"clusteringbegin",this),void 0!==this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),r=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));for(var n=this.getExtendedBounds(r),i=Math.min(t+this.batchSize_,this.markers_.length),o=t;o<i;o++){var s=this.markers_[o];!s.isAdded&&this.isMarkerInBounds_(s,n)&&(!this.ignoreHidden_||this.ignoreHidden_&&s.getVisible())&&this.addToClosestCluster_(s)}if(i<this.markers_.length)this.timerRefStatic=window.setTimeout((function(){e.createClusters_(i)}),0);else{delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this);for(o=0;o<this.clusters_.length;o++)this.clusters_[o].updateIcon()}}},e.CALCULATOR=function(t,e){for(var r=0,n=t.length,i=n;0!==i;)i=Math.floor(i/10),r++;return r=Math.min(r,e),{text:n.toString(),index:r,title:""}},e.withDefaultStyle=function(t){return Je({textColor:"black",textSize:11,textDecoration:"none",textLineHeight:t.height,fontWeight:"bold",fontStyle:"normal",fontFamily:"Arial,sans-serif",backgroundPosition:"0 0"},t)},e.BATCH_SIZE=2e3,e.BATCH_SIZE_IE=500,e.IMAGE_PATH="../images/m",e.IMAGE_EXTENSION="png",e.IMAGE_SIZES=[53,56,66,78,90],e}(Br)}));
//# sourceMappingURL=index.umd.js.map
