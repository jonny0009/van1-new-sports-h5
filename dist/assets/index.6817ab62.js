import{_ as e}from"./index.9d314340.js";import{s as a,b as s,d as t,r as l,E as i,o as n,S as o,c,O as r,P as u,q as m,Z as v,u as d,V as p,$ as h,x as f,y,X as g,Y as _,w as b,M as T,n as w,f as k,U as x,W as S,F as P,_ as R,g as H,h as $}from"./vue.144c3097.js";import{g as I,o as O,b as B,t as N,u as M}from"./useMatch.6deca334.js";import{u as C,s as j,x as V,a7 as U,a8 as Q,a9 as L,X as D,w as E}from"./index.faa5a252.js";import{_ as K,d as q,e as F}from"./index.d12d22ad.js";import{v as z}from"./video.es.e15816c3.js";import{a as A,e as Y}from"./index.60d06217.js";const W=e=>(g("data-v-59ae5046"),e=e(),_(),e),X=["data-val"],J={class:"home-tabs-play"},Z={class:"play"},G=W((()=>u("div",{class:"flex-1"},null,-1))),ee={class:"home-match"},ae={class:"up-match-group__body"},se={class:"up-match"},te={class:"match-info-live__header border-bottom"},le=[W((()=>u("i",{v:"",class:"iconfont icon-footer-live"},null,-1)))],ie={class:"up-match-league"},ne={class:"text"},oe={class:"flex-cross-center"},ce={class:"up-match-time"},re=["innerHTML"],ue={class:"up-match-score border-bottom"},me={class:"item mb5 mt10"},ve={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},de={class:"name"},pe={class:"container"},he={class:"value"},fe={class:"item"},ye={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},ge={class:"name"},_e={class:"container"},be={class:"value"},Te={class:"up-match__body"},we={key:0,class:"match-betting-item"},ke={class:"match-betting-item__title"},xe={class:"flex-cross-center"},Se={key:0},Pe={key:1},Re={class:"match-betting-item__content"},He={class:"betting-select"},$e={class:"betting-select__list"},Ie={key:1,class:"match-betting-item"},Oe={class:"match-betting-item__title"},Be={class:"flex-cross-center"},Ne={key:0},Me={key:1},Ce={class:"match-betting-item__content"},je={class:"betting-select"},Ve={class:"betting-select__list"},Ue={key:2,class:"match-betting-item"},Qe={class:"match-betting-item__title"},Le={class:"flex-cross-center"},De={key:0},Ee={key:1},Ke={class:"match-betting-item__content"},qe={class:"betting-select"},Fe={class:"betting-select__list"},ze={key:3,ref:"Mref",class:"match-betting-item"},Ae={class:"match-betting-item__title"},Ye={class:"flex-cross-center"},We={class:"match-betting-item__content"},Xe={class:"betting-select"},Je={class:"betting-select__list"},Ze={class:"up-match__footer"},Ge={class:"match-footer"};var ea=a({props:{sendParams:{type:Object,default:function(){return{}}},tabType:{type:String,default:""},playTitleToggle:{type:Boolean,default:function(){return!0}}},setup(e){const a=e,{t:g}=C(),_=s((()=>j.state.home.RrefShow)),b=()=>{j.dispatch("home/setKeyValue",{key:"RrefShow",value:!_.value})},T=s((()=>j.state.home.OUrefShow)),w=()=>{j.dispatch("home/setKeyValue",{key:"OUrefShow",value:!T.value})},k=s((()=>j.state.home.MrefShow)),x=()=>{j.dispatch("home/setKeyValue",{key:"MrefShow",value:!k.value})},S=s((()=>j.state.home.PDrefShow)),P=()=>{j.dispatch("home/setKeyValue",{key:"PDrefShow",value:!S.value})},R=t(null),H=s((()=>{const e=j.state.app.globalBarHeaderHeight||48;return e>60?48:e})),$={0:"",Q1:g("live.Q1"),Q2:g("live.Q2"),Q3:g("live.Q3"),Q4:g("live.Q4"),"1h":g("live.Q1"),"2h":g("live.Q2"),"3h":g("live.Q3"),"4h":g("live.Q4"),OT:g("live.OT"),HT:g("live.HT"),H1:g("live.H1"),H2:g("live.H2"),q1:g("live.Q1"),q2:g("live.Q2"),q3:g("live.Q3"),q4:g("live.Q4"),ot:g("live.OT"),ht:g("live.HT"),h1:g("live.H1"),h2:g("live.H2")},M=e=>{const a=e.toLowerCase();return $[a]},K=t(""),q=(e={})=>{const{showtype:a,gameType:s,gameInfo:t,showType:l,homeTeamSuffix:i,gidm:n}=e,o=O(t,5),c=t&&t.se_now;if("RB"===a||"RB"===l){switch(s){case"FT":if(!t)return g("home.img");if(((null==i?void 0:i.includes("点球"))||(null==i?void 0:i.includes("點球")))&&(t.raceType="dianqiu",t.teamSuffix=g("home.PenaltyKickWar")),((null==i?void 0:i.includes("加时赛"))||(null==i?void 0:i.includes("加時賽")))&&(t.raceType="jiashi",t.teamSuffix=g("live.OT")),t.raceType){if("jiashi"===(null==t?void 0:t.raceType)&&("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time)))return g("live.HT");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^"),s="1H"===e?`上${a}`:`下${a}`;return`${t.teamSuffix}<span class='time-h-number'>${s}</span>`}}if("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time))return g("live.HT");if((null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if((null==t?void 0:t.re_time)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^");let s="";if(a.indexOf("'")>-1){const[e]=a.split("'");s=`${e}<span class="time-h-dot">'</span>`}else s=a;return g("1H"===e?"home.HNumber1":"home.HNumber2",{number:s})}return(null==t?void 0:t.re_time)?t.re_time:g("live.pause");case"TN":if(t){const e=N(t);if(null==e?void 0:e.sciwd)return g("live.pause");const{panNum:a,score1:s,score2:l}=e;return`${a}<span>${s}${l}</span>`}return g("home.img");case"BS":if(t){if(n&&n.indexOf("ic")>-1)return g("home.img");const e=t?B(t):"",a=t.inningNum?null==t?void 0:t.inningNum:e.se_now>0?e.se_now:e.score.num;return g("home.set",{number:a})}return g("home.img");case"BK":return"HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now)?g("live.HT"):(null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1?g("home.addTimeNumber",{number:D(1e3*K.value,"mm:ss")}):c&&K?`${M(null==t?void 0:t.se_now)}<span>${D(1e3*K.value,"mm:ss")}</span>`:!K.value&&c?`${M(t.se_now)}<span>00:00</span>`:"";case"BK_AFT":if(t){if("HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now))return g("live.HT");if((null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1)return g("home.addTimeNumber",{number:D(1e3*t.t_count,"mm:ss")});const e=t&&t.se_now,a=t&&+t.t_count;return e&&a?`${M(t.se_now)}<span>${D(1e3*t.t_count,"mm:ss")}</span>`:""}return g("home.img");case"OP_TN":if(t){const e=(null==t?void 0:t.se_now.replace(/[^0-9]/gi,""))||"";return g("home.set",{number:e})}return g("home.img");case"OP_VB":return o?g("home.set",{number:o.scorePan.num}):"";case"OP_DJ":case"OP_IH":return g("home.img")}return g("home.img")}return g("home.img")},F=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",z=e=>{const{live:a,merchantAnchor:s,merchantStreamNa:t}=e;return!!(1*a!=1||s&&(null==s?void 0:s.length)&&t&&(null==t?void 0:t.length))},A=()=>{j.dispatch("betting/setMoreShow",{status:!0,moreParams:a.sendParams}),j.dispatch("user/getLocationHeight",!1)};return(s,t)=>{const g=l("van-sticky"),$=l("SportsIcon"),O=l("van-icon"),B=i("img");return n(),o("div",{ref_key:"container",ref:R,class:"homeMatchHandicap","data-val":d(H)},[e.playTitleToggle?(n(),c(g,{key:0,"offset-top":d(H),container:R.value,"z-index":"5"},{default:r((()=>[u("div",J,[m(V,{"time-send-params":e.sendParams},null,8,["time-send-params"]),u("div",Z,[G,u("span",{class:v(["btn R",[{active:d(_)}]]),onClick:b},p(s.$t("home.R")),3),u("span",{class:v(["btn OU",[{active:d(T)}]]),onClick:w},p(s.$t("home.OU")),3),u("span",{class:v(["btn M",[{active:d(k)}]]),onClick:x},p(s.$t("home.M")),3),u("span",{class:v(["btn PD",[{active:d(S)}]]),onClick:P},p(s.$t("live.score")),3)])])])),_:1},8,["offset-top","container"])):h("",!0),u("div",ee,[u("div",ae,[u("div",se,[u("div",te,[z(e.sendParams)?(n(),o("div",{key:0,class:"live-icon",onClick:t[0]||(t[0]=a=>{return s=e.sendParams,void E.push(`/match/${s.gidm}/bets`);var s})},le)):h("",!0),u("div",ie,[m($,{"icon-src":a.sendParams.gameType,class:"ball-img"},null,8,["icon-src"]),u("div",ne,p(F(e.sendParams)),1)]),u("div",oe,[u("div",ce,[f(m($,{"icon-src":"sportlive",class:"live-img"},null,512),[[y,z(e.sendParams)]]),u("div",{class:v(["up-match-time-html",e.sendParams.gameType]),innerHTML:q(e.sendParams)},null,10,re)])])]),u("div",ue,[u("div",me,[f(u("img",ve,null,512),[[B,e.sendParams.homeLogo]]),u("div",de,p(e.sendParams.homeTeamAbbr||e.sendParams.homeTeam),1),u("div",pe,[u("div",he,p(d(I)(e.sendParams,"H")),1)])]),u("div",fe,[f(u("img",ye,null,512),[[B,e.sendParams.awayLogo]]),u("div",ge,p(e.sendParams.awayTeamAbbr||e.sendParams.awayTeam),1),u("div",_e,[u("div",be,p(d(I)(e.sendParams,"C")),1)])])]),u("div",Te,[d(_)&&e.sendParams.RE?(n(),o("div",we,[u("div",ke,[u("div",xe,["RB"===e.tabType?(n(),o("span",Se,p(s.$t("home.RBInfo")),1)):(n(),o("span",Pe,p(s.$t("home.RInfo")),1))])]),u("div",Re,[u("div",He,[u("div",$e,[m(Q,{"send-params":d(U)("RE",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),d(T)&&e.sendParams.ROU?(n(),o("div",Ie,[u("div",Oe,[u("div",Be,["RB"===e.tabType?(n(),o("span",Ne,p(s.$t("home.RBSize")),1)):(n(),o("span",Me,p(s.$t("home.OUInfo")),1))])]),u("div",Ce,[u("div",je,[u("div",Ve,[m(Q,{"send-params":d(U)("ROU",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),d(k)&&e.sendParams.RM?(n(),o("div",Ue,[u("div",Qe,[u("div",Le,["RB"===e.tabType?(n(),o("span",De,p(s.$t("home.RBRide")),1)):(n(),o("span",Ee,p(s.$t("home.MInfo")),1))])]),u("div",Ke,[u("div",qe,[u("div",Fe,[m(Q,{"send-params":d(U)("RM",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),d(S)&&e.sendParams.RPD?(n(),o("div",ze,[u("div",Ae,[u("div",Ye,p(s.$t("home.PDscore")),1)]),u("div",We,[u("div",Xe,[u("div",Je,[m(L,{"send-params":e.sendParams,type:"RPD"},null,8,["send-params"])])])])],512)):h("",!0)])])]),u("div",Ze,[u("div",Ge,[u("div",{class:"match-footer__item",onClick:A},[u("span",null,p(s.$t("home.morePlay")),1),m(O,{class:"arrow",name:"arrow"})])])])])],8,X)}}});ea.__scopeId="data-v-59ae5046";const aa={class:"video-box-wrap"},sa={key:0,class:"video-error"},ta=(e=>(g("data-v-0bcb1388"),e=e(),_(),e))((()=>u("span",{class:"video-icon"},null,-1))),la={class:"error-tips"},ia=["onClick"];var na=a({props:{liveUrl:{type:String,default:""},controls:{type:Boolean,default:!0}},emits:["refresh","touchVideo"],setup(e,{expose:a,emit:i}){const c=e,r=s((()=>j.state.match.turnSound)),d=t(null),f=t(!1),y=t(!0);b(r,((e,a)=>{console.log(`turnSound发生变化，新值为：${e}，旧值为：${a}`),e?(d.value.muted(!1),y.value=!1):(d.value.muted(!0),y.value=!0)}));const g=()=>{r.value?(y.value=!1,d.value.muted(!1)):(y.value=!0,d.value.muted(!0))},_=t(),S=()=>{try{d.value.dispose&&d.value.dispose()}catch(e){}},P=()=>{if(!document.querySelector("#VideoRef"))return!1;d.value.muted()?(d.value.muted(!1),y.value=!1,j.commit("match/SET_TURN_SOUND",!1)):(d.value.muted(!0),y.value=!0,j.commit("match/SET_TURN_SOUND",!0))},R=()=>{i("refresh")};a({refresh:R,touchVideo:()=>{i("touchVideo")}});const H=t(!0);return T((()=>{w((()=>{clearTimeout(_.value),_.value=setTimeout((()=>{f.value=!1;const e=document.querySelector("#VideoRef");if(e&&c.liveUrl)try{d.value=z("VideoRef",{muted:!0,controls:c.controls,width:"100%",height:"100%",loop:!0,autoplay:!0,sources:[{src:c.liveUrl,type:"application/x-mpegURL"}]},(()=>{try{e.muted=!0,e.play(),d.value.on("error",(()=>{f.value=!0,S()}))}catch(a){console.error(a)}}))}catch(a){console.error("视频异常！"),console.error(a)}}),500),setTimeout((()=>{H.value=!1}),2e3)}))})),k((()=>{S()})),(e,a)=>{const s=l("van-loading");return n(),o("div",aa,[u("video",{id:"VideoRef",style:{"object-fit":"fill"},class:"video-js vjs-default-skin",playsinline:"true",controls:"",preload:"metadata",onPlay:g},null,32),f.value?(n(),o("div",sa,[ta,u("div",la,p(e.$t("live.videoFailure")),1),u("div",{class:"error-btn",onClick:R},p(e.$t("live.refreshVideo")),1)])):h("",!0),u("div",{class:v(["pop",{popBg:H.value}])},[m(s,{class:"popBg-loading"})],2),u("div",{class:v(["sound-icon",{muted:y.value}]),onClick:x(P,["stop"])},null,10,ia)])}}});na.__scopeId="data-v-0bcb1388";const oa={class:"video-footer"},ca={class:"leagueName text-overflow"},ra=(e=>(g("data-v-6091e662"),e=e(),_(),e))((()=>u("div",{class:"flex-1"},null,-1))),ua=["innerHTML"];var ma=a({props:{liveInfo:{type:Object,default:()=>{}},matchIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},setup(e){const a=e,i=M(),r=s((()=>"/assets/ft.7964dceb.jpg"));b((()=>a.activeIndex),(()=>{a.activeIndex===a.matchIndex?f():v.value=!1}));const v=t(!1),f=()=>{v.value=!1,w((()=>{v.value=!0}))};return T((()=>{a.activeIndex===a.matchIndex?f():v.value=!1})),(a,s)=>{const t=l("SportsIcon");return n(),o("div",{class:"match-item-wrap",style:S({backgroundImage:`url(${d(r)})`})},[v.value?(n(),c(d(na),{key:0,"live-url":e.liveInfo.m3u8||e.liveInfo.url,controls:!1,onRefresh:f},null,8,["live-url"])):h("",!0),u("div",oa,[m(t,{class:"SportsIcon","icon-src":e.liveInfo.gameType},null,8,["icon-src"]),u("div",ca,p(e.liveInfo.leagueShortName||e.liveInfo.leagueName),1),ra,u("div",{class:"time",innerHTML:d(i).showRBTime(e.liveInfo)},null,8,ua)])],4)}}});ma.__scopeId="data-v-6091e662";const va={key:0,class:"swipeLive"},da={class:"wrap"};var pa=a({setup(e){const a=t(0),s=t([]),i=e=>{a.value=e};return T((()=>{s.value.length=0,(async()=>{var e;const a=await A({page:1,pageSize:5,rbType:1});if(200===a.code){const t=(null==(e=null==a?void 0:a.data)?void 0:e.list)||[];s.value.length=0,await t.map((async e=>{const a={gidm:e.gidm},t=await Y(a);if(200===t.code){const{streamNa:a}=t.data,{liveali:s}=a||{},{m3u8:l}=s||{};e.m3u8=e.m3u8||l,e.streamNa=a}s.value.push(e)}))}})()})),(e,t)=>{const v=l("van-swipe-item"),d=l("van-swipe");return s.value.length?(n(),o("div",va,[m(d,{class:"my-swipe","indicator-color":"white",onChange:i},{default:r((()=>[(n(!0),o(P,null,R(s.value,((e,s)=>(n(),c(v,{key:s,onClick:a=>(e=>{if(!e)return;const{gidm:a}=e,s={name:"MatchDetail",params:{id:a}};E.push(s)})(e)},{default:r((()=>[u("div",da,[(n(),c(ma,{key:s,"live-info":e,"match-index":s,"active-index":a.value},null,8,["live-info","match-index","active-index"]))])])),_:2},1032,["onClick"])))),128))])),_:1})])):h("",!0)}}});pa.__scopeId="data-v-5e837b68";const ha={class:"tabs-cut"},fa={class:"sportlive"};var ya=a({setup(a){const i=s((()=>{const e=j.state.app.globalBarHeaderHeight||48;return e>60?48:e})),f=t(),y=t(!1),g=t(null),_=async(e=!0)=>{await O(),await N(e)},w=t(""),x=t(!0),S=t([""]),I=t([]),O=async()=>{const e=await q({})||{};if(200===e.code&&e.data){const a=e.data||[];I.value=a.filter((e=>!S.value.includes(e.gameType))),I.value=[{gameType:""},...I.value]}},B=t([]),N=async(e=!0)=>{var a,s,t,l;const i={gameType:f.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:200};e&&(y.value=!1);const n=await F(i)||{};if(e&&(y.value=!0),200===n.code&&(null==(s=null==(a=n.data)?void 0:a.matchList)?void 0:s.baseData)){const e=(null==(l=null==(t=n.data)?void 0:t.matchList)?void 0:l.baseData)||[];B.value=e.filter((e=>!S.value.includes(e.gameType)))}else B.value=[]},M=()=>{},C=e=>{B.value=[],f.value=e,N()};T((()=>{L(),y.value=!1,_()})),H((()=>{L()})),$((()=>{A()})),k((()=>{A(),j.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),j.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),j.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})}));const V=s((()=>j.state.app.businessConfig.pushSwitch));b(V,(()=>{L()}));const U=s((()=>j.state.user.scrollNumY));b((()=>U.value),(e=>{e>88&&(x.value=!1)}));const Q=t(),L=()=>{clearTimeout(Q),Q.value=setTimeout((()=>{E()}),100)},D=t(15e3),E=()=>{1==+V.value&&(D.value=12e4),A(),z.value=setInterval((()=>{_(!1)}),D.value)},z=t(),A=()=>{clearInterval(z.value)},Y=t(""),W=s((()=>j.state.home.refreshChangeTime));return b(W,(e=>{e&&(clearTimeout(Y.value),Y.value=setTimeout((()=>{}),100))})),(a,s)=>{const t=l("SportsButton"),_=l("Loading"),b=l("van-sticky"),T=l("HomeEmpty"),k=l("FooterHeight"),S=l("van-tab"),H=l("van-tabs");return n(),o("div",{ref_key:"newContainer",ref:g},[m(pa,{class:"mt10"}),u("div",ha,[m(H,{duration:.2,active:w.value,"onUpdate:active":s[0]||(s[0]=e=>w.value=e),shrink:"","line-height":"0",animated:x.value,onChange:C,"swipe-threshold":3,onClickTab:s[1]||(s[1]=e=>x.value=!0)},{default:r((()=>[(n(!0),o(P,null,R(I.value,((s,l)=>(n(),c(S,{key:l,name:s.gameType},{title:r((()=>[0===l?(n(),c(e,{key:0,text:a.$t("sport.all"),active:!f.value,class:"tabs-cut-1"},null,8,["text","active"])):(n(),c(t,{key:1,class:v(["tabs-cut-1",s.gameType]),text:s.gameType,active:w.value===s.gameType,count:s.count,"show-count":""},null,8,["text","active","class","count"]))])),default:r((()=>[u("div",fa,[y.value?(n(),o(P,{key:1},[(n(!0),o(P,null,R(B.value,((e,a)=>(n(),o(P,{key:a},[0===a?(n(),c(b,{key:0,"offset-top":d(i),container:g.value,"z-index":"5"},{default:r((()=>[m(K,{class:v({mt20:0!==a}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):h("",!0),m(ea,{"play-title-toggle":!1,"send-params":e,tabType:"RB",class:v({mt10:0!==a})},null,8,["send-params","class"])],64)))),128)),B.value.length?h("",!0):(n(),c(T,{key:0}))],64)):(n(),c(_,{key:0})),B.value.length?(n(),o("div",{key:2,class:"Button-MatchMore mt10",onClick:M},[u("span",null,p(a.$t("live.noMore")),1)])):h("",!0),m(k)])])),_:2},1032,["name"])))),128))])),_:1},8,["duration","active","animated"])])],512)}}});ya.__scopeId="data-v-68904684";export{ya as default};
