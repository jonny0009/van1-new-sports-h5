import{u as e,s as a,I as l,k as t,r as s}from"./index.ea6a6375.js";import{u as i}from"./useMatch.9bf9c703.js";import{s as n,a as o}from"./s_hot2.bba3cb3a.js";import{s as m,b as v,d as c,r as u,E as r,o as d,S as p,P as g,q as h,O as b,u as _,V as y,$ as f,c as T,x as k,j as w,e as B,F,_ as N,Z as j}from"./vue.7833d4f2.js";import{a as x}from"./index.e9b18fe3.js";import"./getScore.7c6bb225.js";const R={class:"item"},L={class:"item-photo"},M=["src"],S={key:0,class:"state"},H={class:"footer"},I=["innerHTML"],E={key:1},$={key:1,class:"mask-reseve"},C={class:"item-title"},D={class:"item-team"},K={class:"cell"},O={class:"head"},V={type:4,alt:""},P={class:"score"},U={class:"cell"},A={class:"head"},q={type:5,alt:""},z={class:"score"},Z={class:"item-desc"},G={class:"name"},J={class:"hots"},Q=["src"];var W=m({props:{item:{type:Object,default:()=>{}}},setup(s){const m=s,{t:w}=e(),B=v((()=>a.state.app.theme)),F=v((()=>"blue"==B.value?n:o)),N=c(l),j=i(),x=v((()=>{var e;return null==(e=m.item)?void 0:e.gameInfo})),W=v((()=>{const e=m.item;return e.anchorId?l+e.cover:"BK"==e.gameType?l+"FE/common/live/img_video_bg_BK.jpg":l+"FE/common/live/img_video_bg_FT.jpg"})),X=v((()=>{const e=m.item.watchTotal.toLocaleString();return"RB"==m.item.showType?w("live.xLooks",{num:e}):w("live.xReserve",{num:e})})),Y=v((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[m.item.gameType])));return(e,a)=>{const l=u("van-image"),i=u("SvgIcon"),n=r("img");return d(),p("div",R,[g("div",L,[h(l,{src:_(W),fit:"cover"},{error:b((()=>[g("img",{src:N.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,M)])),_:1},8,["src"]),"RB"==s.item.showType?(d(),p("div",S,y(e.$t("live.hotNow")),1)):f("",!0),g("div",H,["RB"==s.item.showType?(d(),p("span",{key:0,innerHTML:_(j).showRBTime(s.item)},null,8,I)):(d(),p("span",E,y(_(t)(s.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=s.item.showType?(d(),p("div",$,[g("span",null,y(e.$t("live.xHas",{num:_(X)})),1),g("span",null,y(e.$t("live.playNow")),1)])):f("",!0)]),g("div",C,[_(Y)?(d(),T(i,{key:0,name:_(Y)},null,8,["name"])):f("",!0),g("strong",null,y(s.item.leagueName),1)]),g("div",D,[g("div",K,[g("div",O,[k(g("img",V,null,512),[[n,s.item.homeLogo]]),g("span",null,y(s.item.homeTeam),1)]),g("div",P,[g("span",null,y(_(x).sc_game_H||_(x).sc_FT_H),1)])]),g("div",U,[g("div",A,[k(g("img",q,null,512),[[n,s.item.awayLogo]]),g("span",null,y(s.item.awayTeam),1)]),g("div",z,[g("span",null,y(_(x).sc_game_A||_(x).sc_FT_C||_(x).sc_FT_A),1)])])]),g("div",Z,[g("div",G,y(s.item.nickname||s.item.leagueShortName),1),g("div",J,[g("img",{src:_(F),alt:""},null,8,Q),g("span",null,y(m.item.watchTotal.toLocaleString()),1)])])])}}});W.__scopeId="data-v-56461480";const X={class:"tab-title"},Y={class:"grid-wrapper"};var ee=m({setup(l){w((()=>{}));const t=v((()=>a.state.app.showFixedBet)),{t:i}=e(),n=B([{type:"RB",title:i("live.hot"),iconName:"live-hot"},{type:"FT",title:i("live.football"),iconName:"live-football"},{type:"BK",title:i("live.basketball"),iconName:"live-basketball"},{type:"TN",title:i("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",title:i("live.badminton"),iconName:"live-badminton"}]),o=c("RB");let m=0;const r=c([]),k=c(!1),R=c(!1),L=c(!1),M=async()=>{L.value&&(r.value=[],L.value=!1),m++;const e={page:m,pageSize:20};"RB"===o.value?e.rbType=1:e.gameType=o.value;const a=await x(e),l=a.data;200===a.code?(l.list.forEach((e=>{r.value.push(e)})),k.value=!1,R.value=r.value.length===l.total):R.value=!0},S=()=>{m=0,R.value=!1,k.value=!0,M()},H=()=>{L.value=!0,S()};return(e,a)=>{const l=u("SvgIcon"),i=u("EmptyData"),m=u("van-list"),v=u("van-pull-refresh"),c=u("van-tab"),w=u("van-tabs");return d(),p("div",{class:j(["live-page",{"has-bet":_(t)}])},[h(w,{active:o.value,"onUpdate:active":a[2]||(a[2]=e=>o.value=e),swipeable:"",sticky:"",shrink:"","offset-top":"12.8vw","line-height":"0",onChange:H},{default:b((()=>[(d(!0),p(F,null,N(_(n),((t,n)=>(d(),T(c,{key:n,name:t.type},{title:b((()=>[g("div",X,[h(l,{name:t.iconName},null,8,["name"]),g("span",null,y(t.title),1)])])),default:b((()=>[h(v,{modelValue:L.value,"onUpdate:modelValue":a[1]||(a[1]=e=>L.value=e),onRefresh:S},{default:b((()=>[R.value&&0===r.value.length?(d(),T(i,{key:0})):f("",!0),h(m,{loading:k.value,"onUpdate:loading":a[0]||(a[0]=e=>k.value=e),finished:R.value,"finished-text":0==r.value.length?"":e.$t("live.noMore"),onLoad:M},{default:b((()=>[g("div",Y,[(d(!0),p(F,null,N(r.value,(e=>(d(),p("div",{key:e.gidm,class:"flex-item"},[h(W,{item:e,onClick:a=>(e=>{s.push(`/match/${e.gidm}`)})(e)},null,8,["item","onClick"])])))),128))])])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],2)}}});ee.__scopeId="data-v-36ae4ac6";export{ee as default};
