<<<<<<<< HEAD:dist/assets/edit.bdaa7d54.js
import{_ as a}from"./go@2x.edb15ae5.js";import{s as e,d as s,b as l,e as t,j as n,r as u,o as r,R as o,q as c,O as i,P as v,U as p,u as d,F as k,Z as y,W as f,_ as g,a1 as m,X as h,Y as w}from"./vue.ffab6494.js";import{l as b,u as C,s as _}from"./index.923c93e1.js";const I=a=>(h("data-v-4f650f0e"),a=a(),w(),a),$={class:"noticeDetail"},j={class:"content"},q={class:"top1"},H={class:"font2"},L={class:"top1"},M={class:"font2"},x={class:"font3"},N={class:"font2"},E=I((()=>v("img",{class:"arrow",src:a},null,-1))),S={class:"font3"},U={class:"font2"},z=I((()=>v("img",{class:"arrow",src:a},null,-1))),D={class:"popup-title"},F={class:"pk-list"},K=["onClick"],O={key:0};var P=e({setup(a){const e=f(),h=b.getItem("language"),w=s(h||{}),I=l((()=>_.state.user.userInfo)),P=l((()=>_.state.user.currency)),R=t({key:""}),T=s(!1),W=s(""),X=s(0),Y=t({arr:[]}),{t:Z}=C(),A=s(Z("user.account")),B=b.getItem("plateMaskKey")||"",G=s({}),J=t({arr:[{value:Z("user.hk"),key:"H"},{value:Z("user.Europe"),key:"E"}]}),Q={value:Z("user.hk"),key:"H"};n((()=>{_.dispatch("app/queryCMerLanguage");const a=J.arr.find((a=>{if(a.key===B)return a}));G.value=a||Q}));const V=l((()=>{let a=[];const e=_.state.app.queryCMerLanguage.accessLanguage||[],s=_.state.app.queryCMerLanguage.translate||{};return e.map((a=>{a.value=s[a.key][a.key]})),a=[...e],a}));function aa(a){X.value=a,Y.arr=[],1===a&&(Y.arr=V.value||[],R.key=w.value.key||"zh-cn",W.value="lang"),3===a&&(Y.arr=J.arr,R.key=G.value.key,W.value="Handicap"),T.value=!0}return(a,s)=>{var l,t;const n=u("van-icon"),f=u("van-nav-bar"),h=u("van-popup");return r(),o("div",$,[c(f,{class:"bg-title",title:A.value},{left:i((()=>[c(n,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{e.back()})})])),_:1},8,["title"]),v("div",j,[v("div",q,[v("span",null,p(a.$t("user.userName")),1),v("span",H,p(d(I).nickName),1)]),v("div",L,[v("span",null,p(a.$t("user.currency")),1),v("span",M,p(d(P)),1)]),v("div",{class:"top1",onClick:s[1]||(s[1]=a=>aa(1))},[v("span",null,p(a.$t("user.lang")),1),v("div",x,[v("span",N,p((null==(l=w.value)?void 0:l.value)||"简体中文"),1),E])]),v("div",{class:"top1",onClick:s[2]||(s[2]=a=>aa(3))},[v("span",null,p(a.$t("user.Handicap")),1),v("div",S,[v("span",U,p(null==(t=G.value)?void 0:t.value),1),z])])]),c(h,{show:T.value,"onUpdate:show":s[3]||(s[3]=a=>T.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:i((()=>[v("div",D,p(a.$t(`user.${W.value}`)),1),v("div",F,[(r(!0),o(k,null,y(d(Y).arr,((a,e)=>(r(),o("div",{key:e,class:g(["item",[d(R).key===a.key?"item-color":""]]),onClick:e=>async function(a){1===X.value&&(w.value=a,localStorage.setItem("locale",a.key),b.setItem("language",a),window.location.reload()),3===X.value&&(G.value=a,_.dispatch("user/configSettingNew",{handicapType:a.key})),T.value=!1}(a)},[v("p",null,[v("span",null,p(a.value),1),d(R).key===a.key?(r(),o("span",O,[c(n,{name:"success"})])):m("",!0)])],10,K)))),128))])])),_:1},8,["show","duration"])])}}});P.__scopeId="data-v-4f650f0e";export{P as default};
========
import{_ as a}from"./go@2x.edb15ae5.js";import{s as e,d as s,b as l,e as t,j as n,r as u,o as r,R as o,q as c,O as i,P as v,U as p,u as d,F as k,_ as y,W as f,Z as g,a2 as m,X as h,Y as w}from"./vue.b83303fa.js";import{l as b,u as C,s as _}from"./index.40fa42cd.js";const I=a=>(h("data-v-52ff78e4"),a=a(),w(),a),$={class:"noticeDetail"},j={class:"content"},q={class:"top1"},H={class:"font2"},L={class:"top1"},M={class:"font2"},x={class:"font3"},N={class:"font2"},E=I((()=>v("img",{class:"arrow",src:a},null,-1))),S={class:"font3"},U={class:"font2"},z=I((()=>v("img",{class:"arrow",src:a},null,-1))),D={class:"popup-title"},F={class:"pk-list"},K=["onClick"],O={key:0};var P=e({setup(a){const e=f(),h=b.getItem("language"),w=s(h||{}),I=l((()=>_.state.user.userInfo)),P=l((()=>_.state.user.currency)),R=t({key:""}),T=s(!1),W=s(""),X=s(0),Y=t({arr:[]}),{t:Z}=C(),A=s(Z("user.account")),B=b.getItem("plateMaskKey")||"",G=s({}),J=t({arr:[{value:Z("user.hk"),key:"H"},{value:Z("user.Europe"),key:"E"}]}),Q={value:Z("user.hk"),key:"H"};n((()=>{_.dispatch("app/queryCMerLanguage");const a=J.arr.find((a=>{if(a.key===B)return a}));G.value=a||Q}));const V=l((()=>{let a=[];const e=_.state.app.queryCMerLanguage.accessLanguage||[],s=_.state.app.queryCMerLanguage.translate||{};return e.map((a=>{a.value=s[a.key][a.key]})),a=[...e],a}));function aa(a){X.value=a,Y.arr=[],1===a&&(Y.arr=V.value||[],R.key=w.value.key||"zh-cn",W.value="lang"),3===a&&(Y.arr=J.arr,R.key=G.value.key,W.value="Handicap"),T.value=!0}return(a,s)=>{var l,t;const n=u("van-icon"),f=u("van-nav-bar"),h=u("van-popup");return r(),o("div",$,[c(f,{class:"bg-title",title:A.value},{left:i((()=>[c(n,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{e.back()})})])),_:1},8,["title"]),v("div",j,[v("div",q,[v("span",null,p(a.$t("user.userName")),1),v("span",H,p(d(I).nickName),1)]),v("div",L,[v("span",null,p(a.$t("user.currency")),1),v("span",M,p(d(P)),1)]),v("div",{class:"top1",onClick:s[1]||(s[1]=a=>aa(1))},[v("span",null,p(a.$t("user.lang")),1),v("div",x,[v("span",N,p((null==(l=w.value)?void 0:l.value)||"简体中文"),1),E])]),v("div",{class:"top1",onClick:s[2]||(s[2]=a=>aa(3))},[v("span",null,p(a.$t("user.Handicap")),1),v("div",S,[v("span",U,p(null==(t=G.value)?void 0:t.value),1),z])])]),c(h,{show:T.value,"onUpdate:show":s[3]||(s[3]=a=>T.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:i((()=>[v("div",D,p(a.$t(`user.${W.value}`)),1),v("div",F,[(r(!0),o(k,null,y(d(Y).arr,((a,e)=>(r(),o("div",{key:e,class:g(["item",[d(R).key===a.key?"item-color":""]]),onClick:e=>async function(a){1===X.value&&(w.value=a,localStorage.setItem("locale",a.key),b.setItem("language",a),window.location.reload()),3===X.value&&(G.value=a,_.dispatch("user/configSettingNew",{handicapType:a.key})),T.value=!1}(a)},[v("p",null,[v("span",null,p(a.value),1),d(R).key===a.key?(r(),o("span",O,[c(n,{name:"success"})])):m("",!0)])],10,K)))),128))])])),_:1},8,["show","duration"])])}}});P.__scopeId="data-v-52ff78e4";export{P as default};
>>>>>>>> hotfix/token_invalid:dist/assets/edit.07b8c20d.js
