import{s as a,a2 as e,R as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,S as v,P as c,q as r,V as d,u as p,x as g,$ as y,c as h,Z as f}from"./vue.144c3097.js";import{m as b}from"./index.8b9a64f2.js";import{u as w}from"./useMatch.b49c103a.js";import{u as x,_ as j}from"./index.ed17d006.js";import{s as T,$ as k}from"./index.39c81357.js";import"./getScore.6b680491.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},S={class:"date"},B={class:"team-box"},D={class:"team-player host"},I={class:"img-num"},R={type:4,alt:""},$=["innerHTML"],C={key:0,class:"icons"},_={class:"team-player away"},E={class:"img-num"},P={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=w(),N=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:V}=x();t((()=>{U(),z()})),n((()=>{J()}));let Z=null;const z=()=>{J(),Z=setInterval((()=>{U(!1)}),5e3)},J=()=>{Z&&(clearInterval(Z),Z=null)},K=o({}),O=o(!1),Q=o([]),U=async(a=!0)=>{O.value=a;const e=A.params.id,s=await b({gidm:e});K.value=s.data||{},200===s.code&&(Q.value=await V(K.value),O.value=!1)},W=()=>{const{showtype:a,gidm:e}=K.value;"RB"===a&&F.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),v("div",{class:f(["bet-container",{"has-bet":p(N)}])},[c("div",H,[c("div",L,[c("div",M,[r(s,{name:"live-football"}),c("span",null,d(K.value.leagueName),1)]),c("div",S,d(p(k)(K.value.gameDate,"MM-DD HH:mm")),1)]),c("div",B,[c("div",D,[c("div",I,[g(c("img",R,null,512),[[n,K.value.homeLogo]]),c("span",null,d(p(G).getScore(K.value,"H")),1)]),c("strong",null,d(K.value.homeTeam),1)]),c("div",{class:"team-score",onClick:W},[c("span",{class:"default",innerHTML:p(G).showRBTime(K.value)},null,8,$),"RB"==K.value.showtype?(m(),v("span",C,[r(s,{name:"live-play"})])):y("",!0)]),c("div",_,[c("div",E,[c("span",null,d(p(G).getScore(K.value,"C")),1),g(c("img",P,null,512),[[n,K.value.awayLogo]])]),c("strong",null,d(K.value.awayTeam),1)])])]),c("div",q,[O.value?(m(),h(l,{key:0})):0===Q.value.length?(m(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),h(j,{key:2,"data-list":Q.value,"match-info":K.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-3526d456";export{A as default};
