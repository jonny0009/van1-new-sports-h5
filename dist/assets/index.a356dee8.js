import{_ as a}from"./noData.1caa3bb3.js";import{u as s,p as e,b as t,q as n,I as l}from"./index.2d1548f3.js";import{s as o,R as i,d as r,e as c,j as u,r as d,o as v,S as p,q as f,O as g,u as m,P as h,V as _,a0 as y,F as k,Z as x,c as $,X as b,Y as C}from"./vue.6c3ce548.js";const j={class:"notice"},w={class:"content"},D={key:0,class:"noData"},T=(a=>(b("data-v-384a66d7"),a=a(),C(),a))((()=>h("img",{class:"img_1",src:a},null,-1))),q={key:1,class:"list"},I=["onClick"],L={class:"font_1"},M=["innerHTML"],A={class:"font_3"};var E=o({setup(a){const{t:o}=s(),b=i(),C=o("user.news"),E=r(!1),H=r(!1),S=c({arr:[]});u((async()=>{}));let z=0;const F=async()=>{z++;const a={page:z,pageSize:20},s=await e(a),n=s.data;200===s.code?(n.messages.forEach((a=>{S.arr.push(a)})),E.value=!1,H.value=S.arr.length===n.totalCount):(t(s.msg),E.value=!1,H.value=!0)},O=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${l}${e}`)})),a}return""},P=a=>{console.log(a,"单个删除====")};return(a,s)=>{const e=d("van-icon"),t=d("van-nav-bar"),l=d("van-swipe-cell"),o=d("van-list");return v(),p("div",j,[f(t,{class:"bg-title",title:m(C)},{left:g((()=>[f(e,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{b.push({path:"/home"})})})])),_:1},8,["title"]),h("div",w,[!m(S).arr.length&&H.value?(v(),p("div",D,[T,h("p",null,_(a.$t("user.noData")),1)])):y("",!0),m(S).arr.length||!H.value?(v(),p("div",q,[f(o,{loading:E.value,"onUpdate:loading":s[1]||(s[1]=a=>E.value=a),finished:H.value,"finished-text":a.$t("live.noMore"),"loading-text":a.$t("user.loadingText"),onLoad:F},{default:g((()=>[(v(!0),p(k,null,x(m(S).arr,((s,e)=>(v(),$(l,{key:e,"before-close":P,class:"itemContent"},{default:g((()=>[h("div",{class:"cell",onClick:a=>(a=>{b.push({path:"/user/noticeDetail",query:{id:a.id}})})(s)},[h("p",L,_(s.title),1),h("div",{class:"font_2",innerHTML:O(s.content)},null,8,M),h("div",A,[h("span",null,_(a.$t("user.lookInfo")),1),h("span",null,_(m(n)(s.optTime)),1)])],8,I)])),_:2},1024)))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])):y("",!0)])])}}});E.__scopeId="data-v-384a66d7";export{E as default};
