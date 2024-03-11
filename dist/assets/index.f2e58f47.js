import{_ as e}from"./index.9d314340.js";import a from"./index.af420cec.js";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang.dfe32488.js";import{u as l}from"./useMatch.4e2763a2.js";import{s,b as o,d as i,w as u,M as n,n as c,f as r,r as v,o as d,S as m,P as p,V as f,$ as h,q as y,Z as g,U as b,X as k,Y as x,c as T,u as w,W as _,O as I,F as S,_ as j,g as N,h as C}from"./vue.144c3097.js";import{v as R}from"./video.es.1eacbbb5.js";import{s as V,r as U}from"./index.44e73e75.js";import{a as M,e as B}from"./index.e1f67632.js";import{d as L,e as $}from"./index.d7bd6707.js";import"./getScore.6e9b8973.js";const H={class:"video-box-wrap"},D={key:0,class:"video-error"},O=(e=>(k("data-v-0bcb1388"),e=e(),x(),e))((()=>p("span",{class:"video-icon"},null,-1))),F={class:"error-tips"},q=["onClick"];var z=s({props:{liveUrl:{type:String,default:""},controls:{type:Boolean,default:!0}},emits:["refresh","touchVideo"],setup(e,{expose:a,emit:t}){const l=e,s=o((()=>V.state.match.turnSound)),k=i(null),x=i(!1),T=i(!0);u(s,((e,a)=>{console.log(`turnSound发生变化，新值为：${e}，旧值为：${a}`),e?(k.value.muted(!1),T.value=!1):(k.value.muted(!0),T.value=!0)}));const w=()=>{s.value?(T.value=!1,k.value.muted(!1)):(T.value=!0,k.value.muted(!0))},_=i(),I=()=>{try{k.value.dispose&&k.value.dispose()}catch(e){}},S=()=>{if(!document.querySelector("#VideoRef"))return!1;k.value.muted()?(k.value.muted(!1),T.value=!1,V.commit("match/SET_TURN_SOUND",!1)):(k.value.muted(!0),T.value=!0,V.commit("match/SET_TURN_SOUND",!0))},j=()=>{t("refresh")};a({refresh:j,touchVideo:()=>{t("touchVideo")}});const N=i(!0);return n((()=>{c((()=>{clearTimeout(_.value),_.value=setTimeout((()=>{x.value=!1;const e=document.querySelector("#VideoRef");if(e&&l.liveUrl)try{k.value=R("VideoRef",{muted:!0,controls:l.controls,width:"100%",height:"100%",loop:!0,autoplay:!0,sources:[{src:l.liveUrl,type:"application/x-mpegURL"}]},(()=>{try{e.muted=!0,e.play(),k.value.on("error",(()=>{x.value=!0,I()}))}catch(a){console.error(a)}}))}catch(a){console.error("视频异常！"),console.error(a)}}),500),setTimeout((()=>{N.value=!1}),2e3)}))})),r((()=>{I()})),(e,a)=>{const t=v("van-loading");return d(),m("div",H,[p("video",{id:"VideoRef",style:{"object-fit":"fill"},class:"video-js vjs-default-skin",playsinline:"true",controls:"",preload:"metadata",onPlay:w},null,32),x.value?(d(),m("div",D,[O,p("div",F,f(e.$t("live.videoFailure")),1),p("div",{class:"error-btn",onClick:j},f(e.$t("live.refreshVideo")),1)])):h("",!0),p("div",{class:g(["pop",{popBg:N.value}])},[y(t,{class:"popBg-loading"})],2),p("div",{class:g(["sound-icon",{muted:T.value}]),onClick:b(S,["stop"])},null,10,q)])}}});z.__scopeId="data-v-0bcb1388";const E={class:"video-footer"},K={class:"leagueName text-overflow"},Y=(e=>(k("data-v-6091e662"),e=e(),x(),e))((()=>p("div",{class:"flex-1"},null,-1))),P=["innerHTML"];var W=s({props:{liveInfo:{type:Object,default:()=>{}},matchIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},setup(e){const a=e,t=l(),s=o((()=>"/assets/ft.7964dceb.jpg"));u((()=>a.activeIndex),(()=>{a.activeIndex===a.matchIndex?g():r.value=!1}));const r=i(!1),g=()=>{r.value=!1,c((()=>{r.value=!0}))};return n((()=>{a.activeIndex===a.matchIndex?g():r.value=!1})),(a,l)=>{const o=v("SportsIcon");return d(),m("div",{class:"match-item-wrap",style:_({backgroundImage:`url(${w(s)})`})},[r.value?(d(),T(w(z),{key:0,"live-url":e.liveInfo.m3u8||e.liveInfo.url,controls:!1,onRefresh:g},null,8,["live-url"])):h("",!0),p("div",E,[y(o,{class:"SportsIcon","icon-src":e.liveInfo.gameType},null,8,["icon-src"]),p("div",K,f(e.liveInfo.leagueShortName||e.liveInfo.leagueName),1),Y,p("div",{class:"time",innerHTML:w(t).showRBTime(e.liveInfo)},null,8,P)])],4)}}});W.__scopeId="data-v-6091e662";const X={key:0,class:"swipeLive"},Z={class:"wrap"};var A=s({setup(e){const a=i(0),t=i([]),l=e=>{a.value=e};return n((()=>{t.value.length=0,(async()=>{var e;const a=await M({page:1,pageSize:5,rbType:1});if(200===a.code){const l=(null==(e=null==a?void 0:a.data)?void 0:e.list)||[];t.value.length=0,await l.map((async e=>{const a={gidm:e.gidm},l=await B(a);if(200===l.code){const{streamNa:a}=l.data,{liveali:t}=a||{},{m3u8:s}=t||{};e.m3u8=e.m3u8||s,e.streamNa=a}t.value.push(e)}))}})()})),(e,s)=>{const o=v("van-swipe-item"),i=v("van-swipe");return t.value.length?(d(),m("div",X,[y(i,{class:"my-swipe","indicator-color":"white",onChange:l},{default:I((()=>[(d(!0),m(S,null,j(t.value,((e,t)=>(d(),T(o,{key:t,onClick:a=>(e=>{if(!e)return;const{gidm:a}=e,t={name:"MatchDetail",params:{id:a}};U.push(t),V.dispatch("app/setMatchLiveIndex",1)})(e)},{default:I((()=>[p("div",Z,[(d(),T(W,{key:t,"live-info":e,"match-index":t,"active-index":a.value},null,8,["live-info","match-index","active-index"]))])])),_:2},1032,["onClick"])))),128))])),_:1})])):h("",!0)}}});A.__scopeId="data-v-7f2dfbb6";const G={class:"tabs-cut"},J={class:"sportlive"};var Q=s({setup(l){const s=o((()=>{const e=V.state.app.globalBarHeaderHeight||48;return e>60?48:e})),c=i(),b=i(!1),k=i(null),x=async(e=!0)=>{await B(),await D(e)},_=i(""),R=i(!0),U=i([""]),M=i([]),B=async()=>{const e=await L({})||{};if(200===e.code&&e.data){const a=e.data||[];M.value=a.filter((e=>!U.value.includes(e.gameType))),M.value=[{gameType:""},...M.value]}},H=i([]),D=async(e=!0)=>{var a,t,l,s;const o={gameType:c.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:200};e&&(b.value=!1);const i=await $(o)||{};if(e&&(b.value=!0),200===i.code&&(null==(t=null==(a=i.data)?void 0:a.matchList)?void 0:t.baseData)){const e=(null==(s=null==(l=i.data)?void 0:l.matchList)?void 0:s.baseData)||[];H.value=e.filter((e=>!U.value.includes(e.gameType)))}else H.value=[]},O=()=>{},F=e=>{H.value=[],c.value=e,D()};n((()=>{K(),b.value=!1,x()})),N((()=>{K()})),C((()=>{X()})),r((()=>{X(),V.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),V.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),V.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})}));const q=o((()=>V.state.app.businessConfig.pushSwitch));u(q,(()=>{K()}));const z=o((()=>V.state.user.scrollNumY));u((()=>z.value),(e=>{e>88&&(R.value=!1)}));const E=i(),K=()=>{clearTimeout(E),E.value=setTimeout((()=>{P()}),100)},Y=i(15e3),P=()=>{1==+q.value&&(Y.value=12e4),X(),W.value=setInterval((()=>{x(!1)}),Y.value)},W=i(),X=()=>{clearInterval(W.value)},Z=i(""),Q=o((()=>V.state.home.refreshChangeTime));return u(Q,(e=>{e&&(clearTimeout(Z.value),Z.value=setTimeout((()=>{}),100))})),(l,o)=>{const i=v("SportsButton"),u=v("Loading"),n=v("van-sticky"),r=v("HomeEmpty"),x=v("FooterHeight"),N=v("van-tab"),C=v("van-tabs");return d(),m("div",{ref_key:"newContainer",ref:k},[y(A,{class:"mt10"}),p("div",G,[y(C,{duration:.2,active:_.value,"onUpdate:active":o[0]||(o[0]=e=>_.value=e),shrink:"","line-height":"0",animated:R.value,onChange:F,"swipe-threshold":3,onClickTab:o[1]||(o[1]=e=>R.value=!0)},{default:I((()=>[(d(!0),m(S,null,j(M.value,((o,v)=>(d(),T(N,{key:v,name:o.gameType},{title:I((()=>[0===v?(d(),T(e,{key:0,text:l.$t("sport.all"),active:!c.value,class:"tabs-cut-1"},null,8,["text","active"])):(d(),T(i,{key:1,class:g(["tabs-cut-1",o.gameType]),text:o.gameType,active:_.value===o.gameType,count:o.count,"show-count":""},null,8,["text","active","class","count"]))])),default:I((()=>[p("div",J,[b.value?(d(),m(S,{key:1},[(d(!0),m(S,null,j(H.value,((e,l)=>(d(),m(S,{key:l},[0===l?(d(),T(n,{key:0,"offset-top":w(s),container:k.value,"z-index":"5"},{default:I((()=>[y(t,{class:g({mt20:0!==l}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):h("",!0),y(a,{"play-title-toggle":!1,"send-params":e,tabType:"RB",class:g({mt10:0!==l})},null,8,["send-params","class"])],64)))),128)),H.value.length?h("",!0):(d(),T(r,{key:0}))],64)):(d(),T(u,{key:0})),H.value.length?(d(),m("div",{key:2,class:"Button-MatchMore mt10",onClick:O},[p("span",null,f(l.$t("live.noMore")),1)])):h("",!0),y(x)])])),_:2},1032,["name"])))),128))])),_:1},8,["duration","active","animated"])])],512)}}});Q.__scopeId="data-v-68904684";export{Q as default};
