import{s as e,b as s,r as a,E as t,o as l,S as n,P as i,V as m,F as o,Z as u,x as r,u as c,c as p,a0 as d,B as g,_ as v,q as y,X as A,Y as k,d as f,e as h,j as b,O as R,R as S,U as I}from"./vue.7b2d67a6.js";import{_ as N}from"./return@2x.f2a0d9ed.js";import{d as T,a as j,b as D,c as L,_,e as w}from"./data4.7a4922c1.js";import{s as C,v as O,w as x,x as q,b as K,u as B,B as U,o as X,C as E}from"./index.7918b9f9.js";import{h as Y}from"./moment.40bc58bf.js";const Z={class:"match-title"},H={class:"title-left"},P={class:"cur-odds"},F=g(" @"),G={class:"top2"},W={class:"left"},Q={class:"top-img"},J={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},z={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},M={class:"right"},V={class:"one"},$=g(" @"),ee={class:"one two"},se={key:0},ae={key:1},te={key:3,class:"img_1",src:O,alt:""},le={class:"team"},ne={key:0},ie={class:"team"},me={class:"money-num"},oe={class:"money-num-1"},ue={class:"money-num-money"},re={key:1,name:"user-vndk",class:"img_1"},ce={class:"money-num-2"},pe={key:0},de={key:1},ge={key:0},ve={key:0,style:{color:"#FF9A00"}},ye={key:1,style:{color:"#FF9A00"}},Ae={key:1},ke={key:1,name:"user-vndk",class:"img_1"},fe={key:2,class:"num"},he={key:3,class:"num"};var be=e({props:{item:{type:Object,default:()=>{}}},setup(e){const A=e,k=s((()=>C.state.user.currency)),f=s((()=>C.state.user.teamNameList||[])),h=e=>3!==e.state&&5!==e.state||2===Number(e.cashoutType),b=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,R=e=>{if(f.value.length){const s=f.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(s,f)=>{const S=a("SportsIcon"),I=a("SvgIcon"),N=t("points"),T=t("img"),j=t("play");return l(),n("div",null,[i("div",Z,[i("div",H,[i("div",null,m(e.item.parlayNum)+m(s.$t("user.session")),1),i("div",null,[(l(!0),n(o,null,u(e.item.betDTOList,((e,s)=>(l(),p(S,{key:s,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])]),i("div",P,[F,r(i("span",null,null,512),[[N,e.item.sioRatio]])])]),(l(!0),n(o,null,u(A.item.betDTOList,((s,a)=>{return l(),n("div",{key:a},[i("div",G,[i("div",W,[i("div",Q,[r(i("img",J,null,512),[[T,s.homeLogo]]),r(i("img",z,null,512),[[T,s.awayLogo]])])]),i("div",M,[i("div",V,[i("span",null,m((o=s.betItemLang,JSON.parse(o)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:v([(t=s.betResultDetail,"W"===t||"LW"===t?"color-2":"L"===t||"LL"===t?"color-3":"P"===t?"color-4":"")])},[$,r(i("span",null,null,512),[[N,s.ioRatio]])],2)]),i("div",ee,[s.homeTeam&&s.awayTeam?r((l(),n("span",se,null,512)),[[j,s]]):(l(),n("span",ae,"?")),i("span",null,[2===Number(e.item.cashoutType)?(l(),p(I,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),p(I,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&b(s.betResultDetail)?(l(),p(I,{key:2,name:`user-${s.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),n("img",te))])]),i("div",le,[g(m(R(s).homeTeam)+" v "+m(R(s).awayTeam)+" ",1),s.resultScore?(l(),n("span",ne," ["+m(s.resultScore)+"] ",1)):d("",!0)]),i("div",ie,[y(S,{"icon-src":s.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",null,m(R(s).leagueShortName),1)])])])]);var t,o})),128)),i("div",me,[i("div",oe,[i("span",null,m(s.$t("user.BettingAmount"))+":",1),i("span",ue,["CNY"===c(k)?(l(),p(I,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===c(k)?(l(),n("span",re,"K₫ ")):(l(),p(I,{key:2,name:"user-usdt",class:"img_1"})),i("span",null,[r(i("span",null,null,512),[[N,e.item.gold]])])])]),i("div",ce,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",pe,m(s.$t("user.CompensableAmount"))+":",1)):h(e.item)?(l(),n("span",de,m(s.$t("user.practical"))+":",1)):d("",!0),i("span",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",ge,[-1===e.item.state?(l(),n("span",ve,m(s.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),n("span",ye,m(s.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),h(e.item)?(l(),n("span",Ae,["CNY"===c(k)?(l(),p(I,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===c(k)?(l(),n("span",ke,"K₫ ")):(l(),p(I,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",fe,[r(i("span",null,null,512),[[N,(D=e.item,D.gold*D.sioRatio)]])])):h(e.item)?(l(),n("span",he,[r(i("span",null,null,512),[[N,e.item.winGold]])])):d("",!0)])])])]);var D}}});be.__scopeId="data-v-40588b54";const Re={class:"top"},Se={class:"left"},Ie={class:"top-img"},Ne={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Te={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},je={class:"right"},De={class:"font_1"},Le={key:0},_e={key:1},we={key:2,class:"color-1"},Ce={class:"league-name"},Oe={key:0,class:"font_2"},xe={key:1,class:"font_2"},qe={class:"top2"},Ke=(e=>(A("data-v-231cff32"),e=e(),k(),e))((()=>i("div",{class:"left"},[i("img",{class:"img_1",src:x,alt:""})],-1))),Be={class:"right"},Ue={class:"one"},Xe=g(" @"),Ee={class:"one two"},Ye={key:0},Ze={key:1},He={key:2},Pe={key:3,class:"img_1",src:O,alt:""},Fe={class:"top3"},Ge={class:"one"},We={class:"money-num-money"},Qe={key:1,name:"user-vndk",class:"img_1"},Je={key:3},ze={key:4},Me={key:5},Ve=g("("),$e=g(")"),es={class:"one two"},ss={key:0},as={key:1},ts={key:0},ls={key:0,style:{color:"#FF9A00"}},ns={key:1,style:{color:"#FF9A00"}},is={key:1},ms={key:1,name:"user-vndk",class:"img_1"},os={key:2,class:"num color-1"},us={key:3,class:"color-1"};var rs=e({props:{item:{type:Object,default:()=>{}}},setup(e){const g=e,A=s((()=>C.state.user.currency)),k=s((()=>C.state.user.teamNameList||[])),f=s((()=>C.state.user.championLangList||[])),h=(e,s)=>{if(Number(s.ioRatio)<0){let a=Math.abs(Number(s.ioRatio));return e.gold/a}},b=(e,s)=>{if(Number(s.ioRatio)<0){let a=0,t=Math.abs(Number(s.ioRatio));return t>1&&(a=e.gold/t+e.gold),t<1&&(a=e.gold/t+e.gold),a}return e.gold*e.sioRatio},R=(e,s)=>3!==e.state&&5!==e.state||"LL"===s.betResultDetail||2===Number(e.cashoutType),S=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,I=e=>{if(k.value.length){const s=k.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},N=e=>{if(f.value.length){const s=f.value.find((s=>s.ratioId===e));return s?s.ratioName:"?"}return"?"};return(s,k)=>{const f=a("SportsIcon"),T=a("SvgIcon"),j=t("img"),D=t("points"),L=t("play");return l(),n("div",null,[(l(!0),n(o,null,u(g.item.betDTOList,((a,t)=>{return l(),n("div",{key:t},[i("div",Re,[i("div",Se,[i("div",Ie,[r(i("img",Ne,null,512),[[j,a.homeLogo]]),r(i("img",Te,null,512),[[j,a.awayLogo]])])]),i("div",je,[i("div",De,[a.championType?(l(),n("span",Le,m(s.$t("betting.champion")),1)):(l(),n("span",_e,m(I(a).homeTeam)+" v "+m(I(a).awayTeam),1)),a.resultScore?(l(),n("span",we," ["+m(a.resultScore)+"]",1)):d("",!0)]),i("div",Ce,[y(f,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),a.championType?(l(),n("div",Oe,m(N(a.systemId)),1)):(l(),n("div",xe,m(I(a).leagueShortName),1))])])]),i("div",qe,[Ke,i("div",Be,[i("div",Ue,[i("span",null,m((u=a.betItemLang,JSON.parse(u)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:v([(o=a.betResultDetail,"W"===o||"LW"===o?"color-2":"L"===o||"LL"===o?"color-3":"P"===o?"color-4":"")])},[Xe,r(i("span",null,null,512),[[D,a.ioRatio]])],2)]),i("div",Ee,[a.championType?(l(),n("span",Ye,m(N(a.gameId)),1)):a.homeTeam&&a.awayTeam?r((l(),n("span",Ze,null,512)),[[L,a]]):(l(),n("span",He,"?")),i("span",null,[2===Number(e.item.cashoutType)?(l(),p(T,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),p(T,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&S(a.betResultDetail)?(l(),p(T,{key:2,name:`user-${a.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),n("img",Pe))])])])]),i("div",Fe,[i("div",Ge,[i("span",null,m(s.$t("user.BettingAmount")),1),i("div",We,["CNY"===c(A)?(l(),p(T,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===c(A)?(l(),n("span",Qe,"K₫ ")):(l(),p(T,{key:2,name:"user-usdt",class:"img_1"})),Number(a.ioRatio)>0?r((l(),n("span",Je,null,512)),[[D,e.item.gold]]):d("",!0),Number(a.ioRatio)<0?r((l(),n("span",ze,null,512)),[[D,h(e.item,a)]]):d("",!0),Number(a.ioRatio)<0?(l(),n("span",Me,[Ve,r(i("span",null,null,512),[[D,e.item.gold]]),$e])):d("",!0)])]),i("div",es,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",ss,m(s.$t("user.CompensableAmount"))+":",1)):R(e.item,a)?(l(),n("span",as,m(s.$t("user.practical"))+":",1)):d("",!0),i("div",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",ts,[-1===e.item.state?(l(),n("span",ls,m(s.$t("user.editPend")),1)):d("",!0),0==e.item.state?(l(),n("span",ns,m(s.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),R(e.item,a)?(l(),n("span",is,["CNY"===c(A)?(l(),p(T,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===c(A)?(l(),n("span",ms,"K₫ ")):(l(),p(T,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",os,[r(i("span",null,null,512),[[D,b(e.item,a)]])])):R(e.item,a)?(l(),n("span",us,[r(i("span",null,null,512),[[D,e.item.winGold]])])):d("",!0)])])])]);var o,u})),128))])}}});rs.__scopeId="data-v-231cff32";const cs={class:"top-1 top-2"},ps={class:"left-text"},ds=(e=>(A("data-v-1aa295b6"),e=e(),k(),e))((()=>i("img",{class:"img_1",src:"data:image/png;base64,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",alt:""},null,-1))),gs={class:"right"},vs={key:0,class:"img_1",src:"/assets/win.f595b158.svg",alt:""},ys={key:1,class:"img_1",src:"/assets/fail.833099be.svg",alt:""},As={key:2,class:"img_1",src:"/assets/P.97f2ec8e.svg",alt:""},ks={key:3,class:"img_1",src:O,alt:""},fs={class:"top-3"},hs={class:"img_1",type:3,style:{"object-fit":"cover"}},bs={class:"name"},Rs={class:"name-2"},Ss={class:"right"};var Is=e({props:{peopleInfo:{type:Object,default:()=>{}}},setup(e){const g=e,v=s((()=>C.state.user.userInfo)),A=f(""),k=f(""),S=f(!1),I=f(!1),N=h({arr:[]});b((()=>{k.value=Y().valueOf();A.value=k.value-7776e6}));let T=0;const j=async()=>{T++;const e={orderState:"1",page:T,pageSize:5,beginTime:A.value,endTime:k.value},s=await q(e);if(200!==s.code)return S.value=!1,I.value=!0,K(s.msg);const a=s.data;if(200===s.code){a.forEach((e=>{N.arr.push(e)}));const e=[],s=[];N.arr.map((a=>{a.betDTOList.map((a=>{const{championType:t,systemId:l,gidm:n}=a;t&&s.push(n),e.push(l)}))})),C.dispatch("user/getMoreTeamList",e.join()),C.dispatch("user/getChampionLang",s.join()),S.value=!1,I.value=!a.length}};return(e,s)=>{const A=a("van-list"),k=t("img");return l(),n("div",null,[i("div",cs,[i("div",ps,[ds,i("span",null,m(e.$t("user.betForm")),1)]),i("div",gs,[i("span",null,m(e.$t("user.RecentAchievements"))+":",1),(l(!0),n(o,null,u(c(N).arr.slice(0,5),((e,s)=>(l(),n("span",{key:s,class:"img_1"},[2===e.state?(l(),n("img",vs)):3===e.state?(l(),n("img",ys)):4===e.state?(l(),n("img",As)):(l(),n("img",ks))])))),128))])]),y(A,{loading:S.value,"onUpdate:loading":s[1]||(s[1]=e=>S.value=e),finished:I.value,"finished-text":e.$t("live.noMore"),class:"dataList","loading-text":e.$t("user.loadingText"),onLoad:j},{default:R((()=>[(l(!0),n(o,null,u(c(N).arr,((a,t)=>(l(),n("div",{key:t},[i("div",fs,[i("div",{class:"left",onClick:s[0]||(s[0]=e=>{return s="/elseInfo",void console.log(s,"他人未开放===");var s})},[r(i("img",hs,null,512),[[k,g.peopleInfo.headImg]]),i("div",bs,[i("div",null,m(c(v).nickName),1),i("div",Rs,m(c(v).loginName),1)])]),i("div",Ss,m(e.$t("user.end")),1)]),1===Number(a.parlayNum)?(l(),p(rs,{key:0,item:a,class:"item"},null,8,["item"])):d("",!0),1!==Number(a.parlayNum)?(l(),p(be,{key:1,item:a,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])}}});Is.__scopeId="data-v-1aa295b6";const Ns=e=>(A("data-v-19308fa9"),e=e(),k(),e),Ts={class:"userInfo"},js={class:"nav-bar"},Ds={class:"left"},Ls={class:"center"},_s={class:"left"},ws={class:"user-info"},Cs={class:"img_1",type:3,style:{"object-fit":"cover"}},Os={class:"user-right"},xs={class:"user-1"},qs=Ns((()=>i("img",{class:"img_1",src:"/assets/ball.676aeef0.svg",alt:""},null,-1))),Ks={class:"user-2"},Bs={class:"user-3"},Us=Ns((()=>i("img",{class:"img_1",src:"/assets/star.0e40d975.svg",alt:""},null,-1))),Xs={class:"user-4"},Es=Ns((()=>i("div",{class:"center"},null,-1))),Ys={class:"content"},Zs={class:"top-1"},Hs=Ns((()=>i("img",{class:"img_1",src:w,alt:""},null,-1))),Ps={class:"circle"},Fs={class:"left"},Gs=["src"],Ws={class:"right"},Qs={key:0},Js={key:1};var zs=e({setup(e){const a=S(),p=s((()=>C.state.user.userInfo)),d=s((()=>C.state.user.peopleInfo)),g=s((()=>C.state.app.theme)),A=f({}),k=f(""),R=s((()=>"blue"===g.value)),{t:w}=B(),O=e=>{e.includes("selfFocus")||a.push("/user"+e)},x=f(w("user.PersonalProfile")),q=h({arr:[{num:0,name:w("user.winRate"),img:T},{num:0,name:w("user.profit"),img:j},{num:0,name:w("user.BetAmount"),img:D},{num:0,name:w("user.refund"),img:L}]});b((()=>{C.dispatch("user/getAccountInfo"),Y()}));const Y=async()=>{const e=await U({type:"3",lastDayCount:90});if(200!==e.code)return K(e.msg);A.value=e.data,k.value=100*A.value.winRatio||0,q.arr[0].num=String(100*A.value.winRatio).replace(/^(.*\..{2}).*$/,"$1")+"%",q.arr[1].num=A.value.winOrderAmount-A.value.orderAmount||0,q.arr[2].num=A.value.orderAmount||0,q.arr[3].num=A.value.winOrderAmount||0};return(e,s)=>{const g=t("img");return l(),n("div",Ts,[i("div",{class:v(["user",{"user-blue":c(R)}])},[i("div",js,[i("span",Ds,[i("img",{class:"img_1",src:N,alt:"",onClick:s[0]||(s[0]=e=>{a.push("/home")})})]),i("span",Ls,m(x.value),1),i("span",_s,[i("img",{class:"img_1",src:_,alt:"",onClick:s[1]||(s[1]=e=>O("/editUser"))})])]),i("div",ws,[i("div",{class:"user-img",onClick:s[2]||(s[2]=e=>O("/editImg"))},[r(i("img",Cs,null,512),[[g,c(d).headImg]])]),i("div",Os,[i("div",xs,[qs,i("span",null,m(c(d).nickName),1)]),i("div",Ks,m(c(p).loginName||""),1),i("div",Bs,[Us,i("span",null,m(e.$t("user.RegistrationTime"))+" "+m(c(X)(c(p).createTime)),1)]),i("div",Xs,[i("div",{class:"left",onClick:s[3]||(s[3]=e=>O("/selfFocus?num=1"))},[i("span",null,m(c(d).followNum),1),i("span",null,m(e.$t("user.follow")),1)]),Es,i("div",{class:"left right",onClick:s[4]||(s[4]=e=>O("/selfFocus?num=2"))},[i("span",null,m(c(d).fansCount),1),i("span",null,m(e.$t("user.fans")),1)])])])]),i("div",{class:"note",onClick:s[5]||(s[5]=I((e=>O("/editUser")),["stop"]))},m(c(d).profiles),1)],2),i("div",Ys,[i("div",Zs,[Hs,i("span",null,m(e.$t("user.text8",{num:90})),1)]),i("div",Ps,[(l(!0),n(o,null,u(c(q).arr,((e,s)=>(l(),n("div",{key:s,class:"num-1"},[i("div",Fs,[i("img",{class:"img_1",src:e.img,alt:""},null,8,Gs)]),i("div",Ws,[0===s?(l(),n("div",Qs,m(e.num),1)):(l(),n("div",Js,m(c(E)(e.num)),1)),i("div",null,m(e.name),1)])])))),128))]),y(Is,{"people-info":c(d)},null,8,["people-info"])])])}}});zs.__scopeId="data-v-19308fa9";export{zs as default};
