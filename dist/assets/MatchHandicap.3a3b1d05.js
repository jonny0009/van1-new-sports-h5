import{s as a,a3 as s,n as e,k as t,a0 as c,a1 as l}from"./index.f3c846fa.js";import{s as n,d as m,b as i,r as o,E as r,o as d,S as h,P as v,q as u,_ as p,u as f,V as g,x as b,a0 as _}from"./vue.6c3ce548.js";const y={class:"home-tabs-play"},P={class:"play"},M=v("div",{class:"flex-1"},null,-1),k={class:"home-match"},w={class:"up-match-group__body"},$={class:"up-match"},x={class:"up-match__header border-bottom"},S={class:"match-info"},O={class:"match-team-logo"},T={class:"my-image home",alt:"",type:4,style:{"object-fit":"contain"}},R={class:"my-image away",alt:"",type:5,style:{"object-fit":"contain"}},U={class:"match-info__content"},j={class:"team"},H={class:"match-team-name"},I=v("div",{class:"flex-1"},null,-1),C=["innerHTML"],L={class:"up-match-league hasSportsIcon"},V={class:"text"},D={class:"up-match__body"},K={key:0,ref:"Rref",class:"match-betting-item"},A={class:"match-betting-item__title"},N={class:"match-betting-item__content"},q={class:"betting-select"},B={class:"betting-select__list"},E={key:1,ref:"OUref",class:"match-betting-item"},z={class:"match-betting-item__title"},F={class:"flex-cross-center"},G={class:"match-betting-item__content"},J={class:"betting-select"},Q={class:"betting-select__list"},W={key:2,ref:"Mref",class:"match-betting-item"},X={class:"match-betting-item__title"},Y={class:"flex-cross-center"},Z={class:"match-betting-item__content"},aa={class:"betting-select"},sa={class:"betting-select__list"},ea={class:"up-match__footer"},ta={class:"match-footer"};var ca=n({props:{sendParams:{type:Object,default:function(){return{}}},playTitleToggle:{type:Boolean,default:function(){return!0}}},setup(n){const ca=n,la=m(null),na=({homeTeamAbbr:a,awayTeamAbbr:s,homeTeam:e,awayTeam:t})=>a?`${a||e} v ${s||t}`:"",ma=({leagueShortName:a,leagueName:s})=>a&&s?`${a||s}`:"",ia=i((()=>a.state.home.RrefShow)),oa=()=>{a.dispatch("home/setKeyValue",{key:"RrefShow",value:!ia.value})},ra=i((()=>a.state.home.OUrefShow)),da=()=>{a.dispatch("home/setKeyValue",{key:"OUrefShow",value:!ra.value})},ha=i((()=>a.state.home.MrefShow)),va=()=>{a.dispatch("home/setKeyValue",{key:"MrefShow",value:!ha.value})},ua=i((()=>{const{gameDate:a}=ca.sendParams||{};return s(a,"MM-DD HH:mm")}));return(s,m)=>{const i=o("van-icon"),pa=r("img");return d(),h("div",{ref_key:"container",ref:la,class:"homeMatchHandicap"},[v("div",y,[u(e,{"time-send-params":n.sendParams},null,8,["time-send-params"]),v("div",P,[M,v("span",{class:p(["btn R",[{active:f(ia)}]]),onClick:oa},g(s.$t("home.R")),3),v("span",{class:p(["btn OU",[{active:f(ra)}]]),onClick:da},g(s.$t("home.OU")),3),v("span",{class:p(["btn M",[{active:f(ha)}]]),onClick:va},g(s.$t("home.M")),3)])]),v("div",k,[v("div",w,[v("div",$,[v("div",x,[v("div",S,[v("div",O,[b(v("img",T,null,512),[[pa,ca.sendParams.homeLogo]]),b(v("img",R,null,512),[[pa,ca.sendParams.awayLogo]])]),v("div",U,[v("div",j,[v("span",H,g(na(ca.sendParams)),1),I,f(ua)?(d(),h("div",{key:0,class:"up-match-time",innerHTML:f(ua)},null,8,C)):_("",!0)]),v("div",L,[u(t,{"icon-src":ca.sendParams.gameType},null,8,["icon-src"]),v("div",V,g(ma(ca.sendParams)),1)])])])]),v("div",D,[f(ia)&&n.sendParams.R?(d(),h("div",K,[v("div",A,[v("div",{class:p(["flex-cross-center",`flex-cross-center-${n.sendParams.gidm}${n.sendParams.systemId}`])},g(s.$t("home.RInfo")),3)]),v("div",N,[v("div",q,[v("div",B,[u(l,{"send-params":f(c)("R",n.sendParams)},null,8,["send-params"])])])])],512)):_("",!0),f(ra)&&n.sendParams.OU?(d(),h("div",E,[v("div",z,[v("div",F,g(s.$t("home.OUInfo")),1)]),v("div",G,[v("div",J,[v("div",Q,[u(l,{"send-params":f(c)("OU",n.sendParams)},null,8,["send-params"])])])])],512)):_("",!0),f(ha)&&n.sendParams.M?(d(),h("div",W,[v("div",X,[v("div",Y,g(s.$t("home.MInfo")),1)]),v("div",Z,[v("div",aa,[v("div",sa,[u(l,{"send-params":f(c)("M",n.sendParams)},null,8,["send-params"])])])])],512)):_("",!0)])])]),v("div",ea,[v("div",ta,[v("div",{class:"match-footer__item",onClick:m[0]||(m[0]=s=>f(a).dispatch("betting/setMoreShow",{status:!0,moreParams:ca.sendParams}))},[v("span",null,g(s.$t("home.morePlay")),1),u(i,{class:"arrow",name:"arrow"})])])])])],512)}}});export{ca as default};
