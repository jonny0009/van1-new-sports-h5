import{l as a,s as e,u as s,v as l,a as t}from"./index.c84abd34.js";import{s as u,d as n,b as r,e as o,U as c,j as i,r as v,o as p,R as d,q as k,O as y,P as g,W as f,u as m,F as b,S as w,_ as I,$ as h,Y as C,Z as $}from"./vue.16414fe4.js";const M=a=>(C("data-v-1a0b6b58"),a=a(),$(),a),_={class:"noticeDetail"},q={class:"content"},H={class:"top1"},L={class:"font2"},S={class:"top1"},j={class:"font2"},O={class:"font3"},x={class:"font2"},D=M((()=>g("img",{class:"arrow",src:t},null,-1))),E={class:"font3"},N={class:"font2"},U=M((()=>g("img",{class:"arrow",src:t},null,-1))),Y={class:"popup-title"},F={class:"pk-list"},K=["onClick"],P={key:0};var R=u({setup(t){const u=a.getItem("language"),C=n(u||{}),$=r((()=>{let a=[];const s=e.state.app.queryCMerLanguage.accessLanguage||[],l=e.state.app.queryCMerLanguage.translate||{};return s.map((a=>{a.value=l[a.key][a.key]})),a=[...s],a})),M=r((()=>e.state.user.userInfo)),R=r((()=>e.state.user.currency)),T=o({key:""}),W=n(!1),Z=n(""),z=n(0),A=o({arr:[]}),{t:B}=s(),G=n(B("user.edit")),J=c(),Q=a.getItem("plateMaskKey")||"",V=n({}),X=o({arr:[{value:B("user.hk"),key:"H"},{value:B("user.Europe"),key:"E"},{value:B("user.IDOdd"),key:"I"},{value:B("user.MYOdd"),key:"M"}]}),aa={value:B("user.hk"),key:"H"};i((()=>{e.dispatch("app/queryCMerLanguage");const a=X.arr.find((a=>{if(a.key===Q)return a}));V.value=a||aa,function(){if(!C.value?.value){const a=localStorage.getItem("locale")||l(),e=$.value.find((e=>e.key===a));C.value=e}}()}));function ea(a){z.value=a,A.arr=[],1===a&&(A.arr=$.value||[],T.key=C.value.key||l(),Z.value="lang"),3===a&&(A.arr=X.arr,T.key=V.value.key,Z.value="Handicap"),W.value=!0}return(s,l)=>{const t=v("van-icon"),u=v("van-nav-bar"),n=v("van-popup");return p(),d("div",_,[k(u,{class:"bg-title",title:G.value},{left:y((()=>[k(t,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=a=>{J.back()})})])),_:1},8,["title"]),g("div",q,[g("div",H,[g("span",null,f(s.$t("user.account")),1),g("span",L,f(m(M).nickName),1)]),g("div",S,[g("span",null,f(s.$t("user.currency")),1),g("span",j,f(m(R)),1)]),g("div",{class:"top1",onClick:l[1]||(l[1]=a=>ea(1))},[g("span",null,f(s.$t("user.lang")),1),g("div",O,[g("span",x,f(C.value?.value),1),D])]),g("div",{class:"top1",onClick:l[2]||(l[2]=a=>ea(3))},[g("span",null,f(s.$t("user.Handicap")),1),g("div",E,[g("span",N,f(V.value?.value),1),U])])]),k(n,{show:W.value,"onUpdate:show":l[3]||(l[3]=a=>W.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:y((()=>[g("div",Y,f(s.$t(`user.${Z.value}`)),1),g("div",F,[(p(!0),d(b,null,w(m(A).arr,((s,l)=>(p(),d("div",{key:l,class:I(["item",[m(T).key===s.key?"item-color":""]]),onClick:l=>async function(s){1===z.value&&(C.value=s,localStorage.setItem("locale",s.key),a.setItem("language",s),window.location.reload()),3===z.value&&(V.value=s,e.dispatch("user/configSettingNew",{handicapType:s.key})),W.value=!1}(s)},[g("p",null,[g("span",null,f(s.value),1),m(T).key===s.key?(p(),d("span",P,[k(t,{name:"success"})])):h("",!0)])],10,K)))),128))])])),_:1},8,["show","duration"])])}}});R.__scopeId="data-v-1a0b6b58";export{R as default};
