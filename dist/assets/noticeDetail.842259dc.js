import{s as a,d as s,j as e,r as t,o as n,R as c,q as r,O as i,P as o,S as l,u,_ as d,V as v}from"./vue.979f7bee.js";import{n as m,b as f,I as p,k as g}from"./index.1d7db88f.js";const b={class:"noticeDetail"},y={class:"content"},_=["innerHTML"],T={class:"noticeTime"};var h=a({setup(a){const h=d(),j=v(),k=s("消息详情"),$=s({});e((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),e=s.data;200===s.code?($.value=e,k.value=e.title):f(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${p}${e}`)})),a}return""};return(a,s)=>{const e=t("van-icon"),d=t("van-nav-bar");return n(),c("div",b,[r(d,{class:"bg-title",title:k.value},{left:i((()=>[r(e,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),o("div",y,[o("p",{innerHTML:w($.value.content)},null,8,_)]),o("div",T,l(u(g)($.value.optTime)),1)])}}});h.__scopeId="data-v-32aeec56";export{h as default};
