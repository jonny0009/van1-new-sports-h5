import{s as e,N as a}from"./index.30d605a0.js";import{s,b as t,o,S as l,q as n,P as r,_ as m,u as c,V as h}from"./vue.95886b43.js";const i={class:"home-tabs-play"},u={class:"play"},p=r("div",{class:"flex-1"},null,-1);var v=s({props:{sendParams:{type:Object,default:function(){return{}}}},setup(s){const v=t((()=>e.state.home.RrefShow)),d=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!v.value})},f=t((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!f.value})},b=t((()=>e.state.home.MrefShow)),S=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!b.value})};return(e,t)=>(o(),l("div",i,[n(a,{"time-send-params":s.sendParams},null,8,["time-send-params"]),r("div",u,[p,r("span",{class:m(["btn R",[{active:c(v)}]]),onClick:d},h(e.$t("home.R")),3),r("span",{class:m(["btn OU",[{active:c(f)}]]),onClick:y},h(e.$t("home.OU")),3),r("span",{class:m(["btn M",[{active:c(b)}]]),onClick:S},h(e.$t("home.M")),3)])]))}});export{v as _};
