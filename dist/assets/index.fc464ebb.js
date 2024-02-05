import{u as e,D as a,s as l,k as s}from"./index.7918b9f9.js";import{s as t,d as u,r as o,o as n,S as r,P as i,F as m,Z as v,_ as d,V as c,q as p,n as f,X as g,Y as T,b as h,w as Y,e as y,M as D,O as _,u as b,c as k,a0 as M}from"./vue.7b2d67a6.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.4fe91050.js";import{a as x}from"./index.e0bb15df.js";const S=["onClick"],w=[(e=>(g("data-v-287274ed"),e=e(),T(),e))((()=>i("i",{class:"iconfont icon-timeMore"},null,-1)))];var C=t({emits:["returnTimeSuccess"],setup(l,{expose:s,emit:t}){const{t:g}=e(),T=u([{text:g("sport.all"),defaultToggle:!0,values:""},{text:g("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:g("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:g("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),h=u(""),Y=u(!1),y=e=>{const[l,s]=e;Y.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(l).format("YYYY/MM/DD")} - ${a(s).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],h.value=o,t("returnTimeSuccess",h.value),f((()=>{var e,a;null==(a=_.value)||a.scrollTo(null==(e=b.value)?void 0:e.clientWidth,0)}))},D=()=>{Y.value=!0};s({active:h});const _=u(),b=u();return(e,a)=>{const l=o("van-calendar");return n(),r(m,null,[i("div",{ref_key:"refHomeTime",ref:_,class:"homeTime-Time-Tabs pb10"},[i("div",{ref_key:"refHomeTimePage",ref:b,class:"homeTime-TimePage"},[(n(!0),r(m,null,v(T.value,((e,a)=>(n(),r("div",{key:a,class:d(["item",{active:e.values===h.value}]),onClick:a=>(e=>{h.value=e.values,t("returnTimeSuccess",h.value)})(e)},c(e.text),11,S)))),128)),i("div",{class:"more",onClick:D},w)],512)],512),p(l,{show:Y.value,"onUpdate:show":a[0]||(a[0]=e=>Y.value=e),type:"range",onConfirm:y},null,8,["show"])],64)}}});C.__scopeId="data-v-287274ed";const V={class:"homeTime-page"};var R=t({setup(e){const t=h((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),c=u(null),f=h((()=>{var e,a,l;return(null==(l=null==(a=null==(e=s)?void 0:e.currentRoute)?void 0:a.value)?void 0:l.name)||""})),g=h((()=>l.state.home.refreshChangeTime)),T=u(""),S=u();Y(g,(e=>{var a;e&&(null==(a=S.value)||a.resetParams(),clearTimeout(T.value),T.value=setTimeout((async()=>{await W(),await $()}),100))}));const w=u(!1),R=u(!1),j=y({page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===f.value&&(j.startDate=a().format("YYYY-MM-DD")+" 00:00:00",j.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const F=y([]),P=u(0),z=(e=!1,a="")=>{a?A.value=!e:w.value=e},U=()=>{R.value=!1,l.dispatch("home/setRefreshChangeTime",(new Date).getTime())},$=async(e="")=>{z(!1,e);const a=await x(j);if(z(!0,e),200===a.code){const l=(null==a?void 0:a.data)||{},{baseData:s,total:t}=l;P.value=t;const{pageSize:u,page:o}=j;e?I.value=!(u*o<t):F.length=0,F.push(...s)}},A=u(!1),I=u(!1),L=u(""),q=u(!1),B=()=>{q.value?I.value||A.value||(A.value=!0,clearTimeout(L.value),L.value=setTimeout((()=>{j.page++,$(!0)}),100)):q.value=!0},E=e=>{if(e)if((e||"").includes("/")){const[a,l]=e.split("-"),s=a.replaceAll("/","-"),t=l.replaceAll("/","-");j.startDate=s+" 00:00:00",j.endDate=t+" 23:59:59"}else j.startDate=a().format("YYYY-MM-DD HH:mm:ss"),j.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else j.startDate="",j.endDate="";I.value=!1,j.page=1,$()},O=e=>{w.value=!0,j.gameType=e,I.value=!1,j.page=1,$()},W=()=>{j.page=1,j.gameType="FT"};return D((()=>{$()})),(e,a)=>{const l=o("SportsTabs"),s=o("van-sticky"),u=o("HomeMatchHandicap"),g=o("HomeEmpty"),T=o("Loading"),h=o("van-list"),Y=o("van-pull-refresh"),y=o("FooterHeight");return n(),r("div",V,[p(Y,{modelValue:R.value,"onUpdate:modelValue":a[1]||(a[1]=e=>R.value=e),onRefresh:U},{default:_((()=>[p(l,{ref_key:"refSportsTabs",ref:S,class:"pb10",onReturnSportsSuccess:O},null,512),"HomeTime"===b(f)?(n(),k(C,{key:0,onReturnTimeSuccess:E})):M("",!0),p(h,{modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value=e),finished:I.value,"finished-text":e.$t("live.noMore"),onLoad:B},{default:_((()=>[w.value?(n(),r(m,{key:0},[i("div",{ref_key:"newContainer",ref:c},[(n(!0),r(m,null,v(b(F),((e,a)=>(n(),r(m,{key:a},[0===a?(n(),k(s,{key:0,"offset-top":b(t),container:c.value,"z-index":"52222"},{default:_((()=>[p(H,{class:d({mt20:0!==a}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):M("",!0),p(u,{"play-title-toggle":!1,"send-params":e,class:d({mt20:0!==a})},null,8,["send-params","class"])],64)))),128))],512),b(F).length?M("",!0):(n(),k(g,{key:0}))],64)):M("",!0),!w.value||A.value?(n(),k(T,{key:1,class:d({"new_loading mt10":A.value})},null,8,["class"])):M("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),p(y)])}}});R.__scopeId="data-v-259da894";export{R as default};
