import{b as a,a as s,_ as e,t}from"./del.37a4bdf7.js";import{s as l,I as r,l as n,h as c,r as i,b as o,e as u,_ as m}from"./index.7b1b5d1c.js";import{_ as d}from"./noData.9752ce41.js";import{s as p,r as g,o as v,R as y,F as h,Z as f,a2 as k,V as _,q as b,u as C,P as I,W as L,X as w,S,B as T,e as $,d as H,j as M,b as j,O as D,Y as x,c as W}from"./vue.93da156d.js";import{_ as P}from"./ball1.4407139a.js";import{h as V}from"./moment.9709ab41.js";import{_ as O}from"./go@2x.e2c69132.js";const R=a=>(L("data-v-2f63db3a"),a=a(),w(),a),q={class:"matchList-1"},A=["onClick"],B=["innerHTML"],F={key:0,class:"noData"},N=[R((()=>I("img",{class:"img_1",src:d},null,-1))),R((()=>I("p",null," 未查询到相关数据 ",-1)))];var z=p({props:{leagueList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(s){const e=s,t=_(),r=(a,s)=>{const e=new RegExp(a,"gi");return s.replace(e,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(s,n)=>{const c=g("van-image");return v(),y("div",q,[(v(!0),y(h,null,f(e.leagueList,((s,n)=>(v(),y("div",{key:n,class:"left1",onClick:a=>(async a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),t.push({path:`/sport/${a.gameType}`,query:{leagueId:a.id}})})(s)},[b(c,{class:"itemImg",fit:"contain",src:C(a)},null,8,["src"]),I("div",{class:"font_2",innerHTML:r(e.keyWords,s.name)},null,8,B)],8,A)))),128)),e.leagueList.length?k("",!0):(v(),y("div",F,N))])}}});z.__scopeId="data-v-2f63db3a";const E=a=>(L("data-v-0feebc92"),a=a(),w(),a),J={class:"matchList-1"},Y=["onClick"],U={class:"left3"},X={class:"itemImg"},Z=["src"],G=["src"],K={class:"center"},Q=["innerHTML"],aa=T(" VS "),sa=["innerHTML"],ea={class:"center_1"},ta=E((()=>I("img",{class:"ball4",fit:"contain",src:P},null,-1))),la={class:"right"},ra={key:0,class:"noData"},na=[E((()=>I("img",{class:"img_1",src:d},null,-1))),E((()=>I("p",null," 未查询到相关数据 ",-1)))];var ca=p({props:{gameList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(a){const e=a,t=_(),n=a=>a?V(a).format("MM/DD HH:mm"):"",c=a=>(console.log(a),a?`${r}${a}`:s),i=(a,s)=>{const e=new RegExp(a,"gi");return s.replace(e,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(a,s)=>{const r=g("van-image");return v(),y("div",J,[(v(!0),y(h,null,f(e.gameList,((a,s)=>(v(),y("div",{key:s,class:"left1 left2",onClick:s=>(async a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}});const s=JSON.stringify(a);t.push({path:"/home",query:{gidm:a.gidm,obj:s}})})(a)},[I("div",U,[I("div",X,[I("img",{class:"itemImg-1",fit:"contain",src:c(a.homeLogo)},null,8,Z),I("img",{class:"itemImg-2",fit:"contain",src:c(a.awayLogo)},null,8,G)]),I("div",K,[I("div",null,[I("span",{innerHTML:i(e.keyWords,a.homeTeam)},null,8,Q),aa,I("span",{innerHTML:i(e.keyWords,a.awayTeam)},null,8,sa)]),I("div",ea,[ta,I("span",null,S(n(a.gameDate)),1)])])]),I("div",la,[b(r,{class:"goImg",fit:"contain",src:C(O)},null,8,["src"])])],8,Y)))),128)),e.gameList.length?k("",!0):(v(),y("div",ra,na))])}}});ca.__scopeId="data-v-0feebc92";const ia={class:"search"},oa={class:"search_box"},ua={key:0,class:"content"},ma={key:0},da={class:"font_1 font-2"},pa={class:"historyList"},ga=["onClick"],va={key:1,class:"hot-recommend"},ya={class:"font_1"},ha={class:"hot-list"},fa=["onClick"],ka={class:"font_1"},_a={class:"content-list"},ba=["onClick"],Ca={class:"left"},Ia={class:"font_2"},La={class:"right"},wa={key:1,class:"matchList"},Sa={class:"area-btn_1"};var Ta=p({setup(a){const s=_(),r=$({arr:n.getItem("searchHistory")||[]}),d=H(""),p=H(1),L=$({arr:[]}),w=$({arr:[]}),T=H(!1),P=$({arr:[]});M((async()=>{O(),l.dispatch("app/getAllSports")}));const V=j((()=>{const a=(l.state.app.sports||[]).filter((a=>!["SY","RB","COMBO","JC"].includes(a.gameType)&&a.gameCount));let s=[];if(a.length){s=[...a.map((a=>({value:a.gameType,gameType:a.gameType,gameCount:a.gameCount,name:"Sport"})))]}return s})),O=async()=>{const a={lang:localStorage.getItem("locale")||"zh-cn",gameType:""},s=await c(a)||{};200===s.code&&(P.arr=s.data)},R=async()=>{r.arr=[],n.setItem("searchHistory",r.arr)},q=a=>{d.value=a,A()},A=async()=>{T.value=!0,p.value=1,w.arr=[],L.arr=[];const a=await i({keywords:d.value});if(200!==a.code)return T.value=!1,o(a.msg);200===a.code&&(d.value&&(r.arr.includes(d.value)||(r.arr.unshift(d.value),n.setItem("searchHistory",r.arr.slice(0,6)),r.arr=n.getItem("searchHistory"))),T.value=!1,w.arr=a.data.gameInfo||[],L.arr=a.data.league||[])};return(a,n)=>{const c=g("van-image"),i=g("van-field"),o=g("van-cell-group"),_=g("van-divider"),$=g("van-loading");return v(),y("div",ia,[I("div",oa,[b(o,{inset:""},{default:D((()=>[b(i,{modelValue:d.value,"onUpdate:modelValue":[n[0]||(n[0]=a=>d.value=a),A],center:"",clearable:"",placeholder:a.$t("user.search")},{"left-icon":D((()=>[b(c,{class:"searchImg",fit:"contain",src:C(u)},null,8,["src"])])),_:1},8,["modelValue","placeholder"])])),_:1}),I("span",{class:"cancel",onClick:n[1]||(n[1]=a=>(l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),void s.push({path:"/home"})))},S(a.$t("user.cancellation")),1)]),d.value?(v(),y("div",wa,[I("div",Sa,[I("span",{class:x(1==p.value?"active":""),onClick:n[2]||(n[2]=a=>p.value=1)},S(a.$t("user.league")),3),I("span",{class:x(2==p.value?"active":""),onClick:n[3]||(n[3]=a=>p.value=2)},S(a.$t("user.competition")),3)]),T.value?(v(),W($,{key:0,size:"24",type:"spinner",vertical:""})):k("",!0),1===p.value?(v(),W(z,{key:1,"league-list":C(L).arr,"key-words":d.value},null,8,["league-list","key-words"])):k("",!0),2===p.value?(v(),W(ca,{key:2,"game-list":C(w).arr,"key-words":d.value},null,8,["game-list","key-words"])):k("",!0)])):(v(),y("div",ua,[C(r).arr.length?(v(),y("div",ma,[I("p",da,[I("span",null,S(a.$t("user.SearchHistory")),1),I("img",{class:"img_3",src:e,alt:"",onClick:R})]),b(_),I("div",pa,[(v(!0),y(h,null,f(C(r).arr,(a=>(v(),y("div",{key:a,class:"item"},[b(c,{class:"itemImg",fit:"contain",src:C(t)},null,8,["src"]),I("span",{class:"font_2",onClick:s=>q(a)},S(a),9,ga)])))),128))])])):k("",!0),C(P).arr.length?(v(),y("div",va,[I("p",ya,S(a.$t("user.hotSearch")),1),b(_),I("div",ha,[(v(!0),y(h,null,f(C(P).arr,(a=>(v(),y("span",{key:a,class:"item",onClick:s=>q(a.hotSearchName)},S(a.hotSearchName),9,fa)))),128))])])):k("",!0),I("p",ka,S(a.$t("user.recommend")),1),b(_),I("div",_a,[(v(!0),y(h,null,f(C(V),((e,t)=>(v(),y("div",{key:t,class:"detail",onClick:a=>(a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),s.push({path:`/sport/${a.gameType}`})})(e)},[I("div",Ca,[b(m,{"icon-src":e.value,class:"itemImg"},null,8,["icon-src"]),I("span",Ia,S(a.$t(`user.sports.${e.gameType}`)),1)]),I("div",La,S(e.gameCount),1)],8,ba)))),128))])]))])}}});Ta.__scopeId="data-v-4de4269d";export{Ta as default};
