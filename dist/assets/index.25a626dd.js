import{u as e,D as a,s as l,r as t,x as s,y as u,j as o}from"./index.0914b2ad.js";import{s as n,d as r,r as i,o as v,R as m,P as c,F as d,S as p,_ as f,W as g,q as T,n as y,Y,Z as h,b as D,w as _,e as b,M,O as S,u as k,c as H,$ as x}from"./vue.97c0c246.js";import{_ as w}from"./index.vue_vue_type_script_setup_true_lang.a594f095.js";const C=["onClick"],F=[(e=>(Y("data-v-62aff50e"),e=e(),h(),e))((()=>c("i",{class:"iconfont icon-timeMore"},null,-1)))];var R=n({emits:["returnTimeSuccess"],setup(l,{expose:t,emit:s}){const{t:u}=e(),o=r([{text:u("sport.all"),defaultToggle:!0,values:""},{text:u("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:u("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:u("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),n=r(""),Y=r(!1),h=e=>{const[l,t]=e;Y.value=!1;const u=o.value.filter((e=>e.defaultToggle)),r=`${a(l).format("YYYY/MM/DD")} - ${a(t).format("YYYY/MM/DD")}`;o.value=[...u,{text:r,values:r}],n.value=r,s("returnTimeSuccess",n.value),y((()=>{var e,a;null==(a=_.value)||a.scrollTo(null==(e=b.value)?void 0:e.clientWidth,0)}))},D=()=>{Y.value=!0};t({active:n});const _=r(),b=r();return(e,a)=>{const l=i("van-calendar");return v(),m(d,null,[c("div",{ref_key:"refHomeTime",ref:_,class:"homeTime-Time-Tabs pb10"},[c("div",{ref_key:"refHomeTimePage",ref:b,class:"homeTime-TimePage"},[(v(!0),m(d,null,p(o.value,((e,a)=>(v(),m("div",{key:a,class:f(["item",{active:e.values===n.value}]),onClick:a=>(e=>{n.value=e.values,s("returnTimeSuccess",n.value)})(e)},g(e.text),11,C)))),128)),c("div",{class:"more",onClick:D},F)],512)],512),T(l,{show:Y.value,"onUpdate:show":a[0]||(a[0]=e=>Y.value=e),type:"range",onConfirm:h},null,8,["show"])],64)}}});R.__scopeId="data-v-62aff50e";const V={class:"mt10"};var j=n({setup(e){const n=D((()=>l.state.user.scrollNumY)),g=D((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),y=r(null),Y=D((()=>{var e,a,l;return(null==(l=null==(a=null==(e=t)?void 0:e.currentRoute)?void 0:a.value)?void 0:l.name)||""})),h=D((()=>l.state.home.refreshChangeTime)),C=r(""),F=r();_(h,(e=>{var a;e&&(null==(a=F.value)||a.resetParams(),clearTimeout(C.value),C.value=setTimeout((async()=>{await K(),await U()}),100))})),_((()=>n.value),(e=>{e>88&&(F.value.ifAnimated=!1)}));const j=r(!1),N=r(!1),O=r([]);(async()=>{var e;const a=await s({showType:"FT"});if(200===(null==a?void 0:a.code)&&(null==a?void 0:a.data)){const l=(null==(e=a.data)?void 0:e.stResult)||[];O.value=l.map((e=>({gameType:e.gameType,gameCount:1*e.num})))}})();const P=b({gameTypeSon:"",showtype:"FT",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:"",onlyFavorite:0,page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===Y.value&&(P.startDate=a().format("YYYY-MM-DD")+" 00:00:00",P.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const $=r([]),z=r([]),A=r(0),I=(e=!1,a="")=>{a?J.value=!e:j.value=e},L=()=>{N.value=!1,j.value=!0,W.value=!1,P.page=1,U()},U=async(e="")=>{I(!1,e);const a=await u(P);if(I(!0,e),200===a.code){const l=(null==a?void 0:a.data)||{},{baseData:t,total:s}=null==l?void 0:l.matchList;A.value=s;const{pageSize:u,page:n}=P;e?W.value=!(u*n<s):($.value=[],z.value=[]),z.value.push(...t);const r={},i=[];z.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=o(e.gameDate).format("YYYY/MM/DD");r[a]?r[a].list.push(e):r[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(r).map((e=>{i.push(JSON.parse(JSON.stringify(r[e])))})),$.value=i}},J=r(!1),W=r(!1),q=r(""),B=r(!1),E=()=>{B.value?W.value||J.value||(J.value=!0,clearTimeout(q.value),q.value=setTimeout((()=>{P.page++,U(!0)}),100)):B.value=!0},Z=e=>{if(e)if((e||"").includes("/")){const[a,l]=e.split("-"),t=a.replaceAll("/","-"),s=l.replaceAll("/","-");P.startDate=t+" 00:00:00",P.endDate=s+" 23:59:59"}else P.startDate=a().format("YYYY-MM-DD HH:mm:ss"),P.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else P.startDate="",P.endDate="";W.value=!1,P.page=1,U()},G=e=>{j.value=!0,P.gameType=e,W.value=!1,P.page=1,U()},K=()=>{P.page=1,P.gameType="FT"};return M((()=>{U()})),(e,a)=>{const l=i("van-sticky"),t=i("HomeMatchHandicap"),s=i("HomeEmpty"),u=i("Loading"),o=i("van-list"),n=i("van-pull-refresh"),r=i("FooterHeight"),h=i("SportsTabs");return v(),m("div",{class:"homeTime-page",ref_key:"newContainer",ref:y},[T(h,{ref_key:"refSportsTabs",ref:F,class:"pb10",isCustom:!0,tabs:O.value,onReturnSportsSuccess:G},{body:S((()=>[c("div",V,["HomeTime"===k(Y)?(v(),H(R,{key:0,onReturnTimeSuccess:Z})):x("",!0),T(n,{modelValue:N.value,"onUpdate:modelValue":a[1]||(a[1]=e=>N.value=e),onRefresh:L},{default:S((()=>[T(o,{modelValue:J.value,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value=e),finished:W.value,"finished-text":e.$t("live.noMore"),onLoad:E},{default:S((()=>[j.value?(v(),m(d,{key:0},[(v(!0),m(d,null,p($.value,((e,a)=>(v(),m(d,{key:a},[T(l,{"offset-top":k(g),container:y.value,"z-index":"5",class:f({mt10:0!==a})},{default:S((()=>[T(w,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(v(!0),m(d,null,p(e.list,((e,a)=>(v(),H(t,{key:a,"play-title-toggle":!1,"send-params":e,class:f({mt10:0!==a})},null,8,["send-params","class"])))),128))],64)))),128)),$.value.length?x("",!0):(v(),H(s,{key:0}))],64)):x("",!0),!j.value||J.value?(v(),H(u,{key:1,class:f({"new_loading mt10":J.value})},null,8,["class"])):x("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),T(r)])])),_:1},8,["tabs"])],512)}}});j.__scopeId="data-v-58d31579";export{j as default};
