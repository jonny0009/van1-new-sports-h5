import{_ as s,a}from"./pitch.182fc793.js";import{s as e,b as t,d as l,j as i,r as c,o as r,R as u,q as n,O as o,P as d,S as v,B as p,V as m}from"./vue.e791136f.js";import{u as f,O as g,b as y,s as k,Q as $,R as h,I,N as x}from"./index.c080b2d9.js";const b={class:"editUser"},_={class:"content"},P={class:"head"},w=["src"],C={class:"edit-name"},N={class:"explain"},j={class:"explain-box"},E={class:"explain privacy"},S={class:"account-1"},V={class:"top-1"},A={key:0,class:"img_1",src:a,alt:""},O={class:"top-2"},R={class:"account-1"},U={class:"top-1"},q={key:0,class:"img_1",src:a,alt:""},z={class:"top-2"};var B=e({setup(a){const e=t((()=>k.state.user.userInfo)),B=m(),Q=l(""),T=l(0),D=l({}),{t:F}=f(),G=l(F("user.EditProfile")),H=s=>{B.push("/user"+s)},J=async s=>{if(T.value===s)return;T.value=s;const a={privacy:T.value},e=await h(a);if(200!==e.code)return y(e.msg);y(F("user.EditSuccessfully"))};i((()=>{K()}));const K=async()=>{const s={fPlayerId:e.value.playerId},a=await g(s);if(200!==a.code)return y(a.msg);Q.value=a.data.profiles,T.value=a.data.privacy,D.value=a.data};return(a,t)=>{const l=c("van-nav-bar"),i=c("van-field");return r(),u("div",b,[n(l,{class:"bg-title",title:G.value,border:!1},{left:o((()=>[d("span",{onClick:t[0]||(t[0]=s=>{B.push("/user/userInfo")})},v(a.$t("user.cancellation")),1)])),right:o((()=>[d("span",{onClick:t[1]||(t[1]=s=>(async()=>{const s={nickName:e.value.nickName,headImg:"",profiles:Q.value},a=await $(s);if(200!==a.code)return y(a.msg);y(F("user.EditSuccessfully")),k.dispatch("user/userInfo"),B.push("/user/userInfo")})())},v(a.$t("user.save")),1)])),_:1},8,["title"]),d("div",_,[d("div",P,[d("img",{class:"img_1",src:(m=D.value.headImg,m?`${I}${m}`:x),alt:""},null,8,w),d("div",{class:"edit",onClick:t[2]||(t[2]=s=>H("/editImg"))},v(a.$t("user.editText")),1)]),d("div",C,[d("span",null,v(a.$t("user.EditNickname")),1),d("img",{class:"img_1",src:s,alt:"",onClick:t[3]||(t[3]=s=>H("/editName"))})]),d("p",N,v(a.$t("user.Personal")),1),d("div",j,[n(i,{modelValue:Q.value,"onUpdate:modelValue":t[4]||(t[4]=s=>Q.value=s),rows:"10",autosize:"",type:"textarea",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),d("p",E,v(a.$t("user.PrivacySettings")),1),d("div",S,[d("div",V,[0===T.value?(r(),u("img",A)):(r(),u("div",{key:1,class:"round",onClick:t[5]||(t[5]=s=>J(0))})),p(" "+v(a.$t("user.PublicAccount")),1)]),d("div",O,v(a.$t("user.font2")),1)]),d("div",R,[d("div",U,[1===T.value?(r(),u("img",q)):(r(),u("div",{key:1,class:"round",onClick:t[6]||(t[6]=s=>J(1))})),p(" "+v(a.$t("user.PrivateAccount")),1)]),d("div",z,v(a.$t("user.font3")),1)])])]);var m}}});B.__scopeId="data-v-14f22d86";export{B as default};
