var a=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(e,s,l)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,o=(a,e)=>{for(var s in e||(e={}))t.call(e,s)&&n(a,s,e[s]);if(l)for(var s of l(e))i.call(e,s)&&n(a,s,e[s]);return a};import{_ as c,a as r,b as v}from"./live_white_r.4c6985c7.js";import{b as p,c as u}from"./index.edb76ba9.js";import{s as m,M as d}from"./index.8d12da3c.js";import{u as g}from"./useMatch.34952418.js";import{s as y,b,w as f,j as h,d as k,r as w,E as j,o as T,R as O,P as I,_ as x,W as S,c as P,F as $,S as _,x as B,u as L,$ as M,q as N,B as C,O as E,Y as F,Z as H}from"./vue.5fe62a63.js";import"./getScore.206e1287.js";const R=a=>(F("data-v-960501f2"),a=a(),H(),a),W={class:"panel-with"},D={class:"top-nav"},q={class:"header"},z={class:"avatar",type:3,alt:""},A={class:"title"},K={class:"right"},Y={key:0,class:"state"},Z={class:"wrapper"},G={class:"summary"},J={class:"label"},Q={class:"label-flex"},U={class:"label-flex"},V=R((()=>I("i",{class:"iconfont icon-dianshi"},null,-1))),X=["innerHTML"],aa={class:"team"},ea={class:"team-cell"},sa={class:"palyer"},la={src:c,type:4,alt:""},ta={class:"score"},ia={class:"team-cell"},na={class:"palyer"},oa={src:c,type:5,alt:""},ca={class:"score"},ra={class:"ticket"},va={class:"ticket-txt"},pa=R((()=>I("div",{class:"icon"},[I("img",{src:r,alt:""})],-1))),ua={class:"info"},ma={class:"ticket-bet"},da={class:"betting"},ga={class:"betting-cell bt1"},ya={class:"betting-cell bt2"},ba={class:"footer"},fa={class:"button"},ha=R((()=>I("img",{src:v,alt:""},null,-1)));var ka=y({setup(a){const l=b((()=>m.state.match.matchInfo));f((()=>l.value),(()=>{v()})),h((()=>{v()}));const t=k(1),i=a=>{t.value=a,c.value=[],r.value=!0,v()},n=g(),c=k([]),r=k(!1),v=async()=>{const{gidm:a}=l.value;if(!a)return;const i=1===t.value?p:u,n={page:1,pageSize:50,gidm:a},v=await i(n);if(200===v.code){const a=v.data.map((a=>{const l=o({},a),t={gameType:l.gameType,playType:l.playType,session:l.session},i=new d(l);return n=o({},l),e(n,s({playInfo:t,marketInfo:i}));var n}));c.value=a}r.value=!1};return(a,e)=>{const s=w("Loading"),o=w("EmptyData"),v=w("SvgIcon"),p=w("BettingOption"),u=j("img"),m=j("play");return T(),O("div",W,[I("div",D,[I("span",{class:x({active:1==t.value}),onClick:e[0]||(e[0]=a=>i(1))},S(a.$t("live.curMatch")),3),I("span",{class:x({active:2==t.value}),onClick:e[1]||(e[1]=a=>i(2))},S(a.$t("live.allBetWith")),3)]),r.value?(T(),P(s,{key:0})):0===c.value.length?(T(),P(o,{key:1})):(T(!0),O($,{key:2},_(c.value,((e,s)=>(T(),O("div",{key:s,class:"item"},[I("div",q,[B(I("img",z,null,512),[[u,e.headImg]]),I("div",A,[I("strong",null,S(e.nikeName),1),I("span",null,"@"+S(e.nikeName),1)]),I("div",K,["RB"==L(l).showtype?(T(),O("span",Y,S(a.$t("live.inprogress")),1)):M("",!0)])]),I("div",Z,[I("div",G,S(e.leagueName),1),I("div",J,[I("div",Q,["FT"==e.gameType?(T(),P(v,{key:0,name:"live-football"})):M("",!0),"BK"==e.gameType?(T(),P(v,{key:1,name:"live-basketball"})):M("",!0),I("span",null,S(e.leagueShortName),1)]),I("div",U,[V,I("span",{innerHTML:L(n).showRBTime(L(l))},null,8,X)])]),I("div",aa,[I("div",ea,[I("div",sa,[B(I("img",la,null,512),[[u,e.homeLogo]]),I("span",null,S(e.homeTeam),1)]),I("div",ta,[I("span",null,S(L(n).getScore(L(l),"H")||"-"),1)])]),I("div",ia,[I("div",na,[B(I("img",oa,null,512),[[u,e.awayLogo]]),I("span",null,S(e.awayTeam),1)]),I("div",ca,[I("span",null,S(L(n).getScore(L(l),"C")||"-"),1)])])]),I("div",ra,[I("div",va,[pa,I("div",ua,[I("strong",null,S(e.betItem),1),B(I("span",null,null,512),[[m,e.playInfo]])])]),I("div",ma,[I("span",null,"@"+S(e.ior),1)])]),I("div",da,[I("div",ga,[I("strong",null,S(a.$t("live.betAmout"))+"：",1),I("span",null,[N(v,{name:"usdt"}),C(" "+S(e.golds),1)])]),I("div",ya,[I("strong",null,S(a.$t("live.betProfit"))+"：",1),I("span",null,[N(v,{name:"usdt"}),C(" "+S((e.golds*e.ior).toFixed(2)),1)])])]),I("div",ba,[N(p,{"market-info":e.marketInfo},{default:E((()=>[I("div",fa,[I("span",null,S(a.$t("live.betWith")),1),ha])])),_:2},1032,["market-info"])])])])))),128))])}}});ka.__scopeId="data-v-960501f2";export{ka as default};
