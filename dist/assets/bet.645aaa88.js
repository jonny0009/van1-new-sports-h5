import{s as a,_ as e,V as s,j as l,a as t,d as n,r as o,E as u,o as i,R as v,P as c,q as m,S as d,u as r,x as p,a2 as g,c as y}from"./vue.e791136f.js";import{u as h,m as f}from"./index.0abd6060.js";import{u as b,a as w}from"./index.9ba33ce5.js";import{aq as j}from"./index.e8b4260a.js";import"./getScore.687705c7.js";const x={class:"bet-container"},T={class:"team"},k={class:"team-header"},H={class:"league"},I={class:"date"},L={class:"team-box"},S={class:"team-player host"},M={class:"img-num"},R={type:2,alt:""},B=["innerHTML"],D={key:0,class:"icons"},_={class:"team-player away"},q={class:"img-num"},C={type:2,alt:""},E={class:"bettings"},P={key:1,class:"no-data"};var G=a({setup(a){const G=e(),N=s(),V=h(),{getPlayGroupType:$}=b();l((()=>{Q(),A()})),t((()=>{F()}));let z=null;const A=()=>{F(),z=setInterval((()=>{Q(!1)}),5e3)},F=()=>{z&&(clearInterval(z),z=null)},J=n({}),K=n(!1),O=n([]),Q=async(a=!0)=>{K.value=a;const e=G.params.id,s=await f({gidm:e});J.value=s.data||{},200==s.code&&(O.value=await $(J.value),K.value=!1)},U=()=>{const{showtype:a,gidm:e}=J.value;"RB"==a&&N.push(`/broadcast/${e}`)};return(a,e)=>{const s=o("SvgIcon"),l=o("Loading"),t=o("EmptyIcon"),n=u("img");return i(),v("div",x,[c("div",T,[c("div",k,[c("div",H,[m(s,{name:"live-football"}),c("span",null,d(J.value.leagueName),1)]),c("div",I,d(r(j)(J.value.gameDate,"MM-DD HH:mm")),1)]),c("div",L,[c("div",S,[c("div",M,[p(c("img",R,null,512),[[n,J.value.homeLogo]]),c("span",null,d(r(V).getScore(J.value,"H")),1)]),c("strong",null,d(J.value.homeTeam),1)]),c("div",{class:"team-score",onClick:U},[c("span",{class:"default",innerHTML:r(V).showRBTime(J.value)},null,8,B),"RB"==J.value.showtype?(i(),v("span",D,[m(s,{name:"live-play"})])):g("",!0)]),c("div",_,[c("div",q,[c("span",null,d(r(V).getScore(J.value,"C")),1),p(c("img",C,null,512),[[n,J.value.awayLogo]])]),c("strong",null,d(J.value.awayTeam),1)])])]),c("div",E,[K.value?(i(),y(l,{key:0})):0===O.value.length?(i(),v("div",P,[m(t)])):(i(),y(w,{key:2,"data-list":O.value,"match-info":J.value},null,8,["data-list","match-info"]))])])}}});G.__scopeId="data-v-261b8ed8";export{G as default};
