import{m as e,u as a,n as t,o as l,p as n,q as s,v as o,s as i,w as r,x as c}from"./index.553e4357.js";import{s as u,d,b as p,r as g,o as m,R as h,P as v,u as b,F as f,S as y,_ as I,W as T,q as w,B as $,c as _,O as k,Y as R,Z as B,M,a as C,w as L,U as j,X as x,$ as D}from"./vue.1f547d27.js";const A=(e=[])=>(e=>{const a=[];let t=-1,l=-1,n=-1,s=0,o=!1;for(let i=0;i<e.length;++i){let r=e[i];r>=10&&(r%=10),3===r&&(r=2),-1===t||t!==r&&0!==r?(l++,n=l,s=0,o=!1,t=r,a.length<=l&&a.push([0,0,0,0,0,0]),a[l][s++]=1e3*e[i],0===t&&a[l][0]++):0===r?a[n][s-1]++:o||6===s||0!==a[l][s]?(o=!0,n++,1===s&&(l=n),a.length<=n&&a.push([0,0,0,0,0,0]),a[n][s-1]=1e3*e[i]):a[l][s++]=1e3*e[i]}return a})(e=e.map((e=>e%10==0?0:e))).map((e=>e.map((e=>{if(0!==e)return e})))),O=e=>{if(e.length<2)return!1;const a=(e[0]||[])[0];return!!(a&&a<1e3)};class U{constructor(e,a){e&&(this.iframe=e),window.addEventListener("message",(e=>{const{type:t,data:l}=e?.data;"close"==t&&a?.()}),!1)}resetDom(e){this.iframe=e}intoRoom(e){this.iframe&&this.iframe.contentWindow.postMessage({type:"intoRoom",tableId:e},"*")}closeBaccaratAudio(){this.iframe&&this.iframe.contentWindow.postMessage({type:"closeAudio"},"*")}openBaccaratAudio(){this.iframe&&this.iframe.contentWindow.postMessage({type:"openAudio"},"*")}refreshBalance(){this.iframe&&this.iframe.contentWindow.postMessage({type:"refreshBalance"},"*")}}var E,S;(S=E||(E={}))[S.Dragon=1]="Dragon",S[S.Jump=2]="Jump",S[S.Room=3]="Room",S[S.Sit=4]="Sit",S[S.Triangle=5]="Triangle",S[S.NDragon=6]="NDragon",S[S.Triangle_Up=7]="Triangle_Up",S[S.Triangle_Down=8]="Triangle_Down",S[S.Triangle_RowLink=9]="Triangle_RowLink",S[S.Triangle_ZhuangLink=10]="Triangle_ZhuangLink",S[S.Triangle_XianLink=11]="Triangle_XianLink",S[S.Triangle_ZhuangJump=12]="Triangle_ZhuangJump",S[S.Triangle_XianJump=13]="Triangle_XianJump",S[S.Triangle_ZhuangGap=14]="Triangle_ZhuangGap",S[S.Triangle_XianGap=15]="Triangle_XianGap",S[S.DoubleJump=16]="DoubleJump";const X={class:"content"},z={class:"table-cover"},J=["src"],Z={class:"table-road-list"},P={class:"good-bg"},W={class:"title-1"},G={class:"title-2"},K={class:"bottom"},N={class:"table-name"},V={class:"right"},q={class:"bet-money"},F={class:"number"};var Y=u({props:{tableInfo:{type:Object,default:()=>{}}},setup(i){const r=i,{t:c}=a(),u=d(!1),_=p((()=>{if(u.value||!r.tableInfo.tableCover){const e=Math.round(88*Math.random()+1);return new URL(`/casinoBg/user/${e}.png`,import.meta.url).href}return r.tableInfo.tableCover})),k=["he","xian","zhuang","zhuang"],R=p((()=>{let e=A(r.tableInfo.wins||[]);if(O(e)){const a=[];let t=0;e.forEach(((e,l)=>{0===l&&e[0]<1e3?t=e[0]:1===l&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-15,15);for(let t=0;t<e.length;t++){const l=e[t];for(let e=0;e<l.length;e++){let n=l[e],s="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===n){a[t][e].push(s);continue}const o=document.createElement("div");let i=0;i=n<10?n:n>1e3?n%1e3:n%10,1===n&&(n=0);n=Math.floor(n/1e3)%10,3===n&&(n=2);const r=n%10;i?(i>1&&(o.innerText=`${i}`),s=`box ${k[r]} line`):s=`box ${k[r]}`,a[t][e].push(s)}}if(a.length<19){const e=19-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),B=e=>{const a={};if(e.indexOf("X")>-1){const t=(e=e.replaceAll(" ","")).split("X");a.str1=t[0],a.str2=t[1]}return a},M=p((()=>((a,t,l)=>{switch(a){case 1:return e.global.t("home.baccarat.连庄");case 2:return e.global.t("home.baccarat.单跳");case 3:let a=1,n=1;return 0==t>>16?(a=l>>16,n=65535&l):(n=l>>16,a=65535&l),e.global.t("home.baccarat.{n1}房{n2}厅",{n1:a,n2:n});case 6:return e.global.t("home.baccarat.双龙汇");case 7:return e.global.t("home.baccarat.上坡路");case 8:return e.global.t("home.baccarat.下坡路");case 9:return e.global.t("home.baccarat.排排连");case 10:return e.global.t("home.baccarat.逢庄连");case 11:return e.global.t("home.baccarat.逢闲连");case 12:return e.global.t("home.baccarat.逢庄跳");case 13:return e.global.t("home.baccarat.逢闲跳");case 14:return e.global.t("home.baccarat.隔连庄");case 15:return e.global.t("home.baccarat.隔连闲");case 16:return e.global.t("home.baccarat.双跳")}})(r.tableInfo.goodRoadType,r.tableInfo.goodRoadTypeParam1,r.tableInfo.goodRoadTypeParam2))),C=async()=>{const e=r.tableInfo.tableId;l({duration:2e4,message:c("home.loading")});const a=await n({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===a?.code){s();const t=`${a.data.url.replace("&isAi=1","")}&source=7lucky&hasLive=1&language=${L()}&brandType=1&tableId=${e}&sourceUrl=${encodeURIComponent(window.location.href)}`;window.location.href=t}},L=()=>{const e=localStorage.getItem("locale")||o();return"zh-sg"===e?"zh-tw":e};return(e,a)=>{const l=g("SvgIcon");return m(),h("div",{class:"table-info-component",onClick:C},[v("div",X,[v("div",z,[v("img",{src:b(_),style:{"object-fit":"contain"},onError:a[0]||(a[0]=e=>u.value=!0)},null,40,J)]),v("div",Z,[(m(!0),h(f,null,y(b(R),((e,a)=>(m(),h("div",{key:a,class:"road-col"},[(m(!0),h(f,null,y(e,((e,a)=>(m(),h("div",{key:a,class:"road-item"},[v("span",{class:I(["round",e])},null,2)])))),128))])))),128))]),v("div",P,[v("div",W,T(b(M)),1),v("div",G,"x"+T(B(i.tableInfo.goodRoadTitle).str2),1)])]),v("div",K,[v("span",N,T(i.tableInfo.tableName),1),v("div",V,[v("div",q,[w(t,{"class-name":"mr3 fs24"}),$(" "+T(i.tableInfo.tableLimitMin||0),1)]),v("div",F,[w(l,{name:"home-users",class:"users-icon"}),$(" "+T(i.tableInfo.tablePlayers||0),1)])])])])}}});Y.__scopeId="data-v-5a688e5c";const H=e=>(R("data-v-05d9e10c"),e=e(),B(),e),Q={class:"good-road-view"},ee={class:"title"},ae={class:"btns"},te=H((()=>v("span",{class:"units-icon"},null,-1))),le={class:"units-title"},ne=H((()=>v("span",{class:"units-icon"},null,-1))),se={class:"units-title"},oe={key:1,class:"list"},ie=["src"];var re=u({props:{list:{type:Object,default:()=>{}},loading:{type:Boolean,default:!0}},setup(e){const{t:t}=a(),i=d(!1),r=d(),c=d(),u=d(""),p=async()=>{i.value=!i.value;l({duration:2e4,message:t("home.loading")});const e=await n({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2}).finally((()=>{s()}));if(c.value||(c.value=new U(r.value,(()=>{i.value=!1}))),200===e?.code){const a=localStorage.getItem("locale")||o(),t=e.data.url.replace("&isAi=1","");u.value=`${t}&language=${a}#/multiple`}},b=async()=>{i.value=!i.value;l({duration:2e4,message:t("home.loading")});const e=await n({supplierId:"aigame",gameKey:"VIR_BAC",openType:2,dirType:1,appType:2}).finally((()=>{s()}));if(c.value||(c.value=new U(r.value,(()=>{i.value=!1}))),200===e?.code){const a=localStorage.getItem("locale")||o(),t=e.data.url.replace("&isAi=1","");u.value=`${t}&language=${a}#/multiple`}};return(a,t)=>{const l=g("Loading"),n=g("EmptyData"),s=g("van-popup");return m(),h(f,null,[v("section",Q,[v("div",ee,[v("span",null,T(a.$t("home.casinoTitleObj.title1")),1),v("div",ae,[v("div",{class:"multiple-units",onClick:b},[te,v("span",le,T(a.$t("home.miBet")),1)]),v("div",{class:"multiple-units",onClick:p},[ne,v("span",se,T(a.$t("home.mulBet")),1)])])]),e.loading?(m(),_(l,{key:0})):e.list.length?(m(),h("div",oe,[(m(!0),h(f,null,y(e.list,((e,a)=>(m(),_(Y,{key:a,"table-info":e},null,8,["table-info"])))),128))])):(m(),_(n,{key:2}))]),w(s,{round:"",show:i.value,"onUpdate:show":t[0]||(t[0]=e=>i.value=e),position:"bottom",teleport:"body",style:{height:"84%"}},{default:k((()=>[v("iframe",{width:"100%",ref_key:"iframeRef",ref:r,height:"100%",style:{border:"none"},src:u.value,frameborder:"0"},null,8,ie)])),_:1},8,["show"])],64)}}});re.__scopeId="data-v-05d9e10c";const ce={class:"table-cover"},ue=["src"],de={class:"table-road-list"},pe={class:"table-name"},ge={class:"bottom"},me={class:"bet-money"},he={class:"number"};var ve=u({props:{tableInfo:{type:Object,default:()=>{}}},setup(e){const i=e,{t:r}=a(),c=d(!1),u=p((()=>{if(c.value||!i.tableInfo.tableCover){let e=Math.round(29*Math.random()+1);return e>30&&(e%=30),new URL(`/casinoBg/bg/${e}.jpg`,import.meta.url).href}return i.tableInfo.tableCover})),_=["he","xian","zhuang","zhuang"],k=p((()=>{let e=A(i.tableInfo.wins||[]);if(O(e)){const a=[];let t=0;e.forEach(((e,l)=>{0===l&&e[0]<1e3?t=e[0]:1===l&&0===a.length?(e[0]=e[0]+t,a.push(e)):a.push(e)})),e=a}const a=[];e=e.splice(-22,22);for(let t=0;t<e.length;t++){const l=e[t];for(let e=0;e<l.length;e++){let n=l[e],s="";if(a[t]||(a[t]=[]),a[t][e]||(a[t][e]=[]),void 0===n){a[t][e].push(s);continue}const o=document.createElement("div");let i=0;i=n<10?n:n>1e3?n%1e3:n%10,1===n&&(n=0);n=Math.floor(n/1e3)%10,3===n&&(n=2);const r=n%10;i?(i>1&&(o.innerText=`${i}`),s=`box ${_[r]} line`):s=`box ${_[r]}`,a[t][e].push(s)}}if(a.length<24){const e=24-a.length;for(let t=0;t<e;t++)a.push([0,0,0,0,0,0])}return a})),R=async()=>{const e=i.tableInfo.tableId;l({duration:2e4,message:r("home.loading")});const a=await n({supplierId:"aigame",gameKey:"BAC-V2.0",openType:2,dirType:1,terType:2});if(200===a?.code){s();const t=`${a.data.url.replace("&isAi=1","")}&source=7lucky&hasLive=1&language=${B()}&brandType=1&tableId=${e}&sourceUrl=${encodeURIComponent(window.location.href)}`;window.location.href=t}},B=()=>{const e=localStorage.getItem("locale")||o();return"zh-sg"===e?"zh-tw":e};return(a,l)=>{const n=g("SvgIcon");return m(),h("div",{class:"table-info-component",onClick:R},[v("div",ce,[v("img",{src:b(u),style:{"object-fit":"contain"},onError:l[0]||(l[0]=e=>c.value=!0)},null,40,ue)]),v("div",de,[(m(!0),h(f,null,y(b(k),((e,a)=>(m(),h("div",{key:a,class:"road-col"},[(m(!0),h(f,null,y(e,((e,a)=>(m(),h("div",{key:a,class:"road-item"},[v("span",{class:I(["round",e])},null,2)])))),128))])))),128))]),v("div",pe,T(e.tableInfo.tableName),1),v("div",ge,[v("span",me,[w(t,{"class-name":"mr3 fs24"}),$(" "+T(e.tableInfo.tableLimitMin||0),1)]),v("span",he,[w(n,{name:"home-users",class:"users-icon"}),$(" "+T(e.tableInfo.tablePlayers||0),1)])])])}}});ve.__scopeId="data-v-5e4f3d1e";const be={class:"good-road-view"},fe={class:"title"},ye={key:1,class:"list"};var Ie=u({props:{list:{type:Object,default:()=>{}},loading:{type:Boolean,default:!0}},setup:e=>(a,t)=>{const l=g("Loading"),n=g("EmptyData");return m(),h("section",be,[v("div",fe,T(a.$t("home.casinoTitleObj.title2")),1),e.loading?(m(),_(l,{key:0})):e.list.length?(m(),h("div",ye,[(m(!0),h(f,null,y(e.list,((e,a)=>(m(),_(ve,{key:a,tableInfo:e},null,8,["tableInfo"])))),128))])):(m(),_(n,{key:2}))])}});Ie.__scopeId="data-v-ce3f15ec";const Te={key:0,class:"maintenance-view"},we={class:"maintenance-title"},$e={key:0,class:"maintenance-subtitle"},_e={key:1,class:"maintenance-timer"};var ke=u({setup(e){const a=p((()=>i.state.app.showFixedBet)),t=p((()=>i.state.app.theme)),l=p((()=>"blue"===t.value?"/assets/maintenance-1.b0744d0b.png":"/assets/maintenance-2.661a1604.png")),n=d(!1),s=d(!1),o=d({}),u=d([]),g=d([]),y=d(),$=d(""),_=d(!0),k=d(!0);M((()=>{R(),B()})),C((()=>{clearInterval(y.value)})),clearInterval(y.value),y.value=setInterval((()=>{R(),B()}),1e4);const R=async()=>{const e=await r();_.value=!1;const a=e?.data||[];a&&a.length&&(u.value=a.slice(0,2))},B=async()=>{const e=await c();k.value=!1,503===e?.data?.code?(n.value=!0,o.value=e?.data?.data):n.value=!1,g.value=e?.data?.data||[]};L((()=>n.value),(()=>{n.value&&A()}));const A=()=>{const e=o.value.endTime.replace(/-/g,"/"),a=new Date(e).getTime();if(Date.now()>a)return s.value=!1,!1;s.value=!0;const t=a-(new Date).getTime();let l,n,i;t>=0&&(l=Math.floor(t/1e3/60/60),n=Math.floor(t/1e3/60%60),i=Math.floor(t/1e3%60),l=l<10?"0"+l:l,n=n<10?"0"+n:n,i=i<10?"0"+i:i,$.value=`${l}:${n}:${i}`,setTimeout(A,1e3))},O=j(),U=()=>{O.push("/home")};return(e,t)=>(m(),h("div",{class:I(["casino-page",{"has-bet":b(a)}])},[n.value?(m(),h("div",Te,[v("div",{class:"maintenance-icon",style:x({backgroundImage:`url(${b(l)})`})},null,4),v("div",we,T(e.$t("home.casinoTitleObj.title3")),1),s.value?(m(),h("div",$e,T(e.$t("home.casinoTitleObj.title4")),1)):D("",!0),s.value?(m(),h("div",_e,T($.value),1)):D("",!0),v("div",{class:"go-btn",onClick:U},T(e.$t("home.casinoTitleObj.gohome")),1)])):(m(),h(f,{key:1},[w(re,{list:u.value,loading:_.value},null,8,["list","loading"]),w(Ie,{list:g.value,loading:k.value},null,8,["list","loading"])],64))],2))}});ke.__scopeId="data-v-76982ae6";export{ke as default};
