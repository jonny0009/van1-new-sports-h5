var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{s as i,I as o,E as n,u as r,L as c}from"./index.e7f1c6c6.js";import{s as m,b as u,d as v,w as d,j as p,a2 as g,U as h,a as y,o as f,R as _,P as w,W as E,$ as b,Y as T,Z as I,n as k,r as S,E as j,q as N,u as D,x as H,X as O,a7 as M,e as R,M as L,y as P,c as x,_ as B,F as C,S as F,O as U,a0 as K}from"./vue.5fe62a63.js";import{m as $,e as V}from"./index.b22f7c47.js";/* empty css                     */import{v as W}from"./video.es.7e2ade61.js";import{u as A}from"./useMatch.959ee4d2.js";import"./getScore.f17a5452.js";const G={class:"match-video"},q=["src"],X={key:2,class:"mask-loading"},Y=(e=>(T("data-v-3e9adb98"),e=e(),I(),e))((()=>w("div",{class:"icon"},null,-1))),Z={class:"text"};var z=m({props:{url:String},emits:["on-error"],setup(e,{emit:a}){const t=e,l=u((()=>i.state.match.turnSound)),s=v(""),o=v();d((()=>t.url),(e=>{S.value=!0,e?r(e):a("on-error","没有播放链接")})),p((()=>{window.addEventListener("message",n)}));const n=e=>{console.log(e,"监听frame消息====")},r=e=>{if(s.value="",e.indexOf(".html")>-1)return s.value=e,void D();T?(null==T||T.src(e),null==T||T.load(),null==T||T.play(),D()):N(e)},c=g(),m=h();let T=null;const I=v(""),S=v(!0),j=v(!1),N=e=>{const t={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:e,type:"application/x-mpegURL"}]};l.value?t.muted=!1:t.muted=!0,k((()=>{T=W(I.value,t,(()=>{T.log("onPlayerReady");document.pictureInPictureElement&&T.exitPictureInPicture().then((()=>{T.log("画中画模式已关闭")}))})),T.on("waiting",(()=>{console.log("waiting",(new Date).getTime())})),T.on("volumechange",(e=>{console.log("监听音量",e),l.value?i.commit("match/SET_TURN_SOUND",!0):i.commit("match/SET_TURN_SOUND",!1)})),T.on("playing",(()=>{console.log("playing",(new Date).getTime()),S.value=!1})),T.on("error",(e=>{S.value=!1,a("on-error",e)})),T.on("enterpictureinpicture",(()=>{j.value=!0,i.commit("match/SET_PIP_GIDM",c.params.id)})),T.on("leavepictureinpicture",(()=>{if(j.value=!1,"MatchDetail"!==c.name){const e=i.state.app.pictureinpictureGidm;m.push(`/match/${e}/bets`)}}))}))},D=()=>{k((()=>{S.value=!1}))},H=()=>{const e=o.value;console.log(e,"iframe 事件加载==="),e.contentWindow.addEventListener("volumechange",O)},O=()=>{console.log("音量发生变化")};return y((()=>{j.value||(T&&T.dispose(),T=null),window.removeEventListener("message",n)})),(e,a)=>(f(),_("div",G,[s.value&&!S.value?(f(),_("iframe",{key:0,ref_key:"videoFrame",ref:o,onLoad:H,src:s.value,style:{width:"100%",height:"100%"},frameborder:"0"},null,40,q)):(f(),_("video",{key:1,ref_key:"videoRef",ref:I,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512)),S.value?(f(),_("div",X,[Y,w("div",Z,E(e.$t("live.effLoading"))+"...",1)])):b("",!0)]))}});z.__scopeId="data-v-3e9adb98";const J={class:"team"},Q={class:"team-header"},ee={class:"league"},ae={class:"date"},te={class:"team-container"},le={class:"team-player host"},se={class:"img-num"},ie={type:4,alt:""},oe={class:"team-score"},ne=["innerHTML"],re={class:"team-player away"},ce={class:"img-num"},me={type:5,alt:""};var ue=m({setup(e){const a=A(),t=u((()=>i.state.match.matchInfo)),l=u((()=>"BK"==t.value.gameType?o+"FE/common/live/img_video_bg_BK.jpg":o+"FE/common/live/img_video_bg_FT.jpg"));return(e,s)=>{const i=S("SvgIcon"),o=j("img");return f(),_("div",{class:"match-game",style:O({backgroundImage:"url("+D(l)+")"})},[w("div",J,[w("div",Q,[w("div",ee,[N(i,{name:"live-football"}),w("span",null,E(D(t).leagueName),1)]),w("div",ae,E(D(n)(D(t).gameDate,"MM-DD HH:mm")),1)]),w("div",te,[w("div",le,[w("div",se,[H(w("img",ie,null,512),[[o,D(t).homeLogo]]),w("span",null,E(D(a).getScore(D(t),"H")),1)]),w("strong",null,E(D(t).homeTeam),1)]),w("div",oe,[w("span",{class:"default",innerHTML:D(a).showRBTime(D(t))},null,8,ne)]),w("div",re,[w("div",ce,[w("span",null,E(D(a).getScore(D(t),"C")),1),H(w("img",me,null,512),[[o,D(t).awayLogo]])]),w("strong",null,E(D(t).awayTeam),1)])])])],4)}}});ue.__scopeId="data-v-22864e70";const ve={class:"main"},de={class:"main-menu"},pe=["onClick"],ge={class:"label"},he={class:"main-view"},ye={class:"main-chat"};var fe=m({setup(e){const o=M((()=>c((()=>import("./ChatRoom.a75f7621.js")),["/assets/ChatRoom.a75f7621.js","/assets/ChatRoom.650d6c6a.css","/assets/websocket.e00dd56b.js","/assets/index.e7f1c6c6.js","/assets/index.82add4f8.css","/assets/vue.5fe62a63.js","/assets/index.b22f7c47.js"]))),n=(e,a)=>(e.type.name||(e.type.name=a.name),e),{t:m}=r(),p=g(),T=h(),I=u((()=>i.state.app.showFixedBet)),k=u((()=>p.params.id)),j=R([{title:m("live.bet"),iconName:"live-bet",path:"bets"},{title:m("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:m("live.dataBase"),iconName:"live-data",path:"data"},{title:m("live.more"),iconName:"live-grid",path:"other"}]),O=v({}),W=async()=>{const e=k.value,o=(await $({gidm:e})).data||{};if(O.value=((e,i)=>{for(var o in i||(i={}))t.call(i,o)&&s(e,o,i[o]);if(a)for(var o of a(i))l.call(i,o)&&s(e,o,i[o]);return e})({},o),o.detail&&o.detail.length>0){const{game:e}=o.detail[0],a=e.gameInfo||{};O.value.gameInfo=a}i.commit("match/SET_MATCH_INFO",O.value)},A=v(""),G=v(!1),q=async()=>{const e=k.value,a=await V({gidm:e});if(200===a.code){const{streamNa:e}=a.data||{},{liveali:t,live:l}=e||{};if(A.value=(t||l||{}).m3u8,!A.value)return A.value="",G.value=!0,void i.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"50.333vw"});G.value=!1,i.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"69vw"})}else A.value="",G.value=!0,i.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"50.333vw"})},X=()=>{G.value=!0,i.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"50.333vw"})},Y=v(!1);let Z=null;const J=()=>{Z&&(clearInterval(Z),Z=null,i.commit("match/SET_NEED_TIMER",!1))};return L((()=>{W(),q(),J(),Z=setInterval((()=>{W(),i.commit("match/SET_NEED_TIMER",!0)}),5e3)})),y((()=>{J(),i.commit("match/SET_NEED_TIMER",!1)})),d((()=>k.value),(()=>{W(),q()})),(e,a)=>{const t=S("SvgIcon"),l=S("router-view");return f(),_("div",{class:B(["detail",{"has-bet":D(I)}])},[w("div",{class:B(["match",{"no-video":G.value}])},[H(N(z,{url:A.value,onOnError:X},null,8,["url"]),[[P,!G.value]]),G.value?(f(),x(ue,{key:0})):b("",!0)],2),w("div",ve,[w("div",de,[(f(!0),_(C,null,F(D(j),((e,a)=>(f(),_("div",{key:a,class:B(["nav",{selected:D(p).path.endsWith(e.path)}]),onClick:a=>{return t=e.path,T.replace(`/match/${k.value}/${t}`),W(),void i.commit("match/SET_NEED_TIMER",!0);var t}},[N(t,{name:e.iconName},null,8,["name"]),w("span",ge,E(e.title),1)],10,pe)))),128))]),w("div",he,[N(l,null,{default:U((({Component:e,route:a})=>[(f(),x(K(n(e,a)),{key:"matchId"}))])),_:1})]),w("div",ye,[w("div",{class:"holder",onClick:a[0]||(a[0]=e=>Y.value=!0)},E(e.$t("live.clickOpenChat")),1)])]),N(D(o),{show:Y.value,"onUpdate:show":a[1]||(a[1]=e=>Y.value=e)},null,8,["show"])],2)}}});fe.__scopeId="data-v-b03cb610";export{fe as default};
