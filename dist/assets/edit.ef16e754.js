import{_ as a}from"./return@2x.16bf9d85.js";import{_ as s}from"./go@2x.cdab0429.js";import{l as e,u as l,q as t,b as n,s as u}from"./index.bd99f19d.js";import{s as r,e as o,d as c,b as i,j as v,r as p,o as d,R as k,q as f,O as y,P as m,S as g,u as b,F as h,Z as w,V as _,Y as I,a2 as $,W as j,X as C}from"./vue.e791136f.js";const N=a=>(j("data-v-219f3f8e"),a=a(),C(),a),S={class:"noticeDetail"},x={class:"content"},H={class:"top1"},O={class:"font2"},q={class:"top1"},z={class:"font2"},E={class:"font3"},J={class:"font2"},D=N((()=>m("img",{class:"arrow",src:s},null,-1))),F={class:"font3"},K={class:"font2"},L=N((()=>m("img",{class:"arrow",src:s},null,-1))),M={class:"popup-title"},P={class:"pk-list"},R=["onClick"],T={key:0};var U=r({setup(s){const r=_(),j=o({arr:[]}),C=c({}),N=e.getItem("language"),U=c(N||{}),V=i((()=>u.state.user.userInfo)),W=i((()=>u.state.user.currency)),X=o({key:""}),Y=c(!1),Z=c(""),A=c(0),B=o({arr:[]}),{t:G}=l(),Q=c(G("user.account")),aa=e.getItem("plateMaskKey")||"",sa=c({}),ea=o({arr:[{value:G("user.hk"),key:"H"},{value:G("user.Europe"),key:"E"}]}),la={value:G("user.hk"),key:"H"};v((()=>{const a=ea.arr.find((a=>{if(a.key===aa)return a}));sa.value=a||la,ta()}));const ta=async()=>{const a=await t();200===a.code?(j.arr=a.data.accessLanguage,C.value=a.data.translate):n(a.msg)};function na(a){if(A.value=a,B.arr=[],1===a){const a=C.value[U.value.key||"zh-cn"];j.arr.map((s=>{a[s.key]&&(s.value=a[s.key])})),B.arr=j.arr,X.key=U.value.key||"zh-cn",Z.value="lang"}3===a&&(B.arr=ea.arr,X.key=sa.value.key,Z.value="Handicap"),Y.value=!0}return(s,l)=>{var t,n;const o=p("van-nav-bar"),c=p("van-icon"),i=p("van-popup");return d(),k("div",S,[f(o,{class:"bg-title",title:Q.value},{left:y((()=>[m("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{r.back()})})])),_:1},8,["title"]),m("div",x,[m("div",H,[m("span",null,g(s.$t("user.userName")),1),m("span",O,g(b(V).nickName),1)]),m("div",q,[m("span",null,g(s.$t("user.currency")),1),m("span",z,g(b(W)),1)]),m("div",{class:"top1",onClick:l[1]||(l[1]=a=>na(1))},[m("span",null,g(s.$t("user.lang")),1),m("div",E,[m("span",J,g((null==(t=U.value)?void 0:t.value)||"简体中文"),1),D])]),m("div",{class:"top1",onClick:l[2]||(l[2]=a=>na(3))},[m("span",null,g(s.$t("user.Handicap")),1),m("div",F,[m("span",K,g(null==(n=sa.value)?void 0:n.value),1),L])])]),f(i,{show:Y.value,"onUpdate:show":l[3]||(l[3]=a=>Y.value=a),position:"bottom",closeable:"",round:""},{default:y((()=>[m("div",M,g(s.$t(`user.${Z.value}`)),1),m("div",P,[(d(!0),k(h,null,w(b(B).arr,((a,s)=>(d(),k("div",{key:s,class:I(["item",[b(X).key===a.key?"item-color":""]]),onClick:s=>async function(a){if(1===A.value){U.value=a;const s=JSON.parse(JSON.stringify(C.value||""))[U.value.key];U.value.value=s[U.value.key],localStorage.setItem("locale",a.key),e.setItem("language",U.value),window.location.reload()}3===A.value&&(sa.value=a,u.dispatch("user/configSettingNew",{handicapType:a.key})),Y.value=!1}(a)},[m("p",null,[m("span",null,g(a.value),1),b(X).key===a.key?(d(),k("span",T,[f(c,{name:"success"})])):$("",!0)])],10,R)))),128))])])),_:1},8,["show"])])}}});U.__scopeId="data-v-219f3f8e";export{U as default};
