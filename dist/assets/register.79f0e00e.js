<<<<<<<< HEAD:dist/assets/register.0231da31.js
import{_ as e,a as s}from"./pitch.63ad02a2.js";import{s as a,d as l,r as t,o as r,R as n,q as c,O as i,P as u,U as o,_ as v,B as d,W as p}from"./vue.9ae86005.js";const m={class:"register"},g={class:"title"},x={class:"content"},$={class:"setPassWorld"},h={class:"userName"},k={class:"explain"},f={key:0,class:"noPitch",src:e},b={key:1,class:"noPitch",src:s},y={class:"explain"},P={key:0,class:"noPitch",src:e},_={key:1,class:"noPitch",src:s},C={class:"explain"},O={key:0,class:"noPitch",src:e},B={key:1,class:"noPitch",src:s},U={key:1,class:"loginBtn"},A={class:"literal"};var V=a({setup(e){const s=p(),a=l(""),V=l(!1),j=l(!1),q=l(!1),z=e=>{if(!e)return V.value=!1,j.value=!1,void(q.value=!1);-1!==e.indexOf(" ")?V.value=!1:V.value=!0;/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(e)?q.value=!0:q.value=!1,e.indexOf("admin")>0||e.indexOf("test")>0?j.value=!1:j.value=!0},N=()=>{s.push({path:"/sign_in"})};return(e,l)=>{const p=t("van-icon"),W=t("van-nav-bar"),Z=t("van-field");return r(),n("div",m,[c(W,{class:"bg-title",border:!1},{left:i((()=>[c(p,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=e=>{s.back()})})])),title:i((()=>[u("span",g,o(e.$t("user.register")),1)])),_:1}),u("div",x,[u("p",$,o(e.$t("user.CreateUsername")),1),c(Z,{modelValue:a.value,"onUpdate:modelValue":[l[1]||(l[1]=e=>a.value=e),z],class:v([a.value?"bb":""]),name:"",label:"",placeholder:e.$t("user.userName"),maxlength:"16",clearable:"",rules:[{required:!0,message:e.$t("user.CreateUsername")}]},null,8,["modelValue","class","placeholder","rules"]),u("p",h,o(e.$t("user.text3"))+":",1),u("p",k,[q.value?(r(),n("img",b)):(r(),n("img",f)),u("span",null,o(e.$t("user.text4")),1)]),u("p",y,[j.value?(r(),n("img",_)):(r(),n("img",P)),u("span",null,o(e.$t("user.text5")),1)]),u("p",C,[V.value?(r(),n("img",B)):(r(),n("img",O)),u("span",null,o(e.$t("user.text6")),1)]),q.value&&j.value&&V.value?(r(),n("div",{key:0,class:"loginBtn registerBtn",onClick:l[2]||(l[2]=e=>{var s;console.log(s,"注册====")})},o(e.$t("user.register")),1)):(r(),n("div",U,o(e.$t("user.nextStep")),1)),u("p",A,[d(o(e.$t("user.ExistingAccount"))+"? ",1),u("span",{class:"register",onClick:N},o(e.$t("user.logOn")),1)])])])}}});V.__scopeId="data-v-70ebe179";export{V as default};
========
import{_ as e,a as s}from"./pitch.63ad02a2.js";import{s as a,d as l,r as t,o as r,R as n,q as c,O as i,P as u,U as o,Z as v,B as d,W as p}from"./vue.b83303fa.js";const m={class:"register"},g={class:"title"},x={class:"content"},$={class:"setPassWorld"},h={class:"userName"},k={class:"explain"},f={key:0,class:"noPitch",src:e},b={key:1,class:"noPitch",src:s},y={class:"explain"},P={key:0,class:"noPitch",src:e},_={key:1,class:"noPitch",src:s},C={class:"explain"},O={key:0,class:"noPitch",src:e},B={key:1,class:"noPitch",src:s},U={key:1,class:"loginBtn"},A={class:"literal"};var V=a({setup(e){const s=p(),a=l(""),V=l(!1),Z=l(!1),j=l(!1),q=e=>{if(!e)return V.value=!1,Z.value=!1,void(j.value=!1);-1!==e.indexOf(" ")?V.value=!1:V.value=!0;/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(e)?j.value=!0:j.value=!1,e.indexOf("admin")>0||e.indexOf("test")>0?Z.value=!1:Z.value=!0},z=()=>{s.push({path:"/sign_in"})};return(e,l)=>{const p=t("van-icon"),N=t("van-nav-bar"),W=t("van-field");return r(),n("div",m,[c(N,{class:"bg-title",border:!1},{left:i((()=>[c(p,{name:"arrow-left",class:"img_1",onClick:l[0]||(l[0]=e=>{s.back()})})])),title:i((()=>[u("span",g,o(e.$t("user.register")),1)])),_:1}),u("div",x,[u("p",$,o(e.$t("user.CreateUsername")),1),c(W,{modelValue:a.value,"onUpdate:modelValue":[l[1]||(l[1]=e=>a.value=e),q],class:v([a.value?"bb":""]),name:"",label:"",placeholder:e.$t("user.userName"),maxlength:"16",clearable:"",rules:[{required:!0,message:e.$t("user.CreateUsername")}]},null,8,["modelValue","class","placeholder","rules"]),u("p",h,o(e.$t("user.text3"))+":",1),u("p",k,[j.value?(r(),n("img",b)):(r(),n("img",f)),u("span",null,o(e.$t("user.text4")),1)]),u("p",y,[Z.value?(r(),n("img",_)):(r(),n("img",P)),u("span",null,o(e.$t("user.text5")),1)]),u("p",C,[V.value?(r(),n("img",B)):(r(),n("img",O)),u("span",null,o(e.$t("user.text6")),1)]),j.value&&Z.value&&V.value?(r(),n("div",{key:0,class:"loginBtn registerBtn",onClick:l[2]||(l[2]=e=>{var s;console.log(s,"注册====")})},o(e.$t("user.register")),1)):(r(),n("div",U,o(e.$t("user.nextStep")),1)),u("p",A,[d(o(e.$t("user.ExistingAccount"))+"? ",1),u("span",{class:"register",onClick:z},o(e.$t("user.logOn")),1)])])])}}});V.__scopeId="data-v-70ebe179";export{V as default};
>>>>>>>> hotfix/cn2_url_token:dist/assets/register.79f0e00e.js
