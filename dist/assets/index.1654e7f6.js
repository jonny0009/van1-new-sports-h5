import{a,b as e,c as l}from"./index.6830c1a1.js";import{k as s}from"./index.38cb3a26.js";import{s as t,d as c,M as u,r as n,E as i,o,S as v,P as r,u as d,V as m,F as p,Z as g,q as y,_ as k,x as f,a0 as w,c as C}from"./vue.9399d1f0.js";const I={class:"champion-page"},x={class:"title"},T=["src"],h={class:"st"},F={class:"game-type-wrap"},b=["onClick"],j={class:"league-tab-wrap"},S=["onClick"],_={class:"img-wrap"},q={type:"1",fit:"contain",class:"item-img"},L={class:"league-list"},N=["onClick"],$={type:"1",fit:"contain",class:"my-image icon"},B={class:"content"},E={class:"name"},M={class:"name-1"};var P=t({setup(t){const P=c("0"),V=c("0"),Z=c(),z=c(),A=c(),D=c({}),G=c(!0);c(!1);const H=a=>{"0"===a.leagueId?(V.value="0",A.value=z.value):(V.value=a[0].countryFlag,A.value=a)};u((async()=>{await J(),await K()}));const J=async()=>{const e=await a()||{};200===e.code&&e.data&&(Z.value=e.data,P.value=e.data[0].gameType)},K=async()=>{G.value=!0;const a=await e({gameType:P.value})||{};200===a.code&&a.data&&(z.value=a.data,A.value=a.data,D.value=a.data.reduce(((a,e)=>{let l=e.countryId;return a[l]||(a[l]=[]),a[l].push(e),a}),{}),G.value=!1)};return(a,e)=>{const t=n("SportsButton"),c=n("Loading"),u=i("img");return o(),v("div",I,[r("div",x,[r("img",{fit:"contain",class:"item-img",src:d(l)},null,8,T),r("span",h,m(a.$t("sport.chooseLeague")),1)]),G.value?w("",!0):(o(),v(p,{key:0},[r("ul",F,[(o(!0),v(p,null,g(Z.value,((a,e)=>(o(),v("li",{key:e,onClick:e=>(async a=>{P.value=a.gameType,V.value="0",K()})(a)},[y(t,{text:a.gameType,active:P.value===a.gameType},null,8,["text","active"])],8,b)))),128))]),r("ul",j,[r("div",{class:k(["all","0"===V.value?"all-1":""]),onClick:e[0]||(e[0]=a=>H({leagueId:"0"}))},m(a.$t("sport.all")),3),(o(!0),v(p,null,g(D.value,((a,e)=>(o(),v("li",{key:e,class:k(V.value===a[0].countryFlag?"active":""),onClick:e=>H(a)},[r("div",_,[f(r("img",q,null,512),[[u,a[0].countryFlag]])])],10,S)))),128))]),r("div",L,[(o(!0),v(p,null,g(A.value,((a,e)=>(o(),v("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId,ischampion:"yes"},params:{type:a.gameType}})})(a)},[f(r("img",$,null,512),[[u,a.countryFlag]]),r("div",B,[r("div",E,[r("div",M,m(a.countryName||"International"),1),r("div",null,m(a.leagueName),1)])])],8,N)))),128))])],64)),G.value?(o(),C(c,{key:1})):w("",!0)])}}});P.__scopeId="data-v-0fc3e490";export{P as default};
