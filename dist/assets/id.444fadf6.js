var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,o=(e,a)=>{for(var l in a||(a={}))s.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))n.call(a,l)&&i(e,l,a[l]);return e};import{s as c,b as v,w as m,j as r,d as u,r as d,E as p,o as g,S as h,P as f,q as y,B as b,V as I,F as _,_ as k,x as T,O as w,u as S,X as j,Y as N,n as x,c as O,Z as B,$ as L,W as F,a2 as $,R as P,e as E,a as M,y as R,a0 as D}from"./vue.7833d4f2.js";/* empty css                     */import{v as H}from"./video.es.540867fa.js";import{i as C,l as K,b as V,c as W,r as A,m as U,e as z}from"./index.7180fc6a.js";import{w as G}from"./websocket.b7d84b78.js";import{u as J,s as q,R as X,S as Y,I as Z,T as Q}from"./index.a2fba38e.js";import{u as ee,_ as ae}from"./index.91883440.js";import{_ as le,a as te,b as se}from"./live_white_r.4c6985c7.js";import{u as ne}from"./useMatch.32f2f49e.js";import{s as ie,a as oe}from"./s_hot2.bba3cb3a.js";import"./getScore.a1d81da5.js";const ce=e=>(j("data-v-0dfb52b0"),e=e(),N(),e),ve={class:"chat"},me={class:"item"},re={class:"item-avatar"},ue={class:"item-name"},de=ce((()=>f("em",null,":",-1))),pe={class:"item-cont"},ge={class:"item-avatar"},he={type:3},fe={class:"item-name"},ye=ce((()=>f("em",null,":",-1))),be={class:"item-cont"},Ie={class:"chat-bottom"},_e=ce((()=>f("button",{"native-type":"submit",hidden:""},null,-1))),ke={class:"action"};var Te=c({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const a=e,{t:l}=J(),t=v((()=>q.state.user.userInfo)),s=v((()=>{const{isSend:e}=c.value;return 0==e||!$.value})),n=v((()=>{const{isSend:e}=c.value;return!X()||0==e})),i=v((()=>{const{isSend:e,bettingTotal:a}=c.value;return X()?0==e?l("live.needBet",{num:a}):l("live.chatTip")+"...":l("live.needLogin")})),o=v((()=>a.matchInfo));m((()=>o.value),(()=>{j()})),r((()=>{}));const c=u({}),j=async()=>{const e={gidm:o.value.gidm,systemId:o.value.systemId,anchorId:void 0,version:"3.9.0"},a=await C(e);200==a.code&&(c.value=a.data||{},N(),O())},N=async()=>{const{roomNo:e,channelType:a}=c.value,l={roomNo:e,page:1,pageSize:20,channelType:a},t=await K(l),s=(t.extra||{}).messageList||[];if(200==t.code){const e=[];s.forEach((a=>{if(a.msgType&&2==+a.msgType&&a.content){(JSON.parse(a.content||"").bettingData||[]).forEach((a=>{e.push(a.gidm)}))}})),F(s)}},O=async()=>{const{roomNo:e}=c.value,a=`/topic/1/${e}`;G.subscribe(a,(e=>{const a=JSON.parse(e.body);if(a&&1e3===a.action){const[e]=a.data;F(e)}}))},B=u(null),L=u([]),F=e=>{e instanceof Array?L.value=e.reverse().concat(L.value):L.value.push(e),(()=>{const e=B.value||{};x((()=>{e.scrollTop=e&&e.scrollHeight}))})()},$=u(),P=()=>{const e=$.value,{roomNo:a}=c.value,{playerId:l,teamId:s}=t.value,n={token:"1",msgType:"1",roomNo:a,content:e,playerId:l,teamId:s};G.send("/chat/sendMsg",JSON.stringify(n)),$.value=""},E=u(),M=()=>{E.value.$el.scrollIntoView()};return(e,a)=>{const l=d("SvgIcon"),t=d("van-field"),o=d("van-form"),c=d("van-button"),v=p("img");return g(),h("div",ve,[f("div",{class:"chat-section",ref_key:"chatRef",ref:B},[f("div",me,[f("div",re,[y(l,{name:"bot"})]),f("div",ue,[b(I(e.$t("live.aiBot")),1),de]),f("div",pe,I(e.$t("live.chatSys")),1)]),(g(!0),h(_,null,k(L.value,(e=>(g(),h("div",{class:"item",key:e.msgId},[f("div",ge,[T(f("img",he,null,512),[[v,e.headImg]])]),f("div",fe,[b(I(e.nickName),1),ye]),f("div",be,I(e.content),1)])))),128))],512),f("div",Ie,[y(o,{onSubmit:P,"submit-on-enter":""},{default:w((()=>[y(t,{ref_key:"msgInputRef",ref:E,modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value=e),autocomplete:"off",placeholder:S(i),disabled:S(n),maxlength:50,onFocus:M},null,8,["modelValue","placeholder","disabled"]),_e])),_:1}),f("div",ke,[y(c,{onClick:P,disabled:S(s)},{default:w((()=>[b(I(e.$t("live.send")),1)])),_:1},8,["disabled"])])])])}}});Te.__scopeId="data-v-0dfb52b0";const we={class:"panel-bet"};var Se=c({props:{matchInfo:{type:Object,default:()=>{}},nav:[String,Number]},setup(e){const a=e,{getPlayGroupType:l}=ee(),t=u([]),s=async()=>{t.value=await l(a.matchInfo)};return m((()=>a.matchInfo),(()=>{s()})),r((()=>{s()})),(e,l)=>{const s=d("EmptyData");return g(),h("div",we,[0===t.value.length?(g(),O(s,{key:0})):(g(),O(ae,{key:1,"data-list":t.value,"match-info":a.matchInfo},null,8,["data-list","match-info"]))])}}});Se.__scopeId="data-v-803e85ae";const je=e=>(j("data-v-665fd292"),e=e(),N(),e),Ne={class:"panel-with"},xe={class:"top-nav"},Oe={class:"header"},Be={class:"avatar",type:3,alt:""},Le={class:"title"},Fe={class:"right"},$e={key:0,class:"state"},Pe={class:"wrapper"},Ee={class:"summary"},Me={class:"label"},Re={class:"label-flex"},De={class:"label-flex"},He=je((()=>f("i",{class:"iconfont icon-dianshi"},null,-1))),Ce=["innerHTML"],Ke={class:"team"},Ve={class:"team-cell"},We={class:"palyer"},Ae={src:le,type:4,alt:""},Ue={class:"score"},ze={class:"team-cell"},Ge={class:"palyer"},Je={src:le,type:5,alt:""},qe={class:"score"},Xe={class:"ticket"},Ye={class:"ticket-txt"},Ze=je((()=>f("div",{class:"icon"},[f("img",{src:te,alt:""})],-1))),Qe={class:"info"},ea={class:"ticket-bet"},aa={class:"betting"},la={class:"betting-cell bt1"},ta={class:"betting-cell bt2"},sa={class:"footer"},na={class:"button"},ia=je((()=>f("img",{src:se,alt:""},null,-1)));var oa=c({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const t=e,s=ne(),n=u(1),i=e=>{n.value=e,c.value=[],v.value=!0,j()},c=u([]),v=u(!1),j=async()=>{var e;const s=1==n.value?V:W,i={page:1,pageSize:50,gidm:null==(e=t.matchInfo)?void 0:e.gidm},m=await s(i);if(200==m.code){const e=m.data.map((e=>{const t=o({},e),s={gameType:t.gameType,playType:t.playType,session:t.session},n=new Y(t);return i=o({},t),a(i,l({playInfo:s,marketInfo:n}));var i}));c.value=e}v.value=!1};return m((()=>t.matchInfo),(()=>{var e;(null==(e=t.matchInfo)?void 0:e.gidm)&&j()})),r((()=>{j()})),(e,a)=>{const l=d("Loading"),o=d("EmptyData"),m=d("SvgIcon"),r=d("BettingOption"),u=p("img"),j=p("play");return g(),h("div",Ne,[f("div",xe,[f("span",{class:B({active:1==n.value}),onClick:a[0]||(a[0]=e=>i(1))},I(e.$t("live.curMatch")),3),f("span",{class:B({active:2==n.value}),onClick:a[1]||(a[1]=e=>i(2))},I(e.$t("live.allBetWith")),3)]),v.value?(g(),O(l,{key:0})):0===c.value.length?(g(),O(o,{key:1})):(g(!0),h(_,{key:2},k(c.value,((a,l)=>(g(),h("div",{key:l,class:"item"},[f("div",Oe,[T(f("img",Be,null,512),[[u,a.headImg]]),f("div",Le,[f("strong",null,I(a.nikeName),1),f("span",null,"@"+I(a.nikeName),1)]),f("div",Fe,["RB"==t.matchInfo.showtype?(g(),h("span",$e,I(e.$t("live.inprogress")),1)):L("",!0)])]),f("div",Pe,[f("div",Ee,I(a.leagueName),1),f("div",Me,[f("div",Re,["FT"==a.gameType?(g(),O(m,{key:0,name:"live-football"})):L("",!0),"BK"==a.gameType?(g(),O(m,{key:1,name:"live-basketball"})):L("",!0),f("span",null,I(a.leagueShortName),1)]),f("div",De,[He,f("span",{innerHTML:S(s).showRBTime(t.matchInfo)},null,8,Ce)])]),f("div",Ke,[f("div",Ve,[f("div",We,[T(f("img",Ae,null,512),[[u,a.homeLogo]]),f("span",null,I(a.homeTeam),1)]),f("div",Ue,[f("span",null,I(S(s).getScore(t.matchInfo,"H")||"-"),1)])]),f("div",ze,[f("div",Ge,[T(f("img",Je,null,512),[[u,a.awayLogo]]),f("span",null,I(a.awayTeam),1)]),f("div",qe,[f("span",null,I(S(s).getScore(t.matchInfo,"C")||"-"),1)])])]),f("div",Xe,[f("div",Ye,[Ze,f("div",Qe,[f("strong",null,I(a.betItem),1),T(f("span",null,null,512),[[j,a.playInfo]])])]),f("div",ea,[f("span",null,"@"+I(a.ior),1)])]),f("div",aa,[f("div",la,[f("strong",null,I(e.$t("live.betAmout"))+"：",1),f("span",null,[y(m,{name:"usdt"}),b(" "+I(a.golds),1)])]),f("div",ta,[f("strong",null,I(e.$t("live.betProfit"))+"：",1),f("span",null,[y(m,{name:"usdt"}),b(" "+I((a.golds*a.ior).toFixed(2)),1)])])]),f("div",sa,[y(r,{"market-info":a.marketInfo},{default:w((()=>[f("div",na,[f("span",null,I(e.$t("live.betWith")),1),ia])])),_:2},1032,["market-info"])])])])))),128))])}}});oa.__scopeId="data-v-665fd292";const ca={class:"item"},va={class:"photo"},ma=["src"],ra={key:0,class:"state"},ua={class:"main"},da={class:"main-title"},pa={class:"main-team"},ga={class:"cell"},ha={class:"head"},fa={type:4,alt:""},ya={class:"score"},ba={class:"cell"},Ia={class:"head"},_a={type:5,alt:""},ka={class:"score"},Ta={class:"main-desc"},wa={class:"name"},Sa={class:"hots"},ja=["src"];var Na=c({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,{t:l}=J(),t=v((()=>q.state.app.theme)),s=v((()=>"blue"==t.value?ie:oe)),n=u(Z),i=v((()=>{var e;return null==(e=a.item)?void 0:e.gameInfo})),o=v((()=>{const e=a.item;return e.anchorId?Z+e.cover:"BK"==e.gameType?Z+"FE/common/live/img_video_bg_BK.jpg":Z+"FE/common/live/img_video_bg_FT.jpg"}));v((()=>{const e=a.item.watchTotal.toLocaleString();return"RB"==a.item.showType?l("live.xLooks",{num:e}):l("live.xReserve",{num:e})}));const c=v((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[a.item.gameType])));return(l,t)=>{const v=d("van-image"),m=d("SvgIcon"),r=p("img");return g(),h("div",ca,[f("div",va,[y(v,{src:S(o),fit:"cover"},{error:w((()=>[f("img",{src:n.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,ma)])),_:1},8,["src"]),"RB"==e.item.showType?(g(),h("span",ra,I(l.$t("live.hotNow")),1)):L("",!0)]),f("div",ua,[f("div",da,[S(c)?(g(),O(m,{key:0,name:S(c)},null,8,["name"])):L("",!0),f("strong",null,I(e.item.leagueName),1)]),f("div",pa,[f("div",ga,[f("div",ha,[T(f("img",fa,null,512),[[r,e.item.homeLogo]]),f("span",null,I(e.item.homeTeam),1)]),f("div",ya,[f("span",null,I(S(i).sc_game_H||S(i).sc_FT_H),1)])]),f("div",ba,[f("div",Ia,[T(f("img",_a,null,512),[[r,e.item.awayLogo]]),f("span",null,I(e.item.awayTeam),1)]),f("div",ka,[f("span",null,I(S(i).sc_game_A||S(i).sc_FT_C||S(i).sc_FT_A),1)])])]),f("div",Ta,[f("div",wa,I(e.item.leagueShortName),1),f("div",Sa,[f("img",{src:S(s),alt:""},null,8,ja),f("span",null,I(a.item.watchTotal.toLocaleString()),1)])])])])}}});Na.__scopeId="data-v-d2d43fc2";const xa={class:"panel-more"};var Oa=c({emits:["more-video"],setup(e,{emit:a}){let l=0;const t=u([]),s=u(!1),n=u(!1),i=async()=>{l++;const e={page:l,pageSize:20,videoType:2},a=await A(e),i=a.data||{};200==a.code?(i.list.forEach((e=>{t.value.push(e)})),s.value=!1,n.value=t.value.length==i.total):n.value=!0};return r((()=>{i()})),(e,l)=>{const o=d("EmptyData"),c=d("van-list");return g(),h("div",xa,[n.value&&0===t.value.length?(g(),O(o,{key:0})):L("",!0),y(c,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=e=>s.value=e),finished:n.value,"immediate-check":!1,"finished-text":0==t.value.length?"":e.$t("live.noMore"),onLoad:i},{default:w((()=>[(g(!0),h(_,null,k(t.value,(e=>(g(),h("div",{class:"more-item",key:e.gidm},[y(Na,{item:e,onClick:l=>(e=>{a("more-video",e)})(e)},null,8,["item","onClick"])])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});Oa.__scopeId="data-v-683afc9a";const Ba={class:"team"},La={class:"team-header"},Fa={class:"league"},$a={class:"date"},Pa={class:"team-container"},Ea={class:"team-player host"},Ma={class:"img-num"},Ra={type:4,alt:""},Da={class:"team-score"},Ha=["innerHTML"],Ca={class:"team-player away"},Ka={class:"img-num"},Va={type:5,alt:""};var Wa=c({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const a=e,l=ne(),t=v((()=>a.matchInfo)),s=v((()=>"BK"==t.value.gameType?Z+"FE/common/live/img_video_bg_BK.jpg":Z+"FE/common/live/img_video_bg_FT.jpg"));return(e,a)=>{const n=d("SvgIcon"),i=p("img");return g(),h("div",{class:"match-game",style:F({backgroundImage:"url("+S(s)+")"})},[f("div",Ba,[f("div",La,[f("div",Fa,[y(n,{name:"live-football"}),f("span",null,I(S(t).leagueName),1)]),f("div",$a,I(S(Q)(S(t).gameDate,"MM-DD HH:mm")),1)]),f("div",Pa,[f("div",Ea,[f("div",Ma,[T(f("img",Ra,null,512),[[i,S(t).homeLogo]]),f("span",null,I(S(l).getScore(S(t),"H")),1)]),f("strong",null,I(S(t).homeTeam),1)]),f("div",Da,[f("span",{class:"default",innerHTML:S(l).showRBTime(S(t))},null,8,Ha)]),f("div",Ca,[f("div",Ka,[f("span",null,I(S(l).getScore(S(t),"C")),1),T(f("img",Va,null,512),[[i,S(t).awayLogo]])]),f("strong",null,I(S(t).awayTeam),1)])])])],4)}}});Wa.__scopeId="data-v-3a570eb6";const Aa={key:0,class:"match"},Ua=["src"],za={class:"match-video"},Ga={key:0,class:"mask-loading"},Ja=(e=>(j("data-v-49b0d515"),e=e(),N(),e))((()=>f("div",{class:"icon"},null,-1))),qa={class:"text"},Xa={class:"tab-title"};var Ya=c({setup(e){const{t:a}=J(),l=$(),t=P(),s=E([{title:a("live.chatroom"),iconName:"live-chat"},{title:a("live.bet"),iconName:"live-bet"},{title:a("live.betWith"),iconName:"live-bet_add"},{title:a("live.more"),iconName:"live-grid"}]),n=u(0),i=[Te,Se,oa,Oa],c=v((()=>q.state.app.showFixedBet)),m=u({}),p=async(e=l.params.id)=>{const a=(await U({gidm:e})).data||{};if(m.value=o({},a),a.detail&&a.detail.length>0){const{game:e}=a.detail[0],l=e.gameInfo||{};m.value.gameInfo=l}},b=u({});let j=null;const N=u(""),F=u(null),C=u(!1),K=u(!1),V=u(!1),W=()=>{const{streamNa:e}=b.value,{liveali:a}=e||{};F.value=(a||{}).m3u8;const s={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:F.value,type:"application/x-mpegURL"}]};x((()=>{j=H(N.value,s,(()=>{j.log("onPlayerReady");document.pictureInPictureElement&&j.exitPictureInPicture().then((()=>{j.log("画中画模式已关闭")}))})),j.on("waiting",(()=>{K.value=!0})),j.on("playing",(()=>{K.value=!1})),j.on("error",(()=>{C.value=!0,K.value=!1})),j.on("enterpictureinpicture",(()=>{V.value=!0,q.commit("app/SET_PIP_GIDM",l.params.id)})),j.on("leavepictureinpicture",(()=>{if(V.value=!1,"MatchDetail"!==l.name){const e=q.state.app.pictureinpictureGidm;t.push(`/match/${e}`)}}))}))},A=e=>{X(),C.value=!1,n.value=0,null==j||j.src(e.m3u8),null==j||j.load(),null==j||j.play(),t.replace(`/match/${e.gidm}`),p(e.gidm)};let G=null;const X=()=>{G&&(clearInterval(G),G=null)},Y=e=>{0==e?X():(X(),G=setInterval((()=>{p()}),5e3)),p()};return r((()=>{document.body.style.overflow="hidden",p(),(async()=>{const e=l.params.id,a=await z({gidm:e});200==a.code?(b.value=a.data,W()):(b.value=null,C.value=!0)})()})),M((()=>{document.body.removeAttribute("style"),X(),V.value||(j&&j.dispose(),j=null)})),(e,a)=>{var l,t;const o=d("SvgIcon"),v=d("van-tab"),r=d("van-tabs");return g(),h("div",{class:B(["live-page",{"has-bet":S(c)}])},[(null==(l=F.value)?void 0:l.endsWith("html"))?(g(),h("div",Aa,[f("iframe",{src:F.value,width:"100%",height:"100%",frameborder:"0"},null,8,Ua)])):L("",!0),T(f("div",{class:B(["match",{"no-vid":C.value}])},[T(f("div",za,[f("video",{ref_key:"videoRef",ref:N,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512),K.value?(g(),h("div",Ga,[Ja,f("div",qa,I(e.$t("live.effLoading"))+"...",1)])):L("",!0)],512),[[R,!C.value]]),C.value?(g(),O(Wa,{key:0,matchInfo:m.value},null,8,["matchInfo"])):L("",!0)],2),[[R,!(null==(t=F.value)?void 0:t.endsWith("html"))]]),y(r,{active:n.value,"onUpdate:active":a[0]||(a[0]=e=>n.value=e),swipeable:"",shrink:"","line-height":"0",onChange:Y},{default:w((()=>[(g(!0),h(_,null,k(S(s),((e,a)=>(g(),O(v,null,{title:w((()=>[f("div",Xa,[y(o,{name:e.iconName},null,8,["name"]),f("span",null,I(e.title),1)])])),default:w((()=>[n.value==a?(g(),O(D(i[n.value]),{key:0,matchInfo:m.value,onMoreVideo:A},null,8,["matchInfo"])):L("",!0)])),_:2},1024)))),256))])),_:1},8,["active"])],2)}}});Ya.__scopeId="data-v-49b0d515";export{Ya as default};
