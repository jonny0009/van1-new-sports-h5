var a=Object.defineProperty,e=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(e,l,t)=>l in e?a(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t;import{s as i,I as n,S as o,u as r,Z as c}from"./index.76e2c4f6.js";import{s as u,d as m,w as v,a4 as d,R as p,a as h,o as g,S as y,P as f,V as _,a0 as b,X as I,Y as w,n as E,b as k,r as j,E as T,q as S,u as O,x,W as M,a7 as P,e as N,M as D,y as R,c as C,_ as L,F as B,Z as F,O as H,$}from"./vue.9399d1f0.js";import{m as A,e as G}from"./index.40a39fc5.js";/* empty css                     */import{v as K}from"./video.es.ad32809e.js";import{u as U}from"./useMatch.9f957fb1.js";const V={class:"match-video"},W=["src"],Z={key:2,class:"mask-loading"},q=(a=>(I("data-v-4b41e43f"),a=a(),w(),a))((()=>f("div",{class:"icon"},null,-1))),X={class:"text"};var Y=u({props:{url:String},emits:["on-error"],setup(a,{emit:e}){const l=a,t=m("");v((()=>l.url),(a=>{s(a)}));const s=a=>{t.value="",a.indexOf(".html")>-1?t.value=a:r?(null==r||r.src(a),null==r||r.load(),null==r||r.play()):w(a)},n=d(),o=p();let r=null;const c=m(""),u=m(!1),I=m(!1),w=a=>{const l={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,loadingSpinner:!1,errorDisplay:!1,sources:[{src:a,type:"application/x-mpegURL"}]};E((()=>{r=K(c.value,l,(()=>{r.log("onPlayerReady");document.pictureInPictureElement&&r.exitPictureInPicture().then((()=>{r.log("画中画模式已关闭")}))})),r.on("waiting",(()=>{u.value=!0})),r.on("playing",(()=>{u.value=!1})),r.on("error",(a=>{u.value=!1,e("on-error",a)})),r.on("enterpictureinpicture",(()=>{I.value=!0,i.commit("match/SET_PIP_GIDM",n.params.id)})),r.on("leavepictureinpicture",(()=>{if(I.value=!1,"MatchDetail"!==n.name){const a=i.state.app.pictureinpictureGidm;o.push(`/match/${a}/bets`)}}))}))};return h((()=>{I.value||(r&&r.dispose(),r=null)})),(a,e)=>(g(),y("div",V,[t.value?(g(),y("iframe",{key:0,src:t.value,style:{width:"100%",height:"100%"}},null,8,W)):(g(),y("video",{key:1,ref_key:"videoRef",ref:c,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512)),u.value?(g(),y("div",Z,[q,f("div",X,_(a.$t("live.effLoading"))+"...",1)])):b("",!0)]))}});Y.__scopeId="data-v-4b41e43f";const z={class:"team"},J={class:"team-header"},Q={class:"league"},aa={class:"date"},ea={class:"team-container"},la={class:"team-player host"},ta={class:"img-num"},sa={type:4,alt:""},ia={class:"team-score"},na=["innerHTML"],oa={class:"team-player away"},ra={class:"img-num"},ca={type:5,alt:""};var ua=u({setup(a){const e=U(),l=k((()=>i.state.match.matchInfo)),t=k((()=>"BK"==l.value.gameType?n+"FE/common/live/img_video_bg_BK.jpg":n+"FE/common/live/img_video_bg_FT.jpg"));return(a,s)=>{const i=j("SvgIcon"),n=T("img");return g(),y("div",{class:"match-game",style:M({backgroundImage:"url("+O(t)+")"})},[f("div",z,[f("div",J,[f("div",Q,[S(i,{name:"live-football"}),f("span",null,_(O(l).leagueName),1)]),f("div",aa,_(O(o)(O(l).gameDate,"MM-DD HH:mm")),1)]),f("div",ea,[f("div",la,[f("div",ta,[x(f("img",sa,null,512),[[n,O(l).homeLogo]]),f("span",null,_(O(e).getScore(O(l),"H")),1)]),f("strong",null,_(O(l).homeTeam),1)]),f("div",ia,[f("span",{class:"default",innerHTML:O(e).showRBTime(O(l))},null,8,na)]),f("div",oa,[f("div",ra,[f("span",null,_(O(e).getScore(O(l),"C")),1),x(f("img",ca,null,512),[[n,O(l).awayLogo]])]),f("strong",null,_(O(l).awayTeam),1)])])])],4)}}});ua.__scopeId="data-v-22864e70";const ma={class:"main"},va={class:"main-menu"},da=["onClick"],pa={class:"label"},ha={class:"main-view"},ga={class:"main-chat"};var ya=u({setup(a){const n=P((()=>c((()=>import("./ChatRoom.ca77637a.js")),["/assets/ChatRoom.ca77637a.js","/assets/ChatRoom.30da2d3a.css","/assets/websocket.32e11aeb.js","/assets/index.76e2c4f6.js","/assets/index.66e9874b.css","/assets/vue.9399d1f0.js","/assets/index.40a39fc5.js"]))),o=(a,e)=>(a.type.name||(a.type.name=e.name),a),{t:u}=r(),I=d(),w=p(),E=k((()=>i.state.app.showFixedBet)),T=k((()=>I.params.id)),M=N([{title:u("live.bet"),iconName:"live-bet",path:"bets"},{title:u("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:u("live.dataBase"),iconName:"live-data",path:"data"},{title:u("live.more"),iconName:"live-grid",path:"other"}]),K=m({}),U=async()=>{const a=T.value,n=(await A({gidm:a})).data||{};if(K.value=((a,i)=>{for(var n in i||(i={}))l.call(i,n)&&s(a,n,i[n]);if(e)for(var n of e(i))t.call(i,n)&&s(a,n,i[n]);return a})({},n),n.detail&&n.detail.length>0){const{game:a}=n.detail[0],e=a.gameInfo||{};K.value.gameInfo=e}i.commit("match/SET_MATCH_INFO",K.value)},V=m(""),W=m(!1),Z=async()=>{const a=T.value,e=await G({gidm:a});if(200===e.code){const{streamNa:a}=e.data||{},{liveali:l}=a||{};V.value=(l||{}).m3u8,W.value=!1}else V.value="",W.value=!0},q=()=>{W.value=!0},X=m(!1);let z=null;const J=()=>{z&&(clearInterval(z),z=null,i.commit("match/SET_NEED_TIMER",!1))};return D((()=>{U(),Z(),J(),z=setInterval((()=>{U(),i.commit("match/SET_NEED_TIMER",!0)}),5e3)})),h((()=>{J()})),v((()=>T.value),(()=>{U(),Z()})),(a,e)=>{const l=j("SvgIcon"),t=j("router-view");return g(),y("div",{class:L(["detail",{"has-bet":O(E)}])},[f("div",{class:L(["match",{"no-video":W.value}])},[x(S(Y,{url:V.value,onOnError:q},null,8,["url"]),[[R,!W.value]]),W.value?(g(),C(ua,{key:0})):b("",!0)],2),f("div",ma,[f("div",va,[(g(!0),y(B,null,F(O(M),((a,e)=>(g(),y("div",{key:e,class:L(["nav",{selected:O(I).path.endsWith(a.path)}]),onClick:e=>{return l=a.path,void w.replace(`/match/${T.value}/${l}`);var l}},[S(l,{name:a.iconName},null,8,["name"]),f("span",pa,_(a.title),1)],10,da)))),128))]),f("div",ha,[S(t,null,{default:H((({Component:a,route:e})=>[(g(),C($(o(a,e)),{key:e.key}))])),_:1})]),f("div",ga,[f("div",{class:"holder",onClick:e[0]||(e[0]=a=>X.value=!0)},_(a.$t("live.clickOpenChat")),1)])]),S(O(n),{show:X.value,"onUpdate:show":e[1]||(e[1]=a=>X.value=a)},null,8,["show"])],2)}}});ya.__scopeId="data-v-7761372a";export{ya as default};
