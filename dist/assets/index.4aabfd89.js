import{s as e,b as a,u as t,o as l,S as s,V as n,r as i,E as u,P as o,F as r,Z as c,x as m,q as v,a0 as d,B as p,c as g,_ as y,X as h,Y as f,e as A,d as k,j as T,U as b,O as D,R as _,k as w}from"./vue.9399d1f0.js";import{_ as N}from"./noData.1caa3bb3.js";import{h as L}from"./moment.40bc58bf.js";import{s as S,v as C,o as $,w as M,x as R,y as I,z as x,u as B,A as O,b as E,B as F,C as Y,E as j}from"./index.6f0e85fc.js";var P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAAEc4A0XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADAAAAACRRQtxAAAAkElEQVQoFYWPAQ6AIAwD8RE+TR+pP9NH6I44UtnEJoTRdV0ppZTNzmWn4prsaq9KwQBnzyix7vwoXMVEHVkoeg84xaoPD4TVy05F7DuUSFOJYKcmjNv2d9Ni2zdZ94IKCBygq0LTCVYFa4gsg67M6mBGrkyYcWhT6D+yQTg0Q3x9KUQeulhTv/QZ+c+EuMPIN+mRT7lWjXr2AAAAAElFTkSuQmCC";const U={key:0,class:"img_1"},Q={key:1,class:"img_1"},W={key:2,class:"img_1"},V={key:3,class:"img_1"};var z=e({setup(e){const i=a((()=>S.state.user.currency));return(e,a)=>"CNY"===t(i)?(l(),s("span",U,n("¥"))):"VNDK"===t(i)?(l(),s("span",Q,n("₫(K)"),1)):"USDT"===t(i)?(l(),s("span",W,n("T"))):(l(),s("span",V,n(t(i)),1))}});z.__scopeId="data-v-5a491ec1";const K=e=>(h("data-v-1c845448"),e=e(),f(),e),G={class:"match-title"},H={class:"title-left"},J={class:"cur-odds"},X=p(" @"),Z={class:"top2"},q={class:"left"},ee={class:"top-img"},ae={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},te={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},le={class:"right"},se={class:"one"},ne=p(" @"),ie={class:"one two"},ue={key:0},oe={key:1},re={key:3,class:"img_1",src:M,alt:""},ce={class:"team"},me={key:0},ve={class:"team"},de={class:"money-num"},pe={class:"money-num-1"},ge={class:"money-num-money"},ye={class:"money-num-2"},he={key:0},fe={key:1},Ae={key:0},ke={key:0,style:{color:"#FF9A00"}},Te={key:1,style:{color:"#FF9A00"}},be={key:1},De={key:2,class:"num"},_e={key:3,class:"num"},we=K((()=>o("div",{class:"line"},null,-1))),Ne={class:"top4"},Le={class:"one"},Se={class:"one"},Ce={key:0,class:"one"};var $e=e({props:{item:{type:Object,default:()=>{}}},setup(e){const h=e,f=a((()=>S.state.user.teamNameList||[])),A=e=>3!==e.state&&5!==e.state||2===Number(e.cashoutType),k=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,T=e=>{if(f.value.length){const a=f.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(a,f)=>{const b=i("SportsIcon"),D=i("SvgIcon"),_=u("points"),w=u("img"),N=u("play");return l(),s("div",null,[o("div",G,[o("div",H,[o("div",null,n(e.item.parlayNum)+n(a.$t("user.session")),1),o("div",null,[(l(!0),s(r,null,c(e.item.betDTOList,((e,a)=>(l(),g(b,{key:a,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])]),o("div",J,[X,m(o("span",null,null,512),[[_,e.item.sioRatio]])])]),(l(!0),s(r,null,c(h.item.betDTOList,((a,t)=>{return l(),s("div",{key:t},[o("div",Z,[o("div",q,[o("div",ee,[m(o("img",ae,null,512),[[w,a.homeLogo]]),m(o("img",te,null,512),[[w,a.awayLogo]])])]),o("div",le,[o("div",se,[o("span",null,n((u=a.betItemLang,JSON.parse(u)[localStorage.getItem("locale")||"zh-cn"])),1),o("span",{class:y([(i=a.betResultDetail,"W"===i||"LW"===i?"color-2":"L"===i||"LL"===i?"color-3":"P"===i?"color-4":"")])},[ne,m(o("span",null,null,512),[[_,a.ioRatio]])],2)]),o("div",ie,[a.homeTeam&&a.awayTeam?m((l(),s("span",ue,null,512)),[[N,a]]):(l(),s("span",oe,"?")),o("span",null,[2===Number(e.item.cashoutType)?(l(),g(D,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),g(D,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&k(a.betResultDetail)?(l(),g(D,{key:2,name:`user-${a.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),s("img",re))])]),o("div",ce,[p(n(T(a).homeTeam)+" v "+n(T(a).awayTeam)+" ",1),a.resultScore?(l(),s("span",me," ["+n(a.resultScore)+"] ",1)):d("",!0)]),o("div",ve,[v(b,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),o("span",null,n(T(a).leagueShortName),1)])])])]);var i,u})),128)),o("div",de,[o("div",pe,[o("span",null,n(a.$t("user.BettingAmount"))+":",1),o("span",ge,[v(z),m(o("span",null,null,512),[[_,e.item.gold]])])]),o("div",ye,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),s("span",he,n(a.$t("user.CompensableAmount"))+":",1)):A(e.item)?(l(),s("span",fe,n(a.$t("user.practical"))+":",1)):d("",!0),o("span",null,[3!==e.item.state&&5!==e.item.state?(l(),s("span",Ae,[-1===e.item.state?(l(),s("span",ke,n(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),s("span",Te,n(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),A(e.item)?(l(),s("span",be,[v(z)])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),s("span",De,[m(o("span",null,null,512),[[_,(L=e.item,C(L.gold,L.sioRatio))]])])):A(e.item)?(l(),s("span",_e,[m(o("span",null,null,512),[[_,e.item.winGold]])])):d("",!0)])])]),we,o("div",Ne,[o("div",Le,[o("span",null,n(a.$t("user.orderId"))+":",1),o("span",null,n(e.item.orderId),1)]),o("div",Se,[o("span",null,n(a.$t("user.BettingTime"))+"：",1),o("span",null,n(e.item.createDate),1)]),1===e.item.creditState?(l(),s("div",Ce,[o("span",null,n(a.$t("user.SettlementTime"))+":",1),o("span",null,n(t($)(e.item.resultDate)),1)])):d("",!0)])]);var L}}});$e.__scopeId="data-v-1c845448";const Me=e=>(h("data-v-0ebf3e1a"),e=e(),f(),e),Re={class:"top"},Ie={class:"left"},xe={class:"top-img"},Be={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Oe={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Ee={class:"right"},Fe={class:"font_1"},Ye={key:0},je={key:1},Pe={key:2,class:"color-1"},Ue={class:"league-name"},Qe={key:0,class:"font_2"},We={key:1,class:"font_2"},Ve={class:"top2"},ze=Me((()=>o("div",{class:"left"},[o("img",{class:"img_1",src:x,alt:""})],-1))),Ke={class:"right"},Ge={class:"one"},He=p(" @"),Je={class:"one two"},Xe={key:0},Ze={key:1},qe={key:2},ea={key:3,class:"img_1",src:M,alt:""},aa={class:"top3"},ta={class:"one"},la={class:"money-num-money"},sa={key:0},na={key:1},ia={key:2},ua=p(" ("),oa=p(") "),ra={class:"one two"},ca={key:0},ma={key:1},va={key:0},da={key:0,style:{color:"#FF9A00"}},pa={key:1,style:{color:"#FF9A00"}},ga={key:1},ya={key:2,class:"num color-1"},ha={key:3,class:"color-1"},fa=Me((()=>o("div",{class:"line"},null,-1))),Aa={class:"top4"},ka={class:"one"},Ta={class:"one"},ba={key:0,class:"one"};var Da=e({props:{item:{type:Object,default:()=>{}}},setup(e){const p=e,h=a((()=>S.state.user.teamNameList||[])),f=a((()=>S.state.user.championLangList||[])),A=(e,a)=>{if(Number(a.ioRatio)<0){const t=Math.abs(Number(a.ioRatio));return R(e.gold,t)}},k=(e,a)=>{if(Number(a.ioRatio)<0){let t=0;const l=Math.abs(Number(a.ioRatio));return l>1&&(t=I(R(e.gold,l),e.gold)),l<1&&(t=I(R(e.gold,l),e.gold)),t}return C(e.gold,e.sioRatio)},T=(e,a)=>3!==e.state&&5!==e.state||"LL"===a.betResultDetail||2===Number(e.cashoutType),b=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,D=e=>{if(h.value.length){const a=h.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},_=e=>{if(f.value.length){const a=f.value.find((a=>a.ratioId===e));return a?a.ratioName:"?"}return"?"};return(a,h)=>{const f=i("SportsIcon"),w=i("SvgIcon"),N=u("img"),L=u("points"),S=u("play");return l(),s("div",null,[(l(!0),s(r,null,c(p.item.betDTOList,((i,u)=>{return l(),s("div",{key:u},[o("div",Re,[o("div",Ie,[o("div",xe,[m(o("img",Be,null,512),[[N,i.homeLogo]]),m(o("img",Oe,null,512),[[N,i.awayLogo]])])]),o("div",Ee,[o("div",Fe,[i.championType?(l(),s("span",Ye,n(a.$t("betting.champion")),1)):(l(),s("span",je,n(D(i).homeTeam)+" v "+n(D(i).awayTeam),1)),i.resultScore?(l(),s("span",Pe," ["+n(i.resultScore)+"]",1)):d("",!0)]),o("div",Ue,[v(f,{"icon-src":i.gameType,class:"ball-img"},null,8,["icon-src"]),i.championType?(l(),s("div",Qe,n(_(i.systemId)),1)):(l(),s("div",We,n(D(i).leagueShortName),1))])])]),o("div",Ve,[ze,o("div",Ke,[o("div",Ge,[o("span",null,n((c=i.betItemLang,JSON.parse(c)[localStorage.getItem("locale")||"zh-cn"])),1),o("span",{class:y([(r=i.betResultDetail,"W"===r||"LW"===r?"color-2":"L"===r||"LL"===r?"color-3":"P"===r?"color-4":"")])},[He,m(o("span",null,null,512),[[L,i.ioRatio]])],2)]),o("div",Je,[i.championType?(l(),s("span",Xe,n(_(i.gameId)),1)):i.homeTeam&&i.awayTeam?m((l(),s("span",Ze,null,512)),[[S,i]]):(l(),s("span",qe,"?")),o("span",null,[2===Number(e.item.cashoutType)?(l(),g(w,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),g(w,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&b(i.betResultDetail)?(l(),g(w,{key:2,name:`user-${i.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),s("img",ea))])])])]),o("div",aa,[o("div",ta,[o("span",null,n(a.$t("user.BettingAmount")),1),o("div",la,[v(z),Number(i.ioRatio)>0?m((l(),s("span",sa,null,512)),[[L,e.item.gold]]):d("",!0),Number(i.ioRatio)<0?m((l(),s("span",na,null,512)),[[L,A(e.item,i)]]):d("",!0),Number(i.ioRatio)<0?(l(),s("span",ia,[ua,m(o("span",null,null,512),[[L,e.item.gold]]),oa])):d("",!0)])]),o("div",ra,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),s("span",ca,n(a.$t("user.CompensableAmount"))+":",1)):T(e.item,i)?(l(),s("span",ma,n(a.$t("user.practical"))+":",1)):d("",!0),o("div",null,[3!==e.item.state&&5!==e.item.state?(l(),s("span",va,[-1===e.item.state?(l(),s("span",da,n(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),s("span",pa,n(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),T(e.item,i)?(l(),s("span",ga,[v(z)])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),s("span",ya,[m(o("span",null,null,512),[[L,k(e.item,i)]])])):T(e.item,i)?(l(),s("span",ha,[m(o("span",null,null,512),[[L,e.item.winGold]])])):d("",!0)])])]),fa,o("div",Aa,[o("div",ka,[o("span",null,n(a.$t("user.OrderID"))+":",1),o("span",null,n(e.item.orderId),1)]),o("div",Ta,[o("span",null,n(a.$t("user.BettingTime"))+":",1),o("span",null,n(e.item.createDate),1)]),1===e.item.creditState?(l(),s("div",ba,[o("span",null,n(a.$t("user.SettlementTime"))+":",1),o("span",null,n(t($)(e.item.resultDate)),1)])):d("",!0)])]);var r,c})),128))])}}});Da.__scopeId="data-v-0ebf3e1a";const _a=e=>(h("data-v-5577278f"),e=e(),f(),e),wa={class:"timeSelect"},Na={class:"status status-2"},La={class:"status_1"},Sa=p(" ~ "),Ca={class:"status"},$a={class:"status_1"},Ma={key:0,class:"noData"},Ra=_a((()=>o("img",{class:"img_1",src:N},null,-1)));var Ia=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:u}){const m=A({arr:[]}),{t:v}=B(),p=k(""),h=k(""),f=k(v("user.state")),_=k({key:"",value:v("user.whole")}),w=k(!1),N=k(!1),C=k(!1),$=k(!1),M=A({arr:[{value:v("user.whole"),key:""},{value:v("user.noFinal"),key:"0"},{value:v("user.final"),key:"1"}]}),R=k({beginName:L().subtract(90,"days").format("MM/DD"),endName:L().format("MM/DD")});T((()=>{h.value=L().valueOf();p.value=h.value-7776e6}));const I=()=>{F()};let x=0;const F=async()=>{x++;const e={orderState:_.value.key,page:x,pageSize:10,beginTime:p.value,endTime:h.value},a=await O(e);if(200!==a.code)return C.value=!1,$.value=!0,E(a.msg);const t=a.data;if(200===a.code){t.forEach((e=>{m.arr.push(e)}));const e=[],a=[];m.arr.map((t=>{t.betDTOList.map((t=>{const{championType:l,systemId:s,gidm:n}=t;l&&a.push(n),e.push(s)}))})),S.dispatch("user/getMoreTeamList",e.join()),S.dispatch("user/getChampionLang",a.join()),C.value=!1,$.value=!t.length}};return a({setPk:async function(e){_.value=e,C.value=!0,$.value=!1,x=0,m.arr=[],F(),console.log(e)},setDateTime:e=>{const[a,t]=e;R.value.beginName=L(a).format("MM/DD"),R.value.endName=L(t).format("MM/DD"),p.value=L(a).valueOf(),h.value=L(t).valueOf(),C.value=!0,$.value=!1,N.value=!1,x=0,m.arr=[],F()},showBottom:w,showBottom2:N}),(e,a)=>{const v=i("van-list");return l(),s(r,null,[o("div",wa,[o("div",Na,[o("div",La,[o("span",null,n(e.$t("user.time")),1),o("div",{class:"round",onClick:a[0]||(a[0]=b((e=>(N.value=!0,void u("timeChange",!0,1,p.value,h.value))),["stop"]))},[o("span",null,n(R.value.beginName),1),Sa,o("span",null,n(R.value.endName),1),o("img",{class:y(["img_1",[N.value?"img_3":""]]),src:P,alt:""},null,2)])])]),o("div",Ca,[o("div",$a,[o("span",null,n(e.$t("user.state")),1),o("div",{class:"round",onClick:a[1]||(a[1]=b((e=>(w.value=!0,void u("valueChange",!0,f.value,M.arr,_.value,1))),["stop"]))},[o("span",null,n(_.value.value),1),o("img",{class:y(["img_1",[w.value?"img_3":""]]),src:P,alt:""},null,2)])])])]),!t(m).arr.length&&$.value?(l(),s("div",Ma,[Ra,o("p",null,n(e.$t("user.noData")),1)])):d("",!0),t(m).arr.length||!$.value?(l(),g(v,{key:1,loading:C.value,"onUpdate:loading":a[2]||(a[2]=e=>C.value=e),finished:$.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:I},{default:D((()=>[(l(!0),s(r,null,c(t(m).arr,((e,a)=>(l(),s("div",{key:a},[1===Number(e.parlayNum)?(l(),g(Da,{key:0,item:e,class:"item"},null,8,["item"])):d("",!0),1!==Number(e.parlayNum)?(l(),g($e,{key:1,item:e,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ia.__scopeId="data-v-5577278f";const xa=e=>(h("data-v-1577d615"),e=e(),f(),e),Ba={class:"timeSelect"},Oa={class:"status status-2"},Ea={class:"status_1"},Fa=p(" ~ "),Ya={class:"status"},ja={class:"status_1"},Pa={key:0,class:"noData"},Ua=xa((()=>o("img",{class:"img_1",src:N},null,-1))),Qa={class:"date-title"},Wa={class:"title"},Va={class:"line"},za={class:"left"},Ka={class:"left-1"},Ga={class:"font"},Ha={class:"font-1"},Ja={class:"img_1",src:"/assets/copy.8596b31a.svg"},Xa={class:"left-2"},Za={class:"font"},qa={class:"right"},et={key:0},at={key:1},tt={class:"right-1"},lt={class:"money-symbol"},st={class:"right-1"},nt={class:"money-symbol"};var it=e({emits:["valueChange","timeChange"],setup(e,{expose:p,emit:h}){a((()=>S.state.user.currency));const{t:f}=B(),_=k(!1),w=k(!1),N=k(!1),C=k(!1),M=k({key:"",value:f("user.whole")}),R=k(f("user.type")),I=k(""),x=k(""),O=A({arr:[]}),j=A({arr:[]}),U=A({arr:[]}),Q=A({arr:[]}),W=k({beginName:L().subtract(90,"days").format("MM/DD"),endName:L().format("MM/DD")});T((()=>{H(),x.value=L().valueOf();I.value=x.value-7776e6}));const V=e=>"SETTLEMENT"===e.tradeType||"CASHOUT_ALL"===e.tradeType;let K=0;const G=async()=>{K++;const e={page:K,pageSize:20,beginDate:I.value,endDate:x.value,needCount:1,tradeType:M.value.key},a=await Y(e),t=a.data;if(200===a.code){t.transferRecordRspList.forEach((e=>{O.arr.push(e)}));const e={},a=[];O.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const t=L(a.createTime).format("YYYY/MM/DD");e[t]?e[t].list.push(a):e[t]={date:t,list:[a]}})),Object.keys(e).map((t=>{a.push(JSON.parse(JSON.stringify(e[t])))})),j.arr=a,_.value=!1,w.value=!t.transferRecordRspList.length}else E(a.msg)},H=async()=>{const e=await F({});if(200!==e.code)return E(e.msg);U.arr=e.data,Q.arr=[{value:f("user.whole"),key:""},...e.data],Q.arr.map((e=>{e.tradeType&&(e.value=J(e.tradeType),e.key=e.tradeType)}))},J=e=>{if(U.arr.length){const a=U.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||"zh-cn"]||""}};return p({setPk:async function(e){M.value=e,_.value=!0,w.value=!1,K=0,O.arr=[],G(),console.log(e)},setDateTime:e=>{const[a,t]=e;W.value.beginName=L(a).format("MM/DD"),W.value.endName=L(t).format("MM/DD"),I.value=L(a).valueOf(),x.value=L(t).valueOf(),_.value=!0,w.value=!1,C.value=!1,K=0,O.arr=[],G()},showBottom:N,showBottom2:C}),(e,a)=>{const p=i("van-divider"),f=i("van-list"),A=u("copy"),k=u("points");return l(),s(r,null,[o("div",Ba,[o("div",Oa,[o("div",Ea,[o("span",null,n(e.$t("user.time")),1),o("div",{class:"round",onClick:a[0]||(a[0]=b((e=>(C.value=!0,void h("timeChange",!0,2,I.value,x.value))),["stop"]))},[o("span",null,n(W.value.beginName),1),Fa,o("span",null,n(W.value.endName),1),o("img",{class:y(["img_1",[C.value?"img_3":""]]),src:P,alt:""},null,2)])])]),o("div",Ya,[o("div",ja,[o("span",null,n(e.$t("user.type")),1),o("div",{class:"round",onClick:a[1]||(a[1]=b((e=>(N.value=!0,void h("valueChange",!0,R.value,Q.arr,M.value,2))),["stop"]))},[o("span",null,n(M.value.value),1),o("img",{class:y(["img_1",[N.value?"img_3":""]]),src:P,alt:""},null,2)])])])]),v(p,{class:"color-line"}),!t(O).arr.length&&w.value?(l(),s("div",Pa,[Ua,o("p",null,n(e.$t("user.noData")),1)])):d("",!0),t(O).arr.length||!w.value?(l(),g(f,{key:1,loading:_.value,"onUpdate:loading":a[2]||(a[2]=e=>_.value=e),finished:w.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:G},{default:D((()=>[(l(!0),s(r,null,c(t(j).arr,((a,i)=>(l(),s("div",{key:i,class:"dataList-item"},[o("div",Qa,n(a.date),1),(l(!0),s(r,null,c(a.list,((a,i)=>(l(),s("div",{key:i,class:"item"},[o("div",Wa,n(J(a.tradeType)),1),o("div",Va,[o("div",za,[o("div",Ka,[o("div",Ga,n(e.$t("user.betId"))+":",1),o("span",null,[o("span",Ha,n(a.payno),1),m(o("img",Ja,null,512),[[A,a.payno]])])]),o("p",Xa,[o("span",Za,n(e.$t("user.time"))+":",1),o("span",null,n(t($)(a.createTime)),1)])]),o("div",qa,[o("div",null,[V(a)?(l(),s("div",et,n(e.$t("user.compensate")),1)):(l(),s("div",at,n(e.$t("user.betNum")),1)),o("div",tt,[o("span",lt,[v(z)]),m(o("span",null,null,512),[[k,a.tradeGold]])])]),o("div",null,[o("div",null,n(e.$t("user.balance")),1),o("div",st,[o("span",nt,[v(z)]),m(o("span",null,null,512),[[k,a.gold]])])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});it.__scopeId="data-v-1577d615";const ut={class:"ball-type"},ot={class:"status"},rt={class:"status_1"},ct={key:0,class:"noData"},mt=(e=>(h("data-v-55d8ae31"),e=e(),f(),e))((()=>o("img",{class:"img_1",src:N},null,-1))),vt={class:"title"},dt={class:"left title-left"},pt={class:"ball-name"},gt={class:"right"},yt={class:"match-content"},ht={class:"left"},ft={class:"left-1"},At={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},kt={class:"center"},Tt={class:"right"},bt={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Dt={class:"right-1"};var _t=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:p}){const h=A({arr:[]}),f=k(!1),b=k(!1),_=k({name:L().format("YYYY/MM/DD"),value:L().valueOf(),key:0}),w=k({gameType:"FT",key:"FT"}),N=k(!1);T((()=>{S.dispatch("app/getAllSports")}));let C=0;const $=async()=>{C++;const e={page:C,gameSort:3,leagueIds:"",gameType:w.value.gameType,matchTime:_.value.value,pageSize:10,gameStatus:1,groupId:3},a=await j(e),t=a.data;200===a.code?(t.list.forEach((e=>{h.arr.push(e)})),f.value=!1,b.value=h.arr.length===t.total):(b.value=!0,f.value=!1)},M=e=>e.gameDate||e.matchTime?L(e.gameDate).format("MM/DD HH:mm"):void 0;const R=e=>{w.value={gameType:e,key:e},C=0,f.value=!0,b.value=!1,h.arr=[],$()};return a({setDateTime:async function(e){_.value={name:L(e).format("YYYY/MM/DD"),value:L(e).valueOf(),key:0},C=0,N.value=!1,f.value=!0,b.value=!1,h.arr=[],$(),console.log(e)},showBottom:N}),(e,a)=>{const A=i("sports-tabs"),k=i("van-divider"),T=i("SportsIcon"),w=i("van-list"),L=u("img");return l(),s(r,null,[o("div",ut,[v(A,{onReturnSportsSuccess:R})]),o("div",ot,[o("div",rt,[o("span",null,n(e.$t("user.time")),1),o("div",{class:"round",onClick:a[0]||(a[0]=e=>(N.value=!0,void p("timeChange",!0,3,_.value.value)))},[o("span",null,n(_.value.name),1),o("img",{class:y(["img_1",[N.value?"img_3":""]]),src:P,alt:""},null,2)])])]),v(k,{class:"color-line"}),!t(h).arr.length&&b.value?(l(),s("div",ct,[mt,o("p",null,n(e.$t("user.noData")),1)])):d("",!0),t(h).arr.length||!b.value?(l(),g(w,{key:1,loading:f.value,"onUpdate:loading":a[1]||(a[1]=e=>f.value=e),finished:b.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:$},{default:D((()=>[(l(!0),s(r,null,c(t(h).arr,((e,a)=>(l(),s("div",{key:a,class:"item"},[o("div",vt,[o("div",dt,[v(T,{"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"]),o("span",pt,n(e.leagueName),1)]),o("div",gt,n(M(e)),1)]),o("div",yt,[o("div",ht,[o("div",ft,n(e.homeTeamName),1),m(o("img",At,null,512),[[L,e.homeTeamLogo]])]),o("div",kt,n(e.result.GM_h||0)+" : "+n(e.result.GM_c||0),1),o("div",Tt,[m(o("img",bt,null,512),[[L,e.awayTeamLogo]]),o("div",Dt,n(e.awayTeamName),1)])])])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});_t.__scopeId="data-v-55d8ae31";const wt={class:"result"},Nt={class:"content"},Lt={class:"popup-title"},St={class:"pk-list"},Ct=["onClick"],$t={key:0},Mt={key:1},Rt={key:2},It={key:3};var xt=e({setup(e){const u=a((()=>S.state.app.theme)),m=k(""),p=k({}),g=A({arr:[]}),h=_(),f=k(1),b=k(1),N=a((()=>S.state.user.resultTab||0)),C=k(),$=k(),M=k(),R=k(!1),I=k(!1),x=k(!1),B=L().valueOf(),O=k(new Date),E=k(new Date(B-7776e6)),F=k(new Date),Y=k(new Date(B-1296e6)),j=k([new Date(B-6048e5),new Date]),P=k(new Date),U=a((()=>"blue"===u.value));T((()=>{}));const Q=(e,a,t,l,s)=>{m.value=a,p.value=l,g.arr=[...t],f.value=s,R.value=e};const W=(e,a,t,l)=>{console.log(a),b.value=a,1===a&&(j.value=[new Date(t),new Date(l)],I.value=e),2===a&&(j.value=[new Date(t),new Date(l)],I.value=e),3===a&&(P.value=new Date(t),x.value=e)},V=e=>{1===b.value&&(C.value.setDateTime(e),I.value=!1),2===b.value&&(M.value.setDateTime(e),I.value=!1),3===b.value&&($.value.setDateTime(e),x.value=!1)},z=()=>{1===b.value&&(C.value.showBottom2=!1),2===b.value&&(M.value.showBottom2=!1),3===b.value&&($.value.showBottom=!1)};return(e,a)=>{const u=i("van-icon"),A=i("van-nav-bar"),k=i("van-tab"),T=i("van-tabs"),b=i("van-popup"),_=i("van-calendar");return l(),s("div",wt,[v(A,{class:"bg-title",title:e.$t("user.result")},{left:D((()=>[v(u,{name:"arrow-left",class:"img_1",onClick:a[0]||(a[0]=e=>{h.back()})})])),_:1},8,["title"]),o("div",Nt,[v(T,{active:t(N),"onUpdate:active":a[1]||(a[1]=e=>w(N)?N.value=e:null),"line-height":"3px",color:t(U)?"#0E3D66":"#1F2630","title-inactive-color":t(U)?"#88A6BB":"#96A5AA","title-active-color":t(U)?"#0E3D66":"#1F2630","line-width":"40px",duration:.3},{default:D((()=>[v(k,{title:e.$t("user.BettingHistory")},{default:D((()=>[v(Ia,{ref_key:"childRefA",ref:C,onValueChange:Q,onTimeChange:W},null,512)])),_:1},8,["title"]),v(k,{title:e.$t("user.FlowingHistory")},{default:D((()=>[v(it,{ref_key:"childRefC",ref:M,onValueChange:Q,onTimeChange:W},null,512)])),_:1},8,["title"]),v(k,{title:e.$t("user.matchResult")},{default:D((()=>[v(_t,{ref_key:"childRefB",ref:$,onValueChange:Q,onTimeChange:W},null,512)])),_:1},8,["title"])])),_:1},8,["active","color","title-inactive-color","title-active-color","duration"]),v(b,{show:R.value,"onUpdate:show":a[2]||(a[2]=e=>R.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"60%"},onClose:a[3]||(a[3]=e=>{return a="close",console.log(a),1===f.value&&(C.value.showBottom=!1),2===f.value&&(M.value.showBottom=!1),void(3===f.value&&($.value.showBottom=!1));var a})},{default:D((()=>[o("div",Lt,n(m.value),1),o("div",St,[(l(!0),s(r,null,c(t(g).arr,((e,a)=>(l(),s("div",{key:a,class:y(["item",[p.value.key===e.key?"item-color":""]]),onClick:a=>async function(e){R.value=!1,p.value=e,1===f.value&&C.value.setPk(e),2===f.value&&M.value.setPk(e),3===f.value&&$.value.setPk(e)}(e)},[o("p",null,[1===f.value?(l(),s("span",$t,n(e.value),1)):d("",!0),2===f.value?(l(),s("span",Mt,n(e.value),1)):d("",!0),3===f.value?(l(),s("span",Rt,n(e.name),1)):d("",!0),p.value.key===e.key?(l(),s("span",It,[v(u,{name:"success"})])):d("",!0)])],10,Ct)))),128))])])),_:1},8,["show","duration"]),v(_,{show:I.value,"onUpdate:show":a[4]||(a[4]=e=>I.value=e),type:"range","min-date":E.value,"max-date":O.value,"default-date":j.value,onConfirm:V,onClose:a[5]||(a[5]=e=>z())},null,8,["show","min-date","max-date","default-date"]),v(_,{show:x.value,"onUpdate:show":a[6]||(a[6]=e=>x.value=e),type:"single","min-date":Y.value,"max-date":F.value,"default-date":P.value,onConfirm:V,onClose:a[7]||(a[7]=e=>z())},null,8,["show","min-date","max-date","default-date"])])])}}});xt.__scopeId="data-v-33fcc2ac";export{xt as default};
