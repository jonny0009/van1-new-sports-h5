var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{u as s,s as n,I as o,A as v,r as u}from"./index.b604bcfc.js";import{u as c}from"./useMatch.2c01cb26.js";import{s as m,a as d}from"./s_hot2.bba3cb3a.js";import{s as r,b as p,d as g,r as h,E as f,o as y,R as b,P as T,q as _,O as k,u as I,W as w,$ as O,c as B,x,M as S,e as V,F as R,S as E,_ as M,Y as j,Z as N}from"./vue.5fe62a63.js";import{a as D,g as C,n as F}from"./index.c9b9798b.js";import"./getScore.7bc88c4d.js";const H={class:"item"},L={class:"item-photo"},$=["src"],P={key:0,class:"state"},z={class:"footer"},U=["innerHTML"],A={key:1},K={key:1,class:"mask-reseve"},q={class:"item-title"},W={class:"item-team"},Y={class:"cell"},Z={class:"head"},G={type:4,alt:""},J={class:"score"},Q={class:"cell"},X={class:"head"},ee={type:5,alt:""},ae={class:"score"},le={class:"item-desc"},te={class:"name"},ie={class:"hots"},se=["src"];var ne=r({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,{t:l}=s(),t=p((()=>n.state.app.theme)),i=p((()=>"blue"==t.value?m:d)),u=g(o),r=c(),S=p((()=>{var e;return null==(e=a.item)?void 0:e.gameInfo})),V=p((()=>{const e=a.item;return e.anchorId?o+e.cover:"BK"==e.gameType?o+"FE/common/live/img_video_bg_BK.jpg":o+"FE/common/live/img_video_bg_FT.jpg"})),R=p((()=>{const e=a.item.watchTotal.toLocaleString();return"RB"==a.item.showType?l("live.xLooks",{num:e}):l("live.xReserve",{num:e})})),E=p((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[a.item.gameType])));return(l,t)=>{const s=h("van-image"),n=h("SvgIcon"),o=f("img");return y(),b("div",H,[T("div",L,[_(s,{src:I(V),fit:"cover"},{error:k((()=>[T("img",{src:u.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,$)])),_:1},8,["src"]),"RB"==e.item.showType?(y(),b("div",P,w(l.$t("live.hotNow")),1)):O("",!0),T("div",z,["RB"==e.item.showType?(y(),b("span",{key:0,innerHTML:I(r).showRBTime(e.item)},null,8,U)):(y(),b("span",A,w(I(v)(e.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=e.item.showType?(y(),b("div",K,[T("span",null,w(l.$t("live.xHas",{num:I(R)})),1),T("span",null,w(l.$t("live.playNow")),1)])):O("",!0)]),T("div",q,[I(E)?(y(),B(n,{key:0,name:I(E)},null,8,["name"])):O("",!0),T("strong",null,w(e.item.leagueName),1)]),T("div",W,[T("div",Y,[T("div",Z,[x(T("img",G,null,512),[[o,e.item.homeLogo]]),T("span",null,w(e.item.homeTeam),1)]),T("div",J,[T("span",null,w(I(S).sc_game_H||I(S).sc_FT_H),1)])]),T("div",Q,[T("div",X,[x(T("img",ee,null,512),[[o,e.item.awayLogo]]),T("span",null,w(e.item.awayTeam),1)]),T("div",ae,[T("span",null,w(I(S).sc_game_A||I(S).sc_FT_C||I(S).sc_FT_A),1)])])]),T("div",le,[T("div",te,w(e.item.nickname||e.item.leagueShortName),1),T("div",ie,[T("img",{src:I(i),alt:""},null,8,se),T("span",null,w(a.item.watchTotal.toLocaleString()),1)])])])}}});ne.__scopeId="data-v-075ee586";const oe={class:"tab-title"},ve={class:"title-group"},ue={class:"title"},ce={key:0,class:"next"},me=(e=>(j("data-v-173f8d74"),e=e(),N(),e))((()=>T("div",{class:"img"},[T("img",{src:"/assets/no_an_ma.134981fa.png",alt:""})],-1))),de=["innerHTML"],re={class:"grid-wrapper"},pe={class:"title-group"},ge={class:"title"},he={class:"grid-wrapper"},fe={class:"title-group"},ye={class:"title"},be=["onClick"],Te=["errorImg"],_e={class:"video-user-info"},ke={type:"1",alt:""},Ie={class:"name text-overflow"},we={class:"video-content text-overflow-2"};var Oe=r({setup(e){S((()=>{U()}));const o=g(["HOT","ComingSoon","VIDEO"]),v=p((()=>n.state.app.showFixedBet)),{t:c}=s(),m=V([{type:"RB",title:c("live.hot"),iconName:"live-hot"},{type:"FT",title:c("live.football"),iconName:"live-football"},{type:"BK",title:c("live.basketball"),iconName:"live-basketball"},{type:"TN",title:c("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",title:c("live.badminton"),iconName:"live-badminton"},{type:"VIDEO",title:c("home.shortVideoTitle"),iconName:"live-badminton"}]),d=g("RB"),r=g(-1),j=g("");let N=V({});const H=g([]),L=g(!0),$=g(!1),P=g(!1),z=()=>{U()},U=()=>{["VIDEO"].includes(d.value)?H.value=[]:(async()=>{H.value.length=0,P.value&&(P.value=!1),L.value=!0;const e={page:1,pageSize:100};"RB"===d.value?(e.rbType=1,e.gameType=void 0):(e.rbType=void 0,e.gameType=d.value);const a=await D(e).finally((()=>{L.value=!1})),l=a.data;if(200===a.code){if("RB"===d.value&&0===l.list.length){$.value=!0;const e=await F();return 200===e.code&&e.data&&e.data>e.systemTime?(r.value=e.data-e.systemTime,void(N=setInterval((()=>{r.value-=1e3,0===r.value&&clearInterval(N),K()}),1e3))):void 0}l.list.forEach((e=>{H.value.push(e)})),$.value=H.value.length===l.total}else $.value=!0})(),["RB"].includes(d.value)?W():q.value=[],["RB","VIDEO"].includes(d.value)?(J.value.page=0,Q()):Y.value=[]},A=e=>{u.push(`/match/${e.gidm}`),n.dispatch("app/setMatchLiveIndex",1)},K=()=>{if(r.value<0)return clearInterval(N),void U();function e(e){return e<10?"0"+e:e}const a=Math.round(r.value/1e3);let l=parseInt(""+a/3600%24),t=parseInt(""+a/60%60),i=a%60;l=e(l),t=e(t),i=e(i),j.value=l+":"+t+":"+i},q=g([]),W=async()=>{var e;const a=await D({page:1,pageSize:100,rbType:2}),l=(null==(e=null==a?void 0:a.data)?void 0:e.list)||[];200===a.code&&l.length&&(q.value=l)},Y=g([]),Z=g(!0),G=g(0),J=g({page:0,pageSize:10}),Q=async()=>{var e,s;if(Z.value=!0,G.value>0&&J.value.page*J.value.pageSize>=G.value)return!1;J.value.page++,1===J.value.page&&(Y.value.length=0);const n=await C(((e,s)=>{for(var n in s||(s={}))l.call(s,n)&&i(e,n,s[n]);if(a)for(var n of a(s))t.call(s,n)&&i(e,n,s[n]);return e})({},J.value)).finally((()=>{Z.value=!1})),o=(null==(e=null==n?void 0:n.data)?void 0:e.videoData)||[];G.value=(null==(s=null==n?void 0:n.data)?void 0:s.total)||0,200===n.code&&o.length&&Y.value.push(...o)};return(e,a)=>{const l=h("SvgIcon"),t=h("EmptyData"),i=h("van-list"),s=h("van-collapse-item"),n=h("van-collapse"),c=h("van-tab"),p=h("van-tabs"),g=h("van-pull-refresh"),S=f("img");return y(),b("div",{class:M(["live-page",{"has-bet":I(v)}])},[_(g,{modelValue:P.value,"onUpdate:modelValue":a[4]||(a[4]=e=>P.value=e),onRefresh:U},{default:k((()=>[_(p,{active:d.value,"onUpdate:active":a[3]||(a[3]=e=>d.value=e),swipeable:"",sticky:"",shrink:"",border:!1,"offset-top":"12.8vw","line-height":"0",onChange:z},{default:k((()=>[(y(!0),b(R,null,E(I(m),((v,m)=>(y(),B(c,{key:m,name:v.type},{title:k((()=>[T("div",oe,[T("span",null,w(v.title),1)])])),default:k((()=>[_(n,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e)},{default:k((()=>["VIDEO"!==d.value?(y(),B(s,{key:0,"is-link":!1,class:"collapse-item",name:"HOT"},{title:k((()=>[T("div",ve,[_(l,{class:"first-icon",name:"home-hot-match"}),T("span",ue,w(e.$t("home.hotMatchTitle")),1),_(l,{class:M(["title-icon",{open:o.value.includes("HOT")}]),name:"home-triangle"},null,8,["class"])])])),default:k((()=>[0===H.value.length&&r.value>0&&"RB"===d.value?(y(),b("div",ce,[me,T("p",{innerHTML:e.$t("live.nextAM",{num:j.value})},null,8,de)])):O("",!0),!L.value&&0===H.value.length||0===H.value.length&&r.value<0&&!L.value?(y(),B(t,{key:1})):O("",!0),_(i,{loading:L.value,"onUpdate:loading":a[0]||(a[0]=e=>L.value=e),finished:!L.value},{default:k((()=>[T("div",re,[(y(!0),b(R,null,E(H.value,(e=>(y(),b("div",{key:e.gidm,class:"flex-item"},[_(ne,{item:e,onClick:a=>A(e)},null,8,["item","onClick"])])))),128))])])),_:1},8,["loading","finished"])])),_:1})):O("",!0),q.value.length?(y(),B(s,{key:1,"is-link":!1,class:"collapse-item",name:"ComingSoon"},{title:k((()=>[T("div",pe,[_(l,{class:"first-icon",name:"home-coming"}),T("span",ge,w(e.$t("home.comingSoonTitle")),1),_(l,{class:M(["title-icon",{open:o.value.includes("ComingSoon")}]),name:"home-triangle"},null,8,["class"])])])),default:k((()=>[T("div",he,[(y(!0),b(R,null,E(q.value,(e=>(y(),b("div",{key:e.gidm,class:"flex-item"},[_(ne,{item:e,onClick:a=>A(e)},null,8,["item","onClick"])])))),128))])])),_:1})):O("",!0),["RB","VIDEO"].includes(d.value)?(y(),B(s,{key:2,"is-link":!1,class:"collapse-item",name:"VIDEO"},{title:k((()=>[T("div",fe,[_(l,{class:"first-icon",name:"home-short-video"}),T("span",ye,w(e.$t("home.shortVideoTitle")),1),_(l,{class:M(["title-icon",{open:o.value.includes("VIDEO")}]),name:"home-triangle"},null,8,["class"])])])),default:k((()=>[Z.value||Y.value.length?(y(),B(i,{key:0,loading:Z.value,"onUpdate:loading":a[1]||(a[1]=e=>Z.value=e),finished:J.value.page*J.value.pageSize>=G.value&&!Z.value,"finished-text":0==Y.value.length?"":e.$t("live.noMore"),onLoad:Q,class:"list-group"},{default:k((()=>[(y(!0),b(R,null,E(Y.value,((e,a)=>(y(),b("div",{class:"group-item-box",key:a,onClick:a=>(e=>{u.push({name:"ShortVideo",params:{videoId:e.videoId}})})(e)},[x(T("img",{class:"bg",errorImg:I("/assets/live-bg-error.d3afd559.svg"),type:"1",alt:""},null,8,Te),[[S,e.videoImg]]),T("div",_e,[x(T("img",ke,null,512),[[S,e.leagueIcon]]),T("span",Ie,w(e.leagueName||e.leagueNameCn),1)]),T("div",we,w(e.videoTitle),1)],8,be)))),128))])),_:2},1032,["loading","finished","finished-text"])):Z.value?O("",!0):(y(),B(t,{key:1}))])),_:2},1024)):O("",!0)])),_:2},1032,["modelValue"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])])),_:1},8,["modelValue"])],2)}}});Oe.__scopeId="data-v-173f8d74";export{Oe as default};
