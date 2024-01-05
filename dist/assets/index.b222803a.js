import{s as e,b as a,r as t,E as s,o as l,R as n,P as i,U as u,F as o,_ as c,u as r,c as m,a2 as v,x as d,Z as g,B as p,q as y,X as A,Y as k,e as h,d as f,j as b,S as D,O as T,W as w}from"./vue.bfc6c13a.js";import{_ as N}from"./noData.1caa3bb3.js";import{h as _}from"./moment.9709ab41.js";import{s as L,o as C,k as R,p as S,q as B,v as E,w as x,x as I,y as M,z as Y,A as K,u as O,B as j,b as F,C as P,E as U,F as J,G as $}from"./index.671670cd.js";var W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAAEc4A0XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADAAAAACRRQtxAAAAkElEQVQoFYWPAQ6AIAwD8RE+TR+pP9NH6I44UtnEJoTRdV0ppZTNzmWn4prsaq9KwQBnzyix7vwoXMVEHVkoeg84xaoPD4TVy05F7DuUSFOJYKcmjNv2d9Ni2zdZ94IKCBygq0LTCVYFa4gsg67M6mBGrkyYcWhT6D+yQTg0Q3x9KUQeulhTv/QZ+c+EuMPIN+mRT7lWjXr2AAAAAElFTkSuQmCC";const G={class:"match-title"},V={class:"title-left"},Q={class:"top2"},z={class:"left"},X={class:"top-img"},Z={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},H={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},q={class:"right"},ee={class:"one"},ae={class:"one two"},te={key:0},se={key:1},le={key:0,class:"img_1",src:S,alt:""},ne={key:1,class:"img_1",src:B,alt:""},ie={key:2,class:"img_1",src:E,alt:""},ue={key:3,class:"img_1",src:x,alt:""},oe={key:4,class:"img_1",src:I,alt:""},ce={key:5,class:"img_1",src:M,alt:""},re={key:6,class:"img_1",src:Y,alt:""},me={key:7,class:"img_1",src:Y,alt:""},ve={class:"team"},de={key:0},ge={class:"team"},pe={class:"money-num"},ye={class:"money-num-1"},Ae={class:"money-num-2"},ke={key:0},he={key:1},fe={key:0},be={key:0,style:{color:"#FF9A00"}},De={key:1,style:{color:"#FF9A00"}},Te={key:1},we={key:2,class:"num"},Ne={key:3,class:"num"},_e=(e=>(A("data-v-67938d17"),e=e(),k(),e))((()=>i("div",{class:"line"},null,-1))),Le={class:"top4"},Ce={class:"one"},Re={class:"one"},Se={key:0,class:"one"};var Be=e({props:{item:{type:Object,default:()=>{}}},setup(e){const A=e,k=a((()=>L.state.user.currency)),h=a((()=>L.state.user.teamNameList||[])),f=e=>{if(h.value.length){const a=h.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(a,h)=>{const b=t("SportsIcon"),D=t("SvgIcon"),T=s("img"),w=s("play");return l(),n("div",null,[i("div",G,[i("div",V,[i("div",null,u(e.item.parlayNum)+u(a.$t("user.session")),1),i("div",null,[(l(!0),n(o,null,c(e.item.betDTOList,((e,a)=>(l(),m(b,{key:a,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])])]),(l(!0),n(o,null,c(A.item.betDTOList,((a,t)=>{return l(),n("div",{key:t},[i("div",Q,[i("div",z,[i("div",X,[d(i("img",Z,null,512),[[T,a.homeLogo]]),d(i("img",H,null,512),[[T,a.awayLogo]])])]),i("div",q,[i("div",ee,[i("span",null,u((s=a.betItemLang,JSON.parse(s)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:g(["color-2",["L"===a.betResultDetail?"color-3":""]])}," @"+u(a.ioRatio),3)]),i("div",ae,[a.homeTeam&&a.awayTeam?d((l(),n("span",te,null,512)),[[w,a]]):(l(),n("span",se,"?")),i("span",null,[1==e.item.state?(l(),n("img",le)):"W"==a.betResultDetail?(l(),n("img",ne)):"L"==a.betResultDetail?(l(),n("img",ie)):"LW"==a.betResultDetail?(l(),n("img",ue)):"LL"==a.betResultDetail?(l(),n("img",oe)):"P"==a.betResultDetail?(l(),n("img",ce)):"D"==a.betResultDetail?(l(),n("img",re)):(l(),n("img",me))])]),i("div",ve,[p(u(f(a).homeTeam)+" v "+u(f(a).awayTeam)+" ",1),a.resultScore?(l(),n("span",de," ["+u(a.resultScore)+"] ",1)):v("",!0)]),i("div",ge,[y(b,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",null,u(f(a).leagueShortName),1)])])])]);var s})),128)),i("div",pe,[i("div",ye,[i("span",null,u(a.$t("user.BettingAmount"))+":",1),i("span",null,["CNY"===r(k)?(l(),m(D,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===r(k)?(l(),m(D,{key:1,name:"user-vndk",class:"img_1"})):(l(),m(D,{key:2,name:"user-usdt",class:"img_1"})),i("span",null,u(r(C)(e.item.gold)),1)])]),i("div",Ae,[0==e.item.state||-1==e.item.state||1==e.item.state?(l(),n("span",ke,u(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state&&0!==e.item.state?(l(),n("span",he,u(a.$t("user.practical"))+":",1)):v("",!0),i("span",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",fe,[-1==e.item.state?(l(),n("span",be,u(a.$t("user.editPend")),1)):v("",!0),0==e.item.state?(l(),n("span",De,u(a.$t("user.affirmPend")),1)):v("",!0)])):v("",!0),3!==e.item.state&&5!==e.item.state?(l(),n("span",Te,["CNY"===r(k)?(l(),m(D,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===r(k)?(l(),m(D,{key:1,name:"user-vndk",class:"img_1"})):(l(),m(D,{key:2,name:"user-usdt",class:"img_1"}))])):v("",!0),0==e.item.state||-1==e.item.state||1==e.item.state?(l(),n("span",we,u(r(C)((N=e.item,N.gold*N.sioRatio))),1)):3!==e.item.state&&5!==e.item.state?(l(),n("span",Ne,u(r(C)(e.item.winGold)),1)):v("",!0)])])]),_e,i("div",Le,[i("div",Ce,[i("span",null,u(a.$t("user.orderId"))+":",1),i("span",null,u(e.item.orderId),1)]),i("div",Re,[i("span",null,u(a.$t("user.BettingTime"))+"：",1),i("span",null,u(e.item.createDate),1)]),1==e.item.creditState?(l(),n("div",Se,[i("span",null,u(a.$t("user.SettlementTime"))+":",1),i("span",null,u(r(R)(e.item.resultDate)),1)])):v("",!0)])]);var N}}});Be.__scopeId="data-v-67938d17";const Ee=e=>(A("data-v-56256a2b"),e=e(),k(),e),xe={class:"top"},Ie={class:"left"},Me={class:"top-img"},Ye={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Ke={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Oe={class:"right"},je={class:"font_1"},Fe={key:0},Pe={key:1},Ue={key:2,class:"color-1"},Je={class:"league-name"},$e={key:0,class:"font_2"},We={key:1,class:"font_2"},Ge={class:"top2"},Ve=Ee((()=>i("div",{class:"left"},[i("img",{class:"img_1",src:K,alt:""})],-1))),Qe={class:"right"},ze={class:"one"},Xe={class:"one two"},Ze={key:0},He={key:1},qe={key:2},ea={key:0,class:"img_1",src:S,alt:""},aa={key:1,class:"img_1",src:B,alt:""},ta={key:2,class:"img_1",src:E,alt:""},sa={key:3,class:"img_1",src:x,alt:""},la={key:4,class:"img_1",src:I,alt:""},na={key:5,class:"img_1",src:M,alt:""},ia={key:6,class:"img_1",src:Y,alt:""},ua={key:7,class:"img_1",src:Y,alt:""},oa={class:"top3"},ca={class:"one"},ra={class:"one two"},ma={key:0},va={key:1},da={key:0},ga={key:0,style:{color:"#FF9A00"}},pa={key:1,style:{color:"#FF9A00"}},ya={key:1},Aa={key:2,class:"num color-1"},ka={key:3,class:"color-1"},ha=Ee((()=>i("div",{class:"line"},null,-1))),fa={class:"top4"},ba={class:"one"},Da={class:"one"},Ta={key:0,class:"one"};var wa=e({props:{item:{type:Object,default:()=>{}}},setup(e){const p=e,A=a((()=>L.state.user.currency)),k=a((()=>L.state.user.teamNameList||[])),h=a((()=>L.state.user.championLangList||[])),f=e=>e.gold*e.sioRatio,b=e=>{if(k.value.length){const a=k.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},D=e=>{if(h.value.length){const a=h.value.find((a=>a.ratioId===e));return a?a.ratioName:"?"}return"?"};return(a,k)=>{const h=t("SportsIcon"),T=t("SvgIcon"),w=s("img"),N=s("play");return l(),n("div",null,[(l(!0),n(o,null,c(p.item.betDTOList,((t,s)=>{return l(),n("div",{key:s},[i("div",xe,[i("div",Ie,[i("div",Me,[d(i("img",Ye,null,512),[[w,t.homeLogo]]),d(i("img",Ke,null,512),[[w,t.awayLogo]])])]),i("div",Oe,[i("div",je,[t.championType?(l(),n("span",Fe,u(a.$t("betting.champion")),1)):(l(),n("span",Pe,u(b(t).homeTeam)+" v "+u(b(t).awayTeam),1)),t.resultScore?(l(),n("span",Ue," ["+u(t.resultScore)+"]",1)):v("",!0)]),i("div",Je,[y(h,{"icon-src":t.gameType,class:"ball-img"},null,8,["icon-src"]),t.championType?(l(),n("div",$e,u(D(t.systemId)),1)):(l(),n("div",We,u(b(t).leagueShortName),1))])])]),i("div",Ge,[Ve,i("div",Qe,[i("div",ze,[i("span",null,u((o=t.betItemLang,JSON.parse(o)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:g(["color-2",["L"===t.betResultDetail?"color-3":""]])}," @"+u(t.ioRatio),3)]),i("div",Xe,[t.championType?(l(),n("span",Ze,u(D(t.gameId)),1)):t.homeTeam&&t.awayTeam?d((l(),n("span",He,null,512)),[[N,t]]):(l(),n("span",qe,"?")),i("span",null,[1==e.item.state?(l(),n("img",ea)):"W"==t.betResultDetail?(l(),n("img",aa)):"L"==t.betResultDetail?(l(),n("img",ta)):"LW"==t.betResultDetail?(l(),n("img",sa)):"LL"==t.betResultDetail?(l(),n("img",la)):"P"==t.betResultDetail?(l(),n("img",na)):"D"==t.betResultDetail?(l(),n("img",ia)):(l(),n("img",ua))])])])]),i("div",oa,[i("div",ca,[i("span",null,u(a.$t("user.BettingAmount")),1),i("div",null,["CNY"===r(A)?(l(),m(T,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===r(A)?(l(),m(T,{key:1,name:"user-vndk",class:"img_1"})):(l(),m(T,{key:2,name:"user-usdt",class:"img_1"})),i("span",null,u(r(C)(e.item.gold)),1)])]),i("div",ra,[0==e.item.state||-1==e.item.state||1==e.item.state?(l(),n("span",ma,u(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state||"LL"==t.betResultDetail?(l(),n("span",va,u(a.$t("user.practical"))+":",1)):v("",!0),i("div",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",da,[-1==e.item.state?(l(),n("span",ga,u(a.$t("user.editPend")),1)):v("",!0),0==e.item.state?(l(),n("span",pa,u(a.$t("user.affirmPend")),1)):v("",!0)])):v("",!0),3!==e.item.state&&5!==e.item.state||"LL"==t.betResultDetail?(l(),n("span",ya,["CNY"===r(A)?(l(),m(T,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===r(A)?(l(),m(T,{key:1,name:"user-vndk",class:"img_1"})):(l(),m(T,{key:2,name:"user-usdt",class:"img_1"}))])):v("",!0),0==e.item.state||-1==e.item.state||1==e.item.state?(l(),n("span",Aa,u(r(C)(f(e.item))),1)):3!==e.item.state&&5!==e.item.state||"LL"==t.betResultDetail?(l(),n("span",ka,u(r(C)(e.item.winGold)),1)):v("",!0)])])]),ha,i("div",fa,[i("div",ba,[i("span",null,u(a.$t("user.OrderID"))+":",1),i("span",null,u(e.item.orderId),1)]),i("div",Da,[i("span",null,u(a.$t("user.BettingTime"))+":",1),i("span",null,u(e.item.createDate),1)]),1==e.item.creditState?(l(),n("div",Ta,[i("span",null,u(a.$t("user.SettlementTime"))+":",1),i("span",null,u(r(R)(e.item.resultDate)),1)])):v("",!0)])]);var o})),128))])}}});wa.__scopeId="data-v-56256a2b";const Na=e=>(A("data-v-d7d5b416"),e=e(),k(),e),_a={class:"timeSelect"},La={class:"status status-2"},Ca={class:"status_1"},Ra=p(" ~ "),Sa={class:"status"},Ba={class:"status_1"},Ea={key:0,class:"noData"},xa=Na((()=>i("img",{class:"img_1",src:N},null,-1)));var Ia=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:s}){const d=h({arr:[]}),{t:p}=O(),y=f(""),A=f(""),k=f(p("user.state")),w=f({key:"",value:p("user.whole")}),N=f(!1),C=f(!1),R=f(!1),S=f(!1),B=h({arr:[{value:p("user.whole"),key:""},{value:p("user.noFinal"),key:"0"},{value:p("user.final"),key:"1"}]}),E=f({beginName:_().subtract(7,"days").format("MM/DD"),endName:_().format("MM/DD")});b((()=>{A.value=_().valueOf();y.value=A.value-6048e5}));const x=()=>{M()};let I=0;const M=async()=>{I++;const e={orderState:w.value.key,page:I,pageSize:10,beginTime:y.value,endTime:A.value},a=await j(e);if(200!==a.code)return R.value=!1,S.value=!0,F(a.msg);const t=a.data;if(200===a.code){t.forEach((e=>{d.arr.push(e)}));const e=[],a=[];d.arr.map((t=>{t.betDTOList.map((t=>{const{championType:s,systemId:l,gidm:n}=t;s&&a.push(n),e.push(l)}))})),L.dispatch("user/getMoreTeamList",e.join()),L.dispatch("user/getChampionLang",a.join()),R.value=!1,S.value=!t.length}};return a({setPk:async function(e){w.value=e,R.value=!0,S.value=!1,I=0,d.arr=[],M(),console.log(e)},setDateTime:e=>{const[a,t]=e;E.value.beginName=_(a).format("MM/DD"),E.value.endName=_(t).format("MM/DD"),y.value=_(a).valueOf(),A.value=_(t).valueOf(),R.value=!0,S.value=!1,C.value=!1,I=0,d.arr=[],M()},showBottom:N,showBottom2:C}),(e,a)=>{const p=t("van-list");return l(),n(o,null,[i("div",_a,[i("div",La,[i("div",Ca,[i("span",null,u(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=D((e=>(C.value=!0,void s("timeChange",!0,1,y.value,A.value))),["stop"]))},[i("span",null,u(E.value.beginName),1),Ra,i("span",null,u(E.value.endName),1),i("img",{class:g(["img_1",[C.value?"img_3":""]]),src:W,alt:""},null,2)])])]),i("div",Sa,[i("div",Ba,[i("span",null,u(e.$t("user.state")),1),i("div",{class:"round",onClick:a[1]||(a[1]=D((e=>(N.value=!0,void s("valueChange",!0,k.value,B.arr,w.value,1))),["stop"]))},[i("span",null,u(w.value.value),1),i("img",{class:g(["img_1",[N.value?"img_3":""]]),src:W,alt:""},null,2)])])])]),!r(d).arr.length&&S.value?(l(),n("div",Ea,[xa,i("p",null,u(e.$t("user.noData")),1)])):v("",!0),r(d).arr.length||!S.value?(l(),m(p,{key:1,loading:R.value,"onUpdate:loading":a[2]||(a[2]=e=>R.value=e),finished:S.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:x},{default:T((()=>[(l(!0),n(o,null,c(r(d).arr,((e,a)=>(l(),n("div",{key:a},[1==e.parlayNum?(l(),m(wa,{key:0,item:e,class:"item"},null,8,["item"])):v("",!0),1!=e.parlayNum?(l(),m(Be,{key:1,item:e,class:"item"},null,8,["item"])):v("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):v("",!0)],64)}}});Ia.__scopeId="data-v-d7d5b416";var Ma="/assets/CNY1.c98baa5b.svg",Ya="/assets/VNDK1.c3b1fb46.svg",Ka="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAHB8+mLAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAJgAAAADF1tjNAAAEvUlEQVRYCe1YbWhbVRg+7725jetwsQylc2wKuiGuQ2QiOgRxdip+4ITdzCr7IU1LO6jQWNkQhPtDnOCagsN2W1v/TLqZDBW1P/ZRQZRNFBxMJzpRCGyuoiMtw87m4x6f9y4n3pwkzWIz6I8eaN73vN8f5+uWBMbW9l7JUA2DEUMYgx6BxD4Pf74jupEJLO04ToBx4/Bw7CQj/uGp+wmM09b26Akh5KOKcWR0gAyDxCfKkYJKoBCWlJJKbBKRLCF6jvhHd1awmUfYOfmJdjxuyqOnskwLBKj18P7YhOJ7gqpGJOgHpDEB/1PIarUUcgsCbILwpSKLrK2UWlaFLJTMs870soEzQx9FrnWmmnuVVJNq8GrbVG8h7Qp3Byvp5S9KZltXX0suk/ueBS1a0nxo5M0/GPeGHYleXSn5OWetMs+TBGSmyI707pZS7PKIJD4E/ImEYSGIDaBvYnqwMRTy+P6fchaZf811rL9goTzVlpo/j3I4d6+mXMoZKUcrRFiOyTS9R/oq1fW8pcNENLMb6z6M3h0SAXc8sW/ggi7sn/PmEsdPPUSuEXbJXdlgBV8aG3orFYChM9g867H2tnwwsucRv5KHY5EgjWU4nYLYeJdBc5meCIdzAF/wn+04DZnz0+PIprUkZbuj9zmcHjZJ2QojN7NymSGxm78F/2hDkEbH3u1PKpkSg4qhYK01vOaFqBxUg3U3WEhZT61aJMV86joyGtvPtLpHuPANFnaKfqhyPSTJNVj0mxlXo6ycKc4qfqEpiuCH4cgrba50x/w0dar4aX68Yg23d/XdIknc5RdmvK1j5zpvH+uM/NyL8IXuXU2ZdPo97NXfpeHGxeYHv+K9OleEdlfvSpE1npLCbYNePDESG2KbuC2iU/Hh/ia+6XWncxnUZWFn0CTxvoGih8Id0WN8YuhCBskkUhgXJL6E7wlE8rEuw/Ntkb5nYac7K+UQvdjjLJudmf4N9OVKGNGm0OPTOBuTCPsvEnLGFdJCDktR11UkaS3OzhYlzxDPoN3x4dhrRV22O3eulm4mAuITkMEFWfG98yecTXC9E8MDH/kNFxn0MxivpYZKt+KyUQK1wkWDtVasVL7uNSxZNvN945TGXAvlv6tEadU9Y2W4XnAxwPlWsmQN1mKw3NGm61d77ery+nzBt7hiBb377/zl9choA27deyF4J+682/EJZuGuTeGFksIVdSP49+lZ++f5OzKEa+4m6OEKpDRsJAXJX3AjnTZN87vcisYzCcdJ+/UU7gVo73i1WaRzbwgp1giDRqyA9Rl/GyihSrCeLfaeLdnM08KVEfxb4JxsMF9PDL49yd8nP8vZ7FpkGkuMxh6uFMz1pucLchB+Dtrt0X7EdBGxnSPvuzybO4bqrVBBINi/0ZKv8ZQ5iRKfFYb8sUmEfj1wwJlRMvOBnZ1OY0pM3yFcuht+1sH3Rvh5AEtmacEuiYtmwHzMa7Ei9vS8E5y8knwGxCfxmnkcCrcq3vWEeJJdQJDHBdF485LbPt279+VZ5a8oQEWsBvkdfMPn3yy/ks1th+E9c8lbZN4TCIjJfzbdfyn/2TqXeAnvfwWorNRzkyibOlzw5+BigHrLap0vVrDWiunyC76C/wLnYcK3CaljuwAAAABJRU5ErkJggg==";const Oa={key:0,class:"noData"},ja=(e=>(A("data-v-d3790b96"),e=e(),k(),e))((()=>i("img",{class:"img_1",src:N},null,-1))),Fa={class:"date-title"},Pa={class:"title"},Ua={class:"line"},Ja={class:"left"},$a={class:"left-1"},Wa={class:"font"},Ga={class:"font-1"},Va={class:"img_1",src:"/assets/copy.8596b31a.svg"},Qa={class:"left-2"},za={class:"font"},Xa={class:"right"},Za={key:0},Ha={key:1},qa={class:"right-1"},et=["src"],at=["src"],tt=["src"],st={class:"right-1"},lt=["src"],nt=["src"],it=["src"];var ut=e({setup(e){const a=f(!1),g=f(!1),A=h({arr:[]}),k=h({arr:[]}),D=h({arr:[]});b((()=>{L()}));let w=0;const N=async()=>{w++;const e={page:w,pageSize:20,beginDate:"",endDate:"",needCount:1,tradeType:""},t=await U(e),s=t.data;if(200===t.code){s.transferRecordRspList.forEach((e=>{A.arr.push(e)}));const e={},t=[];A.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const t=_(a.createTime).format("YYYY/MM/DD");e[t]?e[t].list.push(a):e[t]={date:t,list:[a]}})),Object.keys(e).map((a=>{t.push(JSON.parse(JSON.stringify(e[a])))})),k.arr=t,a.value=!1,g.value=!s.transferRecordRspList.length}else F(t.msg)},L=async()=>{const e=await P({});if(200!==e.code)return F(e.msg);D.arr=e.data},S=e=>{if(D.arr.length){const a=D.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||{}]||""}};return(e,h)=>{const f=t("van-divider"),b=t("van-list"),D=s("copy");return l(),n(o,null,[y(f,{class:"color-line"}),!r(A).arr.length&&g.value?(l(),n("div",Oa,[ja,i("p",null,u(e.$t("user.noData")),1)])):v("",!0),r(A).arr.length||!g.value?(l(),m(b,{key:1,loading:a.value,"onUpdate:loading":h[0]||(h[0]=e=>a.value=e),finished:g.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:N},{default:T((()=>[(l(!0),n(o,null,c(r(k).arr,((a,t)=>(l(),n("div",{key:t,class:"dataList-item"},[i("div",Fa,u(a.date),1),(l(!0),n(o,null,c(a.list,((a,t)=>(l(),n("div",{key:t,class:"item"},[i("div",Pa,u(S(a.tradeType)),1),i("div",Ua,[i("div",Ja,[i("div",$a,[i("div",Wa,u(e.$t("user.betId"))+":",1),i("span",null,[i("span",Ga,u(a.payno),1),d(i("img",Va,null,512),[[D,a.payno]])])]),i("p",Qa,[i("span",za,u(e.$t("user.time"))+":",1),i("span",null,u(r(R)(a.createTime)),1)])]),i("div",Xa,[i("div",null,[4==a.payWay?(l(),n("div",Za,u(e.$t("user.compensate")),1)):(l(),n("div",Ha,u(e.$t("user.betNum")),1)),i("div",qa,["CNY"===a.currency?(l(),n("img",{key:0,src:r(Ma),style:{"object-fit":"contain"}},null,8,et)):"VNDK"===a.currency?(l(),n("img",{key:1,src:r(Ya),style:{"object-fit":"contain"}},null,8,at)):(l(),n("img",{key:2,src:r(Ka),style:{"object-fit":"contain"}},null,8,tt)),p(" "+u(r(C)(a.tradeGold)),1)])]),i("div",null,[i("div",null,u(e.$t("user.balance")),1),i("div",st,["CNY"===a.currency?(l(),n("img",{key:0,src:r(Ma),style:{"object-fit":"contain"}},null,8,lt)):"VNDK"===a.currency?(l(),n("img",{key:1,src:r(Ya),style:{"object-fit":"contain"}},null,8,nt)):(l(),n("img",{key:2,src:r(Ka),style:{"object-fit":"contain"}},null,8,it)),p(" "+u(r(C)(a.gold)),1)])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):v("",!0)],64)}}});ut.__scopeId="data-v-d3790b96";const ot={class:"ball-type"},ct={class:"status"},rt={class:"status_1"},mt={key:0,class:"noData"},vt=(e=>(A("data-v-ee16b752"),e=e(),k(),e))((()=>i("img",{class:"img_1",src:N},null,-1))),dt={class:"title"},gt={class:"left title-left"},pt={class:"ball-name"},yt={class:"right"},At={class:"match-content"},kt={class:"left"},ht={class:"left-1"},ft={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},bt={class:"center"},Dt={class:"right"},Tt={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},wt={class:"right-1"};var Nt=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:p}){const A=h({arr:[]}),k=f(!1),D=f(!1),w=f({name:_().format("YYYY/MM/DD"),value:_().valueOf(),key:0}),N=f({gameType:"FT",key:"FT"}),C=f(!1);b((()=>{L.dispatch("app/getAllSports")}));let R=0;const S=async()=>{R++;const e={page:R,gameSort:3,leagueIds:"",gameType:N.value.gameType,matchTime:w.value.value,pageSize:10,gameStatus:1,groupId:3},a=await $(e),t=a.data;200===a.code?(t.list.forEach((e=>{A.arr.push(e)})),k.value=!1,D.value=A.arr.length===t.total):(D.value=!0,k.value=!1)},B=e=>e.gameDate||e.matchTime?_(e.gameDate).format("MM/DD HH:mm"):void 0;const E=e=>{N.value={gameType:e,key:e},R=0,k.value=!0,D.value=!1,A.arr=[],S()};return a({setDateTime:async function(e){w.value={name:_(e).format("YYYY/MM/DD"),value:_(e).valueOf(),key:0},R=0,C.value=!1,k.value=!0,D.value=!1,A.arr=[],S(),console.log(e)},showBottom:C}),(e,a)=>{const h=t("van-divider"),f=t("SportsIcon"),b=t("van-list"),N=s("img");return l(),n(o,null,[i("div",ot,[y(J,{onReturnSportsSuccess:E})]),i("div",ct,[i("div",rt,[i("span",null,u(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=e=>(C.value=!0,void p("timeChange",!0,3,w.value.value)))},[i("span",null,u(w.value.name),1),i("img",{class:g(["img_1",[C.value?"img_3":""]]),src:W,alt:""},null,2)])])]),y(h,{class:"color-line"}),!r(A).arr.length&&D.value?(l(),n("div",mt,[vt,i("p",null,u(e.$t("user.noData")),1)])):v("",!0),r(A).arr.length||!D.value?(l(),m(b,{key:1,loading:k.value,"onUpdate:loading":a[1]||(a[1]=e=>k.value=e),finished:D.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:S},{default:T((()=>[(l(!0),n(o,null,c(r(A).arr,((e,a)=>(l(),n("div",{key:a,class:"item"},[i("div",dt,[i("div",gt,[y(f,{"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",pt,u(e.leagueName),1)]),i("div",yt,u(B(e)),1)]),i("div",At,[i("div",kt,[i("div",ht,u(e.homeTeamName),1),d(i("img",ft,null,512),[[N,e.homeTeamLogo]])]),i("div",bt,u(e.result.GM_h||0)+" : "+u(e.result.GM_c||0),1),i("div",Dt,[d(i("img",Tt,null,512),[[N,e.awayTeamLogo]]),i("div",wt,u(e.awayTeamName),1)])])])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):v("",!0)],64)}}});Nt.__scopeId="data-v-ee16b752";const _t={class:"result"},Lt={class:"content"},Ct={class:"popup-title"},Rt={class:"pk-list"},St=["onClick"],Bt={key:0},Et={key:1},xt={key:2},It={key:3};var Mt=e({setup(e){const a=f(""),s=f({}),m=h({arr:[]}),d=w(),p=f(1),A=f(1),k=f(0),D=f(),N=f(),L=f(!1),C=f(!1),R=f("range"),S=_().valueOf(),B=f(new Date),E=f(new Date(S-6048e5)),x=f([new Date(S-6048e5),new Date]);b((()=>{}));const I=(e,t,l,n,i)=>{a.value=t,s.value=n,m.arr=[...l],p.value=i,L.value=e};const M=(e,a,t,s)=>{console.log(a),A.value=a,1===a&&(B.value=new Date,E.value=new Date(S-6048e5),x.value=[new Date(t),new Date(s)],R.value="range"),3===a&&(B.value=new Date,E.value=new Date(S-1296e6),x.value=new Date(t),R.value="single"),C.value=e},Y=e=>{1===A.value&&D.value.setDateTime(e),3===A.value&&N.value.setDateTime(e),C.value=!1};return(e,h)=>{const f=t("van-icon"),b=t("van-nav-bar"),w=t("van-tab"),_=t("van-tabs"),S=t("van-popup"),K=t("van-calendar");return l(),n("div",_t,[y(b,{class:"bg-title",title:e.$t("user.result")},{left:T((()=>[y(f,{name:"arrow-left",class:"img_1",onClick:h[0]||(h[0]=e=>{d.back()})})])),_:1},8,["title"]),i("div",Lt,[y(_,{active:k.value,"onUpdate:active":h[1]||(h[1]=e=>k.value=e),"line-height":"3px",color:"#1F2630 ","title-inactive-color":"#96A5AA","title-active-color":"#1F2630","line-width":"40px",duration:.3},{default:T((()=>[y(w,{title:e.$t("user.BettingHistory")},{default:T((()=>[y(Ia,{ref_key:"childRefA",ref:D,onValueChange:I,onTimeChange:M},null,512)])),_:1},8,["title"]),y(w,{title:e.$t("user.FlowingHistory")},{default:T((()=>[y(ut)])),_:1},8,["title"]),y(w,{title:e.$t("user.matchResult")},{default:T((()=>[y(Nt,{ref_key:"childRefB",ref:N,onValueChange:I,onTimeChange:M},null,512)])),_:1},8,["title"])])),_:1},8,["active","duration"]),y(S,{show:L.value,"onUpdate:show":h[2]||(h[2]=e=>L.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"50%"},onClose:h[3]||(h[3]=e=>{return a="close",console.log(a),1===p.value&&(D.value.showBottom=!1),2===p.value&&(N.value.showBottom1=!1),void(3===p.value&&(N.value.showBottom=!1));var a})},{default:T((()=>[i("div",Ct,u(a.value),1),i("div",Rt,[(l(!0),n(o,null,c(r(m).arr,((a,t)=>(l(),n("div",{key:t,class:g(["item",[s.value.key===a.key?"item-color":""]]),onClick:e=>async function(e){L.value=!1,s.value=e,1===p.value&&D.value.setPk(e),2===p.value&&N.value.setBallSelect(e),3===p.value&&N.value.setPk(e)}(a)},[i("p",null,[1===p.value?(l(),n("span",Bt,u(a.value),1)):v("",!0),2===p.value?(l(),n("span",Et,u(e.$t(`user.sports.${a.gameType}`)),1)):v("",!0),3===p.value?(l(),n("span",xt,u(a.name),1)):v("",!0),s.value.key===a.key?(l(),n("span",It,[y(f,{name:"success"})])):v("",!0)])],10,St)))),128))])])),_:1},8,["show","duration"]),y(K,{show:C.value,"onUpdate:show":h[4]||(h[4]=e=>C.value=e),type:R.value,"min-date":E.value,"max-date":B.value,"default-date":x.value,onConfirm:Y,onClose:h[5]||(h[5]=e=>(1===A.value&&(D.value.showBottom2=!1),void(3===A.value&&(N.value.showBottom=!1))))},null,8,["show","type","min-date","max-date","default-date"])])])}}});Mt.__scopeId="data-v-aae6441a";export{Mt as default};
