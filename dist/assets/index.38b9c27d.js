import{t as a}from"./title-hot.2c430aaf.js";import{s as e,i as t,g as s,D as l}from"./index.5445737f.js";import{f as o,r as n}from"./index.af71c3e5.js";import{s as r,d as c,b as u,w as m,e as d,M as i,r as p,o as h,c as v,O as f,q as y,u as g,P as M,Z as k,R as T,F as b,_ as D,a2 as Y,X as S,Y as w,S as H,j as V,f as _,$ as x}from"./vue.b4a9caec.js";import{t as C}from"./title-recommend.753ea118.js";import{t as j}from"./title-time.ab77a541.js";const I=a=>(S("data-v-52c3577a"),a=a(),w(),a),G={class:"Hot-Match-Group-Warp"},$=I((()=>M("div",{class:"onImgError"},null,-1))),F=I((()=>M("div",{class:"mask-left",style:{display:"none"}},null,-1))),L=I((()=>M("div",{class:"mask-right"},null,-1)));var q=r({setup(l){const n=c("1"),r=u((()=>e.state.home.refreshChangeTime)),S=u((()=>0===H.length)),w=c("");m(r,(a=>{a&&(clearTimeout(w.value),w.value=setTimeout((()=>{n.value="1",_()}),100))}));const H=d([]),V=c(!1),_=async()=>{V.value=!1;const a=await o();if(V.value=!0,200===a.code){const e=(null==a?void 0:a.data)||[];H.length=0,H.push(...e)}};return i((()=>{_()})),(e,l)=>{const o=p("ArrowTitle"),r=p("Loading"),c=p("HomeEmpty"),u=p("van-loading"),m=p("van-image"),d=p("van-collapse-item"),i=p("van-collapse");return h(),v(i,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:f((()=>[y(d,{name:"1"},{title:f((()=>[y(o,{class:"mt10 mb10",src:g(a),text:e.$t("home.hotMatch")},null,8,["src","text"])])),default:f((()=>[M("div",G,[M("div",{class:k(["Hot-Match-Group",[{noData:g(S)}]])},[V.value?(h(),T(b,{key:1},[g(S)?(h(),v(c,{key:0})):(h(!0),T(b,{key:1},D(g(H),((a,e)=>(h(),v(m,{key:e,src:g(t)(a.icon),fit:"contain","lazy-load":"",onClick:e=>(a=>{const{leagueId:e,gameType:t}=a;s.push({name:"Sport",query:{leagueId:e},params:{type:t}})})(a)},{loading:f((()=>[y(u,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:f((()=>[$])),_:2},1032,["src","onClick"])))),128))],64)):(h(),v(r,{key:0}))],2),g(S)?Y("",!0):(h(),T(b,{key:0},[F,L],64))])])),_:1})])),_:1},8,["modelValue"])}}});q.__scopeId="data-v-52c3577a";const A={class:"goodMatch"};var E=r({setup(a){const t=l,o=u((()=>e.state.home.refreshChangeTime)),r=c(""),k=c("1");m(o,(a=>{a&&(clearTimeout(r.value),r.value=setTimeout((()=>{k.value="1",V()}),100))}));const S=d([]),w=c(!1),V=async(a="FT")=>{const e={gradeType:1,gameType:a,startDate:t().format("YYYY-MM-DD")+" 00:00:00",endDate:t().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"};w.value=!1;const s=await n(e);if(w.value=!0,200===s.code){const a=(null==s?void 0:s.data)||{},{baseData:e}=a;S.length=0,S.push(...e),console.log(S),console.log((o="gameDate",r=[],c=[],(l=S).map(((a,e)=>{if(-1===r.indexOf(l[e][o]))c.push({[o]:l[e][o],dataInfo:[l[e]]}),r.push(l[e][o]);else for(let t=0;t<c.length;t++)if(c[t][o]===l[e][o]){c[t].dataInfo.push(l[e]);break}})),c))}var l,o,r,c},_=a=>{x.value=a,V(a)};i((()=>{V()}));const x=c("FT"),j=()=>{s.push({name:"Sport",params:{type:x.value}})};return(a,e)=>{const t=p("ArrowTitle"),s=p("SportsTabs"),l=p("Loading"),o=p("HomeEmpty"),n=p("HomeMatchHandicap"),r=p("van-collapse-item"),c=p("van-collapse");return h(),v(c,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=a=>k.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:f((()=>[y(r,{name:"1"},{title:f((()=>[y(t,{class:"mt10",src:g(C),text:a.$t("home.goofMatch")},null,8,["src","text"])])),default:f((()=>[M("div",A,[y(s,{class:"pb10 pt10",onReturnSportsSuccess:_}),w.value?(h(),T(b,{key:1},[g(S).length?Y("",!0):(h(),v(o,{key:0})),(h(!0),T(b,null,D(g(S),((a,e)=>(h(),v(n,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))],64)):(h(),v(l,{key:0})),g(S).length?(h(),T("div",{key:2,class:"Button-MatchMore mt10",onClick:j},[M("span",null,H(a.$t("home.lookMoreMatch")),1)])):Y("",!0)])])),_:1})])),_:1},8,["modelValue"])}}});const O={class:"LatestMatch"};var R=r({setup(a){const t=l,o=u((()=>e.state.home.refreshChangeTime)),r=c(""),k=c("1");m(o,(a=>{a&&(clearTimeout(r.value),r.value=setTimeout((()=>{k.value="1",V()}),100))}));const S=d([]),w=c(!1),V=async(a="FT")=>{w.value=!1;const e={gradeType:2,gameType:a,startDate:t().format("YYYY-MM-DD")+" 00:00:00",endDate:t().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"},s=await n(e);if(w.value=!0,200===s.code){const a=(null==s?void 0:s.data)||{},{baseData:e}=a;S.length=0,S.push(...e)}},_=()=>{s.push({name:"HomeTime"})},x=a=>{V(a)};return i((()=>{V()})),(a,e)=>{const t=p("ArrowTitle"),s=p("SportsTabs"),l=p("Loading"),o=p("HomeEmpty"),n=p("HomeMatchHandicap"),r=p("van-collapse-item"),c=p("van-collapse");return h(),v(c,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=a=>k.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:f((()=>[y(r,{name:"1"},{title:f((()=>[y(t,{src:g(j),text:a.$t("home.latestMatch"),class:"mt10"},null,8,["src","text"])])),default:f((()=>[M("div",O,[y(s,{class:"pb10 pt10",onReturnSportsSuccess:x}),w.value?(h(),T(b,{key:1},[g(S).length?(h(!0),T(b,{key:1},D(g(S),((a,e)=>(h(),v(n,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128)):(h(),v(o,{key:0,class:"marginAuto"}))],64)):(h(),v(l,{key:0})),g(S).length?(h(),T("div",{key:2,class:"Button-MatchMore mt10",onClick:_},[M("span",null,H(a.$t("home.lookMoreMatch")),1)])):Y("",!0)])])),_:1})])),_:1},8,["modelValue"])}}});const U={class:"home-page"};var K=r({setup(a){const t=x();return V((()=>{if(t.query.gidm){const a=JSON.parse(t.query.obj);e.dispatch("betting/setMoreShow",{status:!0,moreParams:a})}})),_((()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!0}),e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!0}),e.dispatch("home/setKeyValue",{key:"MrefShow",value:!0})})),(a,e)=>{const t=p("FooterHeight");return h(),T("div",U,[y(q,{ref:"refHotMatch"},null,512),y(E,{ref:"refGoodMatch"},null,512),y(R,{ref:"refLatestMatch"},null,512),y(t)])}}});K.__scopeId="data-v-0e099cc4";export{K as default};
