import{a,b as e,c as l}from"./index.d7b5f5cf.js";import{j as s}from"./index.009fb862.js";import{s as t,d as i,M as c,r as u,E as n,o,R as d,P as v,u as g,U as m,F as p,_ as r,q as y,Z as f,x as I}from"./vue.b83303fa.js";const k={class:"champion-page"},w={class:"title"},h=["src"],C={class:"st"},x={class:"game-type-wrap"},T=["onClick"],b={class:"league-tab-wrap"},j={class:"all"},_=["onClick"],q={class:"img-wrap"},S={type:"6",width:"23",height:"23",fit:"contain",class:"item-img"},$={class:"league-list"},B=["onClick"],E={type:"6",fit:"contain",class:"my-image icon"},F={class:"content"},L={class:"name"};var M=t({setup(t){const M=i("0"),N=i("0"),P=i(),R=i(),U=i(),Z=a=>{N.value=a.leagueId,"0"===a.leagueId?U.value=R.value:U.value=R.value.filter((e=>e.leagueId===a.leagueId))};c((async()=>{await z(),await A()}));const z=async()=>{const e=await a()||{};200===e.code&&e.data&&(P.value=e.data,M.value=e.data[0].gameType)},A=async()=>{const a=await e({gameType:M.value})||{};200===a.code&&a.data&&(R.value=a.data,U.value=a.data)};return(a,e)=>{const t=u("SportsButton"),i=n("img");return o(),d("div",k,[v("div",w,[v("img",{fit:"contain",class:"item-img",src:g(l)},null,8,h),v("span",C,m(a.$t("sport.chooseLeague")),1)]),v("ul",x,[(o(!0),d(p,null,r(P.value,((a,e)=>(o(),d("li",{key:e,onClick:e=>(async a=>{M.value=a.gameType,N.value="0",A()})(a)},[y(t,{text:a.gameType,active:M.value===a.gameType},null,8,["text","active"])],8,T)))),128))]),v("ul",b,[v("li",{class:f("0"===N.value?"active":""),onClick:e[0]||(e[0]=a=>Z({leagueId:"0"}))},[v("div",j,m(a.$t("sport.all")),1)],2),(o(!0),d(p,null,r(R.value,((a,e)=>(o(),d("li",{key:e,class:f(N.value===a.leagueId?"active":""),onClick:e=>Z(a)},[v("div",q,[I(v("img",S,null,512),[[i,a.leagueIcon]])])],10,_)))),128))]),v("div",$,[(o(!0),d(p,null,r(U.value,((a,e)=>(o(),d("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId,ischampion:"yes"},params:{type:a.gameType}})})(a)},[I(v("img",E,null,512),[[i,a.leagueIcon]]),v("div",F,[v("div",L,m(a.leagueName),1)])],8,B)))),128))])])}}});M.__scopeId="data-v-fd65f3ce";export{M as default};
