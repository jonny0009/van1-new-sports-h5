import{l as a,s as e,u as s,Z as l,a as t}from"./index.4a6864d5.js";import{s as u,V as n,d as r,b as c,e as o,j as i,r as v,o as p,S as d,q as k,O as y,P as g,X as f,u as m,F as w,U as h,$ as C,a0 as I,Z as $,_ as b}from"./vue.4a9f22c3.js";const M=a=>($("data-v-7d01e8c7"),a=a(),b(),a),_={class:"noticeDetail"},q={class:"content"},H={class:"top1"},L={class:"font2"},j={class:"top1"},N={class:"font2"},O={class:"font3"},S={class:"font2"},x=M((()=>g("img",{class:"arrow",src:t},null,-1))),D={class:"font3"},E={class:"font2"},U=M((()=>g("img",{class:"arrow",src:t},null,-1))),Z={class:"popup-title"},F={class:"pk-list"},K=["onClick"],P={key:0};var T=u({setup(t){const u=n(),$=a.getItem("language"),b=r($||{}),M=c((()=>e.state.user.userInfo)),T=c((()=>e.state.user.currency)),V=o({key:""}),X=r(!1),Y=r(""),z=r(0),A=o({arr:[]}),{t:B}=s(),G=r(B("user.account")),J=a.getItem("plateMaskKey")||"",Q=r({}),R=o({arr:[{value:B("user.hk"),key:"H"},{value:B("user.Europe"),key:"E"},{value:B("user.IDOdd"),key:"I"},{value:B("user.MYOdd"),key:"M"}]}),W={value:B("user.hk"),key:"H"};i((()=>{e.dispatch("app/queryCMerLanguage");const a=R.arr.find((a=>{if(a.key===J)return a}));Q.value=a||W}));const aa=c((()=>{let a=[];const s=e.state.app.queryCMerLanguage.accessLanguage||[],l=e.state.app.queryCMerLanguage.translate||{};return s.map((a=>{a.value=l[a.key][a.key]})),a=[...s],a}));function ea(a){z.value=a,A.arr=[],1===a&&(A.arr=aa.value||[],V.key=b.value.key||l(),Y.value="lang"),3===a&&(A.arr=R.arr,V.key=Q.value.key,Y.value="Handicap"),X.value=!0}return(s,l)=>{var t,n;const r=v("van-icon"),c=v("van-nav-bar"),o=v("van-popup");return p(),d("div",_,[k(c,{class:"bg-title",title:G.value},{left:y((()=>[k(r,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=a=>{u.back()})})])),_:1},8,["title"]),g("div",q,[g("div",H,[g("span",null,f(s.$t("user.userName")),1),g("span",L,f(m(M).nickName),1)]),g("div",j,[g("span",null,f(s.$t("user.currency")),1),g("span",N,f(m(T)),1)]),g("div",{class:"top1",onClick:l[1]||(l[1]=a=>ea(1))},[g("span",null,f(s.$t("user.lang")),1),g("div",O,[g("span",S,f((null==(t=b.value)?void 0:t.value)||"简体中文"),1),x])]),g("div",{class:"top1",onClick:l[2]||(l[2]=a=>ea(3))},[g("span",null,f(s.$t("user.Handicap")),1),g("div",D,[g("span",E,f(null==(n=Q.value)?void 0:n.value),1),U])])]),k(o,{show:X.value,"onUpdate:show":l[3]||(l[3]=a=>X.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:y((()=>[g("div",Z,f(s.$t(`user.${Y.value}`)),1),g("div",F,[(p(!0),d(w,null,h(m(A).arr,((s,l)=>(p(),d("div",{key:l,class:C(["item",[m(V).key===s.key?"item-color":""]]),onClick:l=>async function(s){1===z.value&&(b.value=s,localStorage.setItem("locale",s.key),a.setItem("language",s),window.location.reload()),3===z.value&&(Q.value=s,e.dispatch("user/configSettingNew",{handicapType:s.key})),X.value=!1}(s)},[g("p",null,[g("span",null,f(s.value),1),m(V).key===s.key?(p(),d("span",P,[k(r,{name:"success"})])):I("",!0)])],10,K)))),128))])])),_:1},8,["show","duration"])])}}});T.__scopeId="data-v-7d01e8c7";export{T as default};
