import{D as a}from"./dayjs.min.1e32a462.js";import{g as s}from"./index.915b0e79.js";import{d as t,b as e,r as i,v as c,o as l,h as n,e as m,t as o,u as r,m as d,x as v,j as p,w as u,F as g,q as b,y as h,i as _}from"./vue.d1998281.js";const f=a;function y(a){return`星期${["日","一","二","三","四","五","六"][f(a).day()]} ${f(a).format("DD/MM")}`}const j={class:"homeMatchHandicap"},x={class:"home-tabs-play"},k={class:"time"},O={class:"play"},P=m("div",{class:"flex-1"},null,-1),w={class:"home-match"},D={calss:"up-match-group__body"},M={class:"up-match"},T={class:"up-match__header border-bottom"},$={class:"match-info"},A={class:"match-team-logo"},C={class:"my-image home",alt:"",style:{"object-fit":"contain"}},R={class:"my-image away",alt:"",style:{"object-fit":"contain"}},U={class:"match-info__content"},L={class:"team"},q={class:"match-team-name"},F=m("div",{class:"flex-1"},null,-1),H=m("div",{class:"up-match-time"},"1:30 AM",-1),N={class:"up-match-league"},S={class:"text"},V={class:"up-match__body"},X={key:0,ref:"Rref",class:"match-betting-item"},z={class:"match-betting-item__title"},B={class:"flex-cross-center"},E=_(" 全场 亚洲让分盘 "),G=m("div",{class:"popover-text"}," 全场让分盘 ",-1),I={class:"match-betting-item__content"},J={class:"betting-select"},K={class:"betting-select__list"},Q={class:"up-betting-name"},W={class:"text"},Y={class:"point"},Z={class:"details"},aa={class:"item"},sa={key:1,ref:"OUref",class:"match-betting-item"},ta=m("div",{class:"match-betting-item__title"},[m("div",{class:"flex-cross-center"}," 全场 大小盘 ")],-1),ea={class:"match-betting-item__content"},ia={class:"betting-select"},ca={class:"betting-select__list"},la={class:"up-betting-name"},na={class:"text"},ma={class:"point"},oa={class:"details"},ra={class:"item"},da={key:2,ref:"Mref",class:"match-betting-item"},va=m("div",{class:"match-betting-item__title"},[m("div",{class:"flex-cross-center"}," 全场 1X2 ")],-1),pa={class:"match-betting-item__content"},ua={class:"betting-select"},ga={class:"betting-select__list"},ba={class:"up-betting-name"},ha={class:"text"},_a={class:"details"},fa={class:"item"},ya={class:"up-match__footer"},ja={class:"match-footer"},xa={class:"match-footer__item"},ka=m("span",null,"更多玩法",-1),Oa=m("span",{class:"num"},"149",-1),Pa={class:"match-footer__item"},wa=m("span",null,"投注动态",-1),Da=m("span",{class:"num"},"45",-1);var Ma=t({props:{sendParams:{type:Object,default:function(){return{}}}},setup(a){const t=a,_=({homeTeamAbbr:a,awayTeamAbbr:s})=>a?`${a} V ${s}`:"",f=({leagueShortName:a})=>a?`${a}`:"",Ma=e(!0),Ta=()=>{Ma.value=!Ma.value},$a=e(!0),Aa=a=>{const{R:s}=a||{},{game:t,ratioData:e}=s||{},i=Object.assign({},a,s,t);return(e||[]).map((a=>Object.assign({},a,i)))},Ca=()=>{$a.value=!$a.value},Ra=a=>{const{OU:s}=a||{},{game:t,ratioData:e}=s||{},i=Object.assign({},a,s,t);return(e||[]).map((a=>Object.assign({},a,i)))},Ua=e(!0),La=()=>{Ua.value=!Ua.value},qa=a=>{const{M:s}=a||{},{game:t,ratioData:e}=s||{},i=Object.assign({},a,s,t);return(e||[]).map((a=>Object.assign({},a,i)))};return(a,e)=>{const Fa=i("van-icon"),Ha=i("van-popover"),Na=c("img");return l(),n("div",j,[m("div",x,[m("div",k,o(r(y)(t.sendParams.gameDate)),1),m("div",O,[P,m("span",{class:d(["btn R",[{active:Ma.value}]]),onClick:Ta}," 让分 ",2),m("span",{class:d(["btn OU",[{active:$a.value}]]),onClick:Ca}," 大小 ",2),m("span",{class:d(["btn M",[{active:Ua.value}]]),onClick:La}," 独赢 ",2)])]),m("div",w,[m("div",D,[m("div",M,[m("div",T,[m("div",$,[m("div",A,[v(m("img",C,null,512),[[Na,t.sendParams.homeLogo]]),v(m("img",R,null,512),[[Na,t.sendParams.awayLogo]])]),m("div",U,[m("div",L,[m("span",q,o(_(t.sendParams)),1),F,H]),m("div",N,[p(s,{"icon-src":t.sendParams.gameType},null,8,["icon-src"]),m("div",S,o(f(t.sendParams)),1)])])])]),m("div",V,[Ma.value?(l(),n("div",X,[m("div",z,[m("div",B,[E,p(Ha,{placement:"top",theme:"dark",trigger:"click"},{reference:u((()=>[p(Fa,{name:"info"})])),default:u((()=>[G])),_:1})])]),m("div",I,[m("div",J,[m("div",K,[(l(!0),n(g,null,b(Aa(t.sendParams),((a,s)=>(l(),n("div",{key:s,class:"betting-option"},[m("span",Q,[m("span",W,o(a.ratioType),1),m("span",Y,o(a.ratio),1)]),m("div",Z,[m("div",aa,o(a.ior),1)])])))),128))])])])],512)):h("",!0),$a.value?(l(),n("div",sa,[ta,m("div",ea,[m("div",ia,[m("div",ca,[(l(!0),n(g,null,b(Ra(t.sendParams),((a,s)=>(l(),n("div",{key:s,class:"betting-option"},[m("span",la,[m("span",na,o(a.ratioType),1),m("span",ma,o(a.ratio),1)]),m("div",oa,[m("div",ra,o(a.ior),1)])])))),128))])])])],512)):h("",!0),Ua.value?(l(),n("div",da,[va,m("div",pa,[m("div",ua,[m("div",ga,[(l(!0),n(g,null,b(qa(t.sendParams),((a,s)=>(l(),n("div",{key:s,class:"betting-option"},[m("span",ba,[m("span",ha,o(a.ratioType),1)]),m("div",_a,[m("div",fa,o(a.ior),1)])])))),128))])])])],512)):h("",!0)])])]),m("div",ya,[m("div",ja,[m("div",xa,[ka,Oa,p(Fa,{class:"arrow",name:"arrow"})]),m("div",Pa,[wa,Da,p(Fa,{class:"arrow",name:"arrow"})])])])])])}}});export{Ma as _};
