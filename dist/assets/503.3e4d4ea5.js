import{_ as s}from"./bluelogo.5b268ae2.js";import{i as a,s as t}from"./index.497dbda7.js";import{s as i,U as e,b as n,r as o,o as r,R as c,P as p,u as l,W as m,q as d,Y as u,Z as v}from"./vue.1f547d27.js";const g={class:"page-404"},f={class:"title"},h=["src"],b={key:1,src:s},T={class:"content"},j=(s=>(u("data-v-da8e016a"),s=s(),v(),s))((()=>p("div",{class:"img-warp"},[p("img",{src:"/assets/maintain.44316f9c.png"})],-1))),k={class:"tips"},w={class:"tips2"},y={class:"time"},U={class:"area-btn"};var $=i({setup(s){const i=e(),u=n((()=>t.state.app.customizeConfig)),v=n((()=>{const s=t.state.app.mantainMsg;let a=null;if(s){a=s.split(",")[2].replaceAll("-","/"),a=new Date(a).getTime()-t.state.app.systemTime,a<0&&$()}return a}));function $(){i.push("/home")}function _(){i.push("/user/contactUs")}return(s,t)=>{const i=o("van-count-down");return r(),c("div",g,[p("div",f,[l(u).maintainLogo?(r(),c("img",{key:0,src:l(a)(l(u).maintainLogo),alt:""},null,8,h)):(r(),c("img",b))]),p("div",T,[j,p("div",k,m(s.$t("home.errorTips.tips3")),1),p("div",w,m(s.$t("home.errorTips.tips4")),1),p("div",y,[d(i,{time:l(v),onFinish:$},null,8,["time"])]),p("div",U,[p("span",{onClick:_},m(s.$t("user.contactUs")),1)])])])}}});$.__scopeId="data-v-da8e016a";export{$ as default};
