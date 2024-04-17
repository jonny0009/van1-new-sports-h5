import{t as e,a}from"./title-recommend.e2b9b6c8.js";import{s as l,d as t,r as s,o,R as u,P as n,F as i,S as c,c as r,O as v,W as m,B as p,q as d,_ as g,Y as y,Z as h,w as f,E as k,u as b,x as T,y as I,$ as w,T as S,b as _,a2 as D,j as C,g as M}from"./vue.d6a430ba.js";import{c as x,d as R}from"./index.07b744bd.js";import{G as L,O as N,s as O,P as B,Q as Y,R as A,g as j,B as F,j as $,M as V}from"./index.e49a47fe.js";import{s as U}from"./sportBg.b662bc9a.js";import{_ as H}from"./index.13a7003e.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang.9108f39d.js";const J={class:"league-champion-item__content"},q={class:"betting-select"},E={class:"betting-select__list"},P={class:"up-betting-name betslipLine"},G={class:"text"},Q=(e=>(y("data-v-27cd4b68"),e=e(),h(),e))((()=>n("span",{class:"point"},null,-1))),W={class:"details"},Z={class:"container"},K={class:"item"};var X=l({props:{gameDetail:{type:Object,default:function(){return{}}}},setup(e){const a=e,l=t(!1),y=t();y.value=a.gameDetail.champion.ratioData.slice(0,9);return(e,t)=>{const h=s("BettingOption"),f=s("van-icon");return o(),u("div",J,[n("div",q,[n("div",E,[(o(!0),u(i,null,c(y.value,((e,a)=>(o(),r(h,{key:a,"market-info":e.marketInfo,class:"betting-option"},{default:v((()=>[n("span",P,[n("span",G,m(e.ratio),1),Q]),n("div",W,[n("div",Z,[n("div",K,m(e.marketInfo.vior),1)])])])),_:2},1032,["market-info"])))),128))]),n("div",{class:"betting-select__more",onClick:t[0]||(t[0]=e=>(l.value=!l.value,void(l.value?y.value=a.gameDetail.champion.ratioData:y.value=a.gameDetail.champion.ratioData.slice(0,9))))},[p(m(l.value?e.$t("sport.close"):e.$t("sport.more"))+" ",1),d(f,{class:g(["icon",l.value?"up":""]),name:"play"},null,8,["class"])])])])}}});X.__scopeId="data-v-27cd4b68";const ee={class:"sport-champion-list"},ae={class:"champion-title"},le={class:"champion-group-body"},te={class:"league-champion-item__header"},se={class:"icon"},oe={class:"title"};var ue=l({props:{championList:{type:Array,default:function(){return[]}},championListLoading:{type:Boolean,default:function(){return!1}}},setup(a,{expose:l}){const v=a,p=t(),g=t(!0);f((()=>v.championList),(()=>{g.value=!0,p.value.activeVal=!1}));const y=e=>{p.value.activeVal=e,g.value=!e};return l({CloseClick:y}),(l,t)=>{const v=s("ArrowTitle"),h=s("Loading"),f=s("HomeEmpty"),w=k("img");return o(),u("div",ee,[n("div",ae,[d(v,{class:"mt10 mb10 goodArrowTitle",ref_key:"championArrowTitle",ref:p,src:b(e),text:l.$t("sport.champion"),onReturnSuccess:y},null,8,["src","text"])]),T(n("div",le,[a.championListLoading?(o(),r(h,{key:0})):(o(),u(i,{key:1},[a.championList.length?(o(!0),u(i,{key:0},c(a.championList,((e,a)=>(o(),u("div",{key:a,class:"league-champion-item"},[n("div",te,[T(n("img",se,null,512),[[w,b(x)]]),n("div",oe,m(e.champion.championType),1)]),d(X,{"game-detail":e},null,8,["game-detail"])])))),128)):(o(),r(f,{key:1}))],64))],512),[[I,g.value]])])}}});ue.__scopeId="data-v-0c99753b";const ne={key:0,class:"lock"},ie={class:"up-betting-name"},ce={class:"text"},re={class:"team"},ve={key:0,class:"ratio"},me={class:"details"},pe={class:"item"},de={key:0,class:"vior"},ge={key:1,class:"vior"},ye={key:2,class:"vior"},he={key:2,class:"vior"};var fe=l({props:{sendParams:{type:Array,default:function(){return[]}},type:{type:String,default:function(){return"RR"}}},setup:e=>(a,l)=>{const t=s("BettingOption");return e.sendParams.length?(o(!0),u(i,{key:0},c(e.sendParams,((l,s)=>(o(),r(t,{key:s+"key","market-info":l.marketInfo,class:"betting-option betting-option-score"},{default:v((t=>[t.lock?(o(),u("i",ne)):w("",!0),n("span",ie,[n("span",ce,[n("span",re,m("RH"===l.ratioType?a.$t("user.homeName"):a.$t("user.awayName")),1),l.marketInfo.ratioTag?(o(),u("span",ve,m(l.marketInfo.ratioTag),1)):w("",!0)])]),n("div",me,[n("div",pe,["RB"===e.type?(o(),u("i",{key:0,class:g(["vior-down",{"change-odds":"down-ior"===t.iorChange}])},null,2)):w("",!0),"RB"===e.type?(o(),u("div",{key:1,class:g(["RB-ChangeIor",{"no-RBtransition":!["up-ior","down-ior"].includes(l.marketInfo.iorChangeTransition)}])},[d(S,{name:["up-ior","down-ior"].includes(l.marketInfo.iorChangeTransition)?"listdown":""},{default:v((()=>["up-ior"===l.marketInfo.iorChangeTransition?(o(),u("div",de,m("up-ior"===l.marketInfo.iorChangeTransition?l.marketInfo.vior:l.marketInfo.oldIor),1)):"down-ior"===l.marketInfo.iorChangeTransition?(o(),u("div",ge,m("down-ior"===l.marketInfo.iorChangeTransition?l.marketInfo.vior:l.marketInfo.oldIor),1)):(o(),u("div",ye,m(l.marketInfo.vior),1))])),_:2},1032,["name"])],2)):(o(),u("span",he,m(l.marketInfo.vior),1)),"RB"===e.type?(o(),u("i",{key:3,class:g(["vior-up",{"change-odds":"up-ior"===t.iorChange}])},null,2)):w("",!0)])])])),_:2},1032,["market-info"])))),128)):w("",!0)}});fe.__scopeId="data-v-3b88d00f";const ke={class:"slideshow"},be={class:"bannerBg"},Te=["src"],Ie={class:"team-dim"},we={class:"top"},Se={class:"top-left"},_e={class:"topName"},De={class:"time"},Ce={class:"match"},Me={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},xe={key:0},Re={key:1},Le={key:2},Ne={class:"img_1",alt:"",type:5,style:{"object-fit":"contain"}},Oe={class:"matchName"},Be={class:"matchName-name"},Ye={class:"matchName-name-right"},Ae={class:"score"};var je=l({props:{commonMatchesList:{type:Array,default:function(){return[]}}},setup(e){const a=e,l=e=>U()[e.gameType];return(e,t)=>{const p=s("SportsIcon"),g=s("van-swipe-item"),y=s("van-swipe"),h=k("img");return o(),u("div",ke,[d(y,{class:"my-swipe",loop:!0,"indicator-color":"white",autoplay:3e4},{default:v((()=>[(o(!0),u(i,null,c(a.commonMatchesList,((a,t)=>(o(),r(g,{key:t},{default:v((()=>[n("div",be,[n("img",{class:"bannerBg-1",fit:"fill",src:l(a)},null,8,Te),n("div",Ie,[n("p",we,[n("div",Se,[d(p,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),n("div",_e,m(a.leagueName),1)]),n("span",De,m(b(L)(a.gameDate,"MM/DD HH:mm A")),1)]),n("div",Ce,[T(n("img",Me,null,512),[[h,a.homeLogo]]),a.R||a.RE?(o(),u("span",xe,m(e.$t("home.RInfo")),1)):a.OU||a.ROU?(o(),u("span",Re,m(e.$t("home.OU")),1)):a.M||a.RM?(o(),u("span",Le,m(e.$t("home.M")),1)):w("",!0),T(n("img",Ne,null,512),[[h,a.awayLogo]])]),n("div",Oe,[n("div",Be,m(a.homeTeam),1),n("div",Ye,m(a.awayTeam),1)]),n("div",Ae,[a.R?(o(),r(fe,{key:0,"send-params":b(N)("R",a),type:"RB"},null,8,["send-params"])):a.RE?(o(),r(fe,{key:1,"send-params":b(N)("RE",a),type:"RB"},null,8,["send-params"])):a.OU?(o(),r(fe,{key:2,"send-params":b(N)("OU",a),type:"RB"},null,8,["send-params"])):a.ROU?(o(),r(fe,{key:3,"send-params":b(N)("ROU",a),type:"RB"},null,8,["send-params"])):a.M?(o(),r(fe,{key:4,"send-params":b(N)("M",a),type:"RB"},null,8,["send-params"])):a.RM?(o(),r(fe,{key:5,"send-params":b(N)("RM",a),type:"RB"},null,8,["send-params"])):w("",!0)])])])])),_:2},1024)))),128))])),_:1})])}}});je.__scopeId="data-v-24bc749d";const Fe={class:"mt10"},$e={class:"my-scroll__content"},Ve={class:"tabs-cut tabs-cut-2"},Ue={key:0},He={key:1},ze={class:"league-match-num"},Je={key:0,class:"tabs-cut tabs-cut-3"},qe={class:"collapseAll"},Ee={type:"1",class:"collapse-name"},Pe={class:"collapse-title"},Ge={class:"collapse-num"},Qe=["onClick"],We={class:"recommend-list"},Ze={class:"early-list"},Ke={key:0,class:"recommend-list"};var Xe=l({setup(l){const p=_((()=>O.state.app.homeStyle)),y=D(),h=_((()=>O.state.user.scrollNumY)),I=_((()=>y.params?.type||"FT")),S=t(I.value),x=e=>{sa.value="",U.value="b1",J.value="c1",E.value=!1,aa.value=!1,ea.value=!0,q.value="",ke.value=[],console.log(e,"=="),O.dispatch("user/getLocationHeight",!1),Oe.value=!1,ge()},L=t(!0),N=t("1"),U=t("b1"),J=t("c1"),q=t(""),E=t(!1),P=t(y.query.leagueId),G=t(),Q=t(),W=t(1),Z=t(10),K=t(1),X=t(10),ee=t(!1),ae=t(!1),le=t(!1),te=t(null),se=t(null),oe=_((()=>O.state.user.locationHeight)),ne=_((()=>O.state.user.ifSearchDo)),ie=_((()=>{const e=O.state.app.globalBarHeaderHeight||48;return e>60?48:e})),ce=_((()=>O.state.match.sportsListArr)),re=_((()=>{const e=ce.value.filter((e=>!["SY","RB","COMBO","JC"].includes(e.gameType)&&1*e.num));let a=[];if(e.length){a=[...e.map((e=>({text:e.gameType,gameCount:1*e.num})))]}return[...a]}));C((()=>{})),f((()=>h.value),(e=>{e>88&&(L.value=!1)})),f((()=>ne.value),(e=>{if(e){sa.value="",S.value=e.gameType,Ae.value=!0,aa.value=!1,ea.value=!1,P.value=e.leagueId;const a=e.countryId||"";a?pe(a,2):Se(!0)}}));const ve=t([]),me=e=>{ve.value=[],e&&pe(e,1)},pe=async(e,a)=>{const l=t({countryId:e,groupId:3,showType:"FAST",gameType:"all"===S.value?"":S.value}),s=await B(l.value)||{};if(200===s.code&&s.data){if(ve.value=s.data||[],2===a){const e=s.data.find((e=>e.leagueId===P.value));Ie.value=s.data.filter((e=>e.leagueId!==P.value)),Ie.value.unshift(e),Te()}}else ve.value=[]},de=()=>{sa.value="",ea.value=!1,le.value=!1,ge()},ge=()=>{P.value="",W.value=1,K.value=1,Se(),be(),fe()},ye=t([]),he=t({}),fe=async()=>{q.value="";const e=t({gameType:"all"===S.value?"":S.value,showtype:"FAST",page:1,row:999}),a=await Y(e.value)||{};200===a.code&&a.data?(he.value=a.data,ye.value=a.data?.countryData||[]):ye.value=[]},ke=t([]),be=async()=>{const e=t({gradeType:1,gameTypeSon:"",showtype:"FAST",gameSort:3,gameType:"all"===S.value?"":S.value,page:1,pageSize:5}),a=await A(e.value)||{};200===a.code&&a.data?ke.value=a.data.games||[]:ke.value=[]},Te=async()=>{if(sa.value&&(P.value=sa.value,ea.value=!1),P.value){aa.value=!1;const e=t({gradeType:1,gameTypeSon:"",showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",onlyFavorite:0,gameType:"all"===S.value?"":S.value,leagueIds:P.value,page:1,pageSize:20});Be(e.value),Xe()}else{const e=t({gradeType:1,gameTypeSon:"",gameType:"all"===S.value?"":S.value,showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:we.value.join()||-1,onlyFavorite:0,page:1,pageSize:10});Be(e.value);const a=t({gradeType:2,gameTypeSon:"",gameType:"all"===S.value?"":S.value,showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",filterLeagueIds:we.value.join(),leagueIds:"",onlyFavorite:0,page:1,pageSize:10});Be(a.value)}},Ie=t([]),we=t([]),Se=async e=>{if(S.value){const a=await j({gameType:"all"===S.value?"":S.value,showType:"FAST"})||{};if(200===a.code&&a.data){if(Ie.value=a.data.list||[],!e){Ie.value.find((e=>e.leagueId===P.value))||(P.value="",ea.value=!0),we.value=[],Ie.value.map((e=>{e.leagueId&&we.value.push(e.leagueId)}))}Te()}else Ie.value=[]}},_e=t(!1),De=t([]),Ce=async()=>{if(ee.value)return;K.value=K.value+1;const e=t({gameTypeSon:"",showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",filterLeagueIds:we.value.join(),leagueIds:"",onlyFavorite:0,gameType:"all"===S.value?"":S.value,gradeType:2,page:K.value,pageSize:X.value});_e.value=!0;const a=await F(e.value)||{};if(200===a.code&&a.data?.matchList?.baseData&&a.data?.matchList?.baseData.length){De.value.push(...a.data.matchList.baseData);const e={},l=[];De.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((a=>{const l=$(a.gameDate).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={gameDate:a.gameDate,list:[a]}})),Object.keys(e).map((a=>{l.push(JSON.parse(JSON.stringify(e[a])))})),Ne.value=l}De.value.length<K.value*X.value?ee.value=!0:ee.value=!1,_e.value=!1},Me=t([]),xe=t(!1),Re=async()=>{if(ae.value)return;W.value=W.value+1;const e=t({gameTypeSon:"",showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:we.value.join()||-1,onlyFavorite:0,gameType:"all"===S.value?"":S.value,gradeType:1,page:W.value,pageSize:Z.value});xe.value=!0;const a=await F(e.value)||{};if(200===a.code&&a.data?.matchList?.baseData&&a.data?.matchList?.baseData.length){Me.value.push(...a.data.matchList.baseData);const e={},l=[];Me.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((a=>{const l=$(a.gameDate).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={gameDate:a.gameDate,list:[a]}})),Object.keys(e).map((a=>{l.push(JSON.parse(JSON.stringify(e[a])))})),Le.value=l}Me.value.length<W.value*Z.value?ae.value=!0:ae.value=!1,xe.value=!1},Le=t([]),Ne=t([]),Oe=t(!1),Be=async e=>{if(S.value){Oe.value=!1;const a=await F(e)||{};Oe.value=!0;let l=[];if(200===a.code&&a.data?.matchList?.baseData&&a.data?.matchList?.baseData.length&&(l=a.data.matchList.baseData),1===e.gradeType||P.value)if(l.length){G.value=l[0].leagueLogo,Q.value=l[0].leagueShortName,Me.value=l;const e={},a=[];Me.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((a=>{const l=$(a.gameDate).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={date:l,gameDate:a.gameDate,list:[a]}})),Object.keys(e).map((l=>{a.push(JSON.parse(JSON.stringify(e[l])))})),Le.value=a,Me.value.length<W.value*Z.value?ae.value=!0:ae.value=!1}else G.value="",Q.value="",Le.value=[];else if(2===e.gradeType)if(l.length){De.value=l;const e={},a=[];De.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((a=>{const l=$(a.gameDate).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={date:l,gameDate:a.gameDate,list:[a]}})),Object.keys(e).map((l=>{a.push(JSON.parse(JSON.stringify(e[l])))})),Ne.value=a,De.value.length<K.value*X.value?ee.value=!0:ee.value=!1}else Ne.value=[]}},Ye=t([]),Ae=t(!1),Xe=async()=>{if(P.value){Ae.value=!0;const e=await R({page:1,pageSize:10,leagueIds:P.value})||{};if(Ae.value=!1,200===e.code&&e.data){const a=(e?.data?.gameDetail||[]).map((e=>{const{systemId:a,gameId:l,gidm:t,gameType:s}=e,o=e.champion.playType,u=e.champion.championType,n=e.champion.sw;return e.champion.ratioData=e.champion.ratioData.map((e=>(e.marketInfo=new V({...e,systemId:a,gameId:l,gidm:t,gameType:s,playType:o,sw:n,championType:u}),e))).sort(((e,a)=>e.ior-a.ior)),e}));Ye.value=a}}else Ye.value=[]},ea=t(!0),aa=t(!1),la=()=>{sa.value="",aa.value=!aa.value,ea.value=!1},ta=e=>{sa.value="",e.gameTypeCount&&(ea.value=!1,N.value="1",E.value=!1,P.value=e.leagueId,e.countryId?pe(e.countryId,2):Te())},sa=t("");return M((async()=>{if(oe.value)return;S.value=y.params?.type||"FT",ye.value=[],Ie.value=[],Ae.value=!0,aa.value=!1,ea.value=!1,be();const e=y.query?.countryId||"";P.value=y.query?.leagueId||"",sa.value=y.query?.leagueId||"",e?pe(e,2):Se(),fe();"yes"===(y.query?.ischampion||"")?(N.value="2",E.value=!0):(N.value="1",E.value=!1)})),(l,t)=>{const y=s("SportsButton"),h=s("SvgIcon"),f=s("ImageButton"),I=s("van-collapse-item"),_=s("van-collapse"),D=s("ArrowTitle"),C=s("Loading"),M=s("van-sticky"),R=s("HomeMatchHandicap"),O=s("HomeEmpty"),B=s("van-pull-refresh"),Y=s("FooterHeight"),A=s("van-tab"),j=s("van-tabs"),F=k("img");return o(),u("div",{class:"sport-page",ref_key:"newContainerRecommend",ref:se},[n("div",{ref_key:"newContainer",ref:te},[n("div",Fe,[d(j,{duration:.2,active:S.value,"onUpdate:active":t[7]||(t[7]=e=>S.value=e),shrink:"","line-height":"0",animated:L.value,onChange:x,"swipe-threshold":3,onClickTab:t[8]||(t[8]=e=>L.value=!0)},{default:v((()=>[(o(!0),u(i,null,c(b(re),((s,k)=>(o(),r(A,{key:k,name:s.text},{title:v((()=>[d(y,{class:g(["tabs-cut-7",s.text]),text:s.text,active:S.value===s.text,showCount:!0,count:s.gameCount},null,8,["text","active","class","count"])])),default:v((()=>[d(B,{modelValue:le.value,"onUpdate:modelValue":t[6]||(t[6]=e=>le.value=e),onRefresh:de},{default:v((()=>[n("div",$e,[n("div",Ve,[n("div",{class:g(["league-num tabs-cut-1",aa.value?"league-num-1":""]),onClick:la},[1===b(p)?(o(),u("span",Ue,m(l.$t(`sport.sports.${S.value}`)),1)):(o(),u("span",He,m(l.$t("user.whole")),1)),n("span",ze,m(he.value.total||0),1),d(h,{name:"user-down",class:"icon-svg-1"})],2),d(H,{class:"tabs-cut-1",text:l.$t("sport.recommend"),"if-shadow":!1,active:!P.value,onClick:t[0]||(t[0]=e=>(sa.value="",P.value="",ea.value=!0,void Se()))},null,8,["text","active"]),(o(!0),u(i,null,c(Ie.value.slice(0,Ie.value.length>1?Math.floor(Ie.value.length/2):1),((e,a)=>(o(),r(f,{key:a,class:"tabs-cut-1",text:e.leagueName,src:e.leagueLogo,active:P.value===e.leagueId,type:"6",count:e.gameTypeCount||"0",ifCount:Number(e.gameTypeCount)||0,"if-circle":!0,onClick:a=>ta(e),"if-shadow":!1},null,8,["text","src","active","count","ifCount","onClick"])))),128))]),Ie.value.length>1?(o(),u("div",Je,[(o(!0),u(i,null,c(Ie.value.slice(Math.floor(Ie.value.length/2)),((e,a)=>(o(),r(f,{key:a,class:"tabs-cut-1",text:e.leagueName,src:e.leagueLogo,active:P.value===e.leagueId,type:"6",count:e.gameTypeCount||"0",ifCount:Number(e.gameTypeCount)||0,"if-circle":!0,onClick:a=>ta(e),"if-shadow":!1},null,8,["text","src","active","count","ifCount","onClick"])))),128))])):w("",!0)]),aa.value?(o(),r(_,{key:0,modelValue:q.value,"onUpdate:modelValue":t[1]||(t[1]=e=>q.value=e),accordion:"",border:!1,onChange:me},{default:v((()=>[(o(!0),u(i,null,c(ye.value,((e,a)=>(o(),r(I,{key:a,name:e.countryId,border:!1,class:"collapse-item"},{title:v((()=>[n("div",qe,[T(n("img",Ee,null,512),[[F,e.countryFlag]]),n("span",Pe,m(e.countryCn||"International"),1),n("span",Ge,m(e.leagueCount),1)])])),default:v((()=>[(o(!0),u(i,null,c(ve.value,((e,a)=>(o(),u("div",{key:a,class:"collapse-concent"},[n("div",{class:g(e.gameTypeCount?"":"collapse-concent-1"),onClick:a=>(e=>{if(sa.value="",!e.gameTypeCount)return;q.value="",Ie.value=[],E.value=!1,N.value="1";const a=ve.value.find((a=>a.leagueId===e.leagueId));P.value=e.leagueId,Ie.value=ve.value.filter((a=>a.leagueId!==e.leagueId)),Ie.value.unshift(a),Te()})(e)},m(e.leagueName),11,Qe)])))),128))])),_:2},1032,["name"])))),128))])),_:2},1032,["modelValue"])):w("",!0),ke.value.length&&ea.value?(o(),r(je,{key:1,ref_for:!0,ref:"slideshow","common-matches-list":ke.value},null,8,["common-matches-list"])):w("",!0),P.value?w("",!0):(o(),u(i,{key:2},[d(_,{modelValue:U.value,"onUpdate:modelValue":t[2]||(t[2]=e=>U.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:v((()=>[d(I,{name:"b1"},{title:v((()=>[Le.value.length||!Oe.value||xe.value?(o(),r(D,{key:0,class:"mt10 mb10 goodArrowTitle",src:b(e),text:l.$t("sport.recommend")},null,8,["src","text"])):w("",!0)])),default:v((()=>[!Oe.value||xe.value?(o(),r(C,{key:0})):(o(),u(i,{key:1},[Le.value.length?(o(),u(i,{key:0},[n("div",We,[(o(!0),u(i,null,c(Le.value,((e,a)=>(o(),u(i,{key:a},[d(M,{"offset-top":b(ie),container:se.value,"z-index":"8",class:g({mt10:0!==a})},{default:v((()=>[d(z,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(o(!0),u(i,null,c(e.list,((e,a)=>(o(),r(R,{key:a,"play-title-toggle":!1,"send-params":e,class:g({mt10:0!==a})},null,8,["send-params","class"])))),128))],64)))),128))]),n("div",{class:g(["Button-MatchMore mt20 mb20",ae.value?"no-more":""]),onClick:Re},[n("span",null,m(ae.value?l.$t("live.noMore"):l.$t("home.lookMoreMatch")),1)],2)],64)):w("",!0)],64))])),_:2},1024)])),_:2},1032,["modelValue"]),d(_,{modelValue:J.value,"onUpdate:modelValue":t[3]||(t[3]=e=>J.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:v((()=>[d(I,{name:"c1"},{title:v((()=>[d(D,{class:"mt10 mb10 latestArrowTitle",src:b(a),text:l.$t("sport.early")},null,8,["src","text"])])),default:v((()=>[!Oe.value||_e.value?(o(),r(C,{key:0})):(o(),u(i,{key:1},[Ne.value.length?(o(),u(i,{key:0},[n("div",Ze,[(o(!0),u(i,null,c(Ne.value,((e,a)=>(o(),u(i,{key:a},[d(M,{"offset-top":b(ie),container:te.value,"z-index":"8",class:g({mt10:0!==a})},{default:v((()=>[d(z,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(o(!0),u(i,null,c(e.list,((e,a)=>(o(),r(R,{key:a,"play-title-toggle":!1,"send-params":e,class:g({mt10:0!==a})},null,8,["send-params","class"])))),128))],64)))),128))]),n("div",{class:g(["Button-MatchMore mt20 mb20",ee.value?"no-more":""]),onClick:Ce},[n("span",null,m(ee.value?l.$t("live.noMore"):l.$t("home.lookMoreMatch")),1)],2)],64)):(o(),r(O,{key:1}))],64))])),_:2},1024)])),_:2},1032,["modelValue"])],64)),P.value?(o(),u(i,{key:3},[d(_,{modelValue:N.value,"onUpdate:modelValue":t[4]||(t[4]=e=>N.value=e),accordion:"",border:!1,class:"GlobalCollapse",onChange:t[5]||(t[5]=e=>E.value=!E.value)},{default:v((()=>[d(I,{name:"1"},{title:v((()=>[d(D,{class:"mt10 mb10",src:G.value,type:"6",text:Q.value,arrowShow:E.value,showOther:!0},null,8,["src","text","arrowShow"])])),default:v((()=>[Oe.value?(o(),u(i,{key:1},[Le.value.length?(o(),u("div",Ke,[(o(!0),u(i,null,c(Le.value,((e,a)=>(o(),u(i,{key:a},[d(M,{"offset-top":b(ie),container:se.value,"z-index":"8",class:g({mt10:0!==a})},{default:v((()=>[d(z,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(o(!0),u(i,null,c(e.list,((e,a)=>(o(),r(R,{key:a,"play-title-toggle":!1,"send-params":e,class:g({mt10:0!==a})},null,8,["send-params","class"])))),128))],64)))),128))])):(o(),r(O,{key:1}))],64)):(o(),r(C,{key:0}))])),_:2},1024)])),_:2},1032,["modelValue"]),d(ue,{"champion-list":Ye.value,"champion-list-loading":Ae.value},null,8,["champion-list","champion-list-loading"])],64)):w("",!0)])),_:2},1032,["modelValue"]),d(Y)])),_:2},1032,["name"])))),128))])),_:1},8,["duration","active","animated"])])],512)],512)}}});Xe.__scopeId="data-v-1dc3e82a";export{Xe as default};
