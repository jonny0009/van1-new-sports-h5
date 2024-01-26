var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{t as n,a as i}from"./title-recommend.e2b9b6c8.js";import{s as r,d as v,r as c,o as d,S as p,P as m,F as g,Z as y,c as h,O as f,V as b,B as k,q as _,_ as T,X as w,Y as C,E as x,u as D,x as I,y as S,R as j,a5 as V,b as L,j as M,g as O,n as A,a0 as $}from"./vue.66060cab.js";import{c as H,d as z}from"./index.27b82155.js";import{_ as B}from"./index.19b01afb.js";import{f as P,a as q}from"./index.a72ca8e6.js";import{s as E,M as G}from"./index.5ce50534.js";const R={class:"league-champion-item__content"},U={class:"betting-select"},F={class:"betting-select__list"},N={class:"up-betting-name betslipLine"},X={class:"text"},Y=(e=>(w("data-v-27cd4b68"),e=e(),C(),e))((()=>m("span",{class:"point"},null,-1))),Z={class:"details"},J={class:"container"},K={class:"item"};var Q=r({props:{gameDetail:{type:Object,default:function(){return{}}}},setup(e){const a=e,l=v(!1),t=v();t.value=a.gameDetail.champion.ratioData.slice(0,9);return(e,s)=>{const o=c("BettingOption"),u=c("van-icon");return d(),p("div",R,[m("div",U,[m("div",F,[(d(!0),p(g,null,y(t.value,((e,a)=>(d(),h(o,{key:a,"market-info":e.marketInfo,class:"betting-option"},{default:f((()=>[m("span",N,[m("span",X,b(e.ratio),1),Y]),m("div",Z,[m("div",J,[m("div",K,b(e.marketInfo.vior),1)])])])),_:2},1032,["market-info"])))),128))]),m("div",{class:"betting-select__more",onClick:s[0]||(s[0]=e=>(l.value=!l.value,void(l.value?t.value=a.gameDetail.champion.ratioData:t.value=a.gameDetail.champion.ratioData.slice(0,9))))},[k(b(l.value?e.$t("sport.close"):e.$t("sport.more"))+" ",1),_(u,{class:T(["icon",l.value?"up":""]),name:"play"},null,8,["class"])])])])}}});Q.__scopeId="data-v-27cd4b68";const W={class:"sport-champion-list"},ee={class:"champion-title"},ae={class:"champion-group-body"},le={class:"league-champion-item__header"},te={class:"icon"},se={class:"title"};var oe=r({props:{championList:{type:Array,default:function(){return[]}},championListLoading:{type:Boolean,default:function(){return!1}}},setup(e,{expose:a}){const l=v(),t=v(!0),s=e=>{l.value.activeVal=e,t.value=!e};return a({CloseClick:s}),(a,o)=>{const u=c("ArrowTitle"),i=c("Loading"),r=c("HomeEmpty"),v=x("img");return d(),p("div",W,[m("div",ee,[_(u,{class:"mt10 mb10 goodArrowTitle",ref_key:"championArrowTitle",ref:l,src:D(n),text:a.$t("sport.champion"),onReturnSuccess:s},null,8,["src","text"])]),I(m("div",ae,[e.championListLoading?(d(),h(i,{key:0})):(d(),p(g,{key:1},[e.championList.length?(d(!0),p(g,{key:0},y(e.championList,((e,a)=>(d(),p("div",{key:a,class:"league-champion-item"},[m("div",le,[I(m("img",te,null,512),[[v,D(H)]]),m("div",se,b(e.champion.championType),1)]),_(Q,{"game-detail":e},null,8,["game-detail"])])))),128)):(d(),h(r,{key:1}))],64))],512),[[S,t.value]])])}}});oe.__scopeId="data-v-1aad4ddc";const ue={class:"sport-page"},ne={key:0,class:"my-scroll__content"},ie={class:"betting-sport-nav"},re={class:"recommend-list"},ve={class:"early-list"},ce={key:0,class:"recommend-list"};var de=r({setup(e){j();const r=V(),k=L((()=>{var e;return(null==(e=r.params)?void 0:e.type)||"FT"})),w=v(k.value),C=v(),x=e=>{var a;S.value="b1",H.value="c1",null==(a=null==U?void 0:U.value)||a.changeClick(!1),w.value=e,E.dispatch("user/getLocationHeight",!1),te()},I=v("1"),S=v("b1"),H=v("c1"),R=v(),U=v(),F=v(r.query.leagueId),N=v(),X=v(),Y=v(1),Z=v(10),J=v(1),K=v(10),Q=v(!1),W=v(!1),ee=v(!1),ae=L((()=>E.state.user.locationHeight));M((()=>{}));const le=()=>{ee.value=!1,te()},te=()=>{F.value="",Y.value=1,J.value=1,pe(),se()},se=async()=>{if(F.value){const e=v({gameType:w.value,leagueId:F.value,page:1,pageSize:20});_e(e.value),Ce()}else{const e=v({gameType:w.value,gradeType:1,page:Y.value,pageSize:Z.value});_e(e.value);const a=v({gameType:w.value,gradeType:2,page:J.value,pageSize:K.value});_e(a.value)}},de=v([]),pe=async()=>{if(w.value){const e=await P({gameType:w.value})||{};200===e.code&&e.data?de.value=e.data:de.value=[]}},me=v(!1),ge=async()=>{var e,a;if(Q.value)return;J.value=J.value+1;const l=v({gameType:w.value,gradeType:2,page:J.value,pageSize:K.value});me.value=!0;const t=await q(l.value)||{};200===t.code&&(null==(e=t.data)?void 0:e.baseData)&&(null==(a=t.data)?void 0:a.baseData.length)&&be.value.push(...t.data.baseData),be.value.length<J.value*K.value?Q.value=!0:Q.value=!1,me.value=!1},ye=v(!1),he=async()=>{var e,a;if(W.value)return;Y.value=Y.value+1;const l=v({gameType:w.value,gradeType:1,page:Y.value,pageSize:Z.value});ye.value=!0;const t=await q(l.value)||{};200===t.code&&(null==(e=t.data)?void 0:e.baseData)&&(null==(a=t.data)?void 0:a.baseData.length)&&fe.value.push(...t.data.baseData),fe.value.length<Y.value*Z.value?W.value=!0:W.value=!1,ye.value=!1},fe=v([]),be=v([]),ke=v(!1),_e=async e=>{var a,l;if(w.value){ke.value=!1;const t=await q(e)||{};ke.value=!0;let s=[];200===t.code&&(null==(a=t.data)?void 0:a.baseData)&&(null==(l=t.data)?void 0:l.baseData.length)&&(s=t.data.baseData),1===e.gradeType||F.value?s.length?(N.value=s[0].leagueLogo,X.value=s[0].leagueShortName,fe.value=s):(N.value="",X.value="",fe.value=[]):2===e.gradeType&&(s.length?be.value=s:be.value=[])}},Te=v([]),we=v(!1),Ce=async()=>{var e;if(F.value){we.value=!0;const n=await z({page:1,pageSize:10,leagueIds:F.value})||{};if(we.value=!1,200===n.code&&n.data){const i=((null==(e=null==n?void 0:n.data)?void 0:e.gameDetail)||[]).map((e=>{const{systemId:n,gameId:i,gidm:r,gameType:v}=e,c=e.champion.playType,d=e.champion.championType,p=e.champion.sw;return e.champion.ratioData=e.champion.ratioData.map((e=>{var m;return e.marketInfo=new G((m=((e,a)=>{for(var l in a||(a={}))s.call(a,l)&&u(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&u(e,l,a[l]);return e})({},e),a(m,l({systemId:n,gameId:i,gidm:r,gameType:v,playType:c,sw:p,championType:d})))),e})).sort(((e,a)=>e.ior-a.ior)),e}));Te.value=i}}else Te.value=[]},xe=e=>{var a,l;I.value="1",null==(a=null==U?void 0:U.value)||a.changeClick(!1),null==(l=null==R?void 0:R.value)||l.CloseClick(!1),F.value=e.leagueId,se()};return O((async()=>{var e,a,l,t,s,o;if(ae.value)return;"yes"===((null==(e=r.query)?void 0:e.ischampion)||"")?(I.value="2",null==(a=null==U?void 0:U.value)||a.changeClick(!0),null==(l=null==R?void 0:R.value)||l.CloseClick(!1)):(I.value="1",null==(t=null==U?void 0:U.value)||t.changeClick(!1),null==(s=null==R?void 0:R.value)||s.CloseClick(!1)),F.value=(null==(o=r.query)?void 0:o.leagueId)||"",pe(),se(),A((()=>{var e;null==(e=C.value)||e.setSports(w.value)}))})),(e,a)=>{const l=c("SportsTabs"),t=c("ImageButton"),s=c("ArrowTitle"),o=c("Loading"),u=c("HomeMatchHandicap"),r=c("HomeEmpty"),v=c("van-collapse-item"),k=c("van-collapse"),w=c("van-pull-refresh"),j=c("FooterHeight");return d(),p("div",ue,[_(l,{ref_key:"refSportsTabs",ref:C,class:"pt20",onReturnSportsSuccess:x},null,512),_(w,{modelValue:ee.value,"onUpdate:modelValue":a[4]||(a[4]=e=>ee.value=e),onRefresh:le},{default:f((()=>[de.value.length?(d(),p("div",ne,[m("div",ie,[_(B,{text:e.$t("sport.all"),active:!F.value,onClick:a[0]||(a[0]=e=>xe({}))},null,8,["text","active"]),(d(!0),p(g,null,y(de.value,((e,a)=>(d(),h(t,{key:a,text:e.leagueNameAbbr,src:e.icon,active:F.value===e.leagueId,onClick:a=>xe(e)},null,8,["text","src","active","onClick"])))),128))])])):$("",!0),F.value?(d(),p(g,{key:2},[_(k,{modelValue:I.value,"onUpdate:modelValue":a[3]||(a[3]=e=>I.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:f((()=>[_(v,{name:"1"},{title:f((()=>[_(s,{class:"mt10 mb10",src:N.value,type:"6",text:X.value,ref_key:"leagueArrowTitle",ref:U},null,8,["src","text"])])),default:f((()=>[ke.value?(d(),p(g,{key:1},[fe.value.length?(d(),p("div",ce,[(d(!0),p(g,null,y(fe.value,((e,a)=>(d(),h(u,{key:a,"send-params":e},null,8,["send-params"])))),128))])):(d(),h(r,{key:1}))],64)):(d(),h(o,{key:0}))])),_:1})])),_:1},8,["modelValue"]),_(oe,{ref_key:"championGuessing",ref:R,"champion-list":Te.value,"champion-list-loading":we.value},null,8,["champion-list","champion-list-loading"])],64)):(d(),p(g,{key:1},[_(k,{modelValue:S.value,"onUpdate:modelValue":a[1]||(a[1]=e=>S.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:f((()=>[_(v,{name:"b1"},{title:f((()=>[_(s,{class:"mt10 mb10 goodArrowTitle",src:D(n),text:e.$t("sport.recommend"),ref_key:"leagueArrowTitle",ref:U},null,8,["src","text"])])),default:f((()=>[!ke.value||ye.value?(d(),h(o,{key:0})):(d(),p(g,{key:1},[fe.value.length?(d(),p(g,{key:0},[m("div",re,[(d(!0),p(g,null,y(fe.value,((e,a)=>(d(),h(u,{key:a,"send-params":e},null,8,["send-params"])))),128))]),m("div",{class:T(["Button-MatchMore mt20 mb20",W.value?"no-more":""]),onClick:he},[m("span",null,b(W.value?e.$t("live.noMore"):e.$t("home.lookMoreMatch")),1)],2)],64)):(d(),h(r,{key:1}))],64))])),_:1})])),_:1},8,["modelValue"]),_(k,{modelValue:H.value,"onUpdate:modelValue":a[2]||(a[2]=e=>H.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:f((()=>[_(v,{name:"c1"},{title:f((()=>[_(s,{class:"mt10 mb10 latestArrowTitle",src:D(i),text:e.$t("sport.early"),ref_key:"leagueArrowTitle",ref:U},null,8,["src","text"])])),default:f((()=>[!ke.value||me.value?(d(),h(o,{key:0})):(d(),p(g,{key:1},[be.value.length?(d(),p(g,{key:0},[m("div",ve,[(d(!0),p(g,null,y(be.value,((e,a)=>(d(),h(u,{key:a,"send-params":e},null,8,["send-params"])))),128))]),m("div",{class:T(["Button-MatchMore mt20 mb20",Q.value?"no-more":""]),onClick:ge},[m("span",null,b(Q.value?e.$t("live.noMore"):e.$t("home.lookMoreMatch")),1)],2)],64)):(d(),h(r,{key:1}))],64))])),_:1})])),_:1},8,["modelValue"])],64))])),_:1},8,["modelValue"]),_(j)])}}});de.__scopeId="data-v-05142430";export{de as default};
