var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,r=(a,e)=>{for(var t in e||(e={}))n.call(e,t)&&i(a,t,e[t]);if(o)for(var t of o(e))s.call(e,t)&&i(a,t,e[t]);return a};import{s as l,Y as p,a4 as u}from"./index.e62219ef.js";import{p as A}from"./index.f64a6856.js";import{b as y,d as c,w as d,j as g,a6 as m,s as v,r as f,E as T,o as h,S as b,c as w,u as O,$ as k,x as B,y as D,q as Y,O as K,F as L,_ as C,P as R,V as I,Z as E,T as P}from"./vue.144c3097.js";const S={1:"veteran",2:"novice",3:"veteran"};function j(a){const o=y((()=>l.state.match.matchInfo)),n=y((()=>l.state.user.userConfig)),s=y((()=>l.state.match.needTimer)),i=c(!0);d((()=>{var a;return null==(a=o.value)?void 0:a.gidm}),(()=>{f()})),g((()=>{}));const v=c([]),f=async()=>{if(s.value&&!a)return;const{formatType:e}=n.value,{gameType:t}=o.value;if(t){const o=await A({gameType:t}),n=o.data||{};if(200===o.code){const t=n[S[e]];v.value=t,1===a&&h("0")}}},T=c([]),h=a=>{const e=v.value.find((e=>{var t;return(null==(t=e.id)?void 0:t.toString())===a}));T.value=e.playData,w()},b=c([]),w=()=>{const{detail:a,gameType:n,systemId:s,homeTeamAbbr:l,awayTeamAbbr:u}=o.value;if(a&&a.length>0){const o=[];a.forEach((a=>{var i;const{playData:A,game:y}=a;for(const c of A){const a=r({},c),A={gameType:n,homeTeam:l,awayTeam:u,playType:a.playType,championType:y.championType,session:y.session},d=a.ratioData.map((o=>{return new p((i=r({},o),A={systemId:s,gameType:n,homeTeam:l,awayTeam:u,gameId:y.gameId,gidm:y.gidm,strong:y.strong,hstrong:y.hstrong,playType:a.playType,sw:a.sw,championType:a.championType},e(i,t(A))));var i,A}));(null==(i=a.ratioData)?void 0:i.length)>0&&o.push({typeTemp:`${A.playType}${A.session}`,playType:A.playType,playInfo:A,ratioList:d})}}));const A=["HDNB2","HDNB","HTS2","HW3","W3","W3_conner","PD_conner","HT_conner","T_conner"],y=o.filter((a=>!A.includes(a.playType))),c=k(y,T.value),d=D(c),g=B(d,"typeTemp");v.value=O(y),b.value=g,i.value=!1}},O=a=>{const e=m(v.value);let t=[];return e.forEach((e=>{const o={id:e.id,name:e.name,groupType:e.groupType,playData:e.playData,playDataList:k(a,e.playData)};t.push(o)})),t=t.filter((a=>a.playDataList.length>0)),t},k=(a,e)=>{const t={},o=[];a.map((a=>{const{typeTemp:o}=a,n=e.indexOf(o);n>-1&&(t[n]||(t[n]=[]),t[n].push(a))}));return Object.keys(t).map((a=>{const e=t[a];o.push(...e)})),o.concat([])},B=(a,e="playType")=>a.reduce(((a,t)=>{const o=a.find((a=>a[e]===t[e]));return o?o.ratioList=[...o.ratioList,...t.ratioList]:a.push(t),a}),[]),D=a=>{const e=a=>{if(a&&(a=(a+="").replace(/-|(\+)/g,"")).indexOf("/")>-1){const[e,t]=a.split("/");a=(1*e+1*t)/2}return a};return a.map((a=>{const{playType:t,gameType:o}=a.playInfo,{sort:n}=u.getGamePlayData({gameType:o,playType:t});return a.ratioList.sort(((a,t)=>{const o=a.ratio&&u.isStrong({ratio:a.ratio}),n=t.ratio&&u.isStrong({ratio:t.ratio});return e(o)-e(n)})),a.ratioList.sort(((a,e)=>(null==n?void 0:n.indexOf(a.ratioType))-(null==n?void 0:n.indexOf(e.ratioType)))),a}))};return{findGroupById:h,playGroupBetList:v,playBettingList:b,apiLoading:i}}const V={class:"betting-collapse"},N={class:"tab-title"},G={class:"bet-top"},Q={class:"name"},x={key:0,class:"tag"},J={class:"bet-bot"},X={key:0,class:"lock",src:"data:image/png;base64,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",alt:""},H={key:1,class:"odds"},F={key:0,class:"vior"},U={key:1,class:"vior"},z={key:2,class:"vior"},Z={key:2,class:"vior"};var q=v({props:{groupList:{type:Array,default:()=>[]},bettingList:{type:Array,default:()=>[]},matchInfo:{type:Object,default:()=>{}},loading:{type:Boolean,default:!1}},emits:["tab-change"],setup(a,{emit:e}){const t=a,o=y((()=>t.groupList)),n=y((()=>t.bettingList)),s=c(null),i=a=>{e("tab-change",a)},r=y((()=>t.matchInfo)),l=c(["1"]);return(e,t)=>{const p=f("Loading"),u=f("EmptyData"),A=f("BettingOption"),y=f("van-collapse-item"),c=f("van-collapse"),d=f("van-tab"),g=f("van-tabs"),m=T("play");return h(),b("div",V,[a.loading?(h(),w(p,{key:0})):0===O(n).length?(h(),w(u,{key:1,text:e.$t("live.platCloseAll")},null,8,["text"])):k("",!0),B(Y(g,{active:s.value,"onUpdate:active":t[1]||(t[1]=a=>s.value=a),shrink:"","line-height":"0",onChange:i},{default:K((()=>[(h(!0),b(L,null,C(O(o),((a,e)=>(h(),w(d,{key:e,name:a.id+""},{title:K((()=>[R("div",N,[R("span",null,I(a.name),1)])])),default:K((()=>[Y(c,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a)},{default:K((()=>[(h(!0),b(L,null,C(O(n),((a,e)=>(h(),w(y,{key:e,name:`${e+1}`,border:!1},{title:K((()=>[B(R("span",null,null,512),[[m,a.playInfo]])])),default:K((()=>{var e;return[R("div",{class:E(["bet",3===(null==(e=a.ratioList)?void 0:e.length)?"col-3":"col-2"])},[(h(!0),b(L,null,C(a.ratioList,((a,e)=>(h(),w(A,{key:e,"market-info":a,class:"bet-item"},{default:K((e=>[R("div",G,[R("span",Q,I(a.ratioMatch||a.ratioName),1),a.ratioTag?(h(),b("span",x,I(a.ratioTag),1)):k("",!0)]),R("div",J,[e.lock?(h(),b("img",X)):(h(),b("div",H,["RB"==O(r).showtype?(h(),b("i",{key:0,class:E(["vior-down",{"change-odds":"down-ior"===e.iorChange}])},null,2)):k("",!0),"RB"==O(r).showtype?(h(),b("div",{key:1,class:E(["RB-ChangeIor",{"no-RBtransition":!["up-ior","down-ior"].includes(a.iorChangeTransition)}])},[Y(P,{name:["up-ior","down-ior"].includes(a.iorChangeTransition)?"listdown":""},{default:K((()=>["up-ior"===a.iorChangeTransition?(h(),b("div",F,I("up-ior"===a.iorChangeTransition?a.vior:a.oldIor),1)):"down-ior"===a.iorChangeTransition?(h(),b("div",U,I("down-ior"===a.iorChangeTransition?a.vior:a.oldIor),1)):(h(),b("div",z,I(a.vior),1))])),_:2},1032,["name"])],2)):(h(),b("span",Z,I(a.vior),1)),"RB"==O(r).showtype?(h(),b("i",{key:3,class:E(["vior-up",{"change-odds":"up-ior"===e.iorChange}])},null,2)):k("",!0)]))])])),_:2},1032,["market-info"])))),128))],2)]})),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"]),[[D,O(n).length>0]])])}}});q.__scopeId="data-v-6b6e9d4f";export{q as _,j as u};
