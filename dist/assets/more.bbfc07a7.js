import{s as a,b as e,a2 as s,U as l,d as t,w as i,j as n,M as m,a as o,r as u,E as c,o as v,R as d,P as r,q as p,W as g,u as y,x as b,$ as f,F as h,S as T,_,y as B}from"./vue.16414fe4.js";import{u as E,s as I,G as w}from"./index.bfb5f96a.js";import{m as M}from"./index.e69dac77.js";import{u as j}from"./useMatch.e36b86b1.js";import{s as x}from"./sportBg.b662bc9a.js";import{u as C,_ as L}from"./index.c2fc6a71.js";import{_ as N}from"./index.0e1d8c38.js";const S={class:"team"},k=["src"],H={class:"team-dim"},R={class:"team-header"},D={class:"league"},F={class:"date"},G={class:"team-box"},q={class:"team-player host"},A={class:"img-num"},$={type:4,alt:""},O=["innerHTML"],P={key:0,class:"icons"},U={class:"team-player away"},W={class:"img-num"},z={type:5,alt:""},J={class:"bet-menu"},K=["onClick"],Q={class:"title"},V={class:"bet-main"};var X=a({setup(a){const X=e((()=>Z.query.gameType))||"FT",{t:Y}=E(),Z=s(),aa=l(),ea=j(),sa=t({}),la=e((()=>Z.params.id)),ta=e((()=>I.state.app.showFixedBet)),ia=t([{type:0,title:Y("live.bet"),iconName:"live-bet"},{type:1,title:Y("live.dataBase"),iconName:"live-data"}]),na=t(0),ma=t({}),oa=async()=>{const a=la.value,e=(await M({gidm:a})).data||{};if(ma.value={...e},e.detail&&e.detail.length>0){const{game:a}=e.detail[0],s=a.gameInfo||{};ma.value.gameInfo=s}I.commit("match/SET_MATCH_INFO",ma.value)},ua=()=>{const{showtype:a,gidm:e}=ma.value;"RB"===a&&aa.push(`/match/${e}`)};let ca=null;const va=()=>{ca&&(clearInterval(ca),ca=null,I.commit("match/SET_NEED_TIMER",!1))};return i((()=>Z.params.id),(a=>{a&&(ma.value={},oa(),sa.value=C(1))})),n((()=>{sa.value=C(1)})),m((()=>{oa(),va(),ca=setInterval((()=>{oa(),I.commit("match/SET_NEED_TIMER",!0)}),5e3)})),o((()=>{va()})),(a,e)=>{const s=u("SvgIcon"),l=c("img");return v(),d("div",{class:_(["bet-container",{"has-bet":y(ta)}])},[r("div",S,[r("img",{class:"bannerBg-1",fit:"fill",src:x()[X.value]},null,8,k),r("div",H,[r("div",R,[r("div",D,[p(s,{name:"live-football"}),r("span",null,g(ma.value.leagueName),1)]),r("div",F,g(y(w)(ma.value.gameDate,"MM/DD HH:mm A")),1)]),r("div",G,[r("div",q,[r("div",A,[b(r("img",$,null,512),[[l,ma.value.homeLogo]]),r("span",null,g(y(ea).getScore(ma.value,"H")),1)]),r("strong",null,g(ma.value.homeTeam),1)]),r("div",{class:"team-score",onClick:ua},[r("span",{class:"default",innerHTML:y(ea).showRBTime(ma.value)},null,8,O),"RB"==ma.value.showtype?(v(),d("span",P,[p(s,{name:"live-play"})])):f("",!0)]),r("div",U,[r("div",W,[r("span",null,g(y(ea).getScore(ma.value,"C")),1),b(r("img",z,null,512),[[l,ma.value.awayLogo]])]),r("strong",null,g(ma.value.awayTeam),1)])])])]),r("div",J,[(v(!0),d(h,null,T(ia.value,((a,e)=>(v(),d("div",{key:e,class:_(["bet-menu__nav",{selected:na.value===a.type}]),onClick:e=>(a=>{na.value=a.type})(a)},[p(s,{name:a.iconName},null,8,["name"]),r("span",Q,g(a.title),1)],10,K)))),128))]),r("div",V,[b(p(L,{"match-info":ma.value,"group-list":sa.value.playGroupBetList,"betting-list":sa.value.playBettingList,loading:sa.value.apiLoading,onTabChange:sa.value.findGroupById},null,8,["match-info","group-list","betting-list","loading","onTabChange"]),[[B,0===na.value]]),b(p(N,{sticky:!0},null,512),[[B,1===na.value]])])],2)}}});X.__scopeId="data-v-5b802e86";export{X as default};
