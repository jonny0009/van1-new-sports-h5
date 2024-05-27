import{s as e,b as a,d as s,r as t,E as i,o as l,R as n,c,O as m,P as o,q as r,_ as d,u as v,W as h,$ as p,x as u,y,Y as b,Z as f}from"./vue.16414fe4.js";import{u as g,s as _,k as P,P as k,X as R,Y as T,r as M}from"./index.a03a5e07.js";import{u as w,g as $}from"./useMatch.b96d7eab.js";const S=e=>(b("data-v-48b783d8"),e=e(),f(),e),B=["data-val"],H={class:"home-tabs-play"},x={class:"play"},Q=S((()=>o("div",{class:"flex-1"},null,-1))),O={class:"home-match"},L={class:"up-match-group__body"},C={class:"up-match"},I={class:"match-info-live__header border-bottom"},U=[S((()=>o("i",{v:"",class:"iconfont icon-footer-live"},null,-1)))],j={class:"up-match-league"},D={class:"text"},K={class:"flex-cross-center"},N={class:"up-match-time"},V=["innerHTML"],A={class:"up-match-score border-bottom"},E={class:"item mb5 mt10"},z={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},Y={class:"name"},q={class:"container"},W={class:"value"},X={class:"item"},Z={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},F={class:"name"},G={class:"container"},J={class:"value"},ee={class:"up-match__body"},ae={key:0,class:"match-betting-item"},se={class:"match-betting-item__title"},te={class:"flex-cross-center"},ie={key:0},le={key:1},ne={class:"match-betting-item__content"},ce={class:"betting-select"},me={class:"betting-select__list"},oe={key:1,class:"match-betting-item"},re={class:"match-betting-item__title"},de={class:"flex-cross-center"},ve={key:0},he={key:1},pe={class:"match-betting-item__content"},ue={class:"betting-select"},ye={class:"betting-select__list"},be={key:2,class:"match-betting-item"},fe={class:"match-betting-item__title"},ge={class:"flex-cross-center"},_e={key:0},Pe={key:1},ke={class:"match-betting-item__content"},Re={class:"betting-select"},Te={class:"betting-select__list"},Me={key:3,ref:"Mref",class:"match-betting-item"},we={class:"match-betting-item__title"},$e={class:"flex-cross-center"},Se={class:"match-betting-item__content"},Be={class:"betting-select"},He={class:"betting-select__list"},xe={class:"up-match__footer"},Qe={class:"match-footer"},Oe={class:"num"};var Le=e({props:{sendParams:{type:Object,default:function(){return{}}},tabType:{type:String,default:""},playTitleToggle:{type:Boolean,default:function(){return!0}},ifMatchLive:{type:Boolean,default:function(){return!1}}},setup(e){const b=e,{t:f}=g(),S=w(),Le=a((()=>_.state.home.RrefShow)),Ce=()=>{_.dispatch("home/setKeyValue",{key:"RrefShow",value:!Le.value})},Ie=a((()=>_.state.home.OUrefShow)),Ue=()=>{_.dispatch("home/setKeyValue",{key:"OUrefShow",value:!Ie.value})},je=a((()=>_.state.home.MrefShow)),De=()=>{_.dispatch("home/setKeyValue",{key:"MrefShow",value:!je.value})},Ke=a((()=>_.state.home.PDrefShow)),Ne=()=>{_.dispatch("home/setKeyValue",{key:"PDrefShow",value:!Ke.value})},Ve=s(null),Ae=a((()=>{const e=_.state.app.globalBarHeaderHeight||48;return e>60?48:e}));f("live.Q1"),f("live.Q2"),f("live.Q3"),f("live.Q4"),f("live.Q1"),f("live.Q2"),f("live.Q3"),f("live.Q4"),f("live.OT"),f("live.HT"),f("live.H1"),f("live.H2"),f("live.Q1"),f("live.Q2"),f("live.Q3"),f("live.Q4"),f("live.OT"),f("live.HT"),f("live.H1"),f("live.H2"),s("");const Ee=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",ze=e=>{const{live:a,live_status:s,merchantAnchor:t,merchantStreamNa:i}=e;return!!(1*s!=1||t&&t?.length&&i&&i?.length)},Ye=()=>{_.dispatch("betting/setMoreShow",{status:!0,moreParams:b.sendParams}),_.dispatch("user/getLocationHeight",!1)};return(a,s)=>{const f=t("van-sticky"),g=t("SportsIcon"),w=t("van-icon"),qe=i("img");return l(),n("div",{ref_key:"container",ref:Ve,class:"homeMatchHandicap","data-val":v(Ae)},[e.playTitleToggle?(l(),c(f,{key:0,"offset-top":v(Ae),container:Ve.value,"z-index":"5"},{default:m((()=>[o("div",H,[r(P,{"time-send-params":e.sendParams},null,8,["time-send-params"]),o("div",x,[Q,o("span",{class:d(["btn R",[{active:v(Le)}]]),onClick:Ce},h(a.$t("home.R")),3),o("span",{class:d(["btn OU",[{active:v(Ie)}]]),onClick:Ue},h(a.$t("home.OU")),3),o("span",{class:d(["btn M",[{active:v(je)}]]),onClick:De},h(a.$t("home.M")),3),o("span",{class:d(["btn PD",[{active:v(Ke)}]]),onClick:Ne},h(a.$t("live.score")),3)])])])),_:1},8,["offset-top","container"])):p("",!0),o("div",O,[o("div",L,[o("div",C,[o("div",I,[ze(e.sendParams)?(l(),n("div",{key:0,class:"live-icon",onClick:s[0]||(s[0]=a=>{return s=e.sendParams,M.push(`/match/${s.gidm}/bets`),void _.dispatch("app/setMatchLiveIndex",1);var s})},U)):p("",!0),o("div",j,[r(g,{"icon-src":b.sendParams.gameType,class:"ball-img"},null,8,["icon-src"]),o("div",D,h(Ee(e.sendParams)),1)]),o("div",K,[o("div",N,[u(r(g,{"icon-src":"sportlive",class:"live-img"},null,512),[[y,ze(e.sendParams)]]),o("div",{class:d(["up-match-time-html",e.sendParams.gameType]),innerHTML:v(S).showRBTime(e.sendParams)},null,10,V)])])]),o("div",A,[o("div",E,[u(o("img",z,null,512),[[qe,e.sendParams.homeLogo]]),o("div",Y,h(e.sendParams.homeTeamAbbr||e.sendParams.homeTeam),1),o("div",q,[o("div",W,h(v($)(e.sendParams,"H")),1)])]),o("div",X,[u(o("img",Z,null,512),[[qe,e.sendParams.awayLogo]]),o("div",F,h(e.sendParams.awayTeamAbbr||e.sendParams.awayTeam),1),o("div",G,[o("div",J,h(v($)(e.sendParams,"C")),1)])])]),o("div",ee,[v(Le)&&e.sendParams.RE?(l(),n("div",ae,[o("div",se,[o("div",te,["RB"===e.tabType?(l(),n("span",ie,h(a.$t("home.RBInfo")),1)):(l(),n("span",le,h(a.$t("home.RInfo")),1))])]),o("div",ne,[o("div",ce,[o("div",me,[r(R,{"send-params":v(k)("RE",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(Ie)&&e.sendParams.ROU?(l(),n("div",oe,[o("div",re,[o("div",de,["RB"===e.tabType?(l(),n("span",ve,h(a.$t("home.RBSize")),1)):(l(),n("span",he,h(a.$t("home.OUInfo")),1))])]),o("div",pe,[o("div",ue,[o("div",ye,[r(R,{"send-params":v(k)("ROU",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(je)&&e.sendParams.RM?(l(),n("div",be,[o("div",fe,[o("div",ge,["RB"===e.tabType?(l(),n("span",_e,h(a.$t("home.RBRide")),1)):(l(),n("span",Pe,h(a.$t("home.MInfo")),1))])]),o("div",ke,[o("div",Re,[o("div",Te,[r(R,{"send-params":v(k)("RM",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(Ke)&&e.sendParams.RPD?(l(),n("div",Me,[o("div",we,[o("div",$e,h(a.$t("home.PDscore")),1)]),o("div",Se,[o("div",Be,[o("div",He,[r(T,{"send-params":e.sendParams,type:"RPD","if-match-live":e.ifMatchLive},null,8,["send-params","if-match-live"])])])])],512)):p("",!0)])])]),o("div",xe,[o("div",Qe,[o("div",{class:"match-footer__item",onClick:Ye},[o("span",null,h(a.$t("home.morePlay")),1),o("span",Oe,h(e.sendParams.playNum),1),r(w,{class:"arrow",name:"arrow"})])])])])],8,B)}}});Le.__scopeId="data-v-48b783d8";export{Le as default};
