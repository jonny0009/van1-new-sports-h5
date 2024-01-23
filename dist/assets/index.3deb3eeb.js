import{s as a,i as e,j as s,D as t}from"./index.40fa42cd.js";import{f as l,r as o}from"./index.9758ba54.js";import{s as r,d as n,b as A,w as m,e as u,M as c,r as i,o as d,c as p,O as v,q as h,u as y,P as f,Z as b,R as k,F as g,_ as M,a2 as T,X as G,Y as R,U as E,j as D,f as Q}from"./vue.b83303fa.js";import{t as Y}from"./title-recommend.bfaab608.js";import{t as j}from"./title-time.58d4efee.js";const S=a=>(G("data-v-07d31f3e"),a=a(),R(),a),Z={class:"Hot-Match-Group-Warp"},w=S((()=>f("div",{class:"onImgError"},null,-1))),O=S((()=>f("div",{class:"mask-left",style:{display:"none"}},null,-1))),C=S((()=>f("div",{class:"mask-right"},null,-1)));var H=r({setup(t){const o=n("1"),r=A((()=>a.state.home.refreshChangeTime)),G=A((()=>0===E.length)),R=n("");m(r,(a=>{a&&(o.value="1",clearTimeout(R.value),R.value=setTimeout((()=>{Q()}),100))}));const E=u([]),D=n(!1),Q=async()=>{D.value=!1;const a=await l();if(D.value=!0,200===a.code){const e=(null==a?void 0:a.data)||[];E.length=0,E.push(...e)}};return c((()=>{Q()})),(a,t)=>{const l=i("ArrowTitle"),r=i("Loading"),n=i("HomeEmpty"),A=i("van-loading"),m=i("van-image"),u=i("van-collapse-item"),c=i("van-collapse");return d(),p(c,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:v((()=>[h(u,{name:"1"},{title:v((()=>[h(l,{class:"mt10 mb10",src:y("data:image/png;base64,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"),text:a.$t("home.hotMatch")},null,8,["src","text"])])),default:v((()=>[f("div",Z,[f("div",{class:b(["Hot-Match-Group",[{noData:y(G)}]])},[D.value?(d(),k(g,{key:1},[y(G)?(d(),p(n,{key:0})):(d(!0),k(g,{key:1},M(y(E),((a,t)=>(d(),p(m,{key:t,src:y(e)(a.icon),fit:"contain","lazy-load":"",onClick:e=>(a=>{const{leagueId:e,gameType:t}=a;s.push({name:"Sport",query:{leagueId:e},params:{type:t}})})(a)},{loading:v((()=>[h(A,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:v((()=>[w])),_:2},1032,["src","onClick"])))),128))],64)):(d(),p(r,{key:0}))],2),y(G)?T("",!0):(d(),k(g,{key:0},[O,C],64))])])),_:1})])),_:1},8,["modelValue"])}}});H.__scopeId="data-v-07d31f3e";const K={class:"goodMatch"};var P=r({setup(e){const l=t,r=A((()=>a.state.home.refreshChangeTime)),b=n(""),G=n("1"),R=n();m(r,(a=>{var e;a&&(null==(e=R.value)||e.resetParams(),G.value="1",clearTimeout(b.value),b.value=setTimeout((()=>{j()}),100))}));const D=u([]),Q=n(!1),j=async(a="FT")=>{const e={gradeType:1,gameType:a,startDate:l().format("YYYY-MM-DD")+" 00:00:00",endDate:l().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"};Q.value=!1;const s=await o(e);if(Q.value=!0,200===s.code){const a=(null==s?void 0:s.data)||{},{baseData:e}=a;D.length=0,D.push(...e),console.log(D),console.log((r="gameDate",n=[],A=[],(t=D).map(((a,e)=>{if(-1===n.indexOf(t[e][r]))A.push({[r]:t[e][r],dataInfo:[t[e]]}),n.push(t[e][r]);else for(let s=0;s<A.length;s++)if(A[s][r]===t[e][r]){A[s].dataInfo.push(t[e]);break}})),A))}var t,r,n,A},S=a=>{Z.value=a,j(a)};c((()=>{j()}));const Z=n("FT"),w=()=>{s.push({name:"Sport",params:{type:Z.value}})};return(a,e)=>{const s=i("ArrowTitle"),t=i("SportsTabs"),l=i("Loading"),o=i("HomeEmpty"),r=i("HomeMatchHandicap"),n=i("van-collapse-item"),A=i("van-collapse");return d(),p(A,{modelValue:G.value,"onUpdate:modelValue":e[0]||(e[0]=a=>G.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:v((()=>[h(n,{name:"1"},{title:v((()=>[h(s,{class:"mt10",src:y(Y),text:a.$t("home.goofMatch")},null,8,["src","text"])])),default:v((()=>[f("div",K,[h(t,{ref_key:"refSportsTabs",ref:R,class:"pb10 pt10",onReturnSportsSuccess:S},null,512),Q.value?(d(),k(g,{key:1},[y(D).length?T("",!0):(d(),p(o,{key:0})),(d(!0),k(g,null,M(y(D),((a,e)=>(d(),p(r,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))],64)):(d(),p(l,{key:0})),y(D).length?(d(),k("div",{key:2,class:"Button-MatchMore mt10",onClick:w},[f("span",null,E(a.$t("home.lookMoreMatch")),1)])):T("",!0)])])),_:1})])),_:1},8,["modelValue"])}}});const U={class:"LatestMatch"};var z=r({setup(e){const l=t,r=A((()=>a.state.home.refreshChangeTime)),b=n(""),G=n("1"),R=n();m(r,(a=>{var e;a&&(null==(e=R.value)||e.resetParams(),G.value="1",clearTimeout(b.value),b.value=setTimeout((()=>{Y()}),100))}));const D=u([]),Q=n(!1),Y=async(a="FT")=>{Q.value=!1;const e={gradeType:2,gameType:a,startDate:l().format("YYYY-MM-DD")+" 00:00:00",endDate:l().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"},s=await o(e);if(Q.value=!0,200===s.code){const a=(null==s?void 0:s.data)||{},{baseData:e}=a;D.length=0,D.push(...e)}},S=()=>{s.push({name:"HomeTime"})},Z=a=>{Y(a)};return c((()=>{Y()})),(a,e)=>{const s=i("ArrowTitle"),t=i("SportsTabs"),l=i("Loading"),o=i("HomeEmpty"),r=i("HomeMatchHandicap"),n=i("van-collapse-item"),A=i("van-collapse");return d(),p(A,{modelValue:G.value,"onUpdate:modelValue":e[0]||(e[0]=a=>G.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:v((()=>[h(n,{name:"1"},{title:v((()=>[h(s,{src:y(j),text:a.$t("home.latestMatch"),class:"mt10"},null,8,["src","text"])])),default:v((()=>[f("div",U,[h(t,{ref_key:"refSportsTabs",ref:R,class:"pb10 pt10",onReturnSportsSuccess:Z},null,512),Q.value?(d(),k(g,{key:1},[y(D).length?(d(!0),k(g,{key:1},M(y(D),((a,e)=>(d(),p(r,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128)):(d(),p(o,{key:0,class:"marginAuto"}))],64)):(d(),p(l,{key:0})),y(D).length?(d(),k("div",{key:2,class:"Button-MatchMore mt10",onClick:S},[f("span",null,E(a.$t("home.lookMoreMatch")),1)])):T("",!0)])])),_:1})])),_:1},8,["modelValue"])}}});const x={class:"home-page"};var J=r({setup:e=>(D((()=>{})),Q((()=>{a.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),a.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),a.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})})),(a,e)=>{const s=i("FooterHeight");return d(),k("div",x,[h(H,{ref:"refHotMatch"},null,512),h(P,{ref:"refGoodMatch"},null,512),h(z,{ref:"refLatestMatch"},null,512),h(s)])})});J.__scopeId="data-v-b141c0de";export{J as default};
