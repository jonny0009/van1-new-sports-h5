import{_ as a}from"./return@2x.16bf9d85.js";import{_ as e}from"./go@2x.cdab0429.js";import{s,b as l,d as t,e as u,j as n,r,o as c,R as o,q as i,O as v,P as p,S as k,u as y,F as d,Z as g,V as f,Y as m,a2 as b,W as w,X as C}from"./vue.979f7bee.js";import{l as h,u as j,s as I}from"./index.71ee435e.js";const N=a=>(w("data-v-4783cc6a"),a=a(),C(),a),O={class:"noticeDetail"},S={class:"content"},_={class:"top1"},$={class:"font2"},M={class:"top1"},q={class:"font2"},x={class:"font3"},J={class:"font2"},L=N((()=>p("img",{class:"arrow",src:e},null,-1))),H={class:"font3"},E={class:"font2"},D=N((()=>p("img",{class:"arrow",src:e},null,-1))),F={class:"popup-title"},P={class:"pk-list"},R=["onClick"],T={key:0};var U=s({setup(e){const s=f(),w=l((()=>I.state.app.queryCMerLanguage.accessLanguage)),C=l((()=>I.state.app.queryCMerLanguage.translate)),N=h.getItem("language"),U=t(N||{}),V=l((()=>I.state.user.userInfo)),W=l((()=>I.state.user.currency)),X=u({key:""}),Y=t(!1),Z=t(""),z=t(0),A=u({arr:[]}),{t:B}=j(),G=t(B("user.account")),K=h.getItem("plateMaskObj"),Q=t(K||{}),aa=u({arr:[{value:B("user.Europe"),key:"E"},{value:B("user.hk"),key:"H"}]});n((()=>{I.dispatch("app/queryCMerLanguage");const a=aa.arr.find((a=>{if(a.key===Q.value.key)return a}));Q.value=a}));function ea(a){if(z.value=a,A.arr=[],1===a){const a=JSON.parse(JSON.stringify(C.value||""))[U.value.key];w.value.map((e=>{a[e.key]&&(e.value=a[e.key])})),A.arr=w.value,X.key=U.value.key,Z.value="area"}3===a&&(A.arr=aa.arr,X.key=Q.value.key,Z.value="Handicap"),Y.value=!0}return(e,l)=>{const t=r("van-nav-bar"),u=r("van-icon"),n=r("van-popup");return c(),o("div",O,[i(t,{class:"bg-title",title:G.value},{left:v((()=>[p("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{s.back()})})])),_:1},8,["title"]),p("div",S,[p("div",_,[p("span",null,k(e.$t("user.userName")),1),p("span",$,k(y(V).nickName),1)]),p("div",M,[p("span",null,k(e.$t("user.currency")),1),p("span",q,k(y(W)),1)]),p("div",{class:"top1",onClick:l[1]||(l[1]=a=>ea(1))},[p("span",null,k(e.$t("user.lang")),1),p("div",x,[p("span",J,k(U.value.value||"简体中文"),1),L])]),p("div",{class:"top1",onClick:l[2]||(l[2]=a=>ea(3))},[p("span",null,k(e.$t("user.Handicap")),1),p("div",H,[p("span",E,k(Q.value.value),1),D])])]),i(n,{show:Y.value,"onUpdate:show":l[3]||(l[3]=a=>Y.value=a),position:"bottom",closeable:"",round:""},{default:v((()=>[p("div",F,k(e.$t(`user.${Z.value}`)),1),p("div",P,[(c(!0),o(d,null,g(y(A).arr,((a,e)=>(c(),o("div",{key:e,class:m(["item",[y(X).key===a.key?"item-color":""]]),onClick:e=>async function(a){if(1===z.value){U.value=a;const e=JSON.parse(JSON.stringify(C.value||""))[U.value.key];U.value.value=e[U.value.key],localStorage.setItem("locale",a.key),h.setItem("language",U.value),window.location.reload()}3===z.value&&(h.setItem("plateMaskObj",a),Q.value=a,I.dispatch("user/configSettingNew",{handicapType:a.key})),Y.value=!1}(a)},[p("p",null,[p("span",null,k(a.value),1),y(X).key===a.key?(c(),o("span",T,[i(u,{name:"success"})])):b("",!0)])],10,R)))),128))])])),_:1},8,["show"])])}}});U.__scopeId="data-v-4783cc6a";export{U as default};
