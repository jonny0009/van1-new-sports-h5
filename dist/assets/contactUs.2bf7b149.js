import{u as a,q as s,d as t,n as l}from"./index.81ed1559.js";import{s as e,R as n,d as o,j as c,r as i,E as r,o as d,S as u,q as v,O as p,F as f,_ as m,$ as y,P as g,V as k,x as _,B as w,X as b,Y as x}from"./vue.7833d4f2.js";const I=a=>(b("data-v-4dad0ec6"),a=a(),x(),a),h={class:"noticeDetail"},j={key:0,class:"content"},C={class:"box"},D={class:"img_2",alt:"",type:1},$={class:"right"},q=["onClick"],U={key:1,class:"noUrl"},B=I((()=>g("div",{class:"line-color"},null,-1))),E={key:1,class:"noData"},F=I((()=>g("img",{class:"img_1",src:l},null,-1)));var O=e({setup(l){const e=n(),{t:b}=a(),x=o(b("user.contactUs"));c((()=>{S()}));const I=o([]),O=o([]),P=o([]),R=o([]),S=async()=>{const a=await s({});if(200!==a.code)return t(a.msg);O.value=a.data.filter((a=>"1"===a.type)),P.value=a.data.filter((a=>"2"===a.type)),R.value=a.data.filter((a=>"3"===a.type)),I.value=a.data.filter((a=>1===a.state))};return(a,s)=>{const t=i("van-icon"),l=i("van-nav-bar"),n=r("img"),o=r("copy");return d(),u("div",h,[v(l,{class:"bg-title",title:x.value},{left:p((()=>[v(t,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{e.back()})})])),_:1},8,["title"]),I.value.length?(d(),u("div",j,[(d(!0),u(f,null,m(I.value,((a,s)=>(d(),u("div",{key:s},[g("div",C,[_(g("img",D,null,512),[[n,a.icon]]),g("div",$,[g("p",null,k(a.type),1),g("p",null,[a.url?(d(),u("span",{key:0,onClick:s=>{return t=a.url,void(1===1?window.open(t,"_self"):window.open(`mailto:${t}`,"_self"));var t}},k(a.contactInfo),9,q)):_((d(),u("span",U,[w(k(a.contactInfo),1)])),[[o,a.contactInfo]])])])]),B])))),128))])):y("",!0),I.value.length?y("",!0):(d(),u("div",E,[F,g("p",null,k(a.$t("user.noData")),1)]))])}}});O.__scopeId="data-v-4dad0ec6";export{O as default};
