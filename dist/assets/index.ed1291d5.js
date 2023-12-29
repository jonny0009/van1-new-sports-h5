import{_ as e}from"./s_hot.d5e4a099.js";import{u as a,I as l,k as s,g as i}from"./index.04da29f2.js";import{u as t,a as n}from"./index.7b08896e.js";import{s as o,b as m,r as v,E as c,o as d,R as u,P as p,q as r,u as g,S as y,a2 as b,c as h,x as _,W as T,X as f,e as k,d as B,j as w,F as N,Z as R,Y as j,O as x}from"./vue.93da156d.js";import"./getScore.c880ebd7.js";const F={class:"item"},I={class:"item-photo"},H={key:0,class:"state"},L={class:"footer"},M=["innerHTML"],S={key:1},C={key:1,class:"mask-reseve"},E={class:"item-title"},K={class:"item-team"},O={class:"cell"},$={class:"head"},D={type:2,alt:""},P={class:"score"},A={class:"cell"},q={class:"head"},z={type:2,alt:""},U={class:"score"},W={class:"item-desc"},X={class:"name"},Y={class:"hots"},Z=(e=>(T("data-v-b7b6e1e2"),e=e(),f(),e))((()=>p("img",{src:e,alt:""},null,-1)));var G=o({props:{item:{type:Object,default:()=>{}}},setup(e){const i=e,{t:n}=a(),o=t(),T=m((()=>{var e;return null==(e=i.item)?void 0:e.gameInfo})),f=m((()=>{const e=i.item;return e.anchorId?l+e.cover:"BK"==e.gameType?l+"FE/common/live/img_video_bg_BK.jpg":l+"FE/common/live/img_video_bg_FT.jpg"})),k=m((()=>{const e=i.item.watchTotal.toLocaleString();return"RB"==i.item.showType?n("live.xLooks",{num:e}):n("live.xReserve",{num:e})})),B=m((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[i.item.gameType])));return(a,l)=>{const i=v("van-image"),t=v("SvgIcon"),n=c("img");return d(),u("div",F,[p("div",I,[r(i,{src:g(f),fit:"cover"},null,8,["src"]),"RB"==e.item.showType?(d(),u("div",H,y(a.$t("live.hotNow")),1)):b("",!0),p("div",L,["RB"==e.item.showType?(d(),u("span",{key:0,innerHTML:g(o).showRBTime(e.item)},null,8,M)):(d(),u("span",S,y(g(s)(e.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=e.item.showType?(d(),u("div",C,[p("span",null,y(a.$t("live.xHas",{num:g(k)})),1),p("span",null,y(a.$t("live.playNow")),1)])):b("",!0)]),p("div",E,[g(B)?(d(),h(t,{key:0,name:g(B)},null,8,["name"])):b("",!0),p("strong",null,y(e.item.leagueName),1)]),p("div",K,[p("div",O,[p("div",$,[_(p("img",D,null,512),[[n,e.item.homeLogo]]),p("span",null,y(e.item.homeTeam),1)]),p("div",P,[p("span",null,y(g(T).sc_game_H||g(T).sc_FT_H),1)])]),p("div",A,[p("div",q,[_(p("img",z,null,512),[[n,e.item.awayLogo]]),p("span",null,y(e.item.awayTeam),1)]),p("div",U,[p("span",null,y(g(T).sc_game_A||g(T).sc_FT_C||g(T).sc_FT_A),1)])])]),p("div",W,[p("div",X,y(e.item.nickname||e.item.leagueShortName),1),p("div",Y,[Z,p("span",null,y(g(k)),1)])])])}}});G.__scopeId="data-v-b7b6e1e2";const J={class:"live-page"},Q={class:"navbar"},V=["onClick"],ee={class:"wrapper"},ae={key:0,class:"no-data"};var le=o({setup(e){const{t:l}=a(),s=k([{type:"RB",name:l("live.hot"),iconName:"live-hot"},{type:"FT",name:l("live.football"),iconName:"live-football"},{type:"BK",name:l("live.basketball"),iconName:"live-basketball"},{type:"TN",name:l("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",name:l("live.badminton"),iconName:"live-badminton"}]),t=B("RB");let o=0;const m=B([]),c=B(!1),h=B(!1),_=async()=>{o++;const e={page:o,pageSize:20};"RB"==t.value?e.rbType=1:(e.videoType=2,e.gameType=t.value);const a=await n(e),l=a.data;200==a.code?(l.list.forEach((e=>{m.value.push(e)})),c.value=!1,h.value=m.value.length==l.total):h.value=!0};return w((()=>{})),(e,a)=>{const n=v("SvgIcon"),T=v("EmptyIcon"),f=v("van-list");return d(),u("div",J,[p("div",Q,[(d(!0),u(N,null,R(g(s),((e,a)=>(d(),u("div",{class:j(["navbar-item",{active:t.value===e.type}]),key:a,onClick:a=>(e=>{t.value=e.type,h.value=!1,c.value=!0,m.value=[],o=0,_()})(e)},[r(n,{name:e.iconName},null,8,["name"]),p("span",null,y(e.name),1)],10,V)))),128))]),p("div",ee,[h.value&&0===m.value.length?(d(),u("div",ae,[r(T)])):b("",!0),r(f,{loading:c.value,"onUpdate:loading":a[0]||(a[0]=e=>c.value=e),finished:h.value,"finished-text":g(l)("live.noMore"),onLoad:_},{default:x((()=>[(d(!0),u(N,null,R(m.value,(e=>(d(),u("div",{class:"live-item",key:e.gidm},[r(G,{item:e,onClick:a=>(e=>{i.push(`/live/${e.gidm}`)})(e)},null,8,["item","onClick"])])))),128))])),_:1},8,["loading","finished","finished-text"])])])}}});le.__scopeId="data-v-34d2e6da";export{le as default};
