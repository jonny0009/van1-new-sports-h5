import{u as s,H as a,d as e,s as l,p as t,J as c,I as n}from"./index.6e1ffcf5.js";import{s as i,R as r,b as o,d as u,j as d,r as v,E as m,o as g,S as p,q as f,O as k,P as y,V as $,x as h,Z as I,F as b,_ as C,$ as _}from"./vue.7833d4f2.js";const E={class:"editImg"},w={class:"title"},F={class:"img_1",type:3,style:{"object-fit":"cover"}},j={class:"area-btn_1"},x={class:"editName-content"},N={key:0,class:"img-style"},S={key:1,class:"img-style"},P={key:2,class:"img-style"};var q=i({setup(i){const q=r(),{t:A}=s(),H=o((()=>l.state.user.userInfo)),J=u(1),O=u(""),R=u(A("user.EditAvatar")),V=(s,a)=>{1===a&&(O.value=`/FE/common/head/newsport/star/${s}.png`),2===a&&(O.value=`/FE/common/head/newsport/else/${s}.png`)},Z=(s,a)=>{if(1===a){return`${n}${`/FE/common/head/newsport/star/${s}.png`}`}if(2===a){return`${n}${`/FE/common/head/newsport/else/${s}.png`}`}};d((()=>{z()}));const z=async()=>{const s={fPlayerId:H.value.playerId},l=await a(s);if(200!==l.code)return e(l.msg);O.value=l.data.headImg||""};return(s,a)=>{const n=v("van-nav-bar"),i=v("van-image"),r=m("img");return g(),p("div",E,[f(n,{class:"bg-title",title:R.value,border:!1},{left:k((()=>[y("span",{onClick:a[0]||(a[0]=s=>{q.back()})},$(s.$t("user.cancellation")),1)])),right:k((()=>[y("span",{onClick:a[1]||(a[1]=s=>(async()=>{const s={headImg:O.value,nickName:H.value.nickName,lang:localStorage.getItem("locale")||t()},a=await c(s);if(200!==a.code)return e(a.msg);e(A("user.EditSuccessfully")),l.dispatch("user/userInfo"),q.push("/user/userInfo")})())},$(s.$t("user.save")),1)])),_:1},8,["title"]),y("div",w,[h(y("img",F,null,512),[[r,O.value]])]),y("div",j,[y("span",{class:I(1===J.value?"active":""),onClick:a[2]||(a[2]=s=>J.value=1)},$(s.$t("user.football")),3),y("span",{class:I(2===J.value?"active":""),onClick:a[3]||(a[3]=s=>J.value=2)},$(s.$t("user.otherCharacters")),3)]),y("div",x,[1===J.value?(g(),p("div",N,[(g(),p(b,null,C(16,(s=>y("div",{key:s,class:"select-img"},[f(i,{class:"img_1",fit:"contain",src:Z(s,1),onClick:a=>V(s,1)},null,8,["src","onClick"])]))),64))])):_("",!0),2===J.value?(g(),p("div",S,[(g(),p(b,null,C(16,(s=>y("div",{key:s,class:"select-img"},[f(i,{class:"img_1",fit:"contain",src:Z(s,2),onClick:a=>V(s,2)},null,8,["src","onClick"])]))),64))])):_("",!0),3===J.value?(g(),p("div",P,[(g(),p(b,null,C(16,(s=>y("div",{key:s,class:"select-img"},[y("div",{class:I(["img_2",[`background-${s}`]])},null,2)]))),64))])):_("",!0)])])}}});q.__scopeId="data-v-650d5cd3";export{q as default};
