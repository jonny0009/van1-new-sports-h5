import{_ as e}from"./index.66a388c9.js";import{s as a,b as s,d as t,r as l,E as i,o as n,S as o,q as c,O as r,P as u,_ as m,u as v,V as d,a0 as p,x as h,y as f,X as g,Y as y,M as _,n as b,f as T,U as w,w as x,c as k,W as H,F as P,Z as I,g as S,h as O}from"./vue.95886b43.js";import{g as R,o as $,b as M,t as N,u as j}from"./useMatch.45a299b8.js";import{u as C,s as B,N as V,$ as Q,a0 as L,P as U,k as K}from"./index.aa33a1e9.js";import{v as q}from"./video.es.c0bf3d7e.js";import{a as E,e as F}from"./index.24c0d4a9.js";import{b as A,d as D}from"./index.64620ee0.js";const z=e=>(g("data-v-26ae3147"),e=e(),y(),e),W=["data-val"],Y={class:"home-tabs-play"},J={class:"play"},X=z((()=>u("div",{class:"flex-1"},null,-1))),Z={class:"home-match"},G={class:"up-match-group__body"},ee={class:"up-match"},ae={class:"match-info-live__header border-bottom"},se=[z((()=>u("i",{v:"",class:"iconfont icon-footer-live"},null,-1)))],te={class:"up-match-league"},le={class:"text"},ie={class:"flex-cross-center"},ne={class:"up-match-time"},oe=["innerHTML"],ce={class:"up-match-score border-bottom"},re={class:"item mb5"},ue={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},me={class:"name"},ve={class:"container"},de={class:"value"},pe={class:"item"},he={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},fe={class:"name"},ge={class:"container"},ye={class:"value"},_e={class:"up-match__body"},be={key:0,class:"match-betting-item"},Te={class:"match-betting-item__title"},we={class:"flex-cross-center"},xe={class:"match-betting-item__content"},ke={class:"betting-select"},He={class:"betting-select__list"},Pe={key:1,class:"match-betting-item"},Ie={class:"match-betting-item__title"},Se={class:"flex-cross-center"},Oe={class:"match-betting-item__content"},Re={class:"betting-select"},$e={class:"betting-select__list"},Me={key:2,class:"match-betting-item"},Ne={class:"match-betting-item__title"},je={class:"flex-cross-center"},Ce={class:"match-betting-item__content"},Be={class:"betting-select"},Ve={class:"betting-select__list"},Qe={class:"up-match__footer"},Le={class:"match-footer"};var Ue=a({props:{sendParams:{type:Object,default:function(){return{}}}},setup(e){const a=e,{t:g}=C(),y=s((()=>B.state.home.RrefShow)),_=()=>{B.dispatch("home/setKeyValue",{key:"RrefShow",value:!y.value})},b=s((()=>B.state.home.OUrefShow)),T=()=>{B.dispatch("home/setKeyValue",{key:"OUrefShow",value:!b.value})},w=s((()=>B.state.home.MrefShow)),x=()=>{B.dispatch("home/setKeyValue",{key:"MrefShow",value:!w.value})},k=t(null),H=s((()=>{const e=B.state.app.globalBarHeaderHeight||48;return e>60?48:e})),P={0:"",Q1:g("live.Q1"),Q2:g("live.Q2"),Q3:g("live.Q3"),Q4:g("live.Q4"),"1h":g("live.Q1"),"2h":g("live.Q2"),"3h":g("live.Q3"),"4h":g("live.Q4"),OT:g("live.OT"),HT:g("live.HT"),H1:g("live.H1"),H2:g("live.H2"),q1:g("live.Q1"),q2:g("live.Q2"),q3:g("live.Q3"),q4:g("live.Q4"),ot:g("live.OT"),ht:g("live.HT"),h1:g("live.H1"),h2:g("live.H2")},I=e=>{const a=e.toLowerCase();return P[a]},S=t(""),O=(e={})=>{const{showtype:a,gameType:s,gameInfo:t,showType:l,homeTeamSuffix:i,gidm:n}=e,o=$(t,5),c=t&&t.se_now;if("RB"===a||"RB"===l){switch(s){case"FT":if(!t)return g("home.img");if(((null==i?void 0:i.includes("点球"))||(null==i?void 0:i.includes("點球")))&&(t.raceType="dianqiu",t.teamSuffix=g("home.PenaltyKickWar")),((null==i?void 0:i.includes("加时赛"))||(null==i?void 0:i.includes("加時賽")))&&(t.raceType="jiashi",t.teamSuffix=g("live.OT")),t.raceType){if("jiashi"===(null==t?void 0:t.raceType)&&("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time)))return g("live.HT");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^"),s="1H"===e?`上${a}`:`下${a}`;return`${t.teamSuffix}<span class='time-h-number'>${s}</span>`}}if("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time))return g("live.HT");if((null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if((null==t?void 0:t.re_time)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^");let s="";if(a.indexOf("'")>-1){const[e]=a.split("'");s=`${e}<span class="time-h-dot">'</span>`}else s=a;return g("1H"===e?"home.HNumber1":"home.HNumber2",{number:s})}return(null==t?void 0:t.re_time)?t.re_time:g("live.pause");case"TN":if(t){const e=N(t);if(null==e?void 0:e.sciwd)return g("live.pause");const{panNum:a,score1:s,score2:l}=e;return`${a}<span>${s}${l}</span>`}return g("home.img");case"BS":if(t){if(n&&n.indexOf("ic")>-1)return g("home.img");const e=t?M(t):"",a=t.inningNum?null==t?void 0:t.inningNum:e.se_now>0?e.se_now:e.score.num;return g("home.set",{number:a})}return g("home.img");case"BK":return"HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now)?g("live.HT"):(null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1?g("home.addTimeNumber",{number:U(1e3*S.value,"mm:ss")}):c&&S?`${I(null==t?void 0:t.se_now)}<span>${U(1e3*S.value,"mm:ss")}</span>`:!S.value&&c?`${I(t.se_now)}<span>00:00</span>`:"";case"BK_AFT":if(t){if("HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now))return g("live.HT");if((null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1)return g("home.addTimeNumber",{number:U(1e3*t.t_count,"mm:ss")});const e=t&&t.se_now,a=t&&+t.t_count;return e&&a?`${I(t.se_now)}<span>${U(1e3*t.t_count,"mm:ss")}</span>`:""}return g("home.img");case"OP_TN":if(t){const e=(null==t?void 0:t.se_now.replace(/[^0-9]/gi,""))||"";return g("home.set",{number:e})}return g("home.img");case"OP_VB":return o?g("home.set",{number:o.scorePan.num}):"";case"OP_DJ":case"OP_IH":return g("home.img")}return g("home.img")}return g("home.img")},j=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",q=e=>{const{live:a,merchantAnchor:s,merchantStreamNa:t}=e;return!!(1*a!=1||s&&(null==s?void 0:s.length)&&t&&(null==t?void 0:t.length))},E=()=>{B.dispatch("betting/setMoreShow",{status:!0,moreParams:a.sendParams}),B.dispatch("user/getLocationHeight",!1)};return(s,t)=>{const g=l("van-sticky"),P=l("SportsIcon"),I=l("van-icon"),S=i("img");return n(),o("div",{ref_key:"container",ref:k,class:"homeMatchHandicap","data-val":v(H)},[c(g,{"offset-top":v(H),container:k.value,"z-index":"5"},{default:r((()=>[u("div",Y,[c(V,{"time-send-params":e.sendParams},null,8,["time-send-params"]),u("div",J,[X,u("span",{class:m(["btn R",[{active:v(y)}]]),onClick:_},d(s.$t("home.R")),3),u("span",{class:m(["btn OU",[{active:v(b)}]]),onClick:T},d(s.$t("home.OU")),3),u("span",{class:m(["btn M",[{active:v(w)}]]),onClick:x},d(s.$t("home.M")),3)])])])),_:1},8,["offset-top","container"]),u("div",Z,[u("div",G,[u("div",ee,[u("div",ae,[q(e.sendParams)?(n(),o("div",{key:0,class:"live-icon",onClick:t[0]||(t[0]=a=>{return s=e.sendParams,void K.push(`/match/${s.gidm}/bets`);var s})},se)):p("",!0),u("div",te,[c(P,{"icon-src":a.sendParams.gameType,class:"ball-img"},null,8,["icon-src"]),u("div",le,d(j(e.sendParams)),1)]),u("div",ie,[u("div",ne,[h(c(P,{"icon-src":"sportlive",class:"live-img"},null,512),[[f,q(e.sendParams)]]),u("div",{class:m(["up-match-time-html",e.sendParams.gameType]),innerHTML:O(e.sendParams)},null,10,oe)])])]),u("div",ce,[u("div",re,[h(u("img",ue,null,512),[[S,e.sendParams.homeLogo]]),u("div",me,d(e.sendParams.homeTeamAbbr||e.sendParams.homeTeam),1),u("div",ve,[u("div",de,d(v(R)(e.sendParams,"H")),1)])]),u("div",pe,[h(u("img",he,null,512),[[S,e.sendParams.awayLogo]]),u("div",fe,d(e.sendParams.awayTeamAbbr||e.sendParams.awayTeam),1),u("div",ge,[u("div",ye,d(v(R)(e.sendParams,"C")),1)])])]),u("div",_e,[v(y)&&e.sendParams.RE?(n(),o("div",be,[u("div",Te,[u("div",we,d(s.$t("home.RInfo")),1)]),u("div",xe,[u("div",ke,[u("div",He,[c(L,{"send-params":v(Q)("RE",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(b)&&e.sendParams.ROU?(n(),o("div",Pe,[u("div",Ie,[u("div",Se,d(s.$t("home.OUInfo")),1)]),u("div",Oe,[u("div",Re,[u("div",$e,[c(L,{"send-params":v(Q)("ROU",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(w)&&e.sendParams.RM?(n(),o("div",Me,[u("div",Ne,[u("div",je,d(s.$t("home.MInfo")),1)]),u("div",Ce,[u("div",Be,[u("div",Ve,[c(L,{"send-params":v(Q)("RM",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0)])])]),u("div",Qe,[u("div",Le,[u("div",{class:"match-footer__item",onClick:E},[u("span",null,d(s.$t("home.morePlay")),1),c(I,{class:"arrow",name:"arrow"})])])])])],8,W)}}});Ue.__scopeId="data-v-26ae3147";const Ke=e=>(g("data-v-9ca77efe"),e=e(),y(),e),qe={class:"video-box-wrap"},Ee=Ke((()=>u("video",{id:"VideoRef",style:{"object-fit":"fill"},class:"video-js vjs-default-skin",playsinline:"true",controls:"",preload:"metadata"},null,-1))),Fe={key:0,class:"video-error"},Ae=Ke((()=>u("span",{class:"video-icon"},null,-1))),De=Ke((()=>u("div",{class:"error-tips"},"视频加载失败，请刷新重试",-1))),ze=["onClick"];var We=a({props:{liveUrl:{type:String,default:""},controls:{type:Boolean,default:!0}},emits:["refresh","touchVideo"],setup(e,{expose:a,emit:s}){const i=e,r=t(null),v=t(!1),d=t(!0),h=t(),f=()=>{try{r.value.dispose&&r.value.dispose()}catch(e){}},g=()=>{if(!document.querySelector("#VideoRef"))return!1;r.value.muted()?(r.value.muted(!1),d.value=!1):(r.value.muted(!0),d.value=!0)},y=()=>{s("refresh")};a({refresh:y,touchVideo:()=>{s("touchVideo")}});const x=t(!0);return _((()=>{b((()=>{clearTimeout(h.value),h.value=setTimeout((()=>{v.value=!1;const e=document.querySelector("#VideoRef");if(e&&i.liveUrl)try{r.value=q("VideoRef",{muted:!0,controls:i.controls,width:"100%",height:"100%",loop:!0,autoplay:!0,sources:[{src:i.liveUrl,type:"application/x-mpegURL"}]},(()=>{try{e.muted=!0,e.play(),r.value.on("error",(()=>{v.value=!0,f()}))}catch(a){console.error(a)}}))}catch(a){console.error("视频异常！"),console.error(a)}}),500),setTimeout((()=>{x.value=!1}),2e3)}))})),T((()=>{f()})),(e,a)=>{const s=l("van-loading");return n(),o("div",qe,[Ee,v.value?(n(),o("div",Fe,[Ae,De,u("div",{class:"error-btn",onClick:y},"刷新视频")])):p("",!0),u("div",{class:m(["pop",{popBg:x.value}])},[c(s,{class:"popBg-loading"})],2),u("div",{class:m(["sound-icon",{muted:d.value}]),onClick:w(g,["stop"])},null,10,ze)])}}});We.__scopeId="data-v-9ca77efe";const Ye={class:"video-footer"},Je={class:"leagueName text-overflow"},Xe=(e=>(g("data-v-6091e662"),e=e(),y(),e))((()=>u("div",{class:"flex-1"},null,-1))),Ze=["innerHTML"];var Ge=a({props:{liveInfo:{type:Object,default:()=>{}},matchIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},setup(e){const a=e,i=j(),r=s((()=>"/assets/ft.7964dceb.jpg"));x((()=>a.activeIndex),(()=>{a.activeIndex===a.matchIndex?h():m.value=!1}));const m=t(!1),h=()=>{m.value=!1,b((()=>{m.value=!0}))};return _((()=>{a.activeIndex===a.matchIndex?h():m.value=!1})),(a,s)=>{const t=l("SportsIcon");return n(),o("div",{class:"match-item-wrap",style:H({backgroundImage:`url(${v(r)})`})},[m.value?(n(),k(v(We),{key:0,"live-url":e.liveInfo.m3u8||e.liveInfo.url,controls:!1,onRefresh:h},null,8,["live-url"])):p("",!0),u("div",Ye,[c(t,{class:"SportsIcon","icon-src":e.liveInfo.gameType},null,8,["icon-src"]),u("div",Je,d(e.liveInfo.leagueShortName||e.liveInfo.leagueName),1),Xe,u("div",{class:"time",innerHTML:v(i).showRBTime(e.liveInfo)},null,8,Ze)])],4)}}});Ge.__scopeId="data-v-6091e662";const ea={key:0,class:"swipeLive"},aa={class:"wrap"};var sa=a({setup(e){const a=t(0),s=t([]),i=e=>{a.value=e};return _((()=>{s.value.length=0,(async()=>{var e;const a=await E({page:1,pageSize:5,rbType:1});if(200===a.code){const t=(null==(e=null==a?void 0:a.data)?void 0:e.list)||[];s.value.length=0,await t.map((async e=>{const a={gidm:e.gidm},t=await F(a);if(200===t.code){const{streamNa:a}=t.data,{liveali:s}=a||{},{m3u8:l}=s||{};e.m3u8=e.m3u8||l,e.streamNa=a}s.value.push(e)}))}})()})),(e,t)=>{const m=l("van-swipe-item"),v=l("van-swipe");return s.value.length?(n(),o("div",ea,[c(v,{class:"my-swipe","indicator-color":"white",onChange:i},{default:r((()=>[(n(!0),o(P,null,I(s.value,((e,s)=>(n(),k(m,{key:s,onClick:a=>(e=>{if(!e)return;const{gidm:a}=e,s={name:"MatchDetail",params:{id:a}};K.push(s)})(e)},{default:r((()=>[u("div",aa,[(n(),k(Ge,{key:s,"live-info":e,"match-index":s,"active-index":a.value},null,8,["live-info","match-index","active-index"]))])])),_:2},1032,["onClick"])))),128))])),_:1})])):p("",!0)}}});sa.__scopeId="data-v-8c3afa3e";const ta={class:"sportlive"},la={key:0,class:"sportlive-Match-Tabs"},ia={class:"sportlive"};var na=a({setup(a){const i=t(),r=t(!1),m=async(e=!0)=>{await f(),await y(e)},v=t([""]),h=t([]),f=async()=>{const e=await A({})||{};if(200===e.code&&e.data){const a=e.data||[];h.value=a.filter((e=>!v.value.includes(e.gameType)))}},g=t([]),y=async(e=!0)=>{var a,s,t,l;const n={gameType:i.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:200};e&&(r.value=!1);const o=await D(n)||{};if(e&&(r.value=!0),200===o.code&&(null==(s=null==(a=o.data)?void 0:a.matchList)?void 0:s.baseData)){const e=(null==(l=null==(t=o.data)?void 0:t.matchList)?void 0:l.baseData)||[];g.value=e.filter((e=>!v.value.includes(e.gameType)))}else g.value=[]},b=()=>{},w=e=>{i.value=e.gameType,y()};_((()=>{$(),r.value=!1,m()})),S((()=>{$()})),O((()=>{C()})),T((()=>{C(),B.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),B.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),B.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})}));const H=s((()=>B.state.app.businessConfig.pushSwitch));x(H,(()=>{$()}));const R=t(),$=()=>{clearTimeout(R),R.value=setTimeout((()=>{N()}),100)},M=t(15e3),N=()=>{1==+H.value&&(M.value=12e4),C(),j.value=setInterval((()=>{m(!1)}),M.value)},j=t(),C=()=>{clearInterval(j.value)},V=t(""),Q=s((()=>B.state.home.refreshChangeTime));return x(Q,(e=>{e&&(clearTimeout(V.value),V.value=setTimeout((()=>{}),100))})),(a,s)=>{const t=l("SportsButton"),m=l("Loading"),v=l("HomeEmpty"),f=l("FooterHeight");return n(),o(P,null,[c(sa,{class:"mt10"}),u("div",ta,[h.value.length?(n(),o("div",la,[c(e,{text:a.$t("sport.all"),active:!i.value,onClick:s[0]||(s[0]=e=>w({}))},null,8,["text","active"]),(n(!0),o(P,null,I(h.value,((e,a)=>(n(),k(t,{key:a,text:e.gameType,active:i.value===e.gameType,count:e.count,"show-count":"",onClick:a=>w(e)},null,8,["text","active","count","onClick"])))),128))])):p("",!0)]),u("div",ia,[r.value?(n(),o(P,{key:1},[(n(!0),o(P,null,I(g.value,((e,a)=>(n(),k(Ue,{key:a,"send-params":e},null,8,["send-params"])))),128)),g.value.length?p("",!0):(n(),k(v,{key:0}))],64)):(n(),k(m,{key:0})),g.value.length?(n(),o("div",{key:2,class:"Button-MatchMore mt10",onClick:b},[u("span",null,d(a.$t("live.noMore")),1)])):p("",!0),c(f)])],64)}}});na.__scopeId="data-v-5aa156f0";export{na as default};
