import{d as e,f as a,g as t,r as l,o as n,R as s,P as o,u as i,F as r,S as c,_ as u,W as d,m as p,I as g,c as m,j as h,b as v,w as b,U as f,X as y,$ as T,O as I,Y as w,Z as k}from"./vue.23388646.js";import{m as $,u as _,n as C,o as B,p as R,q as j,v as L,s as M,w as x,x as D}from"./index.18c6eb63.js";class A{constructor(e,a){const{handleClose:t,handleUpdateBalance:l}=a;e&&(this.iframe=e),window.addEventListener("message",(e=>{const{type:a,data:n}=e?.data;"close"==a?t?.():"updateBalance"==a&&l?.(n)}),!1)}resetDom(e){this.iframe=e}intoRoom(e){this.iframe&&this.iframe.contentWindow.postMessage({type:"intoRoom",tableId:e},"*")}closeBaccaratAudio(){this.iframe&&this.iframe.contentWindow.postMessage({type:"closeAudio"},"*")}openBaccaratAudio(){this.iframe&&this.iframe.contentWindow.postMessage({type:"openAudio"},"*")}refreshBalance(){this.iframe&&this.iframe.contentWindow.postMessage({type:"refreshBalance"},"*")}}var U,O;(O=U||(U={}))[O.Dragon=1]="Dragon",O[O.Jump=2]="Jump",O[O.Room=3]="Room",O[O.Sit=4]="Sit",O[O.Triangle=5]="Triangle",O[O.NDragon=6]="NDragon",O[O.Triangle_Up=7]="Triangle_Up",O[O.Triangle_Down=8]="Triangle_Down",O[O.Triangle_RowLink=9]="Triangle_RowLink",O[O.Triangle_ZhuangLink=10]="Triangle_ZhuangLink",O[O.Triangle_XianLink=11]="Triangle_XianLink",O[O.Triangle_ZhuangJump=12]="Triangle_ZhuangJump",O[O.Triangle_XianJump=13]="Triangle_XianJump",O[O.Triangle_ZhuangGap=14]="Triangle_ZhuangGap",O[O.Triangle_XianGap=15]="Triangle_XianGap",O[O.DoubleJump=16]="DoubleJump";const E=(e=[])=>(e=>{const a=[];let t=-1,l=-1,n=-1,s=0,o=!1;for(let i=0;i<e.length;++i){let r=e[i];r>=10&&(r%=10),3===r&&(r=2),-1===t||t!==r&&0!==r?(l++,n=l,s=0,o=!1,t=r,a.length<=l&&a.push([0,0,0,0,0,0]),a[l][s++]=1e3*e[i],0===t&&a[l][0]++):0===r?a[n][s-1]++:o||6===s||0!==a[l][s]?(o=!0,n++,1===s&&(l=n),a.length<=n&&a.push([0,0,0,0,0,0]),a[n][s-1]=1e3*e[i]):a[l][s++]=1e3*e[i]}return a})(e=e.map((e=>e%10==0?0:e))).map((e=>e.map((e=>{if(0!==e)return e})))),S=e=>{if(e.length<2)return!1;const a=(e[0]||[])[0];return!!(a&&a<1e3)},X={class:"content"},z={class:"table-cover"},J=["src"],Z={class:"table-road-list"},P={class:"good-bg"},W={class:"title-1"},G={class:"title-2"},K={class:"bottom"},N={class:"table-name"},V={class:"right"},F={class:"bet-money"},q={class:"number"};var Y=e({props:{tableInfo:{type:Object,default:()=>{}}},setup(e){const m=e,{t:h}=_(),v=a(!1),b=t((()=>{if(v.value||!m.tableInfo.tableCover){const e=Math.round(88*Math.random()+1);return new URL(`/casinoBg/user/${e}.png`,import.meta.url).href}return m.tableInfo.tableCover})),f=["he","xian","zhuang","zhuang"],y=t((()=>{let e=E(m.tableInfo.wins||[]);if(S(e)){const a=[];let t=0;e.forEach(((e,l)=>{0===l&&e[0]<1e3?t=e[0]:1===l&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-15,15);for(let t=0;t<e.length;t++){const l=e[t];for(let e=0;e<l.length;e++){let n=l[e],s="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===n){a[t][e].push(s);continue}const o=document.createElement("div");let i=0;i=n<10?n:n>1e3?n%1e3:n%10,1===n&&(n=0);n=Math.floor(n/1e3)%10,3===n&&(n=2);const r=n%10;i?(i>1&&(o.innerText=`${i}`),s=`box ${f[r]} line`):s=`box ${f[r]}`,a[t][e].push(s)}}if(a.length<19){const e=19-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),T=e=>{const a={};if(e.indexOf("X")>-1){const t=(e=e.replaceAll(" ","")).split("X");a.str1=t[0],a.str2=t[1]}return a},I=t((()=>((e,a,t)=>{switch(e){case 1:return $.global.t("home.baccarat.连庄");case 2:return $.global.t("home.baccarat.单跳");case 3:let e=1,l=1;return 0==a>>16?(e=t>>16,l=65535&t):(l=t>>16,e=65535&t),$.global.t("home.baccarat.{n1}房{n2}厅",{n1:e,n2:l});case 6:return $.global.t("home.baccarat.双龙汇");case 7:return $.global.t("home.baccarat.上坡路");case 8:return $.global.t("home.baccarat.下坡路");case 9:return $.global.t("home.baccarat.排排连");case 10:return $.global.t("home.baccarat.逢庄连");case 11:return $.global.t("home.baccarat.逢闲连");case 12:return $.global.t("home.baccarat.逢庄跳");case 13:return $.global.t("home.baccarat.逢闲跳");case 14:return $.global.t("home.baccarat.隔连庄");case 15:return $.global.t("home.baccarat.隔连闲");case 16:return $.global.t("home.baccarat.双跳")}})(m.tableInfo.goodRoadType,m.tableInfo.goodRoadTypeParam1,m.tableInfo.goodRoadTypeParam2))),w=async()=>{const e=m.tableInfo.tableId;B({duration:2e4,message:h("home.loading")});const a=await R({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===a?.code){j();const t=`${a.data.url.replace("&isAi=1","")}&source=7lucky&hasLive=1&language=${k()}&brandType=1&tableId=${e}&sourceUrl=${encodeURIComponent(window.location.href)}`;window.location.href=t}},k=()=>{const e=localStorage.getItem("locale")||L();return"zh-sg"===e?"zh-tw":e};return(a,t)=>{const m=l("SvgIcon");return n(),s("div",{class:"table-info-component",onClick:w},[o("div",X,[o("div",z,[o("img",{src:i(b),style:{"object-fit":"contain"},onError:t[0]||(t[0]=e=>v.value=!0)},null,40,J)]),o("div",Z,[(n(!0),s(r,null,c(i(y),((e,a)=>(n(),s("div",{key:a,class:"road-col"},[(n(!0),s(r,null,c(e,((e,a)=>(n(),s("div",{key:a,class:"road-item"},[o("span",{class:u(["round",e])},null,2)])))),128))])))),128))]),o("div",P,[o("div",W,d(i(I)),1),o("div",G,"x"+d(T(e.tableInfo.goodRoadTitle).str2),1)])]),o("div",K,[o("span",N,d(e.tableInfo.tableName),1),o("div",V,[o("div",F,[p(C,{"class-name":"mr3 fs24"}),g(" "+d(e.tableInfo.tableLimitMin||0),1)]),o("div",q,[p(m,{name:"home-users",class:"users-icon"}),g(" "+d(e.tableInfo.tablePlayers||0),1)])])])])}}});Y.__scopeId="data-v-f9e6721e";const H={class:"good-road-view"},Q={class:"title"},ee={key:1,class:"list"};var ae=e({props:{list:{type:Object,default:()=>{}},loading:{type:Boolean,default:!0}},setup:e=>(a,t)=>{const i=l("Loading"),u=l("EmptyData");return n(),s("section",H,[o("div",Q,[o("span",null,d(a.$t("home.casinoTitleObj.title1")),1)]),e.loading?(n(),m(i,{key:0})):e.list.length?(n(),s("div",ee,[(n(!0),s(r,null,c(e.list,((e,a)=>(n(),m(Y,{key:a,"table-info":e},null,8,["table-info"])))),128))])):(n(),m(u,{key:2}))])}});ae.__scopeId="data-v-26535a04";const te={class:"table-cover"},le=["src"],ne={class:"table-road-list"},se={class:"table-name"},oe={class:"bottom"},ie={class:"bet-money"},re={class:"number"};var ce=e({props:{tableInfo:{type:Object,default:()=>{}}},setup(e){const m=e,{t:h}=_(),v=a(!1),b=t((()=>{if(v.value||!m.tableInfo.tableCover){let e=Math.round(29*Math.random()+1);return e>30&&(e%=30),new URL(`/casinoBg/bg/${e}.jpg`,import.meta.url).href}return m.tableInfo.tableCover})),f=["he","xian","zhuang","zhuang"],y=t((()=>{let e=E(m.tableInfo.wins||[]);if(S(e)){const a=[];let t=0;e.forEach(((e,l)=>{0===l&&e[0]<1e3?t=e[0]:1===l&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-22,22);for(let t=0;t<e.length;t++){const l=e[t];for(let e=0;e<l.length;e++){let n=l[e],s="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===n){a[t][e].push(s);continue}const o=document.createElement("div");let i=0;i=n<10?n:n>1e3?n%1e3:n%10,1===n&&(n=0);n=Math.floor(n/1e3)%10,3===n&&(n=2);const r=n%10;i?(i>1&&(o.innerText=`${i}`),s=`box ${f[r]} line`):s=`box ${f[r]}`,a[t][e].push(s)}}if(a.length<24){const e=24-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),T=async()=>{const e=m.tableInfo.tableId;B({duration:2e4,message:h("home.loading")});const a=await R({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===a?.code){j();const t=`${a.data.url.replace("&isAi=1","")}&source=7lucky&hasLive=1&language=${I()}&brandType=1&tableId=${e}&sourceUrl=${encodeURIComponent(window.location.href)}`;window.location.href=t}},I=()=>{const e=localStorage.getItem("locale")||L();return"zh-sg"===e?"zh-tw":e};return(a,t)=>{const m=l("SvgIcon");return n(),s("div",{class:"table-info-component",onClick:T},[o("div",te,[o("img",{src:i(b),style:{"object-fit":"contain"},onError:t[0]||(t[0]=e=>v.value=!0)},null,40,le)]),o("div",ne,[(n(!0),s(r,null,c(i(y),((e,a)=>(n(),s("div",{key:a,class:"road-col"},[(n(!0),s(r,null,c(e,((e,a)=>(n(),s("div",{key:a,class:"road-item"},[o("span",{class:u(["round",e])},null,2)])))),128))])))),128))]),o("div",se,d(e.tableInfo.tableName),1),o("div",oe,[o("span",ie,[p(C,{"class-name":"mr3 fs24"}),g(" "+d(e.tableInfo.tableLimitMin||0),1)]),o("span",re,[p(m,{name:"home-users",class:"users-icon"}),g(" "+d(e.tableInfo.tablePlayers||0),1)])])])}}});ce.__scopeId="data-v-f8f3722e";const ue={class:"good-road-view"},de={class:"title"},pe={key:1,class:"list"};var ge=e({props:{list:{type:Object,default:()=>{}},loading:{type:Boolean,default:!0}},setup:e=>(a,t)=>{const i=l("Loading"),u=l("EmptyData");return n(),s("section",ue,[o("div",de,d(a.$t("home.casinoTitleObj.title2")),1),e.loading?(n(),m(i,{key:0})):e.list.length?(n(),s("div",pe,[(n(!0),s(r,null,c(e.list,((e,a)=>(n(),m(ce,{key:a,"table-info":e},null,8,["table-info"])))),128))])):(n(),m(u,{key:2}))])}});ge.__scopeId="data-v-5801d38a";const me=e=>(w("data-v-71875399"),e=e(),k(),e),he={key:0,class:"maintenance-view"},ve={class:"maintenance-title"},be={key:0,class:"maintenance-subtitle"},fe={key:1,class:"maintenance-timer"},ye={class:"header-area"},Te={class:"btns"},Ie=me((()=>o("span",{class:"units-icon mi-bet"},null,-1))),we={class:"units-title"},ke=me((()=>o("span",{class:"units-icon"},null,-1))),$e={class:"units-title"},_e=["src"];var Ce=e({setup(e){const{t:c}=_(),g=t((()=>M.state.app.showFixedBet)),w=t((()=>M.state.app.theme)),k=t((()=>"blue"===w.value?"/assets/maintenance-1.b0744d0b.png":"/assets/maintenance-2.661a1604.png")),$=a(!1),C=a(!1),U=a({}),O=a([]),E=a([]),S=a(),X=a(""),z=a(!0),J=a(!0),Z=a(!1),P=a(),W=a(),G=a("");h((()=>{K(),N()})),v((()=>{clearInterval(S.value)})),clearInterval(S.value),S.value=setInterval((()=>{K(),N()}),1e4);const K=async()=>{const e=await x();z.value=!1;const a=e?.data||[];if(a&&a.length){const e=a.filter((e=>4!==e.goodRoadType));O.value=e.slice(0,2)}},N=async()=>{const e=await D();J.value=!1,503===e?.data?.code?($.value=!0,U.value=e?.data?.data):$.value=!1,E.value=e?.data?.data||[]};b((()=>$.value),(()=>{$.value&&V()}));const V=()=>{const e=U.value.endTime.replace(/-/g,"/"),a=new Date(e).getTime();if(Date.now()>a)return C.value=!1,!1;C.value=!0;const t=a-(new Date).getTime();let l,n,s;t>=0&&(l=Math.floor(t/1e3/60/60),n=Math.floor(t/1e3/60%60),s=Math.floor(t/1e3%60),l=l<10?"0"+l:l,n=n<10?"0"+n:n,s=s<10?"0"+s:s,X.value=`${l}:${n}:${s}`,setTimeout(V,1e3))},F=f(),q=()=>{F.push("/home")},Y=()=>{Z.value=!1,G.value=""},H=()=>{M.dispatch("user/getCurrency")},Q=async()=>{Z.value=!Z.value;B({duration:2e4,message:c("home.loading")});const e=await R({supplierId:"aigame",gameKey:"VIR_BAC",openType:2,dirType:1,appType:2}).finally((()=>{j()}));if(W.value||(W.value=new A(P.value,{handleClose:Y,handleUpdateBalance:H})),200===e?.code){const a=localStorage.getItem("locale")||L(),t=e.data.url.replace("&isAi=1","");G.value=`${t}&language=${a}`}},ee=async()=>{Z.value=!Z.value;B({duration:2e4,message:c("home.loading")});const e=await R({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2}).finally((()=>{j()}));if(W.value||(W.value=new A(P.value,{handleClose:Y,handleUpdateBalance:H})),200===e?.code){const a=localStorage.getItem("locale")||L(),t=e.data.url.replace("&isAi=1","");G.value=`${t}&language=${a}#/multiple`}};return(e,a)=>{const t=l("van-popup");return n(),s("div",{class:u(["casino-page",{"has-bet":i(g)}])},[$.value?(n(),s("div",he,[o("div",{class:"maintenance-icon",style:y({backgroundImage:`url(${i(k)})`})},null,4),o("div",ve,d(e.$t("home.casinoTitleObj.title3")),1),C.value?(n(),s("div",be,d(e.$t("home.casinoTitleObj.title4")),1)):T("",!0),C.value?(n(),s("div",fe,d(X.value),1)):T("",!0),o("div",{class:"go-btn",onClick:q},d(e.$t("home.casinoTitleObj.gohome")),1)])):(n(),s(r,{key:1},[o("div",ye,[o("div",Te,[o("div",{class:"multiple-units",onClick:Q},[Ie,o("span",we,d(e.$t("home.miBet")),1)]),o("div",{class:"multiple-units",onClick:ee},[ke,o("span",$e,d(e.$t("home.mulBet")),1)])])]),O.value.length?(n(),m(ae,{key:0,list:O.value,loading:z.value},null,8,["list","loading"])):T("",!0),p(ge,{list:E.value,loading:J.value},null,8,["list","loading"]),p(t,{show:Z.value,"onUpdate:show":a[0]||(a[0]=e=>Z.value=e),round:"",position:"bottom",teleport:"body",style:{height:"84%"},onClose:a[1]||(a[1]=e=>G.value="")},{default:I((()=>[o("iframe",{ref_key:"iframeRef",ref:P,width:"100%",height:"100%",style:{border:"none"},src:G.value,frameborder:"0"},null,8,_e)])),_:1},8,["show"])],64))],2)}}});Ce.__scopeId="data-v-71875399";export{Ce as default};
