import{a,b as e,c as l}from"./index.01e1b2c2.js";import{j as s}from"./index.ad06644e.js";import{s as t,d as i,M as c,r as u,E as n,o,R as v,P as d,u as g,U as m,F as p,Z as r,q as y,_ as I,x as f}from"./vue.ffab6494.js";const k={class:"champion-page"},w={class:"title"},h=["src"],C={class:"st"},x={class:"game-type-wrap"},T=["onClick"],b={class:"league-tab-wrap"},j={class:"all"},_=["onClick"],q={class:"img-wrap"},S={type:"6",width:"23",height:"23",fit:"contain",class:"item-img"},$={class:"league-list"},B=["onClick"],E={type:"6",fit:"contain",class:"my-image icon"},F={class:"content"},L={class:"name"};var M=t({setup(t){const M=i("0"),N=i("0"),P=i(),R=i(),U=i(),Z=a=>{N.value=a.leagueId,"0"===a.leagueId?U.value=R.value:U.value=R.value.filter((e=>e.leagueId===a.leagueId))};c((async()=>{await z(),await A()}));const z=async()=>{const e=await a()||{};200===e.code&&e.data&&(P.value=e.data,M.value=e.data[0].gameType)},A=async()=>{const a=await e({gameType:M.value})||{};200===a.code&&a.data&&(R.value=a.data,U.value=a.data)};return(a,e)=>{const t=u("SportsButton"),i=n("img");return o(),v("div",k,[d("div",w,[d("img",{fit:"contain",class:"item-img",src:g(l)},null,8,h),d("span",C,m(a.$t("sport.chooseLeague")),1)]),d("ul",x,[(o(!0),v(p,null,r(P.value,((a,e)=>(o(),v("li",{key:e,onClick:e=>(async a=>{M.value=a.gameType,N.value="0",A()})(a)},[y(t,{text:a.gameType,active:M.value===a.gameType},null,8,["text","active"])],8,T)))),128))]),d("ul",b,[d("li",{class:I("0"===N.value?"active":""),onClick:e[0]||(e[0]=a=>Z({leagueId:"0"}))},[d("div",j,m(a.$t("sport.all")),1)],2),(o(!0),v(p,null,r(R.value,((a,e)=>(o(),v("li",{key:e,class:I(N.value===a.leagueId?"active":""),onClick:e=>Z(a)},[d("div",q,[f(d("img",S,null,512),[[i,a.leagueIcon]])])],10,_)))),128))]),d("div",$,[(o(!0),v(p,null,r(U.value,((a,e)=>(o(),v("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId,ischampion:"yes"},params:{type:a.gameType}})})(a)},[f(d("img",E,null,512),[[i,a.leagueIcon]]),d("div",F,[d("div",L,m(a.leagueName),1)])],8,B)))),128))])])}}});M.__scopeId="data-v-04749e4e";export{M as default};
