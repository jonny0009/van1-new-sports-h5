import{i as e,r as a,s as l,g as t,h as s,j as o}from"./index.d8b7888d.js";import{s as u,d as n,b as r,r as d,o as c,c as i,O as p,q as m,u as A,P as g,_ as v,R as h,F as f,S as y,$ as T,Y as k,Z as L,w as S,W as I,j as D,e as b,f as V}from"./vue.97c0c246.js";import{t as w,a as M}from"./title-recommend.e2b9b6c8.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang.2444e1b3.js";const F=e=>(k("data-v-569126e4"),e=e(),L(),e),j={class:"Hot-Match-Group-Warp"},C=F((()=>g("div",{class:"onImgError"},null,-1))),H=F((()=>g("div",{class:"mask-left",style:{display:"none"}},null,-1))),U=F((()=>g("div",{class:"mask-right"},null,-1)));var E=u({props:{firstLeaguesList:{type:Array,default:()=>[]}},setup(l,{expose:t}){const s=l,o=n("1"),u=n(!1),k=r((()=>0===s.firstLeaguesList.length));return t({isLoading:u,activeNames:o}),(t,s)=>{const n=d("ArrowTitle"),r=d("Loading"),L=d("HomeEmpty"),S=d("van-loading"),I=d("van-image"),D=d("van-collapse-item"),b=d("van-collapse");return c(),i(b,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:p((()=>[m(D,{name:"1"},{title:p((()=>[m(n,{class:"mt10 mb10 hotArrowTitle",src:A("data:image/png;base64,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"),text:t.$t("home.hotMatch")},null,8,["src","text"])])),default:p((()=>[g("div",j,[g("div",{class:v(["Hot-Match-Group",[{noData:A(k)}]])},[u.value?(c(),h(f,{key:1},[A(k)?(c(),i(L,{key:0})):(c(!0),h(f,{key:1},y(l.firstLeaguesList,((l,t)=>(c(),i(I,{key:t,src:A(e)(l.homeLeagueLogo),fit:"contain","lazy-load":"",onClick:e=>(e=>{const{leagueId:l,gameType:t,countryId:s}=e;a.push({name:"Sport",query:{leagueId:l,countryId:s},params:{type:t}})})(l)},{loading:p((()=>[m(S,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:p((()=>[C])),_:2},1032,["src","onClick"])))),128))],64)):(c(),i(r,{key:0}))],2),A(k)?T("",!0):(c(),h(f,{key:0},[H,U],64))])])),_:1})])),_:1},8,["modelValue"])}}});E.__scopeId="data-v-569126e4";const O={class:"goodMatch"},G={class:"mt10"};var N=u({props:{leagueIdArr:{type:Array,default:()=>[]}},setup(e){const u=e,k=r((()=>l.state.user.scrollNumY)),L=r((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),D=r((()=>l.state.home.refreshChangeTime)),b=n(""),V=n(null),M=n("1"),F=n();S((()=>k.value),(e=>{e>88&&(F.value.ifAnimated=!1)})),S(D,(e=>{var a;e&&(null==(a=F.value)||a.resetParams(),M.value="1",clearTimeout(b.value),b.value=setTimeout((()=>{U()}),100))})),S((()=>u.leagueIdArr),(()=>{U()}));const j=n([]),C=n([]),H=n(!1),U=async(e="FT")=>{H.value=!1;const a={gradeType:1,gameType:e,leagueId:Y(),page:1,pageSize:10};Y()&&delete a.gradeType;const l=await s(a);if(H.value=!0,200===l.code){const e=(null==l?void 0:l.data)||{},{baseData:a}=e;j.value=[],C.value=[],C.value.push(...a);const t={},s=[];C.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=o(e.gameDate).format("YYYY/MM/DD");t[a]?t[a].list.push(e):t[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(t).map((e=>{s.push(JSON.parse(JSON.stringify(t[e])))})),j.value=s}},E=n([]),N=n(!1),R=async e=>{H.value=!1,j.value=[],Q.value=e;const a=await t({gameType:e,showType:"FAST"});if(200===a.code){N.value=!0,E.value=[];((null==a?void 0:a.data.list)||[]).map((e=>{e.leagueId&&E.value.push(e.leagueId)})),E.value.length&&0!==(null==a?void 0:a.data.total)||(E.value=[]),U(e)}},Y=()=>N.value?E.value.length?E.value.join():"":u.leagueIdArr?u.leagueIdArr.join():"",Q=n("FT"),z=()=>{a.push({name:"Sport",params:{type:Q.value}})};return(e,a)=>{const l=d("ArrowTitle"),t=d("Loading"),s=d("HomeEmpty"),o=d("van-sticky"),u=d("HomeMatchHandicap"),n=d("SportsTabs"),r=d("van-collapse-item"),k=d("van-collapse");return c(),h("div",{ref_key:"newContainer",ref:V},[m(k,{modelValue:M.value,"onUpdate:modelValue":a[0]||(a[0]=e=>M.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:p((()=>[m(r,{name:"1"},{title:p((()=>[m(l,{class:"mt10 goodArrowTitle",src:A(w),text:e.$t("home.goofMatch")},null,8,["src","text"])])),default:p((()=>[g("div",O,[m(n,{ref_key:"refSportsTabs",ref:F,class:"pb10 pt10",onReturnSportsSuccess:R},{body:p((()=>[g("div",G,[H.value?(c(),h(f,{key:1},[j.value.length?T("",!0):(c(),i(s,{key:0})),(c(!0),h(f,null,y(j.value,((e,a)=>(c(),h(f,{key:a},[m(o,{"offset-top":A(L),container:V.value,"z-index":"8",class:v({mt10:0!==a})},{default:p((()=>[m(x,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(c(!0),h(f,null,y(e.list,((e,a)=>(c(),i(u,{"play-title-toggle":!1,"send-params":e,class:v({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128))],64)):(c(),i(t,{key:0})),j.value.length?(c(),h("div",{key:2,class:"Button-MatchMore mt10",onClick:z},[g("span",null,I(e.$t("home.lookMoreMatch")),1)])):T("",!0)])])),_:1},512)])])),_:1})])),_:1},8,["modelValue"])],512)}}});const R={class:"LatestMatch"},Y={class:"mt10"};var Q=u({props:{leagueIdArr:{type:Array,default:()=>[]}},setup(e){const u=e,k=r((()=>l.state.user.scrollNumY)),L=r((()=>{const e=l.state.app.globalBarHeaderHeight||48;return e>60?48:e})),D=r((()=>l.state.home.refreshChangeTime)),b=n(""),V=n(null),w=n("1"),F=n();S((()=>k.value),(e=>{e>88&&(F.value.ifAnimated=!1)})),S(D,(e=>{var a;e&&(null==(a=F.value)||a.resetParams(),w.value="1",clearTimeout(b.value),b.value=setTimeout((()=>{U()}),100))})),S((()=>u.leagueIdArr),(()=>{U()}));const j=n([]),C=n([]),H=n(!1),U=async(e="FT")=>{H.value=!1;const a={gradeType:2,gameType:e,filterLeagueIds:Q(),page:1,pageSize:10};Q()&&delete a.gradeType;const l=await s(a);if(H.value=!0,200===l.code){const e=(null==l?void 0:l.data)||{},{baseData:a}=e;j.value=[],C.value=[],C.value.push(...a);const t={},s=[];C.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((e=>{const a=o(e.gameDate).format("YYYY/MM/DD");t[a]?t[a].list.push(e):t[a]={gameDate:e.gameDate,list:[e]}})),Object.keys(t).map((e=>{s.push(JSON.parse(JSON.stringify(t[e])))})),j.value=s}},E=()=>{a.push({name:"HomeTime"})},O=n([]),G=n(!1),N=async e=>{l.dispatch("user/getScrollNumY",window.scrollY),H.value=!1,j.value=[];const a=await t({gameType:e,showType:"FAST"});if(200===a.code){G.value=!0,O.value=[];((null==a?void 0:a.data.list)||[]).map((e=>{e.leagueId&&O.value.push(e.leagueId)})),O.value.length&&0!==(null==a?void 0:a.data.total)||(O.value=[]),U(e)}},Q=()=>G.value?O.value.length?O.value.join():"":u.leagueIdArr.length?u.leagueIdArr.join():"";return(e,a)=>{const l=d("ArrowTitle"),t=d("Loading"),s=d("HomeEmpty"),o=d("van-sticky"),u=d("HomeMatchHandicap"),n=d("SportsTabs"),r=d("van-collapse-item"),k=d("van-collapse");return c(),h("div",{ref_key:"newContainer",ref:V},[m(k,{modelValue:w.value,"onUpdate:modelValue":a[0]||(a[0]=e=>w.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:p((()=>[m(r,{name:"1"},{title:p((()=>[m(l,{src:A(M),text:e.$t("home.latestMatch"),class:"mt10 latestArrowTitle"},null,8,["src","text"])])),default:p((()=>[g("div",R,[m(n,{ref_key:"refSportsTabs",ref:F,class:"pb10 pt10",onReturnSportsSuccess:N},{body:p((()=>[g("div",Y,[H.value?(c(),h(f,{key:1},[j.value.length?T("",!0):(c(),i(s,{key:0,class:"marginAuto"})),(c(!0),h(f,null,y(j.value,((e,a)=>(c(),h(f,{key:a},[m(o,{"offset-top":A(L),container:V.value,"z-index":"8",class:v({mt10:0!==a})},{default:p((()=>[m(x,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(c(!0),h(f,null,y(e.list,((e,a)=>(c(),i(u,{"play-title-toggle":!1,"send-params":e,class:v({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128))],64)):(c(),i(t,{key:0})),j.value.length?(c(),h("div",{key:2,class:"Button-MatchMore mt10 mb10",onClick:E},[g("span",null,I(e.$t("home.lookMoreMatch")),1)])):T("",!0)])])),_:1},512)])])),_:1})])),_:1},8,["modelValue"])],512)}}});const z={class:"home-page"};var B=u({setup(e){const a=n(),s=n(!1),o=()=>{s.value=!1,l.dispatch("home/setRefreshChangeTime",(new Date).getTime())};D((()=>{v(),y()}));const u=r((()=>l.state.home.refreshChangeTime)),i=n("");S(u,(e=>{e&&(a.value.activeNames="1",clearTimeout(i.value),i.value=setTimeout((()=>{v(),y()}),100))}));const g=b([]),v=async()=>{a.value.isLoading=!1;const e=await t({gameType:"home",showType:"FAST"});if(a.value.isLoading=!0,200===e.code){const a=(null==e?void 0:e.data.list)||[];g.length=0,g.push(...a)}},f=n([]),y=async()=>{a.value.isLoading=!1;const e=await t({gameType:"FT",showType:"FAST"});if(a.value.isLoading=!0,200===e.code){f.value=[];((null==e?void 0:e.data.list)||[]).map((e=>{e.leagueId&&f.value.push(e.leagueId)})),f.value.length&&0!==(null==e?void 0:e.data.total)||(f.value=[""])}};return V((()=>{l.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),l.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),l.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})})),(e,l)=>{const t=d("van-pull-refresh"),u=d("FooterHeight");return c(),h("div",z,[m(t,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value=e),onRefresh:o},{default:p((()=>[m(E,{ref_key:"refHotMatch",ref:a,firstLeaguesList:A(g)},null,8,["firstLeaguesList"]),m(N,{ref:"refGoodMatch",leagueIdArr:f.value},null,8,["leagueIdArr"]),m(Q,{ref:"refLatestMatch",leagueIdArr:f.value},null,8,["leagueIdArr"])])),_:1},8,["modelValue"]),m(u)])}}});B.__scopeId="data-v-5cf25cd4";export{B as default};
