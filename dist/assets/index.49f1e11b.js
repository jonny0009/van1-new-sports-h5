import{_ as a}from"./return@2x.937c1e5d.js";import{_ as s,a as e,b as l,c as t}from"./service@2x.99a75fab.js";import{_ as r}from"./go@2x.b16f703a.js";import{s as i,d as c,e as n,j as u,r as o,o as v,R as p,q as d,O as m,P as k,Y as g,S as b,F as f,Z as y,u as h,V as _,a2 as x,W as $,X as j}from"./vue.e791136f.js";import{u as C,l as w}from"./index.a908bbf9.js";const H=a=>($("data-v-51e01bd4"),a=a(),j(),a),I={class:"login-page"},E=H((()=>k("img",{class:"img_2",src:s,alt:""},null,-1))),K=H((()=>k("img",{class:"img_3",src:e,alt:""},null,-1))),M={class:"content"},O={class:"title"},W={class:"desc"},q={class:"area-btn"},A=H((()=>k("div",{class:"ban"},[k("img",{class:"ban_1",src:l,alt:""})],-1))),F={class:"list-set"},P={class:"label-info flex align-center"},R=H((()=>k("div",{class:"icon"},[k("img",{src:t})],-1))),S={class:"label"},T={class:"label-right"},U={class:"label"},V=H((()=>k("img",{class:"arrow",src:r},null,-1))),X={class:"popup-title"},Y={class:"pk-list"},Z=["onClick"],z={key:0};var B=i({setup(s){const e=_(),l=c(""),t=c(!0),r=n({key:""}),i=c(0),$=n({arr:[]}),j=c(!1),{t:H}=C(),B=w.getItem("plateMaskKey")||"",D=c({}),G=n({arr:[{value:H("user.hk"),key:"H"},{value:H("user.Europe"),key:"E"}]}),J={value:H("user.hk"),key:"H"};u((()=>{const a=G.arr.find((a=>{if(a.key===B)return a}));D.value=a||J}));const L=()=>{e.push({path:"/register"})},N=()=>{e.push({path:"/sign_in"})};return(s,c)=>{var n;const u=o("van-nav-bar"),_=o("van-icon"),C=o("van-popup");return v(),p("div",I,[d(u,{class:g(["bg-title",[t.value?"theme":""]])},{left:m((()=>[k("img",{class:"img_1",src:a,alt:"",onClick:c[0]||(c[0]=a=>{e.back()})})])),title:m((()=>[E])),right:m((()=>[K])),_:1},8,["class"]),k("div",M,[k("p",O,b(s.$t("user.WelcomeToAI")),1),k("span",W,b(s.$t("user.text1")),1),k("div",q,[k("span",{onClick:L},b(s.$t("user.register")),1),k("span",{onClick:N},b(s.$t("user.logOn")),1)]),A,k("div",F,[k("div",{class:"item",onClick:c[1]||(c[1]=a=>{return s=3,i.value=s,$.arr=[],3===s&&($.arr=G.arr,r.key=D.value.key,l.value="Handicap"),void(j.value=!0);var s})},[k("div",P,[R,k("div",S,b(s.$t("user.Handicap")),1)]),k("div",T,[k("div",U,b(null==(n=D.value)?void 0:n.value),1),V])])])]),d(C,{show:j.value,"onUpdate:show":c[2]||(c[2]=a=>j.value=a),position:"bottom",closeable:"",round:""},{default:m((()=>[k("div",X,b(s.$t(`user.${l.value}`)),1),k("div",Y,[(v(!0),p(f,null,y(h($).arr,((a,s)=>(v(),p("div",{key:s,class:g(["item",[h(r).key===a.key?"item-color":""]]),onClick:s=>async function(a){3===i.value&&(w.setItem("plateMaskKey",a.key),D.value=a),j.value=!1}(a)},[k("p",null,[k("span",null,b(a.value),1),h(r).key===a.key?(v(),p("span",z,[d(_,{name:"success"})])):x("",!0)])],10,Z)))),128))])])),_:1},8,["show"])])}}});B.__scopeId="data-v-51e01bd4";export{B as default};
