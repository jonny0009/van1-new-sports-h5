import{s as e,O as s}from"./index.67459fbd.js";import{s as a,b as t,o,S as l,q as n,P as c,_ as r,u as m,V as h}from"./vue.6c3ce548.js";const i={class:"home-tabs-play"},u={class:"play"},p=c("div",{class:"flex-1"},null,-1);var v=a({props:{sendParams:{type:Object,default:function(){return{}}}},setup(a){const v=t((()=>e.state.home.RrefShow)),d=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},f=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!f.value})},b=t((()=>e.state.home.MrefShow)),S=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!b.value})};return(e,t)=>(o(),l("div",i,[n(s,{"time-send-params":a.sendParams},null,8,["time-send-params"]),c("div",u,[p,c("span",{class:r(["btn R",[{active:m(v)}]]),onClick:d},h(e.$t("home.R")),3),c("span",{class:r(["btn OU",[{active:m(f)}]]),onClick:y},h(e.$t("home.OU")),3),c("span",{class:r(["btn M",[{active:m(b)}]]),onClick:S},h(e.$t("home.M")),3)])]))}});export{v as _};
