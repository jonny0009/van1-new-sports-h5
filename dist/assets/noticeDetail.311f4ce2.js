import{s as a,a2 as s,R as e,d as t,j as n,r as c,o as r,S as i,q as o,O as l,P as u,V as d,u as v}from"./vue.7833d4f2.js";import{o as m,d as p,I as f,k as g}from"./index.82ee6083.js";const y={class:"noticeDetail"},T={class:"content"},_=["innerHTML"],b={class:"noticeTime"};var h=a({setup(a){const h=s(),j=e(),k=t("消息详情"),$=t({});n((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),e=s.data;200===s.code?($.value=e,k.value=e.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${f}${e}`)})),a}return""};return(a,s)=>{const e=c("van-icon"),t=c("van-nav-bar");return r(),i("div",y,[o(t,{class:"bg-title",title:k.value},{left:l((()=>[o(e,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),u("div",T,[u("p",{innerHTML:w($.value.content)},null,8,_)]),u("div",b,d(v(g)($.value.optTime)),1)])}}});h.__scopeId="data-v-32aeec56";export{h as default};
