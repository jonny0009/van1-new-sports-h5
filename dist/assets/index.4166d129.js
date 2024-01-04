import{s as e,b as s,r as a,E as t,o as l,R as i,P as n,S as m,F as r,_ as c,u,c as o,a2 as d,x as g,Z as p,B as v,X as y,Y as k,d as f,e as _,j as h,q as b,O as L,U as N,W as T}from"./vue.b4a9caec.js";import{_ as I}from"./return@2x.ff46508d.js";import{d as w,a as R,b as $,c as D,_ as S,e as j}from"./edit.45ad6a6f.js";import{_ as A,a as C,b as F}from"./star.ae9af731.js";import{s as O,o as x,p as P,q as B,v as K,w as W,x as Y,y as z,z as U,A as V,B as G,C as J,b as q,I as E,H as M,u as H,J as X,K as Z,k as Q}from"./index.5445737f.js";import{h as ee}from"./moment.9709ab41.js";const se={class:"match-title"},ae={class:"title-left"},te={class:"top2"},le={class:"left"},ie={class:"top-img"},ne={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},me={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},re={class:"right"},ce={class:"one"},ue={class:"one two"},oe={key:0},de={key:1},ge={key:0,class:"img_1",src:B,alt:""},pe={key:1,class:"img_1",src:K,alt:""},ve={key:2,class:"img_1",src:W,alt:""},ye={key:3,class:"img_1",src:Y,alt:""},ke={key:4,class:"img_1",src:z,alt:""},fe={key:5,class:"img_1",src:U,alt:""},_e={key:6,class:"img_1",src:V,alt:""},he={key:7,class:"img_1",src:V,alt:""},be={class:"team"},Le={key:0},Ne={class:"team"},Te=(e=>(y("data-v-b288fab0"),e=e(),k(),e))((()=>n("img",{class:"img_1",src:x,alt:""},null,-1))),Ie={class:"money-num"},we={class:"money-num-1"},Re={class:"money-num-2"},$e={key:0},De={key:1},Se={key:0},je={key:0,style:{color:"#FF9A00"}},Ae={key:1,style:{color:"#FF9A00"}},Ce={key:1},Fe={key:2,class:"num"},Oe={key:3,class:"num"};var xe=e({props:{item:{type:Object,default:()=>{}}},setup(e){const y=e,k=s((()=>O.state.user.currency)),f=s((()=>O.state.user.teamNameList||[])),_=e=>{if(f.value.length){const s=f.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}};return(s,f)=>{const h=a("SvgIcon"),b=t("img"),L=t("play");return l(),i("div",null,[n("div",se,[n("div",ae,[n("div",null,m(e.item.parlayNum)+m(s.$t("user.session")),1),n("div",null,[(l(!0),i(r,null,c(Number(e.item.parlayNum),(e=>(l(),i("img",{key:e,class:"img_1",src:x,alt:""})))),128))])])]),(l(!0),i(r,null,c(y.item.betDTOList,((s,a)=>{return l(),i("div",{key:a},[n("div",te,[n("div",le,[n("div",ie,[g(n("img",ne,null,512),[[b,s.homeLogo]]),g(n("img",me,null,512),[[b,s.awayLogo]])])]),n("div",re,[n("div",ce,[n("span",null,m((t=s.betItemLang,JSON.parse(t)[localStorage.getItem("locale")||"zh-cn"])),1),n("span",{class:p(["color-2",["L"===s.betResultDetail?"color-3":""]])}," @"+m(s.ioRatio),3)]),n("div",ue,[s.homeTeam&&s.awayTeam?g((l(),i("span",oe,null,512)),[[L,s]]):(l(),i("span",de,"?")),n("span",null,[1==e.item.state?(l(),i("img",ge)):"W"==s.betResultDetail?(l(),i("img",pe)):"L"==s.betResultDetail?(l(),i("img",ve)):"LW"==s.betResultDetail?(l(),i("img",ye)):"LL"==s.betResultDetail?(l(),i("img",ke)):"P"==s.betResultDetail?(l(),i("img",fe)):"D"==s.betResultDetail?(l(),i("img",_e)):(l(),i("img",he))])]),n("div",be,[v(m(_(s).homeTeam)+" v "+m(_(s).awayTeam)+" ",1),s.resultScore?(l(),i("span",Le," ["+m(s.resultScore)+"] ",1)):d("",!0)]),n("div",Ne,[Te,n("span",null,m(_(s).leagueShortName),1)])])])]);var t})),128)),n("div",Ie,[n("div",we,[n("span",null,m(s.$t("user.BettingAmount"))+":",1),n("span",null,["CNY"===u(k)?(l(),o(h,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===u(k)?(l(),o(h,{key:1,name:"user-vndk",class:"img_1"})):(l(),o(h,{key:2,name:"user-usdt",class:"img_1"})),n("span",null,m(u(P)(e.item.gold)),1)])]),n("div",Re,[0==e.item.state||-1==e.item.state||1==e.item.state?(l(),i("span",$e,m(s.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state?(l(),i("span",De,m(s.$t("user.practical"))+":",1)):d("",!0),n("span",null,[3!==e.item.state&&5!==e.item.state?(l(),i("span",Se,[-1==e.item.state?(l(),i("span",je,m(s.$t("user.editPend")),1)):d("",!0),0==e.item.state?(l(),i("span",Ae,m(s.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),3!==e.item.state&&5!==e.item.state?(l(),i("span",Ce,["CNY"===u(k)?(l(),o(h,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===u(k)?(l(),o(h,{key:1,name:"user-vndk",class:"img_1"})):(l(),o(h,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0==e.item.state||-1==e.item.state||1==e.item.state?(l(),i("span",Fe,m(u(P)((N=e.item,N.gold*N.sioRatio))),1)):3!==e.item.state&&5!==e.item.state?(l(),i("span",Oe,m(u(P)(e.item.winGold)),1)):d("",!0)])])])]);var N}}});xe.__scopeId="data-v-b288fab0";const Pe={class:"top"},Be={class:"left"},Ke={class:"top-img"},We={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Ye={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},ze={class:"right"},Ue={class:"font_1"},Ve={key:0},Ge={key:1},Je={key:2,class:"color-1"},qe={key:0,class:"font_2"},Ee={key:1,class:"font_2"},Me={class:"top2"},He=(e=>(y("data-v-7b7ab167"),e=e(),k(),e))((()=>n("div",{class:"left"},[n("img",{class:"img_1",src:G,alt:""})],-1))),Xe={class:"right"},Ze={class:"one"},Qe={class:"one two"},es={key:0},ss={key:1},as={key:2},ts={key:0,class:"img_1",src:B,alt:""},ls={key:1,class:"img_1",src:K,alt:""},is={key:2,class:"img_1",src:W,alt:""},ns={key:3,class:"img_1",src:Y,alt:""},ms={key:4,class:"img_1",src:z,alt:""},rs={key:5,class:"img_1",src:U,alt:""},cs={key:6,class:"img_1",src:V,alt:""},us={key:7,class:"img_1",src:V,alt:""},os={class:"top3"},ds={class:"one"},gs={class:"one two"},ps={key:0},vs={key:1},ys={key:0},ks={key:0,style:{color:"#FF9A00"}},fs={key:1,style:{color:"#FF9A00"}},_s={key:1},hs={key:2,class:"num color-1"},bs={key:3,class:"color-1"};var Ls=e({props:{item:{type:Object,default:()=>{}}},setup(e){const v=e,y=s((()=>O.state.user.currency)),k=s((()=>O.state.user.teamNameList||[])),f=s((()=>O.state.user.championLangList||[])),_=e=>e.gold*e.sioRatio,h=e=>{if(k.value.length){const s=k.value.find((s=>s.gidm===e.systemId));return s||{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}}return{homeTeam:"?",awayTeam:"?",leagueShortName:"?"}},b=e=>{if(f.value.length){const s=f.value.find((s=>s.ratioId===e));return s?s.ratioName:"?"}return"?"};return(s,k)=>{const f=a("SvgIcon"),L=t("img"),N=t("play");return l(),i("div",null,[(l(!0),i(r,null,c(v.item.betDTOList,((a,t)=>{return l(),i("div",{key:t},[n("div",Pe,[n("div",Be,[n("div",Ke,[g(n("img",We,null,512),[[L,a.homeLogo]]),g(n("img",Ye,null,512),[[L,a.awayLogo]])])]),n("div",ze,[n("div",Ue,[a.championType?(l(),i("span",Ve,m(s.$t("betting.champion")),1)):(l(),i("span",Ge,m(h(a).homeTeam)+" v "+m(h(a).awayTeam),1)),a.resultScore?(l(),i("span",Je," ["+m(a.resultScore)+"]",1)):d("",!0)]),a.championType?(l(),i("div",qe,m(b(a.systemId)),1)):(l(),i("div",Ee,m(h(a).leagueShortName),1))])]),n("div",Me,[He,n("div",Xe,[n("div",Ze,[n("span",null,m((r=a.betItemLang,JSON.parse(r)[localStorage.getItem("locale")||"zh-cn"])),1),n("span",{class:p(["color-2",["L"===a.betResultDetail?"color-3":""]])}," @"+m(a.ioRatio),3)]),n("div",Qe,[a.championType?(l(),i("span",es,m(b(a.gameId)),1)):a.homeTeam&&a.awayTeam?g((l(),i("span",ss,null,512)),[[N,a]]):(l(),i("span",as,"?")),n("span",null,[1==e.item.state?(l(),i("img",ts)):"W"==a.betResultDetail?(l(),i("img",ls)):"L"==a.betResultDetail?(l(),i("img",is)):"LW"==a.betResultDetail?(l(),i("img",ns)):"LL"==a.betResultDetail?(l(),i("img",ms)):"P"==a.betResultDetail?(l(),i("img",rs)):"D"==a.betResultDetail?(l(),i("img",cs)):(l(),i("img",us))])])])]),n("div",os,[n("div",ds,[n("span",null,m(s.$t("user.BettingAmount")),1),n("div",null,["CNY"===u(y)?(l(),o(f,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===u(y)?(l(),o(f,{key:1,name:"user-vndk",class:"img_1"})):(l(),o(f,{key:2,name:"user-usdt",class:"img_1"})),n("span",null,m(u(P)(e.item.gold)),1)])]),n("div",gs,[0==e.item.state||-1==e.item.state||1==e.item.state?(l(),i("span",ps,m(s.$t("user.CompensableAmount"))+":",1)):3!==e.item.state&&5!==e.item.state||"LL"==a.betResultDetail?(l(),i("span",vs,m(s.$t("user.practical"))+":",1)):d("",!0),n("div",null,[3!==e.item.state&&5!==e.item.state?(l(),i("span",ys,[-1==e.item.state?(l(),i("span",ks,m(s.$t("user.editPend")),1)):d("",!0),0==e.item.state?(l(),i("span",fs,m(s.$t("user.affirmPend")),1)):d("",!0)])):d("",!0),3!==e.item.state&&5!==e.item.state||"LL"==a.betResultDetail?(l(),i("span",_s,["CNY"===u(y)?(l(),o(f,{key:0,name:"user-cny",class:"img_1"})):"VNDK"===u(y)?(l(),o(f,{key:1,name:"user-vndk",class:"img_1"})):(l(),o(f,{key:2,name:"user-usdt",class:"img_1"}))])):d("",!0),0==e.item.state||-1==e.item.state||1==e.item.state?(l(),i("span",hs,m(u(P)(_(e.item))),1)):3!==e.item.state&&5!==e.item.state||"LL"==a.betResultDetail?(l(),i("span",bs,m(u(P)(e.item.winGold)),1)):d("",!0)])])])]);var r})),128))])}}});Ls.__scopeId="data-v-7b7ab167";const Ns={class:"top-1 top-2"},Ts=(e=>(y("data-v-0ae873c8"),e=e(),k(),e))((()=>n("img",{class:"img_1",src:A,alt:""},null,-1))),Is={class:"right"},ws={key:0,class:"img_1",src:W,alt:""},Rs={key:1,class:"img_1",src:K,alt:""},$s={class:"top-3"},Ds=["src"],Ss={class:"name"},js={class:"name-2"},As={class:"right"};var Cs=e({props:{peopleInfo:{type:Object,default:()=>{}}},setup(e){const t=e,g=s((()=>O.state.user.userInfo)),p=f(""),v=f(""),y=f(!1),k=f(!1),N=_({arr:[]});h((()=>{v.value=ee().valueOf();p.value=v.value-6048e5}));let T=0;const I=async()=>{T++;const e={orderState:"1",page:T,pageSize:5,beginTime:p.value,endTime:v.value},s=await J(e);if(200!==s.code)return y.value=!1,k.value=!0,q(s.msg);const a=s.data;if(200===s.code){a.forEach((e=>{N.arr.push(e)}));const e=[],s=[];N.arr.map((a=>{a.betDTOList.map((a=>{const{championType:t,systemId:l,gidm:i}=a;t&&s.push(i),e.push(l)}))})),O.dispatch("user/getMoreTeamList",e.join()),O.dispatch("user/getChampionLang",s.join()),y.value=!1,k.value=!a.length}};return(e,s)=>{const p=a("van-list");return l(),i("div",null,[n("div",Ns,[Ts,n("span",null,m(e.$t("user.betForm")),1),n("div",Is,[n("span",null,m(e.$t("user.RecentAchievements"))+":",1),(l(!0),i(r,null,c(u(N).arr.slice(0,5),((e,s)=>(l(),i("span",{key:s,class:"img_1"},[e.winAndLossGold<0?(l(),i("img",ws)):(l(),i("img",Rs))])))),128))])]),b(p,{loading:y.value,"onUpdate:loading":s[1]||(s[1]=e=>y.value=e),finished:k.value,"finished-text":e.$t("live.noMore"),class:"dataList","loading-text":e.$t("user.loadingText"),onLoad:I},{default:L((()=>[(l(!0),i(r,null,c(u(N).arr,((a,r)=>{return l(),i("div",{key:r},[n("div",$s,[n("div",{class:"left",onClick:s[0]||(s[0]=e=>{return s="/elseInfo",void console.log(s,"他人未开放===");var s})},[n("img",{class:"img_1",src:(c=t.peopleInfo.headImg,c?`${E}${c}`:M),alt:""},null,8,Ds),n("div",Ss,[n("div",null,m(u(g).nickName),1),n("div",js,m(u(g).loginName),1)])]),n("div",As,m(e.$t("user.end")),1)]),1==a.parlayNum?(l(),o(Ls,{key:0,item:a,class:"item"},null,8,["item"])):d("",!0),1!=a.parlayNum&&2!==a.state?(l(),o(xe,{key:1,item:a,class:"item"},null,8,["item"])):d("",!0)]);var c})),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])}}});Cs.__scopeId="data-v-0ae873c8";const Fs=e=>(y("data-v-d76ba964"),e=e(),k(),e),Os={class:"userInfo"},xs={class:"user"},Ps={class:"user-info"},Bs=["src"],Ks={class:"user-right"},Ws={class:"user-1"},Ys=Fs((()=>n("img",{class:"img_1",src:C,alt:""},null,-1))),zs={class:"user-2"},Us={class:"user-3"},Vs=Fs((()=>n("img",{class:"img_1",src:F,alt:""},null,-1))),Gs={class:"user-4"},Js=Fs((()=>n("div",{class:"center"},null,-1))),qs={class:"content"},Es={class:"top-1"},Ms=Fs((()=>n("img",{class:"img_1",src:j,alt:""},null,-1))),Hs={class:"circle"},Xs={class:"left"},Zs=["src"],Qs={class:"right"},ea={key:0},sa={key:1};var aa=e({setup(e){const t=T(),o=s((()=>O.state.user.userInfo)),d=f({}),g=f({}),p=f(""),{t:v}=H(),y=e=>{e.includes("selfFocus")||t.push("/user"+e)},k=f(v("user.PersonalProfile")),j=_({arr:[{num:0,name:v("user.winRate"),img:w},{num:0,name:v("user.profit"),img:R},{num:0,name:v("user.BetAmount"),img:$},{num:0,name:v("user.refund"),img:D}]});h((()=>{A(),C()}));const A=async()=>{const e={fPlayerId:o.value.playerId},s=await X(e);if(200!==s.code)return q(s.msg);d.value=s.data},C=async()=>{const e=await Z({type:2});if(200!==e.code)return q(e.msg);g.value=e.data,p.value=100*g.value.winRatio||0,j.arr[0].num=String(100*g.value.winRatio).replace(/^(.*\..{2}).*$/,"$1")+"%",j.arr[1].num=g.value.winOrderAmount-g.value.orderAmount||0,j.arr[2].num=g.value.orderAmount||0,j.arr[3].num=g.value.winOrderAmount||0};return(e,s)=>{const g=a("van-nav-bar");return l(),i("div",Os,[b(g,{class:"bg-title",title:k.value,border:!1},{left:L((()=>[n("img",{class:"img_1",src:I,alt:"",onClick:s[0]||(s[0]=e=>{t.push("/home")})})])),right:L((()=>[n("img",{class:"img_1",src:S,alt:"",onClick:s[1]||(s[1]=e=>y("/editUser"))})])),_:1},8,["title"]),n("div",xs,[n("div",Ps,[n("div",{class:"user-img",onClick:s[2]||(s[2]=e=>y("/editImg"))},[n("img",{class:"img_1",src:(p=d.value.headImg,p?`${E}${p}`:M),alt:""},null,8,Bs)]),n("div",Ks,[n("div",Ws,[Ys,n("span",null,m(d.value.nickName),1)]),n("div",zs,m(u(o).loginName||""),1),n("div",Us,[Vs,n("span",null,m(e.$t("user.RegistrationTime"))+" "+m(u(Q)(u(o).createTime)),1)]),n("div",Gs,[n("div",{class:"left",onClick:s[3]||(s[3]=e=>y("/selfFocus?num=1"))},[n("span",null,m(d.value.followNum),1),n("span",null,m(e.$t("user.follow")),1)]),Js,n("div",{class:"left right",onClick:s[4]||(s[4]=e=>y("/selfFocus?num=2"))},[n("span",null,m(d.value.fansCount),1),n("span",null,m(e.$t("user.fans")),1)])])])]),n("span",{class:"note",onClick:s[5]||(s[5]=N((e=>y("/editUser")),["stop"]))},m(d.value.profiles),1)]),n("div",qs,[n("div",Es,[Ms,n("span",null,m(e.$t("user.text8",{num:7})),1)]),n("div",Hs,[(l(!0),i(r,null,c(u(j).arr,((e,s)=>(l(),i("div",{key:s,class:"num-1"},[n("div",Xs,[n("img",{class:"img_1",src:e.img,alt:""},null,8,Zs)]),n("div",Qs,[0===s?(l(),i("div",ea,m(e.num),1)):(l(),i("div",sa,m(u(P)(e.num)),1)),n("div",null,m(e.name),1)])])))),128))]),b(Cs,{"people-info":d.value},null,8,["people-info"])])]);var p}}});aa.__scopeId="data-v-d76ba964";export{aa as default};
