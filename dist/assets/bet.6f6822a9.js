import{s as a,$ as e,W as s,b as l,j as t,a as n,d as o,r as u,E as i,o as v,R as c,P as m,q as d,U as r,u as p,x as g,a2 as y,c as h,Z as f}from"./vue.bfc6c13a.js";import{u as b,m as w}from"./index.540c68d9.js";import{u as x,_ as T}from"./index.c92b0456.js";import{s as j,R as k}from"./index.f7d942b2.js";const H={class:"team"},L={class:"team-header"},R={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},M={class:"img-num"},C={type:4,alt:""},S=["innerHTML"],$={key:0,class:"icons"},_={class:"team-player away"},E={class:"img-num"},P={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=b(),N=l((()=>j.state.app.showFixedBet)),{getPlayGroupType:U}=x();t((()=>{Q(),Z()})),n((()=>{z()}));let W=null;const Z=()=>{z(),W=setInterval((()=>{Q(!1)}),5e3)},z=()=>{W&&(clearInterval(W),W=null)},J=o({}),K=o(!1),O=o([]),Q=async(a=!0)=>{K.value=a;const e=A.params.id,s=await w({gidm:e});J.value=s.data||{},200==s.code&&(O.value=await U(J.value),K.value=!1)},V=()=>{const{showtype:a,gidm:e}=J.value;"RB"==a&&F.push(`/broadcast/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return v(),c("div",{class:f(["bet-container",{"has-bet":p(N)}])},[m("div",H,[m("div",L,[m("div",R,[d(s,{name:"live-football"}),m("span",null,r(J.value.leagueName),1)]),m("div",B,r(p(k)(J.value.gameDate,"MM-DD HH:mm")),1)]),m("div",D,[m("div",I,[m("div",M,[g(m("img",C,null,512),[[n,J.value.homeLogo]]),m("span",null,r(p(G).getScore(J.value,"H")),1)]),m("strong",null,r(J.value.homeTeam),1)]),m("div",{class:"team-score",onClick:V},[m("span",{class:"default",innerHTML:p(G).showRBTime(J.value)},null,8,S),"RB"==J.value.showtype?(v(),c("span",$,[d(s,{name:"live-play"})])):y("",!0)]),m("div",_,[m("div",E,[m("span",null,r(p(G).getScore(J.value,"C")),1),g(m("img",P,null,512),[[n,J.value.awayLogo]])]),m("strong",null,r(J.value.awayTeam),1)])])]),m("div",q,[K.value?(v(),h(l,{key:0})):0===O.value.length?(v(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(v(),h(T,{key:2,"data-list":O.value,"match-info":J.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-5e367a96";export{A as default};
