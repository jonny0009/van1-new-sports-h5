import{_ as s}from"./bluelogo.5b268ae2.js";import{s as a,i as t}from"./index.d5cf716c.js";import{s as i,R as n,b as e,r as c,o,S as l,P as r,u as m,q as p,V as d,X as u,Y as v}from"./vue.9399d1f0.js";const g=s=>(u("data-v-dd1c3478"),s=s(),v(),s),f={class:"page-404"},b={class:"title"},h=["src"],j={key:1,src:s},k={class:"content"},w=g((()=>r("div",{class:"img-warp"},[r("img",{src:"/assets/maintain.44316f9c.png"})],-1))),y=g((()=>r("div",{class:"tips"},"网站维护中",-1))),_=g((()=>r("div",{class:"tips2"},"重新开放倒数",-1))),x={class:"time"},C={class:"area-btn"};var L=i({setup(s){const i=n(),u=e((()=>a.state.app.customizeConfig)),v=e((()=>{const s=a.state.app.mantainMsg;let t=null;if(s){t=s.split(",")[2].replaceAll("-","/"),t=new Date(t).getTime()-a.state.app.systemTime,t<0&&g()}return t}));function g(){i.push("/home")}function L(){i.push("/user/contactUs")}return(s,a)=>{const i=c("van-count-down");return o(),l("div",f,[r("div",b,[m(u).maintainLogo?(o(),l("img",{key:0,src:m(t)(m(u).maintainLogo),alt:""},null,8,h)):(o(),l("img",j))]),r("div",k,[w,y,_,r("div",x,[p(i,{time:m(v),onFinish:g},null,8,["time"])]),r("div",C,[r("span",{onClick:L},d(s.$t("user.contactUs")),1)])])])}}});L.__scopeId="data-v-dd1c3478";export{L as default};
