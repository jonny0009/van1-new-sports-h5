import{_ as e,a}from"./pitch.63ad02a2.js";import{u as s,H as l,b as t,s as n,J as u}from"./index.9ce004b4.js";import{s as c,b as r,R as i,d as o,j as d,r as v,o as m,S as p,q as f,O as k,P as g,V as b,_ as h}from"./vue.95886b43.js";const x={class:"editName"},y={class:"content"},$={class:"edit-name"},N={class:"userName"},P={class:"explain"},I={key:0,class:"noPitch",src:e},_={key:1,class:"noPitch",src:a},j={class:"explain"},O={key:0,class:"noPitch",src:e},V={key:1,class:"noPitch",src:a},z={class:"explain"},A={key:0,class:"noPitch",src:e},S={key:1,class:"noPitch",src:a};var Z=c({setup(e){const a=r((()=>n.state.user.userInfo)),c=i(),Z=o(""),q=o(!1),w=o(!1),C=o(!1),{t:E}=s(),H=o(E("user.EditNickname")),J=e=>{if(!e)return q.value=!1,w.value=!1,void(C.value=!1);-1!==e.indexOf(" ")?q.value=!1:q.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(e)?C.value=!0:C.value=!1,e.indexOf("admin")>0||e.indexOf("test")>0)w.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(e)?w.value=!0:w.value=!1}};d((()=>{R()}));const R=async()=>{const e={fPlayerId:a.value.playerId},s=await l(e);if(200!==s.code)return t(s.msg);Z.value=s.data.nickName,J(s.data.nickName)};return(e,a)=>{const s=v("van-nav-bar"),l=v("van-field");return m(),p("div",x,[f(s,{class:"bg-title",title:H.value,border:!1},{left:k((()=>[g("span",{onClick:a[0]||(a[0]=e=>{c.back()})},b(e.$t("user.cancellation")),1)])),right:k((()=>[g("span",{onClick:a[1]||(a[1]=e=>(async()=>{if(!C.value||!w.value||!q.value)return t(E("user.text11"));const e={nickName:Z.value,lang:localStorage.getItem("locale")},a=await u(e);if(200!==a.code)return t(a.msg);t(E("user.EditSuccessfully")),n.dispatch("user/userInfo"),c.push("/user/userInfo")})())},b(e.$t("user.save")),1)])),_:1},8,["title"]),g("div",y,[f(l,{modelValue:Z.value,"onUpdate:modelValue":[a[2]||(a[2]=e=>Z.value=e),J],class:h([Z.value?"bb":""]),name:"",label:"",placeholder:e.$t("user.nickname"),maxlength:"16",clearable:"",rules:[{required:!0,message:e.$t("user.nickname")}]},null,8,["modelValue","class","placeholder","rules"]),g("p",$,b(e.$t("user.fontNickName")),1),g("p",N,b(e.$t("user.text3"))+":",1),g("p",P,[C.value?(m(),p("img",_)):(m(),p("img",I)),g("span",null,b(e.$t("user.font5")),1)]),g("p",j,[w.value?(m(),p("img",V)):(m(),p("img",O)),g("span",null,b(e.$t("user.font6")),1)]),g("p",z,[q.value?(m(),p("img",S)):(m(),p("img",A)),g("span",null,b(e.$t("user.text6")),1)])])])}}});Z.__scopeId="data-v-8b541714";export{Z as default};
