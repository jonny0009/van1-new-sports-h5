import{s as a,a5 as e,R as s,b as l,j as t,a as n,d as o,r as u,E as i,o as c,S as m,P as v,q as d,V as r,u as p,x as g,a0 as y,c as h,_ as f}from"./vue.c4df921c.js";import{m as b}from"./index.175c1786.js";import{u as w}from"./useMatch.02d7d5ba.js";import{u as x,_ as j}from"./index.c3542b04.js";import{s as T,N as k}from"./index.6a9de977.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},R={class:"img-num"},S={type:4,alt:""},_=["innerHTML"],C={key:0,class:"icons"},E={class:"team-player away"},N={class:"img-num"},P={type:5,alt:""},$={class:"bettings"};var q=a({setup(a){const q=e(),A=s(),F=w(),G=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:V}=x();t((()=>{W(),J()})),n((()=>{K()}));let z=null;const J=()=>{K(),z=setInterval((()=>{W(!1)}),5e3)},K=()=>{z&&(clearInterval(z),z=null)},O=o({}),Q=o(!1),U=o([]),W=async(a=!0)=>{Q.value=a;const e=q.params.id,s=await b({gidm:e});O.value=s.data||{},200==s.code&&(U.value=await V(O.value),Q.value=!1)},X=()=>{const{showtype:a,gidm:e}=O.value;"RB"==a&&A.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return c(),m("div",{class:f(["bet-container",{"has-bet":p(G)}])},[v("div",H,[v("div",L,[v("div",M,[d(s,{name:"live-football"}),v("span",null,r(O.value.leagueName),1)]),v("div",B,r(p(k)(O.value.gameDate,"MM-DD HH:mm")),1)]),v("div",D,[v("div",I,[v("div",R,[g(v("img",S,null,512),[[n,O.value.homeLogo]]),v("span",null,r(p(F).getScore(O.value,"H")),1)]),v("strong",null,r(O.value.homeTeam),1)]),v("div",{class:"team-score",onClick:X},[v("span",{class:"default",innerHTML:p(F).showRBTime(O.value)},null,8,_),"RB"==O.value.showtype?(c(),m("span",C,[d(s,{name:"live-play"})])):y("",!0)]),v("div",E,[v("div",N,[v("span",null,r(p(F).getScore(O.value,"C")),1),g(v("img",P,null,512),[[n,O.value.awayLogo]])]),v("strong",null,r(O.value.awayTeam),1)])])]),v("div",$,[Q.value?(c(),h(l,{key:0})):0===U.value.length?(c(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(c(),h(j,{key:2,"data-list":U.value,"match-info":O.value},null,8,["data-list","match-info"]))])],2)}}});q.__scopeId="data-v-ba1764cc";export{q as default};
