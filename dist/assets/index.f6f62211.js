import{_ as a,a as s,b as e}from"./live_white_r.4c6985c7.js";import{b as l,c as t}from"./index.93c7c929.js";import{s as i,M as n}from"./index.2edd8951.js";import{u as c}from"./useMatch.a18ff0bc.js";import{s as o,b as v,w as r,j as u,d,r as m,E as p,o as g,R as y,P as f,_ as b,W as k,c as h,F as T,S as w,x as I,u as x,$ as j,q as S,B as $,O as _,Y as B,Z as L}from"./vue.1f547d27.js";import"./getScore.7d53e8ea.js";const M=a=>(B("data-v-960501f2"),a=a(),L(),a),N={class:"panel-with"},C={class:"top-nav"},F={class:"header"},H={class:"avatar",type:3,alt:""},R={class:"title"},W={class:"right"},E={key:0,class:"state"},O={class:"wrapper"},P={class:"summary"},q={class:"label"},z={class:"label-flex"},A={class:"label-flex"},D=M((()=>f("i",{class:"iconfont icon-dianshi"},null,-1))),K=["innerHTML"],Y={class:"team"},Z={class:"team-cell"},G={class:"palyer"},J={src:a,type:4,alt:""},Q={class:"score"},U={class:"team-cell"},V={class:"palyer"},X={src:a,type:5,alt:""},aa={class:"score"},sa={class:"ticket"},ea={class:"ticket-txt"},la=M((()=>f("div",{class:"icon"},[f("img",{src:s,alt:""})],-1))),ta={class:"info"},ia={class:"ticket-bet"},na={class:"betting"},ca={class:"betting-cell bt1"},oa={class:"betting-cell bt2"},va={class:"footer"},ra={class:"button"},ua=M((()=>f("img",{src:e,alt:""},null,-1)));var da=o({setup(a){const s=v((()=>i.state.match.matchInfo));r((()=>s.value),(()=>{da()})),u((()=>{da()}));const e=d(1),o=a=>{e.value=a,L.value=[],M.value=!0,da()},B=c(),L=d([]),M=d(!1),da=async()=>{const{gidm:a}=s.value;if(!a)return;const i=1===e.value?l:t,c={page:1,pageSize:50,gidm:a},o=await i(c);if(200===o.code){const a=o.data.map((a=>{const s={...a},e={gameType:s.gameType,playType:s.playType,session:s.session},l=new n(s);return{...s,playInfo:e,marketInfo:l}}));L.value=a}M.value=!1};return(a,l)=>{const t=m("Loading"),i=m("EmptyData"),n=m("SvgIcon"),c=m("BettingOption"),v=p("img"),r=p("play");return g(),y("div",N,[f("div",C,[f("span",{class:b({active:1==e.value}),onClick:l[0]||(l[0]=a=>o(1))},k(a.$t("live.curMatch")),3),f("span",{class:b({active:2==e.value}),onClick:l[1]||(l[1]=a=>o(2))},k(a.$t("live.allBetWith")),3)]),M.value?(g(),h(t,{key:0})):0===L.value.length?(g(),h(i,{key:1})):(g(!0),y(T,{key:2},w(L.value,((e,l)=>(g(),y("div",{key:l,class:"item"},[f("div",F,[I(f("img",H,null,512),[[v,e.headImg]]),f("div",R,[f("strong",null,k(e.nikeName),1),f("span",null,"@"+k(e.nikeName),1)]),f("div",W,["RB"==x(s).showtype?(g(),y("span",E,k(a.$t("live.inprogress")),1)):j("",!0)])]),f("div",O,[f("div",P,k(e.leagueName),1),f("div",q,[f("div",z,["FT"==e.gameType?(g(),h(n,{key:0,name:"live-football"})):j("",!0),"BK"==e.gameType?(g(),h(n,{key:1,name:"live-basketball"})):j("",!0),f("span",null,k(e.leagueShortName),1)]),f("div",A,[D,f("span",{innerHTML:x(B).showRBTime(x(s))},null,8,K)])]),f("div",Y,[f("div",Z,[f("div",G,[I(f("img",J,null,512),[[v,e.homeLogo]]),f("span",null,k(e.homeTeam),1)]),f("div",Q,[f("span",null,k(x(B).getScore(x(s),"H")||"-"),1)])]),f("div",U,[f("div",V,[I(f("img",X,null,512),[[v,e.awayLogo]]),f("span",null,k(e.awayTeam),1)]),f("div",aa,[f("span",null,k(x(B).getScore(x(s),"C")||"-"),1)])])]),f("div",sa,[f("div",ea,[la,f("div",ta,[f("strong",null,k(e.betItem),1),I(f("span",null,null,512),[[r,e.playInfo]])])]),f("div",ia,[f("span",null,"@"+k(e.ior),1)])]),f("div",na,[f("div",ca,[f("strong",null,k(a.$t("live.betAmout"))+"：",1),f("span",null,[S(n,{name:"usdt"}),$(" "+k(e.golds),1)])]),f("div",oa,[f("strong",null,k(a.$t("live.betProfit"))+"：",1),f("span",null,[S(n,{name:"usdt"}),$(" "+k((e.golds*e.ior).toFixed(2)),1)])])]),f("div",va,[S(c,{"market-info":e.marketInfo},{default:_((()=>[f("div",ra,[f("span",null,k(a.$t("live.betWith")),1),ua])])),_:2},1032,["market-info"])])])])))),128))])}}});da.__scopeId="data-v-960501f2";export{da as default};
