<<<<<<<< HEAD:dist/assets/editImg.efdecc7e.js
import{h as a}from"./head-img.b46c56be.js";import{s,b as e,d as l,j as t,r as c,o as n,R as i,q as r,O as o,P as u,S as v,Y as d,F as m,Z as g,a2 as p,V as f}from"./vue.e791136f.js";import{u as k,O as $,b as y,I as h,s as b,Q as I}from"./index.c080b2d9.js";const C={class:"editImg"},_={class:"title"},w={class:"area-btn_1"},E={class:"editName-content"},F={key:0,class:"img-style"},j={key:1,class:"img-style"},N={key:2,class:"img-style"};var S=s({setup(s){const S=f(),{t:x}=k(),O=e((()=>b.state.user.userInfo)),P=l(1),q=l(a),A=l(""),Q=l(x("user.EditAvatar")),R=(a,s)=>{1===s&&(A.value=`/FE/common/head/newsport/star/${a}.png`,Z(A.value)),2===s&&(A.value=`/FE/common/head/newsport/else/${a}.png`,Z(A.value))},V=(a,s)=>{if(1===s){return`${h}${`/FE/common/head/newsport/star/${a}.png`}`}if(2===s){return`${h}${`/FE/common/head/newsport/else/${a}.png`}`}};t((()=>{Y()}));const Y=async()=>{const a={fPlayerId:O.value.playerId},s=await $(a);if(200!==s.code)return y(s.msg);A.value=s.data.headImg||"",Z(A.value)},Z=a=>{a&&(q.value=`${h}${a}`)};return(a,s)=>{const e=c("van-nav-bar"),l=c("van-image");return n(),i("div",C,[r(e,{class:"bg-title",title:Q.value,border:!1},{left:o((()=>[u("span",{onClick:s[0]||(s[0]=a=>{S.back()})},v(a.$t("user.cancellation")),1)])),right:o((()=>[u("span",{onClick:s[1]||(s[1]=a=>(async()=>{const a={headImg:A.value,nickName:O.value.nickName,lang:localStorage.getItem("locale")},s=await I(a);if(200!==s.code)return y(s.msg);y(x("user.EditSuccessfully")),b.dispatch("user/userInfo"),S.push("/user/userInfo")})())},v(a.$t("user.save")),1)])),_:1},8,["title"]),u("div",_,[r(l,{class:"img_1",fit:"contain",src:q.value},null,8,["src"])]),u("div",w,[u("span",{class:d(1==P.value?"active":""),onClick:s[2]||(s[2]=a=>P.value=1)},v(a.$t("user.football")),3),u("span",{class:d(2==P.value?"active":""),onClick:s[3]||(s[3]=a=>P.value=2)},v(a.$t("user.otherCharacters")),3)]),u("div",E,[1===P.value?(n(),i("div",F,[(n(),i(m,null,g(16,(a=>u("div",{key:a,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:V(a,1),onClick:s=>R(a,1)},null,8,["src","onClick"])]))),64))])):p("",!0),2===P.value?(n(),i("div",j,[(n(),i(m,null,g(16,(a=>u("div",{key:a,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:V(a,2),onClick:s=>R(a,2)},null,8,["src","onClick"])]))),64))])):p("",!0),3===P.value?(n(),i("div",N,[(n(),i(m,null,g(16,(a=>u("div",{key:a,class:"select-img"},[u("div",{class:d(["img_2",[`background-${a}`]])},null,2)]))),64))])):p("",!0)])])}}});S.__scopeId="data-v-353ae215";export{S as default};
========
import{h as a}from"./head-img.9a52dd06.js";import{s,b as e,d as l,j as t,r as c,o as n,R as i,q as r,O as o,P as u,S as v,Y as d,F as m,Z as g,a2 as p,V as f}from"./vue.979f7bee.js";import{u as k,O as $,b as y,I as h,s as I,Q as b}from"./index.d3976e45.js";const C={class:"editImg"},_={class:"title"},w={class:"area-btn_1"},E={class:"editName-content"},F={key:0,class:"img-style"},j={key:1,class:"img-style"},N={key:2,class:"img-style"};var S=s({setup(s){const S=f(),{t:x}=k(),O=e((()=>I.state.user.userInfo)),P=l(1),q=l(a),A=l(""),Q=l(x("user.EditAvatar")),R=(a,s)=>{1===s&&(A.value=`/FE/common/head/newsport/star/${a}.png`,Z(A.value)),2===s&&(A.value=`/FE/common/head/newsport/else/${a}.png`,Z(A.value))},V=(a,s)=>{if(1===s){return`${h}${`/FE/common/head/newsport/star/${a}.png`}`}if(2===s){return`${h}${`/FE/common/head/newsport/else/${a}.png`}`}};t((()=>{Y()}));const Y=async()=>{const a={fPlayerId:O.value.playerId},s=await $(a);if(200!==s.code)return y(s.msg);A.value=s.data.headImg||"",Z(A.value)},Z=a=>{a&&(q.value=`${h}${a}`)};return(a,s)=>{const e=c("van-nav-bar"),l=c("van-image");return n(),i("div",C,[r(e,{class:"bg-title",title:Q.value,border:!1},{left:o((()=>[u("span",{onClick:s[0]||(s[0]=a=>{S.back()})},v(a.$t("user.cancellation")),1)])),right:o((()=>[u("span",{onClick:s[1]||(s[1]=a=>(async()=>{const a={headImg:A.value,nickName:O.value.nickName,lang:localStorage.getItem("locale")},s=await b(a);if(200!==s.code)return y(s.msg);y(x("user.EditSuccessfully")),I.dispatch("user/userInfo"),S.push("/user/userInfo")})())},v(a.$t("user.save")),1)])),_:1},8,["title"]),u("div",_,[r(l,{class:"img_1",fit:"contain",src:q.value},null,8,["src"])]),u("div",w,[u("span",{class:d(1==P.value?"active":""),onClick:s[2]||(s[2]=a=>P.value=1)},v(a.$t("user.football")),3),u("span",{class:d(2==P.value?"active":""),onClick:s[3]||(s[3]=a=>P.value=2)},v(a.$t("user.otherCharacters")),3)]),u("div",E,[1===P.value?(n(),i("div",F,[(n(),i(m,null,g(16,(a=>u("div",{key:a,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:V(a,1),onClick:s=>R(a,1)},null,8,["src","onClick"])]))),64))])):p("",!0),2===P.value?(n(),i("div",j,[(n(),i(m,null,g(16,(a=>u("div",{key:a,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:V(a,2),onClick:s=>R(a,2)},null,8,["src","onClick"])]))),64))])):p("",!0),3===P.value?(n(),i("div",N,[(n(),i(m,null,g(16,(a=>u("div",{key:a,class:"select-img"},[u("div",{class:d(["img_2",[`background-${a}`]])},null,2)]))),64))])):p("",!0)])])}}});S.__scopeId="data-v-404c67da";export{S as default};
>>>>>>>> a6dc2fd48463b74efd51038c24fbd8461bb6358c:dist/assets/editImg.e68cc5c6.js
