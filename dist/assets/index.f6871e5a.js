import{_ as a}from"./return@2x.937c1e5d.js";import{_ as s}from"./noData.01f998cf.js";import{u as e,m as t,b as l,k as n,I as o}from"./index.2adc649a.js";import{s as r,d as i,e as c,j as u,r as d,o as p,R as v,q as f,O as g,P as m,u as h,S as _,a2 as y,F as k,Z as x,V as $,c as j,W as C,X as b}from"./vue.93da156d.js";const D={class:"notice"},T={class:"content"},w={key:0,class:"noData"},I=(a=>(C("data-v-3a06d159"),a=a(),b(),a))((()=>m("img",{class:"img_1",src:s},null,-1))),L={key:1,class:"list"},M=["onClick"],q={class:"font_1"},A=["innerHTML"],E={class:"font_3"};var H=r({setup(s){const{t:r}=e(),C=$(),b=r("user.news"),H=i(!1),S=i(!1),z=c({arr:[]});u((async()=>{}));let F=0;const O=async()=>{F++;const a={page:F,pageSize:20},s=await t(a),e=s.data;200===s.code?(e.messages.forEach((a=>{z.arr.push(a)})),H.value=!1,S.value=z.arr.length===e.totalCount):(l(s.msg),H.value=!1,S.value=!0)},P=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${o}${e}`)})),a}return""},R=a=>{console.log(a,"单个删除====")};return(s,e)=>{const t=d("van-nav-bar"),l=d("van-swipe-cell"),o=d("van-list");return p(),v("div",D,[f(t,{class:"bg-title",title:h(b)},{left:g((()=>[m("img",{class:"img_1",src:a,alt:"",onClick:e[0]||(e[0]=a=>{C.push({path:"/home"})})})])),_:1},8,["title"]),m("div",T,[!h(z).arr.length&&S.value?(p(),v("div",w,[I,m("p",null,_(s.$t("user.noData")),1)])):y("",!0),h(z).arr.length||!S.value?(p(),v("div",L,[f(o,{loading:H.value,"onUpdate:loading":e[1]||(e[1]=a=>H.value=a),finished:S.value,"finished-text":s.$t("live.noMore"),"loading-text":s.$t("user.loadingText"),onLoad:O},{default:g((()=>[(p(!0),v(k,null,x(h(z).arr,((a,e)=>(p(),j(l,{key:e,"before-close":R,class:"itemContent"},{default:g((()=>[m("div",{class:"cell",onClick:s=>(a=>{C.push({path:"/user/noticeDetail",query:{id:a.id}})})(a)},[m("p",q,_(a.title),1),m("p",{class:"font_2",innerHTML:P(a.content)},null,8,A),m("div",E,[m("span",null,_(s.$t("user.lookInfo")),1),m("span",null,_(h(n)(a.optTime)),1)])],8,M)])),_:2},1024)))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])):y("",!0)])])}}});H.__scopeId="data-v-3a06d159";export{H as default};
