import{_ as a,a as e}from"./pitch.97e5d65f.js";import{d as s,a as l,r as c,o as t,u as n,m as i,p as u,q as r,D as v,A as d,B as o,C as p}from"./vue.3b4f9705.js";const m=a=>(o("data-v-7cd253e8"),a=a(),p(),a),f={class:"editName"},g={class:"content"},h=m((()=>r("p",{class:"userName"},"用户名必须:",-1))),b={class:"explain"},k={key:0,class:"noPitch",src:a},x={key:1,class:"noPitch",src:e},y=m((()=>r("span",null,"4个字符 (最多16个)",-1))),P={class:"explain"},A={key:0,class:"noPitch",src:a},_={key:1,class:"noPitch",src:e},z=m((()=>r("span",null,"1个字母和1个数字(不能包含特殊字符)",-1))),C={class:"explain"},O={key:0,class:"noPitch",src:a},V={key:1,class:"noPitch",src:e},Z=m((()=>r("span",null,"不能有空格",-1)));var j=s({setup(a){const e=d(),s=l(""),o=l(!1),p=l(!1),m=l(!1),j=l("编辑昵称"),q=a=>{if(!a)return o.value=!1,p.value=!1,void(m.value=!1);-1!==a.indexOf(" ")?o.value=!1:o.value=!0;if(/^[a-zA-Z0-9]{4,16}$/.test(a)?m.value=!0:m.value=!1,a.indexOf("admin")>0||a.indexOf("test")>0)p.value=!1;else{/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,16}$/.test(a)?p.value=!0:p.value=!1}};return(a,l)=>{const d=c("van-nav-bar"),N=c("van-field");return t(),n("div",f,[i(d,{class:"bg-title",title:j.value,border:!1},{left:u((()=>[r("span",{onClick:l[0]||(l[0]=a=>{e.back()})},"取消")])),right:u((()=>[r("span",{onClick:l[1]||(l[1]=a=>{})},"保存")])),_:1},8,["title"]),r("div",g,[i(N,{modelValue:s.value,"onUpdate:modelValue":[l[2]||(l[2]=a=>s.value=a),q],class:v([s.value?"bb":""]),name:"",label:"",placeholder:"输入昵称",maxlength:"16",clearable:"",rules:[{required:!0,message:"请输入昵称"}]},null,8,["modelValue","class"]),h,r("p",b,[m.value?(t(),n("img",x)):(t(),n("img",k)),y]),r("p",P,[p.value?(t(),n("img",_)):(t(),n("img",A)),z]),r("p",C,[o.value?(t(),n("img",V)):(t(),n("img",O)),Z])])])}}});j.__scopeId="data-v-7cd253e8";export{j as default};
