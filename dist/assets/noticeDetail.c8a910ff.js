import{s as a,a2 as s,R as t,d as e,j as n,r as c,o as r,S as i,q as o,O as l,P as d,V as u,u as v}from"./vue.7833d4f2.js";import{o as m,d as p,I as f,k as g}from"./index.0b13ad79.js";const y={class:"noticeDetail"},b={class:"content"},T=["innerHTML"],_={class:"noticeTime"};var h=a({setup(a){const h=s(),j=t(),k=e("消息详情"),$=e({});n((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),t=s.data;200===s.code?($.value=t,k.value=t.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${f}${t}`)})),a}return""};return(a,s)=>{const t=c("van-icon"),e=c("van-nav-bar");return r(),i("div",y,[o(e,{class:"bg-title",title:k.value},{left:l((()=>[o(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),d("div",b,[d("p",{innerHTML:w($.value.content)},null,8,T)]),d("div",_,u(v(g)($.value.optTime)),1)])}}});h.__scopeId="data-v-32aeec56";export{h as default};
