import{s as a,a2 as e,U as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,R as v,P as c,q as d,W as r,u as p,x as g,$ as y,c as h,_ as f}from"./vue.c62eea93.js";import{m as w}from"./index.892d9221.js";import{u as x}from"./useMatch.3ac2a4df.js";import{u as b,_ as j}from"./index.d83399ed.js";import{s as T,G as k}from"./index.db9ae26a.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},R={class:"img-num"},_={type:4,alt:""},C=["innerHTML"],S={key:0,class:"icons"},$={class:"team-player away"},E={class:"img-num"},G={type:5,alt:""},P={class:"bettings"};var q=a({setup(a){const q=e(),A=s(),F=x(),N=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:U}=b();t((()=>{V(),z()})),n((()=>{J()}));let W=null;const z=()=>{J(),W=setInterval((()=>{V(!1)}),5e3)},J=()=>{W&&(clearInterval(W),W=null)},K=o({}),O=o(!1),Q=o([]),V=async(a=!0)=>{O.value=a;const e=q.params.id,s=await w({gidm:e});K.value=s.data||{},200===s.code&&(Q.value=await U(K.value),O.value=!1)},X=()=>{const{showtype:a,gidm:e}=K.value;"RB"===a&&A.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),v("div",{class:f(["bet-container",{"has-bet":p(N)}])},[c("div",H,[c("div",L,[c("div",M,[d(s,{name:"live-football"}),c("span",null,r(K.value.leagueName),1)]),c("div",B,r(p(k)(K.value.gameDate,"MM-DD HH:mm")),1)]),c("div",D,[c("div",I,[c("div",R,[g(c("img",_,null,512),[[n,K.value.homeLogo]]),c("span",null,r(p(F).getScore(K.value,"H")),1)]),c("strong",null,r(K.value.homeTeam),1)]),c("div",{class:"team-score",onClick:X},[c("span",{class:"default",innerHTML:p(F).showRBTime(K.value)},null,8,C),"RB"==K.value.showtype?(m(),v("span",S,[d(s,{name:"live-play"})])):y("",!0)]),c("div",$,[c("div",E,[c("span",null,r(p(F).getScore(K.value,"C")),1),g(c("img",G,null,512),[[n,K.value.awayLogo]])]),c("strong",null,r(K.value.awayTeam),1)])])]),c("div",P,[O.value?(m(),h(l,{key:0})):0===Q.value.length?(m(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),h(j,{key:2,"data-list":Q.value,"match-info":K.value},null,8,["data-list","match-info"]))])],2)}}});q.__scopeId="data-v-4537c4f6";export{q as default};
