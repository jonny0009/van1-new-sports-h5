import{_ as e}from"./index.c4bdb499.js";import a from"./index.99f9d1be.js";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang.4689f65f.js";import{u as l}from"./useMatch.9d68a5cb.js";import{s,U as o,b as i,d as n,w as u,M as c,n as v,f as r,r as d,E as m,o as p,R as f,P as h,$ as y,x as g,y as b,W as I,q as w,_ as k,u as x,V as T,Y as _,Z as S,c as j,X as U,O as C,F as N,S as R,g as V,h as L}from"./vue.1f547d27.js";import{v as M}from"./video.es.168db8d0.js";import{s as B,U as $,V as H,W as O}from"./index.17359687.js";import{g as D}from"./getScore.e83b538f.js";import{e as F,a as W}from"./index.a8bb0695.js";const E={key:0,class:"video-iframe"},q=["src"],z={key:1,class:"video-error"},K=(e=>(_("data-v-1cc53198"),e=e(),S(),e))((()=>h("span",{class:"video-icon"},null,-1))),Y={class:"error-tips"},A={key:2,class:"touch-pop"},P={class:"team-info"},X={class:"team-item"},Z={type:4,style:{"object-fit":"contain"},alt:""},G={class:"team-name text-overflow"},J={class:"team-item"},Q={class:"team-name text-overflow"},ee={type:5,style:{"object-fit":"contain"},alt:""},ae={class:"team-score"},te=["onClick"],le=["onClick"];var se=s({props:{liveInfo:{type:Object,default:()=>{}},liveUrl:{type:String,default:""},controls:{type:Boolean,default:!0}},emits:["refresh","touchVideo"],setup(e,{expose:a,emit:t}){const l=e,s=o(),_=i((()=>B.state.match.turnSound)),S=n(null),j=n(!1),U=n(!1),C=n(!1);u(_,((e,a)=>{console.log(`turnSound发生变化，新值为：${e}，旧值为：${a}`),e?(S.value.muted(!1),U.value=!1):(S.value.muted(!0),U.value=!0)}));const N=()=>{C.value=!C.value},R=()=>{if(!l.liveInfo)return;const{gidm:e}=l.liveInfo,a={name:"MatchDetail",params:{id:e}};s.push(a),B.dispatch("app/setMatchLiveIndex",1)},V=()=>{_.value?(U.value=!1,S.value.muted(!1)):(U.value=!0,S.value.muted(!0))},L=n(),$=()=>{try{S.value.dispose&&S.value.dispose()}catch(e){}},H=()=>{if(!document.querySelector("#VideoRef"))return!1;S.value.muted()?(S.value.muted(!1),U.value=!1,B.commit("match/SET_TURN_SOUND",!1)):(S.value.muted(!0),U.value=!0,B.commit("match/SET_TURN_SOUND",!0))},O=()=>{t("refresh")};a({refresh:O,touchVideo:()=>{t("touchVideo")}});const F=n(!0);return c((()=>{v((()=>{clearTimeout(L.value),L.value=setTimeout((()=>{j.value=!1;const e=document.querySelector("#VideoRef");if(e&&l.liveUrl&&!l.liveUrl?.endsWith("html"))try{S.value=M("VideoRef",{muted:!1,controls:l.controls,width:"100%",height:"100%",loop:!0,autoplay:!0,sources:[{src:l.liveUrl,type:"application/x-mpegURL"}]},(()=>{try{e.muted=!1,e.play(),S.value.on("error",(()=>{j.value=!0,$()}))}catch(a){console.error(a)}}))}catch(a){console.error("视频异常！"),console.error(a)}}),500),setTimeout((()=>{F.value=!1}),2e3)}))})),r((()=>{$()})),(a,t)=>{const l=d("van-loading"),s=m("img");return p(),f("div",{class:"video-box-wrap",onClick:N},[e.liveUrl?.endsWith("html")?(p(),f("div",E,[h("iframe",{src:e.liveUrl,width:"100%",height:"100%",frameborder:"0"},null,8,q)])):y("",!0),g(h("video",{id:"VideoRef",style:{"object-fit":"fill"},class:"video-js vjs-default-skin",playsinline:"true",controls:"",preload:"metadata",onPlay:V},null,544),[[b,!e.liveUrl?.endsWith("html")]]),j.value?(p(),f("div",z,[K,h("div",Y,I(a.$t("live.videoFailure")),1),h("div",{class:"error-btn",onClick:O},I(a.$t("live.refreshVideo")),1)])):y("",!0),h("div",{class:k(["pop",{popBg:F.value}])},[w(l,{class:"popBg-loading"})],2),C.value?(p(),f("div",A,[h("div",P,[h("div",X,[g(h("img",Z,null,512),[[s,e.liveInfo.homeLogo]]),h("span",G,I(e.liveInfo.homeTeamAbbr||e.liveInfo.homeTeam),1)]),h("div",J,[h("span",Q,I(e.liveInfo.awayTeamAbbr||e.liveInfo.awayTeam),1),g(h("img",ee,null,512),[[s,e.liveInfo.awayLogo]])])]),h("div",ae,I(x(D)(e.liveInfo,"H"))+" : "+I(x(D)(e.liveInfo,"C")),1),h("div",{class:"match-btn",onClick:T(R,["stop"])},I(a.$t("live.goLive")),9,te)])):y("",!0),h("div",{class:k(["sound-icon",{muted:U.value}]),onClick:T(H,["stop"])},null,10,le)])}}});se.__scopeId="data-v-1cc53198";const oe={class:"video-footer"},ie={class:"leagueName text-overflow"},ne=(e=>(_("data-v-0b31c462"),e=e(),S(),e))((()=>h("div",{class:"flex-1"},null,-1))),ue=["innerHTML"];var ce=s({props:{liveInfo:{type:Object,default:()=>{}},matchIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},setup(e){const a=e,t=l(),s=i((()=>"/assets/ft.7964dceb.jpg"));u((()=>a.activeIndex),(()=>{a.activeIndex===a.matchIndex?g():m.value=!1})),u((()=>a.liveInfo.gidm),(()=>{r()})),c((()=>{r()}));const o=n(""),r=async()=>{const e=a.liveInfo.gidm,t=await F({gidm:e});if(200===t.code){const{streamNa:e}=t.data,{liveali:l,live:s}=e||{},{m3u8:i}=l||s||{};o.value=a.liveInfo.m3u8||i}},m=n(!1),g=()=>{m.value=!1,v((()=>{m.value=!0}))};return c((()=>{a.activeIndex===a.matchIndex?g():m.value=!1})),(a,l)=>{const i=d("SportsIcon");return p(),f("div",{class:"match-item-wrap",style:U({backgroundImage:`url(${x(s)})`})},[m.value?(p(),j(se,{key:0,"live-url":o.value||e.liveInfo.url,"live-info":e.liveInfo,controls:!1,onRefresh:g},null,8,["live-url","live-info"])):y("",!0),h("div",oe,[w(i,{class:"SportsIcon","icon-src":e.liveInfo.gameType},null,8,["icon-src"]),h("div",ie,I(e.liveInfo.leagueShortName||e.liveInfo.leagueName),1),ne,h("div",{class:"time",innerHTML:x(t).showRBTime(e.liveInfo)},null,8,ue)])],4)}}});ce.__scopeId="data-v-0b31c462";const ve={key:0,class:"swipeLive"},re={class:"wrap"};var de=s({setup(e){const a=n(0),t=n([]),l=e=>{a.value=e};return c((()=>{t.value.length=0,(async()=>{const e=await W({page:1,pageSize:5,rbType:1,filterFlag:2});if(200===e.code){const a=e?.data?.list||[];t.value.length=0,await a.map((async e=>{const a={gidm:e.gidm},l=await F(a);if(200===l.code){const{streamNa:a}=l.data,t=$(a);e.m3u8=e.m3u8||t,e.streamNa=a}t.value.push(e)}))}})()})),(e,s)=>{const o=d("van-swipe-item"),i=d("van-swipe");return t.value.length?(p(),f("div",ve,[w(i,{class:"my-swipe","indicator-color":"white",onChange:l},{default:C((()=>[(p(!0),f(N,null,R(t.value,((e,t)=>(p(),j(o,{key:t},{default:C((()=>[h("div",re,[(p(),j(ce,{key:e.gidm,"live-info":e,"match-index":t,"active-index":a.value},null,8,["live-info","match-index","active-index"]))])])),_:2},1024)))),128))])),_:1})])):y("",!0)}}});de.__scopeId="data-v-363df66a";const me={class:"tabs-cut"},pe={class:"sportlive"};var fe=s({setup(l){const s=i((()=>{const e=B.state.app.globalBarHeaderHeight||48;return e>60?48:e})),o=n(),v=n(!1),m=n(null),g=async(e=!0)=>{await U(),await $(e)},b=n(""),T=n(!0),_=n([""]),S=n([]),U=async()=>{const e=await H({})||{};if(200===e.code&&e.data){const a=e.data||[];S.value=a.filter((e=>!_.value.includes(e.gameType))),S.value=[{gameType:""},...S.value]}},M=n([]),$=async(e=!0)=>{const a={gameType:o.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:50};e&&(v.value=!1);const t=await O(a)||{};if(e&&(v.value=!0),200===t.code&&t.data?.matchList?.baseData){const e=t.data?.matchList?.baseData||[];M.value=e.filter((e=>!_.value.includes(e.gameType)))}else M.value=[]},D=()=>{},F=e=>{M.value=[],o.value=e,$()};c((()=>{z(),v.value=!1,g()})),V((()=>{z()})),L((()=>{P()})),r((()=>{P(),B.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),B.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),B.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})}));const W=i((()=>B.state.app.businessConfig.pushSwitch));u(W,(()=>{z()}));const E=i((()=>B.state.user.scrollNumY));u((()=>E.value),(e=>{e>88&&(T.value=!1)}));const q=n(),z=()=>{clearTimeout(q),q.value=setTimeout((()=>{Y()}),100)},K=n(15e3),Y=()=>{1==+W.value&&(K.value=12e4),P(),A.value=setInterval((()=>{g(!1)}),K.value)},A=n(),P=()=>{clearInterval(A.value)},X=n(""),Z=i((()=>B.state.home.refreshChangeTime));return u(Z,(e=>{e&&(clearTimeout(X.value),X.value=setTimeout((()=>{}),100))})),(l,i)=>{const n=d("SportsButton"),u=d("Loading"),c=d("van-sticky"),r=d("HomeEmpty"),g=d("FooterHeight"),_=d("van-tab"),U=d("van-tabs");return p(),f("div",{ref_key:"newContainer",ref:m},[w(de,{class:"mt10"}),h("div",me,[w(U,{active:b.value,"onUpdate:active":i[0]||(i[0]=e=>b.value=e),duration:.2,shrink:"","line-height":"0",animated:T.value,"swipe-threshold":3,onChange:F,onClickTab:i[1]||(i[1]=e=>T.value=!0)},{default:C((()=>[(p(!0),f(N,null,R(S.value,((i,d)=>(p(),j(_,{key:d,name:i.gameType},{title:C((()=>[0===d?(p(),j(e,{key:0,text:l.$t("sport.all"),active:!o.value,class:"tabs-cut-1"},null,8,["text","active"])):(p(),j(n,{key:1,class:k(["tabs-cut-1",i.gameType]),text:i.gameType,active:b.value===i.gameType,count:i.count,"show-count":""},null,8,["text","active","class","count"]))])),default:C((()=>[h("div",pe,[v.value?(p(),f(N,{key:1},[(p(!0),f(N,null,R(M.value,((e,l)=>(p(),f(N,{key:l},[0===l?(p(),j(c,{key:0,"offset-top":x(s),container:m.value,"z-index":"5"},{default:C((()=>[w(t,{class:k({mt20:0!==l}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):y("",!0),w(a,{"play-title-toggle":!1,"send-params":e,"tab-type":"RB",class:k({mt10:0!==l})},null,8,["send-params","class"])],64)))),128)),M.value.length?y("",!0):(p(),j(r,{key:0}))],64)):(p(),j(u,{key:0})),M.value.length?(p(),f("div",{key:2,class:"Button-MatchMore mt10",onClick:D},[h("span",null,I(l.$t("live.noMore")),1)])):y("",!0),w(g)])])),_:2},1032,["name"])))),128))])),_:1},8,["active","duration","animated"])])],512)}}});fe.__scopeId="data-v-c86582ac";export{fe as default};
