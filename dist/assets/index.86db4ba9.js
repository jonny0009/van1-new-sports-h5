import{s as a,z as e}from"./index.47867054.js";import{f as t,h as s,j as l}from"./index.023e839b.js";import{d as n,a6 as i,g as v,a as d,f as u,r as o,o as c,R as p,m as r,O as m,F as _,S as f,c as g,P as h,W as y,u as b,_ as T,$ as k}from"./vue.23388646.js";const x={class:"tab-title"},D={key:0};var E=n({setup(n){const E=i((()=>e((()=>import("./DateTabs.65e46c14.js")),["/assets/DateTabs.65e46c14.js","/assets/DateTabs.80b8dca9.css","/assets/index.47867054.js","/assets/index.baa50de0.css","/assets/vue.23388646.js"]))),j=i((()=>e((()=>import("./MatchHandicap.b7dd55a0.js")),["/assets/MatchHandicap.b7dd55a0.js","/assets/index.47867054.js","/assets/index.baa50de0.css","/assets/vue.23388646.js"]))),L=i((()=>e((()=>import("./index.fb8e36cd.js")),["/assets/index.fb8e36cd.js","/assets/index.vue_vue_type_script_setup_true_lang.eb24f817.js","/assets/index.47867054.js","/assets/index.baa50de0.css","/assets/vue.23388646.js"]))),R=i((()=>e((()=>import("./index.3d0b2359.js")),["/assets/index.3d0b2359.js","/assets/index.520f3045.css","/assets/vue.23388646.js","/assets/index.47867054.js","/assets/index.baa50de0.css","/assets/useMatch.0e22627e.js"]))),O=v((()=>a.state.app.liveBarHeaderHeight));d((()=>{B()}));const w=u([]),I=u(null),P=u(),A=u(),M=a=>{A.value=a,H.value=[],N.value=[],C()},V=u(),z=a=>{V.value=a,N.value=[],q(),W()},B=async()=>{const a=await t({gameDate:""});200===a.code&&(w.value=a.data||[])},H=u([]),C=async()=>{const a={gameType:A.value},e=await s(a);if(200===e.code){const a=e.data||{};H.value=a.dateList||[]}};let S=0;const U=u(!1),$=u(!1),F=u(!1),N=u([]),W=async()=>{F.value&&(N.value=[],F.value=!1),S++;const a={page:S,pageSize:10,gameType:A.value,gameDate:V.value},e=await l(a);if(200===e.code){const{baseData:a,total:t}=e.data||{};[...a].forEach((a=>{N.value.push(a)})),U.value=!1,$.value=N.value.length===t}else $.value=!0},q=()=>{S=0,$.value=!1,U.value=!0,W()};return(a,e)=>{const t=o("van-sticky"),s=o("van-list"),l=o("van-tab"),n=o("van-tabs");return c(),p("div",{class:"panel-mixs",ref_key:"newContainer",ref:I},[r(n,{active:P.value,"onUpdate:active":e[1]||(e[1]=a=>P.value=a),class:"global-nav-vant-tabs",shrink:"","line-height":"0",onChange:M},{default:m((()=>[(c(!0),p(_,null,f(w.value,(n=>(c(),g(l,{key:n.gameType,name:n.gameType},{title:m((()=>[h("div",x,[h("span",null,y(n.gameTypeName),1)])])),default:m((()=>[r(b(E),{data:H.value,onOnDate:z},null,8,["data"]),r(s,{loading:U.value,"onUpdate:loading":e[0]||(e[0]=a=>U.value=a),finished:$.value,"immediate-check":!1,"finished-text":0==N.value.length?"":a.$t("live.noMore"),onLoad:W},{default:m((()=>[N.value.length?(c(),p("div",D,[r(t,{"offset-top":b(O),container:I.value,"z-index":"8"},{default:m((()=>[r(b(L),{"send-params":N.value[0]},null,8,["send-params"])])),_:1},8,["offset-top","container"]),(c(!0),p(_,null,f(N.value,((a,e)=>(c(),p("div",{key:e},["RB"===a.showtype?(c(),g(b(R),{key:0,"play-title-toggle":!1,"send-params":a,tabType:"RB",class:T({mt10:0!==e}),ifMatchLive:!0},null,8,["send-params","class"])):(c(),g(b(j),{key:1,"play-title-toggle":!1,"send-params":a,class:"mb10",ifMatchLive:!0},null,8,["send-params"]))])))),128))])):k("",!0)])),_:1},8,["loading","finished","finished-text"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],512)}}});E.__scopeId="data-v-1a8dfed4";export{E as default};
