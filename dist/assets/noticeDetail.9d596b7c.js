import{s as a,d as s,j as t,r as e,o as n,R as c,q as r,O as i,P as o,S as l,u,$ as v,W as d}from"./vue.5fad807b.js";import{n as m,b as p,I as f,k as g}from"./index.0b5c5324.js";const b={class:"noticeDetail"},y={class:"content"},T=["innerHTML"],$={class:"noticeTime"};var _=a({setup(a){const _=v(),h=d(),j=s("消息详情"),k=s({});t((async()=>{const a=_.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),t=s.data;200===s.code?(k.value=t,j.value=t.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${f}${t}`)})),a}return""};return(a,s)=>{const t=e("van-icon"),v=e("van-nav-bar");return n(),c("div",b,[r(v,{class:"bg-title",title:j.value},{left:i((()=>[r(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{h.back()})})])),_:1},8,["title"]),o("div",y,[o("p",{innerHTML:w(k.value.content)},null,8,T)]),o("div",$,l(u(g)(k.value.optTime)),1)])}}});_.__scopeId="data-v-32aeec56";export{_ as default};
