import{s as a,d as s,j as e,r as t,o as n,R as c,q as r,O as i,P as o,U as l,u,$ as v,W as d}from"./vue.45f01342.js";import{o as m,b as p,I as f,n as g}from"./index.15e12c1e.js";const y={class:"noticeDetail"},b={class:"content"},T=["innerHTML"],$={class:"noticeTime"};var _=a({setup(a){const _=v(),h=d(),j=s("消息详情"),k=s({});e((async()=>{const a=_.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),e=s.data;200===s.code?(k.value=e,j.value=e.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${f}${e}`)})),a}return""};return(a,s)=>{const e=t("van-icon"),v=t("van-nav-bar");return n(),c("div",y,[r(v,{class:"bg-title",title:j.value},{left:i((()=>[r(e,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{h.back()})})])),_:1},8,["title"]),o("div",b,[o("p",{innerHTML:w(k.value.content)},null,8,T)]),o("div",$,l(u(g)(k.value.optTime)),1)])}}});_.__scopeId="data-v-32aeec56";export{_ as default};
