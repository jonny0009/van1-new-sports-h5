import{u as e,D as a,s as t,k as l}from"./index.7918b9f9.js";import{s,d as u,r as o,o as n,S as r,P as i,F as m,Z as v,_ as c,V as d,q as p,n as f,X as g,Y as T,b as h,w as y,e as Y,M as D,u as _,c as b,a0 as k,O as M}from"./vue.7b2d67a6.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.4fe91050.js";import{c as S}from"./index.e0bb15df.js";const x=["onClick"],w=[(e=>(g("data-v-62aff50e"),e=e(),T(),e))((()=>i("i",{class:"iconfont icon-timeMore"},null,-1)))];var C=s({emits:["returnTimeSuccess"],setup(t,{expose:l,emit:s}){const{t:g}=e(),T=u([{text:g("sport.all"),defaultToggle:!0,values:""},{text:g("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:g("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:g("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),h=u(""),y=u(!1),Y=e=>{const[t,l]=e;y.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(t).format("YYYY/MM/DD")} - ${a(l).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],h.value=o,s("returnTimeSuccess",h.value),f((()=>{var e,a;null==(a=_.value)||a.scrollTo(null==(e=b.value)?void 0:e.clientWidth,0)}))},D=()=>{y.value=!0};l({active:h});const _=u(),b=u();return(e,a)=>{const t=o("van-calendar");return n(),r(m,null,[i("div",{ref_key:"refHomeTime",ref:_,class:"homeTime-Time-Tabs pb10"},[i("div",{ref_key:"refHomeTimePage",ref:b,class:"homeTime-TimePage"},[(n(!0),r(m,null,v(T.value,((e,a)=>(n(),r("div",{key:a,class:c(["item",{active:e.values===h.value}]),onClick:a=>(e=>{h.value=e.values,s("returnTimeSuccess",h.value)})(e)},d(e.text),11,x)))),128)),i("div",{class:"more",onClick:D},w)],512)],512),p(t,{show:y.value,"onUpdate:show":a[0]||(a[0]=e=>y.value=e),type:"range",onConfirm:Y},null,8,["show"])],64)}}});C.__scopeId="data-v-62aff50e";const V={class:"homeTime-page"};var F=s({setup(e){const s=h((()=>{const e=t.state.app.globalBarHeaderHeight||48;return e>60?48:e})),d=u(null),f=h((()=>{var e,a,t;return(null==(t=null==(a=null==(e=l)?void 0:e.currentRoute)?void 0:a.value)?void 0:t.name)||""})),g=h((()=>t.state.home.refreshChangeTime)),T=u(""),x=u();y(g,(e=>{var a;e&&(null==(a=x.value)||a.resetParams(),clearTimeout(T.value),T.value=setTimeout((async()=>{await O(),await L()}),100))}));const w=u(!1),F=u(!1),R=Y({gameTypeSon:"",showtype:"FT",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:"",onlyFavorite:0,page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===f.value&&(R.startDate=a().format("YYYY-MM-DD")+" 00:00:00",R.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const j=Y([]),P=u(0),z=(e=!1,a="")=>{a?U.value=!e:w.value=e},I=()=>{F.value=!1,t.dispatch("home/setRefreshChangeTime",(new Date).getTime())},L=async(e="")=>{z(!1,e);const a=await S(R);if(z(!0,e),200===a.code){const t=(null==a?void 0:a.data)||{},{baseData:l,total:s}=null==t?void 0:t.matchList;P.value=s;const{pageSize:u,page:o}=R;e?$.value=!(u*o<s):j.length=0,j.push(...l)}},U=u(!1),$=u(!1),A=u(""),q=u(!1),B=()=>{q.value?$.value||U.value||(U.value=!0,clearTimeout(A.value),A.value=setTimeout((()=>{R.page++,L(!0)}),100)):q.value=!0},E=e=>{if(e)if((e||"").includes("/")){const[a,t]=e.split("-"),l=a.replaceAll("/","-"),s=t.replaceAll("/","-");R.startDate=l+" 00:00:00",R.endDate=s+" 23:59:59"}else R.startDate=a().format("YYYY-MM-DD HH:mm:ss"),R.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else R.startDate="",R.endDate="";$.value=!1,R.page=1,L()},N=e=>{w.value=!0,R.gameType=e,$.value=!1,R.page=1,L()},O=()=>{R.page=1,R.gameType="FT"};return D((()=>{L()})),(e,a)=>{const t=o("SportsTabs"),l=o("van-sticky"),u=o("HomeMatchHandicap"),g=o("HomeEmpty"),T=o("Loading"),h=o("van-list"),y=o("van-pull-refresh"),Y=o("FooterHeight");return n(),r("div",V,[p(t,{ref_key:"refSportsTabs",ref:x,class:"pb10",onReturnSportsSuccess:N},null,512),"HomeTime"===_(f)?(n(),b(C,{key:0,onReturnTimeSuccess:E})):k("",!0),p(y,{modelValue:F.value,"onUpdate:modelValue":a[1]||(a[1]=e=>F.value=e),onRefresh:I},{default:M((()=>[p(h,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),finished:$.value,"finished-text":e.$t("live.noMore"),onLoad:B},{default:M((()=>[w.value?(n(),r(m,{key:0},[i("div",{ref_key:"newContainer",ref:d},[(n(!0),r(m,null,v(_(j),((e,a)=>(n(),r(m,{key:a},[0===a?(n(),b(l,{key:0,"offset-top":_(s),container:d.value,"z-index":"52222"},{default:M((()=>[p(H,{class:c({mt20:0!==a}),"send-params":e},null,8,["class","send-params"])])),_:2},1032,["offset-top","container"])):k("",!0),p(u,{"play-title-toggle":!1,"send-params":e,class:c({mt20:0!==a})},null,8,["send-params","class"])],64)))),128))],512),_(j).length?k("",!0):(n(),b(g,{key:0}))],64)):k("",!0),!w.value||U.value?(n(),b(T,{key:1,class:c({"new_loading mt10":U.value})},null,8,["class"])):k("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),p(Y)])}}});F.__scopeId="data-v-435e4543";export{F as default};
