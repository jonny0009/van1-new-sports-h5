import{_ as a}from"./go@2x.edb15ae5.js";import{l as e,u as s,s as l,g as t}from"./index.0d74a76e.js";import{s as u,R as n,d as r,b as o,e as c,j as i,r as v,o as p,S as d,q as k,O as y,P as g,V as m,u as f,F as w,Z as b,_ as h,a0 as C,X as I,Y as _}from"./vue.845920bc.js";const M=a=>(I("data-v-65253d82"),a=a(),_(),a),$={class:"noticeDetail"},j={class:"content"},q={class:"top1"},H={class:"font2"},L={class:"top1"},x={class:"font2"},N={class:"font3"},O={class:"font2"},S=M((()=>g("img",{class:"arrow",src:a},null,-1))),D={class:"font3"},E={class:"font2"},Y=M((()=>g("img",{class:"arrow",src:a},null,-1))),F={class:"popup-title"},K={class:"pk-list"},P=["onClick"],R={key:0};var T=u({setup(a){const u=n(),I=e.getItem("language"),_=r(I||{}),M=o((()=>l.state.user.userInfo)),T=o((()=>l.state.user.currency)),U=c({key:""}),V=r(!1),X=r(""),Z=r(0),z=c({arr:[]}),{t:A}=s(),B=r(A("user.account")),G=e.getItem("plateMaskKey")||"",J=r({}),Q=c({arr:[{value:A("user.hk"),key:"H"},{value:A("user.Europe"),key:"E"},{value:A("user.IDOdd"),key:"I"},{value:A("user.MYOdd"),key:"M"}]}),W={value:A("user.hk"),key:"H"};i((()=>{l.dispatch("app/queryCMerLanguage");const a=Q.arr.find((a=>{if(a.key===G)return a}));J.value=a||W}));const aa=o((()=>{let a=[];const e=l.state.app.queryCMerLanguage.accessLanguage||[],s=l.state.app.queryCMerLanguage.translate||{};return e.map((a=>{a.value=s[a.key][a.key]})),a=[...e],a}));function ea(a){Z.value=a,z.arr=[],1===a&&(z.arr=aa.value||[],U.key=_.value.key||t(),X.value="lang"),3===a&&(z.arr=Q.arr,U.key=J.value.key,X.value="Handicap"),V.value=!0}return(a,s)=>{var t,n;const r=v("van-icon"),o=v("van-nav-bar"),c=v("van-popup");return p(),d("div",$,[k(o,{class:"bg-title",title:B.value},{left:y((()=>[k(r,{name:"arrow-left",class:"img_1",onClick:s[0]||(s[0]=a=>{u.back()})})])),_:1},8,["title"]),g("div",j,[g("div",q,[g("span",null,m(a.$t("user.userName")),1),g("span",H,m(f(M).nickName),1)]),g("div",L,[g("span",null,m(a.$t("user.currency")),1),g("span",x,m(f(T)),1)]),g("div",{class:"top1",onClick:s[1]||(s[1]=a=>ea(1))},[g("span",null,m(a.$t("user.lang")),1),g("div",N,[g("span",O,m((null==(t=_.value)?void 0:t.value)||"简体中文"),1),S])]),g("div",{class:"top1",onClick:s[2]||(s[2]=a=>ea(3))},[g("span",null,m(a.$t("user.Handicap")),1),g("div",D,[g("span",E,m(null==(n=J.value)?void 0:n.value),1),Y])])]),k(c,{show:V.value,"onUpdate:show":s[3]||(s[3]=a=>V.value=a),position:"bottom",duration:.2,closeable:"",round:""},{default:y((()=>[g("div",F,m(a.$t(`user.${X.value}`)),1),g("div",K,[(p(!0),d(w,null,b(f(z).arr,((a,s)=>(p(),d("div",{key:s,class:h(["item",[f(U).key===a.key?"item-color":""]]),onClick:s=>async function(a){1===Z.value&&(_.value=a,localStorage.setItem("locale",a.key),e.setItem("language",a),window.location.reload()),3===Z.value&&(J.value=a,l.dispatch("user/configSettingNew",{handicapType:a.key})),V.value=!1}(a)},[g("p",null,[g("span",null,m(a.value),1),f(U).key===a.key?(p(),d("span",R,[k(r,{name:"success"})])):C("",!0)])],10,P)))),128))])])),_:1},8,["show","duration"])])}}});T.__scopeId="data-v-65253d82";export{T as default};
