import{s as a,i as e,j as t,D as s}from"./index.f54c84f2.js";import{f as l,r as o}from"./index.c082fb89.js";import{s as n,d as r,b as c,w as u,e as A,M as d,r as m,o as p,c as i,O as h,q as g,u as v,P as f,_ as y,R as k,F as M,Z as b,a1 as D,X as T,Y as V,U as S,j as x,f as Y,a4 as F}from"./vue.469c5994.js";import{t as U,a as j}from"./title-recommend.e2b9b6c8.js";const E=a=>(T("data-v-038bb9fc"),a=a(),V(),a),C={class:"Hot-Match-Group-Warp"},G=E((()=>f("div",{class:"onImgError"},null,-1))),L=E((()=>f("div",{class:"mask-left",style:{display:"none"}},null,-1))),w=E((()=>f("div",{class:"mask-right"},null,-1)));var H=n({setup(s){const o=r("1"),n=c((()=>a.state.home.refreshChangeTime)),T=c((()=>0===S.length)),V=r("");u(n,(a=>{a&&(o.value="1",clearTimeout(V.value),V.value=setTimeout((()=>{Y()}),100))}));const S=A([]),x=r(!1),Y=async()=>{x.value=!1;const a=await l();if(x.value=!0,200===a.code){const e=(null==a?void 0:a.data)||[];S.length=0,S.push(...e)}};return d((()=>{Y()})),(a,s)=>{const l=m("ArrowTitle"),n=m("Loading"),r=m("HomeEmpty"),c=m("van-loading"),u=m("van-image"),A=m("van-collapse-item"),d=m("van-collapse");return p(),i(d,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[g(A,{name:"1"},{title:h((()=>[g(l,{class:"mt10 mb10 hotArrowTitle",src:v("data:image/png;base64,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"),text:a.$t("home.hotMatch")},null,8,["src","text"])])),default:h((()=>[f("div",C,[f("div",{class:y(["Hot-Match-Group",[{noData:v(T)}]])},[x.value?(p(),k(M,{key:1},[v(T)?(p(),i(r,{key:0})):(p(!0),k(M,{key:1},b(v(S),((a,s)=>(p(),i(u,{key:s,src:v(e)(a.icon),fit:"contain","lazy-load":"",onClick:e=>(a=>{const{leagueId:e,gameType:s}=a;t.push({name:"Sport",query:{leagueId:e},params:{type:s}})})(a)},{loading:h((()=>[g(c,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:h((()=>[G])),_:2},1032,["src","onClick"])))),128))],64)):(p(),i(n,{key:0}))],2),v(T)?D("",!0):(p(),k(M,{key:0},[L,w],64))])])),_:1})])),_:1},8,["modelValue"])}}});H.__scopeId="data-v-038bb9fc";const Q={class:"goodMatch"};var R=n({setup(e){const l=s,n=c((()=>a.state.home.refreshChangeTime)),y=r(""),T=r("1"),V=r();u(n,(a=>{var e;a&&(null==(e=V.value)||e.resetParams(),T.value="1",clearTimeout(y.value),y.value=setTimeout((()=>{F()}),100))}));const x=A([]),Y=r(!1),F=async(a="FT")=>{const e={gradeType:1,gameType:a,startDate:l().format("YYYY-MM-DD")+" 00:00:00",endDate:l().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"};Y.value=!1;const t=await o(e);if(Y.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;x.length=0,x.push(...e)}},j=a=>{E.value=a,F(a)};d((()=>{F()}));const E=r("FT"),C=()=>{t.push({name:"Sport",params:{type:E.value}})};return(a,e)=>{const t=m("ArrowTitle"),s=m("SportsTabs"),l=m("Loading"),o=m("HomeEmpty"),n=m("HomeMatchHandicap"),r=m("van-collapse-item"),c=m("van-collapse");return p(),i(c,{modelValue:T.value,"onUpdate:modelValue":e[0]||(e[0]=a=>T.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[g(r,{name:"1"},{title:h((()=>[g(t,{class:"mt10 goodArrowTitle",src:v(U),text:a.$t("home.goofMatch")},null,8,["src","text"])])),default:h((()=>[f("div",Q,[g(s,{ref_key:"refSportsTabs",ref:V,class:"pb10 pt10",onReturnSportsSuccess:j},null,512),Y.value?(p(),k(M,{key:1},[v(x).length?D("",!0):(p(),i(o,{key:0})),(p(!0),k(M,null,b(v(x),((a,e)=>(p(),i(n,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))],64)):(p(),i(l,{key:0})),v(x).length?(p(),k("div",{key:2,class:"Button-MatchMore mt10",onClick:C},[f("span",null,S(a.$t("home.lookMoreMatch")),1)])):D("",!0)])])),_:1})])),_:1},8,["modelValue"])}}});const O={class:"LatestMatch"};var B=n({setup(e){const l=s,n=c((()=>a.state.home.refreshChangeTime)),y=r(""),T=r("1"),V=r();u(n,(a=>{var e;a&&(null==(e=V.value)||e.resetParams(),T.value="1",clearTimeout(y.value),y.value=setTimeout((()=>{F()}),100))}));const x=A([]),Y=r(!1),F=async(a="FT")=>{Y.value=!1;const e={gradeType:2,gameType:a,startDate:l().format("YYYY-MM-DD")+" 00:00:00",endDate:l().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"},t=await o(e);if(Y.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;x.length=0,x.push(...e)}},U=()=>{t.push({name:"HomeTime"})},E=a=>{F(a)};return d((()=>{F()})),(a,e)=>{const t=m("ArrowTitle"),s=m("SportsTabs"),l=m("Loading"),o=m("HomeEmpty"),n=m("HomeMatchHandicap"),r=m("van-collapse-item"),c=m("van-collapse");return p(),i(c,{modelValue:T.value,"onUpdate:modelValue":e[0]||(e[0]=a=>T.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[g(r,{name:"1"},{title:h((()=>[g(t,{src:v(j),text:a.$t("home.latestMatch"),class:"mt10 latestArrowTitle"},null,8,["src","text"])])),default:h((()=>[f("div",O,[g(s,{ref_key:"refSportsTabs",ref:V,class:"pb10 pt10",onReturnSportsSuccess:E},null,512),Y.value?(p(),k(M,{key:1},[v(x).length?(p(!0),k(M,{key:1},b(v(x),((a,e)=>(p(),i(n,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128)):(p(),i(o,{key:0,class:"marginAuto"}))],64)):(p(),i(l,{key:0})),v(x).length?(p(),k("div",{key:2,class:"Button-MatchMore mt10 mb10",onClick:U},[f("span",null,S(a.$t("home.lookMoreMatch")),1)])):D("",!0)])])),_:1})])),_:1},8,["modelValue"])}}});const I={class:"home-page"};var q=n({setup(e){const t=F();return x((()=>{if(t.query.gidm){const e=JSON.parse(t.query.obj);a.dispatch("betting/setMoreShow",{status:!0,moreParams:e})}})),Y((()=>{a.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),a.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),a.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})})),(a,e)=>{const t=m("FooterHeight");return p(),k("div",I,[g(H,{ref:"refHotMatch"},null,512),g(R,{ref:"refGoodMatch"},null,512),g(B,{ref:"refLatestMatch"},null,512),g(t)])}}});q.__scopeId="data-v-d0ca3022";export{q as default};
