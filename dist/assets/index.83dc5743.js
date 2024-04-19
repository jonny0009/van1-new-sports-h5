import{_ as e}from"./index.c4bdb499.js";import a from"./index.eaf42acb.js";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang.c620338f.js";import{u as l}from"./useMatch.13833ef0.js";import{s,U as o,b as i,d as n,w as u,M as c,n as v,f as r,r as d,E as m,o as p,R as f,P as h,$ as y,x as g,y as I,W as b,q as w,_ as k,u as T,V as x,Y as _,Z as S,c as j,X as U,a as C,h as N,g as R,O as V,F as L,S as M}from"./vue.1f547d27.js";import{v as B}from"./video.es.6daf6508.js";import{s as $,U as H,V as O,W as D}from"./index.09828623.js";import{g as W}from"./getScore.d1f61eb4.js";import{e as E,a as F}from"./index.66cf3e29.js";const q={key:0,class:"video-iframe"},z=["src"],K={key:1,class:"video-error"},Y=(e=>(_("data-v-71432ce5"),e=e(),S(),e))((()=>h("span",{class:"video-icon"},null,-1))),A={class:"error-tips"},P={key:2,class:"touch-pop"},X={class:"team-info"},Z={class:"team-item"},G={type:4,style:{"object-fit":"contain"},alt:""},J={class:"team-name text-overflow"},Q={class:"team-item"},ee={class:"team-name text-overflow"},ae={type:5,style:{"object-fit":"contain"},alt:""},te={class:"team-score"},le=["onClick"],se=["onClick"];var oe=s({props:{liveInfo:{type:Object,default:()=>{}},liveUrl:{type:String,default:""},controls:{type:Boolean,default:!0}},emits:["refresh","touchVideo"],setup(e,{expose:a,emit:t}){const l=e,s=o(),_=i((()=>$.state.match.turnSound)),S=n(null),j=n(!1),U=n(!0),C=n(!1);u(_,((e,a)=>{console.log(`turnSound发生变化，新值为：${e}，旧值为：${a}`),e?(S.value.muted(!1),U.value=!1):(S.value.muted(!0),U.value=!0)}));const N=()=>{C.value=!C.value},R=()=>{if(!l.liveInfo)return;const{gidm:e}=l.liveInfo,a={name:"MatchDetail",params:{id:e}};s.push(a),$.dispatch("app/setMatchLiveIndex",1)},V=()=>{_.value?(U.value=!1,S.value.muted(!1)):(U.value=!0,S.value.muted(!0))},L=n(),M=()=>{try{S.value.dispose&&S.value.dispose()}catch(e){}},H=()=>{if(!document.querySelector("#VideoRef"))return!1;S.value.muted()?(S.value.muted(!1),U.value=!1,$.commit("match/SET_TURN_SOUND",!1)):(S.value.muted(!0),U.value=!0,$.commit("match/SET_TURN_SOUND",!0))},O=()=>{t("refresh")};a({refresh:O,touchVideo:()=>{t("touchVideo")}});const D=n(!0);return c((()=>{v((()=>{clearTimeout(L.value),L.value=setTimeout((()=>{j.value=!1;const e=document.querySelector("#VideoRef");if(e&&l.liveUrl&&!l.liveUrl?.endsWith("html"))try{S.value=B("VideoRef",{muted:!0,controls:l.controls,width:"100%",height:"100%",loop:!0,autoplay:!0,sources:[{src:l.liveUrl,type:"application/x-mpegURL"}]},(()=>{try{e.muted=!0,e.play(),S.value.on("error",(()=>{j.value=!0,M()}))}catch(a){console.error(a)}}))}catch(a){console.error("视频异常！"),console.error(a)}}),500),setTimeout((()=>{D.value=!1}),2e3)}))})),r((()=>{M()})),(a,t)=>{const l=d("van-loading"),s=m("img");return p(),f("div",{class:"video-box-wrap",onClick:N},[e.liveUrl?.endsWith("html")?(p(),f("div",q,[h("iframe",{src:e.liveUrl,width:"100%",height:"100%",frameborder:"0"},null,8,z)])):y("",!0),g(h("video",{id:"VideoRef",style:{"object-fit":"fill"},class:"video-js vjs-default-skin",playsinline:"true",controls:"",preload:"metadata",onPlay:V},null,544),[[I,!e.liveUrl?.endsWith("html")]]),j.value?(p(),f("div",K,[Y,h("div",A,b(a.$t("live.videoFailure")),1),h("div",{class:"error-btn",onClick:O},b(a.$t("live.refreshVideo")),1)])):y("",!0),h("div",{class:k(["pop",{popBg:D.value}])},[w(l,{class:"popBg-loading"})],2),C.value?(p(),f("div",P,[h("div",X,[h("div",Z,[g(h("img",G,null,512),[[s,e.liveInfo.homeLogo]]),h("span",J,b(e.liveInfo.homeTeamAbbr||e.liveInfo.homeTeam),1)]),h("div",Q,[h("span",ee,b(e.liveInfo.awayTeamAbbr||e.liveInfo.awayTeam),1),g(h("img",ae,null,512),[[s,e.liveInfo.awayLogo]])])]),h("div",te,b(T(W)(e.liveInfo,"H"))+" : "+b(T(W)(e.liveInfo,"C")),1),h("div",{class:"match-btn",onClick:x(R,["stop"])},b(a.$t("live.goLive")),9,le)])):y("",!0),h("div",{class:k(["sound-icon",{muted:U.value}]),onClick:x(H,["stop"])},null,10,se)])}}});oe.__scopeId="data-v-71432ce5";const ie={class:"video-footer"},ne={class:"leagueName text-overflow"},ue=(e=>(_("data-v-35548c98"),e=e(),S(),e))((()=>h("div",{class:"flex-1"},null,-1))),ce=["innerHTML"];var ve=s({props:{liveInfo:{type:Object,default:()=>{}},matchIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},setup(e){const a=e,t=l(),s=i((()=>"/assets/ft.7964dceb.jpg"));u((()=>a.activeIndex),(()=>{a.activeIndex===a.matchIndex?g():m.value=!1})),u((()=>a.liveInfo.gidm),(()=>{r()})),c((()=>{r()}));const o=n(""),r=async()=>{const e=a.liveInfo.gidm,t=await E({gidm:e});if(200===t.code){const{streamNa:e}=t.data,{liveali:l,live:s}=e||{},{m3u8:i}=l||s||{};o.value=a.liveInfo.m3u8||i}},m=n(!1),g=()=>{m.value=!1,v((()=>{m.value=!0}))};return c((()=>{a.activeIndex===a.matchIndex?g():m.value=!1})),(a,l)=>{const i=d("SportsIcon");return p(),f("div",{class:"match-item-wrap",style:U({backgroundImage:`url(${T(s)})`})},[m.value?(p(),j(oe,{key:0,"live-url":o.value||e.liveInfo.url,liveInfo:e.liveInfo,controls:!1,onRefresh:g},null,8,["live-url","liveInfo"])):y("",!0),h("div",ie,[w(i,{class:"SportsIcon","icon-src":e.liveInfo.gameType},null,8,["icon-src"]),h("div",ne,b(e.liveInfo.leagueShortName||e.liveInfo.leagueName),1),ue,h("div",{class:"time",innerHTML:T(t).showRBTime(e.liveInfo)},null,8,ce)])],4)}}});ve.__scopeId="data-v-35548c98";const re={key:0,class:"swipeLive"},de={class:"wrap"};var me=s({setup(e){const a=n(0),t=n([]),l=async()=>{const e=await F({page:1,pageSize:5,rbType:1});if(200===e.code){const a=e?.data?.list||[];t.value.length=0,await a.map((async e=>{const a={gidm:e.gidm},l=await E(a);if(200===l.code){const{streamNa:a}=l.data,t=H(a);e.m3u8=e.m3u8||t,e.streamNa=a}t.value.push(e)}))}},s=e=>{a.value=e},o=n();return C((()=>{clearInterval(o.value)})),N((()=>{clearInterval(o.value)})),R((()=>{clearInterval(o.value),console.log(1234),o.value=setInterval((()=>{l()}),15e3)})),c((()=>{t.value.length=0,l(),o.value=setInterval((()=>{l()}),1e4)})),(e,l)=>{const o=d("van-swipe-item"),i=d("van-swipe");return t.value.length?(p(),f("div",re,[w(i,{class:"my-swipe","indicator-color":"white",onChange:s},{default:V((()=>[(p(!0),f(L,null,M(t.value,((e,t)=>(p(),j(o,{key:t},{default:V((()=>[h("div",de,[(p(),j(ve,{key:e.gidm,"live-info":e,"match-index":t,"active-index":a.value},null,8,["live-info","match-index","active-index"]))])])),_:2},1024)))),128))])),_:1})])):y("",!0)}}});me.__scopeId="data-v-12878116";const pe={class:"tabs-cut"},fe={class:"sportlive"};var he=s({setup(l){const s=i((()=>{const e=$.state.app.globalBarHeaderHeight||48;return e>60?48:e})),o=n(),v=n(!1),m=n(null),g=async(e=!0)=>{await U(),await B(e)},I=n(""),x=n(!0),_=n([""]),S=n([]),U=async()=>{const e=await O({})||{};if(200===e.code&&e.data){const a=e.data||[];S.value=a.filter((e=>!_.value.includes(e.gameType))),S.value=[{gameType:""},...S.value]}},C=n([]),B=async(e=!0)=>{const a={gameType:o.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:200};e&&(v.value=!1);const t=await D(a)||{};if(e&&(v.value=!0),200===t.code&&t.data?.matchList?.baseData){const e=t.data?.matchList?.baseData||[];C.value=e.filter((e=>!_.value.includes(e.gameType)))}else C.value=[]},H=()=>{},W=e=>{C.value=[],o.value=e,B()};c((()=>{z(),v.value=!1,g()})),R((()=>{z()})),N((()=>{P()})),r((()=>{P(),$.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),$.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),$.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})}));const E=i((()=>$.state.app.businessConfig.pushSwitch));u(E,(()=>{z()}));const F=i((()=>$.state.user.scrollNumY));u((()=>F.value),(e=>{e>88&&(x.value=!1)}));const q=n(),z=()=>{clearTimeout(q),q.value=setTimeout((()=>{Y()}),100)},K=n(15e3),Y=()=>{1==+E.value&&(K.value=12e4),P(),A.value=setInterval((()=>{g(!1)}),K.value)},A=n(),P=()=>{clearInterval(A.value)},X=n(""),Z=i((()=>$.state.home.refreshChangeTime));return u(Z,(e=>{e&&(clearTimeout(X.value),X.value=setTimeout((()=>{}),100))})),(l,i)=>{const n=d("SportsButton"),u=d("Loading"),c=d("van-sticky"),r=d("HomeEmpty"),g=d("FooterHeight"),_=d("van-tab"),U=d("van-tabs");return p(),f("div",{ref_key:"newContainer",ref:m},[w(me,{class:"mt10"}),h("div",pe,[w(U,{duration:.2,active:I.value,"onUpdate:active":i[0]||(i[0]=e=>I.value=e),shrink:"","line-height":"0",animated:x.value,onChange:W,"swipe-threshold":3,onClickTab:i[1]||(i[1]=e=>x.value=!0)},{default:V((()=>[(p(!0),f(L,null,M(S.value,((i,d)=>(p(),j(_,{key:d,name:i.gameType},{title:V((()=>[0===d?(p(),j(e,{key:0,text:l.$t("sport.all"),active:!o.value,class:"tabs-cut-1"},null,8,["text","active"])):(p(),j(n,{key:1,class:k(["tabs-cut-1",i.gameType]),text:i.gameType,active:I.value===i.gameType,count:i.count,"show-count":""},null,8,["text","active","class","count"]))])),default:V((()=>[h("div",fe,[v.value?(p(),f(L,{key:1},[(p(!0),f(L,null,M(C.value,((e,l)=>(p(),f(L,{key:l},[0===l?(p(),j(c,{key:0,"offset-top":T(s),container:m.value,"z-index":"5"},{default:V((()=>[w(t,{class:k({mt20:0!==l}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):y("",!0),w(a,{"play-title-toggle":!1,"send-params":e,tabType:"RB",class:k({mt10:0!==l})},null,8,["send-params","class"])],64)))),128)),C.value.length?y("",!0):(p(),j(r,{key:0}))],64)):(p(),j(u,{key:0})),C.value.length?(p(),f("div",{key:2,class:"Button-MatchMore mt10",onClick:H},[h("span",null,b(l.$t("live.noMore")),1)])):y("",!0),w(g)])])),_:2},1032,["name"])))),128))])),_:1},8,["duration","active","animated"])])],512)}}});he.__scopeId="data-v-68904684";export{he as default};
