import{t as a}from"./title-time.dad94643.js";import{r as e}from"./index.c218ec31.js";import{s}from"./index.591903e6.js";import{s as l,b as t,d as u,w as o,e as n,M as i,r as m,o as c,R as r,q as d,u as v,F as p,O as g,Z as T,c as f,Y as y,a2 as h,W as k,X as w,P as S}from"./vue.e791136f.js";const b={class:"homeTime-page"},x=(a=>(k("data-v-68502d11"),a=a(),w(),a))((()=>S("div",{class:"footerHeight"},null,-1)));var j=l({setup(l){const k=t((()=>s.state.home.refreshChangeTime)),w=u("");o(k,(a=>{a&&(clearTimeout(w.value),w.value=setTimeout((async()=>{await D(),await R()}),100))}));const S=u(!1),j=n({page:1,pageSize:5,gradeType:2,gameType:"FT"}),H=n([]),_=u(0),F=(a=!1,e="")=>{e?V.value=!a:S.value=a},R=async(a="")=>{F(!1,a);const s=await e(j);if(F(!0,a),200===s.code){const e=(null==s?void 0:s.data)||{},{baseData:l,total:t}=e;_.value=t;const{pageSize:u,page:o}=j;a?z.value=!(u*o<t):H.length=0,H.push(...l)}},V=u(!1),z=u(!1),L=u(""),M=()=>{z.value||V.value||(V.value=!0,clearTimeout(L.value),L.value=setTimeout((()=>{j.page++,R(!0)}),100))},q=a=>{S.value=!0,j.gameType=a,j.page=1,R()},A=u(!1),C=a=>{A.value=a},D=()=>{j.page=1,j.gameType="FT"};return i((()=>{R()})),(e,s)=>{const l=m("ArrowTitle"),t=m("SportsTabs"),u=m("HomeMatchHandicap"),o=m("HomeEmpty"),n=m("Loading"),i=m("van-list");return c(),r("div",b,[d(l,{class:"mt10 mb20",src:v(a),text:"早盘",onReturnSuccess:C},null,8,["src"]),A.value?h("",!0):(c(),r(p,{key:0},[d(t,{class:"mb20",onReturnSportsSuccess:q}),d(i,{modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=a=>V.value=a),finished:z.value,"finished-text":"没有更多了",onLoad:M},{default:g((()=>[A.value?h("",!0):(c(),r(p,{key:0},[S.value?(c(),r(p,{key:0},[(c(!0),r(p,null,T(v(H),((a,e)=>(c(),f(u,{key:e,"send-params":a,class:y({mt20:0!==e})},null,8,["send-params","class"])))),128)),v(H).length?h("",!0):(c(),f(o,{key:0}))],64)):h("",!0),!S.value||V.value?(c(),f(n,{key:1,class:y({"new_loading mt10":V.value})},null,8,["class"])):h("",!0)],64))])),_:1},8,["modelValue","finished"]),x],64))])}}});j.__scopeId="data-v-68502d11";export{j as default};
