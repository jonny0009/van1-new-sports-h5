import{s as a,a2 as e,R as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,S as c,P as v,q as r,V as d,u as p,x as g,$ as y,c as h,Z as f}from"./vue.144c3097.js";import{m as b}from"./index.b05ea4f9.js";import{u as w}from"./useMatch.caead6c6.js";import{u as x,_ as j}from"./index.2c3ef0d7.js";import{s as S,S as T}from"./index.0b90bc79.js";import"./getScore.309349a6.js";const k={class:"team"},H={class:"team-header"},L={class:"league"},M={class:"date"},B={class:"team-box"},D={class:"team-player host"},I={class:"img-num"},R={type:4,alt:""},C=["innerHTML"],$={key:0,class:"icons"},_={class:"team-player away"},E={class:"img-num"},P={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=w(),N=l((()=>S.state.app.showFixedBet)),{getPlayGroupType:V}=x();t((()=>{U(),z()})),n((()=>{J()}));let Z=null;const z=()=>{J(),Z=setInterval((()=>{U(!1)}),5e3)},J=()=>{Z&&(clearInterval(Z),Z=null)},K=o({}),O=o(!1),Q=o([]),U=async(a=!0)=>{O.value=a;const e=A.params.id,s=await b({gidm:e});K.value=s.data||{},200===s.code&&(Q.value=await V(K.value),O.value=!1)},W=()=>{const{showtype:a,gidm:e}=K.value;"RB"===a&&F.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),c("div",{class:f(["bet-container",{"has-bet":p(N)}])},[v("div",k,[v("div",H,[v("div",L,[r(s,{name:"live-football"}),v("span",null,d(K.value.leagueName),1)]),v("div",M,d(p(T)(K.value.gameDate,"MM-DD HH:mm")),1)]),v("div",B,[v("div",D,[v("div",I,[g(v("img",R,null,512),[[n,K.value.homeLogo]]),v("span",null,d(p(G).getScore(K.value,"H")),1)]),v("strong",null,d(K.value.homeTeam),1)]),v("div",{class:"team-score",onClick:W},[v("span",{class:"default",innerHTML:p(G).showRBTime(K.value)},null,8,C),"RB"==K.value.showtype?(m(),c("span",$,[r(s,{name:"live-play"})])):y("",!0)]),v("div",_,[v("div",E,[v("span",null,d(p(G).getScore(K.value,"C")),1),g(v("img",P,null,512),[[n,K.value.awayLogo]])]),v("strong",null,d(K.value.awayTeam),1)])])]),v("div",q,[O.value?(m(),h(l,{key:0})):0===Q.value.length?(m(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),h(j,{key:2,"data-list":Q.value,"match-info":K.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-3526d456";export{A as default};
