import{w as e}from"./websocket.23e41b67.js";import{i as a,l as s}from"./index.ab45e1e1.js";import{u as t,s as o,R as n}from"./index.eea3ca4e.js";import{s as l,b as i,w as c,j as d,a as u,d as r,n as m,r as v,E as p,o as h,c as f,O as g,P as y,q as b,B as w,V as I,S as _,F as S,Z as k,x as N,u as T,k as x,_ as j,X as B,Y as O}from"./vue.6c3ce548.js";const V=e=>(B("data-v-15270a2e"),e=e(),O(),e),$={class:"chat-main"},E={class:"close-down"},J={class:"item"},C={class:"item-avatar"},F={class:"item-name"},L=V((()=>y("em",null,":",-1))),R={class:"item-cont"},U={class:"item-avatar"},q={type:3},z={class:"item-name"},A=V((()=>y("em",null,":",-1))),D={class:"item-cont"},H={class:"chat-main__form"},M=V((()=>y("button",{"native-type":"submit",hidden:""},null,-1))),P={class:"action"};var X=l({props:{show:Boolean},emits:["update:show"],setup(l,{emit:B}){const O=l,{t:V}=t(),X=i({get:()=>O.show,set:e=>B("update:show",e)}),Y=i((()=>o.state.app.showFixedBet)),Z=i((()=>o.state.user.userInfo)),G=i((()=>o.state.match.matchInfo)),K=i((()=>o.state.match.needTimer)),Q=i((()=>{const{isSend:e}=ae.value;return!n()||1*e==0})),W=i((()=>{const{isSend:e}=ae.value;return 0==e||!de.value})),ee=i((()=>{const{isSend:e,bettingTotal:a}=ae.value;return n()?0==e?V("live.needBet",{num:a}):V("live.chatTip")+"...":V("live.needLogin")}));c((()=>G.value),(()=>{se()})),d((()=>{})),u((()=>{var a;null==(a=e)||a.disconnect()}));const ae=r({}),se=async()=>{if(K.value)return;const e={gidm:G.value.gidm,systemId:G.value.systemId,anchorId:void 0,version:"3.9.0"},s=await a(e);200===s.code&&(ae.value=s.data||{},te(),oe())},te=async()=>{const{roomNo:e,channelType:a}=ae.value,t={roomNo:e,page:1,pageSize:20,channelType:a},o=await s(t),n=(o.extra||{}).messageList||[];if(200==o.code){const e=[];n.forEach((a=>{if(a.msgType&&2==+a.msgType&&a.content){(JSON.parse(a.content||"").bettingData||[]).forEach((a=>{e.push(a.gidm)}))}})),le(n)}},oe=async()=>{const{roomNo:a}=ae.value,s=`/topic/1/${a}`;e.subscribe(s,(e=>{const a=JSON.parse(e.body);if(console.log(a,"--"),a&&1e3===a.action){const[e]=a.data;le(e)}}))},ne=r([]),le=e=>{e instanceof Array?ne.value=e.reverse().concat(ne.value):ne.value.push(e),ce()},ie=r(null),ce=()=>{const e=ie.value||{};m((()=>{e.scrollTop=e&&e.scrollHeight}))},de=r(),ue=()=>{const a=de.value,{roomNo:s}=ae.value,{playerId:t,teamId:o}=Z.value,n={token:"1",msgType:"1",roomNo:s,content:a,playerId:t,teamId:o};e.send("/chat/sendMsg",JSON.stringify(n)),de.value=""};return(e,a)=>{const s=v("SvgIcon"),t=v("van-field"),o=v("van-form"),n=v("van-button"),l=v("van-popup"),i=p("img");return h(),f(l,{show:T(X),"onUpdate:show":a[2]||(a[2]=e=>x(X)?X.value=e:null),class:j(["chat",{"has-bet":T(Y)}]),position:"bottom",overlay:!1,"close-on-click-overlay":!0,round:""},{default:g((()=>[y("div",$,[y("div",E,[y("img",{src:"/assets/down_round.edea70a6.png",onClick:a[0]||(a[0]=e=>X.value=!1)})]),y("div",{ref_key:"chatRef",ref:ie,class:"chat-main__wrapper"},[y("div",J,[y("div",C,[b(s,{name:"bot"})]),y("div",F,[w(I(e.$t("live.aiBot")),1),L]),y("div",R,I(e.$t("live.chatSys")),1)]),(h(!0),_(S,null,k(ne.value,(e=>(h(),_("div",{key:e.msgId,class:"item"},[y("div",U,[N(y("img",q,null,512),[[i,e.headImg]])]),y("div",z,[w(I(e.nickName),1),A]),y("div",D,I(e.content),1)])))),128))],512),y("div",H,[b(o,{"submit-on-enter":"",onSubmit:ue},{default:g((()=>[b(t,{modelValue:de.value,"onUpdate:modelValue":a[1]||(a[1]=e=>de.value=e),autocomplete:"off",placeholder:T(ee),disabled:T(Q),maxlength:50},null,8,["modelValue","placeholder","disabled"]),M])),_:1}),y("div",P,[b(n,{disabled:T(W),onClick:ue},{default:g((()=>[w(I(e.$t("live.send")),1)])),_:1},8,["disabled"])])])])])),_:1},8,["show","class"])}}});X.__scopeId="data-v-15270a2e";export{X as default};
