import{_ as s}from"./bluelogo.5b268ae2.js";import{i as a,s as t}from"./index.d50af682.js";import{s as i,U as e,b as n,r as o,o as c,R as r,P as p,u as l,W as m,q as u,Y as d,Z as f}from"./vue.c62eea93.js";const v={class:"page-404"},g={class:"title"},h=["src"],b={key:1,src:s},T={class:"content"},j=(s=>(d("data-v-5fa825f4"),s=s(),f(),s))((()=>p("div",{class:"img-warp"},[p("img",{src:"/assets/maintain.44316f9c.png"})],-1))),k={class:"tips"},w={class:"tips2"},y={class:"time"},U={class:"area-btn"};var $=i({setup(s){const i=e(),d=n((()=>t.state.app.customizeConfig)),f=n((()=>{const s=t.state.app.mantainMsg;let a=null;if(s){a=s.split(",")[2].replaceAll("-","/"),a=new Date(a).getTime()-t.state.app.systemTime,a<0&&$()}return a}));function $(){i.push("/home")}function _(){i.push("/user/contactUs")}return(s,t)=>{const i=o("van-count-down");return c(),r("div",v,[p("div",g,[l(d).maintainLogo?(c(),r("img",{key:0,src:l(a)(l(d).maintainLogo),alt:""},null,8,h)):(c(),r("img",b))]),p("div",T,[j,p("div",k,m(s.$t("home.errorTips.tips3")),1),p("div",w,m(s.$t("home.errorTips.tips4")),1),p("div",y,[u(i,{time:l(f),onFinish:$},null,8,["time"])]),p("div",U,[p("span",{onClick:_},m(s.$t("user.contactUs")),1)])])])}}});$.__scopeId="data-v-5fa825f4";export{$ as default};
