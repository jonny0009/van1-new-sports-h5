import{_ as a}from"./go@2x.edb15ae5.js";import{s as e,R as s,d as l,b as t,e as n,j as u,r,o,S as c,q as i,O as v,P as p,V as d,u as k,F as y,Z as g,_ as m,a0 as f,X as b,Y as h}from"./vue.7b2d67a6.js";import{l as w,u as C,s as I}from"./index.7918b9f9.js";const _=a=>(b("data-v-145b3eb4"),a=a(),h(),a),M={class:"noticeDetail"},$={class:"content"},j={class:"top1"},q={class:"font2"},H={class:"top1"},L={class:"font2"},x={class:"font3"},N={class:"font2"},O=_((()=>p("img",{class:"arrow",src:a},null,-1))),S={class:"font3"},D={class:"font2"},E=_((()=>p("img",{class:"arrow",src:a},null,-1))),Y={class:"popup-title"},z={class:"pk-list"},F=["onClick"],K={key:0};var P=e({setup(a){const e=s(),b=w.getItem("language"),h=l(b||{}),_=t((()=>I.state.user.userInfo)),P=t((()=>I.state.user.currency)),R=n({key:""}),T=l(!1),U=l(""),V=l(0),X=n({arr:[]}),{t:Z}=C(),A=l(Z("user.account")),B=w.getItem("plateMaskKey")||"",G=l({}),J=n({arr:[{value:Z("user.hk"),key:"H"},{value:Z("user.Europe"),key:"E"},{value:Z("user.IDOdd"),key:"I"},{value:Z("user.MYOdd"),key:"M"}]}),Q={value:Z("user.hk"),key:"H"};u((()=>{I.dispatch("app/queryCMerLanguage");const a=J.arr.find((a=>{if(a.key===B)return a}));G.value=a||Q}));const W=t((()=>{let a=[];const e=I.state.app.queryCMerLanguage.accessLanguage||[],s=I.state.app.queryCMerLanguage.translate||{};return e.map((a=>{a.value=s[a.key][a.key]})),a=[...e],a}));function aa(a){V.value=a,X.arr=[],1===a&&(X.arr=W.value||[],R.key=h.value.key||"zh-cn",U.value="lang"),3===a&&(X.arr=J.arr,R.key=G.value.key,U.value="Handicap"),T.value=!0}return(a,s)=>{var l,t;const n=r("van-icon"),u=r("van-nav-bar"),b=r("van-popup");return o(),c("div",M,[i(u,{class:"bg-title",title:A.value},{left:v((()=>[i(n,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{e.back()})})])),_:1},8,["title"]),p("div",$,[p("div",j,[p("span",null,d(a.$t("user.userName")),1),p("span",q,d(k(_).nickName),1)]),p("div",H,[p("span",null,d(a.$t("user.currency")),1),p("span",L,d(k(P)),1)]),p("div",{class:"top1",onClick:s[1]||(s[1]=a=>aa(1))},[p("span",null,d(a.$t("user.lang")),1),p("div",x,[p("span",N,d((null==(l=h.value)?void 0:l.value)||"简体中文"),1),O])]),p("div",{class:"top1",onClick:s[2]||(s[2]=a=>aa(3))},[p("span",null,d(a.$t("user.Handicap")),1),p("div",S,[p("span",D,d(null==(t=G.value)?void 0:t.value),1),E])])]),i(b,{show:T.value,"onUpdate:show":s[3]||(s[3]=a=>T.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:v((()=>[p("div",Y,d(a.$t(`user.${U.value}`)),1),p("div",z,[(o(!0),c(y,null,g(k(X).arr,((a,e)=>(o(),c("div",{key:e,class:m(["item",[k(R).key===a.key?"item-color":""]]),onClick:e=>async function(a){1===V.value&&(h.value=a,localStorage.setItem("locale",a.key),w.setItem("language",a),window.location.reload()),3===V.value&&(G.value=a,I.dispatch("user/configSettingNew",{handicapType:a.key})),T.value=!1}(a)},[p("p",null,[p("span",null,d(a.value),1),k(R).key===a.key?(o(),c("span",K,[i(n,{name:"success"})])):f("",!0)])],10,F)))),128))])])),_:1},8,["show","duration"])])}}});P.__scopeId="data-v-145b3eb4";export{P as default};
