import{_ as a}from"./return@2x.f2a0d9ed.js";import{s,d as l,e,r as t,o as i,S as n,q as r,O as c,F as o,_ as d,u,$ as v,P as g,V as f,X as p,Y as m,b as h,R as _,Z as k,c as b}from"./vue.144c3097.js";import{_ as y}from"./head-img.d3375f7f.js";import{J as I,d as x,n as j,s as C,K as D}from"./index.cf736178.js";const S=a=>(p("data-v-e480b2b8"),a=a(),m(),a),w={class:"info"},z={class:"left"},E=S((()=>g("img",{class:"img_1",src:y,alt:""},null,-1))),L={class:"left-1"},N=S((()=>g("p",null,"@dyamimo",-1))),T=S((()=>g("p",null,"There is no going back",-1))),U=S((()=>g("div",{class:"right"}," 已关注 ",-1))),q={key:0,class:"noData"},F=[S((()=>g("img",{class:"img_1",src:j},null,-1))),S((()=>g("p",null," 未查询到相关数据 ",-1)))];var J=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await I(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",w,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:c((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",z,[E,g("div",L,[g("p",null,f(a.nickName),1),N,T])]),U])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?v("",!0):(i(),n("div",q,F))])}}});J.__scopeId="data-v-e480b2b8";const K=a=>(p("data-v-e022701c"),a=a(),m(),a),O={class:"info"},P={class:"left"},R=K((()=>g("img",{class:"img_1",src:y,alt:""},null,-1))),V={class:"left-1"},X=K((()=>g("p",null,"@dyamimo",-1))),Y=K((()=>g("p",null,"There is no going back",-1))),Z=K((()=>g("div",{class:"right"}," 已关注 ",-1))),$={key:0,class:"noData"},A=[K((()=>g("img",{class:"img_1",src:j},null,-1))),K((()=>g("p",null," 未查询到相关数据 ",-1)))];var B=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>C.state.user.userInfo)),_=e({arr:[]});let k=0;const b=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await D(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",O,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:b},{default:c((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",P,[R,g("div",V,[g("p",null,f(a.nickName),1),X,Y])]),Z])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?v("",!0):(i(),n("div",$,A))])}}});B.__scopeId="data-v-e022701c";const G={class:"noticeDetail"},H={class:"content"},M={class:"area-btn_1"};var Q=s({setup(s){const e=_(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",G,[r(u,{class:"bg-title",title:d.value},{left:c((()=>[g("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),g("div",H,[g("div",M,[g("span",{class:k(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),g("span",{class:k(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),b(J,{key:0})):v("",!0),2==o.value?(i(),b(B,{key:1})):v("",!0)])])}}});Q.__scopeId="data-v-4a50b31e";export{Q as default};
