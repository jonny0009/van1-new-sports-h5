import{w as e}from"./websocket.04de3634.js";import{i as a,l as s}from"./index.54e4cc9f.js";import{u as t,s as n,F as l}from"./index.bfab3540.js";import{s as o,a2 as c,b as d,w as u,j as i,a as v,d as A,n as m,r,E as f,o as h,c as p,O as P,P as w,R as g,$ as b,q as O,B as y,W as U,F as B,S as x,x as N,u as T,k as z,_ as I,Y as E,Z as k}from"./vue.c62eea93.js";const R=e=>(E("data-v-342e81e6"),e=e(),k(),e),D={class:"chat-main"},S={class:"close"},X={key:0,class:"close-down"},C={key:1,class:"close-down"},V={class:"item"},j={class:"item-avatar"},H={class:"item-name"},J=R((()=>w("em",null,":",-1))),W={class:"item-cont"},K={class:"item-avatar"},L={type:3},F={class:"item-name"},q=R((()=>w("em",null,":",-1))),Q={class:"item-cont"},Y={class:"chat-main__form"},Z=R((()=>w("button",{"native-type":"submit",hidden:""},null,-1))),M={class:"action"};var G=o({props:{show:Boolean},emits:["update:show"],setup(o,{emit:E}){const k=o,{t:R}=t(),G=c(),_=d({get:()=>k.show,set:e=>E("update:show",e)}),$=d((()=>n.state.app.showFixedBet)),ee=d((()=>n.state.user.userInfo)),ae=d((()=>n.state.match.matchInfo)),se=d((()=>n.state.match.needTimer)),te=d((()=>{const{isSend:e}=Ae.value;return!l()||1*e==0})),ne=d((()=>{const{isSend:e}=Ae.value;return 0==e||!ge.value})),le=d((()=>{const{isSend:e,bettingTotal:a}=Ae.value;return l()?0==e?R("live.needBet",{num:a}):R("live.chatTip")+"...":R("live.needLogin")}));u((()=>ae.value),(()=>{me()})),i((()=>{})),v((()=>{e?.disconnect()}));const oe=d((()=>ae.value.gidm)),ce=d((()=>ae.value.systemId)),de=d((()=>G?.query?.anchorId)),ue=d((()=>G?.params?.id)),ie=d((()=>`${ue.value}${de.value}`)),ve=A(!1);u(ie,((a,s)=>{a!==s&&(e?.disconnect(),ve.value=!0)}));const Ae=A({}),me=async()=>{if(se.value&&!ve.value)return;const e={gidm:oe.value,systemId:ce.value,anchorId:de.value,version:"3.9.0"},s=await a(e);200===s.code&&(Ae.value=s.data||{},re(),fe())},re=async()=>{const{roomNo:e,channelType:a}=Ae.value,t={roomNo:e,page:1,pageSize:20,channelType:a},n=await s(t),l=(n.extra||{}).messageList||[];if(200==n.code){ve.value&&(he.value=[],ve.value=!1);const e=l.filter((e=>"1"==`${e.msgType}`));pe(e)}},fe=async()=>{const{roomNo:a}=Ae.value,s=`/topic/1/${a}`;e.subscribe(s,(e=>{const a=JSON.parse(e.body);if(a&&1e3===a.action){const[e]=a.data;pe(e)}}))},he=A([]),pe=e=>{e instanceof Array?he.value=e.reverse().concat(he.value):he.value.push(e),we()},Pe=A(null),we=()=>{const e=Pe.value||{};m((()=>{e.scrollTop=e&&e.scrollHeight}))},ge=A(),be=()=>{const a=ge.value,{roomNo:s}=Ae.value,{playerId:t,teamId:n}=ee.value,l={token:"1",msgType:"1",roomNo:s,content:a,playerId:t,teamId:n};e.send("/chat/sendMsg",JSON.stringify(l)),ge.value=""},Oe=A(1),ye=e=>{Oe.value=e};return(e,a)=>{const s=r("SvgIcon"),t=r("van-field"),n=r("van-form"),l=r("van-button"),o=r("van-popup"),c=f("img");return h(),p(o,{show:T(_),"onUpdate:show":a[4]||(a[4]=e=>z(_)?_.value=e:null),class:I(["chat",{"has-bet":T($),fh:2===Oe.value}]),position:"bottom",overlay:!1,"close-on-click-overlay":!0,round:""},{default:P((()=>[w("div",D,[w("div",S,[w("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTIilupG2toimu4emu4mmu4imuwt0PKkAAAAGdFJOUwC2BuCEe+WQgKIAAACuSURBVCjPdZMxDsIwDEWtAgcgQ2fKCRhgR+oFkDgBy7//EWjSNtjWI0ti68mO7W8zPu/7JdjD/DA7SSV4J+llB+nj4WGUbtUb4AVdvEcFuKJ6rlcJaIUmD3cmwD/EwY5wTx+tv0OwboTEu5U+uZkR3eDrmIpv8DmhKyzlpjY4oztc0pwanNE/XozA2fBnXAVWzN3BTnLXcUI8TZw8qwQVxepjpbKqeQN4W3iz8HwBt7ZwXfhVzLIAAAAASUVORK5CYII=",onClick:a[0]||(a[0]=e=>_.value=!1)})]),1===Oe.value?(h(),g("div",X,[w("img",{src:"data:image/png;base64,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",onClick:a[1]||(a[1]=e=>ye(2))})])):b("",!0),2===Oe.value?(h(),g("div",C,[w("img",{src:"/assets/down_round.edea70a6.png",onClick:a[2]||(a[2]=e=>ye(1))})])):b("",!0),w("div",{ref_key:"chatRef",ref:Pe,class:"chat-main__wrapper"},[w("div",V,[w("div",j,[O(s,{name:"bot"})]),w("div",H,[y(U(e.$t("live.aiBot")),1),J]),w("div",W,U(e.$t("live.chatSys")),1)]),(h(!0),g(B,null,x(he.value,(e=>(h(),g("div",{key:e.msgId,class:"item"},[w("div",K,[N(w("img",L,null,512),[[c,e.headImg]])]),w("div",F,[y(U(e.nickName),1),q]),w("div",Q,U(e.content),1)])))),128))],512),w("div",Y,[O(n,{"submit-on-enter":"",onSubmit:be},{default:P((()=>[O(t,{modelValue:ge.value,"onUpdate:modelValue":a[3]||(a[3]=e=>ge.value=e),autocomplete:"off",placeholder:T(le),disabled:T(te),maxlength:50},null,8,["modelValue","placeholder","disabled"]),Z])),_:1}),w("div",M,[O(l,{disabled:T(ne),onClick:be},{default:P((()=>[y(U(e.$t("live.send")),1)])),_:1},8,["disabled"])])])])])),_:1},8,["show","class"])}}});G.__scopeId="data-v-342e81e6";export{G as default};
