import{s,R as a,b as e,d as l,j as t,r as c,E as n,o as i,S as r,q as o,O as u,P as d,V as v,x as m,_ as g,F as p,Z as f,a0 as k}from"./vue.c4df921c.js";import{u as y,B as $,b as h,s as I,C as b,I as C}from"./index.6a9de977.js";const _={class:"editImg"},E={class:"title"},w={class:"img_1",type:3,style:{"object-fit":"cover"}},F={class:"area-btn_1"},j={class:"editName-content"},x={key:0,class:"img-style"},N={key:1,class:"img-style"},S={key:2,class:"img-style"};var P=s({setup(s){const P=a(),{t:q}=y(),A=e((()=>I.state.user.userInfo)),B=l(1),O=l(""),R=l(q("user.EditAvatar")),V=(s,a)=>{1===a&&(O.value=`/FE/common/head/newsport/star/${s}.png`),2===a&&(O.value=`/FE/common/head/newsport/else/${s}.png`)},Z=(s,a)=>{if(1===a){return`${C}${`/FE/common/head/newsport/star/${s}.png`}`}if(2===a){return`${C}${`/FE/common/head/newsport/else/${s}.png`}`}};t((()=>{z()}));const z=async()=>{const s={fPlayerId:A.value.playerId},a=await $(s);if(200!==a.code)return h(a.msg);O.value=a.data.headImg||""};return(s,a)=>{const e=c("van-nav-bar"),l=c("van-image"),t=n("img");return i(),r("div",_,[o(e,{class:"bg-title",title:R.value,border:!1},{left:u((()=>[d("span",{onClick:a[0]||(a[0]=s=>{P.back()})},v(s.$t("user.cancellation")),1)])),right:u((()=>[d("span",{onClick:a[1]||(a[1]=s=>(async()=>{const s={headImg:O.value,nickName:A.value.nickName,lang:localStorage.getItem("locale")},a=await b(s);if(200!==a.code)return h(a.msg);h(q("user.EditSuccessfully")),I.dispatch("user/userInfo"),P.push("/user/userInfo")})())},v(s.$t("user.save")),1)])),_:1},8,["title"]),d("div",E,[m(d("img",w,null,512),[[t,O.value]])]),d("div",F,[d("span",{class:g(1===B.value?"active":""),onClick:a[2]||(a[2]=s=>B.value=1)},v(s.$t("user.football")),3),d("span",{class:g(2===B.value?"active":""),onClick:a[3]||(a[3]=s=>B.value=2)},v(s.$t("user.otherCharacters")),3)]),d("div",j,[1===B.value?(i(),r("div",x,[(i(),r(p,null,f(16,(s=>d("div",{key:s,class:"select-img"},[o(l,{class:"img_1",fit:"contain",src:Z(s,1),onClick:a=>V(s,1)},null,8,["src","onClick"])]))),64))])):k("",!0),2===B.value?(i(),r("div",N,[(i(),r(p,null,f(16,(s=>d("div",{key:s,class:"select-img"},[o(l,{class:"img_1",fit:"contain",src:Z(s,2),onClick:a=>V(s,2)},null,8,["src","onClick"])]))),64))])):k("",!0),3===B.value?(i(),r("div",S,[(i(),r(p,null,f(16,(s=>d("div",{key:s,class:"select-img"},[d("div",{class:g(["img_2",[`background-${s}`]])},null,2)]))),64))])):k("",!0)])])}}});P.__scopeId="data-v-979dc338";export{P as default};
