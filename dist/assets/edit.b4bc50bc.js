import{l as a,s as e,u as s,q as l,a as u}from"./index.39ed330e.js";import{s as t,d as n,b as r,e as o,U as c,j as i,r as v,o as p,R as d,q as k,O as y,P as g,W as f,u as m,F as w,S as I,_ as h,$ as C,Y as $,Z as b}from"./vue.5fe62a63.js";const M=a=>($("data-v-0e4515a9"),a=a(),b(),a),_={class:"noticeDetail"},q={class:"content"},H={class:"top1"},L={class:"font2"},S={class:"top1"},j={class:"font2"},N={class:"font3"},O={class:"font2"},x=M((()=>g("img",{class:"arrow",src:u},null,-1))),D={class:"font3"},E={class:"font2"},U=M((()=>g("img",{class:"arrow",src:u},null,-1))),Y={class:"popup-title"},F={class:"pk-list"},K=["onClick"],P={key:0};var R=t({setup(u){const t=a.getItem("language"),$=n(t||{}),b=r((()=>{let a=[];const s=e.state.app.queryCMerLanguage.accessLanguage||[],l=e.state.app.queryCMerLanguage.translate||{};return s.map((a=>{a.value=l[a.key][a.key]})),a=[...s],a})),M=r((()=>e.state.user.userInfo)),R=r((()=>e.state.user.currency)),T=o({key:""}),W=n(!1),Z=n(""),z=n(0),A=o({arr:[]}),{t:B}=s(),G=n(B("user.account")),J=c(),Q=a.getItem("plateMaskKey")||"",V=n({}),X=o({arr:[{value:B("user.hk"),key:"H"},{value:B("user.Europe"),key:"E"},{value:B("user.IDOdd"),key:"I"},{value:B("user.MYOdd"),key:"M"}]}),aa={value:B("user.hk"),key:"H"};i((()=>{e.dispatch("app/queryCMerLanguage");const a=X.arr.find((a=>{if(a.key===Q)return a}));V.value=a||aa,function(){var a;if(!(null==(a=$.value)?void 0:a.value)){const a=localStorage.getItem("locale")||l(),e=b.value.find((e=>e.key===a));$.value=e}}()}));function ea(a){z.value=a,A.arr=[],1===a&&(A.arr=b.value||[],T.key=$.value.key||l(),Z.value="lang"),3===a&&(A.arr=X.arr,T.key=V.value.key,Z.value="Handicap"),W.value=!0}return(s,l)=>{var u,t;const n=v("van-icon"),r=v("van-nav-bar"),o=v("van-popup");return p(),d("div",_,[k(r,{class:"bg-title",title:G.value},{left:y((()=>[k(n,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=a=>{J.back()})})])),_:1},8,["title"]),g("div",q,[g("div",H,[g("span",null,f(s.$t("user.userName")),1),g("span",L,f(m(M).nickName),1)]),g("div",S,[g("span",null,f(s.$t("user.currency")),1),g("span",j,f(m(R)),1)]),g("div",{class:"top1",onClick:l[1]||(l[1]=a=>ea(1))},[g("span",null,f(s.$t("user.lang")),1),g("div",N,[g("span",O,f(null==(u=$.value)?void 0:u.value),1),x])]),g("div",{class:"top1",onClick:l[2]||(l[2]=a=>ea(3))},[g("span",null,f(s.$t("user.Handicap")),1),g("div",D,[g("span",E,f(null==(t=V.value)?void 0:t.value),1),U])])]),k(o,{show:W.value,"onUpdate:show":l[3]||(l[3]=a=>W.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:y((()=>[g("div",Y,f(s.$t(`user.${Z.value}`)),1),g("div",F,[(p(!0),d(w,null,I(m(A).arr,((s,l)=>(p(),d("div",{key:l,class:h(["item",[m(T).key===s.key?"item-color":""]]),onClick:l=>async function(s){1===z.value&&($.value=s,localStorage.setItem("locale",s.key),a.setItem("language",s),window.location.reload()),3===z.value&&(V.value=s,e.dispatch("user/configSettingNew",{handicapType:s.key})),W.value=!1}(s)},[g("p",null,[g("span",null,f(s.value),1),m(T).key===s.key?(p(),d("span",P,[k(n,{name:"success"})])):C("",!0)])],10,K)))),128))])])),_:1},8,["show","duration"])])}}});R.__scopeId="data-v-0e4515a9";export{R as default};
