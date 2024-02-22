import{w as a}from"./websocket.a7b540fc.js";import{i as e,l as s}from"./index.fc60f452.js";import{u as t,s as o,R as n}from"./index.c53fd497.js";import{s as l,b as i,w as c,j as d,a as u,d as r,n as m,r as v,E as p,o as h,c as f,O as g,P as y,q as b,B as w,V as I,S as _,F as S,Z as k,x as N,u as T,k as x,_ as j,X as B,Y as O}from"./vue.6c3ce548.js";const V=a=>(B("data-v-15270a2e"),a=a(),O(),a),$={class:"chat-main"},E={class:"close-down"},J={class:"item"},C={class:"item-avatar"},F={class:"item-name"},L=V((()=>y("em",null,":",-1))),R={class:"item-cont"},U={class:"item-avatar"},q={type:3},z={class:"item-name"},A=V((()=>y("em",null,":",-1))),D={class:"item-cont"},H={class:"chat-main__form"},M=V((()=>y("button",{"native-type":"submit",hidden:""},null,-1))),P={class:"action"};var X=l({props:{show:Boolean},emits:["update:show"],setup(l,{emit:B}){const O=l,{t:V}=t(),X=i({get:()=>O.show,set:a=>B("update:show",a)}),Y=i((()=>o.state.app.showFixedBet)),Z=i((()=>o.state.user.userInfo)),G=i((()=>o.state.match.matchInfo)),K=i((()=>o.state.match.needTimer)),Q=i((()=>{const{isSend:a}=ea.value;return!n()||1*a==0})),W=i((()=>{const{isSend:a}=ea.value;return 0==a||!da.value})),aa=i((()=>{const{isSend:a,bettingTotal:e}=ea.value;return n()?0==a?V("live.needBet",{num:e}):V("live.chatTip")+"...":V("live.needLogin")}));c((()=>G.value),(()=>{sa()})),d((()=>{})),u((()=>{var e;null==(e=a)||e.disconnect()}));const ea=r({}),sa=async()=>{if(K.value)return;const a={gidm:G.value.gidm,systemId:G.value.systemId,anchorId:void 0,version:"3.9.0"},s=await e(a);200===s.code&&(ea.value=s.data||{},ta(),oa())},ta=async()=>{const{roomNo:a,channelType:e}=ea.value,t={roomNo:a,page:1,pageSize:20,channelType:e},o=await s(t),n=(o.extra||{}).messageList||[];if(200==o.code){const a=[];n.forEach((e=>{if(e.msgType&&2==+e.msgType&&e.content){(JSON.parse(e.content||"").bettingData||[]).forEach((e=>{a.push(e.gidm)}))}})),la(n)}},oa=async()=>{const{roomNo:e}=ea.value,s=`/topic/1/${e}`;a.subscribe(s,(a=>{const e=JSON.parse(a.body);if(console.log(e,"--"),e&&1e3===e.action){const[a]=e.data;la(a)}}))},na=r([]),la=a=>{a instanceof Array?na.value=a.reverse().concat(na.value):na.value.push(a),ca()},ia=r(null),ca=()=>{const a=ia.value||{};m((()=>{a.scrollTop=a&&a.scrollHeight}))},da=r(),ua=()=>{const e=da.value,{roomNo:s}=ea.value,{playerId:t,teamId:o}=Z.value,n={token:"1",msgType:"1",roomNo:s,content:e,playerId:t,teamId:o};a.send("/chat/sendMsg",JSON.stringify(n)),da.value=""};return(a,e)=>{const s=v("SvgIcon"),t=v("van-field"),o=v("van-form"),n=v("van-button"),l=v("van-popup"),i=p("img");return h(),f(l,{show:T(X),"onUpdate:show":e[2]||(e[2]=a=>x(X)?X.value=a:null),class:j(["chat",{"has-bet":T(Y)}]),position:"bottom",overlay:!1,"close-on-click-overlay":!0,round:""},{default:g((()=>[y("div",$,[y("div",E,[y("img",{src:"/assets/down_round.edea70a6.png",onClick:e[0]||(e[0]=a=>X.value=!1)})]),y("div",{ref_key:"chatRef",ref:ia,class:"chat-main__wrapper"},[y("div",J,[y("div",C,[b(s,{name:"bot"})]),y("div",F,[w(I(a.$t("live.aiBot")),1),L]),y("div",R,I(a.$t("live.chatSys")),1)]),(h(!0),_(S,null,k(na.value,(a=>(h(),_("div",{key:a.msgId,class:"item"},[y("div",U,[N(y("img",q,null,512),[[i,a.headImg]])]),y("div",z,[w(I(a.nickName),1),A]),y("div",D,I(a.content),1)])))),128))],512),y("div",H,[b(o,{"submit-on-enter":"",onSubmit:ua},{default:g((()=>[b(t,{modelValue:da.value,"onUpdate:modelValue":e[1]||(e[1]=a=>da.value=a),autocomplete:"off",placeholder:T(aa),disabled:T(Q),maxlength:50},null,8,["modelValue","placeholder","disabled"]),M])),_:1}),y("div",P,[b(n,{disabled:T(W),onClick:ua},{default:g((()=>[w(I(a.$t("live.send")),1)])),_:1},8,["disabled"])])])])])),_:1},8,["show","class"])}}});X.__scopeId="data-v-15270a2e";export{X as default};
