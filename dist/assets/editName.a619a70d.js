import{_ as a,a as e}from"./pitch.63ad02a2.js";import{u as s,Q as l,d as t,s as n,j as u,R as c}from"./index.c8c237af.js";import{s as r,b as i,R as o,d,j as v,r as m,o as p,S as f,q as k,O as g,P as h,V as x,Z as y}from"./vue.7833d4f2.js";const $={class:"editName"},b={class:"content"},N={class:"edit-name"},P={class:"userName"},I={class:"explain"},j={key:0,class:"noPitch",src:a},O={key:1,class:"noPitch",src:e},V={class:"explain"},Z={key:0,class:"noPitch",src:a},_={key:1,class:"noPitch",src:e},z={class:"explain"},A={key:0,class:"noPitch",src:a},S={key:1,class:"noPitch",src:e};var q=r({setup(a){const e=i((()=>n.state.user.userInfo)),r=o(),q=d(""),w=d(!1),C=d(!1),E=d(!1),{t:R}=s(),Q=d(R("user.EditNickname")),U=a=>{if(!a)return w.value=!1,C.value=!1,void(E.value=!1);-1!==a.indexOf(" ")?w.value=!1:w.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(a)?E.value=!0:E.value=!1,a.indexOf("admin")>0||a.indexOf("test")>0)C.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(a)?C.value=!0:C.value=!1}};v((()=>{B()}));const B=async()=>{const a={fPlayerId:e.value.playerId},s=await l(a);if(200!==s.code)return t(s.msg);q.value=s.data.nickName,U(s.data.nickName)};return(a,e)=>{const s=m("van-nav-bar"),l=m("van-field");return p(),f("div",$,[k(s,{class:"bg-title",title:Q.value,border:!1},{left:g((()=>[h("span",{onClick:e[0]||(e[0]=a=>{r.back()})},x(a.$t("user.cancellation")),1)])),right:g((()=>[h("span",{onClick:e[1]||(e[1]=a=>(async()=>{if(!E.value||!C.value||!w.value)return t(R("user.text11"));const a={nickName:q.value,lang:localStorage.getItem("locale")||u()},e=await c(a);if(200!==e.code)return t(e.msg);t(R("user.EditSuccessfully")),n.dispatch("user/userInfo"),r.push("/user/userInfo")})())},x(a.$t("user.save")),1)])),_:1},8,["title"]),h("div",b,[k(l,{modelValue:q.value,"onUpdate:modelValue":[e[2]||(e[2]=a=>q.value=a),U],class:y([q.value?"bb":""]),name:"",label:"",placeholder:a.$t("user.nickname"),maxlength:"16",clearable:"",rules:[{required:!0,message:a.$t("user.nickname")}]},null,8,["modelValue","class","placeholder","rules"]),h("p",N,x(a.$t("user.fontNickName")),1),h("p",P,x(a.$t("user.text3"))+":",1),h("p",I,[E.value?(p(),f("img",O)):(p(),f("img",j)),h("span",null,x(a.$t("user.font5")),1)]),h("p",V,[C.value?(p(),f("img",_)):(p(),f("img",Z)),h("span",null,x(a.$t("user.font6")),1)]),h("p",z,[w.value?(p(),f("img",S)):(p(),f("img",A)),h("span",null,x(a.$t("user.text6")),1)])])])}}});q.__scopeId="data-v-24c90368";export{q as default};
