import{s as e,O as a}from"./index.31a7ecc8.js";import{s,b as t,o,S as l,q as n,P as c,_ as r,u as m,V as h}from"./vue.9399d1f0.js";const i={class:"home-tabs-play"},u={class:"play"},p=c("div",{class:"flex-1"},null,-1);var v=s({props:{sendParams:{type:Object,default:function(){return{}}}},setup(s){const v=t((()=>e.state.home.RrefShow)),d=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},f=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!f.value})},S=t((()=>e.state.home.MrefShow)),b=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!S.value})};return(e,t)=>(o(),l("div",i,[n(a,{"time-send-params":s.sendParams},null,8,["time-send-params"]),c("div",u,[p,c("span",{class:r(["btn R",[{active:m(v)}]]),onClick:d},h(e.$t("home.R")),3),c("span",{class:r(["btn OU",[{active:m(f)}]]),onClick:y},h(e.$t("home.OU")),3),c("span",{class:r(["btn M",[{active:m(S)}]]),onClick:b},h(e.$t("home.M")),3)])]))}});export{v as _};
