<<<<<<<< HEAD:dist/assets/ChatRoom.d80257ac.js
import{w as e}from"./websocket.621d9715.js";import{i as a,l as s}from"./index.beffd051.js";import{u as t,s as n,R as o}from"./index.1380e0a0.js";import{s as l,b as d,w as i,j as c,a as u,d as A,n as m,r as v,E as r,o as f,c as h,O as p,P,S as g,$ as w,q as b,B as O,V as y,F as U,_ as B,x,u as N,k as T,Z as E,X as z,Y as I}from"./vue.7833d4f2.js";const k=e=>(z("data-v-bb696204"),e=e(),I(),e),R={class:"chat-main"},D={class:"close"},S={key:0,class:"close-down"},X={key:1,class:"close-down"},V={class:"item"},C={class:"item-avatar"},j={class:"item-name"},J=k((()=>P("em",null,":",-1))),H={class:"item-cont"},K={class:"item-avatar"},L={type:3},W={class:"item-name"},F=k((()=>P("em",null,":",-1))),q={class:"item-cont"},Q={class:"chat-main__form"},Y=k((()=>P("button",{"native-type":"submit",hidden:""},null,-1))),Z={class:"action"};var M=l({props:{show:Boolean},emits:["update:show"],setup(l,{emit:z}){const I=l,{t:k}=t(),M=d({get:()=>I.show,set:e=>z("update:show",e)}),G=d((()=>n.state.app.showFixedBet)),_=d((()=>n.state.user.userInfo)),$=d((()=>n.state.match.matchInfo)),ee=d((()=>n.state.match.needTimer)),ae=d((()=>{const{isSend:e}=ne.value;return!o()||1*e==0})),se=d((()=>{const{isSend:e}=ne.value;return 0==e||!me.value})),te=d((()=>{const{isSend:e,bettingTotal:a}=ne.value;return o()?0==e?k("live.needBet",{num:a}):k("live.chatTip")+"...":k("live.needLogin")}));i((()=>$.value),(()=>{oe()})),c((()=>{})),u((()=>{var a;null==(a=e)||a.disconnect()}));const ne=A({}),oe=async()=>{if(ee.value)return;const e={gidm:$.value.gidm,systemId:$.value.systemId,anchorId:void 0,version:"3.9.0"},s=await a(e);200===s.code&&(ne.value=s.data||{},le(),de())},le=async()=>{const{roomNo:e,channelType:a}=ne.value,t={roomNo:e,page:1,pageSize:20,channelType:a},n=await s(t),o=(n.extra||{}).messageList||[];if(200==n.code){const e=[];o.forEach((a=>{if(a.msgType&&2==+a.msgType&&a.content){(JSON.parse(a.content||"").bettingData||[]).forEach((a=>{e.push(a.gidm)}))}})),ce(o)}},de=async()=>{const{roomNo:a}=ne.value,s=`/topic/1/${a}`;e.subscribe(s,(e=>{const a=JSON.parse(e.body);if(a&&1e3===a.action){const[e]=a.data;ce(e)}}))},ie=A([]),ce=e=>{e instanceof Array?ie.value=e.reverse().concat(ie.value):ie.value.push(e),Ae()},ue=A(null),Ae=()=>{const e=ue.value||{};m((()=>{e.scrollTop=e&&e.scrollHeight}))},me=A(),ve=()=>{const a=me.value,{roomNo:s}=ne.value,{playerId:t,teamId:n}=_.value,o={token:"1",msgType:"1",roomNo:s,content:a,playerId:t,teamId:n};e.send("/chat/sendMsg",JSON.stringify(o)),me.value=""},re=A(1),fe=e=>{re.value=e};return(e,a)=>{const s=v("SvgIcon"),t=v("van-field"),n=v("van-form"),o=v("van-button"),l=v("van-popup"),d=r("img");return f(),h(l,{show:N(M),"onUpdate:show":a[4]||(a[4]=e=>T(M)?M.value=e:null),class:E(["chat",{"has-bet":N(G),fh:2===re.value}]),position:"bottom",overlay:!1,"close-on-click-overlay":!0,round:""},{default:p((()=>[P("div",R,[P("div",D,[P("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTIilupG2toimu4emu4mmu4imuwt0PKkAAAAGdFJOUwC2BuCEe+WQgKIAAACuSURBVCjPdZMxDsIwDEWtAgcgQ2fKCRhgR+oFkDgBy7//EWjSNtjWI0ti68mO7W8zPu/7JdjD/DA7SSV4J+llB+nj4WGUbtUb4AVdvEcFuKJ6rlcJaIUmD3cmwD/EwY5wTx+tv0OwboTEu5U+uZkR3eDrmIpv8DmhKyzlpjY4oztc0pwanNE/XozA2fBnXAVWzN3BTnLXcUI8TZw8qwQVxepjpbKqeQN4W3iz8HwBt7ZwXfhVzLIAAAAASUVORK5CYII=",onClick:a[0]||(a[0]=e=>M.value=!1)})]),1===re.value?(f(),g("div",S,[P("img",{src:"data:image/png;base64,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",onClick:a[1]||(a[1]=e=>fe(2))})])):w("",!0),2===re.value?(f(),g("div",X,[P("img",{src:"/assets/down_round.edea70a6.png",onClick:a[2]||(a[2]=e=>fe(1))})])):w("",!0),P("div",{ref_key:"chatRef",ref:ue,class:"chat-main__wrapper"},[P("div",V,[P("div",C,[b(s,{name:"bot"})]),P("div",j,[O(y(e.$t("live.aiBot")),1),J]),P("div",H,y(e.$t("live.chatSys")),1)]),(f(!0),g(U,null,B(ie.value,(e=>(f(),g("div",{key:e.msgId,class:"item"},[P("div",K,[x(P("img",L,null,512),[[d,e.headImg]])]),P("div",W,[O(y(e.nickName),1),F]),P("div",q,y(e.content),1)])))),128))],512),P("div",Q,[b(n,{"submit-on-enter":"",onSubmit:ve},{default:p((()=>[b(t,{modelValue:me.value,"onUpdate:modelValue":a[3]||(a[3]=e=>me.value=e),autocomplete:"off",placeholder:N(te),disabled:N(ae),maxlength:50},null,8,["modelValue","placeholder","disabled"]),Y])),_:1}),P("div",Z,[b(o,{disabled:N(se),onClick:ve},{default:p((()=>[O(y(e.$t("live.send")),1)])),_:1},8,["disabled"])])])])])),_:1},8,["show","class"])}}});M.__scopeId="data-v-bb696204";export{M as default};
========
import{w as e}from"./websocket.6c65cdb3.js";import{i as a,l as s}from"./index.cbe04f40.js";import{u as t,s as n,R as o}from"./index.0612b907.js";import{s as l,b as c,w as d,j as i,a as u,d as A,n as m,r as v,E as r,o as f,c as h,O as p,P,S as b,$ as g,q as w,B as O,V as y,F as U,_ as B,x,u as N,k as T,Z as E,X as z,Y as I}from"./vue.7833d4f2.js";const k=e=>(z("data-v-bb696204"),e=e(),I(),e),R={class:"chat-main"},D={class:"close"},S={key:0,class:"close-down"},X={key:1,class:"close-down"},V={class:"item"},C={class:"item-avatar"},j={class:"item-name"},J=k((()=>P("em",null,":",-1))),H={class:"item-cont"},K={class:"item-avatar"},L={type:3},W={class:"item-name"},F=k((()=>P("em",null,":",-1))),q={class:"item-cont"},Q={class:"chat-main__form"},Y=k((()=>P("button",{"native-type":"submit",hidden:""},null,-1))),Z={class:"action"};var M=l({props:{show:Boolean},emits:["update:show"],setup(l,{emit:z}){const I=l,{t:k}=t(),M=c({get:()=>I.show,set:e=>z("update:show",e)}),G=c((()=>n.state.app.showFixedBet)),_=c((()=>n.state.user.userInfo)),$=c((()=>n.state.match.matchInfo)),ee=c((()=>n.state.match.needTimer)),ae=c((()=>{const{isSend:e}=ne.value;return!o()||1*e==0})),se=c((()=>{const{isSend:e}=ne.value;return 0==e||!me.value})),te=c((()=>{const{isSend:e,bettingTotal:a}=ne.value;return o()?0==e?k("live.needBet",{num:a}):k("live.chatTip")+"...":k("live.needLogin")}));d((()=>$.value),(()=>{oe()})),i((()=>{})),u((()=>{var a;null==(a=e)||a.disconnect()}));const ne=A({}),oe=async()=>{if(ee.value)return;const e={gidm:$.value.gidm,systemId:$.value.systemId,anchorId:void 0,version:"3.9.0"},s=await a(e);200===s.code&&(ne.value=s.data||{},le(),ce())},le=async()=>{const{roomNo:e,channelType:a}=ne.value,t={roomNo:e,page:1,pageSize:20,channelType:a},n=await s(t),o=(n.extra||{}).messageList||[];if(200==n.code){const e=[];o.forEach((a=>{if(a.msgType&&2==+a.msgType&&a.content){(JSON.parse(a.content||"").bettingData||[]).forEach((a=>{e.push(a.gidm)}))}})),ie(o)}},ce=async()=>{const{roomNo:a}=ne.value,s=`/topic/1/${a}`;e.subscribe(s,(e=>{const a=JSON.parse(e.body);if(a&&1e3===a.action){const[e]=a.data;ie(e)}}))},de=A([]),ie=e=>{e instanceof Array?de.value=e.reverse().concat(de.value):de.value.push(e),Ae()},ue=A(null),Ae=()=>{const e=ue.value||{};m((()=>{e.scrollTop=e&&e.scrollHeight}))},me=A(),ve=()=>{const a=me.value,{roomNo:s}=ne.value,{playerId:t,teamId:n}=_.value,o={token:"1",msgType:"1",roomNo:s,content:a,playerId:t,teamId:n};e.send("/chat/sendMsg",JSON.stringify(o)),me.value=""},re=A(1),fe=e=>{re.value=e};return(e,a)=>{const s=v("SvgIcon"),t=v("van-field"),n=v("van-form"),o=v("van-button"),l=v("van-popup"),c=r("img");return f(),h(l,{show:N(M),"onUpdate:show":a[4]||(a[4]=e=>T(M)?M.value=e:null),class:E(["chat",{"has-bet":N(G),fh:2===re.value}]),position:"bottom",overlay:!1,"close-on-click-overlay":!0,round:""},{default:p((()=>[P("div",R,[P("div",D,[P("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTIilupG2toimu4emu4mmu4imuwt0PKkAAAAGdFJOUwC2BuCEe+WQgKIAAACuSURBVCjPdZMxDsIwDEWtAgcgQ2fKCRhgR+oFkDgBy7//EWjSNtjWI0ti68mO7W8zPu/7JdjD/DA7SSV4J+llB+nj4WGUbtUb4AVdvEcFuKJ6rlcJaIUmD3cmwD/EwY5wTx+tv0OwboTEu5U+uZkR3eDrmIpv8DmhKyzlpjY4oztc0pwanNE/XozA2fBnXAVWzN3BTnLXcUI8TZw8qwQVxepjpbKqeQN4W3iz8HwBt7ZwXfhVzLIAAAAASUVORK5CYII=",onClick:a[0]||(a[0]=e=>M.value=!1)})]),1===re.value?(f(),b("div",S,[P("img",{src:"data:image/png;base64,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",onClick:a[1]||(a[1]=e=>fe(2))})])):g("",!0),2===re.value?(f(),b("div",X,[P("img",{src:"/assets/down_round.edea70a6.png",onClick:a[2]||(a[2]=e=>fe(1))})])):g("",!0),P("div",{ref_key:"chatRef",ref:ue,class:"chat-main__wrapper"},[P("div",V,[P("div",C,[w(s,{name:"bot"})]),P("div",j,[O(y(e.$t("live.aiBot")),1),J]),P("div",H,y(e.$t("live.chatSys")),1)]),(f(!0),b(U,null,B(de.value,(e=>(f(),b("div",{key:e.msgId,class:"item"},[P("div",K,[x(P("img",L,null,512),[[c,e.headImg]])]),P("div",W,[O(y(e.nickName),1),F]),P("div",q,y(e.content),1)])))),128))],512),P("div",Q,[w(n,{"submit-on-enter":"",onSubmit:ve},{default:p((()=>[w(t,{modelValue:me.value,"onUpdate:modelValue":a[3]||(a[3]=e=>me.value=e),autocomplete:"off",placeholder:N(te),disabled:N(ae),maxlength:50},null,8,["modelValue","placeholder","disabled"]),Y])),_:1}),P("div",Z,[w(o,{disabled:N(se),onClick:ve},{default:p((()=>[O(y(e.$t("live.send")),1)])),_:1},8,["disabled"])])])])])),_:1},8,["show","class"])}}});M.__scopeId="data-v-bb696204";export{M as default};
>>>>>>>> f555490d (lang):dist/assets/ChatRoom.7d12a37f.js
