import{_ as a}from"./return@2x.f2a0d9ed.js";import{s,d as l,e,r as t,o as i,R as n,q as r,O as c,F as o,Z as d,u,a1 as v,P as g,U as f,X as p,Y as m,b as h,_,c as k,W as y}from"./vue.469c5994.js";import{_ as b}from"./head-img.d3375f7f.js";import{_ as I}from"./noData.1caa3bb3.js";import{N as j,b as x,s as D,O as C}from"./index.d01fa8c7.js";const N=a=>(p("data-v-0e2a751c"),a=a(),m(),a),U={class:"info"},w={class:"left"},z=N((()=>g("img",{class:"img_1",src:b,alt:""},null,-1))),E={class:"left-1"},L=N((()=>g("p",null,"@dyamimo",-1))),O=N((()=>g("p",null,"There is no going back",-1))),S=N((()=>g("div",{class:"right"}," 已关注 ",-1))),T={key:0,class:"noData"},q=[N((()=>g("img",{class:"img_1",src:I},null,-1))),N((()=>g("p",null," 未查询到相关数据 ",-1)))];var F=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await j(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",U,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:c((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",w,[z,g("div",E,[g("p",null,f(a.nickName),1),L,O])]),S])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?v("",!0):(i(),n("div",T,q))])}}});F.__scopeId="data-v-0e2a751c";const P=a=>(p("data-v-2536355a"),a=a(),m(),a),R={class:"info"},W={class:"left"},X=P((()=>g("img",{class:"img_1",src:b,alt:""},null,-1))),Y={class:"left-1"},Z=P((()=>g("p",null,"@dyamimo",-1))),A=P((()=>g("p",null,"There is no going back",-1))),B=P((()=>g("div",{class:"right"}," 已关注 ",-1))),G={key:0,class:"noData"},H=[P((()=>g("img",{class:"img_1",src:I},null,-1))),P((()=>g("p",null," 未查询到相关数据 ",-1)))];var J=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>D.state.user.userInfo)),_=e({arr:[]});let k=0;const y=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await C(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",R,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:y},{default:c((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",W,[X,g("div",Y,[g("p",null,f(a.nickName),1),Z,A])]),B])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?v("",!0):(i(),n("div",G,H))])}}});J.__scopeId="data-v-2536355a";const K={class:"noticeDetail"},M={class:"content"},Q={class:"area-btn_1"};var V=s({setup(s){const e=y(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",K,[r(u,{class:"bg-title",title:d.value},{left:c((()=>[g("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),g("div",M,[g("div",Q,[g("span",{class:_(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),g("span",{class:_(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),k(F,{key:0})):v("",!0),2==o.value?(i(),k(J,{key:1})):v("",!0)])])}}});V.__scopeId="data-v-507d4204";export{V as default};
