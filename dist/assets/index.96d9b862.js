import{s as a,b as e,d as s,r as t,E as l,o as i,R as n,P as c,q as o,O as m,u as r,W as v,$ as d,c as u,x as p,U as g,j as h,F as _,S as f}from"./vue.c62eea93.js";import{r as y}from"./index.cf20efe0.js";import{_ as T}from"./head.cf2b6d0c.js";import{s as b,I as k,i as j}from"./index.2daa3ef0.js";import{s as F,a as w}from"./s_hot2.bba3cb3a.js";const I={class:"item"},x={class:"photo"},B=["src"],E={key:0,class:"state"},$={key:1,class:"state-right-icon"},A={class:"avatar"},S=["src"],L={key:1,src:T,alt:"anchor avatar"},N={class:"main"},O={class:"main-title"},R={class:"main-team"},C={class:"cell"},D={class:"head"},H={type:4,alt:""},M={class:"score"},P={class:"cell"},U={class:"head"},q={type:5,alt:""},z={class:"score"},G={class:"main-desc"},K={class:"name"},V={class:"hots"},W=["src"];var J=a({props:{item:{type:Object,default:()=>{}}},setup(a){const g=a,h=e((()=>b.state.app.theme)),_=e((()=>"blue"==h.value?F:w)),f=s(k),y=e((()=>g.item?.gameInfo)),T=e((()=>{const a=g.item;if(a.cover)return k+a.cover;const e=a.gameType||"FT",s="RB"!==a.showType?"_mask":"";return k+`FE/common/live/VIDEO_BG_${e}${s}.jpg`})),J=e((()=>g.item.watchTotal.toLocaleString())),Q=e((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[g.item.gameType])));return(e,s)=>{const g=t("van-image"),h=t("SvgIcon"),b=l("img");return i(),n("div",I,[c("div",x,[o(g,{src:r(T),fit:"cover"},{error:m((()=>[c("img",{src:f.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,B)])),_:1},8,["src"]),"RB"==a.item.showType?(i(),n("span",E,v(e.$t("live.hotNow")),1)):d("",!0),"RB"==a.item.showType&&(a.item.anchorId||a.item.nickname||a.item.anchorAvatar)?(i(),n("div",$,[c("div",A,[a.item.anchorAvatar?(i(),n("img",{key:0,src:r(j)(a.item.anchorAvatar),alt:"anchor avatar"},null,8,S)):(i(),n("img",L))]),c("span",null,v(a.item.nickname),1)])):d("",!0)]),c("div",N,[c("div",O,[r(Q)?(i(),u(h,{key:0,name:r(Q)},null,8,["name"])):d("",!0),c("strong",null,v(a.item.leagueName),1)]),c("div",R,[c("div",C,[c("div",D,[p(c("img",H,null,512),[[b,a.item.homeLogo]]),c("span",null,v(a.item.homeTeam),1)]),c("div",M,[c("span",null,v(r(y).sc_game_H||r(y).sc_FT_H),1)])]),c("div",P,[c("div",U,[p(c("img",q,null,512),[[b,a.item.awayLogo]]),c("span",null,v(a.item.awayTeam),1)]),c("div",z,[c("span",null,v(r(y).sc_game_A||r(y).sc_FT_C||r(y).sc_FT_A),1)])])]),c("div",G,[c("div",K,v(a.item.leagueShortName),1),c("div",V,[c("img",{src:r(_),alt:""},null,8,W),c("span",null,v(r(J)),1)])])])])}}});J.__scopeId="data-v-efc84f84";const Q={class:"panel-more"};var X=a({setup(a){const e=g();let l=0;const c=s([]),r=s(!1),v=s(!1),p=async()=>{l++;const a={page:l,pageSize:20,videoType:""},e=await y(a),s=e.data||{};200==e.code?(s.list.forEach((a=>{c.value.push(a)})),r.value=!1,v.value=c.value.length==s.total):v.value=!0};return h((()=>{p()})),(a,s)=>{const l=t("EmptyData"),g=t("van-list");return i(),n("div",Q,[v.value&&0===c.value.length?(i(),u(l,{key:0})):d("",!0),o(g,{loading:r.value,"onUpdate:loading":s[0]||(s[0]=a=>r.value=a),finished:v.value,"immediate-check":!1,"finished-text":0==c.value.length?"":a.$t("live.noMore"),onLoad:p},{default:m((()=>[(i(!0),n(_,null,f(c.value,(a=>(i(),u(J,{key:a.gidm,item:a,onClick:s=>(a=>{e.replace(`/match/${a.gidm}/bets`)})(a)},null,8,["item","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});X.__scopeId="data-v-2fe84c60";export{X as default};
