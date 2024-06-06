import{d as a,g as e,f as s,r as t,K as l,o as i,R as n,P as c,m as o,O as m,u as r,W as v,$ as d,c as u,C as p,U as h,a as g,F as _,S as f}from"./vue.2cb7924b.js";import{r as y}from"./index.b5c9ce14.js";import{_ as b}from"./head.cf2b6d0c.js";import{s as T,I as k,i as I}from"./index.744421fa.js";import{s as F,a as j}from"./s_hot2.bba3cb3a.js";const w={class:"item"},x={class:"photo"},B=["src"],A={key:0,class:"state"},E={key:1,class:"state-right-icon"},L={class:"avatar"},R=["src"],S={key:1,src:b,alt:"anchor avatar"},$={class:"main"},C={class:"main-title"},M={class:"main-team"},N={class:"cell"},O={class:"head"},D={type:4,alt:""},P={class:"score"},U={class:"cell"},H={class:"head"},K={type:5,alt:""},q={class:"score"},z={class:"main-desc"},G={class:"name"},V={class:"hots"},W=["src"];var J=a({props:{item:{type:Object,default:()=>{}}},setup(a){const h=a,g=e((()=>T.state.app.theme)),_=e((()=>"blue"==g.value?F:j)),f=s(k),y=e((()=>h.item?.gameInfo)),b=e((()=>{const a=h.item;if(a.cover)return k+a.cover;const e=a.gameType||"FT",s="RB"!==a.showType?"_mask":"";return k+`FE/common/live/VIDEO_BG_${e}${s}.jpg`})),J=e((()=>h.item.watchTotal.toLocaleString())),Q=e((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[h.item.gameType])));return(e,s)=>{const h=t("van-image"),g=t("SvgIcon"),T=l("img");return i(),n("div",w,[c("div",x,[o(h,{src:r(b),fit:"cover"},{error:m((()=>[c("img",{src:f.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,B)])),_:1},8,["src"]),"RB"==a.item.showType?(i(),n("span",A,v(e.$t("live.hotNow")),1)):d("",!0),"RB"==a.item.showType&&(a.item.anchorId||a.item.nickname||a.item.anchorAvatar)?(i(),n("div",E,[c("div",L,[a.item.anchorAvatar?(i(),n("img",{key:0,src:r(I)(a.item.anchorAvatar),alt:"anchor avatar"},null,8,R)):(i(),n("img",S))]),c("span",null,v(a.item.nickname),1)])):d("",!0)]),c("div",$,[c("div",C,[r(Q)?(i(),u(g,{key:0,name:r(Q)},null,8,["name"])):d("",!0),c("strong",null,v(a.item.leagueName),1)]),c("div",M,[c("div",N,[c("div",O,[p(c("img",D,null,512),[[T,a.item.homeLogo]]),c("span",null,v(a.item.homeTeam),1)]),c("div",P,[c("span",null,v(r(y).sc_game_H||r(y).sc_FT_H),1)])]),c("div",U,[c("div",H,[p(c("img",K,null,512),[[T,a.item.awayLogo]]),c("span",null,v(a.item.awayTeam),1)]),c("div",q,[c("span",null,v(r(y).sc_game_A||r(y).sc_FT_C||r(y).sc_FT_A),1)])])]),c("div",z,[c("div",G,v(a.item.leagueShortName),1),c("div",V,[c("img",{src:r(_),alt:""},null,8,W),c("span",null,v(r(J)),1)])])])])}}});J.__scopeId="data-v-efc84f84";const Q={class:"panel-more"};var X=a({setup(a){const l=h();let c=0;const v=s([]),p=s(!1),b=s(!1),k=e((()=>T.state?.match?.liveRoomPlayingUrl)),I=e((()=>k.value?v.value.filter((a=>a.m3u8!==k.value)):v.value)),F=async()=>{c++;const a={page:c,pageSize:20},e=await y(a),s=e.data||{};200==e.code?(s.list.forEach((a=>{v.value.push(a)})),p.value=!1,b.value=v.value.length==s.total):b.value=!0};return g((()=>{F()})),(a,e)=>{const s=t("EmptyData"),c=t("van-list");return i(),n("div",Q,[b.value&&0===r(I).length?(i(),u(s,{key:0})):d("",!0),o(c,{loading:p.value,"onUpdate:loading":e[0]||(e[0]=a=>p.value=a),finished:b.value,"immediate-check":!1,"finished-text":0==r(I).length?"":a.$t("live.noMore"),onLoad:F},{default:m((()=>[(i(!0),n(_,null,f(r(I),(a=>(i(),u(J,{key:a.gidm,item:a,onClick:e=>(a=>{const e={};a.anchorId&&(e.anchorId=a.anchorId),a.m3u8&&(e.m3u8=a.m3u8),l.push({name:"MatchDetail",params:{id:a.gidm},query:e}),T.dispatch("app/setMatchLiveIndex",1)})(a)},null,8,["item","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});X.__scopeId="data-v-120b2f98";export{X as default};
