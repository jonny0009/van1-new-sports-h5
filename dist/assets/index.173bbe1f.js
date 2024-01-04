import{_ as e}from"./s_hot.8511334b.js";import{u as a,I as l,k as s,g as i}from"./index.ffa2eba3.js";import{u as t,a as n}from"./index.9602f403.js";import{s as o,d as m,b as v,r as c,E as d,o as u,R as r,P as p,q as g,O as y,u as _,S as b,a2 as f,c as h,x as T,W as k,X as B,e as w,j as N,F,Z as j,Y as R}from"./vue.93da156d.js";import"./getScore.fbf3c972.js";const x={class:"item"},I={class:"item-photo"},H=["src"],L={key:0,class:"state"},M={class:"footer"},S=["innerHTML"],E={key:1},C={key:1,class:"mask-reseve"},K={class:"item-title"},O={class:"item-team"},$={class:"cell"},D={class:"head"},P={type:2,alt:""},A={class:"score"},q={class:"cell"},z={class:"head"},U={type:2,alt:""},W={class:"score"},X={class:"item-desc"},Y={class:"name"},Z={class:"hots"},G=(e=>(k("data-v-9fcdc8f0"),e=e(),B(),e))((()=>p("img",{src:e,alt:""},null,-1)));var J=o({props:{item:{type:Object,default:()=>{}}},setup(e){const i=e,{t:n}=a(),o=m(l),k=t(),B=v((()=>{var e;return null==(e=i.item)?void 0:e.gameInfo})),w=v((()=>{const e=i.item;return e.anchorId?l+e.cover:"BK"==e.gameType?l+"FE/common/live/img_video_bg_BK.jpg":l+"FE/common/live/img_video_bg_FT.jpg"})),N=v((()=>{const e=i.item.watchTotal.toLocaleString();return"RB"==i.item.showType?n("live.xLooks",{num:e}):n("live.xReserve",{num:e})})),F=v((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[i.item.gameType])));return(a,l)=>{const i=c("van-image"),t=c("SvgIcon"),n=d("img");return u(),r("div",x,[p("div",I,[g(i,{src:_(w),fit:"cover"},{error:y((()=>[p("img",{src:o.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,H)])),_:1},8,["src"]),"RB"==e.item.showType?(u(),r("div",L,b(a.$t("live.hotNow")),1)):f("",!0),p("div",M,["RB"==e.item.showType?(u(),r("span",{key:0,innerHTML:_(k).showRBTime(e.item)},null,8,S)):(u(),r("span",E,b(_(s)(e.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=e.item.showType?(u(),r("div",C,[p("span",null,b(a.$t("live.xHas",{num:_(N)})),1),p("span",null,b(a.$t("live.playNow")),1)])):f("",!0)]),p("div",K,[_(F)?(u(),h(t,{key:0,name:_(F)},null,8,["name"])):f("",!0),p("strong",null,b(e.item.leagueName),1)]),p("div",O,[p("div",$,[p("div",D,[T(p("img",P,null,512),[[n,e.item.homeLogo]]),p("span",null,b(e.item.homeTeam),1)]),p("div",A,[p("span",null,b(_(B).sc_game_H||_(B).sc_FT_H),1)])]),p("div",q,[p("div",z,[T(p("img",U,null,512),[[n,e.item.awayLogo]]),p("span",null,b(e.item.awayTeam),1)]),p("div",W,[p("span",null,b(_(B).sc_game_A||_(B).sc_FT_C||_(B).sc_FT_A),1)])])]),p("div",X,[p("div",Y,b(e.item.nickname||e.item.leagueShortName),1),p("div",Z,[G,p("span",null,b(_(N)),1)])])])}}});J.__scopeId="data-v-9fcdc8f0";const Q={class:"live-page"},V={class:"navbar"},ee=["onClick"],ae={class:"wrapper"},le={key:0,class:"no-data"};var se=o({setup(e){const{t:l}=a(),s=w([{type:"RB",name:l("live.hot"),iconName:"live-hot"},{type:"FT",name:l("live.football"),iconName:"live-football"},{type:"BK",name:l("live.basketball"),iconName:"live-basketball"},{type:"TN",name:l("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",name:l("live.badminton"),iconName:"live-badminton"}]),t=m("RB");let o=0;const v=m([]),d=m(!1),h=m(!1),T=async()=>{o++;const e={page:o,pageSize:20};"RB"==t.value?e.rbType=1:e.gameType=t.value;const a=await n(e),l=a.data;200==a.code?(l.list.forEach((e=>{v.value.push(e)})),d.value=!1,h.value=v.value.length==l.total):h.value=!0};return N((()=>{})),(e,a)=>{const n=c("SvgIcon"),m=c("EmptyIcon"),k=c("van-list");return u(),r("div",Q,[p("div",V,[(u(!0),r(F,null,j(_(s),((e,a)=>(u(),r("div",{class:R(["navbar-item",{active:t.value===e.type}]),key:a,onClick:a=>(e=>{t.value=e.type,h.value=!1,d.value=!0,v.value=[],o=0,T()})(e)},[g(n,{name:e.iconName},null,8,["name"]),p("span",null,b(e.name),1)],10,ee)))),128))]),p("div",ae,[h.value&&0===v.value.length?(u(),r("div",le,[g(m)])):f("",!0),g(k,{loading:d.value,"onUpdate:loading":a[0]||(a[0]=e=>d.value=e),finished:h.value,"finished-text":_(l)("live.noMore"),onLoad:T},{default:y((()=>[(u(!0),r(F,null,j(v.value,(e=>(u(),r("div",{class:"live-item",key:e.gidm},[g(J,{item:e,onClick:a=>(e=>{i.push(`/broadcast/${e.gidm}`)})(e)},null,8,["item","onClick"])])))),128))])),_:1},8,["loading","finished","finished-text"])])])}}});se.__scopeId="data-v-210d7e60";export{se as default};
