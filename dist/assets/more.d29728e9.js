import{d as a,g as e,a2 as s,U as l,f as t,w as i,a as n,j as m,b as o,r as u,K as c,o as v,R as d,P as r,m as p,W as g,u as b,C as y,$ as f,F as h,S as T,_,D as B}from"./vue.2cb7924b.js";import{u as I,s as w,H as E}from"./index.f78e2000.js";import{m as j}from"./index.746cc57a.js";import{u as C}from"./useMatch.bd822326.js";import{s as M}from"./sportBg.b662bc9a.js";import{u as x,_ as H}from"./index.f67cb8d8.js";import{_ as L}from"./index.1feb34db.js";const N={class:"team"},S=["src"],k={class:"team-dim"},D={class:"team-header"},R={class:"league"},F={class:"date"},A={class:"team-box"},G={class:"team-player host"},$={class:"img-num"},q={type:4,alt:""},K=["innerHTML"],O={key:0,class:"icons"},P={class:"team-player away"},U={class:"img-num"},W={type:5,alt:""},z={class:"bet-menu"},J=["onClick"],Q={class:"title"},V={class:"bet-main"};var X=a({setup(a){const X=e((()=>Z.query.gameType))||"FT",{t:Y}=I(),Z=s(),aa=l(),ea=C(),sa=t({}),la=e((()=>Z.params.id)),ta=e((()=>w.state.app.showFixedBet)),ia=t([{type:0,title:Y("live.bet"),iconName:"live-bet"},{type:1,title:Y("live.dataBase"),iconName:"live-data"}]),na=t(0),ma=t({}),oa=async()=>{const a=la.value,e=(await j({gidm:a})).data||{};if(ma.value={...e},e.detail&&e.detail.length>0){const{game:a}=e.detail[0],s=a.gameInfo||{};ma.value.gameInfo=s}w.commit("match/SET_MATCH_INFO",ma.value)},ua=()=>{const{showtype:a,gidm:e}=ma.value;"RB"===a&&aa.push(`/match/${e}`)};let ca=null;const va=()=>{ca&&(clearInterval(ca),ca=null,w.commit("match/SET_NEED_TIMER",!1))};return i((()=>Z.params.id),(a=>{a&&(ma.value={},oa(),sa.value=x(1))})),n((()=>{sa.value=x(1)})),m((()=>{oa(),va(),ca=setInterval((()=>{oa(),w.commit("match/SET_NEED_TIMER",!0)}),5e3)})),o((()=>{va()})),(a,e)=>{const s=u("SvgIcon"),l=c("img");return v(),d("div",{class:_(["bet-container",{"has-bet":b(ta)}])},[r("div",N,[r("img",{class:"bannerBg-1",fit:"fill",src:M()[X.value]},null,8,S),r("div",k,[r("div",D,[r("div",R,[p(s,{name:"live-football"}),r("span",null,g(ma.value.leagueName),1)]),r("div",F,g(b(E)(ma.value.gameDate,"MM/DD HH:mm A")),1)]),r("div",A,[r("div",G,[r("div",$,[y(r("img",q,null,512),[[l,ma.value.homeLogo]]),r("span",null,g(b(ea).getScore(ma.value,"H")),1)]),r("strong",null,g(ma.value.homeTeam),1)]),r("div",{class:"team-score",onClick:ua},[r("span",{class:"default",innerHTML:b(ea).showRBTime(ma.value)},null,8,K),"RB"==ma.value.showtype?(v(),d("span",O,[p(s,{name:"live-play"})])):f("",!0)]),r("div",P,[r("div",U,[r("span",null,g(b(ea).getScore(ma.value,"C")),1),y(r("img",W,null,512),[[l,ma.value.awayLogo]])]),r("strong",null,g(ma.value.awayTeam),1)])])])]),r("div",z,[(v(!0),d(h,null,T(ia.value,((a,e)=>(v(),d("div",{key:e,class:_(["bet-menu__nav",{selected:na.value===a.type}]),onClick:e=>(a=>{na.value=a.type})(a)},[p(s,{name:a.iconName},null,8,["name"]),r("span",Q,g(a.title),1)],10,J)))),128))]),r("div",V,[y(p(H,{"match-info":ma.value,"group-list":sa.value.playGroupBetList,"betting-list":sa.value.playBettingList,loading:sa.value.apiLoading,onTabChange:sa.value.findGroupById},null,8,["match-info","group-list","betting-list","loading","onTabChange"]),[[B,0===na.value]]),y(p(L,{sticky:!0},null,512),[[B,1===na.value]])])],2)}}});X.__scopeId="data-v-5b802e86";export{X as default};
