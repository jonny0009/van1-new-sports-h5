import{_ as a,a as e}from"./pitch.63ad02a2.js";import{u as s,K as l,b as t,s as n,L as u}from"./index.671670cd.js";import{s as c,b as r,d as i,j as o,r as d,o as v,R as m,q as p,O as f,P as g,U as k,Z as h,W as b}from"./vue.bfc6c13a.js";const x={class:"editName"},y={class:"content"},$={class:"edit-name"},P={class:"userName"},I={class:"explain"},N={key:0,class:"noPitch",src:a},j={key:1,class:"noPitch",src:e},O={class:"explain"},Z={key:0,class:"noPitch",src:a},_={key:1,class:"noPitch",src:e},z={class:"explain"},A={key:0,class:"noPitch",src:a},V={key:1,class:"noPitch",src:e};var q=c({setup(a){const e=r((()=>n.state.user.userInfo)),c=b(),q=i(""),w=i(!1),C=i(!1),E=i(!1),{t:S}=s(),U=i(S("user.EditNickname")),K=a=>{if(!a)return w.value=!1,C.value=!1,void(E.value=!1);-1!==a.indexOf(" ")?w.value=!1:w.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(a)?E.value=!0:E.value=!1,a.indexOf("admin")>0||a.indexOf("test")>0)C.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(a)?C.value=!0:C.value=!1}};o((()=>{L()}));const L=async()=>{const a={fPlayerId:e.value.playerId},s=await l(a);if(200!==s.code)return t(s.msg);q.value=s.data.nickName,K(s.data.nickName)};return(a,e)=>{const s=d("van-nav-bar"),l=d("van-field");return v(),m("div",x,[p(s,{class:"bg-title",title:U.value,border:!1},{left:f((()=>[g("span",{onClick:e[0]||(e[0]=a=>{c.back()})},k(a.$t("user.cancellation")),1)])),right:f((()=>[g("span",{onClick:e[1]||(e[1]=a=>(async()=>{if(!E.value||!E.value||!E.value)return t(S("user.text11"));const a={nickName:q.value,lang:localStorage.getItem("locale")},e=await u(a);if(200!==e.code)return t(e.msg);t(S("user.EditSuccessfully")),n.dispatch("user/userInfo"),c.push("/user/userInfo")})())},k(a.$t("user.save")),1)])),_:1},8,["title"]),g("div",y,[p(l,{modelValue:q.value,"onUpdate:modelValue":[e[2]||(e[2]=a=>q.value=a),K],class:h([q.value?"bb":""]),name:"",label:"",placeholder:a.$t("user.nickname"),maxlength:"16",clearable:"",rules:[{required:!0,message:a.$t("user.nickname")}]},null,8,["modelValue","class","placeholder","rules"]),g("p",$,k(a.$t("user.font7")),1),g("p",P,k(a.$t("user.text3"))+":",1),g("p",I,[E.value?(v(),m("img",j)):(v(),m("img",N)),g("span",null,k(a.$t("user.font5")),1)]),g("p",O,[C.value?(v(),m("img",_)):(v(),m("img",Z)),g("span",null,k(a.$t("user.font6")),1)]),g("p",z,[w.value?(v(),m("img",V)):(v(),m("img",A)),g("span",null,k(a.$t("user.text6")),1)])])])}}});q.__scopeId="data-v-a1b9d258";export{q as default};
