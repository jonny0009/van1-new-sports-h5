import{_ as a}from"./return@2x.bd440ba9.js";import{s,d as l,e,r as t,o as i,R as n,q as r,O as c,F as o,Z as d,u,a2 as v,P as g,S as p,W as f,X as m,b as h,Y as _,c as k,V as y}from"./vue.e791136f.js";import{h as b}from"./head-img.fe52c625.js";import{_ as I}from"./noData.9752ce41.js";import{S as j,b as x,s as D,T as S}from"./index.3dbe43d3.js";const C=a=>(f("data-v-0e2a751c"),a=a(),m(),a),T={class:"info"},w={class:"left"},z=C((()=>g("img",{class:"img_1",src:b,alt:""},null,-1))),E={class:"left-1"},L=C((()=>g("p",null,"@dyamimo",-1))),N=C((()=>g("p",null,"There is no going back",-1))),U=C((()=>g("div",{class:"right"}," 已关注 ",-1))),q={key:0,class:"noData"},F=[C((()=>g("img",{class:"img_1",src:I},null,-1))),C((()=>g("p",null," 未查询到相关数据 ",-1)))];var O=s({setup(a){const s=l(!1),f=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await j(a),e=l.data;if(!e.list)return s.value=!1,void(f.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,f.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",T,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:f.value,"finished-text":"",onLoad:_},{default:c((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",w,[z,g("div",E,[g("p",null,p(a.nickName),1),L,N])]),U])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?v("",!0):(i(),n("div",q,F))])}}});O.__scopeId="data-v-0e2a751c";const P=a=>(f("data-v-2536355a"),a=a(),m(),a),R={class:"info"},V={class:"left"},W=P((()=>g("img",{class:"img_1",src:b,alt:""},null,-1))),X={class:"left-1"},Y=P((()=>g("p",null,"@dyamimo",-1))),Z=P((()=>g("p",null,"There is no going back",-1))),A=P((()=>g("div",{class:"right"}," 已关注 ",-1))),B={key:0,class:"noData"},G=[P((()=>g("img",{class:"img_1",src:I},null,-1))),P((()=>g("p",null," 未查询到相关数据 ",-1)))];var H=s({setup(a){const s=l(!1),f=l(!1),m=h((()=>D.state.user.userInfo)),_=e({arr:[]});let k=0;const y=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await S(a),e=l.data;if(!e.list)return s.value=!1,void(f.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,f.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",R,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:f.value,"finished-text":"",onLoad:y},{default:c((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",V,[W,g("div",X,[g("p",null,p(a.nickName),1),Y,Z])]),A])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?v("",!0):(i(),n("div",B,G))])}}});H.__scopeId="data-v-2536355a";const J={class:"noticeDetail"},K={class:"content"},M={class:"area-btn_1"};var Q=s({setup(s){const e=y(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",J,[r(u,{class:"bg-title",title:d.value},{left:c((()=>[g("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),g("div",K,[g("div",M,[g("span",{class:_(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),g("span",{class:_(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),k(O,{key:0})):v("",!0),2==o.value?(i(),k(H,{key:1})):v("",!0)])])}}});Q.__scopeId="data-v-507d4204";export{Q as default};
