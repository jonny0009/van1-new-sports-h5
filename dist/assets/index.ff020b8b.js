import{g as e,b as a,c as t}from"./index.51fb757f.js";import{A as s,M as l,N as n,s as o}from"./index.3881c12a.js";import{s as i,b as c,r,E as d,o as u,S as v,P as p,x as b,F as f,_ as m,Z as h,u as g,V as y,q as I,B as w,c as k,X as T,Y as x,d as $,M as _,a as j,w as C,R as M,W as E,$ as A}from"./vue.7833d4f2.js";const D=e=>(e=>{const a=[];let t=-1,s=-1,l=-1,n=0,o=!1;for(let i=0;i<e.length;++i){let c=e[i];c>=10&&(c%=10),3===c&&(c=2),-1===t||t!==c&&0!==c?(s++,l=s,n=0,o=!1,t=c,a.length<=s&&a.push([0,0,0,0,0,0]),a[s][n++]=1e3*e[i],0===t&&a[s][0]++):0===c?a[l][n-1]++:o||6===n||0!==a[s][n]?(o=!0,l++,1===n&&(s=l),a.length<=l&&a.push([0,0,0,0,0,0]),a[l][n-1]=1e3*e[i]):a[s][n++]=1e3*e[i]}return a})(e=e.map((e=>e%10==0?0:e))).map((e=>e.map((e=>{if(0!==e)return e})))),O=e=>{if(e.length<2)return!1;const a=(e[0]||[])[0];return!!(a&&a<1e3)},R={class:"content"},z={class:"table-cover"},B={style:{"object-fit":"contain"}},L={class:"table-road-list"},U={class:"good-bg"},N={class:"title-1"},P={class:"title-2"},S={class:"bottom"},V={class:"table-name"},X={class:"right"},F={class:"bet-money"},K={class:"number"};var q=i({props:{tableInfo:{type:Object,default:()=>{}}},setup(a){const t=a,o=["he","xian","zhuang","zhuang"],i=c((()=>{let e=D(t.tableInfo.wins);if(O(e)){const a=[];let t=0;e.forEach(((e,s)=>{0===s&&e[0]<1e3?t=e[0]:1===s&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-15,15);for(let t=0;t<e.length;t++){const s=e[t];for(let e=0;e<s.length;e++){let l=s[e],n="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===l){a[t][e].push(n);continue}const i=document.createElement("div");let c=0;c=l<10?l:l>1e3?l%1e3:l%10,1===l&&(l=0);l=Math.floor(l/1e3)%10,3===l&&(l=2);const r=l%10;c?(c>1&&(i.innerText=`${c}`),n=`box ${o[r]} line`):n=`box ${o[r]}`,a[t][e].push(n)}}if(a.length<19){const e=19-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),k=e=>{const a={};if(e.indexOf("X")>-1){const t=(e=e.replaceAll(" ","")).split("X");a.str1=t[0],a.str2=t[1]}return a},T=async()=>{const a=t.tableInfo.tableId;l({duration:2e4,message:"加载中..."});const s=await e({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===(null==s?void 0:s.code)){n();const e=s.data.url.replace("&isAi=1","");window.location.href=e+"&source=7lucky&hasLive=1&brandType=1&tableId="+a+"&sourceUrl="+encodeURIComponent(window.location.host)}};return(e,t)=>{const l=r("SvgIcon"),n=d("img");return u(),v("div",{class:"table-info-component",onClick:T},[p("div",R,[p("div",z,[b(p("img",B,null,512),[[n,a.tableInfo.tableCover]])]),p("div",L,[(u(!0),v(f,null,m(g(i),((e,a)=>(u(),v("div",{class:"road-col",key:a},[(u(!0),v(f,null,m(e,((e,a)=>(u(),v("div",{class:"road-item",key:a},[p("span",{class:h(["round",e])},null,2)])))),128))])))),128))]),p("div",U,[p("div",N,y(k(a.tableInfo.goodRoadTitle).str1),1),p("div",P,"x"+y(k(a.tableInfo.goodRoadTitle).str2),1)])]),p("div",S,[p("span",V,y(a.tableInfo.tableName),1),p("div",X,[p("div",F,[I(s,{"class-name":"mr3 fs24"}),w(" "+y(a.tableInfo.tableLimitMin),1)]),p("div",K,[I(l,{name:"home-users",class:"users-icon"}),w(" "+y(a.tableInfo.tablePlayers),1)])])])])}}});q.__scopeId="data-v-461a82fc";const W={class:"good-road-view"},Y=(e=>(T("data-v-b4ca94a8"),e=e(),x(),e))((()=>p("div",{class:"title"},"好路推荐",-1))),Z={key:0,class:"list"};var G=i({props:{list:{type:Object,default:()=>{}}},setup:e=>(a,t)=>{const s=r("EmptyData");return u(),v("section",W,[Y,e.list.length?(u(),v("div",Z,[(u(!0),v(f,null,m(e.list,((e,a)=>(u(),k(q,{key:a,tableInfo:e},null,8,["tableInfo"])))),128))])):(u(),k(s,{key:1}))])}});G.__scopeId="data-v-b4ca94a8";const H={class:"table-cover"},J={style:{"object-fit":"contain"}},Q={class:"table-road-list"},ee={class:"table-name"},ae={class:"bottom"},te={class:"bet-money"},se={class:"number"};var le=i({props:{tableInfo:{type:Object,default:()=>{}}},setup(a){const t=a,o=["he","xian","zhuang","zhuang"],i=c((()=>{let e=D(t.tableInfo.wins);if(O(e)){const a=[];let t=0;e.forEach(((e,s)=>{0===s&&e[0]<1e3?t=e[0]:1===s&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-22,22);for(let t=0;t<e.length;t++){const s=e[t];for(let e=0;e<s.length;e++){let l=s[e],n="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===l){a[t][e].push(n);continue}const i=document.createElement("div");let c=0;c=l<10?l:l>1e3?l%1e3:l%10,1===l&&(l=0);l=Math.floor(l/1e3)%10,3===l&&(l=2);const r=l%10;c?(c>1&&(i.innerText=`${c}`),n=`box ${o[r]} line`):n=`box ${o[r]}`,a[t][e].push(n)}}if(a.length<24){const e=24-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),k=async()=>{const a=t.tableInfo.tableId;l({duration:2e4,message:"加载中..."});const s=await e({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===(null==s?void 0:s.code)){n();const e=s.data.url.replace("&isAi=1","");window.location.href=e+"&source=7lucky&hasLive=1&brandType=1&tableId="+a+"&sourceUrl="+encodeURIComponent(window.location.host)}};return(e,t)=>{const l=r("SvgIcon"),n=d("img");return u(),v("div",{class:"table-info-component",onClick:k},[p("div",H,[b(p("img",J,null,512),[[n,a.tableInfo.tableCover]])]),p("div",Q,[(u(!0),v(f,null,m(g(i),((e,a)=>(u(),v("div",{class:"road-col",key:a},[(u(!0),v(f,null,m(e,((e,a)=>(u(),v("div",{class:"road-item",key:a},[p("span",{class:h(["round",e])},null,2)])))),128))])))),128))]),p("div",ee,y(a.tableInfo.tableName),1),p("div",ae,[p("span",te,[I(s,{"class-name":"mr3 fs24"}),w(" "+y(a.tableInfo.tableLimitMin),1)]),p("span",se,[I(l,{name:"home-users",class:"users-icon"}),w(" "+y(a.tableInfo.tablePlayers),1)])])])}}});le.__scopeId="data-v-443ddc40";const ne={class:"good-road-view"},oe=(e=>(T("data-v-984e44c8"),e=e(),x(),e))((()=>p("div",{class:"title"},"真人百家乐",-1))),ie={key:0,class:"list"};var ce=i({props:{list:{type:Object,default:()=>{}}},setup:e=>(a,t)=>{const s=r("EmptyData");return u(),v("section",ne,[oe,e.list.length?(u(),v("div",ie,[(u(!0),v(f,null,m(e.list,((e,a)=>(u(),k(le,{key:a,tableInfo:e},null,8,["tableInfo"])))),128))])):(u(),k(s,{key:1}))])}});ce.__scopeId="data-v-984e44c8";const re={key:0,class:"maintenance-view"},de=(e=>(T("data-v-14d82f51"),e=e(),x(),e))((()=>p("div",{class:"maintenance-title"},"赌场维护中...",-1))),ue={key:0,class:"maintenance-subtitle"},ve={key:1,class:"maintenance-timer"};var pe=i({setup(e){const s=c((()=>o.state.app.showFixedBet)),l=c((()=>o.state.app.theme)),n=c((()=>"blue"===l.value?"/assets/maintenance-1.b0744d0b.png":"/assets/maintenance-2.661a1604.png")),i=$(!1),r=$(!1),d=$({}),b=$([]),m=$([]),w=$(),k=$("");_((()=>{T(),x()})),j((()=>{clearInterval(w.value)})),clearInterval(w.value),w.value=setInterval((()=>{T(),x()}),1e4);const T=async()=>{const e=await a(),t=(null==e?void 0:e.data)||[];b.value=t.slice(0,2)},x=async()=>{var e,a,s;const l=await t();503===(null==(e=null==l?void 0:l.data)?void 0:e.code)?(i.value=!0,d.value=null==(a=null==l?void 0:l.data)?void 0:a.data):i.value=!1,m.value=(null==(s=null==l?void 0:l.data)?void 0:s.data)||[]};C((()=>i.value),(()=>{i.value&&D()}));const D=()=>{const e=d.value.endTime.replace(/-/g,"/"),a=new Date(e).getTime();if(Date.now()>a)return r.value=!1,!1;r.value=!0;const t=a-(new Date).getTime();let s,l,n;t>=0&&(s=Math.floor(t/1e3/60/60),l=Math.floor(t/1e3/60%60),n=Math.floor(t/1e3%60),s=s<10?"0"+s:s,l=l<10?"0"+l:l,n=n<10?"0"+n:n,k.value=`${s}:${l}:${n}`,setTimeout(D,1e3))},O=M(),R=()=>{O.push("/home")};return(e,a)=>(u(),v("div",{class:h(["casino-page",{"has-bet":g(s)}])},[i.value?(u(),v("div",re,[p("div",{class:"maintenance-icon",style:E({backgroundImage:`url(${g(n)})`})},null,4),de,r.value?(u(),v("div",ue,"预计维护倒计时")):A("",!0),r.value?(u(),v("div",ve,y(k.value),1)):A("",!0),p("div",{class:"go-btn",onClick:R},"去首页")])):(u(),v(f,{key:1},[I(G,{list:b.value},null,8,["list"]),I(ce,{list:m.value},null,8,["list"])],64))],2))}});pe.__scopeId="data-v-14d82f51";export{pe as default};
