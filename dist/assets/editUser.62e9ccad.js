import{_ as a}from"./edit.4295f099.js";import{_ as s}from"./pitch.36d2750f.js";import{s as e,b as l,d as i,j as t,r as c,o as r,R as o,q as d,O as n,P as u,B as v,V as p,W as m,X as f}from"./vue.85a22cc6.js";import{v as g,d as y,s as h,y as k,z as I,I as x,x as _}from"./index.48a0a403.js";const w=a=>(m("data-v-61c1d181"),a=a(),f(),a),C={class:"editUser"},b={class:"content"},j={class:"head"},V=["src"],z={class:"edit-name"},N=w((()=>u("span",null,"编辑昵称",-1))),P=w((()=>u("p",{class:"explain"},"个人简介",-1))),U={class:"explain-box"},$=w((()=>u("p",{class:"explain privacy"},"隐私设置",-1))),q={class:"account-1"},B={class:"top-1"},O={key:0,class:"img_1",src:s,alt:""},R=v(" 公开帐户（推荐） "),W=w((()=>u("div",{class:"top-2"}," 其他用户可以直接关注你，查看你的档案和注单。你还是可以隐藏具体的注单。这是默认设置。 ",-1))),X={class:"account-1"},A={class:"top-1"},D={key:0,class:"img_1",src:s,alt:""},E=v(" 私密帐户 "),F=w((()=>u("div",{class:"top-2"}," 其他用户只有在你接受他们的关注请求时才能看到你的档案和注单。你在平台的体验会比较私密。 ",-1)));var G=e({setup(s){const e=l((()=>h.state.user.userInfo)),v=p(),m=i(""),f=i(0),w=i({}),G=a=>{v.push("/user"+a)},H=async a=>{if(f.value===a)return;f.value=a;const s={privacy:f.value},e=await I(s);if(200!==e.code)return y(e.msg);y("编辑成功")},J=i("编辑档案");t((()=>{K()}));const K=async()=>{const a={fPlayerId:e.value.playerId},s=await g(a);if(200!==s.code)return y(s.msg);m.value=s.data.profiles,f.value=s.data.privacy,w.value=s.data};return(s,e)=>{const l=c("van-nav-bar"),i=c("van-field");return r(),o("div",C,[d(l,{class:"bg-title",title:J.value,border:!1},{left:n((()=>[u("span",{onClick:e[0]||(e[0]=a=>{v.push("/user/userInfo")})},"取消")])),right:n((()=>[u("span",{onClick:e[1]||(e[1]=a=>(async()=>{const a={nickName:"",headImg:"",profiles:m.value},s=await k(a);if(200!==s.code)return y(s.msg);y("编辑成功"),h.dispatch("user/userInfo"),v.push("/user/userInfo")})())},"保存")])),_:1},8,["title"]),u("div",b,[u("div",j,[u("img",{class:"img_1",src:(t=w.value.headImg,t?`${x}${t}`:_),alt:""},null,8,V),u("div",{class:"edit",onClick:e[2]||(e[2]=a=>G("/editImg"))},"编辑")]),u("div",z,[N,u("img",{class:"img_1",src:a,alt:"",onClick:e[3]||(e[3]=a=>G("/editName"))})]),P,u("div",U,[d(i,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=a=>m.value=a),rows:"10",autosize:"",type:"textarea",maxlength:"256","show-word-limit":""},null,8,["modelValue"])]),$,u("div",q,[u("div",B,[0===f.value?(r(),o("img",O)):(r(),o("div",{key:1,class:"round",onClick:e[5]||(e[5]=a=>H(0))})),R]),W]),u("div",X,[u("div",A,[1===f.value?(r(),o("img",D)):(r(),o("div",{key:1,class:"round",onClick:e[6]||(e[6]=a=>H(1))})),E]),F])])]);var t}}});G.__scopeId="data-v-61c1d181";export{G as default};
