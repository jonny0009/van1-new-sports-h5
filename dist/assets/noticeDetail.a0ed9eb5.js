import{_ as a}from"./return@2x.937c1e5d.js";import{s,d as t,j as e,r,o as c,R as n,q as i,O as o,P as l,S as u,u as d,_ as m,V as v}from"./vue.979f7bee.js";import{n as p,b as f,I as g,k as b}from"./index.0e350681.js";const y={class:"noticeDetail"},_={class:"content"},j=["innerHTML"],T={class:"noticeTime"};var h=s({setup(s){const h=m(),k=v(),x=t("消息详情"),$=t({});e((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await p({id:a}),t=s.data;200===s.code?($.value=t,x.value=t.title):f(s.msg)},A=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${g}${t}`)})),a}return""};return(s,t)=>{const e=r("van-nav-bar");return c(),n("div",y,[i(e,{class:"bg-title",title:x.value},{left:o((()=>[l("img",{class:"img_1",src:a,alt:"",onClick:t[0]||(t[0]=a=>{k.back()})})])),_:1},8,["title"]),l("div",_,[l("p",{innerHTML:A($.value.content)},null,8,j)]),l("div",T,u(d(b)($.value.optTime)),1)])}}});h.__scopeId="data-v-771d5bad";export{h as default};
