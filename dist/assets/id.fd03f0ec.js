var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,o=(e,a)=>{for(var l in a||(a={}))s.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))n.call(a,l)&&i(e,l,a[l]);return e};import{s as c,b as v,w as m,j as r,d as u,r as d,E as p,o as g,R as h,P as y,q as f,B as b,W as I,F as _,S as k,x as T,O as w,u as j,Y as S,Z as N,n as x,c as O,_ as B,$ as L,X as F,a2 as $,U as E,e as P,a as M,y as R,a0 as D}from"./vue.5fe62a63.js";/* empty css                     */import{v as H}from"./video.es.6a3aea41.js";import{i as C,l as K,b as W,c as A,r as U,m as V,e as z}from"./index.b37345cf.js";import{w as G}from"./websocket.57459cb3.js";import{u as J,s as q,E as X,M as Y,I as Z,F as Q}from"./index.39ed330e.js";import{u as ee,_ as ae}from"./index.a9cc457e.js";import{_ as le,a as te,b as se}from"./live_white_r.4c6985c7.js";import{u as ne}from"./useMatch.b27d8b48.js";import{s as ie,a as oe}from"./s_hot2.bba3cb3a.js";import"./getScore.dba28270.js";const ce=e=>(S("data-v-0dfb52b0"),e=e(),N(),e),ve={class:"chat"},me={class:"item"},re={class:"item-avatar"},ue={class:"item-name"},de=ce((()=>y("em",null,":",-1))),pe={class:"item-cont"},ge={class:"item-avatar"},he={type:3},ye={class:"item-name"},fe=ce((()=>y("em",null,":",-1))),be={class:"item-cont"},Ie={class:"chat-bottom"},_e=ce((()=>y("button",{"native-type":"submit",hidden:""},null,-1))),ke={class:"action"};var Te=c({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const a=e,{t:l}=J(),t=v((()=>q.state.user.userInfo)),s=v((()=>{const{isSend:e}=c.value;return 0==e||!$.value})),n=v((()=>{const{isSend:e}=c.value;return!X()||0==e})),i=v((()=>{const{isSend:e,bettingTotal:a}=c.value;return X()?0==e?l("live.needBet",{num:a}):l("live.chatTip")+"...":l("live.needLogin")})),o=v((()=>a.matchInfo));m((()=>o.value),(()=>{S()})),r((()=>{}));const c=u({}),S=async()=>{const e={gidm:o.value.gidm,systemId:o.value.systemId,anchorId:void 0,version:"3.9.0"},a=await C(e);200==a.code&&(c.value=a.data||{},N(),O())},N=async()=>{const{roomNo:e,channelType:a}=c.value,l={roomNo:e,page:1,pageSize:20,channelType:a},t=await K(l),s=(t.extra||{}).messageList||[];if(200==t.code){const e=[];s.forEach((a=>{if(a.msgType&&2==+a.msgType&&a.content){(JSON.parse(a.content||"").bettingData||[]).forEach((a=>{e.push(a.gidm)}))}})),F(s)}},O=async()=>{const{roomNo:e}=c.value,a=`/topic/1/${e}`;G.subscribe(a,(e=>{const a=JSON.parse(e.body);if(a&&1e3===a.action){const[e]=a.data;F(e)}}))},B=u(null),L=u([]),F=e=>{e instanceof Array?L.value=e.reverse().concat(L.value):L.value.push(e),(()=>{const e=B.value||{};x((()=>{e.scrollTop=e&&e.scrollHeight}))})()},$=u(),E=()=>{const e=$.value,{roomNo:a}=c.value,{playerId:l,teamId:s}=t.value,n={token:"1",msgType:"1",roomNo:a,content:e,playerId:l,teamId:s};G.send("/chat/sendMsg",JSON.stringify(n)),$.value=""},P=u(),M=()=>{P.value.$el.scrollIntoView()};return(e,a)=>{const l=d("SvgIcon"),t=d("van-field"),o=d("van-form"),c=d("van-button"),v=p("img");return g(),h("div",ve,[y("div",{class:"chat-section",ref_key:"chatRef",ref:B},[y("div",me,[y("div",re,[f(l,{name:"bot"})]),y("div",ue,[b(I(e.$t("live.aiBot")),1),de]),y("div",pe,I(e.$t("live.chatSys")),1)]),(g(!0),h(_,null,k(L.value,(e=>(g(),h("div",{class:"item",key:e.msgId},[y("div",ge,[T(y("img",he,null,512),[[v,e.headImg]])]),y("div",ye,[b(I(e.nickName),1),fe]),y("div",be,I(e.content),1)])))),128))],512),y("div",Ie,[f(o,{onSubmit:E,"submit-on-enter":""},{default:w((()=>[f(t,{ref_key:"msgInputRef",ref:P,modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value=e),autocomplete:"off",placeholder:j(i),disabled:j(n),maxlength:50,onFocus:M},null,8,["modelValue","placeholder","disabled"]),_e])),_:1}),y("div",ke,[f(c,{onClick:E,disabled:j(s)},{default:w((()=>[b(I(e.$t("live.send")),1)])),_:1},8,["disabled"])])])])}}});Te.__scopeId="data-v-0dfb52b0";const we={class:"panel-bet"};var je=c({props:{matchInfo:{type:Object,default:()=>{}},nav:[String,Number]},setup(e){const a=e,{getPlayGroupType:l}=ee(),t=u([]),s=async()=>{t.value=await l(a.matchInfo)};return m((()=>a.matchInfo),(()=>{s()})),r((()=>{s()})),(e,l)=>{const s=d("EmptyData");return g(),h("div",we,[0===t.value.length?(g(),O(s,{key:0})):(g(),O(ae,{key:1,"data-list":t.value,"match-info":a.matchInfo},null,8,["data-list","match-info"]))])}}});je.__scopeId="data-v-803e85ae";const Se=e=>(S("data-v-665fd292"),e=e(),N(),e),Ne={class:"panel-with"},xe={class:"top-nav"},Oe={class:"header"},Be={class:"avatar",type:3,alt:""},Le={class:"title"},Fe={class:"right"},$e={key:0,class:"state"},Ee={class:"wrapper"},Pe={class:"summary"},Me={class:"label"},Re={class:"label-flex"},De={class:"label-flex"},He=Se((()=>y("i",{class:"iconfont icon-dianshi"},null,-1))),Ce=["innerHTML"],Ke={class:"team"},We={class:"team-cell"},Ae={class:"palyer"},Ue={src:le,type:4,alt:""},Ve={class:"score"},ze={class:"team-cell"},Ge={class:"palyer"},Je={src:le,type:5,alt:""},qe={class:"score"},Xe={class:"ticket"},Ye={class:"ticket-txt"},Ze=Se((()=>y("div",{class:"icon"},[y("img",{src:te,alt:""})],-1))),Qe={class:"info"},ea={class:"ticket-bet"},aa={class:"betting"},la={class:"betting-cell bt1"},ta={class:"betting-cell bt2"},sa={class:"footer"},na={class:"button"},ia=Se((()=>y("img",{src:se,alt:""},null,-1)));var oa=c({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const t=e,s=ne(),n=u(1),i=e=>{n.value=e,c.value=[],v.value=!0,S()},c=u([]),v=u(!1),S=async()=>{var e;const s=1==n.value?W:A,i={page:1,pageSize:50,gidm:null==(e=t.matchInfo)?void 0:e.gidm},m=await s(i);if(200==m.code){const e=m.data.map((e=>{const t=o({},e),s={gameType:t.gameType,playType:t.playType,session:t.session},n=new Y(t);return i=o({},t),a(i,l({playInfo:s,marketInfo:n}));var i}));c.value=e}v.value=!1};return m((()=>t.matchInfo),(()=>{var e;(null==(e=t.matchInfo)?void 0:e.gidm)&&S()})),r((()=>{S()})),(e,a)=>{const l=d("Loading"),o=d("EmptyData"),m=d("SvgIcon"),r=d("BettingOption"),u=p("img"),S=p("play");return g(),h("div",Ne,[y("div",xe,[y("span",{class:B({active:1==n.value}),onClick:a[0]||(a[0]=e=>i(1))},I(e.$t("live.curMatch")),3),y("span",{class:B({active:2==n.value}),onClick:a[1]||(a[1]=e=>i(2))},I(e.$t("live.allBetWith")),3)]),v.value?(g(),O(l,{key:0})):0===c.value.length?(g(),O(o,{key:1})):(g(!0),h(_,{key:2},k(c.value,((a,l)=>(g(),h("div",{key:l,class:"item"},[y("div",Oe,[T(y("img",Be,null,512),[[u,a.headImg]]),y("div",Le,[y("strong",null,I(a.nikeName),1),y("span",null,"@"+I(a.nikeName),1)]),y("div",Fe,["RB"==t.matchInfo.showtype?(g(),h("span",$e,I(e.$t("live.inprogress")),1)):L("",!0)])]),y("div",Ee,[y("div",Pe,I(a.leagueName),1),y("div",Me,[y("div",Re,["FT"==a.gameType?(g(),O(m,{key:0,name:"live-football"})):L("",!0),"BK"==a.gameType?(g(),O(m,{key:1,name:"live-basketball"})):L("",!0),y("span",null,I(a.leagueShortName),1)]),y("div",De,[He,y("span",{innerHTML:j(s).showRBTime(t.matchInfo)},null,8,Ce)])]),y("div",Ke,[y("div",We,[y("div",Ae,[T(y("img",Ue,null,512),[[u,a.homeLogo]]),y("span",null,I(a.homeTeam),1)]),y("div",Ve,[y("span",null,I(j(s).getScore(t.matchInfo,"H")||"-"),1)])]),y("div",ze,[y("div",Ge,[T(y("img",Je,null,512),[[u,a.awayLogo]]),y("span",null,I(a.awayTeam),1)]),y("div",qe,[y("span",null,I(j(s).getScore(t.matchInfo,"C")||"-"),1)])])]),y("div",Xe,[y("div",Ye,[Ze,y("div",Qe,[y("strong",null,I(a.betItem),1),T(y("span",null,null,512),[[S,a.playInfo]])])]),y("div",ea,[y("span",null,"@"+I(a.ior),1)])]),y("div",aa,[y("div",la,[y("strong",null,I(e.$t("live.betAmout"))+"：",1),y("span",null,[f(m,{name:"usdt"}),b(" "+I(a.golds),1)])]),y("div",ta,[y("strong",null,I(e.$t("live.betProfit"))+"：",1),y("span",null,[f(m,{name:"usdt"}),b(" "+I((a.golds*a.ior).toFixed(2)),1)])])]),y("div",sa,[f(r,{"market-info":a.marketInfo},{default:w((()=>[y("div",na,[y("span",null,I(e.$t("live.betWith")),1),ia])])),_:2},1032,["market-info"])])])])))),128))])}}});oa.__scopeId="data-v-665fd292";const ca={class:"item"},va={class:"photo"},ma=["src"],ra={key:0,class:"state"},ua={class:"main"},da={class:"main-title"},pa={class:"main-team"},ga={class:"cell"},ha={class:"head"},ya={type:4,alt:""},fa={class:"score"},ba={class:"cell"},Ia={class:"head"},_a={type:5,alt:""},ka={class:"score"},Ta={class:"main-desc"},wa={class:"name"},ja={class:"hots"},Sa=["src"];var Na=c({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,{t:l}=J(),t=v((()=>q.state.app.theme)),s=v((()=>"blue"==t.value?ie:oe)),n=u(Z),i=v((()=>{var e;return null==(e=a.item)?void 0:e.gameInfo})),o=v((()=>{const e=a.item;return e.anchorId?Z+e.cover:"BK"==e.gameType?Z+"FE/common/live/img_video_bg_BK.jpg":Z+"FE/common/live/img_video_bg_FT.jpg"}));v((()=>{const e=a.item.watchTotal.toLocaleString();return"RB"==a.item.showType?l("live.xLooks",{num:e}):l("live.xReserve",{num:e})}));const c=v((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[a.item.gameType])));return(l,t)=>{const v=d("van-image"),m=d("SvgIcon"),r=p("img");return g(),h("div",ca,[y("div",va,[f(v,{src:j(o),fit:"cover"},{error:w((()=>[y("img",{src:n.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,ma)])),_:1},8,["src"]),"RB"==e.item.showType?(g(),h("span",ra,I(l.$t("live.hotNow")),1)):L("",!0)]),y("div",ua,[y("div",da,[j(c)?(g(),O(m,{key:0,name:j(c)},null,8,["name"])):L("",!0),y("strong",null,I(e.item.leagueName),1)]),y("div",pa,[y("div",ga,[y("div",ha,[T(y("img",ya,null,512),[[r,e.item.homeLogo]]),y("span",null,I(e.item.homeTeam),1)]),y("div",fa,[y("span",null,I(j(i).sc_game_H||j(i).sc_FT_H),1)])]),y("div",ba,[y("div",Ia,[T(y("img",_a,null,512),[[r,e.item.awayLogo]]),y("span",null,I(e.item.awayTeam),1)]),y("div",ka,[y("span",null,I(j(i).sc_game_A||j(i).sc_FT_C||j(i).sc_FT_A),1)])])]),y("div",Ta,[y("div",wa,I(e.item.leagueShortName),1),y("div",ja,[y("img",{src:j(s),alt:""},null,8,Sa),y("span",null,I(a.item.watchTotal.toLocaleString()),1)])])])])}}});Na.__scopeId="data-v-d2d43fc2";const xa={class:"panel-more"};var Oa=c({emits:["more-video"],setup(e,{emit:a}){let l=0;const t=u([]),s=u(!1),n=u(!1),i=async()=>{l++;const e={page:l,pageSize:20,videoType:2},a=await U(e),i=a.data||{};200==a.code?(i.list.forEach((e=>{t.value.push(e)})),s.value=!1,n.value=t.value.length==i.total):n.value=!0};return r((()=>{i()})),(e,l)=>{const o=d("EmptyData"),c=d("van-list");return g(),h("div",xa,[n.value&&0===t.value.length?(g(),O(o,{key:0})):L("",!0),f(c,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=e=>s.value=e),finished:n.value,"immediate-check":!1,"finished-text":0==t.value.length?"":e.$t("live.noMore"),onLoad:i},{default:w((()=>[(g(!0),h(_,null,k(t.value,(e=>(g(),h("div",{class:"more-item",key:e.gidm},[f(Na,{item:e,onClick:l=>(e=>{a("more-video",e)})(e)},null,8,["item","onClick"])])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});Oa.__scopeId="data-v-683afc9a";const Ba={class:"team"},La={class:"team-header"},Fa={class:"league"},$a={class:"date"},Ea={class:"team-container"},Pa={class:"team-player host"},Ma={class:"img-num"},Ra={type:4,alt:""},Da={class:"team-score"},Ha=["innerHTML"],Ca={class:"team-player away"},Ka={class:"img-num"},Wa={type:5,alt:""};var Aa=c({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const a=e,l=ne(),t=v((()=>a.matchInfo)),s=v((()=>"BK"==t.value.gameType?Z+"FE/common/live/img_video_bg_BK.jpg":Z+"FE/common/live/img_video_bg_FT.jpg"));return(e,a)=>{const n=d("SvgIcon"),i=p("img");return g(),h("div",{class:"match-game",style:F({backgroundImage:"url("+j(s)+")"})},[y("div",Ba,[y("div",La,[y("div",Fa,[f(n,{name:"live-football"}),y("span",null,I(j(t).leagueName),1)]),y("div",$a,I(j(Q)(j(t).gameDate,"MM-DD HH:mm")),1)]),y("div",Ea,[y("div",Pa,[y("div",Ma,[T(y("img",Ra,null,512),[[i,j(t).homeLogo]]),y("span",null,I(j(l).getScore(j(t),"H")),1)]),y("strong",null,I(j(t).homeTeam),1)]),y("div",Da,[y("span",{class:"default",innerHTML:j(l).showRBTime(j(t))},null,8,Ha)]),y("div",Ca,[y("div",Ka,[y("span",null,I(j(l).getScore(j(t),"C")),1),T(y("img",Wa,null,512),[[i,j(t).awayLogo]])]),y("strong",null,I(j(t).awayTeam),1)])])])],4)}}});Aa.__scopeId="data-v-3a570eb6";const Ua={key:0,class:"match"},Va=["src"],za={class:"match-video"},Ga={key:0,class:"mask-loading"},Ja=(e=>(S("data-v-49b0d515"),e=e(),N(),e))((()=>y("div",{class:"icon"},null,-1))),qa={class:"text"},Xa={class:"tab-title"};var Ya=c({setup(e){const{t:a}=J(),l=$(),t=E(),s=P([{title:a("live.chatroom"),iconName:"live-chat"},{title:a("live.bet"),iconName:"live-bet"},{title:a("live.betWith"),iconName:"live-bet_add"},{title:a("live.more"),iconName:"live-grid"}]),n=u(0),i=[Te,je,oa,Oa],c=v((()=>q.state.app.showFixedBet)),m=u({}),p=async(e=l.params.id)=>{const a=(await V({gidm:e})).data||{};if(m.value=o({},a),a.detail&&a.detail.length>0){const{game:e}=a.detail[0],l=e.gameInfo||{};m.value.gameInfo=l}},b=u({});let S=null;const N=u(""),F=u(null),C=u(!1),K=u(!1),W=u(!1),A=()=>{const{streamNa:e}=b.value,{liveali:a}=e||{};F.value=(a||{}).m3u8;const s={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:F.value,type:"application/x-mpegURL"}]};x((()=>{S=H(N.value,s,(()=>{S.log("onPlayerReady");document.pictureInPictureElement&&S.exitPictureInPicture().then((()=>{S.log("画中画模式已关闭")}))})),S.on("waiting",(()=>{K.value=!0})),S.on("playing",(()=>{K.value=!1})),S.on("error",(()=>{C.value=!0,K.value=!1})),S.on("enterpictureinpicture",(()=>{W.value=!0,q.commit("app/SET_PIP_GIDM",l.params.id)})),S.on("leavepictureinpicture",(()=>{if(W.value=!1,"MatchDetail"!==l.name){const e=q.state.app.pictureinpictureGidm;t.push(`/match/${e}`)}}))}))},U=e=>{X(),C.value=!1,n.value=0,null==S||S.src(e.m3u8),null==S||S.load(),null==S||S.play(),t.replace(`/match/${e.gidm}`),p(e.gidm)};let G=null;const X=()=>{G&&(clearInterval(G),G=null)},Y=e=>{0==e?X():(X(),G=setInterval((()=>{p()}),5e3)),p()};return r((()=>{document.body.style.overflow="hidden",p(),(async()=>{const e=l.params.id,a=await z({gidm:e});200==a.code?(b.value=a.data,A()):(b.value=null,C.value=!0)})()})),M((()=>{document.body.removeAttribute("style"),X(),W.value||(S&&S.dispose(),S=null)})),(e,a)=>{var l,t;const o=d("SvgIcon"),v=d("van-tab"),r=d("van-tabs");return g(),h("div",{class:B(["live-page",{"has-bet":j(c)}])},[(null==(l=F.value)?void 0:l.endsWith("html"))?(g(),h("div",Ua,[y("iframe",{src:F.value,width:"100%",height:"100%",frameborder:"0"},null,8,Va)])):L("",!0),T(y("div",{class:B(["match",{"no-vid":C.value}])},[T(y("div",za,[y("video",{ref_key:"videoRef",ref:N,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512),K.value?(g(),h("div",Ga,[Ja,y("div",qa,I(e.$t("live.effLoading"))+"...",1)])):L("",!0)],512),[[R,!C.value]]),C.value?(g(),O(Aa,{key:0,matchInfo:m.value},null,8,["matchInfo"])):L("",!0)],2),[[R,!(null==(t=F.value)?void 0:t.endsWith("html"))]]),f(r,{active:n.value,"onUpdate:active":a[0]||(a[0]=e=>n.value=e),swipeable:"",shrink:"","line-height":"0",onChange:Y},{default:w((()=>[(g(!0),h(_,null,k(j(s),((e,a)=>(g(),O(v,null,{title:w((()=>[y("div",Xa,[f(o,{name:e.iconName},null,8,["name"]),y("span",null,I(e.title),1)])])),default:w((()=>[n.value==a?(g(),O(D(i[n.value]),{key:0,matchInfo:m.value,onMoreVideo:U},null,8,["matchInfo"])):L("",!0)])),_:2},1024)))),256))])),_:1},8,["active"])],2)}}});Ya.__scopeId="data-v-49b0d515";export{Ya as default};
