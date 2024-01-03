import{s as a,b as e,d as t,w as s,e as o,M as l,r as n,o as r,R as c,q as u,u as m,O as i,x as d,y as p,P as v,Y as h,c as y,F as g,Z as f,a2 as M,T,W as k,X as Y,S as D,j as b,_ as x}from"./vue.e791136f.js";import{t as S}from"./title-hot.051aaea8.js";import{s as H,i as w,g as _,D as j}from"./index.3dbe43d3.js";import{f as C,r as I}from"./index.98ee33ca.js";import{t as R}from"./title-recommend.c76591a9.js";import{t as L}from"./title-time.7628940e.js";const $=a=>(k("data-v-428d875a"),a=a(),Y(),a),q={class:"Hot-Match-Group-Warp"},A=$((()=>v("div",{class:"onImgError"},null,-1))),E=$((()=>v("div",{class:"mask-left",style:{display:"none"}},null,-1))),F=$((()=>v("div",{class:"mask-right"},null,-1)));var G=a({setup(a){const k=e((()=>H.state.home.refreshChangeTime)),Y=e((()=>0===b.length)),D=t("");s(k,(a=>{a&&(clearTimeout(D.value),D.value=setTimeout((()=>{I.value=!1,j()}),100))}));const b=o([]),x=t(!1),j=async()=>{x.value=!1;const a=await C();if(x.value=!0,200===a.code){const e=(null==a?void 0:a.data)||[];b.length=0,b.push(...e)}};l((()=>{j()}));const I=t(!1),R=a=>{I.value=a},L=(a,e,t,s)=>{var o=t-a,l=s-e,n=0;if(Math.abs(o)<2&&Math.abs(l)<2)return n;var r=((a,e)=>180*Math.atan2(e,a)/Math.PI)(o,l);return r>=-135&&r<=-45?n=1:r>45&&r<135?n=2:r>=135&&r<=180||r>=-180&&r<-135?n=3:r>=-45&&r<=45&&(n=4),n},$=t({}),G=t({}),P=t({});return(a,e)=>{const t=n("ArrowTitle"),s=n("Loading"),o=n("HomeEmpty"),l=n("van-loading"),k=n("van-image");return r(),c(g,null,[u(t,{class:"mt10 mb10",src:m(S),text:a.$t("home.hotMatch"),onReturnSuccess:R},null,8,["src","text"]),u(T,null,{default:i((()=>[d(v("div",q,[v("div",{class:h(["Hot-Match-Group",[{noData:m(Y)}]]),onTouchstart:e[0]||(e[0]=a=>(a=>{const e=a.targetTouches[0];$.value={x:e.pageX,y:e.pageY,time:new Date}})(a)),onTouchmove:e[1]||(e[1]=a=>(a=>{const e=a.changedTouches[0];G.value={x:e.pageX,y:e.pageY,timeStemp:new Date};const{x:t,y:s}=$.value;P.value=L(t,s,G.value.x,G.value.y)})(a))},[x.value?(r(),c(g,{key:1},[m(Y)?(r(),y(o,{key:0})):(r(!0),c(g,{key:1},f(m(b),((a,e)=>(r(),y(k,{key:e,src:m(w)(a.icon),fit:"contain","lazy-load":"",onClick:e=>(a=>{const{leagueId:e,gameType:t}=a;_.push({name:"Sport",query:{leagueId:e},params:{type:t}})})(a)},{loading:i((()=>[u(l,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:i((()=>[A])),_:2},1032,["src","onClick"])))),128))],64)):(r(),y(s,{key:0}))],34),m(Y)?M("",!0):(r(),c(g,{key:0},[E,F],64))],512),[[p,!I.value]])])),_:1})],64)}}});G.__scopeId="data-v-428d875a";const P={key:0,class:"goodMatch"};var X=a({setup(a){const d=j,p=e((()=>H.state.home.refreshChangeTime)),h=t("");s(p,(a=>{a&&(clearTimeout(h.value),h.value=setTimeout((()=>{S.value=!1,b()}),100))}));const k=o([]),Y=t(!1),b=async(a="FT")=>{const e={gradeType:1,gameType:a,startDate:d().format("YYYY-MM-DD")+" 00:00:00",endDate:d().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"};Y.value=!1;const t=await I(e);if(Y.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;k.length=0,k.push(...e)}},x=a=>{C.value=a,b(a)};l((()=>{b()}));const S=t(!1),w=a=>{S.value=a},C=t("FT"),L=()=>{_.push({name:"Sport",params:{type:C.value}})};return(a,e)=>{const t=n("ArrowTitle"),s=n("SportsTabs"),o=n("Loading"),l=n("HomeEmpty"),d=n("HomeMatchHandicap");return r(),c(g,null,[u(t,{class:"mt10",src:m(R),text:a.$t("home.goofMatch"),onReturnSuccess:w},null,8,["src","text"]),u(T,null,{default:i((()=>[S.value?M("",!0):(r(),c("div",P,[u(s,{class:"pb10 pt10",onReturnSportsSuccess:x}),Y.value?(r(),c(g,{key:1},[m(k).length?M("",!0):(r(),y(l,{key:0})),(r(!0),c(g,null,f(m(k),((a,e)=>(r(),y(d,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))],64)):(r(),y(o,{key:0})),m(k).length?(r(),c("div",{key:2,class:"Button-MatchMore mt10",onClick:L},[v("span",null,D(a.$t("home.lookMoreMatch")),1)])):M("",!0)]))])),_:1})],64)}}});const z={class:"LatestMatch"};var B=a({setup(a){const h=j,k=e((()=>H.state.home.refreshChangeTime)),Y=t("");s(k,(a=>{a&&(clearTimeout(Y.value),Y.value=setTimeout((()=>{R.value=!1,S()}),100))}));const b=o([]),x=t(!1),S=async(a="FT")=>{x.value=!1;const e={gradeType:2,gameType:a,startDate:h().format("YYYY-MM-DD")+" 00:00:00",endDate:h().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"},t=await I(e);if(x.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;b.length=0,b.push(...e)}},w=()=>{_.push({name:"HomeTime"})},C=a=>{S(a)};l((()=>{S()}));const R=t(!1),$=a=>{R.value=a};return(a,e)=>{const t=n("ArrowTitle"),s=n("SportsTabs"),o=n("Loading"),l=n("HomeEmpty"),h=n("HomeMatchHandicap");return r(),c(g,null,[u(t,{src:m(L),text:a.$t("home.latestMatch"),onReturnSuccess:$},null,8,["src","text"]),u(T,null,{default:i((()=>[d(v("div",z,[u(s,{class:"pb10 pt10",onReturnSportsSuccess:C}),x.value?(r(),c(g,{key:1},[m(b).length?(r(!0),c(g,{key:1},f(m(b),((a,e)=>(r(),y(h,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128)):(r(),y(l,{key:0,class:"marginAuto"}))],64)):(r(),y(o,{key:0})),m(b).length?(r(),c("div",{key:2,class:"Button-MatchMore mt10",onClick:w},[v("span",null,D(a.$t("home.lookMoreMatch")),1)])):M("",!0)],512),[[p,!R.value]])])),_:1})],64)}}});const O={class:"home-page"},W=(a=>(k("data-v-27bc153e"),a=a(),Y(),a))((()=>v("div",{class:"footerHeight"},null,-1)));var J=a({setup(a){const e=x();return b((()=>{if(e.query.gidm){const a=JSON.parse(e.query.obj);H.dispatch("betting/setMoreShow",{status:!0,moreParams:a})}})),(a,e)=>(r(),c("div",O,[u(G,{ref:"refHotMatch"},null,512),u(X,{ref:"refGoodMatch"},null,512),u(B,{ref:"refLatestMatch"},null,512),W]))}});J.__scopeId="data-v-27bc153e";export{J as default};
