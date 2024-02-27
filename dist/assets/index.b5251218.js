import{s as e,b as a,u as t,o as l,S as s,V as n,r as i,E as u,P as o,F as r,Z as c,x as m,q as v,a0 as d,B as p,c as g,_ as y,X as h,Y as f,e as A,d as k,j as T,U as b,O as D,R as _,k as w}from"./vue.845920bc.js";import{_ as N}from"./noData.1caa3bb3.js";import{h as L}from"./moment.40bc58bf.js";import{s as S,x as C,q as $,y as R,g as M,z as I,A as x,B,u as O,C as E,b as F,E as Y,F as j,G as P}from"./index.0d74a76e.js";var U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAAEc4A0XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADAAAAACRRQtxAAAAkElEQVQoFYWPAQ6AIAwD8RE+TR+pP9NH6I44UtnEJoTRdV0ppZTNzmWn4prsaq9KwQBnzyix7vwoXMVEHVkoeg84xaoPD4TVy05F7DuUSFOJYKcmjNv2d9Ni2zdZ94IKCBygq0LTCVYFa4gsg67M6mBGrkyYcWhT6D+yQTg0Q3x9KUQeulhTv/QZ+c+EuMPIN+mRT7lWjXr2AAAAAElFTkSuQmCC";const Q={key:0,class:"img_1"},W={key:1,class:"img_1"},V={key:2,class:"img_1"},K={key:3,class:"img_1"},G={key:4,class:"img_1"};var H=e({setup(e){const i=a((()=>S.state.user.currency));return(e,a)=>"CNY"===t(i)?(l(),s("span",Q,n("¥"))):"VNDK"===t(i)?(l(),s("span",W,n("₫(K)"),1)):"USDT"===t(i)?(l(),s("span",V,n("T"))):"BRL"===t(i)?(l(),s("span",K,n("R$"))):(l(),s("span",G,n(t(i)),1))}});H.__scopeId="data-v-0b48a832";const z=e=>(h("data-v-20696132"),e=e(),f(),e),J={class:"match-title"},X={class:"title-left"},q={class:"cur-odds"},Z=p(" @"),ee={class:"top2"},ae={class:"left"},te={class:"top-img"},le={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},se={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},ne={class:"right"},ie={class:"one"},ue=p(" @"),oe={class:"one two"},re={key:0},ce={key:1},me={key:3,class:"img_1",src:R,alt:""},ve={class:"team"},de={key:0},pe={class:"team"},ge={class:"money-num"},ye={class:"money-num-1"},he={class:"money-num-money"},fe={class:"money-num-2"},Ae={key:0},ke={key:1},Te={key:0},be={key:0,style:{color:"#FF9A00"}},De={key:1,style:{color:"#FF9A00"}},_e={key:1},we={key:2,class:"num"},Ne={key:3,class:"num"},Le=z((()=>o("div",{class:"line"},null,-1))),Se={class:"top4"},Ce={class:"one"},$e={class:"one"},Re={key:0,class:"one"};var Me=e({props:{item:{type:Object,default:()=>{}}},setup(e){const h=e,f=a((()=>S.state.user.teamNameList||[])),A=e=>3!==e.state&&5!==e.state||2===Number(e.cashoutType),k=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,T=e=>{if(f.value.length){const a=f.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(a,f)=>{const b=i("SportsIcon"),D=i("SvgIcon"),_=u("points"),w=u("img"),N=u("play");return l(),s("div",null,[o("div",J,[o("div",X,[o("div",null,n(e.item.parlayNum)+n(a.$t("user.session")),1),o("div",null,[(l(!0),s(r,null,c(e.item.betDTOList,((e,a)=>(l(),g(b,{key:a,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])]),o("div",q,[Z,m(o("span",null,null,512),[[_,e.item.sioRatio]])])]),(l(!0),s(r,null,c(h.item.betDTOList,((a,t)=>{return l(),s("div",{key:t},[o("div",ee,[o("div",ae,[o("div",te,[m(o("img",le,null,512),[[w,a.homeLogo]]),m(o("img",se,null,512),[[w,a.awayLogo]])])]),o("div",ne,[o("div",ie,[o("span",null,n((u=a.betItemLang,JSON.parse(u)[localStorage.getItem("locale")||M()])),1),o("span",{class:y([(i=a.betResultDetail,"W"===i||"LW"===i?"color-2":"L"===i||"LL"===i?"color-3":"P"===i?"color-4":"")])},[ue,m(o("span",null,null,512),[[_,a.ioRatio]])],2)]),o("div",oe,[a.homeTeam&&a.awayTeam?m((l(),s("span",re,null,512)),[[N,a]]):(l(),s("span",ce,"?")),o("span",null,[2===Number(e.item.cashoutType)?(l(),g(D,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),g(D,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&k(a.betResultDetail)?(l(),g(D,{key:2,name:`user-${a.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),s("img",me))])]),o("div",ve,[p(n(T(a).homeTeam)+" v "+n(T(a).awayTeam)+" ",1),a.resultScore?(l(),s("span",de," ["+n(a.resultScore)+"] ",1)):d("",!0)]),o("div",pe,[v(b,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),o("span",null,n(T(a).leagueShortName),1)])])])]);var i,u})),128)),o("div",ge,[o("div",ye,[o("span",null,n(a.$t("user.BettingAmount"))+":",1),o("span",he,[v(H),m(o("span",null,null,512),[[_,e.item.gold]])])]),o("div",fe,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),s("span",Ae,n(a.$t("user.CompensableAmount"))+":",1)):A(e.item)?(l(),s("span",ke,n(a.$t("user.practical"))+":",1)):d("",!0),o("span",null,[3!==e.item.state&&5!==e.item.state?(l(),s("span",Te,[-1===e.item.state?(l(),s("span",be,n(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),s("span",De,n(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),A(e.item)?(l(),s("span",_e,[v(H)])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),s("span",we,[m(o("span",null,null,512),[[_,(L=e.item,C(L.gold,L.sioRatio))]])])):A(e.item)?(l(),s("span",Ne,[m(o("span",null,null,512),[[_,e.item.winGold]])])):d("",!0)])])]),Le,o("div",Se,[o("div",Ce,[o("span",null,n(a.$t("user.orderId"))+":",1),o("span",null,n(e.item.orderId),1)]),o("div",$e,[o("span",null,n(a.$t("user.BettingTime"))+"：",1),o("span",null,n(e.item.createDate),1)]),1===e.item.creditState?(l(),s("div",Re,[o("span",null,n(a.$t("user.SettlementTime"))+":",1),o("span",null,n(t($)(e.item.resultDate)),1)])):d("",!0)])]);var L}}});Me.__scopeId="data-v-20696132";const Ie=e=>(h("data-v-4bdc204e"),e=e(),f(),e),xe={class:"top"},Be={class:"left"},Oe={class:"top-img"},Ee={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Fe={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Ye={class:"right"},je={class:"font_1"},Pe={key:0},Ue={key:1},Qe={key:2,class:"color-1"},We={class:"league-name"},Ve={key:0,class:"font_2"},Ke={key:1,class:"font_2"},Ge={class:"top2"},He=Ie((()=>o("div",{class:"left"},[o("img",{class:"img_1",src:B,alt:""})],-1))),ze={class:"right"},Je={class:"one"},Xe=p(" @"),qe={class:"one two"},Ze={key:0},ea={key:1},aa={key:2},ta={key:3,class:"img_1",src:R,alt:""},la={class:"top3"},sa={class:"one"},na={class:"money-num-money"},ia={key:0},ua={key:1},oa={key:2},ra=p(" ("),ca=p(") "),ma={class:"one two"},va={key:0},da={key:1},pa={key:0},ga={key:0,style:{color:"#FF9A00"}},ya={key:1,style:{color:"#FF9A00"}},ha={key:1},fa={key:2,class:"num color-1"},Aa={key:3,class:"color-1"},ka=Ie((()=>o("div",{class:"line"},null,-1))),Ta={class:"top4"},ba={class:"one"},Da={class:"one"},_a={key:0,class:"one"};var wa=e({props:{item:{type:Object,default:()=>{}}},setup(e){const p=e,h=a((()=>S.state.user.teamNameList||[])),f=a((()=>S.state.user.championLangList||[])),A=(e,a)=>{if(Number(a.ioRatio)<0){const t=Math.abs(Number(a.ioRatio));return I(e.gold,t)}},k=(e,a)=>{if(Number(a.ioRatio)<0){let t=0;const l=Math.abs(Number(a.ioRatio));return l>1&&(t=x(I(e.gold,l),e.gold)),l<1&&(t=x(I(e.gold,l),e.gold)),t}return C(e.gold,e.sioRatio)},T=(e,a)=>3!==e.state&&5!==e.state||"LL"===a.betResultDetail||2===Number(e.cashoutType),b=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,D=e=>{if(h.value.length){const a=h.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},_=e=>{if(f.value.length){const a=f.value.find((a=>a.ratioId===e));return a?a.ratioName:"?"}return"?"};return(a,h)=>{const f=i("SportsIcon"),w=i("SvgIcon"),N=u("img"),L=u("points"),S=u("play");return l(),s("div",null,[(l(!0),s(r,null,c(p.item.betDTOList,((i,u)=>{return l(),s("div",{key:u},[o("div",xe,[o("div",Be,[o("div",Oe,[m(o("img",Ee,null,512),[[N,i.homeLogo]]),m(o("img",Fe,null,512),[[N,i.awayLogo]])])]),o("div",Ye,[o("div",je,[i.championType?(l(),s("span",Pe,n(a.$t("betting.champion")),1)):(l(),s("span",Ue,n(D(i).homeTeam)+" v "+n(D(i).awayTeam),1)),i.resultScore?(l(),s("span",Qe," ["+n(i.resultScore)+"]",1)):d("",!0)]),o("div",We,[v(f,{"icon-src":i.gameType,class:"ball-img"},null,8,["icon-src"]),i.championType?(l(),s("div",Ve,n(_(i.systemId)),1)):(l(),s("div",Ke,n(D(i).leagueShortName),1))])])]),o("div",Ge,[He,o("div",ze,[o("div",Je,[o("span",null,n((c=i.betItemLang,JSON.parse(c)[localStorage.getItem("locale")||M()])),1),o("span",{class:y([(r=i.betResultDetail,"W"===r||"LW"===r?"color-2":"L"===r||"LL"===r?"color-3":"P"===r?"color-4":"")])},[Xe,m(o("span",null,null,512),[[L,i.ioRatio]])],2)]),o("div",qe,[i.championType?(l(),s("span",Ze,n(_(i.gameId)),1)):i.homeTeam&&i.awayTeam?m((l(),s("span",ea,null,512)),[[S,i]]):(l(),s("span",aa,"?")),o("span",null,[2===Number(e.item.cashoutType)?(l(),g(w,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),g(w,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&b(i.betResultDetail)?(l(),g(w,{key:2,name:`user-${i.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),s("img",ta))])])])]),o("div",la,[o("div",sa,[o("span",null,n(a.$t("user.BettingAmount")),1),o("div",na,[v(H),Number(i.ioRatio)>0?m((l(),s("span",ia,null,512)),[[L,e.item.gold]]):d("",!0),Number(i.ioRatio)<0?m((l(),s("span",ua,null,512)),[[L,A(e.item,i)]]):d("",!0),Number(i.ioRatio)<0?(l(),s("span",oa,[ra,m(o("span",null,null,512),[[L,e.item.gold]]),ca])):d("",!0)])]),o("div",ma,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),s("span",va,n(a.$t("user.CompensableAmount"))+":",1)):T(e.item,i)?(l(),s("span",da,n(a.$t("user.practical"))+":",1)):d("",!0),o("div",null,[3!==e.item.state&&5!==e.item.state?(l(),s("span",pa,[-1===e.item.state?(l(),s("span",ga,n(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),s("span",ya,n(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),T(e.item,i)?(l(),s("span",ha,[v(H)])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),s("span",fa,[m(o("span",null,null,512),[[L,k(e.item,i)]])])):T(e.item,i)?(l(),s("span",Aa,[m(o("span",null,null,512),[[L,e.item.winGold]])])):d("",!0)])])]),ka,o("div",Ta,[o("div",ba,[o("span",null,n(a.$t("user.OrderID"))+":",1),o("span",null,n(e.item.orderId),1)]),o("div",Da,[o("span",null,n(a.$t("user.BettingTime"))+":",1),o("span",null,n(e.item.createDate),1)]),1===e.item.creditState?(l(),s("div",_a,[o("span",null,n(a.$t("user.SettlementTime"))+":",1),o("span",null,n(t($)(e.item.resultDate)),1)])):d("",!0)])]);var r,c})),128))])}}});wa.__scopeId="data-v-4bdc204e";const Na=e=>(h("data-v-5577278f"),e=e(),f(),e),La={class:"timeSelect"},Sa={class:"status status-2"},Ca={class:"status_1"},$a=p(" ~ "),Ra={class:"status"},Ma={class:"status_1"},Ia={key:0,class:"noData"},xa=Na((()=>o("img",{class:"img_1",src:N},null,-1)));var Ba=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:u}){const m=A({arr:[]}),{t:v}=O(),p=k(""),h=k(""),f=k(v("user.state")),_=k({key:"",value:v("user.whole")}),w=k(!1),N=k(!1),C=k(!1),$=k(!1),R=A({arr:[{value:v("user.whole"),key:""},{value:v("user.noFinal"),key:"0"},{value:v("user.final"),key:"1"}]}),M=k({beginName:L().subtract(90,"days").format("MM/DD"),endName:L().format("MM/DD")});T((()=>{h.value=L().valueOf();p.value=h.value-7776e6}));const I=()=>{B()};let x=0;const B=async()=>{x++;const e={orderState:_.value.key,page:x,pageSize:10,beginTime:p.value,endTime:h.value},a=await E(e);if(200!==a.code)return C.value=!1,$.value=!0,F(a.msg);const t=a.data;if(200===a.code){t.forEach((e=>{m.arr.push(e)}));const e=[],a=[];m.arr.map((t=>{t.betDTOList.map((t=>{const{championType:l,systemId:s,gidm:n}=t;l&&a.push(n),e.push(s)}))})),S.dispatch("user/getMoreTeamList",e.join()),S.dispatch("user/getChampionLang",a.join()),C.value=!1,$.value=!t.length}};return a({setPk:async function(e){_.value=e,C.value=!0,$.value=!1,x=0,m.arr=[],B(),console.log(e)},setDateTime:e=>{const[a,t]=e;M.value.beginName=L(a).format("MM/DD"),M.value.endName=L(t).format("MM/DD"),p.value=L(a).valueOf(),h.value=L(t).valueOf(),C.value=!0,$.value=!1,N.value=!1,x=0,m.arr=[],B()},showBottom:w,showBottom2:N}),(e,a)=>{const v=i("van-list");return l(),s(r,null,[o("div",La,[o("div",Sa,[o("div",Ca,[o("span",null,n(e.$t("user.time")),1),o("div",{class:"round",onClick:a[0]||(a[0]=b((e=>(N.value=!0,void u("timeChange",!0,1,p.value,h.value))),["stop"]))},[o("span",null,n(M.value.beginName),1),$a,o("span",null,n(M.value.endName),1),o("img",{class:y(["img_1",[N.value?"img_3":""]]),src:U,alt:""},null,2)])])]),o("div",Ra,[o("div",Ma,[o("span",null,n(e.$t("user.state")),1),o("div",{class:"round",onClick:a[1]||(a[1]=b((e=>(w.value=!0,void u("valueChange",!0,f.value,R.arr,_.value,1))),["stop"]))},[o("span",null,n(_.value.value),1),o("img",{class:y(["img_1",[w.value?"img_3":""]]),src:U,alt:""},null,2)])])])]),!t(m).arr.length&&$.value?(l(),s("div",Ia,[xa,o("p",null,n(e.$t("user.noData")),1)])):d("",!0),t(m).arr.length||!$.value?(l(),g(v,{key:1,loading:C.value,"onUpdate:loading":a[2]||(a[2]=e=>C.value=e),finished:$.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:I},{default:D((()=>[(l(!0),s(r,null,c(t(m).arr,((e,a)=>(l(),s("div",{key:a},[1===Number(e.parlayNum)?(l(),g(wa,{key:0,item:e,class:"item"},null,8,["item"])):d("",!0),1!==Number(e.parlayNum)?(l(),g(Me,{key:1,item:e,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ba.__scopeId="data-v-5577278f";const Oa=e=>(h("data-v-4fb6a11a"),e=e(),f(),e),Ea={class:"timeSelect"},Fa={class:"status status-2"},Ya={class:"status_1"},ja=p(" ~ "),Pa={class:"status"},Ua={class:"status_1"},Qa={key:0,class:"noData"},Wa=Oa((()=>o("img",{class:"img_1",src:N},null,-1))),Va={class:"date-title"},Ka={class:"title"},Ga={class:"line"},Ha={class:"left"},za={class:"left-1"},Ja={class:"font"},Xa={class:"font-1"},qa={class:"img_1",src:"/assets/copy.8596b31a.svg"},Za={class:"left-2"},et={class:"font"},at={class:"right"},tt={key:0},lt={key:1},st={class:"right-1"},nt={class:"money-symbol"},it={class:"right-1"},ut={class:"money-symbol"};var ot=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:p}){const{t:h}=O(),f=k(!1),_=k(!1),w=k(!1),N=k(!1),S=k({key:"",value:h("user.whole")}),C=k(h("user.type")),R=k(""),I=k(""),x=A({arr:[]}),B=A({arr:[]}),E=A({arr:[]}),P=A({arr:[]}),Q=k({beginName:L().subtract(90,"days").format("MM/DD"),endName:L().format("MM/DD")});T((()=>{G(),I.value=L().valueOf();R.value=I.value-7776e6}));const W=e=>"SETTLEMENT"===e.tradeType||"CASHOUT_ALL"===e.tradeType;let V=0;const K=async()=>{V++;const e={page:V,pageSize:20,beginDate:R.value,endDate:I.value,needCount:1,tradeType:S.value.key},a=await j(e),t=a.data;if(200===a.code){t.transferRecordRspList.forEach((e=>{x.arr.push(e)}));const e={},a=[];x.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const t=L(a.createTime).format("YYYY/MM/DD");e[t]?e[t].list.push(a):e[t]={date:t,list:[a]}})),Object.keys(e).map((t=>{a.push(JSON.parse(JSON.stringify(e[t])))})),B.arr=a,f.value=!1,_.value=!t.transferRecordRspList.length}else F(a.msg)},G=async()=>{const e=await Y({});if(200!==e.code)return F(e.msg);E.arr=e.data,P.arr=[{value:h("user.whole"),key:""},...e.data],P.arr.map((e=>{e.tradeType&&(e.value=z(e.tradeType),e.key=e.tradeType)}))},z=e=>{if(E.arr.length){const a=E.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||M()]||""}};return a({setPk:async function(e){S.value=e,f.value=!0,_.value=!1,V=0,x.arr=[],K(),console.log(e)},setDateTime:e=>{const[a,t]=e;Q.value.beginName=L(a).format("MM/DD"),Q.value.endName=L(t).format("MM/DD"),R.value=L(a).valueOf(),I.value=L(t).valueOf(),f.value=!0,_.value=!1,N.value=!1,V=0,x.arr=[],K()},showBottom:w,showBottom2:N}),(e,a)=>{const h=i("van-divider"),A=i("van-list"),k=u("copy"),T=u("points");return l(),s(r,null,[o("div",Ea,[o("div",Fa,[o("div",Ya,[o("span",null,n(e.$t("user.time")),1),o("div",{class:"round",onClick:a[0]||(a[0]=b((e=>(N.value=!0,void p("timeChange",!0,2,R.value,I.value))),["stop"]))},[o("span",null,n(Q.value.beginName),1),ja,o("span",null,n(Q.value.endName),1),o("img",{class:y(["img_1",[N.value?"img_3":""]]),src:U,alt:""},null,2)])])]),o("div",Pa,[o("div",Ua,[o("span",null,n(e.$t("user.type")),1),o("div",{class:"round",onClick:a[1]||(a[1]=b((e=>(w.value=!0,void p("valueChange",!0,C.value,P.arr,S.value,2))),["stop"]))},[o("span",null,n(S.value.value),1),o("img",{class:y(["img_1",[w.value?"img_3":""]]),src:U,alt:""},null,2)])])])]),v(h,{class:"color-line"}),!t(x).arr.length&&_.value?(l(),s("div",Qa,[Wa,o("p",null,n(e.$t("user.noData")),1)])):d("",!0),t(x).arr.length||!_.value?(l(),g(A,{key:1,loading:f.value,"onUpdate:loading":a[2]||(a[2]=e=>f.value=e),finished:_.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:K},{default:D((()=>[(l(!0),s(r,null,c(t(B).arr,((a,i)=>(l(),s("div",{key:i,class:"dataList-item"},[o("div",Va,n(a.date),1),(l(!0),s(r,null,c(a.list,((a,i)=>(l(),s("div",{key:i,class:"item"},[o("div",Ka,n(z(a.tradeType)),1),o("div",Ga,[o("div",Ha,[o("div",za,[o("div",Ja,n(e.$t("user.betId"))+":",1),o("span",null,[o("span",Xa,n(a.payno),1),m(o("img",qa,null,512),[[k,a.payno]])])]),o("p",Za,[o("span",et,n(e.$t("user.time"))+":",1),o("span",null,n(t($)(a.createTime)),1)])]),o("div",at,[o("div",null,[W(a)?(l(),s("div",tt,n(e.$t("user.compensate")),1)):(l(),s("div",lt,n(e.$t("user.betNum")),1)),o("div",st,[o("span",nt,[v(H)]),m(o("span",null,null,512),[[T,a.tradeGold]])])]),o("div",null,[o("div",null,n(e.$t("user.balance")),1),o("div",it,[o("span",ut,[v(H)]),m(o("span",null,null,512),[[T,a.gold]])])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});ot.__scopeId="data-v-4fb6a11a";const rt={class:"ball-type"},ct={class:"status"},mt={class:"status_1"},vt={key:0,class:"noData"},dt=(e=>(h("data-v-55d8ae31"),e=e(),f(),e))((()=>o("img",{class:"img_1",src:N},null,-1))),pt={class:"title"},gt={class:"left title-left"},yt={class:"ball-name"},ht={class:"right"},ft={class:"match-content"},At={class:"left"},kt={class:"left-1"},Tt={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},bt={class:"center"},Dt={class:"right"},_t={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},wt={class:"right-1"};var Nt=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:p}){const h=A({arr:[]}),f=k(!1),b=k(!1),_=k({name:L().format("YYYY/MM/DD"),value:L().valueOf(),key:0}),w=k({gameType:"FT",key:"FT"}),N=k(!1);T((()=>{S.dispatch("app/getAllSports")}));let C=0;const $=async()=>{C++;const e={page:C,gameSort:3,leagueIds:"",gameType:w.value.gameType,matchTime:_.value.value,pageSize:10,gameStatus:1,groupId:3},a=await P(e),t=a.data;200===a.code?(t.list.forEach((e=>{h.arr.push(e)})),f.value=!1,b.value=h.arr.length===t.total):(b.value=!0,f.value=!1)},R=e=>e.gameDate||e.matchTime?L(e.gameDate).format("MM/DD HH:mm"):void 0;const M=e=>{w.value={gameType:e,key:e},C=0,f.value=!0,b.value=!1,h.arr=[],$()};return a({setDateTime:async function(e){_.value={name:L(e).format("YYYY/MM/DD"),value:L(e).valueOf(),key:0},C=0,N.value=!1,f.value=!0,b.value=!1,h.arr=[],$(),console.log(e)},showBottom:N}),(e,a)=>{const A=i("sports-tabs"),k=i("van-divider"),T=i("SportsIcon"),w=i("van-list"),L=u("img");return l(),s(r,null,[o("div",rt,[v(A,{onReturnSportsSuccess:M})]),o("div",ct,[o("div",mt,[o("span",null,n(e.$t("user.time")),1),o("div",{class:"round",onClick:a[0]||(a[0]=e=>(N.value=!0,void p("timeChange",!0,3,_.value.value)))},[o("span",null,n(_.value.name),1),o("img",{class:y(["img_1",[N.value?"img_3":""]]),src:U,alt:""},null,2)])])]),v(k,{class:"color-line"}),!t(h).arr.length&&b.value?(l(),s("div",vt,[dt,o("p",null,n(e.$t("user.noData")),1)])):d("",!0),t(h).arr.length||!b.value?(l(),g(w,{key:1,loading:f.value,"onUpdate:loading":a[1]||(a[1]=e=>f.value=e),finished:b.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:$},{default:D((()=>[(l(!0),s(r,null,c(t(h).arr,((e,a)=>(l(),s("div",{key:a,class:"item"},[o("div",pt,[o("div",gt,[v(T,{"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"]),o("span",yt,n(e.leagueName),1)]),o("div",ht,n(R(e)),1)]),o("div",ft,[o("div",At,[o("div",kt,n(e.homeTeamName),1),m(o("img",Tt,null,512),[[L,e.homeTeamLogo]])]),o("div",bt,n(e.result.GM_h||0)+" : "+n(e.result.GM_c||0),1),o("div",Dt,[m(o("img",_t,null,512),[[L,e.awayTeamLogo]]),o("div",wt,n(e.awayTeamName),1)])])])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Nt.__scopeId="data-v-55d8ae31";const Lt={class:"result"},St={class:"content"},Ct={class:"popup-title"},$t={class:"pk-list"},Rt=["onClick"],Mt={key:0},It={key:1},xt={key:2},Bt={key:3};var Ot=e({setup(e){const u=a((()=>S.state.app.theme)),m=k(""),p=k({}),g=A({arr:[]}),h=_(),f=k(1),b=k(1),N=a((()=>S.state.user.resultTab||0)),C=k(),$=k(),R=k(),M=k(!1),I=k(!1),x=k(!1),B=L().valueOf(),O=k(new Date),E=k(new Date(B-7776e6)),F=k(new Date),Y=k(new Date(B-1296e6)),j=k([new Date(B-6048e5),new Date]),P=k(new Date),U=a((()=>"blue"===u.value));T((()=>{}));const Q=(e,a,t,l,s)=>{m.value=a,p.value=l,g.arr=[...t],f.value=s,M.value=e};const W=(e,a,t,l)=>{console.log(a),b.value=a,1===a&&(j.value=[new Date(t),new Date(l)],I.value=e),2===a&&(j.value=[new Date(t),new Date(l)],I.value=e),3===a&&(P.value=new Date(t),x.value=e)},V=e=>{1===b.value&&(C.value.setDateTime(e),I.value=!1),2===b.value&&(R.value.setDateTime(e),I.value=!1),3===b.value&&($.value.setDateTime(e),x.value=!1)},K=()=>{1===b.value&&(C.value.showBottom2=!1),2===b.value&&(R.value.showBottom2=!1),3===b.value&&($.value.showBottom=!1)};return(e,a)=>{const u=i("van-icon"),A=i("van-nav-bar"),k=i("van-tab"),T=i("van-tabs"),b=i("van-popup"),_=i("van-calendar");return l(),s("div",Lt,[v(A,{class:"bg-title",title:e.$t("user.result")},{left:D((()=>[v(u,{name:"arrow-left",class:"img_1",onClick:a[0]||(a[0]=e=>{h.back()})})])),_:1},8,["title"]),o("div",St,[v(T,{active:t(N),"onUpdate:active":a[1]||(a[1]=e=>w(N)?N.value=e:null),"line-height":"3px",color:t(U)?"#0E3D66":"#1F2630","title-inactive-color":t(U)?"#88A6BB":"#96A5AA","title-active-color":t(U)?"#0E3D66":"#1F2630","line-width":"40px","swipe-threshold":"2",duration:.3},{default:D((()=>[v(k,{title:e.$t("user.BettingHistory")},{default:D((()=>[v(Ba,{ref_key:"childRefA",ref:C,onValueChange:Q,onTimeChange:W},null,512)])),_:1},8,["title"]),v(k,{title:e.$t("user.FlowingHistory")},{default:D((()=>[v(ot,{ref_key:"childRefC",ref:R,onValueChange:Q,onTimeChange:W},null,512)])),_:1},8,["title"]),v(k,{title:e.$t("user.matchResult")},{default:D((()=>[v(Nt,{ref_key:"childRefB",ref:$,onValueChange:Q,onTimeChange:W},null,512)])),_:1},8,["title"])])),_:1},8,["active","color","title-inactive-color","title-active-color","duration"]),v(b,{show:M.value,"onUpdate:show":a[2]||(a[2]=e=>M.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"60%"},onClose:a[3]||(a[3]=e=>{return a="close",console.log(a),1===f.value&&(C.value.showBottom=!1),2===f.value&&(R.value.showBottom=!1),void(3===f.value&&($.value.showBottom=!1));var a})},{default:D((()=>[o("div",Ct,n(m.value),1),o("div",$t,[(l(!0),s(r,null,c(t(g).arr,((e,a)=>(l(),s("div",{key:a,class:y(["item",[p.value.key===e.key?"item-color":""]]),onClick:a=>async function(e){M.value=!1,p.value=e,1===f.value&&C.value.setPk(e),2===f.value&&R.value.setPk(e),3===f.value&&$.value.setPk(e)}(e)},[o("p",null,[1===f.value?(l(),s("span",Mt,n(e.value),1)):d("",!0),2===f.value?(l(),s("span",It,n(e.value),1)):d("",!0),3===f.value?(l(),s("span",xt,n(e.name),1)):d("",!0),p.value.key===e.key?(l(),s("span",Bt,[v(u,{name:"success"})])):d("",!0)])],10,Rt)))),128))])])),_:1},8,["show","duration"]),v(_,{show:I.value,"onUpdate:show":a[4]||(a[4]=e=>I.value=e),type:"range","min-date":E.value,"max-date":O.value,"default-date":j.value,onConfirm:V,onClose:a[5]||(a[5]=e=>K())},null,8,["show","min-date","max-date","default-date"]),v(_,{show:x.value,"onUpdate:show":a[6]||(a[6]=e=>x.value=e),type:"single","min-date":Y.value,"max-date":F.value,"default-date":P.value,onConfirm:V,onClose:a[7]||(a[7]=e=>K())},null,8,["show","min-date","max-date","default-date"])])])}}});Ot.__scopeId="data-v-6e565ac7";export{Ot as default};
