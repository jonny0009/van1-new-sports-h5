<<<<<<<< HEAD:dist/assets/index.743a6d64.js
import{u as e,O as a,s as t,r as l,h as s}from"./index.3243ddf5.js";import{s as u,d as o,r as n,o as r,S as i,P as v,F as m,_ as c,Z as d,V as p,q as f,n as g,X as T,Y as y,b as h,w as Y,e as D,M as _,O as b,u as M,c as S,$ as k}from"./vue.7833d4f2.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.67f769f3.js";import{s as x,d as w}from"./index.5e661558.js";const C=["onClick"],F=[(e=>(T("data-v-62aff50e"),e=e(),y(),e))((()=>v("i",{class:"iconfont icon-timeMore"},null,-1)))];var V=u({emits:["returnTimeSuccess"],setup(t,{expose:l,emit:s}){const{t:u}=e(),T=o([{text:u("sport.all"),defaultToggle:!0,values:""},{text:u("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:u("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:u("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),y=o(""),h=o(!1),Y=e=>{const[t,l]=e;h.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(t).format("YYYY/MM/DD")} - ${a(l).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],y.value=o,s("returnTimeSuccess",y.value),g((()=>{var e,a;null==(a=_.value)||a.scrollTo(null==(e=b.value)?void 0:e.clientWidth,0)}))},D=()=>{h.value=!0};l({active:y});const _=o(),b=o();return(e,a)=>{const t=n("van-calendar");return r(),i(m,null,[v("div",{ref_key:"refHomeTime",ref:_,class:"homeTime-Time-Tabs pb10"},[v("div",{ref_key:"refHomeTimePage",ref:b,class:"homeTime-TimePage"},[(r(!0),i(m,null,c(T.value,((e,a)=>(r(),i("div",{key:a,class:d(["item",{active:e.values===y.value}]),onClick:a=>(e=>{y.value=e.values,s("returnTimeSuccess",y.value)})(e)},p(e.text),11,C)))),128)),v("div",{class:"more",onClick:D},F)],512)],512),f(t,{show:h.value,"onUpdate:show":a[0]||(a[0]=e=>h.value=e),type:"range",onConfirm:Y},null,8,["show"])],64)}}});V.__scopeId="data-v-62aff50e";const j={class:"mt10"};var O=u({setup(e){const u=h((()=>t.state.user.scrollNumY)),p=h((()=>{const e=t.state.app.globalBarHeaderHeight||48;return e>60?48:e})),g=o(null),T=h((()=>{var e,a,t;return(null==(t=null==(a=null==(e=l)?void 0:e.currentRoute)?void 0:a.value)?void 0:t.name)||""})),y=h((()=>t.state.home.refreshChangeTime)),C=o(""),F=o();Y(y,(e=>{var a;e&&(null==(a=F.value)||a.resetParams(),clearTimeout(C.value),C.value=setTimeout((async()=>{await G(),await U()}),100))})),Y((()=>u.value),(e=>{e>88&&(F.value.ifAnimated=!1)}));const O=o(!1),R=o(!1),N=o([]);(async()=>{var e;const a=await x({showType:"FT"});if(200===(null==a?void 0:a.code)&&(null==a?void 0:a.data)){const t=(null==(e=a.data)?void 0:e.stResult)||[];N.value=t.map((e=>({gameType:e.gameType,gameCount:1*e.num})))}})();const P=D({gameTypeSon:"",showtype:"FT",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:"",onlyFavorite:0,page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===T.value&&(P.startDate=a().format("YYYY-MM-DD")+" 00:00:00",P.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const $=o([]),z=o([]),A=o(0),I=(e=!1,a="")=>{a?J.value=!e:O.value=e},L=()=>{R.value=!1,O.value=!0,q.value=!1,P.page=1,U()},U=async(e="")=>{I(!1,e);const a=await w(P);if(I(!0,e),200===a.code){const t=(null==a?void 0:a.data)||{},{baseData:l,total:u}=null==t?void 0:t.matchList;A.value=u;const{pageSize:o,page:n}=P;e?q.value=!(o*n<u):($.value=[],z.value=[]),z.value.push(...l);const r={},i=[];z.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=s(e.gameDate).format("YYYY/MM/DD");r[a]?r[a].list.push(e):r[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(r).map((e=>{i.push(JSON.parse(JSON.stringify(r[e])))})),$.value=i}},J=o(!1),q=o(!1),B=o(""),E=o(!1),W=()=>{E.value?q.value||J.value||(J.value=!0,clearTimeout(B.value),B.value=setTimeout((()=>{P.page++,U(!0)}),100)):E.value=!0},X=e=>{if(e)if((e||"").includes("/")){const[a,t]=e.split("-"),l=a.replaceAll("/","-"),s=t.replaceAll("/","-");P.startDate=l+" 00:00:00",P.endDate=s+" 23:59:59"}else P.startDate=a().format("YYYY-MM-DD HH:mm:ss"),P.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else P.startDate="",P.endDate="";q.value=!1,P.page=1,U()},Z=e=>{O.value=!0,P.gameType=e,q.value=!1,P.page=1,U()},G=()=>{P.page=1,P.gameType="FT"};return _((()=>{U()})),(e,a)=>{const t=n("van-sticky"),l=n("HomeMatchHandicap"),s=n("HomeEmpty"),u=n("Loading"),o=n("van-list"),y=n("van-pull-refresh"),h=n("FooterHeight"),Y=n("SportsTabs");return r(),i("div",{class:"homeTime-page",ref_key:"newContainer",ref:g},[f(Y,{ref_key:"refSportsTabs",ref:F,class:"pb10",isCustom:!0,tabs:N.value,onReturnSportsSuccess:Z},{body:b((()=>[v("div",j,["HomeTime"===M(T)?(r(),S(V,{key:0,onReturnTimeSuccess:X})):k("",!0),f(y,{modelValue:R.value,"onUpdate:modelValue":a[1]||(a[1]=e=>R.value=e),onRefresh:L},{default:b((()=>[f(o,{modelValue:J.value,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value=e),finished:q.value,"finished-text":e.$t("live.noMore"),onLoad:W},{default:b((()=>[O.value?(r(),i(m,{key:0},[(r(!0),i(m,null,c($.value,((e,a)=>(r(),i(m,{key:a},[f(t,{"offset-top":M(p),container:g.value,"z-index":"500",class:d({mt10:0!==a})},{default:b((()=>[f(H,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(r(!0),i(m,null,c(e.list,((e,a)=>(r(),S(l,{key:a,"play-title-toggle":!1,"send-params":e,class:d({mt10:0!==a})},null,8,["send-params","class"])))),128))],64)))),128)),$.value.length?k("",!0):(r(),S(s,{key:0}))],64)):k("",!0),!O.value||J.value?(r(),S(u,{key:1,class:d({"new_loading mt10":J.value})},null,8,["class"])):k("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),f(h)])])),_:1},8,["tabs"])],512)}}});O.__scopeId="data-v-0ca0f587";export{O as default};
========
import{u as e,O as a,s as t,r as l,h as s}from"./index.bb5a6193.js";import{s as u,d as o,r as n,o as r,S as i,P as v,F as m,_ as c,Z as d,V as p,q as f,n as g,X as T,Y as y,b as h,w as Y,e as D,M as b,O as _,u as M,c as S,$ as k}from"./vue.7833d4f2.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.d3783c02.js";import{s as x,d as w}from"./index.2278b206.js";const C=["onClick"],F=[(e=>(T("data-v-62aff50e"),e=e(),y(),e))((()=>v("i",{class:"iconfont icon-timeMore"},null,-1)))];var V=u({emits:["returnTimeSuccess"],setup(t,{expose:l,emit:s}){const{t:u}=e(),T=o([{text:u("sport.all"),defaultToggle:!0,values:""},{text:u("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:u("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:u("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),y=o(""),h=o(!1),Y=e=>{const[t,l]=e;h.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(t).format("YYYY/MM/DD")} - ${a(l).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],y.value=o,s("returnTimeSuccess",y.value),g((()=>{var e,a;null==(a=b.value)||a.scrollTo(null==(e=_.value)?void 0:e.clientWidth,0)}))},D=()=>{h.value=!0};l({active:y});const b=o(),_=o();return(e,a)=>{const t=n("van-calendar");return r(),i(m,null,[v("div",{ref_key:"refHomeTime",ref:b,class:"homeTime-Time-Tabs pb10"},[v("div",{ref_key:"refHomeTimePage",ref:_,class:"homeTime-TimePage"},[(r(!0),i(m,null,c(T.value,((e,a)=>(r(),i("div",{key:a,class:d(["item",{active:e.values===y.value}]),onClick:a=>(e=>{y.value=e.values,s("returnTimeSuccess",y.value)})(e)},p(e.text),11,C)))),128)),v("div",{class:"more",onClick:D},F)],512)],512),f(t,{show:h.value,"onUpdate:show":a[0]||(a[0]=e=>h.value=e),type:"range",onConfirm:Y},null,8,["show"])],64)}}});V.__scopeId="data-v-62aff50e";const j={class:"mt10"};var O=u({setup(e){const u=h((()=>t.state.user.scrollNumY)),p=h((()=>{const e=t.state.app.globalBarHeaderHeight||48;return e>60?48:e})),g=o(null),T=h((()=>{var e,a,t;return(null==(t=null==(a=null==(e=l)?void 0:e.currentRoute)?void 0:a.value)?void 0:t.name)||""})),y=h((()=>t.state.home.refreshChangeTime)),C=o(""),F=o();Y(y,(e=>{var a;e&&(null==(a=F.value)||a.resetParams(),clearTimeout(C.value),C.value=setTimeout((async()=>{await G(),await U()}),100))})),Y((()=>u.value),(e=>{e>88&&(F.value.ifAnimated=!1)}));const O=o(!1),R=o(!1),N=o([]);(async()=>{var e;const a=await x({showType:"FT"});if(200===(null==a?void 0:a.code)&&(null==a?void 0:a.data)){const t=(null==(e=a.data)?void 0:e.stResult)||[];N.value=t.map((e=>({gameType:e.gameType,gameCount:1*e.num})))}})();const P=D({gameTypeSon:"",showtype:"FT",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:"",onlyFavorite:0,page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===T.value&&(P.startDate=a().format("YYYY-MM-DD")+" 00:00:00",P.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const $=o([]),z=o([]),A=o(0),I=(e=!1,a="")=>{a?J.value=!e:O.value=e},L=()=>{R.value=!1,O.value=!0,q.value=!1,P.page=1,U()},U=async(e="")=>{I(!1,e);const a=await w(P);if(I(!0,e),200===a.code){const t=(null==a?void 0:a.data)||{},{baseData:l,total:u}=null==t?void 0:t.matchList;A.value=u;const{pageSize:o,page:n}=P;e?q.value=!(o*n<u):($.value=[],z.value=[]),z.value.push(...l);const r={},i=[];z.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=s(e.gameDate).format("YYYY/MM/DD");r[a]?r[a].list.push(e):r[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(r).map((e=>{i.push(JSON.parse(JSON.stringify(r[e])))})),$.value=i}},J=o(!1),q=o(!1),B=o(""),E=o(!1),W=()=>{E.value?q.value||J.value||(J.value=!0,clearTimeout(B.value),B.value=setTimeout((()=>{P.page++,U(!0)}),100)):E.value=!0},X=e=>{if(e)if((e||"").includes("/")){const[a,t]=e.split("-"),l=a.replaceAll("/","-"),s=t.replaceAll("/","-");P.startDate=l+" 00:00:00",P.endDate=s+" 23:59:59"}else P.startDate=a().format("YYYY-MM-DD HH:mm:ss"),P.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else P.startDate="",P.endDate="";q.value=!1,P.page=1,U()},Z=e=>{O.value=!0,P.gameType=e,q.value=!1,P.page=1,U()},G=()=>{P.page=1,P.gameType="FT"};return b((()=>{U()})),(e,a)=>{const t=n("van-sticky"),l=n("HomeMatchHandicap"),s=n("HomeEmpty"),u=n("Loading"),o=n("van-list"),y=n("van-pull-refresh"),h=n("FooterHeight"),Y=n("SportsTabs");return r(),i("div",{class:"homeTime-page",ref_key:"newContainer",ref:g},[f(Y,{ref_key:"refSportsTabs",ref:F,class:"pb10",isCustom:!0,tabs:N.value,onReturnSportsSuccess:Z},{body:_((()=>[v("div",j,["HomeTime"===M(T)?(r(),S(V,{key:0,onReturnTimeSuccess:X})):k("",!0),f(y,{modelValue:R.value,"onUpdate:modelValue":a[1]||(a[1]=e=>R.value=e),onRefresh:L},{default:_((()=>[f(o,{modelValue:J.value,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value=e),finished:q.value,"finished-text":e.$t("live.noMore"),onLoad:W},{default:_((()=>[O.value?(r(),i(m,{key:0},[(r(!0),i(m,null,c($.value,((e,a)=>(r(),i(m,{key:a},[f(t,{"offset-top":M(p),container:g.value,"z-index":"500",class:d({mt10:0!==a})},{default:_((()=>[f(H,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(r(!0),i(m,null,c(e.list,((e,a)=>(r(),S(l,{key:a,"play-title-toggle":!1,"send-params":e,class:d({mt10:0!==a})},null,8,["send-params","class"])))),128))],64)))),128)),$.value.length?k("",!0):(r(),S(s,{key:0}))],64)):k("",!0),!O.value||J.value?(r(),S(u,{key:1,class:d({"new_loading mt10":J.value})},null,8,["class"])):k("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),f(h)])])),_:1},8,["tabs"])],512)}}});O.__scopeId="data-v-0ca0f587";export{O as default};
>>>>>>>> hotfix/match:dist/assets/index.c21fa7d6.js
