var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{t as u,a as i}from"./title-recommend.e2b9b6c8.js";import{s as c,d as r,r as v,o as m,S as d,P as p,F as g,_ as y,c as f,O as h,V as k,B as b,q as T,Z as I,X as w,Y as S,w as _,E as D,u as C,x as O,y as x,$ as M,T as R,a2 as L,b as N,j,g as B}from"./vue.7833d4f2.js";import{c as Y,d as A}from"./index.4dcc82d2.js";import{T as F,a0 as V,s as $,h as U,S as H}from"./index.3daf5e8c.js";import{s as z}from"./sportBg.b662bc9a.js";import{_ as J}from"./index.500596e3.js";import{_ as P}from"./index.vue_vue_type_script_setup_true_lang.61d81704.js";import{s as E,e as q,h as G,a as X,d as Z}from"./index.cc4b26ef.js";const K={class:"league-champion-item__content"},Q={class:"betting-select"},W={class:"betting-select__list"},ee={class:"up-betting-name betslipLine"},ae={class:"text"},le=(e=>(w("data-v-27cd4b68"),e=e(),S(),e))((()=>p("span",{class:"point"},null,-1))),te={class:"details"},se={class:"container"},oe={class:"item"};var ne=c({props:{gameDetail:{type:Object,default:function(){return{}}}},setup(e){const a=e,l=r(!1),t=r();t.value=a.gameDetail.champion.ratioData.slice(0,9);return(e,s)=>{const o=v("BettingOption"),n=v("van-icon");return m(),d("div",K,[p("div",Q,[p("div",W,[(m(!0),d(g,null,y(t.value,((e,a)=>(m(),f(o,{key:a,"market-info":e.marketInfo,class:"betting-option"},{default:h((()=>[p("span",ee,[p("span",ae,k(e.ratio),1),le]),p("div",te,[p("div",se,[p("div",oe,k(e.marketInfo.vior),1)])])])),_:2},1032,["market-info"])))),128))]),p("div",{class:"betting-select__more",onClick:s[0]||(s[0]=e=>(l.value=!l.value,void(l.value?t.value=a.gameDetail.champion.ratioData:t.value=a.gameDetail.champion.ratioData.slice(0,9))))},[b(k(l.value?e.$t("sport.close"):e.$t("sport.more"))+" ",1),T(n,{class:I(["icon",l.value?"up":""]),name:"play"},null,8,["class"])])])])}}});ne.__scopeId="data-v-27cd4b68";const ue={class:"sport-champion-list"},ie={class:"champion-title"},ce={class:"champion-group-body"},re={class:"league-champion-item__header"},ve={class:"icon"},me={class:"title"};var de=c({props:{championList:{type:Array,default:function(){return[]}},championListLoading:{type:Boolean,default:function(){return!1}}},setup(e,{expose:a}){const l=e,t=r(),s=r(!0);_((()=>l.championList),(()=>{s.value=!0,t.value.activeVal=!1}));const o=e=>{t.value.activeVal=e,s.value=!e};return a({CloseClick:o}),(a,l)=>{const n=v("ArrowTitle"),i=v("Loading"),c=v("HomeEmpty"),r=D("img");return m(),d("div",ue,[p("div",ie,[T(n,{class:"mt10 mb10 goodArrowTitle",ref_key:"championArrowTitle",ref:t,src:C(u),text:a.$t("sport.champion"),onReturnSuccess:o},null,8,["src","text"])]),O(p("div",ce,[e.championListLoading?(m(),f(i,{key:0})):(m(),d(g,{key:1},[e.championList.length?(m(!0),d(g,{key:0},y(e.championList,((e,a)=>(m(),d("div",{key:a,class:"league-champion-item"},[p("div",re,[O(p("img",ve,null,512),[[r,C(Y)]]),p("div",me,k(e.champion.championType),1)]),T(ne,{"game-detail":e},null,8,["game-detail"])])))),128)):(m(),f(c,{key:1}))],64))],512),[[x,s.value]])])}}});de.__scopeId="data-v-0c99753b";const pe={key:0,class:"lock"},ge={class:"up-betting-name"},ye={class:"text"},fe={class:"team"},he={key:0,class:"ratio"},ke={class:"details"},be={class:"item"},Te={key:0,class:"vior"},Ie={key:1,class:"vior"},we={key:2,class:"vior"},Se={key:2,class:"vior"};var _e=c({props:{sendParams:{type:Array,default:function(){return[]}},type:{type:String,default:function(){return"RR"}}},setup:e=>(a,l)=>{const t=v("BettingOption");return e.sendParams.length?(m(!0),d(g,{key:0},y(e.sendParams,((l,s)=>(m(),f(t,{key:s+"key","market-info":l.marketInfo,class:"betting-option betting-option-score"},{default:h((t=>[t.lock?(m(),d("i",pe)):M("",!0),p("span",ge,[p("span",ye,[p("span",fe,k("RH"===l.ratioType?a.$t("user.homeName"):a.$t("user.awayName")),1),l.marketInfo.ratioTag?(m(),d("span",he,k(l.marketInfo.ratioTag),1)):M("",!0)])]),p("div",ke,[p("div",be,["RB"===e.type?(m(),d("i",{key:0,class:I(["vior-down",{"change-odds":"down-ior"===t.iorChange}])},null,2)):M("",!0),"RB"===e.type?(m(),d("div",{key:1,class:I(["RB-ChangeIor",{"no-RBtransition":!["up-ior","down-ior"].includes(l.marketInfo.iorChangeTransition)}])},[T(R,{name:["up-ior","down-ior"].includes(l.marketInfo.iorChangeTransition)?"listdown":""},{default:h((()=>["up-ior"===l.marketInfo.iorChangeTransition?(m(),d("div",Te,k("up-ior"===l.marketInfo.iorChangeTransition?l.marketInfo.vior:l.marketInfo.oldIor),1)):"down-ior"===l.marketInfo.iorChangeTransition?(m(),d("div",Ie,k("down-ior"===l.marketInfo.iorChangeTransition?l.marketInfo.vior:l.marketInfo.oldIor),1)):(m(),d("div",we,k(l.marketInfo.vior),1))])),_:2},1032,["name"])],2)):(m(),d("span",Se,k(l.marketInfo.vior),1)),"RB"===e.type?(m(),d("i",{key:3,class:I(["vior-up",{"change-odds":"up-ior"===t.iorChange}])},null,2)):M("",!0)])])])),_:2},1032,["market-info"])))),128)):M("",!0)}});_e.__scopeId="data-v-3b88d00f";const De={class:"slideshow"},Ce={class:"bannerBg"},Oe=["src"],xe={class:"team-dim"},Me={class:"top"},Re={class:"top-left"},Le={class:"topName"},Ne={class:"time"},je={class:"match"},Be={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Ye={key:0},Ae={key:1},Fe={key:2},Ve={class:"img_1",alt:"",type:5,style:{"object-fit":"contain"}},$e={class:"matchName"},Ue={class:"matchName-name"},He={class:"matchName-name-right"},ze={class:"score"};var Je=c({props:{commonMatchesList:{type:Array,default:function(){return[]}}},setup(e){const a=e,l=e=>z()[e.gameType];return(e,t)=>{const s=v("SportsIcon"),o=v("van-swipe-item"),n=v("van-swipe"),u=D("img");return m(),d("div",De,[T(n,{class:"my-swipe",loop:!0,"indicator-color":"white",autoplay:3e4},{default:h((()=>[(m(!0),d(g,null,y(a.commonMatchesList,((a,t)=>(m(),f(o,{key:t},{default:h((()=>[p("div",Ce,[p("img",{class:"bannerBg-1",fit:"fill",src:l(a)},null,8,Oe),p("div",xe,[p("p",Me,[p("div",Re,[T(s,{"icon-src":a.gameType,class:"ball-img"},null,8,["icon-src"]),p("div",Le,k(a.leagueName),1)]),p("span",Ne,k(C(F)(a.gameDate,"MM/DD HH:mm A")),1)]),p("div",je,[O(p("img",Be,null,512),[[u,a.homeLogo]]),a.R||a.RE?(m(),d("span",Ye,k(e.$t("home.RInfo")),1)):a.OU||a.ROU?(m(),d("span",Ae,k(e.$t("home.OU")),1)):a.M||a.RM?(m(),d("span",Fe,k(e.$t("home.M")),1)):M("",!0),O(p("img",Ve,null,512),[[u,a.awayLogo]])]),p("div",$e,[p("div",Ue,k(a.homeTeam),1),p("div",He,k(a.awayTeam),1)]),p("div",ze,[a.R?(m(),f(_e,{key:0,"send-params":C(V)("R",a),type:"RB"},null,8,["send-params"])):a.RE?(m(),f(_e,{key:1,"send-params":C(V)("RE",a),type:"RB"},null,8,["send-params"])):a.OU?(m(),f(_e,{key:2,"send-params":C(V)("OU",a),type:"RB"},null,8,["send-params"])):a.ROU?(m(),f(_e,{key:3,"send-params":C(V)("ROU",a),type:"RB"},null,8,["send-params"])):a.M?(m(),f(_e,{key:4,"send-params":C(V)("M",a),type:"RB"},null,8,["send-params"])):a.RM?(m(),f(_e,{key:5,"send-params":C(V)("RM",a),type:"RB"},null,8,["send-params"])):M("",!0)])])])])),_:2},1024)))),128))])),_:1})])}}});Je.__scopeId="data-v-24bc749d";const Pe={class:"mt10"},Ee={class:"my-scroll__content"},qe={class:"tabs-cut tabs-cut-2"},Ge={class:"league-match-num"},Xe={key:0,class:"tabs-cut tabs-cut-3"},Ze={class:"collapseAll"},Ke={type:"1",class:"collapse-name"},Qe={class:"collapse-title"},We={class:"collapse-num"},ea=["onClick"],aa={class:"recommend-list"},la={class:"early-list"},ta={key:0,class:"recommend-list"};var sa=c({setup(e){const c=L(),b=N((()=>$.state.user.scrollNumY)),w=N((()=>{var e;return(null==(e=c.params)?void 0:e.type)||"FT"})),S=r(w.value),x=e=>{na.value="",F.value="b1",V.value="c1",K.value=!1,ze.value=!1,He.value=!0,z.value="",we.value=[],console.log(e,"=="),$.dispatch("user/getLocationHeight",!1),Ae.value=!1,ke()},R=r(!0),Y=r("1"),F=r("b1"),V=r("c1"),z=r(""),K=r(!1),Q=r(c.query.leagueId),W=r(),ee=r(),ae=r(1),le=r(10),te=r(1),se=r(10),oe=r(!1),ne=r(!1),ue=r(!1),ie=r(null),ce=r(null),re=N((()=>$.state.user.locationHeight)),ve=N((()=>$.state.user.ifSearchDo)),me=N((()=>{const e=$.state.app.globalBarHeaderHeight||48;return e>60?48:e})),pe=N((()=>{const e=($.state.app.sports||[]).filter((e=>!["SY","RB","COMBO","JC"].includes(e.gameType)&&e.gameCount));let a=[];if(e.length){a=[...e.map((e=>({text:e.gameType})))]}return a}));j((()=>{})),_((()=>b.value),(e=>{e>88&&(R.value=!1)})),_((()=>ve.value),(e=>{if(e){na.value="",S.value=e.gameType,$e.value=!0,ze.value=!1,He.value=!1,Q.value=e.leagueId;const a=e.countryId||"";a?fe(a,2):Oe(!0)}}));const ge=r([]),ye=e=>{ge.value=[],e&&fe(e,1)},fe=async(e,a)=>{const l=r({countryId:e,groupId:3,showType:"FAST",gameType:S.value}),t=await E(l.value)||{};if(200===t.code&&t.data){if(ge.value=t.data||[],2===a){const e=t.data.find((e=>e.leagueId===Q.value));De.value=t.data.filter((e=>e.leagueId!==Q.value)),De.value.unshift(e),_e()}}else ge.value=[]},he=()=>{na.value="",He.value=!1,ue.value=!1,ke()},ke=()=>{Q.value="",ae.value=1,te.value=1,Oe(),Se(),Ie()},be=r([]),Te=r({}),Ie=async()=>{var e;z.value="";const a=r({gameType:S.value,showtype:"FAST",page:1,row:999}),l=await q(a.value)||{};200===l.code&&l.data?(Te.value=l.data,be.value=(null==(e=l.data)?void 0:e.countryData)||[]):be.value=[]},we=r([]),Se=async()=>{const e=r({gradeType:1,gameTypeSon:"",showtype:"FAST",gameSort:3,gameType:S.value,page:1,pageSize:5}),a=await G(e.value)||{};200===a.code&&a.data?we.value=a.data.games||[]:we.value=[]},_e=async()=>{if(na.value&&(Q.value=na.value,He.value=!1),Q.value){ze.value=!1;const e=r({gradeType:1,gameTypeSon:"",showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",onlyFavorite:0,gameType:S.value,leagueIds:Q.value,page:1,pageSize:20});Fe(e.value),Ue()}else{const e=r({gradeType:1,gameTypeSon:"",gameType:S.value,showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:Ce.value.join()||-1,onlyFavorite:0,page:1,pageSize:10});Fe(e.value);const a=r({gradeType:2,gameTypeSon:"",gameType:S.value,showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",filterLeagueIds:Ce.value.join(),leagueIds:"",onlyFavorite:0,page:1,pageSize:10});Fe(a.value)}},De=r([]),Ce=r([]),Oe=async e=>{if(S.value){const a=await X({gameType:S.value,showType:"FAST"})||{};if(200===a.code&&a.data){if(De.value=a.data.list||[],!e){De.value.find((e=>e.leagueId===Q.value))||(Q.value="",He.value=!0),Ce.value=[],De.value.map((e=>{e.leagueId&&Ce.value.push(e.leagueId)}))}_e()}else De.value=[]}},xe=r(!1),Me=r([]),Re=async()=>{var e,a,l,t;if(oe.value)return;te.value=te.value+1;const s=r({gameTypeSon:"",showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",filterLeagueIds:Ce.value.join(),leagueIds:"",onlyFavorite:0,gameType:S.value,gradeType:2,page:te.value,pageSize:se.value});xe.value=!0;const o=await Z(s.value)||{};if(200===o.code&&(null==(a=null==(e=o.data)?void 0:e.matchList)?void 0:a.baseData)&&(null==(t=null==(l=o.data)?void 0:l.matchList)?void 0:t.baseData.length)){Me.value.push(...o.data.matchList.baseData);const e={},a=[];Me.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((a=>{const l=U(a.gameDate).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={gameDate:a.gameDate,list:[a]}})),Object.keys(e).map((l=>{a.push(JSON.parse(JSON.stringify(e[l])))})),Ye.value=a}Me.value.length<te.value*se.value?oe.value=!0:oe.value=!1,xe.value=!1},Le=r([]),Ne=r(!1),je=async()=>{var e,a,l,t;if(ne.value)return;ae.value=ae.value+1;const s=r({gameTypeSon:"",showtype:"FAST",timeStage:0,gameSort:3,dateStage:0,isNovice:"Y",leagueIds:Ce.value.join()||-1,onlyFavorite:0,gameType:S.value,gradeType:1,page:ae.value,pageSize:le.value});Ne.value=!0;const o=await Z(s.value)||{};if(200===o.code&&(null==(a=null==(e=o.data)?void 0:e.matchList)?void 0:a.baseData)&&(null==(t=null==(l=o.data)?void 0:l.matchList)?void 0:t.baseData.length)){Le.value.push(...o.data.matchList.baseData);const e={},a=[];Le.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((a=>{const l=U(a.gameDate).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={gameDate:a.gameDate,list:[a]}})),Object.keys(e).map((l=>{a.push(JSON.parse(JSON.stringify(e[l])))})),Be.value=a}Le.value.length<ae.value*le.value?ne.value=!0:ne.value=!1,Ne.value=!1},Be=r([]),Ye=r([]),Ae=r(!1),Fe=async e=>{var a,l,t,s;if(S.value){Ae.value=!1;const o=await Z(e)||{};Ae.value=!0;let n=[];if(200===o.code&&(null==(l=null==(a=o.data)?void 0:a.matchList)?void 0:l.baseData)&&(null==(s=null==(t=o.data)?void 0:t.matchList)?void 0:s.baseData.length)&&(n=o.data.matchList.baseData),1===e.gradeType||Q.value)if(n.length){W.value=n[0].leagueLogo,ee.value=n[0].leagueShortName,Le.value=n;const e={},a=[];Le.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((a=>{const l=U(a.gameDate).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={date:l,gameDate:a.gameDate,list:[a]}})),Object.keys(e).map((l=>{a.push(JSON.parse(JSON.stringify(e[l])))})),Be.value=a}else W.value="",ee.value="",Be.value=[];else if(2===e.gradeType)if(n.length){Me.value=n;const e={},a=[];Me.value.sort(((e,a)=>e.gameDate-a.gameDate)).map((a=>{const l=U(a.gameDate).format("YYYY/MM/DD");e[l]?e[l].list.push(a):e[l]={date:l,gameDate:a.gameDate,list:[a]}})),Object.keys(e).map((l=>{a.push(JSON.parse(JSON.stringify(e[l])))})),Ye.value=a}else Ye.value=[]}},Ve=r([]),$e=r(!1),Ue=async()=>{var e;if(Q.value){$e.value=!0;const u=await A({page:1,pageSize:10,leagueIds:Q.value})||{};if($e.value=!1,200===u.code&&u.data){const i=((null==(e=null==u?void 0:u.data)?void 0:e.gameDetail)||[]).map((e=>{const{systemId:u,gameId:i,gidm:c,gameType:r}=e,v=e.champion.playType,m=e.champion.championType,d=e.champion.sw;return e.champion.ratioData=e.champion.ratioData.map((e=>{var p;return e.marketInfo=new H((p=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&n(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&n(e,l,a[l]);return e})({},e),a(p,l({systemId:u,gameId:i,gidm:c,gameType:r,playType:v,sw:d,championType:m})))),e})).sort(((e,a)=>e.ior-a.ior)),e}));Ve.value=i}}else Ve.value=[]},He=r(!0),ze=r(!1),sa=()=>{na.value="",ze.value=!ze.value,He.value=!1},oa=e=>{na.value="",e.gameTypeCount&&(He.value=!1,Y.value="1",K.value=!1,Q.value=e.leagueId,e.countryId?fe(e.countryId,2):_e())},na=r("");return B((async()=>{var e,a,l,t,s;if(re.value)return;S.value=(null==(e=c.params)?void 0:e.type)||"FT",be.value=[],De.value=[],$e.value=!0,ze.value=!1,He.value=!1,Se();const o=(null==(a=c.query)?void 0:a.countryId)||"";Q.value=(null==(l=c.query)?void 0:l.leagueId)||"",na.value=(null==(t=c.query)?void 0:t.leagueId)||"",o?fe(o,2):Oe(),Ie();"yes"===((null==(s=c.query)?void 0:s.ischampion)||"")?(Y.value="2",K.value=!0):(Y.value="1",K.value=!1)})),(e,a)=>{const l=v("SportsButton"),t=v("SvgIcon"),s=v("ImageButton"),o=v("van-collapse-item"),n=v("van-collapse"),c=v("ArrowTitle"),r=v("Loading"),b=v("van-sticky"),w=v("HomeMatchHandicap"),_=v("HomeEmpty"),L=v("van-pull-refresh"),N=v("FooterHeight"),j=v("van-tab"),B=v("van-tabs"),A=D("img");return m(),d("div",{class:"sport-page",ref_key:"newContainerRecommend",ref:ce},[p("div",{ref_key:"newContainer",ref:ie},[p("div",Pe,[T(B,{duration:.2,active:S.value,"onUpdate:active":a[7]||(a[7]=e=>S.value=e),shrink:"","line-height":"0",animated:R.value,onChange:x,"swipe-threshold":3,onClickTab:a[8]||(a[8]=e=>R.value=!0)},{default:h((()=>[(m(!0),d(g,null,y(C(pe),((v,D)=>(m(),f(j,{key:D,name:v.text},{title:h((()=>[T(l,{class:I(["tabs-cut-7",v.text]),text:v.text,active:S.value===v.text},null,8,["text","active","class"])])),default:h((()=>[T(L,{modelValue:ue.value,"onUpdate:modelValue":a[6]||(a[6]=e=>ue.value=e),onRefresh:he},{default:h((()=>[p("div",Ee,[p("div",qe,[p("div",{class:I(["league-num tabs-cut-1",ze.value?"league-num-1":""]),onClick:sa},[p("span",null,k(e.$t("user.whole")),1),p("span",Ge,k(Te.value.total||0),1),T(t,{name:"user-down",class:"icon-svg-1"})],2),T(J,{class:"tabs-cut-1",text:e.$t("sport.recommend"),"if-shadow":!1,active:!Q.value,onClick:a[0]||(a[0]=e=>(na.value="",Q.value="",He.value=!0,void Oe()))},null,8,["text","active"]),(m(!0),d(g,null,y(De.value.slice(0,De.value.length>1?Math.floor(De.value.length/2):1),((e,a)=>(m(),f(s,{key:a,class:"tabs-cut-1",text:e.leagueName,src:e.leagueLogo,active:Q.value===e.leagueId,type:"6",count:e.gameTypeCount||"0",ifCount:Number(e.gameTypeCount)||0,"if-circle":!0,onClick:a=>oa(e),"if-shadow":!1},null,8,["text","src","active","count","ifCount","onClick"])))),128))]),De.value.length>1?(m(),d("div",Xe,[(m(!0),d(g,null,y(De.value.slice(Math.floor(De.value.length/2)),((e,a)=>(m(),f(s,{key:a,class:"tabs-cut-1",text:e.leagueName,src:e.leagueLogo,active:Q.value===e.leagueId,type:"6",count:e.gameTypeCount||"0",ifCount:Number(e.gameTypeCount)||0,"if-circle":!0,onClick:a=>oa(e),"if-shadow":!1},null,8,["text","src","active","count","ifCount","onClick"])))),128))])):M("",!0)]),ze.value?(m(),f(n,{key:0,modelValue:z.value,"onUpdate:modelValue":a[1]||(a[1]=e=>z.value=e),accordion:"",border:!1,onChange:ye},{default:h((()=>[(m(!0),d(g,null,y(be.value,((e,a)=>(m(),f(o,{key:a,name:e.countryId,border:!1,class:"collapse-item"},{title:h((()=>[p("div",Ze,[O(p("img",Ke,null,512),[[A,e.countryFlag]]),p("span",Qe,k(e.countryCn||"International"),1),p("span",We,k(e.leagueCount),1)])])),default:h((()=>[(m(!0),d(g,null,y(ge.value,((e,a)=>(m(),d("div",{key:a,class:"collapse-concent"},[p("div",{class:I(e.gameTypeCount?"":"collapse-concent-1"),onClick:a=>(e=>{if(na.value="",!e.gameTypeCount)return;z.value="",De.value=[],K.value=!1,Y.value="1";const a=ge.value.find((a=>a.leagueId===e.leagueId));Q.value=e.leagueId,De.value=ge.value.filter((a=>a.leagueId!==e.leagueId)),De.value.unshift(a),_e()})(e)},k(e.leagueName),11,ea)])))),128))])),_:2},1032,["name"])))),128))])),_:2},1032,["modelValue"])):M("",!0),we.value.length&&He.value?(m(),f(Je,{key:1,ref_for:!0,ref:"slideshow","common-matches-list":we.value},null,8,["common-matches-list"])):M("",!0),Q.value?M("",!0):(m(),d(g,{key:2},[T(n,{modelValue:F.value,"onUpdate:modelValue":a[2]||(a[2]=e=>F.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[T(o,{name:"b1"},{title:h((()=>[Be.value.length||!Ae.value||Ne.value?(m(),f(c,{key:0,class:"mt10 mb10 goodArrowTitle",src:C(u),text:e.$t("sport.recommend")},null,8,["src","text"])):M("",!0)])),default:h((()=>[!Ae.value||Ne.value?(m(),f(r,{key:0})):(m(),d(g,{key:1},[Be.value.length?(m(),d(g,{key:0},[p("div",aa,[(m(!0),d(g,null,y(Be.value,((e,a)=>(m(),d(g,{key:a},[T(b,{"offset-top":C(me),container:ce.value,"z-index":"8",class:I({mt10:0!==a})},{default:h((()=>[T(P,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(m(!0),d(g,null,y(e.list,((e,a)=>(m(),f(w,{"play-title-toggle":!1,"send-params":e,class:I({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128))]),p("div",{class:I(["Button-MatchMore mt20 mb20",ne.value?"no-more":""]),onClick:je},[p("span",null,k(ne.value?e.$t("live.noMore"):e.$t("home.lookMoreMatch")),1)],2)],64)):M("",!0)],64))])),_:2},1024)])),_:2},1032,["modelValue"]),T(n,{modelValue:V.value,"onUpdate:modelValue":a[3]||(a[3]=e=>V.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[T(o,{name:"c1"},{title:h((()=>[T(c,{class:"mt10 mb10 latestArrowTitle",src:C(i),text:e.$t("sport.early")},null,8,["src","text"])])),default:h((()=>[!Ae.value||xe.value?(m(),f(r,{key:0})):(m(),d(g,{key:1},[Ye.value.length?(m(),d(g,{key:0},[p("div",la,[(m(!0),d(g,null,y(Ye.value,((e,a)=>(m(),d(g,{key:a},[T(b,{"offset-top":C(me),container:ie.value,"z-index":"8",class:I({mt10:0!==a})},{default:h((()=>[T(P,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(m(!0),d(g,null,y(e.list,((e,a)=>(m(),f(w,{"play-title-toggle":!1,"send-params":e,class:I({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128))]),p("div",{class:I(["Button-MatchMore mt20 mb20",oe.value?"no-more":""]),onClick:Re},[p("span",null,k(oe.value?e.$t("live.noMore"):e.$t("home.lookMoreMatch")),1)],2)],64)):(m(),f(_,{key:1}))],64))])),_:2},1024)])),_:2},1032,["modelValue"])],64)),Q.value?(m(),d(g,{key:3},[T(n,{modelValue:Y.value,"onUpdate:modelValue":a[4]||(a[4]=e=>Y.value=e),accordion:"",border:!1,class:"GlobalCollapse",onChange:a[5]||(a[5]=e=>K.value=!K.value)},{default:h((()=>[T(o,{name:"1"},{title:h((()=>[T(c,{class:"mt10 mb10",src:W.value,type:"6",text:ee.value,arrowShow:K.value,showOther:!0},null,8,["src","text","arrowShow"])])),default:h((()=>[Ae.value?(m(),d(g,{key:1},[Be.value.length?(m(),d("div",ta,[(m(!0),d(g,null,y(Be.value,((e,a)=>(m(),d(g,{key:a},[T(b,{"offset-top":C(me),container:ce.value,"z-index":"8",class:I({mt10:0!==a})},{default:h((()=>[T(P,{"send-params":e},null,8,["send-params"])])),_:2},1032,["offset-top","container","class"]),(m(!0),d(g,null,y(e.list,((e,a)=>(m(),f(w,{"play-title-toggle":!1,"send-params":e,class:I({mt10:0!==a})},null,8,["send-params","class"])))),256))],64)))),128))])):(m(),f(_,{key:1}))],64)):(m(),f(r,{key:0}))])),_:2},1024)])),_:2},1032,["modelValue"]),T(de,{"champion-list":Ve.value,"champion-list-loading":$e.value},null,8,["champion-list","champion-list-loading"])],64)):M("",!0)])),_:2},1032,["modelValue"]),T(N)])),_:2},1032,["name"])))),128))])),_:1},8,["duration","active","animated"])])],512)],512)}}});sa.__scopeId="data-v-1dc24c88";export{sa as default};
