var a=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(e,l,t)=>l in e?a(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t;import{t as u,a as i}from"./title-recommend.e2b9b6c8.js";import{s as r,d as c,r as v,o as p,O as d,Q as m,F as g,_ as y,c as b,P as h,W as f,B as k,q as T,$ as _,Y as D,Z as x,E as w,u as I,x as S,y as j,U as M,a5 as O,b as L,j as $,M as C,n as V,S as A}from"./vue.778d92ec.js";import{c as z,d as B}from"./index.bbb97c49.js";import{_ as P}from"./index.197a31eb.js";import{M as H,j as E}from"./index.6b0b88da.js";import{f as U,r as F}from"./index.e6ba166a.js";const G={class:"league-champion-item__content"},q={class:"betting-select"},N={class:"betting-select__list"},R={class:"up-betting-name betslipLine"},Q={class:"text"},W=(a=>(D("data-v-27cd4b68"),a=a(),x(),a))((()=>m("span",{class:"point"},null,-1))),Y={class:"details"},Z={class:"container"},J={class:"item"};var K=r({props:{gameDetail:{type:Object,default:function(){return{}}}},setup(a){const e=a,l=c(!1),t=c();t.value=e.gameDetail.champion.ratioData.slice(0,9);return(a,s)=>{const o=v("BettingOption"),n=v("van-icon");return p(),d("div",G,[m("div",q,[m("div",N,[(p(!0),d(g,null,y(t.value,((a,e)=>(p(),b(o,{key:e,"market-info":a.marketInfo,class:"betting-option"},{default:h((()=>[m("span",R,[m("span",Q,f(a.ratio),1),W]),m("div",Y,[m("div",Z,[m("div",J,f(a.marketInfo.vior),1)])])])),_:2},1032,["market-info"])))),128))]),m("div",{class:"betting-select__more",onClick:s[0]||(s[0]=a=>(l.value=!l.value,void(l.value?t.value=e.gameDetail.champion.ratioData:t.value=e.gameDetail.champion.ratioData.slice(0,9))))},[k(f(l.value?a.$t("sport.close"):a.$t("sport.more"))+" ",1),T(n,{class:_(["icon",l.value?"up":""]),name:"play"},null,8,["class"])])])])}}});K.__scopeId="data-v-27cd4b68";const X={class:"sport-champion-list"},aa={class:"champion-title"},ea={class:"champion-group-body"},la={class:"league-champion-item__header"},ta={class:"icon"},sa={class:"title"};var oa=r({props:{championList:{type:Array,default:function(){return[]}},championListLoading:{type:Boolean,default:function(){return!1}}},setup(a){const e=c(!0),l=a=>{e.value=!a};return(t,s)=>{const o=v("ArrowTitle"),n=v("Loading"),i=v("HomeEmpty"),r=w("img");return p(),d("div",X,[m("div",aa,[T(o,{class:"mt10 mb10 goodArrowTitle",src:I(u),text:t.$t("sport.champion"),onReturnSuccess:l},null,8,["src","text"])]),S(m("div",ea,[a.championListLoading?(p(),b(n,{key:0})):(p(),d(g,{key:1},[a.championList.length?(p(!0),d(g,{key:0},y(a.championList,((a,e)=>(p(),d("div",{key:e,class:"league-champion-item"},[m("div",la,[S(m("img",ta,null,512),[[r,I(z)]]),m("div",sa,f(a.champion.championType),1)]),T(K,{"game-detail":a},null,8,["game-detail"])])))),128)):(p(),b(i,{key:1}))],64))],512),[[j,e.value]])])}}});oa.__scopeId="data-v-98f9d664";const na={class:"sport-page"},ua={key:0,class:"my-scroll__content"},ia={class:"betting-sport-nav"},ra={class:"recommend-list"},ca={class:"early-list"},va={key:0,class:"recommend-list"};var pa=r({setup(a){const r=c(""),k=a=>{E.push({name:"Sport",params:{type:a}}),J()};M();const D=O(),x=c("1"),w=c("b1"),S=c("c1"),j=c(D.query.leagueId),z=L((()=>{var a;return(null==(a=D.params)?void 0:a.type)||"FT"})),G=c(),q=c(),N=c(1),R=c(10),Q=c(1),W=c(10),Y=c(!1),Z=c(!1);$((()=>{J()}));const J=()=>{j.value="",N.value=1,Q.value=1,aa(),K()},K=async()=>{if(j.value){const a=c({gameType:z.value,leagueId:j.value,page:1,pageSize:20});ga(a.value),ha()}else{const a=c({gameType:z.value,gradeType:1,page:N.value,pageSize:R.value});ga(a.value);const e=c({gameType:z.value,gradeType:2,page:Q.value,pageSize:W.value});ga(e.value)}},X=c([]),aa=async()=>{if(z.value){const a=await U({gameType:z.value})||{};200===a.code&&a.data?X.value=a.data:X.value=[]}},ea=c(!1),la=async()=>{var a,e;if(Y.value)return;Q.value=Q.value+1;const l=c({gameType:z.value,gradeType:2,page:Q.value,pageSize:W.value});ea.value=!0;const t=await F(l.value)||{};200===t.code&&(null==(a=t.data)?void 0:a.baseData)&&(null==(e=t.data)?void 0:e.baseData.length)&&da.value.push(...t.data.baseData),da.value.length<Q.value*W.value?Y.value=!0:Y.value=!1,ea.value=!1},ta=c(!1),sa=async()=>{var a,e;if(Z.value)return;N.value=N.value+1;const l=c({gameType:z.value,gradeType:1,page:N.value,pageSize:R.value});ta.value=!0;const t=await F(l.value)||{};200===t.code&&(null==(a=t.data)?void 0:a.baseData)&&(null==(e=t.data)?void 0:e.baseData.length)&&pa.value.push(...t.data.baseData),pa.value.length<N.value*R.value?Z.value=!0:Z.value=!1,ta.value=!1},pa=c([]),da=c([]),ma=c(!1),ga=async a=>{var e,l;if(z.value){ma.value=!1;const t=await F(a)||{};ma.value=!0;let s=[];200===t.code&&(null==(e=t.data)?void 0:e.baseData)&&(null==(l=t.data)?void 0:l.baseData.length)&&(s=t.data.baseData),1===a.gradeType||j.value?s.length?(G.value=s[0].leagueLogo,q.value=s[0].leagueShortName,pa.value=s):(G.value="",q.value="",pa.value=[]):2===a.gradeType&&(s.length?da.value=s:da.value=[])}},ya=c([]),ba=c(!1),ha=async()=>{var a;if(j.value){ba.value=!0;const u=await B({page:1,pageSize:10,leagueIds:j.value})||{};if(ba.value=!1,200===u.code&&u.data){const i=((null==(a=null==u?void 0:u.data)?void 0:a.gameDetail)||[]).map((a=>{const{systemId:u,gameId:i,gidm:r,gameType:c}=a,v=a.champion.playType,p=a.champion.championType,d=a.champion.sw;return a.champion.ratioData=a.champion.ratioData.map((a=>{var m;return a.marketInfo=new H((m=((a,e)=>{for(var l in e||(e={}))s.call(e,l)&&n(a,l,e[l]);if(t)for(var l of t(e))o.call(e,l)&&n(a,l,e[l]);return a})({},a),e(m,l({systemId:u,gameId:i,gidm:r,gameType:c,playType:v,sw:d,championType:p})))),a})).sort(((a,e)=>a.ior-e.ior)),a}));ya.value=i}}else ya.value=[]},fa=a=>{j.value=a.leagueId,K()};return C((async()=>{aa(),K(),V((()=>{var a;null==(a=r.value)||a.setSports(z.value)}))})),(a,e)=>{const l=v("SportsTabs"),t=v("ImageButton"),s=v("ArrowTitle"),o=v("Loading"),n=v("HomeMatchHandicap"),c=v("HomeEmpty"),D=v("van-collapse-item"),M=v("van-collapse"),O=v("FooterHeight");return p(),d("div",na,[T(l,{ref_key:"refSportsTabs",ref:r,class:"pt20",onReturnSportsSuccess:k},null,512),X.value.length?(p(),d("div",ua,[m("div",ia,[T(P,{text:a.$t("sport.all"),active:!j.value,onClick:e[0]||(e[0]=a=>fa({}))},null,8,["text","active"]),(p(!0),d(g,null,y(X.value,((a,e)=>(p(),b(t,{key:e,text:a.leagueNameAbbr,src:a.icon,active:j.value===a.leagueId,onClick:e=>fa(a)},null,8,["text","src","active","onClick"])))),128))])])):A("",!0),j.value?(p(),d(g,{key:2},[T(M,{modelValue:x.value,"onUpdate:modelValue":e[3]||(e[3]=a=>x.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[T(D,{name:"1"},{title:h((()=>[T(s,{class:"mt10 mb10",src:G.value,type:"6",text:q.value},null,8,["src","text"])])),default:h((()=>[ma.value?(p(),d(g,{key:1},[pa.value.length?(p(),d("div",va,[(p(!0),d(g,null,y(pa.value,((a,e)=>(p(),b(n,{key:e,"send-params":a},null,8,["send-params"])))),128))])):(p(),b(c,{key:1}))],64)):(p(),b(o,{key:0}))])),_:1})])),_:1},8,["modelValue"]),T(oa,{"champion-list":ya.value,"champion-list-loading":ba.value},null,8,["champion-list","champion-list-loading"])],64)):(p(),d(g,{key:1},[T(M,{modelValue:w.value,"onUpdate:modelValue":e[1]||(e[1]=a=>w.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[T(D,{name:"b1"},{title:h((()=>[T(s,{class:"mt10 mb10 goodArrowTitle",src:I(u),text:a.$t("sport.recommend")},null,8,["src","text"])])),default:h((()=>[!ma.value||ta.value?(p(),b(o,{key:0})):(p(),d(g,{key:1},[pa.value.length?(p(),d(g,{key:0},[m("div",ra,[(p(!0),d(g,null,y(pa.value,((a,e)=>(p(),b(n,{key:e,"send-params":a},null,8,["send-params"])))),128))]),m("div",{class:_(["Button-MatchMore mt20 mb20",Z.value?"no-more":""]),onClick:sa},[m("span",null,f(Z.value?a.$t("live.noMore"):a.$t("home.lookMoreMatch")),1)],2)],64)):(p(),b(c,{key:1}))],64))])),_:1})])),_:1},8,["modelValue"]),T(M,{modelValue:S.value,"onUpdate:modelValue":e[2]||(e[2]=a=>S.value=a),accordion:"",border:!1,class:"GlobalCollapse"},{default:h((()=>[T(D,{name:"c1"},{title:h((()=>[T(s,{class:"mt10 mb10 latestArrowTitle",src:I(i),text:a.$t("sport.early")},null,8,["src","text"])])),default:h((()=>[!ma.value||ea.value?(p(),b(o,{key:0})):(p(),d(g,{key:1},[da.value.length?(p(),d(g,{key:0},[m("div",ca,[(p(!0),d(g,null,y(da.value,((a,e)=>(p(),b(n,{key:e,"send-params":a},null,8,["send-params"])))),128))]),m("div",{class:_(["Button-MatchMore mt20 mb20",Y.value?"no-more":""]),onClick:la},[m("span",null,f(Y.value?a.$t("live.noMore"):a.$t("home.lookMoreMatch")),1)],2)],64)):(p(),b(c,{key:1}))],64))])),_:1})])),_:1},8,["modelValue"])],64)),T(O)])}}});pa.__scopeId="data-v-1c26bf4a";export{pa as default};
