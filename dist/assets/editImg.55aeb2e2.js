import{u as s,s as a,ab as e,d as l,v as t,ac as c,I as n}from"./index.18c53e21.js";import{s as i,U as r,b as o,d as u,j as v,r as d,E as m,o as g,R as p,q as k,O as f,P as y,W as $,x as h,_ as I,F as b,S as C,$ as _}from"./vue.c62eea93.js";const E={class:"editImg"},w={class:"title"},F={class:"img_1",type:3,style:{"object-fit":"cover"}},j={class:"area-btn_1"},x={class:"editName-content"},N={key:0,class:"img-style"},S={key:1,class:"img-style"},P={key:2,class:"img-style"};var q=i({setup(i){const q=r(),{t:A}=s(),O=o((()=>a.state.user.userInfo)),R=u(1),U=u(""),W=u(A("user.EditAvatar")),z=(s,a)=>{1===a&&(U.value=`/FE/common/head/newsport/star/${s}.png`),2===a&&(U.value=`/FE/common/head/newsport/else/${s}.png`)},B=(s,a)=>{if(1===a){return`${n}${`/FE/common/head/newsport/star/${s}.png`}`}if(2===a){return`${n}${`/FE/common/head/newsport/else/${s}.png`}`}};v((()=>{D()}));const D=async()=>{const s={fPlayerId:O.value.playerId},a=await e(s);if(200!==a.code)return l(a.msg);U.value=a.data.headImg||""};return(s,e)=>{const n=d("van-nav-bar"),i=d("van-image"),r=m("img");return g(),p("div",E,[k(n,{class:"bg-title",title:W.value,border:!1},{left:f((()=>[y("span",{onClick:e[0]||(e[0]=s=>{q.back()})},$(s.$t("user.cancellation")),1)])),right:f((()=>[y("span",{onClick:e[1]||(e[1]=s=>(async()=>{const s={headImg:U.value,nickName:O.value.nickName,lang:localStorage.getItem("locale")||t()},e=await c(s);if(200!==e.code)return l(e.msg);l(A("user.EditSuccessfully")),a.dispatch("user/userInfo"),q.push("/user/userInfo")})())},$(s.$t("user.save")),1)])),_:1},8,["title"]),y("div",w,[h(y("img",F,null,512),[[r,U.value]])]),y("div",j,[y("span",{class:I(1===R.value?"active":""),onClick:e[2]||(e[2]=s=>R.value=1)},$(s.$t("user.football")),3),y("span",{class:I(2===R.value?"active":""),onClick:e[3]||(e[3]=s=>R.value=2)},$(s.$t("user.otherCharacters")),3)]),y("div",x,[1===R.value?(g(),p("div",N,[(g(),p(b,null,C(16,(s=>y("div",{key:s,class:"select-img"},[k(i,{class:"img_1",fit:"contain",src:B(s,1),onClick:a=>z(s,1)},null,8,["src","onClick"])]))),64))])):_("",!0),2===R.value?(g(),p("div",S,[(g(),p(b,null,C(16,(s=>y("div",{key:s,class:"select-img"},[k(i,{class:"img_1",fit:"contain",src:B(s,2),onClick:a=>z(s,2)},null,8,["src","onClick"])]))),64))])):_("",!0),3===R.value?(g(),p("div",P,[(g(),p(b,null,C(16,(s=>y("div",{key:s,class:"select-img"},[y("div",{class:I(["img_2",[`background-${s}`]])},null,2)]))),64))])):_("",!0)])])}}});q.__scopeId="data-v-650d5cd3";export{q as default};
