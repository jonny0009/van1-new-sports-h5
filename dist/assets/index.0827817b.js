import{s as e,D as a}from"./index.d868f028.js";import{r as s}from"./index.5aa94be9.js";import{s as l,b as t,d as o,w as n,e as u,M as r,r as i,o as m,R as d,q as v,O as c,F as p,Z as g,u as f,c as h,_ as T,a1 as y}from"./vue.9cce28bb.js";const b={class:"homeTime-page"};var D=l({setup(l){const D=t((()=>e.state.home.refreshChangeTime)),Y=o(""),w=o();n(D,(e=>{var a;console.log("watch refreshChangeTime refreshChangeTime refreshChangeTime"),e&&(null==(a=w.value)||a.resetParams(),clearTimeout(Y.value),Y.value=setTimeout((async()=>{await R(),await L()}),100))}));const M=o(!1),S=u({page:1,pageSize:5,gradeType:2,gameType:"FT",startDate:a().format("YYYY-MM-DD")+" 00:00:00",endDate:a().format("YYYY-MM-DD")+" 23:59:59"}),k=u([]),_=o(0),x=(e=!1,a="")=>{a?C.value=!e:M.value=e},L=async(e="")=>{x(!1,e);const a=await s(S);if(x(!0,e),200===a.code){const s=(null==a?void 0:a.data)||{},{baseData:l,total:t}=s;_.value=t;const{pageSize:o,page:n}=S;e?F.value=!(o*n<t):k.length=0,k.push(...l)}},C=o(!1),F=o(!1),H=o(""),j=o(!1),V=()=>{j.value?(console.log("onLoad onLoad onLoad"),F.value||C.value||(C.value=!0,clearTimeout(H.value),H.value=setTimeout((()=>{S.page++,L(!0)}),100))):j.value=!0},z=e=>{M.value=!0,S.gameType=e,F.value=!1,S.page=1,L()},R=()=>{S.page=1,S.gameType="FT"};return r((()=>{L()})),(e,a)=>{const s=i("SportsTabs"),l=i("HomeMatchHandicap"),t=i("HomeEmpty"),o=i("Loading"),n=i("van-list"),u=i("FooterHeight");return m(),d("div",b,[v(s,{ref_key:"refSportsTabs",ref:w,class:"pb10",onReturnSportsSuccess:z},null,512),v(n,{modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value=e),finished:F.value,"finished-text":e.$t("live.noMore"),onLoad:V},{default:c((()=>[e.isShow?y("",!0):(m(),d(p,{key:0},[M.value?(m(),d(p,{key:0},[(m(!0),d(p,null,g(f(k),((e,a)=>(m(),h(l,{key:a,"send-params":e,class:T({mt20:0!==a})},null,8,["send-params","class"])))),128)),f(k).length?y("",!0):(m(),h(t,{key:0}))],64)):y("",!0),!M.value||C.value?(m(),h(o,{key:1,class:T({"new_loading mt10":C.value})},null,8,["class"])):y("",!0)],64))])),_:1},8,["modelValue","finished","finished-text"]),v(u)])}}});D.__scopeId="data-v-173eaffe";export{D as default};
