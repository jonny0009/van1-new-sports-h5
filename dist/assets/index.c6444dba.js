import{s as e,n as a,o as s}from"./index.367bdec0.js";import{s as t,b as m,o,S as l,q as r,P as c,_ as h,u as i,V as n}from"./vue.6c3ce548.js";const u={class:"home-tabs-play"},d={class:"play"},p=c("div",{class:"flex-1"},null,-1);var b=t({props:{sendParams:{type:Object,default:function(){return{}}}},setup(s){const t=m((()=>e.state.home.RrefShow)),b=()=>{e.dispatch("home/setKeyValue",{key:"RrefShow",value:!t.value})},v=m((()=>e.state.home.OUrefShow)),y=()=>{e.dispatch("home/setKeyValue",{key:"OUrefShow",value:!v.value})},f=m((()=>e.state.home.MrefShow)),g=()=>{e.dispatch("home/setKeyValue",{key:"MrefShow",value:!f.value})};return(e,m)=>(o(),l("div",u,[r(a,{"time-send-params":s.sendParams},null,8,["time-send-params"]),c("div",d,[p,c("span",{class:h(["btn R",[{active:i(t)}]]),onClick:b},n(e.$t("home.R")),3),c("span",{class:h(["btn OU",[{active:i(v)}]]),onClick:y},n(e.$t("home.OU")),3),c("span",{class:h(["btn M",[{active:i(f)}]]),onClick:g},n(e.$t("home.M")),3)])]))}});const v=e=>s({url:"/ai/mobile/matches/recommendLeague",method:"get",params:e}),y=e=>s({url:"/ai/mobile/matches/commonMatches",method:"get",params:e}),f=e=>s({url:"/ai/mobile/home/common/matches",method:"get",params:e}),g=e=>s({url:"/ai/mobile/recommend/events",method:"get",params:e}),S=e=>s({url:"/ai/mobile/matches/getRBCondition",method:"get",params:e}),k=e=>s({url:"/ai/mobile/matches/commonMatches",method:"get",params:e}),w=e=>s({url:"/ai/mobile/matches/country",method:"get",params:e}),M=e=>s({url:"/ai/mobile/matches/leagueByCountry",method:"get",params:e});export{b as _,v as a,w as b,y as c,S as d,k as e,f as h,g as r,M as s};
