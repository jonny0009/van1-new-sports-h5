const a={};import{h as s}from"./head-img.2b5edb0e.js";import{s as e,b as l,d as c,j as i,r as t,o as n,R as u,q as r,O as o,P as v,Y as d,F as m,Z as g,a1 as p,V as f}from"./vue.85a22cc6.js";import{p as k,u as y}from"./index.d5bee19a.js";import{d as _,I as b,s as h}from"./index.60680413.js";const I={class:"editName"},$={class:"title"},j={class:"area-btn_1"},C={class:"content"},x={key:0,class:"img-style"},w={key:1,class:"img-style"},F={key:2,class:"img-style"};var N=e({setup(e){const N=f(),E=l((()=>h.state.user.userInfo)),P=c(1),R=c(s),q=c(""),L=c("编辑头像"),O=(s,e)=>1===e?`${b}${`/FE/common/head/${s}_s_248x248.jpg`}`:2===e?new URL(`../../assets/images/user/else/${s}.png`,a.url).href:void 0;i((()=>{S()}));const S=async()=>{const a={fPlayerId:E.value.playerId},s=await k(a);if(200!==s.code)return _(s.msg);q.value=s.data.headImg||"",U(q.value)},U=a=>{a&&(R.value=`${b}${a}`)};return(a,s)=>{const e=t("van-nav-bar"),l=t("van-image");return n(),u("div",I,[r(e,{class:"bg-title",title:L.value,border:!1},{left:o((()=>[v("span",{onClick:s[0]||(s[0]=a=>{N.back()})},"取消")])),right:o((()=>[v("span",{onClick:s[1]||(s[1]=a=>(async()=>{const a={headImg:q.value,nickName:E.value.nickName,lang:localStorage.getItem("locale")},s=await y(a);if(200!==s.code)return _(s.msg);_("编辑成功"),h.dispatch("user/userInfo"),N.push("/user/userInfo")})())},"保存")])),_:1},8,["title"]),v("div",$,[r(l,{class:"img_1",fit:"contain",src:R.value},null,8,["src"])]),v("div",j,[v("span",{class:d(1==P.value?"active":""),onClick:s[2]||(s[2]=a=>P.value=1)},"足球明星",2),v("span",{class:d(2==P.value?"active":""),onClick:s[3]||(s[3]=a=>P.value=2)},"其他人物",2),v("span",{class:d(3==P.value?"active":""),onClick:s[4]||(s[4]=a=>P.value=3)},"背景颜色",2)]),v("div",C,[1===P.value?(n(),u("div",x,[(n(),u(m,null,g(48,(a=>v("div",{key:a,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:O(a,P.value),onClick:s=>{return e=a,q.value=`/FE/common/head/${e}_s_248x248.jpg`,void U(q.value);var e}},null,8,["src","onClick"])]))),64))])):p("",!0),2===P.value?(n(),u("div",w,[(n(),u(m,null,g(16,(a=>v("div",{key:a,class:"select-img"},[r(l,{class:"img_1",fit:"contain",src:O(a,P.value)},null,8,["src"])]))),64))])):p("",!0),3===P.value?(n(),u("div",F,[(n(),u(m,null,g(16,(a=>v("div",{key:a,class:"select-img"},[v("div",{class:d(["img_2",[`background-${a}`]])},null,2)]))),64))])):p("",!0)])])}}});N.__scopeId="data-v-5fcc96f6";export{N as default};
