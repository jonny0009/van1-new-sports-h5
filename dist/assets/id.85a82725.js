var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,o=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&i(e,t,a[t]);return e};import{s as c,b as m,w as u,j as r,d as v,r as d,E as p,o as g,R as h,P as y,q as f,B as b,U as I,F as _,Z as k,x as w,O as T,u as j,X as S,Y as N,n as C,c as O,_ as x,a1 as B,V as L,a4 as M,W as $,e as P,a as F,y as E,$ as R}from"./vue.ffab6494.js";/* empty css                     */import{v as D}from"./video.es.6aab3f1b.js";import{i as H,l as K,b as V,c as A,r as U,m as W,e as z}from"./index.0b0dbe24.js";import{K as G,S as J,L as q,M as X,u as Y,s as Z,N as Q,O as ee,I as ae,P as te}from"./index.0a31d860.js";import{u as le,_ as se}from"./index.5335fa03.js";import{_ as ne,a as ie,b as oe}from"./live_white_r.4c6985c7.js";import{u as ce}from"./useMatch.c9eb0d1a.js";import{s as me,a as ue}from"./s_hot2.bba3cb3a.js";var re=new class{constructor(e){this.url=e,this.stompClient=null,this.headers={},this.subscribeMap={}}async connect(){const e=new J(this.url);return this.stompClient=q.over(e),this.stompClient.debug=null,new Promise(((e,a)=>{this.stompClient.connect(this.headers,(()=>{console.info("%csocket重连成功!","color:#00e800;"),e(this.stompClient)}),(async e=>{this.stompClient.disconnect(),this.stompClient=null,console.error(`socket断开连接=>${e}`),console.info("socket开始尝试重新连接...."),await X(3e3),await this.connect(),a(e)}))}))}async subscribe(e,a){return this.stompClient||await this.connect(),this.subscribeMap[e]={connected:this.stompClient.connected,callback:a,client:null,onconnect:null},this.stompClient.connected&&(this.subscribeMap[e].client=this.stompClient.subscribe(e,(e=>{a(e)}))),this.subscribeMap[e]}send(e,a,t={}){this.stompClient&&this.stompClient.send(e,t,a)}disconnect(){null!==this.stompClient&&this.stompClient.disconnect()}}(`${G}/chat/websocket`);const ve=e=>(S("data-v-0dfb52b0"),e=e(),N(),e),de={class:"chat"},pe={class:"item"},ge={class:"item-avatar"},he={class:"item-name"},ye=ve((()=>y("em",null,":",-1))),fe={class:"item-cont"},be={class:"item-avatar"},Ie={type:3},_e={class:"item-name"},ke=ve((()=>y("em",null,":",-1))),we={class:"item-cont"},Te={class:"chat-bottom"},je=ve((()=>y("button",{"native-type":"submit",hidden:""},null,-1))),Se={class:"action"};var Ne=c({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const a=e,{t:t}=Y(),l=m((()=>Z.state.user.userInfo)),s=m((()=>{const{isSend:e}=c.value;return 0==e||!M.value})),n=m((()=>{const{isSend:e}=c.value;return!Q()||0==e})),i=m((()=>{const{isSend:e,bettingTotal:a}=c.value;return Q()?0==e?t("live.needBet",{num:a}):t("live.chatTip")+"...":t("live.needLogin")})),o=m((()=>a.matchInfo));u((()=>o.value),(()=>{S()})),r((()=>{}));const c=v({}),S=async()=>{const e={gidm:o.value.gidm,systemId:o.value.systemId,anchorId:void 0,version:"3.9.0"},a=await H(e);200==a.code&&(c.value=a.data||{},N(),O())},N=async()=>{const{roomNo:e,channelType:a}=c.value,t={roomNo:e,page:1,pageSize:20,channelType:a},l=await K(t),s=(l.extra||{}).messageList||[];if(200==l.code){const e=[];s.forEach((a=>{if(a.msgType&&2==+a.msgType&&a.content){(JSON.parse(a.content||"").bettingData||[]).forEach((a=>{e.push(a.gidm)}))}})),L(s)}},O=async()=>{const{roomNo:e}=c.value,a=`/topic/1/${e}`;re.subscribe(a,(e=>{const a=JSON.parse(e.body);if(a&&1e3===a.action){const[e]=a.data;L(e)}}))},x=v(null),B=v([]),L=e=>{e instanceof Array?B.value=e.reverse().concat(B.value):B.value.push(e),(()=>{const e=x.value||{};C((()=>{e.scrollTop=e&&e.scrollHeight}))})()},M=v(),$=()=>{const e=M.value,{roomNo:a}=c.value,{playerId:t,teamId:s}=l.value,n={token:"1",msgType:"1",roomNo:a,content:e,playerId:t,teamId:s};re.send("/chat/sendMsg",JSON.stringify(n)),M.value=""},P=v(),F=()=>{P.value.$el.scrollIntoView()};return(e,a)=>{const t=d("SvgIcon"),l=d("van-field"),o=d("van-form"),c=d("van-button"),m=p("img");return g(),h("div",de,[y("div",{class:"chat-section",ref_key:"chatRef",ref:x},[y("div",pe,[y("div",ge,[f(t,{name:"bot"})]),y("div",he,[b(I(e.$t("live.aiBot")),1),ye]),y("div",fe,I(e.$t("live.chatSys")),1)]),(g(!0),h(_,null,k(B.value,(e=>(g(),h("div",{class:"item",key:e.msgId},[y("div",be,[w(y("img",Ie,null,512),[[m,e.headImg]])]),y("div",_e,[b(I(e.nickName),1),ke]),y("div",we,I(e.content),1)])))),128))],512),y("div",Te,[f(o,{onSubmit:$,"submit-on-enter":""},{default:T((()=>[f(l,{ref_key:"msgInputRef",ref:P,modelValue:M.value,"onUpdate:modelValue":a[0]||(a[0]=e=>M.value=e),autocomplete:"off",placeholder:j(i),disabled:j(n),maxlength:50,onFocus:F},null,8,["modelValue","placeholder","disabled"]),je])),_:1}),y("div",Se,[f(c,{onClick:$,disabled:j(s)},{default:T((()=>[b(I(e.$t("live.send")),1)])),_:1},8,["disabled"])])])])}}});Ne.__scopeId="data-v-0dfb52b0";const Ce={class:"panel-bet"};var Oe=c({props:{matchInfo:{type:Object,default:()=>{}},nav:[String,Number]},setup(e){const a=e,{getPlayGroupType:t}=le(),l=v([]),s=async()=>{l.value=await t(a.matchInfo)};return u((()=>a.matchInfo),(()=>{s()})),r((()=>{s()})),(e,t)=>{const s=d("EmptyData");return g(),h("div",Ce,[0===l.value.length?(g(),O(s,{key:0})):(g(),O(se,{key:1,"data-list":l.value,"match-info":a.matchInfo},null,8,["data-list","match-info"]))])}}});Oe.__scopeId="data-v-803e85ae";const xe=e=>(S("data-v-665fd292"),e=e(),N(),e),Be={class:"panel-with"},Le={class:"top-nav"},Me={class:"header"},$e={class:"avatar",type:3,alt:""},Pe={class:"title"},Fe={class:"right"},Ee={key:0,class:"state"},Re={class:"wrapper"},De={class:"summary"},He={class:"label"},Ke={class:"label-flex"},Ve={class:"label-flex"},Ae=xe((()=>y("i",{class:"iconfont icon-dianshi"},null,-1))),Ue=["innerHTML"],We={class:"team"},ze={class:"team-cell"},Ge={class:"palyer"},Je={src:ne,type:4,alt:""},qe={class:"score"},Xe={class:"team-cell"},Ye={class:"palyer"},Ze={src:ne,type:5,alt:""},Qe={class:"score"},ea={class:"ticket"},aa={class:"ticket-txt"},ta=xe((()=>y("div",{class:"icon"},[y("img",{src:ie,alt:""})],-1))),la={class:"info"},sa={class:"ticket-bet"},na={class:"betting"},ia={class:"betting-cell bt1"},oa={class:"betting-cell bt2"},ca={class:"footer"},ma={class:"button"},ua=xe((()=>y("img",{src:oe,alt:""},null,-1)));var ra=c({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const l=e,s=ce(),n=v(1),i=e=>{n.value=e,c.value=[],m.value=!0,S()},c=v([]),m=v(!1),S=async()=>{var e;const s=1==n.value?V:A,i={page:1,pageSize:50,gidm:null==(e=l.matchInfo)?void 0:e.gidm},u=await s(i);if(200==u.code){const e=u.data.map((e=>{const l=o({},e),s={gameType:l.gameType,playType:l.playType,session:l.session},n=new ee(l);return i=o({},l),a(i,t({playInfo:s,marketInfo:n}));var i}));c.value=e}m.value=!1};return u((()=>l.matchInfo),(()=>{var e;(null==(e=l.matchInfo)?void 0:e.gidm)&&S()})),r((()=>{S()})),(e,a)=>{const t=d("Loading"),o=d("EmptyData"),u=d("SvgIcon"),r=d("BettingOption"),v=p("img"),S=p("play");return g(),h("div",Be,[y("div",Le,[y("span",{class:x({active:1==n.value}),onClick:a[0]||(a[0]=e=>i(1))},I(e.$t("live.curMatch")),3),y("span",{class:x({active:2==n.value}),onClick:a[1]||(a[1]=e=>i(2))},I(e.$t("live.allBetWith")),3)]),m.value?(g(),O(t,{key:0})):0===c.value.length?(g(),O(o,{key:1})):(g(!0),h(_,{key:2},k(c.value,((a,t)=>(g(),h("div",{key:t,class:"item"},[y("div",Me,[w(y("img",$e,null,512),[[v,a.headImg]]),y("div",Pe,[y("strong",null,I(a.nikeName),1),y("span",null,"@"+I(a.nikeName),1)]),y("div",Fe,["RB"==l.matchInfo.showtype?(g(),h("span",Ee,I(e.$t("live.inprogress")),1)):B("",!0)])]),y("div",Re,[y("div",De,I(a.leagueName),1),y("div",He,[y("div",Ke,["FT"==a.gameType?(g(),O(u,{key:0,name:"live-football"})):B("",!0),"BK"==a.gameType?(g(),O(u,{key:1,name:"live-basketball"})):B("",!0),y("span",null,I(a.leagueShortName),1)]),y("div",Ve,[Ae,y("span",{innerHTML:j(s).showRBTime(l.matchInfo)},null,8,Ue)])]),y("div",We,[y("div",ze,[y("div",Ge,[w(y("img",Je,null,512),[[v,a.homeLogo]]),y("span",null,I(a.homeTeam),1)]),y("div",qe,[y("span",null,I(j(s).getScore(l.matchInfo,"H")||"-"),1)])]),y("div",Xe,[y("div",Ye,[w(y("img",Ze,null,512),[[v,a.awayLogo]]),y("span",null,I(a.awayTeam),1)]),y("div",Qe,[y("span",null,I(j(s).getScore(l.matchInfo,"C")||"-"),1)])])]),y("div",ea,[y("div",aa,[ta,y("div",la,[y("strong",null,I(a.betItem),1),w(y("span",null,null,512),[[S,a.playInfo]])])]),y("div",sa,[y("span",null,"@"+I(a.ior),1)])]),y("div",na,[y("div",ia,[y("strong",null,I(e.$t("live.betAmout"))+"：",1),y("span",null,[f(u,{name:"usdt"}),b(" "+I(a.golds),1)])]),y("div",oa,[y("strong",null,I(e.$t("live.betProfit"))+"：",1),y("span",null,[f(u,{name:"usdt"}),b(" "+I((a.golds*a.ior).toFixed(2)),1)])])]),y("div",ca,[f(r,{"market-info":a.marketInfo},{default:T((()=>[y("div",ma,[y("span",null,I(e.$t("live.betWith")),1),ua])])),_:2},1032,["market-info"])])])])))),128))])}}});ra.__scopeId="data-v-665fd292";const va={class:"item"},da={class:"photo"},pa=["src"],ga={key:0,class:"state"},ha={class:"main"},ya={class:"main-title"},fa={class:"main-team"},ba={class:"cell"},Ia={class:"head"},_a={type:4,alt:""},ka={class:"score"},wa={class:"cell"},Ta={class:"head"},ja={type:5,alt:""},Sa={class:"score"},Na={class:"main-desc"},Ca={class:"name"},Oa={class:"hots"},xa=["src"];var Ba=c({props:{item:{type:Object,default:()=>{}}},setup(e){const a=e,{t:t}=Y(),l=m((()=>Z.state.app.theme)),s=m((()=>"blue"==l.value?me:ue)),n=v(ae),i=m((()=>{var e;return null==(e=a.item)?void 0:e.gameInfo})),o=m((()=>{const e=a.item;return e.anchorId?ae+e.cover:"BK"==e.gameType?ae+"FE/common/live/img_video_bg_BK.jpg":ae+"FE/common/live/img_video_bg_FT.jpg"})),c=m((()=>{const e=a.item.watchTotal.toLocaleString();return"RB"==a.item.showType?t("live.xLooks",{num:e}):t("live.xReserve",{num:e})})),u=m((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[a.item.gameType])));return(a,t)=>{const l=d("van-image"),m=d("SvgIcon"),r=p("img");return g(),h("div",va,[y("div",da,[f(l,{src:j(o),fit:"cover"},{error:T((()=>[y("img",{src:n.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,pa)])),_:1},8,["src"]),"RB"==e.item.showType?(g(),h("span",ga,I(a.$t("live.hotNow")),1)):B("",!0)]),y("div",ha,[y("div",ya,[j(u)?(g(),O(m,{key:0,name:j(u)},null,8,["name"])):B("",!0),y("strong",null,I(e.item.leagueName),1)]),y("div",fa,[y("div",ba,[y("div",Ia,[w(y("img",_a,null,512),[[r,e.item.homeLogo]]),y("span",null,I(e.item.homeTeam),1)]),y("div",ka,[y("span",null,I(j(i).sc_game_H||j(i).sc_FT_H),1)])]),y("div",wa,[y("div",Ta,[w(y("img",ja,null,512),[[r,e.item.awayLogo]]),y("span",null,I(e.item.awayTeam),1)]),y("div",Sa,[y("span",null,I(j(i).sc_game_A||j(i).sc_FT_C||j(i).sc_FT_A),1)])])]),y("div",Na,[y("div",Ca,I(e.item.leagueShortName),1),y("div",Oa,[y("img",{src:j(s),alt:""},null,8,xa),y("span",null,I(j(c)),1)])])])])}}});Ba.__scopeId="data-v-dc4149cc";const La={class:"panel-more"};var Ma=c({emits:["more-video"],setup(e,{emit:a}){let t=0;const l=v([]),s=v(!1),n=v(!1),i=async()=>{t++;const e={page:t,pageSize:20,videoType:2},a=await U(e),i=a.data||{};200==a.code?(i.list.forEach((e=>{l.value.push(e)})),s.value=!1,n.value=l.value.length==i.total):n.value=!0};return r((()=>{i()})),(e,t)=>{const o=d("EmptyData"),c=d("van-list");return g(),h("div",La,[n.value&&0===l.value.length?(g(),O(o,{key:0})):B("",!0),f(c,{loading:s.value,"onUpdate:loading":t[0]||(t[0]=e=>s.value=e),finished:n.value,"immediate-check":!1,"finished-text":0==l.value.length?"":e.$t("live.noMore"),onLoad:i},{default:T((()=>[(g(!0),h(_,null,k(l.value,(e=>(g(),h("div",{class:"more-item",key:e.gidm},[f(Ba,{item:e,onClick:t=>(e=>{a("more-video",e)})(e)},null,8,["item","onClick"])])))),128))])),_:1},8,["loading","finished","finished-text"])])}}});Ma.__scopeId="data-v-683afc9a";const $a={class:"team"},Pa={class:"team-header"},Fa={class:"league"},Ea={class:"date"},Ra={class:"team-container"},Da={class:"team-player host"},Ha={class:"img-num"},Ka={type:4,alt:""},Va={class:"team-score"},Aa=["innerHTML"],Ua={class:"team-player away"},Wa={class:"img-num"},za={type:5,alt:""};var Ga=c({props:{matchInfo:{type:Object,default:()=>{}}},setup(e){const a=e,t=ce(),l=m((()=>a.matchInfo)),s=m((()=>"BK"==l.value.gameType?ae+"FE/common/live/img_video_bg_BK.jpg":ae+"FE/common/live/img_video_bg_FT.jpg"));return(e,a)=>{const n=d("SvgIcon"),i=p("img");return g(),h("div",{class:"match-game",style:L({backgroundImage:"url("+j(s)+")"})},[y("div",$a,[y("div",Pa,[y("div",Fa,[f(n,{name:"live-football"}),y("span",null,I(j(l).leagueName),1)]),y("div",Ea,I(j(te)(j(l).gameDate,"MM-DD HH:mm")),1)]),y("div",Ra,[y("div",Da,[y("div",Ha,[w(y("img",Ka,null,512),[[i,j(l).homeLogo]]),y("span",null,I(j(t).getScore(j(l),"H")),1)]),y("strong",null,I(j(l).homeTeam),1)]),y("div",Va,[y("span",{class:"default",innerHTML:j(t).showRBTime(j(l))},null,8,Aa)]),y("div",Ua,[y("div",Wa,[y("span",null,I(j(t).getScore(j(l),"C")),1),w(y("img",za,null,512),[[i,j(l).awayLogo]])]),y("strong",null,I(j(l).awayTeam),1)])])])],4)}}});Ga.__scopeId="data-v-3a570eb6";const Ja={class:"match-video"},qa={key:0,class:"mask-loading"},Xa=(e=>(S("data-v-36d90e6d"),e=e(),N(),e))((()=>y("div",{class:"icon"},null,-1))),Ya={class:"text"},Za={class:"tab-title"};var Qa=c({setup(e){const{t:a}=Y(),t=M(),l=$(),s=P([{title:a("live.chatroom"),iconName:"live-chat"},{title:a("live.bet"),iconName:"live-bet"},{title:a("live.betWith"),iconName:"live-bet_add"},{title:a("live.more"),iconName:"live-grid"}]),n=v(0),i=[Ne,Oe,ra,Ma],c=m((()=>Z.state.app.showFixedBet)),u=v({}),p=async(e=t.params.id)=>{const a=(await W({gidm:e})).data||{};if(u.value=o({},a),a.detail&&a.detail.length>0){const{game:e}=a.detail[0],t=e.gameInfo||{};u.value.gameInfo=t}},b=v({});let S=null;const N=v(""),L=v(null),H=v(!1),K=v(!1),V=v(!1),A=()=>{const{streamNa:e}=b.value,{liveali:a}=e||{};L.value=(a||{}).m3u8;const s={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:L.value,type:"application/x-mpegURL"}]};C((()=>{S=D(N.value,s,(()=>{S.log("onPlayerReady");document.pictureInPictureElement&&S.exitPictureInPicture().then((()=>{S.log("画中画模式已关闭")}))})),S.on("waiting",(()=>{K.value=!0})),S.on("playing",(()=>{K.value=!1})),S.on("error",(()=>{H.value=!0,K.value=!1})),S.on("enterpictureinpicture",(()=>{V.value=!0,Z.commit("app/SET_PIP_GIDM",t.params.id)})),S.on("leavepictureinpicture",(()=>{if(V.value=!1,"MatchDetail"!==t.name){const e=Z.state.app.pictureinpictureGidm;l.push(`/match/${e}`)}}))}))},U=e=>{J(),H.value=!1,n.value=0,null==S||S.src(e.m3u8),null==S||S.load(),null==S||S.play(),l.replace(`/match/${e.gidm}`),p(e.gidm)};let G=null;const J=()=>{G&&(clearInterval(G),G=null)},q=e=>{0==e?J():(J(),G=setInterval((()=>{p()}),5e3)),p()};return r((()=>{document.body.style.overflow="hidden",p(),(async()=>{const e=t.params.id,a=await z({gidm:e});200==a.code?(b.value=a.data,A()):(b.value=null,H.value=!0)})()})),F((()=>{document.body.removeAttribute("style"),J(),V.value||(S&&S.dispose(),S=null)})),(e,a)=>{const t=d("SvgIcon"),l=d("van-tab"),o=d("van-tabs");return g(),h("div",{class:x(["live-page",{"has-bet":j(c)}])},[y("div",{class:x(["match",{"no-vid":H.value}])},[w(y("div",Ja,[y("video",{ref_key:"videoRef",ref:N,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512),K.value?(g(),h("div",qa,[Xa,y("div",Ya,I(e.$t("live.effLoading"))+"...",1)])):B("",!0)],512),[[E,!H.value]]),H.value?(g(),O(Ga,{key:0,matchInfo:u.value},null,8,["matchInfo"])):B("",!0)],2),f(o,{active:n.value,"onUpdate:active":a[0]||(a[0]=e=>n.value=e),swipeable:"",shrink:"","line-height":"0",onChange:q},{default:T((()=>[(g(!0),h(_,null,k(j(s),((e,a)=>(g(),O(l,null,{title:T((()=>[y("div",Za,[f(t,{name:e.iconName},null,8,["name"]),y("span",null,I(e.title),1)])])),default:T((()=>[n.value==a?(g(),O(R(i[n.value]),{key:0,matchInfo:u.value,onMoreVideo:U},null,8,["matchInfo"])):B("",!0)])),_:2},1024)))),256))])),_:1},8,["active"])],2)}}});Qa.__scopeId="data-v-36d90e6d";export{Qa as default};
