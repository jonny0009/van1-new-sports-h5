import{s as e,r as a,D as s,h as t,j as l,z as o}from"./index.a6ff837a.js";import{_ as n}from"./index.vue_vue_type_script_setup_true_lang.43bcb663.js";import{s as u,a6 as m,b as r,d as i,w as d,e as p,M as v,r as c,o as f,R as D,q as Y,O as g,P as h,u as y,c as T,$ as M,F as H,S as _,_ as b}from"./vue.c62eea93.js";const w={class:"mt10"};var k=u({setup(u){const k=m((()=>o((()=>import("./index.512ec1b7.js")),["/assets/index.512ec1b7.js","/assets/index.a3470bce.css","/assets/index.a6ff837a.js","/assets/index.54fa8041.css","/assets/vue.c62eea93.js"]))),S=r((()=>e.state.user.scrollNumY)),x=r((()=>{const a=e.state.app.globalBarHeaderHeight||48;return a>60?48:a})),R=i(null),V=i(!1),j=r((()=>a?.currentRoute?.value?.name||"")),C=r((()=>e.state.home.refreshChangeTime)),E=i(""),F=i(),O=i(null),z={beginDate:s().format("YYYY-MM-DD HH:mm:ss"),endDate:s().add(8,"hour").format("YYYY-MM-DD HH:mm:ss"),dayBeginDate:s().format("YYYY-MM-DD HH:mm:ss"),dayEndDate:s().add(24,"hour").format("YYYY-MM-DD HH:mm:ss"),weekBeginDate:s().format("YYYY-MM-DD HH:mm:ss"),weekEndDate:s().add(168,"hour").format("YYYY-MM-DD HH:mm:ss"),gameType:"FT"};d((()=>S.value),(e=>{e>88&&(F.value.ifAnimated=!1)})),d(C,(e=>{e&&(F.value?.resetParams(),clearTimeout(E.value),E.value=setTimeout((async()=>{await se(),await $()}),100))}));const A=i(!1),I=i(!1),B=p({page:1,pageSize:5,gameType:"FT"});"sportToday"===j.value&&(B.startDate=s().format("YYYY-MM-DD")+" 00:00:00",B.endDate=s().format("YYYY-MM-DD")+" 23:59:59");const L=i([]),N=i([]),P=i(0),U=(e=!1,a="")=>{a?q.value=!e:A.value=e},J=()=>{I.value=!1,e.dispatch("home/setRefreshChangeTime",(new Date).getTime())},$=async(e="")=>{U(!1,e);const a=await t(B);if(U(!0,e),200===a.code){const s=a?.data||{},{baseData:t,total:o}=s;P.value=o;const{pageSize:n,page:u}=B;e?G.value=!(n*u<o):(L.value=[],N.value=[]),N.value.push(...t);const m={},r=[];N.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=l(e.gameDate).format("YYYY/MM/DD");m[a]?m[a].list.push(e):m[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(m).map((e=>{r.push(JSON.parse(JSON.stringify(m[e])))})),L.value=r}},q=i(!1),G=i(!1),K=i(""),Q=i(!1),W=()=>{Q.value?G.value||q.value||(q.value=!0,clearTimeout(K.value),K.value=setTimeout((()=>{B.page++,$(!0)}),100)):Q.value=!0},X=e=>{V.value=e},Z=e=>{V.value=!1,O.value.onConfirm(e)},ee=e=>{if(e)if((e||"").includes("/")){const[a,s]=e.split("-"),t=a.replaceAll("/","-"),l=s.replaceAll("/","-");B.startDate=t+" 00:00:00",B.endDate=l+" 23:59:59"}else B.startDate=s().format("YYYY-MM-DD HH:mm:ss"),B.endDate=s().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else B.startDate="",B.endDate="";G.value=!1,B.page=1,$()},ae=a=>{A.value=!0,B.gameType=a,G.value=!1,B.page=1,z.gameType=a,e.dispatch("home/initTimeDataInfo",z),$()},se=()=>{B.page=1,B.gameType="FT"};return v((()=>{$(),e.dispatch("home/initTimeDataInfo",z)})),(e,a)=>{const s=c("van-sticky"),t=c("HomeMatchHandicap"),l=c("HomeEmpty"),o=c("Loading"),u=c("van-list"),m=c("SportsTabs"),r=c("van-pull-refresh"),i=c("FooterHeight"),d=c("van-calendar");return f(),D("div",{ref_key:"newContainer",ref:R,class:"homeTime-page"},[Y(r,{modelValue:I.value,"onUpdate:modelValue":a[1]||(a[1]=e=>I.value=e),onRefresh:J},{default:g((()=>[Y(m,{ref_key:"refSportsTabs",ref:F,class:"pb10","if-count-num":!1,onReturnSportsSuccess:ae},{body:g((()=>[h("div",w,["HomeTime"===y(j)?(f(),T(y(k),{key:0,ref_key:"refTimeTabs",ref:O,onReturnTimeSuccess:ee,onDateShow:X},null,512)):M("",!0),Y(u,{modelValue:q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value=e),finished:G.value,"finished-text":e.$t("live.noMore"),onLoad:W},{default:g((()=>[A.value?(f(),D(H,{key:0},[(f(!0),D(H,null,_(L.value,((e,a)=>(f(),D(H,{key:a},[Y(s,{"offset-top":y(x),container:R.value,"z-index":"8",class:b({mt10:0!==a})},{default:g((()=>[Y(n,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(f(!0),D(H,null,_(e.list,((e,a)=>(f(),T(t,{"play-title-toggle":!1,"send-params":e,class:b({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128)),L.value.length?M("",!0):(f(),T(l,{key:0}))],64)):M("",!0),!A.value||q.value?(f(),T(o,{key:1,class:b({"new_loading mt10":q.value})},null,8,["class"])):M("",!0)])),_:1},8,["modelValue","finished","finished-text"])])])),_:1},512)])),_:1},8,["modelValue"]),Y(i),Y(d,{show:V.value,"onUpdate:show":a[2]||(a[2]=e=>V.value=e),type:"range",onConfirm:Z},null,8,["show"])],512)}}});k.__scopeId="data-v-9a791f6a";export{k as default};
