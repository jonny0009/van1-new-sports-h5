import{_ as a}from"./return@2x.16bf9d85.js";import{s,d as l,e,r as t,o as i,R as n,q as r,O as c,F as o,Z as d,u,a2 as v,P as f,S as g,W as p,X as m,b as h,Y as _,c as k,V as y}from"./vue.e791136f.js";import{h as b}from"./head-img.cba6d78c.js";import{_ as I}from"./noData.b9def74d.js";import{S as j,d as x,s as D,T as S}from"./index.3adb18fc.js";const C=a=>(p("data-v-1f26265a"),a=a(),m(),a),T={class:"info"},w={class:"left"},z=C((()=>f("img",{class:"img_1",src:b,alt:""},null,-1))),E={class:"left-1"},L=C((()=>f("p",null,"@dyamimo",-1))),N=C((()=>f("p",null,"There is no going back",-1))),U=C((()=>f("div",{class:"right"}," 已关注 ",-1))),q={key:0,class:"noData"},F=[C((()=>f("img",{class:"img_1",src:I},null,-1))),C((()=>f("p",null," 未查询到相关数据 ",-1)))];var O=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await j(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",T,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:c((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[f("div",w,[z,f("div",E,[f("p",null,g(a.nickName),1),L,N])]),U])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?v("",!0):(i(),n("div",q,F))])}}});O.__scopeId="data-v-1f26265a";const P=a=>(p("data-v-522c1e51"),a=a(),m(),a),R={class:"info"},V={class:"left"},W=P((()=>f("img",{class:"img_1",src:b,alt:""},null,-1))),X={class:"left-1"},Y=P((()=>f("p",null,"@dyamimo",-1))),Z=P((()=>f("p",null,"There is no going back",-1))),A=P((()=>f("div",{class:"right"}," 已关注 ",-1))),B={key:0,class:"noData"},G=[P((()=>f("img",{class:"img_1",src:I},null,-1))),P((()=>f("p",null," 未查询到相关数据 ",-1)))];var H=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>D.state.user.userInfo)),_=e({arr:[]});let k=0;const y=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await S(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",R,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:y},{default:c((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[f("div",V,[W,f("div",X,[f("p",null,g(a.nickName),1),Y,Z])]),A])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?v("",!0):(i(),n("div",B,G))])}}});H.__scopeId="data-v-522c1e51";const J={class:"noticeDetail"},K={class:"content"},M={class:"area-btn_1"};var Q=s({setup(s){const e=y(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",J,[r(u,{class:"bg-title",title:d.value},{left:c((()=>[f("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),f("div",K,[f("div",M,[f("span",{class:_(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),f("span",{class:_(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),k(O,{key:0})):v("",!0),2==o.value?(i(),k(H,{key:1})):v("",!0)])])}}});Q.__scopeId="data-v-597992de";export{Q as default};
