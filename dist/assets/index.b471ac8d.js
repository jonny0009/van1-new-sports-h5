import{s,b as a,E as e,o as t,R as l,P as i,S as m,F as n,Z as c,u as r,a2 as u,Y as o,x as d,B as g,W as v,X as p,d as y,e as k,j as _,c as f,r as b,q as h,O as $,a1 as D,V as R}from"./vue.979f7bee.js";import{_ as w}from"./return@2x.16bf9d85.js";import{_ as I}from"./edit.1068d475.js";import{_ as N,a as T,b as L}from"./star.9703e9ab.js";import{d as A,a as C,b as F,c as j,_ as O}from"./data4.3c9f386b.js";import{o as P,p as S,s as B,v as K,C as x,V,w as W,x as Y,y as G,B as H,D as z,E,F as M,G as U,H as q,J,z as Q,A as X,K as Z,L as ss,d as as,I as es,P as ts,u as ls,Q as is,R as ms,k as ns}from"./index.877ad377.js";import{h as cs}from"./moment.4bb6a643.js";const rs=s=>(v("data-v-3bc8abb0"),s=s(),p(),s),us={class:"match-title"},os={class:"title-left"},ds={class:"top2"},gs=rs((()=>i("div",{class:"left"},[i("div",{class:"top-img"},[i("img",{class:"img_1",src:Q,alt:""}),i("img",{class:"img_2",src:X,alt:""})])],-1))),vs={class:"right"},ps={class:"one"},ys={class:"one two"},ks={key:0},_s={key:1},fs={key:0,class:"img_1",src:H,alt:""},bs={key:1,class:"img_1",src:z,alt:""},hs={key:2,class:"img_1",src:E,alt:""},$s={key:3,class:"img_1",src:M,alt:""},Ds={key:4,class:"img_1",src:U,alt:""},Rs={key:5,class:"img_1",src:q,alt:""},ws={key:6,class:"img_1",src:J,alt:""},Is={key:7,class:"img_1",src:J,alt:""},Ns={class:"team"},Ts={key:0},Ls={class:"team"},As=rs((()=>i("img",{class:"img_1",src:K,alt:""},null,-1))),Cs={class:"money-num"},Fs={class:"money-num-1"},js=["src"],Os=["src"],Ps={key:2,class:"img_1",src:P,alt:""},Ss={class:"money-num-2"},Bs={key:0},Ks={key:1},xs={key:0},Vs={key:0,style:{color:"#FF9A00"}},Ws={key:1,style:{color:"#FF9A00"}},Ys={key:1},Gs=["src"],Hs=["src"],zs={key:2,class:"img_1",src:S,alt:""},Es={key:2,class:"num"},Ms={key:3,class:"num"},Us={class:"addBtn-1"};var qs=s({props:{item:{type:Object,default:()=>{}}},setup(s){const v=s,p=a((()=>B.state.user.currency)),y=s=>{const a=localStorage.getItem("plateMaskKey");let e=s.gold;return s.betDTOList.map((s=>{e*=s.ioRatio})),(null==a?void 0:a.includes("H"))?e+s.gold:e};return(a,k)=>{const _=e("play");return t(),l("div",null,[i("div",us,[i("div",os,[i("div",null,m(s.item.parlayNum)+m(a.$t("user.session")),1),i("div",null,[(t(!0),l(n,null,c(Number(s.item.parlayNum),(s=>(t(),l("img",{key:s,class:"img_1",src:K,alt:""})))),128))])])]),(t(!0),l(n,null,c(v.item.betDTOList,((a,e)=>(t(),l("div",{key:e},[i("div",ds,[gs,i("div",vs,[i("div",ps,[i("span",null,m(a.betItem),1),i("span",{class:o(["color-2",["L"===a.betResultDetail?"color-3":""]])}," @"+m(a.ioRatio),3)]),i("div",ys,[a.homeTeam&&a.awayTeam?d((t(),l("span",ks,null,512)),[[_,a]]):(t(),l("span",_s,"?")),i("span",null,["W"==a.betResultDetail?(t(),l("img",fs)):"L"==a.betResultDetail?(t(),l("img",bs)):"LW"==a.betResultDetail?(t(),l("img",hs)):"LL"==a.betResultDetail?(t(),l("img",$s)):"P"==a.betResultDetail?(t(),l("img",Ds)):"D"==a.betResultDetail?(t(),l("img",Rs)):1==s.item.state?(t(),l("img",ws)):(t(),l("img",Is))])]),i("div",Ns,[g(m(a.homeTeam?a.homeTeam:"?")+" v "+m(a.awayTeam?a.awayTeam:"?")+" ",1),a.resultScore?(t(),l("span",Ts," ["+m(a.resultScore)+"] ",1)):u("",!0)]),i("div",Ls,[As,i("span",null,m(a.leagueName),1)])])])])))),128)),i("div",Cs,[i("div",Fs,[i("span",null,m(a.$t("user.BettingAmount"))+":",1),i("span",null,["CNY"===r(p)?(t(),l("img",{key:0,class:"img_1",src:r(x),alt:""},null,8,js)):"VNDK"===r(p)?(t(),l("img",{key:1,class:"img_1",src:r(V),alt:""},null,8,Os)):(t(),l("img",Ps)),i("span",null,m(r(W)(s.item.gold)),1)])]),i("div",Ss,[0==s.item.state||-1==s.item.state||1==s.item.state?(t(),l("span",Bs,m(a.$t("user.CompensableAmount"))+":",1)):3!==s.item.state&&5!==s.item.state?(t(),l("span",Ks,m(a.$t("user.practical"))+":",1)):u("",!0),i("span",null,[3!==s.item.state&&5!==s.item.state?(t(),l("span",xs,[-1==s.item.state?(t(),l("span",Vs,m(a.$t("user.editPend")),1)):u("",!0),0==s.item.state?(t(),l("span",Ws,m(a.$t("user.affirmPend")),1)):u("",!0)])):u("",!0),3!==s.item.state&&5!==s.item.state?(t(),l("span",Ys,["CNY"===r(p)?(t(),l("img",{key:0,class:"img_1",src:r(Y),alt:""},null,8,Gs)):"VNDK"===r(p)?(t(),l("img",{key:1,class:"img_1",src:r(G),alt:""},null,8,Hs)):(t(),l("img",zs))])):u("",!0),0==s.item.state||-1==s.item.state||1==s.item.state?(t(),l("span",Es,m(r(W)(y(s.item))),1)):3!==s.item.state&&5!==s.item.state?(t(),l("span",Ms,m(r(W)(s.item.winAndLossGold)),1)):u("",!0)])])]),i("div",Us,[i("span",null,m(a.$t("user.fill")),1)])])}}});qs.__scopeId="data-v-3bc8abb0";const Js=s=>(v("data-v-d6fd15fc"),s=s(),p(),s),Qs={class:"top"},Xs=Js((()=>i("div",{class:"left"},[i("div",{class:"top-img"},[i("img",{class:"img_1",src:Q,alt:""}),i("img",{class:"img_2",src:X,alt:""})])],-1))),Zs={class:"right"},sa={class:"font_1"},aa={key:0,class:"color-1"},ea={class:"font_2"},ta={class:"top2"},la=Js((()=>i("div",{class:"left"},[i("img",{class:"img_1",src:Z,alt:""})],-1))),ia={class:"right"},ma={class:"one"},na={class:"one two"},ca={key:0},ra={key:1},ua={key:0,class:"img_1",src:H,alt:""},oa={key:1,class:"img_1",src:z,alt:""},da={key:2,class:"img_1",src:E,alt:""},ga={key:3,class:"img_1",src:M,alt:""},va={key:4,class:"img_1",src:U,alt:""},pa={key:5,class:"img_1",src:q,alt:""},ya={key:6,class:"img_1",src:J,alt:""},ka={key:7,class:"img_1",src:J,alt:""},_a={class:"top3"},fa={class:"one"},ba=["src"],ha=["src"],$a={key:2,class:"img_1",src:P,alt:""},Da={class:"one two"},Ra={key:0},wa={key:1},Ia={key:0},Na={key:0,style:{color:"#FF9A00"}},Ta={key:1,style:{color:"#FF9A00"}},La={key:1},Aa=["src"],Ca=["src"],Fa={key:2,class:"img_1",src:S,alt:""},ja={key:2,class:"num color-1"},Oa={key:3,class:"color-1"},Pa={class:"addBtn-1"};var Sa=s({props:{item:{type:Object,default:()=>{}}},setup(s){const v=s,p=a((()=>B.state.user.currency)),y=s=>{const a=localStorage.getItem("plateMaskKey");let e=s.gold;return s.betDTOList.map((s=>{e*=s.ioRatio})),(null==a?void 0:a.includes("H"))?e+s.gold:e};return(a,k)=>{const _=e("play");return t(),l("div",null,[(t(!0),l(n,null,c(v.item.betDTOList,((e,n)=>(t(),l("div",{key:n},[i("div",Qs,[Xs,i("div",Zs,[i("div",sa,[g(m(e.homeTeam?e.homeTeam:"?")+" v "+m(e.awayTeam?e.awayTeam:"?")+" ",1),e.resultScore?(t(),l("span",aa," ["+m(e.resultScore)+"]",1)):u("",!0)]),i("div",ea,m(e.leagueName),1)])]),i("div",ta,[la,i("div",ia,[i("div",ma,[i("span",null,m(e.betItem),1),i("span",{class:o(["color-2",["L"===e.betResultDetail?"color-3":""]])}," @"+m(e.ioRatio),3)]),i("div",na,[e.homeTeam&&e.awayTeam?d((t(),l("span",ca,null,512)),[[_,e]]):(t(),l("span",ra,"?")),i("span",null,["W"==e.betResultDetail?(t(),l("img",ua)):"L"==e.betResultDetail?(t(),l("img",oa)):"LW"==e.betResultDetail?(t(),l("img",da)):"LL"==e.betResultDetail?(t(),l("img",ga)):"P"==e.betResultDetail?(t(),l("img",va)):"D"==e.betResultDetail?(t(),l("img",pa)):1==s.item.state?(t(),l("img",ya)):(t(),l("img",ka))])])])]),i("div",_a,[i("div",fa,[i("span",null,m(a.$t("user.BettingAmount")),1),i("div",null,["CNY"===r(p)?(t(),l("img",{key:0,class:"img_1",src:r(x),alt:""},null,8,ba)):"VNDK"===r(p)?(t(),l("img",{key:1,class:"img_1",src:r(V),alt:""},null,8,ha)):(t(),l("img",$a)),i("span",null,m(r(W)(s.item.gold)),1)])]),i("div",Da,[0==s.item.state||-1==s.item.state||1==s.item.state?(t(),l("span",Ra,m(a.$t("user.CompensableAmount"))+":",1)):3!==s.item.state&&5!==s.item.state&&0!==s.item.state?(t(),l("span",wa,m(a.$t("user.practical"))+":",1)):u("",!0),i("div",null,[3!==s.item.state&&5!==s.item.state?(t(),l("span",Ia,[-1==s.item.state?(t(),l("span",Na,m(a.$t("user.editPend")),1)):u("",!0),0==s.item.state?(t(),l("span",Ta,m(a.$t("user.affirmPend")),1)):u("",!0)])):u("",!0),3!==s.item.state&&5!==s.item.state?(t(),l("span",La,["CNY"===r(p)?(t(),l("img",{key:0,class:"img_1",src:r(Y),alt:""},null,8,Aa)):"VNDK"===r(p)?(t(),l("img",{key:1,class:"img_1",src:r(G),alt:""},null,8,Ca)):(t(),l("img",Fa))])):u("",!0),0==s.item.state||-1==s.item.state||1==s.item.state?(t(),l("span",ja,m(r(W)(y(s.item))),1)):3!==s.item.state&&5!==s.item.state?(t(),l("span",Oa,m(r(W)(s.item.winAndLossGold)),1)):u("",!0)])])]),i("div",Pa,[i("span",null,m(a.$t("user.fill")),1)])])))),128))])}}});Sa.__scopeId="data-v-d6fd15fc";const Ba={key:0},Ka={class:"top-1 top-2"},xa=(s=>(v("data-v-42444838"),s=s(),p(),s))((()=>i("img",{class:"img_1",src:N,alt:""},null,-1))),Va={class:"right"},Wa={key:0,class:"img_1",src:z,alt:""},Ya={key:1,class:"img_1",src:H,alt:""},Ga={class:"dataList"},Ha={class:"top-3"},za=["src"],Ea={class:"name"},Ma={class:"name-2"},Ua={class:"right"};var qa=s({props:{peopleInfo:{type:Object,default:()=>{}}},setup(s){const e=s,o=a((()=>B.state.user.userInfo)),d=y(""),g=y(""),v=y({}),p=k({arr:[]});_((()=>{g.value=cs().valueOf();d.value=g.value-6048e5,b()}));const b=async()=>{const s={orderState:"1",page:1,pageSize:5,beginTime:d.value,endTime:g.value},a=await ss(s);if(200!==a.code)return as(a.msg);p.arr=a.data;const e=[];p.arr.map((s=>{s.winAndLossGold>=0?e.push(1):e.push(0)})),v.value.arr=e,console.log()};return(s,a)=>r(p).arr.length?(t(),l("div",Ba,[i("div",Ka,[xa,i("span",null,m(s.$t("user.betForm")),1),i("div",Va,[i("span",null,m(s.$t("user.RecentAchievements"))+":",1),(t(!0),l(n,null,c(v.value.arr,((s,a)=>(t(),l("span",{key:a,class:"img_1"},[1!==s?(t(),l("img",Wa)):(t(),l("img",Ya))])))),128))])]),i("div",Ga,[(t(!0),l(n,null,c(r(p).arr,((n,c)=>{return t(),l("div",{key:c},[i("div",Ha,[i("div",{class:"left",onClick:a[0]||(a[0]=s=>{return a="/elseInfo",void console.log(a,"他人未开放===");var a})},[i("img",{class:"img_1",src:(d=e.peopleInfo.headImg,d?`${es}${d}`:ts),alt:""},null,8,za),i("div",Ea,[i("div",null,m(r(o).nickName),1),i("div",Ma,m(r(o).loginName),1)])]),i("div",Ua,m(s.$t("user.end")),1)]),1==n.parlayNum?(t(),f(Sa,{key:0,item:n,class:"item"},null,8,["item"])):u("",!0),1!=n.parlayNum&&2!==n.state?(t(),f(qs,{key:1,item:n,class:"item"},null,8,["item"])):u("",!0)]);var d})),128))])])):u("",!0)}});qa.__scopeId="data-v-42444838";const Ja=s=>(v("data-v-0688a250"),s=s(),p(),s),Qa={class:"userInfo"},Xa={class:"user"},Za={class:"user-info"},se=["src"],ae={class:"user-right"},ee={class:"user-1"},te=Ja((()=>i("img",{class:"img_1",src:T,alt:""},null,-1))),le={class:"user-2"},ie={class:"user-3"},me=Ja((()=>i("img",{class:"img_1",src:L,alt:""},null,-1))),ne={class:"user-4"},ce=Ja((()=>i("div",{class:"center"},null,-1))),re={class:"content"},ue={class:"top-1"},oe=Ja((()=>i("img",{class:"img_1",src:O,alt:""},null,-1))),de={class:"circle"},ge={class:"left"},ve=["src"],pe={class:"right"},ye={key:0},ke={key:1},_e=Ja((()=>i("div",{class:"foot"},null,-1)));var fe=s({setup(s){const e=R(),u=a((()=>B.state.user.userInfo)),o=y({}),d=y({}),g=y(""),{t:v}=ls(),p=s=>{s.includes("selfFocus")||e.push("/user"+s)},f=y(v("user.PersonalProfile")),N=k({arr:[{num:0,name:v("user.winRate"),img:A},{num:0,name:v("user.profit"),img:C},{num:0,name:v("user.BetAmount"),img:F},{num:0,name:v("user.refund"),img:j}]});_((()=>{T(),L()}));const T=async()=>{const s={fPlayerId:u.value.playerId},a=await is(s);if(200!==a.code)return as(a.msg);o.value=a.data},L=async()=>{const s=await ms({type:2});if(200!==s.code)return as(s.msg);d.value=s.data,g.value=100*d.value.winRatio||0,N.arr[0].num=String(100*d.value.winRatio).replace(/^(.*\..{2}).*$/,"$1")+"%",N.arr[1].num=d.value.winOrderAmount-d.value.orderAmount||0,N.arr[2].num=d.value.orderAmount||0,N.arr[3].num=d.value.winOrderAmount||0};return(s,a)=>{const d=b("van-nav-bar");return t(),l("div",Qa,[h(d,{class:"bg-title",title:f.value,border:!1},{left:$((()=>[i("img",{class:"img_1",src:w,alt:"",onClick:a[0]||(a[0]=s=>{e.push("/home")})})])),right:$((()=>[i("img",{class:"img_1",src:I,alt:"",onClick:a[1]||(a[1]=s=>p("/editUser"))})])),_:1},8,["title"]),i("div",Xa,[i("div",Za,[i("div",{class:"user-img",onClick:a[2]||(a[2]=s=>p("/editImg"))},[i("img",{class:"img_1",src:(g=o.value.headImg,g?`${es}${g}`:ts),alt:""},null,8,se)]),i("div",ae,[i("div",ee,[te,i("span",null,m(o.value.nickName),1)]),i("div",le,m(r(u).loginName||""),1),i("div",ie,[me,i("span",null,m(s.$t("user.RegistrationTime"))+" "+m(r(ns)(o.value.createTime)),1)]),i("div",ne,[i("div",{class:"left",onClick:a[3]||(a[3]=s=>p("/selfFocus?num=1"))},[i("span",null,m(o.value.followNum),1),i("span",null,m(s.$t("user.follow")),1)]),ce,i("div",{class:"left right",onClick:a[4]||(a[4]=s=>p("/selfFocus?num=2"))},[i("span",null,m(o.value.fansCount),1),i("span",null,m(s.$t("user.fans")),1)])])])]),i("span",{class:"note",onClick:a[5]||(a[5]=D((s=>p("/editUser")),["stop"]))},m(o.value.profiles),1)]),i("div",re,[i("div",ue,[oe,i("span",null,m(s.$t("user.text8",{num:7})),1)]),i("div",de,[(t(!0),l(n,null,c(r(N).arr,((s,a)=>(t(),l("div",{key:a,class:"num-1"},[i("div",ge,[i("img",{class:"img_1",src:s.img,alt:""},null,8,ve)]),i("div",pe,[0===a?(t(),l("div",ye,m(s.num),1)):(t(),l("div",ke,m(r(W)(s.num)),1)),i("div",null,m(s.name),1)])])))),128))]),h(qa,{"people-info":o.value},null,8,["people-info"]),_e])]);var g}}});fe.__scopeId="data-v-0688a250";export{fe as default};
