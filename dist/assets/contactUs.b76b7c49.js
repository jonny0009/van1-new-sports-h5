import{u as a,a3 as s,d as t,a1 as l}from"./index.c9bdce44.js";import{d as e,U as n,f as c,a as o,r as i,K as r,o as d,R as u,m as v,O as p,F as f,S as m,P as y,C as g,W as k,I as _,$ as b,Y as w,Z as I}from"./vue.2cb7924b.js";const C=a=>(w("data-v-4dad0ec6"),a=a(),I(),a),h={class:"noticeDetail"},x={key:0,class:"content"},D={class:"box"},U={class:"img_2",alt:"",type:1},$={class:"right"},j=["onClick"],F={key:1,class:"noUrl"},K=C((()=>y("div",{class:"line-color"},null,-1))),O={key:1,class:"noData"},P=C((()=>y("img",{class:"img_1",src:l},null,-1)));var R=e({setup(l){const e=n(),{t:w}=a(),I=c(w("user.contactUs"));o((()=>{Y()}));const C=c([]),R=c([]),S=c([]),W=c([]),Y=async()=>{const a=await s({});if(200!==a.code)return t(a.msg);R.value=a.data.filter((a=>"1"===a.type)),S.value=a.data.filter((a=>"2"===a.type)),W.value=a.data.filter((a=>"3"===a.type)),C.value=a.data.filter((a=>1===a.state))};return(a,s)=>{const t=i("van-icon"),l=i("van-nav-bar"),n=r("img"),c=r("copy");return d(),u("div",h,[v(l,{class:"bg-title",title:I.value},{left:p((()=>[v(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{e.back()})})])),_:1},8,["title"]),C.value.length?(d(),u("div",x,[(d(!0),u(f,null,m(C.value,((a,s)=>(d(),u("div",{key:s},[y("div",D,[g(y("img",U,null,512),[[n,a.icon]]),y("div",$,[y("p",null,k(a.type),1),y("p",null,[a.url?(d(),u("span",{key:0,onClick:s=>{return t=a.url,void(1===1?window.open(t,"_self"):window.open(`mailto:${t}`,"_self"));var t}},k(a.contactInfo),9,j)):g((d(),u("span",F,[_(k(a.contactInfo),1)])),[[c,a.contactInfo]])])])]),K])))),128))])):b("",!0),C.value.length?b("",!0):(d(),u("div",O,[P,y("p",null,k(a.$t("user.noData")),1)]))])}}});R.__scopeId="data-v-4dad0ec6";export{R as default};
