import{s as a,Z as e}from"./index.cf736178.js";import{d as t,f as s,g as l}from"./index.a2a4893d.js";import{s as n,a7 as i,b as v,j as u,d as o,r as d,o as c,S as p,q as r,O as m,F as _,_ as f,c as g,P as h,V as y,u as b,Z as T,$ as k}from"./vue.144c3097.js";const x={class:"tab-title"},D={key:0};var E=n({setup(n){const E=i((()=>e((()=>import("./DateTabs.1149c12b.js")),["/assets/DateTabs.1149c12b.js","/assets/DateTabs.6a94794c.css","/assets/index.cf736178.js","/assets/index.59e16c23.css","/assets/vue.144c3097.js"]))),j=i((()=>e((()=>import("./MatchHandicap.5da955b7.js")),["/assets/MatchHandicap.5da955b7.js","/assets/index.cf736178.js","/assets/index.59e16c23.css","/assets/vue.144c3097.js"]))),L=i((()=>e((()=>import("./index.33a92744.js")),["/assets/index.33a92744.js","/assets/index.vue_vue_type_script_setup_true_lang.ee4c4a2c.js","/assets/index.cf736178.js","/assets/index.59e16c23.css","/assets/vue.144c3097.js"]))),O=i((()=>e((()=>import("./index.b3ae96a3.js")),["/assets/index.b3ae96a3.js","/assets/index.a6133ec5.css","/assets/vue.144c3097.js","/assets/getScore.9c4e571c.js","/assets/index.cf736178.js","/assets/index.59e16c23.css"]))),R=v((()=>a.state.app.liveBarHeaderHeight));u((()=>{H()}));const w=o([]),I=o(null),P=o(),V=o(),A=a=>{V.value=a,z.value=[],q.value=[],C()},M=o(),B=a=>{M.value=a,q.value=[],N(),F()},H=async()=>{const a=await t({gameDate:""});200===a.code&&(w.value=a.data||[])},z=o([]),C=async()=>{const a={gameType:V.value},e=await s(a);if(200===e.code){const a=e.data||{};z.value=a.dateList||[]}};let S=0;const U=o(!1),Z=o(!1),$=o(!1),q=o([]),F=async()=>{$.value&&(q.value=[],$.value=!1),S++;const a={page:S,pageSize:10,gameType:V.value,gameDate:M.value},e=await l(a);if(200===e.code){const{baseData:a,total:t}=e.data||{};[...a].forEach((a=>{q.value.push(a)})),U.value=!1,Z.value=q.value.length===t}else Z.value=!0},N=()=>{S=0,Z.value=!1,U.value=!0,F()};return(a,e)=>{const t=d("van-sticky"),s=d("van-list"),l=d("van-tab"),n=d("van-tabs");return c(),p("div",{class:"panel-mixs",ref_key:"newContainer",ref:I},[r(n,{active:P.value,"onUpdate:active":e[1]||(e[1]=a=>P.value=a),class:"global-nav-vant-tabs",shrink:"","line-height":"0",onChange:A},{default:m((()=>[(c(!0),p(_,null,f(w.value,(n=>(c(),g(l,{key:n.gameType,name:n.gameType},{title:m((()=>[h("div",x,[h("span",null,y(n.gameTypeName),1)])])),default:m((()=>[r(b(E),{data:z.value,onOnDate:B},null,8,["data"]),r(s,{loading:U.value,"onUpdate:loading":e[0]||(e[0]=a=>U.value=a),finished:Z.value,"immediate-check":!1,"finished-text":0==q.value.length?"":a.$t("live.noMore"),onLoad:F},{default:m((()=>[q.value.length?(c(),p("div",D,[r(t,{"offset-top":b(R),container:I.value,"z-index":"8"},{default:m((()=>[r(b(L),{"send-params":q.value[0]},null,8,["send-params"])])),_:1},8,["offset-top","container"]),(c(!0),p(_,null,f(q.value,((a,e)=>(c(),p("div",{key:e},["RB"===a.showtype?(c(),g(b(O),{key:0,"play-title-toggle":!1,"send-params":a,tabType:"RB",class:T({mt10:0!==e}),ifMatchLive:!0},null,8,["send-params","class"])):(c(),g(b(j),{key:1,"play-title-toggle":!1,"send-params":a,class:"mb10",ifMatchLive:!0},null,8,["send-params"]))])))),128))])):k("",!0)])),_:1},8,["loading","finished","finished-text"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],512)}}});E.__scopeId="data-v-553ba35a";export{E as default};
