import{c as a}from"./league-icon.4e7ec5bf.js";import{a as e,b as l}from"./index.7c19f8d2.js";import{r as s}from"./index.4e6847ca.js";import{d as t,a as c,j as i,r as u,N as o,o as n,u as g,q as d,v,y as m,F as p,E as r,m as y,D as f,L as I}from"./vue.3b4f9705.js";const k={class:"champion-page"},w={class:"title"},C=["src"],T={class:"st"},h={class:"game-type-wrap"},b=["onClick"],j={class:"league-tab-wrap"},x=["onClick"],q={class:"img-wrap"},L={type:"1",width:"23",height:"23",fit:"contain",class:"item-img"},N={class:"league-list"},S=["onClick"],$={type:"1",fit:"contain",class:"my-image icon"},_={class:"content"},B={class:"name"};var D=t({setup(t){const D=c("0"),E=c("0"),F=c(),z=c(),A=c(),G=a=>{E.value=a.leagueId,"0"===a.leagueId?A.value=z.value:A.value=z.value.filter((e=>e.leagueId===a.leagueId)),console.log(a.leagueId)};i((async()=>{await H(),await J()}));const H=async()=>{const a=await e()||{};200===a.code&&a.data&&(F.value=a.data,D.value=a.data[0].gameType,console.log(D.value))},J=async()=>{const a=await l({gameType:D.value})||{};200===a.code&&a.data&&(z.value=a.data,A.value=a.data)};return(e,l)=>{const t=u("SportsButton"),c=o("img");return n(),g("div",k,[d("div",w,[d("img",{fit:"contain",class:"item-img",src:v(a)},null,8,C),d("span",T,m(e.$t("sport.chooseLeague")),1)]),d("ul",h,[(n(!0),g(p,null,r(F.value,((a,e)=>(n(),g("li",{key:e,onClick:e=>(async a=>{console.log(a.gameType),D.value=a.gameType,E.value="0",J()})(a)},[y(t,{text:a.gameType,active:D.value===a.gameType},null,8,["text","active"])],8,b)))),128))]),d("ul",j,[d("li",{class:f("0"===E.value?"active":""),onClick:l[0]||(l[0]=a=>G({leagueId:"0"}))},m(e.$t("sport.all")),3),(n(!0),g(p,null,r(z.value,((a,e)=>(n(),g("li",{key:e,class:f(E.value===a.leagueId?"active":""),onClick:e=>G(a)},[d("div",q,[I(d("img",L,null,512),[[c,a.leagueIcon]])])],10,x)))),128))]),d("div",N,[(n(!0),g(p,null,r(A.value,((a,e)=>(n(),g("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId,type:a.gameType}})})(a)},[I(d("img",$,null,512),[[c,a.leagueIcon]]),d("div",_,[d("div",B,m(a.leagueName),1)])],8,S)))),128))])])}}});D.__scopeId="data-v-7bd4258d";export{D as default};
