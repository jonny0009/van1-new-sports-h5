import{s as e,b as a,E as s,o as t,R as l,P as i,S as n,F as u,Z as r,u as c,a2 as o,x as m,Y as v,B as d,W as g,X as y,e as p,d as k,j as f,r as h,a1 as b,c as _,O as D,q as T,V as M}from"./vue.e791136f.js";import{_ as $,a as N,b as w}from"./selectTime.96384a76.js";import{_ as L}from"./noData.9752ce41.js";import{h as S}from"./moment.9709ab41.js";import{o as C,p as O,s as R,q as x,C as I,V as j,v as B,w as F,x as A,k as Y,y as P,z as V,A as J,B as K,E as z,F as G,G as H,H as W,u as E,J as U,b as q,K as X,L as Z,M as Q,I as ee}from"./index.461b93d8.js";import{_ as ae}from"./ball1.93147776.js";const se=e=>(g("data-v-74e35c99"),e=e(),y(),e),te={class:"match-title"},le={class:"title-left"},ie={class:"top2"},ne={class:"left"},ue={class:"top-img"},re={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},ce={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},oe={class:"right"},me={class:"one"},ve={class:"one two"},de={key:0},ge={key:1},ye={key:0,class:"img_1",src:P,alt:""},pe={key:1,class:"img_1",src:V,alt:""},ke={key:2,class:"img_1",src:J,alt:""},fe={key:3,class:"img_1",src:K,alt:""},he={key:4,class:"img_1",src:z,alt:""},be={key:5,class:"img_1",src:G,alt:""},_e={key:6,class:"img_1",src:H,alt:""},De={key:7,class:"img_1",src:H,alt:""},Te={class:"team"},Me={key:0},$e={class:"team"},Ne=se((()=>i("img",{class:"img_1",src:x,alt:""},null,-1))),we={class:"money-num"},Le={class:"money-num-1"},Se=["src"],Ce=["src"],Oe={key:2,class:"img_1",src:C,alt:""},Re={class:"money-num-2"},xe={key:0},Ie={key:1},je={key:0},Be={key:0,style:{color:"#FF9A00"}},Fe={key:1,style:{color:"#FF9A00"}},Ae={key:1},Ye=["src"],Pe=["src"],Ve={key:2,class:"img_1",src:O,alt:""},Je={key:2,class:"num"},Ke={key:3,class:"num"},ze=se((()=>i("div",{class:"line"},null,-1))),Ge={class:"top4"},He={class:"one"},We={class:"one"},Ee={key:0,class:"one"};var Ue=e({props:{item:{type:Object,default:()=>{}}},setup(e){const g=e,y=a((()=>R.state.user.currency)),p=a((()=>R.state.user.teamNameList||[])),k=e=>{if(p.value.length){const a=p.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(a,p)=>{const f=s("img"),h=s("play");return t(),l("div",null,[i("div",te,[i("div",le,[i("div",null,n(e.item.parlayNum)+n(a.$t("user.session")),1),i("div",null,[(t(!0),l(u,null,r(Number(e.item.parlayNum),(e=>(t(),l("img",{key:e,class:"img_1",src:x,alt:""})))),128))])])]),(t(!0),l(u,null,r(g.item.betDTOList,((a,s)=>{return t(),l("div",{key:s},[i("div",ie,[i("div",ne,[i("div",ue,[m(i("img",re,null,512),[[f,a.homeLogo]]),m(i("img",ce,null,512),[[f,a.awayLogo]])])]),i("div",oe,[i("div",me,[i("span",null,n((u=a.betItemLang,JSON.parse(u)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:v(["color-2",["L"===a.betResultDetail?"color-3":""]])}," @"+n(a.ioRatio),3)]),i("div",ve,[a.homeTeam&&a.awayTeam?m((t(),l("span",de,null,512)),[[h,a]]):(t(),l("span",ge,"?")),i("span",null,[1==e.item.state?(t(),l("img",ye)):"W"==a.betResultDetail?(t(),l("img",pe)):"L"==a.betResultDetail?(t(),l("img",ke)):"LW"==a.betResultDetail?(t(),l("img",fe)):"LL"==a.betResultDetail?(t(),l("img",he)):"P"==a.betResultDetail?(t(),l("img",be)):"D"==a.betResultDetail?(t(),l("img",_e)):(t(),l("img",De))])]),i("div",Te,[d(n(k(a).homeTeam)+" v "+n(k(a).awayTeam)+" ",1),a.resultScore?(t(),l("span",Me," ["+n(a.resultScore)+"] ",1)):o("",!0)]),i("div",$e,[Ne,i("span",null,n(k(a).leagueShortName),1)])])])]);var u})),128)),i("div",we,[i("div",Le,[i("span",null,n(a.$t("user.BettingAmount"))+":",1),i("span",null,["CNY"===c(y)?(t(),l("img",{key:0,class:"img_1",src:c(I),alt:""},null,8,Se)):"VNDK"===c(y)?(t(),l("img",{key:1,class:"img_1",src:c(j),alt:""},null,8,Ce)):(t(),l("img",Oe)),i("span",null,n(c(B)(e.item.gold)),1)])]),i("div",Re,[0==e.item.state||-1==e.item.state||1==e.item.state?(t(),l("span",xe,n(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state&&0!==e.item.state?(t(),l("span",Ie,n(a.$t("user.practical"))+":",1)):o("",!0),i("span",null,[3!==e.item.state&&5!==e.item.state?(t(),l("span",je,[-1==e.item.state?(t(),l("span",Be,n(a.$t("user.editPend")),1)):o("",!0),0==e.item.state?(t(),l("span",Fe,n(a.$t("user.affirmPend")),1)):o("",!0)])):o("",!0),3!==e.item.state&&5!==e.item.state?(t(),l("span",Ae,["CNY"===c(y)?(t(),l("img",{key:0,class:"img_1",src:c(F),alt:""},null,8,Ye)):"VNDK"===c(y)?(t(),l("img",{key:1,class:"img_1",src:c(A),alt:""},null,8,Pe)):(t(),l("img",Ve))])):o("",!0),0==e.item.state||-1==e.item.state||1==e.item.state?(t(),l("span",Je,n(c(B)((b=e.item,b.gold*b.sioRatio))),1)):3!==e.item.state&&5!==e.item.state?(t(),l("span",Ke,n(c(B)(e.item.winGold)),1)):o("",!0)])])]),ze,i("div",Ge,[i("div",He,[i("span",null,n(a.$t("user.orderId"))+":",1),i("span",null,n(e.item.orderId),1)]),i("div",We,[i("span",null,n(a.$t("user.BettingTime"))+"：",1),i("span",null,n(e.item.createDate),1)]),1==e.item.creditState?(t(),l("div",Ee,[i("span",null,n(a.$t("user.SettlementTime"))+":",1),i("span",null,n(c(Y)(e.item.resultDate)),1)])):o("",!0)])]);var b}}});Ue.__scopeId="data-v-74e35c99";const qe=e=>(g("data-v-14b41a2a"),e=e(),y(),e),Xe={class:"top"},Ze={class:"left"},Qe={class:"top-img"},ea={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},aa={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},sa={class:"right"},ta={class:"font_1"},la={key:0,class:"color-1"},ia={class:"font_2"},na={class:"top2"},ua=qe((()=>i("div",{class:"left"},[i("img",{class:"img_1",src:W,alt:""})],-1))),ra={class:"right"},ca={class:"one"},oa={class:"one two"},ma={key:0},va={key:1},da={key:0,class:"img_1",src:P,alt:""},ga={key:1,class:"img_1",src:V,alt:""},ya={key:2,class:"img_1",src:J,alt:""},pa={key:3,class:"img_1",src:K,alt:""},ka={key:4,class:"img_1",src:z,alt:""},fa={key:5,class:"img_1",src:G,alt:""},ha={key:6,class:"img_1",src:H,alt:""},ba={key:7,class:"img_1",src:H,alt:""},_a={class:"top3"},Da={class:"one"},Ta=["src"],Ma=["src"],$a={key:2,class:"img_1",src:C,alt:""},Na={class:"one two"},wa={key:0},La={key:1},Sa={key:0},Ca={key:0,style:{color:"#FF9A00"}},Oa={key:1,style:{color:"#FF9A00"}},Ra={key:1},xa=["src"],Ia=["src"],ja={key:2,class:"img_1",src:O,alt:""},Ba={key:2,class:"num color-1"},Fa={key:3,class:"color-1"},Aa=qe((()=>i("div",{class:"line"},null,-1))),Ya={class:"top4"},Pa={class:"one"},Va={class:"one"},Ja={key:0,class:"one"};var Ka=e({props:{item:{type:Object,default:()=>{}}},setup(e){const g=e,y=a((()=>R.state.user.currency)),p=a((()=>R.state.user.teamNameList||[])),k=e=>e.gold*e.sioRatio,f=e=>{if(p.value.length){const a=p.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(a,p)=>{const h=s("img"),b=s("play");return t(),l("div",null,[(t(!0),l(u,null,r(g.item.betDTOList,((s,u)=>{return t(),l("div",{key:u},[i("div",Xe,[i("div",Ze,[i("div",Qe,[m(i("img",ea,null,512),[[h,s.homeLogo]]),m(i("img",aa,null,512),[[h,s.awayLogo]])])]),i("div",sa,[i("div",ta,[d(n(f(s).homeTeam)+" v "+n(f(s).awayTeam)+" ",1),s.resultScore?(t(),l("span",la," ["+n(s.resultScore)+"]",1)):o("",!0)]),i("div",ia,n(f(s).leagueShortName),1)])]),i("div",na,[ua,i("div",ra,[i("div",ca,[i("span",null,n((r=s.betItemLang,JSON.parse(r)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:v(["color-2",["L"===s.betResultDetail?"color-3":""]])}," @"+n(s.ioRatio),3)]),i("div",oa,[s.homeTeam&&s.awayTeam?m((t(),l("span",ma,null,512)),[[b,s]]):(t(),l("span",va,"?")),i("span",null,[1==e.item.state?(t(),l("img",da)):"W"==s.betResultDetail?(t(),l("img",ga)):"L"==s.betResultDetail?(t(),l("img",ya)):"LW"==s.betResultDetail?(t(),l("img",pa)):"LL"==s.betResultDetail?(t(),l("img",ka)):"P"==s.betResultDetail?(t(),l("img",fa)):"D"==s.betResultDetail?(t(),l("img",ha)):(t(),l("img",ba))])])])]),i("div",_a,[i("div",Da,[i("span",null,n(a.$t("user.BettingAmount")),1),i("div",null,["CNY"===c(y)?(t(),l("img",{key:0,class:"img_1",src:c(I),alt:""},null,8,Ta)):"VNDK"===c(y)?(t(),l("img",{key:1,class:"img_1",src:c(j),alt:""},null,8,Ma)):(t(),l("img",$a)),i("span",null,n(c(B)(e.item.gold)),1)])]),i("div",Na,[0==e.item.state||-1==e.item.state||1==e.item.state?(t(),l("span",wa,n(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state||"LL"==s.betResultDetail?(t(),l("span",La,n(a.$t("user.practical"))+":",1)):o("",!0),i("div",null,[3!==e.item.state&&5!==e.item.state?(t(),l("span",Sa,[-1==e.item.state?(t(),l("span",Ca,n(a.$t("user.editPend")),1)):o("",!0),0==e.item.state?(t(),l("span",Oa,n(a.$t("user.affirmPend")),1)):o("",!0)])):o("",!0),3!==e.item.state&&5!==e.item.state||"LL"==s.betResultDetail?(t(),l("span",Ra,["CNY"===c(y)?(t(),l("img",{key:0,class:"img_1",src:c(F),alt:""},null,8,xa)):"VNDK"===c(y)?(t(),l("img",{key:1,class:"img_1",src:c(A),alt:""},null,8,Ia)):(t(),l("img",ja))])):o("",!0),0==e.item.state||-1==e.item.state||1==e.item.state?(t(),l("span",Ba,n(c(B)(k(e.item))),1)):3!==e.item.state&&5!==e.item.state||"LL"==s.betResultDetail?(t(),l("span",Fa,n(c(B)(e.item.winGold)),1)):o("",!0)])])]),Aa,i("div",Ya,[i("div",Pa,[i("span",null,n(a.$t("user.OrderID"))+":",1),i("span",null,n(e.item.orderId),1)]),i("div",Va,[i("span",null,n(a.$t("user.BettingTime"))+":",1),i("span",null,n(e.item.createDate),1)]),1==e.item.creditState?(t(),l("div",Ja,[i("span",null,n(a.$t("user.SettlementTime"))+":",1),i("span",null,n(c(Y)(e.item.resultDate)),1)])):o("",!0)])]);var r})),128))])}}});Ka.__scopeId="data-v-14b41a2a";const za=e=>(g("data-v-9b64a43a"),e=e(),y(),e),Ga={class:"timeSelect"},Ha=["onClick"],Wa={key:1,class:"imgStyle"},Ea=[za((()=>i("img",{class:"img_1",src:N,alt:""},null,-1)))],Ua={class:"status"},qa={class:"status_1"},Xa={key:0,class:"noData"},Za=za((()=>i("img",{class:"img_1",src:L},null,-1)));var Qa=e({emits:["valueChange"],setup(e,{expose:a,emit:s}){const m=p({arr:[]}),{t:d}=E(),g=k(2),y=k(""),T=k(""),M=k(d("user.state")),N=k({key:"",value:d("user.whole")}),w=k(!1),L=k(!1),C=k(!1),O=p({arr:[{value:d("user.whole"),key:""},{value:d("user.noFinal"),key:"0"},{value:d("user.final"),key:"1"}]}),x=p([{timeName:""},{timeName:d("user.today")},{timeName:d("user.sevenDay")}]);f((()=>{T.value=S().valueOf();y.value=T.value-6048e5}));const I=()=>{B()};let j=0;const B=async()=>{j++;const e={orderState:N.value.key,page:j,pageSize:10,beginTime:y.value,endTime:T.value},a=await U(e);if(200!==a.code)return L.value=!1,C.value=!0,q(a.msg);const s=a.data;if(200===a.code){s.forEach((e=>{m.arr.push(e)}));const e=[];m.arr.map((a=>{a.betDTOList.map((a=>{const{systemId:s}=a;e.push(s)}))})),R.dispatch("user/getMoreTeamList",e.join()),L.value=!1,C.value=!s.length}};return a({setPk:async function(e){N.value=e,L.value=!0,C.value=!1,j=0,m.arr=[],B(),console.log(e)},showBottom:w}),(e,a)=>{const d=h("van-list");return t(),l(u,null,[i("div",Ga,[(t(!0),l(u,null,r(c(x),((e,a)=>(t(),l("div",{key:a},[e.timeName?(t(),l("div",{key:0,class:v(["time",g.value==a?"timeActive":""]),onClick:b((e=>(e=>{g.value=e;const a=S().valueOf();let s=k("");const t=a,l=864e5;1===e&&(s=a-l),2===e&&(s=a-6048e5),y.value=s,T.value=t,L.value=!0,C.value=!1,j=0,m.arr=[],B()})(a)),["stop"])},n(e.timeName),11,Ha)):(t(),l("p",Wa,Ea))])))),128)),i("div",Ua,[i("div",qa,[i("span",null,n(e.$t("user.state")),1),i("div",{class:"round",onClick:a[0]||(a[0]=b((e=>(w.value=!0,void s("valueChange",!0,M.value,O.arr,N.value,1))),["stop"]))},[i("span",null,n(N.value.value),1),i("img",{class:v(["img_1",[w.value?"img_3":""]]),src:$,alt:""},null,2)])])])]),!c(m).arr.length&&C.value?(t(),l("div",Xa,[Za,i("p",null,n(e.$t("user.noData")),1)])):o("",!0),c(m).arr.length||!C.value?(t(),_(d,{key:1,loading:L.value,"onUpdate:loading":a[1]||(a[1]=e=>L.value=e),finished:C.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:I},{default:D((()=>[(t(!0),l(u,null,r(c(m).arr,((e,a)=>(t(),l("div",{key:a},[1==e.parlayNum?(t(),_(Ka,{key:0,item:e,class:"item"},null,8,["item"])):o("",!0),1!=e.parlayNum?(t(),_(Ue,{key:1,item:e,class:"item"},null,8,["item"])):o("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):o("",!0)],64)}}});Qa.__scopeId="data-v-9b64a43a";const es={key:0,class:"noData"},as=(e=>(g("data-v-fa13cb78"),e=e(),y(),e))((()=>i("img",{class:"img_1",src:L},null,-1))),ss={class:"date-title"},ts={class:"title"},ls={class:"line"},is={class:"left"},ns={class:"left-1"},us={class:"font"},rs={class:"font-1"},cs={class:"img_1",src:w},os={class:"left-2"},ms={class:"font"},vs={class:"right"},ds={key:0},gs={key:1},ys={class:"right-1"},ps=["src"],ks=["src"],fs=["src"],hs={class:"right-1"},bs=["src"],_s=["src"],Ds=["src"];var Ts=e({setup(e){const a=k(!1),v=k(!1),g=p({arr:[]}),y=p({arr:[]}),b=p({arr:[]});f((()=>{N()}));let M=0;const $=async()=>{M++;const e={page:M,pageSize:20,beginDate:"",endDate:"",needCount:1,tradeType:""},s=await Z(e),t=s.data;if(200===s.code){t.transferRecordRspList.forEach((e=>{g.arr.push(e)}));const e={},s=[];g.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const s=S(a.createTime).format("YYYY/MM/DD");e[s]?e[s].list.push(a):e[s]={date:s,list:[a]}})),Object.keys(e).map((a=>{s.push(JSON.parse(JSON.stringify(e[a])))})),y.arr=s,a.value=!1,v.value=!t.transferRecordRspList.length}else q(s.msg)},N=async()=>{const e=await X({});if(200!==e.code)return q(e.msg);b.arr=e.data},w=e=>{if(b.arr.length){const a=b.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||{}]||""}};return(e,p)=>{const k=h("van-divider"),f=h("van-list"),b=s("copy");return t(),l(u,null,[T(k),!c(g).arr.length&&v.value?(t(),l("div",es,[as,i("p",null,n(e.$t("user.noData")),1)])):o("",!0),c(g).arr.length||!v.value?(t(),_(f,{key:1,loading:a.value,"onUpdate:loading":p[0]||(p[0]=e=>a.value=e),finished:v.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:$},{default:D((()=>[(t(!0),l(u,null,r(c(y).arr,((a,s)=>(t(),l("div",{key:s,class:"dataList-item"},[i("div",ss,n(a.date),1),(t(!0),l(u,null,r(a.list,((a,s)=>(t(),l("div",{key:s,class:"item"},[i("div",ts,n(w(a.tradeType)),1),i("div",ls,[i("div",is,[i("div",ns,[i("div",us,n(e.$t("user.betId"))+":",1),i("span",null,[i("span",rs,n(a.payno),1),m(i("img",cs,null,512),[[b,a.payno]])])]),i("p",os,[i("span",ms,n(e.$t("user.time"))+":",1),i("span",null,n(c(Y)(a.createTime)),1)])]),i("div",vs,[i("div",null,[4==a.payWay?(t(),l("div",ds,n(e.$t("user.compensate")),1)):(t(),l("div",gs,n(e.$t("user.betNum")),1)),i("div",ys,["CNY"===a.currency?(t(),l("img",{key:0,src:c(I),style:{"object-fit":"contain"}},null,8,ps)):"VNDK"===a.currency?(t(),l("img",{key:1,src:c(j),style:{"object-fit":"contain"}},null,8,ks)):(t(),l("img",{key:2,src:c(C),style:{"object-fit":"contain"}},null,8,fs)),d(" "+n(c(B)(a.tradeGold)),1)])]),i("div",null,[i("div",null,n(e.$t("user.balance")),1),i("div",hs,["CNY"===a.currency?(t(),l("img",{key:0,src:c(I),style:{"object-fit":"contain"}},null,8,bs)):"VNDK"===a.currency?(t(),l("img",{key:1,src:c(j),style:{"object-fit":"contain"}},null,8,_s)):(t(),l("img",{key:2,src:c(C),style:{"object-fit":"contain"}},null,8,Ds)),d(" "+n(c(B)(a.gold)),1)])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):o("",!0)],64)}}});Ts.__scopeId="data-v-fa13cb78";const Ms=e=>(g("data-v-1e44c1c4"),e=e(),y(),e),$s={class:"status"},Ns={class:"status_1"},ws={class:"status_1"},Ls={key:0,class:"noData"},Ss=Ms((()=>i("img",{class:"img_1",src:L},null,-1))),Cs={class:"title"},Os={class:"left title-left"},Rs=Ms((()=>i("img",{class:"img_1",src:ae},null,-1))),xs={class:"right"},Is={class:"match-content"},js={class:"left"},Bs={class:"left-1"},Fs=["src"],As={class:"center"},Ys={class:"right"},Ps=["src"],Vs={class:"right-1"};var Js=e({emits:["valueChange"],setup(e,{expose:s,emit:m}){const{t:g}=E(),y=p({arr:[]}),b=k(!1),M=k(!1),N=k(g("user.Balls")),w=k(g("user.time")),L=k({name:S().format("MM/DD"),value:S().valueOf(),key:0}),C=k({gameType:"FT",key:"FT"}),O=k(!1),x=k(!1);f((()=>{R.dispatch("app/getAllSports")}));const I=a((()=>{const e=(R.state.app.sports||[]).filter((e=>!["SY","RB","COMBO","JC"].includes(e.gameType)&&e.gameCount));let a=[];if(e.length){a=[...e.map((e=>({gameType:e.gameType,key:e.gameType})))]}return a})),j=a((()=>[{name:S().format("MM/DD"),value:S().valueOf(),key:0},{name:S().subtract(1,"days").format("MM/DD"),value:S().subtract(1,"days").valueOf(),key:1},{name:S().subtract(2,"days").format("MM/DD"),value:S().subtract(2,"days").valueOf(),key:2},{name:S().subtract(3,"days").format("MM/DD"),value:S().subtract(3,"days").valueOf(),key:3},{name:S().subtract(4,"days").format("MM/DD"),value:S().subtract(4,"days").valueOf(),key:4},{name:S().subtract(5,"days").format("MM/DD"),value:S().subtract(5,"days").valueOf(),key:5},{name:S().subtract(6,"days").format("MM/DD"),value:S().subtract(6,"days").valueOf(),key:6},{name:S().subtract(7,"days").format("MM/DD"),value:S().subtract(7,"days").valueOf(),key:7},{name:S().subtract(8,"days").format("MM/DD"),value:S().subtract(8,"days").valueOf(),key:8},{name:S().subtract(9,"days").format("MM/DD"),value:S().subtract(9,"days").valueOf(),key:9},{name:S().subtract(10,"days").format("MM/DD"),value:S().subtract(10,"days").valueOf(),key:10},{name:S().subtract(11,"days").format("MM/DD"),value:S().subtract(11,"days").valueOf(),key:11},{name:S().subtract(12,"days").format("MM/DD"),value:S().subtract(12,"days").valueOf(),key:12},{name:S().subtract(13,"days").format("MM/DD"),value:S().subtract(13,"days").valueOf(),key:13},{name:S().subtract(14,"days").format("MM/DD"),value:S().subtract(14,"days").valueOf(),key:14}]));let B=0;const F=async()=>{B++;const e={page:B,gameSort:3,leagueIds:"",gameType:C.value.gameType,matchTime:L.value.value,pageSize:10,gameStatus:1,groupId:3},a=await Q(e),s=a.data;200===a.code?(s.list.forEach((e=>{y.arr.push(e)})),b.value=!1,M.value=y.arr.length===s.total):(M.value=!0,b.value=!1)},A=e=>e?`${ee}${e}`:"",Y=e=>e.gameDate||e.matchTime?S(e.gameDate).format("MM/DD HH:mm"):void 0;return s({setBallSelect:e=>{B=0,C.value=e,O.value=!1,b.value=!0,M.value=!1,y.arr=[],F()},setPk:async function(e){B=0,L.value=e,x.value=!1,b.value=!0,M.value=!1,y.arr=[],F(),console.log(e)},showBottom1:O,showBottom:x}),(e,a)=>{const s=h("van-divider"),g=h("van-list");return t(),l(u,null,[i("div",$s,[i("div",Ns,[i("span",null,n(e.$t("user.Balls")),1),i("div",{class:"round",onClick:a[0]||(a[0]=e=>(O.value=!0,void m("valueChange",!0,N.value,I.value,C.value,2)))},[i("span",null,n(e.$t(`user.sports.${C.value.gameType}`)),1),i("img",{class:v(["img_1",[O.value?"img_3":""]]),src:$,alt:""},null,2)])]),i("div",ws,[i("span",null,n(e.$t("user.time")),1),i("div",{class:"round",onClick:a[1]||(a[1]=e=>(x.value=!0,void m("valueChange",!0,w.value,j.value,L.value,3)))},[i("span",null,n(L.value.name),1),i("img",{class:v(["img_1",[x.value?"img_3":""]]),src:$,alt:""},null,2)])])]),T(s),!c(y).arr.length&&M.value?(t(),l("div",Ls,[Ss,i("p",null,n(e.$t("user.noData")),1)])):o("",!0),c(y).arr.length||!M.value?(t(),_(g,{key:1,loading:b.value,"onUpdate:loading":a[2]||(a[2]=e=>b.value=e),finished:M.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:F},{default:D((()=>[(t(!0),l(u,null,r(c(y).arr,((e,a)=>(t(),l("div",{key:a,class:"item"},[i("div",Cs,[i("div",Os,[Rs,d(" "+n(e.leagueName),1)]),i("div",xs,n(Y(e)),1)]),i("div",Is,[i("div",js,[i("div",Bs,n(e.homeTeamName),1),i("img",{class:"img_1",src:A(e.homeTeamLogo),alt:""},null,8,Fs)]),i("div",As,n(e.result.GM_h||0)+" : "+n(e.result.GM_c||0),1),i("div",Ys,[i("img",{class:"img_2",src:A(e.awayTeamLogo),alt:""},null,8,Ps),i("div",Vs,n(e.awayTeamName),1)])])])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):o("",!0)],64)}}});Js.__scopeId="data-v-1e44c1c4";const Ks={class:"result"},zs={class:"content"},Gs={class:"area-btn_1"},Hs={class:"popup-title"},Ws={class:"pk-list"},Es=["onClick"],Us={key:0},qs={key:1},Xs={key:2},Zs={key:3};var Qs=e({setup(e){const a=k(""),s=k({}),m=p({arr:[]}),d=M(),g=k(1),y=k(0),f=k(),_=k(),$=k(),N=k(!1),w=e=>{y.value=Number(e)},L=e=>{y.value=e,f.value.swipeTo(e),console.log()},S=(e,t,l,i,n)=>{a.value=t,s.value=i,m.arr=[...l],g.value=n,N.value=e};return(e,p)=>{const k=h("van-icon"),M=h("van-nav-bar"),C=h("van-swipe-item"),O=h("van-swipe"),R=h("van-popup");return t(),l("div",Ks,[T(M,{class:"bg-title",title:e.$t("user.result")},{left:D((()=>[T(k,{name:"arrow-left",class:"img_1",onClick:p[0]||(p[0]=e=>{d.back()})})])),_:1},8,["title"]),i("div",zs,[i("div",Gs,[i("span",{class:v(0==y.value?"active":""),onClick:p[1]||(p[1]=b((e=>L(0)),["stop"]))},n(e.$t("user.BettingHistory")),3),i("span",{class:v(1==y.value?"active":""),onClick:p[2]||(p[2]=b((e=>L(1)),["stop"]))},n(e.$t("user.FlowingHistory")),3),i("span",{class:v(2==y.value?"active":""),onClick:p[3]||(p[3]=b((e=>L(2)),["stop"]))},n(e.$t("user.matchResult")),3)]),T(O,{ref_key:"swipe",ref:f,loop:!1,"show-indicators":!1,duration:300,onChange:w},{default:D((()=>[T(C,null,{default:D((()=>[T(Qa,{ref_key:"childRefA",ref:_,onValueChange:S},null,512)])),_:1}),T(C,null,{default:D((()=>[T(Ts)])),_:1}),T(C,null,{default:D((()=>[T(Js,{ref_key:"childRefB",ref:$,onValueChange:S},null,512)])),_:1})])),_:1},512),T(R,{show:N.value,"onUpdate:show":p[4]||(p[4]=e=>N.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"50%"},onClose:p[5]||(p[5]=e=>{return a="close",console.log(a),1===g.value&&(_.value.showBottom=!1),2===g.value&&($.value.showBottom1=!1),void(3===g.value&&($.value.showBottom=!1));var a})},{default:D((()=>[i("div",Hs,n(a.value),1),i("div",Ws,[(t(!0),l(u,null,r(c(m).arr,((a,u)=>(t(),l("div",{key:u,class:v(["item",[s.value.key===a.key?"item-color":""]]),onClick:e=>async function(e){N.value=!1,s.value=e,1===g.value&&_.value.setPk(e),2===g.value&&$.value.setBallSelect(e),3===g.value&&$.value.setPk(e)}(a)},[i("p",null,[1===g.value?(t(),l("span",Us,n(a.value),1)):o("",!0),2===g.value?(t(),l("span",qs,n(e.$t(`user.sports.${a.gameType}`)),1)):o("",!0),3===g.value?(t(),l("span",Xs,n(a.name),1)):o("",!0),s.value.key===a.key?(t(),l("span",Zs,[T(k,{name:"success"})])):o("",!0)])],10,Es)))),128))])])),_:1},8,["show","duration"])])])}}});Qs.__scopeId="data-v-65811c08";export{Qs as default};
