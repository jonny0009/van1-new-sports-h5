import{s,b as a,E as l,o as e,R as t,P as i,S as c,F as n,Z as r,u as m,a2 as u,Y as o,x as d,B as g,W as v,X as p,d as y,e as k,j as _,c as f,r as b,q as D,O as R,a1 as $,V as h}from"./vue.979f7bee.js";import{_ as w}from"./return@2x.16bf9d85.js";import{_ as L}from"./edit.1068d475.js";import{_ as N,a as I,b as A}from"./star.4290cc16.js";import{d as C,a as j,b as O,c as T,_ as S}from"./data4.3c9f386b.js";import{n as B,o as G,s as P,p as x,C as F,V,q as W,v as Y,w as K,z as q,A as z,B as E,D as U,E as H,F as J,G as X,x as Z,y as M,H as Q,J as ss,d as as,I as ls,N as es,u as ts,O as is,P as cs,j as ns}from"./index.71ee435e.js";import{h as rs}from"./moment.4bb6a643.js";const ms=s=>(v("data-v-67ca5fa0"),s=s(),p(),s),us={class:"match-title"},os={class:"title-left"},ds={class:"top2"},gs=ms((()=>i("div",{class:"left"},[i("div",{class:"top-img"},[i("img",{class:"img_1",src:Z,alt:""}),i("img",{class:"img_2",src:M,alt:""})])],-1))),vs={class:"right"},ps={class:"one"},ys={class:"one two"},ks={key:0,class:"img_1",src:q,alt:""},_s={key:1,class:"img_1",src:z,alt:""},fs={key:2,class:"img_1",src:E,alt:""},bs={key:3,class:"img_1",src:U,alt:""},Ds={key:4,class:"img_1",src:H,alt:""},Rs={key:5,class:"img_1",src:J,alt:""},$s={key:6,class:"img_1",src:X,alt:""},hs={key:7,class:"img_1",src:J,alt:""},ws={class:"team"},Ls={key:0},Ns={class:"team"},Is=ms((()=>i("img",{class:"img_1",src:x,alt:""},null,-1))),As={class:"money-num"},Cs={class:"money-num-1"},js=["src"],Os=["src"],Ts={key:2,class:"img_1",src:B,alt:""},Ss={class:"money-num-2"},Bs={key:0},Gs={key:1},Ps=["src"],xs=["src"],Fs={key:2,class:"img_1",src:G,alt:""},Vs={key:3,class:"num"},Ws={key:4,class:"num"},Ys={class:"addBtn-1"};var Ks=s({props:{item:{type:Object,default:()=>{}}},setup(s){const v=s,p=a((()=>P.state.user.currency)),y=s=>{let a=s.gold;return s.betDTOList.map((s=>{a*=s.ioRatio})),a};return(a,k)=>{const _=l("play");return e(),t("div",null,[i("div",us,[i("div",os,[i("div",null,c(s.item.parlayNum)+c(a.$t("user.session")),1),i("div",null,[(e(!0),t(n,null,r(Number(s.item.parlayNum),(s=>(e(),t("img",{key:s,class:"img_1",src:x,alt:""})))),128))])])]),(e(!0),t(n,null,r(v.item.betDTOList,((a,l)=>(e(),t("div",{key:l},[i("div",ds,[gs,i("div",vs,[i("div",ps,[i("span",null,c(a.betItem),1),i("span",{class:o(["color-2",["L"===a.betResultDetail?"color-3":""]])}," @"+c(a.ioRatio),3)]),i("div",ys,[d(i("span",null,null,512),[[_,a]]),i("span",null,["W"==a.betResultDetail?(e(),t("img",ks)):"L"==a.betResultDetail?(e(),t("img",_s)):"LW"==a.betResultDetail?(e(),t("img",fs)):"LL"==a.betResultDetail?(e(),t("img",bs)):"P"==a.betResultDetail?(e(),t("img",Ds)):"D"==a.betResultDetail?(e(),t("img",Rs)):1==s.item.state?(e(),t("img",$s)):(e(),t("img",hs))])]),i("div",ws,[g(c(a.homeTeam)+" v "+c(a.awayTeam)+" ",1),a.resultScore?(e(),t("span",Ls," ["+c(a.resultScore)+"] ",1)):u("",!0)]),i("div",Ns,[Is,i("span",null,c(a.leagueName),1)])])])])))),128)),i("div",As,[i("div",Cs,[i("span",null,c(a.$t("user.BettingAmount"))+":",1),i("span",null,["CNY"===m(p)?(e(),t("img",{key:0,class:"img_1",src:m(F),alt:""},null,8,js)):"VNDK"===m(p)?(e(),t("img",{key:1,class:"img_1",src:m(V),alt:""},null,8,Os)):(e(),t("img",Ts)),i("span",null,c(m(W)(s.item.gold)),1)])]),i("div",Ss,[3==s.item.state?(e(),t("span",Bs,c(a.$t("user.practical"))+":",1)):u("",!0),1==s.item.state?(e(),t("span",Gs,c(a.$t("user.CompensableAmount")),1)):u("",!0),i("span",null,["CNY"===m(p)?(e(),t("img",{key:0,class:"img_1",src:m(Y),alt:""},null,8,Ps)):"VNDK"===m(p)?(e(),t("img",{key:1,class:"img_1",src:m(K),alt:""},null,8,xs)):(e(),t("img",Fs)),3==s.item.state?(e(),t("span",Vs,c(m(W)(s.item.winAndLossGold)),1)):u("",!0),1==s.item.state?(e(),t("span",Ws,c(m(W)(y(s.item))),1)):u("",!0)])])]),i("div",Ys,[i("span",null,c(a.$t("user.fill")),1)])])}}});Ks.__scopeId="data-v-67ca5fa0";const qs=s=>(v("data-v-fd72bfd8"),s=s(),p(),s),zs={class:"top"},Es=qs((()=>i("div",{class:"left"},[i("div",{class:"top-img"},[i("img",{class:"img_1",src:Z,alt:""}),i("img",{class:"img_2",src:M,alt:""})])],-1))),Us={class:"right"},Hs={class:"font_1"},Js={key:0,class:"color-1"},Xs={class:"font_2"},Zs={class:"top2"},Ms=qs((()=>i("div",{class:"left"},[i("img",{class:"img_1",src:Q,alt:""})],-1))),Qs={class:"right"},sa={class:"one"},aa={class:"one two"},la={key:0,class:"img_1",src:q,alt:""},ea={key:1,class:"img_1",src:z,alt:""},ta={key:2,class:"img_1",src:E,alt:""},ia={key:3,class:"img_1",src:U,alt:""},ca={key:4,class:"img_1",src:H,alt:""},na={key:5,class:"img_1",src:J,alt:""},ra={key:6,class:"img_1",src:X,alt:""},ma={key:7,class:"img_1",src:J,alt:""},ua={class:"top3"},oa={class:"one"},da=["src"],ga=["src"],va={key:2,class:"img_1",src:B,alt:""},pa={class:"one two"},ya={key:0},ka={key:1},_a={key:2},fa=["src"],ba=["src"],Da={key:2,class:"img_1",src:G,alt:""},Ra={key:3,class:"color-1"},$a={key:4,class:"color-1"},ha={key:5,class:"num color-1"},wa={class:"addBtn-1"};var La=s({props:{item:{type:Object,default:()=>{}}},setup(s){const v=s,p=a((()=>P.state.user.currency)),y=s=>{let a=s.gold;return s.betDTOList.map((s=>{a*=s.ioRatio})),a};return(a,k)=>{const _=l("play"),f=l("points");return e(),t("div",null,[(e(!0),t(n,null,r(v.item.betDTOList,((l,n)=>(e(),t("div",{key:n},[i("div",zs,[Es,i("div",Us,[i("div",Hs,[g(c(l.homeTeam)+" v "+c(l.awayTeam)+" ",1),l.resultScore?(e(),t("span",Js," ["+c(l.resultScore)+"]",1)):u("",!0)]),i("div",Xs,c(l.leagueName),1)])]),i("div",Zs,[Ms,i("div",Qs,[i("div",sa,[i("span",null,c(l.betItem),1),i("span",{class:o(["color-2",["L"===l.betResultDetail?"color-3":""]])}," @"+c(l.ioRatio),3)]),i("div",aa,[d(i("span",null,null,512),[[_,l]]),i("span",null,["W"==l.betResultDetail?(e(),t("img",la)):"L"==l.betResultDetail?(e(),t("img",ea)):"LW"==l.betResultDetail?(e(),t("img",ta)):"LL"==l.betResultDetail?(e(),t("img",ia)):"P"==l.betResultDetail?(e(),t("img",ca)):"D"==l.betResultDetail?(e(),t("img",na)):1==s.item.state?(e(),t("img",ra)):(e(),t("img",ma))])])])]),i("div",ua,[i("div",oa,[i("span",null,c(a.$t("user.BettingAmount")),1),i("div",null,["CNY"===m(p)?(e(),t("img",{key:0,class:"img_1",src:m(F),alt:""},null,8,da)):"VNDK"===m(p)?(e(),t("img",{key:1,class:"img_1",src:m(V),alt:""},null,8,ga)):(e(),t("img",va)),i("span",null,c(m(W)(s.item.gold)),1)])]),i("div",pa,[3==s.item.state?(e(),t("span",ya,c(a.$t("user.practical"))+":",1)):u("",!0),2==s.item.state?(e(),t("span",ka,c(a.$t("user.practical"))+":",1)):u("",!0),1==s.item.state?(e(),t("span",_a,c(a.$t("user.CompensableAmount"))+":",1)):u("",!0),i("div",null,["CNY"===m(p)?(e(),t("img",{key:0,class:"img_1",src:m(Y),alt:""},null,8,fa)):"VNDK"===m(p)?(e(),t("img",{key:1,class:"img_1",src:m(K),alt:""},null,8,ba)):(e(),t("img",Da)),3==s.item.state?d((e(),t("span",Ra,[g(c(m(W)(s.item.winAndLossGold)),1)])),[[f,s.item.winAndLossGold||0]]):u("",!0),2==s.item.state?d((e(),t("span",$a,[g(c(m(W)(s.item.winAndLossGold)),1)])),[[f,s.item.winAndLossGold||0]]):u("",!0),1==s.item.state?d((e(),t("span",ha,[g(c(m(W)(y(s.item))),1)])),[[f,y(s.item)]]):u("",!0)])])]),i("div",wa,[i("span",null,c(a.$t("user.fill")),1)])])))),128))])}}});La.__scopeId="data-v-fd72bfd8";const Na={class:"top-1 top-2"},Ia=(s=>(v("data-v-713b5282"),s=s(),p(),s))((()=>i("img",{class:"img_1",src:N,alt:""},null,-1))),Aa={class:"right"},Ca={key:0,class:"img_1",src:z,alt:""},ja={key:1,class:"img_1",src:q,alt:""},Oa={key:0,class:"dataList"},Ta={class:"top-3"},Sa=["src"],Ba={class:"name"},Ga={class:"name-2"},Pa={class:"right"};var xa=s({props:{peopleInfo:{type:Object,default:()=>{}}},setup(s){const l=s,o=a((()=>P.state.user.userInfo)),d=y(""),g=y(""),v=y({}),p=k({arr:[]});_((()=>{g.value=rs().valueOf();d.value=g.value-6048e5,b()}));const b=async()=>{const s={orderState:"1",page:1,pageSize:5,beginTime:d.value,endTime:g.value},a=await ss(s);if(200!==a.code)return as(a.msg);p.arr=a.data;const l=[];p.arr.map((s=>{s.winAndLossGold>=0?l.push(1):l.push(0)})),v.value.arr=l,console.log()};return(s,a)=>(e(),t("div",null,[i("div",Na,[Ia,i("span",null,c(s.$t("user.betForm")),1),i("div",Aa,[i("span",null,c(s.$t("user.RecentAchievements"))+":",1),(e(!0),t(n,null,r(v.value.arr,((s,a)=>(e(),t("span",{key:a,class:"img_1"},[1!==s?(e(),t("img",Ca)):(e(),t("img",ja))])))),128))])]),m(p).arr.length?(e(),t("div",Oa,[(e(!0),t(n,null,r(m(p).arr,((n,r)=>{return e(),t("div",{key:r},[i("div",Ta,[i("div",{class:"left",onClick:a[0]||(a[0]=s=>{return a="/elseInfo",void console.log(a,"他人未开放===");var a})},[i("img",{class:"img_1",src:(d=l.peopleInfo.headImg,d?`${ls}${d}`:es),alt:""},null,8,Sa),i("div",Ba,[i("div",null,c(m(o).nickName),1),i("div",Ga,c(m(o).loginName),1)])]),i("div",Pa,c(s.$t("user.end")),1)]),1==n.parlayNum?(e(),f(La,{key:0,item:n,class:"item"},null,8,["item"])):u("",!0),1!=n.parlayNum&&2!==n.state?(e(),f(Ks,{key:1,item:n,class:"item"},null,8,["item"])):u("",!0)]);var d})),128))])):u("",!0)]))}});xa.__scopeId="data-v-713b5282";const Fa=s=>(v("data-v-39a56f5c"),s=s(),p(),s),Va={class:"userInfo"},Wa={class:"user"},Ya={class:"user-info"},Ka=["src"],qa={class:"user-right"},za={class:"user-1"},Ea=Fa((()=>i("img",{class:"img_1",src:I,alt:""},null,-1))),Ua={class:"user-2"},Ha={class:"user-3"},Ja=Fa((()=>i("img",{class:"img_1",src:A,alt:""},null,-1))),Xa={class:"user-4"},Za=Fa((()=>i("div",{class:"center"},null,-1))),Ma={class:"content"},Qa={class:"top-1"},sl=Fa((()=>i("img",{class:"img_1",src:S,alt:""},null,-1))),al={class:"circle"},ll={class:"left"},el=["src"],tl={class:"right"},il={key:0},cl={key:1},nl=Fa((()=>i("div",{class:"foot"},null,-1)));var rl=s({setup(s){const l=h(),u=a((()=>P.state.user.userInfo)),o=y({}),d=y({}),g=y(""),{t:v}=ts(),p=s=>{s.includes("selfFocus")||l.push("/user"+s)},f=y(v("user.PersonalProfile")),N=k({arr:[{num:0,name:v("user.winRate"),img:C},{num:0,name:v("user.profit"),img:j},{num:0,name:v("user.BetAmount"),img:O},{num:0,name:v("user.refund"),img:T}]});_((()=>{I(),A()}));const I=async()=>{const s={fPlayerId:u.value.playerId},a=await is(s);if(200!==a.code)return as(a.msg);o.value=a.data},A=async()=>{const s=await cs({type:2});if(200!==s.code)return as(s.msg);d.value=s.data,g.value=100*d.value.winRatio||0,N.arr[0].num=String(100*d.value.winRatio).replace(/^(.*\..{4}).*$/,"$1")+"%",N.arr[1].num=d.value.winOrderAmount-d.value.orderAmount||0,N.arr[2].num=d.value.orderAmount||0,N.arr[3].num=d.value.winOrderAmount||0};return(s,a)=>{const d=b("van-nav-bar");return e(),t("div",Va,[D(d,{class:"bg-title",title:f.value,border:!1},{left:R((()=>[i("img",{class:"img_1",src:w,alt:"",onClick:a[0]||(a[0]=s=>{l.push("/home")})})])),right:R((()=>[i("img",{class:"img_1",src:L,alt:"",onClick:a[1]||(a[1]=s=>p("/editUser"))})])),_:1},8,["title"]),i("div",Wa,[i("div",Ya,[i("div",{class:"user-img",onClick:a[2]||(a[2]=s=>p("/editImg"))},[i("img",{class:"img_1",src:(g=o.value.headImg,g?`${ls}${g}`:es),alt:""},null,8,Ka)]),i("div",qa,[i("div",za,[Ea,i("span",null,c(o.value.nickName),1)]),i("div",Ua,c(m(u).loginName||""),1),i("div",Ha,[Ja,i("span",null,c(s.$t("user.RegistrationTime"))+" "+c(m(ns)(o.value.createTime)),1)]),i("div",Xa,[i("div",{class:"left",onClick:a[3]||(a[3]=s=>p("/selfFocus?num=1"))},[i("span",null,c(o.value.followNum),1),i("span",null,c(s.$t("user.follow")),1)]),Za,i("div",{class:"left right",onClick:a[4]||(a[4]=s=>p("/selfFocus?num=2"))},[i("span",null,c(o.value.fansCount),1),i("span",null,c(s.$t("user.fans")),1)])])])]),i("span",{class:"note",onClick:a[5]||(a[5]=$((s=>p("/editUser")),["stop"]))},c(o.value.profiles),1)]),i("div",Ma,[i("div",Qa,[sl,i("span",null,c(s.$t("user.text8",{num:7})),1)]),i("div",al,[(e(!0),t(n,null,r(m(N).arr,((s,a)=>(e(),t("div",{key:a,class:"num-1"},[i("div",ll,[i("img",{class:"img_1",src:s.img,alt:""},null,8,el)]),i("div",tl,[0===a?(e(),t("div",il,c(s.num),1)):(e(),t("div",cl,c(m(W)(s.num)),1)),i("div",null,c(s.name),1)])])))),128))]),D(xa,{"people-info":o.value},null,8,["people-info"]),nl])]);var g}}});rl.__scopeId="data-v-39a56f5c";export{rl as default};
