import{_ as a}from"./return@2x.f2a0d9ed.js";import{s,d as l,e,r as t,o as i,R as n,q as r,O as c,F as o,S as d,u,P as v,W as f,$ as g,Y as p,Z as m,b as h,U as _,_ as k,c as y}from"./vue.c62eea93.js";import{_ as b}from"./head-img.d3375f7f.js";import{ae as I,d as x,$ as j,s as C,af as D}from"./index.cf99e2ab.js";const S=a=>(p("data-v-1f26265a"),a=a(),m(),a),U={class:"info"},w={class:"left"},z=S((()=>v("img",{class:"img_1",src:b,alt:""},null,-1))),E={class:"left-1"},L=S((()=>v("p",null,"@dyamimo",-1))),N=S((()=>v("p",null,"There is no going back",-1))),T=S((()=>v("div",{class:"right"}," 已关注 ",-1))),$={key:0,class:"noData"},q=[S((()=>v("img",{class:"img_1",src:j},null,-1))),S((()=>v("p",null," 未查询到相关数据 ",-1)))];var F=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await I(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",U,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:c((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[v("div",w,[z,v("div",E,[v("p",null,f(a.nickName),1),L,N])]),T])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?g("",!0):(i(),n("div",$,q))])}}});F.__scopeId="data-v-1f26265a";const O=a=>(p("data-v-522c1e51"),a=a(),m(),a),P={class:"info"},R={class:"left"},W=O((()=>v("img",{class:"img_1",src:b,alt:""},null,-1))),Y={class:"left-1"},Z=O((()=>v("p",null,"@dyamimo",-1))),A=O((()=>v("p",null,"There is no going back",-1))),B=O((()=>v("div",{class:"right"}," 已关注 ",-1))),G={key:0,class:"noData"},H=[O((()=>v("img",{class:"img_1",src:j},null,-1))),O((()=>v("p",null," 未查询到相关数据 ",-1)))];var J=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>C.state.user.userInfo)),_=e({arr:[]});let k=0;const y=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await D(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",P,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:y},{default:c((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[v("div",R,[W,v("div",Y,[v("p",null,f(a.nickName),1),Z,A])]),B])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?g("",!0):(i(),n("div",G,H))])}}});J.__scopeId="data-v-522c1e51";const K={class:"noticeDetail"},M={class:"content"},Q={class:"area-btn_1"};var V=s({setup(s){const e=_(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",K,[r(u,{class:"bg-title",title:d.value},{left:c((()=>[v("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),v("div",M,[v("div",Q,[v("span",{class:k(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),v("span",{class:k(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),y(F,{key:0})):g("",!0),2==o.value?(i(),y(J,{key:1})):g("",!0)])])}}});V.__scopeId="data-v-597992de";export{V as default};
