import{_ as e,a}from"./pitch.63ad02a2.js";import{u as s,J as l,b as t,s as c,g as n,K as u}from"./index.ec7f69b4.js";import{s as r,b as i,R as o,d,j as v,r as m,o as p,S as f,q as g,O as k,P as h,V as x,_ as b}from"./vue.6c3ce548.js";const y={class:"editName"},$={class:"content"},N={class:"edit-name"},P={class:"userName"},I={class:"explain"},_={key:0,class:"noPitch",src:e},j={key:1,class:"noPitch",src:a},O={class:"explain"},V={key:0,class:"noPitch",src:e},z={key:1,class:"noPitch",src:a},A={class:"explain"},S={key:0,class:"noPitch",src:e},Z={key:1,class:"noPitch",src:a};var q=r({setup(e){const a=i((()=>c.state.user.userInfo)),r=o(),q=d(""),w=d(!1),C=d(!1),E=d(!1),{t:J}=s(),K=d(J("user.EditNickname")),R=e=>{if(!e)return w.value=!1,C.value=!1,void(E.value=!1);-1!==e.indexOf(" ")?w.value=!1:w.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(e)?E.value=!0:E.value=!1,e.indexOf("admin")>0||e.indexOf("test")>0)C.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(e)?C.value=!0:C.value=!1}};v((()=>{U()}));const U=async()=>{const e={fPlayerId:a.value.playerId},s=await l(e);if(200!==s.code)return t(s.msg);q.value=s.data.nickName,R(s.data.nickName)};return(e,a)=>{const s=m("van-nav-bar"),l=m("van-field");return p(),f("div",y,[g(s,{class:"bg-title",title:K.value,border:!1},{left:k((()=>[h("span",{onClick:a[0]||(a[0]=e=>{r.back()})},x(e.$t("user.cancellation")),1)])),right:k((()=>[h("span",{onClick:a[1]||(a[1]=e=>(async()=>{if(!E.value||!C.value||!w.value)return t(J("user.text11"));const e={nickName:q.value,lang:localStorage.getItem("locale")||n()},a=await u(e);if(200!==a.code)return t(a.msg);t(J("user.EditSuccessfully")),c.dispatch("user/userInfo"),r.push("/user/userInfo")})())},x(e.$t("user.save")),1)])),_:1},8,["title"]),h("div",$,[g(l,{modelValue:q.value,"onUpdate:modelValue":[a[2]||(a[2]=e=>q.value=e),R],class:b([q.value?"bb":""]),name:"",label:"",placeholder:e.$t("user.nickname"),maxlength:"16",clearable:"",rules:[{required:!0,message:e.$t("user.nickname")}]},null,8,["modelValue","class","placeholder","rules"]),h("p",N,x(e.$t("user.fontNickName")),1),h("p",P,x(e.$t("user.text3"))+":",1),h("p",I,[E.value?(p(),f("img",j)):(p(),f("img",_)),h("span",null,x(e.$t("user.font5")),1)]),h("p",O,[C.value?(p(),f("img",z)):(p(),f("img",V)),h("span",null,x(e.$t("user.font6")),1)]),h("p",A,[w.value?(p(),f("img",Z)):(p(),f("img",S)),h("span",null,x(e.$t("user.text6")),1)])])])}}});q.__scopeId="data-v-24c90368";export{q as default};
