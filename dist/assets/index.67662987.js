import{u as e,D as a,s as l,m as s}from"./index.0bcbbe84.js";import{s as t,d as u,r as o,o as n,S as r,P as i,F as m,Z as v,_ as c,V as d,q as p,n as f,X as g,Y as T,b as h,w as Y,e as y,M as D,O as b,u as _,c as M,a0 as k}from"./vue.6c3ce548.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.b5f3906a.js";import{a as x}from"./index.42a04b31.js";const S=["onClick"],w=[(e=>(g("data-v-6cd1b40a"),e=e(),T(),e))((()=>i("i",{class:"iconfont icon-timeMore"},null,-1)))];var C=t({emits:["returnTimeSuccess"],setup(l,{expose:s,emit:t}){const{t:g}=e(),T=u([{text:g("sport.all"),defaultToggle:!0,values:""},{text:g("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:g("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:g("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),h=u(""),Y=u(!1),y=e=>{const[l,s]=e;Y.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(l).format("YYYY/MM/DD")} - ${a(s).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],h.value=o,t("returnTimeSuccess",h.value),f((()=>{var e,a;null==(a=b.value)||a.scrollTo(null==(e=_.value)?void 0:e.clientWidth,0)}))},D=()=>{Y.value=!0};s({active:h});const b=u(),_=u();return(e,a)=>{const l=o("van-calendar");return n(),r(m,null,[i("div",{ref_key:"refHomeTime",ref:b,class:"homeTime-Time-Tabs pb10"},[i("div",{ref_key:"refHomeTimePage",ref:_,class:"homeTime-TimePage"},[(n(!0),r(m,null,v(T.value,((e,a)=>(n(),r("div",{key:a,class:c(["item",{active:e.values===h.value}]),onClick:a=>(e=>{h.value=e.values,t("returnTimeSuccess",h.value)})(e)},d(e.text),11,S)))),128)),i("div",{class:"more",onClick:D},w)],512)],512),p(l,{show:Y.value,"onUpdate:show":a[0]||(a[0]=e=>Y.value=e),type:"range",onConfirm:y},null,8,["show"])],64)}}});C.__scopeId="data-v-6cd1b40a";const V={class:"homeTime-page"};var R=t({setup(e){const t=h((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),d=u(null),f=h((()=>{var e,a,l;return(null==(l=null==(a=null==(e=s)?void 0:e.currentRoute)?void 0:a.value)?void 0:l.name)||""})),g=h((()=>l.state.home.refreshChangeTime)),T=u(""),S=u();Y(g,(e=>{var a;e&&(null==(a=S.value)||a.resetParams(),clearTimeout(T.value),T.value=setTimeout((async()=>{await W(),await $()}),100))}));const w=u(!1),R=u(!1),j=y({page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===f.value&&(j.startDate=a().format("YYYY-MM-DD")+" 00:00:00",j.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const F=y([]),P=u(0),z=(e=!1,a="")=>{a?A.value=!e:w.value=e},U=()=>{R.value=!1,l.dispatch("home/setRefreshChangeTime",(new Date).getTime())},$=async(e="")=>{z(!1,e);const a=await x(j);if(z(!0,e),200===a.code){const l=(null==a?void 0:a.data)||{},{baseData:s,total:t}=l;P.value=t;const{pageSize:u,page:o}=j;e?I.value=!(u*o<t):F.length=0,F.push(...s)}},A=u(!1),I=u(!1),L=u(""),q=u(!1),B=()=>{q.value?I.value||A.value||(A.value=!0,clearTimeout(L.value),L.value=setTimeout((()=>{j.page++,$(!0)}),100)):q.value=!0},E=e=>{if(e)if((e||"").includes("/")){const[a,l]=e.split("-"),s=a.replaceAll("/","-"),t=l.replaceAll("/","-");j.startDate=s+" 00:00:00",j.endDate=t+" 23:59:59"}else j.startDate=a().format("YYYY-MM-DD HH:mm:ss"),j.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else j.startDate="",j.endDate="";I.value=!1,j.page=1,$()},O=e=>{w.value=!0,j.gameType=e,I.value=!1,j.page=1,$()},W=()=>{j.page=1,j.gameType="FT"};return D((()=>{$()})),(e,a)=>{const l=o("SportsTabs"),s=o("van-sticky"),u=o("HomeMatchHandicap"),g=o("HomeEmpty"),T=o("Loading"),h=o("van-list"),Y=o("van-pull-refresh"),y=o("FooterHeight");return n(),r("div",V,[p(Y,{modelValue:R.value,"onUpdate:modelValue":a[1]||(a[1]=e=>R.value=e),onRefresh:U},{default:b((()=>[p(l,{ref_key:"refSportsTabs",ref:S,class:"pb10",onReturnSportsSuccess:O},null,512),"HomeTime"===_(f)?(n(),M(C,{key:0,onReturnTimeSuccess:E})):k("",!0),p(h,{modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value=e),finished:I.value,"finished-text":e.$t("live.noMore"),onLoad:B},{default:b((()=>[w.value?(n(),r(m,{key:0},[i("div",{ref_key:"newContainer",ref:d},[(n(!0),r(m,null,v(_(F),((e,a)=>(n(),r(m,{key:a},[0===a?(n(),M(s,{key:0,"offset-top":_(t),container:d.value,"z-index":"52222"},{default:b((()=>[p(H,{class:c({mt20:0!==a}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):k("",!0),p(u,{"play-title-toggle":!1,"send-params":e,class:c({mt20:0!==a})},null,8,["send-params","class"])],64)))),128))],512),_(F).length?k("",!0):(n(),M(g,{key:0}))],64)):k("",!0),!w.value||A.value?(n(),M(T,{key:1,class:c({"new_loading mt10":A.value})},null,8,["class"])):k("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),p(y)])}}});R.__scopeId="data-v-259da894";export{R as default};
