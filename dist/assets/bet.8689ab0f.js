import{s as a,a4 as e,W as s,b as l,j as t,a as n,d as o,r as u,E as i,o as m,R as v,P as c,q as r,U as d,u as p,x as g,a1 as y,c as f,_ as h}from"./vue.ffab6494.js";import{m as b}from"./index.2e805e7e.js";import{u as w}from"./useMatch.e7af30e3.js";import{u as x,_ as j}from"./index.17ca9fcf.js";import{s as T,N as k}from"./index.43d748b0.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},R={class:"img-num"},_={type:4,alt:""},C=["innerHTML"],S={key:0,class:"icons"},E={class:"team-player away"},N={class:"img-num"},P={type:5,alt:""},$={class:"bettings"};var q=a({setup(a){const q=e(),A=s(),F=w(),G=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:U}=x();t((()=>{V(),z()})),n((()=>{J()}));let W=null;const z=()=>{J(),W=setInterval((()=>{V(!1)}),5e3)},J=()=>{W&&(clearInterval(W),W=null)},K=o({}),O=o(!1),Q=o([]),V=async(a=!0)=>{O.value=a;const e=q.params.id,s=await b({gidm:e});K.value=s.data||{},200==s.code&&(Q.value=await U(K.value),O.value=!1)},X=()=>{const{showtype:a,gidm:e}=K.value;"RB"==a&&A.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return m(),v("div",{class:h(["bet-container",{"has-bet":p(G)}])},[c("div",H,[c("div",L,[c("div",M,[r(s,{name:"live-football"}),c("span",null,d(K.value.leagueName),1)]),c("div",B,d(p(k)(K.value.gameDate,"MM-DD HH:mm")),1)]),c("div",D,[c("div",I,[c("div",R,[g(c("img",_,null,512),[[n,K.value.homeLogo]]),c("span",null,d(p(F).getScore(K.value,"H")),1)]),c("strong",null,d(K.value.homeTeam),1)]),c("div",{class:"team-score",onClick:X},[c("span",{class:"default",innerHTML:p(F).showRBTime(K.value)},null,8,C),"RB"==K.value.showtype?(m(),v("span",S,[r(s,{name:"live-play"})])):y("",!0)]),c("div",E,[c("div",N,[c("span",null,d(p(F).getScore(K.value,"C")),1),g(c("img",P,null,512),[[n,K.value.awayLogo]])]),c("strong",null,d(K.value.awayTeam),1)])])]),c("div",$,[O.value?(m(),f(l,{key:0})):0===Q.value.length?(m(),f(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(m(),f(j,{key:2,"data-list":Q.value,"match-info":K.value},null,8,["data-list","match-info"]))])],2)}}});q.__scopeId="data-v-ba1764cc";export{q as default};
