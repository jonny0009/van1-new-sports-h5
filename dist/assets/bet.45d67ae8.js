import{s as a,a5 as e,R as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,S as v,P as c,q as d,V as r,u as p,x as g,a0 as y,c as h,_ as b}from"./vue.7b2d67a6.js";import{m as f}from"./index.4ecd846a.js";import{u as w}from"./useMatch.254d5b4b.js";import{u as x,_ as j}from"./index.35507783.js";import{s as T,S as k}from"./index.46b8efb1.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},S={class:"date"},B={class:"team-box"},D={class:"team-player host"},I={class:"img-num"},R={type:4,alt:""},_=["innerHTML"],C={key:0,class:"icons"},E={class:"team-player away"},P={class:"img-num"},$={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=w(),N=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:V}=x();t((()=>{W(),J()})),n((()=>{K()}));let z=null;const J=()=>{K(),z=setInterval((()=>{W(!1)}),5e3)},K=()=>{z&&(clearInterval(z),z=null)},O=o({}),Q=o(!1),U=o([]),W=async(a=!0)=>{Q.value=a;const e=A.params.id,s=await f({gidm:e});O.value=s.data||{},200==s.code&&(U.value=await V(O.value),Q.value=!1)},X=()=>{const{showtype:a,gidm:e}=O.value;"RB"==a&&F.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),v("div",{class:b(["bet-container",{"has-bet":p(N)}])},[c("div",H,[c("div",L,[c("div",M,[d(s,{name:"live-football"}),c("span",null,r(O.value.leagueName),1)]),c("div",S,r(p(k)(O.value.gameDate,"MM-DD HH:mm")),1)]),c("div",B,[c("div",D,[c("div",I,[g(c("img",R,null,512),[[n,O.value.homeLogo]]),c("span",null,r(p(G).getScore(O.value,"H")),1)]),c("strong",null,r(O.value.homeTeam),1)]),c("div",{class:"team-score",onClick:X},[c("span",{class:"default",innerHTML:p(G).showRBTime(O.value)},null,8,_),"RB"==O.value.showtype?(m(),v("span",C,[d(s,{name:"live-play"})])):y("",!0)]),c("div",E,[c("div",P,[c("span",null,r(p(G).getScore(O.value,"C")),1),g(c("img",$,null,512),[[n,O.value.awayLogo]])]),c("strong",null,r(O.value.awayTeam),1)])])]),c("div",q,[Q.value?(m(),h(l,{key:0})):0===U.value.length?(m(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),h(j,{key:2,"data-list":U.value,"match-info":O.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-ba1764cc";export{A as default};
