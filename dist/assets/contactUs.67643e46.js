import{u as a,a1 as s,d as t,$ as l}from"./index.a0c0579a.js";import{s as e,U as n,d as c,j as o,r as i,E as r,o as d,R as u,q as v,O as p,F as f,S as m,P as y,x as g,W as k,B as _,$ as w,Y as b,Z as x}from"./vue.1f547d27.js";const I=a=>(b("data-v-4dad0ec6"),a=a(),x(),a),$={class:"noticeDetail"},h={key:0,class:"content"},j={class:"box"},C={class:"img_2",alt:"",type:1},D={class:"right"},U=["onClick"],q={key:1,class:"noUrl"},B=I((()=>y("div",{class:"line-color"},null,-1))),E={key:1,class:"noData"},F=I((()=>y("img",{class:"img_1",src:l},null,-1)));var O=e({setup(l){const e=n(),{t:b}=a(),x=c(b("user.contactUs"));o((()=>{S()}));const I=c([]),O=c([]),P=c([]),R=c([]),S=async()=>{const a=await s({});if(200!==a.code)return t(a.msg);O.value=a.data.filter((a=>"1"===a.type)),P.value=a.data.filter((a=>"2"===a.type)),R.value=a.data.filter((a=>"3"===a.type)),I.value=a.data.filter((a=>1===a.state))};return(a,s)=>{const t=i("van-icon"),l=i("van-nav-bar"),n=r("img"),c=r("copy");return d(),u("div",$,[v(l,{class:"bg-title",title:x.value},{left:p((()=>[v(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{e.back()})})])),_:1},8,["title"]),I.value.length?(d(),u("div",h,[(d(!0),u(f,null,m(I.value,((a,s)=>(d(),u("div",{key:s},[y("div",j,[g(y("img",C,null,512),[[n,a.icon]]),y("div",D,[y("p",null,k(a.type),1),y("p",null,[a.url?(d(),u("span",{key:0,onClick:s=>{return t=a.url,void(1===1?window.open(t,"_self"):window.open(`mailto:${t}`,"_self"));var t}},k(a.contactInfo),9,U)):g((d(),u("span",q,[_(k(a.contactInfo),1)])),[[c,a.contactInfo]])])])]),B])))),128))])):w("",!0),I.value.length?w("",!0):(d(),u("div",E,[F,y("p",null,k(a.$t("user.noData")),1)]))])}}});O.__scopeId="data-v-4dad0ec6";export{O as default};
