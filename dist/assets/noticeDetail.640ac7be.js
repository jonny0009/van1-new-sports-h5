import{s as a,a2 as s,U as e,d as t,j as n,r as c,o as r,R as i,q as o,O as l,P as u,W as v,u as d}from"./vue.16414fe4.js";import{a0 as m,d as p,C as f,I as g}from"./index.5a713ae4.js";const y={class:"noticeDetail"},T={class:"content"},_=["innerHTML"],b={class:"noticeTime"};var h=a({setup(a){const h=s(),j=e(),$=t("消息详情"),k=t({});n((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),e=s.data;200===s.code?(k.value=e,$.value=e.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${g}${e}`)})),a}return""};return(a,s)=>{const e=c("van-icon"),t=c("van-nav-bar");return r(),i("div",y,[o(t,{class:"bg-title",title:$.value},{left:l((()=>[o(e,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),u("div",T,[u("p",{innerHTML:w(k.value.content)},null,8,_)]),u("div",b,v(d(f)(k.value.optTime)),1)])}}});h.__scopeId="data-v-32aeec56";export{h as default};
