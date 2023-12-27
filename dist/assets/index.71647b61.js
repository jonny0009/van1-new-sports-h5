var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{s as o,d as i,r,o as u,R as p,P as m,F as v,Z as d,c as y,O as g,S as f,B as b,q as h,Y as k,W as x,X as _,E as D,u as I,x as j,y as T,_ as w,M as O,a2 as S}from"./vue.e791136f.js";import{t as P}from"./title-time.dad94643.js";import{t as $}from"./title-recommend.5cf4514a.js";import{c as H}from"./league-icon.ebdbcce0.js";import{_ as L}from"./index.c84062c0.js";import{c as R}from"./index.c3f3df4e.js";import{f as z,r as A}from"./index.35bec789.js";import{aH as C}from"./index.fdb8042d.js";const B={class:"league-champion-item__content"},E={class:"betting-select"},q={class:"betting-select__list"},M={class:"up-betting-name betslipLine"},N={class:"text"},F=(e=>(x("data-v-5f0326cf"),e=e(),_(),e))((()=>m("span",{class:"point"},null,-1))),W={class:"details"},X={class:"container"},Y={class:"item"};var Z=o({props:{gameDetail:{type:Object,default:function(){return{}}}},setup(e){const a=e,t=i(!1),s=i();s.value=a.gameDetail.champion.ratioData.slice(0,9);return(e,l)=>{const n=r("BettingOption"),c=r("van-icon");return u(),p("div",B,[m("div",E,[m("div",q,[(u(!0),p(v,null,d(s.value,((e,a)=>(u(),y(n,{key:a,"market-info":e.marketInfo,class:"betting-option"},{default:g((()=>[m("span",M,[m("span",N,f(e.ratio),1),F]),m("div",W,[m("div",X,[m("div",Y,f(e.marketInfo.vior),1)])])])),_:2},1032,["market-info"])))),128))]),m("div",{class:"betting-select__more",onClick:l[0]||(l[0]=e=>(t.value=!t.value,void(t.value?s.value=a.gameDetail.champion.ratioData:s.value=a.gameDetail.champion.ratioData.slice(0,9))))},[b(f(t.value?e.$t("sport.close"):e.$t("sport.more"))+" ",1),h(c,{class:k(["icon",t.value?"up":""]),name:"play"},null,8,["class"])])])])}}});Z.__scopeId="data-v-5f0326cf";const G={class:"sport-champion-list"},J={class:"champion-title"},K={class:"champion-group-body"},Q={class:"league-champion-item__header"},U={class:"icon"},V={class:"title"};var ee=o({props:{championList:{type:Array,default:function(){return[]}}},setup(e){const a=i(!0),t=e=>{a.value=!e};return(s,l)=>{const n=r("ArrowTitle"),c=D("img");return u(),p("div",G,[m("div",J,[h(n,{class:"mt10 mb10",src:I($),text:s.$t("sport.champion"),onReturnSuccess:t},null,8,["src","text"])]),j(m("div",K,[(u(!0),p(v,null,d(e.championList,((e,a)=>(u(),p("div",{key:a,class:"league-champion-item"},[m("div",Q,[j(m("img",U,null,512),[[c,I(H)]]),m("div",V,f(e.champion.championType),1)]),h(Z,{"game-detail":e},null,8,["game-detail"])])))),128))],512),[[T,a.value]])])}}});ee.__scopeId="data-v-33760ca4";const ae={class:"sport-page"},te={class:"my-scroll__content"},se={class:"betting-sport-nav"},le={key:0,class:"recommend-list"},ne={key:0,class:"recommend-list"},ce={key:0,class:"early-list"},oe=(e=>(x("data-v-70f1305e"),e=e(),_(),e))((()=>m("div",{class:"footerHeight"},null,-1)));var ie=o({setup(e){const o=w(),g=i(o.query.leagueId),f=i(o.params.type),b=i(),k=i();console.log(g.value);const x=i(!0),_=e=>{x.value=!e},D=i(!0),H=e=>{D.value=!e};O((async()=>{q(),B()}));const B=async()=>{if(g.value){const e=i({gameType:f.value,leagueId:g.value,page:1,pageSize:20});W(e.value),Y()}else{const e=i({gameType:f.value,gradeType:1,page:1,pageSize:20});W(e.value);const a=i({gameType:f.value,gradeType:2,page:1,pageSize:20});W(a.value)}},E=i([]),q=async()=>{if(f.value){const e=await z({gameType:f.value})||{};200===e.code&&e.data&&(E.value=e.data)}},M=i([]),N=i([]),F=i(!1),W=async e=>{if(f.value){F.value=!1;const a=await A(e)||{};F.value=!0,200===a.code&&a.data?(M.value=a.data.baseData||[],(a.data.baseData||a.data.baseData.length)&&(b.value=a.data.baseData[0].leagueLogo,k.value=a.data.baseData[0].leagueShortName),g.value?N.value=[]:N.value=a.data.baseData||[]):(M.value=[],N.value=[])}},X=i([]),Y=async()=>{if(g.value){const e=await R({page:1,pageSize:10,leagueIds:g.value})||{};if(200===e.code&&e.data){const o=e.data.gameDetail.map((e=>{const{systemId:o,gameId:i,gidm:r,gameType:u}=e,p=e.champion.playType,m=e.champion.championType,v=e.champion.sw;return e.champion.ratioData=e.champion.ratioData.map((e=>{var d;return e.marketInfo=new C((d=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&c(e,t,a[t]);if(s)for(var t of s(a))n.call(a,t)&&c(e,t,a[t]);return e})({},e),a(d,t({systemId:o,gameId:i,gidm:r,gameType:u,playType:p,sw:v,championType:m})))),e})).sort(((e,a)=>e.ior-a.ior)),e}));X.value=o}}else X.value=[]},Z=e=>{g.value=e.leagueId,B()};return(e,a)=>{const t=r("ImageButton"),s=r("ArrowTitle"),l=r("Loading"),n=r("HomeMatchHandicap"),c=r("HomeEmpty");return u(),p("div",ae,[m("div",te,[m("div",se,[h(L,{text:e.$t("sport.recommend"),active:!g.value,onClick:a[0]||(a[0]=e=>Z({}))},null,8,["text","active"]),(u(!0),p(v,null,d(E.value,((e,a)=>(u(),y(t,{key:a,text:e.leagueNameAbbr,src:e.icon,active:g.value===e.leagueId,onClick:a=>Z(e)},null,8,["text","src","active","onClick"])))),128))])]),M.value.length&&g.value?(u(),p(v,{key:0},[h(s,{class:"mt10 mb10",src:b.value,text:k.value,onReturnSuccess:_},null,8,["src","text"]),x.value?(u(),p(v,{key:0},[F.value?(u(),p(v,{key:1},[M.value.length?(u(),p("div",le,[(u(!0),p(v,null,d(M.value,((e,a)=>j((u(),y(n,{key:a,"send-params":e},null,8,["send-params"])),[[T,x.value]]))),128))])):(u(),y(c,{key:1}))],64)):(u(),y(l,{key:0}))],64)):S("",!0)],64)):S("",!0),g.value?S("",!0):(u(),p(v,{key:1},[h(s,{class:"mt10 mb10",src:I($),text:e.$t("sport.recommend"),onReturnSuccess:_},null,8,["src","text"]),x.value?(u(),p(v,{key:0},[F.value?(u(),p(v,{key:1},[M.value.length?(u(),p("div",ne,[(u(!0),p(v,null,d(M.value,((e,a)=>j((u(),y(n,{key:a,"send-params":e},null,8,["send-params"])),[[T,x.value]]))),128))])):(u(),y(c,{key:1}))],64)):(u(),y(l,{key:0}))],64)):S("",!0)],64)),g.value?S("",!0):(u(),p(v,{key:2},[h(s,{class:"mt10 mb10",src:I(P),text:e.$t("sport.early"),onReturnSuccess:H},null,8,["src","text"]),D.value?(u(),p(v,{key:0},[F.value?(u(),p(v,{key:1},[N.value.length?(u(),p("div",ce,[(u(!0),p(v,null,d(N.value,((e,a)=>j((u(),y(n,{key:a,"send-params":e},null,8,["send-params"])),[[T,D.value]]))),128))])):(u(),y(c,{key:1}))],64)):(u(),y(l,{key:0}))],64)):S("",!0)],64)),X.value.length&&g.value?(u(),y(ee,{key:3,"champion-list":X.value},null,8,["champion-list"])):S("",!0),oe])}}});ie.__scopeId="data-v-70f1305e";export{ie as default};
