import{l as a,s as e,u as s,Z as l,a as t}from"./index.64b8f0b3.js";import{s as u,U as n,d as r,b as o,e as c,j as i,r as v,o as p,R as d,q as k,O as y,P as g,W as f,u as m,F as b,S as w,_ as h,$ as C,Y as I,Z as $}from"./vue.d6a430ba.js";const M=a=>(I("data-v-7d01e8c7"),a=a(),$(),a),_={class:"noticeDetail"},q={class:"content"},H={class:"top1"},L={class:"font2"},j={class:"top1"},N={class:"font2"},O={class:"font3"},S={class:"font2"},x=M((()=>g("img",{class:"arrow",src:t},null,-1))),D={class:"font3"},E={class:"font2"},U=M((()=>g("img",{class:"arrow",src:t},null,-1))),Y={class:"popup-title"},Z={class:"pk-list"},F=["onClick"],K={key:0};var P=u({setup(t){const u=n(),I=a.getItem("language"),$=r(I||{}),M=o((()=>e.state.user.userInfo)),P=o((()=>e.state.user.currency)),R=c({key:""}),T=r(!1),W=r(""),z=r(0),A=c({arr:[]}),{t:B}=s(),G=r(B("user.account")),J=a.getItem("plateMaskKey")||"",Q=r({}),V=c({arr:[{value:B("user.hk"),key:"H"},{value:B("user.Europe"),key:"E"},{value:B("user.IDOdd"),key:"I"},{value:B("user.MYOdd"),key:"M"}]}),X={value:B("user.hk"),key:"H"};i((()=>{e.dispatch("app/queryCMerLanguage");const a=V.arr.find((a=>{if(a.key===J)return a}));Q.value=a||X}));const aa=o((()=>{let a=[];const s=e.state.app.queryCMerLanguage.accessLanguage||[],l=e.state.app.queryCMerLanguage.translate||{};return s.map((a=>{a.value=l[a.key][a.key]})),a=[...s],a}));function ea(a){z.value=a,A.arr=[],1===a&&(A.arr=aa.value||[],R.key=$.value.key||l(),W.value="lang"),3===a&&(A.arr=V.arr,R.key=Q.value.key,W.value="Handicap"),T.value=!0}return(s,l)=>{var t,n;const r=v("van-icon"),o=v("van-nav-bar"),c=v("van-popup");return p(),d("div",_,[k(o,{class:"bg-title",title:G.value},{left:y((()=>[k(r,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=a=>{u.back()})})])),_:1},8,["title"]),g("div",q,[g("div",H,[g("span",null,f(s.$t("user.userName")),1),g("span",L,f(m(M).nickName),1)]),g("div",j,[g("span",null,f(s.$t("user.currency")),1),g("span",N,f(m(P)),1)]),g("div",{class:"top1",onClick:l[1]||(l[1]=a=>ea(1))},[g("span",null,f(s.$t("user.lang")),1),g("div",O,[g("span",S,f((null==(t=$.value)?void 0:t.value)||"简体中文"),1),x])]),g("div",{class:"top1",onClick:l[2]||(l[2]=a=>ea(3))},[g("span",null,f(s.$t("user.Handicap")),1),g("div",D,[g("span",E,f(null==(n=Q.value)?void 0:n.value),1),U])])]),k(c,{show:T.value,"onUpdate:show":l[3]||(l[3]=a=>T.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:y((()=>[g("div",Y,f(s.$t(`user.${W.value}`)),1),g("div",Z,[(p(!0),d(b,null,w(m(A).arr,((s,l)=>(p(),d("div",{key:l,class:h(["item",[m(R).key===s.key?"item-color":""]]),onClick:l=>async function(s){1===z.value&&($.value=s,localStorage.setItem("locale",s.key),a.setItem("language",s),window.location.reload()),3===z.value&&(Q.value=s,e.dispatch("user/configSettingNew",{handicapType:s.key})),T.value=!1}(s)},[g("p",null,[g("span",null,f(s.value),1),m(R).key===s.key?(p(),d("span",K,[k(r,{name:"success"})])):C("",!0)])],10,F)))),128))])])),_:1},8,["show","duration"])])}}});P.__scopeId="data-v-7d01e8c7";export{P as default};
