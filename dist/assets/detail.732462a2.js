var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{s as i,I as o,T as n,u as c,$ as r}from"./index.23f38588.js";import{s as m,b as u,d as v,w as d,a2 as p,R as g,a as h,o as y,S as f,P as _,V as b,a0 as w,X as I,Y as T,n as E,r as k,E as S,q as j,u as N,x as O,W as D,a7 as P,e as x,M,y as R,c as C,_ as L,F as B,Z as F,O as $,$ as H}from"./vue.6c3ce548.js";import{m as U,e as A}from"./index.3d8e00dd.js";/* empty css                     */import{v as G}from"./video.es.495f31c7.js";import{u as K}from"./useMatch.f7a15dcf.js";const V={class:"match-video"},W=["src"],q={key:2,class:"mask-loading"},X=(e=>(I("data-v-7ddb55fb"),e=e(),T(),e))((()=>_("div",{class:"icon"},null,-1))),Y={class:"text"};var Z=m({props:{url:String},emits:["on-error"],setup(e,{emit:a}){const l=e,t=u((()=>i.state.match.turnSound)),s=v(""),o=v();d((()=>l.url),(e=>{T.value=!0,e?n(e):a("on-error","没有播放链接")}));const n=e=>{if(s.value="",e.indexOf(".html")>-1)return s.value=e,void j();m?(null==m||m.src(e),null==m||m.load(),null==m||m.play(),j()):S(e)},c=p(),r=g();let m=null;const I=v(""),T=v(!0),k=v(!1),S=e=>{const l={preload:"auto",width:"100%",height:"100%",autoplay:!0,muted:!1,controls:!0,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:e,type:"application/x-mpegURL"}]};t.value?l.muted=!1:l.muted=!0,E((()=>{m=G(I.value,l,(()=>{m.log("onPlayerReady");document.pictureInPictureElement&&m.exitPictureInPicture().then((()=>{m.log("画中画模式已关闭")}))})),m.on("waiting",(()=>{console.log("waiting",(new Date).getTime())})),m.on("volumechange",(e=>{console.log("监听音量",e),t.value?i.commit("match/SET_TURN_SOUND",!0):i.commit("match/SET_TURN_SOUND",!1)})),m.on("playing",(()=>{console.log("playing",(new Date).getTime()),T.value=!1})),m.on("error",(e=>{T.value=!1,a("on-error",e)})),m.on("enterpictureinpicture",(()=>{k.value=!0,i.commit("match/SET_PIP_GIDM",c.params.id)})),m.on("leavepictureinpicture",(()=>{if(k.value=!1,"MatchDetail"!==c.name){const e=i.state.app.pictureinpictureGidm;r.push(`/match/${e}/bets`)}}))}))},j=()=>{E((()=>{T.value=!1}))},N=()=>{const e=o.value;console.log(e,"=====")};return h((()=>{k.value||(m&&m.dispose(),m=null)})),(e,a)=>(y(),f("div",V,[s.value&&!T.value?(y(),f("iframe",{key:0,ref_key:"videoFrame",ref:o,onLoad:N,src:s.value,style:{width:"100%",height:"100%"},frameborder:"0"},null,40,W)):(y(),f("video",{key:1,ref_key:"videoRef",ref:I,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512)),T.value?(y(),f("div",q,[X,_("div",Y,b(e.$t("live.effLoading"))+"...",1)])):w("",!0)]))}});Z.__scopeId="data-v-7ddb55fb";const z={class:"team"},J={class:"team-header"},Q={class:"league"},ee={class:"date"},ae={class:"team-container"},le={class:"team-player host"},te={class:"img-num"},se={type:4,alt:""},ie={class:"team-score"},oe=["innerHTML"],ne={class:"team-player away"},ce={class:"img-num"},re={type:5,alt:""};var me=m({setup(e){const a=K(),l=u((()=>i.state.match.matchInfo)),t=u((()=>"BK"==l.value.gameType?o+"FE/common/live/img_video_bg_BK.jpg":o+"FE/common/live/img_video_bg_FT.jpg"));return(e,s)=>{const i=k("SvgIcon"),o=S("img");return y(),f("div",{class:"match-game",style:D({backgroundImage:"url("+N(t)+")"})},[_("div",z,[_("div",J,[_("div",Q,[j(i,{name:"live-football"}),_("span",null,b(N(l).leagueName),1)]),_("div",ee,b(N(n)(N(l).gameDate,"MM-DD HH:mm")),1)]),_("div",ae,[_("div",le,[_("div",te,[O(_("img",se,null,512),[[o,N(l).homeLogo]]),_("span",null,b(N(a).getScore(N(l),"H")),1)]),_("strong",null,b(N(l).homeTeam),1)]),_("div",ie,[_("span",{class:"default",innerHTML:N(a).showRBTime(N(l))},null,8,oe)]),_("div",ne,[_("div",ce,[_("span",null,b(N(a).getScore(N(l),"C")),1),O(_("img",re,null,512),[[o,N(l).awayLogo]])]),_("strong",null,b(N(l).awayTeam),1)])])])],4)}}});me.__scopeId="data-v-22864e70";const ue={class:"main"},ve={class:"main-menu"},de=["onClick"],pe={class:"label"},ge={class:"main-view"},he={class:"main-chat"};var ye=m({setup(e){const o=P((()=>r((()=>import("./ChatRoom.f1ec3991.js")),["/assets/ChatRoom.f1ec3991.js","/assets/ChatRoom.7b4b01d0.css","/assets/websocket.d7eaab4c.js","/assets/index.23f38588.js","/assets/index.a0607d6d.css","/assets/vue.6c3ce548.js","/assets/index.3d8e00dd.js"]))),n=(e,a)=>(e.type.name||(e.type.name=a.name),e),{t:m}=c(),I=p(),T=g(),E=u((()=>i.state.app.showFixedBet)),S=u((()=>I.params.id)),D=x([{title:m("live.bet"),iconName:"live-bet",path:"bets"},{title:m("live.stackBet"),iconName:"live-stack",path:"mixs"},{title:m("live.dataBase"),iconName:"live-data",path:"data"},{title:m("live.more"),iconName:"live-grid",path:"other"}]),G=v({}),K=async()=>{const e=S.value,o=(await U({gidm:e})).data||{};if(G.value=((e,i)=>{for(var o in i||(i={}))l.call(i,o)&&s(e,o,i[o]);if(a)for(var o of a(i))t.call(i,o)&&s(e,o,i[o]);return e})({},o),o.detail&&o.detail.length>0){const{game:e}=o.detail[0],a=e.gameInfo||{};G.value.gameInfo=a}i.commit("match/SET_MATCH_INFO",G.value)},V=v(""),W=v(!1),q=async()=>{const e=S.value,a=await A({gidm:e});if(200===a.code){const{streamNa:e}=a.data||{},{liveali:l}=e||{};V.value=(l||{}).m3u8,W.value=!1}else V.value="",W.value=!0},X=()=>{W.value=!0},Y=v(!1);let z=null;const J=()=>{z&&(clearInterval(z),z=null,i.commit("match/SET_NEED_TIMER",!1))};return M((()=>{K(),q(),J(),z=setInterval((()=>{K(),i.commit("match/SET_NEED_TIMER",!0)}),5e3)})),h((()=>{J()})),d((()=>S.value),(()=>{K(),q()})),(e,a)=>{const l=k("SvgIcon"),t=k("router-view");return y(),f("div",{class:L(["detail",{"has-bet":N(E)}])},[_("div",{class:L(["match",{"no-video":W.value}])},[O(j(Z,{url:V.value,onOnError:X},null,8,["url"]),[[R,!W.value]]),W.value?(y(),C(me,{key:0})):w("",!0)],2),_("div",ue,[_("div",ve,[(y(!0),f(B,null,F(N(D),((e,a)=>(y(),f("div",{key:a,class:L(["nav",{selected:N(I).path.endsWith(e.path)}]),onClick:a=>{return l=e.path,void T.replace(`/match/${S.value}/${l}`);var l}},[j(l,{name:e.iconName},null,8,["name"]),_("span",pe,b(e.title),1)],10,de)))),128))]),_("div",ge,[j(t,null,{default:$((({Component:e,route:a})=>[(y(),C(H(n(e,a)),{key:"matchId"}))])),_:1})]),_("div",he,[_("div",{class:"holder",onClick:a[0]||(a[0]=e=>Y.value=!0)},b(e.$t("live.clickOpenChat")),1)])]),j(N(o),{show:Y.value,"onUpdate:show":a[1]||(a[1]=e=>Y.value=e),class:L({video:!W.value})},null,8,["show","class"])],2)}}});ye.__scopeId="data-v-0e20c460";export{ye as default};
