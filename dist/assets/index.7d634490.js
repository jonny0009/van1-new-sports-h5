import{_ as a}from"./return@2x.f2a0d9ed.js";import{s,d as l,e,r as t,o as i,S as n,q as c,O as r,F as o,Z as d,u,a0 as v,P as g,V as f,X as p,Y as m,b as h,R as _,_ as k,c as b}from"./vue.66060cab.js";import{_ as y}from"./head-img.d3375f7f.js";import{_ as I}from"./noData.1caa3bb3.js";import{F as j,b as x,s as D,G as C}from"./index.5ce50534.js";const S=a=>(p("data-v-bc552cae"),a=a(),m(),a),w={class:"info"},z={class:"left"},E=S((()=>g("img",{class:"img_1",src:y,alt:""},null,-1))),F={class:"left-1"},L=S((()=>g("p",null,"@dyamimo",-1))),N=S((()=>g("p",null,"There is no going back",-1))),T=S((()=>g("div",{class:"right"}," 已关注 ",-1))),U={key:0,class:"noData"},q=[S((()=>g("img",{class:"img_1",src:I},null,-1))),S((()=>g("p",null," 未查询到相关数据 ",-1)))];var G=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await j(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",w,[c(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:r((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",z,[E,g("div",F,[g("p",null,f(a.nickName),1),L,N])]),T])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?v("",!0):(i(),n("div",U,q))])}}});G.__scopeId="data-v-bc552cae";const O=a=>(p("data-v-0538ee7f"),a=a(),m(),a),P={class:"info"},R={class:"left"},V=O((()=>g("img",{class:"img_1",src:y,alt:""},null,-1))),X={class:"left-1"},Y=O((()=>g("p",null,"@dyamimo",-1))),Z=O((()=>g("p",null,"There is no going back",-1))),A=O((()=>g("div",{class:"right"}," 已关注 ",-1))),B={key:0,class:"noData"},H=[O((()=>g("img",{class:"img_1",src:I},null,-1))),O((()=>g("p",null," 未查询到相关数据 ",-1)))];var J=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>D.state.user.userInfo)),_=e({arr:[]});let k=0;const b=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await C(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",P,[c(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:b},{default:r((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",R,[V,g("div",X,[g("p",null,f(a.nickName),1),Y,Z])]),A])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?v("",!0):(i(),n("div",B,H))])}}});J.__scopeId="data-v-0538ee7f";const K={class:"noticeDetail"},M={class:"content"},Q={class:"area-btn_1"};var W=s({setup(s){const e=_(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",K,[c(u,{class:"bg-title",title:d.value},{left:r((()=>[g("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),g("div",M,[g("div",Q,[g("span",{class:k(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),g("span",{class:k(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),b(G,{key:0})):v("",!0),2==o.value?(i(),b(J,{key:1})):v("",!0)])])}}});W.__scopeId="data-v-7d89969e";export{W as default};
