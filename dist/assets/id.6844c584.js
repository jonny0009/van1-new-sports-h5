import{s as e,b as a,w as l,j as t,d as s,r as n,E as i,o,R as c,P as m,q as v,B as d,W as u,F as r,S as p,x as g,O as h,u as f,Y as y,Z as b,n as I,c as _,_ as k,$ as T,X as w,a2 as S,U as N,e as j,a as x,y as B,a0 as L}from"./vue.c62eea93.js";/* empty css                     */import{v as F}from"./video.es.ade653fa.js";import{i as $,l as M,b as E,c as R,r as H,m as O,e as P}from"./index.79c97083.js";import{w as D}from"./websocket.294f53a5.js";import{u as C,s as K,F as W,M as A,I as U,G as V}from"./index.a6ff837a.js";import{u as G,_ as z}from"./index.f6abafea.js";import{_ as J,a as q,b as X}from"./live_white_r.4c6985c7.js";import{u as Y}from"./useMatch.22ccb917.js";import{s as Z,a as Q}from"./s_hot2.bba3cb3a.js";const ee=e=>(y("data-v-0dfb52b0"),e=e(),b(),e),ae={class:"chat"},le={class:"item"},te={class:"item-avatar"},se={class:"item-name"},ne=ee((()=>m("em",null,":",-1))),ie={class:"item-cont"},oe={class:"item-avatar"},ce={type:3},me={class:"item-name"},ve=ee((()=>m("em",null,":",-1))),de={class:"item-cont"},ue={class:"chat-bottom"},re=ee((()=>m("button",{"native-type":"submit",hidden:""},null,-1))),pe={class:"action"};var ge=e({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const y=e,{t:b}=C(),_=a((()=>K.state.user.userInfo)),k=a((()=>{const{isSend:e}=N.value;return 0==e||!R.value})),T=a((()=>{const{isSend:e}=N.value;return!W()||0==e})),w=a((()=>{const{isSend:e,bettingTotal:a}=N.value;return W()?0==e?b("live.needBet",{num:a}):b("live.chatTip")+"...":b("live.needLogin")})),S=a((()=>y.matchInfo));l((()=>S.value),(()=>{j()})),t((()=>{}));const N=s({}),j=async()=>{const e={gidm:S.value.gidm,systemId:S.value.systemId,anchorId:void 0,version:"3.9.0"},a=await $(e);200==a.code&&(N.value=a.data||{},x(),B())},x=async()=>{const{roomNo:e,channelType:a}=N.value,l={roomNo:e,page:1,pageSize:20,channelType:a},t=await M(l),s=(t.extra||{}).messageList||[];if(200==t.code){const e=[];s.forEach((a=>{if(a.msgType&&2==+a.msgType&&a.content){(JSON.parse(a.content||"").bettingData||[]).forEach((a=>{e.push(a.gidm)}))}})),E(s)}},B=async()=>{const{roomNo:e}=N.value,a=`/topic/1/${e}`;D.subscribe(a,(e=>{const a=JSON.parse(e.body);if(a&&1e3===a.action){const[e]=a.data;E(e)}}))},L=s(null),F=s([]),E=e=>{e instanceof Array?F.value=e.reverse().concat(F.value):F.value.push(e),(()=>{const e=L.value||{};I((()=>{e.scrollTop=e&&e.scrollHeight}))})()},R=s(),H=()=>{const e=R.value,{roomNo:a}=N.value,{playerId:l,teamId:t}=_.value,s={token:"1",msgType:"1",roomNo:a,content:e,playerId:l,teamId:t};D.send("/chat/sendMsg",JSON.stringify(s)),R.value=""},O=s(),P=()=>{O.value.$el.scrollIntoView()};return(e,a)=>{const l=n("SvgIcon"),t=n("van-field"),s=n("van-form"),y=n("van-button"),b=i("img");return o(),c("div",ae,[m("div",{class:"chat-section",ref_key:"chatRef",ref:L},[m("div",le,[m("div",te,[v(l,{name:"bot"})]),m("div",se,[d(u(e.$t("live.aiBot")),1),ne]),m("div",ie,u(e.$t("live.chatSys")),1)]),(o(!0),c(r,null,p(F.value,(e=>(o(),c("div",{class:"item",key:e.msgId},[m("div",oe,[g(m("img",ce,null,512),[[b,e.headImg]])]),m("div",me,[d(u(e.nickName),1),ve]),m("div",de,u(e.content),1)])))),128))],512),m("div",ue,[v(s,{onSubmit:H,"submit-on-enter":""},{default:h((()=>[v(t,{ref_key:"msgInputRef",ref:O,modelValue:R.value,"onUpdate:modelValue":a[0]||(a[0]=e=>R.value=e),autocomplete:"off",placeholder:f(w),disabled:f(T),maxlength:50,onFocus:P},null,8,["modelValue","placeholder","disabled"]),re])),_:1}),m("div",pe,[v(y,{onClick:H,disabled:f(k)},{default:h((()=>[d(u(e.$t("live.send")),1)])),_:1},8,["disabled"])])])])}}});ge.__scopeId="data-v-0dfb52b0";const he={class:"panel-bet"};var fe=e({props:{matchInfo:{type:Object,default:()=>{}},nav:[String,Number]},setup(e){const a=e,{getPlayGroupType:i}=G(),m=s([]),v=async()=>{m.value=await i(a.matchInfo)};return l((()=>a.matchInfo),(()=>{v()})),t((()=>{v()})),(e,l)=>{const t=n("EmptyData");return o(),c("div",he,[0===m.value.length?(o(),_(t,{key:0})):(o(),_(z,{key:1,"data-list":m.value,"match-info":a.matchInfo},null,8,["data-list","match-info"]))])}}});fe.__scopeId="data-v-803e85ae";const ye=e=>(y("data-v-665fd292"),e=e(),b(),e),be={class:"panel-with"},Ie={class:"top-nav"},_e={class:"header"},ke={class:"avatar",type:3,alt:""},Te={class:"title"},we={class:"right"},Se={key:0,class:"state"},Ne={class:"wrapper"},je={class:"summary"},xe={class:"label"},Be={class:"label-flex"},Le={class:"label-flex"},Fe=ye((()=>m("i",{class:"iconfont icon-dianshi"},null,-1))),$e=["innerHTML"],Me={class:"team"},Ee={class:"team-cell"},Re={class:"palyer"},He={src:J,type:4,alt:""},Oe={class:"score"},Pe={class:"team-cell"},De={class:"palyer"},Ce={src:J,type:5,alt:""},Ke={class:"score"},We={class:"ticket"},Ae={class:"ticket-txt"},Ue=ye((()=>m("div",{class:"icon"},[m("img",{src:q,alt:""})],-1))),Ve={class:"info"},Ge={class:"ticket-bet"},ze={class:"betting"},Je={class:"betting-cell bt1"},qe={class:"betting-cell bt2"},Xe={class:"footer"},Ye={class:"button"},Ze=ye((()=>m("img",{src:X,alt:""},null,-1)));var Qe=e({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const a=e,y=Y(),b=s(1),I=e=>{b.value=e,w.value=[],S.value=!0,N()},w=s([]),S=s(!1),N=async()=>{const e=1==b.value?E:R,l={page:1,pageSize:50,gidm:a.matchInfo?.gidm},t=await e(l);if(200==t.code){const e=t.data.map((e=>{const a={...e},l={gameType:a.gameType,playType:a.playType,session:a.session},t=new A(a);return{...a,playInfo:l,marketInfo:t}}));w.value=e}S.value=!1};return l((()=>a.matchInfo),(()=>{a.matchInfo?.gidm&&N()})),t((()=>{N()})),(e,l)=>{const t=n("Loading"),s=n("EmptyData"),N=n("SvgIcon"),j=n("BettingOption"),x=i("img"),B=i("play");return o(),c("div",be,[m("div",Ie,[m("span",{class:k({active:1==b.value}),onClick:l[0]||(l[0]=e=>I(1))},u(e.$t("live.curMatch")),3),m("span",{class:k({active:2==b.value}),onClick:l[1]||(l[1]=e=>I(2))},u(e.$t("live.allBetWith")),3)]),S.value?(o(),_(t,{key:0})):0===w.value.length?(o(),_(s,{key:1})):(o(!0),c(r,{key:2},p(w.value,((l,t)=>(o(),c("div",{key:t,class:"item"},[m("div",_e,[g(m("img",ke,null,512),[[x,l.headImg]]),m("div",Te,[m("strong",null,u(l.nikeName),1),m("span",null,"@"+u(l.nikeName),1)]),m("div",we,["RB"==a.matchInfo.showtype?(o(),c("span",Se,u(e.$t("live.inprogress")),1)):T("",!0)])]),m("div",Ne,[m("div",je,u(l.leagueName),1),m("div",xe,[m("div",Be,["FT"==l.gameType?(o(),_(N,{key:0,name:"live-football"})):T("",!0),"BK"==l.gameType?(o(),_(N,{key:1,name:"live-basketball"})):T("",!0),m("span",null,u(l.leagueShortName),1)]),m("div",Le,[Fe,m("span",{innerHTML:f(y).showRBTime(a.matchInfo)},null,8,$e)])]),m("div",Me,[m("div",Ee,[m("div",Re,[g(m("img",He,null,512),[[x,l.homeLogo]]),m("span",null,u(l.homeTeam),1)]),m("div",Oe,[m("span",null,u(f(y).getScore(a.matchInfo,"H")||"-"),1)])]),m("div",Pe,[m("div",De,[g(m("img",Ce,null,512),[[x,l.awayLogo]]),m("span",null,u(l.awayTeam),1)]),m("div",Ke,[m("span",null,u(f(y).getScore(a.matchInfo,"C")||"-"),1)])])]),m("div",We,[m("div",Ae,[Ue,m("div",Ve,[m("strong",null,u(l.betItem),1),g(m("span",null,null,512),[[B,l.playInfo]])])]),m("div",Ge,[m("span",null,"@"+u(l.ior),1)])]),m("div",ze,[m("div",Je,[m("strong",null,u(e.$t("live.betAmout"))+"：",1),m("span",null,[v(N,{name:"usdt"}),d(" "+u(l.golds),1)])]),m("div",qe,[m("strong",null,u(e.$t("live.betProfit"))+"：",1),m("span",null,[v(N,{name:"usdt"}),d(" "+u((l.golds*l.ior).toFixed(2)),1)])])]),m("div",Xe,[v(j,{"market-info":l.marketInfo},{default:h((()=>[m("div",Ye,[m("span",null,u(e.$t("live.betWith")),1),Ze])])),_:2},1032,["market-info"])])])])))),128))])}}});Qe.__scopeId="data-v-665fd292";const ea={class:"item"},aa={class:"photo"},la=["src"],ta={key:0,class:"state"},sa={class:"main"},na={class:"main-title"},ia={class:"main-team"},oa={class:"cell"},ca={class:"head"},ma={type:4,alt:""},va={class:"score"},da={class:"cell"},ua={class:"head"},ra={type:5,alt:""},pa={class:"score"},ga={class:"main-desc"},ha={class:"name"},fa={class:"hots"},ya=["src"];var ba=e({props:{item:{type:Object,default:()=>{}}},setup(e){const l=e,{t:t}=C(),d=a((()=>K.state.app.theme)),r=a((()=>"blue"==d.value?Z:Q)),p=s(U),y=a((()=>l.item?.gameInfo)),b=a((()=>{const e=l.item;return e.anchorId?U+e.cover:"BK"==e.gameType?U+"FE/common/live/img_video_bg_BK.jpg":U+"FE/common/live/img_video_bg_FT.jpg"}));a((()=>{const e=l.item.watchTotal.toLocaleString();return"RB"==l.item.showType?t("live.xLooks",{num:e}):t("live.xReserve",{num:e})}));const I=a((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[l.item.gameType])));return(a,t)=>{const s=n("van-image"),d=n("SvgIcon"),k=i("img");return o(),c("div",ea,[m("div",aa,[v(s,{src:f(b),fit:"cover"},{error:h((()=>[m("img",{src:p.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,la)])),_:1},8,["src"]),"RB"==e.item.showType?(o(),c("span",ta,u(a.$t("live.hotNow")),1)):T("",!0)]),m("div",sa,[m("div",na,[f(I)?(o(),_(d,{key:0,name:f(I)},null,8,["name"])):T("",!0),m("strong",null,u(e.item.leagueName),1)]),m("div",ia,[m("div",oa,[m("div",ca,[g(m("img",ma,null,512),[[k,e.item.homeLogo]]),m("span",null,u(e.item.homeTeam),1)]),m("div",va,[m("span",null,u(f(y).sc_game_H||f(y).sc_FT_H),1)])]),m("div",da,[m("div",ua,[g(m("img",ra,null,512),[[k,e.item.awayLogo]]),m("span",null,u(e.item.awayTeam),1)]),m("div",pa,[m("span",null,u(f(y).sc_game_A||f(y).sc_FT_C||f(y).sc_FT_A),1)])])]),m("div",ga,[m("div",ha,u(e.item.leagueShortName),1),m("div",fa,[m("img",{src:f(r),alt:""},null,8,ya),m("span",null,u(l.item.watchTotal.toLocaleString()),1)])])])])}}});ba.__scopeId="data-v-d2d43fc2";const Ia={class:"panel-more"};var _a=e({emits:["more-video"],setup(e,{emit:a}){let l=0;const i=s([]),m=s(!1),d=s(!1),u=async()=>{l++;const e={page:l,pageSize:20,videoType:""},a=await H(e),t=a.data||{};200==a.code?(t.list.forEach((e=>{i.value.push(e)})),m.value=!1,d.value=i.value.length==t.total):d.value=!0};return t((()=>{u()})),(e,l)=>{const t=n("EmptyData"),s=n("van-list");return o(),c("div",Ia,[d.value&&0===i.value.length?(o(),_(t,{key:0})):T("",!0),v(s,{loading:m.value,"onUpdate:loading":l[0]||(l[0]=e=>m.value=e),finished:d.value,"immediate-check":!1,"finished-text":0==i.value.length?"":e.$t("live.noMore"),onLoad:u},{default:h((()=>[(o(!0),c(r,null,p(i.value,(e=>(o(),c("div",{class:"more-item",key:e.gidm},[v(ba,{item:e,onClick:l=>(e=>{a("more-video",e)})(e)},null,8,["item","onClick"])])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});_a.__scopeId="data-v-eb407252";const ka={class:"team"},Ta={class:"team-header"},wa={class:"league"},Sa={class:"date"},Na={class:"team-container"},ja={class:"team-player host"},xa={class:"img-num"},Ba={type:4,alt:""},La={class:"team-score"},Fa=["innerHTML"],$a={class:"team-player away"},Ma={class:"img-num"},Ea={type:5,alt:""};var Ra=e({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const l=e,t=Y(),s=a((()=>l.matchInfo)),d=a((()=>"BK"==s.value.gameType?U+"FE/common/live/img_video_bg_BK.jpg":U+"FE/common/live/img_video_bg_FT.jpg"));return(e,a)=>{const l=n("SvgIcon"),r=i("img");return o(),c("div",{class:"match-game",style:w({backgroundImage:"url("+f(d)+")"})},[m("div",ka,[m("div",Ta,[m("div",wa,[v(l,{name:"live-football"}),m("span",null,u(f(s).leagueName),1)]),m("div",Sa,u(f(V)(f(s).gameDate,"MM-DD HH:mm")),1)]),m("div",Na,[m("div",ja,[m("div",xa,[g(m("img",Ba,null,512),[[r,f(s).homeLogo]]),m("span",null,u(f(t).getScore(f(s),"H")),1)]),m("strong",null,u(f(s).homeTeam),1)]),m("div",La,[m("span",{class:"default",innerHTML:f(t).showRBTime(f(s))},null,8,Fa)]),m("div",$a,[m("div",Ma,[m("span",null,u(f(t).getScore(f(s),"C")),1),g(m("img",Ea,null,512),[[r,f(s).awayLogo]])]),m("strong",null,u(f(s).awayTeam),1)])])])],4)}}});Ra.__scopeId="data-v-3a570eb6";const Ha={key:0,class:"match"},Oa=["src"],Pa={class:"match-video"},Da={key:0,class:"mask-loading"},Ca=(e=>(y("data-v-49b0d515"),e=e(),b(),e))((()=>m("div",{class:"icon"},null,-1))),Ka={class:"text"},Wa={class:"tab-title"};var Aa=e({setup(e){const{t:l}=C(),i=S(),d=N(),y=j([{title:l("live.chatroom"),iconName:"live-chat"},{title:l("live.bet"),iconName:"live-bet"},{title:l("live.betWith"),iconName:"live-bet_add"},{title:l("live.more"),iconName:"live-grid"}]),b=s(0),w=[ge,fe,Qe,_a],$=a((()=>K.state.app.showFixedBet)),M=s({}),E=async(e=i.params.id)=>{const a=(await O({gidm:e})).data||{};if(M.value={...a},a.detail&&a.detail.length>0){const{game:e}=a.detail[0],l=e.gameInfo||{};M.value.gameInfo=l}},R=s({});let H=null;const D=s(""),W=s(null),A=s(!1),U=s(!1),V=s(!1),G=()=>{const{streamNa:e}=R.value,{liveali:a}=e||{};W.value=(a||{}).m3u8;const l={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:W.value,type:"application/x-mpegURL"}]};I((()=>{H=F(D.value,l,(()=>{H.log("onPlayerReady");document.pictureInPictureElement&&H.exitPictureInPicture().then((()=>{H.log("画中画模式已关闭")}))})),H.on("waiting",(()=>{U.value=!0})),H.on("playing",(()=>{U.value=!1})),H.on("error",(()=>{A.value=!0,U.value=!1})),H.on("enterpictureinpicture",(()=>{V.value=!0,K.commit("app/SET_PIP_GIDM",i.params.id)})),H.on("leavepictureinpicture",(()=>{if(V.value=!1,"MatchDetail"!==i.name){const e=K.state.app.pictureinpictureGidm;d.push(`/match/${e}`)}}))}))},z=e=>{q(),A.value=!1,b.value=0,H?.src(e.m3u8),H?.load(),H?.play(),d.replace(`/match/${e.gidm}`),E(e.gidm)};let J=null;const q=()=>{J&&(clearInterval(J),J=null)},X=e=>{0==e?q():(q(),J=setInterval((()=>{E()}),5e3)),E()};return t((()=>{document.body.style.overflow="hidden",E(),(async()=>{const e=i.params.id,a=await P({gidm:e});200==a.code?(R.value=a.data,G()):(R.value=null,A.value=!0)})()})),x((()=>{document.body.removeAttribute("style"),q(),V.value||(H&&H.dispose(),H=null)})),(e,a)=>{const l=n("SvgIcon"),t=n("van-tab"),s=n("van-tabs");return o(),c("div",{class:k(["live-page",{"has-bet":f($)}])},[W.value?.endsWith("html")?(o(),c("div",Ha,[m("iframe",{src:W.value,width:"100%",height:"100%",frameborder:"0"},null,8,Oa)])):T("",!0),g(m("div",{class:k(["match",{"no-vid":A.value}])},[g(m("div",Pa,[m("video",{ref_key:"videoRef",ref:D,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512),U.value?(o(),c("div",Da,[Ca,m("div",Ka,u(e.$t("live.effLoading"))+"...",1)])):T("",!0)],512),[[B,!A.value]]),A.value?(o(),_(Ra,{key:0,matchInfo:M.value},null,8,["matchInfo"])):T("",!0)],2),[[B,!W.value?.endsWith("html")]]),v(s,{active:b.value,"onUpdate:active":a[0]||(a[0]=e=>b.value=e),swipeable:"",shrink:"","line-height":"0",onChange:X},{default:h((()=>[(o(!0),c(r,null,p(f(y),((e,a)=>(o(),_(t,null,{title:h((()=>[m("div",Wa,[v(l,{name:e.iconName},null,8,["name"]),m("span",null,u(e.title),1)])])),default:h((()=>[b.value==a?(o(),_(L(w[b.value]),{key:0,matchInfo:M.value,onMoreVideo:z},null,8,["matchInfo"])):T("",!0)])),_:2},1024)))),256))])),_:1},8,["active"])],2)}}});Aa.__scopeId="data-v-49b0d515";export{Aa as default};
