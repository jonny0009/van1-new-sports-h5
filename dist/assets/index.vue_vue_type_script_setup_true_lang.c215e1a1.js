import{s as e,k as a}from"./index.6f65f46b.js";import{s,b as t,o,R as l,q as n,P as c,_ as h,u as r,W as i}from"./vue.1f547d27.js";const m={class:"home-tabs-play"},u={class:"play"},p=c("div",{class:"flex-1"},null,-1);var v=s({props:{sendParams:{type:Object,default:function(){return{}}}},setup(s){const v=t((()=>e.state.home.RrefShow)),f=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},d=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!d.value})},k=t((()=>e.state.home.MrefShow)),b=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!k.value})},w=t((()=>e.state.home.PDrefShow)),S=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!w.value})};return(e,t)=>(o(),l("div",m,[n(a,{"time-send-params":s.sendParams},null,8,["time-send-params"]),c("div",u,[p,c("span",{class:h(["btn R",[{active:r(v)}]]),onClick:f},i(e.$t("home.R")),3),c("span",{class:h(["btn OU",[{active:r(d)}]]),onClick:y},i(e.$t("home.OU")),3),c("span",{class:h(["btn M",[{active:r(k)}]]),onClick:b},i(e.$t("home.M")),3),c("span",{class:h(["btn PD",[{active:r(w)}]]),onClick:S},i(e.$t("live.score")),3)])]))}});export{v as _};
