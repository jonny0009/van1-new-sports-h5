import{s as e,a4 as a,j as s,a5 as t,a0 as c,a1 as l,a2 as i}from"./index.3daf5e8c.js";import{s as n,d as m,b as o,r,E as d,o as h,S as v,q as u,P as f,Z as p,u as g,V as b,$ as y,x as _}from"./vue.7833d4f2.js";const P={key:0,class:"home-tabs-play"},M={class:"play"},k=f("div",{class:"flex-1"},null,-1),w={class:"home-match"},$={class:"up-match-group__body"},S={class:"up-match"},x={class:"up-match__header border-bottom"},T={class:"match-info"},D={class:"match-team-logo"},O={class:"my-image home",alt:"",type:4,style:{"object-fit":"contain"}},L={class:"my-image away",alt:"",type:5,style:{"object-fit":"contain"}},R={class:"match-info__content"},U={class:"team"},j={class:"match-team-name"},C=f("div",{class:"flex-1"},null,-1),H=["innerHTML"],I={class:"up-match-league hasSportsIcon"},V={class:"text"},K={class:"up-match__body"},A={key:0,ref:"Rref",class:"match-betting-item"},B={class:"match-betting-item__title"},N={class:"match-betting-item__content"},q={class:"betting-select"},E={class:"betting-select__list"},Z={key:1,ref:"OUref",class:"match-betting-item"},z={class:"match-betting-item__title"},F={class:"flex-cross-center"},G={class:"match-betting-item__content"},J={class:"betting-select"},Q={class:"betting-select__list"},W={key:2,ref:"Mref",class:"match-betting-item"},X={class:"match-betting-item__title"},Y={class:"flex-cross-center"},ee={class:"match-betting-item__content"},ae={class:"betting-select"},se={class:"betting-select__list"},te={key:3,ref:"PDref",class:"match-betting-item"},ce={class:"match-betting-item__title"},le={class:"flex-cross-center"},ie={class:"match-betting-item__content"},ne={class:"betting-select"},me={class:"betting-select__list"},oe={class:"up-match__footer"},re={class:"match-footer"};var de=n({props:{sendParams:{type:Object,default:function(){return{}}},playTitleToggle:{type:Boolean,default:function(){return!0}},ifMatchLive:{type:Boolean,default:function(){return!1}}},setup(n){const de=n,he=m(null),ve=({homeTeamAbbr:e,awayTeamAbbr:a,homeTeam:s,awayTeam:t})=>e?`${e||s} v ${a||t}`:"",ue=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",fe=o((()=>e.state.home.RrefShow)),pe=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!fe.value})},ge=o((()=>e.state.home.OUrefShow)),be=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!ge.value})},ye=o((()=>e.state.home.MrefShow)),_e=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!ye.value})},Pe=o((()=>e.state.home.PDrefShow)),Me=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!Pe.value})},ke=o((()=>{const{gameDate:e}=de.sendParams||{};return a(e,"MM/DD HH:mm")}));return(a,m)=>{const o=r("van-icon"),we=d("img");return h(),v("div",{ref_key:"container",ref:he,class:"homeMatchHandicap"},[n.playTitleToggle?(h(),v("div",P,[u(s,{"time-send-params":n.sendParams},null,8,["time-send-params"]),f("div",M,[k,f("span",{class:p(["btn R",[{active:g(fe)}]]),onClick:pe},b(a.$t("home.R")),3),f("span",{class:p(["btn OU",[{active:g(ge)}]]),onClick:be},b(a.$t("home.OU")),3),f("span",{class:p(["btn M",[{active:g(ye)}]]),onClick:_e},b(a.$t("home.M")),3),f("span",{class:p(["btn PD",[{active:g(Pe)}]]),onClick:Me},b(a.$t("live.score")),3)])])):y("",!0),f("div",w,[f("div",$,[f("div",S,[f("div",x,[f("div",T,[f("div",D,[_(f("img",O,null,512),[[we,de.sendParams.homeLogo]]),_(f("img",L,null,512),[[we,de.sendParams.awayLogo]])]),f("div",R,[f("div",U,[f("span",j,b(ve(de.sendParams)),1),C,g(ke)?(h(),v("div",{key:0,class:"up-match-time",innerHTML:g(ke)},null,8,H)):y("",!0)]),f("div",I,[u(t,{"icon-src":de.sendParams.gameType},null,8,["icon-src"]),f("div",V,b(ue(de.sendParams)),1)])])])]),f("div",K,[g(fe)&&n.sendParams.R?(h(),v("div",A,[f("div",B,[f("div",{class:p(["flex-cross-center",`flex-cross-center-${n.sendParams.gidm}${n.sendParams.systemId}`])},b(a.$t("home.RInfo")),3)]),f("div",N,[f("div",q,[f("div",E,[u(l,{"send-params":g(c)("R",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(ge)&&n.sendParams.OU?(h(),v("div",Z,[f("div",z,[f("div",F,b(a.$t("home.OUInfo")),1)]),f("div",G,[f("div",J,[f("div",Q,[u(l,{"send-params":g(c)("OU",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(ye)&&n.sendParams.M?(h(),v("div",W,[f("div",X,[f("div",Y,b(a.$t("home.MInfo")),1)]),f("div",ee,[f("div",ae,[f("div",se,[u(l,{"send-params":g(c)("M",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(Pe)&&n.sendParams.PD?(h(),v("div",te,[f("div",ce,[f("div",le,b(a.$t("home.PDscore")),1)]),f("div",ie,[f("div",ne,[f("div",me,[u(i,{"send-params":n.sendParams,type:"PD",ifMatchLive:n.ifMatchLive},null,8,["send-params","ifMatchLive"])])])])],512)):y("",!0)])])]),f("div",oe,[f("div",re,[f("div",{class:"match-footer__item",onClick:m[0]||(m[0]=a=>g(e).dispatch("betting/setMoreShow",{status:!0,moreParams:de.sendParams}))},[f("span",null,b(a.$t("home.morePlay")),1),u(o,{class:"arrow",name:"arrow"})])])])])],512)}}});export{de as default};
