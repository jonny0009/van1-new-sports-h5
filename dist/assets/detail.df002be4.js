var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{s as i,I as n,S as o,u as r,Z as c}from"./index.3b44e0de.js";import{s as u,d as m,w as v,a4 as d,R as p,a as g,o as h,S as y,P as f,V as _,a0 as b,X as w,Y as I,n as E,b as k,r as T,E as j,q as S,u as x,x as O,W as D,a7 as M,e as P,M as N,y as R,c as C,_ as L,F as B,Z as F,O as H,$}from"./vue.9399d1f0.js";import{m as A,e as G}from"./index.38aba0db.js";/* empty css                     */import{v as K}from"./video.es.0da04946.js";import{u as U}from"./useMatch.0d4e55ba.js";const V={class:"match-video"},W=["src"],Z={key:2,class:"mask-loading"},q=(e=>(w("data-v-15c81d94"),e=e(),I(),e))((()=>f("div",{class:"icon"},null,-1))),X={class:"text"};var Y=u({props:{url:String},emits:["on-error"],setup(e,{emit:a}){const l=e,t=m("");v((()=>l.url),(e=>{u.value=!0,s(e)}));const s=e=>{if(t.value="",e.indexOf(".html")>-1)return t.value=e,void(u.value=!1);r?(null==r||r.src(e),null==r||r.load(),null==r||r.play(),u.value=!1):I(e)},n=d(),o=p();let r=null;const c=m(""),u=m(!1),w=m(!1),I=e=>{const l={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,loadingSpinner:!1,errorDisplay:!1,sources:[{src:e,type:"application/x-mpegURL"},{src:"",type:"video/x-flv"},{src:"",type:"rtmp/flv"}]};E((()=>{r=K(c.value,l,(()=>{r.log("onPlayerReady");document.pictureInPictureElement&&r.exitPictureInPicture().then((()=>{r.log("画中画模式已关闭")})),u.value=!1})),r.on("waiting",(()=>{console.log("waiting",(new Date).getTime())})),r.on("playing",(()=>{console.log("playing",(new Date).getTime())})),r.on("error",(e=>{u.value=!1,a("on-error",e)})),r.on("enterpictureinpicture",(()=>{w.value=!0,i.commit("match/SET_PIP_GIDM",n.params.id)})),r.on("leavepictureinpicture",(()=>{if(w.value=!1,"MatchDetail"!==n.name){const e=i.state.app.pictureinpictureGidm;o.push(`/match/${e}/bets`)}}))}))};return g((()=>{w.value||(r&&r.dispose(),r=null)})),(e,a)=>(h(),y("div",V,[t.value?(h(),y("iframe",{key:0,src:t.value,style:{width:"100%",height:"100%"}},null,8,W)):(h(),y("video",{key:1,ref_key:"videoRef",ref:c,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512)),u.value?(h(),y("div",Z,[q,f("div",X,_(e.$t("live.effLoading"))+"...",1)])):b("",!0)]))}});Y.__scopeId="data-v-15c81d94";const z={class:"team"},J={class:"team-header"},Q={class:"league"},ee={class:"date"},ae={class:"team-container"},le={class:"team-player host"},te={class:"img-num"},se={type:4,alt:""},ie={class:"team-score"},ne=["innerHTML"],oe={class:"team-player away"},re={class:"img-num"},ce={type:5,alt:""};var ue=u({setup(e){const a=U(),l=k((()=>i.state.match.matchInfo)),t=k((()=>"BK"==l.value.gameType?n+"FE/common/live/img_video_bg_BK.jpg":n+"FE/common/live/img_video_bg_FT.jpg"));return(e,s)=>{const i=T("SvgIcon"),n=j("img");return h(),y("div",{class:"match-game",style:D({backgroundImage:"url("+x(t)+")"})},[f("div",z,[f("div",J,[f("div",Q,[S(i,{name:"live-football"}),f("span",null,_(x(l).leagueName),1)]),f("div",ee,_(x(o)(x(l).gameDate,"MM-DD HH:mm")),1)]),f("div",ae,[f("div",le,[f("div",te,[O(f("img",se,null,512),[[n,x(l).homeLogo]]),f("span",null,_(x(a).getScore(x(l),"H")),1)]),f("strong",null,_(x(l).homeTeam),1)]),f("div",ie,[f("span",{class:"default",innerHTML:x(a).showRBTime(x(l))},null,8,ne)]),f("div",oe,[f("div",re,[f("span",null,_(x(a).getScore(x(l),"C")),1),O(f("img",ce,null,512),[[n,x(l).awayLogo]])]),f("strong",null,_(x(l).awayTeam),1)])])])],4)}}});ue.__scopeId="data-v-22864e70";const me={class:"main"},ve={class:"main-menu"},de=["onClick"],pe={class:"label"},ge={class:"main-view"},he={class:"main-chat"};var ye=u({setup(e){const n=M((()=>c((()=>import("./ChatRoom.5343218e.js")),["/assets/ChatRoom.5343218e.js","/assets/ChatRoom.3b5d6b52.css","/assets/websocket.b447a1c9.js","/assets/index.3b44e0de.js","/assets/index.cfa8d3fd.css","/assets/vue.9399d1f0.js","/assets/index.38aba0db.js"]))),o=(e,a)=>(e.type.name||(e.type.name=a.name),e),{t:u}=r(),w=d(),I=p(),E=k((()=>i.state.app.showFixedBet)),j=k((()=>w.params.id)),D=P([{title:u("live.bet"),iconName:"live-bet",path:"bets"},{title:u("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:u("live.dataBase"),iconName:"live-data",path:"data"},{title:u("live.more"),iconName:"live-grid",path:"other"}]),K=m({}),U=async()=>{const e=j.value,n=(await A({gidm:e})).data||{};if(K.value=((e,i)=>{for(var n in i||(i={}))l.call(i,n)&&s(e,n,i[n]);if(a)for(var n of a(i))t.call(i,n)&&s(e,n,i[n]);return e})({},n),n.detail&&n.detail.length>0){const{game:e}=n.detail[0],a=e.gameInfo||{};K.value.gameInfo=a}i.commit("match/SET_MATCH_INFO",K.value)},V=m(""),W=m(!1),Z=async()=>{const e=j.value,a=await G({gidm:e});if(200===a.code){const{streamNa:e}=a.data||{},{liveali:l}=e||{};V.value=(l||{}).m3u8,W.value=!1}else V.value="",W.value=!0},q=()=>{W.value=!0},X=m(!1);let z=null;const J=()=>{z&&(clearInterval(z),z=null,i.commit("match/SET_NEED_TIMER",!1))};return N((()=>{U(),Z(),J(),z=setInterval((()=>{U(),i.commit("match/SET_NEED_TIMER",!0)}),5e3)})),g((()=>{J()})),v((()=>j.value),(()=>{U(),Z()})),(e,a)=>{const l=T("SvgIcon"),t=T("router-view");return h(),y("div",{class:L(["detail",{"has-bet":x(E)}])},[f("div",{class:L(["match",{"no-video":W.value}])},[O(S(Y,{url:V.value,onOnError:q},null,8,["url"]),[[R,!W.value]]),W.value?(h(),C(ue,{key:0})):b("",!0)],2),f("div",me,[f("div",ve,[(h(!0),y(B,null,F(x(D),((e,a)=>(h(),y("div",{key:a,class:L(["nav",{selected:x(w).path.endsWith(e.path)}]),onClick:a=>{return l=e.path,void I.replace(`/match/${j.value}/${l}`);var l}},[S(l,{name:e.iconName},null,8,["name"]),f("span",pe,_(e.title),1)],10,de)))),128))]),f("div",ge,[S(t,null,{default:H((({Component:e,route:a})=>[(h(),C($(o(e,a)),{key:a.key}))])),_:1})]),f("div",he,[f("div",{class:"holder",onClick:a[0]||(a[0]=e=>X.value=!0)},_(e.$t("live.clickOpenChat")),1)])]),S(x(n),{show:X.value,"onUpdate:show":a[1]||(a[1]=e=>X.value=e)},null,8,["show"])],2)}}});ye.__scopeId="data-v-7761372a";export{ye as default};
