import{s as e,j as a}from"./index.7dd3cb9b.js";import{s,b as t,o,S as l,q as c,P as n,Z as h,u as r,V as i}from"./vue.7833d4f2.js";const m={class:"home-tabs-play"},u={class:"play"},p=n("div",{class:"flex-1"},null,-1);var v=s({props:{sendParams:{type:Object,default:function(){return{}}}},setup(s){const v=t((()=>e.state.home.RrefShow)),d=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},f=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!f.value})},b=t((()=>e.state.home.MrefShow)),S=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!b.value})},k=t((()=>e.state.home.PDrefShow)),w=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!k.value})};return(e,t)=>(o(),l("div",m,[c(a,{"time-send-params":s.sendParams},null,8,["time-send-params"]),n("div",u,[p,n("span",{class:h(["btn R",[{active:r(v)}]]),onClick:d},i(e.$t("home.R")),3),n("span",{class:h(["btn OU",[{active:r(f)}]]),onClick:y},i(e.$t("home.OU")),3),n("span",{class:h(["btn M",[{active:r(b)}]]),onClick:S},i(e.$t("home.M")),3),n("span",{class:h(["btn PD",[{active:r(k)}]]),onClick:w},i(e.$t("live.score")),3)])]))}});export{v as _};
