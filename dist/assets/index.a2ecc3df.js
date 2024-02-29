import{u as e,O as a,s as l,m as s}from"./index.f3c846fa.js";import{s as t,d as u,r as o,o as n,S as r,P as m,F as i,Z as v,_ as c,V as d,q as p,n as f,X as g,Y as T,b as h,w as D,e as Y,M as y,O as b,u as M,c as k,a0 as H}from"./vue.6c3ce548.js";import{_,r as x}from"./index.e0e2e3f9.js";import{h as S}from"./moment.40bc58bf.js";const w=["onClick"],C=[(e=>(g("data-v-6cd1b40a"),e=e(),T(),e))((()=>m("i",{class:"iconfont icon-timeMore"},null,-1)))];var V=t({emits:["returnTimeSuccess"],setup(l,{expose:s,emit:t}){const{t:g}=e(),T=u([{text:g("sport.all"),defaultToggle:!0,values:""},{text:g("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:g("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:g("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),h=u(""),D=u(!1),Y=e=>{const[l,s]=e;D.value=!1;const u=T.value.filter((e=>e.defaultToggle)),o=`${a(l).format("YYYY/MM/DD")} - ${a(s).format("YYYY/MM/DD")}`;T.value=[...u,{text:o,values:o}],h.value=o,t("returnTimeSuccess",h.value),f((()=>{var e,a;null==(a=b.value)||a.scrollTo(null==(e=M.value)?void 0:e.clientWidth,0)}))},y=()=>{D.value=!0};s({active:h});const b=u(),M=u();return(e,a)=>{const l=o("van-calendar");return n(),r(i,null,[m("div",{ref_key:"refHomeTime",ref:b,class:"homeTime-Time-Tabs pb10"},[m("div",{ref_key:"refHomeTimePage",ref:M,class:"homeTime-TimePage"},[(n(!0),r(i,null,v(T.value,((e,a)=>(n(),r("div",{key:a,class:c(["item",{active:e.values===h.value}]),onClick:a=>(e=>{h.value=e.values,t("returnTimeSuccess",h.value)})(e)},d(e.text),11,w)))),128)),m("div",{class:"more",onClick:y},C)],512)],512),p(l,{show:D.value,"onUpdate:show":a[0]||(a[0]=e=>D.value=e),type:"range",onConfirm:Y},null,8,["show"])],64)}}});V.__scopeId="data-v-6cd1b40a";const j={class:"homeTime-page"};var O=t({setup(e){const t=h((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),d=u(null),f=h((()=>{var e,a,l;return(null==(l=null==(a=null==(e=s)?void 0:e.currentRoute)?void 0:a.value)?void 0:l.name)||""})),g=h((()=>l.state.home.refreshChangeTime)),T=u(""),w=u();D(g,(e=>{var a;e&&(null==(a=w.value)||a.resetParams(),clearTimeout(T.value),T.value=setTimeout((async()=>{await W(),await A()}),100))}));const C=u(!1),O=u(!1),R=Y({page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===f.value&&(R.startDate=a().format("YYYY-MM-DD")+" 00:00:00",R.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const F=u([]),P=u([]),z=u(0),U=(e=!1,a="")=>{a?I.value=!e:C.value=e},$=()=>{O.value=!1,l.dispatch("home/setRefreshChangeTime",(new Date).getTime())},A=async(e="")=>{U(!1,e);const a=await x(R);if(U(!0,e),200===a.code){const l=(null==a?void 0:a.data)||{},{baseData:s,total:t}=l;z.value=t;const{pageSize:u,page:o}=R;e?J.value=!(u*o<t):(F.value=[],P.value=[]),P.value.push(...s);const n={},r=[];P.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=S(e.gameDate).format("YYYY/MM/DD");n[a]?n[a].list.push(e):n[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(n).map((e=>{r.push(JSON.parse(JSON.stringify(n[e])))})),F.value=r}},I=u(!1),J=u(!1),L=u(""),N=u(!1),q=()=>{N.value?J.value||I.value||(I.value=!0,clearTimeout(L.value),L.value=setTimeout((()=>{R.page++,A(!0)}),100)):N.value=!0},B=e=>{if(e)if((e||"").includes("/")){const[a,l]=e.split("-"),s=a.replaceAll("/","-"),t=l.replaceAll("/","-");R.startDate=s+" 00:00:00",R.endDate=t+" 23:59:59"}else R.startDate=a().format("YYYY-MM-DD HH:mm:ss"),R.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else R.startDate="",R.endDate="";J.value=!1,R.page=1,A()},E=e=>{C.value=!0,R.gameType=e,J.value=!1,R.page=1,A()},W=()=>{R.page=1,R.gameType="FT"};return y((()=>{A()})),(e,a)=>{const l=o("SportsTabs"),s=o("van-sticky"),u=o("HomeMatchHandicap"),g=o("HomeEmpty"),T=o("Loading"),h=o("van-list"),D=o("van-pull-refresh"),Y=o("FooterHeight");return n(),r("div",j,[p(D,{modelValue:O.value,"onUpdate:modelValue":a[1]||(a[1]=e=>O.value=e),onRefresh:$},{default:b((()=>[p(l,{ref_key:"refSportsTabs",ref:w,class:"pb10",onReturnSportsSuccess:E},null,512),"HomeTime"===M(f)?(n(),k(V,{key:0,onReturnTimeSuccess:B})):H("",!0),p(h,{modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e),finished:J.value,"finished-text":e.$t("live.noMore"),onLoad:q},{default:b((()=>[C.value?(n(),r(i,{key:0},[m("div",{ref_key:"newContainer",ref:d},[(n(!0),r(i,null,v(F.value,((e,a)=>(n(),r(i,{key:a},[p(s,{"offset-top":M(t),container:d.value,"z-index":"8",class:c({mt10:0!==a})},{default:b((()=>[p(_,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(n(!0),r(i,null,v(e.list,((e,a)=>(n(),k(u,{"play-title-toggle":!1,"send-params":e,class:c({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128))],512),F.value.length?H("",!0):(n(),k(g,{key:0}))],64)):H("",!0),!C.value||I.value?(n(),k(T,{key:1,class:c({"new_loading mt10":I.value})},null,8,["class"])):H("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),p(Y)])}}});O.__scopeId="data-v-560dfcaa";export{O as default};
