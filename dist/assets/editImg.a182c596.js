import{s,b as a,d as e,j as l,r as t,E as c,o as n,R as i,q as r,O as o,P as u,U as v,x as d,Z as m,F as g,_ as p,a2 as f,W as k}from"./vue.b83303fa.js";import{u as y,C as $,b,s as h,E as I,I as C}from"./index.266976e8.js";const _={class:"editImg"},E={class:"title"},w={class:"img_1",type:3,style:{"object-fit":"cover"}},F={class:"area-btn_1"},j={class:"editName-content"},x={key:0,class:"img-style"},N={key:1,class:"img-style"},P={key:2,class:"img-style"};var S=s({setup(s){const S=k(),{t:q}=y(),A=a((()=>h.state.user.userInfo)),O=e(1),R=e(""),U=e(q("user.EditAvatar")),W=(s,a)=>{1===a&&(R.value=`/FE/common/head/newsport/star/${s}.png`),2===a&&(R.value=`/FE/common/head/newsport/else/${s}.png`)},Z=(s,a)=>{if(1===a){return`${C}${`/FE/common/head/newsport/star/${s}.png`}`}if(2===a){return`${C}${`/FE/common/head/newsport/else/${s}.png`}`}};l((()=>{z()}));const z=async()=>{const s={fPlayerId:A.value.playerId},a=await $(s);if(200!==a.code)return b(a.msg);R.value=a.data.headImg||""};return(s,a)=>{const e=t("van-nav-bar"),l=t("van-image"),k=c("img");return n(),i("div",_,[r(e,{class:"bg-title",title:U.value,border:!1},{left:o((()=>[u("span",{onClick:a[0]||(a[0]=s=>{S.back()})},v(s.$t("user.cancellation")),1)])),right:o((()=>[u("span",{onClick:a[1]||(a[1]=s=>(async()=>{const s={headImg:R.value,nickName:A.value.nickName,lang:localStorage.getItem("locale")},a=await I(s);if(200!==a.code)return b(a.msg);b(q("user.EditSuccessfully")),h.dispatch("user/userInfo"),S.push("/user/userInfo")})())},v(s.$t("user.save")),1)])),_:1},8,["title"]),u("div",E,[d(u("img",w,null,512),[[k,R.value]])]),u("div",F,[u("span",{class:m(1===O.value?"active":""),onClick:a[2]||(a[2]=s=>O.value=1)},v(s.$t("user.football")),3),u("span",{class:m(2===O.value?"active":""),onClick:a[3]||(a[3]=s=>O.value=2)},v(s.$t("user.otherCharacters")),3)]),u("div",j,[1===O.value?(n(),i("div",x,[(n(),i(g,null,p(16,(s=>u("div",{key:s,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:Z(s,1),onClick:a=>W(s,1)},null,8,["src","onClick"])]))),64))])):f("",!0),2===O.value?(n(),i("div",N,[(n(),i(g,null,p(16,(s=>u("div",{key:s,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:Z(s,2),onClick:a=>W(s,2)},null,8,["src","onClick"])]))),64))])):f("",!0),3===O.value?(n(),i("div",P,[(n(),i(g,null,p(16,(s=>u("div",{key:s,class:"select-img"},[u("div",{class:m(["img_2",[`background-${s}`]])},null,2)]))),64))])):f("",!0)])])}}});S.__scopeId="data-v-979dc338";export{S as default};
