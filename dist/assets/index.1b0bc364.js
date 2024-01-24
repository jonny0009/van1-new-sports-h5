import{s as e,i as a,j as t,D as s}from"./index.3b607f65.js";import{r as l,a as o}from"./index.a03c28e7.js";import{s as n,d as r,b as u,w as c,e as A,M as d,r as m,o as p,c as i,O as h,q as g,u as v,P as f,_ as y,S as k,F as T,Z as D,a0 as M,X as V,Y as b,V as S,j as x,f as Y}from"./vue.ce591b53.js";import{t as F,a as U}from"./title-recommend.e2b9b6c8.js";const C=e=>(V("data-v-3f5283f0"),e=e(),b(),e),E={class:"Hot-Match-Group-Warp"},L=C((()=>f("div",{class:"onImgError"},null,-1))),j=C((()=>f("div",{class:"mask-left",style:{display:"none"}},null,-1))),G=C((()=>f("div",{class:"mask-right"},null,-1)));var w=n({setup(s){const o=r("1"),n=u((()=>e.state.home.refreshChangeTime)),V=u((()=>0===S.length)),b=r("");c(n,(e=>{e&&(o.value="1",clearTimeout(b.value),b.value=setTimeout((()=>{Y()}),100))}));const S=A([]),x=r(!1),Y=async()=>{x.value=!1;const e=await l({gameType:"home"});if(x.value=!0,200===e.code){const a=(null==e?void 0:e.data.list)||[];S.length=0,S.push(...a)}};return d((()=>{Y()})),(e,s)=>{const l=m("ArrowTitle"),n=m("Loading"),r=m("HomeEmpty"),u=m("van-loading"),c=m("van-image"),A=m("van-collapse-item"),d=m("van-collapse");return p(),i(d,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[g(A,{name:"1"},{title:h((()=>[g(l,{class:"mt10 mb10 hotArrowTitle",src:v("data:image/png;base64,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"),text:e.$t("home.hotMatch")},null,8,["src","text"])])),default:h((()=>[f("div",E,[f("div",{class:y(["Hot-Match-Group",[{noData:v(V)}]])},[x.value?(p(),k(T,{key:1},[v(V)?(p(),i(r,{key:0})):(p(!0),k(T,{key:1},D(v(S),((e,s)=>(p(),i(c,{key:s,src:v(a)(e.homeLeagueLogo),fit:"contain","lazy-load":"",onClick:a=>(e=>{const{leagueId:a,gameType:s}=e;t.push({name:"Sport",query:{leagueId:a},params:{type:s}})})(e)},{loading:h((()=>[g(u,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:h((()=>[L])),_:2},1032,["src","onClick"])))),128))],64)):(p(),i(n,{key:0}))],2),v(V)?M("",!0):(p(),k(T,{key:0},[j,G],64))])])),_:1})])),_:1},8,["modelValue"])}}});w.__scopeId="data-v-3f5283f0";const H={class:"goodMatch"};var R=n({setup(a){const l=s,n=u((()=>e.state.home.refreshChangeTime)),y=r(""),V=r("1"),b=r();c(n,(e=>{var a;e&&(null==(a=b.value)||a.resetParams(),V.value="1",clearTimeout(y.value),y.value=setTimeout((()=>{U()}),100))}));const x=A([]),Y=r(!1),U=async(e="FT")=>{const a={gradeType:1,gameType:e,startDate:l().format("YYYY-MM-DD")+" 00:00:00",endDate:l().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"};Y.value=!1;const t=await o(a);if(Y.value=!0,200===t.code){const e=(null==t?void 0:t.data)||{},{baseData:a}=e;x.length=0,x.push(...a)}},C=e=>{E.value=e,U(e)};d((()=>{U()}));const E=r("FT"),L=()=>{t.push({name:"Sport",params:{type:E.value}})};return(e,a)=>{const t=m("ArrowTitle"),s=m("SportsTabs"),l=m("Loading"),o=m("HomeEmpty"),n=m("HomeMatchHandicap"),r=m("van-collapse-item"),u=m("van-collapse");return p(),i(u,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[g(r,{name:"1"},{title:h((()=>[g(t,{class:"mt10 goodArrowTitle",src:v(F),text:e.$t("home.goofMatch")},null,8,["src","text"])])),default:h((()=>[f("div",H,[g(s,{ref_key:"refSportsTabs",ref:b,class:"pb10 pt10",onReturnSportsSuccess:C},null,512),Y.value?(p(),k(T,{key:1},[v(x).length?M("",!0):(p(),i(o,{key:0})),(p(!0),k(T,null,D(v(x),((e,a)=>(p(),i(n,{key:a,"send-params":e,class:"mb10"},null,8,["send-params"])))),128))],64)):(p(),i(l,{key:0})),v(x).length?(p(),k("div",{key:2,class:"Button-MatchMore mt10",onClick:L},[f("span",null,S(e.$t("home.lookMoreMatch")),1)])):M("",!0)])])),_:1})])),_:1},8,["modelValue"])}}});const Q={class:"LatestMatch"};var O=n({setup(a){const l=s,n=u((()=>e.state.home.refreshChangeTime)),y=r(""),V=r("1"),b=r();c(n,(e=>{var a;e&&(null==(a=b.value)||a.resetParams(),V.value="1",clearTimeout(y.value),y.value=setTimeout((()=>{F()}),100))}));const x=A([]),Y=r(!1),F=async(e="FT")=>{Y.value=!1;const a={gradeType:2,gameType:e,startDate:l().format("YYYY-MM-DD")+" 00:00:00",endDate:l().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"},t=await o(a);if(Y.value=!0,200===t.code){const e=(null==t?void 0:t.data)||{},{baseData:a}=e;x.length=0,x.push(...a)}},C=()=>{t.push({name:"HomeTime"})},E=e=>{F(e)};return d((()=>{F()})),(e,a)=>{const t=m("ArrowTitle"),s=m("SportsTabs"),l=m("Loading"),o=m("HomeEmpty"),n=m("HomeMatchHandicap"),r=m("van-collapse-item"),u=m("van-collapse");return p(),i(u,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[g(r,{name:"1"},{title:h((()=>[g(t,{src:v(U),text:e.$t("home.latestMatch"),class:"mt10 latestArrowTitle"},null,8,["src","text"])])),default:h((()=>[f("div",Q,[g(s,{ref_key:"refSportsTabs",ref:b,class:"pb10 pt10",onReturnSportsSuccess:E},null,512),Y.value?(p(),k(T,{key:1},[v(x).length?(p(!0),k(T,{key:1},D(v(x),((e,a)=>(p(),i(n,{key:a,"send-params":e,class:"mb10"},null,8,["send-params"])))),128)):(p(),i(o,{key:0,class:"marginAuto"}))],64)):(p(),i(l,{key:0})),v(x).length?(p(),k("div",{key:2,class:"Button-MatchMore mt10 mb10",onClick:C},[f("span",null,S(e.$t("home.lookMoreMatch")),1)])):M("",!0)])])),_:1})])),_:1},8,["modelValue"])}}});const B={class:"home-page"};var I=n({setup(a){const t=r(!1),s=()=>{t.value=!1,e.dispatch("home/setRefreshChangeTime",(new Date).getTime())};return x((()=>{})),Y((()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),e.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})})),(e,a)=>{const l=m("van-pull-refresh"),o=m("FooterHeight");return p(),k("div",B,[g(l,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),onRefresh:s},{default:h((()=>[g(w,{ref:"refHotMatch"},null,512),g(R,{ref:"refGoodMatch"},null,512),g(O,{ref:"refLatestMatch"},null,512)])),_:1},8,["modelValue"]),g(o)])}}});I.__scopeId="data-v-a3bfb120";export{I as default};
