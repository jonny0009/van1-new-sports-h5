import{w as a}from"./websocket.66a1e30b.js";import{i as e,l as s}from"./index.aac2d1bc.js";import{u as t,s as n,F as l}from"./index.66da0204.js";import{s as o,a2 as d,b as u,w as i,j as c,a as m,d as v,n as A,r,E as f,o as h,c as p,O as P,P as w,R as g,$ as b,q as O,B as y,W as U,F as B,S as x,x as N,u as I,k as T,_ as z,Y as E,Z as k}from"./vue.16414fe4.js";const R=a=>(E("data-v-2ab7ad67"),a=a(),k(),a),S={class:"chat-main"},D={class:"close"},X={key:0,class:"close-down"},C={key:1,class:"close-down"},V={class:"item"},j={class:"item-avatar"},H={class:"item-name"},J=R((()=>w("em",null,":",-1))),W={class:"item-cont"},K={class:"item-avatar"},L={type:3},F={class:"item-name"},q=R((()=>w("em",null,":",-1))),Q={class:"item-cont"},Y={class:"chat-main__form"},Z=R((()=>w("button",{"native-type":"submit",hidden:""},null,-1))),M={class:"action"};var G=o({props:{show:Boolean},emits:["update:show"],setup(o,{emit:E}){const k=o,{t:R}=t(),G=d(),_=u({get:()=>k.show,set:a=>E("update:show",a)}),$=u((()=>n.state.app.showFixedBet)),aa=u((()=>n.state.user.userInfo)),ea=u((()=>n.state.match.matchInfo)),sa=u((()=>n.state.match.needTimer)),ta=u((()=>{const{isSend:a}=va.value;return!l()||1*a==0})),na=u((()=>{const{isSend:a}=va.value;return 0==a||!ga.value})),la=u((()=>{const{isSend:a,bettingTotal:e}=va.value;return l()?0==a?R("live.needBet",{num:e}):R("live.chatTip")+"...":R("live.needLogin")}));i((()=>ea.value),(()=>{Aa()})),c((()=>{})),m((()=>{a?.disconnect()}));const oa=u((()=>ea.value.gidm)),da=u((()=>ea.value.systemId)),ua=u((()=>G?.query?.anchorId)),ia=u((()=>G?.params?.id)),ca=u((()=>`${ia.value}${ua.value}`)),ma=v(!1);i(ca,((e,s)=>{e!==s&&(a?.disconnect(),ma.value=!0)}));const va=v({}),Aa=async()=>{if(sa.value&&!ma.value)return;const a={gidm:oa.value,systemId:da.value,anchorId:ua.value,version:"3.9.0"},s=await e(a);200===s.code&&(va.value=s.data||{},ra(),fa())},ra=async()=>{const{roomNo:a,channelType:e}=va.value,t={roomNo:a,page:1,pageSize:20,channelType:e},n=await s(t),l=(n.extra||{}).messageList||[];if(200==n.code){ma.value&&(ha.value=[],ma.value=!1);const a=l.filter((a=>"1"==`${a.msgType}`));pa(a)}},fa=async()=>{const{roomNo:e}=va.value,s=`/topic/1/${e}`;a.subscribe(s,(a=>{const e=JSON.parse(a.body);if(e&&1e3===e.action){const[a]=e.data;pa(a)}}))},ha=v([]),pa=a=>{if(a instanceof Array){const e=new Set(ha.value.map((a=>a.msgId))),s=a.reverse().filter((a=>!e.has(a.msgId)));ha.value=s.concat(ha.value)}else{new Set(ha.value.map((a=>a.msgId))).has(a.msgId)||ha.value.push(a)}wa()},Pa=v(null),wa=()=>{const a=Pa.value||{};A((()=>{a.scrollTop=a&&a.scrollHeight}))},ga=v(),ba=()=>{const e=ga.value,{roomNo:s}=va.value,{playerId:t,teamId:n}=aa.value,l={token:"1",msgType:"1",roomNo:s,content:e,playerId:t,teamId:n};a.send("/chat/sendMsg",JSON.stringify(l)),ga.value=""},Oa=v(1),ya=a=>{Oa.value=a};return(a,e)=>{const s=r("SvgIcon"),t=r("van-field"),n=r("van-form"),l=r("van-button"),o=r("van-popup"),d=f("img");return h(),p(o,{show:I(_),"onUpdate:show":e[4]||(e[4]=a=>T(_)?_.value=a:null),class:z(["chat",{"has-bet":I($),fh:2===Oa.value}]),position:"bottom",overlay:!1,"close-on-click-overlay":!0,round:""},{default:P((()=>[w("div",S,[w("div",D,[w("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTIilupG2toimu4emu4mmu4imuwt0PKkAAAAGdFJOUwC2BuCEe+WQgKIAAACuSURBVCjPdZMxDsIwDEWtAgcgQ2fKCRhgR+oFkDgBy7//EWjSNtjWI0ti68mO7W8zPu/7JdjD/DA7SSV4J+llB+nj4WGUbtUb4AVdvEcFuKJ6rlcJaIUmD3cmwD/EwY5wTx+tv0OwboTEu5U+uZkR3eDrmIpv8DmhKyzlpjY4oztc0pwanNE/XozA2fBnXAVWzN3BTnLXcUI8TZw8qwQVxepjpbKqeQN4W3iz8HwBt7ZwXfhVzLIAAAAASUVORK5CYII=",onClick:e[0]||(e[0]=a=>_.value=!1)})]),1===Oa.value?(h(),g("div",X,[w("img",{src:"data:image/png;base64,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",onClick:e[1]||(e[1]=a=>ya(2))})])):b("",!0),2===Oa.value?(h(),g("div",C,[w("img",{src:"/assets/down_round.edea70a6.png",onClick:e[2]||(e[2]=a=>ya(1))})])):b("",!0),w("div",{ref_key:"chatRef",ref:Pa,class:"chat-main__wrapper"},[w("div",V,[w("div",j,[O(s,{name:"bot"})]),w("div",H,[y(U(a.$t("live.aiBot")),1),J]),w("div",W,U(a.$t("live.chatSys")),1)]),(h(!0),g(B,null,x(ha.value,(a=>(h(),g("div",{key:a.msgId,class:"item"},[w("div",K,[N(w("img",L,null,512),[[d,a.headImg]])]),w("div",F,[y(U(a.nickName),1),q]),w("div",Q,U(a.content),1)])))),128))],512),w("div",Y,[O(n,{"submit-on-enter":"",onSubmit:ba},{default:P((()=>[O(t,{modelValue:ga.value,"onUpdate:modelValue":e[3]||(e[3]=a=>ga.value=a),autocomplete:"off",placeholder:I(la),disabled:I(ta),maxlength:50},null,8,["modelValue","placeholder","disabled"]),Z])),_:1}),w("div",M,[O(l,{disabled:I(na),onClick:ba},{default:P((()=>[y(U(a.$t("live.send")),1)])),_:1},8,["disabled"])])])])])),_:1},8,["show","class"])}}});G.__scopeId="data-v-2ab7ad67";export{G as default};
