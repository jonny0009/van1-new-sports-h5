import{_ as a}from"./return@2x.3d421e9b.js";import{_ as s,a as e}from"./noData.ef9d752c.js";import{m as t}from"./index.629ac8cd.js";import{d as l,a as n,J as c,f as i,r,o,u as d,m as u,p,q as m,v as f,O as g,F as v,E as h,A as _,c as y,y as b,B as C,C as j}from"./vue.3b4f9705.js";import{d as k,g as x,I as A}from"./index.844c44db.js";const D=a=>(C("data-v-1ec85c58"),a=a(),j(),a),E={class:"notice"},L={class:"content"},T={key:0,class:"noData"},$=[D((()=>m("img",{class:"img_1",src:s},null,-1))),D((()=>m("p",null," 未查询到相关数据 ",-1)))],q={class:"list"},w=["onClick"],H={class:"font_1"},I=["innerHTML"],M={class:"font_3"},z=D((()=>m("span",null,"查看完整讯息",-1))),B=D((()=>m("img",{class:"img_close",src:e},null,-1)));var F=l({setup(s){const e=_(),l=n("消息"),C=c([]),j=n(!1),D=n(!1),F=c({arr:[]});i((async()=>{}));let J=0;const O=async()=>{J++;const a={page:J,pageSize:20},s=await t(a),e=s.data;200===s.code?(e.messages.forEach((a=>{F.arr.push(a)})),j.value=!1,D.value=F.arr.length===e.totalCount):k(s.msg)},S=a=>{if("string"==typeof a){const s=a.match(/<img.*?>/g);return Array.isArray(s)&&s.forEach((s=>{const e=s.match(/src=".*?"/g)[0].replace(/(src=")(.*?)(")/,"$2");a=a.replace(e,`${A}${e}`)})),a}return""},U=a=>{};return(s,t)=>{const n=r("van-nav-bar"),c=r("van-swipe-cell"),i=r("van-list");return o(),d("div",E,[u(n,{class:"bg-title",title:l.value},{left:p((()=>[m("img",{class:"img_1",src:a,alt:"",onClick:t[0]||(t[0]=a=>{e.push({path:"/home"})})})])),_:1},8,["title"]),m("div",L,[f(C).length?(o(),d("div",T,$)):g("",!0),m("div",q,[u(i,{loading:j.value,"onUpdate:loading":t[1]||(t[1]=a=>j.value=a),finished:D.value,"finished-text":"没有更多了",onLoad:O},{default:p((()=>[(o(!0),d(v,null,h(f(F).arr,((a,s)=>(o(),y(c,{key:s,"before-close":U,class:"itemContent"},{right:p((()=>[B])),default:p((()=>[m("div",{class:"cell",onClick:s=>(a=>{e.push({path:"/user/noticeDetail",query:{id:a.id}})})(a)},[m("p",H,b(a.title),1),m("p",{class:"font_2",innerHTML:S(a.content)},null,8,I),m("div",M,[z,m("span",null,b(f(x)(a.optTime)),1)])],8,w)])),_:2},1024)))),128))])),_:1},8,["loading","finished"])])])])}}});F.__scopeId="data-v-1ec85c58";export{F as default};
