import{s as a,z as e}from"./index.954b8583.js";import{f as t,h as s,j as l}from"./index.103c7376.js";import{s as n,a6 as i,b as v,j as d,d as u,r as o,o as c,R as p,q as r,O as m,F as _,S as f,c as g,P as h,W as y,u as b,_ as T,$ as j}from"./vue.d6a430ba.js";const k={class:"tab-title"},x={key:0};var D=n({setup(n){const D=i((()=>e((()=>import("./DateTabs.2e82f7d6.js")),["/assets/DateTabs.2e82f7d6.js","/assets/DateTabs.5f3ddb1e.css","/assets/index.954b8583.js","/assets/index.0199974f.css","/assets/vue.d6a430ba.js"]))),E=i((()=>e((()=>import("./MatchHandicap.1650c3ea.js")),["/assets/MatchHandicap.1650c3ea.js","/assets/index.954b8583.js","/assets/index.0199974f.css","/assets/vue.d6a430ba.js"]))),L=i((()=>e((()=>import("./index.dd232aad.js")),["/assets/index.dd232aad.js","/assets/index.vue_vue_type_script_setup_true_lang.553200c4.js","/assets/index.954b8583.js","/assets/index.0199974f.css","/assets/vue.d6a430ba.js"]))),R=i((()=>e((()=>import("./index.1a7fd949.js")),["/assets/index.1a7fd949.js","/assets/index.e1b62aa1.css","/assets/vue.d6a430ba.js","/assets/getScore.3431fe98.js","/assets/index.954b8583.js","/assets/index.0199974f.css"]))),O=v((()=>a.state.app.liveBarHeaderHeight));d((()=>{B()}));const w=u([]),I=u(null),P=u(),A=u(),M=a=>{A.value=a,H.value=[],F.value=[],C()},V=u(),z=a=>{V.value=a,F.value=[],W(),N()},B=async()=>{const a=await t({gameDate:""});200===a.code&&(w.value=a.data||[])},H=u([]),C=async()=>{const a={gameType:A.value},e=await s(a);if(200===e.code){const a=e.data||{};H.value=a.dateList||[]}};let S=0;const U=u(!1),$=u(!1),q=u(!1),F=u([]),N=async()=>{q.value&&(F.value=[],q.value=!1),S++;const a={page:S,pageSize:10,gameType:A.value,gameDate:V.value},e=await l(a);if(200===e.code){const{baseData:a,total:t}=e.data||{};[...a].forEach((a=>{F.value.push(a)})),U.value=!1,$.value=F.value.length===t}else $.value=!0},W=()=>{S=0,$.value=!1,U.value=!0,N()};return(a,e)=>{const t=o("van-sticky"),s=o("van-list"),l=o("van-tab"),n=o("van-tabs");return c(),p("div",{class:"panel-mixs",ref_key:"newContainer",ref:I},[r(n,{active:P.value,"onUpdate:active":e[1]||(e[1]=a=>P.value=a),class:"global-nav-vant-tabs",shrink:"","line-height":"0",onChange:M},{default:m((()=>[(c(!0),p(_,null,f(w.value,(n=>(c(),g(l,{key:n.gameType,name:n.gameType},{title:m((()=>[h("div",k,[h("span",null,y(n.gameTypeName),1)])])),default:m((()=>[r(b(D),{data:H.value,onOnDate:z},null,8,["data"]),r(s,{loading:U.value,"onUpdate:loading":e[0]||(e[0]=a=>U.value=a),finished:$.value,"immediate-check":!1,"finished-text":0==F.value.length?"":a.$t("live.noMore"),onLoad:N},{default:m((()=>[F.value.length?(c(),p("div",x,[r(t,{"offset-top":b(O),container:I.value,"z-index":"8"},{default:m((()=>[r(b(L),{"send-params":F.value[0]},null,8,["send-params"])])),_:1},8,["offset-top","container"]),(c(!0),p(_,null,f(F.value,((a,e)=>(c(),p("div",{key:e},["RB"===a.showtype?(c(),g(b(R),{key:0,"play-title-toggle":!1,"send-params":a,tabType:"RB",class:T({mt10:0!==e}),ifMatchLive:!0},null,8,["send-params","class"])):(c(),g(b(E),{key:1,"play-title-toggle":!1,"send-params":a,class:"mb10",ifMatchLive:!0},null,8,["send-params"]))])))),128))])):j("",!0)])),_:1},8,["loading","finished","finished-text"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])],512)}}});D.__scopeId="data-v-553ba35a";export{D as default};
