import{s as e,N as s}from"./index.f9f261ec.js";import{s as a,b as t,o,S as l,q as n,P as r,_ as c,u as m,V as h}from"./vue.95886b43.js";const i={class:"home-tabs-play"},u={class:"play"},p=r("div",{class:"flex-1"},null,-1);var v=a({props:{sendParams:{type:Object,default:function(){return{}}}},setup(a){const v=t((()=>e.state.home.RrefShow)),f=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},d=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!d.value})},b=t((()=>e.state.home.MrefShow)),S=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!b.value})};return(e,t)=>(o(),l("div",i,[n(s,{"time-send-params":a.sendParams},null,8,["time-send-params"]),r("div",u,[p,r("span",{class:c(["btn R",[{active:m(v)}]]),onClick:f},h(e.$t("home.R")),3),r("span",{class:c(["btn OU",[{active:m(d)}]]),onClick:y},h(e.$t("home.OU")),3),r("span",{class:c(["btn M",[{active:m(b)}]]),onClick:S},h(e.$t("home.M")),3)])]))}});export{v as _};
