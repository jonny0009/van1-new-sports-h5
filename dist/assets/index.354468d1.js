import{c as a}from"./league-icon.f74f56e6.js";import{a as e,b as l}from"./index.0d578643.js";import{g as s}from"./index.0b5c5324.js";import{s as t,d as i,M as c,r as u,E as n,o,R as g,P as d,u as v,S as m,F as p,_ as r,q as y,Z as f,x as I}from"./vue.5fad807b.js";const k={class:"champion-page"},w={class:"title"},C=["src"],h={class:"st"},x={class:"game-type-wrap"},T=["onClick"],b={class:"league-tab-wrap"},j={class:"all"},S=["onClick"],_={class:"img-wrap"},q={type:"6",width:"23",height:"23",fit:"contain",class:"item-img"},$={class:"league-list"},B=["onClick"],E={type:"6",fit:"contain",class:"my-image icon"},F={class:"content"},L={class:"name"};var M=t({setup(t){const M=i("0"),N=i("0"),P=i(),R=i(),Z=i(),z=a=>{N.value=a.leagueId,"0"===a.leagueId?Z.value=R.value:Z.value=R.value.filter((e=>e.leagueId===a.leagueId))};c((async()=>{await A(),await D()}));const A=async()=>{const a=await e()||{};200===a.code&&a.data&&(P.value=a.data,M.value=a.data[0].gameType)},D=async()=>{const a=await l({gameType:M.value})||{};200===a.code&&a.data&&(R.value=a.data,Z.value=a.data)};return(e,l)=>{const t=u("SportsButton"),i=n("img");return o(),g("div",k,[d("div",w,[d("img",{fit:"contain",class:"item-img",src:v(a)},null,8,C),d("span",h,m(e.$t("sport.chooseLeague")),1)]),d("ul",x,[(o(!0),g(p,null,r(P.value,((a,e)=>(o(),g("li",{key:e,onClick:e=>(async a=>{M.value=a.gameType,N.value="0",D()})(a)},[y(t,{text:a.gameType,active:M.value===a.gameType},null,8,["text","active"])],8,T)))),128))]),d("ul",b,[d("li",{class:f("0"===N.value?"active":""),onClick:l[0]||(l[0]=a=>z({leagueId:"0"}))},[d("div",j,m(e.$t("sport.all")),1)],2),(o(!0),g(p,null,r(R.value,((a,e)=>(o(),g("li",{key:e,class:f(N.value===a.leagueId?"active":""),onClick:e=>z(a)},[d("div",_,[I(d("img",q,null,512),[[i,a.leagueIcon]])])],10,S)))),128))]),d("div",$,[(o(!0),g(p,null,r(Z.value,((a,e)=>(o(),g("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId},params:{type:a.gameType}})})(a)},[I(d("img",E,null,512),[[i,a.leagueIcon]]),d("div",F,[d("div",L,m(a.leagueName),1)])],8,B)))),128))])])}}});M.__scopeId="data-v-660f1235";export{M as default};
