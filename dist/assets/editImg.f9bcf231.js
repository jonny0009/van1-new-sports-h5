const s={};import{h as a}from"./head-img.2e40e95c.js";import{d as l,a as e,r as c,o as i,u as t,m as n,p as v,q as u,D as r,F as o,E as d,I as m,A as g,B as p,C as k}from"./vue.99649ec0.js";const f={class:"editName"},y={class:"title"},_={class:"area-btn_1"},C={class:"content"},b={key:0,class:"img-style"},h={key:1,class:"img-style"},j={key:2,class:"img-style"},w=[(s=>(p("data-v-58504254"),s=s(),k(),s))((()=>u("div",{class:"img_2"},null,-1)))];var I=l({setup(l){const p=g(),k=e(1),I=e(a),L=e("编辑头像"),R=(a,l)=>1===l?new URL(`../../assets/images/user/star/${a}.png`,s.url).href:2===l?new URL(`../../assets/images/user/else/${a}.png`,s.url).href:void 0;return(s,a)=>{const l=c("van-nav-bar"),e=c("van-image");return i(),t("div",f,[n(l,{class:"bg-title",title:L.value,border:!1},{left:v((()=>[u("span",{onClick:a[0]||(a[0]=s=>{p.back()})},"取消")])),right:v((()=>[u("span",{onClick:a[1]||(a[1]=s=>{console.log("保存====")})},"保存")])),_:1},8,["title"]),u("div",y,[n(e,{class:"img_1",fit:"contain",src:I.value},null,8,["src"])]),u("div",_,[u("span",{class:r(1==k.value?"active":""),onClick:a[2]||(a[2]=s=>k.value=1)},"足球明星",2),u("span",{class:r(2==k.value?"active":""),onClick:a[3]||(a[3]=s=>k.value=2)},"其他人物",2),u("span",{class:r(3==k.value?"active":""),onClick:a[4]||(a[4]=s=>k.value=3)},"背景颜色",2)]),u("div",C,[1===k.value?(i(),t("div",b,[(i(),t(o,null,d(16,(s=>u("div",{key:s,class:"select-img"},[n(e,{class:"img_1",fit:"contain",src:R(s,k.value)},null,8,["src"])]))),64))])):m("",!0),2===k.value?(i(),t("div",h,[(i(),t(o,null,d(16,(s=>u("div",{key:s,class:"select-img"},[n(e,{class:"img_1",fit:"contain",src:R(s,k.value)},null,8,["src"])]))),64))])):m("",!0),3===k.value?(i(),t("div",j,[(i(),t(o,null,d(16,(s=>u("div",{key:s,class:"select-img"},w))),64))])):m("",!0)])])}}});I.__scopeId="data-v-58504254";export{I as default};
