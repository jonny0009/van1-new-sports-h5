import{_ as a}from"./index.b9abae27.js";import{a as e,b as l,c as s}from"./index.30527d32.js";import{r as i}from"./index.942cfb62.js";import{d as t,j as c,a2 as u,X as n,o,a as g,b as d,u as m,F as v,k as p,g as r,n as y,l as f,t as k}from"./vue.d4af3fe6.js";const I={class:"champion-page"},w={class:"title"},C=["src"],T=d("span",{class:"st"}," 选择联赛 ",-1),b={class:"game-type-wrap"},x=["onClick"],h={class:"league-tab-wrap"},j=["onClick"],q={class:"img-wrap"},F={width:"23",height:"23",fit:"contain",class:"item-img"},N={class:"league-list"},S=["onClick"],X={fit:"contain",class:"my-image icon"},_={class:"content"},z={class:"top"},A={class:"sport"},B={class:"name"};var D=t({setup(t){const D=c("0"),E=c("0"),G=c(),H=c(),J=c(),K=a=>{E.value=a.leagueId,"0"===a.leagueId?J.value=H.value:J.value=H.value.filter((e=>e.leagueId===a.leagueId)),console.log(a.leagueId)};u((async()=>{await L(),await M()}));const L=async()=>{const a=await e()||{};200===a.code&&a.data&&(G.value=a.data,D.value=a.data[0].gameType,console.log(D.value))},M=async()=>{const a=await l({gameType:D.value})||{};200===a.code&&a.data&&(H.value=a.data,J.value=a.data)};return(e,l)=>{const t=n("img"),c=n("game");return o(),g("div",I,[d("div",w,[d("img",{fit:"contain",class:"item-img",src:m(s)},null,8,C),T]),d("ul",b,[(o(!0),g(v,null,p(G.value,((e,l)=>(o(),g("li",{key:l,onClick:a=>(async a=>{console.log(a.gameType),D.value=a.gameType,E.value="0",M()})(e)},[r(a,{text:e.gameType,active:D.value===e.gameType},null,8,["text","active"])],8,x)))),128))]),d("ul",h,[d("li",{class:y("0"===E.value?"active":""),onClick:l[0]||(l[0]=a=>K({leagueId:"0"}))},"全部",2),(o(!0),g(v,null,p(H.value,((a,e)=>(o(),g("li",{key:e,class:y(E.value===a.leagueId?"active":""),onClick:e=>K(a)},[d("div",q,[f(d("img",F,null,512),[[t,a.leagueIcon]])])],10,j)))),128))]),d("div",N,[(o(!0),g(v,null,p(J.value,((a,e)=>(o(),g("div",{key:e,class:"up-league-item",onClick:e=>(a=>{i.push({name:"Sport",query:{leagueId:a.leagueId}})})(a)},[f(d("img",X,null,512),[[t,a.leagueIcon]]),d("div",_,[d("div",z,[f(d("span",A,null,512),[[c,a.gameType]])]),d("div",B,k(a.leagueName),1)])],8,S)))),128))])])}}});export{D as default};
