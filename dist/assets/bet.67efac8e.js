import{s as a,a4 as e,W as s,b as l,j as t,a as n,d as o,r as u,E as i,o as v,R as m,P as c,q as d,U as r,u as p,x as g,a1 as y,c as h,_ as f}from"./vue.469c5994.js";import{u as b,m as w}from"./index.b90ed8a5.js";import{u as x,_ as T}from"./index.e2a3f744.js";import{s as j,X as k}from"./index.d01fa8c7.js";const H={class:"team"},L={class:"team-header"},B={class:"league"},D={class:"date"},I={class:"team-box"},M={class:"team-player host"},R={class:"img-num"},_={type:4,alt:""},C=["innerHTML"],S={key:0,class:"icons"},E={class:"team-player away"},P={class:"img-num"},$={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=b(),N=l((()=>j.state.app.showFixedBet)),{getPlayGroupType:U}=x();t((()=>{Q(),X()})),n((()=>{z()}));let W=null;const X=()=>{z(),W=setInterval((()=>{Q(!1)}),5e3)},z=()=>{W&&(clearInterval(W),W=null)},J=o({}),K=o(!1),O=o([]),Q=async(a=!0)=>{K.value=a;const e=A.params.id,s=await w({gidm:e});J.value=s.data||{},200==s.code&&(O.value=await U(J.value),K.value=!1)},V=()=>{const{showtype:a,gidm:e}=J.value;"RB"==a&&F.push(`/broadcast/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return v(),m("div",{class:f(["bet-container",{"has-bet":p(N)}])},[c("div",H,[c("div",L,[c("div",B,[d(s,{name:"live-football"}),c("span",null,r(J.value.leagueName),1)]),c("div",D,r(p(k)(J.value.gameDate,"MM-DD HH:mm")),1)]),c("div",I,[c("div",M,[c("div",R,[g(c("img",_,null,512),[[n,J.value.homeLogo]]),c("span",null,r(p(G).getScore(J.value,"H")),1)]),c("strong",null,r(J.value.homeTeam),1)]),c("div",{class:"team-score",onClick:V},[c("span",{class:"default",innerHTML:p(G).showRBTime(J.value)},null,8,C),"RB"==J.value.showtype?(v(),m("span",S,[d(s,{name:"live-play"})])):y("",!0)]),c("div",E,[c("div",P,[c("span",null,r(p(G).getScore(J.value,"C")),1),g(c("img",$,null,512),[[n,J.value.awayLogo]])]),c("strong",null,r(J.value.awayTeam),1)])])]),c("div",q,[K.value?(v(),h(l,{key:0})):0===O.value.length?(v(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(v(),h(T,{key:2,"data-list":O.value,"match-info":J.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-0bbf389d";export{A as default};
