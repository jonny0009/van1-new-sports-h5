import{_ as e,a as s}from"./pitch.63ad02a2.js";import{s as a,R as l,d as t,r,o as n,S as c,q as i,O as u,P as o,V as v,_ as d,B as p}from"./vue.6c3ce548.js";const m={class:"register"},g={class:"title"},x={class:"content"},$={class:"setPassWorld"},h={class:"userName"},k={class:"explain"},f={key:0,class:"noPitch",src:e},b={key:1,class:"noPitch",src:s},y={class:"explain"},P={key:0,class:"noPitch",src:e},_={key:1,class:"noPitch",src:s},C={class:"explain"},O={key:0,class:"noPitch",src:e},B={key:1,class:"noPitch",src:s},V={key:1,class:"loginBtn"},A={class:"literal"};var U=a({setup(e){const s=l(),a=t(""),U=t(!1),j=t(!1),q=t(!1),z=e=>{if(!e)return U.value=!1,j.value=!1,void(q.value=!1);-1!==e.indexOf(" ")?U.value=!1:U.value=!0;/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(e)?q.value=!0:q.value=!1,e.indexOf("admin")>0||e.indexOf("test")>0?j.value=!1:j.value=!0},N=()=>{s.push({path:"/sign_in"})};return(e,l)=>{const t=r("van-icon"),S=r("van-nav-bar"),Z=r("van-field");return n(),c("div",m,[i(S,{class:"bg-title",border:!1},{left:u((()=>[i(t,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=e=>{s.back()})})])),title:u((()=>[o("span",g,v(e.$t("user.register")),1)])),_:1}),o("div",x,[o("p",$,v(e.$t("user.CreateUsername")),1),i(Z,{modelValue:a.value,"onUpdate:modelValue":[l[1]||(l[1]=e=>a.value=e),z],class:d([a.value?"bb":""]),name:"",label:"",placeholder:e.$t("user.userName"),maxlength:"16",clearable:"",rules:[{required:!0,message:e.$t("user.CreateUsername")}]},null,8,["modelValue","class","placeholder","rules"]),o("p",h,v(e.$t("user.text3"))+":",1),o("p",k,[q.value?(n(),c("img",b)):(n(),c("img",f)),o("span",null,v(e.$t("user.text4")),1)]),o("p",y,[j.value?(n(),c("img",_)):(n(),c("img",P)),o("span",null,v(e.$t("user.text5")),1)]),o("p",C,[U.value?(n(),c("img",B)):(n(),c("img",O)),o("span",null,v(e.$t("user.text6")),1)]),q.value&&j.value&&U.value?(n(),c("div",{key:0,class:"loginBtn registerBtn",onClick:l[2]||(l[2]=e=>{var s;console.log(s,"注册====")})},v(e.$t("user.register")),1)):(n(),c("div",V,v(e.$t("user.nextStep")),1)),o("p",A,[p(v(e.$t("user.ExistingAccount"))+"? ",1),o("span",{class:"register",onClick:N},v(e.$t("user.logOn")),1)])])])}}});U.__scopeId="data-v-70ebe179";export{U as default};
