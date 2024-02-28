import{_ as e}from"./index.8e8bd7bb.js";import{s as a,b as s,d as t,r as l,E as i,o as n,S as o,c as r,O as c,P as u,q as m,_ as d,u as v,V as p,a0 as h,x as f,y,X as g,Y as _,w as b,M as T,n as w,f as k,U as x,W as S,F as H,Z as R,g as I,h as P}from"./vue.845920bc.js";import{g as O,o as $,b as B,t as N,u as M}from"./useMatch.575f98e8.js";import{u as C,s as j,n as Q,a0 as U,a1 as V,Q as L,m as E}from"./index.814b67e8.js";import{_ as K,d as q,e as D}from"./index.5628497f.js";import{v as z}from"./video.es.556ff4fe.js";import{a as F,e as A}from"./index.2d2135da.js";const W=e=>(g("data-v-8bf1776e"),e=e(),_(),e),Y=["data-val"],J={class:"home-tabs-play"},X={class:"play"},Z=W((()=>u("div",{class:"flex-1"},null,-1))),G={class:"home-match"},ee={class:"up-match-group__body"},ae={class:"up-match"},se={class:"match-info-live__header border-bottom"},te=[W((()=>u("i",{v:"",class:"iconfont icon-footer-live"},null,-1)))],le={class:"up-match-league"},ie={class:"text"},ne={class:"flex-cross-center"},oe={class:"up-match-time"},re=["innerHTML"],ce={class:"up-match-score border-bottom"},ue={class:"item mb5"},me={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},de={class:"name"},ve={class:"container"},pe={class:"value"},he={class:"item"},fe={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},ye={class:"name"},ge={class:"container"},_e={class:"value"},be={class:"up-match__body"},Te={key:0,class:"match-betting-item"},we={class:"match-betting-item__title"},ke={class:"flex-cross-center"},xe={key:0},Se={key:1},He={class:"match-betting-item__content"},Re={class:"betting-select"},Ie={class:"betting-select__list"},Pe={key:1,class:"match-betting-item"},Oe={class:"match-betting-item__title"},$e={class:"flex-cross-center"},Be={key:0},Ne={key:1},Me={class:"match-betting-item__content"},Ce={class:"betting-select"},je={class:"betting-select__list"},Qe={key:2,class:"match-betting-item"},Ue={class:"match-betting-item__title"},Ve={class:"flex-cross-center"},Le={key:0},Ee={key:1},Ke={class:"match-betting-item__content"},qe={class:"betting-select"},De={class:"betting-select__list"},ze={class:"up-match__footer"},Fe={class:"match-footer"};var Ae=a({props:{sendParams:{type:Object,default:function(){return{}}},tabType:{type:String,default:""},playTitleToggle:{type:Boolean,default:function(){return!0}}},setup(e){const a=e,{t:g}=C(),_=s((()=>j.state.home.RrefShow)),b=()=>{j.dispatch("home/setKeyValue",{key:"RrefShow",value:!_.value})},T=s((()=>j.state.home.OUrefShow)),w=()=>{j.dispatch("home/setKeyValue",{key:"OUrefShow",value:!T.value})},k=s((()=>j.state.home.MrefShow)),x=()=>{j.dispatch("home/setKeyValue",{key:"MrefShow",value:!k.value})},S=t(null),H=s((()=>{const e=j.state.app.globalBarHeaderHeight||48;return e>60?48:e})),R={0:"",Q1:g("live.Q1"),Q2:g("live.Q2"),Q3:g("live.Q3"),Q4:g("live.Q4"),"1h":g("live.Q1"),"2h":g("live.Q2"),"3h":g("live.Q3"),"4h":g("live.Q4"),OT:g("live.OT"),HT:g("live.HT"),H1:g("live.H1"),H2:g("live.H2"),q1:g("live.Q1"),q2:g("live.Q2"),q3:g("live.Q3"),q4:g("live.Q4"),ot:g("live.OT"),ht:g("live.HT"),h1:g("live.H1"),h2:g("live.H2")},I=e=>{const a=e.toLowerCase();return R[a]},P=t(""),M=(e={})=>{const{showtype:a,gameType:s,gameInfo:t,showType:l,homeTeamSuffix:i,gidm:n}=e,o=$(t,5),r=t&&t.se_now;if("RB"===a||"RB"===l){switch(s){case"FT":if(!t)return g("home.img");if(((null==i?void 0:i.includes("点球"))||(null==i?void 0:i.includes("點球")))&&(t.raceType="dianqiu",t.teamSuffix=g("home.PenaltyKickWar")),((null==i?void 0:i.includes("加时赛"))||(null==i?void 0:i.includes("加時賽")))&&(t.raceType="jiashi",t.teamSuffix=g("live.OT")),t.raceType){if("jiashi"===(null==t?void 0:t.raceType)&&("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time)))return g("live.HT");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^"),s="1H"===e?`上${a}`:`下${a}`;return`${t.teamSuffix}<span class='time-h-number'>${s}</span>`}}if("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time))return g("live.HT");if((null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if((null==t?void 0:t.re_time)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^");let s="";if(a.indexOf("'")>-1){const[e]=a.split("'");s=`${e}<span class="time-h-dot">'</span>`}else s=a;return g("1H"===e?"home.HNumber1":"home.HNumber2",{number:s})}return(null==t?void 0:t.re_time)?t.re_time:g("live.pause");case"TN":if(t){const e=N(t);if(null==e?void 0:e.sciwd)return g("live.pause");const{panNum:a,score1:s,score2:l}=e;return`${a}<span>${s}${l}</span>`}return g("home.img");case"BS":if(t){if(n&&n.indexOf("ic")>-1)return g("home.img");const e=t?B(t):"",a=t.inningNum?null==t?void 0:t.inningNum:e.se_now>0?e.se_now:e.score.num;return g("home.set",{number:a})}return g("home.img");case"BK":return"HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now)?g("live.HT"):(null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1?g("home.addTimeNumber",{number:L(1e3*P.value,"mm:ss")}):r&&P?`${I(null==t?void 0:t.se_now)}<span>${L(1e3*P.value,"mm:ss")}</span>`:!P.value&&r?`${I(t.se_now)}<span>00:00</span>`:"";case"BK_AFT":if(t){if("HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now))return g("live.HT");if((null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1)return g("home.addTimeNumber",{number:L(1e3*t.t_count,"mm:ss")});const e=t&&t.se_now,a=t&&+t.t_count;return e&&a?`${I(t.se_now)}<span>${L(1e3*t.t_count,"mm:ss")}</span>`:""}return g("home.img");case"OP_TN":if(t){const e=(null==t?void 0:t.se_now.replace(/[^0-9]/gi,""))||"";return g("home.set",{number:e})}return g("home.img");case"OP_VB":return o?g("home.set",{number:o.scorePan.num}):"";case"OP_DJ":case"OP_IH":return g("home.img")}return g("home.img")}return g("home.img")},K=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",q=e=>{const{live:a,merchantAnchor:s,merchantStreamNa:t}=e;return!!(1*a!=1||s&&(null==s?void 0:s.length)&&t&&(null==t?void 0:t.length))},D=()=>{j.dispatch("betting/setMoreShow",{status:!0,moreParams:a.sendParams}),j.dispatch("user/getLocationHeight",!1)};return(s,t)=>{const g=l("van-sticky"),R=l("SportsIcon"),I=l("van-icon"),P=i("img");return n(),o("div",{ref_key:"container",ref:S,class:"homeMatchHandicap","data-val":v(H)},[e.playTitleToggle?(n(),r(g,{key:0,"offset-top":v(H),container:S.value,"z-index":"5"},{default:c((()=>[u("div",J,[m(Q,{"time-send-params":e.sendParams},null,8,["time-send-params"]),u("div",X,[Z,u("span",{class:d(["btn R",[{active:v(_)}]]),onClick:b},p(s.$t("home.R")),3),u("span",{class:d(["btn OU",[{active:v(T)}]]),onClick:w},p(s.$t("home.OU")),3),u("span",{class:d(["btn M",[{active:v(k)}]]),onClick:x},p(s.$t("home.M")),3)])])])),_:1},8,["offset-top","container"])):h("",!0),u("div",G,[u("div",ee,[u("div",ae,[u("div",se,[q(e.sendParams)?(n(),o("div",{key:0,class:"live-icon",onClick:t[0]||(t[0]=a=>{return s=e.sendParams,void E.push(`/match/${s.gidm}/bets`);var s})},te)):h("",!0),u("div",le,[m(R,{"icon-src":a.sendParams.gameType,class:"ball-img"},null,8,["icon-src"]),u("div",ie,p(K(e.sendParams)),1)]),u("div",ne,[u("div",oe,[f(m(R,{"icon-src":"sportlive",class:"live-img"},null,512),[[y,q(e.sendParams)]]),u("div",{class:d(["up-match-time-html",e.sendParams.gameType]),innerHTML:M(e.sendParams)},null,10,re)])])]),u("div",ce,[u("div",ue,[f(u("img",me,null,512),[[P,e.sendParams.homeLogo]]),u("div",de,p(e.sendParams.homeTeamAbbr||e.sendParams.homeTeam),1),u("div",ve,[u("div",pe,p(v(O)(e.sendParams,"H")),1)])]),u("div",he,[f(u("img",fe,null,512),[[P,e.sendParams.awayLogo]]),u("div",ye,p(e.sendParams.awayTeamAbbr||e.sendParams.awayTeam),1),u("div",ge,[u("div",_e,p(v(O)(e.sendParams,"C")),1)])])]),u("div",be,[v(_)&&e.sendParams.RE?(n(),o("div",Te,[u("div",we,[u("div",ke,["RB"===e.tabType?(n(),o("span",xe,p(s.$t("home.RBInfo")),1)):(n(),o("span",Se,p(s.$t("home.RInfo")),1))])]),u("div",He,[u("div",Re,[u("div",Ie,[m(V,{"send-params":v(U)("RE",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),v(T)&&e.sendParams.ROU?(n(),o("div",Pe,[u("div",Oe,[u("div",$e,["RB"===e.tabType?(n(),o("span",Be,p(s.$t("home.RBSize")),1)):(n(),o("span",Ne,p(s.$t("home.OUInfo")),1))])]),u("div",Me,[u("div",Ce,[u("div",je,[m(V,{"send-params":v(U)("ROU",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),v(k)&&e.sendParams.RM?(n(),o("div",Qe,[u("div",Ue,[u("div",Ve,["RB"===e.tabType?(n(),o("span",Le,p(s.$t("home.RBRide")),1)):(n(),o("span",Ee,p(s.$t("home.MInfo")),1))])]),u("div",Ke,[u("div",qe,[u("div",De,[m(V,{"send-params":v(U)("RM",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0)])])]),u("div",ze,[u("div",Fe,[u("div",{class:"match-footer__item",onClick:D},[u("span",null,p(s.$t("home.morePlay")),1),m(I,{class:"arrow",name:"arrow"})])])])])],8,Y)}}});Ae.__scopeId="data-v-8bf1776e";const We=e=>(g("data-v-70274a2a"),e=e(),_(),e),Ye={class:"video-box-wrap"},Je=We((()=>u("video",{id:"VideoRef",style:{"object-fit":"fill"},class:"video-js vjs-default-skin",playsinline:"true",controls:"",preload:"metadata"},null,-1))),Xe={key:0,class:"video-error"},Ze=We((()=>u("span",{class:"video-icon"},null,-1))),Ge=We((()=>u("div",{class:"error-tips"},"视频加载失败，请刷新重试",-1))),ea=["onClick"];var aa=a({props:{liveUrl:{type:String,default:""},controls:{type:Boolean,default:!0}},emits:["refresh","touchVideo"],setup(e,{expose:a,emit:i}){const r=e,c=s((()=>j.state.match.turnSound)),v=t(null),p=t(!1),f=t(!0);b(c,((e,a)=>{console.log(`turnSound发生变化，新值为：${e}，旧值为：${a}`),e?(v.value.muted(!1),f.value=!1):(v.value.muted(!0),f.value=!0)}));const y=t(),g=()=>{try{v.value.dispose&&v.value.dispose()}catch(e){}},_=()=>{if(!document.querySelector("#VideoRef"))return!1;v.value.muted()?j.commit("match/SET_TURN_SOUND",!1):j.commit("match/SET_TURN_SOUND",!0)},S=()=>{i("refresh")};a({refresh:S,touchVideo:()=>{i("touchVideo")}});const H=t(!0);return T((()=>{w((()=>{clearTimeout(y.value),y.value=setTimeout((()=>{p.value=!1;const e=document.querySelector("#VideoRef");if(e&&r.liveUrl)try{v.value=z("VideoRef",{muted:!0,controls:r.controls,width:"100%",height:"100%",loop:!0,autoplay:!0,sources:[{src:r.liveUrl,type:"application/x-mpegURL"}]},(()=>{try{e.muted=!0,e.play(),v.value.on("error",(()=>{p.value=!0,g()}))}catch(a){console.error(a)}}))}catch(a){console.error("视频异常！"),console.error(a)}}),500),setTimeout((()=>{H.value=!1}),2e3)}))})),k((()=>{g()})),(e,a)=>{const s=l("van-loading");return n(),o("div",Ye,[Je,p.value?(n(),o("div",Xe,[Ze,Ge,u("div",{class:"error-btn",onClick:S},"刷新视频")])):h("",!0),u("div",{class:d(["pop",{popBg:H.value}])},[m(s,{class:"popBg-loading"})],2),u("div",{class:d(["sound-icon",{muted:f.value}]),onClick:x(_,["stop"])},null,10,ea)])}}});aa.__scopeId="data-v-70274a2a";const sa={class:"video-footer"},ta={class:"leagueName text-overflow"},la=(e=>(g("data-v-6091e662"),e=e(),_(),e))((()=>u("div",{class:"flex-1"},null,-1))),ia=["innerHTML"];var na=a({props:{liveInfo:{type:Object,default:()=>{}},matchIndex:{type:Number,default:0},activeIndex:{type:Number,default:0}},setup(e){const a=e,i=M(),c=s((()=>"/assets/ft.7964dceb.jpg"));b((()=>a.activeIndex),(()=>{a.activeIndex===a.matchIndex?f():d.value=!1}));const d=t(!1),f=()=>{d.value=!1,w((()=>{d.value=!0}))};return T((()=>{a.activeIndex===a.matchIndex?f():d.value=!1})),(a,s)=>{const t=l("SportsIcon");return n(),o("div",{class:"match-item-wrap",style:S({backgroundImage:`url(${v(c)})`})},[d.value?(n(),r(v(aa),{key:0,"live-url":e.liveInfo.m3u8||e.liveInfo.url,controls:!1,onRefresh:f},null,8,["live-url"])):h("",!0),u("div",sa,[m(t,{class:"SportsIcon","icon-src":e.liveInfo.gameType},null,8,["icon-src"]),u("div",ta,p(e.liveInfo.leagueShortName||e.liveInfo.leagueName),1),la,u("div",{class:"time",innerHTML:v(i).showRBTime(e.liveInfo)},null,8,ia)])],4)}}});na.__scopeId="data-v-6091e662";const oa={key:0,class:"swipeLive"},ra={class:"wrap"};var ca=a({setup(e){const a=t(0),s=t([]),i=e=>{a.value=e};return T((()=>{s.value.length=0,(async()=>{var e;const a=await F({page:1,pageSize:5,rbType:1});if(200===a.code){const t=(null==(e=null==a?void 0:a.data)?void 0:e.list)||[];s.value.length=0,await t.map((async e=>{const a={gidm:e.gidm},t=await A(a);if(200===t.code){const{streamNa:a}=t.data,{liveali:s}=a||{},{m3u8:l}=s||{};e.m3u8=e.m3u8||l,e.streamNa=a}s.value.push(e)}))}})()})),(e,t)=>{const d=l("van-swipe-item"),v=l("van-swipe");return s.value.length?(n(),o("div",oa,[m(v,{class:"my-swipe","indicator-color":"white",onChange:i},{default:c((()=>[(n(!0),o(H,null,R(s.value,((e,s)=>(n(),r(d,{key:s,onClick:a=>(e=>{if(!e)return;const{gidm:a}=e,s={name:"MatchDetail",params:{id:a}};E.push(s)})(e)},{default:c((()=>[u("div",ra,[(n(),r(na,{key:s,"live-info":e,"match-index":s,"active-index":a.value},null,8,["live-info","match-index","active-index"]))])])),_:2},1032,["onClick"])))),128))])),_:1})])):h("",!0)}}});ca.__scopeId="data-v-8c3afa3e";const ua={class:"sportlive"},ma={key:0,class:"sportlive-Match-Tabs"},da={class:"sportlive"};var va=a({setup(a){const i=s((()=>{const e=j.state.app.globalBarHeaderHeight||48;return e>60?48:e})),f=t(),y=t(!1),g=t(null),_=async(e=!0)=>{await S(),await $(e)},w=t([""]),x=t([]),S=async()=>{const e=await q({})||{};if(200===e.code&&e.data){const a=e.data||[];x.value=a.filter((e=>!w.value.includes(e.gameType)))}},O=t([]),$=async(e=!0)=>{var a,s,t,l;const i={gameType:f.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:200};e&&(y.value=!1);const n=await D(i)||{};if(e&&(y.value=!0),200===n.code&&(null==(s=null==(a=n.data)?void 0:a.matchList)?void 0:s.baseData)){const e=(null==(l=null==(t=n.data)?void 0:t.matchList)?void 0:l.baseData)||[];O.value=e.filter((e=>!w.value.includes(e.gameType)))}else O.value=[]},B=()=>{},N=e=>{f.value=e.gameType,$()};T((()=>{Q(),y.value=!1,_()})),I((()=>{Q()})),P((()=>{E()})),k((()=>{E(),j.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),j.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),j.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})}));const M=s((()=>j.state.app.businessConfig.pushSwitch));b(M,(()=>{Q()}));const C=t(),Q=()=>{clearTimeout(C),C.value=setTimeout((()=>{V()}),100)},U=t(15e3),V=()=>{1==+M.value&&(U.value=12e4),E(),L.value=setInterval((()=>{_(!1)}),U.value)},L=t(),E=()=>{clearInterval(L.value)},z=t(""),F=s((()=>j.state.home.refreshChangeTime));return b(F,(e=>{e&&(clearTimeout(z.value),z.value=setTimeout((()=>{}),100))})),(a,s)=>{const t=l("SportsButton"),_=l("Loading"),b=l("van-sticky"),T=l("HomeEmpty"),w=l("FooterHeight");return n(),o(H,null,[m(ca,{class:"mt10"}),u("div",ua,[x.value.length?(n(),o("div",ma,[m(e,{text:a.$t("sport.all"),active:!f.value,onClick:s[0]||(s[0]=e=>N({}))},null,8,["text","active"]),(n(!0),o(H,null,R(x.value,((e,a)=>(n(),r(t,{key:a,text:e.gameType,active:f.value===e.gameType,count:e.count,"show-count":"",onClick:a=>N(e)},null,8,["text","active","count","onClick"])))),128))])):h("",!0)]),u("div",da,[y.value?(n(),o(H,{key:1},[u("div",{ref_key:"newContainer",ref:g},[(n(!0),o(H,null,R(O.value,((e,a)=>(n(),o(H,{key:a},[0===a?(n(),r(b,{key:0,"offset-top":v(i),container:g.value,"z-index":"5"},{default:c((()=>[m(K,{class:d({mt20:0!==a}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):h("",!0),m(Ae,{"play-title-toggle":!1,"send-params":e,tabType:"RB",class:d({mt10:0!==a})},null,8,["send-params","class"])],64)))),128))],512),O.value.length?h("",!0):(n(),r(T,{key:0}))],64)):(n(),r(_,{key:0})),O.value.length?(n(),o("div",{key:2,class:"Button-MatchMore mt10",onClick:B},[u("span",null,p(a.$t("live.noMore")),1)])):h("",!0),m(w)])],64)}}});va.__scopeId="data-v-2ab7f5ba";export{va as default};
