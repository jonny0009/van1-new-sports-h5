import{s as a,_ as e,V as s,b as l,j as t,a as n,d as o,r as i,E as u,o as c,R as v,P as m,q as d,S as r,u as p,x as g,a2 as y,c as h,Y as f}from"./vue.93da156d.js";import{u as b,m as w}from"./index.1f660edf.js";import{u as x,a as j}from"./index.df4e3123.js";import{s as T,aq as k}from"./index.72b31c04.js";import"./getScore.eba49103.js";const H={class:"team"},I={class:"team-header"},L={class:"league"},S={class:"date"},B={class:"team-box"},M={class:"team-player host"},R={class:"img-num"},D={type:2,alt:""},_=["innerHTML"],q={key:0,class:"icons"},C={class:"team-player away"},E={class:"img-num"},P={type:2,alt:""},F={class:"bettings"},G={key:1,class:"no-data"};var N=a({setup(a){const N=e(),V=s(),Y=b(),$=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:z}=x();t((()=>{W(),J()})),n((()=>{K()}));let A=null;const J=()=>{K(),A=setInterval((()=>{W(!1)}),5e3)},K=()=>{A&&(clearInterval(A),A=null)},O=o({}),Q=o(!1),U=o([]),W=async(a=!0)=>{Q.value=a;const e=N.params.id,s=await w({gidm:e});O.value=s.data||{},200==s.code&&(U.value=await z(O.value),Q.value=!1)},X=()=>{const{showtype:a,gidm:e}=O.value;"RB"==a&&V.push(`/broadcast/${e}`)};return(a,e)=>{const s=i("SvgIcon"),l=i("Loading"),t=i("EmptyIcon"),n=u("img");return c(),v("div",{class:f(["bet-container",{"has-bet":p($)}])},[m("div",H,[m("div",I,[m("div",L,[d(s,{name:"live-football"}),m("span",null,r(O.value.leagueName),1)]),m("div",S,r(p(k)(O.value.gameDate,"MM-DD HH:mm")),1)]),m("div",B,[m("div",M,[m("div",R,[g(m("img",D,null,512),[[n,O.value.homeLogo]]),m("span",null,r(p(Y).getScore(O.value,"H")),1)]),m("strong",null,r(O.value.homeTeam),1)]),m("div",{class:"team-score",onClick:X},[m("span",{class:"default",innerHTML:p(Y).showRBTime(O.value)},null,8,_),"RB"==O.value.showtype?(c(),v("span",q,[d(s,{name:"live-play"})])):y("",!0)]),m("div",C,[m("div",E,[m("span",null,r(p(Y).getScore(O.value,"C")),1),g(m("img",P,null,512),[[n,O.value.awayLogo]])]),m("strong",null,r(O.value.awayTeam),1)])])]),m("div",F,[Q.value?(c(),h(l,{key:0})):0===U.value.length?(c(),v("div",G,[d(t)])):(c(),h(j,{key:2,"data-list":U.value,"match-info":O.value},null,8,["data-list","match-info"]))])],2)}}});N.__scopeId="data-v-47ba15cc";export{N as default};
