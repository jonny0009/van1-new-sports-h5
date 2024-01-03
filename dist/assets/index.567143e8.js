import{s as a,b as e,d as t,w as s,e as o,M as l,r as n,o as r,R as c,q as u,u as m,O as i,x as d,y as p,P as h,Y as v,c as y,F as f,Z as g,a2 as M,T as k,W as T,X as Y,S as b,j as D,_ as S}from"./vue.979f7bee.js";import{t as H}from"./title-hot.2c430aaf.js";import{s as x,i as w,g as _,D as j}from"./index.d3976e45.js";import{f as C,r as R}from"./index.d202e4b4.js";import{t as F}from"./title-recommend.753ea118.js";import{t as I}from"./title-time.ab77a541.js";const L=a=>(T("data-v-37932fdf"),a=a(),Y(),a),$={class:"Hot-Match-Group-Warp"},q=L((()=>h("div",{class:"onImgError"},null,-1))),A=L((()=>h("div",{class:"mask-left",style:{display:"none"}},null,-1))),E=L((()=>h("div",{class:"mask-right"},null,-1)));var G=a({setup(a){const T=e((()=>x.state.home.refreshChangeTime)),Y=e((()=>0===D.length)),b=t("");s(T,(a=>{a&&(clearTimeout(b.value),b.value=setTimeout((()=>{R.value=!1,j()}),100))}));const D=o([]),S=t(!1),j=async()=>{S.value=!1;const a=await C();if(S.value=!0,200===a.code){const e=(null==a?void 0:a.data)||[];D.length=0,D.push(...e)}};l((()=>{j()}));const R=t(!1),F=a=>{R.value=a};return(a,e)=>{const t=n("ArrowTitle"),s=n("Loading"),o=n("HomeEmpty"),l=n("van-loading"),T=n("van-image");return r(),c(f,null,[u(t,{class:"mt10 mb10",src:m(H),text:a.$t("home.hotMatch"),onReturnSuccess:F},null,8,["src","text"]),u(k,null,{default:i((()=>[d(h("div",$,[h("div",{class:v(["Hot-Match-Group",[{noData:m(Y)}]])},[S.value?(r(),c(f,{key:1},[m(Y)?(r(),y(o,{key:0})):(r(!0),c(f,{key:1},g(m(D),((a,e)=>(r(),y(T,{key:e,src:m(w)(a.icon),fit:"contain","lazy-load":"",onClick:e=>(a=>{const{leagueId:e,gameType:t}=a;_.push({name:"Sport",query:{leagueId:e},params:{type:t}})})(a)},{loading:i((()=>[u(l,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:i((()=>[q])),_:2},1032,["src","onClick"])))),128))],64)):(r(),y(s,{key:0}))],2),m(Y)?M("",!0):(r(),c(f,{key:0},[A,E],64))],512),[[p,!R.value]])])),_:1})],64)}}});G.__scopeId="data-v-37932fdf";const z={key:0,class:"goodMatch"};var B=a({setup(a){const d=j,p=e((()=>x.state.home.refreshChangeTime)),v=t("");s(p,(a=>{a&&(clearTimeout(v.value),v.value=setTimeout((()=>{H.value=!1,D()}),100))}));const T=o([]),Y=t(!1),D=async(a="FT")=>{const e={gradeType:1,gameType:a,startDate:d().format("YYYY-MM-DD")+" 00:00:00",endDate:d().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"};Y.value=!1;const t=await R(e);if(Y.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;T.length=0,T.push(...e),console.log(T)}},S=a=>{C.value=a,D(a)};l((()=>{D()}));const H=t(!1),w=a=>{H.value=a},C=t("FT"),I=()=>{_.push({name:"Sport",params:{type:C.value}})};return(a,e)=>{const t=n("ArrowTitle"),s=n("SportsTabs"),o=n("Loading"),l=n("HomeEmpty"),d=n("HomeMatchHandicap");return r(),c(f,null,[u(t,{class:"mt10",src:m(F),text:a.$t("home.goofMatch"),onReturnSuccess:w},null,8,["src","text"]),u(k,null,{default:i((()=>[H.value?M("",!0):(r(),c("div",z,[u(s,{class:"pb10 pt10",onReturnSportsSuccess:S}),Y.value?(r(),c(f,{key:1},[m(T).length?M("",!0):(r(),y(l,{key:0})),(r(!0),c(f,null,g(m(T),((a,e)=>(r(),y(d,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))],64)):(r(),y(o,{key:0})),m(T).length?(r(),c("div",{key:2,class:"Button-MatchMore mt10",onClick:I},[h("span",null,b(a.$t("home.lookMoreMatch")),1)])):M("",!0)]))])),_:1})],64)}}});const O={class:"LatestMatch"};var P=a({setup(a){const v=j,T=e((()=>x.state.home.refreshChangeTime)),Y=t("");s(T,(a=>{a&&(clearTimeout(Y.value),Y.value=setTimeout((()=>{F.value=!1,H()}),100))}));const D=o([]),S=t(!1),H=async(a="FT")=>{S.value=!1;const e={gradeType:2,gameType:a,startDate:v().format("YYYY-MM-DD")+" 00:00:00",endDate:v().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"},t=await R(e);if(S.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;D.length=0,D.push(...e)}},w=()=>{_.push({name:"HomeTime"})},C=a=>{H(a)};l((()=>{H()}));const F=t(!1),L=a=>{F.value=a};return(a,e)=>{const t=n("ArrowTitle"),s=n("SportsTabs"),o=n("Loading"),l=n("HomeEmpty"),v=n("HomeMatchHandicap");return r(),c(f,null,[u(t,{src:m(I),text:a.$t("home.latestMatch"),class:"mt10",onReturnSuccess:L},null,8,["src","text"]),u(k,null,{default:i((()=>[d(h("div",O,[u(s,{class:"pb10 pt10",onReturnSportsSuccess:C}),S.value?(r(),c(f,{key:1},[m(D).length?(r(!0),c(f,{key:1},g(m(D),((a,e)=>(r(),y(v,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128)):(r(),y(l,{key:0,class:"marginAuto"}))],64)):(r(),y(o,{key:0})),m(D).length?(r(),c("div",{key:2,class:"Button-MatchMore mt10",onClick:w},[h("span",null,b(a.$t("home.lookMoreMatch")),1)])):M("",!0)],512),[[p,!F.value]])])),_:1})],64)}}});const W={class:"home-page"};var J=a({setup(a){const e=S();return D((()=>{if(e.query.gidm){const a=JSON.parse(e.query.obj);x.dispatch("betting/setMoreShow",{status:!0,moreParams:a})}})),(a,e)=>{const t=n("FooterHeight");return r(),c("div",W,[u(G,{ref:"refHotMatch"},null,512),u(B,{ref:"refGoodMatch"},null,512),u(P,{ref:"refLatestMatch"},null,512),u(t)])}}});J.__scopeId="data-v-22bfc87a";export{J as default};
