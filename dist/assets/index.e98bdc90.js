import{a,b as e,c as s}from"./index.61d8544f.js";import{r as t}from"./index.9aedd14a.js";import{s as l,d as n,M as u,r as c,E as i,o,S as d,P as v,u as r,V as m,q as g,O as p,F as y,_ as f,c as h,Z as k,x as I,$ as b}from"./vue.7833d4f2.js";const w={class:"champion-page"},x={class:"title"},C=["src"],T={class:"st"},F={class:"tabs-cut"},_={class:"mt10"},j={class:"league-tab-wrap"},S=["onClick"],$={class:"img-wrap"},q={type:"1",fit:"contain",class:"item-img"},L={class:"league-list"},N=["onClick"],B={type:"1",fit:"contain",class:"my-image icon"},E={class:"content"},M={class:"name"},O={class:"name-1"};var P=l({setup(l){const P=n("0"),U=n("0"),V=n(),Z=n(),z=n(),A=n({}),D=n(!0);n(!1);const G=async()=>{U.value="0",K()},H=a=>{"0"===a.leagueId?(U.value="0",z.value=Z.value):(U.value=a[0].countryFlag,z.value=a)};u((async()=>{await J(),await K()}));const J=async()=>{const e=await a()||{};200===e.code&&e.data&&(V.value=e.data,P.value=e.data[0].gameType)},K=async()=>{D.value=!0;const a=await e({gameType:P.value})||{};200===a.code&&a.data&&(Z.value=a.data,z.value=a.data,A.value=a.data.reduce(((a,e)=>{let s=e.countryId;return a[s]||(a[s]=[]),a[s].push(e),a}),{}),D.value=!1)};return(a,e)=>{const l=c("SportsButton"),n=c("Loading"),u=c("van-tab"),Z=c("van-tabs"),J=i("img");return o(),d("div",w,[v("div",x,[v("img",{fit:"contain",class:"item-img",src:r(s)},null,8,C),v("span",T,m(a.$t("sport.chooseLeague")),1)]),v("div",F,[g(Z,{duration:.2,active:P.value,"onUpdate:active":e[1]||(e[1]=a=>P.value=a),shrink:"","line-height":"0",onChange:G,"swipe-threshold":3,animated:""},{default:p((()=>[(o(!0),d(y,null,f(V.value,((s,c)=>(o(),h(u,{key:c,name:s.gameType},{title:p((()=>[g(l,{class:k(["tabs-cut-1",s.text]),text:s.gameType,active:P.value===s.gameType},null,8,["text","active","class"])])),default:p((()=>[v("div",_,[D.value?b("",!0):(o(),d(y,{key:0},[v("ul",j,[v("div",{class:k(["all","0"===U.value?"all-1":""]),onClick:e[0]||(e[0]=a=>H({leagueId:"0"}))},m(a.$t("sport.all")),3),(o(!0),d(y,null,f(A.value,((a,e)=>(o(),d("li",{key:e,class:k(U.value===a[0].countryFlag?"active":""),onClick:e=>H(a)},[v("div",$,[I(v("img",q,null,512),[[J,a[0].countryFlag]])])],10,S)))),128))]),v("div",L,[(o(!0),d(y,null,f(z.value,((a,e)=>(o(),d("div",{key:e,class:"up-league-item",onClick:e=>(a=>{t.push({name:"Sport",query:{leagueId:a.leagueId,countryId:a.countryId,ischampion:"yes"},params:{type:a.gameType}})})(a)},[I(v("img",B,null,512),[[J,a.countryFlag]]),v("div",E,[v("div",M,[v("div",O,m(a.countryName||"International"),1),v("div",null,m(a.leagueName),1)])])],8,N)))),128))])],64)),D.value?(o(),h(n,{key:1})):b("",!0)])])),_:2},1032,["name"])))),128))])),_:1},8,["duration","active"])])])}}});P.__scopeId="data-v-20ebfa68";export{P as default};
