import{u as e,s as a,I as l,n as t,j as s}from"./index.3b607f65.js";import{u as i}from"./useMatch.d6d8e67f.js";import{s as n,a as o}from"./s_hot2.bba3cb3a.js";import{s as m,b as v,d as c,r as u,E as d,o as p,S as r,P as g,q as h,O as b,u as _,V as y,a0 as f,c as T,x as k,j as w,e as B,F,Z as N,_ as j}from"./vue.ce591b53.js";import{a as x}from"./index.d1469081.js";const R={class:"item"},M={class:"item-photo"},H=["src"],I={key:0,class:"state"},L={class:"footer"},E=["innerHTML"],S={key:1},$={key:1,class:"mask-reseve"},C={class:"item-title"},D={class:"item-team"},K={class:"cell"},O={class:"head"},V={type:4,alt:""},P={class:"score"},U={class:"cell"},A={class:"head"},q={type:5,alt:""},z={class:"score"},Z={class:"item-desc"},G={class:"name"},J={class:"hots"},Q=["src"];var W=m({props:{item:{type:Object,default:()=>{}}},setup(s){const m=s,{t:w}=e(),B=v((()=>a.state.app.theme)),F=v((()=>"blue"==B.value?n:o)),N=c(l),j=i(),x=v((()=>{var e;return null==(e=m.item)?void 0:e.gameInfo})),W=v((()=>{const e=m.item;return e.anchorId?l+e.cover:"BK"==e.gameType?l+"FE/common/live/img_video_bg_BK.jpg":l+"FE/common/live/img_video_bg_FT.jpg"})),X=v((()=>{const e=m.item.watchTotal.toLocaleString();return"RB"==m.item.showType?w("live.xLooks",{num:e}):w("live.xReserve",{num:e})})),Y=v((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[m.item.gameType])));return(e,a)=>{const l=u("van-image"),i=u("SvgIcon"),n=d("img");return p(),r("div",R,[g("div",M,[h(l,{src:_(W),fit:"cover"},{error:b((()=>[g("img",{src:N.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,H)])),_:1},8,["src"]),"RB"==s.item.showType?(p(),r("div",I,y(e.$t("live.hotNow")),1)):f("",!0),g("div",L,["RB"==s.item.showType?(p(),r("span",{key:0,innerHTML:_(j).showRBTime(s.item)},null,8,E)):(p(),r("span",S,y(_(t)(s.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=s.item.showType?(p(),r("div",$,[g("span",null,y(e.$t("live.xHas",{num:_(X)})),1),g("span",null,y(e.$t("live.playNow")),1)])):f("",!0)]),g("div",C,[_(Y)?(p(),T(i,{key:0,name:_(Y)},null,8,["name"])):f("",!0),g("strong",null,y(s.item.leagueName),1)]),g("div",D,[g("div",K,[g("div",O,[k(g("img",V,null,512),[[n,s.item.homeLogo]]),g("span",null,y(s.item.homeTeam),1)]),g("div",P,[g("span",null,y(_(x).sc_game_H||_(x).sc_FT_H),1)])]),g("div",U,[g("div",A,[k(g("img",q,null,512),[[n,s.item.awayLogo]]),g("span",null,y(s.item.awayTeam),1)]),g("div",z,[g("span",null,y(_(x).sc_game_A||_(x).sc_FT_C||_(x).sc_FT_A),1)])])]),g("div",Z,[g("div",G,y(s.item.nickname||s.item.leagueShortName),1),g("div",J,[g("img",{src:_(F),alt:""},null,8,Q),g("span",null,y(_(X)),1)])])])}}});W.__scopeId="data-v-c1bdac2e";const X={class:"tab-title"},Y={class:"grid-wrapper"};var ee=m({setup(l){w((()=>{}));const t=v((()=>a.state.app.showFixedBet)),{t:i}=e(),n=B([{type:"RB",title:i("live.hot"),iconName:"live-hot"},{type:"FT",title:i("live.football"),iconName:"live-football"},{type:"BK",title:i("live.basketball"),iconName:"live-basketball"},{type:"TN",title:i("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",title:i("live.badminton"),iconName:"live-badminton"}]),o=c("RB");let m=0;const d=c([]),k=c(!1),R=c(!1),M=c(!1),H=async()=>{M.value&&(d.value=[],M.value=!1),m++;const e={page:m,pageSize:20};"RB"==o.value?e.rbType=1:e.gameType=o.value;const a=await x(e),l=a.data;200==a.code?(l.list.forEach((e=>{d.value.push(e)})),k.value=!1,R.value=d.value.length==l.total):R.value=!0},I=()=>{m=0,R.value=!1,k.value=!0,H()},L=()=>{M.value=!0,I()};return(e,a)=>{const l=u("SvgIcon"),i=u("EmptyData"),m=u("van-list"),v=u("van-pull-refresh"),c=u("van-tab"),w=u("van-tabs");return p(),r("div",{class:j(["live-page",{"has-bet":_(t)}])},[h(w,{active:o.value,"onUpdate:active":a[2]||(a[2]=e=>o.value=e),swipeable:"",sticky:"",shrink:"","offset-top":"12.8vw","line-height":"0",onChange:L},{default:b((()=>[(p(!0),r(F,null,N(_(n),((t,n)=>(p(),T(c,{key:n,name:t.type},{title:b((()=>[g("div",X,[h(l,{name:t.iconName},null,8,["name"]),g("span",null,y(t.title),1)])])),default:b((()=>[h(v,{modelValue:M.value,"onUpdate:modelValue":a[1]||(a[1]=e=>M.value=e),onRefresh:I},{default:b((()=>[R.value&&0===d.value.length?(p(),T(i,{key:0})):f("",!0),h(m,{loading:k.value,"onUpdate:loading":a[0]||(a[0]=e=>k.value=e),finished:R.value,"finished-text":0==d.value.length?"":e.$t("live.noMore"),onLoad:H},{default:b((()=>[g("div",Y,[(p(!0),r(F,null,N(d.value,(e=>(p(),r("div",{class:"flex-item",key:e.gidm},[h(W,{item:e,onClick:a=>(e=>{s.push(`/match/${e.gidm}`)})(e)},null,8,["item","onClick"])])))),128))])])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],2)}}});ee.__scopeId="data-v-251506af";export{ee as default};
