import{_ as a,a as s,b as l}from"./live_white_r.4c6985c7.js";import{b as e,c as t}from"./index.df224a28.js";import{s as i,M as n}from"./index.b19086ed.js";import{u as c}from"./useMatch.51c9535d.js";import{s as o,b as v,w as r,j as u,d,r as m,E as p,o as g,R as y,P as f,_ as b,W as k,c as h,F as T,S as w,x as I,u as x,$,q as _,B as j,O as B,Y as S,Z as L}from"./vue.16414fe4.js";const M=a=>(S("data-v-960501f2"),a=a(),L(),a),N={class:"panel-with"},C={class:"top-nav"},F={class:"header"},H={class:"avatar",type:3,alt:""},R={class:"title"},W={class:"right"},E={key:0,class:"state"},O={class:"wrapper"},P={class:"summary"},q={class:"label"},z={class:"label-flex"},A={class:"label-flex"},D=M((()=>f("i",{class:"iconfont icon-dianshi"},null,-1))),K=["innerHTML"],Y={class:"team"},Z={class:"team-cell"},G={class:"palyer"},J={src:a,type:4,alt:""},Q={class:"score"},U={class:"team-cell"},V={class:"palyer"},X={src:a,type:5,alt:""},aa={class:"score"},sa={class:"ticket"},la={class:"ticket-txt"},ea=M((()=>f("div",{class:"icon"},[f("img",{src:s,alt:""})],-1))),ta={class:"info"},ia={class:"ticket-bet"},na={class:"betting"},ca={class:"betting-cell bt1"},oa={class:"betting-cell bt2"},va={class:"footer"},ra={class:"button"},ua=M((()=>f("img",{src:l,alt:""},null,-1)));var da=o({setup(a){const s=v((()=>i.state.match.matchInfo));r((()=>s.value),(()=>{da()})),u((()=>{da()}));const l=d(1),o=a=>{l.value=a,L.value=[],M.value=!0,da()},S=c(),L=d([]),M=d(!1),da=async()=>{const{gidm:a}=s.value;if(!a)return;const i=1===l.value?e:t,c={page:1,pageSize:50,gidm:a},o=await i(c);if(200===o.code){const a=o.data.map((a=>{const s={...a},l={gameType:s.gameType,playType:s.playType,session:s.session},e=new n(s);return{...s,playInfo:l,marketInfo:e}}));L.value=a}M.value=!1};return(a,e)=>{const t=m("Loading"),i=m("EmptyData"),n=m("SvgIcon"),c=m("BettingOption"),v=p("img"),r=p("play");return g(),y("div",N,[f("div",C,[f("span",{class:b({active:1==l.value}),onClick:e[0]||(e[0]=a=>o(1))},k(a.$t("live.curMatch")),3),f("span",{class:b({active:2==l.value}),onClick:e[1]||(e[1]=a=>o(2))},k(a.$t("live.allBetWith")),3)]),M.value?(g(),h(t,{key:0})):0===L.value.length?(g(),h(i,{key:1})):(g(!0),y(T,{key:2},w(L.value,((l,e)=>(g(),y("div",{key:e,class:"item"},[f("div",F,[I(f("img",H,null,512),[[v,l.headImg]]),f("div",R,[f("strong",null,k(l.nikeName),1),f("span",null,"@"+k(l.nikeName),1)]),f("div",W,["RB"==x(s).showtype?(g(),y("span",E,k(a.$t("live.inprogress")),1)):$("",!0)])]),f("div",O,[f("div",P,k(l.leagueName),1),f("div",q,[f("div",z,["FT"==l.gameType?(g(),h(n,{key:0,name:"live-football"})):$("",!0),"BK"==l.gameType?(g(),h(n,{key:1,name:"live-basketball"})):$("",!0),f("span",null,k(l.leagueShortName),1)]),f("div",A,[D,f("span",{innerHTML:x(S).showRBTime(x(s))},null,8,K)])]),f("div",Y,[f("div",Z,[f("div",G,[I(f("img",J,null,512),[[v,l.homeLogo]]),f("span",null,k(l.homeTeam),1)]),f("div",Q,[f("span",null,k(x(S).getScore(x(s),"H")||"-"),1)])]),f("div",U,[f("div",V,[I(f("img",X,null,512),[[v,l.awayLogo]]),f("span",null,k(l.awayTeam),1)]),f("div",aa,[f("span",null,k(x(S).getScore(x(s),"C")||"-"),1)])])]),f("div",sa,[f("div",la,[ea,f("div",ta,[f("strong",null,k(l.betItem),1),I(f("span",null,null,512),[[r,l.playInfo]])])]),f("div",ia,[f("span",null,"@"+k(l.ior),1)])]),f("div",na,[f("div",ca,[f("strong",null,k(a.$t("live.betAmout"))+"：",1),f("span",null,[_(n,{name:"usdt"}),j(" "+k(l.golds),1)])]),f("div",oa,[f("strong",null,k(a.$t("live.betProfit"))+"：",1),f("span",null,[_(n,{name:"usdt"}),j(" "+k((l.golds*l.ior).toFixed(2)),1)])])]),f("div",va,[_(c,{"market-info":l.marketInfo},{default:B((()=>[f("div",ra,[f("span",null,k(a.$t("live.betWith")),1),ua])])),_:2},1032,["market-info"])])])])))),128))])}}});da.__scopeId="data-v-960501f2";export{da as default};
