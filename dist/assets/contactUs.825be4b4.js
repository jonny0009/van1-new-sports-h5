import{_ as a}from"./noData.1caa3bb3.js";import{s,R as t,d as l,j as e,r as n,E as o,o as c,S as i,q as r,O as u,F as v,Z as d,a0 as p,P as f,V as m,x as y,B as g,X as b,Y as k}from"./vue.95886b43.js";import{u as _,q as w,b as j}from"./index.875b329a.js";const x=a=>(b("data-v-62dc8746"),a=a(),k(),a),D={class:"noticeDetail"},I={key:0,class:"content"},h={class:"box"},C={class:"img_2",alt:"",type:1},q={class:"right"},U=["onClick"],$={key:1,class:"noUrl"},B=x((()=>f("div",{class:"line-color"},null,-1))),E={key:1,class:"noData"},F=x((()=>f("img",{class:"img_1",src:a},null,-1)));var O=s({setup(a){const s=t(),{t:b}=_(),k=l(b("user.contactUs"));e((()=>{S()}));const x=l([]),O=l([]),P=l([]),R=l([]),S=async()=>{const a=await w({});if(200!==a.code)return j(a.msg);O.value=a.data.filter((a=>"1"===a.type)),P.value=a.data.filter((a=>"2"===a.type)),R.value=a.data.filter((a=>"3"===a.type)),x.value=a.data.filter((a=>1===a.state))};return(a,t)=>{const l=n("van-icon"),e=n("van-nav-bar"),b=o("img"),_=o("copy");return c(),i("div",D,[r(e,{class:"bg-title",title:k.value},{left:u((()=>[r(l,{name:"arrow-left",class:"img_1",onClick:t[0]||(t[0]=a=>{s.back()})})])),_:1},8,["title"]),x.value.length?(c(),i("div",I,[(c(!0),i(v,null,d(x.value,((a,s)=>(c(),i("div",{key:s},[f("div",h,[y(f("img",C,null,512),[[b,a.icon]]),f("div",q,[f("p",null,m(a.type),1),f("p",null,[a.url?(c(),i("span",{key:0,onClick:s=>{return t=a.url,void(1===1?window.open(t,"_self"):window.open(`mailto:${t}`,"_self"));var t}},m(a.contactInfo),9,U)):y((c(),i("span",$,[g(m(a.contactInfo),1)])),[[_,a.contactInfo]])])])]),B])))),128))])):p("",!0),x.value.length?p("",!0):(c(),i("div",E,[F,f("p",null,m(a.$t("user.noData")),1)]))])}}});O.__scopeId="data-v-62dc8746";export{O as default};
