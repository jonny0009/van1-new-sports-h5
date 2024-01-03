import{s as a,b as e,d as t,w as s,e as o,M as l,r as n,o as r,R as c,q as u,u as m,O as i,x as d,y as p,P as h,Y as v,c as f,F as y,Z as g,a2 as M,T as k,W as T,X as b,S as D,j as Y,_ as S}from"./vue.979f7bee.js";import{t as x}from"./title-hot.2c430aaf.js";import{s as H,i as w,g as _,D as j}from"./index.9c8ae8fd.js";import{f as C,r as I}from"./index.057e19be.js";import{t as R}from"./title-recommend.753ea118.js";import{t as F}from"./title-time.ab77a541.js";const L=a=>(T("data-v-37932fdf"),a=a(),b(),a),$={class:"Hot-Match-Group-Warp"},q=L((()=>h("div",{class:"onImgError"},null,-1))),A=L((()=>h("div",{class:"mask-left",style:{display:"none"}},null,-1))),E=L((()=>h("div",{class:"mask-right"},null,-1)));var G=a({setup(a){const T=e((()=>H.state.home.refreshChangeTime)),b=e((()=>0===Y.length)),D=t("");s(T,(a=>{a&&(clearTimeout(D.value),D.value=setTimeout((()=>{I.value=!1,j()}),100))}));const Y=o([]),S=t(!1),j=async()=>{S.value=!1;const a=await C();if(S.value=!0,200===a.code){const e=(null==a?void 0:a.data)||[];Y.length=0,Y.push(...e)}};l((()=>{j()}));const I=t(!1),R=a=>{I.value=a};return(a,e)=>{const t=n("ArrowTitle"),s=n("Loading"),o=n("HomeEmpty"),l=n("van-loading"),T=n("van-image");return r(),c(y,null,[u(t,{class:"mt10 mb10",src:m(x),text:a.$t("home.hotMatch"),onReturnSuccess:R},null,8,["src","text"]),u(k,null,{default:i((()=>[d(h("div",$,[h("div",{class:v(["Hot-Match-Group",[{noData:m(b)}]])},[S.value?(r(),c(y,{key:1},[m(b)?(r(),f(o,{key:0})):(r(!0),c(y,{key:1},g(m(Y),((a,e)=>(r(),f(T,{key:e,src:m(w)(a.icon),fit:"contain","lazy-load":"",onClick:e=>(a=>{const{leagueId:e,gameType:t}=a;_.push({name:"Sport",query:{leagueId:e},params:{type:t}})})(a)},{loading:i((()=>[u(l,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:i((()=>[q])),_:2},1032,["src","onClick"])))),128))],64)):(r(),f(s,{key:0}))],2),m(b)?M("",!0):(r(),c(y,{key:0},[A,E],64))],512),[[p,!I.value]])])),_:1})],64)}}});G.__scopeId="data-v-37932fdf";const O={key:0,class:"goodMatch"};var z=a({setup(a){const d=j,p=e((()=>H.state.home.refreshChangeTime)),v=t("");s(p,(a=>{a&&(clearTimeout(v.value),v.value=setTimeout((()=>{x.value=!1,Y()}),100))}));const T=o([]),b=t(!1),Y=async(a="FT")=>{const e={gradeType:1,gameType:a,startDate:d().format("YYYY-MM-DD")+" 00:00:00",endDate:d().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"};b.value=!1;const t=await I(e);if(b.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;T.length=0,T.push(...e),console.log(T),console.log((o="gameDate",l=[],n=[],(s=T).map(((a,e)=>{if(-1===l.indexOf(s[e][o]))n.push({[o]:s[e][o],dataInfo:[s[e]]}),l.push(s[e][o]);else for(let t=0;t<n.length;t++)if(n[t][o]===s[e][o]){n[t].dataInfo.push(s[e]);break}})),n))}var s,o,l,n},S=a=>{C.value=a,Y(a)};l((()=>{Y()}));const x=t(!1),w=a=>{x.value=a},C=t("FT"),F=()=>{_.push({name:"Sport",params:{type:C.value}})};return(a,e)=>{const t=n("ArrowTitle"),s=n("SportsTabs"),o=n("Loading"),l=n("HomeEmpty"),d=n("HomeMatchHandicap");return r(),c(y,null,[u(t,{class:"mt10",src:m(R),text:a.$t("home.goofMatch"),onReturnSuccess:w},null,8,["src","text"]),u(k,null,{default:i((()=>[x.value?M("",!0):(r(),c("div",O,[u(s,{class:"pb10 pt10",onReturnSportsSuccess:S}),b.value?(r(),c(y,{key:1},[m(T).length?M("",!0):(r(),f(l,{key:0})),(r(!0),c(y,null,g(m(T),((a,e)=>(r(),f(d,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))],64)):(r(),f(o,{key:0})),m(T).length?(r(),c("div",{key:2,class:"Button-MatchMore mt10",onClick:F},[h("span",null,D(a.$t("home.lookMoreMatch")),1)])):M("",!0)]))])),_:1})],64)}}});const B={class:"LatestMatch"};var P=a({setup(a){const v=j,T=e((()=>H.state.home.refreshChangeTime)),b=t("");s(T,(a=>{a&&(clearTimeout(b.value),b.value=setTimeout((()=>{R.value=!1,x()}),100))}));const Y=o([]),S=t(!1),x=async(a="FT")=>{S.value=!1;const e={gradeType:2,gameType:a,startDate:v().format("YYYY-MM-DD")+" 00:00:00",endDate:v().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"},t=await I(e);if(S.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;Y.length=0,Y.push(...e)}},w=()=>{_.push({name:"HomeTime"})},C=a=>{x(a)};l((()=>{x()}));const R=t(!1),L=a=>{R.value=a};return(a,e)=>{const t=n("ArrowTitle"),s=n("SportsTabs"),o=n("Loading"),l=n("HomeEmpty"),v=n("HomeMatchHandicap");return r(),c(y,null,[u(t,{src:m(F),text:a.$t("home.latestMatch"),class:"mt10",onReturnSuccess:L},null,8,["src","text"]),u(k,null,{default:i((()=>[d(h("div",B,[u(s,{class:"pb10 pt10",onReturnSportsSuccess:C}),S.value?(r(),c(y,{key:1},[m(Y).length?(r(!0),c(y,{key:1},g(m(Y),((a,e)=>(r(),f(v,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128)):(r(),f(l,{key:0,class:"marginAuto"}))],64)):(r(),f(o,{key:0})),m(Y).length?(r(),c("div",{key:2,class:"Button-MatchMore mt10",onClick:w},[h("span",null,D(a.$t("home.lookMoreMatch")),1)])):M("",!0)],512),[[p,!R.value]])])),_:1})],64)}}});const W={class:"home-page"};var J=a({setup(a){const e=S();return Y((()=>{if(e.query.gidm){const a=JSON.parse(e.query.obj);H.dispatch("betting/setMoreShow",{status:!0,moreParams:a})}})),(a,e)=>{const t=n("FooterHeight");return r(),c("div",W,[u(G,{ref:"refHotMatch"},null,512),u(z,{ref:"refGoodMatch"},null,512),u(P,{ref:"refLatestMatch"},null,512),u(t)])}}});J.__scopeId="data-v-22bfc87a";export{J as default};
