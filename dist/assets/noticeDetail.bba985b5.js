import{_ as a}from"./return@2x.16bf9d85.js";import{s,d as t,j as e,r,o as n,R as c,q as i,O as o,P as l,S as d,u,_ as m,V as v}from"./vue.979f7bee.js";import{n as f,d as p,I as g,k as b}from"./index.89996f67.js";const y={class:"noticeDetail"},_={class:"content"},j=["innerHTML"],T={class:"noticeTime"};var h=s({setup(s){const h=m(),k=v(),x=t("消息详情"),$=t({});e((async()=>{const a=h.query.id;q(a)}));const q=async a=>{const s=await f({id:a}),t=s.data;200===s.code?($.value=t,x.value=t.title):p(s.msg)},A=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const t=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(t,`${g}${t}`)})),a}return""};return(s,t)=>{const e=r("van-nav-bar");return n(),c("div",y,[i(e,{class:"bg-title",title:x.value},{left:o((()=>[l("img",{class:"img_1",src:a,alt:"",onClick:t[0]||(t[0]=a=>{k.back()})})])),_:1},8,["title"]),l("div",_,[l("p",{innerHTML:A($.value.content)},null,8,j)]),l("div",T,d(u(b)($.value.optTime)),1)])}}});h.__scopeId="data-v-771d5bad";export{h as default};
