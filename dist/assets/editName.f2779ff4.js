import{_ as a,a as e}from"./pitch.63ad02a2.js";import{u as s,H as l,b as t,s as n,J as u}from"./index.d2005fc8.js";import{s as c,b as r,R as i,d as o,j as d,r as v,o as m,S as p,q as f,O as k,P as g,V as h,_ as b}from"./vue.95886b43.js";const x={class:"editName"},y={class:"content"},$={class:"edit-name"},N={class:"userName"},P={class:"explain"},I={key:0,class:"noPitch",src:a},_={key:1,class:"noPitch",src:e},j={class:"explain"},z={key:0,class:"noPitch",src:a},O={key:1,class:"noPitch",src:e},V={class:"explain"},A={key:0,class:"noPitch",src:a},S={key:1,class:"noPitch",src:e};var Z=c({setup(a){const e=r((()=>n.state.user.userInfo)),c=i(),Z=o(""),q=o(!1),w=o(!1),C=o(!1),{t:E}=s(),H=o(E("user.EditNickname")),J=a=>{if(!a)return q.value=!1,w.value=!1,void(C.value=!1);-1!==a.indexOf(" ")?q.value=!1:q.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(a)?C.value=!0:C.value=!1,a.indexOf("admin")>0||a.indexOf("test")>0)w.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(a)?w.value=!0:w.value=!1}};d((()=>{R()}));const R=async()=>{const a={fPlayerId:e.value.playerId},s=await l(a);if(200!==s.code)return t(s.msg);Z.value=s.data.nickName,J(s.data.nickName)};return(a,e)=>{const s=v("van-nav-bar"),l=v("van-field");return m(),p("div",x,[f(s,{class:"bg-title",title:H.value,border:!1},{left:k((()=>[g("span",{onClick:e[0]||(e[0]=a=>{c.back()})},h(a.$t("user.cancellation")),1)])),right:k((()=>[g("span",{onClick:e[1]||(e[1]=a=>(async()=>{if(!C.value||!w.value||!q.value)return t(E("user.text11"));const a={nickName:Z.value,lang:localStorage.getItem("locale")||"zh-cn"},e=await u(a);if(200!==e.code)return t(e.msg);t(E("user.EditSuccessfully")),n.dispatch("user/userInfo"),c.push("/user/userInfo")})())},h(a.$t("user.save")),1)])),_:1},8,["title"]),g("div",y,[f(l,{modelValue:Z.value,"onUpdate:modelValue":[e[2]||(e[2]=a=>Z.value=a),J],class:b([Z.value?"bb":""]),name:"",label:"",placeholder:a.$t("user.nickname"),maxlength:"16",clearable:"",rules:[{required:!0,message:a.$t("user.nickname")}]},null,8,["modelValue","class","placeholder","rules"]),g("p",$,h(a.$t("user.fontNickName")),1),g("p",N,h(a.$t("user.text3"))+":",1),g("p",P,[C.value?(m(),p("img",_)):(m(),p("img",I)),g("span",null,h(a.$t("user.font5")),1)]),g("p",j,[w.value?(m(),p("img",O)):(m(),p("img",z)),g("span",null,h(a.$t("user.font6")),1)]),g("p",V,[q.value?(m(),p("img",S)):(m(),p("img",A)),g("span",null,h(a.$t("user.text6")),1)])])])}}});Z.__scopeId="data-v-6822aeb2";export{Z as default};
