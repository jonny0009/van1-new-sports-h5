import{_ as e,a}from"./pitch.63ad02a2.js";import{u as s,B as l,b as t,s as n,C as u}from"./index.7349ed66.js";import{s as c,b as r,d as i,j as o,r as d,o as v,R as m,q as p,O as f,P as k,U as g,_ as h,W as b}from"./vue.9ae86005.js";const x={class:"editName"},y={class:"content"},$={class:"edit-name"},N={class:"userName"},P={class:"explain"},I={key:0,class:"noPitch",src:e},_={key:1,class:"noPitch",src:a},j={class:"explain"},O={key:0,class:"noPitch",src:e},z={key:1,class:"noPitch",src:a},A={class:"explain"},C={key:0,class:"noPitch",src:e},V={key:1,class:"noPitch",src:a};var Z=c({setup(e){const a=r((()=>n.state.user.userInfo)),c=b(),Z=i(""),q=i(!1),w=i(!1),E=i(!1),{t:S}=s(),U=i(S("user.EditNickname")),B=e=>{if(!e)return q.value=!1,w.value=!1,void(E.value=!1);-1!==e.indexOf(" ")?q.value=!1:q.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(e)?E.value=!0:E.value=!1,e.indexOf("admin")>0||e.indexOf("test")>0)w.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(e)?w.value=!0:w.value=!1}};o((()=>{R()}));const R=async()=>{const e={fPlayerId:a.value.playerId},s=await l(e);if(200!==s.code)return t(s.msg);Z.value=s.data.nickName,B(s.data.nickName)};return(e,a)=>{const s=d("van-nav-bar"),l=d("van-field");return v(),m("div",x,[p(s,{class:"bg-title",title:U.value,border:!1},{left:f((()=>[k("span",{onClick:a[0]||(a[0]=e=>{c.back()})},g(e.$t("user.cancellation")),1)])),right:f((()=>[k("span",{onClick:a[1]||(a[1]=e=>(async()=>{if(!E.value||!E.value||!E.value)return t(S("user.text11"));const e={nickName:Z.value,lang:localStorage.getItem("locale")},a=await u(e);if(200!==a.code)return t(a.msg);t(S("user.EditSuccessfully")),n.dispatch("user/userInfo"),c.push("/user/userInfo")})())},g(e.$t("user.save")),1)])),_:1},8,["title"]),k("div",y,[p(l,{modelValue:Z.value,"onUpdate:modelValue":[a[2]||(a[2]=e=>Z.value=e),B],class:h([Z.value?"bb":""]),name:"",label:"",placeholder:e.$t("user.nickname"),maxlength:"16",clearable:"",rules:[{required:!0,message:e.$t("user.nickname")}]},null,8,["modelValue","class","placeholder","rules"]),k("p",$,g(e.$t("user.fontNickName")),1),k("p",N,g(e.$t("user.text3"))+":",1),k("p",P,[E.value?(v(),m("img",_)):(v(),m("img",I)),k("span",null,g(e.$t("user.font5")),1)]),k("p",j,[w.value?(v(),m("img",z)):(v(),m("img",O)),k("span",null,g(e.$t("user.font6")),1)]),k("p",A,[q.value?(v(),m("img",V)):(v(),m("img",C)),k("span",null,g(e.$t("user.text6")),1)])])])}}});Z.__scopeId="data-v-7bb885c2";export{Z as default};
