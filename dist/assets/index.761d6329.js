import{u as e,D as a,s as t,r as s,A as l,B as u,j as o}from"./index.c84abd34.js";import{s as n,d as r,r as m,o as i,R as v,P as c,F as d,S as p,_ as f,W as g,q as T,n as y,Y,Z as h,b as D,w as _,e as b,M,O as S,u as k,c as H,$ as x}from"./vue.16414fe4.js";import{_ as w}from"./index.vue_vue_type_script_setup_true_lang.1b9acf36.js";const C=["onClick"],F=[(e=>(Y("data-v-62aff50e"),e=e(),h(),e))((()=>c("i",{class:"iconfont icon-timeMore"},null,-1)))];var R=n({emits:["returnTimeSuccess"],setup(t,{expose:s,emit:l}){const{t:u}=e(),o=r([{text:u("sport.all"),defaultToggle:!0,values:""},{text:u("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:u("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:u("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),n=r(""),Y=r(!1),h=e=>{const[t,s]=e;Y.value=!1;const u=o.value.filter((e=>e.defaultToggle)),r=`${a(t).format("YYYY/MM/DD")} - ${a(s).format("YYYY/MM/DD")}`;o.value=[...u,{text:r,values:r}],n.value=r,l("returnTimeSuccess",n.value),y((()=>{_.value?.scrollTo(b.value?.clientWidth,0)}))},D=()=>{Y.value=!0};s({active:n});const _=r(),b=r();return(e,a)=>{const t=m("van-calendar");return i(),v(d,null,[c("div",{ref_key:"refHomeTime",ref:_,class:"homeTime-Time-Tabs pb10"},[c("div",{ref_key:"refHomeTimePage",ref:b,class:"homeTime-TimePage"},[(i(!0),v(d,null,p(o.value,((e,a)=>(i(),v("div",{key:a,class:f(["item",{active:e.values===n.value}]),onClick:a=>(e=>{n.value=e.values,l("returnTimeSuccess",n.value)})(e)},g(e.text),11,C)))),128)),c("div",{class:"more",onClick:D},F)],512)],512),T(t,{show:Y.value,"onUpdate:show":a[0]||(a[0]=e=>Y.value=e),type:"range",onConfirm:h},null,8,["show"])],64)}}});R.__scopeId="data-v-62aff50e";const V={class:"mt10"};var j=n({setup(e){const n=D((()=>t.state.user.scrollNumY)),g=D((()=>{const e=t.state.app.globalBarHeaderHeight||48;return e>60?48:e})),y=r(null),Y=D((()=>s?.currentRoute?.value?.name||"")),h=D((()=>t.state.home.refreshChangeTime)),C=r(""),F=r();_(h,(e=>{e&&(F.value?.resetParams(),clearTimeout(C.value),C.value=setTimeout((async()=>{await K(),await U()}),100))})),_((()=>n.value),(e=>{e>88&&(F.value.ifAnimated=!1)}));const j=r(!1),A=r(!1),N=r([]);(async()=>{const e=await l({showType:"FT"});if(200===e?.code&&e?.data){const a=e.data?.stResult||[];N.value=a.map((e=>({gameType:e.gameType,gameCount:1*e.num})))}})();const O=b({gameTypeSon:"",showtype:"FT",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:"",onlyFavorite:0,page:1,pageSize:5,gradeType:2,gameType:"FT"});"sportToday"===Y.value&&(O.startDate=a().format("YYYY-MM-DD")+" 00:00:00",O.endDate=a().format("YYYY-MM-DD")+" 23:59:59");const P=r([]),$=r([]),z=r(0),I=(e=!1,a="")=>{a?B.value=!e:j.value=e},L=()=>{A.value=!1,j.value=!0,J.value=!1,O.page=1,U()},U=async(e="")=>{I(!1,e);const a=await u(O);if(I(!0,e),200===a.code){const t=a?.data||{},{baseData:s,total:l}=t?.matchList;z.value=l;const{pageSize:u,page:n}=O;e?J.value=!(u*n<l):(P.value=[],$.value=[]),$.value.push(...s);const r={},m=[];$.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=o(e.gameDate).format("YYYY/MM/DD");r[a]?r[a].list.push(e):r[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(r).map((e=>{m.push(JSON.parse(JSON.stringify(r[e])))})),P.value=m}},B=r(!1),J=r(!1),W=r(""),q=r(!1),E=()=>{q.value?J.value||B.value||(B.value=!0,clearTimeout(W.value),W.value=setTimeout((()=>{O.page++,U(!0)}),100)):q.value=!0},Z=e=>{if(e)if((e||"").includes("/")){const[a,t]=e.split("-"),s=a.replaceAll("/","-"),l=t.replaceAll("/","-");O.startDate=s+" 00:00:00",O.endDate=l+" 23:59:59"}else O.startDate=a().format("YYYY-MM-DD HH:mm:ss"),O.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else O.startDate="",O.endDate="";J.value=!1,O.page=1,U()},G=e=>{j.value=!0,O.gameType=e,"all"===e&&(O.gameType=""),J.value=!1,O.page=1,U()},K=()=>{O.page=1,O.gameType="FT"};return M((()=>{U()})),(e,a)=>{const t=m("van-sticky"),s=m("HomeMatchHandicap"),l=m("HomeEmpty"),u=m("Loading"),o=m("van-list"),n=m("van-pull-refresh"),r=m("FooterHeight"),h=m("SportsTabs");return i(),v("div",{ref_key:"newContainer",ref:y,class:"homeTime-page"},[T(h,{ref_key:"refSportsTabs",ref:F,class:"pb10","is-custom":!0,tabs:N.value,"if-sport-today":!0,onReturnSportsSuccess:G},{body:S((()=>[c("div",V,["HomeTime"===k(Y)?(i(),H(R,{key:0,onReturnTimeSuccess:Z})):x("",!0),T(n,{modelValue:A.value,"onUpdate:modelValue":a[1]||(a[1]=e=>A.value=e),onRefresh:L},{default:S((()=>[T(o,{modelValue:B.value,"onUpdate:modelValue":a[0]||(a[0]=e=>B.value=e),finished:J.value,"finished-text":e.$t("live.noMore"),onLoad:E},{default:S((()=>[j.value?(i(),v(d,{key:0},[(i(!0),v(d,null,p(P.value,((e,a)=>(i(),v(d,{key:a},[T(t,{"offset-top":k(g),container:y.value,"z-index":"5",class:f({mt10:0!==a})},{default:S((()=>[T(w,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(i(!0),v(d,null,p(e.list,((e,a)=>(i(),H(s,{"play-title-toggle":!1,"send-params":e,class:f({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128)),P.value.length?x("",!0):(i(),H(l,{key:0}))],64)):x("",!0),!j.value||B.value?(i(),H(u,{key:1,class:f({"new_loading mt10":B.value})},null,8,["class"])):x("",!0)])),_:1},8,["modelValue","finished","finished-text"])])),_:1},8,["modelValue"]),T(r)])])),_:1},8,["tabs"])],512)}}});j.__scopeId="data-v-5677053c";export{j as default};
