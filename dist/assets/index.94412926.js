import{a,b as e,c as l}from"./index.56603cb2.js";import{j as s}from"./index.fcc2bdfc.js";import{s as t,d as c,M as i,r as u,E as n,o,O as d,Q as v,u as g,W as m,F as p,_ as r,q as y,$ as I,x as f}from"./vue.778d92ec.js";const k={class:"champion-page"},w={class:"title"},h=["src"],C={class:"st"},x={class:"game-type-wrap"},T=["onClick"],b={class:"league-tab-wrap"},j={class:"all"},$=["onClick"],_={class:"img-wrap"},q={type:"6",width:"23",height:"23",fit:"contain",class:"item-img"},S={class:"league-list"},B=["onClick"],E={type:"6",fit:"contain",class:"my-image icon"},F={class:"content"},L={class:"name"};var M=t({setup(t){const M=c("0"),N=c("0"),O=c(),Q=c(),W=c(),z=a=>{N.value=a.leagueId,"0"===a.leagueId?W.value=Q.value:W.value=Q.value.filter((e=>e.leagueId===a.leagueId))};i((async()=>{await A(),await D()}));const A=async()=>{const e=await a()||{};200===e.code&&e.data&&(O.value=e.data,M.value=e.data[0].gameType)},D=async()=>{const a=await e({gameType:M.value})||{};200===a.code&&a.data&&(Q.value=a.data,W.value=a.data)};return(a,e)=>{const t=u("SportsButton"),c=n("img");return o(),d("div",k,[v("div",w,[v("img",{fit:"contain",class:"item-img",src:g(l)},null,8,h),v("span",C,m(a.$t("sport.chooseLeague")),1)]),v("ul",x,[(o(!0),d(p,null,r(O.value,((a,e)=>(o(),d("li",{key:e,onClick:e=>(async a=>{M.value=a.gameType,N.value="0",D()})(a)},[y(t,{text:a.gameType,active:M.value===a.gameType},null,8,["text","active"])],8,T)))),128))]),v("ul",b,[v("li",{class:I("0"===N.value?"active":""),onClick:e[0]||(e[0]=a=>z({leagueId:"0"}))},[v("div",j,m(a.$t("sport.all")),1)],2),(o(!0),d(p,null,r(Q.value,((a,e)=>(o(),d("li",{key:e,class:I(N.value===a.leagueId?"active":""),onClick:e=>z(a)},[v("div",_,[f(v("img",q,null,512),[[c,a.leagueIcon]])])],10,$)))),128))]),v("div",S,[(o(!0),d(p,null,r(W.value,((a,e)=>(o(),d("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId,ischampion:"yes"},params:{type:a.gameType}})})(a)},[f(v("img",E,null,512),[[c,a.leagueIcon]]),v("div",F,[v("div",L,m(a.leagueName),1)])],8,B)))),128))])])}}});M.__scopeId="data-v-6d06ecec";export{M as default};
