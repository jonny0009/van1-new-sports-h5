import{a,b as e,c as l}from"./index.adb09ce4.js";import{j as s}from"./index.072c81cd.js";import{s as t,d as c,M as i,r as u,E as n,o,R as d,P as v,u as g,U as m,F as p,_ as r,q as y,Z as I,x as k}from"./vue.45f01342.js";const f={class:"champion-page"},w={class:"title"},C=["src"],h={class:"st"},x={class:"game-type-wrap"},T=["onClick"],b={class:"league-tab-wrap"},j={class:"all"},_=["onClick"],q={class:"img-wrap"},S={type:"6",width:"23",height:"23",fit:"contain",class:"item-img"},$={class:"league-list"},B=["onClick"],E={type:"6",fit:"contain",class:"my-image icon"},F={class:"content"},L={class:"name"};var M=t({setup(t){const M=c("0"),N=c("0"),P=c(),R=c(),U=c(),Z=a=>{N.value=a.leagueId,"0"===a.leagueId?U.value=R.value:U.value=R.value.filter((e=>e.leagueId===a.leagueId))};i((async()=>{await z(),await A()}));const z=async()=>{const e=await a()||{};200===e.code&&e.data&&(P.value=e.data,M.value=e.data[0].gameType)},A=async()=>{const a=await e({gameType:M.value})||{};200===a.code&&a.data&&(R.value=a.data,U.value=a.data)};return(a,e)=>{const t=u("SportsButton"),c=n("img");return o(),d("div",f,[v("div",w,[v("img",{fit:"contain",class:"item-img",src:g(l)},null,8,C),v("span",h,m(a.$t("sport.chooseLeague")),1)]),v("ul",x,[(o(!0),d(p,null,r(P.value,((a,e)=>(o(),d("li",{key:e,onClick:e=>(async a=>{M.value=a.gameType,N.value="0",A()})(a)},[y(t,{text:a.gameType,active:M.value===a.gameType},null,8,["text","active"])],8,T)))),128))]),v("ul",b,[v("li",{class:I("0"===N.value?"active":""),onClick:e[0]||(e[0]=a=>Z({leagueId:"0"}))},[v("div",j,m(a.$t("sport.all")),1)],2),(o(!0),d(p,null,r(R.value,((a,e)=>(o(),d("li",{key:e,class:I(N.value===a.leagueId?"active":""),onClick:e=>Z(a)},[v("div",q,[k(v("img",S,null,512),[[c,a.leagueIcon]])])],10,_)))),128))]),v("div",$,[(o(!0),d(p,null,r(U.value,((a,e)=>(o(),d("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId},params:{type:a.gameType}})})(a)},[k(v("img",E,null,512),[[c,a.leagueIcon]]),v("div",F,[v("div",L,m(a.leagueName),1)])],8,B)))),128))])])}}});M.__scopeId="data-v-530b395d";export{M as default};
