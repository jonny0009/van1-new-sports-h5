import{s as a,a2 as e,U as s,b as l,j as t,a as n,d as o,r as u,E as i,o as c,R as m,P as v,q as r,W as d,u as p,x as g,$ as y,c as h,_ as f}from"./vue.5fe62a63.js";import{m as b}from"./index.c9b9798b.js";import{u as w}from"./useMatch.2c01cb26.js";import{u as x,_ as j}from"./index.f4ef0b61.js";import{s as T,F as k}from"./index.b604bcfc.js";import"./getScore.7bc88c4d.js";const H={class:"team"},L={class:"team-header"},M={class:"league"},B={class:"date"},D={class:"team-box"},I={class:"team-player host"},R={class:"img-num"},S={type:4,alt:""},_=["innerHTML"],C={key:0,class:"icons"},$={class:"team-player away"},E={class:"img-num"},F={type:5,alt:""},P={class:"bettings"};var q=a({setup(a){const q=e(),A=s(),G=w(),N=l((()=>T.state.app.showFixedBet)),{getPlayGroupType:U}=x();t((()=>{V(),z()})),n((()=>{J()}));let W=null;const z=()=>{J(),W=setInterval((()=>{V(!1)}),5e3)},J=()=>{W&&(clearInterval(W),W=null)},K=o({}),O=o(!1),Q=o([]),V=async(a=!0)=>{O.value=a;const e=q.params.id,s=await b({gidm:e});K.value=s.data||{},200===s.code&&(Q.value=await U(K.value),O.value=!1)},X=()=>{const{showtype:a,gidm:e}=K.value;"RB"===a&&A.push(`/match/${e}`)};return(a,e)=>{const s=u("SvgIcon"),l=u("Loading"),t=u("EmptyData"),n=i("img");return c(),m("div",{class:f(["bet-container",{"has-bet":p(N)}])},[v("div",H,[v("div",L,[v("div",M,[r(s,{name:"live-football"}),v("span",null,d(K.value.leagueName),1)]),v("div",B,d(p(k)(K.value.gameDate,"MM-DD HH:mm")),1)]),v("div",D,[v("div",I,[v("div",R,[g(v("img",S,null,512),[[n,K.value.homeLogo]]),v("span",null,d(p(G).getScore(K.value,"H")),1)]),v("strong",null,d(K.value.homeTeam),1)]),v("div",{class:"team-score",onClick:X},[v("span",{class:"default",innerHTML:p(G).showRBTime(K.value)},null,8,_),"RB"==K.value.showtype?(c(),m("span",C,[r(s,{name:"live-play"})])):y("",!0)]),v("div",$,[v("div",E,[v("span",null,d(p(G).getScore(K.value,"C")),1),g(v("img",F,null,512),[[n,K.value.awayLogo]])]),v("strong",null,d(K.value.awayTeam),1)])])]),v("div",P,[O.value?(c(),h(l,{key:0})):0===Q.value.length?(c(),h(t,{key:1,text:a.$t("live.platCloseAll")},null,8,["text"])):(c(),h(j,{key:2,"data-list":Q.value,"match-info":K.value},null,8,["data-list","match-info"]))])],2)}}});q.__scopeId="data-v-3526d456";export{q as default};
