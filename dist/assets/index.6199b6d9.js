import{_ as a,a as s,b as l}from"./live_white_r.4c6985c7.js";import{b as e,c as t}from"./index.79a58674.js";import{s as i,M as n}from"./index.3df0673f.js";import{u as c}from"./useMatch.aae4f844.js";import{s as o,b as v,w as r,j as u,d as m,r as d,E as p,o as g,R as f,P as y,_ as b,W as k,c as h,F as T,S as w,x as I,u as x,$,q as _,B as j,O as B,Y as S,Z as L}from"./vue.16414fe4.js";const M=a=>(S("data-v-960501f2"),a=a(),L(),a),N={class:"panel-with"},C={class:"top-nav"},F={class:"header"},H={class:"avatar",type:3,alt:""},R={class:"title"},W={class:"right"},E={key:0,class:"state"},O={class:"wrapper"},P={class:"summary"},q={class:"label"},z={class:"label-flex"},A={class:"label-flex"},D=M((()=>y("i",{class:"iconfont icon-dianshi"},null,-1))),K=["innerHTML"],Y={class:"team"},Z={class:"team-cell"},G={class:"palyer"},J={src:a,type:4,alt:""},Q={class:"score"},U={class:"team-cell"},V={class:"palyer"},X={src:a,type:5,alt:""},aa={class:"score"},sa={class:"ticket"},la={class:"ticket-txt"},ea=M((()=>y("div",{class:"icon"},[y("img",{src:s,alt:""})],-1))),ta={class:"info"},ia={class:"ticket-bet"},na={class:"betting"},ca={class:"betting-cell bt1"},oa={class:"betting-cell bt2"},va={class:"footer"},ra={class:"button"},ua=M((()=>y("img",{src:l,alt:""},null,-1)));var ma=o({setup(a){const s=v((()=>i.state.match.matchInfo));r((()=>s.value),(()=>{ma()})),u((()=>{ma()}));const l=m(1),o=a=>{l.value=a,L.value=[],M.value=!0,ma()},S=c(),L=m([]),M=m(!1),ma=async()=>{const{gidm:a}=s.value;if(!a)return;const i=1===l.value?e:t,c={page:1,pageSize:50,gidm:a},o=await i(c);if(200===o.code){const a=o.data.map((a=>{const s={...a},l={gameType:s.gameType,playType:s.playType,session:s.session},e=new n(s);return{...s,playInfo:l,marketInfo:e}}));L.value=a}M.value=!1};return(a,e)=>{const t=d("Loading"),i=d("EmptyData"),n=d("SvgIcon"),c=d("BettingOption"),v=p("img"),r=p("play");return g(),f("div",N,[y("div",C,[y("span",{class:b({active:1==l.value}),onClick:e[0]||(e[0]=a=>o(1))},k(a.$t("live.curMatch")),3),y("span",{class:b({active:2==l.value}),onClick:e[1]||(e[1]=a=>o(2))},k(a.$t("live.allBetWith")),3)]),M.value?(g(),h(t,{key:0})):0===L.value.length?(g(),h(i,{key:1})):(g(!0),f(T,{key:2},w(L.value,((l,e)=>(g(),f("div",{key:e,class:"item"},[y("div",F,[I(y("img",H,null,512),[[v,l.headImg]]),y("div",R,[y("strong",null,k(l.nikeName),1),y("span",null,"@"+k(l.nikeName),1)]),y("div",W,["RB"==x(s).showtype?(g(),f("span",E,k(a.$t("live.inprogress")),1)):$("",!0)])]),y("div",O,[y("div",P,k(l.leagueName),1),y("div",q,[y("div",z,["FT"==l.gameType?(g(),h(n,{key:0,name:"live-football"})):$("",!0),"BK"==l.gameType?(g(),h(n,{key:1,name:"live-basketball"})):$("",!0),y("span",null,k(l.leagueShortName),1)]),y("div",A,[D,y("span",{innerHTML:x(S).showRBTime(x(s))},null,8,K)])]),y("div",Y,[y("div",Z,[y("div",G,[I(y("img",J,null,512),[[v,l.homeLogo]]),y("span",null,k(l.homeTeam),1)]),y("div",Q,[y("span",null,k(x(S).getScore(x(s),"H")||"-"),1)])]),y("div",U,[y("div",V,[I(y("img",X,null,512),[[v,l.awayLogo]]),y("span",null,k(l.awayTeam),1)]),y("div",aa,[y("span",null,k(x(S).getScore(x(s),"C")||"-"),1)])])]),y("div",sa,[y("div",la,[ea,y("div",ta,[y("strong",null,k(l.betItem),1),I(y("span",null,null,512),[[r,l.playInfo]])])]),y("div",ia,[y("span",null,"@"+k(l.ior),1)])]),y("div",na,[y("div",ca,[y("strong",null,k(a.$t("live.betAmout"))+"：",1),y("span",null,[_(n,{name:"usdt"}),j(" "+k(l.golds),1)])]),y("div",oa,[y("strong",null,k(a.$t("live.betProfit"))+"：",1),y("span",null,[_(n,{name:"usdt"}),j(" "+k((l.golds*l.ior).toFixed(2)),1)])])]),y("div",va,[_(c,{"market-info":l.marketInfo},{default:B((()=>[y("div",ra,[y("span",null,k(a.$t("live.betWith")),1),ua])])),_:2},1032,["market-info"])])])])))),128))])}}});ma.__scopeId="data-v-960501f2";export{ma as default};
