var a=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;import{s as i,I as n,O as o,u as c,W as r}from"./index.923c93e1.js";import{s as m,w as u,a4 as v,W as d,d as p,a as h,o as g,R as y,P as f,U as _,a1 as b,X as I,Y as w,n as E,b as j,r as k,E as T,q as O,u as M,x as N,V as P,a6 as S,e as x,M as D,y as R,c as C,_ as L,F as B,Z as F,O as H,$}from"./vue.ffab6494.js";import{m as W,e as U}from"./index.99b11e18.js";/* empty css                     */import{v as A}from"./video.es.ffd8e483.js";import{u as G}from"./useMatch.74373223.js";const K={class:"match-video"},V={key:0,class:"mask-loading"},q=(a=>(I("data-v-4298aec0"),a=a(),w(),a))((()=>f("div",{class:"icon"},null,-1))),X={class:"text"};var Y=m({props:{url:String},emits:["on-error"],setup(a,{emit:e}){const t=a;u((()=>t.url),(a=>{l(a)}));const l=a=>{o?(null==o||o.src(a),null==o||o.load(),null==o||o.play()):I(a)},s=v(),n=d();let o=null;const c=p(""),r=p(!1),m=p(!1),I=a=>{const t={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,loadingSpinner:!1,errorDisplay:!1,sources:[{src:a,type:"application/x-mpegURL"}]};E((()=>{o=A(c.value,t,(()=>{o.log("onPlayerReady");document.pictureInPictureElement&&o.exitPictureInPicture().then((()=>{o.log("画中画模式已关闭")}))})),o.on("waiting",(()=>{r.value=!0})),o.on("playing",(()=>{r.value=!1})),o.on("error",(a=>{r.value=!1,e("on-error",a)})),o.on("enterpictureinpicture",(()=>{m.value=!0,i.commit("match/SET_PIP_GIDM",s.params.id)})),o.on("leavepictureinpicture",(()=>{if(m.value=!1,"MatchDetail"!==s.name){const a=i.state.app.pictureinpictureGidm;n.push(`/match/${a}/bets`)}}))}))};return h((()=>{m.value||(o&&o.dispose(),o=null)})),(a,e)=>(g(),y("div",K,[f("video",{ref_key:"videoRef",ref:c,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512),r.value?(g(),y("div",V,[q,f("div",X,_(a.$t("live.effLoading"))+"...",1)])):b("",!0)]))}});Y.__scopeId="data-v-4298aec0";const Z={class:"team"},z={class:"team-header"},J={class:"league"},Q={class:"date"},aa={class:"team-container"},ea={class:"team-player host"},ta={class:"img-num"},la={type:4,alt:""},sa={class:"team-score"},ia=["innerHTML"],na={class:"team-player away"},oa={class:"img-num"},ca={type:5,alt:""};var ra=m({setup(a){const e=G(),t=j((()=>i.state.match.matchInfo)),l=j((()=>"BK"==t.value.gameType?n+"FE/common/live/img_video_bg_BK.jpg":n+"FE/common/live/img_video_bg_FT.jpg"));return(a,s)=>{const i=k("SvgIcon"),n=T("img");return g(),y("div",{class:"match-game",style:P({backgroundImage:"url("+M(l)+")"})},[f("div",Z,[f("div",z,[f("div",J,[O(i,{name:"live-football"}),f("span",null,_(M(t).leagueName),1)]),f("div",Q,_(M(o)(M(t).gameDate,"MM-DD HH:mm")),1)]),f("div",aa,[f("div",ea,[f("div",ta,[N(f("img",la,null,512),[[n,M(t).homeLogo]]),f("span",null,_(M(e).getScore(M(t),"H")),1)]),f("strong",null,_(M(t).homeTeam),1)]),f("div",sa,[f("span",{class:"default",innerHTML:M(e).showRBTime(M(t))},null,8,ia)]),f("div",na,[f("div",oa,[f("span",null,_(M(e).getScore(M(t),"C")),1),N(f("img",ca,null,512),[[n,M(t).awayLogo]])]),f("strong",null,_(M(t).awayTeam),1)])])])],4)}}});ra.__scopeId="data-v-22864e70";const ma={class:"main"},ua={class:"main-menu"},va=["onClick"],da={class:"label"},pa={class:"main-view"},ha={class:"main-chat"};var ga=m({setup(a){const n=S((()=>r((()=>import("./ChatRoom.56f057fd.js")),["/assets/ChatRoom.56f057fd.js","/assets/ChatRoom.f7ac25eb.css","/assets/websocket.01d685d2.js","/assets/index.923c93e1.js","/assets/index.e3175c6a.css","/assets/vue.ffab6494.js","/assets/index.99b11e18.js"]))),o=(a,e)=>(a.type.name||(a.type.name=e.name),a),{t:m}=c(),I=v(),w=d(),E=j((()=>i.state.app.showFixedBet)),T=j((()=>I.params.id)),P=x([{title:m("live.bet"),iconName:"live-bet",path:"bets"},{title:m("live.betWith"),iconName:"live-combined",path:"with"},{title:m("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:m("live.dataBase"),iconName:"live-data",path:"data"},{title:m("live.more"),iconName:"live-grid",path:"other"}]),A=p({}),G=async()=>{const a=T.value,n=(await W({gidm:a})).data||{};if(A.value=((a,i)=>{for(var n in i||(i={}))t.call(i,n)&&s(a,n,i[n]);if(e)for(var n of e(i))l.call(i,n)&&s(a,n,i[n]);return a})({},n),n.detail&&n.detail.length>0){const{game:a}=n.detail[0],e=a.gameInfo||{};A.value.gameInfo=e}i.commit("match/SET_MATCH_INFO",A.value)},K=p(""),V=p(!1),q=async()=>{const a=T.value,e=await U({gidm:a});if(200==e.code){const{streamNa:a}=e.data||{},{liveali:t}=a||{};K.value=(t||{}).m3u8,V.value=!1}else K.value="",V.value=!0},X=()=>{V.value=!0},Z=p(!1);let z=null;const J=()=>{z&&(clearInterval(z),z=null,i.commit("match/SET_NEED_TIMER",!1))};return D((()=>{G(),q(),J(),z=setInterval((()=>{G(),i.commit("match/SET_NEED_TIMER",!0)}),5e3)})),h((()=>{J()})),u((()=>T.value),(()=>{G(),q()})),(a,e)=>{const t=k("SvgIcon"),l=k("router-view");return g(),y("div",{class:L(["detail",{"has-bet":M(E)}])},[f("div",{class:L(["match",{"no-video":V.value}])},[N(O(Y,{url:K.value,onOnError:X},null,8,["url"]),[[R,!V.value]]),V.value?(g(),C(ra,{key:0})):b("",!0)],2),f("div",ma,[f("div",ua,[(g(!0),y(B,null,F(M(P),((a,e)=>(g(),y("div",{class:L(["nav",{selected:M(I).path.endsWith(a.path)}]),key:e,onClick:e=>{return t=a.path,void w.replace(`/match/${T.value}/${t}`);var t}},[O(t,{name:a.iconName},null,8,["name"]),f("span",da,_(a.title),1)],10,va)))),128))]),f("div",pa,[O(l,null,{default:H((({Component:a,route:e})=>[(g(),C($(o(a,e)),{key:e.key}))])),_:1})]),f("div",ha,[f("div",{class:"holder",onClick:e[0]||(e[0]=a=>Z.value=!0)},_(a.$t("live.clickOpenChat")),1)])]),O(M(n),{show:Z.value,"onUpdate:show":e[1]||(e[1]=a=>Z.value=a)},null,8,["show"])],2)}}});ga.__scopeId="data-v-008059e6";export{ga as default};
