import{_ as a}from"./return@2x.ff46508d.js";import{s,d as l,e,r as t,o as i,R as n,q as r,O as c,F as o,_ as u,u as d,a2 as v,P as f,S as g,X as p,Y as m,b as h,Z as _,c as k,W as y}from"./vue.b4a9caec.js";import{h as b}from"./head-img.b46c56be.js";import{_ as I}from"./noData.53f69283.js";import{N as j,b as x,s as D,O as C}from"./index.5445737f.js";const N=a=>(p("data-v-1f26265a"),a=a(),m(),a),S={class:"info"},w={class:"left"},z=N((()=>f("img",{class:"img_1",src:b,alt:""},null,-1))),E={class:"left-1"},L=N((()=>f("p",null,"@dyamimo",-1))),O=N((()=>f("p",null,"There is no going back",-1))),T=N((()=>f("div",{class:"right"}," 已关注 ",-1))),U={key:0,class:"noData"},q=[N((()=>f("img",{class:"img_1",src:I},null,-1))),N((()=>f("p",null," 未查询到相关数据 ",-1)))];var F=s({setup(a){const s=l(!1),p=l(!1),m=e({arr:[]});let h=0;const _=async()=>{h++;const a={page:h,pageSize:20},l=await j(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{m.arr.push(a)})),s.value=!1,p.value=m.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",S,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:_},{default:c((()=>[(i(!0),n(o,null,u(d(m).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[f("div",w,[z,f("div",E,[f("p",null,g(a.nickName),1),L,O])]),T])))),128))])),_:1},8,["loading","finished"]),d(m).arr.length?v("",!0):(i(),n("div",U,q))])}}});F.__scopeId="data-v-1f26265a";const P=a=>(p("data-v-522c1e51"),a=a(),m(),a),R={class:"info"},W={class:"left"},X=P((()=>f("img",{class:"img_1",src:b,alt:""},null,-1))),Y={class:"left-1"},Z=P((()=>f("p",null,"@dyamimo",-1))),A=P((()=>f("p",null,"There is no going back",-1))),B=P((()=>f("div",{class:"right"}," 已关注 ",-1))),G={key:0,class:"noData"},H=[P((()=>f("img",{class:"img_1",src:I},null,-1))),P((()=>f("p",null," 未查询到相关数据 ",-1)))];var J=s({setup(a){const s=l(!1),p=l(!1),m=h((()=>D.state.user.userInfo)),_=e({arr:[]});let k=0;const y=async()=>{k++;const a={page:k,playerId:m.value.playerId,pageSize:20},l=await C(a),e=l.data;if(!e.list)return s.value=!1,void(p.value=!0);200===l.code?(e.list.forEach((a=>{_.arr.push(a)})),s.value=!1,p.value=_.arr.length===e.total):(s.value=!1,x(l.msg))};return(a,l)=>{const e=t("van-list");return i(),n("div",R,[r(e,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=a=>s.value=a),finished:p.value,"finished-text":"",onLoad:y},{default:c((()=>[(i(!0),n(o,null,u(d(_).arr,((a,s)=>(i(),n("div",{key:s,class:"info-1"},[f("div",W,[X,f("div",Y,[f("p",null,g(a.nickName),1),Z,A])]),B])))),128))])),_:1},8,["loading","finished"]),d(_).arr.length?v("",!0):(i(),n("div",G,H))])}}});J.__scopeId="data-v-522c1e51";const K={class:"noticeDetail"},M={class:"content"},Q={class:"area-btn_1"};var V=s({setup(s){const e=y(),o=l(1),u=l("关注");return(s,l)=>{const d=t("van-nav-bar");return i(),n("div",K,[r(d,{class:"bg-title",title:u.value},{left:c((()=>[f("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{e.back()})})])),_:1},8,["title"]),f("div",M,[f("div",Q,[f("span",{class:_(1==o.value?"active":""),onClick:l[1]||(l[1]=a=>o.value=1)},"关注",2),f("span",{class:_(2==o.value?"active":""),onClick:l[2]||(l[2]=a=>o.value=2)},"粉丝",2)]),1==o.value?(i(),k(F,{key:0})):v("",!0),2==o.value?(i(),k(J,{key:1})):v("",!0)])])}}});V.__scopeId="data-v-597992de";export{V as default};
