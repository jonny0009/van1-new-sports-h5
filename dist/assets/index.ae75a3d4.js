import{t as a}from"./title-time.5b0f96b3.js";import{r as e}from"./index.5eb08fec.js";import{s}from"./index.60680413.js";import{s as l,b as t,d as u,w as o,e as n,M as i,r as c,o as m,R as r,q as v,u as d,F as p,O as g,Z as f,c as T,Y as y,a1 as h,W as b,X as k,P as w}from"./vue.85a22cc6.js";const S={class:"homeTime-page"},x=(a=>(b("data-v-68502d11"),a=a(),k(),a))((()=>w("div",{class:"footerHeight"},null,-1)));var j=l({setup(l){const b=t((()=>s.state.home.refreshChangeTime)),k=u("");o(b,(a=>{a&&(clearTimeout(k.value),k.value=setTimeout((async()=>{await D(),await R()}),100))}));const w=u(!1),j=n({page:1,pageSize:5,gradeType:2,gameType:"FT"}),H=n([]),_=u(0),F=(a=!1,e="")=>{e?V.value=!a:w.value=a},R=async(a="")=>{F(!1,a);const s=await e(j);if(F(!0,a),200===s.code){const e=(null==s?void 0:s.data)||{},{baseData:l,total:t}=e;_.value=t;const{pageSize:u,page:o}=j;a?z.value=!(u*o<t):H.length=0,H.push(...l)}},V=u(!1),z=u(!1),L=u(""),M=()=>{z.value||V.value||(V.value=!0,clearTimeout(L.value),L.value=setTimeout((()=>{j.page++,R(!0)}),100))},q=a=>{w.value=!0,j.gameType=a,j.page=1,R()},A=u(!1),C=a=>{A.value=a},D=()=>{j.page=1,j.gameType="FT"};return i((()=>{R()})),(e,s)=>{const l=c("ArrowTitle"),t=c("SportsTabs"),u=c("HomeMatchHandicap"),o=c("HomeEmpty"),n=c("Loading"),i=c("van-list");return m(),r("div",S,[v(l,{class:"mt10 mb20",src:d(a),text:"早盘",onReturnSuccess:C},null,8,["src"]),A.value?h("",!0):(m(),r(p,{key:0},[v(t,{class:"mb20",onReturnSportsSuccess:q}),v(i,{modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=a=>V.value=a),finished:z.value,"finished-text":"没有更多了",onLoad:M},{default:g((()=>[A.value?h("",!0):(m(),r(p,{key:0},[w.value?(m(),r(p,{key:0},[(m(!0),r(p,null,f(d(H),((a,e)=>(m(),T(u,{key:e,"send-params":a,class:y({mt20:0!==e})},null,8,["send-params","class"])))),128)),d(H).length?h("",!0):(m(),T(o,{key:0}))],64)):h("",!0),!w.value||V.value?(m(),T(n,{key:1,class:y({"new_loading mt10":V.value})},null,8,["class"])):h("",!0)],64))])),_:1},8,["modelValue","finished"]),x],64))])}}});j.__scopeId="data-v-68502d11";export{j as default};
