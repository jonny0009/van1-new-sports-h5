import{s as a,b as s,d as e,j as l,r as t,E as c,o as n,R as i,q as r,O as o,P as u,U as v,x as d,Z as m,F as g,_ as p,a2 as f,W as k}from"./vue.bfc6c13a.js";import{u as y,C as $,c as b,s as h,E as I,I as C}from"./index.cda8a0b6.js";const _={class:"editImg"},E={class:"title"},w={class:"img_1",type:3,style:{"object-fit":"cover"}},F={class:"area-btn_1"},j={class:"editName-content"},x={key:0,class:"img-style"},N={key:1,class:"img-style"},P={key:2,class:"img-style"};var S=a({setup(a){const S=k(),{t:q}=y(),A=s((()=>h.state.user.userInfo)),O=e(1),R=e(""),U=e(q("user.EditAvatar")),W=(a,s)=>{1===s&&(R.value=`/FE/common/head/newsport/star/${a}.png`),2===s&&(R.value=`/FE/common/head/newsport/else/${a}.png`)},Z=(a,s)=>{if(1===s){return`${C}${`/FE/common/head/newsport/star/${a}.png`}`}if(2===s){return`${C}${`/FE/common/head/newsport/else/${a}.png`}`}};l((()=>{z()}));const z=async()=>{const a={fPlayerId:A.value.playerId},s=await $(a);if(200!==s.code)return b(s.msg);R.value=s.data.headImg||""};return(a,s)=>{const e=t("van-nav-bar"),l=t("van-image"),k=c("img");return n(),i("div",_,[r(e,{class:"bg-title",title:U.value,border:!1},{left:o((()=>[u("span",{onClick:s[0]||(s[0]=a=>{S.back()})},v(a.$t("user.cancellation")),1)])),right:o((()=>[u("span",{onClick:s[1]||(s[1]=a=>(async()=>{const a={headImg:R.value,nickName:A.value.nickName,lang:localStorage.getItem("locale")},s=await I(a);if(200!==s.code)return b(s.msg);b(q("user.EditSuccessfully")),h.dispatch("user/userInfo"),S.push("/user/userInfo")})())},v(a.$t("user.save")),1)])),_:1},8,["title"]),u("div",E,[d(u("img",w,null,512),[[k,R.value]])]),u("div",F,[u("span",{class:m(1===O.value?"active":""),onClick:s[2]||(s[2]=a=>O.value=1)},v(a.$t("user.football")),3),u("span",{class:m(2===O.value?"active":""),onClick:s[3]||(s[3]=a=>O.value=2)},v(a.$t("user.otherCharacters")),3)]),u("div",j,[1===O.value?(n(),i("div",x,[(n(),i(g,null,p(16,(a=>u("div",{key:a,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:Z(a,1),onClick:s=>W(a,1)},null,8,["src","onClick"])]))),64))])):f("",!0),2===O.value?(n(),i("div",N,[(n(),i(g,null,p(16,(a=>u("div",{key:a,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:Z(a,2),onClick:s=>W(a,2)},null,8,["src","onClick"])]))),64))])):f("",!0),3===O.value?(n(),i("div",P,[(n(),i(g,null,p(16,(a=>u("div",{key:a,class:"select-img"},[u("div",{class:m(["img_2",[`background-${a}`]])},null,2)]))),64))])):f("",!0)])])}}});S.__scopeId="data-v-979dc338";export{S as default};
