import{_ as a}from"./index.063ec4b6.js";import{R as e,S as s,T as t,U as l,s as n,V as c}from"./index.5e0017e8.js";import{d as i,r as o,N as m,o as r,u as d,q as v,m as u,y as g,x as p,L as h,p as b,v as _,O as y,a as f,j as P,U as T,V as k,S as x,F as w,E as S,c as j,B as R,C as B}from"./vue.3b4f9705.js";import{a as M,b as C}from"./index.0b066b41.js";const L={class:"homeMatchHandicap"},F={class:"home-tabs-play"},I={class:"home-match"},N={calss:"up-match-group__body"},O={class:"up-match"},U={class:"match-info-live__header border-bottom"},A={class:"up-match-league"},E={class:"text"},H={class:"flex-cross-center"},D={class:"up-match-time"},V={class:"up-match-score border-bottom"},q={class:"item mb5"},z={type:4,class:"my-image img",style:{"object-fit":"contain"},alt:""},K={class:"name"},X={class:"container"},Y={class:"value"},$={class:"item"},G={class:"my-image img",type:5,style:{"object-fit":"contain"},alt:""},J={class:"name"},Q={class:"container"},W={class:"value"},Z={class:"up-match__body"},aa={key:0,class:"match-betting-item"},ea={class:"match-betting-item__title"},sa={class:"flex-cross-center"},ta=p(" 全场 亚洲让分盘 "),la=v("div",{class:"popover-text"}," 全场让分盘 ",-1),na={class:"match-betting-item__content"},ca={class:"betting-select"},ia={class:"betting-select__list"},oa={key:1,class:"match-betting-item"},ma=v("div",{class:"match-betting-item__title"},[v("div",{class:"flex-cross-center"}," 全场 大小盘 ")],-1),ra={class:"match-betting-item__content"},da={class:"betting-select"},va={class:"betting-select__list"},ua={key:2,class:"match-betting-item"},ga=v("div",{class:"match-betting-item__title"},[v("div",{class:"flex-cross-center"}," 全场 1X2 ")],-1),pa={class:"match-betting-item__content"},ha={class:"betting-select"},ba={class:"betting-select__list"},_a={class:"up-match__footer"},ya={class:"match-footer"},fa=v("span",null,"更多玩法",-1),Pa=v("span",null,"投注动态",-1);var Ta=i({props:{sendParams:{type:Object,default:function(){return{}}}},setup(a){const i=a,f=()=>{c({message:"投注动态即将推出",theme:"round-button"}).then((()=>{}))},P=a=>{const{gameInfo:e}=a,{re_time:s}=e||{};return s||"0"},T=a=>{const{gameInfo:e}=a,{sc_FT_H:s}=e||{};return s||"0"},k=a=>{const{gameInfo:e}=a,{sc_FT_A:s}=e||{};return s||"0"},x=({leagueShortName:a,leagueName:e})=>a&&e?`${a||e}`:"";return(c,w)=>{const S=o("van-icon"),j=o("van-popover"),R=m("img");return r(),d("div",L,[v("div",F,[u(e,{"time-send-params":a.sendParams},null,8,["time-send-params"])]),v("div",I,[v("div",N,[v("div",O,[v("div",U,[v("div",A,[v("div",E,g(x(a.sendParams)),1)]),v("div",H,[v("div",D,[u(s,{"icon-src":"live"}),p(" "+g(P(a.sendParams)),1)])])]),v("div",V,[v("div",q,[h(v("img",z,null,512),[[R,a.sendParams.homeLogo]]),v("div",K,g(a.sendParams.homeTeamAbbr||a.sendParams.homeTeam),1),v("div",X,[v("div",Y,g(T(a.sendParams)),1)])]),v("div",$,[h(v("img",G,null,512),[[R,a.sendParams.awayLogo]]),v("div",J,g(a.sendParams.awayTeamAbbr||a.sendParams.awayTeam),1),v("div",Q,[v("div",W,g(k(a.sendParams)),1)])])]),v("div",Z,[a.sendParams.RE?(r(),d("div",aa,[v("div",ea,[v("div",sa,[ta,u(j,{placement:"top",theme:"dark",trigger:"click"},{reference:b((()=>[u(S,{name:"info"})])),default:b((()=>[la])),_:1})])]),v("div",na,[v("div",ca,[v("div",ia,[u(l,{"send-params":_(t)("RE",a.sendParams)},null,8,["send-params"])])])])])):y("",!0),a.sendParams.ROU?(r(),d("div",oa,[ma,v("div",ra,[v("div",da,[v("div",va,[u(l,{"send-params":_(t)("ROU",a.sendParams)},null,8,["send-params"])])])])])):y("",!0),a.sendParams.RM?(r(),d("div",ua,[ga,v("div",pa,[v("div",ha,[v("div",ba,[u(l,{"send-params":_(t)("RM",a.sendParams)},null,8,["send-params"])])])])])):y("",!0)])])]),v("div",_a,[v("div",ya,[v("div",{class:"match-footer__item",onClick:w[0]||(w[0]=a=>_(n).dispatch("betting/setMoreShow",{status:!0,moreParams:i.sendParams}))},[fa,u(S,{class:"arrow",name:"arrow"})]),v("div",{class:"match-footer__item",onClick:f},[Pa,u(S,{class:"arrow",name:"arrow"})])])])])])}}});const ka={class:"sportlive"},xa={key:0,class:"sportlive-Match-Tabs"},wa=(a=>(R("data-v-92e30096"),a=a(),B(),a))((()=>v("div",{class:"footerHeight"},null,-1)));var Sa=i({setup(e){const s=f(),t=f(!1),l=f(["FT","BK","TN","OP_BM"]),n=f([]),c=async()=>{const a=await M({})||{};if(200===a.code&&a.data){const e=a.data||[];n.value=e.filter((a=>l.value.includes(a.gameType)))}},i=f([]),m=async()=>{var a,e,n,c;const o={gameType:s.value||"",showtype:"RB",timeStage:0,dateStage:0,gameSort:1,isNovice:"Y",onlyFavorite:0,leagueIds:"",gameTypeSon:"",page:1,pageSize:50};t.value=!1;const m=await C(o)||{};if(console.log(m,"resresresres"),t.value=!0,200===m.code&&(null==(e=null==(a=m.data)?void 0:a.matchList)?void 0:e.baseData)){const a=(null==(c=null==(n=m.data)?void 0:n.matchList)?void 0:c.baseData)||[];i.value=a.filter((a=>l.value.includes(a.gameType)))}else i.value=[]},v=a=>{s.value=a.gameType,m()};return P((async()=>{console.log("onBeforeMount"),t.value=!1,(async()=>{await c(),await m()})()})),T((()=>{console.log("onActivated")})),k((()=>{console.log("deactivated")})),x((()=>{console.log("onBeforeUnmount")})),(e,l)=>{const c=o("SportsButton"),m=o("Loading"),g=o("HomeEmpty");return r(),d("div",ka,[n.value.length?(r(),d("div",xa,[u(a,{text:"推荐",active:!s.value,onClick:l[0]||(l[0]=a=>v({}))},null,8,["active"]),(r(!0),d(w,null,S(n.value,((a,e)=>(r(),j(c,{key:e,text:a.gameType,active:s.value===a.gameType,onClick:e=>v(a)},null,8,["text","active","onClick"])))),128))])):y("",!0),t.value?(r(),d(w,{key:2},[(r(!0),d(w,null,S(i.value,((a,e)=>(r(),j(Ta,{key:e,"send-params":a},null,8,["send-params"])))),128)),i.value.length?y("",!0):(r(),j(g,{key:0}))],64)):(r(),j(m,{key:1})),wa])}}});Sa.__scopeId="data-v-92e30096";export{Sa as default};
