import{w as a}from"./websocket.69dd658b.js";import{i as e,l as s}from"./index.456b257a.js";import{u as t,s as o,L as n}from"./index.9005f8a6.js";import{s as l,b as i,w as c,j as d,a as u,d as r,n as m,r as v,E as p,o as h,c as f,O as g,P as b,q as y,B as w,V as I,S as _,F as S,Z as k,x as N,u as T,_ as x,k as j,X as B,Y as O}from"./vue.ce591b53.js";const V=a=>(B("data-v-16684e6c"),a=a(),O(),a),$={class:"chat-main"},E={class:"close-down"},J={class:"item"},L={class:"item-avatar"},C={class:"item-name"},F=V((()=>b("em",null,":",-1))),U={class:"item-cont"},q={class:"item-avatar"},z={type:3},A={class:"item-name"},D=V((()=>b("em",null,":",-1))),H={class:"item-cont"},M={class:"chat-main__form"},P=V((()=>b("button",{"native-type":"submit",hidden:""},null,-1))),R={class:"action"};var X=l({props:{show:Boolean},emits:["update:show"],setup(l,{emit:B}){const O=l,{t:V}=t(),X=i({get:()=>O.show,set:a=>B("update:show",a)}),Y=i((()=>o.state.app.showFixedBet)),Z=i((()=>o.state.user.userInfo)),G=i((()=>o.state.match.matchInfo)),K=i((()=>o.state.match.needTimer)),Q=i((()=>{const{isSend:a}=ea.value;return!n()||1*a==0})),W=i((()=>{const{isSend:a}=ea.value;return 0==a||!da.value})),aa=i((()=>{const{isSend:a,bettingTotal:e}=ea.value;return n()?0==a?V("live.needBet",{num:e}):V("live.chatTip")+"...":V("live.needLogin")}));c((()=>G.value),(()=>{sa()})),d((()=>{})),u((()=>{a.disconnect()}));const ea=r({}),sa=async()=>{if(K.value)return;const a={gidm:G.value.gidm,systemId:G.value.systemId,anchorId:void 0,version:"3.9.0"},s=await e(a);200==s.code&&(ea.value=s.data||{},ta(),oa())},ta=async()=>{const{roomNo:a,channelType:e}=ea.value,t={roomNo:a,page:1,pageSize:20,channelType:e},o=await s(t),n=(o.extra||{}).messageList||[];if(200==o.code){const a=[];n.forEach((e=>{if(e.msgType&&2==+e.msgType&&e.content){(JSON.parse(e.content||"").bettingData||[]).forEach((e=>{a.push(e.gidm)}))}})),la(n)}},oa=async()=>{const{roomNo:e}=ea.value,s=`/topic/1/${e}`;a.subscribe(s,(a=>{const e=JSON.parse(a.body);if(e&&1e3===e.action){const[a]=e.data;la(a)}}))},na=r([]),la=a=>{a instanceof Array?na.value=a.reverse().concat(na.value):na.value.push(a),ca()},ia=r(null),ca=()=>{const a=ia.value||{};m((()=>{a.scrollTop=a&&a.scrollHeight}))},da=r(),ua=()=>{const e=da.value,{roomNo:s}=ea.value,{playerId:t,teamId:o}=Z.value,n={token:"1",msgType:"1",roomNo:s,content:e,playerId:t,teamId:o};a.send("/chat/sendMsg",JSON.stringify(n)),da.value=""};return(a,e)=>{const s=v("SvgIcon"),t=v("van-field"),o=v("van-form"),n=v("van-button"),l=v("van-popup"),i=p("img");return h(),f(l,{class:x(["chat",{"has-bet":T(Y)}]),show:T(X),"onUpdate:show":e[2]||(e[2]=a=>j(X)?X.value=a:null),position:"bottom",overlay:!1,"close-on-click-overlay":!0,round:""},{default:g((()=>[b("div",$,[b("div",E,[b("img",{src:"/assets/down_round.edea70a6.png",onClick:e[0]||(e[0]=a=>X.value=!1)})]),b("div",{class:"chat-main__wrapper",ref_key:"chatRef",ref:ia},[b("div",J,[b("div",L,[y(s,{name:"bot"})]),b("div",C,[w(I(a.$t("live.aiBot")),1),F]),b("div",U,I(a.$t("live.chatSys")),1)]),(h(!0),_(S,null,k(na.value,(a=>(h(),_("div",{class:"item",key:a.msgId},[b("div",q,[N(b("img",z,null,512),[[i,a.headImg]])]),b("div",A,[w(I(a.nickName),1),D]),b("div",H,I(a.content),1)])))),128))],512),b("div",M,[y(o,{onSubmit:ua,"submit-on-enter":""},{default:g((()=>[y(t,{modelValue:da.value,"onUpdate:modelValue":e[1]||(e[1]=a=>da.value=a),autocomplete:"off",placeholder:T(aa),disabled:T(Q),maxlength:50},null,8,["modelValue","placeholder","disabled"]),P])),_:1}),b("div",R,[y(n,{onClick:ua,disabled:T(W)},{default:g((()=>[w(I(a.$t("live.send")),1)])),_:1},8,["disabled"])])])])])),_:1},8,["class","show"])}}});X.__scopeId="data-v-16684e6c";export{X as default};
