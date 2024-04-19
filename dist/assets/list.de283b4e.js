import{u as e,s as a,I as l,C as t,M as s,r as i}from"./index.5d0a0f5a.js";import{u as o}from"./useMatch.4c6a4a93.js";import{s as n,a as v}from"./s_hot2.bba3cb3a.js";import{s as u,b as c,d,r,E as m,o as p,R as g,P as f,q as y,O as h,u as k,W as b,$ as T,c as I,x as _,M as w,a as x,V as S,B as R,F as O,S as B,n as j,Y as N,Z as C,j as D,e as V,_ as L}from"./vue.1f547d27.js";import{d as M,g as E,a as F,n as H}from"./index.92d3a04a.js";/* empty css                     */import{v as $}from"./video.es.b7901a8c.js";import{l as U}from"./live-bg-error.28d01b38.js";import"./getScore.e6c719ba.js";const z={class:"item"},A={class:"item-photo"},K=["src"],P={key:0,class:"state"},q={class:"footer"},W=["innerHTML"],Y={key:1},Z={key:1,class:"mask-reseve"},G={class:"item-title"},J={class:"item-team"},Q={class:"cell"},X={class:"head"},ee={type:4,alt:""},ae={class:"score"},le={class:"cell"},te={class:"head"},se={type:5,alt:""},ie={class:"score"},oe={class:"item-desc"},ne={class:"name"},ve={class:"hots"},ue=["src"];var ce=u({props:{item:{type:Object,default:()=>{}}},setup(s){const i=s,{t:u}=e(),w=c((()=>a.state.app.theme)),x=c((()=>"blue"==w.value?n:v)),S=d(l),R=o(),O=c((()=>i.item?.gameInfo)),B=c((()=>{const e=i.item;return e.anchorId?l+e.cover:"BK"==e.gameType?l+"FE/common/live/img_video_bg_BK.jpg":l+"FE/common/live/img_video_bg_FT.jpg"})),j=c((()=>{const e=i.item.watchTotal.toLocaleString();return"RB"==i.item.showType?u("live.xLooks",{num:e}):u("live.xReserve",{num:e})})),N=c((()=>({FT:"live-football",BK:"live-basketball",TN:"live-tennisball",OP_BM:"live-badminton"}[i.item.gameType])));return(e,a)=>{const l=r("van-image"),o=r("SvgIcon"),n=m("img");return p(),g("div",z,[f("div",A,[y(l,{src:k(B),fit:"cover"},{error:h((()=>[f("img",{src:S.value+"FE/common/live/img_video_bg_FT.jpg",alt:""},null,8,K)])),_:1},8,["src"]),"RB"==s.item.showType?(p(),g("div",P,b(e.$t("live.hotNow")),1)):T("",!0),f("div",q,["RB"==s.item.showType?(p(),g("span",{key:0,innerHTML:k(R).showRBTime(s.item)},null,8,W)):(p(),g("span",Y,b(k(t)(s.item.gameDate,"MM-DD HH:mm")),1))]),"RB"!=s.item.showType?(p(),g("div",Z,[f("span",null,b(e.$t("live.xHas",{num:k(j)})),1),f("span",null,b(e.$t("live.playNow")),1)])):T("",!0)]),f("div",G,[k(N)?(p(),I(o,{key:0,name:k(N)},null,8,["name"])):T("",!0),f("strong",null,b(s.item.leagueName),1)]),f("div",J,[f("div",Q,[f("div",X,[_(f("img",ee,null,512),[[n,s.item.homeLogo]]),f("span",null,b(s.item.homeTeam),1)]),f("div",ae,[f("span",null,b(k(O).sc_game_H||k(O).sc_FT_H),1)])]),f("div",le,[f("div",te,[_(f("img",se,null,512),[[n,s.item.awayLogo]]),f("span",null,b(s.item.awayTeam),1)]),f("div",ie,[f("span",null,b(k(O).sc_game_A||k(O).sc_FT_C||k(O).sc_FT_A),1)])])]),f("div",oe,[f("div",ne,b(s.item.nickname||s.item.leagueShortName),1),f("div",ve,[f("img",{src:k(x),alt:""},null,8,ue),f("span",null,b(i.item.watchTotal.toLocaleString()),1)])])])}}});ce.__scopeId="data-v-075ee586";const de={class:"video-header-info"},re={class:"title text-overflow"},me={class:"info"},pe={type:"1",alt:""},ge={class:"name text-overflow"},fe={key:1,class:"mask-loading"},ye=(e=>(N("data-v-fccdb556"),e=e(),C(),e))((()=>f("div",{class:"icon"},null,-1))),he={class:"text"},ke={key:2,class:"video-error"},be=["src"],Te={class:"error-title"},Ie={class:"match-info"},_e={class:"match-lengua text-overflow"},we={class:"team-info text-overflow"},xe={class:"team-icon",alt:"",type:4,style:{"object-fit":"contain"}},Se={class:"team-info text-overflow"},Re={class:"team-icon",alt:"",type:5,style:{"object-fit":"contain"}},Oe={class:"play-info-box"},Be={key:0,class:"play-item"},je={class:"play-name"},Ne={class:"ratio-name text-overflow"},Ce={class:"ratio-ior"},De={key:1,class:"play-item"},Ve={class:"play-name"},Le={class:"ratio-name text-overflow"},Me={class:"ratio-ior"};var Ee=u({props:{videoInfo:{type:Object,default:()=>{}}},setup(e,{expose:a}){const l=e,t=d(),o=c((()=>{const{R:e}=u.value;if(e){const{game:a,ratioData:l}=e,t=l.map((e=>{const l={...e,...a,...u.value,playType:"R",systemId:v.value.systemId};return{marketInfo:new s(l)}}));return{...a,...u.value,playType:"R",list:t}}return null})),n=c((()=>{const{OU:e}=u.value;if(e){const{game:a,ratioData:l}=e,t=l.map((e=>{const l={...e,...a,...u.value,playType:"OU",systemId:v.value.systemId};return{marketInfo:new s(l)}}));return{...a,...u.value,playType:"OU",list:t}}return null})),v=c((()=>!!l.videoInfo?.gameList?.length&&l.videoInfo.gameList[0])),u=d({});w((()=>{(async()=>{if(!v?.value)return!1;const e=v?.value.gidm,a=await M({gidm:e});200===a?.code&&a?.data&&(u.value=a?.data)})()})),x((()=>{H()}));const N=d(""),C=d(null),D=d(!1),V=d(!0),L=d(!1);let E=null;const F=()=>{C.value=l.videoInfo.videoUrl,D.value=!1,V.value=!0,L.value=!1;const e={preload:"auto",width:"100%",height:"100%",loop:!0,autoplay:!0,muted:!0,controls:!1,fluid:!0,bigPlayButton:!1,loadingSpinner:!1,errorDisplay:!1,sources:[{src:C.value,type:"video/mp4"}]};j((()=>{E||(E=$(N.value,e)),E.muted(!1),E?.play(),E.on("waiting",(()=>{L.value=!0,D.value=!1,V.value=!1})),E.on("playing",(()=>{L.value=!1,D.value=!1,V.value=!1})),E.on("error",(()=>{D.value=!0,L.value=!1})),E.on("pause",(()=>{V.value=!0})),E.on("click",(()=>{A()}))}))},H=()=>{E&&E.dispose(),E=null},z=()=>{if(D.value)return!1;E?E.paused()?E.play():E.pause():F()},A=()=>{i.push({name:"Svideo",query:{videoId:l.videoInfo.videoId}})};return a({videoTarget:t,play:()=>{E?.paused()?E.play():E||F()},pause:()=>{E&&!E.paused()&&E.pause()}}),(a,l)=>{const s=r("SvgIcon"),i=r("SportsIcon"),v=r("BettingOption"),c=m("img"),d=m("play");return p(),g("div",{class:"room-wrap",ref_key:"videoTarget",ref:t},[f("div",de,[f("div",re,b(e.videoInfo.videoTitle),1),f("div",me,[_(f("img",pe,null,512),[[c,e.videoInfo.leagueIcon]]),f("div",ge,b(e.videoInfo.leagueName||e.videoInfo.leagueNameCn),1)])]),f("video",{ref_key:"videoRef",ref:N,class:"video-js",playsinline:"","webkit-playsinline":"","x5-video-player-type":""},null,512),L.value||D.value||!V.value?T("",!0):(p(),g("div",{key:0,class:"video-pause",onClick:z},[y(s,{class:"first-icon",name:"live-pause"})])),L.value?(p(),g("div",fe,[ye,f("div",he,b(a.$t("live.effLoading"))+"...",1)])):D.value?(p(),g("div",ke,[f("img",{src:k(U),class:"bg"},null,8,be),f("div",Te,b(a.$t("live.playbackFailed")),1)])):T("",!0),k(o)||k(n)?(p(),g("div",{key:3,class:"match-wrap",onClick:l[0]||(l[0]=S((()=>{}),["stop"]))},[f("div",Ie,[f("div",_e,[y(i,{class:"sports-icon","icon-src":u.value.gameType},null,8,["icon-src"]),R(" "+b(u.value.leagueShortName||u.value.leagueName),1)]),f("div",we,[_(f("img",xe,null,512),[[c,u.value.homeLogo]]),R(" "+b(u.value.awayTeamAbbr||u.value.awayTeam),1)]),f("div",Se,[_(f("img",Re,null,512),[[c,u.value.awayLogo]]),R(" "+b(u.value.homeTeamAbbr||u.value.homeTeam),1)])]),f("div",Oe,[k(o)?(p(),g("div",Be,[_(f("div",je,null,512),[[d,k(o)]]),(p(!0),g(O,null,B(k(o).list,((e,a)=>(p(),I(v,{key:a,"market-info":e.marketInfo,class:"betting-option"},{default:h((()=>[f("span",Ne,b(e.marketInfo.ratioTag),1),f("span",Ce,b(e.marketInfo.vior),1)])),_:2},1032,["market-info"])))),128))])):T("",!0),k(n)?(p(),g("div",De,[_(f("div",Ve,null,512),[[d,k(n)]]),(p(!0),g(O,null,B(k(n).list,((e,a)=>(p(),I(v,{key:a,"market-info":e.marketInfo,class:"betting-option"},{default:h((()=>[f("span",Le,b(e.marketInfo.ratioName),1),f("span",Me,b(e.marketInfo.vior),1)])),_:2},1032,["market-info"])))),128))])):T("",!0)])])):T("",!0)],512)}}});Ee.__scopeId="data-v-fccdb556";const Fe={class:"short-video-container"},He={class:"list"};var $e=u({setup(e){w((()=>{o()})),D((()=>{n()}));const a=d(),l=d([]),t=d(!0),s=d(0),i=d({page:0,pageSize:10}),o=async()=>{if(t.value=!0,s.value>0&&i.value.page*i.value.pageSize>=s.value)return!1;i.value.page++,1===i.value.page&&(l.value.length=0);const e=await E({...i.value}).finally((()=>{t.value=!1})),a=e?.data?.videoData||[];s.value=e?.data?.total||0,200===e.code&&a.length&&l.value.push(...a)},n=()=>{window.onscroll=()=>{a.value?.forEach((e=>{const a=e.videoTarget.getBoundingClientRect();a.y>50&&a.y<300?e.play():e.pause()}))}};return(e,t)=>(p(),g("div",Fe,[f("div",He,[(p(!0),g(O,null,B(l.value,((e,l)=>(p(),I(Ee,{ref_for:!0,ref_key:"videoRefs",ref:a,key:l,videoInfo:e},null,8,["videoInfo"])))),128))])]))}});$e.__scopeId="data-v-36bc8eee";const Ue={class:"tab-title"},ze={key:0,class:"title-group"},Ae={class:"title"},Ke={key:0,class:"next"},Pe=(e=>(N("data-v-1e8faa64"),e=e(),C(),e))((()=>f("div",{class:"img"},[f("img",{src:"/assets/no_an_ma.134981fa.png",alt:""})],-1))),qe=["innerHTML"],We={class:"grid-wrapper"},Ye={class:"title-group"},Ze={class:"title"},Ge={class:"grid-wrapper"},Je={class:"title-group"},Qe={class:"title"},Xe=["onClick"],ea=["errorImg"],aa={class:"video-user-info"},la={type:"1",alt:""},ta={class:"name text-overflow"},sa={class:"video-content text-overflow-2"};var ia=u({setup(l){w((()=>{M()}));const t=d(["HOT","ComingSoon","VIDEO"]),s=c((()=>a.state.app.showFixedBet)),{t:o}=e(),n=V([{type:"RB",title:o("live.hot"),iconName:"live-hot"},{type:"FT",title:o("live.football"),iconName:"live-football"},{type:"BK",title:o("live.basketball"),iconName:"live-basketball"},{type:"TN",title:o("live.tennisball"),iconName:"live-tennisball"},{type:"OP_BM",title:o("live.badminton"),iconName:"live-badminton"},{type:"SORTVIDEO",title:o("home.shortVideoTitle"),iconName:"live-badminton"}]),v=d("RB"),u=d(-1),x=d("");let S=V({});const R=d([]),j=d(!0),N=d(!1),C=d(!1),D=()=>{M()},M=()=>{["SORTVIDEO"].includes(v.value)?(R.value=[],C.value=!1):(async()=>{R.value.length=0,C.value&&(C.value=!1),j.value=!0;const e={page:1,pageSize:100};"RB"===v.value?(e.rbType=1,e.gameType=void 0):(e.rbType=void 0,e.gameType=v.value);const a=await F(e).finally((()=>{j.value=!1})),l=a.data;if(200===a.code){if("RB"===v.value&&0===l.list.length){N.value=!0;const e=await H();return 200===e.code&&e.data&&e.data>e.systemTime?(u.value=e.data-e.systemTime,void(S=setInterval((()=>{u.value-=1e3,0===u.value&&clearInterval(S),z()}),1e3))):void 0}l.list.forEach((e=>{R.value.push(e)})),N.value=R.value.length===l.total}else N.value=!0})(),["RB"].includes(v.value)?(Y.value.page=0,Z(),K()):(A.value=[],P.value=[])},$=e=>{i.push(`/match/${e.gidm}`),a.dispatch("app/setMatchLiveIndex",1)},z=()=>{if(u.value<0)return clearInterval(S),void M();function e(e){return e<10?"0"+e:e}const a=Math.round(u.value/1e3);let l=parseInt(""+a/3600%24),t=parseInt(""+a/60%60),s=a%60;l=e(l),t=e(t),s=e(s),x.value=l+":"+t+":"+s},A=d([]),K=async()=>{const e=await F({page:1,pageSize:100,rbType:2}),a=e?.data?.list||[];200===e.code&&a.length&&(A.value=a)},P=d([]),q=d(!0),W=d(0),Y=d({page:0,pageSize:10}),Z=async()=>{if(q.value=!0,W.value>0&&Y.value.page*Y.value.pageSize>=W.value)return!1;Y.value.page++,1===Y.value.page&&(P.value.length=0);const e=await E({...Y.value}).finally((()=>{q.value=!1})),a=e?.data?.videoData||[];W.value=e?.data?.total||0,200===e.code&&a.length&&P.value.push(...a)};return(e,a)=>{const l=r("SvgIcon"),o=r("EmptyData"),c=r("van-list"),d=r("van-collapse-item"),w=r("van-collapse"),S=r("van-tab"),N=r("van-tabs"),V=r("van-pull-refresh"),E=m("img");return p(),g("div",{class:L(["live-page",{"has-bet":k(s)}])},[y(V,{modelValue:C.value,"onUpdate:modelValue":a[4]||(a[4]=e=>C.value=e),onRefresh:M},{default:h((()=>[y(N,{active:v.value,"onUpdate:active":a[3]||(a[3]=e=>v.value=e),swipeable:"",sticky:"",shrink:"",border:!1,"offset-top":"12.8vw","line-height":"0",onChange:D},{default:h((()=>[(p(!0),g(O,null,B(k(n),((s,n)=>(p(),I(S,{key:n,name:s.type},{title:h((()=>[f("div",Ue,[f("span",null,b(s.title),1)])])),default:h((()=>[y(w,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value=e)},{default:h((()=>[["SORTVIDEO"].includes(v.value)?T("",!0):(p(),I(d,{key:0,"is-link":!1,class:"collapse-item",name:"HOT"},{title:h((()=>["RB"===s.type?(p(),g("div",ze,[y(l,{class:"first-icon",name:"home-hot-match"}),f("span",Ae,b(e.$t("home.hotMatchTitle")),1),y(l,{class:L(["title-icon",{open:t.value.includes("HOT")}]),name:"home-triangle"},null,8,["class"])])):T("",!0)])),default:h((()=>[0===R.value.length&&u.value>0&&"RB"===v.value?(p(),g("div",Ke,[Pe,f("p",{innerHTML:e.$t("live.nextAM",{num:x.value})},null,8,qe)])):T("",!0),!j.value&&0===R.value.length||0===R.value.length&&u.value<0&&!j.value?(p(),I(o,{key:1})):T("",!0),y(c,{loading:j.value,"onUpdate:loading":a[0]||(a[0]=e=>j.value=e),finished:!j.value},{default:h((()=>[f("div",We,[(p(!0),g(O,null,B(R.value,(e=>(p(),g("div",{key:e.gidm,class:"flex-item"},[y(ce,{item:e,onClick:a=>$(e)},null,8,["item","onClick"])])))),128))])])),_:1},8,["loading","finished"])])),_:2},1024)),A.value.length?(p(),I(d,{key:1,"is-link":!1,class:"collapse-item",name:"ComingSoon"},{title:h((()=>[f("div",Ye,[y(l,{class:"first-icon",name:"home-coming"}),f("span",Ze,b(e.$t("home.comingSoonTitle")),1),y(l,{class:L(["title-icon",{open:t.value.includes("ComingSoon")}]),name:"home-triangle"},null,8,["class"])])])),default:h((()=>[f("div",Ge,[(p(!0),g(O,null,B(A.value,(e=>(p(),g("div",{key:e.gidm,class:"flex-item"},[y(ce,{item:e,onClick:a=>$(e)},null,8,["item","onClick"])])))),128))])])),_:1})):T("",!0),["RB"].includes(v.value)?(p(),I(d,{key:2,"is-link":!1,class:"collapse-item",name:"VIDEO"},{title:h((()=>[f("div",Je,[y(l,{class:"first-icon",name:"home-short-video"}),f("span",Qe,b(e.$t("home.shortVideoTitle")),1),y(l,{class:L(["title-icon",{open:t.value.includes("VIDEO")}]),name:"home-triangle"},null,8,["class"])])])),default:h((()=>[q.value||P.value.length?(p(),I(c,{key:0,loading:q.value,"onUpdate:loading":a[1]||(a[1]=e=>q.value=e),finished:Y.value.page*Y.value.pageSize>=W.value&&!q.value,"finished-text":0==P.value.length?"":e.$t("live.noMore"),onLoad:Z,class:"list-group"},{default:h((()=>[(p(!0),g(O,null,B(P.value,((e,a)=>(p(),g("div",{class:"group-item-box",key:a,onClick:a=>(e=>{i.push({name:"Svideo",query:{videoId:e.videoId}})})(e)},[_(f("img",{class:"bg",errorImg:k(U),type:"1",alt:""},null,8,ea),[[E,e.videoImg]]),f("div",aa,[_(f("img",la,null,512),[[E,e.leagueIcon]]),f("span",ta,b(e.leagueName||e.leagueNameCn),1)]),f("div",sa,b(e.videoTitle),1)],8,Xe)))),128))])),_:2},1032,["loading","finished","finished-text"])):q.value?T("",!0):(p(),I(o,{key:1}))])),_:2},1024)):T("",!0),["SORTVIDEO"].includes(v.value)&&"SORTVIDEO"===s.type&&!C.value?(p(),I($e,{key:3})):T("",!0)])),_:2},1032,["modelValue"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"])])),_:1},8,["modelValue"])],2)}}});ia.__scopeId="data-v-1e8faa64";export{ia as default};
