import{s as e,ai as a,k as s,aj as t,P as l,X as c,Y as i}from"./index.ba48980e.js";import{s as n,d as m,b as o,r,E as d,o as h,R as v,q as u,P as f,_ as p,u as b,W as g,$ as y,x as _}from"./vue.16414fe4.js";const P={key:0,class:"home-tabs-play"},M=f("div",{class:"home-tabs-play-bg"},null,-1),k={class:"play"},w=f("div",{class:"flex-1"},null,-1),$={class:"home-match"},x={class:"up-match-group__body"},S={class:"up-match"},T={class:"up-match__header border-bottom"},D={class:"match-info"},O={class:"match-team-logo"},R={class:"my-image home",alt:"",type:4,style:{"object-fit":"contain"}},L={class:"my-image away",alt:"",type:5,style:{"object-fit":"contain"}},U={class:"match-info__content"},j={class:"team"},C={class:"match-team-name"},H=f("div",{class:"flex-1"},null,-1),I=["innerHTML"],K={class:"up-match-league hasSportsIcon"},V={class:"text"},A={class:"up-match__body"},B={key:0,ref:"Rref",class:"match-betting-item"},N={class:"match-betting-item__title"},q={class:"match-betting-item__content"},E={class:"betting-select"},W={class:"betting-select__list"},X={key:1,ref:"OUref",class:"match-betting-item"},Y={class:"match-betting-item__title"},z={class:"flex-cross-center"},F={class:"match-betting-item__content"},G={class:"betting-select"},J={class:"betting-select__list"},Q={key:2,ref:"Mref",class:"match-betting-item"},Z={class:"match-betting-item__title"},ee={class:"flex-cross-center"},ae={class:"match-betting-item__content"},se={class:"betting-select"},te={class:"betting-select__list"},le={key:3,ref:"PDref",class:"match-betting-item"},ce={class:"match-betting-item__title"},ie={class:"flex-cross-center"},ne={class:"match-betting-item__content"},me={class:"betting-select"},oe={class:"betting-select__list"},re={class:"up-match__footer"},de={class:"match-footer"};var he=n({props:{sendParams:{type:Object,default:function(){return{}}},playTitleToggle:{type:Boolean,default:function(){return!0}},ifMatchLive:{type:Boolean,default:function(){return!1}}},setup(n){const he=n,ve=m(null),ue=({homeTeamAbbr:e,awayTeamAbbr:a,homeTeam:s,awayTeam:t})=>e?`${e||s} v ${a||t}`:"",fe=({leagueShortName:e,leagueName:a})=>e&&a?`${e||a}`:"",pe=o((()=>e.state.home.RrefShow)),be=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!pe.value})},ge=o((()=>e.state.home.OUrefShow)),ye=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!ge.value})},_e=o((()=>e.state.home.MrefShow)),Pe=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!_e.value})},Me=o((()=>e.state.home.PDrefShow)),ke=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!Me.value})},we=o((()=>{const{gameDate:e}=he.sendParams||{};return a(e,"MM/DD HH:mm")}));return(a,m)=>{const o=r("van-icon"),$e=d("img");return h(),v("div",{ref_key:"container",ref:ve,class:"homeMatchHandicap"},[n.playTitleToggle?(h(),v("div",P,[M,u(s,{"time-send-params":n.sendParams},null,8,["time-send-params"]),f("div",k,[w,f("span",{class:p(["btn R",[{active:b(pe)}]]),onClick:be},g(a.$t("home.R")),3),f("span",{class:p(["btn OU",[{active:b(ge)}]]),onClick:ye},g(a.$t("home.OU")),3),f("span",{class:p(["btn M",[{active:b(_e)}]]),onClick:Pe},g(a.$t("home.M")),3),f("span",{class:p(["btn PD",[{active:b(Me)}]]),onClick:ke},g(a.$t("live.score")),3)])])):y("",!0),f("div",$,[f("div",x,[f("div",S,[f("div",T,[f("div",D,[f("div",O,[_(f("img",R,null,512),[[$e,he.sendParams.homeLogo]]),_(f("img",L,null,512),[[$e,he.sendParams.awayLogo]])]),f("div",U,[f("div",j,[f("span",C,g(ue(he.sendParams)),1),H,b(we)?(h(),v("div",{key:0,class:"up-match-time",innerHTML:b(we)},null,8,I)):y("",!0)]),f("div",K,[u(t,{"icon-src":he.sendParams.gameType},null,8,["icon-src"]),f("div",V,g(fe(he.sendParams)),1)])])])]),f("div",A,[b(pe)&&n.sendParams.R?(h(),v("div",B,[f("div",N,[f("div",{class:p(["flex-cross-center",`flex-cross-center-${n.sendParams.gidm}${n.sendParams.systemId}`])},g(a.$t("home.RInfo")),3)]),f("div",q,[f("div",E,[f("div",W,[u(c,{"send-params":b(l)("R",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),b(ge)&&n.sendParams.OU?(h(),v("div",X,[f("div",Y,[f("div",z,g(a.$t("home.OUInfo")),1)]),f("div",F,[f("div",G,[f("div",J,[u(c,{"send-params":b(l)("OU",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),b(_e)&&n.sendParams.M?(h(),v("div",Q,[f("div",Z,[f("div",ee,g(a.$t("home.MInfo")),1)]),f("div",ae,[f("div",se,[f("div",te,[u(c,{"send-params":b(l)("M",n.sendParams)},null,8,["send-params"])])])])],512)):y("",!0),b(Me)&&n.sendParams.PD?(h(),v("div",le,[f("div",ce,[f("div",ie,g(a.$t("home.PDscore")),1)]),f("div",ne,[f("div",me,[f("div",oe,[u(i,{"send-params":n.sendParams,type:"PD",ifMatchLive:n.ifMatchLive},null,8,["send-params","ifMatchLive"])])])])],512)):y("",!0)])])]),f("div",re,[f("div",de,[f("div",{class:"match-footer__item",onClick:m[0]||(m[0]=a=>b(e).dispatch("betting/setMoreShow",{status:!0,moreParams:he.sendParams}))},[f("span",null,g(a.$t("home.morePlay")),1),u(o,{class:"arrow",name:"arrow"})])])])])],512)}}});export{he as default};
