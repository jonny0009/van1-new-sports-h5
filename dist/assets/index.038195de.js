<<<<<<<< HEAD:dist/assets/index.224c090f.js
import{s as e,e as a,d as l,j as t,r as s,o as n,S as u,P as i,V as o,U as v,Z as r,u as c,$ as d,c as m,O as g,F as p,_ as A,B as h,X as y,Y as f,E as k,q as T,x as D,b as w,R as _,k as C}from"./vue.7833d4f2.js";import{u as M,h as b,v as x,d as N,s as B,w as E,x as $,n as S,y as Y,p as R,z as O,k as L,A as I,B as U}from"./index.3243ddf5.js";var Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAAEc4A0XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADAAAAACRRQtxAAAAkElEQVQoFYWPAQ6AIAwD8RE+TR+pP9NH6I44UtnEJoTRdV0ppZTNzmWn4prsaq9KwQBnzyix7vwoXMVEHVkoeg84xaoPD4TVy05F7DuUSFOJYKcmjNv2d9Ni2zdZ94IKCBygq0LTCVYFa4gsg67M6mBGrkyYcWhT6D+yQTg0Q3x9KUQeulhTv/QZ+c+EuMPIN+mRT7lWjXr2AAAAAElFTkSuQmCC";const F=e=>(y("data-v-d11fc51e"),e=e(),f(),e),P={class:"timeSelect"},V={class:"status status-2"},j={class:"status_1"},G=h(" ~ "),H={class:"status"},K={class:"status_1"},z={key:0,class:"noData"},J=F((()=>i("img",{class:"img_1",src:S},null,-1)));var W=e({emits:["valueChange","timeChange"],setup(e,{expose:h,emit:y}){const{t:f}=M(),k=a({arr:[]}),T=l(""),D=l(""),w=l(f("user.state")),_=l({key:"",value:f("user.whole")}),C=l(!1),S=l(!1),Y=l(!1),R=l(!1),O=a({arr:[{value:f("user.whole"),key:""},{value:f("user.noFinal"),key:"0"},{value:f("user.final"),key:"1"}]}),L=l({beginName:b().subtract(90,"days").format("MM/DD"),endName:b().format("MM/DD")});t((()=>{D.value=b().valueOf();T.value=D.value-7776e6}));const I=()=>{F()};let U=0;const F=async()=>{U++;const e={orderState:_.value.key,page:U,pageSize:10,beginTime:T.value,endTime:D.value},a=await x(e);if(200!==a.code)return Y.value=!1,R.value=!0,N(a.msg);const l=a.data;if(200===a.code){l.forEach((e=>{k.arr.push(e)}));const e=[],a=[];k.arr.map((l=>{l.betDTOList.map((l=>{const{championType:t,systemId:s,gidm:n}=l;t&&a.push(n),e.push(s)}))})),B.dispatch("user/getMoreTeamList",e.join()),B.dispatch("user/getChampionLang",a.join()),Y.value=!1,R.value=!l.length}};return h({setPk:async function(e){_.value=e,Y.value=!0,R.value=!1,U=0,k.arr=[],F(),console.log(e)},setDateTime:e=>{const[a,l]=e;L.value.beginName=b(a).format("MM/DD"),L.value.endName=b(l).format("MM/DD"),T.value=b(a).valueOf(),D.value=b(l).valueOf(),Y.value=!0,R.value=!1,S.value=!1,U=0,k.arr=[],F()},showBottom:C,showBottom2:S}),(e,a)=>{const l=s("van-list");return n(),u(p,null,[i("div",P,[i("div",V,[i("div",j,[i("span",null,o(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=v((e=>(S.value=!0,void y("timeChange",!0,1,T.value,D.value))),["stop"]))},[i("span",null,o(L.value.beginName),1),G,i("span",null,o(L.value.endName),1),i("img",{class:r(["img_1",[S.value?"img_3":""]]),src:Q,alt:""},null,2)])])]),i("div",H,[i("div",K,[i("span",null,o(e.$t("user.state")),1),i("div",{class:"round",onClick:a[1]||(a[1]=v((e=>(C.value=!0,void y("valueChange",!0,w.value,O.arr,_.value,1))),["stop"]))},[i("span",null,o(_.value.value),1),i("img",{class:r(["img_1",[C.value?"img_3":""]]),src:Q,alt:""},null,2)])])])]),!c(k).arr.length&&R.value?(n(),u("div",z,[J,i("p",null,o(e.$t("user.noData")),1)])):d("",!0),c(k).arr.length||!R.value?(n(),m(l,{key:1,loading:Y.value,"onUpdate:loading":a[2]||(a[2]=e=>Y.value=e),finished:R.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:I},{default:g((()=>[(n(!0),u(p,null,A(c(k).arr,((e,a)=>(n(),u("div",{key:a},[1===Number(e.parlayNum)?(n(),m(E,{key:0,item:e,class:"item"},null,8,["item"])):d("",!0),1!==Number(e.parlayNum)?(n(),m($,{key:1,item:e,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});W.__scopeId="data-v-d11fc51e";const X=e=>(y("data-v-1e190c1c"),e=e(),f(),e),Z={class:"timeSelect"},q={class:"status status-2"},ee={class:"status_1"},ae=h(" ~ "),le={class:"status"},te={class:"status_1"},se={key:0,class:"noData"},ne=X((()=>i("img",{class:"img_1",src:S},null,-1))),ue={class:"date-title"},ie={key:0,class:"title"},oe={key:1,class:"title"},ve={class:"line"},re={class:"left"},ce={key:0,class:"title"},de={class:"left-1"},me={class:"font"},ge={class:"font-1"},pe={class:"img_1",src:"/assets/copy.8596b31a.svg"},Ae={class:"left-2"},he={class:"font"},ye={class:"right"},fe={key:0},ke={key:1},Te={class:"right-1"},De={class:"money-symbol"},we={class:"right-1"},_e={class:"money-symbol"};var Ce=e({emits:["valueChange","timeChange"],setup(e,{expose:h,emit:y}){const{t:f}=M(),w=l(!1),_=l(!1),C=l(!1),x=l(!1),B=l({key:"",value:f("user.whole")}),E=l(f("user.type")),$=l(""),S=l(""),U=a({arr:[]}),F=a({arr:[]}),P=a({arr:[]}),V=a({arr:[]}),j=l({beginName:b().subtract(90,"days").format("MM/DD"),endName:b().format("MM/DD")});t((()=>{z(),S.value=b().valueOf();$.value=S.value-7776e6}));const G=e=>!!(e.tradeType.includes("SETTLEMENT")||e.tradeType.includes("CASHOUT")||e.tradeType.includes("PAYMENT"));let H=0;const K=async()=>{H++;const e={page:H,pageSize:20,beginDate:$.value,endDate:S.value,needCount:1,tradeType:B.value.key},a=await O(e),l=a.data;if(200===a.code){l.transferRecordRspList.forEach((e=>{U.arr.push(e)}));const e={},a=[];U.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const l=b(a.createTime).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={date:l,list:[a]}})),Object.keys(e).map((l=>{a.push(JSON.parse(JSON.stringify(e[l])))})),F.arr=a,w.value=!1,_.value=!l.transferRecordRspList.length}else N(a.msg)},z=async()=>{const e=await Y({});if(200!==e.code)return N(e.msg);P.arr=e.data,V.arr=[{value:f("user.whole"),key:""},...e.data],V.arr.map((e=>{e.tradeType&&(e.value=J(e.tradeType),e.key=e.tradeType)}))},J=e=>{if(P.arr.length){const a=P.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||R()]||""}};return h({setPk:async function(e){B.value=e,w.value=!0,_.value=!1,H=0,U.arr=[],K(),console.log(e)},setDateTime:e=>{const[a,l]=e;j.value.beginName=b(a).format("MM/DD"),j.value.endName=b(l).format("MM/DD"),$.value=b(a).valueOf(),S.value=b(l).valueOf(),w.value=!0,_.value=!1,x.value=!1,H=0,U.arr=[],K()},showBottom:C,showBottom2:x}),(e,a)=>{const l=s("van-divider"),t=s("van-list"),h=k("copy"),f=k("points");return n(),u(p,null,[i("div",Z,[i("div",q,[i("div",ee,[i("span",null,o(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=v((e=>(x.value=!0,void y("timeChange",!0,2,$.value,S.value))),["stop"]))},[i("span",null,o(j.value.beginName),1),ae,i("span",null,o(j.value.endName),1),i("img",{class:r(["img_1",[x.value?"img_3":""]]),src:Q,alt:""},null,2)])])]),i("div",le,[i("div",te,[i("span",null,o(e.$t("user.type")),1),i("div",{class:"round",onClick:a[1]||(a[1]=v((e=>(C.value=!0,void y("valueChange",!0,E.value,V.arr,B.value,2))),["stop"]))},[i("span",null,o(B.value.value),1),i("img",{class:r(["img_1",[C.value?"img_3":""]]),src:Q,alt:""},null,2)])])])]),T(l,{class:"color-line"}),!c(U).arr.length&&_.value?(n(),u("div",se,[ne,i("p",null,o(e.$t("user.noData")),1)])):d("",!0),c(U).arr.length||!_.value?(n(),m(t,{key:1,loading:w.value,"onUpdate:loading":a[2]||(a[2]=e=>w.value=e),finished:_.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:K},{default:g((()=>[(n(!0),u(p,null,A(c(F).arr,((a,l)=>(n(),u("div",{key:l,class:"dataList-item"},[i("div",ue,o(a.date),1),(n(!0),u(p,null,A(a.list,((a,l)=>(n(),u("div",{key:l,class:"item"},["GAME"===a.transferType?(n(),u("div",ie,o(e.$t("home.casino")),1)):(n(),u("div",oe,o(J(a.tradeType)),1)),i("div",ve,[i("div",re,["GAME"===a.transferType?(n(),u("div",ce,o(J(a.tradeType)),1)):d("",!0),i("div",de,[i("div",me,o(e.$t("user.betId"))+":",1),i("span",null,[i("span",ge,o(a.payno),1),D(i("img",pe,null,512),[[h,a.payno]])])]),i("p",Ae,[i("span",he,o(e.$t("user.time"))+":",1),i("span",null,o(c(L)(a.createTime)),1)])]),i("div",ye,[i("div",null,[G(a)?(n(),u("div",fe,o(e.$t("user.compensate")),1)):(n(),u("div",ke,o(e.$t("user.betNum")),1)),i("div",Te,[i("span",De,[T(I)]),D(i("span",null,null,512),[[f,a.tradeGold]])])]),i("div",null,[i("div",null,o(e.$t("user.balance")),1),i("div",we,[i("span",_e,[T(I)]),D(i("span",null,null,512),[[f,a.gold]])])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ce.__scopeId="data-v-1e190c1c";const Me={class:"ball-type"},be={class:"status"},xe={class:"status_1"},Ne={key:0,class:"noData"},Be=(e=>(y("data-v-55d8ae31"),e=e(),f(),e))((()=>i("img",{class:"img_1",src:S},null,-1))),Ee={class:"title"},$e={class:"left title-left"},Se={class:"ball-name"},Ye={class:"right"},Re={class:"match-content"},Oe={class:"left"},Le={class:"left-1"},Ie={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Ue={class:"center"},Qe={class:"right"},Fe={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Pe={class:"right-1"};var Ve=e({emits:["valueChange","timeChange"],setup(e,{expose:v,emit:h}){const y=a({arr:[]}),f=l(!1),w=l(!1),_=l({name:b().format("YYYY/MM/DD"),value:b().valueOf(),key:0}),C=l({gameType:"FT",key:"FT"}),M=l(!1);t((()=>{B.dispatch("app/getAllSports")}));let x=0;const N=async()=>{x++;const e={page:x,gameSort:3,leagueIds:"",gameType:C.value.gameType,matchTime:_.value.value,pageSize:10,gameStatus:1,groupId:3},a=await U(e),l=a.data;200===a.code?(l.list.forEach((e=>{y.arr.push(e)})),f.value=!1,w.value=y.arr.length===l.total):(w.value=!0,f.value=!1)},E=e=>e.gameDate||e.matchTime?b(e.gameDate).format("MM/DD HH:mm"):void 0;const $=e=>{C.value={gameType:e,key:e},x=0,f.value=!0,w.value=!1,y.arr=[],N()};return v({setDateTime:async function(e){_.value={name:b(e).format("YYYY/MM/DD"),value:b(e).valueOf(),key:0},x=0,M.value=!1,f.value=!0,w.value=!1,y.arr=[],N(),console.log(e)},showBottom:M}),(e,a)=>{const l=s("sports-tabs"),t=s("van-divider"),v=s("SportsIcon"),C=s("van-list"),b=k("img");return n(),u(p,null,[i("div",Me,[T(l,{onReturnSportsSuccess:$})]),i("div",be,[i("div",xe,[i("span",null,o(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=e=>(M.value=!0,void h("timeChange",!0,3,_.value.value)))},[i("span",null,o(_.value.name),1),i("img",{class:r(["img_1",[M.value?"img_3":""]]),src:Q,alt:""},null,2)])])]),T(t,{class:"color-line"}),!c(y).arr.length&&w.value?(n(),u("div",Ne,[Be,i("p",null,o(e.$t("user.noData")),1)])):d("",!0),c(y).arr.length||!w.value?(n(),m(C,{key:1,loading:f.value,"onUpdate:loading":a[1]||(a[1]=e=>f.value=e),finished:w.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:N},{default:g((()=>[(n(!0),u(p,null,A(c(y).arr,((e,a)=>(n(),u("div",{key:a,class:"item"},[i("div",Ee,[i("div",$e,[T(v,{"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",Se,o(e.leagueName),1)]),i("div",Ye,o(E(e)),1)]),i("div",Re,[i("div",Oe,[i("div",Le,o(e.homeTeamName),1),D(i("img",Ie,null,512),[[b,e.homeTeamLogo]])]),i("div",Ue,o(e.result.GM_h||0)+" : "+o(e.result.GM_c||0),1),i("div",Qe,[D(i("img",Fe,null,512),[[b,e.awayTeamLogo]]),i("div",Pe,o(e.awayTeamName),1)])])])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ve.__scopeId="data-v-55d8ae31";const je={class:"result"},Ge={class:"content"},He={class:"popup-title"},Ke={class:"pk-list"},ze=["onClick"],Je={key:0},We={key:1},Xe={key:2},Ze={key:3};var qe=e({setup(e){const v=w((()=>B.state.app.theme)),m=l(""),h=l({}),y=a({arr:[]}),f=_(),k=l(1),D=l(1),M=w((()=>B.state.user.resultTab||0)),x=l(),N=l(),E=l(),$=l(!1),S=l(!1),Y=l(!1),R=b().valueOf(),O=l(new Date),L=l(new Date(R-7776e6)),I=l(new Date),U=l(new Date(R-1296e6)),Q=l([new Date(R-6048e5),new Date]),F=l(new Date),P=w((()=>"blue"===v.value));t((()=>{}));const V=(e,a,l,t,s)=>{m.value=a,h.value=t,y.arr=[...l],k.value=s,$.value=e};const j=(e,a,l,t)=>{console.log(a),D.value=a,1===a&&(Q.value=[new Date(l),new Date(t)],S.value=e),2===a&&(Q.value=[new Date(l),new Date(t)],S.value=e),3===a&&(F.value=new Date(l),Y.value=e)},G=e=>{1===D.value&&(x.value.setDateTime(e),S.value=!1),2===D.value&&(E.value.setDateTime(e),S.value=!1),3===D.value&&(N.value.setDateTime(e),Y.value=!1)},H=()=>{1===D.value&&(x.value.showBottom2=!1),2===D.value&&(E.value.showBottom2=!1),3===D.value&&(N.value.showBottom=!1)};return(e,a)=>{const l=s("van-icon"),t=s("van-nav-bar"),v=s("van-tab"),D=s("van-tabs"),w=s("van-popup"),_=s("van-calendar");return n(),u("div",je,[T(t,{class:"bg-title",title:e.$t("user.result")},{left:g((()=>[T(l,{name:"arrow-left",class:"img_1",onClick:a[0]||(a[0]=e=>{f.back()})})])),_:1},8,["title"]),i("div",Ge,[T(D,{active:c(M),"onUpdate:active":a[1]||(a[1]=e=>C(M)?M.value=e:null),"line-height":"3px",color:c(P)?"#0E3D66":"#1F2630","title-inactive-color":c(P)?"#88A6BB":"#96A5AA","title-active-color":c(P)?"#0E3D66":"#1F2630","line-width":"40px","swipe-threshold":"2",animated:"",duration:.2},{default:g((()=>[T(v,{title:e.$t("user.BettingHistory")},{default:g((()=>[T(W,{ref_key:"childRefA",ref:x,onValueChange:V,onTimeChange:j},null,512)])),_:1},8,["title"]),T(v,{title:e.$t("user.FlowingHistory")},{default:g((()=>[T(Ce,{ref_key:"childRefC",ref:E,onValueChange:V,onTimeChange:j},null,512)])),_:1},8,["title"]),T(v,{title:e.$t("user.matchResult")},{default:g((()=>[T(Ve,{ref_key:"childRefB",ref:N,onValueChange:V,onTimeChange:j},null,512)])),_:1},8,["title"])])),_:1},8,["active","color","title-inactive-color","title-active-color","duration"]),T(w,{show:$.value,"onUpdate:show":a[2]||(a[2]=e=>$.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"60%"},onClose:a[3]||(a[3]=e=>{return a="close",console.log(a),1===k.value&&(x.value.showBottom=!1),2===k.value&&(E.value.showBottom=!1),void(3===k.value&&(N.value.showBottom=!1));var a})},{default:g((()=>[i("div",He,o(m.value),1),i("div",Ke,[(n(!0),u(p,null,A(c(y).arr,((e,a)=>(n(),u("div",{key:a,class:r(["item",[h.value.key===e.key?"item-color":""]]),onClick:a=>async function(e){$.value=!1,h.value=e,1===k.value&&x.value.setPk(e),2===k.value&&E.value.setPk(e),3===k.value&&N.value.setPk(e)}(e)},[i("p",null,[1===k.value?(n(),u("span",Je,o(e.value),1)):d("",!0),2===k.value?(n(),u("span",We,o(e.value),1)):d("",!0),3===k.value?(n(),u("span",Xe,o(e.name),1)):d("",!0),h.value.key===e.key?(n(),u("span",Ze,[T(l,{name:"success"})])):d("",!0)])],10,ze)))),128))])])),_:1},8,["show","duration"]),T(_,{show:S.value,"onUpdate:show":a[4]||(a[4]=e=>S.value=e),type:"range","min-date":L.value,"max-date":O.value,"default-date":Q.value,onConfirm:G,onClose:a[5]||(a[5]=e=>H())},null,8,["show","min-date","max-date","default-date"]),T(_,{show:Y.value,"onUpdate:show":a[6]||(a[6]=e=>Y.value=e),type:"single","min-date":U.value,"max-date":I.value,"default-date":F.value,onConfirm:G,onClose:a[7]||(a[7]=e=>H())},null,8,["show","min-date","max-date","default-date"])])])}}});qe.__scopeId="data-v-9d5d6278";export{qe as default};
========
import{s as e,e as a,d as l,j as t,r as s,o as n,S as u,P as i,V as o,U as v,Z as r,u as c,$ as d,c as m,O as g,F as p,_ as A,B as h,X as y,Y as f,E as k,q as T,x as D,b as w,R as _,k as C}from"./vue.7833d4f2.js";import{u as M,h as b,v as x,d as N,s as B,w as E,x as $,n as S,y as Y,p as R,z as O,k as L,A as I,B as U}from"./index.bb5a6193.js";var Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAAEc4A0XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADAAAAACRRQtxAAAAkElEQVQoFYWPAQ6AIAwD8RE+TR+pP9NH6I44UtnEJoTRdV0ppZTNzmWn4prsaq9KwQBnzyix7vwoXMVEHVkoeg84xaoPD4TVy05F7DuUSFOJYKcmjNv2d9Ni2zdZ94IKCBygq0LTCVYFa4gsg67M6mBGrkyYcWhT6D+yQTg0Q3x9KUQeulhTv/QZ+c+EuMPIN+mRT7lWjXr2AAAAAElFTkSuQmCC";const F=e=>(y("data-v-d11fc51e"),e=e(),f(),e),P={class:"timeSelect"},V={class:"status status-2"},j={class:"status_1"},G=h(" ~ "),H={class:"status"},K={class:"status_1"},z={key:0,class:"noData"},J=F((()=>i("img",{class:"img_1",src:S},null,-1)));var W=e({emits:["valueChange","timeChange"],setup(e,{expose:h,emit:y}){const{t:f}=M(),k=a({arr:[]}),T=l(""),D=l(""),w=l(f("user.state")),_=l({key:"",value:f("user.whole")}),C=l(!1),S=l(!1),Y=l(!1),R=l(!1),O=a({arr:[{value:f("user.whole"),key:""},{value:f("user.noFinal"),key:"0"},{value:f("user.final"),key:"1"}]}),L=l({beginName:b().subtract(90,"days").format("MM/DD"),endName:b().format("MM/DD")});t((()=>{D.value=b().valueOf();T.value=D.value-7776e6}));const I=()=>{F()};let U=0;const F=async()=>{U++;const e={orderState:_.value.key,page:U,pageSize:10,beginTime:T.value,endTime:D.value},a=await x(e);if(200!==a.code)return Y.value=!1,R.value=!0,N(a.msg);const l=a.data;if(200===a.code){l.forEach((e=>{k.arr.push(e)}));const e=[],a=[];k.arr.map((l=>{l.betDTOList.map((l=>{const{championType:t,systemId:s,gidm:n}=l;t&&a.push(n),e.push(s)}))})),B.dispatch("user/getMoreTeamList",e.join()),B.dispatch("user/getChampionLang",a.join()),Y.value=!1,R.value=!l.length}};return h({setPk:async function(e){_.value=e,Y.value=!0,R.value=!1,U=0,k.arr=[],F(),console.log(e)},setDateTime:e=>{const[a,l]=e;L.value.beginName=b(a).format("MM/DD"),L.value.endName=b(l).format("MM/DD"),T.value=b(a).valueOf(),D.value=b(l).valueOf(),Y.value=!0,R.value=!1,S.value=!1,U=0,k.arr=[],F()},showBottom:C,showBottom2:S}),(e,a)=>{const l=s("van-list");return n(),u(p,null,[i("div",P,[i("div",V,[i("div",j,[i("span",null,o(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=v((e=>(S.value=!0,void y("timeChange",!0,1,T.value,D.value))),["stop"]))},[i("span",null,o(L.value.beginName),1),G,i("span",null,o(L.value.endName),1),i("img",{class:r(["img_1",[S.value?"img_3":""]]),src:Q,alt:""},null,2)])])]),i("div",H,[i("div",K,[i("span",null,o(e.$t("user.state")),1),i("div",{class:"round",onClick:a[1]||(a[1]=v((e=>(C.value=!0,void y("valueChange",!0,w.value,O.arr,_.value,1))),["stop"]))},[i("span",null,o(_.value.value),1),i("img",{class:r(["img_1",[C.value?"img_3":""]]),src:Q,alt:""},null,2)])])])]),!c(k).arr.length&&R.value?(n(),u("div",z,[J,i("p",null,o(e.$t("user.noData")),1)])):d("",!0),c(k).arr.length||!R.value?(n(),m(l,{key:1,loading:Y.value,"onUpdate:loading":a[2]||(a[2]=e=>Y.value=e),finished:R.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:I},{default:g((()=>[(n(!0),u(p,null,A(c(k).arr,((e,a)=>(n(),u("div",{key:a},[1===Number(e.parlayNum)?(n(),m(E,{key:0,item:e,class:"item"},null,8,["item"])):d("",!0),1!==Number(e.parlayNum)?(n(),m($,{key:1,item:e,class:"item"},null,8,["item"])):d("",!0)])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});W.__scopeId="data-v-d11fc51e";const X=e=>(y("data-v-1e190c1c"),e=e(),f(),e),Z={class:"timeSelect"},q={class:"status status-2"},ee={class:"status_1"},ae=h(" ~ "),le={class:"status"},te={class:"status_1"},se={key:0,class:"noData"},ne=X((()=>i("img",{class:"img_1",src:S},null,-1))),ue={class:"date-title"},ie={key:0,class:"title"},oe={key:1,class:"title"},ve={class:"line"},re={class:"left"},ce={key:0,class:"title"},de={class:"left-1"},me={class:"font"},ge={class:"font-1"},pe={class:"img_1",src:"/assets/copy.8596b31a.svg"},Ae={class:"left-2"},he={class:"font"},ye={class:"right"},fe={key:0},ke={key:1},Te={class:"right-1"},De={class:"money-symbol"},we={class:"right-1"},_e={class:"money-symbol"};var Ce=e({emits:["valueChange","timeChange"],setup(e,{expose:h,emit:y}){const{t:f}=M(),w=l(!1),_=l(!1),C=l(!1),x=l(!1),B=l({key:"",value:f("user.whole")}),E=l(f("user.type")),$=l(""),S=l(""),U=a({arr:[]}),F=a({arr:[]}),P=a({arr:[]}),V=a({arr:[]}),j=l({beginName:b().subtract(90,"days").format("MM/DD"),endName:b().format("MM/DD")});t((()=>{z(),S.value=b().valueOf();$.value=S.value-7776e6}));const G=e=>!!(e.tradeType.includes("SETTLEMENT")||e.tradeType.includes("CASHOUT")||e.tradeType.includes("PAYMENT"));let H=0;const K=async()=>{H++;const e={page:H,pageSize:20,beginDate:$.value,endDate:S.value,needCount:1,tradeType:B.value.key},a=await O(e),l=a.data;if(200===a.code){l.transferRecordRspList.forEach((e=>{U.arr.push(e)}));const e={},a=[];U.arr.sort(((e,a)=>a.createTime-e.createTime)).map((a=>{const l=b(a.createTime).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={date:l,list:[a]}})),Object.keys(e).map((l=>{a.push(JSON.parse(JSON.stringify(e[l])))})),F.arr=a,w.value=!1,_.value=!l.transferRecordRspList.length}else N(a.msg)},z=async()=>{const e=await Y({});if(200!==e.code)return N(e.msg);P.arr=e.data,V.arr=[{value:f("user.whole"),key:""},...e.data],V.arr.map((e=>{e.tradeType&&(e.value=J(e.tradeType),e.key=e.tradeType)}))},J=e=>{if(P.arr.length){const a=P.arr.find((a=>a.tradeType===e));return JSON.parse(a.manyName)[localStorage.getItem("locale")||R()]||""}};return h({setPk:async function(e){B.value=e,w.value=!0,_.value=!1,H=0,U.arr=[],K(),console.log(e)},setDateTime:e=>{const[a,l]=e;j.value.beginName=b(a).format("MM/DD"),j.value.endName=b(l).format("MM/DD"),$.value=b(a).valueOf(),S.value=b(l).valueOf(),w.value=!0,_.value=!1,x.value=!1,H=0,U.arr=[],K()},showBottom:C,showBottom2:x}),(e,a)=>{const l=s("van-divider"),t=s("van-list"),h=k("copy"),f=k("points");return n(),u(p,null,[i("div",Z,[i("div",q,[i("div",ee,[i("span",null,o(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=v((e=>(x.value=!0,void y("timeChange",!0,2,$.value,S.value))),["stop"]))},[i("span",null,o(j.value.beginName),1),ae,i("span",null,o(j.value.endName),1),i("img",{class:r(["img_1",[x.value?"img_3":""]]),src:Q,alt:""},null,2)])])]),i("div",le,[i("div",te,[i("span",null,o(e.$t("user.type")),1),i("div",{class:"round",onClick:a[1]||(a[1]=v((e=>(C.value=!0,void y("valueChange",!0,E.value,V.arr,B.value,2))),["stop"]))},[i("span",null,o(B.value.value),1),i("img",{class:r(["img_1",[C.value?"img_3":""]]),src:Q,alt:""},null,2)])])])]),T(l,{class:"color-line"}),!c(U).arr.length&&_.value?(n(),u("div",se,[ne,i("p",null,o(e.$t("user.noData")),1)])):d("",!0),c(U).arr.length||!_.value?(n(),m(t,{key:1,loading:w.value,"onUpdate:loading":a[2]||(a[2]=e=>w.value=e),finished:_.value,"finished-text":e.$t("live.noMore"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:K},{default:g((()=>[(n(!0),u(p,null,A(c(F).arr,((a,l)=>(n(),u("div",{key:l,class:"dataList-item"},[i("div",ue,o(a.date),1),(n(!0),u(p,null,A(a.list,((a,l)=>(n(),u("div",{key:l,class:"item"},["GAME"===a.transferType?(n(),u("div",ie,o(e.$t("home.casino")),1)):(n(),u("div",oe,o(J(a.tradeType)),1)),i("div",ve,[i("div",re,["GAME"===a.transferType?(n(),u("div",ce,o(J(a.tradeType)),1)):d("",!0),i("div",de,[i("div",me,o(e.$t("user.betId"))+":",1),i("span",null,[i("span",ge,o(a.payno),1),D(i("img",pe,null,512),[[h,a.payno]])])]),i("p",Ae,[i("span",he,o(e.$t("user.time"))+":",1),i("span",null,o(c(L)(a.createTime)),1)])]),i("div",ye,[i("div",null,[G(a)?(n(),u("div",fe,o(e.$t("user.compensate")),1)):(n(),u("div",ke,o(e.$t("user.betNum")),1)),i("div",Te,[i("span",De,[T(I)]),D(i("span",null,null,512),[[f,a.tradeGold]])])]),i("div",null,[i("div",null,o(e.$t("user.balance")),1),i("div",we,[i("span",_e,[T(I)]),D(i("span",null,null,512),[[f,a.gold]])])])])])])))),128))])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ce.__scopeId="data-v-1e190c1c";const Me={class:"ball-type"},be={class:"status"},xe={class:"status_1"},Ne={key:0,class:"noData"},Be=(e=>(y("data-v-55d8ae31"),e=e(),f(),e))((()=>i("img",{class:"img_1",src:S},null,-1))),Ee={class:"title"},$e={class:"left title-left"},Se={class:"ball-name"},Ye={class:"right"},Re={class:"match-content"},Oe={class:"left"},Le={class:"left-1"},Ie={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Ue={class:"center"},Qe={class:"right"},Fe={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},Pe={class:"right-1"};var Ve=e({emits:["valueChange","timeChange"],setup(e,{expose:v,emit:h}){const y=a({arr:[]}),f=l(!1),w=l(!1),_=l({name:b().format("YYYY/MM/DD"),value:b().valueOf(),key:0}),C=l({gameType:"FT",key:"FT"}),M=l(!1);t((()=>{B.dispatch("app/getAllSports")}));let x=0;const N=async()=>{x++;const e={page:x,gameSort:3,leagueIds:"",gameType:C.value.gameType,matchTime:_.value.value,pageSize:10,gameStatus:1,groupId:3},a=await U(e),l=a.data;200===a.code?(l.list.forEach((e=>{y.arr.push(e)})),f.value=!1,w.value=y.arr.length===l.total):(w.value=!0,f.value=!1)},E=e=>e.gameDate||e.matchTime?b(e.gameDate).format("MM/DD HH:mm"):void 0;const $=e=>{C.value={gameType:e,key:e},x=0,f.value=!0,w.value=!1,y.arr=[],N()};return v({setDateTime:async function(e){_.value={name:b(e).format("YYYY/MM/DD"),value:b(e).valueOf(),key:0},x=0,M.value=!1,f.value=!0,w.value=!1,y.arr=[],N(),console.log(e)},showBottom:M}),(e,a)=>{const l=s("sports-tabs"),t=s("van-divider"),v=s("SportsIcon"),C=s("van-list"),b=k("img");return n(),u(p,null,[i("div",Me,[T(l,{onReturnSportsSuccess:$})]),i("div",be,[i("div",xe,[i("span",null,o(e.$t("user.time")),1),i("div",{class:"round",onClick:a[0]||(a[0]=e=>(M.value=!0,void h("timeChange",!0,3,_.value.value)))},[i("span",null,o(_.value.name),1),i("img",{class:r(["img_1",[M.value?"img_3":""]]),src:Q,alt:""},null,2)])])]),T(t,{class:"color-line"}),!c(y).arr.length&&w.value?(n(),u("div",Ne,[Be,i("p",null,o(e.$t("user.noData")),1)])):d("",!0),c(y).arr.length||!w.value?(n(),m(C,{key:1,loading:f.value,"onUpdate:loading":a[1]||(a[1]=e=>f.value=e),finished:w.value,"finished-text":e.$t("user.noMoreMatch"),"loading-text":e.$t("user.loadingText"),class:"dataList",onLoad:N},{default:g((()=>[(n(!0),u(p,null,A(c(y).arr,((e,a)=>(n(),u("div",{key:a,class:"item"},[i("div",Ee,[i("div",$e,[T(v,{"icon-src":e.gameType,class:"ball-img"},null,8,["icon-src"]),i("span",Se,o(e.leagueName),1)]),i("div",Ye,o(E(e)),1)]),i("div",Re,[i("div",Oe,[i("div",Le,o(e.homeTeamName),1),D(i("img",Ie,null,512),[[b,e.homeTeamLogo]])]),i("div",Ue,o(e.result.GM_h||0)+" : "+o(e.result.GM_c||0),1),i("div",Qe,[D(i("img",Fe,null,512),[[b,e.awayTeamLogo]]),i("div",Pe,o(e.awayTeamName),1)])])])))),128))])),_:1},8,["loading","finished","finished-text","loading-text"])):d("",!0)],64)}}});Ve.__scopeId="data-v-55d8ae31";const je={class:"result"},Ge={class:"content"},He={class:"popup-title"},Ke={class:"pk-list"},ze=["onClick"],Je={key:0},We={key:1},Xe={key:2},Ze={key:3};var qe=e({setup(e){const v=w((()=>B.state.app.theme)),m=l(""),h=l({}),y=a({arr:[]}),f=_(),k=l(1),D=l(1),M=w((()=>B.state.user.resultTab||0)),x=l(),N=l(),E=l(),$=l(!1),S=l(!1),Y=l(!1),R=b().valueOf(),O=l(new Date),L=l(new Date(R-7776e6)),I=l(new Date),U=l(new Date(R-1296e6)),Q=l([new Date(R-6048e5),new Date]),F=l(new Date),P=w((()=>"blue"===v.value));t((()=>{}));const V=(e,a,l,t,s)=>{m.value=a,h.value=t,y.arr=[...l],k.value=s,$.value=e};const j=(e,a,l,t)=>{console.log(a),D.value=a,1===a&&(Q.value=[new Date(l),new Date(t)],S.value=e),2===a&&(Q.value=[new Date(l),new Date(t)],S.value=e),3===a&&(F.value=new Date(l),Y.value=e)},G=e=>{1===D.value&&(x.value.setDateTime(e),S.value=!1),2===D.value&&(E.value.setDateTime(e),S.value=!1),3===D.value&&(N.value.setDateTime(e),Y.value=!1)},H=()=>{1===D.value&&(x.value.showBottom2=!1),2===D.value&&(E.value.showBottom2=!1),3===D.value&&(N.value.showBottom=!1)};return(e,a)=>{const l=s("van-icon"),t=s("van-nav-bar"),v=s("van-tab"),D=s("van-tabs"),w=s("van-popup"),_=s("van-calendar");return n(),u("div",je,[T(t,{class:"bg-title",title:e.$t("user.result")},{left:g((()=>[T(l,{name:"arrow-left",class:"img_1",onClick:a[0]||(a[0]=e=>{f.back()})})])),_:1},8,["title"]),i("div",Ge,[T(D,{active:c(M),"onUpdate:active":a[1]||(a[1]=e=>C(M)?M.value=e:null),"line-height":"3px",color:c(P)?"#0E3D66":"#1F2630","title-inactive-color":c(P)?"#88A6BB":"#96A5AA","title-active-color":c(P)?"#0E3D66":"#1F2630","line-width":"40px","swipe-threshold":"2",animated:"",duration:.2},{default:g((()=>[T(v,{title:e.$t("user.BettingHistory")},{default:g((()=>[T(W,{ref_key:"childRefA",ref:x,onValueChange:V,onTimeChange:j},null,512)])),_:1},8,["title"]),T(v,{title:e.$t("user.FlowingHistory")},{default:g((()=>[T(Ce,{ref_key:"childRefC",ref:E,onValueChange:V,onTimeChange:j},null,512)])),_:1},8,["title"]),T(v,{title:e.$t("user.matchResult")},{default:g((()=>[T(Ve,{ref_key:"childRefB",ref:N,onValueChange:V,onTimeChange:j},null,512)])),_:1},8,["title"])])),_:1},8,["active","color","title-inactive-color","title-active-color","duration"]),T(w,{show:$.value,"onUpdate:show":a[2]||(a[2]=e=>$.value=e),position:"bottom",duration:.2,closeable:"",round:"",style:{maxHeight:"60%"},onClose:a[3]||(a[3]=e=>{return a="close",console.log(a),1===k.value&&(x.value.showBottom=!1),2===k.value&&(E.value.showBottom=!1),void(3===k.value&&(N.value.showBottom=!1));var a})},{default:g((()=>[i("div",He,o(m.value),1),i("div",Ke,[(n(!0),u(p,null,A(c(y).arr,((e,a)=>(n(),u("div",{key:a,class:r(["item",[h.value.key===e.key?"item-color":""]]),onClick:a=>async function(e){$.value=!1,h.value=e,1===k.value&&x.value.setPk(e),2===k.value&&E.value.setPk(e),3===k.value&&N.value.setPk(e)}(e)},[i("p",null,[1===k.value?(n(),u("span",Je,o(e.value),1)):d("",!0),2===k.value?(n(),u("span",We,o(e.value),1)):d("",!0),3===k.value?(n(),u("span",Xe,o(e.name),1)):d("",!0),h.value.key===e.key?(n(),u("span",Ze,[T(l,{name:"success"})])):d("",!0)])],10,ze)))),128))])])),_:1},8,["show","duration"]),T(_,{show:S.value,"onUpdate:show":a[4]||(a[4]=e=>S.value=e),type:"range","min-date":L.value,"max-date":O.value,"default-date":Q.value,onConfirm:G,onClose:a[5]||(a[5]=e=>H())},null,8,["show","min-date","max-date","default-date"]),T(_,{show:Y.value,"onUpdate:show":a[6]||(a[6]=e=>Y.value=e),type:"single","min-date":U.value,"max-date":I.value,"default-date":F.value,onConfirm:G,onClose:a[7]||(a[7]=e=>H())},null,8,["show","min-date","max-date","default-date"])])])}}});qe.__scopeId="data-v-9d5d6278";export{qe as default};
>>>>>>>> hotfix/match:dist/assets/index.038195de.js
