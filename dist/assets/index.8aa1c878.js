import{a,b as e,c as s}from"./index.1f83a12f.js";import{m as l}from"./index.0bcbbe84.js";import{s as t,d as c,M as n,r as u,E as i,o,S as v,P as d,u as r,V as m,q as g,O as p,F as y,Z as h,c as k,_ as b,x as f,a0 as w}from"./vue.6c3ce548.js";const x={class:"champion-page"},I={class:"title"},C=["src"],T={class:"st"},F={class:"tabs-cut"},_={class:"league-tab-wrap"},j=["onClick"],S={class:"img-wrap"},q={type:"1",fit:"contain",class:"item-img"},L={class:"league-list"},N=["onClick"],$={type:"1",fit:"contain",class:"my-image icon"},B={class:"content"},E={class:"name"},M={class:"name-1"};var O=t({setup(t){const O=c("0"),P=c("0"),U=c(),V=c(),Z=c(),z=c({}),A=c(!0);c(!1);const D=async()=>{P.value="0",J()},G=a=>{"0"===a.leagueId?(P.value="0",Z.value=V.value):(P.value=a[0].countryFlag,Z.value=a)};n((async()=>{await H(),await J()}));const H=async()=>{const e=await a()||{};200===e.code&&e.data&&(U.value=e.data,O.value=e.data[0].gameType)},J=async()=>{A.value=!0;const a=await e({gameType:O.value})||{};200===a.code&&a.data&&(V.value=a.data,Z.value=a.data,z.value=a.data.reduce(((a,e)=>{let s=e.countryId;return a[s]||(a[s]=[]),a[s].push(e),a}),{}),A.value=!1)};return(a,e)=>{const t=u("SportsButton"),c=u("van-tab"),n=u("van-tabs"),V=u("Loading"),H=i("img");return o(),v("div",x,[d("div",I,[d("img",{fit:"contain",class:"item-img",src:r(s)},null,8,C),d("span",T,m(a.$t("sport.chooseLeague")),1)]),d("div",F,[g(n,{duration:.2,active:O.value,"onUpdate:active":e[0]||(e[0]=a=>O.value=a),shrink:"","line-height":"0",onChange:D,"swipe-threshold":3},{default:p((()=>[(o(!0),v(y,null,h(U.value,((a,e)=>(o(),k(c,{key:e,name:a.gameType},{title:p((()=>[g(t,{class:b(["tabs-cut-1",a.text]),text:a.gameType,active:O.value===a.gameType},null,8,["text","active","class"])])),_:2},1032,["name"])))),128))])),_:1},8,["duration","active"])]),A.value?w("",!0):(o(),v(y,{key:0},[d("ul",_,[d("div",{class:b(["all","0"===P.value?"all-1":""]),onClick:e[1]||(e[1]=a=>G({leagueId:"0"}))},m(a.$t("sport.all")),3),(o(!0),v(y,null,h(z.value,((a,e)=>(o(),v("li",{key:e,class:b(P.value===a[0].countryFlag?"active":""),onClick:e=>G(a)},[d("div",S,[f(d("img",q,null,512),[[H,a[0].countryFlag]])])],10,j)))),128))]),d("div",L,[(o(!0),v(y,null,h(Z.value,((a,e)=>(o(),v("div",{key:e,class:"up-league-item",onClick:e=>(a=>{l.push({name:"Sport",query:{leagueId:a.leagueId,ischampion:"yes"},params:{type:a.gameType}})})(a)},[f(d("img",$,null,512),[[H,a.countryFlag]]),d("div",B,[d("div",E,[d("div",M,m(a.countryName||"International"),1),d("div",null,m(a.leagueName),1)])])],8,N)))),128))])],64)),A.value?(o(),k(V,{key:1})):w("",!0)])}}});O.__scopeId="data-v-51cb6ee8";export{O as default};
