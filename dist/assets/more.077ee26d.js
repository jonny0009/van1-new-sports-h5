var a=Object.defineProperty,e=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(e,l,s)=>l in e?a(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s;import{s as i,b as n,a2 as o,R as m,d as u,M as r,a as c,r as v,E as p,o as d,S as g,P as y,q as b,V as f,u as h,x as _,a0 as T,F as j,Z as w,_ as E,y as I}from"./vue.6c3ce548.js";import{u as B,s as M,T as x}from"./index.74d1161b.js";import{m as S}from"./index.0c46c1b9.js";import{u as C}from"./useMatch.d4515efe.js";import{s as L}from"./sportBg.b662bc9a.js";import{u as N,_ as O}from"./index.e969d091.js";import{_ as H}from"./index.vue_vue_type_script_setup_true_lang.b43921aa.js";const R={class:"team"},k=["src"],D={class:"team-dim"},F={class:"team-header"},P={class:"league"},q={class:"date"},G={class:"team-box"},A={class:"team-player host"},V={class:"img-num"},Z={type:4,alt:""},$=["innerHTML"],z={key:0,class:"icons"},J={class:"team-player away"},K={class:"img-num"},Q={type:5,alt:""},U={class:"bet-menu"},W=["onClick"],X={class:"title"},Y={class:"bet-main"};var aa=i({setup(a){const i=n((()=>ea.query.gameType))||"FT",{t:aa}=B(),ea=o(),la=m(),sa=C(),{findGroupById:ta,playGroupBetList:ia,playBettingList:na,apiLoading:oa}=N(),ma=n((()=>ea.params.id)),ua=n((()=>M.state.app.showFixedBet)),ra=u([{type:0,title:aa("live.bet"),iconName:"live-bet"},{type:1,title:aa("live.dataBase"),iconName:"live-data"}]),ca=u(0),va=u({}),pa=async()=>{const a=ma.value,i=(await S({gidm:a})).data||{};if(va.value=((a,i)=>{for(var n in i||(i={}))l.call(i,n)&&t(a,n,i[n]);if(e)for(var n of e(i))s.call(i,n)&&t(a,n,i[n]);return a})({},i),i.detail&&i.detail.length>0){const{game:a}=i.detail[0],e=a.gameInfo||{};va.value.gameInfo=e}M.commit("match/SET_MATCH_INFO",va.value)},da=()=>{const{showtype:a,gidm:e}=va.value;"RB"===a&&la.push(`/match/${e}`)};let ga=null;const ya=()=>{ga&&(clearInterval(ga),ga=null,M.commit("match/SET_NEED_TIMER",!1))};return r((()=>{pa(),ya(),ga=setInterval((()=>{pa(),M.commit("match/SET_NEED_TIMER",!0)}),5e3)})),c((()=>{ya()})),(a,e)=>{const l=v("SvgIcon"),s=p("img");return d(),g("div",{class:E(["bet-container",{"has-bet":h(ua)}])},[y("div",R,[y("img",{class:"bannerBg-1",fit:"fill",src:L()[i.value]},null,8,k),y("div",D,[y("div",F,[y("div",P,[b(l,{name:"live-football"}),y("span",null,f(va.value.leagueName),1)]),y("div",q,f(h(x)(va.value.gameDate,"MM-DD HH:mm")),1)]),y("div",G,[y("div",A,[y("div",V,[_(y("img",Z,null,512),[[s,va.value.homeLogo]]),y("span",null,f(h(sa).getScore(va.value,"H")),1)]),y("strong",null,f(va.value.homeTeam),1)]),y("div",{class:"team-score",onClick:da},[y("span",{class:"default",innerHTML:h(sa).showRBTime(va.value)},null,8,$),"RB"==va.value.showtype?(d(),g("span",z,[b(l,{name:"live-play"})])):T("",!0)]),y("div",J,[y("div",K,[y("span",null,f(h(sa).getScore(va.value,"C")),1),_(y("img",Q,null,512),[[s,va.value.awayLogo]])]),y("strong",null,f(va.value.awayTeam),1)])])])]),y("div",U,[(d(!0),g(j,null,w(ra.value,((a,e)=>(d(),g("div",{key:e,class:E(["bet-menu__nav",{selected:ca.value===a.type}]),onClick:e=>(a=>{ca.value=a.type})(a)},[b(l,{name:a.iconName},null,8,["name"]),y("span",X,f(a.title),1)],10,W)))),128))]),y("div",Y,[_(b(O,{"match-info":va.value,"group-list":h(ia),"betting-list":h(na),loading:h(oa),onTabChange:h(ta)},null,8,["match-info","group-list","betting-list","loading","onTabChange"]),[[I,0===ca.value]]),_(b(H,null,null,512),[[I,1===ca.value]])])],2)}}});aa.__scopeId="data-v-2d832ad0";export{aa as default};
