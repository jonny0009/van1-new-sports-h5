import{s as a,a2 as e,U as s,b as l,j as t,a as n,d as o,r as u,E as i,o as c,R as m,P as v,q as d,W as r,u as p,x as g,$ as y,c as h,_ as f}from"./vue.c62eea93.js";import{m as w}from"./index.0dc9c977.js";import{u as x}from"./useMatch.e1b73d38.js";import{u as b,_ as j}from"./index.0bc0973a.js";import{s as T,G as k}from"./index.c0ce133d.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},R={class:"img-num"},_={type:4,alt:""},C=["innerHTML"],S={key:0,class:"icons"},$={class:"team-player away"},E={class:"img-num"},G={type:5,alt:""},P={class:"bettings"};var q=a({setup(a){const q=e(),A=s(),F=x(),N=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:U}=b();t((()=>{V(),z()})),n((()=>{J()}));let W=null;const z=()=>{J(),W=setInterval((()=>{V(!1)}),5e3)},J=()=>{W&&(clearInterval(W),W=null)},K=o({}),O=o(!1),Q=o([]),V=async(a=!0)=>{O.value=a;const e=q.params.id,s=await w({gidm:e});K.value=s.data||{},200===s.code&&(Q.value=await U(K.value),O.value=!1)},X=()=>{const{showtype:a,gidm:e}=K.value;"RB"===a&&A.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return c(),m("div",{class:f(["bet-container",{"has-bet":p(N)}])},[v("div",H,[v("div",L,[v("div",M,[d(s,{name:"live-football"}),v("span",null,r(K.value.leagueName),1)]),v("div",B,r(p(k)(K.value.gameDate,"MM-DD HH:mm")),1)]),v("div",D,[v("div",I,[v("div",R,[g(v("img",_,null,512),[[n,K.value.homeLogo]]),v("span",null,r(p(F).getScore(K.value,"H")),1)]),v("strong",null,r(K.value.homeTeam),1)]),v("div",{class:"team-score",onClick:X},[v("span",{class:"default",innerHTML:p(F).showRBTime(K.value)},null,8,C),"RB"==K.value.showtype?(c(),m("span",S,[d(s,{name:"live-play"})])):y("",!0)]),v("div",$,[v("div",E,[v("span",null,r(p(F).getScore(K.value,"C")),1),g(v("img",G,null,512),[[n,K.value.awayLogo]])]),v("strong",null,r(K.value.awayTeam),1)])])]),v("div",P,[O.value?(c(),h(l,{key:0})):0===Q.value.length?(c(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(c(),h(j,{key:2,"data-list":Q.value,"match-info":K.value},null,8,["data-list","match-info"]))])],2)}}});q.__scopeId="data-v-3526d456";export{q as default};
