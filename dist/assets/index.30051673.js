<<<<<<<< HEAD:dist/assets/index.79b2d29f.js
import{_ as a}from"./return@2x.003ca050.js";import{_ as s}from"./noData.020b22ab.js";import{m as e,b as t,k as l,I as n}from"./index.b3f96c04.js";import{s as o,d as r,e as i,j as c,r as u,o as d,R as f,q as p,O as v,P as m,u as g,S as h,a2 as _,F as y,Z as k,V as b,c as $,W as j,X as x}from"./vue.e791136f.js";const C={class:"notice"},D={class:"content"},I={key:0,class:"noData"},L=(a=>(j("data-v-5547afd2"),a=a(),x(),a))((()=>m("img",{class:"img_1",src:s},null,-1))),M={key:1,class:"list"},T=["onClick"],q={class:"font_1"},w=["innerHTML"],A={class:"font_3"};var E=o({setup(s){const o=b(),j=r("消息"),x=r(!1),E=r(!1),H=i({arr:[]});c((async()=>{}));let S=0;const z=async()=>{S++;const a={page:S,pageSize:20},s=await e(a),l=s.data;200===s.code?(l.messages.forEach((a=>{H.arr.push(a)})),x.value=!1,E.value=H.arr.length===l.totalCount):(t(s.msg),x.value=!1,E.value=!0)},F=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${n}${e}`)})),a}return""},O=a=>{console.log(a,"单个删除====")};return(s,e)=>{const t=u("van-nav-bar"),n=u("van-swipe-cell"),r=u("van-list");return d(),f("div",C,[p(t,{class:"bg-title",title:j.value},{left:v((()=>[m("img",{class:"img_1",src:a,alt:"",onClick:e[0]||(e[0]=a=>{o.push({path:"/home"})})})])),_:1},8,["title"]),m("div",D,[!g(H).arr.length&&E.value?(d(),f("div",I,[L,m("p",null,h(s.$t("user.noData")),1)])):_("",!0),g(H).arr.length||!E.value?(d(),f("div",M,[p(r,{loading:x.value,"onUpdate:loading":e[1]||(e[1]=a=>x.value=a),finished:E.value,"finished-text":s.$t("live.noMore"),onLoad:z},{default:v((()=>[(d(!0),f(y,null,k(g(H).arr,((a,e)=>(d(),$(n,{key:e,"before-close":O,class:"itemContent"},{default:v((()=>[m("div",{class:"cell",onClick:s=>(a=>{o.push({path:"/user/noticeDetail",query:{id:a.id}})})(a)},[m("p",q,h(a.title),1),m("p",{class:"font_2",innerHTML:F(a.content)},null,8,w),m("div",A,[m("span",null,h(s.$t("user.lookInfo")),1),m("span",null,h(g(l)(a.optTime)),1)])],8,T)])),_:2},1024)))),128))])),_:1},8,["loading","finished","finished-text"])])):_("",!0)])])}}});E.__scopeId="data-v-5547afd2";export{E as default};
========
import{_ as a}from"./return@2x.937c1e5d.js";import{_ as s}from"./noData.73b86eaf.js";import{m as e,b as t,k as l,I as n}from"./index.e684816b.js";import{s as o,d as r,e as i,j as c,r as u,o as d,R as f,q as p,O as v,P as m,u as g,S as h,a2 as _,F as y,Z as k,V as b,c as $,W as j,X as x}from"./vue.e791136f.js";const C={class:"notice"},D={class:"content"},I={key:0,class:"noData"},L=(a=>(j("data-v-5547afd2"),a=a(),x(),a))((()=>m("img",{class:"img_1",src:s},null,-1))),M={key:1,class:"list"},T=["onClick"],q={class:"font_1"},w=["innerHTML"],A={class:"font_3"};var E=o({setup(s){const o=b(),j=r("消息"),x=r(!1),E=r(!1),H=i({arr:[]});c((async()=>{}));let S=0;const z=async()=>{S++;const a={page:S,pageSize:20},s=await e(a),l=s.data;200===s.code?(l.messages.forEach((a=>{H.arr.push(a)})),x.value=!1,E.value=H.arr.length===l.totalCount):(t(s.msg),x.value=!1,E.value=!0)},F=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${n}${e}`)})),a}return""},O=a=>{console.log(a,"单个删除====")};return(s,e)=>{const t=u("van-nav-bar"),n=u("van-swipe-cell"),r=u("van-list");return d(),f("div",C,[p(t,{class:"bg-title",title:j.value},{left:v((()=>[m("img",{class:"img_1",src:a,alt:"",onClick:e[0]||(e[0]=a=>{o.push({path:"/home"})})})])),_:1},8,["title"]),m("div",D,[!g(H).arr.length&&E.value?(d(),f("div",I,[L,m("p",null,h(s.$t("user.noData")),1)])):_("",!0),g(H).arr.length||!E.value?(d(),f("div",M,[p(r,{loading:x.value,"onUpdate:loading":e[1]||(e[1]=a=>x.value=a),finished:E.value,"finished-text":s.$t("live.noMore"),onLoad:z},{default:v((()=>[(d(!0),f(y,null,k(g(H).arr,((a,e)=>(d(),$(n,{key:e,"before-close":O,class:"itemContent"},{default:v((()=>[m("div",{class:"cell",onClick:s=>(a=>{o.push({path:"/user/noticeDetail",query:{id:a.id}})})(a)},[m("p",q,h(a.title),1),m("p",{class:"font_2",innerHTML:F(a.content)},null,8,w),m("div",A,[m("span",null,h(s.$t("user.lookInfo")),1),m("span",null,h(g(l)(a.optTime)),1)])],8,T)])),_:2},1024)))),128))])),_:1},8,["loading","finished","finished-text"])])):_("",!0)])])}}});E.__scopeId="data-v-5547afd2";export{E as default};
>>>>>>>> 144b67d36078312dbc70463d146fa823e2a3e380:dist/assets/index.30051673.js
