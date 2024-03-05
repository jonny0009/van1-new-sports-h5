import{u as e,U as a,s as l,w as s,h as t}from"./index.fc31865d.js";import{s as u,d as o,r as n,o as r,S as i,P as v,F as m,_ as c,Z as d,V as p,q as f,n as g,X as T,Y,b as h,w as D,e as y,M,O as b,u as S,c as k,$ as H}from"./vue.7833d4f2.js";import{_,c as x}from"./index.e43d5b53.js";const w=["onClick"],V=[(e=>(T("data-v-62aff50e"),e=e(),Y(),e))((()=>v("i",{class:"iconfont icon-timeMore"},null,-1)))];var C=u({emits:["returnTimeSuccess"],setup(l,{expose:s,emit:t}){const{t:u}=e(),T=o([{text:u("sport.all"),defaultToggle:!0,values:""},{text:u("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:u("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:u("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),Y=o(""),h=o(!1),D=e=>{const[l,s]=e;h.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(l).format("YYYY/MM/DD")} - ${a(s).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],Y.value=o,t("returnTimeSuccess",Y.value),g((()=>{var e,a;null==(a=M.value)||a.scrollTo(null==(e=b.value)?void 0:e.clientWidth,0)}))},y=()=>{h.value=!0};s({active:Y});const M=o(),b=o();return(e,a)=>{const l=n("van-calendar");return r(),i(m,null,[v("div",{ref_key:"refHomeTime",ref:M,class:"homeTime-Time-Tabs pb10"},[v("div",{ref_key:"refHomeTimePage",ref:b,class:"homeTime-TimePage"},[(r(!0),i(m,null,c(T.value,((e,a)=>(r(),i("div",{key:a,class:d(["item",{active:e.values===Y.value}]),onClick:a=>(e=>{Y.value=e.values,t("returnTimeSuccess",Y.value)})(e)},p(e.text),11,w)))),128)),v("div",{class:"more",onClick:y},V)],512)],512),f(l,{show:h.value,"onUpdate:show":a[0]||(a[0]=e=>h.value=e),type:"range",onConfirm:D},null,8,["show"])],64)}}});C.__scopeId="data-v-62aff50e";const F={class:"mt10"};var j=u({setup(e){const u=h((()=>l.state.user.scrollNumY)),p=h((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),g=o(null),T=h((()=>{var e,a,l;return(null==(l=null==(a=null==(e=s)?void 0:e.currentRoute)?void 0:a.value)?void 0:l.name)||""})),Y=h((()=>l.state.home.refreshChangeTime)),w=o(""),V=o();D(Y,(e=>{var a;e&&(null==(a=V.value)||a.resetParams(),clearTimeout(w.value),w.value=setTimeout((async()=>{await X(),await A()}),100))})),D((()=>u.value),(e=>{e>88&&(V.value.ifAnimated=!1)}));const j=o(!1),N=o(!1),O=y({gameTypeSon:"",showtype:"FT",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:"",onlyFavorite:0,page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===T.value&&(O.startDate=a().format("YYYY-MM-DD")+" 00:00:00",O.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const P=o([]),R=o([]),U=o(0),$=(e=!1,a="")=>{a?I.value=!e:j.value=e},z=()=>{N.value=!1,j.value=!0,L.value=!1,O.page=1,A()},A=async(e="")=>{$(!1,e);const a=await x(O);if($(!0,e),200===a.code){const l=(null==a?void 0:a.data)||{},{baseData:s,total:u}=null==l?void 0:l.matchList;U.value=u;const{pageSize:o,page:n}=O;e?L.value=!(o*n<u):(P.value=[],R.value=[]),R.value.push(...s);const r={},i=[];R.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=t(e.gameDate).format("YYYY/MM/DD");r[a]?r[a].list.push(e):r[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(r).map((e=>{i.push(JSON.parse(JSON.stringify(r[e])))})),P.value=i}},I=o(!1),L=o(!1),J=o(""),q=o(!1),B=()=>{q.value?L.value||I.value||(I.value=!0,clearTimeout(J.value),J.value=setTimeout((()=>{O.page++,A(!0)}),100)):q.value=!0},E=e=>{if(e)if((e||"").includes("/")){const[a,l]=e.split("-"),s=a.replaceAll("/","-"),t=l.replaceAll("/","-");O.startDate=s+" 00:00:00",O.endDate=t+" 23:59:59"}else O.startDate=a().format("YYYY-MM-DD HH:mm:ss"),O.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else O.startDate="",O.endDate="";L.value=!1,O.page=1,A()},W=e=>{j.value=!0,O.gameType=e,L.value=!1,O.page=1,A()},X=()=>{O.page=1,O.gameType="FT"};return M((()=>{A()})),(e,a)=>{const l=n("van-sticky"),s=n("HomeMatchHandicap"),t=n("HomeEmpty"),u=n("Loading"),o=n("van-list"),Y=n("van-pull-refresh"),h=n("FooterHeight"),D=n("SportsTabs");return r(),i("div",{class:"homeTime-page",ref_key:"newContainer",ref:g},[f(D,{ref_key:"refSportsTabs",ref:V,class:"pb10",onReturnSportsSuccess:W},{body:b((()=>[v("div",F,["HomeTime"===S(T)?(r(),k(C,{key:0,onReturnTimeSuccess:E})):H("",!0),f(Y,{modelValue:N.value,"onUpdate:modelValue":a[1]||(a[1]=e=>N.value=e),onRefresh:z},{default:b((()=>[f(o,{modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e),finished:L.value,"finished-text":e.$t("live.noMore"),onLoad:B},{default:b((()=>[j.value?(r(),i(m,{key:0},[(r(!0),i(m,null,c(P.value,((e,a)=>(r(),i(m,{key:a},[f(l,{"offset-top":S(p),container:g.value,"z-index":"500",class:d({mt10:0!==a})},{default:b((()=>[f(_,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(r(!0),i(m,null,c(e.list,((e,a)=>(r(),k(s,{"play-title-toggle":!1,"send-params":e,class:d({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128)),P.value.length?H("",!0):(r(),k(t,{key:0}))],64)):H("",!0),!j.value||I.value?(r(),k(u,{key:1,class:d({"new_loading mt10":I.value})},null,8,["class"])):H("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),f(h)])])),_:1},512)],512)}}});j.__scopeId="data-v-49655ddc";export{j as default};
