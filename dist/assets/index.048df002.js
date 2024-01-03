import{s as a,b as e,d as t,w as s,e as o,M as l,r as n,o as r,R as u,q as c,u as m,O as i,x as d,y as p,P as v,Y as h,c as y,F as g,Z as f,a2 as M,T,W as k,X as Y,S as D,j as x,_ as S}from"./vue.93da156d.js";import{t as b}from"./title-hot.051aaea8.js";import{s as H,i as w,g as _,D as j}from"./index.5a91871f.js";import{f as C,r as I}from"./index.39ec287f.js";import{t as R}from"./title-recommend.c76591a9.js";import{t as L}from"./title-time.7628940e.js";const $=a=>(k("data-v-220d4f0f"),a=a(),Y(),a),q={class:"Hot-Match-Group-Warp"},A=$((()=>v("div",{class:"onImgError"},null,-1))),E=$((()=>v("div",{class:"mask-left",style:{display:"none"}},null,-1))),F=$((()=>v("div",{class:"mask-right"},null,-1)));var G=a({setup(a){const k=e((()=>H.state.home.refreshChangeTime)),Y=e((()=>0===x.length)),D=t("");s(k,(a=>{a&&(clearTimeout(D.value),D.value=setTimeout((()=>{I.value=!1,j()}),100))}));const x=o([]),S=t(!1),j=async()=>{S.value=!1;const a=await C();if(S.value=!0,200===a.code){const e=(null==a?void 0:a.data)||[];x.length=0,x.push(...e)}};l((()=>{j()}));const I=t(!1),R=a=>{I.value=a},L=(a,e,t,s)=>{var o=t-a,l=s-e,n=0;if(Math.abs(o)<2&&Math.abs(l)<2)return n;var r=((a,e)=>180*Math.atan2(e,a)/Math.PI)(o,l);return r>=-135&&r<=-45?n=1:r>45&&r<135?n=2:r>=135&&r<=180||r>=-180&&r<-135?n=3:r>=-45&&r<=45&&(n=4),n},$=t({}),G=t({}),P=t({});return(a,e)=>{const t=n("ArrowTitle"),s=n("Loading"),o=n("HomeEmpty"),l=n("van-loading"),k=n("van-image");return r(),u(g,null,[c(t,{class:"mt10 mb10",src:m(b),text:a.$t("home.hotMatch"),onReturnSuccess:R},null,8,["src","text"]),c(T,null,{default:i((()=>[d(v("div",q,[v("div",{class:h(["Hot-Match-Group",[{noData:m(Y)}]]),onTouchstart:e[0]||(e[0]=a=>(a=>{const e=a.targetTouches[0];$.value={x:e.pageX,y:e.pageY,time:new Date}})(a)),onTouchmove:e[1]||(e[1]=a=>(a=>{const e=a.changedTouches[0];G.value={x:e.pageX,y:e.pageY,timeStemp:new Date};const{x:t,y:s}=$.value;P.value=L(t,s,G.value.x,G.value.y)})(a))},[S.value?(r(),u(g,{key:1},[m(Y)?(r(),y(o,{key:0})):(r(!0),u(g,{key:1},f(m(x),((a,e)=>(r(),y(k,{key:e,src:m(w)(a.icon),fit:"contain","lazy-load":"",onClick:e=>(a=>{const{leagueId:e,gameType:t}=a;_.push({name:"Sport",query:{leagueId:e},params:{type:t}})})(a)},{loading:i((()=>[c(l,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:i((()=>[A])),_:2},1032,["src","onClick"])))),128))],64)):(r(),y(s,{key:0}))],34),m(Y)?M("",!0):(r(),u(g,{key:0},[E,F],64))],512),[[p,!I.value]])])),_:1})],64)}}});G.__scopeId="data-v-220d4f0f";const P={key:0,class:"goodMatch"};var X=a({setup(a){const d=j,p=e((()=>H.state.home.refreshChangeTime)),h=t("");s(p,(a=>{a&&(clearTimeout(h.value),h.value=setTimeout((()=>{b.value=!1,x()}),100))}));const k=o([]),Y=t(!1),x=async(a="FT")=>{const e={gradeType:1,gameType:a,startDate:d().format("YYYY-MM-DD")+" 00:00:00",endDate:d().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"};Y.value=!1;const t=await I(e);if(Y.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;k.length=0,k.push(...e)}},S=a=>{C.value=a,x(a)};l((()=>{x()}));const b=t(!1),w=a=>{b.value=a},C=t("FT"),L=()=>{_.push({name:"Sport",params:{type:C.value}})};return(a,e)=>{const t=n("ArrowTitle"),s=n("SportsTabs"),o=n("Loading"),l=n("HomeEmpty"),d=n("HomeMatchHandicap");return r(),u(g,null,[c(t,{class:"mt10",src:m(R),text:a.$t("home.goofMatch"),onReturnSuccess:w},null,8,["src","text"]),c(T,null,{default:i((()=>[b.value?M("",!0):(r(),u("div",P,[c(s,{class:"pb10 pt10",onReturnSportsSuccess:S}),Y.value?(r(),u(g,{key:1},[m(k).length?M("",!0):(r(),y(l,{key:0})),(r(!0),u(g,null,f(m(k),((a,e)=>(r(),y(d,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))],64)):(r(),y(o,{key:0})),m(k).length?(r(),u("div",{key:2,class:"Button-MatchMore mt10",onClick:L},[v("span",null,D(a.$t("home.lookMoreMatch")),1)])):M("",!0)]))])),_:1})],64)}}});const z={class:"LatestMatch"};var B=a({setup(a){const h=j,k=e((()=>H.state.home.refreshChangeTime)),Y=t("");s(k,(a=>{a&&(clearTimeout(Y.value),Y.value=setTimeout((()=>{R.value=!1,b()}),100))}));const x=o([]),S=t(!1),b=async(a="FT")=>{S.value=!1;const e={gradeType:2,gameType:a,startDate:h().format("YYYY-MM-DD")+" 00:00:00",endDate:h().add(1,"day").format("YYYY-MM-DD")+" 23:59:59"},t=await I(e);if(S.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;x.length=0,x.push(...e)}},w=()=>{_.push({name:"HomeTime"})},C=a=>{b(a)};l((()=>{b()}));const R=t(!1),$=a=>{R.value=a};return(a,e)=>{const t=n("ArrowTitle"),s=n("SportsTabs"),o=n("Loading"),l=n("HomeEmpty"),h=n("HomeMatchHandicap");return r(),u(g,null,[c(t,{src:m(L),text:a.$t("home.latestMatch"),onReturnSuccess:$},null,8,["src","text"]),c(T,null,{default:i((()=>[d(v("div",z,[c(s,{class:"pb10 pt10",onReturnSportsSuccess:C}),S.value?(r(),u(g,{key:1},[m(x).length?(r(!0),u(g,{key:1},f(m(x),((a,e)=>(r(),y(h,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128)):(r(),y(l,{key:0,class:"marginAuto"}))],64)):(r(),y(o,{key:0})),m(x).length?(r(),u("div",{key:2,class:"Button-MatchMore mt10",onClick:w},[v("span",null,D(a.$t("home.lookMoreMatch")),1)])):M("",!0)],512),[[p,!R.value]])])),_:1})],64)}}});const O={class:"home-page"},W=(a=>(k("data-v-5988e28a"),a=a(),Y(),a))((()=>v("div",{class:"footerHeight"},null,-1)));var J=a({setup(a){const e=S();return x((()=>{if(e.query.gidm){const a=JSON.parse(e.query.obj);H.dispatch("betting/setMoreShow",{status:!0,moreParams:a})}})),(a,e)=>(r(),u("div",O,[c(G,{ref:"refHotMatch"},null,512),c(X,{ref:"refGoodMatch"},null,512),c(B,{ref:"refLatestMatch"},null,512),W]))}});J.__scopeId="data-v-5988e28a";export{J as default};
