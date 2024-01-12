import{u as e,D as a,s,j as t}from"./index.f5778641.js";import{s as l,d as u,r as o,o as n,R as r,P as i,F as v,Z as m,_ as c,U as d,q as p,n as f,X as g,Y as T,b as Y,w as h,e as y,M as D,u as _,c as b,a1 as M,O as k}from"./vue.9ae86005.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.62f3fedc.js";import{r as x}from"./index.00d6a773.js";const S=["onClick"],w=[(e=>(g("data-v-9a3e7a8e"),e=e(),T(),e))((()=>i("i",{class:"iconfont icon-timeMore"},null,-1)))];var C=l({emits:["returnTimeSuccess"],setup(s,{expose:t,emit:l}){const{t:g}=e(),T=u([{text:g("sport.all"),defaultToggle:!0,values:""},{text:g("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:g("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:g("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),Y=u(""),h=u(!1),y=e=>{const[s,t]=e;h.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(s).format("YYYY/MM/DD")} - ${a(t).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],Y.value=o,l("returnTimeSuccess",Y.value),f((()=>{var e,a;null==(a=_.value)||a.scrollTo(null==(e=b.value)?void 0:e.clientWidth,0)}))},D=()=>{h.value=!0};t({active:Y});const _=u(),b=u();return(e,a)=>{const s=o("van-calendar");return n(),r(v,null,[i("div",{ref_key:"refHomeTime",ref:_,class:"homeTime-Time-Tabs pb10"},[i("div",{ref_key:"refHomeTimePage",ref:b,class:"homeTime-TimePage"},[(n(!0),r(v,null,m(T.value,((e,a)=>(n(),r("div",{key:a,class:c(["item",{active:e.values===Y.value}]),onClick:a=>(e=>{Y.value=e.values,l("returnTimeSuccess",Y.value)})(e)},d(e.text),11,S)))),128)),i("div",{class:"more",onClick:D},w)],512)],512),p(s,{show:h.value,"onUpdate:show":a[0]||(a[0]=e=>h.value=e),type:"range",onConfirm:y},null,8,["show"])],64)}}});C.__scopeId="data-v-9a3e7a8e";const j={class:"homeTime-page"};var F=l({setup(e){const l=Y((()=>{const e=s.state.app.globalBarHeaderHeight||48;return e>60?48:e})),d=u(null),f=Y((()=>{var e,a,s;return(null==(s=null==(a=null==(e=t)?void 0:e.currentRoute)?void 0:a.value)?void 0:s.name)||""})),g=Y((()=>s.state.home.refreshChangeTime)),T=u(""),S=u();h(g,(e=>{var a;e&&(null==(a=S.value)||a.resetParams(),clearTimeout(T.value),T.value=setTimeout((async()=>{await E(),await U()}),100))}));const w=u(!1),F=y({page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===f.value&&(F.startDate=a().format("YYYY-MM-DD")+" 00:00:00",F.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const P=y([]),R=u(0),z=(e=!1,a="")=>{a?V.value=!e:w.value=e},U=async(e="")=>{z(!1,e);const a=await x(F);if(z(!0,e),200===a.code){const s=(null==a?void 0:a.data)||{},{baseData:t,total:l}=s;R.value=l;const{pageSize:u,page:o}=F;e?$.value=!(u*o<l):P.length=0,P.push(...t)}},V=u(!1),$=u(!1),A=u(""),I=u(!1),L=()=>{I.value?$.value||V.value||(V.value=!0,clearTimeout(A.value),A.value=setTimeout((()=>{F.page++,U(!0)}),100)):I.value=!0},q=e=>{if(e)if((e||"").includes("/")){const[a,s]=e.split("-"),t=a.replaceAll("/","-"),l=s.replaceAll("/","-");F.startDate=t+" 00:00:00",F.endDate=l+" 23:59:59"}else F.startDate=a().format("YYYY-MM-DD HH:mm:ss"),F.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else F.startDate="",F.endDate="";$.value=!1,F.page=1,U()},B=e=>{w.value=!0,F.gameType=e,$.value=!1,F.page=1,U()},E=()=>{F.page=1,F.gameType="FT"};return D((()=>{U()})),(e,a)=>{const s=o("SportsTabs"),t=o("van-sticky"),u=o("HomeMatchHandicap"),g=o("HomeEmpty"),T=o("Loading"),Y=o("van-list"),h=o("FooterHeight");return n(),r("div",j,[p(s,{ref_key:"refSportsTabs",ref:S,class:"pb10",onReturnSportsSuccess:B},null,512),"HomeTime"===_(f)?(n(),b(C,{key:0,onReturnTimeSuccess:q})):M("",!0),p(Y,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),finished:$.value,"finished-text":e.$t("live.noMore"),onLoad:L},{default:k((()=>[w.value?(n(),r(v,{key:0},[i("div",{ref_key:"newContainer",ref:d},[(n(!0),r(v,null,m(_(P),((e,a)=>(n(),r(v,{key:a},[0===a?(n(),b(t,{key:0,"offset-top":_(l),container:d.value,"z-index":"52222"},{default:k((()=>[p(H,{class:c({mt20:0!==a}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):M("",!0),p(u,{"play-title-toggle":!1,"send-params":e,class:c({mt20:0!==a})},null,8,["send-params","class"])],64)))),128))],512),_(P).length?M("",!0):(n(),b(g,{key:0}))],64)):M("",!0),!w.value||V.value?(n(),b(T,{key:1,class:c({"new_loading mt10":V.value})},null,8,["class"])):M("",!0)])),_:1},8,["modelValue","finished","finished-text"]),p(h)])}}});F.__scopeId="data-v-6dc3b5be";export{F as default};
