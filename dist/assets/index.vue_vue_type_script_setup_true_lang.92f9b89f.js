import{s as e,N as s}from"./index.be40029d.js";import{s as a,b as t,o,S as l,q as n,P as r,_ as m,u as c,V as h}from"./vue.9399d1f0.js";const i={class:"home-tabs-play"},u={class:"play"},p=r("div",{class:"flex-1"},null,-1);var d=a({props:{sendParams:{type:Object,default:function(){return{}}}},setup(a){const d=t((()=>e.state.home.RrefShow)),v=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!d.value})},f=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!f.value})},b=t((()=>e.state.home.MrefShow)),S=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!b.value})};return(e,t)=>(o(),l("div",i,[n(s,{"time-send-params":a.sendParams},null,8,["time-send-params"]),r("div",u,[p,r("span",{class:m(["btn R",[{active:c(d)}]]),onClick:v},h(e.$t("home.R")),3),r("span",{class:m(["btn OU",[{active:c(f)}]]),onClick:y},h(e.$t("home.OU")),3),r("span",{class:m(["btn M",[{active:c(b)}]]),onClick:S},h(e.$t("home.M")),3)])]))}});export{d as _};
