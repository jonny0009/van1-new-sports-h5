import{b as a,a as e,_ as s,t}from"./del.c7969a06.js";import{s as l,I as r,l as n,h as c,r as o,b as i,e as u,_ as m}from"./index.70a9eafb.js";import{_ as d}from"./noData.b77d5d64.js";import{s as p,r as g,o as v,R as y,F as h,Z as f,P as k,S as b,a2 as _,V as C,q as I,u as L,W as w,X as S,B as $,e as T,d as H,j as M,b as D,O as j,Y as x,c as R}from"./vue.979f7bee.js";import{_ as W}from"./ball1.5360312c.js";import{h as P}from"./moment.4bb6a643.js";import{_ as V}from"./go@2x.ee48f8c0.js";const O={class:"matchList-1"},q=["onClick"],A=["innerHTML"],B={key:0,class:"noData"},F=(a=>(w("data-v-6c0ab2be"),a=a(),S(),a))((()=>k("img",{class:"img_1",src:d},null,-1)));var N=p({props:{leagueList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(e){const s=e,t=C(),r=(a,e)=>{const s=new RegExp(a,"gi");return e.replace(s,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(e,n)=>{const c=g("van-image");return v(),y("div",O,[(v(!0),y(h,null,f(s.leagueList,((e,n)=>(v(),y("div",{key:n,class:"left1",onClick:a=>(async a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),t.push({path:`/sport/${a.gameType}`,query:{leagueId:a.id}})})(e)},[I(c,{class:"itemImg",fit:"contain",src:L(a)},null,8,["src"]),k("div",{class:"font_2",innerHTML:r(s.keyWords,e.name)},null,8,A)],8,q)))),128)),s.leagueList.length?_("",!0):(v(),y("div",B,[F,k("p",null,b(e.$t("user.noDataRelated")),1)]))])}}});N.__scopeId="data-v-6c0ab2be";const z=a=>(w("data-v-bee09cb8"),a=a(),S(),a),E={class:"matchList-1"},J=["onClick"],Y={class:"left3"},U={class:"itemImg"},X=["src"],Z=["src"],G={class:"center"},K=["innerHTML"],Q=$(" VS "),aa=["innerHTML"],ea={class:"center_1"},sa=z((()=>k("img",{class:"ball4",fit:"contain",src:W},null,-1))),ta={class:"right"},la={key:0,class:"noData"},ra=z((()=>k("img",{class:"img_1",src:d},null,-1)));var na=p({props:{gameList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(a){const s=a,t=C(),n=a=>a?P(a).format("MM/DD HH:mm"):"",c=a=>(console.log(a),a?`${r}${a}`:e),o=(a,e)=>{const s=new RegExp(a,"gi");return e.replace(s,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(a,e)=>{const r=g("van-image");return v(),y("div",E,[(v(!0),y(h,null,f(s.gameList,((a,e)=>(v(),y("div",{key:e,class:"left1 left2",onClick:e=>(async a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}});const e=JSON.stringify(a);t.push({path:"/home",query:{gidm:a.gidm,obj:e}})})(a)},[k("div",Y,[k("div",U,[k("img",{class:"itemImg-1",fit:"contain",src:c(a.homeLogo)},null,8,X),k("img",{class:"itemImg-2",fit:"contain",src:c(a.awayLogo)},null,8,Z)]),k("div",G,[k("div",null,[k("span",{innerHTML:o(s.keyWords,a.homeTeam)},null,8,K),Q,k("span",{innerHTML:o(s.keyWords,a.awayTeam)},null,8,aa)]),k("div",ea,[sa,k("span",null,b(n(a.gameDate)),1)])])]),k("div",ta,[I(r,{class:"goImg",fit:"contain",src:L(V)},null,8,["src"])])],8,J)))),128)),s.gameList.length?_("",!0):(v(),y("div",la,[ra,k("p",null,b(a.$t("user.noDataRelated")),1)]))])}}});na.__scopeId="data-v-bee09cb8";const ca={class:"search"},oa={class:"search_box"},ia={key:0,class:"content"},ua={key:0},ma={class:"font_1 font-2"},da={class:"historyList"},pa=["onClick"],ga={key:1,class:"hot-recommend"},va={class:"font_1"},ya={class:"hot-list"},ha=["onClick"],fa={class:"font_1"},ka={class:"content-list"},ba=["onClick"],_a={class:"left"},Ca={class:"font_2"},Ia={class:"right"},La={key:1,class:"matchList"},wa={class:"area-btn_1"};var Sa=p({setup(a){const e=C(),r=T({arr:n.getItem("searchHistory")||[]}),d=H(""),p=H(1),w=T({arr:[]}),S=T({arr:[]}),$=H(!1),W=T({arr:[]});M((async()=>{V(),l.dispatch("app/getAllSports")}));const P=D((()=>{const a=(l.state.app.sports||[]).filter((a=>!["SY","RB","COMBO","JC"].includes(a.gameType)&&a.gameCount));let e=[];if(a.length){e=[...a.map((a=>({value:a.gameType,gameType:a.gameType,gameCount:a.gameCount,name:"Sport"})))]}return e})),V=async()=>{const a={lang:localStorage.getItem("locale")||"zh-cn",gameType:""},e=await c(a)||{};200===e.code&&(W.arr=e.data)},O=async()=>{r.arr=[],n.setItem("searchHistory",r.arr)},q=a=>{d.value=a,A()},A=async()=>{$.value=!0,p.value=1,S.arr=[],w.arr=[];const a=await o({keywords:d.value});if(200!==a.code)return $.value=!1,i(a.msg);200===a.code&&(d.value&&(r.arr.includes(d.value)||(r.arr.unshift(d.value),n.setItem("searchHistory",r.arr.slice(0,100)),r.arr=n.getItem("searchHistory"))),$.value=!1,S.arr=a.data.gameInfo||[],w.arr=a.data.league||[])};return(a,n)=>{const c=g("van-image"),o=g("van-field"),i=g("van-cell-group"),C=g("van-divider"),T=g("van-loading");return v(),y("div",ca,[k("div",oa,[I(i,{inset:""},{default:j((()=>[I(o,{modelValue:d.value,"onUpdate:modelValue":[n[0]||(n[0]=a=>d.value=a),A],center:"",clearable:"",placeholder:a.$t("user.search")},{"left-icon":j((()=>[I(c,{class:"searchImg",fit:"contain",src:L(u)},null,8,["src"])])),_:1},8,["modelValue","placeholder"])])),_:1}),k("span",{class:"cancel",onClick:n[1]||(n[1]=a=>(l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),void e.push({path:"/home"})))},b(a.$t("user.cancellation")),1)]),d.value?(v(),y("div",La,[k("div",wa,[k("span",{class:x(1==p.value?"active":""),onClick:n[2]||(n[2]=a=>p.value=1)},b(a.$t("user.league")),3),k("span",{class:x(2==p.value?"active":""),onClick:n[3]||(n[3]=a=>p.value=2)},b(a.$t("user.competition")),3)]),$.value?(v(),R(T,{key:0,size:"24",type:"spinner",vertical:""})):_("",!0),1===p.value?(v(),R(N,{key:1,"league-list":L(w).arr,"key-words":d.value},null,8,["league-list","key-words"])):_("",!0),2===p.value?(v(),R(na,{key:2,"game-list":L(S).arr,"key-words":d.value},null,8,["game-list","key-words"])):_("",!0)])):(v(),y("div",ia,[L(r).arr.length?(v(),y("div",ua,[k("p",ma,[k("span",null,b(a.$t("user.SearchHistory")),1),k("img",{class:"img_3",src:s,alt:"",onClick:O})]),I(C),k("div",da,[(v(!0),y(h,null,f(L(r).arr,(a=>(v(),y("div",{key:a,class:"item"},[I(c,{class:"itemImg",fit:"contain",src:L(t)},null,8,["src"]),k("span",{class:"font_2",onClick:e=>q(a)},b(a),9,pa)])))),128))])])):_("",!0),L(W).arr.length?(v(),y("div",ga,[k("p",va,b(a.$t("user.hotSearch")),1),I(C),k("div",ya,[(v(!0),y(h,null,f(L(W).arr,(a=>(v(),y("span",{key:a,class:"item",onClick:e=>q(a.hotSearchName)},b(a.hotSearchName),9,ha)))),128))])])):_("",!0),k("p",fa,b(a.$t("user.recommend")),1),I(C),k("div",ka,[(v(!0),y(h,null,f(L(P),((s,t)=>(v(),y("div",{key:t,class:"detail",onClick:a=>(a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),e.push({path:`/sport/${a.gameType}`})})(s)},[k("div",_a,[I(m,{"icon-src":s.value,class:"itemImg"},null,8,["icon-src"]),k("span",Ca,b(a.$t(`user.sports.${s.gameType}`)),1)]),k("div",Ia,b(s.gameCount),1)],8,ba)))),128))])]))])}}});Sa.__scopeId="data-v-1ef579af";export{Sa as default};
