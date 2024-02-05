import{w as a}from"./websocket.7b737d60.js";import{i as e,l as s}from"./index.c26fe2d9.js";import{u as t,s as o,Q as n}from"./index.e9571d50.js";import{s as l,b as i,w as c,j as d,a as u,d as r,n as m,r as v,E as p,o as h,c as f,P as g,Q as y,q as b,B as w,W as I,U as _,F as S,_ as k,x as N,u as T,k as x,$ as j,Y as B,Z as $}from"./vue.f2a0aeba.js";const E=a=>(B("data-v-411ee86a"),a=a(),$(),a),J={class:"chat-main"},O={class:"close-down"},U={class:"item"},V={class:"item-avatar"},C={class:"item-name"},F=E((()=>y("em",null,":",-1))),L={class:"item-cont"},Q={class:"item-avatar"},q={type:3},z={class:"item-name"},A=E((()=>y("em",null,":",-1))),D={class:"item-cont"},H={class:"chat-main__form"},M=E((()=>y("button",{"native-type":"submit",hidden:""},null,-1))),P={class:"action"};var R=l({props:{show:Boolean},emits:["update:show"],setup(l,{emit:B}){const $=l,{t:E}=t(),R=i({get:()=>$.show,set:a=>B("update:show",a)}),W=i((()=>o.state.app.showFixedBet)),Y=i((()=>o.state.user.userInfo)),Z=i((()=>o.state.match.matchInfo)),G=i((()=>o.state.match.needTimer)),K=i((()=>{const{isSend:a}=ea.value;return!n()||1*a==0})),X=i((()=>{const{isSend:a}=ea.value;return 0==a||!da.value})),aa=i((()=>{const{isSend:a,bettingTotal:e}=ea.value;return n()?0==a?E("live.needBet",{num:e}):E("live.chatTip")+"...":E("live.needLogin")}));c((()=>Z.value),(()=>{sa()})),d((()=>{})),u((()=>{a.disconnect()}));const ea=r({}),sa=async()=>{if(G.value)return;const a={gidm:Z.value.gidm,systemId:Z.value.systemId,anchorId:void 0,version:"3.9.0"},s=await e(a);200===s.code&&(ea.value=s.data||{},ta(),oa())},ta=async()=>{const{roomNo:a,channelType:e}=ea.value,t={roomNo:a,page:1,pageSize:20,channelType:e},o=await s(t),n=(o.extra||{}).messageList||[];if(200==o.code){const a=[];n.forEach((e=>{if(e.msgType&&2==+e.msgType&&e.content){(JSON.parse(e.content||"").bettingData||[]).forEach((e=>{a.push(e.gidm)}))}})),la(n)}},oa=async()=>{const{roomNo:e}=ea.value,s=`/topic/1/${e}`;a.subscribe(s,(a=>{const e=JSON.parse(a.body);if(console.log(e,"--"),e&&1e3===e.action){const[a]=e.data;la(a)}}))},na=r([]),la=a=>{a instanceof Array?na.value=a.reverse().concat(na.value):na.value.push(a),ca()},ia=r(null),ca=()=>{const a=ia.value||{};m((()=>{a.scrollTop=a&&a.scrollHeight}))},da=r(),ua=()=>{const e=da.value,{roomNo:s}=ea.value,{playerId:t,teamId:o}=Y.value,n={token:"1",msgType:"1",roomNo:s,content:e,playerId:t,teamId:o};a.send("/chat/sendMsg",JSON.stringify(n)),da.value=""};return(a,e)=>{const s=v("SvgIcon"),t=v("van-field"),o=v("van-form"),n=v("van-button"),l=v("van-popup"),i=p("img");return h(),f(l,{show:T(R),"onUpdate:show":e[2]||(e[2]=a=>x(R)?R.value=a:null),class:j(["chat",{"has-bet":T(W)}]),position:"bottom",overlay:!1,"close-on-click-overlay":!0,round:""},{default:g((()=>[y("div",J,[y("div",O,[y("img",{src:"/assets/down_round.edea70a6.png",onClick:e[0]||(e[0]=a=>R.value=!1)})]),y("div",{ref_key:"chatRef",ref:ia,class:"chat-main__wrapper"},[y("div",U,[y("div",V,[b(s,{name:"bot"})]),y("div",C,[w(I(a.$t("live.aiBot")),1),F]),y("div",L,I(a.$t("live.chatSys")),1)]),(h(!0),_(S,null,k(na.value,(a=>(h(),_("div",{key:a.msgId,class:"item"},[y("div",Q,[N(y("img",q,null,512),[[i,a.headImg]])]),y("div",z,[w(I(a.nickName),1),A]),y("div",D,I(a.content),1)])))),128))],512),y("div",H,[b(o,{"submit-on-enter":"",onSubmit:ua},{default:g((()=>[b(t,{modelValue:da.value,"onUpdate:modelValue":e[1]||(e[1]=a=>da.value=a),autocomplete:"off",placeholder:T(aa),disabled:T(K),maxlength:50},null,8,["modelValue","placeholder","disabled"]),M])),_:1}),y("div",P,[b(n,{disabled:T(X),onClick:ua},{default:g((()=>[w(I(a.$t("live.send")),1)])),_:1},8,["disabled"])])])])])),_:1},8,["show","class"])}}});R.__scopeId="data-v-411ee86a";export{R as default};
