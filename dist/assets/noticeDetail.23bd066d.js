import{s as a,a2 as s,U as t,d as e,j as c,r as n,o as r,R as i,q as o,O as l,P as d,W as u,u as v}from"./vue.1f547d27.js";import{a0 as m,d as p,C as f,I as g}from"./index.494ce72d.js";const y={class:"noticeDetail"},T={class:"content"},_=["innerHTML"],b={class:"noticeTime"};var h=a({setup(a){const h=s(),j=t(),$=e("消息详情"),k=e({});c((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),t=s.data;200===s.code?(k.value=t,$.value=t.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${g}${t}`)})),a}return""};return(a,s)=>{const t=n("van-icon"),e=n("van-nav-bar");return r(),i("div",y,[o(e,{class:"bg-title",title:$.value},{left:l((()=>[o(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),d("div",T,[d("p",{innerHTML:w(k.value.content)},null,8,_)]),d("div",b,u(v(f)(k.value.optTime)),1)])}}});h.__scopeId="data-v-32aeec56";export{h as default};
