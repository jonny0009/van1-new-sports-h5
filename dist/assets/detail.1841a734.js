var a=Object.defineProperty,e=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(e,l,t)=>l in e?a(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t;import{s as i,I as n,S as o,u as r,Z as c}from"./index.1067a06c.js";import{s as u,d as m,w as v,a4 as d,R as p,a as g,o as h,S as y,P as f,V as _,a0 as b,X as w,Y as I,n as E,b as k,r as T,E as j,q as S,u as O,x as P,W as x,a7 as D,e as M,M as N,y as R,c as C,_ as B,F as L,Z as F,O as H,$}from"./vue.9399d1f0.js";import{m as A,e as G}from"./index.31662107.js";/* empty css                     */import{v as K}from"./video.es.7383bc86.js";import{u as U}from"./useMatch.189470fd.js";const V={class:"match-video"},W=["src"],Z={key:2,class:"mask-loading"},q=(a=>(w("data-v-4af75852"),a=a(),I(),a))((()=>f("div",{class:"icon"},null,-1))),X={class:"text"};var Y=u({props:{url:String},emits:["on-error"],setup(a,{emit:e}){const l=a,t=m("");v((()=>l.url),(a=>{u.value=!0,a?s(a):e("on-error","没有播放链接")}));const s=a=>{if(t.value="",a.indexOf(".html")>-1)return t.value=a,void k();r?(null==r||r.src(a),null==r||r.load(),null==r||r.play(),k()):I(a)},n=d(),o=p();let r=null;const c=m(""),u=m(!0),w=m(!1),I=a=>{const l={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:a,type:"application/x-mpegURL"}]};E((()=>{r=K(c.value,l,(()=>{r.log("onPlayerReady");document.pictureInPictureElement&&r.exitPictureInPicture().then((()=>{r.log("画中画模式已关闭")}))})),r.on("waiting",(()=>{console.log("waiting",(new Date).getTime())})),r.on("playing",(()=>{console.log("playing",(new Date).getTime()),u.value=!1})),r.on("error",(a=>{u.value=!1,e("on-error",a)})),r.on("enterpictureinpicture",(()=>{w.value=!0,i.commit("match/SET_PIP_GIDM",n.params.id)})),r.on("leavepictureinpicture",(()=>{if(w.value=!1,"MatchDetail"!==n.name){const a=i.state.app.pictureinpictureGidm;o.push(`/match/${a}/bets`)}}))}))},k=()=>{E((()=>{u.value=!1}))};return g((()=>{w.value||(r&&r.dispose(),r=null)})),(a,e)=>(h(),y("div",V,[t.value&&!u.value?(h(),y("iframe",{key:0,src:t.value,style:{width:"100%",height:"100%"}},null,8,W)):(h(),y("video",{key:1,ref_key:"videoRef",ref:c,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512)),u.value?(h(),y("div",Z,[q,f("div",X,_(a.$t("live.effLoading"))+"...",1)])):b("",!0)]))}});Y.__scopeId="data-v-4af75852";const z={class:"team"},J={class:"team-header"},Q={class:"league"},aa={class:"date"},ea={class:"team-container"},la={class:"team-player host"},ta={class:"img-num"},sa={type:4,alt:""},ia={class:"team-score"},na=["innerHTML"],oa={class:"team-player away"},ra={class:"img-num"},ca={type:5,alt:""};var ua=u({setup(a){const e=U(),l=k((()=>i.state.match.matchInfo)),t=k((()=>"BK"==l.value.gameType?n+"FE/common/live/img_video_bg_BK.jpg":n+"FE/common/live/img_video_bg_FT.jpg"));return(a,s)=>{const i=T("SvgIcon"),n=j("img");return h(),y("div",{class:"match-game",style:x({backgroundImage:"url("+O(t)+")"})},[f("div",z,[f("div",J,[f("div",Q,[S(i,{name:"live-football"}),f("span",null,_(O(l).leagueName),1)]),f("div",aa,_(O(o)(O(l).gameDate,"MM-DD HH:mm")),1)]),f("div",ea,[f("div",la,[f("div",ta,[P(f("img",sa,null,512),[[n,O(l).homeLogo]]),f("span",null,_(O(e).getScore(O(l),"H")),1)]),f("strong",null,_(O(l).homeTeam),1)]),f("div",ia,[f("span",{class:"default",innerHTML:O(e).showRBTime(O(l))},null,8,na)]),f("div",oa,[f("div",ra,[f("span",null,_(O(e).getScore(O(l),"C")),1),P(f("img",ca,null,512),[[n,O(l).awayLogo]])]),f("strong",null,_(O(l).awayTeam),1)])])])],4)}}});ua.__scopeId="data-v-22864e70";const ma={class:"main"},va={class:"main-menu"},da=["onClick"],pa={class:"label"},ga={class:"main-view"},ha={class:"main-chat"};var ya=u({setup(a){const n=D((()=>c((()=>import("./ChatRoom.469df95c.js")),["/assets/ChatRoom.469df95c.js","/assets/ChatRoom.3b5d6b52.css","/assets/websocket.b963a371.js","/assets/index.1067a06c.js","/assets/index.cfa8d3fd.css","/assets/vue.9399d1f0.js","/assets/index.31662107.js"]))),o=(a,e)=>(a.type.name||(a.type.name=e.name),a),{t:u}=r(),w=d(),I=p(),E=k((()=>i.state.app.showFixedBet)),j=k((()=>w.params.id)),x=M([{title:u("live.bet"),iconName:"live-bet",path:"bets"},{title:u("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:u("live.dataBase"),iconName:"live-data",path:"data"},{title:u("live.more"),iconName:"live-grid",path:"other"}]),K=m({}),U=async()=>{const a=j.value,n=(await A({gidm:a})).data||{};if(K.value=((a,i)=>{for(var n in i||(i={}))l.call(i,n)&&s(a,n,i[n]);if(e)for(var n of e(i))t.call(i,n)&&s(a,n,i[n]);return a})({},n),n.detail&&n.detail.length>0){const{game:a}=n.detail[0],e=a.gameInfo||{};K.value.gameInfo=e}i.commit("match/SET_MATCH_INFO",K.value)},V=m(""),W=m(!1),Z=async()=>{const a=j.value,e=await G({gidm:a});if(200===e.code){const{streamNa:a}=e.data||{},{liveali:l}=a||{};V.value=(l||{}).m3u8,W.value=!1}else V.value="",W.value=!0},q=()=>{W.value=!0},X=m(!1);let z=null;const J=()=>{z&&(clearInterval(z),z=null,i.commit("match/SET_NEED_TIMER",!1))};return N((()=>{U(),Z(),J(),z=setInterval((()=>{U(),i.commit("match/SET_NEED_TIMER",!0)}),5e3)})),g((()=>{J()})),v((()=>j.value),(()=>{U(),Z()})),(a,e)=>{const l=T("SvgIcon"),t=T("router-view");return h(),y("div",{class:B(["detail",{"has-bet":O(E)}])},[f("div",{class:B(["match",{"no-video":W.value}])},[P(S(Y,{url:V.value,onOnError:q},null,8,["url"]),[[R,!W.value]]),W.value?(h(),C(ua,{key:0})):b("",!0)],2),f("div",ma,[f("div",va,[(h(!0),y(L,null,F(O(x),((a,e)=>(h(),y("div",{key:e,class:B(["nav",{selected:O(w).path.endsWith(a.path)}]),onClick:e=>{return l=a.path,void I.replace(`/match/${j.value}/${l}`);var l}},[S(l,{name:a.iconName},null,8,["name"]),f("span",pa,_(a.title),1)],10,da)))),128))]),f("div",ga,[S(t,null,{default:H((({Component:a,route:e})=>[(h(),C($(o(a,e)),{key:e.key}))])),_:1})]),f("div",ha,[f("div",{class:"holder",onClick:e[0]||(e[0]=a=>X.value=!0)},_(a.$t("live.clickOpenChat")),1)])]),S(O(n),{show:X.value,"onUpdate:show":e[1]||(e[1]=a=>X.value=a)},null,8,["show"])],2)}}});ya.__scopeId="data-v-7761372a";export{ya as default};
