import{u as a,s,ab as e,d as l,v as t,ac as c,I as n}from"./index.7cffca87.js";import{s as i,U as r,b as o,d as u,j as v,r as d,E as m,o as g,R as p,q as f,O as k,P as y,W as $,x as h,_ as I,F as b,S as C,$ as _}from"./vue.c62eea93.js";const E={class:"editImg"},w={class:"title"},F={class:"img_1",type:3,style:{"object-fit":"cover"}},j={class:"area-btn_1"},x={class:"editName-content"},N={key:0,class:"img-style"},S={key:1,class:"img-style"},P={key:2,class:"img-style"};var q=i({setup(i){const q=r(),{t:A}=a(),O=o((()=>s.state.user.userInfo)),R=u(1),U=u(""),W=u(A("user.EditAvatar")),z=(a,s)=>{1===s&&(U.value=`/FE/common/head/newsport/star/${a}.png`),2===s&&(U.value=`/FE/common/head/newsport/else/${a}.png`)},B=(a,s)=>{if(1===s){return`${n}${`/FE/common/head/newsport/star/${a}.png`}`}if(2===s){return`${n}${`/FE/common/head/newsport/else/${a}.png`}`}};v((()=>{D()}));const D=async()=>{const a={fPlayerId:O.value.playerId},s=await e(a);if(200!==s.code)return l(s.msg);U.value=s.data.headImg||""};return(a,e)=>{const n=d("van-nav-bar"),i=d("van-image"),r=m("img");return g(),p("div",E,[f(n,{class:"bg-title",title:W.value,border:!1},{left:k((()=>[y("span",{onClick:e[0]||(e[0]=a=>{q.back()})},$(a.$t("user.cancellation")),1)])),right:k((()=>[y("span",{onClick:e[1]||(e[1]=a=>(async()=>{const a={headImg:U.value,nickName:O.value.nickName,lang:localStorage.getItem("locale")||t()},e=await c(a);if(200!==e.code)return l(e.msg);l(A("user.EditSuccessfully")),s.dispatch("user/userInfo"),q.push("/user/userInfo")})())},$(a.$t("user.save")),1)])),_:1},8,["title"]),y("div",w,[h(y("img",F,null,512),[[r,U.value]])]),y("div",j,[y("span",{class:I(1===R.value?"active":""),onClick:e[2]||(e[2]=a=>R.value=1)},$(a.$t("user.football")),3),y("span",{class:I(2===R.value?"active":""),onClick:e[3]||(e[3]=a=>R.value=2)},$(a.$t("user.otherCharacters")),3)]),y("div",x,[1===R.value?(g(),p("div",N,[(g(),p(b,null,C(16,(a=>y("div",{key:a,class:"select-img"},[f(i,{class:"img_1",fit:"contain",src:B(a,1),onClick:s=>z(a,1)},null,8,["src","onClick"])]))),64))])):_("",!0),2===R.value?(g(),p("div",S,[(g(),p(b,null,C(16,(a=>y("div",{key:a,class:"select-img"},[f(i,{class:"img_1",fit:"contain",src:B(a,2),onClick:s=>z(a,2)},null,8,["src","onClick"])]))),64))])):_("",!0),3===R.value?(g(),p("div",P,[(g(),p(b,null,C(16,(a=>y("div",{key:a,class:"select-img"},[y("div",{class:I(["img_2",[`background-${a}`]])},null,2)]))),64))])):_("",!0)])])}}});q.__scopeId="data-v-38f556de";export{q as default};
