import{_ as s}from"./arrow@2x.33e74337.js";import{_ as e,a}from"./pitch.3b7e1a5f.js";import{s as l,d as t,r,o as n,R as c,q as i,O as u,P as o,S as v,Y as d,B as p,V as m}from"./vue.93da156d.js";const g={class:"register"},x={class:"title"},$={class:"content"},f={class:"setPassWorld"},h={class:"userName"},k={class:"explain"},b={key:0,class:"noPitch",src:e},y={key:1,class:"noPitch",src:a},P={class:"explain"},_={key:0,class:"noPitch",src:e},B={key:1,class:"noPitch",src:a},C={class:"explain"},O={key:0,class:"noPitch",src:e},V={key:1,class:"noPitch",src:a},j={key:1,class:"loginBtn"},A={class:"literal"};var U=l({setup(e){const a=m(),l=t(""),U=t(!1),q=t(!1),z=t(!1),I=s=>{if(!s)return U.value=!1,q.value=!1,void(z.value=!1);-1!==s.indexOf(" ")?U.value=!1:U.value=!0;/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(s)?z.value=!0:z.value=!1,s.indexOf("admin")>0||s.indexOf("test")>0?q.value=!1:q.value=!0},N=()=>{a.push({path:"/sign_in"})};return(e,t)=>{const m=r("van-nav-bar"),S=r("van-field");return n(),c("div",g,[i(m,{class:"signInBar",border:!1},{left:u((()=>[o("img",{class:"img_1",src:s,alt:"",onClick:t[0]||(t[0]=s=>{a.back()})})])),title:u((()=>[o("span",x,v(e.$t("user.register")),1)])),_:1}),o("div",$,[o("p",f,v(e.$t("user.CreateUsername")),1),i(S,{modelValue:l.value,"onUpdate:modelValue":[t[1]||(t[1]=s=>l.value=s),I],class:d([l.value?"bb":""]),name:"",label:"",placeholder:e.$t("user.userName"),maxlength:"16",clearable:"",rules:[{required:!0,message:e.$t("user.CreateUsername")}]},null,8,["modelValue","class","placeholder","rules"]),o("p",h,v(e.$t("user.text3"))+":",1),o("p",k,[z.value?(n(),c("img",y)):(n(),c("img",b)),o("span",null,v(e.$t("user.text4")),1)]),o("p",P,[q.value?(n(),c("img",B)):(n(),c("img",_)),o("span",null,v(e.$t("user.text5")),1)]),o("p",C,[U.value?(n(),c("img",V)):(n(),c("img",O)),o("span",null,v(e.$t("user.text6")),1)]),z.value&&q.value&&U.value?(n(),c("div",{key:0,class:"loginBtn registerBtn",onClick:t[2]||(t[2]=s=>{var e;console.log(e,"注册====")})},v(e.$t("user.register")),1)):(n(),c("div",j,v(e.$t("user.nextStep")),1)),o("p",A,[p(v(e.$t("user.ExistingAccount"))+"? ",1),o("span",{class:"register",onClick:N},v(e.$t("user.logOn")),1)])])])}}});U.__scopeId="data-v-41791f9d";export{U as default};
