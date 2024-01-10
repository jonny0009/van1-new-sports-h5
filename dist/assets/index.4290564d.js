import{s as e,b as s,r as a,E as t,o as l,R as i,P as n,U as m,F as c,Z as r,x as o,u,c as d,a1 as g,B as p,_ as v,q as y,X as A,Y as k,d as f,e as h,j as b,O as R,S,W as I}from"./vue.469c5994.js";import{_ as D}from"./return@2x.f2a0d9ed.js";import{d as T,a as _,b as L,c as j,_ as N,e as w}from"./data4.7a4922c1.js";import{s as O,p as C,q,v as x,w as B,x as U,y as X,z as E,A as Y,B as K,C as Z,b as G,u as H,J as W,n as F}from"./index.d01fa8c7.js";import{h as P}from"./moment.40bc58bf.js";const J={class:"match-title"},Q={class:"title-left"},z={class:"cur-odds"},V=p(" @"),M={class:"top2"},$={class:"left"},ee={class:"top-img"},se={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},ae={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},te={class:"right"},le={class:"one"},ie={class:"one two"},ne={key:0},me={key:1},ce={key:0,class:"img_1",src:q,alt:""},re={key:1,class:"img_1",src:x,alt:""},oe={key:2,class:"img_1",src:B,alt:""},ue={key:3,class:"img_1",src:U,alt:""},de={key:4,class:"img_1",src:X,alt:""},ge={key:5,class:"img_1",src:E,alt:""},pe={key:6,class:"img_1",src:Y,alt:""},ve={key:7,class:"img_1",src:Y,alt:""},ye={class:"team"},Ae={key:0},ke={class:"team"},fe={class:"money-num"},he={class:"money-num-1"},be={class:"money-num-money"},Re={class:"money-num-2"},Se={key:0},Ie={key:1},De={key:0},Te={key:0,style:{color:"#FF9A00"}},_e={key:1,style:{color:"#FF9A00"}},Le={key:1},je={key:2,class:"num"},Ne={key:3,class:"num"};var we=e({props:{item:{type:Object,default:()=>{}}},setup(e){const A=e,k=s((()=>O.state.user.currency)),f=s((()=>O.state.user.teamNameList||[])),h=e=>{if(f.value.length){const s=f.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(s,f)=>{const b=a("SportsIcon"),R=a("SvgIcon"),S=t("points"),I=t("img"),D=t("play");return l(),i("div",null,[n("div",J,[n("div",Q,[n("div",null,m(e.item.parlayNum)+m(s.$t("user.session")),1),n("div",null,[(l(!0),i(c,null,r(e.item.betDTOList,((e,s)=>(l(),d(b,{key:s,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])]),n("div",z,[V,o(n("span",null,null,512),[[S,e.item.sioRatio]])])]),(l(!0),i(c,null,r(A.item.betDTOList,((s,a)=>{return l(),i("div",{key:a},[n("div",M,[n("div",$,[n("div",ee,[o(n("img",se,null,512),[[I,s.homeLogo]]),o(n("img",ae,null,512),[[I,s.awayLogo]])])]),n("div",te,[n("div",le,[n("span",null,m((c=s.betItemLang,JSON.parse(c)[localStorage.getItem("locale")||"zh-cn"])),1),n("span",{class:v([(t=s.betResultDetail,"W"===t||"LW"===t?"color-2":"L"===t||"LL"===t?"color-3":"P"===t?"color-4":"")])}," @"+m(s.ioRatio),3)]),n("div",ie,[s.homeTeam&&s.awayTeam?o((l(),i("span",ne,null,512)),[[D,s]]):(l(),i("span",me,"?")),n("span",null,[1===e.item.state?(l(),i("img",ce)):"W"===s.betResultDetail?(l(),i("img",re)):"L"===s.betResultDetail?(l(),i("img",oe)):"LW"===s.betResultDetail?(l(),i("img",ue)):"LL"===s.betResultDetail?(l(),i("img",de)):"P"===s.betResultDetail?(l(),i("img",ge)):"D"===s.betResultDetail?(l(),i("img",pe)):(l(),i("img",ve))])]),n("div",ye,[p(m(h(s).homeTeam)+" v "+m(h(s).awayTeam)+" ",1),s.resultScore?(l(),i("span",Ae," ["+m(s.resultScore)+"] ",1)):g("",!0)]),n("div",ke,[y(b,{"icon-src":s.gameType,class:"ball-img"},null,8,["icon-src"]),n("span",null,m(h(s).leagueShortName),1)])])])]);var t,c})),128)),n("div",fe,[n("div",he,[n("span",null,m(s.$t("user.BettingAmount"))+":",1),n("span",be,["CNY"===u(k)?(l(),d(R,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===u(k)?(l(),d(R,{key:1,name:"user-vndk",class:"img_1"})):(l(),d(R,{key:2,name:"user-usdt",class:"img_1"})),n("span",null,m(u(C)(e.item.gold)),1)])]),n("div",Re,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),i("span",Se,m(s.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state?(l(),i("span",Ie,m(s.$t("user.practical"))+":",1)):g("",!0),n("span",null,[3!==e.item.state&&5!==e.item.state?(l(),i("span",De,[-1===e.item.state?(l(),i("span",Te,m(s.$t("user.editPend")),1)):g("",!0),0===e.item.state?(l(),i("span",_e,m(s.$t("user.affirmPend")),1)):g("",!0)])):g("",!0),3!==e.item.state&&5!==e.item.state?(l(),i("span",Le,["CNY"===u(k)?(l(),d(R,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===u(k)?(l(),d(R,{key:1,name:"user-vndk",class:"img_1"})):(l(),d(R,{key:2,name:"user-usdt",class:"img_1"}))])):g("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),i("span",je,m(u(C)((T=e.item,T.gold*T.sioRatio))),1)):3!==e.item.state&&5!==e.item.state?(l(),i("span",Ne,m(u(C)(e.item.winGold)),1)):g("",!0)])])])]);var T}}});we.__scopeId="data-v-0f8c6644";const Oe={class:"top"},Ce={class:"left"},qe={class:"top-img"},xe={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Be={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Ue={class:"right"},Xe={class:"font_1"},Ee={key:0},Ye={key:1},Ke={key:2,class:"color-1"},Ze={class:"league-name"},Ge={key:0,class:"font_2"},He={key:1,class:"font_2"},We={class:"top2"},Fe=(e=>(A("data-v-6eb7287a"),e=e(),k(),e))((()=>n("div",{class:"left"},[n("img",{class:"img_1",src:K,alt:""})],-1))),Pe={class:"right"},Je={class:"one"},Qe={class:"one two"},ze={key:0},Ve={key:1},Me={key:2},$e={key:0,class:"img_1",src:q,alt:""},es={key:1,class:"img_1",src:x,alt:""},ss={key:2,class:"img_1",src:B,alt:""},as={key:3,class:"img_1",src:U,alt:""},ts={key:4,class:"img_1",src:X,alt:""},ls={key:5,class:"img_1",src:E,alt:""},is={key:6,class:"img_1",src:Y,alt:""},ns={key:7,class:"img_1",src:Y,alt:""},ms={class:"top3"},cs={class:"one"},rs={class:"money-num-money"},os={class:"one two"},us={key:0},ds={key:1},gs={key:0},ps={key:0,style:{color:"#FF9A00"}},vs={key:1,style:{color:"#FF9A00"}},ys={key:1},As={key:2,class:"num color-1"},ks={key:3,class:"color-1"};var fs=e({props:{item:{type:Object,default:()=>{}}},setup(e){const p=e,A=s((()=>O.state.user.currency)),k=s((()=>O.state.user.teamNameList||[])),f=s((()=>O.state.user.championLangList||[])),h=e=>e.gold*e.sioRatio,b=e=>{if(k.value.length){const s=k.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},R=e=>{if(f.value.length){const s=f.value.find((s=>s.ratioId===e));return s?s.ratioName:"?"}return"?"};return(s,k)=>{const f=a("SportsIcon"),S=a("SvgIcon"),I=t("img"),D=t("play");return l(),i("div",null,[(l(!0),i(c,null,r(p.item.betDTOList,((a,t)=>{return l(),i("div",{key:t},[n("div",Oe,[n("div",Ce,[n("div",qe,[o(n("img",xe,null,512),[[I,a.homeLogo]]),o(n("img",Be,null,512),[[I,a.awayLogo]])])]),n("div",Ue,[n("div",Xe,[a.championType?(l(),i("span",Ee,m(s.$t("betting.champion")),1)):(l(),i("span",Ye,m(b(a).homeTeam)+" v "+m(b(a).awayTeam),1)),a.resultScore?(l(),i("span",Ke," ["+m(a.resultScore)+"]",1)):g("",!0)]),n("div",Ze,[y(f,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),a.championType?(l(),i("div",Ge,m(R(a.systemId)),1)):(l(),i("div",He,m(b(a).leagueShortName),1))])])]),n("div",We,[Fe,n("div",Pe,[n("div",Je,[n("span",null,m((r=a.betItemLang,JSON.parse(r)[localStorage.getItem("locale")||"zh-cn"])),1),n("span",{class:v([(c=a.betResultDetail,"W"===c||"LW"===c?"color-2":"L"===c||"LL"===c?"color-3":"P"===c?"color-4":"")])}," @"+m(a.ioRatio),3)]),n("div",Qe,[a.championType?(l(),i("span",ze,m(R(a.gameId)),1)):a.homeTeam&&a.awayTeam?o((l(),i("span",Ve,null,512)),[[D,a]]):(l(),i("span",Me,"?")),n("span",null,[1===e.item.state?(l(),i("img",$e)):"W"===a.betResultDetail?(l(),i("img",es)):"L"===a.betResultDetail?(l(),i("img",ss)):"LW"===a.betResultDetail?(l(),i("img",as)):"LL"===a.betResultDetail?(l(),i("img",ts)):"P"===a.betResultDetail?(l(),i("img",ls)):"D"===a.betResultDetail?(l(),i("img",is)):(l(),i("img",ns))])])])]),n("div",ms,[n("div",cs,[n("span",null,m(s.$t("user.BettingAmount")),1),n("div",rs,["CNY"===u(A)?(l(),d(S,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===u(A)?(l(),d(S,{key:1,name:"user-vndk",class:"img_1"})):(l(),d(S,{key:2,name:"user-usdt",class:"img_1"})),n("span",null,m(u(C)(e.item.gold)),1)])]),n("div",os,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),i("span",us,m(s.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state||"LL"===a.betResultDetail?(l(),i("span",ds,m(s.$t("user.practical"))+":",1)):g("",!0),n("div",null,[3!==e.item.state&&5!==e.item.state?(l(),i("span",gs,[-1===e.item.state?(l(),i("span",ps,m(s.$t("user.editPend")),1)):g("",!0),0==e.item.state?(l(),i("span",vs,m(s.$t("user.affirmPend")),1)):g("",!0)])):g("",!0),3!==e.item.state&&5!==e.item.state||"LL"==a.betResultDetail?(l(),i("span",ys,["CNY"===u(A)?(l(),d(S,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===u(A)?(l(),d(S,{key:1,name:"user-vndk",class:"img_1"})):(l(),d(S,{key:2,name:"user-usdt",class:"img_1"}))])):g("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),i("span",As,m(u(C)(h(e.item))),1)):3!==e.item.state&&5!==e.item.state||"LL"===a.betResultDetail?(l(),i("span",ks,m(u(C)(e.item.winGold)),1)):g("",!0)])])])]);var c,r})),128))])}}});fs.__scopeId="data-v-6eb7287a";const hs={class:"top-1 top-2"},bs=(e=>(A("data-v-5244dce5"),e=e(),k(),e))((()=>n("img",{class:"img_1",src:"data:image/png;base64,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",alt:""},null,-1))),Rs={class:"right"},Ss={key:0,class:"img_1",src:B,alt:""},Is={key:1,class:"img_1",src:x,alt:""},Ds={class:"top-3"},Ts={class:"img_1",type:3,style:{"object-fit":"cover"}},_s={class:"name"},Ls={class:"name-2"},js={class:"right"};var Ns=e({props:{peopleInfo:{type:Object,default:()=>{}}},setup(e){const p=e,v=s((()=>O.state.user.userInfo)),A=f(""),k=f(""),S=f(!1),I=f(!1),D=h({arr:[]});b((()=>{k.value=P().valueOf();A.value=k.value-7776e6}));let T=0;const _=async()=>{T++;const e={orderState:"1",page:T,pageSize:5,beginTime:A.value,endTime:k.value},s=await Z(e);if(200!==s.code)return S.value=!1,I.value=!0,G(s.msg);const a=s.data;if(200===s.code){a.forEach((e=>{D.arr.push(e)}));const e=[],s=[];D.arr.map((a=>{a.betDTOList.map((a=>{const{championType:t,systemId:l,gidm:i}=a;t&&s.push(i),e.push(l)}))})),O.dispatch("user/getMoreTeamList",e.join()),O.dispatch("user/getChampionLang",s.join()),S.value=!1,I.value=!a.length}};return(e,s)=>{const A=a("van-list"),k=t("img");return l(),i("div",null,[n("div",hs,[bs,n("span",null,m(e.$t("user.betForm")),1),n("div",Rs,[n("span",null,m(e.$t("user.RecentAchievements"))+":",1),(l(!0),i(c,null,r(u(D).arr.slice(0,5),((e,s)=>(l(),i("span",{key:s,class:"img_1"},[e.winAndLossGold<0?(l(),i("img",Ss)):(l(),i("img",Is))])))),128))])]),y(A,{loading:S.value,"onUpdate:loading":s[1]||(s[1]=e=>S.value=e),finished:I.value,"finished-text":e.$t("live.noMore"),class:"dataList","loading-text":e.$t("user.loadingText"),onLoad:_},{default:R((()=>[(l(!0),i(c,null,r(u(D).arr,((a,t)=>(l(),i("div",{key:t},[n("div",Ds,[n("div",{class:"left",onClick:s[0]||(s[0]=e=>{return s="/elseInfo",void console.log(s,"他人未开放===");var s})},[o(n("img",Ts,null,512),[[k,p.peopleInfo.headImg]]),n("div",_s,[n("div",null,m(u(v).nickName),1),n("div",Ls,m(u(v).loginName),1)])]),n("div",js,m(e.$t("user.end")),1)]),1===Number(a.parlayNum)?(l(),d(fs,{key:0,item:a,class:"item"},null,8,["item"])):g("",!0),1!==Number(a.parlayNum)?(l(),d(we,{key:1,item:a,class:"item"},null,8,["item"])):g("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])}}});Ns.__scopeId="data-v-5244dce5";const ws=e=>(A("data-v-27a29e80"),e=e(),k(),e),Os={class:"userInfo"},Cs={class:"nav-bar"},qs={class:"left"},xs={class:"center"},Bs={class:"left"},Us={class:"user-info"},Xs={class:"img_1",type:3,style:{"object-fit":"cover"}},Es={class:"user-right"},Ys={class:"user-1"},Ks=ws((()=>n("img",{class:"img_1",src:"/assets/ball.782dd439.svg",alt:""},null,-1))),Zs={class:"user-2"},Gs={class:"user-3"},Hs=ws((()=>n("img",{class:"img_1",src:"/assets/star.abfb90b3.svg",alt:""},null,-1))),Ws={class:"user-4"},Fs=ws((()=>n("div",{class:"center"},null,-1))),Ps={class:"content"},Js={class:"top-1"},Qs=ws((()=>n("img",{class:"img_1",src:w,alt:""},null,-1))),zs={class:"circle"},Vs={class:"left"},Ms=["src"],$s={class:"right"},ea={key:0},sa={key:1};var aa=e({setup(e){const a=I(),d=s((()=>O.state.user.userInfo)),g=s((()=>O.state.user.peopleInfo)),p=s((()=>O.state.app.theme)),A=f({}),k=f(""),R=s((()=>"blue"===p.value)),{t:w}=H(),q=e=>{e.includes("selfFocus")||a.push("/user"+e)},x=f(w("user.PersonalProfile")),B=h({arr:[{num:0,name:w("user.winRate"),img:T},{num:0,name:w("user.profit"),img:_},{num:0,name:w("user.BetAmount"),img:L},{num:0,name:w("user.refund"),img:j}]});b((()=>{O.dispatch("user/getAccountInfo"),U()}));const U=async()=>{const e=await W({type:2});if(200!==e.code)return G(e.msg);A.value=e.data,k.value=100*A.value.winRatio||0,B.arr[0].num=String(100*A.value.winRatio).replace(/^(.*\..{2}).*$/,"$1")+"%",B.arr[1].num=A.value.winOrderAmount-A.value.orderAmount||0,B.arr[2].num=A.value.orderAmount||0,B.arr[3].num=A.value.winOrderAmount||0};return(e,s)=>{const p=t("img");return l(),i("div",Os,[n("div",{class:v(["user",{"user-blue":u(R)}])},[n("div",Cs,[n("span",qs,[n("img",{class:"img_1",src:D,alt:"",onClick:s[0]||(s[0]=e=>{a.push("/home")})})]),n("span",xs,m(x.value),1),n("span",Bs,[n("img",{class:"img_1",src:N,alt:"",onClick:s[1]||(s[1]=e=>q("/editUser"))})])]),n("div",Us,[n("div",{class:"user-img",onClick:s[2]||(s[2]=e=>q("/editImg"))},[o(n("img",Xs,null,512),[[p,u(g).headImg]])]),n("div",Es,[n("div",Ys,[Ks,n("span",null,m(u(g).nickName),1)]),n("div",Zs,m(u(d).loginName||""),1),n("div",Gs,[Hs,n("span",null,m(e.$t("user.RegistrationTime"))+" "+m(u(F)(u(d).createTime)),1)]),n("div",Ws,[n("div",{class:"left",onClick:s[3]||(s[3]=e=>q("/selfFocus?num=1"))},[n("span",null,m(u(g).followNum),1),n("span",null,m(e.$t("user.follow")),1)]),Fs,n("div",{class:"left right",onClick:s[4]||(s[4]=e=>q("/selfFocus?num=2"))},[n("span",null,m(u(g).fansCount),1),n("span",null,m(e.$t("user.fans")),1)])])])]),n("div",{class:"note",onClick:s[5]||(s[5]=S((e=>q("/editUser")),["stop"]))},m(u(g).profiles),1)],2),n("div",Ps,[n("div",Js,[Qs,n("span",null,m(e.$t("user.text8",{num:90})),1)]),n("div",zs,[(l(!0),i(c,null,r(u(B).arr,((e,s)=>(l(),i("div",{key:s,class:"num-1"},[n("div",Vs,[n("img",{class:"img_1",src:e.img,alt:""},null,8,Ms)]),n("div",$s,[0===s?(l(),i("div",ea,m(e.num),1)):(l(),i("div",sa,m(u(C)(e.num)),1)),n("div",null,m(e.name),1)])])))),128))]),y(Ns,{"people-info":u(g)},null,8,["people-info"])])])}}});aa.__scopeId="data-v-27a29e80";export{aa as default};
