import{s as e,b as s,u as a,o as t,S as l,V as n,r as i,E as o,P as m,F as r,Z as u,x as c,q as p,a0 as d,B as g,c as v,_ as y,X as A,Y as f,d as k,e as h,j as b,O as R,R as S,U as I}from"./vue.6c3ce548.js";import{_ as T}from"./return@2x.f2a0d9ed.js";import{d as N,a as j,b as L,c as D,_ as w,e as O}from"./data4.7a4922c1.js";import{s as _,x as C,y as q,g as x,z as B,A as U,B as X,C as E,b as H,u as Z,H as P,q as F,J as G}from"./index.2d1548f3.js";import{h as K}from"./moment.40bc58bf.js";const W={key:0,class:"img_1"},Y={key:1,class:"img_1"},J={key:2,class:"img_1"},Q={key:3,class:"img_1"},M={key:4,class:"img_1"};var z=e({setup(e){const i=s((()=>_.state.user.currency));return(e,s)=>"CNY"===a(i)?(t(),l("span",W,n("¥"))):"VNDK"===a(i)?(t(),l("span",Y,n("₫(K)"),1)):"USDT"===a(i)?(t(),l("span",J,n("T"))):"BRL"===a(i)?(t(),l("span",Q,n("R$"))):(t(),l("span",M,n(a(i)),1))}});z.__scopeId="data-v-bfe5e97a";const V={class:"match-title"},$={class:"title-left"},ee={class:"cur-odds"},se=g(" @"),ae={class:"top2"},te={class:"left"},le={class:"top-img"},ne={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},ie={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},oe={class:"right"},me={class:"one"},re=g(" @"),ue={class:"one two"},ce={key:0},pe={key:1},de={key:3,class:"img_1",src:q,alt:""},ge={class:"team"},ve={key:0},ye={class:"team"},Ae={class:"money-num"},fe={class:"money-num-1"},ke={class:"money-num-money"},he={class:"money-num-2"},be={key:0},Re={key:1},Se={key:0},Ie={key:0,style:{color:"#FF9A00"}},Te={key:1,style:{color:"#FF9A00"}},Ne={key:1},je={key:2,class:"num"},Le={key:3,class:"num"};var De=e({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,A=s((()=>_.state.user.teamNameList||[])),f=e=>3!==e.state&&5!==e.state||2===Number(e.cashoutType),k=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,h=e=>{if(A.value.length){const s=A.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(s,A)=>{const b=i("SportsIcon"),R=i("SvgIcon"),S=o("points"),I=o("img"),T=o("play");return t(),l("div",null,[m("div",V,[m("div",$,[m("div",null,n(e.item.parlayNum)+n(s.$t("user.session")),1),m("div",null,[(t(!0),l(r,null,u(e.item.betDTOList,((e,s)=>(t(),v(b,{key:s,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])]),m("div",ee,[se,c(m("span",null,null,512),[[S,e.item.sioRatio]])])]),(t(!0),l(r,null,u(a.item.betDTOList,((s,a)=>{return t(),l("div",{key:a},[m("div",ae,[m("div",te,[m("div",le,[c(m("img",ne,null,512),[[I,s.homeLogo]]),c(m("img",ie,null,512),[[I,s.awayLogo]])])]),m("div",oe,[m("div",me,[m("span",null,n((o=s.betItemLang,JSON.parse(o)[localStorage.getItem("locale")||x()])),1),m("span",{class:y([(i=s.betResultDetail,"W"===i||"LW"===i?"color-2":"L"===i||"LL"===i?"color-3":"P"===i?"color-4":"")])},[re,c(m("span",null,null,512),[[S,s.ioRatio]])],2)]),m("div",ue,[s.homeTeam&&s.awayTeam?c((t(),l("span",ce,null,512)),[[T,s]]):(t(),l("span",pe,"?")),m("span",null,[2===Number(e.item.cashoutType)?(t(),v(R,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(t(),v(R,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&k(s.betResultDetail)?(t(),v(R,{key:2,name:`user-${s.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(t(),l("img",de))])]),m("div",ge,[g(n(h(s).homeTeam)+" v "+n(h(s).awayTeam)+" ",1),s.resultScore?(t(),l("span",ve," ["+n(s.resultScore)+"] ",1)):d("",!0)]),m("div",ye,[p(b,{"icon-src":s.gameType,class:"ball-img"},null,8,["icon-src"]),m("span",null,n(h(s).leagueShortName),1)])])])]);var i,o})),128)),m("div",Ae,[m("div",fe,[m("span",null,n(s.$t("user.BettingAmount"))+":",1),m("span",ke,[p(z),c(m("span",null,null,512),[[S,e.item.gold]])])]),m("div",he,[0===e.item.state||-1===e.item.state||1===e.item.state?(t(),l("span",be,n(s.$t("user.CompensableAmount"))+":",1)):f(e.item)?(t(),l("span",Re,n(s.$t("user.practical"))+":",1)):d("",!0),m("span",null,[3!==e.item.state&&5!==e.item.state?(t(),l("span",Se,[-1===e.item.state?(t(),l("span",Ie,n(s.$t("user.editPend")),1)):d("",!0),0===e.item.state?(t(),l("span",Te,n(s.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),f(e.item)?(t(),l("span",Ne,[p(z)])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(t(),l("span",je,[c(m("span",null,null,512),[[S,(N=e.item,C(N.gold,N.sioRatio))]])])):f(e.item)?(t(),l("span",Le,[c(m("span",null,null,512),[[S,e.item.winGold]])])):d("",!0)])])])]);var N}}});De.__scopeId="data-v-21c6d81b";const we={class:"top"},Oe={class:"left"},_e={class:"top-img"},Ce={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},qe={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},xe={class:"right"},Be={class:"font_1"},Ue={key:0},Xe={key:1},Ee={key:2,class:"color-1"},He={class:"league-name"},Ze={key:0,class:"font_2"},Pe={key:1,class:"font_2"},Fe={class:"top2"},Ge=(e=>(A("data-v-470d78d4"),e=e(),f(),e))((()=>m("div",{class:"left"},[m("img",{class:"img_1",src:X,alt:""})],-1))),Ke={class:"right"},We={class:"one"},Ye=g(" @"),Je={class:"one two"},Qe={key:0},Me={key:1},ze={key:2},Ve={key:3,class:"img_1",src:q,alt:""},$e={class:"top3"},es={class:"one"},ss={class:"money-num-money"},as={key:0},ts={key:1},ls={key:2},ns=g("("),is=g(")"),os={class:"one two"},ms={key:0},rs={key:1},us={key:0},cs={key:0,style:{color:"#FF9A00"}},ps={key:1,style:{color:"#FF9A00"}},ds={key:1},gs={key:2,class:"num color-1"},vs={key:3,class:"color-1"};var ys=e({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,g=s((()=>_.state.user.teamNameList||[])),A=s((()=>_.state.user.championLangList||[])),f=(e,s)=>{if(Number(s.ioRatio)<0){let a=Math.abs(Number(s.ioRatio));return B(e.gold,a)}},k=(e,s)=>{if(Number(s.ioRatio)<0){let a=0,t=Math.abs(Number(s.ioRatio));return t>1&&(a=U(B(e.gold,t),e.gold)),t<1&&(a=U(B(e.gold,t),e.gold)),a}return C(e.gold,e.sioRatio)},h=(e,s)=>3!==e.state&&5!==e.state||"LL"===s.betResultDetail||2===Number(e.cashoutType),b=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,R=e=>{if(g.value.length){const s=g.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},S=e=>{if(A.value.length){const s=A.value.find((s=>s.ratioId===e));return s?s.ratioName:"?"}return"?"};return(s,g)=>{const A=i("SportsIcon"),I=i("SvgIcon"),T=o("img"),N=o("points"),j=o("play");return t(),l("div",null,[(t(!0),l(r,null,u(a.item.betDTOList,((a,i)=>{return t(),l("div",{key:i},[m("div",we,[m("div",Oe,[m("div",_e,[c(m("img",Ce,null,512),[[T,a.homeLogo]]),c(m("img",qe,null,512),[[T,a.awayLogo]])])]),m("div",xe,[m("div",Be,[a.championType?(t(),l("span",Ue,n(s.$t("betting.champion")),1)):(t(),l("span",Xe,n(R(a).homeTeam)+" v "+n(R(a).awayTeam),1)),a.resultScore?(t(),l("span",Ee," ["+n(a.resultScore)+"]",1)):d("",!0)]),m("div",He,[p(A,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),a.championType?(t(),l("div",Ze,n(S(a.systemId)),1)):(t(),l("div",Pe,n(R(a).leagueShortName),1))])])]),m("div",Fe,[Ge,m("div",Ke,[m("div",We,[m("span",null,n((r=a.betItemLang,JSON.parse(r)[localStorage.getItem("locale")||x()])),1),m("span",{class:y([(o=a.betResultDetail,"W"===o||"LW"===o?"color-2":"L"===o||"LL"===o?"color-3":"P"===o?"color-4":"")])},[Ye,c(m("span",null,null,512),[[N,a.ioRatio]])],2)]),m("div",Je,[a.championType?(t(),l("span",Qe,n(S(a.gameId)),1)):a.homeTeam&&a.awayTeam?c((t(),l("span",Me,null,512)),[[j,a]]):(t(),l("span",ze,"?")),m("span",null,[2===Number(e.item.cashoutType)?(t(),v(I,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(t(),v(I,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&b(a.betResultDetail)?(t(),v(I,{key:2,name:`user-${a.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(t(),l("img",Ve))])])])]),m("div",$e,[m("div",es,[m("span",null,n(s.$t("user.BettingAmount")),1),m("div",ss,[p(z),Number(a.ioRatio)>0?c((t(),l("span",as,null,512)),[[N,e.item.gold]]):d("",!0),Number(a.ioRatio)<0?c((t(),l("span",ts,null,512)),[[N,f(e.item,a)]]):d("",!0),Number(a.ioRatio)<0?(t(),l("span",ls,[ns,c(m("span",null,null,512),[[N,e.item.gold]]),is])):d("",!0)])]),m("div",os,[0===e.item.state||-1===e.item.state||1===e.item.state?(t(),l("span",ms,n(s.$t("user.CompensableAmount"))+":",1)):h(e.item,a)?(t(),l("span",rs,n(s.$t("user.practical"))+":",1)):d("",!0),m("div",null,[3!==e.item.state&&5!==e.item.state?(t(),l("span",us,[-1===e.item.state?(t(),l("span",cs,n(s.$t("user.editPend")),1)):d("",!0),0==e.item.state?(t(),l("span",ps,n(s.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),h(e.item,a)?(t(),l("span",ds,[p(z)])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(t(),l("span",gs,[c(m("span",null,null,512),[[N,k(e.item,a)]])])):h(e.item,a)?(t(),l("span",vs,[c(m("span",null,null,512),[[N,e.item.winGold]])])):d("",!0)])])])]);var o,r})),128))])}}});ys.__scopeId="data-v-470d78d4";const As={class:"top-1 top-2"},fs={class:"left-text"},ks=(e=>(A("data-v-1aa295b6"),e=e(),f(),e))((()=>m("img",{class:"img_1",src:"data:image/png;base64,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",alt:""},null,-1))),hs={class:"right"},bs={key:0,class:"img_1",src:"/assets/win.f595b158.svg",alt:""},Rs={key:1,class:"img_1",src:"/assets/fail.833099be.svg",alt:""},Ss={key:2,class:"img_1",src:"/assets/P.97f2ec8e.svg",alt:""},Is={key:3,class:"img_1",src:q,alt:""},Ts={class:"top-3"},Ns={class:"img_1",type:3,style:{"object-fit":"cover"}},js={class:"name"},Ls={class:"name-2"},Ds={class:"right"};var ws=e({props:{peopleInfo:{type:Object,default:()=>{}}},setup(e){const g=e,y=s((()=>_.state.user.userInfo)),A=k(""),f=k(""),S=k(!1),I=k(!1),T=h({arr:[]});b((()=>{f.value=K().valueOf();A.value=f.value-7776e6}));let N=0;const j=async()=>{N++;const e={orderState:"1",page:N,pageSize:5,beginTime:A.value,endTime:f.value},s=await E(e);if(200!==s.code)return S.value=!1,I.value=!0,H(s.msg);const a=s.data;if(200===s.code){a.forEach((e=>{T.arr.push(e)}));const e=[],s=[];T.arr.map((a=>{a.betDTOList.map((a=>{const{championType:t,systemId:l,gidm:n}=a;t&&s.push(n),e.push(l)}))})),_.dispatch("user/getMoreTeamList",e.join()),_.dispatch("user/getChampionLang",s.join()),S.value=!1,I.value=!a.length}};return(e,s)=>{const A=i("van-list"),f=o("img");return t(),l("div",null,[m("div",As,[m("div",fs,[ks,m("span",null,n(e.$t("user.betForm")),1)]),m("div",hs,[m("span",null,n(e.$t("user.RecentAchievements"))+":",1),(t(!0),l(r,null,u(a(T).arr.slice(0,5),((e,s)=>(t(),l("span",{key:s,class:"img_1"},[2===e.state?(t(),l("img",bs)):3===e.state?(t(),l("img",Rs)):4===e.state?(t(),l("img",Ss)):(t(),l("img",Is))])))),128))])]),p(A,{loading:S.value,"onUpdate:loading":s[1]||(s[1]=e=>S.value=e),finished:I.value,"finished-text":e.$t("live.noMore"),class:"dataList","loading-text":e.$t("user.loadingText"),onLoad:j},{default:R((()=>[(t(!0),l(r,null,u(a(T).arr,((i,o)=>(t(),l("div",{key:o},[m("div",Ts,[m("div",{class:"left",onClick:s[0]||(s[0]=e=>{return s="/elseInfo",void console.log(s,"他人未开放===");var s})},[c(m("img",Ns,null,512),[[f,g.peopleInfo.headImg]]),m("div",js,[m("div",null,n(a(y).nickName),1),m("div",Ls,n(a(y).loginName),1)])]),m("div",Ds,n(e.$t("user.end")),1)]),1===Number(i.parlayNum)?(t(),v(ys,{key:0,item:i,class:"item"},null,8,["item"])):d("",!0),1!==Number(i.parlayNum)?(t(),v(De,{key:1,item:i,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])}}});ws.__scopeId="data-v-1aa295b6";const Os=e=>(A("data-v-19308fa9"),e=e(),f(),e),_s={class:"userInfo"},Cs={class:"nav-bar"},qs={class:"left"},xs={class:"center"},Bs={class:"left"},Us={class:"user-info"},Xs={class:"img_1",type:3,style:{"object-fit":"cover"}},Es={class:"user-right"},Hs={class:"user-1"},Zs=Os((()=>m("img",{class:"img_1",src:"/assets/ball.676aeef0.svg",alt:""},null,-1))),Ps={class:"user-2"},Fs={class:"user-3"},Gs=Os((()=>m("img",{class:"img_1",src:"/assets/star.0e40d975.svg",alt:""},null,-1))),Ks={class:"user-4"},Ws=Os((()=>m("div",{class:"center"},null,-1))),Ys={class:"content"},Js={class:"top-1"},Qs=Os((()=>m("img",{class:"img_1",src:O,alt:""},null,-1))),Ms={class:"circle"},zs={class:"left"},Vs=["src"],$s={class:"right"},ea={key:0},sa={key:1};var aa=e({setup(e){const i=S(),d=s((()=>_.state.user.userInfo)),g=s((()=>_.state.user.peopleInfo)),v=s((()=>_.state.app.theme)),A=k({}),f=k(""),R=s((()=>"blue"===v.value)),{t:O}=Z(),C=e=>{e.includes("selfFocus")||i.push("/user"+e)},q=k(O("user.PersonalProfile")),x=h({arr:[{num:0,name:O("user.winRate"),img:N},{num:0,name:O("user.profit"),img:j},{num:0,name:O("user.BetAmount"),img:L},{num:0,name:O("user.refund"),img:D}]});b((()=>{_.dispatch("user/getAccountInfo"),B()}));const B=async()=>{const e=await P({type:"3",lastDayCount:90});if(200!==e.code)return H(e.msg);A.value=e.data,f.value=100*A.value.winRatio||0,x.arr[0].num=String(100*A.value.winRatio).replace(/^(.*\..{2}).*$/,"$1")+"%",x.arr[1].num=A.value.winOrderAmount-A.value.orderAmount||0,x.arr[2].num=A.value.orderAmount||0,x.arr[3].num=A.value.winOrderAmount||0};return(e,s)=>{const v=o("img");return t(),l("div",_s,[m("div",{class:y(["user",{"user-blue":a(R)}])},[m("div",Cs,[m("span",qs,[m("img",{class:"img_1",src:T,alt:"",onClick:s[0]||(s[0]=e=>{i.push("/home")})})]),m("span",xs,n(q.value),1),m("span",Bs,[m("img",{class:"img_1",src:w,alt:"",onClick:s[1]||(s[1]=e=>C("/editUser"))})])]),m("div",Us,[m("div",{class:"user-img",onClick:s[2]||(s[2]=e=>C("/editImg"))},[c(m("img",Xs,null,512),[[v,a(g).headImg]])]),m("div",Es,[m("div",Hs,[Zs,m("span",null,n(a(g).nickName),1)]),m("div",Ps,n(a(d).loginName||""),1),m("div",Fs,[Gs,m("span",null,n(e.$t("user.RegistrationTime"))+" "+n(a(F)(a(d).createTime)),1)]),m("div",Ks,[m("div",{class:"left",onClick:s[3]||(s[3]=e=>C("/selfFocus?num=1"))},[m("span",null,n(a(g).followNum),1),m("span",null,n(e.$t("user.follow")),1)]),Ws,m("div",{class:"left right",onClick:s[4]||(s[4]=e=>C("/selfFocus?num=2"))},[m("span",null,n(a(g).fansCount),1),m("span",null,n(e.$t("user.fans")),1)])])])]),m("div",{class:"note",onClick:s[5]||(s[5]=I((e=>C("/editUser")),["stop"]))},n(a(g).profiles),1)],2),m("div",Ys,[m("div",Js,[Qs,m("span",null,n(e.$t("user.text8",{num:90})),1)]),m("div",Ms,[(t(!0),l(r,null,u(a(x).arr,((e,s)=>(t(),l("div",{key:s,class:"num-1"},[m("div",zs,[m("img",{class:"img_1",src:e.img,alt:""},null,8,Vs)]),m("div",$s,[0===s?(t(),l("div",ea,n(e.num),1)):(t(),l("div",sa,n(a(G)(e.num)),1)),m("div",null,n(e.name),1)])])))),128))]),p(ws,{"people-info":a(g)},null,8,["people-info"])])])}}});aa.__scopeId="data-v-19308fa9";export{aa as default};
