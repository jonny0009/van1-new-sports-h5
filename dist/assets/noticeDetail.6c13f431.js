import{s as a,a2 as s,U as t,d as e,j as c,r as n,o as r,R as i,q as o,O as l,P as u,W as v,u as d}from"./vue.5fe62a63.js";import{Z as m,d as f,A as p,I as g}from"./index.867cf209.js";const y={class:"noticeDetail"},T={class:"content"},_=["innerHTML"],b={class:"noticeTime"};var h=a({setup(a){const h=s(),j=t(),A=e("消息详情"),$=e({});c((async()=>{const a=h.query.id;k(a)}));const k=async a=>{const s=await m({id:a}),t=s.data;200===s.code?($.value=t,A.value=t.title):f(s.msg)},q=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${g}${t}`)})),a}return""};return(a,s)=>{const t=n("van-icon"),e=n("van-nav-bar");return r(),i("div",y,[o(e,{class:"bg-title",title:A.value},{left:l((()=>[o(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),u("div",T,[u("p",{innerHTML:q($.value.content)},null,8,_)]),u("div",b,v(d(p)($.value.optTime)),1)])}}});h.__scopeId="data-v-32aeec56";export{h as default};
