import{s as e,k as a}from"./index.e2584dee.js";import{s,b as t,o,R as l,q as c,P as n,_ as h,u as r,W as i}from"./vue.c62eea93.js";const m={class:"home-tabs-play"},u={class:"play"},p=n("div",{class:"flex-1"},null,-1);var v=s({props:{sendParams:{type:Object,default:function(){return{}}}},setup(s){const v=t((()=>e.state.home.RrefShow)),d=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},f=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!f.value})},k=t((()=>e.state.home.MrefShow)),w=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!k.value})},S=t((()=>e.state.home.PDrefShow)),b=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!S.value})};return(e,t)=>(o(),l("div",m,[c(a,{"time-send-params":s.sendParams},null,8,["time-send-params"]),n("div",u,[p,n("span",{class:h(["btn R",[{active:r(v)}]]),onClick:d},i(e.$t("home.R")),3),n("span",{class:h(["btn OU",[{active:r(f)}]]),onClick:y},i(e.$t("home.OU")),3),n("span",{class:h(["btn M",[{active:r(k)}]]),onClick:w},i(e.$t("home.M")),3),n("span",{class:h(["btn PD",[{active:r(S)}]]),onClick:b},i(e.$t("live.score")),3)])]))}});export{v as _};
