import{s as e,O as s}from"./index.0bcbbe84.js";import{s as a,b as t,o,S as l,q as c,P as n,_ as r,u as m,V as h}from"./vue.6c3ce548.js";const i={class:"home-tabs-play"},u={class:"play"},p=n("div",{class:"flex-1"},null,-1);var v=a({props:{sendParams:{type:Object,default:function(){return{}}}},setup(a){const v=t((()=>e.state.home.RrefShow)),d=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},f=t((()=>e.state.home.OUrefShow)),b=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!f.value})},y=t((()=>e.state.home.MrefShow)),S=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!y.value})};return(e,t)=>(o(),l("div",i,[c(s,{"time-send-params":a.sendParams},null,8,["time-send-params"]),n("div",u,[p,n("span",{class:r(["btn R",[{active:m(v)}]]),onClick:d},h(e.$t("home.R")),3),n("span",{class:r(["btn OU",[{active:m(f)}]]),onClick:b},h(e.$t("home.OU")),3),n("span",{class:r(["btn M",[{active:m(y)}]]),onClick:S},h(e.$t("home.M")),3)])]))}});export{v as _};
