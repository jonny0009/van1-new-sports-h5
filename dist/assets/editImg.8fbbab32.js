import{s,b as a,d as e,j as l,r as t,E as c,o as n,R as i,q as r,O as o,P as u,U as v,x as d,_ as m,F as g,Z as p,a1 as f,W as k}from"./vue.469c5994.js";import{u as y,B as $,b as h,s as I,C as b,I as C}from"./index.f54c84f2.js";const _={class:"editImg"},E={class:"title"},w={class:"img_1",type:3,style:{"object-fit":"cover"}},F={class:"area-btn_1"},j={class:"editName-content"},x={key:0,class:"img-style"},N={key:1,class:"img-style"},P={key:2,class:"img-style"};var S=s({setup(s){const S=k(),{t:q}=y(),A=a((()=>I.state.user.userInfo)),B=e(1),O=e(""),R=e(q("user.EditAvatar")),U=(s,a)=>{1===a&&(O.value=`/FE/common/head/newsport/star/${s}.png`),2===a&&(O.value=`/FE/common/head/newsport/else/${s}.png`)},W=(s,a)=>{if(1===a){return`${C}${`/FE/common/head/newsport/star/${s}.png`}`}if(2===a){return`${C}${`/FE/common/head/newsport/else/${s}.png`}`}};l((()=>{Z()}));const Z=async()=>{const s={fPlayerId:A.value.playerId},a=await $(s);if(200!==a.code)return h(a.msg);O.value=a.data.headImg||""};return(s,a)=>{const e=t("van-nav-bar"),l=t("van-image"),k=c("img");return n(),i("div",_,[r(e,{class:"bg-title",title:R.value,border:!1},{left:o((()=>[u("span",{onClick:a[0]||(a[0]=s=>{S.back()})},v(s.$t("user.cancellation")),1)])),right:o((()=>[u("span",{onClick:a[1]||(a[1]=s=>(async()=>{const s={headImg:O.value,nickName:A.value.nickName,lang:localStorage.getItem("locale")},a=await b(s);if(200!==a.code)return h(a.msg);h(q("user.EditSuccessfully")),I.dispatch("user/userInfo"),S.push("/user/userInfo")})())},v(s.$t("user.save")),1)])),_:1},8,["title"]),u("div",E,[d(u("img",w,null,512),[[k,O.value]])]),u("div",F,[u("span",{class:m(1===B.value?"active":""),onClick:a[2]||(a[2]=s=>B.value=1)},v(s.$t("user.football")),3),u("span",{class:m(2===B.value?"active":""),onClick:a[3]||(a[3]=s=>B.value=2)},v(s.$t("user.otherCharacters")),3)]),u("div",j,[1===B.value?(n(),i("div",x,[(n(),i(g,null,p(16,(s=>u("div",{key:s,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:W(s,1),onClick:a=>U(s,1)},null,8,["src","onClick"])]))),64))])):f("",!0),2===B.value?(n(),i("div",N,[(n(),i(g,null,p(16,(s=>u("div",{key:s,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:W(s,2),onClick:a=>U(s,2)},null,8,["src","onClick"])]))),64))])):f("",!0),3===B.value?(n(),i("div",P,[(n(),i(g,null,p(16,(s=>u("div",{key:s,class:"select-img"},[u("div",{class:m(["img_2",[`background-${s}`]])},null,2)]))),64))])):f("",!0)])])}}});S.__scopeId="data-v-463ae2e9";export{S as default};
