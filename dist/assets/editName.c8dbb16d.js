import{_ as a,a as e}from"./pitch.6e551fc9.js";import{p as s,u as l}from"./index.d5bee19a.js";import{s as t,b as n,d as c,j as i,r as u,o as r,R as o,q as d,O as v,P as m,Y as p,V as f,W as g,X as b}from"./vue.85a22cc6.js";import{d as h,s as k}from"./index.60680413.js";const x=a=>(g("data-v-54b04a4f"),a=a(),b(),a),y={class:"editName"},P={class:"content"},I=x((()=>m("p",{class:"edit-name"},"7天可以修改一次昵称，请认真修改哦!",-1))),j=x((()=>m("p",{class:"userName"},"用户名必须:",-1))),N={class:"explain"},O={key:0,class:"noPitch",src:a},V={key:1,class:"noPitch",src:e},_=x((()=>m("span",null,"4个字符 (最多16个)",-1))),z={class:"explain"},A={key:0,class:"noPitch",src:a},Z={key:1,class:"noPitch",src:e},q=x((()=>m("span",null,"1个字母和1个数字(不能包含特殊字符)",-1))),w={class:"explain"},C={key:0,class:"noPitch",src:a},$={key:1,class:"noPitch",src:e},R=x((()=>m("span",null,"不能有空格",-1)));var S=t({setup(a){const e=n((()=>k.state.user.userInfo)),t=f(),g=c(""),b=c(!1),x=c(!1),S=c(!1),U=c("编辑昵称"),W=a=>{if(!a)return b.value=!1,x.value=!1,void(S.value=!1);-1!==a.indexOf(" ")?b.value=!1:b.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(a)?S.value=!0:S.value=!1,a.indexOf("admin")>0||a.indexOf("test")>0)x.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(a)?x.value=!0:x.value=!1}};i((()=>{X()}));const X=async()=>{const a={fPlayerId:e.value.playerId},l=await s(a);if(200!==l.code)return h(l.msg);g.value=l.data.nickName,W(l.data.nickName)};return(a,e)=>{const s=u("van-nav-bar"),n=u("van-field");return r(),o("div",y,[d(s,{class:"bg-title",title:U.value,border:!1},{left:v((()=>[m("span",{onClick:e[0]||(e[0]=a=>{t.back()})},"取消")])),right:v((()=>[m("span",{onClick:e[1]||(e[1]=a=>(async()=>{if(!S.value||!S.value||!S.value)return h("请按规则修改");const a={nickName:g.value,lang:localStorage.getItem("locale")},e=await l(a);if(200!==e.code)return h(e.msg);h("编辑成功"),k.dispatch("user/userInfo"),t.push("/user/userInfo")})())},"保存")])),_:1},8,["title"]),m("div",P,[d(n,{modelValue:g.value,"onUpdate:modelValue":[e[2]||(e[2]=a=>g.value=a),W],class:p([g.value?"bb":""]),name:"",label:"",placeholder:"输入昵称",maxlength:"16",clearable:"",rules:[{required:!0,message:"请输入昵称"}]},null,8,["modelValue","class"]),I,j,m("p",N,[S.value?(r(),o("img",V)):(r(),o("img",O)),_]),m("p",z,[x.value?(r(),o("img",Z)):(r(),o("img",A)),q]),m("p",w,[b.value?(r(),o("img",$)):(r(),o("img",C)),R])])])}}});S.__scopeId="data-v-54b04a4f";export{S as default};
