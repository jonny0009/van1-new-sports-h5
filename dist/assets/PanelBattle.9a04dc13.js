import{s as a}from"./index.c84abd34.js";import{s,b as e,o as l,R as t,P as r,u as c,F as n,S as d,_ as m,W as u}from"./vue.16414fe4.js";const i={class:"battle-matrix"},o=["src"],p={class:"battle-matrix__home"},y={class:"nums"},v={class:"name"},f={class:"battle-matrix__away"},b={class:"nums nums--away"},x={class:"name"};var _=s({props:{homeList:{type:Array,default:()=>[]},awayList:{type:Array,default:()=>[]}},setup(s){const _=s,h=e((()=>a.state.match.matchInfo)),g=e((()=>{const{gameType:a}=h.value;return"BK"==a?"/assets/bk_bg.14342c50.png":"/assets/ft_bg.74ad3cc3.png"})),w=e((()=>I(_.homeList,3))),k=e((()=>I(_.awayList,3).reverse())),I=(a,s)=>a.reduce(((a,e,l)=>((a[l/s|0]=a[l/s|0]||[]).push(e),a)),[]);return(a,s)=>(l(),t("div",i,[r("img",{class:"bg",src:c(g),alt:""},null,8,o),r("div",p,[(l(!0),t(n,null,d(c(w),((a,s)=>(l(),t("div",{key:s,class:m([`col-${s+1}`,"flex",1===s?"flex-around":"flex-between"])},[(l(!0),t(n,null,d(c(w)[s],(a=>(l(),t("div",{class:"col-team",key:a.playerId},[r("div",y,[r("span",null,u(a.shirtNumber),1)]),r("div",v,u(a.playerName),1)])))),128))],2)))),128))]),r("div",f,[(l(!0),t(n,null,d(c(k),((a,s)=>(l(),t("div",{key:s,class:m([`col-${s+1}`,"flex",0===s?"flex-around":"flex-between"])},[(l(!0),t(n,null,d(c(k)[s],(a=>(l(),t("div",{class:"col-team",key:a.playerId},[r("div",b,[r("span",null,u(a.shirtNumber),1)]),r("div",x,u(a.playerName),1)])))),128))],2)))),128))])]))}});_.__scopeId="data-v-d7888d78";export{_ as default};
