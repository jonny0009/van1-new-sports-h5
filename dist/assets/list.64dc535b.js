import{u as e,s as a,I as l,A as t,w as s}from"./index.74460f18.js";import{u as i}from"./useMatch.44fc46f1.js";import{s as n,a as v}from"./s_hot2.bba3cb3a.js";import{s as o,b as u,d as m,r as c,E as r,o as d,S as p,P as g,q as h,O as f,u as _,V as y,$ as b,c as T,x as B,j as k,e as w,F as R,_ as x,Z as F,X as I,Y as M}from"./vue.7833d4f2.js";import{n as N,a as j}from"./index.a2f9e7af.js";const H={class:"item"},L={class:"item-photo"},$=["src"],E={key:0,class:"state"},S={class:"footer"},A=["innerHTML"],C={key:1},D={key:1,class:"mask-reseve"},K={class:"item-title"},O={class:"item-team"},V={class:"cell"},P={class:"head"},U={type:4,alt:""},q={class:"score"},z={class:"cell"},X={class:"head"},Y={type:5,alt:""},Z={class:"score"},G={class:"item-desc"},J={class:"name"},Q={class:"hots"},W=["src"];var ee=o({props:{item:{type:Object,default:()=>{}}},setup(s){const o=s,{t:k}=e(),w=u((()=>a.state.app.theme)),R=u((()=>"blue"==w.value?n:v)),x=m(l),F=i(),I=u((()=>{var e;return null==(e=o.item)?void 0:e.gameInfo})),M=u((()=>{const e=o.item;return e.anchorId?l+e.cover:"BK"==e.gameType?l+"FE/common/live/img_video_bg_BK.jpg":l+"FE/common/live/img_video_bg_FT.jpg"})),N=u((()=>{const e=o.item.watchTotal.toLocaleString();return"RB"==o.item.showType?k("live.xLooks",{num:e}):k("live.xReserve",{num:e})})),j=u((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[o.item.gameType])));return(e,a)=>{const l=c("van-image"),i=c("SvgIcon"),n=r("img");return d(),p("div",H,[g("div",L,[h(l,{src:_(M),fit:"cover"},{error:f((()=>[g("img",{src:x.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,$)])),_:1},8,["src"]),"RB"==s.item.showType?(d(),p("div",E,y(e.$t("live.hotNow")),1)):b("",!0),g("div",S,["RB"==s.item.showType?(d(),p("span",{key:0,innerHTML:_(F).showRBTime(s.item)},null,8,A)):(d(),p("span",C,y(_(t)(s.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=s.item.showType?(d(),p("div",D,[g("span",null,y(e.$t("live.xHas",{num:_(N)})),1),g("span",null,y(e.$t("live.playNow")),1)])):b("",!0)]),g("div",K,[_(j)?(d(),T(i,{key:0,name:_(j)},null,8,["name"])):b("",!0),g("strong",null,y(s.item.leagueName),1)]),g("div",O,[g("div",V,[g("div",P,[B(g("img",U,null,512),[[n,s.item.homeLogo]]),g("span",null,y(s.item.homeTeam),1)]),g("div",q,[g("span",null,y(_(I).sc_game_H||_(I).sc_FT_H),1)])]),g("div",z,[g("div",X,[B(g("img",Y,null,512),[[n,s.item.awayLogo]]),g("span",null,y(s.item.awayTeam),1)]),g("div",Z,[g("span",null,y(_(I).sc_game_A||_(I).sc_FT_C||_(I).sc_FT_A),1)])])]),g("div",G,[g("div",J,y(s.item.nickname||s.item.leagueShortName),1),g("div",Q,[g("img",{src:_(R),alt:""},null,8,W),g("span",null,y(_(N)),1)])])])}}});ee.__scopeId="data-v-183f013e";const ae={class:"tab-title"},le={key:0,class:"next"},te=(e=>(I("data-v-6592595a"),e=e(),M(),e))((()=>g("div",{class:"img"},[g("img",{src:"/assets/no_an_ma.134981fa.png",alt:""})],-1))),se=["innerHTML"],ie={class:"grid-wrapper"};var ne=o({setup(l){k((()=>{}));const t=u((()=>a.state.app.showFixedBet)),{t:i}=e(),n=w([{type:"RB",title:i("live.hot"),iconName:"live-hot"},{type:"FT",title:i("live.football"),iconName:"live-football"},{type:"BK",title:i("live.basketball"),iconName:"live-basketball"},{type:"TN",title:i("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",title:i("live.badminton"),iconName:"live-badminton"}]),v=m("RB"),o=m(-1),r=m("");let B=w({}),I=0;const M=m([]),H=m(!1),L=m(!1),$=m(!1),E=async()=>{if("RB"===v.value){if(o.value>0)return $.value=!1,H.value=!1,void(M.value=[]);const e=await N();return void(200===e.code&&e.data&&(L.value=!0,o.value=e.data-e.systemTime,B=setInterval((()=>{o.value-=1e3,0===o.value&&clearInterval(B),C()}),1e3)))}$.value&&(M.value=[],$.value=!1),I++;const e={page:I,pageSize:20};"RB"===v.value?e.rbType=1:e.gameType=v.value;const a=await j(e),l=a.data;H.value=!1,o.value>-1&&"RB"===v.value?M.value=[]:200===a.code?(l.list.forEach((e=>{M.value.push(e)})),L.value=M.value.length===l.total):L.value=!0},S=()=>{I=0,L.value=!1,H.value=!0,E()},A=()=>{$.value=!0,S()},C=()=>{if(-1===o.value)return clearInterval(B),void S();function e(e){return e<10?"0"+e:e}const a=Math.round(o.value/1e3);let l=parseInt(a/3600%24),t=parseInt(a/60%60),s=a%60;l=e(l),t=e(t),s=e(s),r.value=l+":"+t+":"+s};return(e,a)=>{const l=c("SvgIcon"),i=c("EmptyData"),u=c("van-list"),m=c("van-pull-refresh"),B=c("van-tab"),k=c("van-tabs");return d(),p("div",{class:F(["live-page",{"has-bet":_(t)}])},[h(k,{active:v.value,"onUpdate:active":a[2]||(a[2]=e=>v.value=e),swipeable:"",sticky:"",shrink:"","offset-top":"12.8vw","line-height":"0",onChange:A},{default:f((()=>[(d(!0),p(R,null,x(_(n),((t,n)=>(d(),T(B,{key:n,name:t.type},{title:f((()=>[g("div",ae,[h(l,{name:t.iconName},null,8,["name"]),g("span",null,y(t.title),1)])])),default:f((()=>[0===M.value.length&&o.value>0&&"RB"===v.value?(d(),p("div",le,[te,g("p",{innerHTML:e.$t("live.nextAM",{num:r.value})},null,8,se)])):b("",!0),g("div",null,[h(m,{modelValue:$.value,"onUpdate:modelValue":a[1]||(a[1]=e=>$.value=e),onRefresh:S},{default:f((()=>[L.value&&0===M.value.length&&"RB"!==v.value||0===M.value.length&&o.value<=-1&&"RB"===v.value&&L.value?(d(),T(i,{key:0})):b("",!0),h(u,{loading:H.value,"onUpdate:loading":a[0]||(a[0]=e=>H.value=e),finished:L.value,"finished-text":0==M.value.length?"":e.$t("live.noMore"),onLoad:E},{default:f((()=>[g("div",ie,[(d(!0),p(R,null,x(M.value,(e=>(d(),p("div",{key:e.gidm,class:"flex-item"},[h(ee,{item:e,onClick:a=>(e=>{s.push(`/match/${e.gidm}`)})(e)},null,8,["item","onClick"])])))),128))])])),_:1},8,["loading","finished","finished-text"])])),_:1},8,["modelValue"])])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],2)}}});ne.__scopeId="data-v-6592595a";export{ne as default};
