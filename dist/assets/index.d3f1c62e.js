import{u as a,m as e,d as s,k as t,n as l,I as n}from"./index.81ed1559.js";import{s as i,R as o,d as r,e as c,j as d,r as u,o as v,S as p,q as f,O as g,u as m,P as h,V as b,$ as k,F as y,_ as x,c as _,X as w,Y as $}from"./vue.7833d4f2.js";const C={class:"notice"},T={class:"content"},j={key:0,class:"noData"},D=(a=>(w("data-v-26d9bb87"),a=a(),$(),a))((()=>h("img",{class:"img_1",src:l},null,-1))),I={key:1,class:"list"},L=["onClick"],M={style:{"-webkit-box-orient":"vertical"},class:"font_1"},q=["innerHTML"],A={class:"font_3"};var E=i({setup(l){const{t:i}=a(),w=o(),$=i("user.news"),E=r(!1),H=r(!1),S=c({arr:[]});d((async()=>{}));let z=0;const F=async()=>{z++;const a={page:z,pageSize:20},t=await e(a),l=t.data;if(200===t.code){let a=[];a=l.messages?l.messages:[],a.forEach((a=>{S.arr.push(a)})),E.value=!1,H.value=S.arr.length===l.totalCount}else s(t.msg),E.value=!1,H.value=!0},O=a=>{if("string"==typeof a){const e=a.match(/<img.*?>/g);return Array.isArray(e)&&e.forEach((e=>{const s=e.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(s,`${n}${s}`)})),a}return""},P=a=>{console.log(a,"单个删除====")};return(a,e)=>{const s=u("van-icon"),l=u("van-nav-bar"),n=u("van-swipe-cell"),i=u("van-list");return v(),p("div",C,[f(l,{class:"bg-title",title:m($)},{left:g((()=>[f(s,{name:"arrow-left",class:"img_1",onClick:e[0]||(e[0]=a=>{w.push({path:"/home"})})})])),_:1},8,["title"]),h("div",T,[!m(S).arr.length&&H.value?(v(),p("div",j,[D,h("p",null,b(a.$t("user.noData")),1)])):k("",!0),m(S).arr.length||!H.value?(v(),p("div",I,[f(i,{loading:E.value,"onUpdate:loading":e[1]||(e[1]=a=>E.value=a),finished:H.value,"finished-text":a.$t("live.noMore"),"loading-text":a.$t("user.loadingText"),onLoad:F},{default:g((()=>[(v(!0),p(y,null,x(m(S).arr,((e,s)=>(v(),_(n,{key:s,"before-close":P,class:"itemContent"},{default:g((()=>[h("div",{class:"cell",onClick:a=>(a=>{w.push({path:"/user/noticeDetail",query:{id:a.id}})})(e)},[h("p",M,b(e.title),1),h("div",{style:{"-webkit-box-orient":"vertical",display:"-webkit-box","-webkit-line-clamp":"3","text-overflow":"ellipsis"},class:"font_2",innerHTML:O(e.content)},null,8,q),h("div",A,[h("span",null,b(a.$t("user.lookInfo")),1),h("span",null,b(m(t)(e.optTime)),1)])],8,L)])),_:2},1024)))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])):k("",!0)])])}}});E.__scopeId="data-v-26d9bb87";export{E as default};
