import{s as e,b as a,r as s,E as t,o as l,S as n,P as i,V as u,F as o,Z as r,x as c,u as m,c as v,a0 as d,B as p,_ as g,q as y,X as A,Y as h,e as k,d as f,j as b,U as T,O as D,R as N,k as w}from"./vue.7b2d67a6.js";import{_ as C}from"./noData.1caa3bb3.js";import{h as L}from"./moment.40bc58bf.js";import{s as _,v as B,o as S,w as M,x as R,y as E,z as x,u as K,A as I,b as Y,B as O,C as P,E as j}from"./index.46b8efb1.js";var F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAAEc4A0XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADAAAAACRRQtxAAAAkElEQVQoFYWPAQ6AIAwD8RE+TR+pP9NH6I44UtnEJoTRdV0ppZTNzmWn4prsaq9KwQBnzyix7vwoXMVEHVkoeg84xaoPD4TVy05F7DuUSFOJYKcmjNv2d9Ni2zdZ94IKCBygq0LTCVYFa4gsg67M6mBGrkyYcWhT6D+yQTg0Q3x9KUQeulhTv/QZ+c+EuMPIN+mRT7lWjXr2AAAAAElFTkSuQmCC";const U=e=>(A("data-v-515c4e56"),e=e(),h(),e),W={class:"match-title"},$={class:"title-left"},J={class:"cur-odds"},G=p(" @"),V={class:"top2"},Q={class:"left"},z={class:"top-img"},X={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Z={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},H={class:"right"},q={class:"one"},ee=p(" @"),ae={class:"one two"},se={key:0},te={key:1},le={key:3,class:"img_1",src:M,alt:""},ne={class:"team"},ie={key:0},ue={class:"team"},oe={class:"money-num"},re={class:"money-num-1"},ce={class:"money-num-money"},me={key:1,name:"user-vndk",class:"img_1"},ve={class:"money-num-2"},de={key:0},pe={key:1},ge={key:0},ye={key:0,style:{color:"#FF9A00"}},Ae={key:1,style:{color:"#FF9A00"}},he={key:1},ke={key:1,name:"user-vndk",class:"img_1"},fe={key:2,class:"num"},be={key:3,class:"num"},Te=U((()=>i("div",{class:"line"},null,-1))),De={class:"top4"},Ne={class:"one"},we={class:"one"},Ce={key:0,class:"one"};var Le=e({props:{item:{type:Object,default:()=>{}}},setup(e){const A=e,h=a((()=>_.state.user.currency)),k=a((()=>_.state.user.teamNameList||[])),f=e=>3!==e.state&&5!==e.state||2===Number(e.cashoutType),b=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,T=e=>{if(k.value.length){const a=k.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(a,k)=>{const D=s("SportsIcon"),N=s("SvgIcon"),w=t("points"),C=t("img"),L=t("play");return l(),n("div",null,[i("div",W,[i("div",$,[i("div",null,u(e.item.parlayNum)+u(a.$t("user.session")),1),i("div",null,[(l(!0),n(o,null,r(e.item.betDTOList,((e,a)=>(l(),v(D,{key:a,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])]),i("div",J,[G,c(i("span",null,null,512),[[w,e.item.sioRatio]])])]),(l(!0),n(o,null,r(A.item.betDTOList,((a,s)=>{return l(),n("div",{key:s},[i("div",V,[i("div",Q,[i("div",z,[c(i("img",X,null,512),[[C,a.homeLogo]]),c(i("img",Z,null,512),[[C,a.awayLogo]])])]),i("div",H,[i("div",q,[i("span",null,u((o=a.betItemLang,JSON.parse(o)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:g([(t=a.betResultDetail,"W"===t||"LW"===t?"color-2":"L"===t||"LL"===t?"color-3":"P"===t?"color-4":"")])},[ee,c(i("span",null,null,512),[[w,a.ioRatio]])],2)]),i("div",ae,[a.homeTeam&&a.awayTeam?c((l(),n("span",se,null,512)),[[L,a]]):(l(),n("span",te,"?")),i("span",null,[2===Number(e.item.cashoutType)?(l(),v(N,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),v(N,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&b(a.betResultDetail)?(l(),v(N,{key:2,name:`user-${a.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),n("img",le))])]),i("div",ne,[p(u(T(a).homeTeam)+" v "+u(T(a).awayTeam)+" ",1),a.resultScore?(l(),n("span",ie," ["+u(a.resultScore)+"] ",1)):d("",!0)]),i("div",ue,[y(D,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",null,u(T(a).leagueShortName),1)])])])]);var t,o})),128)),i("div",oe,[i("div",re,[i("span",null,u(a.$t("user.BettingAmount"))+":",1),i("span",ce,["CNY"===m(h)?(l(),v(N,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(h)?(l(),n("span",me,"K₫ ")):(l(),v(N,{key:2,name:"user-usdt",class:"img_1"})),i("span",null,[c(i("span",null,null,512),[[w,e.item.gold]])])])]),i("div",ve,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",de,u(a.$t("user.CompensableAmount"))+":",1)):f(e.item)?(l(),n("span",pe,u(a.$t("user.practical"))+":",1)):d("",!0),i("span",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",ge,[-1===e.item.state?(l(),n("span",ye,u(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),n("span",Ae,u(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),f(e.item)?(l(),n("span",he,["CNY"===m(h)?(l(),v(N,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(h)?(l(),n("span",ke,"K₫ ")):(l(),v(N,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",fe,[c(i("span",null,null,512),[[w,(_=e.item,B(_.gold,_.sioRatio))]])])):f(e.item)?(l(),n("span",be,[c(i("span",null,null,512),[[w,e.item.winGold]])])):d("",!0)])])]),Te,i("div",De,[i("div",Ne,[i("span",null,u(a.$t("user.orderId"))+":",1),i("span",null,u(e.item.orderId),1)]),i("div",we,[i("span",null,u(a.$t("user.BettingTime"))+"：",1),i("span",null,u(e.item.createDate),1)]),1===e.item.creditState?(l(),n("div",Ce,[i("span",null,u(a.$t("user.SettlementTime"))+":",1),i("span",null,u(m(S)(e.item.resultDate)),1)])):d("",!0)])]);var _}}});Le.__scopeId="data-v-515c4e56";const _e=e=>(A("data-v-2f524932"),e=e(),h(),e),Be={class:"top"},Se={class:"left"},Me={class:"top-img"},Re={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Ee={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},xe={class:"right"},Ke={class:"font_1"},Ie={key:0},Ye={key:1},Oe={key:2,class:"color-1"},Pe={class:"league-name"},je={key:0,class:"font_2"},Fe={key:1,class:"font_2"},Ue={class:"top2"},We=_e((()=>i("div",{class:"left"},[i("img",{class:"img_1",src:x,alt:""})],-1))),$e={class:"right"},Je={class:"one"},Ge=p(" @"),Ve={class:"one two"},Qe={key:0},ze={key:1},Xe={key:2},Ze={key:3,class:"img_1",src:M,alt:""},He={class:"top3"},qe={class:"one"},ea={class:"money-num-money"},aa={key:1,name:"user-vndk",class:"img_1"},sa={key:3},ta={key:4},la={key:5},na=p("("),ia=p(")"),ua={class:"one two"},oa={key:0},ra={key:1},ca={key:0},ma={key:0,style:{color:"#FF9A00"}},va={key:1,style:{color:"#FF9A00"}},da={key:1},pa={key:1,name:"user-vndk",class:"img_1"},ga={key:2,class:"num color-1"},ya={key:3,class:"color-1"},Aa=_e((()=>i("div",{class:"line"},null,-1))),ha={class:"top4"},ka={class:"one"},fa={class:"one"},ba={key:0,class:"one"};var Ta=e({props:{item:{type:Object,default:()=>{}}},setup(e){const p=e,A=a((()=>_.state.user.currency)),h=a((()=>_.state.user.teamNameList||[])),k=a((()=>_.state.user.championLangList||[])),f=(e,a)=>{if(Number(a.ioRatio)<0){let s=Math.abs(Number(a.ioRatio));return R(e.gold,s)}},b=(e,a)=>{if(Number(a.ioRatio)<0){let s=0,t=Math.abs(Number(a.ioRatio));return t>1&&(s=E(R(e.gold,t),e.gold)),t<1&&(s=E(R(e.gold,t),e.gold)),s}return B(e.gold,e.sioRatio)},T=(e,a)=>3!==e.state&&5!==e.state||"LL"===a.betResultDetail||2===Number(e.cashoutType),D=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,N=e=>{if(h.value.length){const a=h.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},w=e=>{if(k.value.length){const a=k.value.find((a=>a.ratioId===e));return a?a.ratioName:"?"}return"?"};return(a,h)=>{const k=s("SportsIcon"),C=s("SvgIcon"),L=t("img"),_=t("points"),B=t("play");return l(),n("div",null,[(l(!0),n(o,null,r(p.item.betDTOList,((s,t)=>{return l(),n("div",{key:t},[i("div",Be,[i("div",Se,[i("div",Me,[c(i("img",Re,null,512),[[L,s.homeLogo]]),c(i("img",Ee,null,512),[[L,s.awayLogo]])])]),i("div",xe,[i("div",Ke,[s.championType?(l(),n("span",Ie,u(a.$t("betting.champion")),1)):(l(),n("span",Ye,u(N(s).homeTeam)+" v "+u(N(s).awayTeam),1)),s.resultScore?(l(),n("span",Oe," ["+u(s.resultScore)+"]",1)):d("",!0)]),i("div",Pe,[y(k,{"icon-src":s.gameType,class:"ball-img"},null,8,["icon-src"]),s.championType?(l(),n("div",je,u(w(s.systemId)),1)):(l(),n("div",Fe,u(N(s).leagueShortName),1))])])]),i("div",Ue,[We,i("div",$e,[i("div",Je,[i("span",null,u((r=s.betItemLang,JSON.parse(r)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:g([(o=s.betResultDetail,"W"===o||"LW"===o?"color-2":"L"===o||"LL"===o?"color-3":"P"===o?"color-4":"")])},[Ge,c(i("span",null,null,512),[[_,s.ioRatio]])],2)]),i("div",Ve,[s.championType?(l(),n("span",Qe,u(w(s.gameId)),1)):s.homeTeam&&s.awayTeam?c((l(),n("span",ze,null,512)),[[B,s]]):(l(),n("span",Xe,"?")),i("span",null,[2===Number(e.item.cashoutType)?(l(),v(C,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),v(C,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&D(s.betResultDetail)?(l(),v(C,{key:2,name:`user-${s.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),n("img",Ze))])])])]),i("div",He,[i("div",qe,[i("span",null,u(a.$t("user.BettingAmount")),1),i("div",ea,["CNY"===m(A)?(l(),v(C,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(A)?(l(),n("span",aa,"K₫ ")):(l(),v(C,{key:2,name:"user-usdt",class:"img_1"})),Number(s.ioRatio)>0?c((l(),n("span",sa,null,512)),[[_,e.item.gold]]):d("",!0),Number(s.ioRatio)<0?c((l(),n("span",ta,null,512)),[[_,f(e.item,s)]]):d("",!0),Number(s.ioRatio)<0?(l(),n("span",la,[na,c(i("span",null,null,512),[[_,e.item.gold]]),ia])):d("",!0)])]),i("div",ua,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",oa,u(a.$t("user.CompensableAmount"))+":",1)):T(e.item,s)?(l(),n("span",ra,u(a.$t("user.practical"))+":",1)):d("",!0),i("div",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",ca,[-1===e.item.state?(l(),n("span",ma,u(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),n("span",va,u(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),T(e.item,s)?(l(),n("span",da,["CNY"===m(A)?(l(),v(C,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(A)?(l(),n("span",pa,"K₫ ")):(l(),v(C,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",ga,[c(i("span",null,null,512),[[_,b(e.item,s)]])])):T(e.item,s)?(l(),n("span",ya,[c(i("span",null,null,512),[[_,e.item.winGold]])])):d("",!0)])])]),Aa,i("div",ha,[i("div",ka,[i("span",null,u(a.$t("user.OrderID"))+":",1),i("span",null,u(e.item.orderId),1)]),i("div",fa,[i("span",null,u(a.$t("user.BettingTime"))+":",1),i("span",null,u(e.item.createDate),1)]),1===e.item.creditState?(l(),n("div",ba,[i("span",null,u(a.$t("user.SettlementTime"))+":",1),i("span",null,u(m(S)(e.item.resultDate)),1)])):d("",!0)])]);var o,r})),128))])}}});Ta.__scopeId="data-v-2f524932";const Da=e=>(A("data-v-5d61d66b"),e=e(),h(),e),Na={class:"timeSelect"},wa={class:"status status-2"},Ca={class:"status_1"},La=p(" ~ "),_a={class:"status"},Ba={class:"status_1"},Sa={key:0,class:"noData"},Ma=Da((()=>i("img",{class:"img_1",src:C},null,-1)));var Ra=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:t}){const c=k({arr:[]}),{t:p}=K(),y=f(""),A=f(""),h=f(p("user.state")),N=f({key:"",value:p("user.whole")}),w=f(!1),C=f(!1),B=f(!1),S=f(!1),M=k({arr:[{value:p("user.whole"),key:""},{value:p("user.noFinal"),key:"0"},{value:p("user.final"),key:"1"}]}),R=f({beginName:L().subtract(90,"days").format("MM/DD"),endName:L().format("MM/DD")});b((()=>{A.value=L().valueOf();y.value=A.value-7776e6}));const E=()=>{O()};let x=0;const O=async()=>{x++;const e={orderState:N.value.key,page:x,pageSize:10,beginTime:y.value,endTime:A.value},a=await I(e);if(200!==a.code)return B.value=!1,S.value=!0,Y(a.msg);const s=a.data;if(200===a.code){s.forEach((e=>{c.arr.push(e)}));const e=[],a=[];c.arr.map((s=>{s.betDTOList.map((s=>{const{championType:t,systemId:l,gidm:n}=s;t&&a.push(n),e.push(l)}))})),_.dispatch("user/getMoreTeamList",e.join()),_.dispatch("user/getChampionLang",a.join()),B.value=!1,S.value=!s.length}};return a({setPk:async function(e){N.value=e,B.value=!0,S.value=!1,x=0,c.arr=[],O(),console.log(e)},setDateTime:e=>{const[a,s]=e;R.value.beginName=L(a).format("MM/DD"),R.value.endName=L(s).format("MM/DD"),y.value=L(a).valueOf(),A.value=L(s).valueOf(),B.value=!0,S.value=!1,C.value=!1,x=0,c.arr=[],O()},showBottom:w,showBottom2:C}),(e,a)=>{const p=s("van-list");return l(),n(o,null,[i("div",Na,[i("div",wa,[i("div",Ca,[i("span",null,u(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=T((e=>(C.value=!0,void t("timeChange",!0,1,y.value,A.value))),["stop"]))},[i("span",null,u(R.value.beginName),1),La,i("span",null,u(R.value.endName),1),i("img",{class:g(["img_1",[C.value?"img_3":""]]),src:F,alt:""},null,2)])])]),i("div",_a,[i("div",Ba,[i("span",null,u(e.$t("user.state")),1),i("div",{class:"round",onClick:a[1]||(a[1]=T((e=>(w.value=!0,void t("valueChange",!0,h.value,M.arr,N.value,1))),["stop"]))},[i("span",null,u(N.value.value),1),i("img",{class:g(["img_1",[w.value?"img_3":""]]),src:F,alt:""},null,2)])])])]),!m(c).arr.length&&S.value?(l(),n("div",Sa,[Ma,i("p",null,u(e.$t("user.noData")),1)])):d("",!0),m(c).arr.length||!S.value?(l(),v(p,{key:1,loading:B.value,"onUpdate:loading":a[2]||(a[2]=e=>B.value=e),finished:S.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:E},{default:D((()=>[(l(!0),n(o,null,r(m(c).arr,((e,a)=>(l(),n("div",{key:a},[1===Number(e.parlayNum)?(l(),v(Ta,{key:0,item:e,class:"item"},null,8,["item"])):d("",!0),1!==Number(e.parlayNum)?(l(),v(Le,{key:1,item:e,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ra.__scopeId="data-v-5d61d66b";var Ea="/assets/CNY1.c98baa5b.svg",xa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAHB8+mLAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAJgAAAADF1tjNAAAEvUlEQVRYCe1YbWhbVRg+7725jetwsQylc2wKuiGuQ2QiOgRxdip+4ITdzCr7IU1LO6jQWNkQhPtDnOCagsN2W1v/TLqZDBW1P/ZRQZRNFBxMJzpRCGyuoiMtw87m4x6f9y4n3pwkzWIz6I8eaN73vN8f5+uWBMbW9l7JUA2DEUMYgx6BxD4Pf74jupEJLO04ToBx4/Bw7CQj/uGp+wmM09b26Akh5KOKcWR0gAyDxCfKkYJKoBCWlJJKbBKRLCF6jvhHd1awmUfYOfmJdjxuyqOnskwLBKj18P7YhOJ7gqpGJOgHpDEB/1PIarUUcgsCbILwpSKLrK2UWlaFLJTMs870soEzQx9FrnWmmnuVVJNq8GrbVG8h7Qp3Byvp5S9KZltXX0suk/ueBS1a0nxo5M0/GPeGHYleXSn5OWetMs+TBGSmyI707pZS7PKIJD4E/ImEYSGIDaBvYnqwMRTy+P6fchaZf811rL9goTzVlpo/j3I4d6+mXMoZKUcrRFiOyTS9R/oq1fW8pcNENLMb6z6M3h0SAXc8sW/ggi7sn/PmEsdPPUSuEXbJXdlgBV8aG3orFYChM9g867H2tnwwsucRv5KHY5EgjWU4nYLYeJdBc5meCIdzAF/wn+04DZnz0+PIprUkZbuj9zmcHjZJ2QojN7NymSGxm78F/2hDkEbH3u1PKpkSg4qhYK01vOaFqBxUg3U3WEhZT61aJMV86joyGtvPtLpHuPANFnaKfqhyPSTJNVj0mxlXo6ycKc4qfqEpiuCH4cgrba50x/w0dar4aX68Yg23d/XdIknc5RdmvK1j5zpvH+uM/NyL8IXuXU2ZdPo97NXfpeHGxeYHv+K9OleEdlfvSpE1npLCbYNePDESG2KbuC2iU/Hh/ia+6XWncxnUZWFn0CTxvoGih8Id0WN8YuhCBskkUhgXJL6E7wlE8rEuw/Ntkb5nYac7K+UQvdjjLJudmf4N9OVKGNGm0OPTOBuTCPsvEnLGFdJCDktR11UkaS3OzhYlzxDPoN3x4dhrRV22O3eulm4mAuITkMEFWfG98yecTXC9E8MDH/kNFxn0MxivpYZKt+KyUQK1wkWDtVasVL7uNSxZNvN945TGXAvlv6tEadU9Y2W4XnAxwPlWsmQN1mKw3NGm61d77ery+nzBt7hiBb377/zl9choA27deyF4J+682/EJZuGuTeGFksIVdSP49+lZ++f5OzKEa+4m6OEKpDRsJAXJX3AjnTZN87vcisYzCcdJ+/UU7gVo73i1WaRzbwgp1giDRqyA9Rl/GyihSrCeLfaeLdnM08KVEfxb4JxsMF9PDL49yd8nP8vZ7FpkGkuMxh6uFMz1pucLchB+Dtrt0X7EdBGxnSPvuzybO4bqrVBBINi/0ZKv8ZQ5iRKfFYb8sUmEfj1wwJlRMvOBnZ1OY0pM3yFcuht+1sH3Rvh5AEtmacEuiYtmwHzMa7Ei9vS8E5y8knwGxCfxmnkcCrcq3vWEeJJdQJDHBdF485LbPt279+VZ5a8oQEWsBvkdfMPn3yy/ks1th+E9c8lbZN4TCIjJfzbdfyn/2TqXeAnvfwWorNRzkyibOlzw5+BigHrLap0vVrDWiunyC76C/wLnYcK3CaljuwAAAABJRU5ErkJggg==";const Ka=e=>(A("data-v-49e6a88a"),e=e(),h(),e),Ia={class:"timeSelect"},Ya={class:"status status-2"},Oa={class:"status_1"},Pa=p(" ~ "),ja={class:"status"},Fa={class:"status_1"},Ua={key:0,class:"noData"},Wa=Ka((()=>i("img",{class:"img_1",src:C},null,-1))),$a={class:"date-title"},Ja={class:"title"},Ga={class:"line"},Va={class:"left"},Qa={class:"left-1"},za={class:"font"},Xa={class:"font-1"},Za={class:"img_1",src:"/assets/copy.8596b31a.svg"},Ha={class:"left-2"},qa={class:"font"},es={class:"right"},as={key:0},ss={key:1},ts={class:"right-1"},ls=["src"],ns={key:1,name:"user-vndk",class:"money-symbol"},is=["src"],us={class:"right-1"},os=["src"],rs={key:1,name:"user-vndk",class:"money-symbol"},cs=["src"];var ms=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:p}){const{t:A}=K(),h=f(!1),N=f(!1),w=f(!1),C=f(!1),_=f({key:"",value:A("user.whole")}),B=f(A("user.type")),M=f(""),R=f(""),E=k({arr:[]}),x=k({arr:[]}),I=k({arr:[]}),j=k({arr:[{value:A("user.whole"),key:""},{value:A("user.noFinal"),key:"0"},{value:A("user.final"),key:"1"}]}),U=f({beginName:L().subtract(90,"days").format("MM/DD"),endName:L().format("MM/DD")});b((()=>{R.value=L().valueOf();M.value=R.value-7776e6,J()}));let W=0;const $=async()=>{W++;const e={page:W,pageSize:20,beginDate:M.value,endDate:R.value,needCount:1,tradeType:_.value.key},a=await P(e),s=a.data;if(200===a.code){s.transferRecordRspList.forEach((e=>{E.arr.push(e)}));const e={},a=[];E.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const s=L(a.createTime).format("YYYY/MM/DD");e[s]?e[s].list.push(a):e[s]={date:s,list:[a]}})),Object.keys(e).map((s=>{a.push(JSON.parse(JSON.stringify(e[s])))})),x.arr=a,h.value=!1,N.value=!s.transferRecordRspList.length}else Y(a.msg)},J=async()=>{const e=await O({});if(200!==e.code)return Y(e.msg);I.arr=e.data,j.arr=[{value:A("user.whole"),key:""},...e.data],j.arr.map((e=>{e.tradeType&&(e.value=G(e.tradeType),e.key=e.tradeType)}))},G=e=>{if(I.arr.length){const a=I.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||{}]||""}};return a({setPk:async function(e){_.value=e,h.value=!0,N.value=!1,W=0,E.arr=[],$(),console.log(e)},setDateTime:e=>{const[a,s]=e;U.value.beginName=L(a).format("MM/DD"),U.value.endName=L(s).format("MM/DD"),M.value=L(a).valueOf(),R.value=L(s).valueOf(),h.value=!0,N.value=!1,C.value=!1,W=0,E.arr=[],$()},showBottom:w,showBottom2:C}),(e,a)=>{const A=s("van-divider"),k=s("van-list"),f=t("copy"),b=t("points");return l(),n(o,null,[i("div",Ia,[i("div",Ya,[i("div",Oa,[i("span",null,u(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=T((e=>(C.value=!0,void p("timeChange",!0,2,M.value,R.value))),["stop"]))},[i("span",null,u(U.value.beginName),1),Pa,i("span",null,u(U.value.endName),1),i("img",{class:g(["img_1",[C.value?"img_3":""]]),src:F,alt:""},null,2)])])]),i("div",ja,[i("div",Fa,[i("span",null,u(e.$t("user.type")),1),i("div",{class:"round",onClick:a[1]||(a[1]=T((e=>(w.value=!0,void p("valueChange",!0,B.value,j.arr,_.value,2))),["stop"]))},[i("span",null,u(_.value.value),1),i("img",{class:g(["img_1",[w.value?"img_3":""]]),src:F,alt:""},null,2)])])])]),y(A,{class:"color-line"}),!m(E).arr.length&&N.value?(l(),n("div",Ua,[Wa,i("p",null,u(e.$t("user.noData")),1)])):d("",!0),m(E).arr.length||!N.value?(l(),v(k,{key:1,loading:h.value,"onUpdate:loading":a[2]||(a[2]=e=>h.value=e),finished:N.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:$},{default:D((()=>[(l(!0),n(o,null,r(m(x).arr,((a,s)=>(l(),n("div",{key:s,class:"dataList-item"},[i("div",$a,u(a.date),1),(l(!0),n(o,null,r(a.list,((a,s)=>(l(),n("div",{key:s,class:"item"},[i("div",Ja,u(G(a.tradeType)),1),i("div",Ga,[i("div",Va,[i("div",Qa,[i("div",za,u(e.$t("user.betId"))+":",1),i("span",null,[i("span",Xa,u(a.payno),1),c(i("img",Za,null,512),[[f,a.payno]])])]),i("p",Ha,[i("span",qa,u(e.$t("user.time"))+":",1),i("span",null,u(m(S)(a.createTime)),1)])]),i("div",es,[i("div",null,[4===a.payWay?(l(),n("div",as,u(e.$t("user.compensate")),1)):(l(),n("div",ss,u(e.$t("user.betNum")),1)),i("div",ts,["CNY"===a.currency?(l(),n("img",{key:0,src:m(Ea),style:{"object-fit":"contain"}},null,8,ls)):"VNDK"===a.currency?(l(),n("span",ns,"K₫ ")):(l(),n("img",{key:2,src:m(xa),style:{"object-fit":"contain"}},null,8,is)),c(i("span",null,null,512),[[b,a.tradeGold]])])]),i("div",null,[i("div",null,u(e.$t("user.balance")),1),i("div",us,["CNY"===a.currency?(l(),n("img",{key:0,src:m(Ea),style:{"object-fit":"contain"}},null,8,os)):"VNDK"===a.currency?(l(),n("span",rs,"K₫ ")):(l(),n("img",{key:2,src:m(xa),style:{"object-fit":"contain"}},null,8,cs)),c(i("span",null,null,512),[[b,a.gold]])])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});ms.__scopeId="data-v-49e6a88a";const vs={class:"ball-type"},ds={class:"status"},ps={class:"status_1"},gs={key:0,class:"noData"},ys=(e=>(A("data-v-00124f63"),e=e(),h(),e))((()=>i("img",{class:"img_1",src:C},null,-1))),As=["onClick"],hs={class:"title"},ks={class:"left title-left"},fs={class:"ball-name"},bs={class:"right"},Ts={class:"match-content"},Ds={class:"left"},Ns={class:"left-1"},ws={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Cs={class:"center"},Ls={class:"right"},_s={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Bs={class:"right-1"};var Ss=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:p}){const A=k({arr:[]}),h=f(!1),T=f(!1),N=f({name:L().format("YYYY/MM/DD"),value:L().valueOf(),key:0}),w=f({gameType:"FT",key:"FT"}),C=f(!1);b((()=>{_.dispatch("app/getAllSports")}));let B=0;const S=async()=>{B++;const e={page:B,gameSort:3,leagueIds:"",gameType:w.value.gameType,matchTime:N.value.value,pageSize:10,gameStatus:1,groupId:3},a=await j(e),s=a.data;200===a.code?(s.list.forEach((e=>{A.arr.push(e)})),h.value=!1,T.value=A.arr.length===s.total):(T.value=!0,h.value=!1)},M=e=>e.gameDate||e.matchTime?L(e.gameDate).format("MM/DD HH:mm"):void 0;const R=e=>{w.value={gameType:e,key:e},B=0,h.value=!0,T.value=!1,A.arr=[],S()};return a({setDateTime:async function(e){N.value={name:L(e).format("YYYY/MM/DD"),value:L(e).valueOf(),key:0},B=0,C.value=!1,h.value=!0,T.value=!1,A.arr=[],S(),console.log(e)},showBottom:C}),(e,a)=>{const k=s("sports-tabs"),f=s("van-divider"),b=s("SportsIcon"),w=s("van-list"),L=t("img");return l(),n(o,null,[i("div",vs,[y(k,{onReturnSportsSuccess:R})]),i("div",ds,[i("div",ps,[i("span",null,u(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=e=>(C.value=!0,void p("timeChange",!0,3,N.value.value)))},[i("span",null,u(N.value.name),1),i("img",{class:g(["img_1",[C.value?"img_3":""]]),src:F,alt:""},null,2)])])]),y(f,{class:"color-line"}),!m(A).arr.length&&T.value?(l(),n("div",gs,[ys,i("p",null,u(e.$t("user.noData")),1)])):d("",!0),m(A).arr.length||!T.value?(l(),v(w,{key:1,loading:h.value,"onUpdate:loading":a[1]||(a[1]=e=>h.value=e),finished:T.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:S},{default:D((()=>[(l(!0),n(o,null,r(m(A).arr,((e,a)=>(l(),n("div",{key:a,class:"item",onClick:a=>(async e=>{_.dispatch("user/getResultTab",2),_.dispatch("betting/setMoreShow",{status:!0,moreParams:{gidm:e.matchId}})})(e)},[i("div",hs,[i("div",ks,[y(b,{"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",fs,u(e.leagueName),1)]),i("div",bs,u(M(e)),1)]),i("div",Ts,[i("div",Ds,[i("div",Ns,u(e.homeTeamName),1),c(i("img",ws,null,512),[[L,e.homeTeamLogo]])]),i("div",Cs,u(e.result.GM_h||0)+" : "+u(e.result.GM_c||0),1),i("div",Ls,[c(i("img",_s,null,512),[[L,e.awayTeamLogo]]),i("div",Bs,u(e.awayTeamName),1)])])],8,As)))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ss.__scopeId="data-v-00124f63";const Ms={class:"result"},Rs={class:"content"},Es={class:"popup-title"},xs={class:"pk-list"},Ks=["onClick"],Is={key:0},Ys={key:1},Os={key:2},Ps={key:3};var js=e({setup(e){const t=a((()=>_.state.app.theme)),c=f(""),v=f({}),p=k({arr:[]}),A=N(),h=f(1),T=f(1),C=a((()=>_.state.user.resultTab||0)),B=f(),S=f(),M=f(),R=f(!1),E=f(!1),x=f(!1),K=L().valueOf(),I=f(new Date),Y=f(new Date(K-7776e6)),O=f(new Date),P=f(new Date(K-1296e6)),j=f([new Date(K-6048e5),new Date]),F=f(new Date),U=a((()=>"blue"===t.value));b((()=>{}));const W=(e,a,s,t,l)=>{c.value=a,v.value=t,p.arr=[...s],h.value=l,R.value=e};const $=(e,a,s,t)=>{console.log(a),T.value=a,1===a&&(j.value=[new Date(s),new Date(t)],E.value=e),2===a&&(j.value=[new Date(s),new Date(t)],E.value=e),3===a&&(F.value=new Date(s),x.value=e)},J=e=>{1===T.value&&(B.value.setDateTime(e),E.value=!1),2===T.value&&(M.value.setDateTime(e),E.value=!1),3===T.value&&(S.value.setDateTime(e),x.value=!1)},G=()=>{1===T.value&&(B.value.showBottom2=!1),2===T.value&&(M.value.showBottom2=!1),3===T.value&&(S.value.showBottom=!1)};return(e,a)=>{const t=s("van-icon"),k=s("van-nav-bar"),f=s("van-tab"),b=s("van-tabs"),T=s("van-popup"),N=s("van-calendar");return l(),n("div",Ms,[y(k,{class:"bg-title",title:e.$t("user.result")},{left:D((()=>[y(t,{name:"arrow-left",class:"img_1",onClick:a[0]||(a[0]=e=>{A.back()})})])),_:1},8,["title"]),i("div",Rs,[y(b,{active:m(C),"onUpdate:active":a[1]||(a[1]=e=>w(C)?C.value=e:null),"line-height":"3px",color:m(U)?"#0E3D66":"#1F2630","title-inactive-color":m(U)?"#88A6BB":"#96A5AA","title-active-color":m(U)?"#0E3D66":"#1F2630","line-width":"40px",duration:.3},{default:D((()=>[y(f,{title:e.$t("user.BettingHistory")},{default:D((()=>[y(Ra,{ref_key:"childRefA",ref:B,onValueChange:W,onTimeChange:$},null,512)])),_:1},8,["title"]),y(f,{title:e.$t("user.FlowingHistory")},{default:D((()=>[y(ms,{ref_key:"childRefC",ref:M,onValueChange:W,onTimeChange:$},null,512)])),_:1},8,["title"]),y(f,{title:e.$t("user.matchResult")},{default:D((()=>[y(Ss,{ref_key:"childRefB",ref:S,onValueChange:W,onTimeChange:$},null,512)])),_:1},8,["title"])])),_:1},8,["active","color","title-inactive-color","title-active-color","duration"]),y(T,{show:R.value,"onUpdate:show":a[2]||(a[2]=e=>R.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"60%"},onClose:a[3]||(a[3]=e=>{return a="close",console.log(a),1===h.value&&(B.value.showBottom=!1),2===h.value&&(M.value.showBottom=!1),void(3===h.value&&(S.value.showBottom=!1));var a})},{default:D((()=>[i("div",Es,u(c.value),1),i("div",xs,[(l(!0),n(o,null,r(m(p).arr,((e,a)=>(l(),n("div",{key:a,class:g(["item",[v.value.key===e.key?"item-color":""]]),onClick:a=>async function(e){R.value=!1,v.value=e,1===h.value&&B.value.setPk(e),2===h.value&&M.value.setPk(e),3===h.value&&S.value.setPk(e)}(e)},[i("p",null,[1===h.value?(l(),n("span",Is,u(e.value),1)):d("",!0),2===h.value?(l(),n("span",Ys,u(e.value),1)):d("",!0),3===h.value?(l(),n("span",Os,u(e.name),1)):d("",!0),v.value.key===e.key?(l(),n("span",Ps,[y(t,{name:"success"})])):d("",!0)])],10,Ks)))),128))])])),_:1},8,["show","duration"]),y(N,{show:E.value,"onUpdate:show":a[4]||(a[4]=e=>E.value=e),type:"range","min-date":Y.value,"max-date":I.value,"default-date":j.value,onConfirm:J,onClose:a[5]||(a[5]=e=>G())},null,8,["show","min-date","max-date","default-date"]),y(N,{show:x.value,"onUpdate:show":a[6]||(a[6]=e=>x.value=e),type:"single","min-date":P.value,"max-date":O.value,"default-date":F.value,onConfirm:J,onClose:a[7]||(a[7]=e=>G())},null,8,["show","min-date","max-date","default-date"])])])}}});js.__scopeId="data-v-33fcc2ac";export{js as default};
