var a=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;import{s as n,a5 as i,R as o,b as u,d as m,M as c,a as r,r as v,E as d,o as p,S as g,P as y,q as b,V as h,u as f,x as _,a0 as T,F as w,Z as E,_ as I,y as j}from"./vue.7b2d67a6.js";import{u as L,s as M,S}from"./index.78157938.js";import{m as x}from"./index.5895925e.js";import{u as B}from"./useMatch.8de9125a.js";import{u as C,_ as N}from"./index.d65cde30.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang.1751c178.js";const H={class:"team"},R={class:"team-header"},k={class:"league"},D={class:"date"},P={class:"team-box"},F={class:"team-player host"},G={class:"img-num"},q={type:4,alt:""},A=["innerHTML"],V={key:0,class:"icons"},Z={class:"team-player away"},$={class:"img-num"},z={type:5,alt:""},J={class:"bet-menu"},K=["onClick"],Q={class:"title"},U={class:"bet-main"};var W=n({setup(a){const{t:n}=L(),W=i(),X=o(),Y=B(),{findGroupById:aa,playGroupBetList:ea,playBettingList:ta,apiLoading:la}=C(),sa=u((()=>W.params.id)),na=u((()=>M.state.app.showFixedBet)),ia=m([{type:0,title:n("live.bet"),iconName:"live-bet"},{type:1,title:n("live.dataBase"),iconName:"live-data"}]),oa=m(0),ua=m({});let ma=m(!0);const ca=async()=>{const a=sa.value,n=await x({gidm:a}),i=n.data||{};if(n.data||(ma.value=!1),ua.value=((a,n)=>{for(var i in n||(n={}))t.call(n,i)&&s(a,i,n[i]);if(e)for(var i of e(n))l.call(n,i)&&s(a,i,n[i]);return a})({},i),i.detail&&i.detail.length>0){const{game:a}=i.detail[0],e=a.gameInfo||{};ua.value.gameInfo=e}ma.value=!1,M.commit("match/SET_MATCH_INFO",ua.value)},ra=()=>{const{showtype:a,gidm:e}=ua.value;"RB"==a&&X.push(`/match/${e}`)};let va=null;const da=()=>{va&&(clearInterval(va),va=null,M.commit("match/SET_NEED_TIMER",!1))};return c((()=>{ca(),da(),va=setInterval((()=>{ca(),M.commit("match/SET_NEED_TIMER",!0)}),5e3)})),r((()=>{da()})),(a,e)=>{const t=v("SvgIcon"),l=d("img");return p(),g("div",{class:I(["bet-container",{"has-bet":f(na)}])},[y("div",H,[y("div",R,[y("div",k,[b(t,{name:"live-football"}),y("span",null,h(ua.value.leagueName),1)]),y("div",D,h(f(S)(ua.value.gameDate,"MM-DD HH:mm")),1)]),y("div",P,[y("div",F,[y("div",G,[_(y("img",q,null,512),[[l,ua.value.homeLogo]]),y("span",null,h(f(Y).getScore(ua.value,"H")),1)]),y("strong",null,h(ua.value.homeTeam),1)]),y("div",{class:"team-score",onClick:ra},[y("span",{class:"default",innerHTML:f(Y).showRBTime(ua.value)},null,8,A),"RB"==ua.value.showtype?(p(),g("span",V,[b(t,{name:"live-play"})])):T("",!0)]),y("div",Z,[y("div",$,[y("span",null,h(f(Y).getScore(ua.value,"C")),1),_(y("img",z,null,512),[[l,ua.value.awayLogo]])]),y("strong",null,h(ua.value.awayTeam),1)])])]),y("div",J,[(p(!0),g(w,null,E(ia.value,((a,e)=>(p(),g("div",{key:e,class:I(["bet-menu__nav",{selected:oa.value===a.type}]),onClick:e=>(a=>{oa.value=a.type})(a)},[b(t,{name:a.iconName},null,8,["name"]),y("span",Q,h(a.title),1)],10,K)))),128))]),y("div",U,[_(b(N,{"match-info":ua.value,"group-list":f(ea),"betting-list":f(ta),loading:f(la),matchLoading:f(ma),onTabChange:f(aa)},null,8,["match-info","group-list","betting-list","loading","matchLoading","onTabChange"]),[[j,0===oa.value]]),_(b(O,null,null,512),[[j,1===oa.value]])])],2)}}});W.__scopeId="data-v-a864e960";export{W as default};
