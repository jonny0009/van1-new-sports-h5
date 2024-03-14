import{s as e,b as s,d as a,r as t,E as i,o as n,S as l,c as o,O as m,P as r,q as c,Z as d,u,V as v,$ as h,x as p,y as f,X as _,Y as g}from"./vue.7833d4f2.js";import{g as y,o as b,b as T,t as P}from"./getScore.e481c193.js";import{u as w,s as H,j as $,a0 as O,a1 as R,a2 as x,Q as k,r as S}from"./index.3881c12a.js";const B=e=>(_("data-v-69347afc"),e=e(),g(),e),M=["data-val"],Q={class:"home-tabs-play"},L={class:"play"},N=B((()=>r("div",{class:"flex-1"},null,-1))),j={class:"home-match"},I={class:"up-match-group__body"},C={class:"up-match"},V={class:"match-info-live__header border-bottom"},D=[B((()=>r("i",{v:"",class:"iconfont icon-footer-live"},null,-1)))],E={class:"up-match-league"},K={class:"text"},U={class:"flex-cross-center"},q={class:"up-match-time"},A=["innerHTML"],z={class:"up-match-score border-bottom"},F={class:"item mb5 mt10"},J={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},W={class:"name"},X={class:"container"},Y={class:"value"},Z={class:"item"},G={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},ee={class:"name"},se={class:"container"},ae={class:"value"},te={class:"up-match__body"},ie={key:0,class:"match-betting-item"},ne={class:"match-betting-item__title"},le={class:"flex-cross-center"},oe={key:0},me={key:1},re={class:"match-betting-item__content"},ce={class:"betting-select"},de={class:"betting-select__list"},ue={key:1,class:"match-betting-item"},ve={class:"match-betting-item__title"},he={class:"flex-cross-center"},pe={key:0},fe={key:1},_e={class:"match-betting-item__content"},ge={class:"betting-select"},ye={class:"betting-select__list"},be={key:2,class:"match-betting-item"},Te={class:"match-betting-item__title"},Pe={class:"flex-cross-center"},we={key:0},He={key:1},$e={class:"match-betting-item__content"},Oe={class:"betting-select"},Re={class:"betting-select__list"},xe={key:3,ref:"Mref",class:"match-betting-item"},ke={class:"match-betting-item__title"},Se={class:"flex-cross-center"},Be={class:"match-betting-item__content"},Me={class:"betting-select"},Qe={class:"betting-select__list"},Le={class:"up-match__footer"},Ne={class:"match-footer"};var je=e({props:{sendParams:{type:Object,default:function(){return{}}},tabType:{type:String,default:""},playTitleToggle:{type:Boolean,default:function(){return!0}},ifMatchLive:{type:Boolean,default:function(){return!1}}},setup(e){const _=e,{t:g}=w(),B=s((()=>H.state.home.RrefShow)),je=()=>{H.dispatch("home/setKeyValue",{key:"RrefShow",value:!B.value})},Ie=s((()=>H.state.home.OUrefShow)),Ce=()=>{H.dispatch("home/setKeyValue",{key:"OUrefShow",value:!Ie.value})},Ve=s((()=>H.state.home.MrefShow)),De=()=>{H.dispatch("home/setKeyValue",{key:"MrefShow",value:!Ve.value})},Ee=s((()=>H.state.home.PDrefShow)),Ke=()=>{H.dispatch("home/setKeyValue",{key:"PDrefShow",value:!Ee.value})},Ue=a(null),qe=s((()=>{const e=H.state.app.globalBarHeaderHeight||48;return e>60?48:e})),Ae={0:"",Q1:g("live.Q1"),Q2:g("live.Q2"),Q3:g("live.Q3"),Q4:g("live.Q4"),"1h":g("live.Q1"),"2h":g("live.Q2"),"3h":g("live.Q3"),"4h":g("live.Q4"),OT:g("live.OT"),HT:g("live.HT"),H1:g("live.H1"),H2:g("live.H2"),q1:g("live.Q1"),q2:g("live.Q2"),q3:g("live.Q3"),q4:g("live.Q4"),ot:g("live.OT"),ht:g("live.HT"),h1:g("live.H1"),h2:g("live.H2")},ze=e=>{const s=e.toLowerCase();return Ae[s]},Fe=a(""),Je=(e={})=>{const{showtype:s,gameType:a,gameInfo:t,showType:i,homeTeamSuffix:n,gidm:l}=e,o=b(t,5),m=t&&t.se_now;if("RB"===s||"RB"===i){switch(a){case"FT":if(!t)return g("home.img");if(((null==n?void 0:n.includes("点球"))||(null==n?void 0:n.includes("點球")))&&(t.raceType="dianqiu",t.teamSuffix=g("home.PenaltyKickWar")),((null==n?void 0:n.includes("加时赛"))||(null==n?void 0:n.includes("加時賽")))&&(t.raceType="jiashi",t.teamSuffix=g("live.OT")),t.raceType){if("jiashi"===(null==t?void 0:t.raceType)&&("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time)))return g("live.HT");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,s]=t.re_time.split("^"),a="1H"===e?`上${s}`:`下${s}`;return`${t.teamSuffix}<span class='time-h-number'>${a}</span>`}}if("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time))return g("live.HT");if((null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if((null==t?void 0:t.re_time)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,s]=t.re_time.split("^");let a="";if(s.indexOf("'")>-1){const[e]=s.split("'");a=`${e}<span class="time-h-dot">'</span>`}else a=s;return g("1H"===e?"home.HNumber1":"home.HNumber2",{number:a})}return(null==t?void 0:t.re_time)?t.re_time:g("live.pause");case"TN":if(t){const e=P(t);if(null==e?void 0:e.sciwd)return g("live.pause");const{panNum:s,score1:a,score2:i}=e;return`${s}<span>${a}${i}</span>`}return g("home.img");case"BS":if(t){if(l&&l.indexOf("ic")>-1)return g("home.img");const e=t?T(t):"",s=t.inningNum?null==t?void 0:t.inningNum:e.se_now>0?e.se_now:e.score.num;return g("home.set",{number:s})}return g("home.img");case"BK":return"HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now)?g("live.HT"):(null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1?g("home.addTimeNumber",{number:k(1e3*Fe.value,"mm:ss")}):m&&Fe?`${ze(null==t?void 0:t.se_now)}<span>${k(1e3*Fe.value,"mm:ss")}</span>`:!Fe.value&&m?`${ze(t.se_now)}<span>00:00</span>`:"";case"BK_AFT":if(t){if("HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now))return g("live.HT");if((null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1)return g("home.addTimeNumber",{number:k(1e3*t.t_count,"mm:ss")});const e=t&&t.se_now,s=t&&+t.t_count;return e&&s?`${ze(t.se_now)}<span>${k(1e3*t.t_count,"mm:ss")}</span>`:""}return g("home.img");case"OP_TN":if(t){const e=(null==t?void 0:t.se_now.replace(/[^0-9]/gi,""))||"";return g("home.set",{number:e})}return g("home.img");case"OP_VB":return o?g("home.set",{number:o.scorePan.num}):"";case"OP_DJ":case"OP_IH":return g("home.img")}return g("home.img")}return g("home.img")},We=({leagueShortName:e,leagueName:s})=>e&&s?`${e||s}`:"",Xe=e=>{const{live:s,live_status:a,merchantAnchor:t,merchantStreamNa:i}=e;return!!(1*a!=1||t&&(null==t?void 0:t.length)&&i&&(null==i?void 0:i.length))},Ye=()=>{H.dispatch("betting/setMoreShow",{status:!0,moreParams:_.sendParams}),H.dispatch("user/getLocationHeight",!1)};return(s,a)=>{const g=t("van-sticky"),b=t("SportsIcon"),T=t("van-icon"),P=i("img");return n(),l("div",{ref_key:"container",ref:Ue,class:"homeMatchHandicap","data-val":u(qe)},[e.playTitleToggle?(n(),o(g,{key:0,"offset-top":u(qe),container:Ue.value,"z-index":"5"},{default:m((()=>[r("div",Q,[c($,{"time-send-params":e.sendParams},null,8,["time-send-params"]),r("div",L,[N,r("span",{class:d(["btn R",[{active:u(B)}]]),onClick:je},v(s.$t("home.R")),3),r("span",{class:d(["btn OU",[{active:u(Ie)}]]),onClick:Ce},v(s.$t("home.OU")),3),r("span",{class:d(["btn M",[{active:u(Ve)}]]),onClick:De},v(s.$t("home.M")),3),r("span",{class:d(["btn PD",[{active:u(Ee)}]]),onClick:Ke},v(s.$t("live.score")),3)])])])),_:1},8,["offset-top","container"])):h("",!0),r("div",j,[r("div",I,[r("div",C,[r("div",V,[Xe(e.sendParams)?(n(),l("div",{key:0,class:"live-icon",onClick:a[0]||(a[0]=s=>{return a=e.sendParams,S.push(`/match/${a.gidm}/bets`),void H.dispatch("app/setMatchLiveIndex",1);var a})},D)):h("",!0),r("div",E,[c(b,{"icon-src":_.sendParams.gameType,class:"ball-img"},null,8,["icon-src"]),r("div",K,v(We(e.sendParams)),1)]),r("div",U,[r("div",q,[p(c(b,{"icon-src":"sportlive",class:"live-img"},null,512),[[f,Xe(e.sendParams)]]),r("div",{class:d(["up-match-time-html",e.sendParams.gameType]),innerHTML:Je(e.sendParams)},null,10,A)])])]),r("div",z,[r("div",F,[p(r("img",J,null,512),[[P,e.sendParams.homeLogo]]),r("div",W,v(e.sendParams.homeTeamAbbr||e.sendParams.homeTeam),1),r("div",X,[r("div",Y,v(u(y)(e.sendParams,"H")),1)])]),r("div",Z,[p(r("img",G,null,512),[[P,e.sendParams.awayLogo]]),r("div",ee,v(e.sendParams.awayTeamAbbr||e.sendParams.awayTeam),1),r("div",se,[r("div",ae,v(u(y)(e.sendParams,"C")),1)])])]),r("div",te,[u(B)&&e.sendParams.RE?(n(),l("div",ie,[r("div",ne,[r("div",le,["RB"===e.tabType?(n(),l("span",oe,v(s.$t("home.RBInfo")),1)):(n(),l("span",me,v(s.$t("home.RInfo")),1))])]),r("div",re,[r("div",ce,[r("div",de,[c(R,{"send-params":u(O)("RE",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),u(Ie)&&e.sendParams.ROU?(n(),l("div",ue,[r("div",ve,[r("div",he,["RB"===e.tabType?(n(),l("span",pe,v(s.$t("home.RBSize")),1)):(n(),l("span",fe,v(s.$t("home.OUInfo")),1))])]),r("div",_e,[r("div",ge,[r("div",ye,[c(R,{"send-params":u(O)("ROU",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),u(Ve)&&e.sendParams.RM?(n(),l("div",be,[r("div",Te,[r("div",Pe,["RB"===e.tabType?(n(),l("span",we,v(s.$t("home.RBRide")),1)):(n(),l("span",He,v(s.$t("home.MInfo")),1))])]),r("div",$e,[r("div",Oe,[r("div",Re,[c(R,{"send-params":u(O)("RM",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),u(Ee)&&e.sendParams.RPD?(n(),l("div",xe,[r("div",ke,[r("div",Se,v(s.$t("home.PDscore")),1)]),r("div",Be,[r("div",Me,[r("div",Qe,[c(x,{"send-params":e.sendParams,type:"RPD",ifMatchLive:e.ifMatchLive},null,8,["send-params","ifMatchLive"])])])])],512)):h("",!0)])])]),r("div",Le,[r("div",Ne,[r("div",{class:"match-footer__item",onClick:Ye},[r("span",null,v(s.$t("home.morePlay")),1),c(T,{class:"arrow",name:"arrow"})])])])])],8,M)}}});je.__scopeId="data-v-69347afc";export{je as default};
