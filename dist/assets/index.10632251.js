import{_ as e}from"./index.a9140cbf.js";import a from"./index.5a89577f.js";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang.531fbf92.js";import{g as l,u as s}from"./useMatch.e36b86b1.js";import{s as o,U as i,b as n,d as u,w as c,M as v,n as r,f as d,r as m,E as p,o as f,R as h,P as y,$ as g,x as I,y as b,W as w,q as k,_ as x,u as T,V as _,Y as S,Z as j,c as U,X as C,O as N,F as R,S as V,g as L,h as M}from"./vue.16414fe4.js";import{v as B}from"./video.es.cef20227.js";import{s as $,U as H,V as O,W as D}from"./index.bfb5f96a.js";import{e as F,a as W}from"./index.e69dac77.js";const E={key:0,class:"video-iframe"},q=["src"],z={key:1,class:"video-error"},K=(e=>(S("data-v-1cc53198"),e=e(),j(),e))((()=>y("span",{class:"video-icon"},null,-1))),Y={class:"error-tips"},A={key:2,class:"touch-pop"},P={class:"team-info"},X={class:"team-item"},Z={type:4,style:{"object-fit":"contain"},alt:""},G={class:"team-name text-overflow"},J={class:"team-item"},Q={class:"team-name text-overflow"},ee={type:5,style:{"object-fit":"contain"},alt:""},ae={class:"team-score"},te=["onClick"],le=["onClick"];var se=o({props:{liveInfo:{type:Object,default:()=>{}},liveUrl:{type:String,default:""},controls:{type:Boolean,default:!0}},emits:["refresh","touchVideo"],setup(e,{expose:a,emit:t}){const s=e,o=i(),S=n((()=>$.state.match.turnSound)),j=u(null),U=u(!1),C=u(!1),N=u(!1);c(S,((e,a)=>{console.log(`turnSound发生变化，新值为：${e}，旧值为：${a}`),e?(j.value.muted(!1),C.value=!1):(j.value.muted(!0),C.value=!0)}));const R=()=>{N.value=!N.value},V=()=>{if(!s.liveInfo)return;const{gidm:e}=s.liveInfo,a={name:"MatchDetail",params:{id:e}};o.push(a),$.dispatch("app/setMatchLiveIndex",1)},L=()=>{S.value?(C.value=!1,j.value.muted(!1)):(C.value=!0,j.value.muted(!0))},M=u(),H=()=>{try{j.value.dispose&&j.value.dispose()}catch(e){}},O=()=>{if(!document.querySelector("#VideoRef"))return!1;j.value.muted()?(j.value.muted(!1),C.value=!1,$.commit("match/SET_TURN_SOUND",!1)):(j.value.muted(!0),C.value=!0,$.commit("match/SET_TURN_SOUND",!0))},D=()=>{t("refresh")};a({refresh:D,touchVideo:()=>{t("touchVideo")}});const F=u(!0);return v((()=>{r((()=>{clearTimeout(M.value),M.value=setTimeout((()=>{U.value=!1;const e=document.querySelector("#VideoRef");if(e&&s.liveUrl&&!s.liveUrl?.endsWith("html"))try{j.value=B("VideoRef",{muted:!1,controls:s.controls,width:"100%",height:"100%",loop:!0,autoplay:!0,sources:[{src:s.liveUrl,type:"application/x-mpegURL"}]},(()=>{try{e.muted=!1,e.play(),j.value.on("error",(()=>{U.value=!0,H()}))}catch(a){console.error(a)}}))}catch(a){console.error("视频异常！"),console.error(a)}}),500),setTimeout((()=>{F.value=!1}),2e3)}))})),d((()=>{H()})),(a,t)=>{const s=m("van-loading"),o=p("img");return f(),h("div",{class:"video-box-wrap",onClick:R},[e.liveUrl?.endsWith("html")?(f(),h("div",E,[y("iframe",{src:e.liveUrl,width:"100%",height:"100%",frameborder:"0"},null,8,q)])):g("",!0),I(y("video",{id:"VideoRef",style:{"object-fit":"fill"},class:"video-js vjs-default-skin",playsinline:"true",controls:"",preload:"metadata",onPlay:L},null,544),[[b,!e.liveUrl?.endsWith("html")]]),U.value?(f(),h("div",z,[K,y("div",Y,w(a.$t("live.videoFailure")),1),y("div",{class:"error-btn",onClick:D},w(a.$t("live.refreshVideo")),1)])):g("",!0),y("div",{class:x(["pop",{popBg:F.value}])},[k(s,{class:"popBg-loading"})],2),N.value?(f(),h("div",A,[y("div",P,[y("div",X,[I(y("img",Z,null,512),[[o,e.liveInfo.homeLogo]]),y("span",G,w(e.liveInfo.homeTeamAbbr||e.liveInfo.homeTeam),1)]),y("div",J,[y("span",Q,w(e.liveInfo.awayTeamAbbr||e.liveInfo.awayTeam),1),I(y("img",ee,null,512),[[o,e.liveInfo.awayLogo]])])]),y("div",ae,w(T(l)(e.liveInfo,"H"))+" : "+w(T(l)(e.liveInfo,"C")),1),y("div",{class:"match-btn",onClick:_(V,["stop"])},w(a.$t("live.goLive")),9,te)])):g("",!0),y("div",{class:x(["sound-icon",{muted:C.value}]),onClick:_(O,["stop"])},null,10,le)])}}});se.__scopeId="data-v-1cc53198";const oe={class:"video-footer"},ie={class:"leagueName text-overflow"},ne=(e=>(S("data-v-0b31c462"),e=e(),j(),e))((()=>y("div",{class:"flex-1"},null,-1))),ue=["innerHTML"];var ce=o({props:{liveInfo:{type:Object,default:()=>{}},matchIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},setup(e){const a=e,t=s(),l=n((()=>"/assets/ft.7964dceb.jpg"));c((()=>a.activeIndex),(()=>{a.activeIndex===a.matchIndex?p():d.value=!1})),c((()=>a.liveInfo.gidm),(()=>{i()})),v((()=>{i()}));const o=u(""),i=async()=>{const e=a.liveInfo.gidm,t=await F({gidm:e});if(200===t.code){const{streamNa:e}=t.data,{liveali:l,live:s}=e||{},{m3u8:i}=l||s||{};o.value=a.liveInfo.m3u8||i}},d=u(!1),p=()=>{d.value=!1,r((()=>{d.value=!0}))};return v((()=>{a.activeIndex===a.matchIndex?p():d.value=!1})),(a,s)=>{const i=m("SportsIcon");return f(),h("div",{class:"match-item-wrap",style:C({backgroundImage:`url(${T(l)})`})},[d.value?(f(),U(se,{key:0,"live-url":o.value||e.liveInfo.url,"live-info":e.liveInfo,controls:!1,onRefresh:p},null,8,["live-url","live-info"])):g("",!0),y("div",oe,[k(i,{class:"SportsIcon","icon-src":e.liveInfo.gameType},null,8,["icon-src"]),y("div",ie,w(e.liveInfo.leagueShortName||e.liveInfo.leagueName),1),ne,y("div",{class:"time",innerHTML:T(t).showRBTime(e.liveInfo)},null,8,ue)])],4)}}});ce.__scopeId="data-v-0b31c462";const ve={key:0,class:"swipeLive"},re={class:"wrap"};var de=o({setup(e){const a=u(0),t=u([]),l=e=>{a.value=e};return v((()=>{t.value.length=0,(async()=>{const e=await W({page:1,pageSize:5,rbType:1,filterFlag:2});if(200===e.code){const a=e?.data?.list||[];t.value.length=0,await a.map((async e=>{const a={gidm:e.gidm},l=await F(a);if(200===l.code){const{streamNa:a}=l.data,t=H(a);e.m3u8=e.m3u8||t,e.streamNa=a}t.value.push(e)}))}})()})),(e,s)=>{const o=m("van-swipe-item"),i=m("van-swipe");return t.value.length?(f(),h("div",ve,[k(i,{class:"my-swipe","indicator-color":"white",onChange:l},{default:N((()=>[(f(!0),h(R,null,V(t.value,((e,t)=>(f(),U(o,{key:t},{default:N((()=>[y("div",re,[(f(),U(ce,{key:e.gidm,"live-info":e,"match-index":t,"active-index":a.value},null,8,["live-info","match-index","active-index"]))])])),_:2},1024)))),128))])),_:1})])):g("",!0)}}});de.__scopeId="data-v-363df66a";const me={class:"tabs-cut"},pe={class:"sportlive"};var fe=o({setup(l){const s=n((()=>{const e=$.state.app.globalBarHeaderHeight||48;return e>60?48:e})),o=u(),i=u(!1),r=u(null),p=async(e=!0)=>{await j(),await B(e)},I=u(""),b=u(!0),_=u([""]),S=u([]),j=async()=>{const e=await O({})||{};if(200===e.code&&e.data){const a=e.data||[];S.value=a.filter((e=>!_.value.includes(e.gameType))),S.value=[{gameType:""},...S.value]}},C=u([]),B=async(e=!0)=>{const a={gameType:o.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:200};e&&(i.value=!1);const t=await D(a)||{};if(e&&(i.value=!0),200===t.code&&t.data?.matchList?.baseData){const e=t.data?.matchList?.baseData||[];C.value=e.filter((e=>!_.value.includes(e.gameType)))}else C.value=[]},H=()=>{},F=e=>{C.value=[],o.value=e,B()};v((()=>{z(),i.value=!1,p()})),L((()=>{z()})),M((()=>{P()})),d((()=>{P(),$.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),$.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),$.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})}));const W=n((()=>$.state.app.businessConfig.pushSwitch));c(W,(()=>{z()}));const E=n((()=>$.state.user.scrollNumY));c((()=>E.value),(e=>{e&&(b.value=!1)}));const q=u(),z=()=>{clearTimeout(q),q.value=setTimeout((()=>{Y()}),100)},K=u(15e3),Y=()=>{1==+W.value&&(K.value=12e4),P(),A.value=setInterval((()=>{p(!1)}),K.value)},A=u(),P=()=>{clearInterval(A.value)},X=u(""),Z=n((()=>$.state.home.refreshChangeTime));return c(Z,(e=>{e&&(clearTimeout(X.value),X.value=setTimeout((()=>{}),100))})),(l,n)=>{const u=m("SportsButton"),c=m("Loading"),v=m("van-sticky"),d=m("HomeEmpty"),p=m("FooterHeight"),_=m("van-tab"),j=m("van-tabs");return f(),h("div",{ref_key:"newContainer",ref:r},[k(de,{class:"mt10"}),y("div",me,[k(j,{active:I.value,"onUpdate:active":n[0]||(n[0]=e=>I.value=e),duration:.2,shrink:"","line-height":"0",animated:b.value,"swipe-threshold":3,onChange:F,onClickTab:n[1]||(n[1]=e=>b.value=!0)},{default:N((()=>[(f(!0),h(R,null,V(S.value,((n,m)=>(f(),U(_,{key:m,name:n.gameType},{title:N((()=>[0===m?(f(),U(e,{key:0,text:l.$t("sport.all"),active:!o.value,class:"tabs-cut-1"},null,8,["text","active"])):(f(),U(u,{key:1,class:x(["tabs-cut-1",n.gameType]),text:n.gameType,active:I.value===n.gameType,count:n.count,"show-count":""},null,8,["text","active","class","count"]))])),default:N((()=>[y("div",pe,[i.value?(f(),h(R,{key:1},[(f(!0),h(R,null,V(C.value,((e,l)=>(f(),h(R,{key:l},[0===l?(f(),U(v,{key:0,"offset-top":T(s),container:r.value,"z-index":"5"},{default:N((()=>[k(t,{class:x({mt20:0!==l}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):g("",!0),k(a,{"play-title-toggle":!1,"send-params":e,"tab-type":"RB",class:x({mt10:0!==l})},null,8,["send-params","class"])],64)))),128)),C.value.length?g("",!0):(f(),U(d,{key:0}))],64)):(f(),U(c,{key:0})),C.value.length?(f(),h("div",{key:2,class:"Button-MatchMore mt10",onClick:H},[y("span",null,w(l.$t("live.noMore")),1)])):g("",!0),k(p)])])),_:2},1032,["name"])))),128))])),_:1},8,["active","duration","animated"])])],512)}}});fe.__scopeId="data-v-00ca883e";export{fe as default};
