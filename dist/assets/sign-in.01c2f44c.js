import{u as e,l as r,F as n,s,a,t,b as o,c as l,d as u}from"./index.d41a2bcf.js";import{s as i,b as c,d,e as p,j as f,r as g,o as m,R as v,q as h,O as b,P as y,U as w,u as x,Z as T,a2 as B,B as _,W as V,X as k,Y as C}from"./vue.bfc6c13a.js";var I,S,A={exports:{}},U={exports:{}};I="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",S={rotl:function(e,r){return e<<r|e>>>32-r},rotr:function(e,r){return e<<32-r|e>>>r},endian:function(e){if(e.constructor==Number)return 16711935&S.rotl(e,8)|4278255360&S.rotl(e,24);for(var r=0;r<e.length;r++)e[r]=S.endian(e[r]);return e},randomBytes:function(e){for(var r=[];e>0;e--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(e){for(var r=[],n=0,s=0;n<e.length;n++,s+=8)r[s>>>5]|=e[n]<<24-s%32;return r},wordsToBytes:function(e){for(var r=[],n=0;n<32*e.length;n+=8)r.push(e[n>>>5]>>>24-n%32&255);return r},bytesToHex:function(e){for(var r=[],n=0;n<e.length;n++)r.push((e[n]>>>4).toString(16)),r.push((15&e[n]).toString(16));return r.join("")},hexToBytes:function(e){for(var r=[],n=0;n<e.length;n+=2)r.push(parseInt(e.substr(n,2),16));return r},bytesToBase64:function(e){for(var r=[],n=0;n<e.length;n+=3)for(var s=e[n]<<16|e[n+1]<<8|e[n+2],a=0;a<4;a++)8*n+6*a<=8*e.length?r.push(I.charAt(s>>>6*(3-a)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,s=0;n<e.length;s=++n%4)0!=s&&r.push((I.indexOf(e.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<2*s|I.indexOf(e.charAt(n))>>>6-2*s);return r}},U.exports=S;var j={utf8:{stringToBytes:function(e){return j.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(j.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var r=[],n=0;n<e.length;n++)r.push(255&e.charCodeAt(n));return r},bytesToString:function(e){for(var r=[],n=0;n<e.length;n++)r.push(String.fromCharCode(e[n]));return r.join("")}}},N=j,q=function(e){return null!=e&&(F(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&F(e.slice(0,0))}(e)||!!e._isBuffer)};function F(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}!function(){var e=U.exports,r=N.utf8,n=q,s=N.bin,a=function(t,o){t.constructor==String?t=o&&"binary"===o.encoding?s.stringToBytes(t):r.stringToBytes(t):n(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var l=e.bytesToWords(t),u=8*t.length,i=1732584193,c=-271733879,d=-1732584194,p=271733878,f=0;f<l.length;f++)l[f]=16711935&(l[f]<<8|l[f]>>>24)|4278255360&(l[f]<<24|l[f]>>>8);l[u>>>5]|=128<<u%32,l[14+(u+64>>>9<<4)]=u;var g=a._ff,m=a._gg,v=a._hh,h=a._ii;for(f=0;f<l.length;f+=16){var b=i,y=c,w=d,x=p;i=g(i,c,d,p,l[f+0],7,-680876936),p=g(p,i,c,d,l[f+1],12,-389564586),d=g(d,p,i,c,l[f+2],17,606105819),c=g(c,d,p,i,l[f+3],22,-1044525330),i=g(i,c,d,p,l[f+4],7,-176418897),p=g(p,i,c,d,l[f+5],12,1200080426),d=g(d,p,i,c,l[f+6],17,-1473231341),c=g(c,d,p,i,l[f+7],22,-45705983),i=g(i,c,d,p,l[f+8],7,1770035416),p=g(p,i,c,d,l[f+9],12,-1958414417),d=g(d,p,i,c,l[f+10],17,-42063),c=g(c,d,p,i,l[f+11],22,-1990404162),i=g(i,c,d,p,l[f+12],7,1804603682),p=g(p,i,c,d,l[f+13],12,-40341101),d=g(d,p,i,c,l[f+14],17,-1502002290),i=m(i,c=g(c,d,p,i,l[f+15],22,1236535329),d,p,l[f+1],5,-165796510),p=m(p,i,c,d,l[f+6],9,-1069501632),d=m(d,p,i,c,l[f+11],14,643717713),c=m(c,d,p,i,l[f+0],20,-373897302),i=m(i,c,d,p,l[f+5],5,-701558691),p=m(p,i,c,d,l[f+10],9,38016083),d=m(d,p,i,c,l[f+15],14,-660478335),c=m(c,d,p,i,l[f+4],20,-405537848),i=m(i,c,d,p,l[f+9],5,568446438),p=m(p,i,c,d,l[f+14],9,-1019803690),d=m(d,p,i,c,l[f+3],14,-187363961),c=m(c,d,p,i,l[f+8],20,1163531501),i=m(i,c,d,p,l[f+13],5,-1444681467),p=m(p,i,c,d,l[f+2],9,-51403784),d=m(d,p,i,c,l[f+7],14,1735328473),i=v(i,c=m(c,d,p,i,l[f+12],20,-1926607734),d,p,l[f+5],4,-378558),p=v(p,i,c,d,l[f+8],11,-2022574463),d=v(d,p,i,c,l[f+11],16,1839030562),c=v(c,d,p,i,l[f+14],23,-35309556),i=v(i,c,d,p,l[f+1],4,-1530992060),p=v(p,i,c,d,l[f+4],11,1272893353),d=v(d,p,i,c,l[f+7],16,-155497632),c=v(c,d,p,i,l[f+10],23,-1094730640),i=v(i,c,d,p,l[f+13],4,681279174),p=v(p,i,c,d,l[f+0],11,-358537222),d=v(d,p,i,c,l[f+3],16,-722521979),c=v(c,d,p,i,l[f+6],23,76029189),i=v(i,c,d,p,l[f+9],4,-640364487),p=v(p,i,c,d,l[f+12],11,-421815835),d=v(d,p,i,c,l[f+15],16,530742520),i=h(i,c=v(c,d,p,i,l[f+2],23,-995338651),d,p,l[f+0],6,-198630844),p=h(p,i,c,d,l[f+7],10,1126891415),d=h(d,p,i,c,l[f+14],15,-1416354905),c=h(c,d,p,i,l[f+5],21,-57434055),i=h(i,c,d,p,l[f+12],6,1700485571),p=h(p,i,c,d,l[f+3],10,-1894986606),d=h(d,p,i,c,l[f+10],15,-1051523),c=h(c,d,p,i,l[f+1],21,-2054922799),i=h(i,c,d,p,l[f+8],6,1873313359),p=h(p,i,c,d,l[f+15],10,-30611744),d=h(d,p,i,c,l[f+6],15,-1560198380),c=h(c,d,p,i,l[f+13],21,1309151649),i=h(i,c,d,p,l[f+4],6,-145523070),p=h(p,i,c,d,l[f+11],10,-1120210379),d=h(d,p,i,c,l[f+2],15,718787259),c=h(c,d,p,i,l[f+9],21,-343485551),i=i+b>>>0,c=c+y>>>0,d=d+w>>>0,p=p+x>>>0}return e.endian([i,c,d,p])};a._ff=function(e,r,n,s,a,t,o){var l=e+(r&n|~r&s)+(a>>>0)+o;return(l<<t|l>>>32-t)+r},a._gg=function(e,r,n,s,a,t,o){var l=e+(r&s|n&~s)+(a>>>0)+o;return(l<<t|l>>>32-t)+r},a._hh=function(e,r,n,s,a,t,o){var l=e+(r^n^s)+(a>>>0)+o;return(l<<t|l>>>32-t)+r},a._ii=function(e,r,n,s,a,t,o){var l=e+(n^(r|~s))+(a>>>0)+o;return(l<<t|l>>>32-t)+r},a._blocksize=16,a._digestsize=16,A.exports=function(r,n){if(null==r)throw new Error("Illegal argument "+r);var t=e.wordsToBytes(a(r,n));return n&&n.asBytes?t:n&&n.asString?s.bytesToString(t):e.bytesToHex(t)}}();var O=A.exports;const P=e=>(k("data-v-5d2b74e4"),e=e(),C(),e),R={class:"signIn"},W={class:"title"},E={class:"content"},M={class:"area-btn_1"},z={key:0,class:"form"},H=P((()=>y("div",null,null,-1))),Z=P((()=>y("div",null,null,-1))),D={key:1,class:"form"},K=P((()=>y("div",null,null,-1))),L=P((()=>y("div",null,null,-1)));var X=i({setup(i){const{t:k}=e(),C=c((()=>s.state.app.businessConfig.loginKey)),I=V(),S=d(1),A=p({username:"",password:""});f((()=>{r.getItem("appFingerprint")||n.get((e=>{const s=e.map((e=>e.value)),a=n.x64hash128(s.join(""),31);r.setItem("appFingerprint",a)}))}));const U=async()=>{const e=r.getItem("appFingerprint");if(e){const r={loginTempName:a.encrypt(e,C.value)};console.log("key",C.value),console.log("设备ID",e),console.log("加密后",r.loginTempName);const n=await t(r);if(200===n.code){const{token:e}=n.data||{};o(e),window.location.href="/"}else l(n.msg)}},j=async e=>{if(console.log(e),!A.username||!A.password)return;const r={loginName:A.username,passWord:O(encodeURI(A.password))},n=await u(r);if(200===n.code)return o(n.data),void(window.location.href="/");205===n.code?l(k("user.text14")):204===n.code?l(k("user.text15")):207===n.code?l(k("user.text16")):l(n.msg)};return(e,r)=>{const n=g("van-icon"),s=g("van-nav-bar"),a=g("van-field"),t=g("van-button"),o=g("van-form");return m(),v("div",R,[h(s,{class:"bg-title",border:!1},{left:b((()=>[h(n,{name:"arrow-left",class:"img_1",onClick:r[0]||(r[0]=e=>{I.back()})})])),title:b((()=>[y("span",W,w(x(k)("user.logOn")),1)])),_:1}),y("div",E,[y("div",M,[y("span",{class:T(1==S.value?"active":""),onClick:r[1]||(r[1]=e=>S.value=1)},w(x(k)("user.usernameE")),3),y("span",{class:T(2==S.value?"active":""),onClick:r[2]||(r[2]=e=>S.value=2)},w(x(k)("user.mobilePhone")),3)]),h(o,{onSubmit:j},{default:b((()=>[1==S.value?(m(),v("div",z,[h(a,{modelValue:x(A).username,"onUpdate:modelValue":r[3]||(r[3]=e=>x(A).username=e),name:"",label:"",clearable:"",placeholder:x(k)("user.text2"),rules:[{required:!0,message:x(k)("user.text2")}]},null,8,["modelValue","placeholder","rules"]),H,h(a,{modelValue:x(A).password,"onUpdate:modelValue":r[4]||(r[4]=e=>x(A).password=e),type:"password",name:"",label:"",class:"van-cel",placeholder:x(k)("user.password"),clearable:"",rules:[{required:!0,message:x(k)("user.password")}]},null,8,["modelValue","placeholder","rules"]),Z])):B("",!0),2==S.value?(m(),v("div",D,[h(a,{modelValue:x(A).username,"onUpdate:modelValue":r[5]||(r[5]=e=>x(A).username=e),name:"",label:"",placeholder:x(k)("user.phoneNumber"),clearable:"",rules:[{required:!0,message:x(k)("user.phoneNumber")}]},null,8,["modelValue","placeholder","rules"]),K,h(a,{modelValue:x(A).password,"onUpdate:modelValue":r[6]||(r[6]=e=>x(A).password=e),type:"password",name:"",label:"",class:"van-cel",clearable:"",placeholder:x(k)("user.password"),rules:[{required:!0,message:x(k)("user.password")}]},null,8,["modelValue","placeholder","rules"]),L])):B("",!0),y("p",{class:"forgetPassword",onClick:r[7]||(r[7]=e=>{var r;console.log("忘记密码=====",r)})},w(x(k)("user.forgotPassword"))+"?",1),h(t,{"van-button":"",class:T(["loginBtn",[Boolean(x(A).password&&x(A).username)?"ifBtn":""]]),"native-type":"submit"},{default:b((()=>[_(w(x(k)("user.logOn")),1)])),_:1},8,["class"])])),_:1}),y("p",{class:"literal",onClick:U},w(x(k)("user.text13")),1)])])}}});X.__scopeId="data-v-5d2b74e4";export{X as default};
