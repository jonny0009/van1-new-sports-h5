var a=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;import{s as i,I as n,N as o,u as r,U as c}from"./index.6528ade7.js";import{s as m,w as u,a4 as v,W as d,d as p,a as g,o as h,R as y,P as f,U as b,a1 as _,X as w,Y as I,n as j,b as k,r as P,E as T,q as x,u as E,x as N,V as O,a6 as M,e as S,M as C,y as D,c as L,_ as R,F,Z as H,O as $,$ as B}from"./vue.ffab6494.js";import{m as U,e as W}from"./index.d26b6715.js";/* empty css                     */import{v as A}from"./video.es.2f9ca504.js";import{u as G}from"./useMatch.7eeb4b5b.js";const K={class:"match-video"},V={key:0,class:"mask-loading"},q=(a=>(w("data-v-2bac5d29"),a=a(),I(),a))((()=>f("div",{class:"icon"},null,-1))),X={class:"text"};var Y=m({props:{url:String},emits:["on-error"],setup(a,{emit:e}){const t=a;u((()=>t.url),(a=>{l(a)}));const l=a=>{o?(null==o||o.src(a),null==o||o.load(),null==o||o.play()):w(a)},s=v(),n=d();let o=null;const r=p(""),c=p(!1),m=p(!1),w=a=>{const t={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,loadingSpinner:!1,errorDisplay:!1,sources:[{src:a,type:"application/x-mpegURL"}]};j((()=>{o=A(r.value,t,(()=>{o.log("onPlayerReady");document.pictureInPictureElement&&o.exitPictureInPicture().then((()=>{o.log("画中画模式已关闭")}))})),o.on("waiting",(()=>{c.value=!0})),o.on("playing",(()=>{c.value=!1})),o.on("error",(a=>{c.value=!1,e("on-error",a)})),o.on("enterpictureinpicture",(()=>{m.value=!0,i.commit("match/SET_PIP_GIDM",s.params.id)})),o.on("leavepictureinpicture",(()=>{if(m.value=!1,"MatchDetail"!==s.name){const a=i.state.app.pictureinpictureGidm;n.push(`/match/${a}/bets`)}}))}))};return g((()=>{m.value||(o&&o.dispose(),o=null)})),(a,e)=>(h(),y("div",K,[f("video",{ref_key:"videoRef",ref:r,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512),c.value?(h(),y("div",V,[q,f("div",X,b(a.$t("live.effLoading"))+"...",1)])):_("",!0)]))}});Y.__scopeId="data-v-2bac5d29";const Z={class:"team"},z={class:"team-header"},J={class:"league"},Q={class:"date"},aa={class:"team-container"},ea={class:"team-player host"},ta={class:"img-num"},la={type:4,alt:""},sa={class:"team-score"},ia=["innerHTML"],na={class:"team-player away"},oa={class:"img-num"},ra={type:5,alt:""};var ca=m({setup(a){const e=G(),t=k((()=>i.state.match.matchInfo)),l=k((()=>"BK"==t.value.gameType?n+"FE/common/live/img_video_bg_BK.jpg":n+"FE/common/live/img_video_bg_FT.jpg"));return(a,s)=>{const i=P("SvgIcon"),n=T("img");return h(),y("div",{class:"match-game",style:O({backgroundImage:"url("+E(l)+")"})},[f("div",Z,[f("div",z,[f("div",J,[x(i,{name:"live-football"}),f("span",null,b(E(t).leagueName),1)]),f("div",Q,b(E(o)(E(t).gameDate,"MM-DD HH:mm")),1)]),f("div",aa,[f("div",ea,[f("div",ta,[N(f("img",la,null,512),[[n,E(t).homeLogo]]),f("span",null,b(E(e).getScore(E(t),"H")),1)]),f("strong",null,b(E(t).homeTeam),1)]),f("div",sa,[f("span",{class:"default",innerHTML:E(e).showRBTime(E(t))},null,8,ia)]),f("div",na,[f("div",oa,[f("span",null,b(E(e).getScore(E(t),"C")),1),N(f("img",ra,null,512),[[n,E(t).awayLogo]])]),f("strong",null,b(E(t).awayTeam),1)])])])],4)}}});ca.__scopeId="data-v-22864e70";const ma={class:"main"},ua={class:"main-menu"},va=["onClick"],da={class:"label"},pa={class:"main-view"},ga={class:"main-chat"};var ha=m({setup(a){const n=M((()=>c((()=>import("./ChatRoom.f52977e5.js")),["/assets/ChatRoom.f52977e5.js","/assets/ChatRoom.d4a786ba.css","/assets/websocket.4225beb2.js","/assets/index.6528ade7.js","/assets/index.f1c855da.css","/assets/vue.ffab6494.js","/assets/index.d26b6715.js"]))),o=(a,e)=>(a.type.name||(a.type.name=e.name),a),{t:m}=r(),g=v(),w=d(),I=k((()=>i.state.app.showFixedBet)),j=k((()=>g.params.id+"")),T=S([{title:m("live.bet"),iconName:"live-bet",path:"bets"},{title:m("live.betWith"),iconName:"live-combined",path:"with"},{title:"串关",iconName:"live-stack",path:"mixs"},{title:"数据",iconName:"live-data",path:"data"},{title:m("live.more"),iconName:"live-grid",path:"more"}]),O=p({}),A=async()=>{const a=j.value,n=(await U({gidm:a})).data||{};if(O.value=((a,i)=>{for(var n in i||(i={}))t.call(i,n)&&s(a,n,i[n]);if(e)for(var n of e(i))l.call(i,n)&&s(a,n,i[n]);return a})({},n),n.detail&&n.detail.length>0){const{game:a}=n.detail[0],e=a.gameInfo||{};O.value.gameInfo=e}i.commit("match/SET_MATCH_INFO",O.value)},G=p(""),K=p(!1),V=async()=>{const a=j.value,e=await W({gidm:a});if(200==e.code){const{streamNa:a}=e.data||{},{liveali:t}=a||{};G.value=(t||{}).m3u8,K.value=!1}else G.value="",K.value=!0},q=()=>{K.value=!0},X=p(!1);return C((()=>{A(),V()})),u((()=>j.value),(()=>{A(),V()})),(a,e)=>{const t=P("SvgIcon"),l=P("router-view");return h(),y("div",{class:R(["detail",{"has-bet":E(I)}])},[f("div",{class:R(["match",{"no-video":K.value}])},[N(x(Y,{url:G.value,onOnError:q},null,8,["url"]),[[D,!K.value]]),K.value?(h(),L(ca,{key:0})):_("",!0)],2),f("div",ma,[f("div",ua,[(h(!0),y(F,null,H(E(T),((a,e)=>(h(),y("div",{class:R(["nav",{selected:E(g).path.endsWith(a.path)}]),key:e,onClick:e=>{return t=a.path,void w.replace(`/match/${j.value}/${t}`);var t}},[x(t,{name:a.iconName},null,8,["name"]),f("span",da,b(a.title),1)],10,va)))),128))]),f("div",pa,[x(l,null,{default:$((({Component:a,route:e})=>[(h(),L(B(o(a,e)),{key:e.key}))])),_:1})]),f("div",ga,[f("div",{class:"holder",onClick:e[0]||(e[0]=a=>X.value=!0)},"点击开启聊天室")])]),x(E(n),{show:X.value,"onUpdate:show":e[1]||(e[1]=a=>X.value=a)},null,8,["show"])],2)}}});ha.__scopeId="data-v-f197580c";export{ha as default};
