var a=Object.defineProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,t=(e,s,l)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l;import{s as n,a5 as i,W as o,b as u,d as m,M as r,a as c,r as v,E as p,o as d,R as g,P as y,q as b,U as f,u as h,x as _,a1 as w,F as j,Z as T,_ as x,y as C}from"./vue.995a3892.js";import{m as I}from"./index.47583908.js";import{u as M}from"./useMatch.b0dd12eb.js";import{u as O,_ as B}from"./index.358be425.js";import{s as H,N as L}from"./index.191deb0d.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang.31f7081d.js";const k={class:"team"},S={class:"team-header"},P={class:"league"},R={class:"date"},D={class:"team-box"},E={class:"team-player host"},F={class:"img-num"},G={type:4,alt:""},q=["innerHTML"],A={key:0,class:"icons"},U={class:"team-player away"},W={class:"img-num"},Z={type:5,alt:""},$={class:"bet-menu"},z=["onClick"],J={class:"title"},K={class:"bet-main"};var Q=n({setup(a){const n=i(),Q=o(),V=M(),{playGroupList:X,playBettingList:Y,findGroupById:aa}=O(),ea=u((()=>n.params.id)),sa=u((()=>H.state.app.showFixedBet)),la=m([{type:0,title:"投注",iconName:"live-bet"},{type:1,title:"数据",iconName:"live-data"}]),ta=m(0),na=m({}),ia=async()=>{const a=ea.value,n=(await I({gidm:a})).data||{};if(na.value=((a,n)=>{for(var i in n||(n={}))s.call(n,i)&&t(a,i,n[i]);if(e)for(var i of e(n))l.call(n,i)&&t(a,i,n[i]);return a})({},n),n.detail&&n.detail.length>0){const{game:a}=n.detail[0],e=a.gameInfo||{};na.value.gameInfo=e}H.commit("match/SET_MATCH_INFO",na.value)},oa=()=>{const{showtype:a,gidm:e}=na.value;"RB"==a&&Q.push(`/match/${e}`)};return r((()=>{ia()})),c((()=>{})),(a,e)=>{const s=v("SvgIcon"),l=p("img");return d(),g("div",{class:x(["bet-container",{"has-bet":h(sa)}])},[y("div",k,[y("div",S,[y("div",P,[b(s,{name:"live-football"}),y("span",null,f(na.value.leagueName),1)]),y("div",R,f(h(L)(na.value.gameDate,"MM-DD HH:mm")),1)]),y("div",D,[y("div",E,[y("div",F,[_(y("img",G,null,512),[[l,na.value.homeLogo]]),y("span",null,f(h(V).getScore(na.value,"H")),1)]),y("strong",null,f(na.value.homeTeam),1)]),y("div",{class:"team-score",onClick:oa},[y("span",{class:"default",innerHTML:h(V).showRBTime(na.value)},null,8,q),"RB"==na.value.showtype?(d(),g("span",A,[b(s,{name:"live-play"})])):w("",!0)]),y("div",U,[y("div",W,[y("span",null,f(h(V).getScore(na.value,"C")),1),_(y("img",Z,null,512),[[l,na.value.awayLogo]])]),y("strong",null,f(na.value.awayTeam),1)])])]),y("div",$,[(d(!0),g(j,null,T(la.value,((a,e)=>(d(),g("div",{class:x(["bet-menu__nav",{selected:ta.value===a.type}]),key:e,onClick:e=>(a=>{ta.value=a.type})(a)},[b(s,{name:a.iconName},null,8,["name"]),y("span",J,f(a.title),1)],10,z)))),128))]),y("div",K,[_(b(B,{"match-info":na.value,"group-list":h(X),"betting-list":h(Y),onTabChange:h(aa)},null,8,["match-info","group-list","betting-list","onTabChange"]),[[C,0===ta.value]]),_(b(N,null,null,512),[[C,1===ta.value]])])],2)}}});Q.__scopeId="data-v-42127e3a";export{Q as default};
