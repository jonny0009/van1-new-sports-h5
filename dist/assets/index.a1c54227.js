import{s as a,b as e,d as t,w as s,e as o,M as n,r as l,o as r,R as c,q as u,u as m,O as i,x as d,y as h,P as p,Y as v,c as y,F as g,Z as f,a2 as M,T,W as k,X as D,S as b,j as Y,_ as w}from"./vue.979f7bee.js";import{t as x}from"./title-hot.3389296a.js";import{s as S,i as H,g as _,D as j}from"./index.5b12a1c5.js";import{f as C,r as I}from"./index.5a178ba9.js";import{t as R}from"./title-recommend.63e6bb28.js";import{t as L}from"./title-time.d08f0364.js";const $=a=>(k("data-v-31fd1200"),a=a(),D(),a),q={class:"Hot-Match-Group-Warp"},A=$((()=>p("div",{class:"onImgError"},null,-1))),E=$((()=>p("div",{class:"mask-left",style:{display:"none"}},null,-1))),F=$((()=>p("div",{class:"mask-right"},null,-1)));var G=a({setup(a){const k=e((()=>S.state.home.refreshChangeTime)),D=e((()=>0===Y.length)),b=t("");s(k,(a=>{a&&(clearTimeout(b.value),b.value=setTimeout((()=>{I.value=!1,j()}),100))}));const Y=o([]),w=t(!1),j=async()=>{w.value=!1;const a=await C();if(w.value=!0,200===a.code){const e=(null==a?void 0:a.data)||[];Y.length=0,Y.push(...e)}};n((()=>{j()}));const I=t(!1),R=a=>{I.value=a},L=(a,e,t,s)=>{var o=t-a,n=s-e,l=0;if(Math.abs(o)<2&&Math.abs(n)<2)return l;var r=((a,e)=>180*Math.atan2(e,a)/Math.PI)(o,n);return r>=-135&&r<=-45?l=1:r>45&&r<135?l=2:r>=135&&r<=180||r>=-180&&r<-135?l=3:r>=-45&&r<=45&&(l=4),l},$=t({}),G=t({}),P=t({});return(a,e)=>{const t=l("ArrowTitle"),s=l("Loading"),o=l("HomeEmpty"),n=l("van-loading"),k=l("van-image");return r(),c(g,null,[u(t,{class:"mt10 mb10",src:m(x),text:a.$t("home.hotMatch"),onReturnSuccess:R},null,8,["src","text"]),u(T,null,{default:i((()=>[d(p("div",q,[p("div",{class:v(["Hot-Match-Group",[{noData:m(D)}]]),onTouchstart:e[0]||(e[0]=a=>(a=>{const e=a.targetTouches[0];$.value={x:e.pageX,y:e.pageY,time:new Date}})(a)),onTouchmove:e[1]||(e[1]=a=>(a=>{const e=a.changedTouches[0];G.value={x:e.pageX,y:e.pageY,timeStemp:new Date};const{x:t,y:s}=$.value;P.value=L(t,s,G.value.x,G.value.y)})(a))},[w.value?(r(),c(g,{key:1},[m(D)?(r(),y(o,{key:0})):(r(!0),c(g,{key:1},f(m(Y),((a,e)=>(r(),y(k,{key:e,src:m(H)(a.icon),fit:"contain","lazy-load":"",onClick:e=>(a=>{const{leagueId:e,gameType:t}=a;_.push({name:"Sport",query:{leagueId:e},params:{type:t}})})(a)},{loading:i((()=>[u(n,{type:"spinner",class:"van-new-loading",size:"36px"})])),error:i((()=>[A])),_:2},1032,["src","onClick"])))),128))],64)):(r(),y(s,{key:0}))],34),m(D)?M("",!0):(r(),c(g,{key:0},[E,F],64))],512),[[h,!I.value]])])),_:1})],64)}}});G.__scopeId="data-v-31fd1200";const P={key:0,class:"goodMatch"};var X=a({setup(a){const d=j,h=e((()=>S.state.home.refreshChangeTime)),v=t("");s(h,(a=>{a&&(clearTimeout(v.value),v.value=setTimeout((()=>{x.value=!1,Y()}),100))}));const k=o([]),D=t(!1),Y=async(a="FT")=>{const e={gradeType:1,gameType:a,startDate:d(new Date).format("YYYY-MM-DD")+" 00:00:00",endDate:d(new Date).format("YYYY-MM-DD")+" 23:59:59"};D.value=!1;const t=await I(e);if(D.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;k.length=0,k.push(...e)}},w=a=>{Y(a)};n((()=>{Y()}));const x=t(!1),H=a=>{x.value=a},C=()=>{_.push({name:"Sport",params:{type:"FT"}})};return(a,e)=>{const t=l("ArrowTitle"),s=l("SportsTabs"),o=l("Loading"),n=l("HomeEmpty"),d=l("HomeMatchHandicap");return r(),c(g,null,[u(t,{class:"mt10 mb10",src:m(R),text:a.$t("home.goofMatch"),onReturnSuccess:H},null,8,["src","text"]),u(T,null,{default:i((()=>[x.value?M("",!0):(r(),c("div",P,[u(s,{class:"mb10 mt20",onReturnSportsSuccess:w}),D.value?(r(),c(g,{key:1},[m(k).length?M("",!0):(r(),y(n,{key:0})),(r(!0),c(g,null,f(m(k),((a,e)=>(r(),y(d,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128))],64)):(r(),y(o,{key:0})),m(k).length?(r(),c("div",{key:2,class:"Button-MatchMore mt10",onClick:C},[p("span",null,b(a.$t("home.lookMoreMatch")),1)])):M("",!0)]))])),_:1})],64)}}});const z={class:"LatestMatch"};var B=a({setup(a){const v=j,k=e((()=>S.state.home.refreshChangeTime)),D=t("");s(k,(a=>{a&&(clearTimeout(D.value),D.value=setTimeout((()=>{R.value=!1,x()}),100))}));const Y=o([]),w=t(!1),x=async(a="FT")=>{w.value=!1;const e={gradeType:2,gameType:a,startDate:v(new Date).format("YYYY-MM-DD")+" 00:00:00",endDate:v(new Date).format("YYYY-MM-DD")+" 23:59:59"},t=await I(e);if(w.value=!0,200===t.code){const a=(null==t?void 0:t.data)||{},{baseData:e}=a;Y.length=0,Y.push(...e)}},H=()=>{_.push({name:"HomeTime"})},C=a=>{x(a)};n((()=>{x()}));const R=t(!1),$=a=>{R.value=a};return(a,e)=>{const t=l("ArrowTitle"),s=l("SportsTabs"),o=l("Loading"),n=l("HomeEmpty"),v=l("HomeMatchHandicap");return r(),c(g,null,[u(t,{class:"mt10 mb10",src:m(L),text:a.$t("home.latestMatch"),onReturnSuccess:$},null,8,["src","text"]),u(T,null,{default:i((()=>[d(p("div",z,[u(s,{class:"mb10 mt20",onReturnSportsSuccess:C}),w.value?(r(),c(g,{key:1},[m(Y).length?(r(!0),c(g,{key:1},f(m(Y),((a,e)=>(r(),y(v,{key:e,"send-params":a,class:"mb10"},null,8,["send-params"])))),128)):(r(),y(n,{key:0,class:"marginAuto"}))],64)):(r(),y(o,{key:0})),m(Y).length?(r(),c("div",{key:2,class:"Button-MatchMore mt10",onClick:H},[p("span",null,b(a.$t("home.lookMoreMatch")),1)])):M("",!0)],512),[[h,!R.value]])])),_:1})],64)}}});const O={class:"home-page"},W=(a=>(k("data-v-5988e28a"),a=a(),D(),a))((()=>p("div",{class:"footerHeight"},null,-1)));var J=a({setup(a){const e=w();return Y((()=>{if(e.query.gidm){const a=JSON.parse(e.query.obj);S.dispatch("betting/setMoreShow",{status:!0,moreParams:a})}})),(a,e)=>(r(),c("div",O,[u(G,{ref:"refHotMatch"},null,512),u(X,{ref:"refGoodMatch"},null,512),u(B,{ref:"refLatestMatch"},null,512),W]))}});J.__scopeId="data-v-5988e28a";export{J as default};
