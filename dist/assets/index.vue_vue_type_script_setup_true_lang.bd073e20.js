import{s as e,m as a}from"./index.0b71fcee.js";import{s,b as t,o,S as l,q as c,P as n,$ as h,u as r,X as m}from"./vue.d0f5f7c0.js";const i={class:"home-tabs-play"},u={class:"play"},p=n("div",{class:"flex-1"},null,-1);var v=s({props:{sendParams:{type:Object,default:function(){return{}}}},setup(s){const v=t((()=>e.state.home.RrefShow)),f=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},d=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!d.value})},S=t((()=>e.state.home.MrefShow)),b=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!S.value})},k=t((()=>e.state.home.PDrefShow)),w=()=>{e.dispatch("home/setKeyValue",{key:"PDrefShow",value:!k.value})};return(e,t)=>(o(),l("div",i,[c(a,{"time-send-params":s.sendParams},null,8,["time-send-params"]),n("div",u,[p,n("span",{class:h(["btn R",[{active:r(v)}]]),onClick:f},m(e.$t("home.R")),3),n("span",{class:h(["btn OU",[{active:r(d)}]]),onClick:y},m(e.$t("home.OU")),3),n("span",{class:h(["btn M",[{active:r(S)}]]),onClick:b},m(e.$t("home.M")),3),n("span",{class:h(["btn PD",[{active:r(k)}]]),onClick:w},m(e.$t("live.score")),3)])]))}});export{v as _};
