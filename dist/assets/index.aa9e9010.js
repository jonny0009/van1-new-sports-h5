<<<<<<<< HEAD:dist/assets/index.aa9e9010.js
import{u as e,O as a,s as l,r as t,h as s}from"./index.907e15f6.js";import{s as u,d as o,r as n,o as r,S as i,P as v,F as m,_ as c,Z as d,V as p,q as f,n as g,X as T,Y,b as h,w as y,e as D,M as _,O as M,u as b,c as S,$ as k}from"./vue.7833d4f2.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.cf64798c.js";import{d as x}from"./index.53ff01b0.js";const w=["onClick"],V=[(e=>(T("data-v-62aff50e"),e=e(),Y(),e))((()=>v("i",{class:"iconfont icon-timeMore"},null,-1)))];var C=u({emits:["returnTimeSuccess"],setup(l,{expose:t,emit:s}){const{t:u}=e(),T=o([{text:u("sport.all"),defaultToggle:!0,values:""},{text:u("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:u("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:u("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),Y=o(""),h=o(!1),y=e=>{const[l,t]=e;h.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(l).format("YYYY/MM/DD")} - ${a(t).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],Y.value=o,s("returnTimeSuccess",Y.value),g((()=>{var e,a;null==(a=_.value)||a.scrollTo(null==(e=M.value)?void 0:e.clientWidth,0)}))},D=()=>{h.value=!0};t({active:Y});const _=o(),M=o();return(e,a)=>{const l=n("van-calendar");return r(),i(m,null,[v("div",{ref_key:"refHomeTime",ref:_,class:"homeTime-Time-Tabs pb10"},[v("div",{ref_key:"refHomeTimePage",ref:M,class:"homeTime-TimePage"},[(r(!0),i(m,null,c(T.value,((e,a)=>(r(),i("div",{key:a,class:d(["item",{active:e.values===Y.value}]),onClick:a=>(e=>{Y.value=e.values,s("returnTimeSuccess",Y.value)})(e)},p(e.text),11,w)))),128)),v("div",{class:"more",onClick:D},V)],512)],512),f(l,{show:h.value,"onUpdate:show":a[0]||(a[0]=e=>h.value=e),type:"range",onConfirm:y},null,8,["show"])],64)}}});C.__scopeId="data-v-62aff50e";const F={class:"mt10"};var j=u({setup(e){const u=h((()=>l.state.user.scrollNumY)),p=h((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),g=o(null),T=h((()=>{var e,a,l;return(null==(l=null==(a=null==(e=t)?void 0:e.currentRoute)?void 0:a.value)?void 0:l.name)||""})),Y=h((()=>l.state.home.refreshChangeTime)),w=o(""),V=o();y(Y,(e=>{var a;e&&(null==(a=V.value)||a.resetParams(),clearTimeout(w.value),w.value=setTimeout((async()=>{await X(),await I()}),100))})),y((()=>u.value),(e=>{e>88&&(V.value.ifAnimated=!1)}));const j=o(!1),O=o(!1),N=D({gameTypeSon:"",showtype:"FT",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:"",onlyFavorite:0,page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===T.value&&(N.startDate=a().format("YYYY-MM-DD")+" 00:00:00",N.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const P=o([]),R=o([]),$=o(0),z=(e=!1,a="")=>{a?L.value=!e:j.value=e},A=()=>{O.value=!1,j.value=!0,U.value=!1,N.page=1,I()},I=async(e="")=>{z(!1,e);const a=await x(N);if(z(!0,e),200===a.code){const l=(null==a?void 0:a.data)||{},{baseData:t,total:u}=null==l?void 0:l.matchList;$.value=u;const{pageSize:o,page:n}=N;e?U.value=!(o*n<u):(P.value=[],R.value=[]),R.value.push(...t);const r={},i=[];R.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=s(e.gameDate).format("YYYY/MM/DD");r[a]?r[a].list.push(e):r[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(r).map((e=>{i.push(JSON.parse(JSON.stringify(r[e])))})),P.value=i}},L=o(!1),U=o(!1),J=o(""),q=o(!1),B=()=>{q.value?U.value||L.value||(L.value=!0,clearTimeout(J.value),J.value=setTimeout((()=>{N.page++,I(!0)}),100)):q.value=!0},E=e=>{if(e)if((e||"").includes("/")){const[a,l]=e.split("-"),t=a.replaceAll("/","-"),s=l.replaceAll("/","-");N.startDate=t+" 00:00:00",N.endDate=s+" 23:59:59"}else N.startDate=a().format("YYYY-MM-DD HH:mm:ss"),N.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else N.startDate="",N.endDate="";U.value=!1,N.page=1,I()},W=e=>{j.value=!0,N.gameType=e,U.value=!1,N.page=1,I()},X=()=>{N.page=1,N.gameType="FT"};return _((()=>{I()})),(e,a)=>{const l=n("van-sticky"),t=n("HomeMatchHandicap"),s=n("HomeEmpty"),u=n("Loading"),o=n("van-list"),Y=n("van-pull-refresh"),h=n("FooterHeight"),y=n("SportsTabs");return r(),i("div",{class:"homeTime-page",ref_key:"newContainer",ref:g},[f(y,{ref_key:"refSportsTabs",ref:V,class:"pb10",onReturnSportsSuccess:W},{body:M((()=>[v("div",F,["HomeTime"===b(T)?(r(),S(C,{key:0,onReturnTimeSuccess:E})):k("",!0),f(Y,{modelValue:O.value,"onUpdate:modelValue":a[1]||(a[1]=e=>O.value=e),onRefresh:A},{default:M((()=>[f(o,{modelValue:L.value,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value=e),finished:U.value,"finished-text":e.$t("live.noMore"),onLoad:B},{default:M((()=>[j.value?(r(),i(m,{key:0},[(r(!0),i(m,null,c(P.value,((e,a)=>(r(),i(m,{key:a},[f(l,{"offset-top":b(p),container:g.value,"z-index":"500",class:d({mt10:0!==a})},{default:M((()=>[f(H,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(r(!0),i(m,null,c(e.list,((e,a)=>(r(),S(t,{"play-title-toggle":!1,"send-params":e,class:d({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128)),P.value.length?k("",!0):(r(),S(s,{key:0}))],64)):k("",!0),!j.value||L.value?(r(),S(u,{key:1,class:d({"new_loading mt10":L.value})},null,8,["class"])):k("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),f(h)])])),_:1},512)],512)}}});j.__scopeId="data-v-49655ddc";export{j as default};
========
import{u as e,O as a,s as l,r as t,h as s}from"./index.3daf5e8c.js";import{s as u,d as o,r as n,o as r,S as i,P as v,F as m,_ as c,Z as d,V as p,q as f,n as g,X as T,Y,b as h,w as y,e as D,M as _,O as M,u as b,c as S,$ as k}from"./vue.7833d4f2.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.61d81704.js";import{d as x}from"./index.cc4b26ef.js";const w=["onClick"],V=[(e=>(T("data-v-62aff50e"),e=e(),Y(),e))((()=>v("i",{class:"iconfont icon-timeMore"},null,-1)))];var C=u({emits:["returnTimeSuccess"],setup(l,{expose:t,emit:s}){const{t:u}=e(),T=o([{text:u("sport.all"),defaultToggle:!0,values:""},{text:u("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:u("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:u("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),Y=o(""),h=o(!1),y=e=>{const[l,t]=e;h.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(l).format("YYYY/MM/DD")} - ${a(t).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],Y.value=o,s("returnTimeSuccess",Y.value),g((()=>{var e,a;null==(a=_.value)||a.scrollTo(null==(e=M.value)?void 0:e.clientWidth,0)}))},D=()=>{h.value=!0};t({active:Y});const _=o(),M=o();return(e,a)=>{const l=n("van-calendar");return r(),i(m,null,[v("div",{ref_key:"refHomeTime",ref:_,class:"homeTime-Time-Tabs pb10"},[v("div",{ref_key:"refHomeTimePage",ref:M,class:"homeTime-TimePage"},[(r(!0),i(m,null,c(T.value,((e,a)=>(r(),i("div",{key:a,class:d(["item",{active:e.values===Y.value}]),onClick:a=>(e=>{Y.value=e.values,s("returnTimeSuccess",Y.value)})(e)},p(e.text),11,w)))),128)),v("div",{class:"more",onClick:D},V)],512)],512),f(l,{show:h.value,"onUpdate:show":a[0]||(a[0]=e=>h.value=e),type:"range",onConfirm:y},null,8,["show"])],64)}}});C.__scopeId="data-v-62aff50e";const F={class:"mt10"};var j=u({setup(e){const u=h((()=>l.state.user.scrollNumY)),p=h((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),g=o(null),T=h((()=>{var e,a,l;return(null==(l=null==(a=null==(e=t)?void 0:e.currentRoute)?void 0:a.value)?void 0:l.name)||""})),Y=h((()=>l.state.home.refreshChangeTime)),w=o(""),V=o();y(Y,(e=>{var a;e&&(null==(a=V.value)||a.resetParams(),clearTimeout(w.value),w.value=setTimeout((async()=>{await X(),await I()}),100))})),y((()=>u.value),(e=>{e>88&&(V.value.ifAnimated=!1)}));const j=o(!1),O=o(!1),N=D({gameTypeSon:"",showtype:"FT",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:"",onlyFavorite:0,page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===T.value&&(N.startDate=a().format("YYYY-MM-DD")+" 00:00:00",N.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const P=o([]),R=o([]),$=o(0),z=(e=!1,a="")=>{a?L.value=!e:j.value=e},A=()=>{O.value=!1,j.value=!0,U.value=!1,N.page=1,I()},I=async(e="")=>{z(!1,e);const a=await x(N);if(z(!0,e),200===a.code){const l=(null==a?void 0:a.data)||{},{baseData:t,total:u}=null==l?void 0:l.matchList;$.value=u;const{pageSize:o,page:n}=N;e?U.value=!(o*n<u):(P.value=[],R.value=[]),R.value.push(...t);const r={},i=[];R.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=s(e.gameDate).format("YYYY/MM/DD");r[a]?r[a].list.push(e):r[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(r).map((e=>{i.push(JSON.parse(JSON.stringify(r[e])))})),P.value=i}},L=o(!1),U=o(!1),J=o(""),q=o(!1),B=()=>{q.value?U.value||L.value||(L.value=!0,clearTimeout(J.value),J.value=setTimeout((()=>{N.page++,I(!0)}),100)):q.value=!0},E=e=>{if(e)if((e||"").includes("/")){const[a,l]=e.split("-"),t=a.replaceAll("/","-"),s=l.replaceAll("/","-");N.startDate=t+" 00:00:00",N.endDate=s+" 23:59:59"}else N.startDate=a().format("YYYY-MM-DD HH:mm:ss"),N.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else N.startDate="",N.endDate="";U.value=!1,N.page=1,I()},W=e=>{j.value=!0,N.gameType=e,U.value=!1,N.page=1,I()},X=()=>{N.page=1,N.gameType="FT"};return _((()=>{I()})),(e,a)=>{const l=n("van-sticky"),t=n("HomeMatchHandicap"),s=n("HomeEmpty"),u=n("Loading"),o=n("van-list"),Y=n("van-pull-refresh"),h=n("FooterHeight"),y=n("SportsTabs");return r(),i("div",{class:"homeTime-page",ref_key:"newContainer",ref:g},[f(y,{ref_key:"refSportsTabs",ref:V,class:"pb10",onReturnSportsSuccess:W},{body:M((()=>[v("div",F,["HomeTime"===b(T)?(r(),S(C,{key:0,onReturnTimeSuccess:E})):k("",!0),f(Y,{modelValue:O.value,"onUpdate:modelValue":a[1]||(a[1]=e=>O.value=e),onRefresh:A},{default:M((()=>[f(o,{modelValue:L.value,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value=e),finished:U.value,"finished-text":e.$t("live.noMore"),onLoad:B},{default:M((()=>[j.value?(r(),i(m,{key:0},[(r(!0),i(m,null,c(P.value,((e,a)=>(r(),i(m,{key:a},[f(l,{"offset-top":b(p),container:g.value,"z-index":"500",class:d({mt10:0!==a})},{default:M((()=>[f(H,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(r(!0),i(m,null,c(e.list,((e,a)=>(r(),S(t,{"play-title-toggle":!1,"send-params":e,class:d({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128)),P.value.length?k("",!0):(r(),S(s,{key:0}))],64)):k("",!0),!j.value||L.value?(r(),S(u,{key:1,class:d({"new_loading mt10":L.value})},null,8,["class"])):k("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),f(h)])])),_:1},512)],512)}}});j.__scopeId="data-v-49655ddc";export{j as default};
>>>>>>>> feature/setloca:dist/assets/index.e8f5eedc.js
