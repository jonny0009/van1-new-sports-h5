<<<<<<< HEAD:dist/assets/edit.3ae13316.js
import{l as a,u as e,s,p as l,a as t}from"./index.60460b8c.js";import{s as u,R as n,d as r,b as c,e as o,j as i,r as v,o as p,S as d,q as k,O as y,P as g,V as f,u as m,F as w,_ as h,Z as C,$ as I,X as b,Y as $}from"./vue.7833d4f2.js";const M=a=>(b("data-v-7d01e8c7"),a=a(),$(),a),_={class:"noticeDetail"},q={class:"content"},H={class:"top1"},L={class:"font2"},j={class:"top1"},N={class:"font2"},O={class:"font3"},S={class:"font2"},x=M((()=>g("img",{class:"arrow",src:t},null,-1))),D={class:"font3"},E={class:"font2"},Y=M((()=>g("img",{class:"arrow",src:t},null,-1))),F={class:"popup-title"},K={class:"pk-list"},P=["onClick"],R={key:0};var T=u({setup(t){const u=n(),b=a.getItem("language"),$=r(b||{}),M=c((()=>s.state.user.userInfo)),T=c((()=>s.state.user.currency)),U=o({key:""}),V=r(!1),X=r(""),Z=r(0),z=o({arr:[]}),{t:A}=e(),B=r(A("user.account")),G=a.getItem("plateMaskKey")||"",J=r({}),Q=o({arr:[{value:A("user.hk"),key:"H"},{value:A("user.Europe"),key:"E"},{value:A("user.IDOdd"),key:"I"},{value:A("user.MYOdd"),key:"M"}]}),W={value:A("user.hk"),key:"H"};i((()=>{s.dispatch("app/queryCMerLanguage");const a=Q.arr.find((a=>{if(a.key===G)return a}));J.value=a||W}));const aa=c((()=>{let a=[];const e=s.state.app.queryCMerLanguage.accessLanguage||[],l=s.state.app.queryCMerLanguage.translate||{};return e.map((a=>{a.value=l[a.key][a.key]})),a=[...e],a}));function ea(a){Z.value=a,z.arr=[],1===a&&(z.arr=aa.value||[],U.key=$.value.key||l(),X.value="lang"),3===a&&(z.arr=Q.arr,U.key=J.value.key,X.value="Handicap"),V.value=!0}return(e,l)=>{var t,n;const r=v("van-icon"),c=v("van-nav-bar"),o=v("van-popup");return p(),d("div",_,[k(c,{class:"bg-title",title:B.value},{left:y((()=>[k(r,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=a=>{u.back()})})])),_:1},8,["title"]),g("div",q,[g("div",H,[g("span",null,f(e.$t("user.userName")),1),g("span",L,f(m(M).nickName),1)]),g("div",j,[g("span",null,f(e.$t("user.currency")),1),g("span",N,f(m(T)),1)]),g("div",{class:"top1",onClick:l[1]||(l[1]=a=>ea(1))},[g("span",null,f(e.$t("user.lang")),1),g("div",O,[g("span",S,f((null==(t=$.value)?void 0:t.value)||"简体中文"),1),x])]),g("div",{class:"top1",onClick:l[2]||(l[2]=a=>ea(3))},[g("span",null,f(e.$t("user.Handicap")),1),g("div",D,[g("span",E,f(null==(n=J.value)?void 0:n.value),1),Y])])]),k(o,{show:V.value,"onUpdate:show":l[3]||(l[3]=a=>V.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:y((()=>[g("div",F,f(e.$t(`user.${X.value}`)),1),g("div",K,[(p(!0),d(w,null,h(m(z).arr,((e,l)=>(p(),d("div",{key:l,class:C(["item",[m(U).key===e.key?"item-color":""]]),onClick:l=>async function(e){1===Z.value&&($.value=e,localStorage.setItem("locale",e.key),a.setItem("language",e),window.location.reload()),3===Z.value&&(J.value=e,s.dispatch("user/configSettingNew",{handicapType:e.key})),V.value=!1}(e)},[g("p",null,[g("span",null,f(e.value),1),m(U).key===e.key?(p(),d("span",R,[k(r,{name:"success"})])):I("",!0)])],10,P)))),128))])])),_:1},8,["show","duration"])])}}});T.__scopeId="data-v-7d01e8c7";export{T as default};
=======
import{l as a,u as e,s,p as l,a as t}from"./index.5155f941.js";import{s as u,R as n,d as r,b as o,e as c,j as i,r as v,o as p,S as d,q as k,O as y,P as g,V as f,u as m,F as w,_ as h,Z as C,$ as I,X as $,Y as b}from"./vue.7833d4f2.js";const M=a=>($("data-v-7d01e8c7"),a=a(),b(),a),_={class:"noticeDetail"},q={class:"content"},H={class:"top1"},L={class:"font2"},j={class:"top1"},N={class:"font2"},O={class:"font3"},S={class:"font2"},x=M((()=>g("img",{class:"arrow",src:t},null,-1))),D={class:"font3"},E={class:"font2"},Y=M((()=>g("img",{class:"arrow",src:t},null,-1))),F={class:"popup-title"},K={class:"pk-list"},P=["onClick"],R={key:0};var T=u({setup(t){const u=n(),$=a.getItem("language"),b=r($||{}),M=o((()=>s.state.user.userInfo)),T=o((()=>s.state.user.currency)),U=c({key:""}),V=r(!1),X=r(""),Z=r(0),z=c({arr:[]}),{t:A}=e(),B=r(A("user.account")),G=a.getItem("plateMaskKey")||"",J=r({}),Q=c({arr:[{value:A("user.hk"),key:"H"},{value:A("user.Europe"),key:"E"},{value:A("user.IDOdd"),key:"I"},{value:A("user.MYOdd"),key:"M"}]}),W={value:A("user.hk"),key:"H"};i((()=>{s.dispatch("app/queryCMerLanguage");const a=Q.arr.find((a=>{if(a.key===G)return a}));J.value=a||W}));const aa=o((()=>{let a=[];const e=s.state.app.queryCMerLanguage.accessLanguage||[],l=s.state.app.queryCMerLanguage.translate||{};return e.map((a=>{a.value=l[a.key][a.key]})),a=[...e],a}));function ea(a){Z.value=a,z.arr=[],1===a&&(z.arr=aa.value||[],U.key=b.value.key||l(),X.value="lang"),3===a&&(z.arr=Q.arr,U.key=J.value.key,X.value="Handicap"),V.value=!0}return(e,l)=>{var t,n;const r=v("van-icon"),o=v("van-nav-bar"),c=v("van-popup");return p(),d("div",_,[k(o,{class:"bg-title",title:B.value},{left:y((()=>[k(r,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=a=>{u.back()})})])),_:1},8,["title"]),g("div",q,[g("div",H,[g("span",null,f(e.$t("user.userName")),1),g("span",L,f(m(M).nickName),1)]),g("div",j,[g("span",null,f(e.$t("user.currency")),1),g("span",N,f(m(T)),1)]),g("div",{class:"top1",onClick:l[1]||(l[1]=a=>ea(1))},[g("span",null,f(e.$t("user.lang")),1),g("div",O,[g("span",S,f((null==(t=b.value)?void 0:t.value)||"简体中文"),1),x])]),g("div",{class:"top1",onClick:l[2]||(l[2]=a=>ea(3))},[g("span",null,f(e.$t("user.Handicap")),1),g("div",D,[g("span",E,f(null==(n=J.value)?void 0:n.value),1),Y])])]),k(c,{show:V.value,"onUpdate:show":l[3]||(l[3]=a=>V.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:y((()=>[g("div",F,f(e.$t(`user.${X.value}`)),1),g("div",K,[(p(!0),d(w,null,h(m(z).arr,((e,l)=>(p(),d("div",{key:l,class:C(["item",[m(U).key===e.key?"item-color":""]]),onClick:l=>async function(e){1===Z.value&&(b.value=e,localStorage.setItem("locale",e.key),a.setItem("language",e),window.location.reload()),3===Z.value&&(J.value=e,s.dispatch("user/configSettingNew",{handicapType:e.key})),V.value=!1}(e)},[g("p",null,[g("span",null,f(e.value),1),m(U).key===e.key?(p(),d("span",R,[k(r,{name:"success"})])):I("",!0)])],10,P)))),128))])])),_:1},8,["show","duration"])])}}});T.__scopeId="data-v-7d01e8c7";export{T as default};
>>>>>>> dev:dist/assets/edit.1838380c.js
