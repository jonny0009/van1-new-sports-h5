import{U as a}from"./index.3287b99a.js";import{d as e,f as s,g as t}from"./index.e98a268a.js";import{s as l,a7 as n,j as u,d as v,r as i,o as d,S as o,q as c,O as m,F as p,Z as r,c as g,P as f,V as _,u as h}from"./vue.66060cab.js";const b={class:"panel-mixs"},y={class:"tab-title"};var T=l({setup(l){const T=n((()=>a((()=>import("./DateTabs.e5d4002f.js")),["/assets/DateTabs.e5d4002f.js","/assets/DateTabs.a219d4c6.css","/assets/index.3287b99a.js","/assets/index.73f63c43.css","/assets/vue.66060cab.js"]))),D=n((()=>a((()=>import("./MatchHandicap.00f377ac.js")),["/assets/MatchHandicap.00f377ac.js","/assets/index.3287b99a.js","/assets/index.73f63c43.css","/assets/vue.66060cab.js"])));u((()=>{w()}));const j=v([]),x=v(),E=v(),k=a=>{E.value=a,I.value=[],R.value=[],P()},L=v(),O=a=>{L.value=a,R.value=[],q(),S()},w=async()=>{const a=await e({gameDate:""});200===a.code&&(j.value=a.data||[])},I=v([]),P=async()=>{const a={gameType:E.value},e=await s(a);if(200===e.code){const a=e.data||{};I.value=a.dateList||[]}};let U=0;const V=v(!1),A=v(!1),M=v(!1),R=v([]),S=async()=>{M.value&&(R.value=[],M.value=!1),U++;const a={page:U,pageSize:10,gameType:E.value,gameDate:L.value},e=await t(a);if(200===e.code){const{baseData:a,total:s}=e.data||{};[...a].forEach((a=>{R.value.push(a)})),V.value=!1,A.value=R.value.length==s}else A.value=!0},q=()=>{U=0,A.value=!1,V.value=!0,S()};return(a,e)=>{const s=i("van-list"),t=i("van-tab"),l=i("van-tabs");return d(),o("div",b,[c(l,{class:"global-nav-vant-tabs",active:x.value,"onUpdate:active":e[1]||(e[1]=a=>x.value=a),shrink:"","line-height":"0",onChange:k},{default:m((()=>[(d(!0),o(p,null,r(j.value,(l=>(d(),g(t,{key:l.gameType,name:l.gameType},{title:m((()=>[f("div",y,[f("span",null,_(l.gameTypeName),1)])])),default:m((()=>[c(h(T),{data:I.value,onOnDate:O},null,8,["data"]),c(s,{loading:V.value,"onUpdate:loading":e[0]||(e[0]=a=>V.value=a),finished:A.value,"immediate-check":!1,"finished-text":0==R.value.length?"":a.$t("live.noMore"),onLoad:S},{default:m((()=>[(d(!0),o(p,null,r(R.value,(a=>(d(),g(h(D),{key:a.gidm,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))])),_:1},8,["loading","finished","finished-text"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])])}}});T.__scopeId="data-v-3ad9a658";export{T as default};
