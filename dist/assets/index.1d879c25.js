import{s as a,b as e,d as s,r as l,E as t,o as i,R as n,P as o,q as c,O as m,u as v,W as r,$ as d,c as u,x as p,U as g,j as h,F as _,S as f}from"./vue.c62eea93.js";import{r as y}from"./index.aa444852.js";import{s as T,I as b}from"./index.424f43e4.js";import{s as k,a as F}from"./s_hot2.bba3cb3a.js";const j={class:"item"},w={class:"photo"},x=["src"],E={key:0,class:"state"},I={class:"main"},$={class:"main-title"},B={class:"main-team"},S={class:"cell"},L={class:"head"},N={type:4,alt:""},O={class:"score"},C={class:"cell"},R={class:"head"},A={type:5,alt:""},D={class:"score"},H={class:"main-desc"},M={class:"name"},P={class:"hots"},U=["src"];var q=a({props:{item:{type:Object,default:()=>{}}},setup(a){const g=a,h=e((()=>T.state.app.theme)),_=e((()=>"blue"==h.value?k:F)),f=s(b),y=e((()=>g.item?.gameInfo)),q=e((()=>{const a=g.item;if(a.cover)return b+a.cover;const e=a.gameType||"FT",s="RB"!==a.showType?"_mask":"";return b+`FE/common/live/VIDEO_BG_${e}${s}.jpg`})),z=e((()=>g.item.watchTotal.toLocaleString())),G=e((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[g.item.gameType])));return(e,s)=>{const g=l("van-image"),h=l("SvgIcon"),T=t("img");return i(),n("div",j,[o("div",w,[c(g,{src:v(q),fit:"cover"},{error:m((()=>[o("img",{src:f.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,x)])),_:1},8,["src"]),"RB"==a.item.showType?(i(),n("span",E,r(e.$t("live.hotNow")),1)):d("",!0)]),o("div",I,[o("div",$,[v(G)?(i(),u(h,{key:0,name:v(G)},null,8,["name"])):d("",!0),o("strong",null,r(a.item.leagueName),1)]),o("div",B,[o("div",S,[o("div",L,[p(o("img",N,null,512),[[T,a.item.homeLogo]]),o("span",null,r(a.item.homeTeam),1)]),o("div",O,[o("span",null,r(v(y).sc_game_H||v(y).sc_FT_H),1)])]),o("div",C,[o("div",R,[p(o("img",A,null,512),[[T,a.item.awayLogo]]),o("span",null,r(a.item.awayTeam),1)]),o("div",D,[o("span",null,r(v(y).sc_game_A||v(y).sc_FT_C||v(y).sc_FT_A),1)])])]),o("div",H,[o("div",M,r(a.item.leagueShortName),1),o("div",P,[o("img",{src:v(_),alt:""},null,8,U),o("span",null,r(v(z)),1)])])])])}}});q.__scopeId="data-v-c596debe";const z={class:"panel-more"};var G=a({setup(a){const e=g();let t=0;const o=s([]),v=s(!1),r=s(!1),p=async()=>{t++;const a={page:t,pageSize:20,videoType:""},e=await y(a),s=e.data||{};200==e.code?(s.list.forEach((a=>{o.value.push(a)})),v.value=!1,r.value=o.value.length==s.total):r.value=!0};return h((()=>{p()})),(a,s)=>{const t=l("EmptyData"),g=l("van-list");return i(),n("div",z,[r.value&&0===o.value.length?(i(),u(t,{key:0})):d("",!0),c(g,{loading:v.value,"onUpdate:loading":s[0]||(s[0]=a=>v.value=a),finished:r.value,"immediate-check":!1,"finished-text":0==o.value.length?"":a.$t("live.noMore"),onLoad:p},{default:m((()=>[(i(!0),n(_,null,f(o.value,(a=>(i(),u(q,{key:a.gidm,item:a,onClick:s=>(a=>{e.replace(`/match/${a.gidm}/bets`)})(a)},null,8,["item","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});G.__scopeId="data-v-2fe84c60";export{G as default};
