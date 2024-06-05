import{s as a,b as e,d as s,r as t,E as l,o as i,R as n,P as c,q as o,O as m,u as r,W as v,$ as d,c as u,x as p,U as h,j as g,F as _,S as f}from"./vue.c62eea93.js";import{r as y}from"./index.3fa57a75.js";import{_ as T}from"./head.cf2b6d0c.js";import{s as b,I as k,i as I}from"./index.18c53e21.js";import{s as j,a as F}from"./s_hot2.bba3cb3a.js";const w={class:"item"},x={class:"photo"},B=["src"],E={key:0,class:"state"},A={key:1,class:"state-right-icon"},L={class:"avatar"},R=["src"],S={key:1,src:T,alt:"anchor avatar"},$={class:"main"},M={class:"main-title"},N={class:"main-team"},O={class:"cell"},C={class:"head"},D={type:4,alt:""},P={class:"score"},U={class:"cell"},q={class:"head"},H={type:5,alt:""},z={class:"score"},G={class:"main-desc"},K={class:"name"},V={class:"hots"},W=["src"];var J=a({props:{item:{type:Object,default:()=>{}}},setup(a){const h=a,g=e((()=>b.state.app.theme)),_=e((()=>"blue"==g.value?j:F)),f=s(k),y=e((()=>h.item?.gameInfo)),T=e((()=>{const a=h.item;if(a.cover)return k+a.cover;const e=a.gameType||"FT",s="RB"!==a.showType?"_mask":"";return k+`FE/common/live/VIDEO_BG_${e}${s}.jpg`})),J=e((()=>h.item.watchTotal.toLocaleString())),Q=e((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[h.item.gameType])));return(e,s)=>{const h=t("van-image"),g=t("SvgIcon"),b=l("img");return i(),n("div",w,[c("div",x,[o(h,{src:r(T),fit:"cover"},{error:m((()=>[c("img",{src:f.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,B)])),_:1},8,["src"]),"RB"==a.item.showType?(i(),n("span",E,v(e.$t("live.hotNow")),1)):d("",!0),"RB"==a.item.showType&&(a.item.anchorId||a.item.nickname||a.item.anchorAvatar)?(i(),n("div",A,[c("div",L,[a.item.anchorAvatar?(i(),n("img",{key:0,src:r(I)(a.item.anchorAvatar),alt:"anchor avatar"},null,8,R)):(i(),n("img",S))]),c("span",null,v(a.item.nickname),1)])):d("",!0)]),c("div",$,[c("div",M,[r(Q)?(i(),u(g,{key:0,name:r(Q)},null,8,["name"])):d("",!0),c("strong",null,v(a.item.leagueName),1)]),c("div",N,[c("div",O,[c("div",C,[p(c("img",D,null,512),[[b,a.item.homeLogo]]),c("span",null,v(a.item.homeTeam),1)]),c("div",P,[c("span",null,v(r(y).sc_game_H||r(y).sc_FT_H),1)])]),c("div",U,[c("div",q,[p(c("img",H,null,512),[[b,a.item.awayLogo]]),c("span",null,v(a.item.awayTeam),1)]),c("div",z,[c("span",null,v(r(y).sc_game_A||r(y).sc_FT_C||r(y).sc_FT_A),1)])])]),c("div",G,[c("div",K,v(a.item.leagueShortName),1),c("div",V,[c("img",{src:r(_),alt:""},null,8,W),c("span",null,v(r(J)),1)])])])])}}});J.__scopeId="data-v-efc84f84";const Q={class:"panel-more"};var X=a({setup(a){const l=h();let c=0;const v=s([]),p=s(!1),T=s(!1),k=e((()=>b.state?.match?.liveRoomPlayingUrl)),I=e((()=>k.value?v.value.filter((a=>a.m3u8!==k.value)):v.value)),j=async()=>{c++;const a={page:c,pageSize:20},e=await y(a),s=e.data||{};200==e.code?(s.list.forEach((a=>{v.value.push(a)})),p.value=!1,T.value=v.value.length==s.total):T.value=!0};return g((()=>{j()})),(a,e)=>{const s=t("EmptyData"),c=t("van-list");return i(),n("div",Q,[T.value&&0===r(I).length?(i(),u(s,{key:0})):d("",!0),o(c,{loading:p.value,"onUpdate:loading":e[0]||(e[0]=a=>p.value=a),finished:T.value,"immediate-check":!1,"finished-text":0==r(I).length?"":a.$t("live.noMore"),onLoad:j},{default:m((()=>[(i(!0),n(_,null,f(r(I),(a=>(i(),u(J,{key:a.gidm,item:a,onClick:e=>(a=>{const e={};a.anchorId&&(e.anchorId=a.anchorId),a.m3u8&&(e.m3u8=a.m3u8),l.push({name:"MatchDetail",params:{id:a.gidm},query:e}),b.dispatch("app/setMatchLiveIndex",1)})(a)},null,8,["item","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});X.__scopeId="data-v-120b2f98";export{X as default};
