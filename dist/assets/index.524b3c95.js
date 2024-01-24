import{s as e,b as a,r as t,E as s,o as l,O as n,Q as i,W as u,F as o,_ as c,x as r,u as m,c as v,S as d,B as g,$ as p,q as y,Y as A,Z as h,e as k,d as f,j as b,V as T,P as D,U as w,k as N}from"./vue.778d92ec.js";import{_ as L}from"./noData.1caa3bb3.js";import{h as C}from"./moment.40bc58bf.js";import{s as S,p as B,n as _,q as E,v as x,u as R,w as I,b as M,x as Y,y as K,z as O}from"./index.6b0b88da.js";var j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAAEc4A0XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADAAAAACRRQtxAAAAkElEQVQoFYWPAQ6AIAwD8RE+TR+pP9NH6I44UtnEJoTRdV0ppZTNzmWn4prsaq9KwQBnzyix7vwoXMVEHVkoeg84xaoPD4TVy05F7DuUSFOJYKcmjNv2d9Ni2zdZ94IKCBygq0LTCVYFa4gsg67M6mBGrkyYcWhT6D+yQTg0Q3x9KUQeulhTv/QZ+c+EuMPIN+mRT7lWjXr2AAAAAElFTkSuQmCC";const P=e=>(A("data-v-7ede5af0"),e=e(),h(),e),W={class:"match-title"},$={class:"title-left"},F={class:"cur-odds"},U=g(" @"),J={class:"top2"},G={class:"left"},V={class:"top-img"},Q={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},z={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Z={class:"right"},X={class:"one"},H={class:"one two"},q={key:0},ee={key:1},ae={key:3,class:"img_1",src:E,alt:""},te={class:"team"},se={key:0},le={class:"team"},ne={class:"money-num"},ie={class:"money-num-1"},ue={class:"money-num-money"},oe={class:"money-num-2"},ce={key:0},re={key:1},me={key:0},ve={key:0,style:{color:"#FF9A00"}},de={key:1,style:{color:"#FF9A00"}},ge={key:1},pe={key:2,class:"num"},ye={key:3,class:"num"},Ae=P((()=>i("div",{class:"line"},null,-1))),he={class:"top4"},ke={class:"one"},fe={class:"one"},be={key:0,class:"one"};var Te=e({props:{item:{type:Object,default:()=>{}}},setup(e){const A=e,h=a((()=>S.state.user.currency)),k=a((()=>S.state.user.teamNameList||[])),f=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,b=e=>{if(k.value.length){const a=k.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(a,k)=>{const T=t("SportsIcon"),D=t("SvgIcon"),w=s("points"),N=s("img"),L=s("play");return l(),n("div",null,[i("div",W,[i("div",$,[i("div",null,u(e.item.parlayNum)+u(a.$t("user.session")),1),i("div",null,[(l(!0),n(o,null,c(e.item.betDTOList,((e,a)=>(l(),v(T,{key:a,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])]),i("div",F,[U,r(i("span",null,null,512),[[w,e.item.sioRatio]])])]),(l(!0),n(o,null,c(A.item.betDTOList,((a,t)=>{return l(),n("div",{key:t},[i("div",J,[i("div",G,[i("div",V,[r(i("img",Q,null,512),[[N,a.homeLogo]]),r(i("img",z,null,512),[[N,a.awayLogo]])])]),i("div",Z,[i("div",X,[i("span",null,u((o=a.betItemLang,JSON.parse(o)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:p([(s=a.betResultDetail,"W"===s||"LW"===s?"color-2":"L"===s||"LL"===s?"color-3":"P"===s?"color-4":"")])}," @"+u(a.ioRatio),3)]),i("div",H,[a.homeTeam&&a.awayTeam?r((l(),n("span",q,null,512)),[[L,a]]):(l(),n("span",ee,"?")),i("span",null,[2===Number(e.item.cashoutType)?(l(),v(D,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),v(D,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&f(a.betResultDetail)?(l(),v(D,{key:2,name:`user-${a.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),n("img",ae))])]),i("div",te,[g(u(b(a).homeTeam)+" v "+u(b(a).awayTeam)+" ",1),a.resultScore?(l(),n("span",se," ["+u(a.resultScore)+"] ",1)):d("",!0)]),i("div",le,[y(T,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",null,u(b(a).leagueShortName),1)])])])]);var s,o})),128)),i("div",ne,[i("div",ie,[i("span",null,u(a.$t("user.BettingAmount"))+":",1),i("span",ue,["CNY"===m(h)?(l(),v(D,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(h)?(l(),v(D,{key:1,name:"user-vndk",class:"img_1"})):(l(),v(D,{key:2,name:"user-usdt",class:"img_1"})),i("span",null,u(m(B)(e.item.gold)),1)])]),i("div",oe,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",ce,u(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state&&0!==e.item.state?(l(),n("span",re,u(a.$t("user.practical"))+":",1)):d("",!0),i("span",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",me,[-1===e.item.state?(l(),n("span",ve,u(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),n("span",de,u(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),3!==e.item.state&&5!==e.item.state?(l(),n("span",ge,["CNY"===m(h)?(l(),v(D,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(h)?(l(),v(D,{key:1,name:"user-vndk",class:"img_1"})):(l(),v(D,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",pe,u(m(B)((C=e.item,C.gold*C.sioRatio))),1)):3!==e.item.state&&5!==e.item.state?(l(),n("span",ye,u(m(B)(e.item.winGold)),1)):d("",!0)])])]),Ae,i("div",he,[i("div",ke,[i("span",null,u(a.$t("user.orderId"))+":",1),i("span",null,u(e.item.orderId),1)]),i("div",fe,[i("span",null,u(a.$t("user.BettingTime"))+"：",1),i("span",null,u(e.item.createDate),1)]),1===e.item.creditState?(l(),n("div",be,[i("span",null,u(a.$t("user.SettlementTime"))+":",1),i("span",null,u(m(_)(e.item.resultDate)),1)])):d("",!0)])]);var C}}});Te.__scopeId="data-v-7ede5af0";const De=e=>(A("data-v-284963b8"),e=e(),h(),e),we={class:"top"},Ne={class:"left"},Le={class:"top-img"},Ce={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Se={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Be={class:"right"},_e={class:"font_1"},Ee={key:0},xe={key:1},Re={key:2,class:"color-1"},Ie={class:"league-name"},Me={key:0,class:"font_2"},Ye={key:1,class:"font_2"},Ke={class:"top2"},Oe=De((()=>i("div",{class:"left"},[i("img",{class:"img_1",src:x,alt:""})],-1))),je={class:"right"},Pe={class:"one"},We={class:"one two"},$e={key:0},Fe={key:1},Ue={key:2},Je={key:3,class:"img_1",src:E,alt:""},Ge={class:"top3"},Ve={class:"one"},Qe={class:"money-num-money"},ze={class:"one two"},Ze={key:0},Xe={key:1},He={key:0},qe={key:0,style:{color:"#FF9A00"}},ea={key:1,style:{color:"#FF9A00"}},aa={key:1},ta={key:2,class:"num color-1"},sa={key:3,class:"color-1"},la=De((()=>i("div",{class:"line"},null,-1))),na={class:"top4"},ia={class:"one"},ua={class:"one"},oa={key:0,class:"one"};var ca=e({props:{item:{type:Object,default:()=>{}}},setup(e){const g=e,A=a((()=>S.state.user.currency)),h=a((()=>S.state.user.teamNameList||[])),k=a((()=>S.state.user.championLangList||[])),f=e=>e.gold*e.sioRatio,b=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,T=e=>{if(h.value.length){const a=h.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},D=e=>{if(k.value.length){const a=k.value.find((a=>a.ratioId===e));return a?a.ratioName:"?"}return"?"};return(a,h)=>{const k=t("SportsIcon"),w=t("SvgIcon"),N=s("img"),L=s("play");return l(),n("div",null,[(l(!0),n(o,null,c(g.item.betDTOList,((t,s)=>{return l(),n("div",{key:s},[i("div",we,[i("div",Ne,[i("div",Le,[r(i("img",Ce,null,512),[[N,t.homeLogo]]),r(i("img",Se,null,512),[[N,t.awayLogo]])])]),i("div",Be,[i("div",_e,[t.championType?(l(),n("span",Ee,u(a.$t("betting.champion")),1)):(l(),n("span",xe,u(T(t).homeTeam)+" v "+u(T(t).awayTeam),1)),t.resultScore?(l(),n("span",Re," ["+u(t.resultScore)+"]",1)):d("",!0)]),i("div",Ie,[y(k,{"icon-src":t.gameType,class:"ball-img"},null,8,["icon-src"]),t.championType?(l(),n("div",Me,u(D(t.systemId)),1)):(l(),n("div",Ye,u(T(t).leagueShortName),1))])])]),i("div",Ke,[Oe,i("div",je,[i("div",Pe,[i("span",null,u((c=t.betItemLang,JSON.parse(c)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:p([(o=t.betResultDetail,"W"===o||"LW"===o?"color-2":"L"===o||"LL"===o?"color-3":"P"===o?"color-4":"")])}," @"+u(t.ioRatio),3)]),i("div",We,[t.championType?(l(),n("span",$e,u(D(t.gameId)),1)):t.homeTeam&&t.awayTeam?r((l(),n("span",Fe,null,512)),[[L,t]]):(l(),n("span",Ue,"?")),i("span",null,[2===Number(e.item.cashoutType)?(l(),v(w,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),v(w,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&b(t.betResultDetail)?(l(),v(w,{key:2,name:`user-${t.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),n("img",Je))])])])]),i("div",Ge,[i("div",Ve,[i("span",null,u(a.$t("user.BettingAmount")),1),i("div",Qe,["CNY"===m(A)?(l(),v(w,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(A)?(l(),v(w,{key:1,name:"user-vndk",class:"img_1"})):(l(),v(w,{key:2,name:"user-usdt",class:"img_1"})),i("span",null,u(m(B)(e.item.gold)),1)])]),i("div",ze,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",Ze,u(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state||"LL"===t.betResultDetail?(l(),n("span",Xe,u(a.$t("user.practical"))+":",1)):d("",!0),i("div",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",He,[-1===e.item.state?(l(),n("span",qe,u(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),n("span",ea,u(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),3!==e.item.state&&5!==e.item.state||"LL"===t.betResultDetail?(l(),n("span",aa,["CNY"===m(A)?(l(),v(w,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(A)?(l(),v(w,{key:1,name:"user-vndk",class:"img_1"})):(l(),v(w,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",ta,u(m(B)(f(e.item))),1)):3!==e.item.state&&5!==e.item.state||"LL"===t.betResultDetail?(l(),n("span",sa,u(m(B)(e.item.winGold)),1)):d("",!0)])])]),la,i("div",na,[i("div",ia,[i("span",null,u(a.$t("user.OrderID"))+":",1),i("span",null,u(e.item.orderId),1)]),i("div",ua,[i("span",null,u(a.$t("user.BettingTime"))+":",1),i("span",null,u(e.item.createDate),1)]),1===e.item.creditState?(l(),n("div",oa,[i("span",null,u(a.$t("user.SettlementTime"))+":",1),i("span",null,u(m(_)(e.item.resultDate)),1)])):d("",!0)])]);var o,c})),128))])}}});ca.__scopeId="data-v-284963b8";const ra=e=>(A("data-v-5d61d66b"),e=e(),h(),e),ma={class:"timeSelect"},va={class:"status status-2"},da={class:"status_1"},ga=g(" ~ "),pa={class:"status"},ya={class:"status_1"},Aa={key:0,class:"noData"},ha=ra((()=>i("img",{class:"img_1",src:L},null,-1)));var ka=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:s}){const r=k({arr:[]}),{t:g}=R(),y=f(""),A=f(""),h=f(g("user.state")),w=f({key:"",value:g("user.whole")}),N=f(!1),L=f(!1),B=f(!1),_=f(!1),E=k({arr:[{value:g("user.whole"),key:""},{value:g("user.noFinal"),key:"0"},{value:g("user.final"),key:"1"}]}),x=f({beginName:C().subtract(90,"days").format("MM/DD"),endName:C().format("MM/DD")});b((()=>{A.value=C().valueOf();y.value=A.value-7776e6}));const Y=()=>{O()};let K=0;const O=async()=>{K++;const e={orderState:w.value.key,page:K,pageSize:10,beginTime:y.value,endTime:A.value},a=await I(e);if(200!==a.code)return B.value=!1,_.value=!0,M(a.msg);const t=a.data;if(200===a.code){t.forEach((e=>{r.arr.push(e)}));const e=[],a=[];r.arr.map((t=>{t.betDTOList.map((t=>{const{championType:s,systemId:l,gidm:n}=t;s&&a.push(n),e.push(l)}))})),S.dispatch("user/getMoreTeamList",e.join()),S.dispatch("user/getChampionLang",a.join()),B.value=!1,_.value=!t.length}};return a({setPk:async function(e){w.value=e,B.value=!0,_.value=!1,K=0,r.arr=[],O(),console.log(e)},setDateTime:e=>{const[a,t]=e;x.value.beginName=C(a).format("MM/DD"),x.value.endName=C(t).format("MM/DD"),y.value=C(a).valueOf(),A.value=C(t).valueOf(),B.value=!0,_.value=!1,L.value=!1,K=0,r.arr=[],O()},showBottom:N,showBottom2:L}),(e,a)=>{const g=t("van-list");return l(),n(o,null,[i("div",ma,[i("div",va,[i("div",da,[i("span",null,u(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=T((e=>(L.value=!0,void s("timeChange",!0,1,y.value,A.value))),["stop"]))},[i("span",null,u(x.value.beginName),1),ga,i("span",null,u(x.value.endName),1),i("img",{class:p(["img_1",[L.value?"img_3":""]]),src:j,alt:""},null,2)])])]),i("div",pa,[i("div",ya,[i("span",null,u(e.$t("user.state")),1),i("div",{class:"round",onClick:a[1]||(a[1]=T((e=>(N.value=!0,void s("valueChange",!0,h.value,E.arr,w.value,1))),["stop"]))},[i("span",null,u(w.value.value),1),i("img",{class:p(["img_1",[N.value?"img_3":""]]),src:j,alt:""},null,2)])])])]),!m(r).arr.length&&_.value?(l(),n("div",Aa,[ha,i("p",null,u(e.$t("user.noData")),1)])):d("",!0),m(r).arr.length||!_.value?(l(),v(g,{key:1,loading:B.value,"onUpdate:loading":a[2]||(a[2]=e=>B.value=e),finished:_.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:Y},{default:D((()=>[(l(!0),n(o,null,c(m(r).arr,((e,a)=>(l(),n("div",{key:a},[1===Number(e.parlayNum)?(l(),v(ca,{key:0,item:e,class:"item"},null,8,["item"])):d("",!0),1!==Number(e.parlayNum)?(l(),v(Te,{key:1,item:e,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});ka.__scopeId="data-v-5d61d66b";var fa="/assets/CNY1.c98baa5b.svg",ba="/assets/VNDK1.c3b1fb46.svg",Ta="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAHB8+mLAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAJgAAAADF1tjNAAAEvUlEQVRYCe1YbWhbVRg+7725jetwsQylc2wKuiGuQ2QiOgRxdip+4ITdzCr7IU1LO6jQWNkQhPtDnOCagsN2W1v/TLqZDBW1P/ZRQZRNFBxMJzpRCGyuoiMtw87m4x6f9y4n3pwkzWIz6I8eaN73vN8f5+uWBMbW9l7JUA2DEUMYgx6BxD4Pf74jupEJLO04ToBx4/Bw7CQj/uGp+wmM09b26Akh5KOKcWR0gAyDxCfKkYJKoBCWlJJKbBKRLCF6jvhHd1awmUfYOfmJdjxuyqOnskwLBKj18P7YhOJ7gqpGJOgHpDEB/1PIarUUcgsCbILwpSKLrK2UWlaFLJTMs870soEzQx9FrnWmmnuVVJNq8GrbVG8h7Qp3Byvp5S9KZltXX0suk/ueBS1a0nxo5M0/GPeGHYleXSn5OWetMs+TBGSmyI707pZS7PKIJD4E/ImEYSGIDaBvYnqwMRTy+P6fchaZf811rL9goTzVlpo/j3I4d6+mXMoZKUcrRFiOyTS9R/oq1fW8pcNENLMb6z6M3h0SAXc8sW/ggi7sn/PmEsdPPUSuEXbJXdlgBV8aG3orFYChM9g867H2tnwwsucRv5KHY5EgjWU4nYLYeJdBc5meCIdzAF/wn+04DZnz0+PIprUkZbuj9zmcHjZJ2QojN7NymSGxm78F/2hDkEbH3u1PKpkSg4qhYK01vOaFqBxUg3U3WEhZT61aJMV86joyGtvPtLpHuPANFnaKfqhyPSTJNVj0mxlXo6ycKc4qfqEpiuCH4cgrba50x/w0dar4aX68Yg23d/XdIknc5RdmvK1j5zpvH+uM/NyL8IXuXU2ZdPo97NXfpeHGxeYHv+K9OleEdlfvSpE1npLCbYNePDESG2KbuC2iU/Hh/ia+6XWncxnUZWFn0CTxvoGih8Id0WN8YuhCBskkUhgXJL6E7wlE8rEuw/Ntkb5nYac7K+UQvdjjLJudmf4N9OVKGNGm0OPTOBuTCPsvEnLGFdJCDktR11UkaS3OzhYlzxDPoN3x4dhrRV22O3eulm4mAuITkMEFWfG98yecTXC9E8MDH/kNFxn0MxivpYZKt+KyUQK1wkWDtVasVL7uNSxZNvN945TGXAvlv6tEadU9Y2W4XnAxwPlWsmQN1mKw3NGm61d77ery+nzBt7hiBb377/zl9choA27deyF4J+682/EJZuGuTeGFksIVdSP49+lZ++f5OzKEa+4m6OEKpDRsJAXJX3AjnTZN87vcisYzCcdJ+/UU7gVo73i1WaRzbwgp1giDRqyA9Rl/GyihSrCeLfaeLdnM08KVEfxb4JxsMF9PDL49yd8nP8vZ7FpkGkuMxh6uFMz1pucLchB+Dtrt0X7EdBGxnSPvuzybO4bqrVBBINi/0ZKv8ZQ5iRKfFYb8sUmEfj1wwJlRMvOBnZ1OY0pM3yFcuht+1sH3Rvh5AEtmacEuiYtmwHzMa7Ei9vS8E5y8knwGxCfxmnkcCrcq3vWEeJJdQJDHBdF485LbPt279+VZ5a8oQEWsBvkdfMPn3yy/ks1th+E9c8lbZN4TCIjJfzbdfyn/2TqXeAnvfwWorNRzkyibOlzw5+BigHrLap0vVrDWiunyC76C/wLnYcK3CaljuwAAAABJRU5ErkJggg==";const Da={key:0,class:"noData"},wa=(e=>(A("data-v-66829946"),e=e(),h(),e))((()=>i("img",{class:"img_1",src:L},null,-1))),Na={class:"date-title"},La={class:"title"},Ca={class:"line"},Sa={class:"left"},Ba={class:"left-1"},_a={class:"font"},Ea={class:"font-1"},xa={class:"img_1",src:"/assets/copy.8596b31a.svg"},Ra={class:"left-2"},Ia={class:"font"},Ma={class:"right"},Ya={key:0},Ka={key:1},Oa={class:"right-1"},ja=["src"],Pa=["src"],Wa=["src"],$a={class:"right-1"},Fa=["src"],Ua=["src"],Ja=["src"];var Ga=e({setup(e){const a=f(!1),p=f(!1),A=k({arr:[]}),h=k({arr:[]}),T=k({arr:[]});b((()=>{L()}));let w=0;const N=async()=>{w++;const e={page:w,pageSize:20,beginDate:"",endDate:"",needCount:1,tradeType:""},t=await K(e),s=t.data;if(200===t.code){s.transferRecordRspList.forEach((e=>{A.arr.push(e)}));const e={},t=[];A.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const t=C(a.createTime).format("YYYY/MM/DD");e[t]?e[t].list.push(a):e[t]={date:t,list:[a]}})),Object.keys(e).map((a=>{t.push(JSON.parse(JSON.stringify(e[a])))})),h.arr=t,a.value=!1,p.value=!s.transferRecordRspList.length}else M(t.msg)},L=async()=>{const e=await Y({});if(200!==e.code)return M(e.msg);T.arr=e.data},S=e=>{if(T.arr.length){const a=T.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||{}]||""}};return(e,k)=>{const f=t("van-divider"),b=t("van-list"),T=s("copy");return l(),n(o,null,[y(f,{class:"color-line"}),!m(A).arr.length&&p.value?(l(),n("div",Da,[wa,i("p",null,u(e.$t("user.noData")),1)])):d("",!0),m(A).arr.length||!p.value?(l(),v(b,{key:1,loading:a.value,"onUpdate:loading":k[0]||(k[0]=e=>a.value=e),finished:p.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:N},{default:D((()=>[(l(!0),n(o,null,c(m(h).arr,((a,t)=>(l(),n("div",{key:t,class:"dataList-item"},[i("div",Na,u(a.date),1),(l(!0),n(o,null,c(a.list,((a,t)=>(l(),n("div",{key:t,class:"item"},[i("div",La,u(S(a.tradeType)),1),i("div",Ca,[i("div",Sa,[i("div",Ba,[i("div",_a,u(e.$t("user.betId"))+":",1),i("span",null,[i("span",Ea,u(a.payno),1),r(i("img",xa,null,512),[[T,a.payno]])])]),i("p",Ra,[i("span",Ia,u(e.$t("user.time"))+":",1),i("span",null,u(m(_)(a.createTime)),1)])]),i("div",Ma,[i("div",null,[4===a.payWay?(l(),n("div",Ya,u(e.$t("user.compensate")),1)):(l(),n("div",Ka,u(e.$t("user.betNum")),1)),i("div",Oa,["CNY"===a.currency?(l(),n("img",{key:0,src:m(fa),style:{"object-fit":"contain"}},null,8,ja)):"VNDK"===a.currency?(l(),n("img",{key:1,src:m(ba),style:{"object-fit":"contain"}},null,8,Pa)):(l(),n("img",{key:2,src:m(Ta),style:{"object-fit":"contain"}},null,8,Wa)),g(" "+u(m(B)(a.tradeGold)),1)])]),i("div",null,[i("div",null,u(e.$t("user.balance")),1),i("div",$a,["CNY"===a.currency?(l(),n("img",{key:0,src:m(fa),style:{"object-fit":"contain"}},null,8,Fa)):"VNDK"===a.currency?(l(),n("img",{key:1,src:m(ba),style:{"object-fit":"contain"}},null,8,Ua)):(l(),n("img",{key:2,src:m(Ta),style:{"object-fit":"contain"}},null,8,Ja)),g(" "+u(m(B)(a.gold)),1)])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ga.__scopeId="data-v-66829946";const Va={class:"ball-type"},Qa={class:"status"},za={class:"status_1"},Za={key:0,class:"noData"},Xa=(e=>(A("data-v-78384a44"),e=e(),h(),e))((()=>i("img",{class:"img_1",src:L},null,-1))),Ha=["onClick"],qa={class:"title"},et={class:"left title-left"},at={class:"ball-name"},tt={class:"right"},st={class:"match-content"},lt={class:"left"},nt={class:"left-1"},it={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},ut={class:"center"},ot={class:"right"},ct={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},rt={class:"right-1"};var mt=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:g}){const A=k({arr:[]}),h=f(!1),T=f(!1),w=f({name:C().format("YYYY/MM/DD"),value:C().valueOf(),key:0}),N=f({gameType:"FT",key:"FT"}),L=f(!1);b((()=>{S.dispatch("app/getAllSports")}));let B=0;const _=async()=>{B++;const e={page:B,gameSort:3,leagueIds:"",gameType:N.value.gameType,matchTime:w.value.value,pageSize:10,gameStatus:1,groupId:3},a=await O(e),t=a.data;200===a.code?(t.list.forEach((e=>{A.arr.push(e)})),h.value=!1,T.value=A.arr.length===t.total):(T.value=!0,h.value=!1)},E=e=>e.gameDate||e.matchTime?C(e.gameDate).format("MM/DD HH:mm"):void 0;const x=e=>{N.value={gameType:e,key:e},B=0,h.value=!0,T.value=!1,A.arr=[],_()};return a({setDateTime:async function(e){w.value={name:C(e).format("YYYY/MM/DD"),value:C(e).valueOf(),key:0},B=0,L.value=!1,h.value=!0,T.value=!1,A.arr=[],_(),console.log(e)},showBottom:L}),(e,a)=>{const k=t("sports-tabs"),f=t("van-divider"),b=t("SportsIcon"),N=t("van-list"),C=s("img");return l(),n(o,null,[i("div",Va,[y(k,{onReturnSportsSuccess:x})]),i("div",Qa,[i("div",za,[i("span",null,u(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=e=>(L.value=!0,void g("timeChange",!0,3,w.value.value)))},[i("span",null,u(w.value.name),1),i("img",{class:p(["img_1",[L.value?"img_3":""]]),src:j,alt:""},null,2)])])]),y(f,{class:"color-line"}),!m(A).arr.length&&T.value?(l(),n("div",Za,[Xa,i("p",null,u(e.$t("user.noData")),1)])):d("",!0),m(A).arr.length||!T.value?(l(),v(N,{key:1,loading:h.value,"onUpdate:loading":a[1]||(a[1]=e=>h.value=e),finished:T.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:_},{default:D((()=>[(l(!0),n(o,null,c(m(A).arr,((e,a)=>(l(),n("div",{key:a,class:"item",onClick:a=>(async e=>{S.dispatch("user/getResultTab",2),S.dispatch("betting/setMoreShow",{status:!0,moreParams:{gidm:e.matchId}})})(e)},[i("div",qa,[i("div",et,[y(b,{"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",at,u(e.leagueName),1)]),i("div",tt,u(E(e)),1)]),i("div",st,[i("div",lt,[i("div",nt,u(e.homeTeamName),1),r(i("img",it,null,512),[[C,e.homeTeamLogo]])]),i("div",ut,u(e.result.GM_h||0)+" : "+u(e.result.GM_c||0),1),i("div",ot,[r(i("img",ct,null,512),[[C,e.awayTeamLogo]]),i("div",rt,u(e.awayTeamName),1)])])],8,Ha)))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});mt.__scopeId="data-v-78384a44";const vt={class:"result"},dt={class:"content"},gt={class:"popup-title"},pt={class:"pk-list"},yt=["onClick"],At={key:0},ht={key:1},kt={key:2},ft={key:3};var bt=e({setup(e){const s=a((()=>S.state.app.theme)),r=f(""),v=f({}),g=k({arr:[]}),A=w(),h=f(1),T=f(1),L=a((()=>S.state.user.resultTab||0)),B=f(),_=f(),E=f(!1),x=f(!1),R=f(!1),I=C().valueOf(),M=f(new Date),Y=f(new Date(I-7776e6)),K=f(new Date),O=f(new Date(I-1296e6)),j=f([new Date(I-6048e5),new Date]),P=f(new Date),W=a((()=>"blue"===s.value));b((()=>{}));const $=(e,a,t,s,l)=>{r.value=a,v.value=s,g.arr=[...t],h.value=l,E.value=e};const F=(e,a,t,s)=>{console.log(a),T.value=a,1===a&&(j.value=[new Date(t),new Date(s)],x.value=e),3===a&&(P.value=new Date(t),R.value=e)},U=e=>{1===T.value&&(B.value.setDateTime(e),x.value=!1),3===T.value&&(_.value.setDateTime(e),R.value=!1)},J=()=>{1===T.value&&(B.value.showBottom2=!1),3===T.value&&(_.value.showBottom=!1)};return(e,a)=>{const s=t("van-icon"),k=t("van-nav-bar"),f=t("van-tab"),b=t("van-tabs"),T=t("van-popup"),w=t("van-calendar");return l(),n("div",vt,[y(k,{class:"bg-title",title:e.$t("user.result")},{left:D((()=>[y(s,{name:"arrow-left",class:"img_1",onClick:a[0]||(a[0]=e=>{A.back()})})])),_:1},8,["title"]),i("div",dt,[y(b,{active:m(L),"onUpdate:active":a[1]||(a[1]=e=>N(L)?L.value=e:null),"line-height":"3px",color:m(W)?"#0E3D66":"#1F2630","title-inactive-color":m(W)?"#88A6BB":"#96A5AA","title-active-color":m(W)?"#0E3D66":"#1F2630","line-width":"40px",duration:.3},{default:D((()=>[y(f,{title:e.$t("user.BettingHistory")},{default:D((()=>[y(ka,{ref_key:"childRefA",ref:B,onValueChange:$,onTimeChange:F},null,512)])),_:1},8,["title"]),y(f,{title:e.$t("user.FlowingHistory")},{default:D((()=>[y(Ga)])),_:1},8,["title"]),y(f,{title:e.$t("user.matchResult")},{default:D((()=>[y(mt,{ref_key:"childRefB",ref:_,onValueChange:$,onTimeChange:F},null,512)])),_:1},8,["title"])])),_:1},8,["active","color","title-inactive-color","title-active-color","duration"]),y(T,{show:E.value,"onUpdate:show":a[2]||(a[2]=e=>E.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"50%"},onClose:a[3]||(a[3]=e=>{return a="close",console.log(a),1===h.value&&(B.value.showBottom=!1),2===h.value&&(_.value.showBottom1=!1),void(3===h.value&&(_.value.showBottom=!1));var a})},{default:D((()=>[i("div",gt,u(r.value),1),i("div",pt,[(l(!0),n(o,null,c(m(g).arr,((a,t)=>(l(),n("div",{key:t,class:p(["item",[v.value.key===a.key?"item-color":""]]),onClick:e=>async function(e){E.value=!1,v.value=e,1===h.value&&B.value.setPk(e),2===h.value&&_.value.setBallSelect(e),3===h.value&&_.value.setPk(e)}(a)},[i("p",null,[1===h.value?(l(),n("span",At,u(a.value),1)):d("",!0),2===h.value?(l(),n("span",ht,u(e.$t(`user.sports.${a.gameType}`)),1)):d("",!0),3===h.value?(l(),n("span",kt,u(a.name),1)):d("",!0),v.value.key===a.key?(l(),n("span",ft,[y(s,{name:"success"})])):d("",!0)])],10,yt)))),128))])])),_:1},8,["show","duration"]),y(w,{show:x.value,"onUpdate:show":a[4]||(a[4]=e=>x.value=e),type:"range","min-date":Y.value,"max-date":M.value,"default-date":j.value,onConfirm:U,onClose:a[5]||(a[5]=e=>J())},null,8,["show","min-date","max-date","default-date"]),y(w,{show:R.value,"onUpdate:show":a[6]||(a[6]=e=>R.value=e),type:"single","min-date":O.value,"max-date":K.value,"default-date":P.value,onConfirm:U,onClose:a[7]||(a[7]=e=>J())},null,8,["show","min-date","max-date","default-date"])])])}}});bt.__scopeId="data-v-477f12b4";export{bt as default};
