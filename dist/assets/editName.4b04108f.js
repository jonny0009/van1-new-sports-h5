import{_ as e,a}from"./pitch.3b7e1a5f.js";import{u as s,O as l,d as t,s as n,Q as u}from"./index.def529ec.js";import{s as c,b as r,d as i,j as o,r as d,o as v,R as m,q as f,O as p,P as g,S as k,Y as h,V as x}from"./vue.e791136f.js";const b={class:"editName"},y={class:"content"},$={class:"edit-name"},P={class:"userName"},I={class:"explain"},N={key:0,class:"noPitch",src:e},O={key:1,class:"noPitch",src:a},j={class:"explain"},V={key:0,class:"noPitch",src:e},_={key:1,class:"noPitch",src:a},z={class:"explain"},A={key:0,class:"noPitch",src:e},S={key:1,class:"noPitch",src:a};var Z=c({setup(e){const a=r((()=>n.state.user.userInfo)),c=x(),Z=i(""),q=i(!1),w=i(!1),C=i(!1),{t:E}=s(),Q=i(E("user.EditNickname")),R=e=>{if(!e)return q.value=!1,w.value=!1,void(C.value=!1);-1!==e.indexOf(" ")?q.value=!1:q.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(e)?C.value=!0:C.value=!1,e.indexOf("admin")>0||e.indexOf("test")>0)w.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(e)?w.value=!0:w.value=!1}};o((()=>{U()}));const U=async()=>{const e={fPlayerId:a.value.playerId},s=await l(e);if(200!==s.code)return t(s.msg);Z.value=s.data.nickName,R(s.data.nickName)};return(e,a)=>{const s=d("van-nav-bar"),l=d("van-field");return v(),m("div",b,[f(s,{class:"bg-title",title:Q.value,border:!1},{left:p((()=>[g("span",{onClick:a[0]||(a[0]=e=>{c.back()})},k(e.$t("user.cancellation")),1)])),right:p((()=>[g("span",{onClick:a[1]||(a[1]=e=>(async()=>{if(!C.value||!C.value||!C.value)return t(E("user.text11"));const e={nickName:Z.value,lang:localStorage.getItem("locale")},a=await u(e);if(200!==a.code)return t(a.msg);t(E("user.EditSuccessfully")),n.dispatch("user/userInfo"),c.push("/user/userInfo")})())},k(e.$t("user.save")),1)])),_:1},8,["title"]),g("div",y,[f(l,{modelValue:Z.value,"onUpdate:modelValue":[a[2]||(a[2]=e=>Z.value=e),R],class:h([Z.value?"bb":""]),name:"",label:"",placeholder:e.$t("user.nickname"),maxlength:"16",clearable:"",rules:[{required:!0,message:e.$t("user.nickname")}]},null,8,["modelValue","class","placeholder","rules"]),g("p",$,k(e.$t("user.font7")),1),g("p",P,k(e.$t("user.text3"))+":",1),g("p",I,[C.value?(v(),m("img",O)):(v(),m("img",N)),g("span",null,k(e.$t("user.font5")),1)]),g("p",j,[w.value?(v(),m("img",_)):(v(),m("img",V)),g("span",null,k(e.$t("user.font6")),1)]),g("p",z,[q.value?(v(),m("img",S)):(v(),m("img",A)),g("span",null,k(e.$t("user.text6")),1)])])])}}});Z.__scopeId="data-v-1fabdd7a";export{Z as default};
