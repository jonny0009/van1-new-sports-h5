import{a,b as e,c as s}from"./index.31ff394f.js";import{r as t}from"./index.a6ff837a.js";import{s as l,d as n,M as u,r as c,E as i,o,R as v,P as d,u as r,W as m,q as g,O as p,F as y,S as f,c as h,_ as k,x as I,$ as b}from"./vue.c62eea93.js";const w={class:"champion-page"},x={class:"title"},C=["src"],T={class:"st"},F={class:"tabs-cut"},_={class:"mt10"},j={class:"league-tab-wrap"},S=["onClick"],$={class:"img-wrap"},q={type:"1",fit:"contain",class:"item-img"},L={class:"league-list"},N=["onClick"],B={type:"1",fit:"contain",class:"my-image icon"},E={class:"content"},M={class:"name"},O={class:"name-1"};var P=l({setup(l){const P=n("0"),R=n("0"),U=n(),W=n(),z=n(),A=n({}),D=n(!0);n(!1);const G=async()=>{R.value="0",K()},H=a=>{"0"===a.leagueId?(R.value="0",z.value=W.value):(R.value=a[0].countryFlag,z.value=a)};u((async()=>{await J(),await K()}));const J=async()=>{const e=await a()||{};200===e.code&&e.data&&(U.value=e.data,P.value=e.data[0].gameType)},K=async()=>{D.value=!0;const a=await e({gameType:P.value})||{};200===a.code&&a.data&&(W.value=a.data,z.value=a.data,A.value=a.data.reduce(((a,e)=>{let s=e.countryId;return a[s]||(a[s]=[]),a[s].push(e),a}),{}),D.value=!1)};return(a,e)=>{const l=c("SportsButton"),n=c("Loading"),u=c("van-tab"),W=c("van-tabs"),J=i("img");return o(),v("div",w,[d("div",x,[d("img",{fit:"contain",class:"item-img",src:r(s)},null,8,C),d("span",T,m(a.$t("sport.chooseLeague")),1)]),d("div",F,[g(W,{duration:.2,active:P.value,"onUpdate:active":e[1]||(e[1]=a=>P.value=a),shrink:"","line-height":"0",onChange:G,"swipe-threshold":3,animated:""},{default:p((()=>[(o(!0),v(y,null,f(U.value,((s,c)=>(o(),h(u,{key:c,name:s.gameType},{title:p((()=>[g(l,{class:k(["tabs-cut-1",s.text]),text:s.gameType,active:P.value===s.gameType},null,8,["text","active","class"])])),default:p((()=>[d("div",_,[D.value?b("",!0):(o(),v(y,{key:0},[d("ul",j,[d("div",{class:k(["all","0"===R.value?"all-1":""]),onClick:e[0]||(e[0]=a=>H({leagueId:"0"}))},m(a.$t("sport.all")),3),(o(!0),v(y,null,f(A.value,((a,e)=>(o(),v("li",{key:e,class:k(R.value===a[0].countryFlag?"active":""),onClick:e=>H(a)},[d("div",$,[I(d("img",q,null,512),[[J,a[0].countryFlag]])])],10,S)))),128))]),d("div",L,[(o(!0),v(y,null,f(z.value,((a,e)=>(o(),v("div",{key:e,class:"up-league-item",onClick:e=>(a=>{t.push({name:"Sport",query:{leagueId:a.leagueId,countryId:a.countryId,ischampion:"yes"},params:{type:a.gameType}})})(a)},[I(d("img",B,null,512),[[J,a.countryFlag]]),d("div",E,[d("div",M,[d("div",O,m(a.countryName||"International"),1),d("div",null,m(a.leagueName),1)])])],8,N)))),128))])],64)),D.value?(o(),h(n,{key:1})):b("",!0)])])),_:2},1032,["name"])))),128))])),_:1},8,["duration","active"])])])}}});P.__scopeId="data-v-20ebfa68";export{P as default};
