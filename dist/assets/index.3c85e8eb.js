import{_ as a}from"./return@2x.f2a0d9ed.js";import{s,d as l,e,r as t,o as i,S as n,q as r,O as c,F as o,Z as d,u,a0 as v,P as f,V as g,X as p,Y as m,b as h,R as _,_ as k,c as b}from"./vue.95886b43.js";import{_ as y}from"./head-img.d3375f7f.js";import{_ as I}from"./noData.1caa3bb3.js";import{L as j,b as x,s as D,M as C}from"./index.d2005fc8.js";const L=a=>(p("data-v-bc552cae"),a=a(),m(),a),S={class:"info"},w={class:"left"},z=L((()=>f("img",{class:"img_1",src:y,alt:""},null,-1))),E={class:"left-1"},N=L((()=>f("p",null,"@dyamimo",-1))),T=L((()=>f("p",null,"There is no going back",-1))),U=L((()=>f("div",{class:"right"}," 已关注 ",-1))),q={key:0,class:"noData"},F=[L((()=>f("img",{class:"img_1",src:I},null,-1))),L((()=>f("p",null," 未查询到相关数据 ",-1)))];var M=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await j(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",S,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:c((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[f("div",w,[z,f("div",E,[f("p",null,g(a.nickName),1),N,T])]),U])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?v("",!0):(i(),n("div",q,F))])}}});M.__scopeId="data-v-bc552cae";const O=a=>(p("data-v-0538ee7f"),a=a(),m(),a),P={class:"info"},R={class:"left"},V=O((()=>f("img",{class:"img_1",src:y,alt:""},null,-1))),X={class:"left-1"},Y=O((()=>f("p",null,"@dyamimo",-1))),Z=O((()=>f("p",null,"There is no going back",-1))),A=O((()=>f("div",{class:"right"}," 已关注 ",-1))),B={key:0,class:"noData"},G=[O((()=>f("img",{class:"img_1",src:I},null,-1))),O((()=>f("p",null," 未查询到相关数据 ",-1)))];var H=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>D.state.user.userInfo)),_=e({arr:[]});let k=0;const b=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await C(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",P,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:b},{default:c((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[f("div",R,[V,f("div",X,[f("p",null,g(a.nickName),1),Y,Z])]),A])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?v("",!0):(i(),n("div",B,G))])}}});H.__scopeId="data-v-0538ee7f";const J={class:"noticeDetail"},K={class:"content"},Q={class:"area-btn_1"};var W=s({setup(s){const e=_(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",J,[r(u,{class:"bg-title",title:d.value},{left:c((()=>[f("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),f("div",K,[f("div",Q,[f("span",{class:k(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),f("span",{class:k(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),b(M,{key:0})):v("",!0),2==o.value?(i(),b(H,{key:1})):v("",!0)])])}}});W.__scopeId="data-v-7d89969e";export{W as default};
