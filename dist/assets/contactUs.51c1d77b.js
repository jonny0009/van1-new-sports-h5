import{u as a,$ as s,d as t,Y as l}from"./index.b604bcfc.js";import{s as e,U as n,d as c,j as o,r as i,E as r,o as u,R as d,q as v,O as p,F as f,S as m,P as y,x as g,W as k,B as _,$ as b,Y as w,Z as x}from"./vue.5fe62a63.js";const I=a=>(w("data-v-4dad0ec6"),a=a(),x(),a),$={class:"noticeDetail"},h={key:0,class:"content"},j={class:"box"},C={class:"img_2",alt:"",type:1},D={class:"right"},U=["onClick"],Y={key:1,class:"noUrl"},q=I((()=>y("div",{class:"line-color"},null,-1))),B={key:1,class:"noData"},E=I((()=>y("img",{class:"img_1",src:l},null,-1)));var F=e({setup(l){const e=n(),{t:w}=a(),x=c(w("user.contactUs"));o((()=>{R()}));const I=c([]),F=c([]),O=c([]),P=c([]),R=async()=>{const a=await s({});if(200!==a.code)return t(a.msg);F.value=a.data.filter((a=>"1"===a.type)),O.value=a.data.filter((a=>"2"===a.type)),P.value=a.data.filter((a=>"3"===a.type)),I.value=a.data.filter((a=>1===a.state))};return(a,s)=>{const t=i("van-icon"),l=i("van-nav-bar"),n=r("img"),c=r("copy");return u(),d("div",$,[v(l,{class:"bg-title",title:x.value},{left:p((()=>[v(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{e.back()})})])),_:1},8,["title"]),I.value.length?(u(),d("div",h,[(u(!0),d(f,null,m(I.value,((a,s)=>(u(),d("div",{key:s},[y("div",j,[g(y("img",C,null,512),[[n,a.icon]]),y("div",D,[y("p",null,k(a.type),1),y("p",null,[a.url?(u(),d("span",{key:0,onClick:s=>{return t=a.url,void(1===1?window.open(t,"_self"):window.open(`mailto:${t}`,"_self"));var t}},k(a.contactInfo),9,U)):g((u(),d("span",Y,[_(k(a.contactInfo),1)])),[[c,a.contactInfo]])])])]),q])))),128))])):b("",!0),I.value.length?b("",!0):(u(),d("div",B,[E,y("p",null,k(a.$t("user.noData")),1)]))])}}});F.__scopeId="data-v-4dad0ec6";export{F as default};
