import{s as a,d as s,j as t,r as e,o as n,R as c,q as r,O as i,P as o,S as l,u,_ as v,V as d}from"./vue.e791136f.js";import{n as m,b as p,I as f,k as g}from"./index.81793787.js";const y={class:"noticeDetail"},_={class:"content"},b=["innerHTML"],T={class:"noticeTime"};var h=a({setup(a){const h=v(),j=d(),k=s("消息详情"),$=s({});t((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),t=s.data;200===s.code?($.value=t,k.value=t.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${f}${t}`)})),a}return""};return(a,s)=>{const t=e("van-icon"),v=e("van-nav-bar");return n(),c("div",y,[r(v,{class:"bg-title",title:k.value},{left:i((()=>[r(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),o("div",_,[o("p",{innerHTML:w($.value.content)},null,8,b)]),o("div",T,l(u(g)($.value.optTime)),1)])}}});h.__scopeId="data-v-2845223c";export{h as default};
