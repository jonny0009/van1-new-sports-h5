import{_ as a}from"./return@2x.4699c821.js";import{d as s,a as l,J as e,r as t,o as i,u as n,m as r,p as o,F as c,E as d,v as u,O as v,q as g,y as p,B as f,C as m,b as h,D as _,c as k,A as y}from"./vue.3b4f9705.js";import{h as b}from"./head-img.2b5edb0e.js";import{_ as j}from"./noData.d948af1f.js";import{f as x,h as I}from"./index.19388678.js";import{d as D,s as C}from"./index.e96292d5.js";const E=a=>(f("data-v-d8519722"),a=a(),m(),a),w={class:"info"},z={class:"left"},L=E((()=>g("img",{class:"img_1",src:b,alt:""},null,-1))),N={class:"left-1"},S=E((()=>g("p",null,"@dyamimo",-1))),T=E((()=>g("p",null,"There is no going back",-1))),U=E((()=>g("div",{class:"right"}," 已关注 ",-1))),q={key:0,class:"noData"},A=[E((()=>g("img",{class:"img_1",src:j},null,-1))),E((()=>g("p",null," 未查询到相关数据 ",-1)))];var B=s({setup(a){const s=l(!1),f=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await x(a),e=l.data;if(!e.list)return s.value=!1,void(f.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,f.value=m.arr.length===e.total):(s.value=!1,D(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",w,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:f.value,"finished-text":"",onLoad:_},{default:o((()=>[(i(!0),n(c,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",z,[L,g("div",N,[g("p",null,p(a.nickName),1),S,T])]),U])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?v("",!0):(i(),n("div",q,A))])}}});B.__scopeId="data-v-d8519722";const F=a=>(f("data-v-c1e87ca6"),a=a(),m(),a),J={class:"info"},O={class:"left"},G=F((()=>g("img",{class:"img_1",src:b,alt:""},null,-1))),H={class:"left-1"},K=F((()=>g("p",null,"@dyamimo",-1))),M=F((()=>g("p",null,"There is no going back",-1))),P=F((()=>g("div",{class:"right"}," 已关注 ",-1))),Q={key:0,class:"noData"},R=[F((()=>g("img",{class:"img_1",src:j},null,-1))),F((()=>g("p",null," 未查询到相关数据 ",-1)))];var V=s({setup(a){const s=l(!1),f=l(!1),m=h((()=>C.state.user.userInfo)),_=e({arr:[]});let k=0;const y=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await I(a),e=l.data;if(!e.list)return s.value=!1,void(f.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,f.value=_.arr.length===e.total):(s.value=!1,D(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",J,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:f.value,"finished-text":"",onLoad:y},{default:o((()=>[(i(!0),n(c,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",O,[G,g("div",H,[g("p",null,p(a.nickName),1),K,M])]),P])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?v("",!0):(i(),n("div",Q,R))])}}});V.__scopeId="data-v-c1e87ca6";const W={class:"noticeDetail"},X={class:"content"},Y={class:"area-btn_1"};var Z=s({setup(s){const e=y(),c=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",W,[r(u,{class:"bg-title",title:d.value},{left:o((()=>[g("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),g("div",X,[g("div",Y,[g("span",{class:_(1==c.value?"active":""),onClick:l[1]||(l[1]=a=>c.value=1)},"关注",2),g("span",{class:_(2==c.value?"active":""),onClick:l[2]||(l[2]=a=>c.value=2)},"粉丝",2)]),1==c.value?(i(),k(B,{key:0})):v("",!0),2==c.value?(i(),k(V,{key:1})):v("",!0)])])}}});Z.__scopeId="data-v-597992de";export{Z as default};
