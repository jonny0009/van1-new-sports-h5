import{s,b as a,E as e,o as t,R as l,P as i,S as n,F as m,Z as c,u as r,a2 as u,x as o,Y as g,B as d,W as v,X as p,d as y,e as k,j as f,r as _,q as b,O as h,c as $,a1 as w,V as R}from"./vue.e791136f.js";import{_ as D}from"./return@2x.937c1e5d.js";import{d as N,a as L,b as T,c as I,_ as A,e as C}from"./edit.621f3434.js";import{_ as j,a as F,b as x}from"./star.69dcfb89.js";import{o as P,p as O,s as S,q as V,C as B,V as W,v as Y,w as G,x as K,y as E,z as U,A as q,B as z,E as H,F as J,G as M,H as X,J as Z,b as Q,I as ss,N as as,u as es,O as ts,P as ls,k as is}from"./index.9fd5a9d6.js";import{h as ns}from"./moment.9709ab41.js";const ms={class:"match-title"},cs={class:"title-left"},rs={class:"top2"},us={class:"left"},os={class:"top-img"},gs={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},ds={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},vs={class:"right"},ps={class:"one"},ys={class:"one two"},ks={key:0},fs={key:1},_s={key:0,class:"img_1",src:E,alt:""},bs={key:1,class:"img_1",src:U,alt:""},hs={key:2,class:"img_1",src:q,alt:""},$s={key:3,class:"img_1",src:z,alt:""},ws={key:4,class:"img_1",src:H,alt:""},Rs={key:5,class:"img_1",src:J,alt:""},Ds={key:6,class:"img_1",src:M,alt:""},Ns={key:7,class:"img_1",src:M,alt:""},Ls={class:"team"},Ts={key:0},Is={class:"team"},As=(s=>(v("data-v-0eeb6e42"),s=s(),p(),s))((()=>i("img",{class:"img_1",src:V,alt:""},null,-1))),Cs={class:"money-num"},js={class:"money-num-1"},Fs=["src"],xs=["src"],Ps={key:2,class:"img_1",src:P,alt:""},Os={class:"money-num-2"},Ss={key:0},Vs={key:1},Bs={key:0},Ws={key:0,style:{color:"#FF9A00"}},Ys={key:1,style:{color:"#FF9A00"}},Gs={key:1},Ks=["src"],Es=["src"],Us={key:2,class:"img_1",src:O,alt:""},qs={key:2,class:"num"},zs={key:3,class:"num"};var Hs=s({props:{item:{type:Object,default:()=>{}}},setup(s){const v=s,p=a((()=>S.state.user.currency));return(a,y)=>{const k=e("img"),f=e("play");return t(),l("div",null,[i("div",ms,[i("div",cs,[i("div",null,n(s.item.parlayNum)+n(a.$t("user.session")),1),i("div",null,[(t(!0),l(m,null,c(Number(s.item.parlayNum),(s=>(t(),l("img",{key:s,class:"img_1",src:V,alt:""})))),128))])])]),(t(!0),l(m,null,c(v.item.betDTOList,((a,e)=>(t(),l("div",{key:e},[i("div",rs,[i("div",us,[i("div",os,[o(i("img",gs,null,512),[[k,a.homeLogo]]),o(i("img",ds,null,512),[[k,a.awayLogo]])])]),i("div",vs,[i("div",ps,[i("span",null,n(a.betItem),1),i("span",{class:g(["color-2",["L"===a.betResultDetail?"color-3":""]])}," @"+n(a.ioRatio),3)]),i("div",ys,[a.homeTeam&&a.awayTeam?o((t(),l("span",ks,null,512)),[[f,a]]):(t(),l("span",fs,"?")),i("span",null,[1==s.item.state?(t(),l("img",_s)):"W"==a.betResultDetail?(t(),l("img",bs)):"L"==a.betResultDetail?(t(),l("img",hs)):"LW"==a.betResultDetail?(t(),l("img",$s)):"LL"==a.betResultDetail?(t(),l("img",ws)):"P"==a.betResultDetail?(t(),l("img",Rs)):"D"==a.betResultDetail?(t(),l("img",Ds)):(t(),l("img",Ns))])]),i("div",Ls,[d(n(a.homeTeam?a.homeTeam:"?")+" v "+n(a.awayTeam?a.awayTeam:"?")+" ",1),a.resultScore?(t(),l("span",Ts," ["+n(a.resultScore)+"] ",1)):u("",!0)]),i("div",Is,[As,i("span",null,n(a.leagueName),1)])])])])))),128)),i("div",Cs,[i("div",js,[i("span",null,n(a.$t("user.BettingAmount"))+":",1),i("span",null,["CNY"===r(p)?(t(),l("img",{key:0,class:"img_1",src:r(B),alt:""},null,8,Fs)):"VNDK"===r(p)?(t(),l("img",{key:1,class:"img_1",src:r(W),alt:""},null,8,xs)):(t(),l("img",Ps)),i("span",null,n(r(Y)(s.item.gold)),1)])]),i("div",Os,[0==s.item.state||-1==s.item.state||1==s.item.state?(t(),l("span",Ss,n(a.$t("user.CompensableAmount"))+":",1)):3!==s.item.state&&5!==s.item.state?(t(),l("span",Vs,n(a.$t("user.practical"))+":",1)):u("",!0),i("span",null,[3!==s.item.state&&5!==s.item.state?(t(),l("span",Bs,[-1==s.item.state?(t(),l("span",Ws,n(a.$t("user.editPend")),1)):u("",!0),0==s.item.state?(t(),l("span",Ys,n(a.$t("user.affirmPend")),1)):u("",!0)])):u("",!0),3!==s.item.state&&5!==s.item.state?(t(),l("span",Gs,["CNY"===r(p)?(t(),l("img",{key:0,class:"img_1",src:r(G),alt:""},null,8,Ks)):"VNDK"===r(p)?(t(),l("img",{key:1,class:"img_1",src:r(K),alt:""},null,8,Es)):(t(),l("img",Us))])):u("",!0),0==s.item.state||-1==s.item.state||1==s.item.state?(t(),l("span",qs,n(r(Y)((_=s.item,_.gold*_.sioRatio))),1)):3!==s.item.state&&5!==s.item.state?(t(),l("span",zs,n(r(Y)(s.item.winGold)),1)):u("",!0)])])])]);var _}}});Hs.__scopeId="data-v-0eeb6e42";const Js={class:"top"},Ms={class:"left"},Xs={class:"top-img"},Zs={class:"img_1",alt:"",type:4,style:{"object-fit":"contain"}},Qs={class:"img_2",alt:"",type:5,style:{"object-fit":"contain"}},sa={class:"right"},aa={class:"font_1"},ea={key:0,class:"color-1"},ta={class:"font_2"},la={class:"top2"},ia=(s=>(v("data-v-22c94190"),s=s(),p(),s))((()=>i("div",{class:"left"},[i("img",{class:"img_1",src:X,alt:""})],-1))),na={class:"right"},ma={class:"one"},ca={class:"one two"},ra={key:0},ua={key:1},oa={key:0,class:"img_1",src:E,alt:""},ga={key:1,class:"img_1",src:U,alt:""},da={key:2,class:"img_1",src:q,alt:""},va={key:3,class:"img_1",src:z,alt:""},pa={key:4,class:"img_1",src:H,alt:""},ya={key:5,class:"img_1",src:J,alt:""},ka={key:6,class:"img_1",src:M,alt:""},fa={key:7,class:"img_1",src:M,alt:""},_a={class:"top3"},ba={class:"one"},ha=["src"],$a=["src"],wa={key:2,class:"img_1",src:P,alt:""},Ra={class:"one two"},Da={key:0},Na={key:1},La={key:0},Ta={key:0,style:{color:"#FF9A00"}},Ia={key:1,style:{color:"#FF9A00"}},Aa={key:1},Ca=["src"],ja=["src"],Fa={key:2,class:"img_1",src:O,alt:""},xa={key:2,class:"num color-1"},Pa={key:3,class:"color-1"};var Oa=s({props:{item:{type:Object,default:()=>{}}},setup(s){const v=s,p=a((()=>S.state.user.currency));return(a,y)=>{const k=e("img"),f=e("play");return t(),l("div",null,[(t(!0),l(m,null,c(v.item.betDTOList,((e,m)=>{return t(),l("div",{key:m},[i("div",Js,[i("div",Ms,[i("div",Xs,[o(i("img",Zs,null,512),[[k,e.homeLogo]]),o(i("img",Qs,null,512),[[k,e.awayLogo]])])]),i("div",sa,[i("div",aa,[d(n(e.homeTeam?e.homeTeam:"?")+" v "+n(e.awayTeam?e.awayTeam:"?")+" ",1),e.resultScore?(t(),l("span",ea," ["+n(e.resultScore)+"]",1)):u("",!0)]),i("div",ta,n(e.leagueName),1)])]),i("div",la,[ia,i("div",na,[i("div",ma,[i("span",null,n(e.betItem),1),i("span",{class:g(["color-2",["L"===e.betResultDetail?"color-3":""]])}," @"+n(e.ioRatio),3)]),i("div",ca,[e.homeTeam&&e.awayTeam?o((t(),l("span",ra,null,512)),[[f,e]]):(t(),l("span",ua,"?")),i("span",null,[1==s.item.state?(t(),l("img",oa)):"W"==e.betResultDetail?(t(),l("img",ga)):"L"==e.betResultDetail?(t(),l("img",da)):"LW"==e.betResultDetail?(t(),l("img",va)):"LL"==e.betResultDetail?(t(),l("img",pa)):"P"==e.betResultDetail?(t(),l("img",ya)):"D"==e.betResultDetail?(t(),l("img",ka)):(t(),l("img",fa))])])])]),i("div",_a,[i("div",ba,[i("span",null,n(a.$t("user.BettingAmount")),1),i("div",null,["CNY"===r(p)?(t(),l("img",{key:0,class:"img_1",src:r(B),alt:""},null,8,ha)):"VNDK"===r(p)?(t(),l("img",{key:1,class:"img_1",src:r(W),alt:""},null,8,$a)):(t(),l("img",wa)),i("span",null,n(r(Y)(s.item.gold)),1)])]),i("div",Ra,[0==s.item.state||-1==s.item.state||1==s.item.state?(t(),l("span",Da,n(a.$t("user.CompensableAmount"))+":",1)):3!==s.item.state&&5!==s.item.state&&0!==s.item.state?(t(),l("span",Na,n(a.$t("user.practical"))+":",1)):u("",!0),i("div",null,[3!==s.item.state&&5!==s.item.state?(t(),l("span",La,[-1==s.item.state?(t(),l("span",Ta,n(a.$t("user.editPend")),1)):u("",!0),0==s.item.state?(t(),l("span",Ia,n(a.$t("user.affirmPend")),1)):u("",!0)])):u("",!0),3!==s.item.state&&5!==s.item.state?(t(),l("span",Aa,["CNY"===r(p)?(t(),l("img",{key:0,class:"img_1",src:r(G),alt:""},null,8,Ca)):"VNDK"===r(p)?(t(),l("img",{key:1,class:"img_1",src:r(K),alt:""},null,8,ja)):(t(),l("img",Fa))])):u("",!0),0==s.item.state||-1==s.item.state||1==s.item.state?(t(),l("span",xa,n(r(Y)((c=s.item,c.gold*c.sioRatio))),1)):3!==s.item.state&&5!==s.item.state?(t(),l("span",Pa,n(r(Y)(s.item.winGold)),1)):u("",!0)])])])]);var c})),128))])}}});Oa.__scopeId="data-v-22c94190";const Sa={class:"top-1 top-2"},Va=(s=>(v("data-v-5b0ee0e2"),s=s(),p(),s))((()=>i("img",{class:"img_1",src:j,alt:""},null,-1))),Ba={class:"right"},Wa={key:0,class:"img_1",src:q,alt:""},Ya={key:1,class:"img_1",src:U,alt:""},Ga={class:"top-3"},Ka=["src"],Ea={class:"name"},Ua={class:"name-2"},qa={class:"right"};var za=s({props:{peopleInfo:{type:Object,default:()=>{}}},setup(s){const e=s,o=a((()=>S.state.user.userInfo)),g=y(""),d=y(""),v=y(!1),p=y(!1),w=k({arr:[]});f((()=>{d.value=ns().valueOf();g.value=d.value-6048e5}));let R=0;const D=async()=>{R++;const s={orderState:"1",page:R,pageSize:5,beginTime:g.value,endTime:d.value},a=await Z(s);if(200!==a.code)return v.value=!1,p.value=!0,Q(a.msg);const e=a.data;200===a.code&&(e.forEach((s=>{w.arr.push(s)})),v.value=!1,p.value=!e.length)};return(s,a)=>{const g=_("van-list");return t(),l("div",null,[i("div",Sa,[Va,i("span",null,n(s.$t("user.betForm")),1),i("div",Ba,[i("span",null,n(s.$t("user.RecentAchievements"))+":",1),(t(!0),l(m,null,c(r(w).arr.slice(0,5),((s,a)=>(t(),l("span",{key:a,class:"img_1"},[s.winAndLossGold<0?(t(),l("img",Wa)):(t(),l("img",Ya))])))),128))])]),b(g,{loading:v.value,"onUpdate:loading":a[1]||(a[1]=s=>v.value=s),finished:p.value,"finished-text":s.$t("live.noMore"),class:"dataList","loading-text":s.$t("user.loadingText"),onLoad:D},{default:h((()=>[(t(!0),l(m,null,c(r(w).arr,((m,c)=>{return t(),l("div",{key:c},[i("div",Ga,[i("div",{class:"left",onClick:a[0]||(a[0]=s=>{return a="/elseInfo",void console.log(a,"他人未开放===");var a})},[i("img",{class:"img_1",src:(g=e.peopleInfo.headImg,g?`${ss}${g}`:as),alt:""},null,8,Ka),i("div",Ea,[i("div",null,n(r(o).nickName),1),i("div",Ua,n(r(o).loginName),1)])]),i("div",qa,n(s.$t("user.end")),1)]),1==m.parlayNum?(t(),$(Oa,{key:0,item:m,class:"item"},null,8,["item"])):u("",!0),1!=m.parlayNum&&2!==m.state?(t(),$(Hs,{key:1,item:m,class:"item"},null,8,["item"])):u("",!0)]);var g})),128))])),_:1},8,["loading","finished","finished-text","loading-text"])])}}});za.__scopeId="data-v-5b0ee0e2";const Ha=s=>(v("data-v-d76ba964"),s=s(),p(),s),Ja={class:"userInfo"},Ma={class:"user"},Xa={class:"user-info"},Za=["src"],Qa={class:"user-right"},se={class:"user-1"},ae=Ha((()=>i("img",{class:"img_1",src:F,alt:""},null,-1))),ee={class:"user-2"},te={class:"user-3"},le=Ha((()=>i("img",{class:"img_1",src:x,alt:""},null,-1))),ie={class:"user-4"},ne=Ha((()=>i("div",{class:"center"},null,-1))),me={class:"content"},ce={class:"top-1"},re=Ha((()=>i("img",{class:"img_1",src:C,alt:""},null,-1))),ue={class:"circle"},oe={class:"left"},ge=["src"],de={class:"right"},ve={key:0},pe={key:1};var ye=s({setup(s){const e=R(),u=a((()=>S.state.user.userInfo)),o=y({}),g=y({}),d=y(""),{t:v}=es(),p=s=>{s.includes("selfFocus")||e.push("/user"+s)},$=y(v("user.PersonalProfile")),C=k({arr:[{num:0,name:v("user.winRate"),img:N},{num:0,name:v("user.profit"),img:L},{num:0,name:v("user.BetAmount"),img:T},{num:0,name:v("user.refund"),img:I}]});f((()=>{j(),F()}));const j=async()=>{const s={fPlayerId:u.value.playerId},a=await ts(s);if(200!==a.code)return Q(a.msg);o.value=a.data},F=async()=>{const s=await ls({type:2});if(200!==s.code)return Q(s.msg);g.value=s.data,d.value=100*g.value.winRatio||0,C.arr[0].num=String(100*g.value.winRatio).replace(/^(.*\..{2}).*$/,"$1")+"%",C.arr[1].num=g.value.winOrderAmount-g.value.orderAmount||0,C.arr[2].num=g.value.orderAmount||0,C.arr[3].num=g.value.winOrderAmount||0};return(s,a)=>{const g=_("van-nav-bar");return t(),l("div",Ja,[b(g,{class:"bg-title",title:$.value,border:!1},{left:h((()=>[i("img",{class:"img_1",src:D,alt:"",onClick:a[0]||(a[0]=s=>{e.push("/home")})})])),right:h((()=>[i("img",{class:"img_1",src:A,alt:"",onClick:a[1]||(a[1]=s=>p("/editUser"))})])),_:1},8,["title"]),i("div",Ma,[i("div",Xa,[i("div",{class:"user-img",onClick:a[2]||(a[2]=s=>p("/editImg"))},[i("img",{class:"img_1",src:(d=o.value.headImg,d?`${ss}${d}`:as),alt:""},null,8,Za)]),i("div",Qa,[i("div",se,[ae,i("span",null,n(o.value.nickName),1)]),i("div",ee,n(r(u).loginName||""),1),i("div",te,[le,i("span",null,n(s.$t("user.RegistrationTime"))+" "+n(r(is)(r(u).createTime)),1)]),i("div",ie,[i("div",{class:"left",onClick:a[3]||(a[3]=s=>p("/selfFocus?num=1"))},[i("span",null,n(o.value.followNum),1),i("span",null,n(s.$t("user.follow")),1)]),ne,i("div",{class:"left right",onClick:a[4]||(a[4]=s=>p("/selfFocus?num=2"))},[i("span",null,n(o.value.fansCount),1),i("span",null,n(s.$t("user.fans")),1)])])])]),i("span",{class:"note",onClick:a[5]||(a[5]=w((s=>p("/editUser")),["stop"]))},n(o.value.profiles),1)]),i("div",me,[i("div",ce,[re,i("span",null,n(s.$t("user.text8",{num:7})),1)]),i("div",ue,[(t(!0),l(m,null,c(r(C).arr,((s,a)=>(t(),l("div",{key:a,class:"num-1"},[i("div",oe,[i("img",{class:"img_1",src:s.img,alt:""},null,8,ge)]),i("div",de,[0===a?(t(),l("div",ve,n(s.num),1)):(t(),l("div",pe,n(r(Y)(s.num)),1)),i("div",null,n(s.name),1)])])))),128))]),b(za,{"people-info":o.value},null,8,["people-info"])])]);var d}}});ye.__scopeId="data-v-d76ba964";export{ye as default};
