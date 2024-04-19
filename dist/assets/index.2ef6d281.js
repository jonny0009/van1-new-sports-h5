import{s as e,b as s,d as a,r as t,E as i,o as n,R as m,c as r,O as l,P as c,q as o,_ as d,u,W as v,$ as h,x as p,y as f,Y as _,Z as g}from"./vue.1f547d27.js";import{g as y,o as b,b as T,t as P}from"./getScore.b0db83e2.js";import{u as w,s as H,k as R,P as $,W as O,X as k,E as x,r as S}from"./index.546af480.js";const B=e=>(_("data-v-04d35523"),e=e(),g(),e),Q=["data-val"],M={class:"home-tabs-play"},N={class:"play"},I=B((()=>c("div",{class:"flex-1"},null,-1))),L={class:"home-match"},j={class:"up-match-group__body"},C={class:"up-match"},E={class:"match-info-live__header border-bottom"},D=[B((()=>c("i",{v:"",class:"iconfont icon-footer-live"},null,-1)))],K={class:"up-match-league"},U={class:"text"},V={class:"flex-cross-center"},q={class:"up-match-time"},A=["innerHTML"],W={class:"up-match-score border-bottom"},z={class:"item mb5 mt10"},F={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},J={class:"name"},X={class:"container"},Y={class:"value"},Z={class:"item"},G={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},ee={class:"name"},se={class:"container"},ae={class:"value"},te={class:"up-match__body"},ie={key:0,class:"match-betting-item"},ne={class:"match-betting-item__title"},me={class:"flex-cross-center"},re={key:0},le={key:1},ce={class:"match-betting-item__content"},oe={class:"betting-select"},de={class:"betting-select__list"},ue={key:1,class:"match-betting-item"},ve={class:"match-betting-item__title"},he={class:"flex-cross-center"},pe={key:0},fe={key:1},_e={class:"match-betting-item__content"},ge={class:"betting-select"},ye={class:"betting-select__list"},be={key:2,class:"match-betting-item"},Te={class:"match-betting-item__title"},Pe={class:"flex-cross-center"},we={key:0},He={key:1},Re={class:"match-betting-item__content"},$e={class:"betting-select"},Oe={class:"betting-select__list"},ke={key:3,ref:"Mref",class:"match-betting-item"},xe={class:"match-betting-item__title"},Se={class:"flex-cross-center"},Be={class:"match-betting-item__content"},Qe={class:"betting-select"},Me={class:"betting-select__list"},Ne={class:"up-match__footer"},Ie={class:"match-footer"},Le={class:"num"};var je=e({props:{sendParams:{type:Object,default:function(){return{}}},tabType:{type:String,default:""},playTitleToggle:{type:Boolean,default:function(){return!0}},ifMatchLive:{type:Boolean,default:function(){return!1}}},setup(e){const _=e,{t:g}=w(),B=s((()=>H.state.home.RrefShow)),je=()=>{H.dispatch("home/setKeyValue",{key:"RrefShow",value:!B.value})},Ce=s((()=>H.state.home.OUrefShow)),Ee=()=>{H.dispatch("home/setKeyValue",{key:"OUrefShow",value:!Ce.value})},De=s((()=>H.state.home.MrefShow)),Ke=()=>{H.dispatch("home/setKeyValue",{key:"MrefShow",value:!De.value})},Ue=s((()=>H.state.home.PDrefShow)),Ve=()=>{H.dispatch("home/setKeyValue",{key:"PDrefShow",value:!Ue.value})},qe=a(null),Ae=s((()=>{const e=H.state.app.globalBarHeaderHeight||48;return e>60?48:e})),We={0:"",Q1:g("live.Q1"),Q2:g("live.Q2"),Q3:g("live.Q3"),Q4:g("live.Q4"),"1h":g("live.Q1"),"2h":g("live.Q2"),"3h":g("live.Q3"),"4h":g("live.Q4"),OT:g("live.OT"),HT:g("live.HT"),H1:g("live.H1"),H2:g("live.H2"),q1:g("live.Q1"),q2:g("live.Q2"),q3:g("live.Q3"),q4:g("live.Q4"),ot:g("live.OT"),ht:g("live.HT"),h1:g("live.H1"),h2:g("live.H2")},ze=e=>{const s=e.toLowerCase();return We[s]},Fe=a(""),Je=(e={})=>{const{showtype:s,gameType:a,gameInfo:t,showType:i,homeTeamSuffix:n,gidm:m}=e,r=b(t,5),l=t&&t.se_now;if("RB"===s||"RB"===i){switch(a){case"FT":if(!t)return g("home.img");if((n?.includes("点球")||n?.includes("點球"))&&(t.raceType="dianqiu",t.teamSuffix=g("home.PenaltyKickWar")),(n?.includes("加时赛")||n?.includes("加時賽"))&&(t.raceType="jiashi",t.teamSuffix=g("live.OT")),t.raceType){if("jiashi"===t?.raceType&&("HT^^"===t?.re_time||"HT"===t?.re_time))return g("live.HT");if("jiashi"===t?.raceType&&t?.re_time&&new RegExp("LIVE").test(t?.re_time))return g("live.pause");if("jiashi"===t?.raceType&&t?.re_time.indexOf("^")>-1){const[e,s]=t.re_time.split("^"),a="1H"===e?`上${s}`:`下${s}`;return`${t.teamSuffix}<span class='time-h-number'>${a}</span>`}}if("HT^^"===t?.re_time||"HT"===t?.re_time)return g("live.HT");if(t?.re_time&&new RegExp("LIVE").test(t?.re_time))return g("live.pause");if(t?.re_time&&t?.re_time.indexOf("^")>-1){const[e,s]=t.re_time.split("^");let a="";if(s.indexOf("'")>-1){const[e]=s.split("'");a=`${e}<span class="time-h-dot">'</span>`}else a=s;return g("1H"===e?"home.HNumber1":"home.HNumber2",{number:a})}return t?.re_time?t.re_time:g("live.pause");case"TN":if(t){const e=P(t);if(e?.sciwd)return g("live.pause");const{panNum:s,score1:a,score2:i}=e;return`${s}<span>${a}${i}</span>`}return g("home.img");case"BS":if(t){if(m&&m.indexOf("ic")>-1)return g("home.img");const e=t?T(t):"",s=t.inningNum?t?.inningNum:e.se_now>0?e.se_now:e.score.num;return g("home.set",{number:s})}return g("home.img");case"BK":return"HT"===t?.se_now||"ht"===t?.se_now?g("live.HT"):t?.se_now.indexOf("OT")>-1||t?.se_now.indexOf("ot")>-1?g("home.addTimeNumber",{number:x(1e3*Fe.value,"mm:ss")}):l&&Fe?`${ze(t?.se_now)}<span>${x(1e3*Fe.value,"mm:ss")}</span>`:!Fe.value&&l?`${ze(t.se_now)}<span>00:00</span>`:"";case"BK_AFT":if(t){if("HT"===t?.se_now||"ht"===t?.se_now)return g("live.HT");if(t?.se_now.indexOf("OT")>-1||t?.se_now.indexOf("ot")>-1)return g("home.addTimeNumber",{number:x(1e3*t.t_count,"mm:ss")});const e=t&&t.se_now,s=t&&+t.t_count;return e&&s?`${ze(t.se_now)}<span>${x(1e3*t.t_count,"mm:ss")}</span>`:""}return g("home.img");case"OP_TN":if(t){const e=t?.se_now.replace(/[^0-9]/gi,"")||"";return g("home.set",{number:e})}return g("home.img");case"OP_VB":return r?g("home.set",{number:r.scorePan.num}):"";case"OP_DJ":case"OP_IH":return g("home.img")}return g("home.img")}return g("home.img")},Xe=({leagueShortName:e,leagueName:s})=>e&&s?`${e||s}`:"",Ye=e=>{const{live:s,live_status:a,merchantAnchor:t,merchantStreamNa:i}=e;return!!(1*a!=1||t&&t?.length&&i&&i?.length)},Ze=()=>{H.dispatch("betting/setMoreShow",{status:!0,moreParams:_.sendParams}),H.dispatch("user/getLocationHeight",!1)};return(s,a)=>{const g=t("van-sticky"),b=t("SportsIcon"),T=t("van-icon"),P=i("img");return n(),m("div",{ref_key:"container",ref:qe,class:"homeMatchHandicap","data-val":u(Ae)},[e.playTitleToggle?(n(),r(g,{key:0,"offset-top":u(Ae),container:qe.value,"z-index":"5"},{default:l((()=>[c("div",M,[o(R,{"time-send-params":e.sendParams},null,8,["time-send-params"]),c("div",N,[I,c("span",{class:d(["btn R",[{active:u(B)}]]),onClick:je},v(s.$t("home.R")),3),c("span",{class:d(["btn OU",[{active:u(Ce)}]]),onClick:Ee},v(s.$t("home.OU")),3),c("span",{class:d(["btn M",[{active:u(De)}]]),onClick:Ke},v(s.$t("home.M")),3),c("span",{class:d(["btn PD",[{active:u(Ue)}]]),onClick:Ve},v(s.$t("live.score")),3)])])])),_:1},8,["offset-top","container"])):h("",!0),c("div",L,[c("div",j,[c("div",C,[c("div",E,[Ye(e.sendParams)?(n(),m("div",{key:0,class:"live-icon",onClick:a[0]||(a[0]=s=>{return a=e.sendParams,S.push(`/match/${a.gidm}/bets`),void H.dispatch("app/setMatchLiveIndex",1);var a})},D)):h("",!0),c("div",K,[o(b,{"icon-src":_.sendParams.gameType,class:"ball-img"},null,8,["icon-src"]),c("div",U,v(Xe(e.sendParams)),1)]),c("div",V,[c("div",q,[p(o(b,{"icon-src":"sportlive",class:"live-img"},null,512),[[f,Ye(e.sendParams)]]),c("div",{class:d(["up-match-time-html",e.sendParams.gameType]),innerHTML:Je(e.sendParams)},null,10,A)])])]),c("div",W,[c("div",z,[p(c("img",F,null,512),[[P,e.sendParams.homeLogo]]),c("div",J,v(e.sendParams.homeTeamAbbr||e.sendParams.homeTeam),1),c("div",X,[c("div",Y,v(u(y)(e.sendParams,"H")),1)])]),c("div",Z,[p(c("img",G,null,512),[[P,e.sendParams.awayLogo]]),c("div",ee,v(e.sendParams.awayTeamAbbr||e.sendParams.awayTeam),1),c("div",se,[c("div",ae,v(u(y)(e.sendParams,"C")),1)])])]),c("div",te,[u(B)&&e.sendParams.RE?(n(),m("div",ie,[c("div",ne,[c("div",me,["RB"===e.tabType?(n(),m("span",re,v(s.$t("home.RBInfo")),1)):(n(),m("span",le,v(s.$t("home.RInfo")),1))])]),c("div",ce,[c("div",oe,[c("div",de,[o(O,{"send-params":u($)("RE",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),u(Ce)&&e.sendParams.ROU?(n(),m("div",ue,[c("div",ve,[c("div",he,["RB"===e.tabType?(n(),m("span",pe,v(s.$t("home.RBSize")),1)):(n(),m("span",fe,v(s.$t("home.OUInfo")),1))])]),c("div",_e,[c("div",ge,[c("div",ye,[o(O,{"send-params":u($)("ROU",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),u(De)&&e.sendParams.RM?(n(),m("div",be,[c("div",Te,[c("div",Pe,["RB"===e.tabType?(n(),m("span",we,v(s.$t("home.RBRide")),1)):(n(),m("span",He,v(s.$t("home.MInfo")),1))])]),c("div",Re,[c("div",$e,[c("div",Oe,[o(O,{"send-params":u($)("RM",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),u(Ue)&&e.sendParams.RPD?(n(),m("div",ke,[c("div",xe,[c("div",Se,v(s.$t("home.PDscore")),1)]),c("div",Be,[c("div",Qe,[c("div",Me,[o(k,{"send-params":e.sendParams,type:"RPD","if-match-live":e.ifMatchLive},null,8,["send-params","if-match-live"])])])])],512)):h("",!0)])])]),c("div",Ne,[c("div",Ie,[c("div",{class:"match-footer__item",onClick:Ze},[c("span",null,v(s.$t("home.morePlay")),1),c("span",Le,v(e.sendParams.playNum),1),o(T,{class:"arrow",name:"arrow"})])])])])],8,Q)}}});je.__scopeId="data-v-04d35523";export{je as default};
