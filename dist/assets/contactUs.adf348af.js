import{u as a,C as s,d as t,g as l}from"./index.c8c237af.js";import{s as e,R as n,d as c,j as o,r as i,E as r,o as u,S as d,q as v,O as p,F as f,_ as m,$ as g,P as y,V as k,x as _,B as w,X as b,Y as x}from"./vue.7833d4f2.js";const C=a=>(b("data-v-62dc8746"),a=a(),x(),a),I={class:"noticeDetail"},h={key:0,class:"content"},j={class:"box"},D={class:"img_2",alt:"",type:1},$={class:"right"},U=["onClick"],q={key:1,class:"noUrl"},B=C((()=>y("div",{class:"line-color"},null,-1))),E={key:1,class:"noData"},F=C((()=>y("img",{class:"img_1",src:l},null,-1)));var O=e({setup(l){const e=n(),{t:b}=a(),x=c(b("user.contactUs"));o((()=>{S()}));const C=c([]),O=c([]),P=c([]),R=c([]),S=async()=>{const a=await s({});if(200!==a.code)return t(a.msg);O.value=a.data.filter((a=>"1"===a.type)),P.value=a.data.filter((a=>"2"===a.type)),R.value=a.data.filter((a=>"3"===a.type)),C.value=a.data.filter((a=>1===a.state))};return(a,s)=>{const t=i("van-icon"),l=i("van-nav-bar"),n=r("img"),c=r("copy");return u(),d("div",I,[v(l,{class:"bg-title",title:x.value},{left:p((()=>[v(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{e.back()})})])),_:1},8,["title"]),C.value.length?(u(),d("div",h,[(u(!0),d(f,null,m(C.value,((a,s)=>(u(),d("div",{key:s},[y("div",j,[_(y("img",D,null,512),[[n,a.icon]]),y("div",$,[y("p",null,k(a.type),1),y("p",null,[a.url?(u(),d("span",{key:0,onClick:s=>{return t=a.url,void(1===1?window.open(t,"_self"):window.open(`mailto:${t}`,"_self"));var t}},k(a.contactInfo),9,U)):_((u(),d("span",q,[w(k(a.contactInfo),1)])),[[c,a.contactInfo]])])])]),B])))),128))])):g("",!0),C.value.length?g("",!0):(u(),d("div",E,[F,y("p",null,k(a.$t("user.noData")),1)]))])}}});O.__scopeId="data-v-62dc8746";export{O as default};
