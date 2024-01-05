import{_ as e}from"./index.48cc8b88.js";import{s as a,b as s,d as t,r as i,E as l,o as n,R as o,q as r,O as m,P as c,Z as u,u as v,U as d,a2 as h,x as p,y as f,M as g,g as _,h as y,f as b,w as T,F as w,_ as H,c as P}from"./vue.bfc6c13a.js";import{g as x,o as k,b as O,t as S}from"./getScore.75bef5df.js";import{u as $,s as R,$ as M,a0 as Q,a1 as B,Q as N,g as j}from"./index.2579fe23.js";import{a as C,b as I}from"./index.b638bf13.js";const L=["data-val"],K={class:"home-tabs-play"},U={class:"play"},V=c("div",{class:"flex-1"},null,-1),E={class:"home-match"},q={class:"up-match-group__body"},F={class:"up-match"},A={class:"match-info-live__header border-bottom"},D=[c("i",{v:"",class:"iconfont icon-footer-live"},null,-1)],z={class:"up-match-league"},J={class:"text"},W={class:"flex-cross-center"},Y={class:"up-match-time"},Z=["innerHTML"],G={class:"up-match-score border-bottom"},X={class:"item mb5"},ee={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},ae={class:"name"},se={class:"container"},te={class:"value"},ie={class:"item"},le={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},ne={class:"name"},oe={class:"container"},re={class:"value"},me={class:"up-match__body"},ce={key:0,class:"match-betting-item"},ue={class:"match-betting-item__title"},ve={class:"flex-cross-center"},de={class:"match-betting-item__content"},he={class:"betting-select"},pe={class:"betting-select__list"},fe={key:1,class:"match-betting-item"},ge={class:"match-betting-item__title"},_e={class:"flex-cross-center"},ye={class:"match-betting-item__content"},be={class:"betting-select"},Te={class:"betting-select__list"},we={key:2,class:"match-betting-item"},He={class:"match-betting-item__title"},Pe={class:"flex-cross-center"},xe={class:"match-betting-item__content"},ke={class:"betting-select"},Oe={class:"betting-select__list"},Se={class:"up-match__footer"},$e={class:"match-footer"};var Re=a({props:{sendParams:{type:Object,default:function(){return{}}}},setup(e){const a=e,{t:g}=$(),_=s((()=>R.state.home.RrefShow)),y=()=>{R.dispatch("home/setKeyValue",{key:"RrefShow",value:!_.value})},b=s((()=>R.state.home.OUrefShow)),T=()=>{R.dispatch("home/setKeyValue",{key:"OUrefShow",value:!b.value})},w=s((()=>R.state.home.MrefShow)),H=()=>{R.dispatch("home/setKeyValue",{key:"MrefShow",value:!w.value})},P=t(null),C=s((()=>{const e=R.state.app.globalBarHeaderHeight||48;return e>60?48:e})),I={0:"",Q1:g("live.Q1"),Q2:g("live.Q2"),Q3:g("live.Q3"),Q4:g("live.Q4"),"1h":g("live.Q1"),"2h":g("live.Q2"),"3h":g("live.Q3"),"4h":g("live.Q4"),OT:g("live.OT"),HT:g("live.HT"),H1:g("live.H1"),H2:g("live.H2"),q1:g("live.Q1"),q2:g("live.Q2"),q3:g("live.Q3"),q4:g("live.Q4"),ot:g("live.OT"),ht:g("live.HT"),h1:g("live.H1"),h2:g("live.H2")},Re=e=>{const a=e.toLowerCase();return I[a]},Me=t(""),Qe=(e={})=>{const{showtype:a,gameType:s,gameInfo:t,showType:i,homeTeamSuffix:l,gidm:n}=e,o=k(t,5),r=t&&t.se_now;if("RB"===a||"RB"===i){switch(s){case"FT":if(!t)return g("home.img");if(((null==l?void 0:l.includes("点球"))||(null==l?void 0:l.includes("點球")))&&(t.raceType="dianqiu",t.teamSuffix=g("home.PenaltyKickWar")),((null==l?void 0:l.includes("加时赛"))||(null==l?void 0:l.includes("加時賽")))&&(t.raceType="jiashi",t.teamSuffix=g("live.OT")),t.raceType){if("jiashi"===(null==t?void 0:t.raceType)&&("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time)))return g("live.HT");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if("jiashi"===(null==t?void 0:t.raceType)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^"),s="1H"===e?`上${a}`:`下${a}`;return`${t.teamSuffix}<span class='time-h-number'>${s}</span>`}}if("HT^^"===(null==t?void 0:t.re_time)||"HT"===(null==t?void 0:t.re_time))return g("live.HT");if((null==t?void 0:t.re_time)&&new RegExp("LIVE").test(null==t?void 0:t.re_time))return g("live.pause");if((null==t?void 0:t.re_time)&&(null==t?void 0:t.re_time.indexOf("^"))>-1){const[e,a]=t.re_time.split("^");let s="";if(a.indexOf("'")>-1){const[e]=a.split("'");s=`${e}<span class="time-h-dot">'</span>`}else s=a;return g("1H"===e?"home.1HNumber":"home.2HNumber",{number:s})}return(null==t?void 0:t.re_time)?t.re_time:g("live.pause");case"TN":if(t){const e=S(t);if(null==e?void 0:e.sciwd)return g("live.pause");const{panNum:a,score1:s,score2:i}=e;return`${a}<span>${s}${i}</span>`}return g("home.img");case"BS":if(t){if(n&&n.indexOf("ic")>-1)return g("home.img");const e=t?O(t):"",a=t.inningNum?null==t?void 0:t.inningNum:e.se_now>0?e.se_now:e.score.num;return g("home.set",{number:a})}return g("home.img");case"BK":return"HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now)?g("live.HT"):(null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1?g("home.addTimeNumber",{number:N(1e3*Me.value,"mm:ss")}):r&&Me?`${Re(null==t?void 0:t.se_now)}<span>${N(1e3*Me.value,"mm:ss")}</span>`:!Me.value&&r?`${Re(t.se_now)}<span>00:00</span>`:"";case"BK_AFT":if(t){if("HT"===(null==t?void 0:t.se_now)||"ht"===(null==t?void 0:t.se_now))return g("live.HT");if((null==t?void 0:t.se_now.indexOf("OT"))>-1||(null==t?void 0:t.se_now.indexOf("ot"))>-1)return g("home.addTimeNumber",{number:N(1e3*t.t_count,"mm:ss")});const e=t&&t.se_now,a=t&&+t.t_count;return e&&a?`${Re(t.se_now)}<span>${N(1e3*t.t_count,"mm:ss")}</span>`:""}return g("home.img");case"OP_TN":if(t){const e=(null==t?void 0:t.se_now.replace(/[^0-9]/gi,""))||"";return g("home.set",{number:e})}return g("home.img");case"OP_VB":return o?g("home.set",{number:o.scorePan.num}):"";case"OP_DJ":case"OP_IH":return g("home.img")}return g("home.img")}return g("home.img")},Be=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",Ne=e=>{const{live:a,merchantAnchor:s,merchantStreamNa:t}=e;return!!(1*a!=1||s&&(null==s?void 0:s.length)&&t&&(null==t?void 0:t.length))};return(s,t)=>{const g=i("van-sticky"),k=i("SportsIcon"),O=i("van-icon"),S=l("img");return n(),o("div",{ref_key:"container",ref:P,class:"homeMatchHandicap","data-val":v(C)},[r(g,{"offset-top":v(C),container:P.value,"z-index":"5"},{default:m((()=>[c("div",K,[r(M,{"time-send-params":e.sendParams},null,8,["time-send-params"]),c("div",U,[V,c("span",{class:u(["btn R",[{active:v(_)}]]),onClick:y},d(s.$t("home.R")),3),c("span",{class:u(["btn OU",[{active:v(b)}]]),onClick:T},d(s.$t("home.OU")),3),c("span",{class:u(["btn M",[{active:v(w)}]]),onClick:H},d(s.$t("home.M")),3)])])])),_:1},8,["offset-top","container"]),c("div",E,[c("div",q,[c("div",F,[c("div",A,[Ne(e.sendParams)?(n(),o("div",{key:0,class:"live-icon",onClick:t[0]||(t[0]=a=>{return s=e.sendParams,void j.push(`/broadcast/${s.gidm}`);var s})},D)):h("",!0),c("div",z,[c("div",J,d(Be(e.sendParams)),1)]),c("div",W,[c("div",Y,[p(r(k,{"icon-src":"live",class:"mr5"},null,512),[[f,Ne(e.sendParams)]]),c("div",{class:u(["up-match-time-html",e.sendParams.gameType]),innerHTML:Qe(e.sendParams)},null,10,Z)])])]),c("div",G,[c("div",X,[p(c("img",ee,null,512),[[S,e.sendParams.homeLogo]]),c("div",ae,d(e.sendParams.homeTeamAbbr||e.sendParams.homeTeam),1),c("div",se,[c("div",te,d(v(x)(e.sendParams,"H")),1)])]),c("div",ie,[p(c("img",le,null,512),[[S,e.sendParams.awayLogo]]),c("div",ne,d(e.sendParams.awayTeamAbbr||e.sendParams.awayTeam),1),c("div",oe,[c("div",re,d(v(x)(e.sendParams,"C")),1)])])]),c("div",me,[v(_)&&e.sendParams.RE?(n(),o("div",ce,[c("div",ue,[c("div",ve,d(s.$t("home.RInfo")),1)]),c("div",de,[c("div",he,[c("div",pe,[r(B,{"send-params":v(Q)("RE",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),v(b)&&e.sendParams.ROU?(n(),o("div",fe,[c("div",ge,[c("div",_e,d(s.$t("home.OUInfo")),1)]),c("div",ye,[c("div",be,[c("div",Te,[r(B,{"send-params":v(Q)("ROU",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0),v(w)&&e.sendParams.RM?(n(),o("div",we,[c("div",He,[c("div",Pe,d(s.$t("home.MInfo")),1)]),c("div",xe,[c("div",ke,[c("div",Oe,[r(B,{"send-params":v(Q)("RM",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):h("",!0)])])]),c("div",Se,[c("div",$e,[c("div",{class:"match-footer__item",onClick:t[1]||(t[1]=e=>v(R).dispatch("betting/setMoreShow",{status:!0,moreParams:a.sendParams}))},[c("span",null,d(s.$t("home.morePlay")),1),r(O,{class:"arrow",name:"arrow"})])])])])],8,L)}}});const Me={class:"sportlive"},Qe={key:0,class:"sportlive-Match-Tabs"};var Be=a({setup(a){const l=t(),m=t(!1),u=async(e=!0)=>{await f(),await k(e)},v=t([""]),p=t([]),f=async()=>{const e=await C({})||{};if(200===e.code&&e.data){const a=e.data||[];p.value=a.filter((e=>!v.value.includes(e.gameType)))}},x=t([]),k=async(e=!0)=>{var a,s,t,i;const n={gameType:l.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:200};e&&(m.value=!1);const o=await I(n)||{};if(e&&(m.value=!0),200===o.code&&(null==(s=null==(a=o.data)?void 0:a.matchList)?void 0:s.baseData)){const e=(null==(i=null==(t=o.data)?void 0:t.matchList)?void 0:i.baseData)||[];x.value=e.filter((e=>!v.value.includes(e.gameType)))}else x.value=[]},O=()=>{},S=e=>{l.value=e.gameType,k()};g((async()=>{Q(),m.value=!1,u()})),_((()=>{Q()})),y((()=>{L()})),b((()=>{L(),R.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),R.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),R.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})}));const $=s((()=>R.state.app.businessConfig.pushSwitch));T($,(()=>{Q()}));const M=t(),Q=()=>{clearTimeout(M),M.value=setTimeout((()=>{N()}),100)},B=t(5e3),N=()=>{1==+$.value&&(B.value=12e4),L(),j.value=setInterval((()=>{u(!1)}),B.value)},j=t(),L=()=>{clearInterval(j.value)};return(a,s)=>{const t=i("SportsButton"),u=i("Loading"),v=i("HomeEmpty"),f=i("FooterHeight");return n(),o("div",Me,[p.value.length?(n(),o("div",Qe,[r(e,{text:a.$t("sport.all"),active:!l.value,onClick:s[0]||(s[0]=e=>S({}))},null,8,["text","active"]),(n(!0),o(w,null,H(p.value,((e,a)=>(n(),P(t,{key:a,text:e.gameType,active:l.value===e.gameType,onClick:a=>S(e)},null,8,["text","active","onClick"])))),128))])):h("",!0),m.value?(n(),o(w,{key:2},[(n(!0),o(w,null,H(x.value,((e,a)=>(n(),P(Re,{key:a,"send-params":e},null,8,["send-params"])))),128)),x.value.length?h("",!0):(n(),P(v,{key:0}))],64)):(n(),P(u,{key:1})),x.value.length?(n(),o("div",{key:3,class:"Button-MatchMore mt10",onClick:O},[c("span",null,d(a.$t("live.noMore")),1)])):h("",!0),r(f)])}}});Be.__scopeId="data-v-63ae0927";export{Be as default};
