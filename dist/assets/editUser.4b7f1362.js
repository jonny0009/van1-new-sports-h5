import{h as s}from"./head-img.2e40e95c.js";import{_ as a}from"./edit.32b96bd2.js";import{_ as l}from"./pitch.3e80cb63.js";import{d as e,a as i,r as c,o as t,u as o,m as d,p as n,q as r,x as u,A as v,B as m,C as p}from"./vue.3b4f9705.js";const g=s=>(m("data-v-4ec5667c"),s=s(),p(),s),k={class:"editUser"},f={class:"content"},h={class:"head"},_=g((()=>r("img",{class:"img_1",src:s,alt:""},null,-1))),b={class:"edit-name"},x=g((()=>r("span",null,"编辑昵称",-1))),C=g((()=>r("p",{class:"explain"},"个人简介",-1))),y={class:"explain-box"},j=g((()=>r("p",{class:"explain privacy"},"隐私设置",-1))),w={class:"account-1"},I={class:"top-1"},V={key:0,class:"img_1",src:l,alt:""},U=u(" 公开帐户（推荐） "),q=g((()=>r("div",{class:"top-2"}," 其他用户可以直接关注你，查看你的档案和注单。你还是可以隐藏具体的注单。这是默认设置。 ",-1))),z={class:"account-1"},A={class:"top-1"},B={key:0,class:"img_1",src:l,alt:""},N=u(" 私密帐户 "),D=g((()=>r("div",{class:"top-2"}," 其他用户只有在你接受他们的关注请求时才能看到你的档案和注单。你在平台的体验会比较私密。 ",-1)));var E=e({setup(s){const l=v(),e=i(""),u=i(1),m=s=>{l.push("/user"+s)},p=i("编辑档案");return(s,i)=>{const v=c("van-nav-bar"),g=c("van-field");return t(),o("div",k,[d(v,{class:"bg-title",title:p.value,border:!1},{left:n((()=>[r("span",{onClick:i[0]||(i[0]=s=>{l.push("/user/userInfo")})},"取消")])),right:n((()=>[r("span",{onClick:i[1]||(i[1]=s=>{console.log("保存====")})},"保存")])),_:1},8,["title"]),r("div",f,[r("div",h,[_,r("div",{class:"edit",onClick:i[2]||(i[2]=s=>m("/editImg"))},"编辑")]),r("div",b,[x,r("img",{class:"img_1",src:a,alt:"",onClick:i[3]||(i[3]=s=>m("/editName"))})]),C,r("div",y,[d(g,{modelValue:e.value,"onUpdate:modelValue":i[4]||(i[4]=s=>e.value=s),rows:"10",autosize:"",type:"textarea",maxlength:"256","show-word-limit":""},null,8,["modelValue"])]),j,r("div",w,[r("div",I,[1===u.value?(t(),o("img",V)):(t(),o("div",{key:1,class:"round",onClick:i[5]||(i[5]=s=>u.value=1)})),U]),q]),r("div",z,[r("div",A,[2===u.value?(t(),o("img",B)):(t(),o("div",{key:1,class:"round",onClick:i[6]||(i[6]=s=>u.value=2)})),N]),D])])])}}});E.__scopeId="data-v-4ec5667c";export{E as default};
