import{u as e,s as a,I as l,k as t,g as s}from"./index.45799dee.js";import{u as i,a as n}from"./index.315d0ead.js";import{s as o,a as m}from"./s_hot2.bba3cb3a.js";import{s as v,b as c,d as u,r as d,E as r,o as p,R as g,P as h,q as b,O as _,u as y,U as f,a2 as T,c as k,x as w,j as B,e as F,F as N,_ as x,Z as R}from"./vue.bfc6c13a.js";import"./getScore.16ea2989.js";const j={class:"item"},H={class:"item-photo"},I=["src"],L={key:0,class:"state"},M={class:"footer"},E=["innerHTML"],S={key:1},$={key:1,class:"mask-reseve"},C={class:"item-title"},D={class:"item-team"},K={class:"cell"},O={class:"head"},U={type:4,alt:""},P={class:"score"},V={class:"cell"},A={class:"head"},q={type:5,alt:""},z={class:"score"},Z={class:"item-desc"},G={class:"name"},J={class:"hots"},Q=["src"];var W=v({props:{item:{type:Object,default:()=>{}}},setup(s){const n=s,{t:v}=e(),B=c((()=>a.state.app.theme)),F=c((()=>"blue"==B.value?o:m)),N=u(l),x=i(),R=c((()=>{var e;return null==(e=n.item)?void 0:e.gameInfo})),W=c((()=>{const e=n.item;return e.anchorId?l+e.cover:"BK"==e.gameType?l+"FE/common/live/img_video_bg_BK.jpg":l+"FE/common/live/img_video_bg_FT.jpg"})),X=c((()=>{const e=n.item.watchTotal.toLocaleString();return"RB"==n.item.showType?v("live.xLooks",{num:e}):v("live.xReserve",{num:e})})),Y=c((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[n.item.gameType])));return(e,a)=>{const l=d("van-image"),i=d("SvgIcon"),n=r("img");return p(),g("div",j,[h("div",H,[b(l,{src:y(W),fit:"cover"},{error:_((()=>[h("img",{src:N.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,I)])),_:1},8,["src"]),"RB"==s.item.showType?(p(),g("div",L,f(e.$t("live.hotNow")),1)):T("",!0),h("div",M,["RB"==s.item.showType?(p(),g("span",{key:0,innerHTML:y(x).showRBTime(s.item)},null,8,E)):(p(),g("span",S,f(y(t)(s.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=s.item.showType?(p(),g("div",$,[h("span",null,f(e.$t("live.xHas",{num:y(X)})),1),h("span",null,f(e.$t("live.playNow")),1)])):T("",!0)]),h("div",C,[y(Y)?(p(),k(i,{key:0,name:y(Y)},null,8,["name"])):T("",!0),h("strong",null,f(s.item.leagueName),1)]),h("div",D,[h("div",K,[h("div",O,[w(h("img",U,null,512),[[n,s.item.homeLogo]]),h("span",null,f(s.item.homeTeam),1)]),h("div",P,[h("span",null,f(y(R).sc_game_H||y(R).sc_FT_H),1)])]),h("div",V,[h("div",A,[w(h("img",q,null,512),[[n,s.item.awayLogo]]),h("span",null,f(s.item.awayTeam),1)]),h("div",z,[h("span",null,f(y(R).sc_game_A||y(R).sc_FT_C||y(R).sc_FT_A),1)])])]),h("div",Z,[h("div",G,f(s.item.nickname||s.item.leagueShortName),1),h("div",J,[h("img",{src:y(F),alt:""},null,8,Q),h("span",null,f(y(X)),1)])])])}}});W.__scopeId="data-v-f963ceb2";const X={class:"tab-title"},Y={class:"grid-wrapper"};var ee=v({setup(l){B((()=>{}));const t=c((()=>a.state.app.showFixedBet)),{t:i}=e(),o=F([{type:"RB",title:i("live.hot"),iconName:"live-hot"},{type:"FT",title:i("live.football"),iconName:"live-football"},{type:"BK",title:i("live.basketball"),iconName:"live-basketball"},{type:"TN",title:i("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",title:i("live.badminton"),iconName:"live-badminton"}]),m=u("RB");let v=0;const r=u([]),w=u(!1),j=u(!1),H=u(!1),I=async()=>{H.value&&(r.value=[],H.value=!1),v++;const e={page:v,pageSize:20};"RB"==m.value?e.rbType=1:e.gameType=m.value;const a=await n(e),l=a.data;200==a.code?(l.list.forEach((e=>{r.value.push(e)})),w.value=!1,j.value=r.value.length==l.total):j.value=!0},L=()=>{v=0,j.value=!1,w.value=!0,I()},M=()=>{H.value=!0,L()};return(e,a)=>{const l=d("SvgIcon"),i=d("EmptyData"),n=d("van-list"),v=d("van-pull-refresh"),c=d("van-tab"),u=d("van-tabs");return p(),g("div",{class:R(["live-page",{"has-bet":y(t)}])},[b(u,{active:m.value,"onUpdate:active":a[2]||(a[2]=e=>m.value=e),swipeable:"",sticky:"",shrink:"","offset-top":"12.8vw","line-height":"0",onChange:M},{default:_((()=>[(p(!0),g(N,null,x(y(o),((t,o)=>(p(),k(c,{key:o,name:t.type},{title:_((()=>[h("div",X,[b(l,{name:t.iconName},null,8,["name"]),h("span",null,f(t.title),1)])])),default:_((()=>[b(v,{modelValue:H.value,"onUpdate:modelValue":a[1]||(a[1]=e=>H.value=e),onRefresh:L},{default:_((()=>[j.value&&0===r.value.length?(p(),k(i,{key:0})):T("",!0),b(n,{loading:w.value,"onUpdate:loading":a[0]||(a[0]=e=>w.value=e),finished:j.value,"finished-text":0==r.value.length?"":e.$t("live.noMore"),onLoad:I},{default:_((()=>[h("div",Y,[(p(!0),g(N,null,x(r.value,(e=>(p(),g("div",{class:"flex-item",key:e.gidm},[b(W,{item:e,onClick:a=>(e=>{s.push(`/broadcast/${e.gidm}`)})(e)},null,8,["item","onClick"])])))),128))])])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],2)}}});ee.__scopeId="data-v-ef81c17a";export{ee as default};
