import{s as a,R as e,V as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,S as c,P as v,q as r,X as d,u as p,x as g,a0 as y,c as f,$ as h}from"./vue.4a9f22c3.js";import{m as w}from"./index.ffc959d7.js";import{u as x}from"./useMatch.57397eea.js";import{u as j,_ as b}from"./index.8484361f.js";import{s as T,E as k}from"./index.79ecf1cf.js";import"./getScore.338467f4.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},S={class:"date"},B={class:"team-box"},D={class:"team-player host"},I={class:"img-num"},R={type:4,alt:""},C=["innerHTML"],E={key:0,class:"icons"},$={class:"team-player away"},_={class:"img-num"},P={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=x(),N=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:V}=j();t((()=>{U(),z()})),n((()=>{J()}));let X=null;const z=()=>{J(),X=setInterval((()=>{U(!1)}),5e3)},J=()=>{X&&(clearInterval(X),X=null)},K=o({}),O=o(!1),Q=o([]),U=async(a=!0)=>{O.value=a;const e=A.params.id,s=await w({gidm:e});K.value=s.data||{},200===s.code&&(Q.value=await V(K.value),O.value=!1)},W=()=>{const{showtype:a,gidm:e}=K.value;"RB"===a&&F.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),c("div",{class:h(["bet-container",{"has-bet":p(N)}])},[v("div",H,[v("div",L,[v("div",M,[r(s,{name:"live-football"}),v("span",null,d(K.value.leagueName),1)]),v("div",S,d(p(k)(K.value.gameDate,"MM-DD HH:mm")),1)]),v("div",B,[v("div",D,[v("div",I,[g(v("img",R,null,512),[[n,K.value.homeLogo]]),v("span",null,d(p(G).getScore(K.value,"H")),1)]),v("strong",null,d(K.value.homeTeam),1)]),v("div",{class:"team-score",onClick:W},[v("span",{class:"default",innerHTML:p(G).showRBTime(K.value)},null,8,C),"RB"==K.value.showtype?(m(),c("span",E,[r(s,{name:"live-play"})])):y("",!0)]),v("div",$,[v("div",_,[v("span",null,d(p(G).getScore(K.value,"C")),1),g(v("img",P,null,512),[[n,K.value.awayLogo]])]),v("strong",null,d(K.value.awayTeam),1)])])]),v("div",q,[O.value?(m(),f(l,{key:0})):0===Q.value.length?(m(),f(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),f(b,{key:2,"data-list":Q.value,"match-info":K.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-3526d456";export{A as default};
