import{u as e,s as a,I as l,q as t,m as s}from"./index.ec7f69b4.js";import{u as i}from"./useMatch.019d7f91.js";import{s as n,a as o}from"./s_hot2.bba3cb3a.js";import{s as m,b as v,d as c,r as u,E as d,o as p,S as r,P as g,q as h,O as _,u as b,V as y,a0 as f,c as T,x as k,j as w,e as B,F,Z as N,_ as x}from"./vue.6c3ce548.js";import{a as j}from"./index.7602e922.js";const R={class:"item"},M={class:"item-photo"},H=["src"],I={key:0,class:"state"},L={class:"footer"},E=["innerHTML"],S={key:1},$={key:1,class:"mask-reseve"},C={class:"item-title"},D={class:"item-team"},K={class:"cell"},O={class:"head"},V={type:4,alt:""},P={class:"score"},U={class:"cell"},q={class:"head"},A={type:5,alt:""},z={class:"score"},Z={class:"item-desc"},G={class:"name"},J={class:"hots"},Q=["src"];var W=m({props:{item:{type:Object,default:()=>{}}},setup(s){const m=s,{t:w}=e(),B=v((()=>a.state.app.theme)),F=v((()=>"blue"==B.value?n:o)),N=c(l),x=i(),j=v((()=>{var e;return null==(e=m.item)?void 0:e.gameInfo})),W=v((()=>{const e=m.item;return e.anchorId?l+e.cover:"BK"==e.gameType?l+"FE/common/live/img_video_bg_BK.jpg":l+"FE/common/live/img_video_bg_FT.jpg"})),X=v((()=>{const e=m.item.watchTotal.toLocaleString();return"RB"==m.item.showType?w("live.xLooks",{num:e}):w("live.xReserve",{num:e})})),Y=v((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[m.item.gameType])));return(e,a)=>{const l=u("van-image"),i=u("SvgIcon"),n=d("img");return p(),r("div",R,[g("div",M,[h(l,{src:b(W),fit:"cover"},{error:_((()=>[g("img",{src:N.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,H)])),_:1},8,["src"]),"RB"==s.item.showType?(p(),r("div",I,y(e.$t("live.hotNow")),1)):f("",!0),g("div",L,["RB"==s.item.showType?(p(),r("span",{key:0,innerHTML:b(x).showRBTime(s.item)},null,8,E)):(p(),r("span",S,y(b(t)(s.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=s.item.showType?(p(),r("div",$,[g("span",null,y(e.$t("live.xHas",{num:b(X)})),1),g("span",null,y(e.$t("live.playNow")),1)])):f("",!0)]),g("div",C,[b(Y)?(p(),T(i,{key:0,name:b(Y)},null,8,["name"])):f("",!0),g("strong",null,y(s.item.leagueName),1)]),g("div",D,[g("div",K,[g("div",O,[k(g("img",V,null,512),[[n,s.item.homeLogo]]),g("span",null,y(s.item.homeTeam),1)]),g("div",P,[g("span",null,y(b(j).sc_game_H||b(j).sc_FT_H),1)])]),g("div",U,[g("div",q,[k(g("img",A,null,512),[[n,s.item.awayLogo]]),g("span",null,y(s.item.awayTeam),1)]),g("div",z,[g("span",null,y(b(j).sc_game_A||b(j).sc_FT_C||b(j).sc_FT_A),1)])])]),g("div",Z,[g("div",G,y(s.item.nickname||s.item.leagueShortName),1),g("div",J,[g("img",{src:b(F),alt:""},null,8,Q),g("span",null,y(b(X)),1)])])])}}});W.__scopeId="data-v-183f013e";const X={class:"tab-title"},Y={class:"grid-wrapper"};var ee=m({setup(l){w((()=>{}));const t=v((()=>a.state.app.showFixedBet)),{t:i}=e(),n=B([{type:"RB",title:i("live.hot"),iconName:"live-hot"},{type:"FT",title:i("live.football"),iconName:"live-football"},{type:"BK",title:i("live.basketball"),iconName:"live-basketball"},{type:"TN",title:i("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",title:i("live.badminton"),iconName:"live-badminton"}]),o=c("RB");let m=0;const d=c([]),k=c(!1),R=c(!1),M=c(!1),H=async()=>{M.value&&(d.value=[],M.value=!1),m++;const e={page:m,pageSize:20};"RB"==o.value?e.rbType=1:e.gameType=o.value;const a=await j(e),l=a.data;200==a.code?(l.list.forEach((e=>{d.value.push(e)})),k.value=!1,R.value=d.value.length==l.total):R.value=!0},I=()=>{m=0,R.value=!1,k.value=!0,H()},L=()=>{M.value=!0,I()};return(e,a)=>{const l=u("SvgIcon"),i=u("EmptyData"),m=u("van-list"),v=u("van-pull-refresh"),c=u("van-tab"),w=u("van-tabs");return p(),r("div",{class:x(["live-page",{"has-bet":b(t)}])},[h(w,{active:o.value,"onUpdate:active":a[2]||(a[2]=e=>o.value=e),swipeable:"",sticky:"",shrink:"","offset-top":"12.8vw","line-height":"0",onChange:L},{default:_((()=>[(p(!0),r(F,null,N(b(n),((t,n)=>(p(),T(c,{key:n,name:t.type},{title:_((()=>[g("div",X,[h(l,{name:t.iconName},null,8,["name"]),g("span",null,y(t.title),1)])])),default:_((()=>[h(v,{modelValue:M.value,"onUpdate:modelValue":a[1]||(a[1]=e=>M.value=e),onRefresh:I},{default:_((()=>[R.value&&0===d.value.length?(p(),T(i,{key:0})):f("",!0),h(m,{loading:k.value,"onUpdate:loading":a[0]||(a[0]=e=>k.value=e),finished:R.value,"finished-text":0==d.value.length?"":e.$t("live.noMore"),onLoad:H},{default:_((()=>[g("div",Y,[(p(!0),r(F,null,N(d.value,(e=>(p(),r("div",{class:"flex-item",key:e.gidm},[h(W,{item:e,onClick:a=>(e=>{s.push(`/match/${e.gidm}`)})(e)},null,8,["item","onClick"])])))),128))])])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],2)}}});ee.__scopeId="data-v-0895536a";export{ee as default};
