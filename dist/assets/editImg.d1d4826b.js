import{s as a,R as s,b as e,d as l,j as t,r as c,E as n,o as i,S as r,q as o,O as u,P as v,V as d,x as m,_ as g,F as p,Z as f,a1 as k}from"./vue.3fb34a06.js";import{u as y,H as $,b,s as h,J as I,I as C}from"./index.544014ba.js";const _={class:"editImg"},E={class:"title"},w={class:"img_1",type:3,style:{"object-fit":"cover"}},F={class:"area-btn_1"},j={class:"editName-content"},x={key:0,class:"img-style"},N={key:1,class:"img-style"},S={key:2,class:"img-style"};var P=a({setup(a){const P=s(),{t:q}=y(),z=e((()=>h.state.user.userInfo)),A=l(1),H=l(""),J=l(q("user.EditAvatar")),O=(a,s)=>{1===s&&(H.value=`/FE/common/head/newsport/star/${a}.png`),2===s&&(H.value=`/FE/common/head/newsport/else/${a}.png`)},R=(a,s)=>{if(1===s){return`${C}${`/FE/common/head/newsport/star/${a}.png`}`}if(2===s){return`${C}${`/FE/common/head/newsport/else/${a}.png`}`}};t((()=>{V()}));const V=async()=>{const a={fPlayerId:z.value.playerId},s=await $(a);if(200!==s.code)return b(s.msg);H.value=s.data.headImg||""};return(a,s)=>{const e=c("van-nav-bar"),l=c("van-image"),t=n("img");return i(),r("div",_,[o(e,{class:"bg-title",title:J.value,border:!1},{left:u((()=>[v("span",{onClick:s[0]||(s[0]=a=>{P.back()})},d(a.$t("user.cancellation")),1)])),right:u((()=>[v("span",{onClick:s[1]||(s[1]=a=>(async()=>{const a={headImg:H.value,nickName:z.value.nickName,lang:localStorage.getItem("locale")||"zh-cn"},s=await I(a);if(200!==s.code)return b(s.msg);b(q("user.EditSuccessfully")),h.dispatch("user/userInfo"),P.push("/user/userInfo")})())},d(a.$t("user.save")),1)])),_:1},8,["title"]),v("div",E,[m(v("img",w,null,512),[[t,H.value]])]),v("div",F,[v("span",{class:g(1===A.value?"active":""),onClick:s[2]||(s[2]=a=>A.value=1)},d(a.$t("user.football")),3),v("span",{class:g(2===A.value?"active":""),onClick:s[3]||(s[3]=a=>A.value=2)},d(a.$t("user.otherCharacters")),3)]),v("div",j,[1===A.value?(i(),r("div",x,[(i(),r(p,null,f(16,(a=>v("div",{key:a,class:"select-img"},[o(l,{class:"img_1",fit:"contain",src:R(a,1),onClick:s=>O(a,1)},null,8,["src","onClick"])]))),64))])):k("",!0),2===A.value?(i(),r("div",N,[(i(),r(p,null,f(16,(a=>v("div",{key:a,class:"select-img"},[o(l,{class:"img_1",fit:"contain",src:R(a,2),onClick:s=>O(a,2)},null,8,["src","onClick"])]))),64))])):k("",!0),3===A.value?(i(),r("div",S,[(i(),r(p,null,f(16,(a=>v("div",{key:a,class:"select-img"},[v("div",{class:g(["img_2",[`background-${a}`]])},null,2)]))),64))])):k("",!0)])])}}});P.__scopeId="data-v-3182e3a8";export{P as default};
