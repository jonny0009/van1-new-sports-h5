var a=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;import{s as i,I as n,T as o,u as c,$ as r}from"./index.672159d4.js";import{s as m,b as u,d as v,w as d,a2 as p,R as g,a as h,o as y,S as f,P as _,V as b,a0 as w,X as I,Y as T,n as E,r as S,E as k,q as j,u as N,x as O,W as D,a7 as P,e as x,M,y as R,c as C,_ as B,F as L,Z as $,O as F,$ as H}from"./vue.6c3ce548.js";import{m as U,e as A}from"./index.b3592b3c.js";/* empty css                     */import{v as G}from"./video.es.153c0ff7.js";import{u as K}from"./useMatch.c0a49341.js";const V={class:"match-video"},W=["src"],q={key:2,class:"mask-loading"},X=(a=>(I("data-v-2a906c70"),a=a(),T(),a))((()=>_("div",{class:"icon"},null,-1))),Y={class:"text"};var Z=m({props:{url:String},emits:["on-error"],setup(a,{emit:e}){const t=a,l=u((()=>i.state.match.turnSound)),s=v("");d((()=>t.url),(a=>{I.value=!0,a?n(a):e("on-error","没有播放链接")}));const n=a=>{if(s.value="",a.indexOf(".html")>-1)return s.value=a,void k();r?(null==r||r.src(a),null==r||r.load(),null==r||r.play(),k()):S(a)},o=p(),c=g();let r=null;const m=v(""),I=v(!0),T=v(!1),S=a=>{const t={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:a,type:"application/x-mpegURL"}]};l.value?t.muted=!1:t.muted=!0,E((()=>{r=G(m.value,t,(()=>{r.log("onPlayerReady");document.pictureInPictureElement&&r.exitPictureInPicture().then((()=>{r.log("画中画模式已关闭")}))})),r.on("waiting",(()=>{console.log("waiting",(new Date).getTime())})),r.on("volumechange",(a=>{console.log("监听音量",a),l.value?i.commit("match/SET_TURN_SOUND",!0):i.commit("match/SET_TURN_SOUND",!1)})),r.on("playing",(()=>{console.log("playing",(new Date).getTime()),I.value=!1})),r.on("error",(a=>{I.value=!1,e("on-error",a)})),r.on("enterpictureinpicture",(()=>{T.value=!0,i.commit("match/SET_PIP_GIDM",o.params.id)})),r.on("leavepictureinpicture",(()=>{if(T.value=!1,"MatchDetail"!==o.name){const a=i.state.app.pictureinpictureGidm;c.push(`/match/${a}/bets`)}}))}))},k=()=>{E((()=>{I.value=!1}))};return h((()=>{T.value||(r&&r.dispose(),r=null)})),(a,e)=>(y(),f("div",V,[s.value&&!I.value?(y(),f("iframe",{key:0,src:s.value,style:{width:"100%",height:"100%"},frameborder:"0"},null,8,W)):(y(),f("video",{key:1,ref_key:"videoRef",ref:m,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512)),I.value?(y(),f("div",q,[X,_("div",Y,b(a.$t("live.effLoading"))+"...",1)])):w("",!0)]))}});Z.__scopeId="data-v-2a906c70";const z={class:"team"},J={class:"team-header"},Q={class:"league"},aa={class:"date"},ea={class:"team-container"},ta={class:"team-player host"},la={class:"img-num"},sa={type:4,alt:""},ia={class:"team-score"},na=["innerHTML"],oa={class:"team-player away"},ca={class:"img-num"},ra={type:5,alt:""};var ma=m({setup(a){const e=K(),t=u((()=>i.state.match.matchInfo)),l=u((()=>"BK"==t.value.gameType?n+"FE/common/live/img_video_bg_BK.jpg":n+"FE/common/live/img_video_bg_FT.jpg"));return(a,s)=>{const i=S("SvgIcon"),n=k("img");return y(),f("div",{class:"match-game",style:D({backgroundImage:"url("+N(l)+")"})},[_("div",z,[_("div",J,[_("div",Q,[j(i,{name:"live-football"}),_("span",null,b(N(t).leagueName),1)]),_("div",aa,b(N(o)(N(t).gameDate,"MM-DD HH:mm")),1)]),_("div",ea,[_("div",ta,[_("div",la,[O(_("img",sa,null,512),[[n,N(t).homeLogo]]),_("span",null,b(N(e).getScore(N(t),"H")),1)]),_("strong",null,b(N(t).homeTeam),1)]),_("div",ia,[_("span",{class:"default",innerHTML:N(e).showRBTime(N(t))},null,8,na)]),_("div",oa,[_("div",ca,[_("span",null,b(N(e).getScore(N(t),"C")),1),O(_("img",ra,null,512),[[n,N(t).awayLogo]])]),_("strong",null,b(N(t).awayTeam),1)])])])],4)}}});ma.__scopeId="data-v-22864e70";const ua={class:"main"},va={class:"main-menu"},da=["onClick"],pa={class:"label"},ga={class:"main-view"},ha={class:"main-chat"};var ya=m({setup(a){const n=P((()=>r((()=>import("./ChatRoom.62cf0e6d.js")),["/assets/ChatRoom.62cf0e6d.js","/assets/ChatRoom.7b4b01d0.css","/assets/websocket.ef81ca9c.js","/assets/index.672159d4.js","/assets/index.f864214e.css","/assets/vue.6c3ce548.js","/assets/index.b3592b3c.js"]))),o=(a,e)=>(a.type.name||(a.type.name=e.name),a),{t:m}=c(),I=p(),T=g(),E=u((()=>i.state.app.showFixedBet)),k=u((()=>I.params.id)),D=x([{title:m("live.bet"),iconName:"live-bet",path:"bets"},{title:m("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:m("live.dataBase"),iconName:"live-data",path:"data"},{title:m("live.more"),iconName:"live-grid",path:"other"}]),G=v({}),K=async()=>{const a=k.value,n=(await U({gidm:a})).data||{};if(G.value=((a,i)=>{for(var n in i||(i={}))t.call(i,n)&&s(a,n,i[n]);if(e)for(var n of e(i))l.call(i,n)&&s(a,n,i[n]);return a})({},n),n.detail&&n.detail.length>0){const{game:a}=n.detail[0],e=a.gameInfo||{};G.value.gameInfo=e}i.commit("match/SET_MATCH_INFO",G.value)},V=v(""),W=v(!1),q=async()=>{const a=k.value,e=await A({gidm:a});if(200===e.code){const{streamNa:a}=e.data||{},{liveali:t}=a||{};V.value=(t||{}).m3u8,W.value=!1}else V.value="",W.value=!0},X=()=>{W.value=!0},Y=v(!1);let z=null;const J=()=>{z&&(clearInterval(z),z=null,i.commit("match/SET_NEED_TIMER",!1))};return M((()=>{K(),q(),J(),z=setInterval((()=>{K(),i.commit("match/SET_NEED_TIMER",!0)}),5e3)})),h((()=>{J()})),d((()=>k.value),(()=>{K(),q()})),(a,e)=>{const t=S("SvgIcon"),l=S("router-view");return y(),f("div",{class:B(["detail",{"has-bet":N(E)}])},[_("div",{class:B(["match",{"no-video":W.value}])},[O(j(Z,{url:V.value,onOnError:X},null,8,["url"]),[[R,!W.value]]),W.value?(y(),C(ma,{key:0})):w("",!0)],2),_("div",ua,[_("div",va,[(y(!0),f(L,null,$(N(D),((a,e)=>(y(),f("div",{key:e,class:B(["nav",{selected:N(I).path.endsWith(a.path)}]),onClick:e=>{return t=a.path,void T.replace(`/match/${k.value}/${t}`);var t}},[j(t,{name:a.iconName},null,8,["name"]),_("span",pa,b(a.title),1)],10,da)))),128))]),_("div",ga,[j(l,null,{default:F((({Component:a,route:e})=>[(y(),C(H(o(a,e)),{key:"matchId"}))])),_:1})]),_("div",ha,[_("div",{class:"holder",onClick:e[0]||(e[0]=a=>Y.value=!0)},b(a.$t("live.clickOpenChat")),1)])]),j(N(n),{show:Y.value,"onUpdate:show":e[1]||(e[1]=a=>Y.value=a),class:B({video:!W.value})},null,8,["show","class"])],2)}}});ya.__scopeId="data-v-0e20c460";export{ya as default};
