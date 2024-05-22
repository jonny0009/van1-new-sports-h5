import{s as e,I as a,G as t,u as l,z as s}from"./index.ad85d0bb.js";import{s as i,b as n,d as o,w as c,j as r,a2 as m,U as u,a as v,o as d,R as p,P as h,W as g,$ as y,Y as f,Z as _,n as E,r as w,E as T,q as I,u as k,x as S,X as b,a6 as D,e as N,M as H,y as M,c as R,_ as j,F as x,S as L,O as B,a0 as O}from"./vue.c62eea93.js";import{m as P,e as C}from"./index.f05cf4bf.js";/* empty css                     */import{v as U}from"./video.es.5f3ea895.js";import{u as $}from"./useMatch.4e21cd21.js";import"./getScore.e77e91f2.js";const F={class:"match-video"},V=["src"],G={key:2,class:"mask-loading"},K=(e=>(f("data-v-3395c364"),e=e(),_(),e))((()=>h("div",{class:"icon"},null,-1))),W={class:"text"};var A=i({props:{url:String},emits:["on-error"],setup(a,{emit:t}){const l=a,s=n((()=>e.state.match.turnSound)),i=o(""),f=o();c((()=>l.url),(e=>{b.value=!0,e?w(e):t("on-error","没有播放链接")})),r((()=>{window.addEventListener("message",_)}));const _=e=>{console.log(e,"监听frame消息====")},w=e=>{if(i.value="",e.indexOf(".html")>-1)return i.value=e,void H();k?(k?.src(e),k?.load(),k?.play(),H()):N(e)},T=m(),I=u();let k=null;const S=o(""),b=o(!0),D=o(!1),N=a=>{const l={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:a,type:"application/x-mpegURL"}]};s.value?l.muted=!1:l.muted=!0,E((()=>{k=U(S.value,l,(()=>{k.log("onPlayerReady");document.pictureInPictureElement&&k.exitPictureInPicture().then((()=>{k.log("画中画模式已关闭")}))})),k.on("waiting",(()=>{console.log("waiting",(new Date).getTime())})),k.on("volumechange",(a=>{console.log("监听音量",a),s.value?e.commit("match/SET_TURN_SOUND",!0):e.commit("match/SET_TURN_SOUND",!1)})),k.on("playing",(()=>{console.log("playing",(new Date).getTime()),b.value=!1})),k.on("error",(e=>{b.value=!1,t("on-error",e)})),k.on("enterpictureinpicture",(()=>{D.value=!0,e.commit("match/SET_PIP_GIDM",T.params.id)})),k.on("leavepictureinpicture",(()=>{if(D.value=!1,"MatchDetail"!==T.name){const a=e.state.app.pictureinpictureGidm;I.push(`/match/${a}/bets`)}}))}))},H=()=>{E((()=>{b.value=!1}))},M=()=>{const e=f.value;console.log(e,"iframe 事件加载==="),e.contentWindow.addEventListener("volumechange",R)},R=()=>{console.log("音量发生变化")};return v((()=>{D.value||(k&&k.dispose(),k=null),window.removeEventListener("message",_)})),(e,a)=>(d(),p("div",F,[i.value&&!b.value?(d(),p("iframe",{key:0,ref_key:"videoFrame",ref:f,src:i.value,style:{width:"100%",height:"100%"},frameborder:"0",onLoad:M},null,40,V)):(d(),p("video",{key:1,ref_key:"videoRef",ref:S,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512)),b.value?(d(),p("div",G,[K,h("div",W,g(e.$t("live.effLoading"))+"...",1)])):y("",!0)]))}});A.__scopeId="data-v-3395c364";const q={class:"team"},z={class:"team-header"},X={class:"league"},Y={class:"date"},Z={class:"team-container"},J={class:"team-player host"},Q={class:"img-num"},ee={type:4,alt:""},ae={class:"team-score"},te=["innerHTML"],le={class:"team-player away"},se={class:"img-num"},ie={type:5,alt:""};var ne=i({setup(l){const s=$(),i=n((()=>e.state.match.matchInfo)),o=n((()=>{const e=i.value.gameType||"FT";return a+`FE/common/live/VIDEO_BG_${e}_mask.jpg`}));return(e,a)=>{const l=w("SvgIcon"),n=T("img");return d(),p("div",{class:"match-game",style:b({backgroundImage:"url("+k(o)+")"})},[h("div",q,[h("div",z,[h("div",X,[I(l,{name:"live-football"}),h("span",null,g(k(i).leagueName),1)]),h("div",Y,g(k(t)(k(i).gameDate,"MM-DD HH:mm")),1)]),h("div",Z,[h("div",J,[h("div",Q,[S(h("img",ee,null,512),[[n,k(i).homeLogo]]),h("span",null,g(k(s).getScore(k(i),"H")),1)]),h("strong",null,g(k(i).homeTeam),1)]),h("div",ae,[h("span",{class:"default",innerHTML:k(s).showRBTime(k(i))},null,8,te)]),h("div",le,[h("div",se,[h("span",null,g(k(s).getScore(k(i),"C")),1),S(h("img",ie,null,512),[[n,k(i).awayLogo]])]),h("strong",null,g(k(i).awayTeam),1)])])])],4)}}});ne.__scopeId="data-v-5c6838ee";const oe={class:"main"},ce={class:"main-menu"},re=["onClick"],me={class:"label"},ue={class:"main-view"},ve={class:"main-chat"};var de=i({setup(a){const t=D((()=>s((()=>import("./ChatRoom.dc2d03ea.js")),["/assets/ChatRoom.dc2d03ea.js","/assets/ChatRoom.650d6c6a.css","/assets/websocket.46be6427.js","/assets/index.ad85d0bb.js","/assets/index.c3d8967c.css","/assets/vue.c62eea93.js","/assets/index.f05cf4bf.js"]))),i=(e,a)=>(e.type.name||(e.type.name=a.name),e),{t:r}=l(),f=m(),_=u(),E=n((()=>e.state.app.showFixedBet)),T=n((()=>f.params.id)),b=N([{title:r("live.bet"),iconName:"live-bet",path:"bets"},{title:r("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:r("live.dataBase"),iconName:"live-data",path:"data"},{title:r("live.more"),iconName:"live-grid",path:"other"}]),U=o({}),$=async()=>{const a=T.value,t=(await P({gidm:a})).data||{};if(U.value={...t},t.detail&&t.detail.length>0){const{game:e}=t.detail[0],a=e.gameInfo||{};U.value.gameInfo=a}e.commit("match/SET_MATCH_INFO",U.value)},F=o(""),V=o(!1),G=async()=>{const a=T.value,t=await C({gidm:a});if(200===t.code){const{streamNa:a}=t.data||{},{liveali:l,live:s}=a||{};if(F.value=(l||s||{}).m3u8,!F.value)return F.value="",V.value=!0,void e.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"50.333vw"});V.value=!1,e.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"69vw"})}else F.value="",V.value=!0,e.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"50.333vw"})},K=()=>{V.value=!0,e.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"50.333vw"})},W=o(!1);let q=null;const z=()=>{q&&(clearInterval(q),q=null,e.commit("match/SET_NEED_TIMER",!1))};return H((()=>{$(),G(),z(),q=setInterval((()=>{$(),e.commit("match/SET_NEED_TIMER",!0)}),5e3)})),v((()=>{z(),e.commit("match/SET_NEED_TIMER",!1)})),c((()=>T.value),(()=>{$(),G()})),(a,l)=>{const s=w("SvgIcon"),n=w("router-view");return d(),p("div",{class:j(["detail",{"has-bet":k(E)}])},[h("div",{class:j(["match",{"no-video":V.value}])},[S(I(A,{url:F.value,onOnError:K},null,8,["url"]),[[M,!V.value]]),V.value?(d(),R(ne,{key:0})):y("",!0)],2),h("div",oe,[h("div",ce,[(d(!0),p(x,null,L(k(b),((a,t)=>(d(),p("div",{key:t,class:j(["nav",{selected:k(f).path.endsWith(a.path)}]),onClick:t=>{return l=a.path,_.replace(`/match/${T.value}/${l}`),$(),void e.commit("match/SET_NEED_TIMER",!0);var l}},[I(s,{name:a.iconName},null,8,["name"]),h("span",me,g(a.title),1)],10,re)))),128))]),h("div",ue,[I(n,null,{default:B((({Component:e,route:a})=>[(d(),R(O(i(e,a)),{key:"matchId"}))])),_:1})]),h("div",ve,[h("div",{class:"holder",onClick:l[0]||(l[0]=e=>W.value=!0)},g(a.$t("live.clickOpenChat")),1)])]),I(k(t),{show:W.value,"onUpdate:show":l[1]||(l[1]=e=>W.value=e)},null,8,["show"])],2)}}});de.__scopeId="data-v-b03cb610";export{de as default};
