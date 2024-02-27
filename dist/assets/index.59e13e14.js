import{u as e,D as a,s as t,m as l}from"./index.672159d4.js";import{s,d as u,r as o,o as n,S as r,P as m,F as i,Z as v,_ as c,V as d,q as p,n as f,X as g,Y as T,b as h,w as D,e as Y,M as y,u as b,c as M,a0 as S,O as k}from"./vue.6c3ce548.js";import{_ as H,c as _}from"./index.3b1019cd.js";import{h as x}from"./moment.40bc58bf.js";const w=["onClick"],C=[(e=>(g("data-v-62aff50e"),e=e(),T(),e))((()=>m("i",{class:"iconfont icon-timeMore"},null,-1)))];var V=s({emits:["returnTimeSuccess"],setup(t,{expose:l,emit:s}){const{t:g}=e(),T=u([{text:g("sport.all"),defaultToggle:!0,values:""},{text:g("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:g("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:g("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),h=u(""),D=u(!1),Y=e=>{const[t,l]=e;D.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(t).format("YYYY/MM/DD")} - ${a(l).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],h.value=o,s("returnTimeSuccess",h.value),f((()=>{var e,a;null==(a=b.value)||a.scrollTo(null==(e=M.value)?void 0:e.clientWidth,0)}))},y=()=>{D.value=!0};l({active:h});const b=u(),M=u();return(e,a)=>{const t=o("van-calendar");return n(),r(i,null,[m("div",{ref_key:"refHomeTime",ref:b,class:"homeTime-Time-Tabs pb10"},[m("div",{ref_key:"refHomeTimePage",ref:M,class:"homeTime-TimePage"},[(n(!0),r(i,null,v(T.value,((e,a)=>(n(),r("div",{key:a,class:c(["item",{active:e.values===h.value}]),onClick:a=>(e=>{h.value=e.values,s("returnTimeSuccess",h.value)})(e)},d(e.text),11,w)))),128)),m("div",{class:"more",onClick:y},C)],512)],512),p(t,{show:D.value,"onUpdate:show":a[0]||(a[0]=e=>D.value=e),type:"range",onConfirm:Y},null,8,["show"])],64)}}});V.__scopeId="data-v-62aff50e";const F={class:"homeTime-page"};var j=s({setup(e){const s=h((()=>{const e=t.state.app.globalBarHeaderHeight||48;return e>60?48:e})),d=u(null),f=h((()=>{var e,a,t;return(null==(t=null==(a=null==(e=l)?void 0:e.currentRoute)?void 0:a.value)?void 0:t.name)||""})),g=h((()=>t.state.home.refreshChangeTime)),T=u(""),w=u();D(g,(e=>{var a;e&&(null==(a=w.value)||a.resetParams(),clearTimeout(T.value),T.value=setTimeout((async()=>{await W(),await N()}),100))}));const C=u(!1),j=u(!1),R=Y({gameTypeSon:"",showtype:"FT",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:"",onlyFavorite:0,page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===f.value&&(R.startDate=a().format("YYYY-MM-DD")+" 00:00:00",R.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const O=u([]),P=u([]),z=u(0),I=(e=!1,a="")=>{a?U.value=!e:C.value=e},L=()=>{j.value=!1,t.dispatch("home/setRefreshChangeTime",(new Date).getTime())},N=async(e="")=>{I(!1,e);const a=await _(R);if(I(!0,e),200===a.code){const t=(null==a?void 0:a.data)||{},{baseData:l,total:s}=null==t?void 0:t.matchList;z.value=s;const{pageSize:u,page:o}=R;e?$.value=!(u*o<s):(O.value=[],P.value=[]),P.value.push(...l);const n={},r=[];P.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=x(e.gameDate).format("YYYY/MM/DD");n[a]?n[a].list.push(e):n[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(n).map((e=>{r.push(JSON.parse(JSON.stringify(n[e])))})),O.value=r}},U=u(!1),$=u(!1),A=u(""),J=u(!1),q=()=>{J.value?$.value||U.value||(U.value=!0,clearTimeout(A.value),A.value=setTimeout((()=>{R.page++,N(!0)}),100)):J.value=!0},B=e=>{if(e)if((e||"").includes("/")){const[a,t]=e.split("-"),l=a.replaceAll("/","-"),s=t.replaceAll("/","-");R.startDate=l+" 00:00:00",R.endDate=s+" 23:59:59"}else R.startDate=a().format("YYYY-MM-DD HH:mm:ss"),R.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else R.startDate="",R.endDate="";$.value=!1,R.page=1,N()},E=e=>{C.value=!0,R.gameType=e,$.value=!1,R.page=1,N()},W=()=>{R.page=1,R.gameType="FT"};return y((()=>{N()})),(e,a)=>{const t=o("SportsTabs"),l=o("van-sticky"),u=o("HomeMatchHandicap"),g=o("HomeEmpty"),T=o("Loading"),h=o("van-list"),D=o("van-pull-refresh"),Y=o("FooterHeight");return n(),r("div",F,[p(t,{ref_key:"refSportsTabs",ref:w,class:"pb10",onReturnSportsSuccess:E},null,512),"HomeTime"===b(f)?(n(),M(V,{key:0,onReturnTimeSuccess:B})):S("",!0),p(D,{modelValue:j.value,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value=e),onRefresh:L},{default:k((()=>[p(h,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),finished:$.value,"finished-text":e.$t("live.noMore"),onLoad:q},{default:k((()=>[C.value?(n(),r(i,{key:0},[m("div",{ref_key:"newContainer",ref:d},[(n(!0),r(i,null,v(O.value,((e,a)=>(n(),r(i,{key:a},[p(l,{"offset-top":b(s),container:d.value,"z-index":"5",class:c({mt10:0!==a})},{default:k((()=>[p(H,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(n(!0),r(i,null,v(e.list,((e,a)=>(n(),M(u,{"play-title-toggle":!1,"send-params":e,class:c({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128))],512),O.value.length?S("",!0):(n(),M(g,{key:0}))],64)):S("",!0),!C.value||U.value?(n(),M(T,{key:1,class:c({"new_loading mt10":U.value})},null,8,["class"])):S("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),p(Y)])}}});j.__scopeId="data-v-52dc5da6";export{j as default};
