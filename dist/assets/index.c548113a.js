import{s as e,b as a,r as t,E as s,o as l,R as n,P as i,U as u,F as o,Z as c,x as r,u as m,c as v,a1 as d,B as g,_ as p,q as y,X as A,Y as h,e as f,d as k,j as T,S as b,O as D,W as w}from"./vue.469c5994.js";import{_ as N}from"./noData.1caa3bb3.js";import{h as L}from"./moment.40bc58bf.js";import{s as C,p as S,n as B,q as _,v as E,u as x,w as R,b as I,x as M,y as Y,z as K}from"./index.d6804601.js";var O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAAEc4A0XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADAAAAACRRQtxAAAAkElEQVQoFYWPAQ6AIAwD8RE+TR+pP9NH6I44UtnEJoTRdV0ppZTNzmWn4prsaq9KwQBnzyix7vwoXMVEHVkoeg84xaoPD4TVy05F7DuUSFOJYKcmjNv2d9Ni2zdZ94IKCBygq0LTCVYFa4gsg67M6mBGrkyYcWhT6D+yQTg0Q3x9KUQeulhTv/QZ+c+EuMPIN+mRT7lWjXr2AAAAAElFTkSuQmCC";const j=e=>(A("data-v-391015dd"),e=e(),h(),e),P={class:"match-title"},W={class:"title-left"},F={class:"cur-odds"},U=g(" @"),$={class:"top2"},J={class:"left"},G={class:"top-img"},V={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Q={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},z={class:"right"},X={class:"one"},Z={class:"one two"},H={key:0},q={key:1},ee={key:3,class:"img_1",src:_,alt:""},ae={class:"team"},te={key:0},se={class:"team"},le={class:"money-num"},ne={class:"money-num-1"},ie={class:"money-num-money"},ue={class:"money-num-2"},oe={key:0},ce={key:1},re={key:0},me={key:0,style:{color:"#FF9A00"}},ve={key:1,style:{color:"#FF9A00"}},de={key:1},ge={key:2,class:"num"},pe={key:3,class:"num"},ye=j((()=>i("div",{class:"line"},null,-1))),Ae={class:"top4"},he={class:"one"},fe={class:"one"},ke={key:0,class:"one"};var Te=e({props:{item:{type:Object,default:()=>{}}},setup(e){const A=e,h=a((()=>C.state.user.currency)),f=a((()=>C.state.user.teamNameList||[])),k=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,T=e=>{if(f.value.length){const a=f.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(a,f)=>{const b=t("SportsIcon"),D=t("SvgIcon"),w=s("points"),N=s("img"),L=s("play");return l(),n("div",null,[i("div",P,[i("div",W,[i("div",null,u(e.item.parlayNum)+u(a.$t("user.session")),1),i("div",null,[(l(!0),n(o,null,c(e.item.betDTOList,((e,a)=>(l(),v(b,{key:a,"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"])))),128))])]),i("div",F,[U,r(i("span",null,null,512),[[w,e.item.sioRatio]])])]),(l(!0),n(o,null,c(A.item.betDTOList,((a,t)=>{return l(),n("div",{key:t},[i("div",$,[i("div",J,[i("div",G,[r(i("img",V,null,512),[[N,a.homeLogo]]),r(i("img",Q,null,512),[[N,a.awayLogo]])])]),i("div",z,[i("div",X,[i("span",null,u((o=a.betItemLang,JSON.parse(o)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:p([(s=a.betResultDetail,"W"===s||"LW"===s?"color-2":"L"===s||"LL"===s?"color-3":"P"===s?"color-4":"")])}," @"+u(a.ioRatio),3)]),i("div",Z,[a.homeTeam&&a.awayTeam?r((l(),n("span",H,null,512)),[[L,a]]):(l(),n("span",q,"?")),i("span",null,[2===Number(e.item.cashoutType)?(l(),v(D,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),v(D,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&k(a.betResultDetail)?(l(),v(D,{key:2,name:`user-${a.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),n("img",ee))])]),i("div",ae,[g(u(T(a).homeTeam)+" v "+u(T(a).awayTeam)+" ",1),a.resultScore?(l(),n("span",te," ["+u(a.resultScore)+"] ",1)):d("",!0)]),i("div",se,[y(b,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",null,u(T(a).leagueShortName),1)])])])]);var s,o})),128)),i("div",le,[i("div",ne,[i("span",null,u(a.$t("user.BettingAmount"))+":",1),i("span",ie,["CNY"===m(h)?(l(),v(D,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(h)?(l(),v(D,{key:1,name:"user-vndk",class:"img_1"})):(l(),v(D,{key:2,name:"user-usdt",class:"img_1"})),i("span",null,u(m(S)(e.item.gold)),1)])]),i("div",ue,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",oe,u(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state&&0!==e.item.state?(l(),n("span",ce,u(a.$t("user.practical"))+":",1)):d("",!0),i("span",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",re,[-1===e.item.state?(l(),n("span",me,u(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),n("span",ve,u(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),3!==e.item.state&&5!==e.item.state?(l(),n("span",de,["CNY"===m(h)?(l(),v(D,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(h)?(l(),v(D,{key:1,name:"user-vndk",class:"img_1"})):(l(),v(D,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",ge,u(m(S)((C=e.item,C.gold*C.sioRatio))),1)):3!==e.item.state&&5!==e.item.state?(l(),n("span",pe,u(m(S)(e.item.winGold)),1)):d("",!0)])])]),ye,i("div",Ae,[i("div",he,[i("span",null,u(a.$t("user.orderId"))+":",1),i("span",null,u(e.item.orderId),1)]),i("div",fe,[i("span",null,u(a.$t("user.BettingTime"))+"：",1),i("span",null,u(e.item.createDate),1)]),1===e.item.creditState?(l(),n("div",ke,[i("span",null,u(a.$t("user.SettlementTime"))+":",1),i("span",null,u(m(B)(e.item.resultDate)),1)])):d("",!0)])]);var C}}});Te.__scopeId="data-v-391015dd";const be=e=>(A("data-v-425bff0d"),e=e(),h(),e),De={class:"top"},we={class:"left"},Ne={class:"top-img"},Le={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Ce={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Se={class:"right"},Be={class:"font_1"},_e={key:0},Ee={key:1},xe={key:2,class:"color-1"},Re={class:"league-name"},Ie={key:0,class:"font_2"},Me={key:1,class:"font_2"},Ye={class:"top2"},Ke=be((()=>i("div",{class:"left"},[i("img",{class:"img_1",src:E,alt:""})],-1))),Oe={class:"right"},je={class:"one"},Pe={class:"one two"},We={key:0},Fe={key:1},Ue={key:2},$e={key:3,class:"img_1",src:_,alt:""},Je={class:"top3"},Ge={class:"one"},Ve={class:"money-num-money"},Qe={class:"one two"},ze={key:0},Xe={key:1},Ze={key:0},He={key:0,style:{color:"#FF9A00"}},qe={key:1,style:{color:"#FF9A00"}},ea={key:1},aa={key:2,class:"num color-1"},ta={key:3,class:"color-1"},sa=be((()=>i("div",{class:"line"},null,-1))),la={class:"top4"},na={class:"one"},ia={class:"one"},ua={key:0,class:"one"};var oa=e({props:{item:{type:Object,default:()=>{}}},setup(e){const g=e,A=a((()=>C.state.user.currency)),h=a((()=>C.state.user.teamNameList||[])),f=a((()=>C.state.user.championLangList||[])),k=e=>e.gold*e.sioRatio,T=e=>"W"===e||"LW"===e||"L"===e||"LL"===e||"P"===e,b=e=>{if(h.value.length){const a=h.value.find((a=>a.gidm===e.systemId));return a||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},D=e=>{if(f.value.length){const a=f.value.find((a=>a.ratioId===e));return a?a.ratioName:"?"}return"?"};return(a,h)=>{const f=t("SportsIcon"),w=t("SvgIcon"),N=s("img"),L=s("play");return l(),n("div",null,[(l(!0),n(o,null,c(g.item.betDTOList,((t,s)=>{return l(),n("div",{key:s},[i("div",De,[i("div",we,[i("div",Ne,[r(i("img",Le,null,512),[[N,t.homeLogo]]),r(i("img",Ce,null,512),[[N,t.awayLogo]])])]),i("div",Se,[i("div",Be,[t.championType?(l(),n("span",_e,u(a.$t("betting.champion")),1)):(l(),n("span",Ee,u(b(t).homeTeam)+" v "+u(b(t).awayTeam),1)),t.resultScore?(l(),n("span",xe," ["+u(t.resultScore)+"]",1)):d("",!0)]),i("div",Re,[y(f,{"icon-src":t.gameType,class:"ball-img"},null,8,["icon-src"]),t.championType?(l(),n("div",Ie,u(D(t.systemId)),1)):(l(),n("div",Me,u(b(t).leagueShortName),1))])])]),i("div",Ye,[Ke,i("div",Oe,[i("div",je,[i("span",null,u((c=t.betItemLang,JSON.parse(c)[localStorage.getItem("locale")||"zh-cn"])),1),i("span",{class:p([(o=t.betResultDetail,"W"===o||"LW"===o?"color-2":"L"===o||"LL"===o?"color-3":"P"===o?"color-4":"")])}," @"+u(t.ioRatio),3)]),i("div",Pe,[t.championType?(l(),n("span",We,u(D(t.gameId)),1)):t.homeTeam&&t.awayTeam?r((l(),n("span",Fe,null,512)),[[L,t]]):(l(),n("span",Ue,"?")),i("span",null,[2===Number(e.item.cashoutType)?(l(),v(w,{key:0,name:"user-ahead",class:"icon-svg-1"})):d("",!0),1===e.item.state?(l(),v(w,{key:1,name:"user-postpone",class:"icon-svg-1"})):1!==e.item.state&&T(t.betResultDetail)?(l(),v(w,{key:2,name:`user-${t.betResultDetail}`,class:"icon-svg-1"},null,8,["name"])):(l(),n("img",$e))])])])]),i("div",Je,[i("div",Ge,[i("span",null,u(a.$t("user.BettingAmount")),1),i("div",Ve,["CNY"===m(A)?(l(),v(w,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(A)?(l(),v(w,{key:1,name:"user-vndk",class:"img_1"})):(l(),v(w,{key:2,name:"user-usdt",class:"img_1"})),i("span",null,u(m(S)(e.item.gold)),1)])]),i("div",Qe,[0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",ze,u(a.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state||"LL"===t.betResultDetail?(l(),n("span",Xe,u(a.$t("user.practical"))+":",1)):d("",!0),i("div",null,[3!==e.item.state&&5!==e.item.state?(l(),n("span",Ze,[-1===e.item.state?(l(),n("span",He,u(a.$t("user.editPend")),1)):d("",!0),0===e.item.state?(l(),n("span",qe,u(a.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),3!==e.item.state&&5!==e.item.state||"LL"===t.betResultDetail?(l(),n("span",ea,["CNY"===m(A)?(l(),v(w,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===m(A)?(l(),v(w,{key:1,name:"user-vndk",class:"img_1"})):(l(),v(w,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0===e.item.state||-1===e.item.state||1===e.item.state?(l(),n("span",aa,u(m(S)(k(e.item))),1)):3!==e.item.state&&5!==e.item.state||"LL"===t.betResultDetail?(l(),n("span",ta,u(m(S)(e.item.winGold)),1)):d("",!0)])])]),sa,i("div",la,[i("div",na,[i("span",null,u(a.$t("user.OrderID"))+":",1),i("span",null,u(e.item.orderId),1)]),i("div",ia,[i("span",null,u(a.$t("user.BettingTime"))+":",1),i("span",null,u(e.item.createDate),1)]),1===e.item.creditState?(l(),n("div",ua,[i("span",null,u(a.$t("user.SettlementTime"))+":",1),i("span",null,u(m(B)(e.item.resultDate)),1)])):d("",!0)])]);var o,c})),128))])}}});oa.__scopeId="data-v-425bff0d";const ca=e=>(A("data-v-75192d4f"),e=e(),h(),e),ra={class:"timeSelect"},ma={class:"status status-2"},va={class:"status_1"},da=g(" ~ "),ga={class:"status"},pa={class:"status_1"},ya={key:0,class:"noData"},Aa=ca((()=>i("img",{class:"img_1",src:N},null,-1)));var ha=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:s}){const r=f({arr:[]}),{t:g}=x(),y=k(""),A=k(""),h=k(g("user.state")),w=k({key:"",value:g("user.whole")}),N=k(!1),S=k(!1),B=k(!1),_=k(!1),E=f({arr:[{value:g("user.whole"),key:""},{value:g("user.noFinal"),key:"0"},{value:g("user.final"),key:"1"}]}),M=k({beginName:L().subtract(90,"days").format("MM/DD"),endName:L().format("MM/DD")});T((()=>{A.value=L().valueOf();y.value=A.value-7776e6}));const Y=()=>{j()};let K=0;const j=async()=>{K++;const e={orderState:w.value.key,page:K,pageSize:10,beginTime:y.value,endTime:A.value},a=await R(e);if(200!==a.code)return B.value=!1,_.value=!0,I(a.msg);const t=a.data;if(200===a.code){t.forEach((e=>{r.arr.push(e)}));const e=[],a=[];r.arr.map((t=>{t.betDTOList.map((t=>{const{championType:s,systemId:l,gidm:n}=t;s&&a.push(n),e.push(l)}))})),C.dispatch("user/getMoreTeamList",e.join()),C.dispatch("user/getChampionLang",a.join()),B.value=!1,_.value=!t.length}};return a({setPk:async function(e){w.value=e,B.value=!0,_.value=!1,K=0,r.arr=[],j(),console.log(e)},setDateTime:e=>{const[a,t]=e;M.value.beginName=L(a).format("MM/DD"),M.value.endName=L(t).format("MM/DD"),y.value=L(a).valueOf(),A.value=L(t).valueOf(),B.value=!0,_.value=!1,S.value=!1,K=0,r.arr=[],j()},showBottom:N,showBottom2:S}),(e,a)=>{const g=t("van-list");return l(),n(o,null,[i("div",ra,[i("div",ma,[i("div",va,[i("span",null,u(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=b((e=>(S.value=!0,void s("timeChange",!0,1,y.value,A.value))),["stop"]))},[i("span",null,u(M.value.beginName),1),da,i("span",null,u(M.value.endName),1),i("img",{class:p(["img_1",[S.value?"img_3":""]]),src:O,alt:""},null,2)])])]),i("div",ga,[i("div",pa,[i("span",null,u(e.$t("user.state")),1),i("div",{class:"round",onClick:a[1]||(a[1]=b((e=>(N.value=!0,void s("valueChange",!0,h.value,E.arr,w.value,1))),["stop"]))},[i("span",null,u(w.value.value),1),i("img",{class:p(["img_1",[N.value?"img_3":""]]),src:O,alt:""},null,2)])])])]),!m(r).arr.length&&_.value?(l(),n("div",ya,[Aa,i("p",null,u(e.$t("user.noData")),1)])):d("",!0),m(r).arr.length||!_.value?(l(),v(g,{key:1,loading:B.value,"onUpdate:loading":a[2]||(a[2]=e=>B.value=e),finished:_.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:Y},{default:D((()=>[(l(!0),n(o,null,c(m(r).arr,((e,a)=>(l(),n("div",{key:a},[1===Number(e.parlayNum)?(l(),v(oa,{key:0,item:e,class:"item"},null,8,["item"])):d("",!0),1!==Number(e.parlayNum)?(l(),v(Te,{key:1,item:e,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});ha.__scopeId="data-v-75192d4f";var fa="/assets/CNY1.65142380.svg",ka="/assets/VNDK1.51f6b89d.svg",Ta="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAHB8+mLAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAJgAAAADF1tjNAAAEvUlEQVRYCe1YbWhbVRg+7725jetwsQylc2wKuiGuQ2QiOgRxdip+4ITdzCr7IU1LO6jQWNkQhPtDnOCagsN2W1v/TLqZDBW1P/ZRQZRNFBxMJzpRCGyuoiMtw87m4x6f9y4n3pwkzWIz6I8eaN73vN8f5+uWBMbW9l7JUA2DEUMYgx6BxD4Pf74jupEJLO04ToBx4/Bw7CQj/uGp+wmM09b26Akh5KOKcWR0gAyDxCfKkYJKoBCWlJJKbBKRLCF6jvhHd1awmUfYOfmJdjxuyqOnskwLBKj18P7YhOJ7gqpGJOgHpDEB/1PIarUUcgsCbILwpSKLrK2UWlaFLJTMs870soEzQx9FrnWmmnuVVJNq8GrbVG8h7Qp3Byvp5S9KZltXX0suk/ueBS1a0nxo5M0/GPeGHYleXSn5OWetMs+TBGSmyI707pZS7PKIJD4E/ImEYSGIDaBvYnqwMRTy+P6fchaZf811rL9goTzVlpo/j3I4d6+mXMoZKUcrRFiOyTS9R/oq1fW8pcNENLMb6z6M3h0SAXc8sW/ggi7sn/PmEsdPPUSuEXbJXdlgBV8aG3orFYChM9g867H2tnwwsucRv5KHY5EgjWU4nYLYeJdBc5meCIdzAF/wn+04DZnz0+PIprUkZbuj9zmcHjZJ2QojN7NymSGxm78F/2hDkEbH3u1PKpkSg4qhYK01vOaFqBxUg3U3WEhZT61aJMV86joyGtvPtLpHuPANFnaKfqhyPSTJNVj0mxlXo6ycKc4qfqEpiuCH4cgrba50x/w0dar4aX68Yg23d/XdIknc5RdmvK1j5zpvH+uM/NyL8IXuXU2ZdPo97NXfpeHGxeYHv+K9OleEdlfvSpE1npLCbYNePDESG2KbuC2iU/Hh/ia+6XWncxnUZWFn0CTxvoGih8Id0WN8YuhCBskkUhgXJL6E7wlE8rEuw/Ntkb5nYac7K+UQvdjjLJudmf4N9OVKGNGm0OPTOBuTCPsvEnLGFdJCDktR11UkaS3OzhYlzxDPoN3x4dhrRV22O3eulm4mAuITkMEFWfG98yecTXC9E8MDH/kNFxn0MxivpYZKt+KyUQK1wkWDtVasVL7uNSxZNvN945TGXAvlv6tEadU9Y2W4XnAxwPlWsmQN1mKw3NGm61d77ery+nzBt7hiBb377/zl9choA27deyF4J+682/EJZuGuTeGFksIVdSP49+lZ++f5OzKEa+4m6OEKpDRsJAXJX3AjnTZN87vcisYzCcdJ+/UU7gVo73i1WaRzbwgp1giDRqyA9Rl/GyihSrCeLfaeLdnM08KVEfxb4JxsMF9PDL49yd8nP8vZ7FpkGkuMxh6uFMz1pucLchB+Dtrt0X7EdBGxnSPvuzybO4bqrVBBINi/0ZKv8ZQ5iRKfFYb8sUmEfj1wwJlRMvOBnZ1OY0pM3yFcuht+1sH3Rvh5AEtmacEuiYtmwHzMa7Ei9vS8E5y8knwGxCfxmnkcCrcq3vWEeJJdQJDHBdF485LbPt279+VZ5a8oQEWsBvkdfMPn3yy/ks1th+E9c8lbZN4TCIjJfzbdfyn/2TqXeAnvfwWorNRzkyibOlzw5+BigHrLap0vVrDWiunyC76C/wLnYcK3CaljuwAAAABJRU5ErkJggg==";const ba={key:0,class:"noData"},Da=(e=>(A("data-v-dd44e2ce"),e=e(),h(),e))((()=>i("img",{class:"img_1",src:N},null,-1))),wa={class:"date-title"},Na={class:"title"},La={class:"line"},Ca={class:"left"},Sa={class:"left-1"},Ba={class:"font"},_a={class:"font-1"},Ea={class:"img_1",src:"/assets/copy.19495a6f.svg"},xa={class:"left-2"},Ra={class:"font"},Ia={class:"right"},Ma={key:0},Ya={key:1},Ka={class:"right-1"},Oa=["src"],ja=["src"],Pa=["src"],Wa={class:"right-1"},Fa=["src"],Ua=["src"],$a=["src"];var Ja=e({setup(e){const a=k(!1),p=k(!1),A=f({arr:[]}),h=f({arr:[]}),b=f({arr:[]});T((()=>{C()}));let w=0;const N=async()=>{w++;const e={page:w,pageSize:20,beginDate:"",endDate:"",needCount:1,tradeType:""},t=await Y(e),s=t.data;if(200===t.code){s.transferRecordRspList.forEach((e=>{A.arr.push(e)}));const e={},t=[];A.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const t=L(a.createTime).format("YYYY/MM/DD");e[t]?e[t].list.push(a):e[t]={date:t,list:[a]}})),Object.keys(e).map((a=>{t.push(JSON.parse(JSON.stringify(e[a])))})),h.arr=t,a.value=!1,p.value=!s.transferRecordRspList.length}else I(t.msg)},C=async()=>{const e=await M({});if(200!==e.code)return I(e.msg);b.arr=e.data},_=e=>{if(b.arr.length){const a=b.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||{}]||""}};return(e,f)=>{const k=t("van-divider"),T=t("van-list"),b=s("copy");return l(),n(o,null,[y(k,{class:"color-line"}),!m(A).arr.length&&p.value?(l(),n("div",ba,[Da,i("p",null,u(e.$t("user.noData")),1)])):d("",!0),m(A).arr.length||!p.value?(l(),v(T,{key:1,loading:a.value,"onUpdate:loading":f[0]||(f[0]=e=>a.value=e),finished:p.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:N},{default:D((()=>[(l(!0),n(o,null,c(m(h).arr,((a,t)=>(l(),n("div",{key:t,class:"dataList-item"},[i("div",wa,u(a.date),1),(l(!0),n(o,null,c(a.list,((a,t)=>(l(),n("div",{key:t,class:"item"},[i("div",Na,u(_(a.tradeType)),1),i("div",La,[i("div",Ca,[i("div",Sa,[i("div",Ba,u(e.$t("user.betId"))+":",1),i("span",null,[i("span",_a,u(a.payno),1),r(i("img",Ea,null,512),[[b,a.payno]])])]),i("p",xa,[i("span",Ra,u(e.$t("user.time"))+":",1),i("span",null,u(m(B)(a.createTime)),1)])]),i("div",Ia,[i("div",null,[4===a.payWay?(l(),n("div",Ma,u(e.$t("user.compensate")),1)):(l(),n("div",Ya,u(e.$t("user.betNum")),1)),i("div",Ka,["CNY"===a.currency?(l(),n("img",{key:0,src:m(fa),style:{"object-fit":"contain"}},null,8,Oa)):"VNDK"===a.currency?(l(),n("img",{key:1,src:m(ka),style:{"object-fit":"contain"}},null,8,ja)):(l(),n("img",{key:2,src:m(Ta),style:{"object-fit":"contain"}},null,8,Pa)),g(" "+u(m(S)(a.tradeGold)),1)])]),i("div",null,[i("div",null,u(e.$t("user.balance")),1),i("div",Wa,["CNY"===a.currency?(l(),n("img",{key:0,src:m(fa),style:{"object-fit":"contain"}},null,8,Fa)):"VNDK"===a.currency?(l(),n("img",{key:1,src:m(ka),style:{"object-fit":"contain"}},null,8,Ua)):(l(),n("img",{key:2,src:m(Ta),style:{"object-fit":"contain"}},null,8,$a)),g(" "+u(m(S)(a.gold)),1)])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ja.__scopeId="data-v-dd44e2ce";const Ga={class:"ball-type"},Va={class:"status"},Qa={class:"status_1"},za={key:0,class:"noData"},Xa=(e=>(A("data-v-419682f2"),e=e(),h(),e))((()=>i("img",{class:"img_1",src:N},null,-1))),Za={class:"title"},Ha={class:"left title-left"},qa={class:"ball-name"},et={class:"right"},at={class:"match-content"},tt={class:"left"},st={class:"left-1"},lt={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},nt={class:"center"},it={class:"right"},ut={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},ot={class:"right-1"};var ct=e({emits:["valueChange","timeChange"],setup(e,{expose:a,emit:g}){const A=f({arr:[]}),h=k(!1),b=k(!1),w=k({name:L().format("YYYY/MM/DD"),value:L().valueOf(),key:0}),N=k({gameType:"FT",key:"FT"}),S=k(!1);T((()=>{C.dispatch("app/getAllSports")}));let B=0;const _=async()=>{B++;const e={page:B,gameSort:3,leagueIds:"",gameType:N.value.gameType,matchTime:w.value.value,pageSize:10,gameStatus:1,groupId:3},a=await K(e),t=a.data;200===a.code?(t.list.forEach((e=>{A.arr.push(e)})),h.value=!1,b.value=A.arr.length===t.total):(b.value=!0,h.value=!1)},E=e=>e.gameDate||e.matchTime?L(e.gameDate).format("MM/DD HH:mm"):void 0;const x=e=>{N.value={gameType:e,key:e},B=0,h.value=!0,b.value=!1,A.arr=[],_()};return a({setDateTime:async function(e){w.value={name:L(e).format("YYYY/MM/DD"),value:L(e).valueOf(),key:0},B=0,S.value=!1,h.value=!0,b.value=!1,A.arr=[],_(),console.log(e)},showBottom:S}),(e,a)=>{const f=t("sports-tabs"),k=t("van-divider"),T=t("SportsIcon"),N=t("van-list"),L=s("img");return l(),n(o,null,[i("div",Ga,[y(f,{onReturnSportsSuccess:x})]),i("div",Va,[i("div",Qa,[i("span",null,u(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=e=>(S.value=!0,void g("timeChange",!0,3,w.value.value)))},[i("span",null,u(w.value.name),1),i("img",{class:p(["img_1",[S.value?"img_3":""]]),src:O,alt:""},null,2)])])]),y(k,{class:"color-line"}),!m(A).arr.length&&b.value?(l(),n("div",za,[Xa,i("p",null,u(e.$t("user.noData")),1)])):d("",!0),m(A).arr.length||!b.value?(l(),v(N,{key:1,loading:h.value,"onUpdate:loading":a[1]||(a[1]=e=>h.value=e),finished:b.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:_},{default:D((()=>[(l(!0),n(o,null,c(m(A).arr,((e,a)=>(l(),n("div",{key:a,class:"item"},[i("div",Za,[i("div",Ha,[y(T,{"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",qa,u(e.leagueName),1)]),i("div",et,u(E(e)),1)]),i("div",at,[i("div",tt,[i("div",st,u(e.homeTeamName),1),r(i("img",lt,null,512),[[L,e.homeTeamLogo]])]),i("div",nt,u(e.result.GM_h||0)+" : "+u(e.result.GM_c||0),1),i("div",it,[r(i("img",ut,null,512),[[L,e.awayTeamLogo]]),i("div",ot,u(e.awayTeamName),1)])])])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});ct.__scopeId="data-v-419682f2";const rt={class:"result"},mt={class:"content"},vt={class:"popup-title"},dt={class:"pk-list"},gt=["onClick"],pt={key:0},yt={key:1},At={key:2},ht={key:3};var ft=e({setup(e){const s=a((()=>C.state.app.theme)),r=k(""),v=k({}),g=f({arr:[]}),A=w(),h=k(1),b=k(1),N=k(0),S=k(),B=k(),_=k(!1),E=k(!1),x=k(!1),R=L().valueOf(),I=k(new Date),M=k(new Date(R-7776e6)),Y=k(new Date),K=k(new Date(R-1296e6)),O=k([new Date(R-6048e5),new Date]),j=k(new Date),P=a((()=>"blue"===s.value));T((()=>{}));const W=(e,a,t,s,l)=>{r.value=a,v.value=s,g.arr=[...t],h.value=l,_.value=e};const F=(e,a,t,s)=>{console.log(a),b.value=a,1===a&&(O.value=[new Date(t),new Date(s)],E.value=e),3===a&&(j.value=new Date(t),x.value=e)},U=e=>{1===b.value&&(S.value.setDateTime(e),E.value=!1),3===b.value&&(B.value.setDateTime(e),x.value=!1)},$=()=>{1===b.value&&(S.value.showBottom2=!1),3===b.value&&(B.value.showBottom=!1)};return(e,a)=>{const s=t("van-icon"),f=t("van-nav-bar"),k=t("van-tab"),T=t("van-tabs"),b=t("van-popup"),w=t("van-calendar");return l(),n("div",rt,[y(f,{class:"bg-title",title:e.$t("user.result")},{left:D((()=>[y(s,{name:"arrow-left",class:"img_1",onClick:a[0]||(a[0]=e=>{A.back()})})])),_:1},8,["title"]),i("div",mt,[y(T,{active:N.value,"onUpdate:active":a[1]||(a[1]=e=>N.value=e),"line-height":"3px",color:m(P)?"#0E3D66":"#1F2630","title-inactive-color":m(P)?"#88A6BB":"#96A5AA","title-active-color":m(P)?"#0E3D66":"#1F2630","line-width":"40px",duration:.3},{default:D((()=>[y(k,{title:e.$t("user.BettingHistory")},{default:D((()=>[y(ha,{ref_key:"childRefA",ref:S,onValueChange:W,onTimeChange:F},null,512)])),_:1},8,["title"]),y(k,{title:e.$t("user.FlowingHistory")},{default:D((()=>[y(Ja)])),_:1},8,["title"]),y(k,{title:e.$t("user.matchResult")},{default:D((()=>[y(ct,{ref_key:"childRefB",ref:B,onValueChange:W,onTimeChange:F},null,512)])),_:1},8,["title"])])),_:1},8,["active","color","title-inactive-color","title-active-color","duration"]),y(b,{show:_.value,"onUpdate:show":a[2]||(a[2]=e=>_.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"50%"},onClose:a[3]||(a[3]=e=>{return a="close",console.log(a),1===h.value&&(S.value.showBottom=!1),2===h.value&&(B.value.showBottom1=!1),void(3===h.value&&(B.value.showBottom=!1));var a})},{default:D((()=>[i("div",vt,u(r.value),1),i("div",dt,[(l(!0),n(o,null,c(m(g).arr,((a,t)=>(l(),n("div",{key:t,class:p(["item",[v.value.key===a.key?"item-color":""]]),onClick:e=>async function(e){_.value=!1,v.value=e,1===h.value&&S.value.setPk(e),2===h.value&&B.value.setBallSelect(e),3===h.value&&B.value.setPk(e)}(a)},[i("p",null,[1===h.value?(l(),n("span",pt,u(a.value),1)):d("",!0),2===h.value?(l(),n("span",yt,u(e.$t(`user.sports.${a.gameType}`)),1)):d("",!0),3===h.value?(l(),n("span",At,u(a.name),1)):d("",!0),v.value.key===a.key?(l(),n("span",ht,[y(s,{name:"success"})])):d("",!0)])],10,gt)))),128))])])),_:1},8,["show","duration"]),y(w,{show:E.value,"onUpdate:show":a[4]||(a[4]=e=>E.value=e),type:"range","min-date":M.value,"max-date":I.value,"default-date":O.value,onConfirm:U,onClose:a[5]||(a[5]=e=>$())},null,8,["show","min-date","max-date","default-date"]),y(w,{show:x.value,"onUpdate:show":a[6]||(a[6]=e=>x.value=e),type:"single","min-date":K.value,"max-date":Y.value,"default-date":j.value,onConfirm:U,onClose:a[7]||(a[7]=e=>$())},null,8,["show","min-date","max-date","default-date"])])])}}});ft.__scopeId="data-v-2e093f2e";export{ft as default};
