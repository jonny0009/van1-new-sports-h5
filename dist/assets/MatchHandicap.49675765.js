import{s as e,ak as a,k as s,al as t,R as l,Z as c,$ as i}from"./index.18c6eb63.js";import{d as n,f as m,g as o,r,K as d,o as h,R as v,m as u,P as f,_ as p,u as g,W as b,$ as y,C as _}from"./vue.23388646.js";const P={key:0,class:"home-tabs-play"},k=f("div",{class:"home-tabs-play-bg"},null,-1),M={class:"play"},$=f("div",{class:"flex-1"},null,-1),w={class:"home-match"},S={class:"up-match-group__body"},T={class:"up-match"},x={class:"up-match__header border-bottom"},D={class:"match-info"},R={class:"match-team-logo"},O={class:"my-image home",alt:"",type:4,style:{"object-fit":"contain"}},L={class:"my-image away",alt:"",type:5,style:{"object-fit":"contain"}},U={class:"match-info__content"},C={class:"team"},j={class:"match-team-name"},H=f("div",{class:"flex-1"},null,-1),I=["innerHTML"],K={class:"up-match-league hasSportsIcon"},V={class:"text"},A={class:"up-match__body"},B={key:0,ref:"Rref",class:"match-betting-item"},N={class:"match-betting-item__title"},W={class:"match-betting-item__content"},Z={class:"betting-select"},q={class:"betting-select__list"},z={key:1,ref:"OUref",class:"match-betting-item"},E={class:"match-betting-item__title"},F={class:"flex-cross-center"},G={class:"match-betting-item__content"},J={class:"betting-select"},Q={class:"betting-select__list"},X={key:2,ref:"Mref",class:"match-betting-item"},Y={class:"match-betting-item__title"},ee={class:"flex-cross-center"},ae={class:"match-betting-item__content"},se={class:"betting-select"},te={class:"betting-select__list"},le={key:3,ref:"PDref",class:"match-betting-item"},ce={class:"match-betting-item__title"},ie={class:"flex-cross-center"},ne={class:"match-betting-item__content"},me={class:"betting-select"},oe={class:"betting-select__list"},re={class:"up-match__footer"},de={class:"match-footer"};var he=n({props:{sendParams:{type:Object,default:function(){return{}}},playTitleToggle:{type:Boolean,default:function(){return!0}},ifMatchLive:{type:Boolean,default:function(){return!1}}},setup(n){const he=n,ve=m(null),ue=({homeTeamAbbr:e,awayTeamAbbr:a,homeTeam:s,awayTeam:t})=>e?`${e||s} v ${a||t}`:"",fe=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",pe=o((()=>e.state.home.RrefShow)),ge=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!pe.value})},be=o((()=>e.state.home.OUrefShow)),ye=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!be.value})},_e=o((()=>e.state.home.MrefShow)),Pe=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!_e.value})},ke=o((()=>e.state.home.PDrefShow)),Me=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!ke.value})},$e=o((()=>{const{gameDate:e}=he.sendParams||{};return a(e,"MM/DD HH:mm")}));return(a,m)=>{const o=r("van-icon"),we=d("img");return h(),v("div",{ref_key:"container",ref:ve,class:"homeMatchHandicap"},[n.playTitleToggle?(h(),v("div",P,[k,u(s,{"time-send-params":n.sendParams},null,8,["time-send-params"]),f("div",M,[$,f("span",{class:p(["btn R",[{active:g(pe)}]]),onClick:ge},b(a.$t("home.R")),3),f("span",{class:p(["btn OU",[{active:g(be)}]]),onClick:ye},b(a.$t("home.OU")),3),f("span",{class:p(["btn M",[{active:g(_e)}]]),onClick:Pe},b(a.$t("home.M")),3),f("span",{class:p(["btn PD",[{active:g(ke)}]]),onClick:Me},b(a.$t("live.score")),3)])])):y("",!0),f("div",w,[f("div",S,[f("div",T,[f("div",x,[f("div",D,[f("div",R,[_(f("img",O,null,512),[[we,he.sendParams.homeLogo]]),_(f("img",L,null,512),[[we,he.sendParams.awayLogo]])]),f("div",U,[f("div",C,[f("span",j,b(ue(he.sendParams)),1),H,g($e)?(h(),v("div",{key:0,class:"up-match-time",innerHTML:g($e)},null,8,I)):y("",!0)]),f("div",K,[u(t,{"icon-src":he.sendParams.gameType},null,8,["icon-src"]),f("div",V,b(fe(he.sendParams)),1)])])])]),f("div",A,[g(pe)&&n.sendParams.R?(h(),v("div",B,[f("div",N,[f("div",{class:p(["flex-cross-center",`flex-cross-center-${n.sendParams.gidm}${n.sendParams.systemId}`])},b(a.$t("home.RInfo")),3)]),f("div",W,[f("div",Z,[f("div",q,[u(c,{"send-params":g(l)("R",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(be)&&n.sendParams.OU?(h(),v("div",z,[f("div",E,[f("div",F,b(a.$t("home.OUInfo")),1)]),f("div",G,[f("div",J,[f("div",Q,[u(c,{"send-params":g(l)("OU",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(_e)&&n.sendParams.M?(h(),v("div",X,[f("div",Y,[f("div",ee,b(a.$t("home.MInfo")),1)]),f("div",ae,[f("div",se,[f("div",te,[u(c,{"send-params":g(l)("M",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),g(ke)&&n.sendParams.PD?(h(),v("div",le,[f("div",ce,[f("div",ie,b(a.$t("home.PDscore")),1)]),f("div",ne,[f("div",me,[f("div",oe,[u(i,{"send-params":n.sendParams,type:"PD",ifMatchLive:n.ifMatchLive},null,8,["send-params","ifMatchLive"])])])])],512)):y("",!0)])])]),f("div",re,[f("div",de,[f("div",{class:"match-footer__item",onClick:m[0]||(m[0]=a=>g(e).dispatch("betting/setMoreShow",{status:!0,moreParams:he.sendParams}))},[f("span",null,b(a.$t("home.morePlay")),1),u(o,{class:"arrow",name:"arrow"})])])])])],512)}}});export{he as default};
