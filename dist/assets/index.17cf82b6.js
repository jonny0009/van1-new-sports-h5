import{_ as a}from"./return@2x.f2a0d9ed.js";import{s,d as l,e,r as t,o as i,S as n,q as r,O as c,F as o,Z as u,u as d,a0 as v,P as g,V as p,X as f,Y as m,b as h,R as _,_ as b,c as k}from"./vue.6c3ce548.js";import{_ as y}from"./head-img.d3375f7f.js";import{_ as I}from"./noData.1caa3bb3.js";import{M as j,b as x,s as D,N as C}from"./index.9774e3e4.js";const N=a=>(f("data-v-e480b2b8"),a=a(),m(),a),S={class:"info"},w={class:"left"},z=N((()=>g("img",{class:"img_1",src:y,alt:""},null,-1))),E={class:"left-1"},L=N((()=>g("p",null,"@dyamimo",-1))),T=N((()=>g("p",null,"There is no going back",-1))),U=N((()=>g("div",{class:"right"}," 已关注 ",-1))),q={key:0,class:"noData"},F=[N((()=>g("img",{class:"img_1",src:I},null,-1))),N((()=>g("p",null," 未查询到相关数据 ",-1)))];var M=s({setup(a){const s=l(!1),f=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await j(a),e=l.data;if(!e.list)return s.value=!1,void(f.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,f.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",S,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:f.value,"finished-text":"",onLoad:_},{default:c((()=>[(i(!0),n(o,null,u(d(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",w,[z,g("div",E,[g("p",null,p(a.nickName),1),L,T])]),U])))),128))])),_:1},8,["loading","finished"]),d(m).arr.length?v("",!0):(i(),n("div",q,F))])}}});M.__scopeId="data-v-e480b2b8";const O=a=>(f("data-v-e022701c"),a=a(),m(),a),P={class:"info"},R={class:"left"},V=O((()=>g("img",{class:"img_1",src:y,alt:""},null,-1))),X={class:"left-1"},Y=O((()=>g("p",null,"@dyamimo",-1))),Z=O((()=>g("p",null,"There is no going back",-1))),A=O((()=>g("div",{class:"right"}," 已关注 ",-1))),B={key:0,class:"noData"},G=[O((()=>g("img",{class:"img_1",src:I},null,-1))),O((()=>g("p",null," 未查询到相关数据 ",-1)))];var H=s({setup(a){const s=l(!1),f=l(!1),m=h((()=>D.state.user.userInfo)),_=e({arr:[]});let b=0;const k=async()=>{b++;const a={page:b,playerId:m.value.playerId,pageSize:20},l=await C(a),e=l.data;if(!e.list)return s.value=!1,void(f.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,f.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",P,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:f.value,"finished-text":"",onLoad:k},{default:c((()=>[(i(!0),n(o,null,u(d(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",R,[V,g("div",X,[g("p",null,p(a.nickName),1),Y,Z])]),A])))),128))])),_:1},8,["loading","finished"]),d(_).arr.length?v("",!0):(i(),n("div",B,G))])}}});H.__scopeId="data-v-e022701c";const J={class:"noticeDetail"},K={class:"content"},Q={class:"area-btn_1"};var W=s({setup(s){const e=_(),o=l(1),u=l("关注");return(s,l)=>{const d=t("van-nav-bar");return i(),n("div",J,[r(d,{class:"bg-title",title:u.value},{left:c((()=>[g("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),g("div",K,[g("div",Q,[g("span",{class:b(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),g("span",{class:b(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),k(M,{key:0})):v("",!0),2==o.value?(i(),k(H,{key:1})):v("",!0)])])}}});W.__scopeId="data-v-4a50b31e";export{W as default};
