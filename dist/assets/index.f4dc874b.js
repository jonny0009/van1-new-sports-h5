import{_ as e,a}from"./index.91741874.js";import{I as s,r as l}from"./index.968fe829.js";import{D as t}from"./dayjs.min.8ad1d72f.js";import{d as i,b as n,r as m,N as o,o as c,u as v,q as d,m as r,p,v as u,O as g,y,c as _,L as f,B as h,C as T,J as b,a as B,f as k,F,E as N,D as j}from"./vue.3b4f9705.js";const w=t;function D(e,a="YYYY-MM-DD HH:mm:ss"){return w(e).format(a)}const H={class:"item"},C={class:"item-photo"},I=["src"],L={key:0,class:"state"},R={class:"footer"},S={key:0},E={key:1},K={class:"item-title"},M={class:"item-team"},x={class:"cell"},O={class:"head"},Y={type:2,alt:""},$={class:"score"},A={class:"cell"},P={class:"head"},q={type:2,alt:""},z={class:"score"},J={class:"item-desc"},U={class:"name"},V={class:"hots"},G=(e=>(h("data-v-cdd5096c"),e=e(),T(),e))((()=>d("img",{src:e,alt:""},null,-1)));var Q=i({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,l=n((()=>{var e;return null==(e=a.item)?void 0:e.gameInfo})),t=n((()=>{const e=a.item;return s+{FT:"FE/common/live/img_video_bg_FT.jpg",BK:"FE/common/live/img_video_bg_BK.jpg",OP_VB:"FE/common/live/img_video_bg_BK.jpg"}[e.gameType]})),i=n((()=>{const e=a.item;return"RB"==e.showType?`${e.watchTotal.toLocaleString()}人观看`:`${e.watchTotal.toLocaleString()}人预约`}));return(a,s)=>{const n=m("van-image"),h=m("SvgIcon"),T=o("img");return c(),v("div",H,[d("div",C,[r(n,{src:e.item.cover||u(t)},{error:p((()=>[d("img",{src:u(t),alt:""},null,8,I)])),_:1},8,["src"]),"RB"==e.item.showType?(c(),v("div",L,"热播中")):g("",!0),d("div",R,["RB"==e.item.showType?(c(),v("span",S,y(u(D)(e.item.gameDate,"HH:mm")),1)):(c(),v("span",E,y(u(D)(e.item.gameDate,"MM-DD HH:mm")),1))])]),d("div",K,["FT"==e.item.gameType?(c(),_(h,{key:0,name:"live-football"})):g("",!0),"BK"==e.item.gameType?(c(),_(h,{key:1,name:"live-basketball"})):g("",!0),d("span",null,y(e.item.leagueName),1)]),d("div",M,[d("div",x,[d("div",O,[f(d("img",Y,null,512),[[T,e.item.homeLogo]]),d("span",null,y(e.item.homeTeam),1)]),d("div",$,[d("span",null,y(u(l).sc_game_H||u(l).sc_FT_H),1)])]),d("div",A,[d("div",P,[f(d("img",q,null,512),[[T,e.item.awayLogo]]),d("span",null,y(e.item.awayTeam),1)]),d("div",z,[d("span",null,y(u(l).sc_game_A||u(l).sc_FT_C||u(l).sc_FT_A),1)])])]),d("div",J,[d("div",U,y(e.item.leagueShortName),1),d("div",V,[G,d("span",null,y(u(i)),1)])])])}}});Q.__scopeId="data-v-cdd5096c";const W={class:"live-page"},X={class:"navbar"},Z=["onClick"],ee={class:"wrapper"};var ae=i({setup(e){const s=b([{type:"RB",name:"热播",iconName:"live-hot"},{type:"FT",name:"足球",iconName:"live-football"},{type:"BK",name:"篮球",iconName:"live-basketball"},{type:"TN",name:"网球",iconName:"live-tennisball"},{type:"OP_BM",name:"羽毛球",iconName:"live-badminton"}]),t=B("RB");let i=0;const n=B([]),o=B(!1),g=B(!1),_=async()=>{i++;const e={page:i,pageSize:20};"RB"==t.value?e.videoType=2:e.gameType=t.value;const s=await a(e),l=s.data;200==s.code&&(l.list.forEach((e=>{n.value.push(e)})),o.value=!1,g.value=n.value.length==l.total)};return k((()=>{})),(e,a)=>{const f=m("SvgIcon"),h=m("van-list");return c(),v("div",W,[d("div",X,[(c(!0),v(F,null,N(u(s),((e,a)=>(c(),v("div",{class:j(["navbar-item",{active:t.value===e.type}]),key:a,onClick:a=>(e=>{t.value=e.type,g.value=!1,o.value=!0,n.value=[],i=0,_()})(e)},[r(f,{name:e.iconName},null,8,["name"]),d("span",null,y(e.name),1)],10,Z)))),128))]),d("div",ee,[r(h,{loading:o.value,"onUpdate:loading":a[0]||(a[0]=e=>o.value=e),finished:g.value,"finished-text":"没有更多了",onLoad:_},{default:p((()=>[(c(!0),v(F,null,N(n.value,(e=>(c(),v("div",{class:"live-item",key:e.gidm},[r(Q,{item:e,onClick:a=>(e=>{l.push(`/live/${e.gidm}`)})(e)},null,8,["item","onClick"])])))),128))])),_:1},8,["loading","finished"])])])}}});ae.__scopeId="data-v-61a43947";export{ae as default};
