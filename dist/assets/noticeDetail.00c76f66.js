import{s as a,d as s,j as t,r as e,o as n,R as c,q as r,O as i,P as o,U as l,u,a5 as d,W as v}from"./vue.995a3892.js";import{o as m,b as p,I as f,n as g}from"./index.191deb0d.js";const b={class:"noticeDetail"},y={class:"content"},T=["innerHTML"],_={class:"noticeTime"};var h=a({setup(a){const h=d(),j=v(),$=s("消息详情"),k=s({});t((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),t=s.data;200===s.code?(k.value=t,$.value=t.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${f}${t}`)})),a}return""};return(a,s)=>{const t=e("van-icon"),d=e("van-nav-bar");return n(),c("div",b,[r(d,{class:"bg-title",title:$.value},{left:i((()=>[r(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),o("div",y,[o("p",{innerHTML:w(k.value.content)},null,8,T)]),o("div",_,l(u(g)(k.value.optTime)),1)])}}});h.__scopeId="data-v-4699ca7b";export{h as default};
