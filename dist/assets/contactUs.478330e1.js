import{_ as a}from"./noData.1caa3bb3.js";import{s,R as t,d as l,j as e,r as n,E as c,o,S as i,q as r,O as u,F as d,Z as v,a0 as p,P as f,V as m,x as y,B as g,X as k,Y as _}from"./vue.6c3ce548.js";import{u as b,w,b as j}from"./index.8d290b8c.js";const x=a=>(k("data-v-62dc8746"),a=a(),_(),a),D={class:"noticeDetail"},I={key:0,class:"content"},h={class:"box"},C={class:"img_2",alt:"",type:1},U={class:"right"},$=["onClick"],q={key:1,class:"noUrl"},B=x((()=>f("div",{class:"line-color"},null,-1))),E={key:1,class:"noData"},F=x((()=>f("img",{class:"img_1",src:a},null,-1)));var O=s({setup(a){const s=t(),{t:k}=b(),_=l(k("user.contactUs"));e((()=>{S()}));const x=l([]),O=l([]),P=l([]),R=l([]),S=async()=>{const a=await w({});if(200!==a.code)return j(a.msg);O.value=a.data.filter((a=>"1"===a.type)),P.value=a.data.filter((a=>"2"===a.type)),R.value=a.data.filter((a=>"3"===a.type)),x.value=a.data.filter((a=>1===a.state))};return(a,t)=>{const l=n("van-icon"),e=n("van-nav-bar"),k=c("img"),b=c("copy");return o(),i("div",D,[r(e,{class:"bg-title",title:_.value},{left:u((()=>[r(l,{name:"arrow-left",class:"img_1",onClick:t[0]||(t[0]=a=>{s.back()})})])),_:1},8,["title"]),x.value.length?(o(),i("div",I,[(o(!0),i(d,null,v(x.value,((a,s)=>(o(),i("div",{key:s},[f("div",h,[y(f("img",C,null,512),[[k,a.icon]]),f("div",U,[f("p",null,m(a.type),1),f("p",null,[a.url?(o(),i("span",{key:0,onClick:s=>{return t=a.url,void(1===1?window.open(t,"_self"):window.open(`mailto:${t}`,"_self"));var t}},m(a.contactInfo),9,$)):y((o(),i("span",q,[g(m(a.contactInfo),1)])),[[b,a.contactInfo]])])])]),B])))),128))])):p("",!0),x.value.length?p("",!0):(o(),i("div",E,[F,f("p",null,m(a.$t("user.noData")),1)]))])}}});O.__scopeId="data-v-62dc8746";export{O as default};
