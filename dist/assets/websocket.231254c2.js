<<<<<<< HEAD:dist/assets/websocket.cbeb0225.js
import{J as t,S as s,K as e,L as n}from"./index.d6b89f05.js";var i=new class{constructor(t){this.url=t,this.stompClient=null,this.headers={},this.subscribeMap={}}async connect(){const t=new s(this.url);return this.stompClient=e.over(t),this.stompClient.debug=null,new Promise(((t,s)=>{this.stompClient.connect(this.headers,(()=>{console.info("%csocket重连成功!","color:#00e800;"),t(this.stompClient)}),(async t=>{this.stompClient.disconnect(),this.stompClient=null,console.error(`socket断开连接=>${t}`),console.info("socket开始尝试重新连接...."),await n(3e3),await this.connect(),s(t)}))}))}async subscribe(t,s){return console.log(this.stompClient),this.stompClient||await this.connect(),this.subscribeMap[t]={connected:this.stompClient.connected,callback:s,client:null,onconnect:null},this.stompClient.connected&&(this.subscribeMap[t].client=this.stompClient.subscribe(t,(t=>{s(t)}))),this.subscribeMap[t]}send(t,s,e={}){this.stompClient&&this.stompClient.send(t,e,s)}disconnect(){this.stompClient?.connected&&(console.log("断开链接"),this.stompClient.disconnect(),this.stompClient=null)}}(`${t}/chat/websocket`);export{i as w};
=======
import{L as t,S as s,N as e,O as n}from"./index.18c6eb63.js";var i=new class{constructor(t){this.url=t,this.stompClient=null,this.headers={},this.subscribeMap={}}async connect(){const t=new s(this.url);return this.stompClient=e.over(t),this.stompClient.debug=null,new Promise(((t,s)=>{this.stompClient.connect(this.headers,(()=>{console.info("%csocket重连成功!","color:#00e800;"),t(this.stompClient)}),(async t=>{this.stompClient.disconnect(),this.stompClient=null,console.error(`socket断开连接=>${t}`),console.info("socket开始尝试重新连接...."),await n(3e3),await this.connect(),s(t)}))}))}async subscribe(t,s){return console.log(this.stompClient),this.stompClient||await this.connect(),this.subscribeMap[t]={connected:this.stompClient.connected,callback:s,client:null,onconnect:null},this.stompClient.connected&&(this.subscribeMap[t].client=this.stompClient.subscribe(t,(t=>{s(t)}))),this.subscribeMap[t]}send(t,s,e={}){this.stompClient&&this.stompClient.send(t,e,s)}disconnect(){this.stompClient?.connected&&(console.log("断开链接"),this.stompClient.disconnect(),this.stompClient=null)}}(`${t}/chat/websocket`);export{i as w};
>>>>>>> dev:dist/assets/websocket.231254c2.js
