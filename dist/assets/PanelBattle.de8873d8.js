import{s as a}from"./index.2ffb4ab9.js";import{s,b as e,o as l,R as t,P as r,u as c,F as n,S as i,_ as m,W as u}from"./vue.c62eea93.js";const d={class:"battle-matrix"},o=["src"],p={class:"battle-matrix__home"},v={class:"nums"},y={class:"name"},f={class:"battle-matrix__away"},b={class:"nums"},x={class:"name"};var _=s({props:{homeList:{type:Array,default:()=>[]},awayList:{type:Array,default:()=>[]}},setup(s){const _=s,h=e((()=>a.state.match.matchInfo)),g=e((()=>{const{gameType:a}=h.value;return"BK"==a?"/assets/bk_bg.14342c50.png":"/assets/ft_bg.74ad3cc3.png"})),k=e((()=>I(_.homeList,3))),w=e((()=>I(_.awayList,3).reverse())),I=(a,s)=>a.reduce(((a,e,l)=>((a[l/s|0]=a[l/s|0]||[]).push(e),a)),[]);return(a,s)=>(l(),t("div",d,[r("img",{class:"bg",src:c(g),alt:""},null,8,o),r("div",p,[(l(!0),t(n,null,i(c(k),((a,s)=>(l(),t("div",{key:s,class:m([`col-${s+1}`,"flex",1===s?"flex-around":"flex-between"])},[(l(!0),t(n,null,i(c(k)[s],(a=>(l(),t("div",{class:"col-team",key:a.playerId},[r("div",v,[r("span",null,u(a.shirtNumber),1)]),r("div",y,u(a.playerName),1)])))),128))],2)))),128))]),r("div",f,[(l(!0),t(n,null,i(c(w),((a,s)=>(l(),t("div",{key:s,class:m([`col-${s+1}`,"flex",0===s?"flex-around":"flex-between"])},[(l(!0),t(n,null,i(c(w)[s],(a=>(l(),t("div",{class:"col-team",key:a.playerId},[r("div",b,[r("span",null,u(a.shirtNumber),1)]),r("div",x,u(a.playerName),1)])))),128))],2)))),128))])]))}});_.__scopeId="data-v-270e5c03";export{_ as default};
