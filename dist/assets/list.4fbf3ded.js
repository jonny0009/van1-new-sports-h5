import{u as e,s as a,I as l,k as t,r as s}from"./index.6e1ffcf5.js";import{u as i}from"./useMatch.8569e9eb.js";import{s as n,a as v}from"./s_hot2.bba3cb3a.js";import{s as o,b as m,d as u,r as c,E as r,o as d,S as p,P as g,q as h,O as f,u as y,V as _,$ as b,c as T,x as k,j as B,e as w,F as R,_ as x,Z as I,X as M,Y as F}from"./vue.7833d4f2.js";import{a as N,n as j}from"./index.66717cd5.js";import"./getScore.eef42af5.js";const L={class:"item"},H={class:"item-photo"},S=["src"],$={key:0,class:"state"},E={class:"footer"},C=["innerHTML"],D={key:1},K={key:1,class:"mask-reseve"},O={class:"item-title"},V={class:"item-team"},A={class:"cell"},P={class:"head"},U={type:4,alt:""},q={class:"score"},z={class:"cell"},X={class:"head"},Y={type:5,alt:""},Z={class:"score"},G={class:"item-desc"},J={class:"name"},Q={class:"hots"},W=["src"];var ee=o({props:{item:{type:Object,default:()=>{}}},setup(s){const o=s,{t:B}=e(),w=m((()=>a.state.app.theme)),R=m((()=>"blue"==w.value?n:v)),x=u(l),I=i(),M=m((()=>{var e;return null==(e=o.item)?void 0:e.gameInfo})),F=m((()=>{const e=o.item;return e.anchorId?l+e.cover:"BK"==e.gameType?l+"FE/common/live/img_video_bg_BK.jpg":l+"FE/common/live/img_video_bg_FT.jpg"})),N=m((()=>{const e=o.item.watchTotal.toLocaleString();return"RB"==o.item.showType?B("live.xLooks",{num:e}):B("live.xReserve",{num:e})})),j=m((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[o.item.gameType])));return(e,a)=>{const l=c("van-image"),i=c("SvgIcon"),n=r("img");return d(),p("div",L,[g("div",H,[h(l,{src:y(F),fit:"cover"},{error:f((()=>[g("img",{src:x.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,S)])),_:1},8,["src"]),"RB"==s.item.showType?(d(),p("div",$,_(e.$t("live.hotNow")),1)):b("",!0),g("div",E,["RB"==s.item.showType?(d(),p("span",{key:0,innerHTML:y(I).showRBTime(s.item)},null,8,C)):(d(),p("span",D,_(y(t)(s.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=s.item.showType?(d(),p("div",K,[g("span",null,_(e.$t("live.xHas",{num:y(N)})),1),g("span",null,_(e.$t("live.playNow")),1)])):b("",!0)]),g("div",O,[y(j)?(d(),T(i,{key:0,name:y(j)},null,8,["name"])):b("",!0),g("strong",null,_(s.item.leagueName),1)]),g("div",V,[g("div",A,[g("div",P,[k(g("img",U,null,512),[[n,s.item.homeLogo]]),g("span",null,_(s.item.homeTeam),1)]),g("div",q,[g("span",null,_(y(M).sc_game_H||y(M).sc_FT_H),1)])]),g("div",z,[g("div",X,[k(g("img",Y,null,512),[[n,s.item.awayLogo]]),g("span",null,_(s.item.awayTeam),1)]),g("div",Z,[g("span",null,_(y(M).sc_game_A||y(M).sc_FT_C||y(M).sc_FT_A),1)])])]),g("div",G,[g("div",J,_(s.item.nickname||s.item.leagueShortName),1),g("div",Q,[g("img",{src:y(R),alt:""},null,8,W),g("span",null,_(o.item.watchTotal.toLocaleString()),1)])])])}}});ee.__scopeId="data-v-075ee586";const ae={class:"tab-title"},le={key:0,class:"next"},te=(e=>(M("data-v-efea97e0"),e=e(),F(),e))((()=>g("div",{class:"img"},[g("img",{src:"/assets/no_an_ma.134981fa.png",alt:""})],-1))),se=["innerHTML"],ie={class:"grid-wrapper"};var ne=o({setup(l){B((()=>{E()}));const t=m((()=>a.state.app.showFixedBet)),{t:i}=e(),n=w([{type:"RB",title:i("live.hot"),iconName:"live-hot"},{type:"FT",title:i("live.football"),iconName:"live-football"},{type:"BK",title:i("live.basketball"),iconName:"live-basketball"},{type:"TN",title:i("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",title:i("live.badminton"),iconName:"live-badminton"}]),v=u("RB"),o=u(-1),r=u("");let k=w({}),M=0;const F=u([]),L=u(!1),H=u(!1),S=u(!1),$=async()=>{if(S.value&&(F.value=[],S.value=!1),o.value>0&&"RB"===v.value)return void(L.value=!1);M++;const e={page:M,pageSize:20};"RB"===v.value?e.rbType=1:e.gameType=v.value;const a=await N(e),l=a.data;if(L.value=!1,200===a.code){if("RB"===v.value&&0===l.list.length){H.value=!0;const e=await j();return 200===e.code&&e.data&&e.data>e.systemTime?(o.value=e.data-e.systemTime,void(k=setInterval((()=>{o.value-=1e3,0===o.value&&clearInterval(k),D()}),1e3))):void 0}l.list.forEach((e=>{F.value.push(e)})),H.value=F.value.length===l.total}else H.value=!0},E=()=>{M=0,H.value=!1,L.value=!0,$()},C=()=>{S.value=!0,E()},D=()=>{if(o.value<0)return clearInterval(k),void E();function e(e){return e<10?"0"+e:e}const a=Math.round(o.value/1e3);let l=parseInt(a/3600%24),t=parseInt(a/60%60),s=a%60;l=e(l),t=e(t),s=e(s),r.value=l+":"+t+":"+s};return(e,l)=>{const i=c("SvgIcon"),m=c("EmptyData"),u=c("van-list"),k=c("van-pull-refresh"),B=c("van-tab"),w=c("van-tabs");return d(),p("div",{class:I(["live-page",{"has-bet":y(t)}])},[h(w,{active:v.value,"onUpdate:active":l[2]||(l[2]=e=>v.value=e),swipeable:"",sticky:"",shrink:"","offset-top":"12.8vw","line-height":"0",onChange:C},{default:f((()=>[(d(!0),p(R,null,x(y(n),((t,n)=>(d(),T(B,{key:n,name:t.type},{title:f((()=>[g("div",ae,[h(i,{name:t.iconName},null,8,["name"]),g("span",null,_(t.title),1)])])),default:f((()=>[0===F.value.length&&o.value>0&&"RB"===v.value?(d(),p("div",le,[te,g("p",{innerHTML:e.$t("live.nextAM",{num:r.value})},null,8,se)])):b("",!0),g("div",null,[h(k,{modelValue:S.value,"onUpdate:modelValue":l[1]||(l[1]=e=>S.value=e),onRefresh:E},{default:f((()=>[H.value&&0===F.value.length&&"RB"!==v.value||0===F.value.length&&o.value<0&&"RB"===v.value&&H.value?(d(),T(m,{key:0})):b("",!0),h(u,{loading:L.value,"onUpdate:loading":l[0]||(l[0]=e=>L.value=e),finished:H.value,"finished-text":0==F.value.length?"":e.$t("live.noMore"),onLoad:$},{default:f((()=>[g("div",ie,[(d(!0),p(R,null,x(F.value,(e=>(d(),p("div",{key:e.gidm,class:"flex-item"},[h(ee,{item:e,onClick:l=>(e=>{s.push(`/match/${e.gidm}`),a.dispatch("app/setMatchLiveIndex",1)})(e)},null,8,["item","onClick"])])))),128))])])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],2)}}});ne.__scopeId="data-v-efea97e0";export{ne as default};
