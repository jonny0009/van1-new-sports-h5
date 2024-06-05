import{s as e,I as a,G as t,u as l,z as s}from"./index.a6ff837a.js";import{s as i,b as n,d as o,w as u,j as c,a2 as r,U as m,n as v,a as d,o as p,R as h,P as g,W as y,$ as _,Y as f,Z as E,r as w,E as I,q as T,u as k,x as S,X as N,a6 as D,e as H,M as R,y as b,c as L,_ as M,F as j,S as x,O as B,a0 as O}from"./vue.c62eea93.js";import{m as P,e as $}from"./index.79c97083.js";/* empty css                     */import{v as C}from"./video.es.ade653fa.js";import{u as U}from"./useMatch.22ccb917.js";const V={class:"match-video"},q=["src"],F={key:2,class:"mask-loading"},G=(e=>(f("data-v-47e6ee2d"),e=e(),E(),e))((()=>g("div",{class:"icon"},null,-1))),K={class:"text"};var A=i({props:{url:String},emits:["on-error"],setup(a,{emit:t}){const l=a,s=n((()=>e.state.match.turnSound)),i=o(""),f=o();u((()=>l.url),(e=>{N.value=!0,e?w(e):t("on-error","没有播放链接")})),c((()=>{window.addEventListener("message",E),!k&&l.url&&w(l.url)}));const E=e=>{console.log(e,"监听frame消息====")},w=a=>{if(e.commit("match/SET_LIVE_ROOM_PLAYING_URL",a),i.value="",a.indexOf(".html")>-1)return i.value=a,void R();k?(k?.src(a),k?.load(),k?.play(),R()):H(a)},I=r(),T=m();let k=null;const S=o(""),N=o(!0),D=o(!1),H=a=>{const l={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!0,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:a,type:"application/x-mpegURL"}]};s.value?l.muted=!1:l.muted=!0,v((()=>{k=C(S.value,l,(()=>{k.log("onPlayerReady");document.pictureInPictureElement&&k.exitPictureInPicture().then((()=>{k.log("画中画模式已关闭")}))})),k.on("waiting",(()=>{console.log("waiting",(new Date).getTime()),N.value=!0})),k.on("volumechange",(a=>{console.log("监听音量",a),s.value?e.commit("match/SET_TURN_SOUND",!0):e.commit("match/SET_TURN_SOUND",!1)})),k.on("playing",(()=>{console.log("playing",(new Date).getTime()),N.value=!1})),k.on("error",(e=>{N.value=!1,t("on-error",e)})),k.on("enterpictureinpicture",(()=>{D.value=!0,e.commit("match/SET_PIP_GIDM",I.params.id)})),k.on("leavepictureinpicture",(()=>{if(D.value=!1,"MatchDetail"!==I.name){const a=e.state.app.pictureinpictureGidm;T.push(`/match/${a}/bets`)}}))}))},R=()=>{v((()=>{N.value=!1}))},b=()=>{const e=f.value;console.log(e,"iframe 事件加载==="),e.contentWindow.addEventListener("volumechange",L)},L=()=>{console.log("音量发生变化")};return d((()=>{D.value||(k&&k.dispose(),k=null),window.removeEventListener("message",E)})),(e,a)=>(p(),h("div",V,[i.value&&!N.value?(p(),h("iframe",{key:0,ref_key:"videoFrame",ref:f,src:i.value,style:{width:"100%",height:"100%"},frameborder:"0",onLoad:b},null,40,q)):(p(),h("video",{key:1,ref_key:"videoRef",ref:S,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512)),N.value?(p(),h("div",F,[G,g("div",K,y(e.$t("live.effLoading"))+"...",1)])):_("",!0)]))}});A.__scopeId="data-v-47e6ee2d";const W={class:"team"},Y={class:"team-header"},z={class:"league"},X={class:"date"},Z={class:"team-container"},J={class:"team-player host"},Q={class:"img-num"},ee={type:4,alt:""},ae={class:"team-score"},te=["innerHTML"],le={class:"team-player away"},se={class:"img-num"},ie={type:5,alt:""};var ne=i({setup(l){const s=U(),i=n((()=>e.state.match.matchInfo)),o=n((()=>{const e=i.value.gameType||"FT";return a+`FE/common/live/VIDEO_BG_${e}_mask.jpg`}));return(e,a)=>{const l=w("SvgIcon"),n=I("img");return p(),h("div",{class:"match-game",style:N({backgroundImage:"url("+k(o)+")"})},[g("div",W,[g("div",Y,[g("div",z,[T(l,{name:"live-football"}),g("span",null,y(k(i).leagueName),1)]),g("div",X,y(k(t)(k(i).gameDate,"MM-DD HH:mm")),1)]),g("div",Z,[g("div",J,[g("div",Q,[S(g("img",ee,null,512),[[n,k(i).homeLogo]]),g("span",null,y(k(s).getScore(k(i),"H")),1)]),g("strong",null,y(k(i).homeTeam),1)]),g("div",ae,[g("span",{class:"default",innerHTML:k(s).showRBTime(k(i))},null,8,te)]),g("div",le,[g("div",se,[g("span",null,y(k(s).getScore(k(i),"C")),1),S(g("img",ie,null,512),[[n,k(i).awayLogo]])]),g("strong",null,y(k(i).awayTeam),1)])])])],4)}}});ne.__scopeId="data-v-5c6838ee";const oe={class:"main"},ue={class:"main-menu"},ce=["onClick"],re={class:"label"},me={class:"main-view"},ve={class:"main-chat"};var de=i({setup(a){const t=D((()=>s((()=>import("./ChatRoom.691a4100.js")),["/assets/ChatRoom.691a4100.js","/assets/ChatRoom.617cc508.css","/assets/websocket.294f53a5.js","/assets/index.a6ff837a.js","/assets/index.54fa8041.css","/assets/vue.c62eea93.js","/assets/index.79c97083.js"]))),i=(e,a)=>(e.type.name||(e.type.name=a.name),e),{t:c}=l(),v=r(),f=m(),E=n((()=>e.state.app.showFixedBet)),I=n((()=>v.params.id)),N=H([{title:c("live.bet"),iconName:"live-bet",path:"bets"},{title:c("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:c("live.dataBase"),iconName:"live-data",path:"data"},{title:c("live.more"),iconName:"live-grid",path:"other"}]),C=o({}),U=async()=>{const a=I.value,t=(await P({gidm:a})).data||{};if(C.value={...t},t.detail&&t.detail.length>0){const{game:e}=t.detail[0],a=e.gameInfo||{};C.value.gameInfo=a}e.commit("match/SET_MATCH_INFO",C.value)},V=o(""),q=o(!1),F=async()=>{const a=I.value,t=await $({gidm:a});if(200===t.code){const{streamNa:a}=t.data||{},{liveali:l,live:s}=a||{};if(V.value=(l||s||{}).m3u8,!V.value)return V.value="",q.value=!0,void e.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"50.333vw"});q.value=!1,e.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"69vw"})}else V.value="",q.value=!0,e.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"50.333vw"})},G=()=>{q.value=!0,e.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"50.333vw"})},K=o(!1);let W=null;const Y=()=>{W&&(clearInterval(W),W=null,e.commit("match/SET_NEED_TIMER",!1))};return R((()=>{e.dispatch("app/setKeyValue",{key:"liveBarHeaderHeight",value:"69vw"}),U(),v.query?.m3u8?V.value=`${v.query.m3u8}`:F(),Y(),W=setInterval((()=>{U(),e.commit("match/SET_NEED_TIMER",!0)}),5e3)})),d((()=>{Y(),e.commit("match/SET_NEED_TIMER",!1)})),u((()=>I.value),(()=>{U(),v.query?.m3u8?V.value=`${v.query.m3u8}`:F()})),u((()=>v.query.m3u8),(e=>{e&&(V.value=`${e}`)})),(a,l)=>{const s=w("SvgIcon"),n=w("router-view");return p(),h("div",{class:M(["detail",{"has-bet":k(E)}])},[g("div",{class:M(["match",{"no-video":q.value}])},[S(T(A,{url:V.value,onOnError:G},null,8,["url"]),[[b,!q.value]]),q.value?(p(),L(ne,{key:0})):_("",!0)],2),g("div",oe,[g("div",ue,[(p(!0),h(j,null,x(k(N),((a,t)=>(p(),h("div",{key:t,class:M(["nav",{selected:k(v).path.endsWith(a.path)}]),onClick:t=>{return l=a.path,f.replace(`/match/${I.value}/${l}`),U(),void e.commit("match/SET_NEED_TIMER",!0);var l}},[T(s,{name:a.iconName},null,8,["name"]),g("span",re,y(a.title),1)],10,ce)))),128))]),g("div",me,[T(n,null,{default:B((({Component:e,route:a})=>[(p(),L(O(i(e,a)),{key:"matchId"}))])),_:1})]),g("div",ve,[g("div",{class:"holder",onClick:l[0]||(l[0]=e=>K.value=!0)},y(a.$t("live.clickOpenChat")),1)])]),T(k(t),{show:K.value,"onUpdate:show":l[1]||(l[1]=e=>K.value=e)},null,8,["show"])],2)}}});de.__scopeId="data-v-51414273";export{de as default};
