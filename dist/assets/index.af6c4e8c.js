import{u as e,V as a,s as l,w as s,h as t}from"./index.c8c237af.js";import{s as u,d as o,o as n,S as r,P as i,F as m,_ as v,Z as c,V as d,n as f,X as p,Y as g,b as T,w as h,e as D,M as Y,r as y,q as M,O as b,u as k,c as S,$ as _}from"./vue.7833d4f2.js";import{_ as H,r as w}from"./index.6ed22f11.js";const x=["onClick"],C=[(e=>(p("data-v-540777cd"),e=e(),g(),e))((()=>i("i",{class:"iconfont icon-timeMore"},null,-1)))];var V=u({emits:["returnTimeSuccess","DateShow"],setup(l,{expose:s,emit:t}){const{t:u}=e(),p=o([{text:u("sport.all"),defaultToggle:!0,values:""},{text:u("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:u("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:u("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),g=o(""),T=()=>{t("DateShow",!0)};s({active:g,onConfirm:e=>{const[l,s]=e,u=p.value.filter((e=>e.defaultToggle)),o=`${a(l).format("YYYY/MM/DD")} - ${a(s).format("YYYY/MM/DD")}`;p.value=[...u,{text:o,values:o}],g.value=o,t("returnTimeSuccess",g.value),f((()=>{var e,a;null==(a=h.value)||a.scrollTo(null==(e=D.value)?void 0:e.clientWidth,0)}))}});const h=o(),D=o();return(e,a)=>(n(),r("div",{ref_key:"refHomeTime",ref:h,class:"homeTime-Time-Tabs pb10"},[i("div",{ref_key:"refHomeTimePage",ref:D,class:"homeTime-TimePage"},[(n(!0),r(m,null,v(p.value,((e,a)=>(n(),r("div",{key:a,class:c(["item",{active:e.values===g.value}]),onClick:a=>(e=>{g.value=e.values,t("returnTimeSuccess",g.value)})(e)},d(e.text),11,x)))),128)),i("div",{class:"more",onClick:T},C)],512)],512))}});V.__scopeId="data-v-540777cd";const R={class:"mt10"};var j=u({setup(e){const u=T((()=>l.state.user.scrollNumY)),d=T((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),f=o(null),p=o(!1),g=T((()=>{var e,a,l;return(null==(l=null==(a=null==(e=s)?void 0:e.currentRoute)?void 0:a.value)?void 0:l.name)||""})),x=T((()=>l.state.home.refreshChangeTime)),C=o(""),j=o(),F=o();h((()=>u.value),(e=>{e>88&&(j.value.ifAnimated=!1)})),h(x,(e=>{var a;e&&(null==(a=j.value)||a.resetParams(),clearTimeout(C.value),C.value=setTimeout((async()=>{await Q(),await J()}),100))}));const O=o(!1),P=o(!1),$=D({page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===g.value&&($.startDate=a().format("YYYY-MM-DD")+" 00:00:00",$.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const z=o([]),A=o([]),N=o(0),U=(e=!1,a="")=>{a?L.value=!e:O.value=e},I=()=>{P.value=!1,l.dispatch("home/setRefreshChangeTime",(new Date).getTime())},J=async(e="")=>{U(!1,e);const a=await w($);if(U(!0,e),200===a.code){const l=(null==a?void 0:a.data)||{},{baseData:s,total:u}=l;N.value=u;const{pageSize:o,page:n}=$;e?q.value=!(o*n<u):(z.value=[],A.value=[]),A.value.push(...s);const r={},i=[];A.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=t(e.gameDate).format("YYYY/MM/DD");r[a]?r[a].list.push(e):r[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(r).map((e=>{i.push(JSON.parse(JSON.stringify(r[e])))})),z.value=i}},L=o(!1),q=o(!1),B=o(""),E=o(!1),W=()=>{E.value?q.value||L.value||(L.value=!0,clearTimeout(B.value),B.value=setTimeout((()=>{$.page++,J(!0)}),100)):E.value=!0},X=e=>{p.value=e},Z=e=>{p.value=!1,F.value.onConfirm(e)},G=e=>{if(e)if((e||"").includes("/")){const[a,l]=e.split("-"),s=a.replaceAll("/","-"),t=l.replaceAll("/","-");$.startDate=s+" 00:00:00",$.endDate=t+" 23:59:59"}else $.startDate=a().format("YYYY-MM-DD HH:mm:ss"),$.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else $.startDate="",$.endDate="";q.value=!1,$.page=1,J()},K=e=>{O.value=!0,$.gameType=e,q.value=!1,$.page=1,J()},Q=()=>{$.page=1,$.gameType="FT"};return Y((()=>{J()})),(e,a)=>{const l=y("van-sticky"),s=y("HomeMatchHandicap"),t=y("HomeEmpty"),u=y("Loading"),o=y("van-list"),T=y("SportsTabs"),h=y("van-pull-refresh"),D=y("FooterHeight"),Y=y("van-calendar");return n(),r("div",{class:"homeTime-page",ref_key:"newContainer",ref:f},[M(h,{modelValue:P.value,"onUpdate:modelValue":a[1]||(a[1]=e=>P.value=e),onRefresh:I},{default:b((()=>[M(T,{ref_key:"refSportsTabs",ref:j,class:"pb10",onReturnSportsSuccess:K},{body:b((()=>[i("div",R,["HomeTime"===k(g)?(n(),S(V,{key:0,ref_key:"refTimeTabs",ref:F,onReturnTimeSuccess:G,onDateShow:X},null,512)):_("",!0),M(o,{modelValue:L.value,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value=e),finished:q.value,"finished-text":e.$t("live.noMore"),onLoad:W},{default:b((()=>[O.value?(n(),r(m,{key:0},[(n(!0),r(m,null,v(z.value,((e,a)=>(n(),r(m,{key:a},[M(l,{"offset-top":k(d),container:f.value,"z-index":"8",class:c({mt10:0!==a})},{default:b((()=>[M(H,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(n(!0),r(m,null,v(e.list,((e,a)=>(n(),S(s,{"play-title-toggle":!1,"send-params":e,class:c({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128)),z.value.length?_("",!0):(n(),S(t,{key:0}))],64)):_("",!0),!O.value||L.value?(n(),S(u,{key:1,class:c({"new_loading mt10":L.value})},null,8,["class"])):_("",!0)])),_:1},8,["modelValue","finished","finished-text"])])])),_:1},512)])),_:1},8,["modelValue"]),M(D),M(Y,{show:p.value,"onUpdate:show":a[2]||(a[2]=e=>p.value=e),type:"range",onConfirm:Z},null,8,["show"])],512)}}});j.__scopeId="data-v-a0e474ea";export{j as default};
