import{_ as a}from"./return@2x.f2a0d9ed.js";import{s,d as l,e,r as t,o as i,O as n,q as c,P as r,F as o,_ as d,u,S as v,Q as f,W as g,Y as p,Z as m,b as h,U as _,$ as k,c as y}from"./vue.778d92ec.js";import{_ as b}from"./head-img.d3375f7f.js";import{_ as I}from"./noData.1caa3bb3.js";import{F as j,b as x,s as D,G as C}from"./index.fcc2bdfc.js";const S=a=>(p("data-v-1f26265a"),a=a(),m(),a),U={class:"info"},w={class:"left"},z=S((()=>f("img",{class:"img_1",src:b,alt:""},null,-1))),E={class:"left-1"},F=S((()=>f("p",null,"@dyamimo",-1))),L=S((()=>f("p",null,"There is no going back",-1))),N=S((()=>f("div",{class:"right"}," 已关注 ",-1))),T={key:0,class:"noData"},q=[S((()=>f("img",{class:"img_1",src:I},null,-1))),S((()=>f("p",null," 未查询到相关数据 ",-1)))];var G=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await j(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",U,[c(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:r((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[f("div",w,[z,f("div",E,[f("p",null,g(a.nickName),1),F,L])]),N])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?v("",!0):(i(),n("div",T,q))])}}});G.__scopeId="data-v-1f26265a";const O=a=>(p("data-v-522c1e51"),a=a(),m(),a),P={class:"info"},Q={class:"left"},W=O((()=>f("img",{class:"img_1",src:b,alt:""},null,-1))),Y={class:"left-1"},Z=O((()=>f("p",null,"@dyamimo",-1))),$=O((()=>f("p",null,"There is no going back",-1))),A=O((()=>f("div",{class:"right"}," 已关注 ",-1))),B={key:0,class:"noData"},H=[O((()=>f("img",{class:"img_1",src:I},null,-1))),O((()=>f("p",null," 未查询到相关数据 ",-1)))];var J=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>D.state.user.userInfo)),_=e({arr:[]});let k=0;const y=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await C(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",P,[c(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:y},{default:r((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[f("div",Q,[W,f("div",Y,[f("p",null,g(a.nickName),1),Z,$])]),A])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?v("",!0):(i(),n("div",B,H))])}}});J.__scopeId="data-v-522c1e51";const K={class:"noticeDetail"},M={class:"content"},R={class:"area-btn_1"};var V=s({setup(s){const e=_(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",K,[c(u,{class:"bg-title",title:d.value},{left:r((()=>[f("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),f("div",M,[f("div",R,[f("span",{class:k(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),f("span",{class:k(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),y(G,{key:0})):v("",!0),2==o.value?(i(),y(J,{key:1})):v("",!0)])])}}});V.__scopeId="data-v-597992de";export{V as default};
