import{a,b as e,c as l}from"./index.de7bc1e5.js";import{j as s}from"./index.a83793bd.js";import{s as t,d as u,M as c,r as n,E as i,o,S as v,q as d,O as r,P as m,u as p,V as g,F as y,Z as k,_ as f,x as w,a0 as h,c as C}from"./vue.7b2d67a6.js";const I={class:"champion-page"},x={class:"title"},T=["src"],b={class:"st"},F={class:"game-type-wrap"},j=["onClick"],V={class:"league-tab-wrap"},_=["onClick"],S={class:"img-wrap"},q={type:"1",fit:"contain",class:"item-img"},L={class:"league-list"},N=["onClick"],$={type:"1",fit:"contain",class:"my-image icon"},B={class:"content"},E={class:"name"},M={class:"name-1"};var O=t({setup(t){const O=u("0"),P=u("0"),R=u(),U=u(),Z=u(),z=u({}),A=u(!0),D=u(!1),G=async()=>{D.value=!1,A.value=!0,await J(),await K()},H=a=>{"0"===a.leagueId?(P.value="0",Z.value=U.value):(P.value=a[0].countryFlag,Z.value=a)};c((async()=>{await J(),await K()}));const J=async()=>{const e=await a()||{};200===e.code&&e.data&&(R.value=e.data,O.value=e.data[0].gameType)},K=async()=>{A.value=!0;const a=await e({gameType:O.value})||{};200===a.code&&a.data&&(U.value=a.data,Z.value=a.data,z.value=a.data.reduce(((a,e)=>{let l=e.countryId;return a[l]||(a[l]=[]),a[l].push(e),a}),{}),A.value=!1)};return(a,e)=>{const t=n("SportsButton"),u=n("Loading"),c=n("van-pull-refresh"),U=i("img");return o(),v("div",I,[d(c,{modelValue:D.value,"onUpdate:modelValue":e[1]||(e[1]=a=>D.value=a),onRefresh:G},{default:r((()=>[m("div",x,[m("img",{fit:"contain",class:"item-img",src:p(l)},null,8,T),m("span",b,g(a.$t("sport.chooseLeague")),1)]),A.value?h("",!0):(o(),v(y,{key:0},[m("ul",F,[(o(!0),v(y,null,k(R.value,((a,e)=>(o(),v("li",{key:e,onClick:e=>(async a=>{O.value=a.gameType,P.value="0",K()})(a)},[d(t,{text:a.gameType,active:O.value===a.gameType},null,8,["text","active"])],8,j)))),128))]),m("ul",V,[m("div",{class:f(["all","0"===P.value?"all-1":""]),onClick:e[0]||(e[0]=a=>H({leagueId:"0"}))},g(a.$t("sport.all")),3),(o(!0),v(y,null,k(z.value,((a,e)=>(o(),v("li",{key:e,class:f(P.value===a[0].countryFlag?"active":""),onClick:e=>H(a)},[m("div",S,[w(m("img",q,null,512),[[U,a[0].countryFlag]])])],10,_)))),128))]),m("div",L,[(o(!0),v(y,null,k(Z.value,((a,e)=>(o(),v("div",{key:e,class:"up-league-item",onClick:e=>(a=>{s.push({name:"Sport",query:{leagueId:a.leagueId,ischampion:"yes"},params:{type:a.gameType}})})(a)},[w(m("img",$,null,512),[[U,a.countryFlag]]),m("div",B,[m("div",E,[m("div",M,g(a.countryName||"International"),1),m("div",null,g(a.leagueName),1)])])],8,N)))),128))])],64)),A.value?(o(),C(u,{key:1})):h("",!0)])),_:1},8,["modelValue"])])}}});O.__scopeId="data-v-7f92381c";export{O as default};
