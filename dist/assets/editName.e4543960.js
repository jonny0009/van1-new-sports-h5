import{_ as a,a as e}from"./pitch.63ad02a2.js";import{u as s,B as l,b as t,s as n,C as u}from"./index.a0a299a6.js";import{s as c,b as r,d as i,j as o,r as d,o as v,R as m,q as p,O as f,P as k,U as g,_ as h,W as x}from"./vue.9ae86005.js";const b={class:"editName"},y={class:"content"},$={class:"edit-name"},N={class:"userName"},P={class:"explain"},I={key:0,class:"noPitch",src:a},_={key:1,class:"noPitch",src:e},j={class:"explain"},O={key:0,class:"noPitch",src:a},z={key:1,class:"noPitch",src:e},A={class:"explain"},C={key:0,class:"noPitch",src:a},V={key:1,class:"noPitch",src:e};var Z=c({setup(a){const e=r((()=>n.state.user.userInfo)),c=x(),Z=i(""),q=i(!1),w=i(!1),E=i(!1),{t:S}=s(),U=i(S("user.EditNickname")),B=a=>{if(!a)return q.value=!1,w.value=!1,void(E.value=!1);-1!==a.indexOf(" ")?q.value=!1:q.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(a)?E.value=!0:E.value=!1,a.indexOf("admin")>0||a.indexOf("test")>0)w.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(a)?w.value=!0:w.value=!1}};o((()=>{R()}));const R=async()=>{const a={fPlayerId:e.value.playerId},s=await l(a);if(200!==s.code)return t(s.msg);Z.value=s.data.nickName,B(s.data.nickName)};return(a,e)=>{const s=d("van-nav-bar"),l=d("van-field");return v(),m("div",b,[p(s,{class:"bg-title",title:U.value,border:!1},{left:f((()=>[k("span",{onClick:e[0]||(e[0]=a=>{c.back()})},g(a.$t("user.cancellation")),1)])),right:f((()=>[k("span",{onClick:e[1]||(e[1]=a=>(async()=>{if(!E.value||!E.value||!E.value)return t(S("user.text11"));const a={nickName:Z.value,lang:localStorage.getItem("locale")},e=await u(a);if(200!==e.code)return t(e.msg);t(S("user.EditSuccessfully")),n.dispatch("user/userInfo"),c.push("/user/userInfo")})())},g(a.$t("user.save")),1)])),_:1},8,["title"]),k("div",y,[p(l,{modelValue:Z.value,"onUpdate:modelValue":[e[2]||(e[2]=a=>Z.value=a),B],class:h([Z.value?"bb":""]),name:"",label:"",placeholder:a.$t("user.nickname"),maxlength:"16",clearable:"",rules:[{required:!0,message:a.$t("user.nickname")}]},null,8,["modelValue","class","placeholder","rules"]),k("p",$,g(a.$t("user.fontNickName")),1),k("p",N,g(a.$t("user.text3"))+":",1),k("p",P,[E.value?(v(),m("img",_)):(v(),m("img",I)),k("span",null,g(a.$t("user.font5")),1)]),k("p",j,[w.value?(v(),m("img",z)):(v(),m("img",O)),k("span",null,g(a.$t("user.font6")),1)]),k("p",A,[q.value?(v(),m("img",V)):(v(),m("img",C)),k("span",null,g(a.$t("user.text6")),1)])])])}}});Z.__scopeId="data-v-2efc9d4b";export{Z as default};
