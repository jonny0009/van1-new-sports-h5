import{s as a,a2 as e,R as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,S as v,P as c,q as d,V as r,u as p,x as g,$ as y,c as h,Z as f}from"./vue.144c3097.js";import{m as w}from"./index.60d06217.js";import{u as x}from"./useMatch.6deca334.js";import{u as b,_ as j}from"./index.44bc17c9.js";import{s as T,$ as k}from"./index.faa5a252.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},R={class:"img-num"},S={type:4,alt:""},$=["innerHTML"],C={key:0,class:"icons"},_={class:"team-player away"},E={class:"img-num"},P={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=x(),N=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:V}=b();t((()=>{U(),z()})),n((()=>{J()}));let Z=null;const z=()=>{J(),Z=setInterval((()=>{U(!1)}),5e3)},J=()=>{Z&&(clearInterval(Z),Z=null)},K=o({}),O=o(!1),Q=o([]),U=async(a=!0)=>{O.value=a;const e=A.params.id,s=await w({gidm:e});K.value=s.data||{},200===s.code&&(Q.value=await V(K.value),O.value=!1)},W=()=>{const{showtype:a,gidm:e}=K.value;"RB"===a&&F.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),v("div",{class:f(["bet-container",{"has-bet":p(N)}])},[c("div",H,[c("div",L,[c("div",M,[d(s,{name:"live-football"}),c("span",null,r(K.value.leagueName),1)]),c("div",B,r(p(k)(K.value.gameDate,"MM-DD HH:mm")),1)]),c("div",D,[c("div",I,[c("div",R,[g(c("img",S,null,512),[[n,K.value.homeLogo]]),c("span",null,r(p(G).getScore(K.value,"H")),1)]),c("strong",null,r(K.value.homeTeam),1)]),c("div",{class:"team-score",onClick:W},[c("span",{class:"default",innerHTML:p(G).showRBTime(K.value)},null,8,$),"RB"==K.value.showtype?(m(),v("span",C,[d(s,{name:"live-play"})])):y("",!0)]),c("div",_,[c("div",E,[c("span",null,r(p(G).getScore(K.value,"C")),1),g(c("img",P,null,512),[[n,K.value.awayLogo]])]),c("strong",null,r(K.value.awayTeam),1)])])]),c("div",q,[O.value?(m(),h(l,{key:0})):0===Q.value.length?(m(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),h(j,{key:2,"data-list":Q.value,"match-info":K.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-3526d456";export{A as default};
