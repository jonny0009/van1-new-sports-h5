import{g as e,b as a,c as t}from"./index.2278b206.js";import{A as l,M as s,N as n,s as o}from"./index.bb5a6193.js";import{s as i,d as c,b as r,r as d,o as u,S as v,P as p,u as b,F as f,_ as m,Z as h,V as g,q as y,B as I,c as w,O as k,X as T,Y as x,M as _,a as j,w as C,R as $,W as M,$ as E}from"./vue.7833d4f2.js";const A=e=>(e=>{const a=[];let t=-1,l=-1,s=-1,n=0,o=!1;for(let i=0;i<e.length;++i){let c=e[i];c>=10&&(c%=10),3===c&&(c=2),-1===t||t!==c&&0!==c?(l++,s=l,n=0,o=!1,t=c,a.length<=l&&a.push([0,0,0,0,0,0]),a[l][n++]=1e3*e[i],0===t&&a[l][0]++):0===c?a[s][n-1]++:o||6===n||0!==a[l][n]?(o=!0,s++,1===n&&(l=s),a.length<=s&&a.push([0,0,0,0,0,0]),a[s][n-1]=1e3*e[i]):a[l][n++]=1e3*e[i]}return a})(e=e.map((e=>e%10==0?0:e))).map((e=>e.map((e=>{if(0!==e)return e})))),B=e=>{if(e.length<2)return!1;const a=(e[0]||[])[0];return!!(a&&a<1e3)};const L={class:"content"},O={class:"table-cover"},D=["src"],R={class:"table-road-list"},U={class:"good-bg"},z={class:"title-1"},N={class:"title-2"},P={class:"bottom"},S={class:"table-name"},V={class:"right"},X={class:"bet-money"},F={class:"number"};var K=i({props:{tableInfo:{type:Object,default:()=>{}}},setup(a){const t=a,o=c(!1),i=r((()=>o.value||!t.tableInfo.tableCover?"/assets/user.a56c1294.jpg":t.tableInfo.tableCover)),w=["he","xian","zhuang","zhuang"],k=r((()=>{let e=A(t.tableInfo.wins);if(B(e)){const a=[];let t=0;e.forEach(((e,l)=>{0===l&&e[0]<1e3?t=e[0]:1===l&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-15,15);for(let t=0;t<e.length;t++){const l=e[t];for(let e=0;e<l.length;e++){let s=l[e],n="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===s){a[t][e].push(n);continue}const o=document.createElement("div");let i=0;i=s<10?s:s>1e3?s%1e3:s%10,1===s&&(s=0);s=Math.floor(s/1e3)%10,3===s&&(s=2);const c=s%10;i?(i>1&&(o.innerText=`${i}`),n=`box ${w[c]} line`):n=`box ${w[c]}`,a[t][e].push(n)}}if(a.length<19){const e=19-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),T=e=>{const a={};if(e.indexOf("X")>-1){const t=(e=e.replaceAll(" ","")).split("X");a.str1=t[0],a.str2=t[1]}return a},x=async()=>{const a=t.tableInfo.tableId;s({duration:2e4,message:"加载中..."});const l=await e({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===(null==l?void 0:l.code)){n();const e=l.data.url.replace("&isAi=1","");window.location.href=e+"&source=7lucky&hasLive=1&brandType=1&tableId="+a+"&sourceUrl="+encodeURIComponent(window.location.href)}};return(e,t)=>{const s=d("SvgIcon");return u(),v("div",{class:"table-info-component",onClick:x},[p("div",L,[p("div",O,[p("img",{src:b(i),onError:t[0]||(t[0]=e=>o.value=!0),style:{"object-fit":"contain"}},null,40,D)]),p("div",R,[(u(!0),v(f,null,m(b(k),((e,a)=>(u(),v("div",{class:"road-col",key:a},[(u(!0),v(f,null,m(e,((e,a)=>(u(),v("div",{class:"road-item",key:a},[p("span",{class:h(["round",e])},null,2)])))),128))])))),128))]),p("div",U,[p("div",z,g(T(a.tableInfo.goodRoadTitle).str1),1),p("div",N,"x"+g(T(a.tableInfo.goodRoadTitle).str2),1)])]),p("div",P,[p("span",S,g(a.tableInfo.tableName),1),p("div",V,[p("div",X,[y(l,{"class-name":"mr3 fs24"}),I(" "+g(a.tableInfo.tableLimitMin||0),1)]),p("div",F,[y(s,{name:"home-users",class:"users-icon"}),I(" "+g(a.tableInfo.tablePlayers||0),1)])])])])}}});K.__scopeId="data-v-52497528";const q={class:"good-road-view"},W=(e=>(T("data-v-90924cf4"),e=e(),x(),e))((()=>p("div",{class:"title"},[p("span",null,"好路推荐")],-1))),Y={key:1,class:"list"},Z=["src"];var G=i({props:{list:{type:Object,default:()=>{}},loading:{type:Boolean,default:!0}},setup(e){const a=c(!1),t=c("");return(l,s)=>{const n=d("Loading"),o=d("EmptyData"),i=d("van-popup");return u(),v(f,null,[p("section",q,[W,e.loading?(u(),w(n,{key:0})):e.list.length?(u(),v("div",Y,[(u(!0),v(f,null,m(e.list,((e,a)=>(u(),w(K,{key:a,tableInfo:e},null,8,["tableInfo"])))),128))])):(u(),w(o,{key:2}))]),y(i,{round:"",show:a.value,"onUpdate:show":s[0]||(s[0]=e=>a.value=e),position:"bottom",teleport:"body",style:{height:"84%"}},{default:k((()=>[p("iframe",{width:"100%",height:"100%",style:{border:"none"},src:t.value,frameborder:"0"},null,8,Z)])),_:1},8,["show"])],64)}}});G.__scopeId="data-v-90924cf4";const H={class:"table-cover"},J=["src"],Q={class:"table-road-list"},ee={class:"table-name"},ae={class:"bottom"},te={class:"bet-money"},le={class:"number"};var se=i({props:{tableInfo:{type:Object,default:()=>{}}},setup(a){const t=a,o=c(!1),i=r((()=>o.value||!t.tableInfo.tableCover?"/assets/table-bg.55aac982.jpg":t.tableInfo.tableCover)),w=["he","xian","zhuang","zhuang"],k=r((()=>{let e=A(t.tableInfo.wins);if(B(e)){const a=[];let t=0;e.forEach(((e,l)=>{0===l&&e[0]<1e3?t=e[0]:1===l&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-22,22);for(let t=0;t<e.length;t++){const l=e[t];for(let e=0;e<l.length;e++){let s=l[e],n="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===s){a[t][e].push(n);continue}const o=document.createElement("div");let i=0;i=s<10?s:s>1e3?s%1e3:s%10,1===s&&(s=0);s=Math.floor(s/1e3)%10,3===s&&(s=2);const c=s%10;i?(i>1&&(o.innerText=`${i}`),n=`box ${w[c]} line`):n=`box ${w[c]}`,a[t][e].push(n)}}if(a.length<24){const e=24-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),T=async()=>{const a=t.tableInfo.tableId;s({duration:2e4,message:"加载中..."});const l=await e({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===(null==l?void 0:l.code)){n();const e=l.data.url.replace("&isAi=1","");window.location.href=e+"&source=7lucky&hasLive=1&brandType=1&tableId="+a+"&sourceUrl="+encodeURIComponent(window.location.href)}};return(e,t)=>{const s=d("SvgIcon");return u(),v("div",{class:"table-info-component",onClick:T},[p("div",H,[p("img",{src:b(i),onError:t[0]||(t[0]=e=>o.value=!0),style:{"object-fit":"contain"}},null,40,J)]),p("div",Q,[(u(!0),v(f,null,m(b(k),((e,a)=>(u(),v("div",{class:"road-col",key:a},[(u(!0),v(f,null,m(e,((e,a)=>(u(),v("div",{class:"road-item",key:a},[p("span",{class:h(["round",e])},null,2)])))),128))])))),128))]),p("div",ee,g(a.tableInfo.tableName),1),p("div",ae,[p("span",te,[y(l,{"class-name":"mr3 fs24"}),I(" "+g(a.tableInfo.tableLimitMin||0),1)]),p("span",le,[y(s,{name:"home-users",class:"users-icon"}),I(" "+g(a.tableInfo.tablePlayers||0),1)])])])}}});se.__scopeId="data-v-1264ffd9";const ne={class:"good-road-view"},oe=(e=>(T("data-v-887c6872"),e=e(),x(),e))((()=>p("div",{class:"title"},"真人百家乐",-1))),ie={key:1,class:"list"};var ce=i({props:{list:{type:Object,default:()=>{}},loading:{type:Boolean,default:!0}},setup:e=>(a,t)=>{const l=d("Loading"),s=d("EmptyData");return u(),v("section",ne,[oe,e.loading?(u(),w(l,{key:0})):e.list.length?(u(),v("div",ie,[(u(!0),v(f,null,m(e.list,((e,a)=>(u(),w(se,{key:a,tableInfo:e},null,8,["tableInfo"])))),128))])):(u(),w(s,{key:2}))])}});ce.__scopeId="data-v-887c6872";const re={key:0,class:"maintenance-view"},de=(e=>(T("data-v-cb059ee4"),e=e(),x(),e))((()=>p("div",{class:"maintenance-title"},"赌场维护中...",-1))),ue={key:0,class:"maintenance-subtitle"},ve={key:1,class:"maintenance-timer"};var pe=i({setup(e){const l=r((()=>o.state.app.showFixedBet)),s=r((()=>o.state.app.theme)),n=r((()=>"blue"===s.value?"/assets/maintenance-1.b0744d0b.png":"/assets/maintenance-2.661a1604.png")),i=c(!1),d=c(!1),m=c({}),I=c([]),w=c([]),k=c(),T=c(""),x=c(!0),A=c(!0);_((()=>{B(),L()})),j((()=>{clearInterval(k.value)})),clearInterval(k.value),k.value=setInterval((()=>{B(),L()}),1e4);const B=async()=>{const e=await a();x.value=!1;const t=(null==e?void 0:e.data)||[];I.value=t.slice(0,2)},L=async()=>{var e,a,l;const s=await t();A.value=!1,503===(null==(e=null==s?void 0:s.data)?void 0:e.code)?(i.value=!0,m.value=null==(a=null==s?void 0:s.data)?void 0:a.data):i.value=!1,w.value=(null==(l=null==s?void 0:s.data)?void 0:l.data)||[]};C((()=>i.value),(()=>{i.value&&O()}));const O=()=>{const e=m.value.endTime.replace(/-/g,"/"),a=new Date(e).getTime();if(Date.now()>a)return d.value=!1,!1;d.value=!0;const t=a-(new Date).getTime();let l,s,n;t>=0&&(l=Math.floor(t/1e3/60/60),s=Math.floor(t/1e3/60%60),n=Math.floor(t/1e3%60),l=l<10?"0"+l:l,s=s<10?"0"+s:s,n=n<10?"0"+n:n,T.value=`${l}:${s}:${n}`,setTimeout(O,1e3))},D=$(),R=()=>{D.push("/home")};return(e,a)=>(u(),v("div",{class:h(["casino-page",{"has-bet":b(l)}])},[i.value?(u(),v("div",re,[p("div",{class:"maintenance-icon",style:M({backgroundImage:`url(${b(n)})`})},null,4),de,d.value?(u(),v("div",ue,"预计维护倒计时")):E("",!0),d.value?(u(),v("div",ve,g(T.value),1)):E("",!0),p("div",{class:"go-btn",onClick:R},"去首页")])):(u(),v(f,{key:1},[y(G,{list:I.value,loading:x.value},null,8,["list","loading"]),y(ce,{list:w.value,loading:A.value},null,8,["list","loading"])],64))],2))}});pe.__scopeId="data-v-cb059ee4";export{pe as default};
