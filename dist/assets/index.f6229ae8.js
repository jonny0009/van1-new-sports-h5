import{s as a,$ as e}from"./index.fce7d43f.js";import{d as t,f as s,g as l}from"./index.0e5576bf.js";import{s as n,a7 as i,b as v,j as u,d,r as o,o as c,S as p,q as r,O as m,F as f,_,c as g,P as h,V as y,u as b,Z as T,$ as k}from"./vue.7833d4f2.js";const x={class:"tab-title"},D={key:0};var E=n({setup(n){const E=i((()=>e((()=>import("./DateTabs.472c6e88.js")),["/assets/DateTabs.472c6e88.js","/assets/DateTabs.5f3ddb1e.css","/assets/index.fce7d43f.js","/assets/index.06199ccf.css","/assets/vue.7833d4f2.js"]))),j=i((()=>e((()=>import("./MatchHandicap.2dfd1b65.js")),["/assets/MatchHandicap.2dfd1b65.js","/assets/index.fce7d43f.js","/assets/index.06199ccf.css","/assets/vue.7833d4f2.js"]))),L=i((()=>e((()=>import("./index.3a9c0f95.js")),["/assets/index.3a9c0f95.js","/assets/index.vue_vue_type_script_setup_true_lang.0e0b943e.js","/assets/index.fce7d43f.js","/assets/index.06199ccf.css","/assets/vue.7833d4f2.js"]))),O=i((()=>e((()=>import("./index.ecc1686c.js")),["/assets/index.ecc1686c.js","/assets/index.ad82f6e3.css","/assets/vue.7833d4f2.js","/assets/getScore.0e082c81.js","/assets/index.fce7d43f.js","/assets/index.06199ccf.css"]))),R=v((()=>a.state.app.liveBarHeaderHeight));u((()=>{H()}));const w=d([]),I=d(null),P=d(),V=d(),A=a=>{V.value=a,$.value=[],F.value=[],z()},M=d(),B=a=>{M.value=a,F.value=[],Z(),N()},H=async()=>{const a=await t({gameDate:""});200===a.code&&(w.value=a.data||[])},$=d([]),z=async()=>{const a={gameType:V.value},e=await s(a);if(200===e.code){const a=e.data||{};$.value=a.dateList||[]}};let C=0;const S=d(!1),U=d(!1),q=d(!1),F=d([]),N=async()=>{q.value&&(F.value=[],q.value=!1),C++;const a={page:C,pageSize:10,gameType:V.value,gameDate:M.value},e=await l(a);if(200===e.code){const{baseData:a,total:t}=e.data||{};[...a].forEach((a=>{F.value.push(a)})),S.value=!1,U.value=F.value.length===t}else U.value=!0},Z=()=>{C=0,U.value=!1,S.value=!0,N()};return(a,e)=>{const t=o("van-sticky"),s=o("van-list"),l=o("van-tab"),n=o("van-tabs");return c(),p("div",{class:"panel-mixs",ref_key:"newContainer",ref:I},[r(n,{active:P.value,"onUpdate:active":e[1]||(e[1]=a=>P.value=a),class:"global-nav-vant-tabs",shrink:"","line-height":"0",onChange:A},{default:m((()=>[(c(!0),p(f,null,_(w.value,(n=>(c(),g(l,{key:n.gameType,name:n.gameType},{title:m((()=>[h("div",x,[h("span",null,y(n.gameTypeName),1)])])),default:m((()=>[r(b(E),{data:$.value,onOnDate:B},null,8,["data"]),r(s,{loading:S.value,"onUpdate:loading":e[0]||(e[0]=a=>S.value=a),finished:U.value,"immediate-check":!1,"finished-text":0==F.value.length?"":a.$t("live.noMore"),onLoad:N},{default:m((()=>[F.value.length?(c(),p("div",D,[r(t,{"offset-top":b(R),container:I.value,"z-index":"8"},{default:m((()=>[r(b(L),{"send-params":F.value[0]},null,8,["send-params"])])),_:1},8,["offset-top","container"]),(c(!0),p(f,null,_(F.value,((a,e)=>(c(),p("div",{key:e},["RB"===a.showtype?(c(),g(b(O),{key:0,"play-title-toggle":!1,"send-params":a,tabType:"RB",class:T({mt10:0!==e}),ifMatchLive:!0},null,8,["send-params","class"])):(c(),g(b(j),{key:1,"play-title-toggle":!1,"send-params":a,class:"mb10",ifMatchLive:!0},null,8,["send-params"]))])))),128))])):k("",!0)])),_:1},8,["loading","finished","finished-text"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],512)}}});E.__scopeId="data-v-553ba35a";export{E as default};
