import{s as a,_ as e,V as s,j as l,a as t,d as n,r as o,E as u,o as i,R as v,P as m,q as c,S as d,u as r,x as p,a2 as g,c as y}from"./vue.e791136f.js";import{u as h,m as f}from"./index.77c8406e.js";import{u as w,a as b}from"./index.3018d851.js";import{aq as j}from"./index.186de241.js";import"./getScore.ede6437a.js";const x={class:"bet-container"},T={class:"team"},k={class:"team-header"},H={class:"league"},I={class:"date"},L={class:"team-box"},S={class:"team-player host"},M={class:"img-num"},R={type:2,alt:""},B=["innerHTML"],D={key:0,class:"icons"},_={class:"team-player away"},q={class:"img-num"},C={type:2,alt:""},E={class:"bettings"},P={key:1,class:"no-data"};var G=a({setup(a){const G=e(),N=s(),V=h(),{getPlayGroupType:$}=w();l((()=>{Q(),A()})),t((()=>{F()}));let z=null;const A=()=>{F(),z=setInterval((()=>{Q(!1)}),5e3)},F=()=>{z&&(clearInterval(z),z=null)},J=n({}),K=n(!1),O=n([]),Q=async(a=!0)=>{K.value=a;const e=G.params.id,s=await f({gidm:e});J.value=s.data||{},200==s.code&&(O.value=await $(J.value),K.value=!1)},U=()=>{const{showtype:a,gidm:e}=J.value;"RB"==a&&N.push(`/broadcast/${e}`)};return(a,e)=>{const s=o("SvgIcon"),l=o("Loading"),t=o("EmptyIcon"),n=u("img");return i(),v("div",x,[m("div",T,[m("div",k,[m("div",H,[c(s,{name:"live-football"}),m("span",null,d(J.value.leagueName),1)]),m("div",I,d(r(j)(J.value.gameDate,"MM-DD HH:mm")),1)]),m("div",L,[m("div",S,[m("div",M,[p(m("img",R,null,512),[[n,J.value.homeLogo]]),m("span",null,d(r(V).getScore(J.value,"H")),1)]),m("strong",null,d(J.value.homeTeam),1)]),m("div",{class:"team-score",onClick:U},[m("span",{class:"default",innerHTML:r(V).showRBTime(J.value)},null,8,B),"RB"==J.value.showtype?(i(),v("span",D,[c(s,{name:"live-play"})])):g("",!0)]),m("div",_,[m("div",q,[m("span",null,d(r(V).getScore(J.value,"C")),1),p(m("img",C,null,512),[[n,J.value.awayLogo]])]),m("strong",null,d(J.value.awayTeam),1)])])]),m("div",E,[K.value?(i(),y(l,{key:0})):0===O.value.length?(i(),v("div",P,[c(t)])):(i(),y(b,{key:2,"data-list":O.value,"match-info":J.value},null,8,["data-list","match-info"]))])])}}});G.__scopeId="data-v-261b8ed8";export{G as default};
