import{s,R as a,b as e,d as l,j as t,r as c,E as n,o as i,S as r,q as o,O as u,P as v,V as d,x as m,_ as g,F as p,Z as f,a0 as k}from"./vue.95886b43.js";import{u as y,H as $,b as h,s as b,J as I,I as C}from"./index.d2005fc8.js";const _={class:"editImg"},E={class:"title"},w={class:"img_1",type:3,style:{"object-fit":"cover"}},F={class:"area-btn_1"},j={class:"editName-content"},x={key:0,class:"img-style"},N={key:1,class:"img-style"},S={key:2,class:"img-style"};var P=s({setup(s){const P=a(),{t:q}=y(),z=e((()=>b.state.user.userInfo)),A=l(1),H=l(""),J=l(q("user.EditAvatar")),O=(s,a)=>{1===a&&(H.value=`/FE/common/head/newsport/star/${s}.png`),2===a&&(H.value=`/FE/common/head/newsport/else/${s}.png`)},R=(s,a)=>{if(1===a){return`${C}${`/FE/common/head/newsport/star/${s}.png`}`}if(2===a){return`${C}${`/FE/common/head/newsport/else/${s}.png`}`}};t((()=>{V()}));const V=async()=>{const s={fPlayerId:z.value.playerId},a=await $(s);if(200!==a.code)return h(a.msg);H.value=a.data.headImg||""};return(s,a)=>{const e=c("van-nav-bar"),l=c("van-image"),t=n("img");return i(),r("div",_,[o(e,{class:"bg-title",title:J.value,border:!1},{left:u((()=>[v("span",{onClick:a[0]||(a[0]=s=>{P.back()})},d(s.$t("user.cancellation")),1)])),right:u((()=>[v("span",{onClick:a[1]||(a[1]=s=>(async()=>{const s={headImg:H.value,nickName:z.value.nickName,lang:localStorage.getItem("locale")||"zh-cn"},a=await I(s);if(200!==a.code)return h(a.msg);h(q("user.EditSuccessfully")),b.dispatch("user/userInfo"),P.push("/user/userInfo")})())},d(s.$t("user.save")),1)])),_:1},8,["title"]),v("div",E,[m(v("img",w,null,512),[[t,H.value]])]),v("div",F,[v("span",{class:g(1===A.value?"active":""),onClick:a[2]||(a[2]=s=>A.value=1)},d(s.$t("user.football")),3),v("span",{class:g(2===A.value?"active":""),onClick:a[3]||(a[3]=s=>A.value=2)},d(s.$t("user.otherCharacters")),3)]),v("div",j,[1===A.value?(i(),r("div",x,[(i(),r(p,null,f(16,(s=>v("div",{key:s,class:"select-img"},[o(l,{class:"img_1",fit:"contain",src:R(s,1),onClick:a=>O(s,1)},null,8,["src","onClick"])]))),64))])):k("",!0),2===A.value?(i(),r("div",N,[(i(),r(p,null,f(16,(s=>v("div",{key:s,class:"select-img"},[o(l,{class:"img_1",fit:"contain",src:R(s,2),onClick:a=>O(s,2)},null,8,["src","onClick"])]))),64))])):k("",!0),3===A.value?(i(),r("div",S,[(i(),r(p,null,f(16,(s=>v("div",{key:s,class:"select-img"},[v("div",{class:g(["img_2",[`background-${s}`]])},null,2)]))),64))])):k("",!0)])])}}});P.__scopeId="data-v-3182e3a8";export{P as default};
