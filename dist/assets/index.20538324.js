import{a,b as e,c as s}from"./index.84748bcb.js";import{w as t}from"./index.faa5a252.js";import{s as l,d as c,M as n,r as u,E as i,o,S as v,P as d,u as r,V as m,q as g,O as p,F as y,_ as f,c as h,Z as k,x as b,$ as I}from"./vue.144c3097.js";const w={class:"champion-page"},x={class:"title"},C=["src"],T={class:"st"},F={class:"tabs-cut"},_={class:"mt10"},j={class:"league-tab-wrap"},S=["onClick"],$={class:"img-wrap"},q={type:"1",fit:"contain",class:"item-img"},L={class:"league-list"},N=["onClick"],B={type:"1",fit:"contain",class:"my-image icon"},E={class:"content"},M={class:"name"},O={class:"name-1"};var P=l({setup(l){const P=c("0"),U=c("0"),V=c(),Z=c(),z=c(),A=c({}),D=c(!0);c(!1);const G=async()=>{U.value="0",K()},H=a=>{"0"===a.leagueId?(U.value="0",z.value=Z.value):(U.value=a[0].countryFlag,z.value=a)};n((async()=>{await J(),await K()}));const J=async()=>{const e=await a()||{};200===e.code&&e.data&&(V.value=e.data,P.value=e.data[0].gameType)},K=async()=>{D.value=!0;const a=await e({gameType:P.value})||{};200===a.code&&a.data&&(Z.value=a.data,z.value=a.data,A.value=a.data.reduce(((a,e)=>{let s=e.countryId;return a[s]||(a[s]=[]),a[s].push(e),a}),{}),D.value=!1)};return(a,e)=>{const l=u("SportsButton"),c=u("Loading"),n=u("van-tab"),Z=u("van-tabs"),J=i("img");return o(),v("div",w,[d("div",x,[d("img",{fit:"contain",class:"item-img",src:r(s)},null,8,C),d("span",T,m(a.$t("sport.chooseLeague")),1)]),d("div",F,[g(Z,{duration:.2,active:P.value,"onUpdate:active":e[1]||(e[1]=a=>P.value=a),shrink:"","line-height":"0",onChange:G,"swipe-threshold":3,animated:""},{default:p((()=>[(o(!0),v(y,null,f(V.value,((s,u)=>(o(),h(n,{key:u,name:s.gameType},{title:p((()=>[g(l,{class:k(["tabs-cut-1",s.text]),text:s.gameType,active:P.value===s.gameType},null,8,["text","active","class"])])),default:p((()=>[d("div",_,[D.value?I("",!0):(o(),v(y,{key:0},[d("ul",j,[d("div",{class:k(["all","0"===U.value?"all-1":""]),onClick:e[0]||(e[0]=a=>H({leagueId:"0"}))},m(a.$t("sport.all")),3),(o(!0),v(y,null,f(A.value,((a,e)=>(o(),v("li",{key:e,class:k(U.value===a[0].countryFlag?"active":""),onClick:e=>H(a)},[d("div",$,[b(d("img",q,null,512),[[J,a[0].countryFlag]])])],10,S)))),128))]),d("div",L,[(o(!0),v(y,null,f(z.value,((a,e)=>(o(),v("div",{key:e,class:"up-league-item",onClick:e=>(a=>{t.push({name:"Sport",query:{leagueId:a.leagueId,countryId:a.countryId,ischampion:"yes"},params:{type:a.gameType}})})(a)},[b(d("img",B,null,512),[[J,a.countryFlag]]),d("div",E,[d("div",M,[d("div",O,m(a.countryName||"International"),1),d("div",null,m(a.leagueName),1)])])],8,N)))),128))])],64)),D.value?(o(),h(c,{key:1})):I("",!0)])])),_:2},1032,["name"])))),128))])),_:1},8,["duration","active"])])])}}});P.__scopeId="data-v-20ebfa68";export{P as default};
