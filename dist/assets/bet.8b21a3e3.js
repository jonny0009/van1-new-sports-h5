import{s as a,$ as e,W as s,b as l,j as t,a as n,d as o,r as u,E as i,o as v,R as m,P as c,q as d,U as r,u as p,x as g,a2 as y,c as h,Z as b}from"./vue.b83303fa.js";import{u as f,m as w}from"./index.0a822de8.js";import{u as x,_ as T}from"./index.57d9a11a.js";import{s as j,X as k}from"./index.c235a7b6.js";const H={class:"team"},L={class:"team-header"},B={class:"league"},D={class:"date"},I={class:"team-box"},M={class:"team-player host"},R={class:"img-num"},C={type:4,alt:""},S=["innerHTML"],$={key:0,class:"icons"},_={class:"team-player away"},E={class:"img-num"},P={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=f(),N=l((()=>j.state.app.showFixedBet)),{getPlayGroupType:U}=x();t((()=>{O(),X()})),n((()=>{Z()}));let W=null;const X=()=>{Z(),W=setInterval((()=>{O(!1)}),5e3)},Z=()=>{W&&(clearInterval(W),W=null)},z=o({}),J=o(!1),K=o([]),O=async(a=!0)=>{J.value=a;const e=A.params.id,s=await w({gidm:e});z.value=s.data||{},200==s.code&&(K.value=await U(z.value),J.value=!1)},Q=()=>{const{showtype:a,gidm:e}=z.value;"RB"==a&&F.push(`/broadcast/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return v(),m("div",{class:b(["bet-container",{"has-bet":p(N)}])},[c("div",H,[c("div",L,[c("div",B,[d(s,{name:"live-football"}),c("span",null,r(z.value.leagueName),1)]),c("div",D,r(p(k)(z.value.gameDate,"MM-DD HH:mm")),1)]),c("div",I,[c("div",M,[c("div",R,[g(c("img",C,null,512),[[n,z.value.homeLogo]]),c("span",null,r(p(G).getScore(z.value,"H")),1)]),c("strong",null,r(z.value.homeTeam),1)]),c("div",{class:"team-score",onClick:Q},[c("span",{class:"default",innerHTML:p(G).showRBTime(z.value)},null,8,S),"RB"==z.value.showtype?(v(),m("span",$,[d(s,{name:"live-play"})])):y("",!0)]),c("div",_,[c("div",E,[c("span",null,r(p(G).getScore(z.value,"C")),1),g(c("img",P,null,512),[[n,z.value.awayLogo]])]),c("strong",null,r(z.value.awayTeam),1)])])]),c("div",q,[J.value?(v(),h(l,{key:0})):0===K.value.length?(v(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(v(),h(T,{key:2,"data-list":K.value,"match-info":z.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-0bbf389d";export{A as default};
