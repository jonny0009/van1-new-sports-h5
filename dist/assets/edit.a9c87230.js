import{l as a,s as e,u as s,v as l,I as t,a as n}from"./index.0b10a25b.js";import{s as u,d as r,b as c,e as o,U as i,j as v,r as p,o as d,R as k,q as g,O as y,P as f,W as m,u as h,F as I,S as w,_ as $,$ as b,Y as C,Z as j}from"./vue.16414fe4.js";const q=a=>(C("data-v-0f2da638"),a=a(),j(),a),M={class:"noticeDetail"},_={class:"content"},z={class:"top1"},H={class:"font2"},L={class:"top1"},S={class:"font2"},E={class:"font3 cursor"},O={class:"font2 img-span"},x=["src"],D=q((()=>f("img",{class:"arrow",src:n},null,-1))),F={class:"font3"},N={class:"font2"},U=q((()=>f("img",{class:"arrow",src:n},null,-1))),Y={class:"popup-title"},K={class:"pk-list"},P=["onClick"],R=["src"],T={key:0};var W=u({setup(n){const u=a.getItem("language"),C=r(u||{}),j=c((()=>{let a=[];const s=e.state.app.queryCMerLanguage.accessLanguage||[],l=e.state.app.queryCMerLanguage.translate||{};return s.map((a=>{a.value=l[a.key][a.key]})),a=[...s],a})),q=c((()=>e.state.user.userInfo)),W=c((()=>e.state.user.currency)),Z=o({key:""}),A=r(!1),B=r(""),G=r(0),J=o({arr:[]}),{t:Q}=s(),V=r(Q("user.edit")),X=i(),aa=a.getItem("plateMaskKey")||"",ea=r({}),sa=o({arr:[{value:Q("user.hk"),key:"H"},{value:Q("user.Europe"),key:"E"},{value:Q("user.IDOdd"),key:"I"},{value:Q("user.MYOdd"),key:"M"}]}),la={value:Q("user.hk"),key:"H"};v((()=>{e.dispatch("app/queryCMerLanguage");const a=sa.arr.find((a=>{if(a.key===aa)return a}));ea.value=a||la,function(){if(!C.value?.value){const a=localStorage.getItem("locale")||l(),e=j.value.find((e=>e.key===a));C.value=e}}()}));function ta(a){G.value=a,J.arr=[],1===a&&(J.arr=j.value||[],Z.key=C.value.key||l(),B.value="lang"),3===a&&(J.arr=sa.arr,Z.key=ea.value.key,B.value="Handicap"),A.value=!0}const na=a=>`${t}${`/FE/common/langIcon/${{"zh-cn":"cn","en-us":"en","vi-vn":"vn","ko-kr":"kr","pt-pt":"pt","th-th":"th","ja-jp":"jp","es-es":"es","id-id":"id","zh-tw":"hk","zh-sg":"sg","hi-in":"in","tr-tr":"tr"}[a]}.png`}`;return(s,l)=>{const t=p("van-icon"),n=p("van-nav-bar"),u=p("van-popup");return d(),k("div",M,[g(n,{class:"bg-title",title:V.value},{left:y((()=>[g(t,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=a=>{X.back()})})])),_:1},8,["title"]),f("div",_,[f("div",z,[f("span",null,m(s.$t("user.account")),1),f("span",H,m(h(q).nickName),1)]),f("div",L,[f("span",null,m(s.$t("user.currency")),1),f("span",S,m(h(W)),1)]),f("div",{class:"top1",onClick:l[1]||(l[1]=a=>ta(1))},[f("span",null,m(s.$t("user.lang")),1),f("div",E,[f("div",O,[f("img",{src:na(C.value.key),alt:"",class:"qizi"},null,8,x),f("span",null,m(C.value?.value),1)]),D])]),f("div",{class:"top1",onClick:l[2]||(l[2]=a=>ta(3))},[f("span",null,m(s.$t("user.Handicap")),1),f("div",F,[f("span",N,m(ea.value?.value),1),U])])]),g(u,{show:A.value,"onUpdate:show":l[3]||(l[3]=a=>A.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:y((()=>[f("div",Y,m(s.$t(`user.${B.value}`)),1),f("div",K,[(d(!0),k(I,null,w(h(J).arr,((s,l)=>(d(),k("div",{key:l,class:$(["item",[h(Z).key===s.key?"item-color":""]]),onClick:l=>async function(s){1===G.value&&(C.value=s,localStorage.setItem("locale",s.key),a.setItem("language",s),window.location.reload()),3===G.value&&(ea.value=s,e.dispatch("user/configSettingNew",{handicapType:s.key})),A.value=!1}(s)},[f("p",null,[f("img",{class:"qizi",src:na(s.key),alt:""},null,8,R),f("span",null,m(s.value),1)]),h(Z).key===s.key?(d(),k("span",T,[g(t,{name:"success"})])):b("",!0)],10,P)))),128))])])),_:1},8,["show","duration"])])}}});W.__scopeId="data-v-0f2da638";export{W as default};
