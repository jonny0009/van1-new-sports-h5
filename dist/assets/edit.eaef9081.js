import{_ as a}from"./return@2x.16bf9d85.js";import{_ as e}from"./go@2x.cdab0429.js";import{l as s,u as l,q as t,d as n,s as u}from"./index.877ad377.js";import{s as r,e as o,d as c,b as i,j as v,r as p,o as d,R as k,q as y,O as m,P as f,S as g,u as b,F as h,Z as w,V as I,Y as _,a2 as $,W as j,X as C}from"./vue.979f7bee.js";const N=a=>(j("data-v-4da6db46"),a=a(),C(),a),S={class:"noticeDetail"},x={class:"content"},H={class:"top1"},O={class:"font2"},q={class:"top1"},z={class:"font2"},E={class:"font3"},J={class:"font2"},K=N((()=>f("img",{class:"arrow",src:e},null,-1))),M={class:"font3"},D={class:"font2"},F=N((()=>f("img",{class:"arrow",src:e},null,-1))),L={class:"popup-title"},P={class:"pk-list"},R=["onClick"],T={key:0};var U=r({setup(e){const r=I(),j=o({arr:[]}),C=c({}),N=s.getItem("language"),U=c(N||{}),V=i((()=>u.state.user.userInfo)),W=i((()=>u.state.user.currency)),X=o({key:""}),Y=c(!1),Z=c(""),A=c(0),B=o({arr:[]}),{t:G}=l(),Q=c(G("user.account")),aa=s.getItem("plateMaskKey")||"",ea=c({}),sa=o({arr:[{value:G("user.hk"),key:"H"},{value:G("user.Europe"),key:"E"}]}),la={value:G("user.hk"),key:"H"};v((()=>{const a=sa.arr.find((a=>{if(a.key===aa)return a}));ea.value=a||la,ta()}));const ta=async()=>{const a=await t();200===a.code?(j.arr=a.data.accessLanguage,C.value=a.data.translate):n(a.msg)};function na(a){if(A.value=a,B.arr=[],1===a){const a=C.value[U.value.key||"zh-cn"];j.arr.map((e=>{a[e.key]&&(e.value=a[e.key])})),B.arr=j.arr,X.key=U.value.key||"zh-cn",Z.value="lang"}3===a&&(B.arr=sa.arr,X.key=ea.value.key,Z.value="Handicap"),Y.value=!0}return(e,l)=>{var t,n;const o=p("van-nav-bar"),c=p("van-icon"),i=p("van-popup");return d(),k("div",S,[y(o,{class:"bg-title",title:Q.value},{left:m((()=>[f("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{r.back()})})])),_:1},8,["title"]),f("div",x,[f("div",H,[f("span",null,g(e.$t("user.userName")),1),f("span",O,g(b(V).nickName),1)]),f("div",q,[f("span",null,g(e.$t("user.currency")),1),f("span",z,g(b(W)),1)]),f("div",{class:"top1",onClick:l[1]||(l[1]=a=>na(1))},[f("span",null,g(e.$t("user.lang")),1),f("div",E,[f("span",J,g((null==(t=U.value)?void 0:t.value)||"简体中文"),1),K])]),f("div",{class:"top1",onClick:l[2]||(l[2]=a=>na(3))},[f("span",null,g(e.$t("user.Handicap")),1),f("div",M,[f("span",D,g(null==(n=ea.value)?void 0:n.value),1),F])])]),y(i,{show:Y.value,"onUpdate:show":l[3]||(l[3]=a=>Y.value=a),position:"bottom",closeable:"",round:""},{default:m((()=>[f("div",L,g(e.$t(`user.${Z.value}`)),1),f("div",P,[(d(!0),k(h,null,w(b(B).arr,((a,e)=>(d(),k("div",{key:e,class:_(["item",[b(X).key===a.key?"item-color":""]]),onClick:e=>async function(a){if(1===A.value){U.value=a;const e=JSON.parse(JSON.stringify(C.value||""))[U.value.key];U.value.value=e[U.value.key],localStorage.setItem("locale",a.key),s.setItem("language",U.value),window.location.reload()}3===A.value&&(s.setItem("plateMaskKey",a.key),ea.value=a,u.dispatch("user/configSettingNew",{handicapType:a.key})),Y.value=!1}(a)},[f("p",null,[f("span",null,g(a.value),1),b(X).key===a.key?(d(),k("span",T,[y(c,{name:"success"})])):$("",!0)])],10,R)))),128))])])),_:1},8,["show"])])}}});U.__scopeId="data-v-4da6db46";export{U as default};
