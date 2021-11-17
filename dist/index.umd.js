!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).MarkerClusterer=e()}(this,(function(){"use strict";var t,e,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=function(t){try{return!!t()}catch(t){return!0}},i=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o=function(t){return t&&t.Math==Math&&t},s=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof r&&r)||function(){return this}()||Function("return this")(),a=Function.prototype,u=a.bind,c=a.call,l=u&&u.bind(c),h=u?function(t){return t&&l(c,t)}:function(t){return t&&function(){return c.apply(t,arguments)}},p=function(t){return"function"==typeof t},f=n,g=p,d=/#|\.prototype\./,v=function(t,e){var r=_[m(t)];return r==b||r!=y&&(g(e)?f(e):!!e)},m=v.normalize=function(t){return String(t).replace(d,".").toLowerCase()},_=v.data={},y=v.NATIVE="N",b=v.POLYFILL="P",x=v,M={exports:{}},S=s.TypeError,I=function(t){if(null==t)throw S("Can't call method on "+t);return t},k=I,C=s.Object,w=function(t){return C(k(t))},E=w,O=h({}.hasOwnProperty),P=Object.hasOwn||function(t,e){return O(E(t),e)},T={},A=p,L=function(t){return"object"==typeof t?null!==t:A(t)},j=L,z=s.document,R=j(z)&&j(z.createElement),N=function(t){return R?z.createElement(t):{}},B=N,Z=!i&&!n((function(){return 7!=Object.defineProperty(B("div"),"a",{get:function(){return 7}}).a})),F=s,D=L,H=F.String,$=F.TypeError,G=function(t){if(D(t))return t;throw $(H(t)+" is not an object")},U=Function.prototype.call,V=U.bind?U.bind(U):function(){return U.apply(U,arguments)},W=s,X=p,Y=function(t){return X(t)?t:void 0},q=function(t,e){return arguments.length<2?Y(W[t]):W[t]&&W[t][e]},K=h({}.isPrototypeOf),J=s,Q=q("navigator","userAgent")||"",tt=J.process,et=J.Deno,rt=tt&&tt.versions||et&&et.version,nt=rt&&rt.v8;nt&&(e=(t=nt.split("."))[0]>0&&t[0]<4?1:+(t[0]+t[1])),!e&&Q&&(!(t=Q.match(/Edge\/(\d+)/))||t[1]>=74)&&(t=Q.match(/Chrome\/(\d+)/))&&(e=+t[1]);var it=e,ot=it,st=n,at=!!Object.getOwnPropertySymbols&&!st((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&ot&&ot<41})),ut=at&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ct=q,lt=p,ht=K,pt=ut,ft=s.Object,gt=pt?function(t){return"symbol"==typeof t}:function(t){var e=ct("Symbol");return lt(e)&&ht(e.prototype,ft(t))},dt=s.String,vt=function(t){try{return dt(t)}catch(t){return"Object"}},mt=p,_t=vt,yt=s.TypeError,bt=function(t){if(mt(t))return t;throw yt(_t(t)+" is not a function")},xt=function(t,e){var r=t[e];return null==r?void 0:bt(r)},Mt=V,St=p,It=L,kt=s.TypeError,Ct={exports:{}},wt=s,Et=Object.defineProperty,Ot=function(t,e){try{Et(wt,t,{value:e,configurable:!0,writable:!0})}catch(r){wt[t]=e}return e},Pt=Ot,Tt="__core-js_shared__",At=s[Tt]||Pt(Tt,{}),Lt=At;(Ct.exports=function(t,e){return Lt[t]||(Lt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var jt=h,zt=0,Rt=Math.random(),Nt=jt(1..toString),Bt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Nt(++zt+Rt,36)},Zt=s,Ft=Ct.exports,Dt=P,Ht=Bt,$t=at,Gt=ut,Ut=Ft("wks"),Vt=Zt.Symbol,Wt=Vt&&Vt.for,Xt=Gt?Vt:Vt&&Vt.withoutSetter||Ht,Yt=function(t){if(!Dt(Ut,t)||!$t&&"string"!=typeof Ut[t]){var e="Symbol."+t;$t&&Dt(Vt,t)?Ut[t]=Vt[t]:Ut[t]=Gt&&Wt?Wt(e):Xt(e)}return Ut[t]},qt=V,Kt=L,Jt=gt,Qt=xt,te=function(t,e){var r,n;if("string"===e&&St(r=t.toString)&&!It(n=Mt(r,t)))return n;if(St(r=t.valueOf)&&!It(n=Mt(r,t)))return n;if("string"!==e&&St(r=t.toString)&&!It(n=Mt(r,t)))return n;throw kt("Can't convert object to primitive value")},ee=Yt,re=s.TypeError,ne=ee("toPrimitive"),ie=function(t,e){if(!Kt(t)||Jt(t))return t;var r,n=Qt(t,ne);if(n){if(void 0===e&&(e="default"),r=qt(n,t,e),!Kt(r)||Jt(r))return r;throw re("Can't convert object to primitive value")}return void 0===e&&(e="number"),te(t,e)},oe=ie,se=gt,ae=function(t){var e=oe(t,"string");return se(e)?e:e+""},ue=i,ce=Z,le=G,he=ae,pe=s.TypeError,fe=Object.defineProperty;T.f=ue?fe:function(t,e,r){if(le(t),e=he(e),le(r),ce)try{return fe(t,e,r)}catch(t){}if("get"in r||"set"in r)throw pe("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var ge=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},de=T,ve=ge,me=i?function(t,e,r){return de.f(t,e,ve(1,r))}:function(t,e,r){return t[e]=r,t},_e=p,ye=At,be=h(Function.toString);_e(ye.inspectSource)||(ye.inspectSource=function(t){return be(t)});var xe,Me,Se,Ie=ye.inspectSource,ke=p,Ce=Ie,we=s.WeakMap,Ee=ke(we)&&/native code/.test(Ce(we)),Oe=Ct.exports,Pe=Bt,Te=Oe("keys"),Ae=function(t){return Te[t]||(Te[t]=Pe(t))},Le={},je=Ee,ze=s,Re=h,Ne=L,Be=me,Ze=P,Fe=At,De=Ae,He=Le,$e="Object already initialized",Ge=ze.TypeError,Ue=ze.WeakMap;if(je||Fe.state){var Ve=Fe.state||(Fe.state=new Ue),We=Re(Ve.get),Xe=Re(Ve.has),Ye=Re(Ve.set);xe=function(t,e){if(Xe(Ve,t))throw new Ge($e);return e.facade=t,Ye(Ve,t,e),e},Me=function(t){return We(Ve,t)||{}},Se=function(t){return Xe(Ve,t)}}else{var qe=De("state");He[qe]=!0,xe=function(t,e){if(Ze(t,qe))throw new Ge($e);return e.facade=t,Be(t,qe,e),e},Me=function(t){return Ze(t,qe)?t[qe]:{}},Se=function(t){return Ze(t,qe)}}var Ke={set:xe,get:Me,has:Se,enforce:function(t){return Se(t)?Me(t):xe(t,{})},getterFor:function(t){return function(e){var r;if(!Ne(e)||(r=Me(e)).type!==t)throw Ge("Incompatible receiver, "+t+" required");return r}}},Je=i,Qe=P,tr=Function.prototype,er=Je&&Object.getOwnPropertyDescriptor,rr=Qe(tr,"name"),nr={EXISTS:rr,PROPER:rr&&"something"===function(){}.name,CONFIGURABLE:rr&&(!Je||Je&&er(tr,"name").configurable)},ir=s,or=p,sr=P,ar=me,ur=Ot,cr=Ie,lr=nr.CONFIGURABLE,hr=Ke.get,pr=Ke.enforce,fr=String(String).split("String");(M.exports=function(t,e,r,n){var i,o=!!n&&!!n.unsafe,s=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet,u=n&&void 0!==n.name?n.name:e;or(r)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!sr(r,"name")||lr&&r.name!==u)&&ar(r,"name",u),(i=pr(r)).source||(i.source=fr.join("string"==typeof u?u:""))),t!==ir?(o?!a&&t[e]&&(s=!0):delete t[e],s?t[e]=r:ar(t,e,r)):s?t[e]=r:ur(e,r)})(Function.prototype,"toString",(function(){return or(this)&&hr(this).source||cr(this)}));var gr=s,dr=p,vr=gr.String,mr=gr.TypeError,_r=h,yr=G,br=function(t){if("object"==typeof t||dr(t))return t;throw mr("Can't set "+vr(t)+" as a prototype")},xr=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=_r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return yr(r),br(n),e?t(r,n):r.__proto__=n,r}}():void 0),Mr=p,Sr=L,Ir=xr,kr={},Cr=h,wr=Cr({}.toString),Er=Cr("".slice),Or=function(t){return Er(wr(t),8,-1)},Pr=h,Tr=n,Ar=Or,Lr=s.Object,jr=Pr("".split),zr=Tr((function(){return!Lr("z").propertyIsEnumerable(0)}))?function(t){return"String"==Ar(t)?jr(t,""):Lr(t)}:Lr,Rr=zr,Nr=I,Br=function(t){return Rr(Nr(t))},Zr=Math.ceil,Fr=Math.floor,Dr=function(t){var e=+t;return e!=e||0===e?0:(e>0?Fr:Zr)(e)},Hr=Dr,$r=Math.max,Gr=Math.min,Ur=function(t,e){var r=Hr(t);return r<0?$r(r+e,0):Gr(r,e)},Vr=Dr,Wr=Math.min,Xr=function(t){return t>0?Wr(Vr(t),9007199254740991):0},Yr=Xr,qr=function(t){return Yr(t.length)},Kr=Br,Jr=Ur,Qr=qr,tn=function(t){return function(e,r,n){var i,o=Kr(e),s=Qr(o),a=Jr(n,s);if(t&&r!=r){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===r)return t||a||0;return!t&&-1}},en={includes:tn(!0),indexOf:tn(!1)},rn=P,nn=Br,on=en.indexOf,sn=Le,an=h([].push),un=function(t,e){var r,n=nn(t),i=0,o=[];for(r in n)!rn(sn,r)&&rn(n,r)&&an(o,r);for(;e.length>i;)rn(n,r=e[i++])&&(~on(o,r)||an(o,r));return o},cn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ln=un,hn=cn.concat("length","prototype");kr.f=Object.getOwnPropertyNames||function(t){return ln(t,hn)};var pn={},fn={},gn={}.propertyIsEnumerable,dn=Object.getOwnPropertyDescriptor,vn=dn&&!gn.call({1:2},1);fn.f=vn?function(t){var e=dn(this,t);return!!e&&e.enumerable}:gn;var mn=i,_n=V,yn=fn,bn=ge,xn=Br,Mn=ae,Sn=P,In=Z,kn=Object.getOwnPropertyDescriptor;pn.f=mn?kn:function(t,e){if(t=xn(t),e=Mn(e),In)try{return kn(t,e)}catch(t){}if(Sn(t,e))return bn(!_n(yn.f,t,e),t[e])};var Cn=h(1..valueOf),wn={};wn[Yt("toStringTag")]="z";var En="[object z]"===String(wn),On=s,Pn=En,Tn=p,An=Or,Ln=Yt("toStringTag"),jn=On.Object,zn="Arguments"==An(function(){return arguments}()),Rn=Pn?An:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=jn(t),Ln))?r:zn?An(e):"Object"==(n=An(e))&&Tn(e.callee)?"Arguments":n},Nn=Rn,Bn=s.String,Zn=function(t){if("Symbol"===Nn(t))throw TypeError("Cannot convert a Symbol value to a string");return Bn(t)},Fn=I,Dn=Zn,Hn=h("".replace),$n="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Gn=RegExp("^"+$n+$n+"*"),Un=RegExp($n+$n+"*$"),Vn=function(t){return function(e){var r=Dn(Fn(e));return 1&t&&(r=Hn(r,Gn,"")),2&t&&(r=Hn(r,Un,"")),r}},Wn={start:Vn(1),end:Vn(2),trim:Vn(3)},Xn=i,Yn=s,qn=h,Kn=x,Jn=M.exports,Qn=P,ti=function(t,e,r){var n,i;return Ir&&Mr(n=e.constructor)&&n!==r&&Sr(i=n.prototype)&&i!==r.prototype&&Ir(t,i),t},ei=K,ri=gt,ni=ie,ii=n,oi=kr.f,si=pn.f,ai=T.f,ui=Cn,ci=Wn.trim,li="Number",hi=Yn.Number,pi=hi.prototype,fi=Yn.TypeError,gi=qn("".slice),di=qn("".charCodeAt),vi=function(t){var e=ni(t,"number");return"bigint"==typeof e?e:mi(e)},mi=function(t){var e,r,n,i,o,s,a,u,c=ni(t,"number");if(ri(c))throw fi("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=ci(c),43===(e=di(c,0))||45===e){if(88===(r=di(c,2))||120===r)return NaN}else if(48===e){switch(di(c,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(s=(o=gi(c,2)).length,a=0;a<s;a++)if((u=di(o,a))<48||u>i)return NaN;return parseInt(o,n)}return+c};if(Kn(li,!hi(" 0o1")||!hi("0b1")||hi("+0x1"))){for(var _i,yi=function(t){var e=arguments.length<1?0:hi(vi(t)),r=this;return ei(pi,r)&&ii((function(){ui(r)}))?ti(Object(e),r,yi):e},bi=Xn?oi(hi):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),xi=0;bi.length>xi;xi++)Qn(hi,_i=bi[xi])&&!Qn(yi,_i)&&ai(yi,_i,si(hi,_i));yi.prototype=pi,pi.constructor=yi,Jn(Yn,li,yi)}var Mi={};Mi.f=Object.getOwnPropertySymbols;var Si=q,Ii=kr,ki=Mi,Ci=G,wi=h([].concat),Ei=Si("Reflect","ownKeys")||function(t){var e=Ii.f(Ci(t)),r=ki.f;return r?wi(e,r(t)):e},Oi=P,Pi=Ei,Ti=pn,Ai=T,Li=s,ji=pn.f,zi=me,Ri=M.exports,Ni=Ot,Bi=function(t,e){for(var r=Pi(e),n=Ai.f,i=Ti.f,o=0;o<r.length;o++){var s=r[o];Oi(t,s)||n(t,s,i(e,s))}},Zi=x,Fi=function(t,e){var r,n,i,o,s,a=t.target,u=t.global,c=t.stat;if(r=u?Li:c?Li[a]||Ni(a,{}):(Li[a]||{}).prototype)for(n in e){if(o=e[n],i=t.noTargetGet?(s=ji(r,n))&&s.value:r[n],!Zi(u?n:a+(c?".":"#")+n,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Bi(o,i)}(t.sham||i&&i.sham)&&zi(o,"sham",!0),Ri(r,n,o,t)}},Di=Or,Hi=Array.isArray||function(t){return"Array"==Di(t)},$i=h,Gi=n,Ui=p,Vi=Rn,Wi=Ie,Xi=function(){},Yi=[],qi=q("Reflect","construct"),Ki=/^\s*(?:class|function)\b/,Ji=$i(Ki.exec),Qi=!Ki.exec(Xi),to=function(t){if(!Ui(t))return!1;try{return qi(Xi,Yi,t),!0}catch(t){return!1}},eo=!qi||Gi((function(){var t;return to(to.call)||!to(Object)||!to((function(){t=!0}))||t}))?function(t){if(!Ui(t))return!1;switch(Vi(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return Qi||!!Ji(Ki,Wi(t))}:to,ro=s,no=Hi,io=eo,oo=L,so=Yt("species"),ao=ro.Array,uo=function(t){var e;return no(t)&&(e=t.constructor,(io(e)&&(e===ao||no(e.prototype))||oo(e)&&null===(e=e[so]))&&(e=void 0)),void 0===e?ao:e},co=ae,lo=T,ho=ge,po=function(t,e,r){var n=co(e);n in t?lo.f(t,n,ho(0,r)):t[n]=r},fo=n,go=it,vo=Yt("species"),mo=function(t){return go>=51||!fo((function(){var e=[];return(e.constructor={})[vo]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},_o=Fi,yo=s,bo=Ur,xo=Dr,Mo=qr,So=w,Io=function(t,e){return new(uo(t))(0===e?0:e)},ko=po,Co=mo("splice"),wo=yo.TypeError,Eo=Math.max,Oo=Math.min,Po=9007199254740991,To="Maximum allowed length exceeded";_o({target:"Array",proto:!0,forced:!Co},{splice:function(t,e){var r,n,i,o,s,a,u=So(this),c=Mo(u),l=bo(t,c),h=arguments.length;if(0===h?r=n=0:1===h?(r=0,n=c-l):(r=h-2,n=Oo(Eo(xo(e),0),c-l)),c+r-n>Po)throw wo(To);for(i=Io(u,n),o=0;o<n;o++)(s=l+o)in u&&ko(i,o,u[s]);if(i.length=n,r<n){for(o=l;o<c-n;o++)a=o+r,(s=o+n)in u?u[a]=u[s]:delete u[a];for(o=c;o>c-n+r;o--)delete u[o-1]}else if(r>n)for(o=c-n;o>l;o--)a=o+r-1,(s=o+n-1)in u?u[a]=u[s]:delete u[a];for(o=0;o<r;o++)u[o+l]=arguments[o+2];return u.length=c-n+r,i}});var Ao=h([].slice),Lo=Fi,jo=s,zo=Hi,Ro=eo,No=L,Bo=Ur,Zo=qr,Fo=Br,Do=po,Ho=Yt,$o=Ao,Go=mo("slice"),Uo=Ho("species"),Vo=jo.Array,Wo=Math.max;Lo({target:"Array",proto:!0,forced:!Go},{slice:function(t,e){var r,n,i,o=Fo(this),s=Zo(o),a=Bo(t,s),u=Bo(void 0===e?s:e,s);if(zo(o)&&(r=o.constructor,(Ro(r)&&(r===Vo||zo(r.prototype))||No(r)&&null===(r=r[Uo]))&&(r=void 0),r===Vo||void 0===r))return $o(o,a,u);for(n=new(void 0===r?Vo:r)(Wo(u-a,0)),i=0;a<u;a++,i++)a in o&&Do(n,i,o[a]);return n.length=i,n}});var Xo=Rn,Yo=En?{}.toString:function(){return"[object "+Xo(this)+"]"},qo=En,Ko=M.exports,Jo=Yo;qo||Ko(Object.prototype,"toString",Jo,{unsafe:!0});var Qo=G,ts=function(){var t=Qo(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},es=h,rs=nr.PROPER,ns=M.exports,is=G,os=K,ss=Zn,as=n,us=ts,cs="toString",ls=RegExp.prototype,hs=ls.toString,ps=es(us),fs=as((function(){return"/a/b"!=hs.call({source:"a",flags:"b"})})),gs=rs&&hs.name!=cs;(fs||gs)&&ns(RegExp.prototype,cs,(function(){var t=is(this),e=ss(t.source),r=t.flags;return"/"+e+"/"+ss(void 0===r&&os(ls,t)&&!("flags"in ls)?ps(t):r)}),{unsafe:!0});var ds=function(t,e){return(ds=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function vs(t,e){function r(){this.constructor=t}ds(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var ms=function(){return(ms=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},_s=n,ys=Fi,bs=zr,xs=Br,Ms=function(t,e){var r=[][t];return!!r&&_s((function(){r.call(null,e||function(){throw 1},1)}))},Ss=h([].join),Is=bs!=Object,ks=Ms("join",",");ys({target:"Array",proto:!0,forced:Is||!ks},{join:function(t){return Ss(xs(this),void 0===t?",":t)}});var Cs=un,ws=cn,Es=Object.keys||function(t){return Cs(t,ws)},Os=w,Ps=Es;Fi({target:"Object",stat:!0,forced:n((function(){Ps(1)}))},{keys:function(t){return Ps(Os(t))}});var Ts={},As=n,Ls=s.RegExp;Ts.UNSUPPORTED_Y=As((function(){var t=Ls("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Ts.BROKEN_CARET=As((function(){var t=Ls("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));var js,zs=T,Rs=G,Ns=Br,Bs=Es,Zs=i?Object.defineProperties:function(t,e){Rs(t);for(var r,n=Ns(e),i=Bs(e),o=i.length,s=0;o>s;)zs.f(t,r=i[s++],n[r]);return t},Fs=q("document","documentElement"),Ds=G,Hs=Zs,$s=cn,Gs=Le,Us=Fs,Vs=N,Ws=Ae("IE_PROTO"),Xs=function(){},Ys=function(t){return"<script>"+t+"</"+"script>"},qs=function(t){t.write(Ys("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ks=function(){try{js=new ActiveXObject("htmlfile")}catch(t){}var t,e;Ks="undefined"!=typeof document?document.domain&&js?qs(js):((e=Vs("iframe")).style.display="none",Us.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Ys("document.F=Object")),t.close(),t.F):qs(js);for(var r=$s.length;r--;)delete Ks.prototype[$s[r]];return Ks()};Gs[Ws]=!0;var Js,Qs,ta=Object.create||function(t,e){var r;return null!==t?(Xs.prototype=Ds(t),r=new Xs,Xs.prototype=null,r[Ws]=t):r=Ks(),void 0===e?r:Hs(r,e)},ea=n,ra=s.RegExp,na=ea((function(){var t=ra(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),ia=n,oa=s.RegExp,sa=ia((function(){var t=oa("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),aa=V,ua=h,ca=Zn,la=ts,ha=Ts,pa=Ct.exports,fa=ta,ga=Ke.get,da=na,va=sa,ma=pa("native-string-replace",String.prototype.replace),_a=RegExp.prototype.exec,ya=_a,ba=ua("".charAt),xa=ua("".indexOf),Ma=ua("".replace),Sa=ua("".slice),Ia=(Qs=/b*/g,aa(_a,Js=/a/,"a"),aa(_a,Qs,"a"),0!==Js.lastIndex||0!==Qs.lastIndex),ka=ha.UNSUPPORTED_Y||ha.BROKEN_CARET,Ca=void 0!==/()??/.exec("")[1];(Ia||Ca||ka||da||va)&&(ya=function(t){var e,r,n,i,o,s,a,u=this,c=ga(u),l=ca(t),h=c.raw;if(h)return h.lastIndex=u.lastIndex,e=aa(ya,h,l),u.lastIndex=h.lastIndex,e;var p=c.groups,f=ka&&u.sticky,g=aa(la,u),d=u.source,v=0,m=l;if(f&&(g=Ma(g,"y",""),-1===xa(g,"g")&&(g+="g"),m=Sa(l,u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==ba(l,u.lastIndex-1))&&(d="(?: "+d+")",m=" "+m,v++),r=new RegExp("^(?:"+d+")",g)),Ca&&(r=new RegExp("^"+d+"$(?!\\s)",g)),Ia&&(n=u.lastIndex),i=aa(_a,f?r:u,m),f?i?(i.input=Sa(i.input,v),i[0]=Sa(i[0],v),i.index=u.lastIndex,u.lastIndex+=i[0].length):u.lastIndex=0:Ia&&i&&(u.lastIndex=u.global?i.index+i[0].length:n),Ca&&i&&i.length>1&&aa(ma,i[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i&&p)for(i.groups=s=fa(null),o=0;o<p.length;o++)s[(a=p[o])[0]]=i[a[1]];return i});var wa=ya;Fi({target:"RegExp",proto:!0,forced:/./.exec!==wa},{exec:wa});var Ea=Function.prototype,Oa=Ea.apply,Pa=Ea.bind,Ta=Ea.call,Aa="object"==typeof Reflect&&Reflect.apply||(Pa?Ta.bind(Oa):function(){return Ta.apply(Oa,arguments)}),La=h,ja=M.exports,za=wa,Ra=n,Na=Yt,Ba=me,Za=Na("species"),Fa=RegExp.prototype,Da=function(t,e,r,n){var i=Na(t),o=!Ra((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),s=o&&!Ra((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[Za]=function(){return r},r.flags="",r[i]=/./[i]),r.exec=function(){return e=!0,null},r[i](""),!e}));if(!o||!s||r){var a=La(/./[i]),u=e(i,""[t],(function(t,e,r,n,i){var s=La(t),u=e.exec;return u===za||u===Fa.exec?o&&!i?{done:!0,value:a(e,r,n)}:{done:!0,value:s(r,e,n)}:{done:!1}}));ja(String.prototype,t,u[0]),ja(Fa,i,u[1])}n&&Ba(Fa[i],"sham",!0)},Ha=L,$a=Or,Ga=Yt("match"),Ua=eo,Va=vt,Wa=s.TypeError,Xa=G,Ya=function(t){if(Ua(t))return t;throw Wa(Va(t)+" is not a constructor")},qa=Yt("species"),Ka=h,Ja=Dr,Qa=Zn,tu=I,eu=Ka("".charAt),ru=Ka("".charCodeAt),nu=Ka("".slice),iu=function(t){return function(e,r){var n,i,o=Qa(tu(e)),s=Ja(r),a=o.length;return s<0||s>=a?t?"":void 0:(n=ru(o,s))<55296||n>56319||s+1===a||(i=ru(o,s+1))<56320||i>57343?t?eu(o,s):n:t?nu(o,s,s+2):i-56320+(n-55296<<10)+65536}},ou={codeAt:iu(!1),charAt:iu(!0)}.charAt,su=function(t,e,r){return e+(r?ou(t,e).length:1)},au=V,uu=G,cu=p,lu=Or,hu=wa,pu=s.TypeError,fu=function(t,e){var r=t.exec;if(cu(r)){var n=au(r,t,e);return null!==n&&uu(n),n}if("RegExp"===lu(t))return au(hu,t,e);throw pu("RegExp#exec called on incompatible receiver")},gu=Aa,du=V,vu=h,mu=Da,_u=function(t){var e;return Ha(t)&&(void 0!==(e=t[Ga])?!!e:"RegExp"==$a(t))},yu=G,bu=I,xu=function(t,e){var r,n=Xa(t).constructor;return void 0===n||null==(r=Xa(n)[qa])?e:Ya(r)},Mu=su,Su=Xr,Iu=Zn,ku=xt,Cu=Ao,wu=fu,Eu=wa,Ou=n,Pu=Ts.UNSUPPORTED_Y,Tu=4294967295,Au=Math.min,Lu=[].push,ju=vu(/./.exec),zu=vu(Lu),Ru=vu("".slice);mu("split",(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=Iu(bu(this)),i=void 0===r?Tu:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!_u(t))return du(e,n,t,i);for(var o,s,a,u=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,h=new RegExp(t.source,c+"g");(o=du(Eu,h,n))&&!((s=h.lastIndex)>l&&(zu(u,Ru(n,l,o.index)),o.length>1&&o.index<n.length&&gu(Lu,u,Cu(o,1)),a=o[0].length,l=s,u.length>=i));)h.lastIndex===o.index&&h.lastIndex++;return l===n.length?!a&&ju(h,"")||zu(u,""):zu(u,Ru(n,l)),u.length>i?Cu(u,0,i):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:du(e,this,t,r)}:e,[function(e,r){var i=bu(this),o=null==e?void 0:ku(e,t);return o?du(o,e,i,r):du(n,Iu(i),e,r)},function(t,i){var o=yu(this),s=Iu(t),a=r(n,o,s,i,n!==e);if(a.done)return a.value;var u=xu(o,RegExp),c=o.unicode,l=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(Pu?"g":"y"),h=new u(Pu?"^(?:"+o.source+")":o,l),p=void 0===i?Tu:i>>>0;if(0===p)return[];if(0===s.length)return null===wu(h,s)?[s]:[];for(var f=0,g=0,d=[];g<s.length;){h.lastIndex=Pu?0:g;var v,m=wu(h,Pu?Ru(s,g):s);if(null===m||(v=Au(Su(h.lastIndex+(Pu?g:0)),s.length))===f)g=Mu(s,g,c);else{if(zu(d,Ru(s,f,g)),d.length===p)return d;for(var _=1;_<=m.length-1;_++)if(zu(d,m[_]),d.length===p)return d;g=f=v}}return zu(d,Ru(s,f)),d}]}),!!Ou((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),Pu);var Nu=h,Bu=w,Zu=Math.floor,Fu=Nu("".charAt),Du=Nu("".replace),Hu=Nu("".slice),$u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Gu=/\$([$&'`]|\d{1,2})/g,Uu=Aa,Vu=V,Wu=h,Xu=Da,Yu=n,qu=G,Ku=p,Ju=Dr,Qu=Xr,tc=Zn,ec=I,rc=su,nc=xt,ic=function(t,e,r,n,i,o){var s=r+t.length,a=n.length,u=Gu;return void 0!==i&&(i=Bu(i),u=$u),Du(o,u,(function(o,u){var c;switch(Fu(u,0)){case"$":return"$";case"&":return t;case"`":return Hu(e,0,r);case"'":return Hu(e,s);case"<":c=i[Hu(u,1,-1)];break;default:var l=+u;if(0===l)return o;if(l>a){var h=Zu(l/10);return 0===h?o:h<=a?void 0===n[h-1]?Fu(u,1):n[h-1]+Fu(u,1):o}c=n[l-1]}return void 0===c?"":c}))},oc=fu,sc=Yt("replace"),ac=Math.max,uc=Math.min,cc=Wu([].concat),lc=Wu([].push),hc=Wu("".indexOf),pc=Wu("".slice),fc="$0"==="a".replace(/./,"$0"),gc=!!/./[sc]&&""===/./[sc]("a","$0");Xu("replace",(function(t,e,r){var n=gc?"$":"$0";return[function(t,r){var n=ec(this),i=null==t?void 0:nc(t,sc);return i?Vu(i,t,n,r):Vu(e,tc(n),t,r)},function(t,i){var o=qu(this),s=tc(t);if("string"==typeof i&&-1===hc(i,n)&&-1===hc(i,"$<")){var a=r(e,o,s,i);if(a.done)return a.value}var u=Ku(i);u||(i=tc(i));var c=o.global;if(c){var l=o.unicode;o.lastIndex=0}for(var h=[];;){var p=oc(o,s);if(null===p)break;if(lc(h,p),!c)break;""===tc(p[0])&&(o.lastIndex=rc(s,Qu(o.lastIndex),l))}for(var f,g="",d=0,v=0;v<h.length;v++){for(var m=tc((p=h[v])[0]),_=ac(uc(Ju(p.index),s.length),0),y=[],b=1;b<p.length;b++)lc(y,void 0===(f=p[b])?f:String(f));var x=p.groups;if(u){var M=cc([m],y,_,s);void 0!==x&&lc(M,x);var S=tc(Uu(i,void 0,M))}else S=ic(m,s,_,y,x,i);_>=d&&(g+=pc(s,d,_)+S,d=_+m.length)}return g+pc(s,d)}]}),!!Yu((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!fc||gc);var dc=function t(){!function(t,e){for(var r in e.prototype)t.prototype[r]=e.prototype[r]}(t,google.maps.OverlayView)};function vc(t){return Object.keys(t).reduce((function(e,r){return t[r]&&e.push(r+":"+t[r]),e}),[]).join(";")}function mc(t){return t?t+"px":void 0}var _c=function(t){function e(e,r){var n=t.call(this)||this;return n.cluster_=e,n.styles_=r,n.center_=null,n.div_=null,n.sums_=null,n.visible_=!1,n.style=null,n.setMap(e.getMap()),n}return vs(e,t),e.prototype.onAdd=function(){var t,e,r=this,n=this.cluster_.getMarkerClusterer(),i=google.maps.version.split("."),o=i[0],s=i[1],a=100*parseInt(o,10)+parseInt(s,10);this.div_=document.createElement("div"),this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",(function(){e=t})),google.maps.event.addDomListener(this.div_,"mousedown",(function(){t=!0,e=!1})),google.maps.event.addDomListener(this.div_,"contextmenu",(function(){google.maps.event.trigger(n,"contextmenu",r.cluster_)})),a>=332&&google.maps.event.addDomListener(this.div_,"touchstart",(function(t){t.stopPropagation()})),google.maps.event.addDomListener(this.div_,"click",(function(i){if(t=!1,!e){if(google.maps.event.trigger(n,"click",r.cluster_),google.maps.event.trigger(n,"clusterclick",r.cluster_),n.getZoomOnClick()){var o=n.getMaxZoom(),s=r.cluster_.getBounds();n.getMap().fitBounds(s),setTimeout((function(){n.getMap().fitBounds(s),null!==o&&n.getMap().getZoom()>o&&n.getMap().setZoom(o+1)}),100)}i.cancelBubble=!0,i.stopPropagation&&i.stopPropagation()}})),google.maps.event.addDomListener(this.div_,"mouseover",(function(){google.maps.event.trigger(n,"mouseover",r.cluster_)})),google.maps.event.addDomListener(this.div_,"mouseout",(function(){google.maps.event.trigger(n,"mouseout",r.cluster_)}))},e.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)},e.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px"}},e.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},e.prototype.show=function(){this.div_&&(this.div_.className=this.className_,this.div_.style.cssText=this.createCss_(this.getPosFromLatLng_(this.center_)),this.div_.innerHTML=(this.style.url?this.getImageElementHtml():"")+this.getLabelDivHtml(),void 0===this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""),this.visible_=!0},e.prototype.getLabelDivHtml=function(){return'\n<div aria-label="'+this.cluster_.getMarkerClusterer().ariaLabelFn(this.sums_.text)+'" style="'+vc({position:"absolute",top:mc(this.anchorText_[0]),left:mc(this.anchorText_[1]),color:this.style.textColor,"font-size":mc(this.style.textSize),"font-family":this.style.fontFamily,"font-weight":this.style.fontWeight,"font-style":this.style.fontStyle,"text-decoration":this.style.textDecoration,"text-align":"center",width:mc(this.style.width),"line-height":mc(this.style.textLineHeight)})+'" tabindex="0">\n  <span aria-hidden="true">'+this.sums_.text+"</span>\n</div>\n"},e.prototype.getImageElementHtml=function(){var t=(this.style.backgroundPosition||"0 0").split(" "),e=parseInt(t[0].replace(/^\s+|\s+$/g,""),10),r=parseInt(t[1].replace(/^\s+|\s+$/g,""),10),n={};if(this.cluster_.getMarkerClusterer().getEnableRetinaIcons())n={width:mc(this.style.width),height:mc(this.style.height)};else{var i=[-1*r,-1*e+this.style.width,-1*r+this.style.height,-1*e];n={clip:"rect("+i[0]+"px, "+i[1]+"px, "+i[2]+"px, "+i[3]+"px)"}}var o=this.sums_.url?{width:"100%",height:"100%"}:{},s=vc(ms(ms({position:"absolute",top:mc(r),left:mc(e)},n),o));return'<img alt="'+this.sums_.text+'" aria-hidden="true" src="'+this.style.url+'" style="'+s+'"/>'},e.prototype.useStyle=function(t){this.sums_=t;var e=Math.max(0,t.index-1);e=Math.min(this.styles_.length-1,e),this.style=this.sums_.url?ms(ms({},this.styles_[e]),{url:this.sums_.url}):this.styles_[e],this.anchorText_=this.style.anchorText||[0,0],this.anchorIcon_=this.style.anchorIcon||[Math.floor(this.style.height/2),Math.floor(this.style.width/2)],this.className_=this.cluster_.getMarkerClusterer().getClusterClass()+" "+(this.style.className||"cluster-"+e)},e.prototype.setCenter=function(t){this.center_=t},e.prototype.createCss_=function(t){return vc({"z-index":""+this.cluster_.getMarkerClusterer().getZIndex(),top:mc(t.y),left:mc(t.x),width:mc(this.style.width),height:mc(this.style.height),cursor:"pointer",position:"absolute","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-o-user-select":"none","user-select":"none"})},e.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return e.x=Math.floor(e.x-this.anchorIcon_[1]),e.y=Math.floor(e.y-this.anchorIcon_[0]),e},e}(dc),yc=function(){function t(t){this.markerClusterer_=t,this.map_=this.markerClusterer_.getMap(),this.minClusterSize_=this.markerClusterer_.getMinimumClusterSize(),this.averageCenter_=this.markerClusterer_.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new _c(this,this.markerClusterer_.getStyles())}return t.prototype.getSize=function(){return this.markers_.length},t.prototype.getMarkers=function(){return this.markers_},t.prototype.getCenter=function(){return this.center_},t.prototype.getMap=function(){return this.map_},t.prototype.getMarkerClusterer=function(){return this.markerClusterer_},t.prototype.getBounds=function(){for(var t=new google.maps.LatLngBounds(this.center_,this.center_),e=this.getMarkers(),r=0;r<e.length;r++)t.extend(e[r].getPosition());return t},t.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_},t.prototype.addMarker=function(t){if(this.isMarkerAlreadyAdded_(t))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,r=(this.center_.lat()*(e-1)+t.getPosition().lat())/e,n=(this.center_.lng()*(e-1)+t.getPosition().lng())/e;this.center_=new google.maps.LatLng(r,n),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();t.isAdded=!0,this.markers_.push(t);var i=this.markers_.length,o=this.markerClusterer_.getMaxZoom();if(null!==o&&this.map_.getZoom()>o)t.getMap()!==this.map_&&t.setMap(this.map_);else if(i<this.minClusterSize_)t.getMap()!==this.map_&&t.setMap(this.map_);else if(i===this.minClusterSize_)for(var s=0;s<i;s++)this.markers_[s].setMap(null);else t.setMap(null);return!0},t.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},t.prototype.calculateBounds_=function(){var t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},t.prototype.updateIcon=function(){var t=this.markers_.length,e=this.markerClusterer_.getMaxZoom();if(null!==e&&this.map_.getZoom()>e)this.clusterIcon_.hide();else if(t<this.minClusterSize_)this.clusterIcon_.hide();else{var r=this.markerClusterer_.getStyles().length,n=this.markerClusterer_.getCalculator()(this.markers_,r);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(n),this.clusterIcon_.show()}},t.prototype.isMarkerAlreadyAdded_=function(t){if(this.markers_.indexOf)return-1!==this.markers_.indexOf(t);for(var e=0;e<this.markers_.length;e++)if(t===this.markers_[e])return!0;return!1},t}(),bc=function(t,e,r){return void 0!==t[e]?t[e]:r};return function(t){function e(r,n,i){void 0===n&&(n=[]),void 0===i&&(i={});var o=t.call(this)||this;return o.options=i,o.markers_=[],o.clusters_=[],o.listeners_=[],o.activeMap_=null,o.ready_=!1,o.ariaLabelFn=o.options.ariaLabelFn||function(){return""},o.zIndex_=o.options.zIndex||Number(google.maps.Marker.MAX_ZINDEX)+1,o.gridSize_=o.options.gridSize||60,o.minClusterSize_=o.options.minimumClusterSize||2,o.maxZoom_=o.options.maxZoom||null,o.styles_=o.options.styles||[],o.title_=o.options.title||"",o.zoomOnClick_=bc(o.options,"zoomOnClick",!0),o.averageCenter_=bc(o.options,"averageCenter",!1),o.ignoreHidden_=bc(o.options,"ignoreHidden",!1),o.enableRetinaIcons_=bc(o.options,"enableRetinaIcons",!1),o.imagePath_=o.options.imagePath||e.IMAGE_PATH,o.imageExtension_=o.options.imageExtension||e.IMAGE_EXTENSION,o.imageSizes_=o.options.imageSizes||e.IMAGE_SIZES,o.calculator_=o.options.calculator||e.CALCULATOR,o.batchSize_=o.options.batchSize||e.BATCH_SIZE,o.batchSizeIE_=o.options.batchSizeIE||e.BATCH_SIZE_IE,o.clusterClass_=o.options.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(o.batchSize_=o.batchSizeIE_),o.setupStyles_(),o.addMarkers(n,!0),o.setMap(r),o}return vs(e,t),e.prototype.onAdd=function(){var t=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.prevZoom_=this.getMap().getZoom(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",(function(){var e=t.getMap(),r=e.minZoom||0,n=Math.min(e.maxZoom||100,e.mapTypes[e.getMapTypeId()].maxZoom),i=Math.min(Math.max(t.getMap().getZoom(),r),n);t.prevZoom_!=i&&(t.prevZoom_=i,t.resetViewport_(!1))})),google.maps.event.addListener(this.getMap(),"idle",(function(){t.redraw_()}))]},e.prototype.onRemove=function(){for(var t=0;t<this.markers_.length;t++)this.markers_[t].getMap()!==this.activeMap_&&this.markers_[t].setMap(this.activeMap_);for(t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();this.clusters_=[];for(t=0;t<this.listeners_.length;t++)google.maps.event.removeListener(this.listeners_[t]);this.listeners_=[],this.activeMap_=null,this.ready_=!1},e.prototype.draw=function(){},e.prototype.setupStyles_=function(){if(!(this.styles_.length>0))for(var t=0;t<this.imageSizes_.length;t++){var r=this.imageSizes_[t];this.styles_.push(e.withDefaultStyle({url:this.imagePath_+(t+1)+"."+this.imageExtension_,height:r,width:r}))}},e.prototype.fitMapToMarkers=function(t){for(var e=this.getMarkers(),r=new google.maps.LatLngBounds,n=0;n<e.length;n++)!e[n].getVisible()&&this.getIgnoreHidden()||r.extend(e[n].getPosition());this.getMap().fitBounds(r,t)},e.prototype.getGridSize=function(){return this.gridSize_},e.prototype.setGridSize=function(t){this.gridSize_=t},e.prototype.getMinimumClusterSize=function(){return this.minClusterSize_},e.prototype.setMinimumClusterSize=function(t){this.minClusterSize_=t},e.prototype.getMaxZoom=function(){return this.maxZoom_},e.prototype.setMaxZoom=function(t){this.maxZoom_=t},e.prototype.getZIndex=function(){return this.zIndex_},e.prototype.setZIndex=function(t){this.zIndex_=t},e.prototype.getStyles=function(){return this.styles_},e.prototype.setStyles=function(t){this.styles_=t},e.prototype.getTitle=function(){return this.title_},e.prototype.setTitle=function(t){this.title_=t},e.prototype.getZoomOnClick=function(){return this.zoomOnClick_},e.prototype.setZoomOnClick=function(t){this.zoomOnClick_=t},e.prototype.getAverageCenter=function(){return this.averageCenter_},e.prototype.setAverageCenter=function(t){this.averageCenter_=t},e.prototype.getIgnoreHidden=function(){return this.ignoreHidden_},e.prototype.setIgnoreHidden=function(t){this.ignoreHidden_=t},e.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_},e.prototype.setEnableRetinaIcons=function(t){this.enableRetinaIcons_=t},e.prototype.getImageExtension=function(){return this.imageExtension_},e.prototype.setImageExtension=function(t){this.imageExtension_=t},e.prototype.getImagePath=function(){return this.imagePath_},e.prototype.setImagePath=function(t){this.imagePath_=t},e.prototype.getImageSizes=function(){return this.imageSizes_},e.prototype.setImageSizes=function(t){this.imageSizes_=t},e.prototype.getCalculator=function(){return this.calculator_},e.prototype.setCalculator=function(t){this.calculator_=t},e.prototype.getBatchSizeIE=function(){return this.batchSizeIE_},e.prototype.setBatchSizeIE=function(t){this.batchSizeIE_=t},e.prototype.getClusterClass=function(){return this.clusterClass_},e.prototype.setClusterClass=function(t){this.clusterClass_=t},e.prototype.getMarkers=function(){return this.markers_},e.prototype.getTotalMarkers=function(){return this.markers_.length},e.prototype.getClusters=function(){return this.clusters_},e.prototype.getTotalClusters=function(){return this.clusters_.length},e.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw_()},e.prototype.addMarkers=function(t,e){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&this.pushMarkerTo_(t[r]);e||this.redraw_()},e.prototype.pushMarkerTo_=function(t){var e=this;t.getDraggable()&&google.maps.event.addListener(t,"dragend",(function(){e.ready_&&(t.isAdded=!1,e.repaint())})),t.isAdded=!1,this.markers_.push(t)},e.prototype.removeMarker=function(t,e){var r=this.removeMarker_(t);return!e&&r&&this.repaint(),r},e.prototype.removeMarkers=function(t,e){for(var r=!1,n=0;n<t.length;n++){var i=this.removeMarker_(t[n]);r=r||i}return!e&&r&&this.repaint(),r},e.prototype.removeMarker_=function(t){var e=-1;if(this.markers_.indexOf)e=this.markers_.indexOf(t);else for(var r=0;r<this.markers_.length;r++)if(t===this.markers_[r]){e=r;break}return-1!==e&&(t.setMap(null),this.markers_.splice(e,1),!0)},e.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=[]},e.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout((function(){for(var e=0;e<t.length;e++)t[e].remove()}),0)},e.prototype.getExtendedBounds=function(t){var e=this.getProjection(),r=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),n=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),i=e.fromLatLngToDivPixel(r);i.x+=this.gridSize_,i.y-=this.gridSize_;var o=e.fromLatLngToDivPixel(n);o.x-=this.gridSize_,o.y+=this.gridSize_;var s=e.fromDivPixelToLatLng(i),a=e.fromDivPixelToLatLng(o);return t.extend(s),t.extend(a),t},e.prototype.redraw_=function(){this.createClusters_(0)},e.prototype.resetViewport_=function(t){for(var e=0;e<this.clusters_.length;e++)this.clusters_[e].remove();this.clusters_=[];for(e=0;e<this.markers_.length;e++){var r=this.markers_[e];r.isAdded=!1,t&&r.setMap(null)}},e.prototype.distanceBetweenPoints_=function(t,e){var r=(e.lat()-t.lat())*Math.PI/180,n=(e.lng()-t.lng())*Math.PI/180,i=Math.sin(r/2)*Math.sin(r/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))},e.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},e.prototype.addToClosestCluster_=function(t){for(var e=4e4,r=null,n=0;n<this.clusters_.length;n++){var i,o=(i=this.clusters_[n]).getCenter();if(o){var s=this.distanceBetweenPoints_(o,t.getPosition());s<e&&(e=s,r=i)}}r&&r.isMarkerInClusterBounds(t)?r.addMarker(t):((i=new yc(this)).addMarker(t),this.clusters_.push(i))},e.prototype.createClusters_=function(t){var e=this;if(this.ready_){0===t&&(google.maps.event.trigger(this,"clusteringbegin",this),void 0!==this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic));for(var r=new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()),n=this.getExtendedBounds(r),i=Math.min(t+this.batchSize_,this.markers_.length),o=t;o<i;o++){var s=this.markers_[o];!s.isAdded&&this.isMarkerInBounds_(s,n)&&(!this.ignoreHidden_||this.ignoreHidden_&&s.getVisible())&&this.addToClosestCluster_(s)}if(i<this.markers_.length)this.timerRefStatic=window.setTimeout((function(){e.createClusters_(i)}),0);else{delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this);for(o=0;o<this.clusters_.length;o++)this.clusters_[o].updateIcon()}}},e.CALCULATOR=function(t,e){for(var r=0,n=t.length,i=n;0!==i;)i=Math.floor(i/10),r++;return r=Math.min(r,e),{text:n.toString(),index:r,title:""}},e.withDefaultStyle=function(t){return ms({textColor:"black",textSize:11,textDecoration:"none",textLineHeight:t.height,fontWeight:"bold",fontStyle:"normal",fontFamily:"Arial,sans-serif",backgroundPosition:"0 0"},t)},e.BATCH_SIZE=2e3,e.BATCH_SIZE_IE=500,e.IMAGE_PATH="../images/m",e.IMAGE_EXTENSION="png",e.IMAGE_SIZES=[53,56,66,78,90],e}(dc)}));
//# sourceMappingURL=index.umd.js.map
