import{c as a}from"./league-icon.ebdbcce0.js";import{a as e,b as l}from"./index.4a9b3f2b.js";import{f as s}from"./index.e79a695e.js";import{s as t,d as i,M as c,r as u,E as n,o,R as d,P as g,u as v,S as m,F as p,Z as r,q as y,Y as f,x as I}from"./vue.93da156d.js";const k={class:"champion-page"},w={class:"title"},b=["src"],C={class:"st"},h={class:"game-type-wrap"},x=["onClick"],T={class:"league-tab-wrap"},j={class:"all"},S=["onClick"],q={class:"img-wrap"},$={type:"1",width:"23",height:"23",fit:"contain",class:"item-img"},_={class:"league-list"},B=["onClick"],E={type:"1",fit:"contain",class:"my-image icon"},F={class:"content"},L={class:"name"};var M=t({setup(t){const M=i("0"),N=i("0"),P=i(),R=i(),Y=i(),Z=a=>{N.value=a.leagueId,"0"===a.leagueId?Y.value=R.value:Y.value=R.value.filter((e=>e.leagueId===a.leagueId))};c((async()=>{await z(),await A()}));const z=async()=>{const a=await e()||{};200===a.code&&a.data&&(P.value=a.data,M.value=a.data[0].gameType)},A=async()=>{const a=await l({gameType:M.value})||{};200===a.code&&a.data&&(R.value=a.data,Y.value=a.data)};return(e,l)=>{const t=u("SportsButton"),i=n("img");return o(),d("div",k,[g("div",w,[g("img",{fit:"contain",class:"item-img",src:v(a)},null,8,b),g("span",C,m(e.$t("sport.chooseLeague")),1)]),g("ul",h,[(o(!0),d(p,null,r(P.value,((a,e)=>(o(),d("li",{key:e,onClick:e=>(async a=>{M.value=a.gameType,N.value="0",A()})(a)},[y(t,{text:a.gameType,active:M.value===a.gameType},null,8,["text","active"])],8,x)))),128))]),g("ul",T,[g("li",{class:f("0"===N.value?"active":""),onClick:l[0]||(l[0]=a=>Z({leagueId:"0"}))},[g("div",j,m(e.$t("sport.all")),1)],2),(o(!0),d(p,null,r(R.value,((a,e)=>(o(),d("li",{key:e,class:f(N.value===a.leagueId?"active":""),onClick:e=>Z(a)},[g("div",q,[I(g("img",$,null,512),[[i,a.leagueIcon]])])],10,S)))),128))]),g("div",_,[(o(!0),d(p,null,r(Y.value,((a,e)=>(o(),d("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId},params:{type:a.gameType}})})(a)},[I(g("img",E,null,512),[[i,a.leagueIcon]]),g("div",F,[g("div",L,m(a.leagueName),1)])],8,B)))),128))])])}}});M.__scopeId="data-v-6f24eabd";export{M as default};
