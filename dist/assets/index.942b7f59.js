import{_ as e}from"./index.7111c8c0.js";import{s as a,b as s,d as t,r as l,E as i,o as n,R as o,q as r,O as c,P as u,_ as m,u as v,U as d,a1 as p,x as h,y as f,M as g,n as y,f as _,S as b,X as T,Y as w,w as x,c as k,V as H,F as S,Z as P,g as I,h as O}from"./vue.469c5994.js";import{g as R,o as $,d as V,t as B,u as N,a as j,e as C}from"./index.72c3ab4b.js";import{u as M,s as U,U as Q,V as L,W as K,K as q,j as E}from"./index.d6906b92.js";import{v as F}from"./video.es.2395ad4e.js";import{a as A,b as D}from"./index.2be674c9.js";const z=["data-val"],W={class:"home-tabs-play"},Y={class:"play"},J=u("div",{class:"flex-1"},null,-1),X={class:"home-match"},Z={class:"up-match-group__body"},G={class:"up-match"},ee={class:"match-info-live__header border-bottom"},ae=[u("i",{v:"",class:"iconfont icon-footer-live"},null,-1)],se={class:"up-match-league"},te={class:"text"},le={class:"flex-cross-center"},ie={class:"up-match-time"},ne=["innerHTML"],oe={class:"up-match-score border-bottom"},re={class:"item mb5"},ce={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},ue={class:"name"},me={class:"container"},ve={class:"value"},de={class:"item"},pe={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},he={class:"name"},fe={class:"container"},ge={class:"value"},ye={class:"up-match__body"},_e={key:0,class:"match-betting-item"},be={class:"match-betting-item__title"},Te={class:"flex-cross-center"},we={class:"match-betting-item__content"},xe={class:"betting-select"},ke={class:"betting-select__list"},He={key:1,class:"match-betting-item"},Se={class:"match-betting-item__title"},Pe={class:"flex-cross-center"},Ie={class:"match-betting-item__content"},Oe={class:"betting-select"},Re={class:"betting-select__list"},$e={key:2,class:"match-betting-item"},Ve={class:"match-betting-item__title"},Be={class:"flex-cross-center"},Ne={class:"match-betting-item__content"},je={class:"betting-select"},Ce={class:"betting-select__list"},Me={class:"up-match__footer"},Ue={class:"match-footer"};var Qe=a({props:{sendParams:{type:Object,default:function(){return{}}}},setup(e){const a=e,{t:g}=M(),y=s((()=>U.state.home.RrefShow)),_=()=>{U.dispatch("home/setKeyValue",{key:"RrefShow",value:!y.value})},b=s((()=>U.state.home.OUrefShow)),T=()=>{U.dispatch("home/setKeyValue",{key:"OUrefShow",value:!b.value})},w=s((()=>U.state.home.MrefShow)),x=()=>{U.dispatch("home/setKeyValue",{key:"MrefShow",value:!w.value})},k=t(null),H=s((()=>{const e=U.state.app.globalBarHeaderHeight||48;return e>60?48:e})),S={0:"",Q1:g("live.Q1"),Q2:g("live.Q2"),Q3:g("live.Q3"),Q4:g("live.Q4"),"1h":g("live.Q1"),"2h":g("live.Q2"),"3h":g("live.Q3"),"4h":g("live.Q4"),OT:g("live.OT"),HT:g("live.HT"),H1:g("live.H1"),H2:g("live.H2"),q1:g("live.Q1"),q2:g("live.Q2"),q3:g("live.Q3"),q4:g("live.Q4"),ot:g("live.OT"),ht:g("live.HT"),h1:g("live.H1"),h2:g("live.H2")},P=e=>{const a=e.toLowerCase();return S[a]},I=t(""),O=(e={})=>{const{showtype:a,gameType:s,gameInfo:t,showType:l,homeTeamSuffix:i,gidm:n}=e,o=$(t,5),r=t&&t.se_now;if("RB"===a||"RB"===l){switch(s){case"FT":if(!t)return g("home.img");if(((null==i?void 0:i.includes("点球"))||(null==i?void 0:i.includes("點球")))&&(t.raceType="dianqiu",t.teamSuffix=g("home.PenaltyKickWar")),((null==i?void 0:i.includes("加时赛"))||(null==i?void 0:i.includes("加時賽")))&&(t.raceType="jiashi",t.teamSuffix=g("live.OT")),t.raceType){if("jiashi"===(null==t?void 0:t.raceType)&&("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time)))return g("live.HT");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^"),s="1H"===e?`上${a}`:`下${a}`;return`${t.teamSuffix}<span class='time-h-number'>${s}</span>`}}if("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time))return g("live.HT");if((null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if((null==t?void 0:t.re_time)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^");let s="";if(a.indexOf("'")>-1){const[e]=a.split("'");s=`${e}<span class="time-h-dot">'</span>`}else s=a;return g("1H"===e?"home.HNumber1":"home.HNumber2",{number:s})}return(null==t?void 0:t.re_time)?t.re_time:g("live.pause");case"TN":if(t){const e=B(t);if(null==e?void 0:e.sciwd)return g("live.pause");const{panNum:a,score1:s,score2:l}=e;return`${a}<span>${s}${l}</span>`}return g("home.img");case"BS":if(t){if(n&&n.indexOf("ic")>-1)return g("home.img");const e=t?V(t):"",a=t.inningNum?null==t?void 0:t.inningNum:e.se_now>0?e.se_now:e.score.num;return g("home.set",{number:a})}return g("home.img");case"BK":return"HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now)?g("live.HT"):(null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1?g("home.addTimeNumber",{number:q(1e3*I.value,"mm:ss")}):r&&I?`${P(null==t?void 0:t.se_now)}<span>${q(1e3*I.value,"mm:ss")}</span>`:!I.value&&r?`${P(t.se_now)}<span>00:00</span>`:"";case"BK_AFT":if(t){if("HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now))return g("live.HT");if((null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1)return g("home.addTimeNumber",{number:q(1e3*t.t_count,"mm:ss")});const e=t&&t.se_now,a=t&&+t.t_count;return e&&a?`${P(t.se_now)}<span>${q(1e3*t.t_count,"mm:ss")}</span>`:""}return g("home.img");case"OP_TN":if(t){const e=(null==t?void 0:t.se_now.replace(/[^0-9]/gi,""))||"";return g("home.set",{number:e})}return g("home.img");case"OP_VB":return o?g("home.set",{number:o.scorePan.num}):"";case"OP_DJ":case"OP_IH":return g("home.img")}return g("home.img")}return g("home.img")},N=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",j=e=>{const{live:a,merchantAnchor:s,merchantStreamNa:t}=e;return!!(1*a!=1||s&&(null==s?void 0:s.length)&&t&&(null==t?void 0:t.length))};return(s,t)=>{const g=l("van-sticky"),S=l("SportsIcon"),P=l("van-icon"),I=i("img");return n(),o("div",{ref_key:"container",ref:k,class:"homeMatchHandicap","data-val":v(H)},[r(g,{"offset-top":v(H),container:k.value,"z-index":"5"},{default:c((()=>[u("div",W,[r(Q,{"time-send-params":e.sendParams},null,8,["time-send-params"]),u("div",Y,[J,u("span",{class:m(["btn R",[{active:v(y)}]]),onClick:_},d(s.$t("home.R")),3),u("span",{class:m(["btn OU",[{active:v(b)}]]),onClick:T},d(s.$t("home.OU")),3),u("span",{class:m(["btn M",[{active:v(w)}]]),onClick:x},d(s.$t("home.M")),3)])])])),_:1},8,["offset-top","container"]),u("div",X,[u("div",Z,[u("div",G,[u("div",ee,[j(e.sendParams)?(n(),o("div",{key:0,class:"live-icon",onClick:t[0]||(t[0]=a=>{return s=e.sendParams,void E.push(`/broadcast/${s.gidm}`);var s})},ae)):p("",!0),u("div",se,[u("div",te,d(N(e.sendParams)),1)]),u("div",le,[u("div",ie,[h(r(S,{"icon-src":"live",class:"mr5"},null,512),[[f,j(e.sendParams)]]),u("div",{class:m(["up-match-time-html",e.sendParams.gameType]),innerHTML:O(e.sendParams)},null,10,ne)])])]),u("div",oe,[u("div",re,[h(u("img",ce,null,512),[[I,e.sendParams.homeLogo]]),u("div",ue,d(e.sendParams.homeTeamAbbr||e.sendParams.homeTeam),1),u("div",me,[u("div",ve,d(v(R)(e.sendParams,"H")),1)])]),u("div",de,[h(u("img",pe,null,512),[[I,e.sendParams.awayLogo]]),u("div",he,d(e.sendParams.awayTeamAbbr||e.sendParams.awayTeam),1),u("div",fe,[u("div",ge,d(v(R)(e.sendParams,"C")),1)])])]),u("div",ye,[v(y)&&e.sendParams.RE?(n(),o("div",_e,[u("div",be,[u("div",Te,d(s.$t("home.RInfo")),1)]),u("div",we,[u("div",xe,[u("div",ke,[r(K,{"send-params":v(L)("RE",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(b)&&e.sendParams.ROU?(n(),o("div",He,[u("div",Se,[u("div",Pe,d(s.$t("home.OUInfo")),1)]),u("div",Ie,[u("div",Oe,[u("div",Re,[r(K,{"send-params":v(L)("ROU",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(w)&&e.sendParams.RM?(n(),o("div",$e,[u("div",Ve,[u("div",Be,d(s.$t("home.MInfo")),1)]),u("div",Ne,[u("div",je,[u("div",Ce,[r(K,{"send-params":v(L)("RM",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0)])])]),u("div",Me,[u("div",Ue,[u("div",{class:"match-footer__item",onClick:t[1]||(t[1]=e=>v(U).dispatch("betting/setMoreShow",{status:!0,moreParams:a.sendParams}))},[u("span",null,d(s.$t("home.morePlay")),1),r(P,{class:"arrow",name:"arrow"})])])])])],8,z)}}});const Le=e=>(T("data-v-45105217"),e=e(),w(),e),Ke={class:"video-box-wrap"},qe=Le((()=>u("video",{id:"VideoRef",style:{"object-fit":"fill"},class:"video-js vjs-default-skin",playsinline:"true",controls:"",preload:"metadata"},null,-1))),Ee={key:0,class:"video-error"},Fe=Le((()=>u("span",{class:"video-icon"},null,-1))),Ae=Le((()=>u("div",{class:"error-tips"},"视频加载失败，请刷新重试",-1))),De=["onClick"];var ze=a({props:{liveUrl:{type:String,default:""},controls:{type:Boolean,default:!0}},emits:["refresh","touchVideo"],setup(e,{expose:a,emit:s}){const i=e,c=t(null),v=t(!1),d=t(!0),h=t(),f=()=>{console.log("destroyVideo 销毁视频");try{c.value.dispose&&c.value.dispose()}catch(e){}},T=()=>{if(!document.querySelector("#VideoRef"))return!1;c.value.muted()?(c.value.muted(!1),d.value=!1):(c.value.muted(!0),d.value=!0)},w=()=>{s("refresh")};a({refresh:w,touchVideo:()=>{s("touchVideo")}});const x=t(!0);return g((()=>{y((()=>{clearTimeout(h.value),h.value=setTimeout((()=>{console.log(i.liveUrl,"initVideo initVideo initVideo"),v.value=!1;const e=document.querySelector("#VideoRef");if(e&&i.liveUrl)try{c.value=F("VideoRef",{muted:!0,controls:i.controls,width:"100%",height:"100%",loop:!0,autoplay:!0,sources:[{src:i.liveUrl,type:"application/x-mpegURL"}]},(()=>{try{e.muted=!0,e.play(),c.value.on("error",(()=>{v.value=!0,f()}))}catch(a){console.error(a)}}))}catch(a){console.error("视频异常！"),console.error(a)}}),500),setTimeout((()=>{x.value=!1}),2e3)}))})),_((()=>{console.log("onBeforeUnmount onBeforeUnmount"),f()})),(e,a)=>{const s=l("van-loading");return n(),o("div",Ke,[qe,v.value?(n(),o("div",Ee,[Fe,Ae,u("div",{class:"error-btn",onClick:w},"刷新视频")])):p("",!0),u("div",{class:m(["pop",{popBg:x.value}])},[r(s,{class:"popBg-loading"})],2),u("div",{class:m(["sound-icon",{muted:d.value}]),onClick:b(T,["stop"])},null,10,De)])}}});ze.__scopeId="data-v-45105217";const We={class:"video-footer"},Ye={class:"leagueName"},Je=(e=>(T("data-v-48e38f91"),e=e(),w(),e))((()=>u("div",{class:"flex-1"},null,-1))),Xe=["innerHTML"];var Ze=a({props:{liveInfo:{type:Object,default:()=>{}},matchIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},setup(e){const a=e,i=N(),c=s((()=>"/assets/ft.7964dceb.jpg"));x((()=>a.activeIndex),(()=>{a.activeIndex===a.matchIndex?h():m.value=!1}));const m=t(!1),h=()=>{m.value=!1,y((()=>{m.value=!0}))};return g((()=>{a.activeIndex===a.matchIndex?h():m.value=!1})),(a,s)=>{const t=l("SportsIcon");return n(),o("div",{class:"match-item-wrap",style:H({backgroundImage:`url(${v(c)})`})},[m.value?(n(),k(v(ze),{key:0,"live-url":e.liveInfo.m3u8||e.liveInfo.url,controls:!1,onRefresh:h},null,8,["live-url"])):p("",!0),u("div",We,[r(t,{class:"SportsIcon","icon-src":e.liveInfo.gameType},null,8,["icon-src"]),u("div",Ye,d(e.liveInfo.leagueShortName||e.liveInfo.leagueName),1),Je,u("div",{class:"time",innerHTML:v(i).showRBTime(e.liveInfo)},null,8,Xe)])],4)}}});Ze.__scopeId="data-v-48e38f91";const Ge={key:0,class:"swipeLive"},ea={class:"wrap"};var aa=a({setup(e){const a=t(0),s=t([]),i=e=>{a.value=e};return g((()=>{s.value.length=0,(async()=>{var e;const a=await j({page:1,pageSize:5,rbType:1});if(200===a.code){const t=(null==(e=null==a?void 0:a.data)?void 0:e.list)||[];s.value.length=0,await t.map((async e=>{const a={gidm:e.gidm},t=await C(a);if(200===t.code){const{streamNa:a}=t.data,{liveali:s}=a||{},{m3u8:l}=s||{};e.m3u8=e.m3u8||l,e.streamNa=a}s.value.push(e)}))}})()})),(e,t)=>{const m=l("van-swipe-item"),v=l("van-swipe");return s.value.length?(n(),o("div",Ge,[r(v,{class:"my-swipe","indicator-color":"white",onChange:i},{default:c((()=>[(n(!0),o(S,null,P(s.value,((e,s)=>(n(),k(m,{key:s,onClick:a=>(e=>{if(!e)return;const{gidm:a}=e,s={name:"BroadcastDetail",params:{id:a}};E.push(s)})(e)},{default:c((()=>[u("div",ea,[(n(),k(Ze,{key:s,"live-info":e,"match-index":s,"active-index":a.value},null,8,["live-info","match-index","active-index"]))])])),_:2},1032,["onClick"])))),128))])),_:1})])):p("",!0)}}});const sa={class:"sportlive"},ta={key:0,class:"sportlive-Match-Tabs"},la={class:"sportlive"};var ia=a({setup(a){const i=t(),c=t(!1),m=async(e=!0)=>{await f(),await b(e)},v=t([""]),h=t([]),f=async()=>{const e=await A({})||{};if(200===e.code&&e.data){const a=e.data||[];h.value=a.filter((e=>!v.value.includes(e.gameType)))}},y=t([]),b=async(e=!0)=>{var a,s,t,l;const n={gameType:i.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:200};e&&(c.value=!1);const o=await D(n)||{};if(e&&(c.value=!0),200===o.code&&(null==(s=null==(a=o.data)?void 0:a.matchList)?void 0:s.baseData)){const e=(null==(l=null==(t=o.data)?void 0:t.matchList)?void 0:l.baseData)||[];y.value=e.filter((e=>!v.value.includes(e.gameType)))}else y.value=[]},T=()=>{},w=e=>{i.value=e.gameType,b()};g((()=>{$(),c.value=!1,m()})),I((()=>{$()})),O((()=>{j()})),_((()=>{j(),U.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),U.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),U.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})}));const H=s((()=>U.state.app.businessConfig.pushSwitch));x(H,(()=>{$()}));const R=t(),$=()=>{clearTimeout(R),R.value=setTimeout((()=>{B()}),100)},V=t(15e3),B=()=>{1==+H.value&&(V.value=12e4),j(),N.value=setInterval((()=>{m(!1)}),V.value)},N=t(),j=()=>{clearInterval(N.value)},C=t(""),M=s((()=>U.state.home.refreshChangeTime));return x(M,(e=>{e&&(clearTimeout(C.value),C.value=setTimeout((()=>{console.log("console console")}),100))})),(a,s)=>{const t=l("SportsButton"),m=l("Loading"),v=l("HomeEmpty"),f=l("FooterHeight");return n(),o(S,null,[u("div",sa,[h.value.length?(n(),o("div",ta,[r(e,{text:a.$t("sport.all"),active:!i.value,onClick:s[0]||(s[0]=e=>w({}))},null,8,["text","active"]),(n(!0),o(S,null,P(h.value,((e,a)=>(n(),k(t,{key:a,text:e.gameType,active:i.value===e.gameType,onClick:a=>w(e)},null,8,["text","active","onClick"])))),128))])):p("",!0)]),r(aa),u("div",la,[c.value?(n(),o(S,{key:1},[(n(!0),o(S,null,P(y.value,((e,a)=>(n(),k(Qe,{key:a,"send-params":e},null,8,["send-params"])))),128)),y.value.length?p("",!0):(n(),k(v,{key:0}))],64)):(n(),k(m,{key:0})),y.value.length?(n(),o("div",{key:2,class:"Button-MatchMore mt10",onClick:T},[u("span",null,d(a.$t("live.noMore")),1)])):p("",!0),r(f)])],64)}}});ia.__scopeId="data-v-0fb503f0";export{ia as default};
