import{s as a,a2 as s,R as t,d as e,j as c,r as n,o as r,S as i,q as o,O as l,P as u,V as d,u as v}from"./vue.7833d4f2.js";import{o as f,d as m,I as p,k as g}from"./index.6e1ffcf5.js";const y={class:"noticeDetail"},T={class:"content"},_=["innerHTML"],b={class:"noticeTime"};var h=a({setup(a){const h=s(),j=t(),k=e("消息详情"),$=e({});c((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await f({id:a}),t=s.data;200===s.code?($.value=t,k.value=t.title):m(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${p}${t}`)})),a}return""};return(a,s)=>{const t=n("van-icon"),e=n("van-nav-bar");return r(),i("div",y,[o(e,{class:"bg-title",title:k.value},{left:l((()=>[o(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),u("div",T,[u("p",{innerHTML:w($.value.content)},null,8,_)]),u("div",b,d(v(g)($.value.optTime)),1)])}}});h.__scopeId="data-v-32aeec56";export{h as default};
