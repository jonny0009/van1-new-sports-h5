import{m as e,u as a,n as t,o as l,p as n,q as o,v as s,s as i,w as r,x as c}from"./index.546af480.js";import{s as u,d,b as g,r as p,o as m,R as b,P as h,u as v,F as f,S as y,_ as I,W as T,q as w,B as _,c as k,O as $,Y as M,Z as R,M as L,a as j,w as x,U as B,X as D,$ as C}from"./vue.1f547d27.js";const A=(e=[])=>(e=>{const a=[];let t=-1,l=-1,n=-1,o=0,s=!1;for(let i=0;i<e.length;++i){let r=e[i];r>=10&&(r%=10),3===r&&(r=2),-1===t||t!==r&&0!==r?(l++,n=l,o=0,s=!1,t=r,a.length<=l&&a.push([0,0,0,0,0,0]),a[l][o++]=1e3*e[i],0===t&&a[l][0]++):0===r?a[n][o-1]++:s||6===o||0!==a[l][o]?(s=!0,n++,1===o&&(l=n),a.length<=n&&a.push([0,0,0,0,0,0]),a[n][o-1]=1e3*e[i]):a[l][o++]=1e3*e[i]}return a})(e=e.map((e=>e%10==0?0:e))).map((e=>e.map((e=>{if(0!==e)return e})))),O=e=>{if(e.length<2)return!1;const a=(e[0]||[])[0];return!!(a&&a<1e3)};class U{constructor(e,a){e&&(this.iframe=e),window.addEventListener("message",(e=>{const{type:t,data:l}=e?.data;"close"==t&&a?.()}),!1)}resetDom(e){this.iframe=e}intoRoom(e){this.iframe&&this.iframe.contentWindow.postMessage({type:"intoRoom",tableId:e},"*")}closeBaccaratAudio(){this.iframe&&this.iframe.contentWindow.postMessage({type:"closeAudio"},"*")}openBaccaratAudio(){this.iframe&&this.iframe.contentWindow.postMessage({type:"openAudio"},"*")}refreshBalance(){this.iframe&&this.iframe.contentWindow.postMessage({type:"refreshBalance"},"*")}}var E,X;(X=E||(E={}))[X.Dragon=1]="Dragon",X[X.Jump=2]="Jump",X[X.Room=3]="Room",X[X.Sit=4]="Sit",X[X.Triangle=5]="Triangle",X[X.NDragon=6]="NDragon",X[X.Triangle_Up=7]="Triangle_Up",X[X.Triangle_Down=8]="Triangle_Down",X[X.Triangle_RowLink=9]="Triangle_RowLink",X[X.Triangle_ZhuangLink=10]="Triangle_ZhuangLink",X[X.Triangle_XianLink=11]="Triangle_XianLink",X[X.Triangle_ZhuangJump=12]="Triangle_ZhuangJump",X[X.Triangle_XianJump=13]="Triangle_XianJump",X[X.Triangle_ZhuangGap=14]="Triangle_ZhuangGap",X[X.Triangle_XianGap=15]="Triangle_XianGap",X[X.DoubleJump=16]="DoubleJump";const J={class:"content"},S={class:"table-cover"},Z=["src"],P={class:"table-road-list"},W={class:"good-bg"},z={class:"title-1"},G={class:"title-2"},N={class:"bottom"},K={class:"table-name"},V={class:"right"},q={class:"bet-money"},F={class:"number"};var Y=u({props:{tableInfo:{type:Object,default:()=>{}}},setup(i){const r=i,{t:c}=a(),u=d(!1),k=g((()=>{if(u.value||!r.tableInfo.tableCover){const e=Math.round(88*Math.random()+1);return new URL(`/casinoBg/user/${e}.png`,import.meta.url).href}return r.tableInfo.tableCover})),$=["he","xian","zhuang","zhuang"],M=g((()=>{let e=A(r.tableInfo.wins||[]);if(O(e)){const a=[];let t=0;e.forEach(((e,l)=>{0===l&&e[0]<1e3?t=e[0]:1===l&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-15,15);for(let t=0;t<e.length;t++){const l=e[t];for(let e=0;e<l.length;e++){let n=l[e],o="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===n){a[t][e].push(o);continue}const s=document.createElement("div");let i=0;i=n<10?n:n>1e3?n%1e3:n%10,1===n&&(n=0);n=Math.floor(n/1e3)%10,3===n&&(n=2);const r=n%10;i?(i>1&&(s.innerText=`${i}`),o=`box ${$[r]} line`):o=`box ${$[r]}`,a[t][e].push(o)}}if(a.length<19){const e=19-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),R=e=>{const a={};if(e.indexOf("X")>-1){const t=(e=e.replaceAll(" ","")).split("X");a.str1=t[0],a.str2=t[1]}return a},L=g((()=>((a,t,l)=>{switch(a){case 1:return e.global.t("home.baccarat.连庄");case 2:return e.global.t("home.baccarat.单跳");case 3:let a=1,n=1;return 0==t>>16?(a=l>>16,n=65535&l):(n=l>>16,a=65535&l),e.global.t("home.baccarat.{n1}房{n2}厅",{n1:a,n2:n});case 6:return e.global.t("home.baccarat.双龙汇");case 7:return e.global.t("home.baccarat.上坡路");case 8:return e.global.t("home.baccarat.下坡路");case 9:return e.global.t("home.baccarat.排排连");case 10:return e.global.t("home.baccarat.逢庄连");case 11:return e.global.t("home.baccarat.逢闲连");case 12:return e.global.t("home.baccarat.逢庄跳");case 13:return e.global.t("home.baccarat.逢闲跳");case 14:return e.global.t("home.baccarat.隔连庄");case 15:return e.global.t("home.baccarat.隔连闲");case 16:return e.global.t("home.baccarat.双跳")}})(r.tableInfo.goodRoadType,r.tableInfo.goodRoadTypeParam1,r.tableInfo.goodRoadTypeParam2))),j=async()=>{const e=r.tableInfo.tableId;l({duration:2e4,message:c("home.loading")});const a=await n({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===a?.code){o();const t=`${a.data.url.replace("&isAi=1","")}&source=7lucky&hasLive=1&language=${localStorage.getItem("locale")||s()}&brandType=1&tableId=${e}&sourceUrl=${encodeURIComponent(window.location.href)}`;window.location.href=t}};return(e,a)=>{const l=p("SvgIcon");return m(),b("div",{class:"table-info-component",onClick:j},[h("div",J,[h("div",S,[h("img",{src:v(k),onError:a[0]||(a[0]=e=>u.value=!0),style:{"object-fit":"contain"}},null,40,Z)]),h("div",P,[(m(!0),b(f,null,y(v(M),((e,a)=>(m(),b("div",{class:"road-col",key:a},[(m(!0),b(f,null,y(e,((e,a)=>(m(),b("div",{class:"road-item",key:a},[h("span",{class:I(["round",e])},null,2)])))),128))])))),128))]),h("div",W,[h("div",z,T(v(L)),1),h("div",G,"x"+T(R(i.tableInfo.goodRoadTitle).str2),1)])]),h("div",N,[h("span",K,T(i.tableInfo.tableName),1),h("div",V,[h("div",q,[w(t,{"class-name":"mr3 fs24"}),_(" "+T(i.tableInfo.tableLimitMin||0),1)]),h("div",F,[w(l,{name:"home-users",class:"users-icon"}),_(" "+T(i.tableInfo.tablePlayers||0),1)])])])])}}});Y.__scopeId="data-v-7f8939bd";const H={class:"good-road-view"},Q={class:"title"},ee=(e=>(M("data-v-758acff4"),e=e(),R(),e))((()=>h("span",{class:"units-icon"},null,-1))),ae={class:"units-title"},te={key:1,class:"list"},le=["src"];var ne=u({props:{list:{type:Object,default:()=>{}},loading:{type:Boolean,default:!0}},setup(e){const{t:t}=a(),i=d(!1),r=d(),c=d(),u=d(""),g=async()=>{i.value=!i.value;l({duration:2e4,message:t("home.loading")});const e=await n({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2}).finally((()=>{o()}));if(c.value||(c.value=new U(r.value,(()=>{i.value=!1}))),200===e?.code){const a=localStorage.getItem("locale")||s(),t=e.data.url.replace("&isAi=1","");u.value=`${t}&language=${a}#/multiple`}};return(a,t)=>{const l=p("Loading"),n=p("EmptyData"),o=p("van-popup");return m(),b(f,null,[h("section",H,[h("div",Q,[h("span",null,T(a.$t("home.casinoTitleObj.title1")),1),h("div",{class:"multiple-units",onClick:g},[ee,h("span",ae,T(a.$t("home.mulBet")),1)])]),e.loading?(m(),k(l,{key:0})):e.list.length?(m(),b("div",te,[(m(!0),b(f,null,y(e.list,((e,a)=>(m(),k(Y,{key:a,"table-info":e},null,8,["table-info"])))),128))])):(m(),k(n,{key:2}))]),w(o,{round:"",show:i.value,"onUpdate:show":t[0]||(t[0]=e=>i.value=e),position:"bottom",teleport:"body",style:{height:"84%"}},{default:$((()=>[h("iframe",{width:"100%",ref_key:"iframeRef",ref:r,height:"100%",style:{border:"none"},src:u.value,frameborder:"0"},null,8,le)])),_:1},8,["show"])],64)}}});ne.__scopeId="data-v-758acff4";const oe={class:"table-cover"},se=["src"],ie={class:"table-road-list"},re={class:"table-name"},ce={class:"bottom"},ue={class:"bet-money"},de={class:"number"};var ge=u({props:{tableInfo:{type:Object,default:()=>{}}},setup(e){const i=e,{t:r}=a(),c=d(!1),u=g((()=>{if(c.value||!i.tableInfo.tableCover){let e=Math.round(29*Math.random()+1);return e>30&&(e%=30),new URL(`/casinoBg/bg/${e}.jpg`,import.meta.url).href}return i.tableInfo.tableCover})),k=["he","xian","zhuang","zhuang"],$=g((()=>{let e=A(i.tableInfo.wins||[]);if(O(e)){const a=[];let t=0;e.forEach(((e,l)=>{0===l&&e[0]<1e3?t=e[0]:1===l&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-22,22);for(let t=0;t<e.length;t++){const l=e[t];for(let e=0;e<l.length;e++){let n=l[e],o="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===n){a[t][e].push(o);continue}const s=document.createElement("div");let i=0;i=n<10?n:n>1e3?n%1e3:n%10,1===n&&(n=0);n=Math.floor(n/1e3)%10,3===n&&(n=2);const r=n%10;i?(i>1&&(s.innerText=`${i}`),o=`box ${k[r]} line`):o=`box ${k[r]}`,a[t][e].push(o)}}if(a.length<24){const e=24-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),M=async()=>{const e=i.tableInfo.tableId;l({duration:2e4,message:r("home.loading")});const a=await n({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===a?.code){o();const t=`${a.data.url.replace("&isAi=1","")}&source=7lucky&hasLive=1&language=${localStorage.getItem("locale")||s()}&brandType=1&tableId=${e}&sourceUrl=${encodeURIComponent(window.location.href)}`;window.location.href=t}};return(a,l)=>{const n=p("SvgIcon");return m(),b("div",{class:"table-info-component",onClick:M},[h("div",oe,[h("img",{src:v(u),onError:l[0]||(l[0]=e=>c.value=!0),style:{"object-fit":"contain"}},null,40,se)]),h("div",ie,[(m(!0),b(f,null,y(v($),((e,a)=>(m(),b("div",{class:"road-col",key:a},[(m(!0),b(f,null,y(e,((e,a)=>(m(),b("div",{class:"road-item",key:a},[h("span",{class:I(["round",e])},null,2)])))),128))])))),128))]),h("div",re,T(e.tableInfo.tableName),1),h("div",ce,[h("span",ue,[w(t,{"class-name":"mr3 fs24"}),_(" "+T(e.tableInfo.tableLimitMin||0),1)]),h("span",de,[w(n,{name:"home-users",class:"users-icon"}),_(" "+T(e.tableInfo.tablePlayers||0),1)])])])}}});ge.__scopeId="data-v-d24f492e";const pe={class:"good-road-view"},me={class:"title"},be={key:1,class:"list"};var he=u({props:{list:{type:Object,default:()=>{}},loading:{type:Boolean,default:!0}},setup:e=>(a,t)=>{const l=p("Loading"),n=p("EmptyData");return m(),b("section",pe,[h("div",me,T(a.$t("home.casinoTitleObj.title2")),1),e.loading?(m(),k(l,{key:0})):e.list.length?(m(),b("div",be,[(m(!0),b(f,null,y(e.list,((e,a)=>(m(),k(ge,{key:a,tableInfo:e},null,8,["tableInfo"])))),128))])):(m(),k(n,{key:2}))])}});he.__scopeId="data-v-ce3f15ec";const ve={key:0,class:"maintenance-view"},fe={class:"maintenance-title"},ye={key:0,class:"maintenance-subtitle"},Ie={key:1,class:"maintenance-timer"};var Te=u({setup(e){const a=g((()=>i.state.app.showFixedBet)),t=g((()=>i.state.app.theme)),l=g((()=>"blue"===t.value?"/assets/maintenance-1.b0744d0b.png":"/assets/maintenance-2.661a1604.png")),n=d(!1),o=d(!1),s=d({}),u=d([]),p=d([]),y=d(),_=d(""),k=d(!0),$=d(!0);L((()=>{M(),R()})),j((()=>{clearInterval(y.value)})),clearInterval(y.value),y.value=setInterval((()=>{M(),R()}),1e4);const M=async()=>{const e=await r();k.value=!1;const a=e?.data||[];a&&a.length&&(u.value=a.slice(0,2))},R=async()=>{const e=await c();$.value=!1,503===e?.data?.code?(n.value=!0,s.value=e?.data?.data):n.value=!1,p.value=e?.data?.data||[]};x((()=>n.value),(()=>{n.value&&A()}));const A=()=>{const e=s.value.endTime.replace(/-/g,"/"),a=new Date(e).getTime();if(Date.now()>a)return o.value=!1,!1;o.value=!0;const t=a-(new Date).getTime();let l,n,i;t>=0&&(l=Math.floor(t/1e3/60/60),n=Math.floor(t/1e3/60%60),i=Math.floor(t/1e3%60),l=l<10?"0"+l:l,n=n<10?"0"+n:n,i=i<10?"0"+i:i,_.value=`${l}:${n}:${i}`,setTimeout(A,1e3))},O=B(),U=()=>{O.push("/home")};return(e,t)=>(m(),b("div",{class:I(["casino-page",{"has-bet":v(a)}])},[n.value?(m(),b("div",ve,[h("div",{class:"maintenance-icon",style:D({backgroundImage:`url(${v(l)})`})},null,4),h("div",fe,T(e.$t("home.casinoTitleObj.title3")),1),o.value?(m(),b("div",ye,T(e.$t("home.casinoTitleObj.title4")),1)):C("",!0),o.value?(m(),b("div",Ie,T(_.value),1)):C("",!0),h("div",{class:"go-btn",onClick:U},T(e.$t("home.casinoTitleObj.gohome")),1)])):(m(),b(f,{key:1},[w(ne,{list:u.value,loading:k.value},null,8,["list","loading"]),w(he,{list:p.value,loading:$.value},null,8,["list","loading"])],64))],2))}});Te.__scopeId="data-v-76982ae6";export{Te as default};
