import{s as e,b as a,d as s,r as t,E as i,o as l,R as n,c,O as m,P as o,q as r,_ as d,u as v,W as h,$ as p,x as u,y,Y as f,Z as g}from"./vue.16414fe4.js";import{u as b,s as _,k as P,P as k,X as R,Y as T,r as M}from"./index.1df5c098.js";import{u as w,g as $}from"./useMatch.5d32c5a2.js";const S=e=>(f("data-v-a0dfadde"),e=e(),g(),e),B=["data-val"],H={class:"home-tabs-play"},x=S((()=>o("div",{class:"home-tabs-play-bg"},null,-1))),Q={class:"play"},O=S((()=>o("div",{class:"flex-1"},null,-1))),L={class:"home-match"},C={class:"up-match-group__body"},I={class:"up-match"},U={class:"match-info-live__header border-bottom"},j=[S((()=>o("i",{v:"",class:"iconfont icon-footer-live"},null,-1)))],D={class:"up-match-league"},K={class:"text"},N={class:"flex-cross-center"},V={class:"up-match-time"},A=["innerHTML"],E={class:"up-match-score border-bottom"},z={class:"item mb5 mt10"},Y={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},q={class:"name"},W={class:"container"},X={class:"value"},Z={class:"item"},F={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},G={class:"name"},J={class:"container"},ee={class:"value"},ae={class:"up-match__body"},se={key:0,class:"match-betting-item"},te={class:"match-betting-item__title"},ie={class:"flex-cross-center"},le={key:0},ne={key:1},ce={class:"match-betting-item__content"},me={class:"betting-select"},oe={class:"betting-select__list"},re={key:1,class:"match-betting-item"},de={class:"match-betting-item__title"},ve={class:"flex-cross-center"},he={key:0},pe={key:1},ue={class:"match-betting-item__content"},ye={class:"betting-select"},fe={class:"betting-select__list"},ge={key:2,class:"match-betting-item"},be={class:"match-betting-item__title"},_e={class:"flex-cross-center"},Pe={key:0},ke={key:1},Re={class:"match-betting-item__content"},Te={class:"betting-select"},Me={class:"betting-select__list"},we={key:3,ref:"Mref",class:"match-betting-item"},$e={class:"match-betting-item__title"},Se={class:"flex-cross-center"},Be={class:"match-betting-item__content"},He={class:"betting-select"},xe={class:"betting-select__list"},Qe={class:"up-match__footer"},Oe={class:"match-footer"},Le={class:"num"};var Ce=e({props:{sendParams:{type:Object,default:function(){return{}}},tabType:{type:String,default:""},playTitleToggle:{type:Boolean,default:function(){return!0}},ifMatchLive:{type:Boolean,default:function(){return!1}}},setup(e){const f=e,{t:g}=b(),S=w(),Ce=a((()=>_.state.home.RrefShow)),Ie=()=>{_.dispatch("home/setKeyValue",{key:"RrefShow",value:!Ce.value})},Ue=a((()=>_.state.home.OUrefShow)),je=()=>{_.dispatch("home/setKeyValue",{key:"OUrefShow",value:!Ue.value})},De=a((()=>_.state.home.MrefShow)),Ke=()=>{_.dispatch("home/setKeyValue",{key:"MrefShow",value:!De.value})},Ne=a((()=>_.state.home.PDrefShow)),Ve=()=>{_.dispatch("home/setKeyValue",{key:"PDrefShow",value:!Ne.value})},Ae=s(null),Ee=a((()=>{const e=_.state.app.globalBarHeaderHeight||48;return e>60?48:e}));g("live.Q1"),g("live.Q2"),g("live.Q3"),g("live.Q4"),g("live.Q1"),g("live.Q2"),g("live.Q3"),g("live.Q4"),g("live.OT"),g("live.HT"),g("live.H1"),g("live.H2"),g("live.Q1"),g("live.Q2"),g("live.Q3"),g("live.Q4"),g("live.OT"),g("live.HT"),g("live.H1"),g("live.H2"),s("");const ze=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",Ye=e=>{const{live:a,live_status:s,merchantAnchor:t,merchantStreamNa:i}=e;return!!(1*s!=1||t&&t?.length&&i&&i?.length)},qe=()=>{_.dispatch("betting/setMoreShow",{status:!0,moreParams:f.sendParams}),_.dispatch("user/getLocationHeight",!1)};return(a,s)=>{const g=t("van-sticky"),b=t("SportsIcon"),w=t("van-icon"),We=i("img");return l(),n("div",{ref_key:"container",ref:Ae,class:"homeMatchHandicap","data-val":v(Ee)},[e.playTitleToggle?(l(),c(g,{key:0,"offset-top":v(Ee),container:Ae.value,"z-index":"5"},{default:m((()=>[o("div",H,[x,r(P,{"time-send-params":e.sendParams},null,8,["time-send-params"]),o("div",Q,[O,o("span",{class:d(["btn R",[{active:v(Ce)}]]),onClick:Ie},h(a.$t("home.R")),3),o("span",{class:d(["btn OU",[{active:v(Ue)}]]),onClick:je},h(a.$t("home.OU")),3),o("span",{class:d(["btn M",[{active:v(De)}]]),onClick:Ke},h(a.$t("home.M")),3),o("span",{class:d(["btn PD",[{active:v(Ne)}]]),onClick:Ve},h(a.$t("live.score")),3)])])])),_:1},8,["offset-top","container"])):p("",!0),o("div",L,[o("div",C,[o("div",I,[o("div",U,[Ye(e.sendParams)?(l(),n("div",{key:0,class:"live-icon",onClick:s[0]||(s[0]=a=>{return s=e.sendParams,M.push(`/match/${s.gidm}/bets`),void _.dispatch("app/setMatchLiveIndex",1);var s})},j)):p("",!0),o("div",D,[r(b,{"icon-src":f.sendParams.gameType,class:"ball-img"},null,8,["icon-src"]),o("div",K,h(ze(e.sendParams)),1)]),o("div",N,[o("div",V,[u(r(b,{"icon-src":"sportlive",class:"live-img"},null,512),[[y,Ye(e.sendParams)]]),o("div",{class:d(["up-match-time-html",e.sendParams.gameType]),innerHTML:v(S).showRBTime(e.sendParams)},null,10,A)])])]),o("div",E,[o("div",z,[u(o("img",Y,null,512),[[We,e.sendParams.homeLogo]]),o("div",q,h(e.sendParams.homeTeamAbbr||e.sendParams.homeTeam),1),o("div",W,[o("div",X,h(v($)(e.sendParams,"H")),1)])]),o("div",Z,[u(o("img",F,null,512),[[We,e.sendParams.awayLogo]]),o("div",G,h(e.sendParams.awayTeamAbbr||e.sendParams.awayTeam),1),o("div",J,[o("div",ee,h(v($)(e.sendParams,"C")),1)])])]),o("div",ae,[v(Ce)&&e.sendParams.RE?(l(),n("div",se,[o("div",te,[o("div",ie,["RB"===e.tabType?(l(),n("span",le,h(a.$t("home.RBInfo")),1)):(l(),n("span",ne,h(a.$t("home.RInfo")),1))])]),o("div",ce,[o("div",me,[o("div",oe,[r(R,{"send-params":v(k)("RE",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(Ue)&&e.sendParams.ROU?(l(),n("div",re,[o("div",de,[o("div",ve,["RB"===e.tabType?(l(),n("span",he,h(a.$t("home.RBSize")),1)):(l(),n("span",pe,h(a.$t("home.OUInfo")),1))])]),o("div",ue,[o("div",ye,[o("div",fe,[r(R,{"send-params":v(k)("ROU",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(De)&&e.sendParams.RM?(l(),n("div",ge,[o("div",be,[o("div",_e,["RB"===e.tabType?(l(),n("span",Pe,h(a.$t("home.RBRide")),1)):(l(),n("span",ke,h(a.$t("home.MInfo")),1))])]),o("div",Re,[o("div",Te,[o("div",Me,[r(R,{"send-params":v(k)("RM",e.sendParams),type:"RB"},null,8,["send-params"])])])])])):p("",!0),v(Ne)&&e.sendParams.RPD?(l(),n("div",we,[o("div",$e,[o("div",Se,h(a.$t("home.PDscore")),1)]),o("div",Be,[o("div",He,[o("div",xe,[r(T,{"send-params":e.sendParams,type:"RPD","if-match-live":e.ifMatchLive},null,8,["send-params","if-match-live"])])])])],512)):p("",!0)])])]),o("div",Qe,[o("div",Oe,[o("div",{class:"match-footer__item",onClick:qe},[o("span",null,h(a.$t("home.morePlay")),1),o("span",Le,h(e.sendParams.playNum),1),r(w,{class:"arrow",name:"arrow"})])])])])],8,B)}}});Ce.__scopeId="data-v-a0dfadde";export{Ce as default};
