var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{s as o,I as i,$ as n,u as c,a6 as r}from"./index.faa5a252.js";import{s as m,b as u,d as v,w as d,j as p,a2 as g,R as h,a as y,o as _,S as f,P as E,V as w,$ as b,X as T,Y as I,n as S,r as k,E as j,q as N,u as D,x as O,W as M,a7 as R,e as P,M as x,y as L,c as C,Z as B,F,_ as $,O as H,a0 as U}from"./vue.144c3097.js";import{m as W,e as A}from"./index.60d06217.js";/* empty css                     */import{v as G}from"./video.es.e15816c3.js";import{u as K}from"./useMatch.6deca334.js";const V={class:"match-video"},q=["src"],X={key:2,class:"mask-loading"},Y=(e=>(T("data-v-3e9adb98"),e=e(),I(),e))((()=>E("div",{class:"icon"},null,-1))),Z={class:"text"};var z=m({props:{url:String},emits:["on-error"],setup(e,{emit:a}){const t=e,l=u((()=>o.state.match.turnSound)),s=v(""),i=v();d((()=>t.url),(e=>{k.value=!0,e?c(e):a("on-error","没有播放链接")})),p((()=>{window.addEventListener("message",n)}));const n=e=>{console.log(e,"监听frame消息====")},c=e=>{if(s.value="",e.indexOf(".html")>-1)return s.value=e,void D();T?(null==T||T.src(e),null==T||T.load(),null==T||T.play(),D()):N(e)},r=g(),m=h();let T=null;const I=v(""),k=v(!0),j=v(!1),N=e=>{const t={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:e,type:"application/x-mpegURL"}]};l.value?t.muted=!1:t.muted=!0,S((()=>{T=G(I.value,t,(()=>{T.log("onPlayerReady");document.pictureInPictureElement&&T.exitPictureInPicture().then((()=>{T.log("画中画模式已关闭")}))})),T.on("waiting",(()=>{console.log("waiting",(new Date).getTime())})),T.on("volumechange",(e=>{console.log("监听音量",e),l.value?o.commit("match/SET_TURN_SOUND",!0):o.commit("match/SET_TURN_SOUND",!1)})),T.on("playing",(()=>{console.log("playing",(new Date).getTime()),k.value=!1})),T.on("error",(e=>{k.value=!1,a("on-error",e)})),T.on("enterpictureinpicture",(()=>{j.value=!0,o.commit("match/SET_PIP_GIDM",r.params.id)})),T.on("leavepictureinpicture",(()=>{if(j.value=!1,"MatchDetail"!==r.name){const e=o.state.app.pictureinpictureGidm;m.push(`/match/${e}/bets`)}}))}))},D=()=>{S((()=>{k.value=!1}))},O=()=>{const e=i.value;console.log(e,"iframe 事件加载==="),e.contentWindow.addEventListener("volumechange",M)},M=()=>{console.log("音量发生变化")};return y((()=>{j.value||(T&&T.dispose(),T=null),window.removeEventListener("message",n)})),(e,a)=>(_(),f("div",V,[s.value&&!k.value?(_(),f("iframe",{key:0,ref_key:"videoFrame",ref:i,onLoad:O,src:s.value,style:{width:"100%",height:"100%"},frameborder:"0"},null,40,q)):(_(),f("video",{key:1,ref_key:"videoRef",ref:I,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512)),k.value?(_(),f("div",X,[Y,E("div",Z,w(e.$t("live.effLoading"))+"...",1)])):b("",!0)]))}});z.__scopeId="data-v-3e9adb98";const J={class:"team"},Q={class:"team-header"},ee={class:"league"},ae={class:"date"},te={class:"team-container"},le={class:"team-player host"},se={class:"img-num"},oe={type:4,alt:""},ie={class:"team-score"},ne=["innerHTML"],ce={class:"team-player away"},re={class:"img-num"},me={type:5,alt:""};var ue=m({setup(e){const a=K(),t=u((()=>o.state.match.matchInfo)),l=u((()=>"BK"==t.value.gameType?i+"FE/common/live/img_video_bg_BK.jpg":i+"FE/common/live/img_video_bg_FT.jpg"));return(e,s)=>{const o=k("SvgIcon"),i=j("img");return _(),f("div",{class:"match-game",style:M({backgroundImage:"url("+D(l)+")"})},[E("div",J,[E("div",Q,[E("div",ee,[N(o,{name:"live-football"}),E("span",null,w(D(t).leagueName),1)]),E("div",ae,w(D(n)(D(t).gameDate,"MM-DD HH:mm")),1)]),E("div",te,[E("div",le,[E("div",se,[O(E("img",oe,null,512),[[i,D(t).homeLogo]]),E("span",null,w(D(a).getScore(D(t),"H")),1)]),E("strong",null,w(D(t).homeTeam),1)]),E("div",ie,[E("span",{class:"default",innerHTML:D(a).showRBTime(D(t))},null,8,ne)]),E("div",ce,[E("div",re,[E("span",null,w(D(a).getScore(D(t),"C")),1),O(E("img",me,null,512),[[i,D(t).awayLogo]])]),E("strong",null,w(D(t).awayTeam),1)])])])],4)}}});ue.__scopeId="data-v-22864e70";const ve={class:"main"},de={class:"main-menu"},pe=["onClick"],ge={class:"label"},he={class:"main-view"},ye={class:"main-chat"};var _e=m({setup(e){const i=R((()=>r((()=>import("./ChatRoom.410e9404.js")),["/assets/ChatRoom.410e9404.js","/assets/ChatRoom.cb919336.css","/assets/websocket.f7333119.js","/assets/index.faa5a252.js","/assets/index.a8428acd.css","/assets/vue.144c3097.js","/assets/index.60d06217.js"]))),n=(e,a)=>(e.type.name||(e.type.name=a.name),e),{t:m}=c(),p=g(),T=h(),I=u((()=>o.state.app.showFixedBet)),S=u((()=>p.params.id)),j=P([{title:m("live.bet"),iconName:"live-bet",path:"bets"},{title:m("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:m("live.dataBase"),iconName:"live-data",path:"data"},{title:m("live.more"),iconName:"live-grid",path:"other"}]),M=v({}),G=async()=>{const e=S.value,i=(await W({gidm:e})).data||{};if(M.value=((e,o)=>{for(var i in o||(o={}))t.call(o,i)&&s(e,i,o[i]);if(a)for(var i of a(o))l.call(o,i)&&s(e,i,o[i]);return e})({},i),i.detail&&i.detail.length>0){const{game:e}=i.detail[0],a=e.gameInfo||{};M.value.gameInfo=a}o.commit("match/SET_MATCH_INFO",M.value)},K=v(""),V=v(!1),q=async()=>{const e=S.value,a=await A({gidm:e});if(200===a.code){const{streamNa:e}=a.data||{},{liveali:t}=e||{};K.value=(t||{}).m3u8,V.value=!1}else K.value="",V.value=!0},X=()=>{V.value=!0},Y=v(!1);let Z=null;const J=()=>{Z&&(clearInterval(Z),Z=null,o.commit("match/SET_NEED_TIMER",!1))};return x((()=>{G(),q(),J(),Z=setInterval((()=>{G(),o.commit("match/SET_NEED_TIMER",!0)}),5e3)})),y((()=>{J(),o.commit("match/SET_NEED_TIMER",!1)})),d((()=>S.value),(()=>{G(),q()})),(e,a)=>{const t=k("SvgIcon"),l=k("router-view");return _(),f("div",{class:B(["detail",{"has-bet":D(I)}])},[E("div",{class:B(["match",{"no-video":V.value}])},[O(N(z,{url:K.value,onOnError:X},null,8,["url"]),[[L,!V.value]]),V.value?(_(),C(ue,{key:0})):b("",!0)],2),E("div",ve,[E("div",de,[(_(!0),f(F,null,$(D(j),((e,a)=>(_(),f("div",{key:a,class:B(["nav",{selected:D(p).path.endsWith(e.path)}]),onClick:a=>{return t=e.path,T.replace(`/match/${S.value}/${t}`),G(),void o.commit("match/SET_NEED_TIMER",!0);var t}},[N(t,{name:e.iconName},null,8,["name"]),E("span",ge,w(e.title),1)],10,pe)))),128))]),E("div",he,[N(l,null,{default:H((({Component:e,route:a})=>[(_(),C(U(n(e,a)),{key:"matchId"}))])),_:1})]),E("div",ye,[E("div",{class:"holder",onClick:a[0]||(a[0]=e=>Y.value=!0)},w(e.$t("live.clickOpenChat")),1)])]),N(D(i),{show:Y.value,"onUpdate:show":a[1]||(a[1]=e=>Y.value=e)},null,8,["show"])],2)}}});_e.__scopeId="data-v-4d8e9657";export{_e as default};
