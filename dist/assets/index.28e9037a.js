var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,r=(a,e)=>{for(var t in e||(e={}))n.call(e,t)&&i(a,t,e[t]);if(o)for(var t of o(e))s.call(e,t)&&i(a,t,e[t]);return a};import{s as l,R as p,Y as u}from"./index.ca95197a.js";import{p as A}from"./index.2b55880e.js";import{b as y,d as c,w as d,j as g,a6 as m,s as v,r as f,E as T,o as h,S as b,c as w,u as O,a0 as B,x as k,y as D,q as L,O as Y,F as K,Z as R,P as C,V as I,_ as E,T as P}from"./vue.95886b43.js";const S={1:"veteran",2:"novice",3:"veteran"};function j(){const a=y((()=>l.state.match.matchInfo)),o=y((()=>l.state.user.userConfig)),n=y((()=>l.state.match.needTimer)),s=c(!0);d((()=>a.value),(()=>{v()})),g((()=>{}));const i=c([]),v=async()=>{if(n.value)return;const{formatType:e}=o.value,{gameType:t}=a.value;if(t){const a=await A({gameType:t}),o=a.data||{};if(200==a.code){const a=o[S[e]];i.value=a}}},f=c([]),T=c([]),h=()=>{const{detail:o,gameType:n,systemId:l,homeTeamAbbr:u,awayTeamAbbr:A}=a.value;if(o&&o.length>0){const a=[];o.forEach((o=>{var s;const{playData:i,game:y}=o;for(const c of i){const o=r({},c),i={gameType:n,homeTeam:u,awayTeam:A,playType:o.playType,championType:y.championType,session:y.session},d=o.ratioData.map((a=>{return new p((s=r({},a),i={systemId:l,gameType:n,homeTeam:u,awayTeam:A,gameId:y.gameId,gidm:y.gidm,strong:y.strong,hstrong:y.hstrong,playType:o.playType,sw:o.sw,championType:o.championType},e(s,t(i))));var s,i}));(null==(s=o.ratioData)?void 0:s.length)>0&&a.push({typeTemp:`${i.playType}${i.session}`,playType:i.playType,playInfo:i,ratioList:d})}}));const y=["HDNB2","HDNB","HTS2","HW3","W3","W3_conner","PD_conner","HT_conner","T_conner"],c=a.filter((a=>!y.includes(a.playType))),d=w(c,f.value),g=B(d),m=O(g,"typeTemp");i.value=b(c),T.value=m,s.value=!1}},b=a=>{const e=m(i.value);let t=[];return e.forEach((e=>{const o={id:e.id,name:e.name,groupType:e.groupType,playData:e.playData,playDataList:w(a,e.playData)};t.push(o)})),t=t.filter((a=>a.playDataList.length>0)),t},w=(a,e)=>{const t={},o=[];a.map((a=>{const{typeTemp:o}=a,n=e.indexOf(o);n>-1&&(t[n]||(t[n]=[]),t[n].push(a))}));return Object.keys(t).map((a=>{const e=t[a];o.push(...e)})),o.concat([])},O=(a,e="playType")=>a.reduce(((a,t)=>{const o=a.find((a=>a[e]===t[e]));return o?o.ratioList=[...o.ratioList,...t.ratioList]:a.push(t),a}),[]),B=a=>{const e=a=>{if(a&&(a=(a+="").replace(/-|(\+)/g,"")).indexOf("/")>-1){const[e,t]=a.split("/");a=(1*e+1*t)/2}return a};return a.map((a=>{const{playType:t,gameType:o}=a.playInfo,{sort:n}=u.getGamePlayData({gameType:o,playType:t});return a.ratioList.sort(((a,t)=>{const o=a.ratio&&u.isStrong({ratio:a.ratio}),n=t.ratio&&u.isStrong({ratio:t.ratio});return e(o)-e(n)})),a.ratioList.sort(((a,e)=>(null==n?void 0:n.indexOf(a.ratioType))-(null==n?void 0:n.indexOf(e.ratioType)))),a}))};return{findGroupById:a=>{const e=i.value.find((e=>{var t;return(null==(t=e.id)?void 0:t.toString())===a}));f.value=e.playData,h()},playGroupBetList:i,playBettingList:T,apiLoading:s}}const V={class:"betting-collapse"},N={class:"tab-title"},G={class:"bet-top"},Q={class:"name"},x={key:0,class:"tag"},J={class:"bet-bot"},X={key:0,class:"lock",src:"data:image/png;base64,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",alt:""},H={key:1,class:"odds"},F={key:0,class:"vior"},U={key:1,class:"vior"},z={key:2,class:"vior"},Z={key:2,class:"vior"};var q=v({props:{groupList:{type:Array,default:()=>[]},bettingList:{type:Array,default:()=>[]},matchInfo:{type:Object,default:()=>{}},loading:{type:Boolean,default:!1},matchLoading:{type:Boolean,default:!1}},emits:["tab-change"],setup(a,{emit:e}){const t=a,o=y((()=>t.groupList)),n=y((()=>t.bettingList)),s=c(null),i=a=>{e("tab-change",a)},r=y((()=>t.matchInfo)),l=c(["1"]);return(e,t)=>{const p=f("Loading"),u=f("EmptyData"),A=f("BettingOption"),y=f("van-collapse-item"),c=f("van-collapse"),d=f("van-tab"),g=f("van-tabs"),m=T("play");return h(),b("div",V,[a.loading&&a.matchLoading?(h(),w(p,{key:0})):0===O(n).length?(h(),w(u,{key:1,text:e.$t("live.platCloseAll")},null,8,["text"])):B("",!0),k(L(g,{active:s.value,"onUpdate:active":t[1]||(t[1]=a=>s.value=a),shrink:"","line-height":"0",onChange:i},{default:Y((()=>[(h(!0),b(K,null,R(O(o),((a,e)=>(h(),w(d,{key:e,name:a.id+""},{title:Y((()=>[C("div",N,[C("span",null,I(a.name),1)])])),default:Y((()=>[L(c,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a)},{default:Y((()=>[(h(!0),b(K,null,R(O(n),((a,e)=>(h(),w(y,{key:e,name:`${e+1}`,border:!1},{title:Y((()=>[k(C("span",null,null,512),[[m,a.playInfo]])])),default:Y((()=>{var e;return[C("div",{class:E(["bet",3===(null==(e=a.ratioList)?void 0:e.length)?"col-3":"col-2"])},[(h(!0),b(K,null,R(a.ratioList,((a,e)=>(h(),w(A,{key:e,"market-info":a,class:"bet-item"},{default:Y((e=>[C("div",G,[C("span",Q,I(a.ratioMatch||a.ratioName),1),a.ratioTag?(h(),b("span",x,I(a.ratioTag),1)):B("",!0)]),C("div",J,[e.lock?(h(),b("img",X)):(h(),b("div",H,["RB"==O(r).showtype?(h(),b("i",{key:0,class:E(["vior-down",{"change-odds":"down-ior"===e.iorChange}])},null,2)):B("",!0),"RB"==O(r).showtype?(h(),b("div",{key:1,class:E(["RB-ChangeIor",{"no-RBtransition":!["up-ior","down-ior"].includes(a.iorChangeTransition)}])},[L(P,{name:["up-ior","down-ior"].includes(a.iorChangeTransition)?"listdown":""},{default:Y((()=>["up-ior"===a.iorChangeTransition?(h(),b("div",F,I("up-ior"===a.iorChangeTransition?a.vior:a.oldIor),1)):"down-ior"===a.iorChangeTransition?(h(),b("div",U,I("down-ior"===a.iorChangeTransition?a.vior:a.oldIor),1)):(h(),b("div",z,I(a.vior),1))])),_:2},1032,["name"])],2)):(h(),b("span",Z,I(a.vior),1)),"RB"==O(r).showtype?(h(),b("i",{key:3,class:E(["vior-up",{"change-odds":"up-ior"===e.iorChange}])},null,2)):B("",!0)]))])])),_:2},1032,["market-info"])))),128))],2)]})),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"]),[[D,O(n).length>0]])])}}});q.__scopeId="data-v-302dcb0a";export{q as _,j as u};
