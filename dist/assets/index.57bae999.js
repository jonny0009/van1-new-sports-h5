import{c as a}from"./league-icon.4e7ec5bf.js";import{a as e,b as l}from"./index.bb159b23.js";import{r as s}from"./index.4754fc3d.js";import{d as t,a as i,j as c,r as u,N as n,o,u as g,q as m,v,y as d,F as p,E as r,m as y,D as f,L as I}from"./vue.3b4f9705.js";const k={class:"champion-page"},b={class:"title"},w=["src"],C={class:"st"},h={class:"game-type-wrap"},T=["onClick"],j={class:"league-tab-wrap"},x=["onClick"],q={class:"img-wrap"},L={type:"1",width:"23",height:"23",fit:"contain",class:"item-img"},N={class:"league-list"},S=["onClick"],$={type:"1",fit:"contain",class:"my-image icon"},_={class:"content"},B={class:"name"};var D=t({setup(t){const D=i("0"),E=i("0"),F=i(),z=i(),A=i(),G=a=>{E.value=a.leagueId,"0"===a.leagueId?A.value=z.value:A.value=z.value.filter((e=>e.leagueId===a.leagueId))};c((async()=>{await H(),await J()}));const H=async()=>{const a=await e()||{};200===a.code&&a.data&&(F.value=a.data,D.value=a.data[0].gameType)},J=async()=>{const a=await l({gameType:D.value})||{};200===a.code&&a.data&&(z.value=a.data,A.value=a.data)};return(e,l)=>{const t=u("SportsButton"),i=n("img");return o(),g("div",k,[m("div",b,[m("img",{fit:"contain",class:"item-img",src:v(a)},null,8,w),m("span",C,d(e.$t("sport.chooseLeague")),1)]),m("ul",h,[(o(!0),g(p,null,r(F.value,((a,e)=>(o(),g("li",{key:e,onClick:e=>(async a=>{D.value=a.gameType,E.value="0",J()})(a)},[y(t,{text:a.gameType,active:D.value===a.gameType},null,8,["text","active"])],8,T)))),128))]),m("ul",j,[m("li",{class:f("0"===E.value?"active":""),onClick:l[0]||(l[0]=a=>G({leagueId:"0"}))},d(e.$t("sport.all")),3),(o(!0),g(p,null,r(z.value,((a,e)=>(o(),g("li",{key:e,class:f(E.value===a.leagueId?"active":""),onClick:e=>G(a)},[m("div",q,[I(m("img",L,null,512),[[i,a.leagueIcon]])])],10,x)))),128))]),m("div",N,[(o(!0),g(p,null,r(A.value,((a,e)=>(o(),g("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId},params:{type:a.gameType}})})(a)},[I(m("img",$,null,512),[[i,a.leagueIcon]]),m("div",_,[m("div",B,d(a.leagueName),1)])],8,S)))),128))])])}}});D.__scopeId="data-v-2eba563c";export{D as default};
