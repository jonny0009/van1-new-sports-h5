import{_ as a}from"./return@2x.f2a0d9ed.js";import{d as s,f as l,n as e,r as t,o as i,R as n,m as c,O as r,F as o,S as d,u,P as v,W as g,$ as f,Y as p,Z as m,g as h,U as _,_ as k,c as y}from"./vue.2cb7924b.js";import{_ as b}from"./head-img.d3375f7f.js";import{ag as I,d as x,a1 as j,s as C,ah as D}from"./index.744421fa.js";const S=a=>(p("data-v-bc552cae"),a=a(),m(),a),U={class:"info"},w={class:"left"},z=S((()=>v("img",{class:"img_1",src:b,alt:""},null,-1))),E={class:"left-1"},L=S((()=>v("p",null,"@dyamimo",-1))),N=S((()=>v("p",null,"There is no going back",-1))),T=S((()=>v("div",{class:"right"}," 已关注 ",-1))),F={key:0,class:"noData"},O=[S((()=>v("img",{class:"img_1",src:j},null,-1))),S((()=>v("p",null," 未查询到相关数据 ",-1)))];var P=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await I(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",U,[c(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:r((()=>[(i(!0),n(o,null,d(u(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[v("div",w,[z,v("div",E,[v("p",null,g(a.nickName),1),L,N])]),T])))),128))])),_:1},8,["loading","finished"]),u(m).arr.length?f("",!0):(i(),n("div",F,O))])}}});P.__scopeId="data-v-bc552cae";const R=a=>(p("data-v-0538ee7f"),a=a(),m(),a),W={class:"info"},Y={class:"left"},Z=R((()=>v("img",{class:"img_1",src:b,alt:""},null,-1))),$={class:"left-1"},q=R((()=>v("p",null,"@dyamimo",-1))),A=R((()=>v("p",null,"There is no going back",-1))),B=R((()=>v("div",{class:"right"}," 已关注 ",-1))),G={key:0,class:"noData"},H=[R((()=>v("img",{class:"img_1",src:j},null,-1))),R((()=>v("p",null," 未查询到相关数据 ",-1)))];var J=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>C.state.user.userInfo)),_=e({arr:[]});let k=0;const y=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await D(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",W,[c(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:y},{default:r((()=>[(i(!0),n(o,null,d(u(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[v("div",Y,[Z,v("div",$,[v("p",null,g(a.nickName),1),q,A])]),B])))),128))])),_:1},8,["loading","finished"]),u(_).arr.length?f("",!0):(i(),n("div",G,H))])}}});J.__scopeId="data-v-0538ee7f";const K={class:"noticeDetail"},M={class:"content"},Q={class:"area-btn_1"};var V=s({setup(s){const e=_(),o=l(1),d=l("关注");return(s,l)=>{const u=t("van-nav-bar");return i(),n("div",K,[c(u,{class:"bg-title",title:d.value},{left:r((()=>[v("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),v("div",M,[v("div",Q,[v("span",{class:k(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),v("span",{class:k(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),y(P,{key:0})):f("",!0),2==o.value?(i(),y(J,{key:1})):f("",!0)])])}}});V.__scopeId="data-v-7d89969e";export{V as default};
