import{t as e}from"./title-time.dad94643.js";import{r as a}from"./index.972a74e3.js";import{s}from"./index.6e5309e9.js";import{s as t,b as l,d as u,w as o,e as n,M as i,r as d,o as m,R as r,q as c,u as v,F as p,O as g,Z as f,c as T,Y as h,a2 as y,W as k,X as w,P as x}from"./vue.e791136f.js";const S={class:"homeTime-page"},b=(e=>(k("data-v-0d957d8c"),e=e(),w(),e))((()=>x("div",{class:"footerHeight"},null,-1)));var j=t({setup(t){const k=l((()=>s.state.home.refreshChangeTime)),w=u("");o(k,(e=>{e&&(clearTimeout(w.value),w.value=setTimeout((async()=>{await D(),await M()}),100))}));const x=u(!1),j=n({page:1,pageSize:5,gradeType:2,gameType:"FT"}),H=n([]),_=u(0),F=(e=!1,a="")=>{a?R.value=!e:x.value=e},M=async(e="")=>{F(!1,e);const s=await a(j);if(F(!0,e),200===s.code){const a=(null==s?void 0:s.data)||{},{baseData:t,total:l}=a;_.value=l;const{pageSize:u,page:o}=j;e?V.value=!(u*o<l):H.length=0,H.push(...t)}},R=u(!1),V=u(!1),z=u(""),L=()=>{V.value||R.value||(R.value=!0,clearTimeout(z.value),z.value=setTimeout((()=>{j.page++,M(!0)}),100))},q=e=>{x.value=!0,j.gameType=e,j.page=1,M()},A=u(!1),C=e=>{A.value=e},D=()=>{j.page=1,j.gameType="FT"};return i((()=>{M()})),(a,s)=>{const t=d("ArrowTitle"),l=d("SportsTabs"),u=d("HomeMatchHandicap"),o=d("HomeEmpty"),n=d("Loading"),i=d("van-list");return m(),r("div",S,[c(t,{class:"mt10 mb20",src:v(e),text:"早盘",onReturnSuccess:C},null,8,["src"]),A.value?y("",!0):(m(),r(p,{key:0},[c(l,{class:"mb20",onReturnSportsSuccess:q}),c(i,{modelValue:R.value,"onUpdate:modelValue":s[0]||(s[0]=e=>R.value=e),finished:V.value,"finished-text":a.$t("live.noMore"),onLoad:L},{default:g((()=>[A.value?y("",!0):(m(),r(p,{key:0},[x.value?(m(),r(p,{key:0},[(m(!0),r(p,null,f(v(H),((e,a)=>(m(),T(u,{key:a,"send-params":e,class:h({mt20:0!==a})},null,8,["send-params","class"])))),128)),v(H).length?y("",!0):(m(),T(o,{key:0}))],64)):y("",!0),!x.value||R.value?(m(),T(n,{key:1,class:h({"new_loading mt10":R.value})},null,8,["class"])):y("",!0)],64))])),_:1},8,["modelValue","finished","finished-text"]),b],64))])}}});j.__scopeId="data-v-0d957d8c";export{j as default};
