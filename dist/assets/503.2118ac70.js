import{_ as s}from"./bluelogo.5b268ae2.js";import{s as a,i as t}from"./index.1380e0a0.js";import{s as i,R as e,b as n,r as o,o as r,S as c,P as p,u as l,V as m,q as u,X as d,Y as v}from"./vue.7833d4f2.js";const g={class:"page-404"},f={class:"title"},h=["src"],b={key:1,src:s},T={class:"content"},j=(s=>(d("data-v-da8e016a"),s=s(),v(),s))((()=>p("div",{class:"img-warp"},[p("img",{src:"/assets/maintain.44316f9c.png"})],-1))),k={class:"tips"},w={class:"tips2"},y={class:"time"},$={class:"area-btn"};var _=i({setup(s){const i=e(),d=n((()=>a.state.app.customizeConfig)),v=n((()=>{const s=a.state.app.mantainMsg;let t=null;if(s){t=s.split(",")[2].replaceAll("-","/"),t=new Date(t).getTime()-a.state.app.systemTime,t<0&&_()}return t}));function _(){i.push("/home")}function x(){i.push("/user/contactUs")}return(s,a)=>{const i=o("van-count-down");return r(),c("div",g,[p("div",f,[l(d).maintainLogo?(r(),c("img",{key:0,src:l(t)(l(d).maintainLogo),alt:""},null,8,h)):(r(),c("img",b))]),p("div",T,[j,p("div",k,m(s.$t("home.errorTips.tips3")),1),p("div",w,m(s.$t("home.errorTips.tips4")),1),p("div",y,[u(i,{time:l(v),onFinish:_},null,8,["time"])]),p("div",$,[p("span",{onClick:x},m(s.$t("user.contactUs")),1)])])])}}});_.__scopeId="data-v-da8e016a";export{_ as default};
