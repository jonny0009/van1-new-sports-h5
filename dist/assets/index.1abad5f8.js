import{s as a,b as e,d as s,r as l,E as t,o as i,S as o,P as n,q as m,O as c,u as d,V as v,$ as r,c as u,x as g,R as p,j as _,F as h,_ as b}from"./vue.7833d4f2.js";import{r as f}from"./index.e5996dbe.js";import{s as y,I as T}from"./index.4e00687b.js";import{s as F,a as j}from"./s_hot2.bba3cb3a.js";const k={class:"item"},w={class:"photo"},x=["src"],E={key:0,class:"state"},I={class:"main"},B={class:"main-title"},S={class:"main-team"},L={class:"cell"},N={class:"head"},$={type:4,alt:""},C={class:"score"},K={class:"cell"},O={class:"head"},A={type:5,alt:""},H={class:"score"},M={class:"main-desc"},P={class:"name"},R={class:"hots"},q=["src"];var z=a({props:{item:{type:Object,default:()=>{}}},setup(a){const p=a,_=e((()=>y.state.app.theme)),h=e((()=>"blue"==_.value?F:j)),b=s(T),f=e((()=>{var a;return null==(a=p.item)?void 0:a.gameInfo})),z=e((()=>{const a=p.item;return a.anchorId?T+a.cover:"BK"==a.gameType?T+"FE/common/live/img_video_bg_BK.jpg":T+"FE/common/live/img_video_bg_FT.jpg"})),D=e((()=>p.item.watchTotal.toLocaleString())),U=e((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[p.item.gameType])));return(e,s)=>{const p=l("van-image"),_=l("SvgIcon"),y=t("img");return i(),o("div",k,[n("div",w,[m(p,{src:d(z),fit:"cover"},{error:c((()=>[n("img",{src:b.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,x)])),_:1},8,["src"]),"RB"==a.item.showType?(i(),o("span",E,v(e.$t("live.hotNow")),1)):r("",!0)]),n("div",I,[n("div",B,[d(U)?(i(),u(_,{key:0,name:d(U)},null,8,["name"])):r("",!0),n("strong",null,v(a.item.leagueName),1)]),n("div",S,[n("div",L,[n("div",N,[g(n("img",$,null,512),[[y,a.item.homeLogo]]),n("span",null,v(a.item.homeTeam),1)]),n("div",C,[n("span",null,v(d(f).sc_game_H||d(f).sc_FT_H),1)])]),n("div",K,[n("div",O,[g(n("img",A,null,512),[[y,a.item.awayLogo]]),n("span",null,v(a.item.awayTeam),1)]),n("div",H,[n("span",null,v(d(f).sc_game_A||d(f).sc_FT_C||d(f).sc_FT_A),1)])])]),n("div",M,[n("div",P,v(a.item.leagueShortName),1),n("div",R,[n("img",{src:d(h),alt:""},null,8,q),n("span",null,v(d(D)),1)])])])])}}});z.__scopeId="data-v-1eb85d34";const D={class:"panel-more"};var U=a({setup(a){const e=p();let t=0;const n=s([]),d=s(!1),v=s(!1),g=async()=>{t++;const a={page:t,pageSize:20,videoType:2},e=await f(a),s=e.data||{};200==e.code?(s.list.forEach((a=>{n.value.push(a)})),d.value=!1,v.value=n.value.length==s.total):v.value=!0};return _((()=>{g()})),(a,s)=>{const t=l("EmptyData"),p=l("van-list");return i(),o("div",D,[v.value&&0===n.value.length?(i(),u(t,{key:0})):r("",!0),m(p,{loading:d.value,"onUpdate:loading":s[0]||(s[0]=a=>d.value=a),finished:v.value,"immediate-check":!1,"finished-text":0==n.value.length?"":a.$t("live.noMore"),onLoad:g},{default:c((()=>[(i(!0),o(h,null,b(n.value,(a=>(i(),u(z,{key:a.gidm,item:a,onClick:s=>(a=>{e.replace(`/match/${a.gidm}/bets`)})(a)},null,8,["item","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});U.__scopeId="data-v-1dd1d2f9";export{U as default};
