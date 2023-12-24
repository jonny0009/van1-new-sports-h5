import{t as e,l as a}from"./league.f4bf3a0b.js";import{s,i as t,r as n}from"./index.9e2e5c29.js";import{f as o,r as l}from"./index.8104f7fa.js";import{d as r,b as c,a as u,w as m,J as i,j as p,r as d,o as v,u as y,m as h,v as g,D as f,c as T,F as k,E as b,O as H,p as S,q as w,B as C,C as M}from"./vue.3b4f9705.js";import{t as j}from"./title-recommend.cbc3e195.js";import{t as x}from"./title-time.5b0f96b3.js";var D=r({setup(l){const r=c((()=>s.state.home.refreshChangeTime)),w=c((()=>0===M.length)),C=u("");m(r,(e=>{e&&(clearTimeout(C.value),C.value=setTimeout((()=>{x()}),100))}));const M=i([]),j=u(!1),x=async()=>{j.value=!1;const e=await o();if(j.value=!0,200===e.code){const a=(null==e?void 0:e.data)||[];M.length=0,M.push(...a)}};p((()=>{x()}));const D=u(!1),A=e=>{D.value=e};return(s,o)=>{const l=d("ArrowTitle"),r=d("Loading"),c=d("HomeEmpty"),u=d("van-loading"),m=d("van-image");return v(),y(k,null,[h(l,{class:"mt10 mb10",src:g(e),text:"热门赛事",onReturnSuccess:A},null,8,["src"]),D.value?H("",!0):(v(),y("div",{key:0,class:f(["Hot-Match-Group",[{noData:g(w)}]])},[j.value?(v(),y(k,{key:1},[g(w)?(v(),T(c,{key:0})):(v(!0),y(k,{key:1},b(g(M),((e,s)=>(v(),T(m,{key:s,src:g(t)(e.icon),fit:"contain",onClick:a=>(e=>{const{leagueId:a,gameType:s}=e;n.push({name:"Sport",query:{leagueId:a},params:{type:s}})})(e)},{loading:S((()=>[h(u,{type:"spinner",size:"36px"})])),error:S((()=>[h(m,{fit:"contain",src:g(a),class:"noLoadingAndError"},null,8,["src"])])),_:2},1032,["src","onClick"])))),128))],64)):(v(),T(r,{key:0}))],2))],64)}}}),A=r({setup(e){const a=c((()=>s.state.home.refreshChangeTime)),t=u("");m(a,(e=>{e&&(clearTimeout(t.value),t.value=setTimeout((()=>{r()}),100))}));const n=i([]),o=u(!1),r=async(e="FT")=>{const a={gradeType:1,gameType:e};o.value=!1;const s=await l(a);if(o.value=!0,200===s.code){const e=(null==s?void 0:s.data)||{},{baseData:a}=e;n.length=0,n.push(...a)}},f=e=>{r(e)};p((()=>{r()}));const S=u(!1),w=e=>{S.value=e};return(e,a)=>{const s=d("ArrowTitle"),t=d("SportsTabs"),l=d("Loading"),r=d("HomeEmpty"),c=d("HomeMatchHandicap");return v(),y(k,null,[h(s,{class:"mt10 mb10",src:g(j),text:"推荐比赛",onReturnSuccess:w},null,8,["src"]),S.value?H("",!0):(v(),y(k,{key:0},[h(t,{onReturnSportsSuccess:f}),o.value?(v(),y(k,{key:1},[g(n).length?H("",!0):(v(),T(r,{key:0})),(v(!0),y(k,null,b(g(n),((e,a)=>(v(),T(c,{key:a,"send-params":e,class:"mt20"},null,8,["send-params"])))),128))],64)):(v(),T(l,{key:0}))],64))],64)}}});const E=[w("span",null," 查看更多比赛 ",-1)];var L=r({setup(e){const a=c((()=>s.state.home.refreshChangeTime)),t=u("");m(a,(e=>{e&&(clearTimeout(t.value),t.value=setTimeout((()=>{f()}),100))}));const o=i([]),r=u(!1),f=async(e="FT")=>{r.value=!1;const a={gradeType:2,gameType:e},s=await l(a);if(r.value=!0,200===s.code){const e=(null==s?void 0:s.data)||{},{baseData:a}=e;o.length=0,o.push(...a)}},S=()=>{const e={name:"HomeTime",params:{refreshTime:(new Date).getTime()}};s.dispatch("app/setKeyValue",{key:"imgChangeTime",value:(new Date).getTime()}),n.push(e)},w=e=>{f(e)};p((()=>{f()}));const C=u(!1),M=e=>{C.value=e};return(e,a)=>{const s=d("ArrowTitle"),t=d("SportsTabs"),n=d("Loading"),l=d("HomeEmpty"),c=d("HomeMatchHandicap");return v(),y(k,null,[h(s,{class:"mt10 mb10",src:g(x),text:"早盘",onReturnSuccess:M},null,8,["src"]),C.value?H("",!0):(v(),y(k,{key:0},[h(t,{onReturnSportsSuccess:w}),r.value?(v(),y(k,{key:1},[g(o).length?(v(!0),y(k,{key:1},b(g(o),((e,a)=>(v(),T(c,{key:a,"send-params":e,class:"mt20"},null,8,["send-params"])))),128)):(v(),T(l,{key:0,class:"marginAuto"}))],64)):(v(),T(n,{key:0})),g(o).length?(v(),y("div",{key:2,class:"Button-MatchMore mt20",onClick:S},E)):H("",!0)],64))],64)}}});const R={class:"home-page"},F=(e=>(C("data-v-413097ba"),e=e(),M(),e))((()=>w("div",{class:"footerHeight"},null,-1)));var I=r({setup:e=>(e,a)=>(v(),y("div",R,[h(D,{ref:"refHotMatch"},null,512),h(A,{ref:"refGoodMatch"},null,512),h(L,{ref:"refLatestMatch"},null,512),F]))});I.__scopeId="data-v-413097ba";export{I as default};
