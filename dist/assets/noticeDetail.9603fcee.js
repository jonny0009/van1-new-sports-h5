import{s as a,a4 as s,R as t,d as e,j as c,r as n,o as r,S as i,q as o,O as l,P as u,V as v,u as d}from"./vue.9399d1f0.js";import{q as m,b as p,I as f,p as g}from"./index.31a7ecc8.js";const y={class:"noticeDetail"},b={class:"content"},T=["innerHTML"],_={class:"noticeTime"};var h=a({setup(a){const h=s(),j=t(),q=e("消息详情"),$=e({});c((async()=>{const a=h.query.id;k(a)}));const k=async a=>{const s=await m({id:a}),t=s.data;200===s.code?($.value=t,q.value=t.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${f}${t}`)})),a}return""};return(a,s)=>{const t=n("van-icon"),e=n("van-nav-bar");return r(),i("div",y,[o(e,{class:"bg-title",title:q.value},{left:l((()=>[o(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),u("div",b,[u("p",{innerHTML:w($.value.content)},null,8,T)]),u("div",_,v(d(g)($.value.optTime)),1)])}}});h.__scopeId="data-v-32aeec56";export{h as default};
