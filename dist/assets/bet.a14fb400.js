import{s as a,a2 as e,R as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,S as c,P as v,q as d,V as r,u as p,x as g,a0 as y,c as h,_ as f}from"./vue.845920bc.js";import{m as w}from"./index.f4125a3a.js";import{u as x}from"./useMatch.16176d11.js";import{u as b,_ as T}from"./index.8cd09fc7.js";import{s as j,T as k}from"./index.cfc13a15.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},R={class:"img-num"},S={type:4,alt:""},_=["innerHTML"],C={key:0,class:"icons"},E={class:"team-player away"},P={class:"img-num"},$={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=x(),N=l((()=>j.state.app.showFixedBet)),{getPlayGroupType:V}=b();t((()=>{W(),J()})),n((()=>{K()}));let z=null;const J=()=>{K(),z=setInterval((()=>{W(!1)}),5e3)},K=()=>{z&&(clearInterval(z),z=null)},O=o({}),Q=o(!1),U=o([]),W=async(a=!0)=>{Q.value=a;const e=A.params.id,s=await w({gidm:e});O.value=s.data||{},200===s.code&&(U.value=await V(O.value),Q.value=!1)},X=()=>{const{showtype:a,gidm:e}=O.value;"RB"===a&&F.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),c("div",{class:f(["bet-container",{"has-bet":p(N)}])},[v("div",H,[v("div",L,[v("div",M,[d(s,{name:"live-football"}),v("span",null,r(O.value.leagueName),1)]),v("div",B,r(p(k)(O.value.gameDate,"MM-DD HH:mm")),1)]),v("div",D,[v("div",I,[v("div",R,[g(v("img",S,null,512),[[n,O.value.homeLogo]]),v("span",null,r(p(G).getScore(O.value,"H")),1)]),v("strong",null,r(O.value.homeTeam),1)]),v("div",{class:"team-score",onClick:X},[v("span",{class:"default",innerHTML:p(G).showRBTime(O.value)},null,8,_),"RB"==O.value.showtype?(m(),c("span",C,[d(s,{name:"live-play"})])):y("",!0)]),v("div",E,[v("div",P,[v("span",null,r(p(G).getScore(O.value,"C")),1),g(v("img",$,null,512),[[n,O.value.awayLogo]])]),v("strong",null,r(O.value.awayTeam),1)])])]),v("div",q,[Q.value?(m(),h(l,{key:0})):0===U.value.length?(m(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),h(T,{key:2,"data-list":U.value,"match-info":O.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-3526d456";export{A as default};
