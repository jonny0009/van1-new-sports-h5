import{s as e,k as a}from"./index.64cf1e80.js";import{s,b as t,o,S as l,q as c,P as n,$ as h,u as r,X as i}from"./vue.4a9f22c3.js";const m={class:"home-tabs-play"},u={class:"play"},p=n("div",{class:"flex-1"},null,-1);var v=s({props:{sendParams:{type:Object,default:function(){return{}}}},setup(s){const v=t((()=>e.state.home.RrefShow)),f=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},d=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!d.value})},k=t((()=>e.state.home.MrefShow)),S=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!k.value})},w=t((()=>e.state.home.PDrefShow)),b=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!w.value})};return(e,t)=>(o(),l("div",m,[c(a,{"time-send-params":s.sendParams},null,8,["time-send-params"]),n("div",u,[p,n("span",{class:h(["btn R",[{active:r(v)}]]),onClick:f},i(e.$t("home.R")),3),n("span",{class:h(["btn OU",[{active:r(d)}]]),onClick:y},i(e.$t("home.OU")),3),n("span",{class:h(["btn M",[{active:r(k)}]]),onClick:S},i(e.$t("home.M")),3),n("span",{class:h(["btn PD",[{active:r(w)}]]),onClick:b},i(e.$t("live.score")),3)])]))}});export{v as _};
