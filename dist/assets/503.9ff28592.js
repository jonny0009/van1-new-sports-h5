import{_ as s}from"./bluelogo.5b268ae2.js";import{i as a,s as t}from"./index.b604bcfc.js";import{s as i,U as e,b as n,r as c,o,R as l,P as r,u as m,q as p,W as u,Y as d,Z as v}from"./vue.5fe62a63.js";const g=s=>(d("data-v-dd1c3478"),s=s(),v(),s),f={class:"page-404"},b={class:"title"},h=["src"],j={key:1,src:s},k={class:"content"},w=g((()=>r("div",{class:"img-warp"},[r("img",{src:"/assets/maintain.44316f9c.png"})],-1))),y=g((()=>r("div",{class:"tips"},"网站维护中",-1))),U=g((()=>r("div",{class:"tips2"},"重新开放倒数",-1))),_={class:"time"},x={class:"area-btn"};var C=i({setup(s){const i=e(),d=n((()=>t.state.app.customizeConfig)),v=n((()=>{const s=t.state.app.mantainMsg;let a=null;if(s){a=s.split(",")[2].replaceAll("-","/"),a=new Date(a).getTime()-t.state.app.systemTime,a<0&&g()}return a}));function g(){i.push("/home")}function C(){i.push("/user/contactUs")}return(s,t)=>{const i=c("van-count-down");return o(),l("div",f,[r("div",b,[m(d).maintainLogo?(o(),l("img",{key:0,src:m(a)(m(d).maintainLogo),alt:""},null,8,h)):(o(),l("img",j))]),r("div",k,[w,y,U,r("div",_,[p(i,{time:m(v),onFinish:g},null,8,["time"])]),r("div",x,[r("span",{onClick:C},u(s.$t("user.contactUs")),1)])])])}}});C.__scopeId="data-v-dd1c3478";export{C as default};
