import{s as a,a2 as s,U as e,d as t,j as c,r as n,o as r,R as i,q as o,O as l,P as d,W as u,u as v}from"./vue.5fe62a63.js";import{Y as m,d as p,z as f,I as g}from"./index.d13ce24d.js";const y={class:"noticeDetail"},T={class:"content"},_=["innerHTML"],b={class:"noticeTime"};var h=a({setup(a){const h=s(),j=e(),$=t("消息详情"),k=t({});c((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await m({id:a}),e=s.data;200===s.code?(k.value=e,$.value=e.title):p(s.msg)},w=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${g}${e}`)})),a}return""};return(a,s)=>{const e=n("van-icon"),t=n("van-nav-bar");return r(),i("div",y,[o(t,{class:"bg-title",title:$.value},{left:l((()=>[o(e,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{j.back()})})])),_:1},8,["title"]),d("div",T,[d("p",{innerHTML:w(k.value.content)},null,8,_)]),d("div",b,u(v(f)(k.value.optTime)),1)])}}});h.__scopeId="data-v-32aeec56";export{h as default};
