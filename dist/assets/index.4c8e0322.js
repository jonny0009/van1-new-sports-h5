import{_ as a}from"./return@2x.f2a0d9ed.js";import{s,d as l,e,r as t,o as i,R as n,q as r,O as c,F as o,_ as u,u as d,a2 as v,P as g,U as f,X as p,Y as m,b as h,Z as _,c as b,W as k}from"./vue.bfc6c13a.js";import{_ as y}from"./head-img.d3375f7f.js";import{_ as I}from"./noData.1caa3bb3.js";import{H as j,c as x,s as D,J as C}from"./index.e02fa475.js";const U=a=>(p("data-v-e480b2b8"),a=a(),m(),a),w={class:"info"},z={class:"left"},E=U((()=>g("img",{class:"img_1",src:y,alt:""},null,-1))),L={class:"left-1"},N=U((()=>g("p",null,"@dyamimo",-1))),S=U((()=>g("p",null,"There is no going back",-1))),T=U((()=>g("div",{class:"right"}," 已关注 ",-1))),q={key:0,class:"noData"},F=[U((()=>g("img",{class:"img_1",src:I},null,-1))),U((()=>g("p",null," 未查询到相关数据 ",-1)))];var H=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await j(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",w,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:c((()=>[(i(!0),n(o,null,u(d(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",z,[E,g("div",L,[g("p",null,f(a.nickName),1),N,S])]),T])))),128))])),_:1},8,["loading","finished"]),d(m).arr.length?v("",!0):(i(),n("div",q,F))])}}});H.__scopeId="data-v-e480b2b8";const J=a=>(p("data-v-e022701c"),a=a(),m(),a),O={class:"info"},P={class:"left"},R=J((()=>g("img",{class:"img_1",src:y,alt:""},null,-1))),W={class:"left-1"},X=J((()=>g("p",null,"@dyamimo",-1))),Y=J((()=>g("p",null,"There is no going back",-1))),Z=J((()=>g("div",{class:"right"}," 已关注 ",-1))),A={key:0,class:"noData"},B=[J((()=>g("img",{class:"img_1",src:I},null,-1))),J((()=>g("p",null," 未查询到相关数据 ",-1)))];var G=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>D.state.user.userInfo)),_=e({arr:[]});let b=0;const k=async()=>{b++;const a={page:b,playerId:m.value.playerId,pageSize:20},l=await C(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",O,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:k},{default:c((()=>[(i(!0),n(o,null,u(d(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[g("div",P,[R,g("div",W,[g("p",null,f(a.nickName),1),X,Y])]),Z])))),128))])),_:1},8,["loading","finished"]),d(_).arr.length?v("",!0):(i(),n("div",A,B))])}}});G.__scopeId="data-v-e022701c";const K={class:"noticeDetail"},M={class:"content"},Q={class:"area-btn_1"};var V=s({setup(s){const e=k(),o=l(1),u=l("关注");return(s,l)=>{const d=t("van-nav-bar");return i(),n("div",K,[r(d,{class:"bg-title",title:u.value},{left:c((()=>[g("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),g("div",M,[g("div",Q,[g("span",{class:_(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),g("span",{class:_(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),b(H,{key:0})):v("",!0),2==o.value?(i(),b(G,{key:1})):v("",!0)])])}}});V.__scopeId="data-v-4a50b31e";export{V as default};
