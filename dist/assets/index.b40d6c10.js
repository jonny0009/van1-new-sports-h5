import{_ as a,a as s,b as e,c as l}from"./service@2x.3d8a72c7.js";import{_ as t}from"./go@2x.0009cff9.js";import{s as r,d as i,e as c,j as n,r as o,o as u,R as v,q as d,O as p,Y as k,P as m,S as g,F as f,Z as y,u as b,V as _,a2 as h,W as $,X as x}from"./vue.979f7bee.js";import{u as C,l as j}from"./index.9c8ae8fd.js";const w=a=>($("data-v-3e62450e"),a=a(),x(),a),H={class:"login-page"},I=w((()=>m("img",{class:"img_2",src:a,alt:""},null,-1))),E=w((()=>m("img",{class:"img_3",src:s,alt:""},null,-1))),K={class:"content"},M={class:"title"},O={class:"desc"},W={class:"area-btn"},q=w((()=>m("div",{class:"ban"},[m("img",{class:"ban_1",src:e,alt:""})],-1))),A={class:"list-set"},F={class:"label-info flex align-center"},P=w((()=>m("div",{class:"icon"},[m("img",{src:l})],-1))),R={class:"label"},S={class:"label-right"},T={class:"label"},U=w((()=>m("img",{class:"arrow",src:t},null,-1))),V={class:"popup-title"},X={class:"pk-list"},Y=["onClick"],Z={key:0};var z=r({setup(a){const s=_(),e=i(""),l=i(!0),t=c({key:""}),r=i(0),$=c({arr:[]}),x=i(!1),{t:w}=C(),z=j.getItem("plateMaskKey")||"",B=i({}),D=c({arr:[{value:w("user.hk"),key:"H"},{value:w("user.Europe"),key:"E"}]}),G={value:w("user.hk"),key:"H"};n((()=>{const a=D.arr.find((a=>{if(a.key===z)return a}));B.value=a||G}));const J=()=>{console.log("注册本版本支持==")},L=()=>{s.push({path:"/sign_in"})};return(a,i)=>{var c;const n=o("van-icon"),_=o("van-nav-bar"),C=o("van-popup");return u(),v("div",H,[d(_,{class:k(["bg-title",[l.value?"theme":""]])},{left:p((()=>[d(n,{name:"arrow-left",class:"img_1",onClick:i[0]||(i[0]=a=>{s.back()})})])),title:p((()=>[I])),right:p((()=>[E])),_:1},8,["class"]),m("div",K,[m("p",M,g(a.$t("user.WelcomeToAI")),1),m("span",O,g(a.$t("user.text1")),1),m("div",W,[m("span",{onClick:J},g(a.$t("user.register")),1),m("span",{onClick:L},g(a.$t("user.logOn")),1)]),q,m("div",A,[m("div",{class:"item",onClick:i[1]||(i[1]=a=>{return s=3,r.value=s,$.arr=[],3===s&&($.arr=D.arr,t.key=B.value.key,e.value="Handicap"),void(x.value=!0);var s})},[m("div",F,[P,m("div",R,g(a.$t("user.Handicap")),1)]),m("div",S,[m("div",T,g(null==(c=B.value)?void 0:c.value),1),U])])])]),d(C,{show:x.value,"onUpdate:show":i[2]||(i[2]=a=>x.value=a),duration:.2,position:"bottom",closeable:"",round:""},{default:p((()=>[m("div",V,g(a.$t(`user.${e.value}`)),1),m("div",X,[(u(!0),v(f,null,y(b($).arr,((a,s)=>(u(),v("div",{key:s,class:k(["item",[b(t).key===a.key?"item-color":""]]),onClick:s=>async function(a){3===r.value&&(j.setItem("plateMaskKey",a.key),B.value=a),x.value=!1}(a)},[m("p",null,[m("span",null,g(a.value),1),b(t).key===a.key?(u(),v("span",Z,[d(n,{name:"success"})])):h("",!0)])],10,Y)))),128))])])),_:1},8,["show","duration"])])}}});z.__scopeId="data-v-3e62450e";export{z as default};
