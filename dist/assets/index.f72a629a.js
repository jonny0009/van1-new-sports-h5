<<<<<<<< HEAD:dist/assets/index.6eabb796.js
var a=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(e,s,l)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,o=(a,e)=>{for(var s in e||(e={}))t.call(e,s)&&n(a,s,e[s]);if(l)for(var s of l(e))i.call(e,s)&&n(a,s,e[s]);return a};import{_ as c,a as r,b as v}from"./live_white_r.4c6985c7.js";import{b as p,c as u}from"./index.beffd051.js";import{s as m,S as d}from"./index.1380e0a0.js";import{u as g}from"./useMatch.eb4b60d6.js";import{s as y,b,w as f,j as h,d as k,r as w,E as j,o as T,S as O,P as I,Z as S,V as x,c as P,F as $,_,x as B,u as L,$ as M,q as N,B as C,O as E,X as F,Y as H}from"./vue.7833d4f2.js";import"./getScore.c910b2c7.js";const D=a=>(F("data-v-960501f2"),a=a(),H(),a),R={class:"panel-with"},W={class:"top-nav"},q={class:"header"},z={class:"avatar",type:3,alt:""},A={class:"title"},K={class:"right"},V={key:0,class:"state"},X={class:"wrapper"},Y={class:"summary"},Z={class:"label"},G={class:"label-flex"},J={class:"label-flex"},Q=D((()=>I("i",{class:"iconfont icon-dianshi"},null,-1))),U=["innerHTML"],aa={class:"team"},ea={class:"team-cell"},sa={class:"palyer"},la={src:c,type:4,alt:""},ta={class:"score"},ia={class:"team-cell"},na={class:"palyer"},oa={src:c,type:5,alt:""},ca={class:"score"},ra={class:"ticket"},va={class:"ticket-txt"},pa=D((()=>I("div",{class:"icon"},[I("img",{src:r,alt:""})],-1))),ua={class:"info"},ma={class:"ticket-bet"},da={class:"betting"},ga={class:"betting-cell bt1"},ya={class:"betting-cell bt2"},ba={class:"footer"},fa={class:"button"},ha=D((()=>I("img",{src:v,alt:""},null,-1)));var ka=y({setup(a){const l=b((()=>m.state.match.matchInfo));f((()=>l.value),(()=>{v()})),h((()=>{v()}));const t=k(1),i=a=>{t.value=a,c.value=[],r.value=!0,v()},n=g(),c=k([]),r=k(!1),v=async()=>{const{gidm:a}=l.value;if(!a)return;const i=1===t.value?p:u,n={page:1,pageSize:50,gidm:a},v=await i(n);if(200===v.code){const a=v.data.map((a=>{const l=o({},a),t={gameType:l.gameType,playType:l.playType,session:l.session},i=new d(l);return n=o({},l),e(n,s({playInfo:t,marketInfo:i}));var n}));c.value=a}r.value=!1};return(a,e)=>{const s=w("Loading"),o=w("EmptyData"),v=w("SvgIcon"),p=w("BettingOption"),u=j("img"),m=j("play");return T(),O("div",R,[I("div",W,[I("span",{class:S({active:1==t.value}),onClick:e[0]||(e[0]=a=>i(1))},x(a.$t("live.curMatch")),3),I("span",{class:S({active:2==t.value}),onClick:e[1]||(e[1]=a=>i(2))},x(a.$t("live.allBetWith")),3)]),r.value?(T(),P(s,{key:0})):0===c.value.length?(T(),P(o,{key:1})):(T(!0),O($,{key:2},_(c.value,((e,s)=>(T(),O("div",{key:s,class:"item"},[I("div",q,[B(I("img",z,null,512),[[u,e.headImg]]),I("div",A,[I("strong",null,x(e.nikeName),1),I("span",null,"@"+x(e.nikeName),1)]),I("div",K,["RB"==L(l).showtype?(T(),O("span",V,x(a.$t("live.inprogress")),1)):M("",!0)])]),I("div",X,[I("div",Y,x(e.leagueName),1),I("div",Z,[I("div",G,["FT"==e.gameType?(T(),P(v,{key:0,name:"live-football"})):M("",!0),"BK"==e.gameType?(T(),P(v,{key:1,name:"live-basketball"})):M("",!0),I("span",null,x(e.leagueShortName),1)]),I("div",J,[Q,I("span",{innerHTML:L(n).showRBTime(L(l))},null,8,U)])]),I("div",aa,[I("div",ea,[I("div",sa,[B(I("img",la,null,512),[[u,e.homeLogo]]),I("span",null,x(e.homeTeam),1)]),I("div",ta,[I("span",null,x(L(n).getScore(L(l),"H")||"-"),1)])]),I("div",ia,[I("div",na,[B(I("img",oa,null,512),[[u,e.awayLogo]]),I("span",null,x(e.awayTeam),1)]),I("div",ca,[I("span",null,x(L(n).getScore(L(l),"C")||"-"),1)])])]),I("div",ra,[I("div",va,[pa,I("div",ua,[I("strong",null,x(e.betItem),1),B(I("span",null,null,512),[[m,e.playInfo]])])]),I("div",ma,[I("span",null,"@"+x(e.ior),1)])]),I("div",da,[I("div",ga,[I("strong",null,x(a.$t("live.betAmout"))+"：",1),I("span",null,[N(v,{name:"usdt"}),C(" "+x(e.golds),1)])]),I("div",ya,[I("strong",null,x(a.$t("live.betProfit"))+"：",1),I("span",null,[N(v,{name:"usdt"}),C(" "+x((e.golds*e.ior).toFixed(2)),1)])])]),I("div",ba,[N(p,{"market-info":e.marketInfo},{default:E((()=>[I("div",fa,[I("span",null,x(a.$t("live.betWith")),1),ha])])),_:2},1032,["market-info"])])])])))),128))])}}});ka.__scopeId="data-v-960501f2";export{ka as default};
========
var a=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(e,s,l)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,c=(a,e)=>{for(var s in e||(e={}))t.call(e,s)&&n(a,s,e[s]);if(l)for(var s of l(e))i.call(e,s)&&n(a,s,e[s]);return a};import{_ as o,a as r,b as v}from"./live_white_r.4c6985c7.js";import{b as p,c as u}from"./index.cbe04f40.js";import{s as m,S as d}from"./index.0612b907.js";import{u as g}from"./useMatch.1c8cd06b.js";import{s as y,b,w as f,j as h,d as k,r as w,E as j,o as T,S as O,P as I,Z as S,V as x,c as P,F as $,_,x as B,u as L,$ as M,q as N,B as C,O as E,X as F,Y as H}from"./vue.7833d4f2.js";import"./getScore.544fb126.js";const D=a=>(F("data-v-960501f2"),a=a(),H(),a),R={class:"panel-with"},W={class:"top-nav"},q={class:"header"},z={class:"avatar",type:3,alt:""},A={class:"title"},K={class:"right"},V={key:0,class:"state"},X={class:"wrapper"},Y={class:"summary"},Z={class:"label"},G={class:"label-flex"},J={class:"label-flex"},Q=D((()=>I("i",{class:"iconfont icon-dianshi"},null,-1))),U=["innerHTML"],aa={class:"team"},ea={class:"team-cell"},sa={class:"palyer"},la={src:o,type:4,alt:""},ta={class:"score"},ia={class:"team-cell"},na={class:"palyer"},ca={src:o,type:5,alt:""},oa={class:"score"},ra={class:"ticket"},va={class:"ticket-txt"},pa=D((()=>I("div",{class:"icon"},[I("img",{src:r,alt:""})],-1))),ua={class:"info"},ma={class:"ticket-bet"},da={class:"betting"},ga={class:"betting-cell bt1"},ya={class:"betting-cell bt2"},ba={class:"footer"},fa={class:"button"},ha=D((()=>I("img",{src:v,alt:""},null,-1)));var ka=y({setup(a){const l=b((()=>m.state.match.matchInfo));f((()=>l.value),(()=>{v()})),h((()=>{v()}));const t=k(1),i=a=>{t.value=a,o.value=[],r.value=!0,v()},n=g(),o=k([]),r=k(!1),v=async()=>{const{gidm:a}=l.value;if(!a)return;const i=1===t.value?p:u,n={page:1,pageSize:50,gidm:a},v=await i(n);if(200===v.code){const a=v.data.map((a=>{const l=c({},a),t={gameType:l.gameType,playType:l.playType,session:l.session},i=new d(l);return n=c({},l),e(n,s({playInfo:t,marketInfo:i}));var n}));o.value=a}r.value=!1};return(a,e)=>{const s=w("Loading"),c=w("EmptyData"),v=w("SvgIcon"),p=w("BettingOption"),u=j("img"),m=j("play");return T(),O("div",R,[I("div",W,[I("span",{class:S({active:1==t.value}),onClick:e[0]||(e[0]=a=>i(1))},x(a.$t("live.curMatch")),3),I("span",{class:S({active:2==t.value}),onClick:e[1]||(e[1]=a=>i(2))},x(a.$t("live.allBetWith")),3)]),r.value?(T(),P(s,{key:0})):0===o.value.length?(T(),P(c,{key:1})):(T(!0),O($,{key:2},_(o.value,((e,s)=>(T(),O("div",{key:s,class:"item"},[I("div",q,[B(I("img",z,null,512),[[u,e.headImg]]),I("div",A,[I("strong",null,x(e.nikeName),1),I("span",null,"@"+x(e.nikeName),1)]),I("div",K,["RB"==L(l).showtype?(T(),O("span",V,x(a.$t("live.inprogress")),1)):M("",!0)])]),I("div",X,[I("div",Y,x(e.leagueName),1),I("div",Z,[I("div",G,["FT"==e.gameType?(T(),P(v,{key:0,name:"live-football"})):M("",!0),"BK"==e.gameType?(T(),P(v,{key:1,name:"live-basketball"})):M("",!0),I("span",null,x(e.leagueShortName),1)]),I("div",J,[Q,I("span",{innerHTML:L(n).showRBTime(L(l))},null,8,U)])]),I("div",aa,[I("div",ea,[I("div",sa,[B(I("img",la,null,512),[[u,e.homeLogo]]),I("span",null,x(e.homeTeam),1)]),I("div",ta,[I("span",null,x(L(n).getScore(L(l),"H")||"-"),1)])]),I("div",ia,[I("div",na,[B(I("img",ca,null,512),[[u,e.awayLogo]]),I("span",null,x(e.awayTeam),1)]),I("div",oa,[I("span",null,x(L(n).getScore(L(l),"C")||"-"),1)])])]),I("div",ra,[I("div",va,[pa,I("div",ua,[I("strong",null,x(e.betItem),1),B(I("span",null,null,512),[[m,e.playInfo]])])]),I("div",ma,[I("span",null,"@"+x(e.ior),1)])]),I("div",da,[I("div",ga,[I("strong",null,x(a.$t("live.betAmout"))+"：",1),I("span",null,[N(v,{name:"usdt"}),C(" "+x(e.golds),1)])]),I("div",ya,[I("strong",null,x(a.$t("live.betProfit"))+"：",1),I("span",null,[N(v,{name:"usdt"}),C(" "+x((e.golds*e.ior).toFixed(2)),1)])])]),I("div",ba,[N(p,{"market-info":e.marketInfo},{default:E((()=>[I("div",fa,[I("span",null,x(a.$t("live.betWith")),1),ha])])),_:2},1032,["market-info"])])])])))),128))])}}});ka.__scopeId="data-v-960501f2";export{ka as default};
>>>>>>>> f555490d (lang):dist/assets/index.f72a629a.js
