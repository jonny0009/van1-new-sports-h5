import{_ as s}from"./edit.56485837.js";import{_ as a}from"./pitch.9cf90b64.js";import{s as e,b as t,d as l,j as i,r as c,o as r,R as u,q as o,O as n,P as d,S as v,B as p,V as m}from"./vue.979f7bee.js";import{u as f,O as g,b as y,s as k,Q as $,R as b,I as h,N as I}from"./index.adcabc5b.js";const x={class:"editUser"},_={class:"content"},P={class:"head"},w=["src"],C={class:"edit-name"},j={class:"explain"},E={class:"explain-box"},N={class:"explain privacy"},S={class:"account-1"},V={class:"top-1"},A={key:0,class:"img_1",src:a,alt:""},O={class:"top-2"},R={class:"account-1"},U={class:"top-1"},q={key:0,class:"img_1",src:a,alt:""},z={class:"top-2"};var B=e({setup(a){const e=t((()=>k.state.user.userInfo)),B=m(),Q=l(""),T=l(0),D=l({}),{t:F}=f(),G=l(F("user.EditProfile")),H=s=>{B.push("/user"+s)},J=async s=>{if(T.value===s)return;T.value=s;const a={privacy:T.value},e=await b(a);if(200!==e.code)return y(e.msg);y(F("user.EditSuccessfully"))};i((()=>{K()}));const K=async()=>{const s={fPlayerId:e.value.playerId},a=await g(s);if(200!==a.code)return y(a.msg);Q.value=a.data.profiles,T.value=a.data.privacy,D.value=a.data};return(a,e)=>{const t=c("van-nav-bar"),l=c("van-field");return r(),u("div",x,[o(t,{class:"bg-title",title:G.value,border:!1},{left:n((()=>[d("span",{onClick:e[0]||(e[0]=s=>{B.push("/user/userInfo")})},v(a.$t("user.cancellation")),1)])),right:n((()=>[d("span",{onClick:e[1]||(e[1]=s=>(async()=>{const s={nickName:"",headImg:"",profiles:Q.value},a=await $(s);if(200!==a.code)return y(a.msg);y(F("user.EditSuccessfully")),k.dispatch("user/userInfo"),B.push("/user/userInfo")})())},v(a.$t("user.save")),1)])),_:1},8,["title"]),d("div",_,[d("div",P,[d("img",{class:"img_1",src:(i=D.value.headImg,i?`${h}${i}`:I),alt:""},null,8,w),d("div",{class:"edit",onClick:e[2]||(e[2]=s=>H("/editImg"))},v(a.$t("user.editText")),1)]),d("div",C,[d("span",null,v(a.$t("user.EditNickname")),1),d("img",{class:"img_1",src:s,alt:"",onClick:e[3]||(e[3]=s=>H("/editName"))})]),d("p",j,v(a.$t("user.Personal")),1),d("div",E,[o(l,{modelValue:Q.value,"onUpdate:modelValue":e[4]||(e[4]=s=>Q.value=s),rows:"10",autosize:"",type:"textarea",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),d("p",N,v(a.$t("user.PrivacySettings")),1),d("div",S,[d("div",V,[0===T.value?(r(),u("img",A)):(r(),u("div",{key:1,class:"round",onClick:e[5]||(e[5]=s=>J(0))})),p(" "+v(a.$t("user.PublicAccount")),1)]),d("div",O,v(a.$t("user.font2")),1)]),d("div",R,[d("div",U,[1===T.value?(r(),u("img",q)):(r(),u("div",{key:1,class:"round",onClick:e[6]||(e[6]=s=>J(1))})),p(" "+v(a.$t("user.PrivateAccount")),1)]),d("div",z,v(a.$t("user.font3")),1)])])]);var i}}});B.__scopeId="data-v-9eca0f20";export{B as default};
