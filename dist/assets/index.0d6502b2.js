import{_ as e,a}from"./index.3c1626d8.js";import{I as s,r as l}from"./index.915b0e79.js";import{D as t}from"./dayjs.min.1e32a462.js";import{d as i,g as n,r as m,v as o,o as c,h as v,e as d,j as r,w as p,u,y as g,t as y,c as _,x as h,p as T,l as f,z as b,b as k,M as B,F,q as j,m as w}from"./vue.d1998281.js";const N=t;function H(e,a="YYYY-MM-DD HH:mm:ss"){return N(e).format(a)}const D={class:"item"},I={class:"item-photo"},M=["src"],R={key:0,class:"state"},S={class:"footer"},x={key:0},C={key:1},K={class:"item-title"},L={class:"item-team"},E={class:"cell"},Y={class:"head"},O={type:2,alt:""},$={class:"score"},z={class:"cell"},A={class:"head"},P={type:2,alt:""},q={class:"score"},U={class:"item-desc"},V={class:"name"},G={class:"hots"},J=(e=>(T("data-v-cdd5096c"),e=e(),f(),e))((()=>d("img",{src:e,alt:""},null,-1)));var Q=i({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,l=n((()=>{var e;return null==(e=a.item)?void 0:e.gameInfo})),t=n((()=>{const e=a.item;return s+{FT:"FE/common/live/img_video_bg_FT.jpg",BK:"FE/common/live/img_video_bg_BK.jpg",OP_VB:"FE/common/live/img_video_bg_BK.jpg"}[e.gameType]})),i=n((()=>{const e=a.item;return"RB"==e.showType?`${e.watchTotal.toLocaleString()}人观看`:`${e.watchTotal.toLocaleString()}人预约`}));return(a,s)=>{const n=m("van-image"),T=m("SvgIcon"),f=o("img");return c(),v("div",D,[d("div",I,[r(n,{src:e.item.cover||u(t)},{error:p((()=>[d("img",{src:u(t),alt:""},null,8,M)])),_:1},8,["src"]),"RB"==e.item.showType?(c(),v("div",R,"热播中")):g("",!0),d("div",S,["RB"==e.item.showType?(c(),v("span",x,y(u(H)(e.item.gameDate,"HH:mm")),1)):(c(),v("span",C,y(u(H)(e.item.gameDate,"MM-DD HH:mm")),1))])]),d("div",K,["FT"==e.item.gameType?(c(),_(T,{key:0,name:"live-football"})):g("",!0),"BK"==e.item.gameType?(c(),_(T,{key:1,name:"live-basketball"})):g("",!0),d("span",null,y(e.item.leagueName),1)]),d("div",L,[d("div",E,[d("div",Y,[h(d("img",O,null,512),[[f,e.item.homeLogo]]),d("span",null,y(e.item.homeTeam),1)]),d("div",$,[d("span",null,y(u(l).sc_game_H||u(l).sc_FT_H),1)])]),d("div",z,[d("div",A,[h(d("img",P,null,512),[[f,e.item.awayLogo]]),d("span",null,y(e.item.awayTeam),1)]),d("div",q,[d("span",null,y(u(l).sc_game_A||u(l).sc_FT_C||u(l).sc_FT_A),1)])])]),d("div",U,[d("div",V,y(e.item.leagueShortName),1),d("div",G,[J,d("span",null,y(u(i)),1)])])])}}});Q.__scopeId="data-v-cdd5096c";const W={class:"live-page"},X={class:"navbar"},Z=["onClick"],ee={class:"wrapper"};var ae=i({setup(e){const s=b([{type:"RB",name:"热播",iconName:"live-hot"},{type:"FT",name:"足球",iconName:"live-football"},{type:"BK",name:"篮球",iconName:"live-basketball"},{type:"TN",name:"网球",iconName:"live-tennisball"},{type:"OP_BM",name:"羽毛球",iconName:"live-badminton"}]),t=k("RB");let i=0;const n=k([]),o=k(!1),g=k(!1),_=async()=>{i++;const e={page:i,pageSize:20};"RB"==t.value?e.videoType=2:e.gameType=t.value;const s=await a(e),l=s.data;200==s.code&&(l.list.forEach((e=>{n.value.push(e)})),o.value=!1,g.value=n.value.length==l.total)};return B((()=>{})),(e,a)=>{const h=m("SvgIcon"),T=m("van-list");return c(),v("div",W,[d("div",X,[(c(!0),v(F,null,j(u(s),((e,a)=>(c(),v("div",{class:w(["navbar-item",{active:t.value===e.type}]),key:a,onClick:a=>(e=>{t.value=e.type,g.value=!1,o.value=!0,n.value=[],i=0,_()})(e)},[r(h,{name:e.iconName},null,8,["name"]),d("span",null,y(e.name),1)],10,Z)))),128))]),d("div",ee,[r(T,{loading:o.value,"onUpdate:loading":a[0]||(a[0]=e=>o.value=e),finished:g.value,"finished-text":"没有更多了",onLoad:_},{default:p((()=>[(c(!0),v(F,null,j(n.value,(e=>(c(),v("div",{class:"live-item",key:e.gidm},[r(Q,{item:e,onClick:a=>(e=>{l.push(`/live/${e.gidm}`)})(e)},null,8,["item","onClick"])])))),128))])),_:1},8,["loading","finished"])])])}}});ae.__scopeId="data-v-61a43947";export{ae as default};
