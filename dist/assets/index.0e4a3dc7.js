import{u as a,A as e,X as s,d as t,I as l,Y as n}from"./index.39ed330e.js";import{s as i,U as o,d as r,e as c,j as d,r as u,o as v,R as p,q as f,O as g,u as m,P as h,W as b,$ as y,F as k,S as x,c as _,Y as w,Z as $}from"./vue.5fe62a63.js";const C={class:"notice"},T={class:"content"},j={key:0,class:"noData"},A=(a=>(w("data-v-26d9bb87"),a=a(),$(),a))((()=>h("img",{class:"img_1",src:n},null,-1))),D={key:1,class:"list"},I=["onClick"],L={style:{"-webkit-box-orient":"vertical"},class:"font_1"},M=["innerHTML"],q={class:"font_3"};var E=i({setup(n){const{t:i}=a(),w=o(),$=i("user.news"),E=r(!1),H=r(!1),S=c({arr:[]});d((async()=>{}));let U=0;const Y=async()=>{U++;const a={page:U,pageSize:20},e=await s(a),l=e.data;if(200===e.code){let a=[];a=l.messages?l.messages:[],a.forEach((a=>{S.arr.push(a)})),E.value=!1,H.value=S.arr.length===l.totalCount}else t(e.msg),E.value=!1,H.value=!0},z=a=>{if("string"==typeof a){const e=a.match(/<img.*?>/g);return Array.isArray(e)&&e.forEach((e=>{const s=e.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(s,`${l}${s}`)})),a}return""},F=a=>{console.log(a,"单个删除====")};return(a,s)=>{const t=u("van-icon"),l=u("van-nav-bar"),n=u("van-swipe-cell"),i=u("van-list");return v(),p("div",C,[f(l,{class:"bg-title",title:m($)},{left:g((()=>[f(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{w.push({path:"/home"})})})])),_:1},8,["title"]),h("div",T,[!m(S).arr.length&&H.value?(v(),p("div",j,[A,h("p",null,b(a.$t("user.noData")),1)])):y("",!0),m(S).arr.length||!H.value?(v(),p("div",D,[f(i,{loading:E.value,"onUpdate:loading":s[1]||(s[1]=a=>E.value=a),finished:H.value,"finished-text":a.$t("live.noMore"),"loading-text":a.$t("user.loadingText"),onLoad:Y},{default:g((()=>[(v(!0),p(k,null,x(m(S).arr,((s,t)=>(v(),_(n,{key:t,"before-close":F,class:"itemContent"},{default:g((()=>[h("div",{class:"cell",onClick:a=>(a=>{w.push({path:"/user/noticeDetail",query:{id:a.id}})})(s)},[h("p",L,b(s.title),1),h("div",{style:{"-webkit-box-orient":"vertical",display:"-webkit-box","-webkit-line-clamp":"3","text-overflow":"ellipsis"},class:"font_2",innerHTML:z(s.content)},null,8,M),h("div",q,[h("span",null,b(a.$t("user.lookInfo")),1),h("span",null,b(m(e)(s.optTime)),1)])],8,I)])),_:2},1024)))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])):y("",!0)])])}}});E.__scopeId="data-v-26d9bb87";export{E as default};
