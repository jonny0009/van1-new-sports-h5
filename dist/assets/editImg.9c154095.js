import{s,R as a,b as e,d as l,j as t,r as c,E as n,o as i,S as r,q as o,O as u,P as v,V as d,x as m,_ as g,F as p,Z as k,a0 as f}from"./vue.66060cab.js";import{u as y,E as b,b as $,s as h,F as I,I as C}from"./index.8cbd81b5.js";const _={class:"editImg"},E={class:"title"},w={class:"img_1",type:3,style:{"object-fit":"cover"}},F={class:"area-btn_1"},j={class:"editName-content"},x={key:0,class:"img-style"},N={key:1,class:"img-style"},S={key:2,class:"img-style"};var P=s({setup(s){const P=a(),{t:q}=y(),A=e((()=>h.state.user.userInfo)),O=l(1),R=l(""),V=l(q("user.EditAvatar")),Z=(s,a)=>{1===a&&(R.value=`/FE/common/head/newsport/star/${s}.png`),2===a&&(R.value=`/FE/common/head/newsport/else/${s}.png`)},z=(s,a)=>{if(1===a){return`${C}${`/FE/common/head/newsport/star/${s}.png`}`}if(2===a){return`${C}${`/FE/common/head/newsport/else/${s}.png`}`}};t((()=>{B()}));const B=async()=>{const s={fPlayerId:A.value.playerId},a=await b(s);if(200!==a.code)return $(a.msg);R.value=a.data.headImg||""};return(s,a)=>{const e=c("van-nav-bar"),l=c("van-image"),t=n("img");return i(),r("div",_,[o(e,{class:"bg-title",title:V.value,border:!1},{left:u((()=>[v("span",{onClick:a[0]||(a[0]=s=>{P.back()})},d(s.$t("user.cancellation")),1)])),right:u((()=>[v("span",{onClick:a[1]||(a[1]=s=>(async()=>{const s={headImg:R.value,nickName:A.value.nickName,lang:localStorage.getItem("locale")},a=await I(s);if(200!==a.code)return $(a.msg);$(q("user.EditSuccessfully")),h.dispatch("user/userInfo"),P.push("/user/userInfo")})())},d(s.$t("user.save")),1)])),_:1},8,["title"]),v("div",E,[m(v("img",w,null,512),[[t,R.value]])]),v("div",F,[v("span",{class:g(1===O.value?"active":""),onClick:a[2]||(a[2]=s=>O.value=1)},d(s.$t("user.football")),3),v("span",{class:g(2===O.value?"active":""),onClick:a[3]||(a[3]=s=>O.value=2)},d(s.$t("user.otherCharacters")),3)]),v("div",j,[1===O.value?(i(),r("div",x,[(i(),r(p,null,k(16,(s=>v("div",{key:s,class:"select-img"},[o(l,{class:"img_1",fit:"contain",src:z(s,1),onClick:a=>Z(s,1)},null,8,["src","onClick"])]))),64))])):f("",!0),2===O.value?(i(),r("div",N,[(i(),r(p,null,k(16,(s=>v("div",{key:s,class:"select-img"},[o(l,{class:"img_1",fit:"contain",src:z(s,2),onClick:a=>Z(s,2)},null,8,["src","onClick"])]))),64))])):f("",!0),3===O.value?(i(),r("div",S,[(i(),r(p,null,k(16,(s=>v("div",{key:s,class:"select-img"},[v("div",{class:g(["img_2",[`background-${s}`]])},null,2)]))),64))])):f("",!0)])])}}});P.__scopeId="data-v-979dc338";export{P as default};
