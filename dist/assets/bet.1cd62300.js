import{s as a,a2 as e,R as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,S as v,P as c,q as d,V as r,u as p,x as g,$ as y,c as h,Z as f}from"./vue.7833d4f2.js";import{m as b}from"./index.f614ae4e.js";import{u as w}from"./useMatch.7e7a0b7b.js";import{u as x,_ as j}from"./index.71b53efd.js";import{s as T,Z as k}from"./index.fc31865d.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},R={class:"img-num"},S={type:4,alt:""},C=["innerHTML"],$={key:0,class:"icons"},_={class:"team-player away"},E={class:"img-num"},P={type:5,alt:""},Z={class:"bettings"};var q=a({setup(a){const q=e(),A=s(),F=w(),G=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:N}=x();t((()=>{U(),z()})),n((()=>{J()}));let V=null;const z=()=>{J(),V=setInterval((()=>{U(!1)}),5e3)},J=()=>{V&&(clearInterval(V),V=null)},K=o({}),O=o(!1),Q=o([]),U=async(a=!0)=>{O.value=a;const e=q.params.id,s=await b({gidm:e});K.value=s.data||{},200===s.code&&(Q.value=await N(K.value),O.value=!1)},W=()=>{const{showtype:a,gidm:e}=K.value;"RB"===a&&A.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),v("div",{class:f(["bet-container",{"has-bet":p(G)}])},[c("div",H,[c("div",L,[c("div",M,[d(s,{name:"live-football"}),c("span",null,r(K.value.leagueName),1)]),c("div",B,r(p(k)(K.value.gameDate,"MM-DD HH:mm")),1)]),c("div",D,[c("div",I,[c("div",R,[g(c("img",S,null,512),[[n,K.value.homeLogo]]),c("span",null,r(p(F).getScore(K.value,"H")),1)]),c("strong",null,r(K.value.homeTeam),1)]),c("div",{class:"team-score",onClick:W},[c("span",{class:"default",innerHTML:p(F).showRBTime(K.value)},null,8,C),"RB"==K.value.showtype?(m(),v("span",$,[d(s,{name:"live-play"})])):y("",!0)]),c("div",_,[c("div",E,[c("span",null,r(p(F).getScore(K.value,"C")),1),g(c("img",P,null,512),[[n,K.value.awayLogo]])]),c("strong",null,r(K.value.awayTeam),1)])])]),c("div",Z,[O.value?(m(),h(l,{key:0})):0===Q.value.length?(m(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),h(j,{key:2,"data-list":Q.value,"match-info":K.value},null,8,["data-list","match-info"]))])],2)}}});q.__scopeId="data-v-3526d456";export{q as default};
