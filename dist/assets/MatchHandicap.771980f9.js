<<<<<<<< HEAD:dist/assets/MatchHandicap.35df544c.js
import{s as e,ah as a,k as s,ai as t,P as c,W as l,X as i}from"./index.906403ce.js";import{s as n,d as m,b as o,r,E as d,o as h,R as v,q as u,P as f,_ as p,u as g,W as b,$ as y,x as _}from"./vue.1f547d27.js";const P={key:0,class:"home-tabs-play"},M={class:"play"},k=f("div",{class:"flex-1"},null,-1),w={class:"home-match"},$={class:"up-match-group__body"},x={class:"up-match"},S={class:"up-match__header border-bottom"},T={class:"match-info"},D={class:"match-team-logo"},O={class:"my-image home",alt:"",type:4,style:{"object-fit":"contain"}},R={class:"my-image away",alt:"",type:5,style:{"object-fit":"contain"}},L={class:"match-info__content"},U={class:"team"},j={class:"match-team-name"},C=f("div",{class:"flex-1"},null,-1),H=["innerHTML"],I={class:"up-match-league hasSportsIcon"},K={class:"text"},V={class:"up-match__body"},A={key:0,ref:"Rref",class:"match-betting-item"},B={class:"match-betting-item__title"},N={class:"match-betting-item__content"},W={class:"betting-select"},q={class:"betting-select__list"},E={key:1,ref:"OUref",class:"match-betting-item"},X={class:"match-betting-item__title"},z={class:"flex-cross-center"},F={class:"match-betting-item__content"},G={class:"betting-select"},J={class:"betting-select__list"},Q={key:2,ref:"Mref",class:"match-betting-item"},Y={class:"match-betting-item__title"},Z={class:"flex-cross-center"},ee={class:"match-betting-item__content"},ae={class:"betting-select"},se={class:"betting-select__list"},te={key:3,ref:"PDref",class:"match-betting-item"},ce={class:"match-betting-item__title"},le={class:"flex-cross-center"},ie={class:"match-betting-item__content"},ne={class:"betting-select"},me={class:"betting-select__list"},oe={class:"up-match__footer"},re={class:"match-footer"};var de=n({props:{sendParams:{type:Object,default:function(){return{}}},playTitleToggle:{type:Boolean,default:function(){return!0}},ifMatchLive:{type:Boolean,default:function(){return!1}}},setup(n){const de=n,he=m(null),ve=({homeTeamAbbr:e,awayTeamAbbr:a,homeTeam:s,awayTeam:t})=>e?`${e||s} v ${a||t}`:"",ue=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",fe=o((()=>e.state.home.RrefShow)),pe=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!fe.value})},ge=o((()=>e.state.home.OUrefShow)),be=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!ge.value})},ye=o((()=>e.state.home.MrefShow)),_e=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!ye.value})},Pe=o((()=>e.state.home.PDrefShow)),Me=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!Pe.value})},ke=o((()=>{const{gameDate:e}=de.sendParams||{};return a(e,"MM/DD HH:mm")}));return(a,m)=>{const o=r("van-icon"),we=d("img");return h(),v("div",{ref_key:"container",ref:he,class:"homeMatchHandicap"},[n.playTitleToggle?(h(),v("div",P,[u(s,{"time-send-params":n.sendParams},null,8,["time-send-params"]),f("div",M,[k,f("span",{class:p(["btn R",[{active:g(fe)}]]),onClick:pe},b(a.$t("home.R")),3),f("span",{class:p(["btn OU",[{active:g(ge)}]]),onClick:be},b(a.$t("home.OU")),3),f("span",{class:p(["btn M",[{active:g(ye)}]]),onClick:_e},b(a.$t("home.M")),3),f("span",{class:p(["btn PD",[{active:g(Pe)}]]),onClick:Me},b(a.$t("live.score")),3)])])):y("",!0),f("div",w,[f("div",$,[f("div",x,[f("div",S,[f("div",T,[f("div",D,[_(f("img",O,null,512),[[we,de.sendParams.homeLogo]]),_(f("img",R,null,512),[[we,de.sendParams.awayLogo]])]),f("div",L,[f("div",U,[f("span",j,b(ve(de.sendParams)),1),C,g(ke)?(h(),v("div",{key:0,class:"up-match-time",innerHTML:g(ke)},null,8,H)):y("",!0)]),f("div",I,[u(t,{"icon-src":de.sendParams.gameType},null,8,["icon-src"]),f("div",K,b(ue(de.sendParams)),1)])])])]),f("div",V,[g(fe)&&n.sendParams.R?(h(),v("div",A,[f("div",B,[f("div",{class:p(["flex-cross-center",`flex-cross-center-${n.sendParams.gidm}${n.sendParams.systemId}`])},b(a.$t("home.RInfo")),3)]),f("div",N,[f("div",W,[f("div",q,[u(l,{"send-params":g(c)("R",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(ge)&&n.sendParams.OU?(h(),v("div",E,[f("div",X,[f("div",z,b(a.$t("home.OUInfo")),1)]),f("div",F,[f("div",G,[f("div",J,[u(l,{"send-params":g(c)("OU",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(ye)&&n.sendParams.M?(h(),v("div",Q,[f("div",Y,[f("div",Z,b(a.$t("home.MInfo")),1)]),f("div",ee,[f("div",ae,[f("div",se,[u(l,{"send-params":g(c)("M",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(Pe)&&n.sendParams.PD?(h(),v("div",te,[f("div",ce,[f("div",le,b(a.$t("home.PDscore")),1)]),f("div",ie,[f("div",ne,[f("div",me,[u(i,{"send-params":n.sendParams,type:"PD",ifMatchLive:n.ifMatchLive},null,8,["send-params","ifMatchLive"])])])])],512)):y("",!0)])])]),f("div",oe,[f("div",re,[f("div",{class:"match-footer__item",onClick:m[0]||(m[0]=a=>g(e).dispatch("betting/setMoreShow",{status:!0,moreParams:de.sendParams}))},[f("span",null,b(a.$t("home.morePlay")),1),u(o,{class:"arrow",name:"arrow"})])])])])],512)}}});export{de as default};
========
import{s as e,ah as a,k as s,ai as t,P as c,W as l,X as i}from"./index.5d0a0f5a.js";import{s as n,d as m,b as o,r,E as d,o as h,R as v,q as u,P as f,_ as p,u as g,W as b,$ as y,x as _}from"./vue.1f547d27.js";const P={key:0,class:"home-tabs-play"},M={class:"play"},k=f("div",{class:"flex-1"},null,-1),w={class:"home-match"},$={class:"up-match-group__body"},x={class:"up-match"},S={class:"up-match__header border-bottom"},T={class:"match-info"},D={class:"match-team-logo"},O={class:"my-image home",alt:"",type:4,style:{"object-fit":"contain"}},R={class:"my-image away",alt:"",type:5,style:{"object-fit":"contain"}},L={class:"match-info__content"},U={class:"team"},j={class:"match-team-name"},C=f("div",{class:"flex-1"},null,-1),H=["innerHTML"],I={class:"up-match-league hasSportsIcon"},K={class:"text"},V={class:"up-match__body"},A={key:0,ref:"Rref",class:"match-betting-item"},B={class:"match-betting-item__title"},N={class:"match-betting-item__content"},W={class:"betting-select"},q={class:"betting-select__list"},E={key:1,ref:"OUref",class:"match-betting-item"},X={class:"match-betting-item__title"},z={class:"flex-cross-center"},F={class:"match-betting-item__content"},G={class:"betting-select"},J={class:"betting-select__list"},Q={key:2,ref:"Mref",class:"match-betting-item"},Y={class:"match-betting-item__title"},Z={class:"flex-cross-center"},ee={class:"match-betting-item__content"},ae={class:"betting-select"},se={class:"betting-select__list"},te={key:3,ref:"PDref",class:"match-betting-item"},ce={class:"match-betting-item__title"},le={class:"flex-cross-center"},ie={class:"match-betting-item__content"},ne={class:"betting-select"},me={class:"betting-select__list"},oe={class:"up-match__footer"},re={class:"match-footer"};var de=n({props:{sendParams:{type:Object,default:function(){return{}}},playTitleToggle:{type:Boolean,default:function(){return!0}},ifMatchLive:{type:Boolean,default:function(){return!1}}},setup(n){const de=n,he=m(null),ve=({homeTeamAbbr:e,awayTeamAbbr:a,homeTeam:s,awayTeam:t})=>e?`${e||s} v ${a||t}`:"",ue=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",fe=o((()=>e.state.home.RrefShow)),pe=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!fe.value})},ge=o((()=>e.state.home.OUrefShow)),be=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!ge.value})},ye=o((()=>e.state.home.MrefShow)),_e=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!ye.value})},Pe=o((()=>e.state.home.PDrefShow)),Me=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!Pe.value})},ke=o((()=>{const{gameDate:e}=de.sendParams||{};return a(e,"MM/DD HH:mm")}));return(a,m)=>{const o=r("van-icon"),we=d("img");return h(),v("div",{ref_key:"container",ref:he,class:"homeMatchHandicap"},[n.playTitleToggle?(h(),v("div",P,[u(s,{"time-send-params":n.sendParams},null,8,["time-send-params"]),f("div",M,[k,f("span",{class:p(["btn R",[{active:g(fe)}]]),onClick:pe},b(a.$t("home.R")),3),f("span",{class:p(["btn OU",[{active:g(ge)}]]),onClick:be},b(a.$t("home.OU")),3),f("span",{class:p(["btn M",[{active:g(ye)}]]),onClick:_e},b(a.$t("home.M")),3),f("span",{class:p(["btn PD",[{active:g(Pe)}]]),onClick:Me},b(a.$t("live.score")),3)])])):y("",!0),f("div",w,[f("div",$,[f("div",x,[f("div",S,[f("div",T,[f("div",D,[_(f("img",O,null,512),[[we,de.sendParams.homeLogo]]),_(f("img",R,null,512),[[we,de.sendParams.awayLogo]])]),f("div",L,[f("div",U,[f("span",j,b(ve(de.sendParams)),1),C,g(ke)?(h(),v("div",{key:0,class:"up-match-time",innerHTML:g(ke)},null,8,H)):y("",!0)]),f("div",I,[u(t,{"icon-src":de.sendParams.gameType},null,8,["icon-src"]),f("div",K,b(ue(de.sendParams)),1)])])])]),f("div",V,[g(fe)&&n.sendParams.R?(h(),v("div",A,[f("div",B,[f("div",{class:p(["flex-cross-center",`flex-cross-center-${n.sendParams.gidm}${n.sendParams.systemId}`])},b(a.$t("home.RInfo")),3)]),f("div",N,[f("div",W,[f("div",q,[u(l,{"send-params":g(c)("R",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(ge)&&n.sendParams.OU?(h(),v("div",E,[f("div",X,[f("div",z,b(a.$t("home.OUInfo")),1)]),f("div",F,[f("div",G,[f("div",J,[u(l,{"send-params":g(c)("OU",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(ye)&&n.sendParams.M?(h(),v("div",Q,[f("div",Y,[f("div",Z,b(a.$t("home.MInfo")),1)]),f("div",ee,[f("div",ae,[f("div",se,[u(l,{"send-params":g(c)("M",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(Pe)&&n.sendParams.PD?(h(),v("div",te,[f("div",ce,[f("div",le,b(a.$t("home.PDscore")),1)]),f("div",ie,[f("div",ne,[f("div",me,[u(i,{"send-params":n.sendParams,type:"PD",ifMatchLive:n.ifMatchLive},null,8,["send-params","ifMatchLive"])])])])],512)):y("",!0)])])]),f("div",oe,[f("div",re,[f("div",{class:"match-footer__item",onClick:m[0]||(m[0]=a=>g(e).dispatch("betting/setMoreShow",{status:!0,moreParams:de.sendParams}))},[f("span",null,b(a.$t("home.morePlay")),1),u(o,{class:"arrow",name:"arrow"})])])])])],512)}}});export{de as default};
>>>>>>>> a1c901d8 (fanyi):dist/assets/MatchHandicap.771980f9.js
