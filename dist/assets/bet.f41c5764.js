import{s as a,a4 as e,W as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,R as v,P as c,q as d,U as r,u as p,x as g,a1 as y,c as h,_ as f}from"./vue.469c5994.js";import{m as w}from"./index.86763896.js";import{u as x}from"./useMatch.4b71183f.js";import{u as b,_ as j}from"./index.cffd1491.js";import{s as T,K as k}from"./index.d6804601.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},R={class:"img-num"},_={type:4,alt:""},C=["innerHTML"],S={key:0,class:"icons"},E={class:"team-player away"},P={class:"img-num"},$={type:5,alt:""},q={class:"bettings"};var A=a({setup(a){const A=e(),F=s(),G=x(),K=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:N}=b();t((()=>{V(),W()})),n((()=>{z()}));let U=null;const W=()=>{z(),U=setInterval((()=>{V(!1)}),5e3)},z=()=>{U&&(clearInterval(U),U=null)},J=o({}),O=o(!1),Q=o([]),V=async(a=!0)=>{O.value=a;const e=A.params.id,s=await w({gidm:e});J.value=s.data||{},200==s.code&&(Q.value=await N(J.value),O.value=!1)},X=()=>{const{showtype:a,gidm:e}=J.value;"RB"==a&&F.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),v("div",{class:f(["bet-container",{"has-bet":p(K)}])},[c("div",H,[c("div",L,[c("div",M,[d(s,{name:"live-football"}),c("span",null,r(J.value.leagueName),1)]),c("div",B,r(p(k)(J.value.gameDate,"MM-DD HH:mm")),1)]),c("div",D,[c("div",I,[c("div",R,[g(c("img",_,null,512),[[n,J.value.homeLogo]]),c("span",null,r(p(G).getScore(J.value,"H")),1)]),c("strong",null,r(J.value.homeTeam),1)]),c("div",{class:"team-score",onClick:X},[c("span",{class:"default",innerHTML:p(G).showRBTime(J.value)},null,8,C),"RB"==J.value.showtype?(m(),v("span",S,[d(s,{name:"live-play"})])):y("",!0)]),c("div",E,[c("div",P,[c("span",null,r(p(G).getScore(J.value,"C")),1),g(c("img",$,null,512),[[n,J.value.awayLogo]])]),c("strong",null,r(J.value.awayTeam),1)])])]),c("div",q,[O.value?(m(),h(l,{key:0})):0===Q.value.length?(m(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),h(j,{key:2,"data-list":Q.value,"match-info":J.value},null,8,["data-list","match-info"]))])],2)}}});A.__scopeId="data-v-4ec24b19";export{A as default};
