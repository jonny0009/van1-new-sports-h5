import{s}from"./index.fc280051.js";import{s as a,b as e,d as i,o as t,R as l,P as n,u as o,F as c,S as r,_ as p,W as u}from"./vue.16414fe4.js";const m={class:"battle-matrix"},d=["src"],v={class:"lineup-container"},h={class:"battle-matrix-row"},f={class:"nums home"},y={class:"name"},b={class:"is-home col-team position-0"},g={class:"nums home"},O={class:"name"},x={class:"battle-matrix-row"},j={class:"nums away"},w={class:"name text-overflow"},N={class:"is-away col-team position-0"},L={class:"nums away"},k={class:"name"};var _=a({props:{homeList:{type:Array,default:()=>[]},awayList:{type:Array,default:()=>[]}},setup(a){const _=a,I=e((()=>s.state.match.matchInfo)),A=e((()=>{const{gameType:s}=I.value;return"BK"==s?"/assets/bk_bg.14342c50.png":"/assets/ft_bg.74ad3cc3.png"})),E=s=>s.sort(((s,a)=>a.position-s.position)),$=i({}),B=i({}),F=e((()=>{if(!_.homeList.length)return;let s=[],a=[],e=[];return _.homeList.forEach((i=>{[1].indexOf(1*i.position)>-1&&($.value=Object.assign(i)),[2,3,4,5].indexOf(1*i.position)>-1&&s.push(Object.assign(i)),[6,7,8].indexOf(1*i.position)>-1&&a.push(Object.assign(i)),[9,10,11].indexOf(1*i.position)>-1&&e.push(Object.assign(i))})),[E(s),E(a),E(e)]})),K=e((()=>{if(!_.awayList.length)return;let s=[],a=[],e=[];return _.awayList.forEach((i=>{[1].indexOf(1*i.position)>-1&&(B.value=Object.assign(i)),[2,3,4,5].indexOf(1*i.position)>-1&&s.push(Object.assign(i)),[6,7,8].indexOf(1*i.position)>-1&&a.push(Object.assign(i)),[9,10,11].indexOf(1*i.position)>-1&&e.push(Object.assign(i))})),[E(s),E(a),E(e)]}));return(s,a)=>(t(),l("div",m,[n("img",{class:"bg",src:o(A),alt:""},null,8,d),n("div",v,[n("div",h,[(t(!0),l(c,null,r(o(F),((s,a)=>(t(),l("div",{key:a,class:p([`lineup-col home col-${a+1}`])},[(t(!0),l(c,null,r(s,(s=>(t(),l("div",{class:"col-team",key:s.playerId},[n("div",f,[n("span",null,u(s.shirtNumber),1)]),n("div",y,u(s.playerName),1)])))),128))],2)))),128)),n("span",b,[n("div",g,[n("span",null,u($.value.shirtNumber||" "),1)]),n("div",O,u($.value.playerName),1)])]),n("div",x,[(t(!0),l(c,null,r(o(K),((s,a)=>(t(),l("div",{key:a,class:p([`lineup-col away col-${a+1}`])},[(t(!0),l(c,null,r(s,(s=>(t(),l("div",{class:"col-team",key:s.playerId},[n("div",j,[n("span",null,u(s.shirtNumber),1)]),n("div",w,u(s.playerName),1)])))),128))],2)))),128)),n("span",N,[n("div",L,[n("span",null,u(B.value.shirtNumber||" "),1)]),n("div",k,u(B.value.playerName),1)])])])]))}});_.__scopeId="data-v-9417cc26";export{_ as default};
