import{s as a,b as e,d as s,r as l,E as t,o as i,S as o,P as n,q as c,O as m,u as d,V as v,a0 as r,c as u,x as g,R as p,j as _,F as h,Z as f}from"./vue.6c3ce548.js";import{r as b}from"./index.fc60f452.js";import{s as y,I as T}from"./index.c53fd497.js";import{s as F,a as j}from"./s_hot2.bba3cb3a.js";const k={class:"item"},w={class:"photo"},x=["src"],E={key:0,class:"state"},I={class:"main"},B={class:"main-title"},S={class:"main-team"},L={class:"cell"},N={class:"head"},C={type:4,alt:""},K={class:"score"},O={class:"cell"},$={class:"head"},A={type:5,alt:""},H={class:"score"},M={class:"main-desc"},P={class:"name"},R={class:"hots"},q=["src"];var z=a({props:{item:{type:Object,default:()=>{}}},setup(a){const p=a,_=e((()=>y.state.app.theme)),h=e((()=>"blue"==_.value?F:j)),f=s(T),b=e((()=>{var a;return null==(a=p.item)?void 0:a.gameInfo})),z=e((()=>{const a=p.item;return a.anchorId?T+a.cover:"BK"==a.gameType?T+"FE/common/live/img_video_bg_BK.jpg":T+"FE/common/live/img_video_bg_FT.jpg"})),D=e((()=>p.item.watchTotal.toLocaleString())),U=e((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[p.item.gameType])));return(e,s)=>{const p=l("van-image"),_=l("SvgIcon"),y=t("img");return i(),o("div",k,[n("div",w,[c(p,{src:d(z),fit:"cover"},{error:m((()=>[n("img",{src:f.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,x)])),_:1},8,["src"]),"RB"==a.item.showType?(i(),o("span",E,v(e.$t("live.hotNow")),1)):r("",!0)]),n("div",I,[n("div",B,[d(U)?(i(),u(_,{key:0,name:d(U)},null,8,["name"])):r("",!0),n("strong",null,v(a.item.leagueName),1)]),n("div",S,[n("div",L,[n("div",N,[g(n("img",C,null,512),[[y,a.item.homeLogo]]),n("span",null,v(a.item.homeTeam),1)]),n("div",K,[n("span",null,v(d(b).sc_game_H||d(b).sc_FT_H),1)])]),n("div",O,[n("div",$,[g(n("img",A,null,512),[[y,a.item.awayLogo]]),n("span",null,v(a.item.awayTeam),1)]),n("div",H,[n("span",null,v(d(b).sc_game_A||d(b).sc_FT_C||d(b).sc_FT_A),1)])])]),n("div",M,[n("div",P,v(a.item.leagueShortName),1),n("div",R,[n("img",{src:d(h),alt:""},null,8,q),n("span",null,v(d(D)),1)])])])])}}});z.__scopeId="data-v-1eb85d34";const D={class:"panel-more"};var U=a({setup(a){const e=p();let t=0;const n=s([]),d=s(!1),v=s(!1),g=async()=>{t++;const a={page:t,pageSize:20,videoType:2},e=await b(a),s=e.data||{};200==e.code?(s.list.forEach((a=>{n.value.push(a)})),d.value=!1,v.value=n.value.length==s.total):v.value=!0};return _((()=>{g()})),(a,s)=>{const t=l("EmptyData"),p=l("van-list");return i(),o("div",D,[v.value&&0===n.value.length?(i(),u(t,{key:0})):r("",!0),c(p,{loading:d.value,"onUpdate:loading":s[0]||(s[0]=a=>d.value=a),finished:v.value,"immediate-check":!1,"finished-text":0==n.value.length?"":a.$t("live.noMore"),onLoad:g},{default:m((()=>[(i(!0),o(h,null,f(n.value,(a=>(i(),u(z,{key:a.gidm,item:a,onClick:s=>(a=>{e.replace(`/match/${a.gidm}/bets`)})(a)},null,8,["item","onClick"])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});U.__scopeId="data-v-1dd1d2f9";export{U as default};
