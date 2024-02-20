import{s as e,b as s,u as a,o as t,S as l,V as n,r as i,E as o,P as m,F as r,Z as u,x as c,q as p,a0 as d,B as g,c as v,_ as y,X as A,Y as f,d as k,e as h,j as b,O as R,R as S,U as I}from"./vue.95886b43.js";import{_ as T}from"./return@2x.f2a0d9ed.js";import{d as N,a as j,b as L,c as D,_ as w,e as O}from"./data4.7a4922c1.js";import{s as _,v as x,w as C,x as q,y as U,z as B,A as X,b as E,u as Z,F,o as G,G as H}from"./index.aa33a1e9.js";import{h as P}from"./moment.40bc58bf.js";const K={key:0,class:"img_1"},W={key:1,class:"img_1"},Y={key:2,class:"img_1"},Q={key:3,class:"img_1"},J={key:4,class:"img_1"};var z=e({setup(e){const i=s((()=>_.state.user.currency));return(e,s)=>"CNY"===a(i)?(t(),l("span",K,n("¥"))):"VNDK"===a(i)?(t(),l("span",W,n("₫(K)"),1)):"USDT"===a(i)?(t(),l("span",Y,n("T"))):"BRL"===a(i)?(t(),l("span",Q,n("R$"))):(t(),l("span",J,n(a(i)),1))}});z.__scopeId="data-v-bfe5e97a";const M={class:"match-title"},V={class:"title-left"},$={class:"cur-odds"},ee=g(" @"),se={class:"top2"},ae={class:"left"},te={class:"top-img"},le={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},ne={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},ie={class:"right"},oe={class:"one"},me=g(" @"),re={class:"one two"},ue={key:0},ce={key:1},pe={key:3,class:"img_1",src:C,alt:""},de={class:"team"},ge={key:0},ve={class:"team"},ye={class:"money-num"},Ae={class:"money-num-1"},fe={class:"money-num-money"},ke={class:"money-num-2"},he={key:0},be={key:1},Re={key:0},Se={key:0,style:{color:"#FF9A00"}},Ie={key:1,style:{color:"#FF9A00"}},Te={key:1},Ne={key:2,class:"num"},je={key:3,class:"num"};var Le=e({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,A=s((()=>_.state.user.teamNameList||[])),f=e=>3!==e.state&&5!==e.state||2===Number(e.cashoutType),k=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,h=e=>{if(A.value.length){const s=A.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(s,A)=>{const b=i("SportsIcon"),R=i("SvgIcon"),S=o("points"),I=o("img"),T=o("play");return t(),l("div",null,[m("div",M,[m("div",V,[m("div",null,n(e.item.parlayNum)+n(s.$t("user.session")),1),m("div",null,[(t(!0),l(r,null,u(e.item.betDTOList,((e,s)=>(t(),v(b,{key:s,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])]),m("div",$,[ee,c(m("span",null,null,512),[[S,e.item.sioRatio]])])]),(t(!0),l(r,null,u(a.item.betDTOList,((s,a)=>{return t(),l("div",{key:a},[m("div",se,[m("div",ae,[m("div",te,[c(m("img",le,null,512),[[I,s.homeLogo]]),c(m("img",ne,null,512),[[I,s.awayLogo]])])]),m("div",ie,[m("div",oe,[m("span",null,n((o=s.betItemLang,JSON.parse(o)[localStorage.getItem("locale")||"zh-cn"])),1),m("span",{class:y([(i=s.betResultDetail,"W"===i||"LW"===i?"color-2":"L"===i||"LL"===i?"color-3":"P"===i?"color-4":"")])},[me,c(m("span",null,null,512),[[S,s.ioRatio]])],2)]),m("div",re,[s.homeTeam&&s.awayTeam?c((t(),l("span",ue,null,512)),[[T,s]]):(t(),l("span",ce,"?")),m("span",null,[2===Number(e.item.cashoutType)?(t(),v(R,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(t(),v(R,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&k(s.betResultDetail)?(t(),v(R,{key:2,name:`user-${s.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(t(),l("img",pe))])]),m("div",de,[g(n(h(s).homeTeam)+" v "+n(h(s).awayTeam)+" ",1),s.resultScore?(t(),l("span",ge," ["+n(s.resultScore)+"] ",1)):d("",!0)]),m("div",ve,[p(b,{"icon-src":s.gameType,class:"ball-img"},null,8,["icon-src"]),m("span",null,n(h(s).leagueShortName),1)])])])]);var i,o})),128)),m("div",ye,[m("div",Ae,[m("span",null,n(s.$t("user.BettingAmount"))+":",1),m("span",fe,[p(z),c(m("span",null,null,512),[[S,e.item.gold]])])]),m("div",ke,[0===e.item.state||-1===e.item.state||1===e.item.state?(t(),l("span",he,n(s.$t("user.CompensableAmount"))+":",1)):f(e.item)?(t(),l("span",be,n(s.$t("user.practical"))+":",1)):d("",!0),m("span",null,[3!==e.item.state&&5!==e.item.state?(t(),l("span",Re,[-1===e.item.state?(t(),l("span",Se,n(s.$t("user.editPend")),1)):d("",!0),0===e.item.state?(t(),l("span",Ie,n(s.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),f(e.item)?(t(),l("span",Te,[p(z)])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(t(),l("span",Ne,[c(m("span",null,null,512),[[S,(N=e.item,x(N.gold,N.sioRatio))]])])):f(e.item)?(t(),l("span",je,[c(m("span",null,null,512),[[S,e.item.winGold]])])):d("",!0)])])])]);var N}}});Le.__scopeId="data-v-72471135";const De={class:"top"},we={class:"left"},Oe={class:"top-img"},_e={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},xe={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Ce={class:"right"},qe={class:"font_1"},Ue={key:0},Be={key:1},Xe={key:2,class:"color-1"},Ee={class:"league-name"},Ze={key:0,class:"font_2"},Fe={key:1,class:"font_2"},Ge={class:"top2"},He=(e=>(A("data-v-0e042bde"),e=e(),f(),e))((()=>m("div",{class:"left"},[m("img",{class:"img_1",src:B,alt:""})],-1))),Pe={class:"right"},Ke={class:"one"},We=g(" @"),Ye={class:"one two"},Qe={key:0},Je={key:1},ze={key:2},Me={key:3,class:"img_1",src:C,alt:""},Ve={class:"top3"},$e={class:"one"},es={class:"money-num-money"},ss={key:0},as={key:1},ts={key:2},ls=g("("),ns=g(")"),is={class:"one two"},os={key:0},ms={key:1},rs={key:0},us={key:0,style:{color:"#FF9A00"}},cs={key:1,style:{color:"#FF9A00"}},ps={key:1},ds={key:2,class:"num color-1"},gs={key:3,class:"color-1"};var vs=e({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,g=s((()=>_.state.user.teamNameList||[])),A=s((()=>_.state.user.championLangList||[])),f=(e,s)=>{if(Number(s.ioRatio)<0){let a=Math.abs(Number(s.ioRatio));return q(e.gold,a)}},k=(e,s)=>{if(Number(s.ioRatio)<0){let a=0,t=Math.abs(Number(s.ioRatio));return t>1&&(a=U(q(e.gold,t),e.gold)),t<1&&(a=U(q(e.gold,t),e.gold)),a}return x(e.gold,e.sioRatio)},h=(e,s)=>3!==e.state&&5!==e.state||"LL"===s.betResultDetail||2===Number(e.cashoutType),b=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,R=e=>{if(g.value.length){const s=g.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},S=e=>{if(A.value.length){const s=A.value.find((s=>s.ratioId===e));return s?s.ratioName:"?"}return"?"};return(s,g)=>{const A=i("SportsIcon"),I=i("SvgIcon"),T=o("img"),N=o("points"),j=o("play");return t(),l("div",null,[(t(!0),l(r,null,u(a.item.betDTOList,((a,i)=>{return t(),l("div",{key:i},[m("div",De,[m("div",we,[m("div",Oe,[c(m("img",_e,null,512),[[T,a.homeLogo]]),c(m("img",xe,null,512),[[T,a.awayLogo]])])]),m("div",Ce,[m("div",qe,[a.championType?(t(),l("span",Ue,n(s.$t("betting.champion")),1)):(t(),l("span",Be,n(R(a).homeTeam)+" v "+n(R(a).awayTeam),1)),a.resultScore?(t(),l("span",Xe," ["+n(a.resultScore)+"]",1)):d("",!0)]),m("div",Ee,[p(A,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),a.championType?(t(),l("div",Ze,n(S(a.systemId)),1)):(t(),l("div",Fe,n(R(a).leagueShortName),1))])])]),m("div",Ge,[He,m("div",Pe,[m("div",Ke,[m("span",null,n((r=a.betItemLang,JSON.parse(r)[localStorage.getItem("locale")||"zh-cn"])),1),m("span",{class:y([(o=a.betResultDetail,"W"===o||"LW"===o?"color-2":"L"===o||"LL"===o?"color-3":"P"===o?"color-4":"")])},[We,c(m("span",null,null,512),[[N,a.ioRatio]])],2)]),m("div",Ye,[a.championType?(t(),l("span",Qe,n(S(a.gameId)),1)):a.homeTeam&&a.awayTeam?c((t(),l("span",Je,null,512)),[[j,a]]):(t(),l("span",ze,"?")),m("span",null,[2===Number(e.item.cashoutType)?(t(),v(I,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(t(),v(I,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&b(a.betResultDetail)?(t(),v(I,{key:2,name:`user-${a.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(t(),l("img",Me))])])])]),m("div",Ve,[m("div",$e,[m("span",null,n(s.$t("user.BettingAmount")),1),m("div",es,[p(z),Number(a.ioRatio)>0?c((t(),l("span",ss,null,512)),[[N,e.item.gold]]):d("",!0),Number(a.ioRatio)<0?c((t(),l("span",as,null,512)),[[N,f(e.item,a)]]):d("",!0),Number(a.ioRatio)<0?(t(),l("span",ts,[ls,c(m("span",null,null,512),[[N,e.item.gold]]),ns])):d("",!0)])]),m("div",is,[0===e.item.state||-1===e.item.state||1===e.item.state?(t(),l("span",os,n(s.$t("user.CompensableAmount"))+":",1)):h(e.item,a)?(t(),l("span",ms,n(s.$t("user.practical"))+":",1)):d("",!0),m("div",null,[3!==e.item.state&&5!==e.item.state?(t(),l("span",rs,[-1===e.item.state?(t(),l("span",us,n(s.$t("user.editPend")),1)):d("",!0),0==e.item.state?(t(),l("span",cs,n(s.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),h(e.item,a)?(t(),l("span",ps,[p(z)])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(t(),l("span",ds,[c(m("span",null,null,512),[[N,k(e.item,a)]])])):h(e.item,a)?(t(),l("span",gs,[c(m("span",null,null,512),[[N,e.item.winGold]])])):d("",!0)])])])]);var o,r})),128))])}}});vs.__scopeId="data-v-0e042bde";const ys={class:"top-1 top-2"},As={class:"left-text"},fs=(e=>(A("data-v-1aa295b6"),e=e(),f(),e))((()=>m("img",{class:"img_1",src:"data:image/png;base64,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",alt:""},null,-1))),ks={class:"right"},hs={key:0,class:"img_1",src:"/assets/win.f595b158.svg",alt:""},bs={key:1,class:"img_1",src:"/assets/fail.833099be.svg",alt:""},Rs={key:2,class:"img_1",src:"/assets/P.97f2ec8e.svg",alt:""},Ss={key:3,class:"img_1",src:C,alt:""},Is={class:"top-3"},Ts={class:"img_1",type:3,style:{"object-fit":"cover"}},Ns={class:"name"},js={class:"name-2"},Ls={class:"right"};var Ds=e({props:{peopleInfo:{type:Object,default:()=>{}}},setup(e){const g=e,y=s((()=>_.state.user.userInfo)),A=k(""),f=k(""),S=k(!1),I=k(!1),T=h({arr:[]});b((()=>{f.value=P().valueOf();A.value=f.value-7776e6}));let N=0;const j=async()=>{N++;const e={orderState:"1",page:N,pageSize:5,beginTime:A.value,endTime:f.value},s=await X(e);if(200!==s.code)return S.value=!1,I.value=!0,E(s.msg);const a=s.data;if(200===s.code){a.forEach((e=>{T.arr.push(e)}));const e=[],s=[];T.arr.map((a=>{a.betDTOList.map((a=>{const{championType:t,systemId:l,gidm:n}=a;t&&s.push(n),e.push(l)}))})),_.dispatch("user/getMoreTeamList",e.join()),_.dispatch("user/getChampionLang",s.join()),S.value=!1,I.value=!a.length}};return(e,s)=>{const A=i("van-list"),f=o("img");return t(),l("div",null,[m("div",ys,[m("div",As,[fs,m("span",null,n(e.$t("user.betForm")),1)]),m("div",ks,[m("span",null,n(e.$t("user.RecentAchievements"))+":",1),(t(!0),l(r,null,u(a(T).arr.slice(0,5),((e,s)=>(t(),l("span",{key:s,class:"img_1"},[2===e.state?(t(),l("img",hs)):3===e.state?(t(),l("img",bs)):4===e.state?(t(),l("img",Rs)):(t(),l("img",Ss))])))),128))])]),p(A,{loading:S.value,"onUpdate:loading":s[1]||(s[1]=e=>S.value=e),finished:I.value,"finished-text":e.$t("live.noMore"),class:"dataList","loading-text":e.$t("user.loadingText"),onLoad:j},{default:R((()=>[(t(!0),l(r,null,u(a(T).arr,((i,o)=>(t(),l("div",{key:o},[m("div",Is,[m("div",{class:"left",onClick:s[0]||(s[0]=e=>{return s="/elseInfo",void console.log(s,"他人未开放===");var s})},[c(m("img",Ts,null,512),[[f,g.peopleInfo.headImg]]),m("div",Ns,[m("div",null,n(a(y).nickName),1),m("div",js,n(a(y).loginName),1)])]),m("div",Ls,n(e.$t("user.end")),1)]),1===Number(i.parlayNum)?(t(),v(vs,{key:0,item:i,class:"item"},null,8,["item"])):d("",!0),1!==Number(i.parlayNum)?(t(),v(Le,{key:1,item:i,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])}}});Ds.__scopeId="data-v-1aa295b6";const ws=e=>(A("data-v-19308fa9"),e=e(),f(),e),Os={class:"userInfo"},_s={class:"nav-bar"},xs={class:"left"},Cs={class:"center"},qs={class:"left"},Us={class:"user-info"},Bs={class:"img_1",type:3,style:{"object-fit":"cover"}},Xs={class:"user-right"},Es={class:"user-1"},Zs=ws((()=>m("img",{class:"img_1",src:"/assets/ball.676aeef0.svg",alt:""},null,-1))),Fs={class:"user-2"},Gs={class:"user-3"},Hs=ws((()=>m("img",{class:"img_1",src:"/assets/star.0e40d975.svg",alt:""},null,-1))),Ps={class:"user-4"},Ks=ws((()=>m("div",{class:"center"},null,-1))),Ws={class:"content"},Ys={class:"top-1"},Qs=ws((()=>m("img",{class:"img_1",src:O,alt:""},null,-1))),Js={class:"circle"},zs={class:"left"},Ms=["src"],Vs={class:"right"},$s={key:0},ea={key:1};var sa=e({setup(e){const i=S(),d=s((()=>_.state.user.userInfo)),g=s((()=>_.state.user.peopleInfo)),v=s((()=>_.state.app.theme)),A=k({}),f=k(""),R=s((()=>"blue"===v.value)),{t:O}=Z(),x=e=>{e.includes("selfFocus")||i.push("/user"+e)},C=k(O("user.PersonalProfile")),q=h({arr:[{num:0,name:O("user.winRate"),img:N},{num:0,name:O("user.profit"),img:j},{num:0,name:O("user.BetAmount"),img:L},{num:0,name:O("user.refund"),img:D}]});b((()=>{_.dispatch("user/getAccountInfo"),U()}));const U=async()=>{const e=await F({type:"3",lastDayCount:90});if(200!==e.code)return E(e.msg);A.value=e.data,f.value=100*A.value.winRatio||0,q.arr[0].num=String(100*A.value.winRatio).replace(/^(.*\..{2}).*$/,"$1")+"%",q.arr[1].num=A.value.winOrderAmount-A.value.orderAmount||0,q.arr[2].num=A.value.orderAmount||0,q.arr[3].num=A.value.winOrderAmount||0};return(e,s)=>{const v=o("img");return t(),l("div",Os,[m("div",{class:y(["user",{"user-blue":a(R)}])},[m("div",_s,[m("span",xs,[m("img",{class:"img_1",src:T,alt:"",onClick:s[0]||(s[0]=e=>{i.push("/home")})})]),m("span",Cs,n(C.value),1),m("span",qs,[m("img",{class:"img_1",src:w,alt:"",onClick:s[1]||(s[1]=e=>x("/editUser"))})])]),m("div",Us,[m("div",{class:"user-img",onClick:s[2]||(s[2]=e=>x("/editImg"))},[c(m("img",Bs,null,512),[[v,a(g).headImg]])]),m("div",Xs,[m("div",Es,[Zs,m("span",null,n(a(g).nickName),1)]),m("div",Fs,n(a(d).loginName||""),1),m("div",Gs,[Hs,m("span",null,n(e.$t("user.RegistrationTime"))+" "+n(a(G)(a(d).createTime)),1)]),m("div",Ps,[m("div",{class:"left",onClick:s[3]||(s[3]=e=>x("/selfFocus?num=1"))},[m("span",null,n(a(g).followNum),1),m("span",null,n(e.$t("user.follow")),1)]),Ks,m("div",{class:"left right",onClick:s[4]||(s[4]=e=>x("/selfFocus?num=2"))},[m("span",null,n(a(g).fansCount),1),m("span",null,n(e.$t("user.fans")),1)])])])]),m("div",{class:"note",onClick:s[5]||(s[5]=I((e=>x("/editUser")),["stop"]))},n(a(g).profiles),1)],2),m("div",Ws,[m("div",Ys,[Qs,m("span",null,n(e.$t("user.text8",{num:90})),1)]),m("div",Js,[(t(!0),l(r,null,u(a(q).arr,((e,s)=>(t(),l("div",{key:s,class:"num-1"},[m("div",zs,[m("img",{class:"img_1",src:e.img,alt:""},null,8,Ms)]),m("div",Vs,[0===s?(t(),l("div",$s,n(e.num),1)):(t(),l("div",ea,n(a(H)(e.num)),1)),m("div",null,n(e.name),1)])])))),128))]),p(Ds,{"people-info":a(g)},null,8,["people-info"])])])}}});sa.__scopeId="data-v-19308fa9";export{sa as default};
