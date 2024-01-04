import{s as e,b as a,r as t,E as s,o as l,R as i,P as n,S as u,F as r,Z as c,u as o,c as m,a2 as v,x as d,Y as y,B as g,W as p,X as f,e as k,d as h,j as b,a1 as _,O as D,q as T,V as $}from"./vue.e791136f.js";import{_ as M,a as L,C as N,V as w,U as S,b as O}from"./VNDK1.359ad8e5.js";import{_ as C}from"./noData.53f69283.js";import{h as R}from"./moment.9709ab41.js";import{s as I,o as x,p as j,k as B,q as F,v as A,w as Y,x as P,y as V,z as K,A as z,B as G,u as J,C as U,b as W,E,F as H,G as q,I as X}from"./index.e8b4260a.js";import{_ as Z}from"./ball1.823a463c.js";const Q=e=>(p("data-v-14a59f05"),e=e(),f(),e),ee={class:"match-title"},ae={class:"title-left"},te={class:"top2"},se={class:"left"},le={class:"top-img"},ie={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},ne={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},ue={class:"right"},re={class:"one"},ce={class:"one two"},oe={key:0},me={key:1},ve={key:0,class:"img_1",src:F,alt:""},de={key:1,class:"img_1",src:A,alt:""},ye={key:2,class:"img_1",src:Y,alt:""},ge={key:3,class:"img_1",src:P,alt:""},pe={key:4,class:"img_1",src:V,alt:""},fe={key:5,class:"img_1",src:K,alt:""},ke={key:6,class:"img_1",src:z,alt:""},he={key:7,class:"img_1",src:z,alt:""},be={class:"team"},_e={key:0},De={class:"team"},Te=Q((()=>n("img",{class:"img_1",src:x,alt:""},null,-1))),$e={class:"money-num"},Me={class:"money-num-1"},Le={class:"money-num-2"},Ne={key:0},we={key:1},Se={key:0},Oe={key:0,style:{color:"#FF9A00"}},Ce={key:1,style:{color:"#FF9A00"}},Re={key:1},Ie={key:2,class:"num"},xe={key:3,class:"num"},je=Q((()=>n("div",{class:"line"},null,-1))),Be={class:"top4"},Fe={class:"one"},Ae={class:"one"},Ye={key:0,class:"one"};var Pe=e({props:{item:{type:Object,default:()=>{}}},setup(e){const p=e,f=a((()=>I.state.user.currency)),k=a((()=>I.state.user.teamNameList||[])),h=e=>{if(k.value.length){const a=k.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(a,k)=>{const b=t("SvgIcon"),_=s("img"),D=s("play");return l(),i("div",null,[n("div",ee,[n("div",ae,[n("div",null,u(e.item.parlayNum)+u(a.$t("user.session")),1),n("div",null,[(l(!0),i(r,null,c(Number(e.item.parlayNum),(e=>(l(),i("img",{key:e,class:"img_1",src:x,alt:""})))),128))])])]),(l(!0),i(r,null,c(p.item.betDTOList,((a,t)=>{return l(),i("div",{key:t},[n("div",te,[n("div",se,[n("div",le,[d(n("img",ie,null,512),[[_,a.homeLogo]]),d(n("img",ne,null,512),[[_,a.awayLogo]])])]),n("div",ue,[n("div",re,[n("span",null,u((s=a.betItemLang,JSON.parse(s)[localStorage.getItem("locale")||"zh-cn"])),1),n("span",{class:y(["color-2",["L"===a.betResultDetail?"color-3":""]])}," @"+u(a.ioRatio),3)]),n("div",ce,[a.homeTeam&&a.awayTeam?d((l(),i("span",oe,null,512)),[[D,a]]):(l(),i("span",me,"?")),n("span",null,[1==e.item.state?(l(),i("img",ve)):"W"==a.betResultDetail?(l(),i("img",de)):"L"==a.betResultDetail?(l(),i("img",ye)):"LW"==a.betResultDetail?(l(),i("img",ge)):"LL"==a.betResultDetail?(l(),i("img",pe)):"P"==a.betResultDetail?(l(),i("img",fe)):"D"==a.betResultDetail?(l(),i("img",ke)):(l(),i("img",he))])]),n("div",be,[g(u(h(a).homeTeam)+" v "+u(h(a).awayTeam)+" ",1),a.resultScore?(l(),i("span",_e," ["+u(a.resultScore)+"] ",1)):v("",!0)]),n("div",De,[Te,n("span",null,u(h(a).leagueShortName),1)])])])]);var s})),128)),n("div",$e,[n("div",Me,[n("span",null,u(a.$t("user.BettingAmount"))+":",1),n("span",null,["CNY"===o(f)?(l(),m(b,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===o(f)?(l(),m(b,{key:1,name:"user-vndk",class:"img_1"})):(l(),m(b,{key:2,name:"user-usdt",class:"img_1"})),n("span",null,u(o(j)(e.item.gold)),1)])]),n("div",Le,[0==e.item.state||-1==e.item.state||1==e.item.state?(l(),i("span",Ne,u(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state&&0!==e.item.state?(l(),i("span",we,u(a.$t("user.practical"))+":",1)):v("",!0),n("span",null,[3!==e.item.state&&5!==e.item.state?(l(),i("span",Se,[-1==e.item.state?(l(),i("span",Oe,u(a.$t("user.editPend")),1)):v("",!0),0==e.item.state?(l(),i("span",Ce,u(a.$t("user.affirmPend")),1)):v("",!0)])):v("",!0),3!==e.item.state&&5!==e.item.state?(l(),i("span",Re,["CNY"===o(f)?(l(),m(b,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===o(f)?(l(),m(b,{key:1,name:"user-vndk",class:"img_1"})):(l(),m(b,{key:2,name:"user-usdt",class:"img_1"}))])):v("",!0),0==e.item.state||-1==e.item.state||1==e.item.state?(l(),i("span",Ie,u(o(j)((T=e.item,T.gold*T.sioRatio))),1)):3!==e.item.state&&5!==e.item.state?(l(),i("span",xe,u(o(j)(e.item.winGold)),1)):v("",!0)])])]),je,n("div",Be,[n("div",Fe,[n("span",null,u(a.$t("user.orderId"))+":",1),n("span",null,u(e.item.orderId),1)]),n("div",Ae,[n("span",null,u(a.$t("user.BettingTime"))+"：",1),n("span",null,u(e.item.createDate),1)]),1==e.item.creditState?(l(),i("div",Ye,[n("span",null,u(a.$t("user.SettlementTime"))+":",1),n("span",null,u(o(B)(e.item.resultDate)),1)])):v("",!0)])]);var T}}});Pe.__scopeId="data-v-14a59f05";const Ve=e=>(p("data-v-be191acc"),e=e(),f(),e),Ke={class:"top"},ze={class:"left"},Ge={class:"top-img"},Je={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Ue={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},We={class:"right"},Ee={class:"font_1"},He={key:0},qe={key:1},Xe={key:2,class:"color-1"},Ze={key:0,class:"font_2"},Qe={key:1,class:"font_2"},ea={class:"top2"},aa=Ve((()=>n("div",{class:"left"},[n("img",{class:"img_1",src:G,alt:""})],-1))),ta={class:"right"},sa={class:"one"},la={class:"one two"},ia={key:0},na={key:1},ua={key:2},ra={key:0,class:"img_1",src:F,alt:""},ca={key:1,class:"img_1",src:A,alt:""},oa={key:2,class:"img_1",src:Y,alt:""},ma={key:3,class:"img_1",src:P,alt:""},va={key:4,class:"img_1",src:V,alt:""},da={key:5,class:"img_1",src:K,alt:""},ya={key:6,class:"img_1",src:z,alt:""},ga={key:7,class:"img_1",src:z,alt:""},pa={class:"top3"},fa={class:"one"},ka={class:"one two"},ha={key:0},ba={key:1},_a={key:0},Da={key:0,style:{color:"#FF9A00"}},Ta={key:1,style:{color:"#FF9A00"}},$a={key:1},Ma={key:2,class:"num color-1"},La={key:3,class:"color-1"},Na=Ve((()=>n("div",{class:"line"},null,-1))),wa={class:"top4"},Sa={class:"one"},Oa={class:"one"},Ca={key:0,class:"one"};var Ra=e({props:{item:{type:Object,default:()=>{}}},setup(e){const g=e,p=a((()=>I.state.user.currency)),f=a((()=>I.state.user.teamNameList||[])),k=a((()=>I.state.user.championLangList||[])),h=e=>e.gold*e.sioRatio,b=e=>{if(f.value.length){const a=f.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},_=e=>{if(k.value.length){const a=k.value.find((a=>a.ratioId===e));return a?a.ratioName:"?"}return"?"};return(a,f)=>{const k=t("SvgIcon"),D=s("img"),T=s("play");return l(),i("div",null,[(l(!0),i(r,null,c(g.item.betDTOList,((t,s)=>{return l(),i("div",{key:s},[n("div",Ke,[n("div",ze,[n("div",Ge,[d(n("img",Je,null,512),[[D,t.homeLogo]]),d(n("img",Ue,null,512),[[D,t.awayLogo]])])]),n("div",We,[n("div",Ee,[t.championType?(l(),i("span",He,u(a.$t("betting.champion")),1)):(l(),i("span",qe,u(b(t).homeTeam)+" v "+u(b(t).awayTeam),1)),t.resultScore?(l(),i("span",Xe," ["+u(t.resultScore)+"]",1)):v("",!0)]),t.championType?(l(),i("div",Ze,u(_(t.systemId)),1)):(l(),i("div",Qe,u(b(t).leagueShortName),1))])]),n("div",ea,[aa,n("div",ta,[n("div",sa,[n("span",null,u((r=t.betItemLang,JSON.parse(r)[localStorage.getItem("locale")||"zh-cn"])),1),n("span",{class:y(["color-2",["L"===t.betResultDetail?"color-3":""]])}," @"+u(t.ioRatio),3)]),n("div",la,[t.championType?(l(),i("span",ia,u(_(t.gameId)),1)):t.homeTeam&&t.awayTeam?d((l(),i("span",na,null,512)),[[T,t]]):(l(),i("span",ua,"?")),n("span",null,[1==e.item.state?(l(),i("img",ra)):"W"==t.betResultDetail?(l(),i("img",ca)):"L"==t.betResultDetail?(l(),i("img",oa)):"LW"==t.betResultDetail?(l(),i("img",ma)):"LL"==t.betResultDetail?(l(),i("img",va)):"P"==t.betResultDetail?(l(),i("img",da)):"D"==t.betResultDetail?(l(),i("img",ya)):(l(),i("img",ga))])])])]),n("div",pa,[n("div",fa,[n("span",null,u(a.$t("user.BettingAmount")),1),n("div",null,["CNY"===o(p)?(l(),m(k,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===o(p)?(l(),m(k,{key:1,name:"user-vndk",class:"img_1"})):(l(),m(k,{key:2,name:"user-usdt",class:"img_1"})),n("span",null,u(o(j)(e.item.gold)),1)])]),n("div",ka,[0==e.item.state||-1==e.item.state||1==e.item.state?(l(),i("span",ha,u(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state||"LL"==t.betResultDetail?(l(),i("span",ba,u(a.$t("user.practical"))+":",1)):v("",!0),n("div",null,[3!==e.item.state&&5!==e.item.state?(l(),i("span",_a,[-1==e.item.state?(l(),i("span",Da,u(a.$t("user.editPend")),1)):v("",!0),0==e.item.state?(l(),i("span",Ta,u(a.$t("user.affirmPend")),1)):v("",!0)])):v("",!0),3!==e.item.state&&5!==e.item.state||"LL"==t.betResultDetail?(l(),i("span",$a,["CNY"===o(p)?(l(),m(k,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===o(p)?(l(),m(k,{key:1,name:"user-vndk",class:"img_1"})):(l(),m(k,{key:2,name:"user-usdt",class:"img_1"}))])):v("",!0),0==e.item.state||-1==e.item.state||1==e.item.state?(l(),i("span",Ma,u(o(j)(h(e.item))),1)):3!==e.item.state&&5!==e.item.state||"LL"==t.betResultDetail?(l(),i("span",La,u(o(j)(e.item.winGold)),1)):v("",!0)])])]),Na,n("div",wa,[n("div",Sa,[n("span",null,u(a.$t("user.OrderID"))+":",1),n("span",null,u(e.item.orderId),1)]),n("div",Oa,[n("span",null,u(a.$t("user.BettingTime"))+":",1),n("span",null,u(e.item.createDate),1)]),1==e.item.creditState?(l(),i("div",Ca,[n("span",null,u(a.$t("user.SettlementTime"))+":",1),n("span",null,u(o(B)(e.item.resultDate)),1)])):v("",!0)])]);var r})),128))])}}});Ra.__scopeId="data-v-be191acc";const Ia=e=>(p("data-v-2c60496e"),e=e(),f(),e),xa={class:"timeSelect"},ja=["onClick"],Ba={key:1,class:"imgStyle"},Fa=[Ia((()=>n("img",{class:"img_1",src:L,alt:""},null,-1)))],Aa={class:"status"},Ya={class:"status_1"},Pa={key:0,class:"noData"},Va=Ia((()=>n("img",{class:"img_1",src:C},null,-1)));var Ka=e({emits:["valueChange"],setup(e,{expose:a,emit:s}){const d=k({arr:[]}),{t:g}=J(),p=h(2),f=h(""),T=h(""),$=h(g("user.state")),L=h({key:"",value:g("user.whole")}),N=h(!1),w=h(!1),S=h(!1),O=k({arr:[{value:g("user.whole"),key:""},{value:g("user.noFinal"),key:"0"},{value:g("user.final"),key:"1"}]}),C=k([{timeName:""},{timeName:g("user.today")},{timeName:g("user.sevenDay")}]);b((()=>{T.value=R().valueOf();f.value=T.value-6048e5}));const x=()=>{B()};let j=0;const B=async()=>{j++;const e={orderState:L.value.key,page:j,pageSize:10,beginTime:f.value,endTime:T.value},a=await U(e);if(200!==a.code)return w.value=!1,S.value=!0,W(a.msg);const t=a.data;if(200===a.code){t.forEach((e=>{d.arr.push(e)}));const e=[],a=[];d.arr.map((t=>{t.betDTOList.map((t=>{const{championType:s,systemId:l,gidm:i}=t;s&&a.push(i),e.push(l)}))})),I.dispatch("user/getMoreTeamList",e.join()),I.dispatch("user/getChampionLang",a.join()),w.value=!1,S.value=!t.length}};return a({setPk:async function(e){L.value=e,w.value=!0,S.value=!1,j=0,d.arr=[],B(),console.log(e)},showBottom:N}),(e,a)=>{const g=t("van-list");return l(),i(r,null,[n("div",xa,[(l(!0),i(r,null,c(o(C),((e,a)=>(l(),i("div",{key:a},[e.timeName?(l(),i("div",{key:0,class:y(["time",p.value==a?"timeActive":""]),onClick:_((e=>(e=>{p.value=e;const a=R().valueOf();let t=h("");const s=a,l=864e5;1===e&&(t=a-l),2===e&&(t=a-6048e5),f.value=t,T.value=s,w.value=!0,S.value=!1,j=0,d.arr=[],B()})(a)),["stop"])},u(e.timeName),11,ja)):(l(),i("p",Ba,Fa))])))),128)),n("div",Aa,[n("div",Ya,[n("span",null,u(e.$t("user.state")),1),n("div",{class:"round",onClick:a[0]||(a[0]=_((e=>(N.value=!0,void s("valueChange",!0,$.value,O.arr,L.value,1))),["stop"]))},[n("span",null,u(L.value.value),1),n("img",{class:y(["img_1",[N.value?"img_3":""]]),src:M,alt:""},null,2)])])])]),!o(d).arr.length&&S.value?(l(),i("div",Pa,[Va,n("p",null,u(e.$t("user.noData")),1)])):v("",!0),o(d).arr.length||!S.value?(l(),m(g,{key:1,loading:w.value,"onUpdate:loading":a[1]||(a[1]=e=>w.value=e),finished:S.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:x},{default:D((()=>[(l(!0),i(r,null,c(o(d).arr,((e,a)=>(l(),i("div",{key:a},[1==e.parlayNum?(l(),m(Ra,{key:0,item:e,class:"item"},null,8,["item"])):v("",!0),1!=e.parlayNum?(l(),m(Pe,{key:1,item:e,class:"item"},null,8,["item"])):v("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):v("",!0)],64)}}});Ka.__scopeId="data-v-2c60496e";const za={key:0,class:"noData"},Ga=(e=>(p("data-v-6f5935ae"),e=e(),f(),e))((()=>n("img",{class:"img_1",src:C},null,-1))),Ja={class:"date-title"},Ua={class:"title"},Wa={class:"line"},Ea={class:"left"},Ha={class:"left-1"},qa={class:"font"},Xa={class:"font-1"},Za={class:"img_1",src:O},Qa={class:"left-2"},et={class:"font"},at={class:"right"},tt={key:0},st={key:1},lt={class:"right-1"},it=["src"],nt=["src"],ut=["src"],rt={class:"right-1"},ct=["src"],ot=["src"],mt=["src"];var vt=e({setup(e){const a=h(!1),y=h(!1),p=k({arr:[]}),f=k({arr:[]}),_=k({arr:[]});b((()=>{L()}));let $=0;const M=async()=>{$++;const e={page:$,pageSize:20,beginDate:"",endDate:"",needCount:1,tradeType:""},t=await H(e),s=t.data;if(200===t.code){s.transferRecordRspList.forEach((e=>{p.arr.push(e)}));const e={},t=[];p.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const t=R(a.createTime).format("YYYY/MM/DD");e[t]?e[t].list.push(a):e[t]={date:t,list:[a]}})),Object.keys(e).map((a=>{t.push(JSON.parse(JSON.stringify(e[a])))})),f.arr=t,a.value=!1,y.value=!s.transferRecordRspList.length}else W(t.msg)},L=async()=>{const e=await E({});if(200!==e.code)return W(e.msg);_.arr=e.data},O=e=>{if(_.arr.length){const a=_.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||{}]||""}};return(e,k)=>{const h=t("van-divider"),b=t("van-list"),_=s("copy");return l(),i(r,null,[T(h),!o(p).arr.length&&y.value?(l(),i("div",za,[Ga,n("p",null,u(e.$t("user.noData")),1)])):v("",!0),o(p).arr.length||!y.value?(l(),m(b,{key:1,loading:a.value,"onUpdate:loading":k[0]||(k[0]=e=>a.value=e),finished:y.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:M},{default:D((()=>[(l(!0),i(r,null,c(o(f).arr,((a,t)=>(l(),i("div",{key:t,class:"dataList-item"},[n("div",Ja,u(a.date),1),(l(!0),i(r,null,c(a.list,((a,t)=>(l(),i("div",{key:t,class:"item"},[n("div",Ua,u(O(a.tradeType)),1),n("div",Wa,[n("div",Ea,[n("div",Ha,[n("div",qa,u(e.$t("user.betId"))+":",1),n("span",null,[n("span",Xa,u(a.payno),1),d(n("img",Za,null,512),[[_,a.payno]])])]),n("p",Qa,[n("span",et,u(e.$t("user.time"))+":",1),n("span",null,u(o(B)(a.createTime)),1)])]),n("div",at,[n("div",null,[4==a.payWay?(l(),i("div",tt,u(e.$t("user.compensate")),1)):(l(),i("div",st,u(e.$t("user.betNum")),1)),n("div",lt,["CNY"===a.currency?(l(),i("img",{key:0,src:o(N),style:{"object-fit":"contain"}},null,8,it)):"VNDK"===a.currency?(l(),i("img",{key:1,src:o(w),style:{"object-fit":"contain"}},null,8,nt)):(l(),i("img",{key:2,src:o(S),style:{"object-fit":"contain"}},null,8,ut)),g(" "+u(o(j)(a.tradeGold)),1)])]),n("div",null,[n("div",null,u(e.$t("user.balance")),1),n("div",rt,["CNY"===a.currency?(l(),i("img",{key:0,src:o(N),style:{"object-fit":"contain"}},null,8,ct)):"VNDK"===a.currency?(l(),i("img",{key:1,src:o(w),style:{"object-fit":"contain"}},null,8,ot)):(l(),i("img",{key:2,src:o(S),style:{"object-fit":"contain"}},null,8,mt)),g(" "+u(o(j)(a.gold)),1)])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):v("",!0)],64)}}});vt.__scopeId="data-v-6f5935ae";const dt=e=>(p("data-v-5fbdc6fc"),e=e(),f(),e),yt={class:"status"},gt={class:"status_1"},pt={class:"status_1"},ft={key:0,class:"noData"},kt=dt((()=>n("img",{class:"img_1",src:C},null,-1))),ht={class:"title"},bt={class:"left title-left"},_t=dt((()=>n("img",{class:"img_1",src:Z},null,-1))),Dt={class:"right"},Tt={class:"match-content"},$t={class:"left"},Mt={class:"left-1"},Lt=["src"],Nt={class:"center"},wt={class:"right"},St=["src"],Ot={class:"right-1"};var Ct=e({emits:["valueChange"],setup(e,{expose:s,emit:d}){const{t:p}=J(),f=k({arr:[]}),_=h(!1),$=h(!1),L=h(p("user.Balls")),N=h(p("user.time")),w=h({name:R().format("MM/DD"),value:R().valueOf(),key:0}),S=h({gameType:"FT",key:"FT"}),O=h(!1),C=h(!1);b((()=>{I.dispatch("app/getAllSports")}));const x=a((()=>{const e=(I.state.app.sports||[]).filter((e=>!["SY","RB","COMBO","JC"].includes(e.gameType)&&e.gameCount));let a=[];if(e.length){a=[...e.map((e=>({gameType:e.gameType,key:e.gameType})))]}return a})),j=a((()=>[{name:R().format("MM/DD"),value:R().valueOf(),key:0},{name:R().subtract(1,"days").format("MM/DD"),value:R().subtract(1,"days").valueOf(),key:1},{name:R().subtract(2,"days").format("MM/DD"),value:R().subtract(2,"days").valueOf(),key:2},{name:R().subtract(3,"days").format("MM/DD"),value:R().subtract(3,"days").valueOf(),key:3},{name:R().subtract(4,"days").format("MM/DD"),value:R().subtract(4,"days").valueOf(),key:4},{name:R().subtract(5,"days").format("MM/DD"),value:R().subtract(5,"days").valueOf(),key:5},{name:R().subtract(6,"days").format("MM/DD"),value:R().subtract(6,"days").valueOf(),key:6},{name:R().subtract(7,"days").format("MM/DD"),value:R().subtract(7,"days").valueOf(),key:7},{name:R().subtract(8,"days").format("MM/DD"),value:R().subtract(8,"days").valueOf(),key:8},{name:R().subtract(9,"days").format("MM/DD"),value:R().subtract(9,"days").valueOf(),key:9},{name:R().subtract(10,"days").format("MM/DD"),value:R().subtract(10,"days").valueOf(),key:10},{name:R().subtract(11,"days").format("MM/DD"),value:R().subtract(11,"days").valueOf(),key:11},{name:R().subtract(12,"days").format("MM/DD"),value:R().subtract(12,"days").valueOf(),key:12},{name:R().subtract(13,"days").format("MM/DD"),value:R().subtract(13,"days").valueOf(),key:13},{name:R().subtract(14,"days").format("MM/DD"),value:R().subtract(14,"days").valueOf(),key:14}]));let B=0;const F=async()=>{B++;const e={page:B,gameSort:3,leagueIds:"",gameType:S.value.gameType,matchTime:w.value.value,pageSize:10,gameStatus:1,groupId:3},a=await q(e),t=a.data;200===a.code?(t.list.forEach((e=>{f.arr.push(e)})),_.value=!1,$.value=f.arr.length===t.total):($.value=!0,_.value=!1)},A=e=>e?`${X}${e}`:"",Y=e=>e.gameDate||e.matchTime?R(e.gameDate).format("MM/DD HH:mm"):void 0;return s({setBallSelect:e=>{B=0,S.value=e,O.value=!1,_.value=!0,$.value=!1,f.arr=[],F()},setPk:async function(e){B=0,w.value=e,C.value=!1,_.value=!0,$.value=!1,f.arr=[],F(),console.log(e)},showBottom1:O,showBottom:C}),(e,a)=>{const s=t("van-divider"),p=t("van-list");return l(),i(r,null,[n("div",yt,[n("div",gt,[n("span",null,u(e.$t("user.Balls")),1),n("div",{class:"round",onClick:a[0]||(a[0]=e=>(O.value=!0,void d("valueChange",!0,L.value,x.value,S.value,2)))},[n("span",null,u(e.$t(`user.sports.${S.value.gameType}`)),1),n("img",{class:y(["img_1",[O.value?"img_3":""]]),src:M,alt:""},null,2)])]),n("div",pt,[n("span",null,u(e.$t("user.time")),1),n("div",{class:"round",onClick:a[1]||(a[1]=e=>(C.value=!0,void d("valueChange",!0,N.value,j.value,w.value,3)))},[n("span",null,u(w.value.name),1),n("img",{class:y(["img_1",[C.value?"img_3":""]]),src:M,alt:""},null,2)])])]),T(s),!o(f).arr.length&&$.value?(l(),i("div",ft,[kt,n("p",null,u(e.$t("user.noData")),1)])):v("",!0),o(f).arr.length||!$.value?(l(),m(p,{key:1,loading:_.value,"onUpdate:loading":a[2]||(a[2]=e=>_.value=e),finished:$.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:F},{default:D((()=>[(l(!0),i(r,null,c(o(f).arr,((e,a)=>(l(),i("div",{key:a,class:"item"},[n("div",ht,[n("div",bt,[_t,g(" "+u(e.leagueName),1)]),n("div",Dt,u(Y(e)),1)]),n("div",Tt,[n("div",$t,[n("div",Mt,u(e.homeTeamName),1),n("img",{class:"img_1",src:A(e.homeTeamLogo),alt:""},null,8,Lt)]),n("div",Nt,u(e.result.GM_h||0)+" : "+u(e.result.GM_c||0),1),n("div",wt,[n("img",{class:"img_2",src:A(e.awayTeamLogo),alt:""},null,8,St),n("div",Ot,u(e.awayTeamName),1)])])])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):v("",!0)],64)}}});Ct.__scopeId="data-v-5fbdc6fc";const Rt={class:"result"},It={class:"content"},xt={class:"popup-title"},jt={class:"pk-list"},Bt=["onClick"],Ft={key:0},At={key:1},Yt={key:2},Pt={key:3};var Vt=e({setup(e){const a=h(""),s=h({}),m=k({arr:[]}),d=$(),g=h(1),p=h(0),f=h(),b=h(),_=h(!1),M=(e,t,l,i,n)=>{a.value=t,s.value=i,m.arr=[...l],g.value=n,_.value=e};return(e,k)=>{const h=t("van-icon"),$=t("van-nav-bar"),L=t("van-tab"),N=t("van-tabs"),w=t("van-popup");return l(),i("div",Rt,[T($,{class:"bg-title",title:e.$t("user.result")},{left:D((()=>[T(h,{name:"arrow-left",class:"img_1",onClick:k[0]||(k[0]=e=>{d.back()})})])),_:1},8,["title"]),n("div",It,[T(N,{active:p.value,"onUpdate:active":k[1]||(k[1]=e=>p.value=e),swipeable:!0,"line-height":"3px",color:"#1F2630 ","title-inactive-color":"#96A5AA","title-active-color":"#1F2630","line-width":"40px",duration:.3},{default:D((()=>[T(L,{title:e.$t("user.BettingHistory")},{default:D((()=>[T(Ka,{ref_key:"childRefA",ref:f,onValueChange:M},null,512)])),_:1},8,["title"]),T(L,{title:e.$t("user.FlowingHistory")},{default:D((()=>[T(vt)])),_:1},8,["title"]),T(L,{title:e.$t("user.matchResult")},{default:D((()=>[T(Ct,{ref_key:"childRefB",ref:b,onValueChange:M},null,512)])),_:1},8,["title"])])),_:1},8,["active","duration"]),T(w,{show:_.value,"onUpdate:show":k[2]||(k[2]=e=>_.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"50%"},onClose:k[3]||(k[3]=e=>{return a="close",console.log(a),1===g.value&&(f.value.showBottom=!1),2===g.value&&(b.value.showBottom1=!1),void(3===g.value&&(b.value.showBottom=!1));var a})},{default:D((()=>[n("div",xt,u(a.value),1),n("div",jt,[(l(!0),i(r,null,c(o(m).arr,((a,t)=>(l(),i("div",{key:t,class:y(["item",[s.value.key===a.key?"item-color":""]]),onClick:e=>async function(e){_.value=!1,s.value=e,1===g.value&&f.value.setPk(e),2===g.value&&b.value.setBallSelect(e),3===g.value&&b.value.setPk(e)}(a)},[n("p",null,[1===g.value?(l(),i("span",Ft,u(a.value),1)):v("",!0),2===g.value?(l(),i("span",At,u(e.$t(`user.sports.${a.gameType}`)),1)):v("",!0),3===g.value?(l(),i("span",Yt,u(a.name),1)):v("",!0),s.value.key===a.key?(l(),i("span",Pt,[T(h,{name:"success"})])):v("",!0)])],10,Bt)))),128))])])),_:1},8,["show","duration"])])])}}});Vt.__scopeId="data-v-78a61b4b";export{Vt as default};
