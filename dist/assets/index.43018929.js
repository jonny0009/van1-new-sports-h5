import{$ as a}from"./index.542c4c3b.js";import{d as e,f as s,g as t}from"./index.72827789.js";import{s as l,a7 as n,j as u,d as v,r as i,o,S as d,q as c,O as m,F as p,Z as r,c as g,P as f,V as _,u as h}from"./vue.6c3ce548.js";const y={class:"panel-mixs"},b={class:"tab-title"};var T=l({setup(l){const T=n((()=>a((()=>import("./DateTabs.c6619aa0.js")),["/assets/DateTabs.c6619aa0.js","/assets/DateTabs.3b690747.css","/assets/index.542c4c3b.js","/assets/index.a0607d6d.css","/assets/vue.6c3ce548.js"]))),D=n((()=>a((()=>import("./MatchHandicap.86d0a106.js")),["/assets/MatchHandicap.86d0a106.js","/assets/index.542c4c3b.js","/assets/index.a0607d6d.css","/assets/vue.6c3ce548.js"])));u((()=>{w()}));const j=v([]),x=v(),E=v(),k=a=>{E.value=a,I.value=[],S.value=[],P()},L=v(),O=a=>{L.value=a,S.value=[],$(),U()},w=async()=>{const a=await e({gameDate:""});200===a.code&&(j.value=a.data||[])},I=v([]),P=async()=>{const a={gameType:E.value},e=await s(a);if(200===e.code){const a=e.data||{};I.value=a.dateList||[]}};let V=0;const A=v(!1),M=v(!1),R=v(!1),S=v([]),U=async()=>{R.value&&(S.value=[],R.value=!1),V++;const a={page:V,pageSize:10,gameType:E.value,gameDate:L.value},e=await t(a);if(200===e.code){const{baseData:a,total:s}=e.data||{};[...a].forEach((a=>{S.value.push(a)})),A.value=!1,M.value=S.value.length===s}else M.value=!0},$=()=>{V=0,M.value=!1,A.value=!0,U()};return(a,e)=>{const s=i("van-list"),t=i("van-tab"),l=i("van-tabs");return o(),d("div",y,[c(l,{active:x.value,"onUpdate:active":e[1]||(e[1]=a=>x.value=a),class:"global-nav-vant-tabs",shrink:"","line-height":"0",onChange:k},{default:m((()=>[(o(!0),d(p,null,r(j.value,(l=>(o(),g(t,{key:l.gameType,name:l.gameType},{title:m((()=>[f("div",b,[f("span",null,_(l.gameTypeName),1)])])),default:m((()=>[c(h(T),{data:I.value,onOnDate:O},null,8,["data"]),c(s,{loading:A.value,"onUpdate:loading":e[0]||(e[0]=a=>A.value=a),finished:M.value,"immediate-check":!1,"finished-text":0==S.value.length?"":a.$t("live.noMore"),onLoad:U},{default:m((()=>[(o(!0),d(p,null,r(S.value,(a=>(o(),g(h(D),{key:a.gidm,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])])}}});T.__scopeId="data-v-2ac2a552";export{T as default};
