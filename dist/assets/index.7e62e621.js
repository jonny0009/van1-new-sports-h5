import{_ as a}from"./return@2x.f2a0d9ed.js";import{s,d as l,e,r as t,o as i,S as n,q as c,O as r,F as o,_ as d,u,$ as v,P as g,V as f,X as p,Y as m,b as h,R as _,Z as k,c as y}from"./vue.144c3097.js";import{_ as b}from"./head-img.d3375f7f.js";import{L as I,d as x,n as j,s as C,M as D}from"./index.8c868498.js";const L=a=>(p("data-v-bc552cae"),a=a(),m(),a),S={class:"info"},w={class:"left"},z=L((()=>g("img",{class:"img_1",src:b,alt:""},null,-1))),E={class:"left-1"},N=L((()=>g("p",null,"@dyamimo",-1))),T=L((()=>g("p",null,"There is no going back",-1))),U=L((()=>g("div",{class:"right"}," 已关注 ",-1))),q={key:0,class:"noData"},F=[L((()=>g("img",{class:"img_1",src:j},null,-1))),L((()=>g("p",null," 未查询到相关数据 ",-1)))];var M=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await I(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",S,[c(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:r((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",w,[z,g("div",E,[g("p",null,f(a.nickName),1),N,T])]),U])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?v("",!0):(i(),n("div",q,F))])}}});M.__scopeId="data-v-bc552cae";const O=a=>(p("data-v-0538ee7f"),a=a(),m(),a),P={class:"info"},R={class:"left"},V=O((()=>g("img",{class:"img_1",src:b,alt:""},null,-1))),X={class:"left-1"},Y=O((()=>g("p",null,"@dyamimo",-1))),Z=O((()=>g("p",null,"There is no going back",-1))),$=O((()=>g("div",{class:"right"}," 已关注 ",-1))),A={key:0,class:"noData"},B=[O((()=>g("img",{class:"img_1",src:j},null,-1))),O((()=>g("p",null," 未查询到相关数据 ",-1)))];var G=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>C.state.user.userInfo)),_=e({arr:[]});let k=0;const y=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await D(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",P,[c(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:y},{default:r((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",R,[V,g("div",X,[g("p",null,f(a.nickName),1),Y,Z])]),$])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?v("",!0):(i(),n("div",A,B))])}}});G.__scopeId="data-v-0538ee7f";const H={class:"noticeDetail"},J={class:"content"},K={class:"area-btn_1"};var Q=s({setup(s){const e=_(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",H,[c(u,{class:"bg-title",title:d.value},{left:r((()=>[g("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),g("div",J,[g("div",K,[g("span",{class:k(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),g("span",{class:k(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),y(M,{key:0})):v("",!0),2==o.value?(i(),y(G,{key:1})):v("",!0)])])}}});Q.__scopeId="data-v-7d89969e";export{Q as default};
