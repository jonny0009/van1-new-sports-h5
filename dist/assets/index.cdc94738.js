import{_ as a}from"./return@2x.4699c821.js";import{_ as s,a as l,b as e,c,d as i,e as t}from"./service@2x.5600ef32.js";import{_ as n}from"./go@2x.663d8ac1.js";import{s as r,b as v,d as o,e as u,r as d,o as g,R as p,q as m,O as k,P as b,S as y,F as f,Z as h,u as _,V as j,Y as C,a1 as w,W as I,X as x}from"./vue.85a22cc6.js";import{l as O,s as M}from"./index.48a0a403.js";const S=a=>(I("data-v-3e7c422c"),a=a(),x(),a),q={class:"login-page"},F=S((()=>b("img",{class:"img_2",src:s,alt:""},null,-1))),L=S((()=>b("img",{class:"img_3",src:l,alt:""},null,-1))),A={class:"content"},E=S((()=>b("p",{class:"title"},"欢迎来到AI！",-1))),H=S((()=>b("span",{class:"desc"},"全球最领先的体育社交平台",-1))),N=S((()=>b("div",{class:"ban"},[b("img",{class:"ban_1",src:e,alt:""})],-1))),P={class:"list-set"},R={class:"label-info flex align-center"},T=S((()=>b("div",{class:"icon"},[b("img",{src:c})],-1))),U={class:"label"},V={class:"label-right"},W={class:"label"},X=S((()=>b("img",{class:"arrow",src:n},null,-1))),Y=S((()=>b("div",{class:"label-info flex align-center"},[b("div",{class:"icon"},[b("img",{src:i})]),b("div",{class:"label"},y("地区"))],-1))),Z={class:"label-right"},$={class:"label"},z=S((()=>b("img",{class:"arrow",src:n},null,-1))),B=S((()=>b("div",{class:"label-info flex align-center"},[b("div",{class:"icon"},[b("img",{src:t})]),b("div",{class:"label"},y("盘口"))],-1))),D={class:"label-right"},G={class:"label"},J=S((()=>b("img",{class:"arrow",src:n},null,-1))),K={class:"popup-title"},Q={class:"pk-list"},aa=["onClick"],sa={key:0};var la=r({setup(s){const l=v((()=>M.state.app.queryCMerLanguage.accessLanguage)),e=v((()=>M.state.app.businessConfig.betFont)),c=j(),i=o(""),t=u({key:""}),n=o(0),r=u({arr:[]}),I=O.getItem("language"),x=o(I||{}),S=O.getItem("areaObj"),la=o(S||{}),ea=O.getItem("plateMaskObj"),ca=o(ea||{}),ia=o(!1);function ta(a){n.value=a,r.arr=[],1===a&&(r.arr=l.value,t.key=x.value.key,i.value="语言"),2===a&&(r.arr=Object.keys(e.value||{}).map((function(a){return{key:a,value:e.value[a]}})),t.key=la.value.key,i.value="地区"),3===a&&(r.arr=[{value:"香港盘",key:"E"},{value:"欧洲盘",key:"H"}],t.key=ca.value.key,i.value="盘口"),ia.value=!0}const na=()=>{c.push({path:"/register"})},ra=()=>{c.push({path:"/sign_in"})};return(s,l)=>{const e=d("van-nav-bar"),v=d("van-icon"),o=d("van-popup");return g(),p("div",q,[m(e,{class:"bg-title"},{left:k((()=>[b("img",{class:"img_1",src:a,alt:"",onClick:l[0]||(l[0]=a=>{c.back()})})])),title:k((()=>[F])),right:k((()=>[L])),_:1}),b("div",A,[E,H,b("div",{class:"area-btn"},[b("span",{onClick:na},"注册"),b("span",{onClick:ra},"登录")]),N,b("div",P,[b("div",{class:"item",onClick:l[1]||(l[1]=a=>ta(1))},[b("div",R,[T,b("div",U,y(s.$t("user.lang")),1)]),b("div",V,[b("div",W,y(x.value.value||"简体中文"),1),X])]),b("div",{class:"item",onClick:l[2]||(l[2]=a=>ta(2))},[Y,b("div",Z,[b("div",$,y(la.value.value),1),z])]),b("div",{class:"item",onClick:l[3]||(l[3]=a=>ta(3))},[B,b("div",D,[b("div",G,y(ca.value.value),1),J])])])]),m(o,{show:ia.value,"onUpdate:show":l[4]||(l[4]=a=>ia.value=a),position:"bottom",closeable:"",round:""},{default:k((()=>[b("div",K,y(i.value),1),b("div",Q,[(g(!0),p(f,null,h(_(r).arr,((a,s)=>(g(),p("div",{key:s,class:C(["item",[_(t).key===a.key?"item-color":""]]),onClick:s=>async function(a){1===n.value&&(x.value=a,localStorage.setItem("locale",a.key),O.setItem("language",a),window.location.reload()),2===n.value&&(O.setItem("areaObj",a),la.value=a),3===n.value&&(O.setItem("plateMaskObj",a),ca.value=a,M.dispatch("user/configSettingNew",{handicapType:a.key})),ia.value=!1}(a)},[b("p",null,[b("span",null,y(a.value),1),_(t).key===a.key?(g(),p("span",sa,[m(v,{name:"success"})])):w("",!0)])],10,aa)))),128))])])),_:1},8,["show"])])}}});la.__scopeId="data-v-3e7c422c";export{la as default};
