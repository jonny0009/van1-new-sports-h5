var a=Object.defineProperty,e=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(e,o,t)=>o in e?a(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(a,e)=>{for(var o in e||(e={}))s.call(e,o)&&n(a,o,e[o]);if(t)for(var o of t(e))r.call(e,o)&&n(a,o,e[o]);return a};import{p as l}from"./index.f65b457d.js";import{aB as p,aD as A}from"./index.0e181f36.js";import{d as y,s as c,b as u,r as d,E as g,o as m,R as f,q as T,O as v,F as b,Z as h,c as O,x as w,P as Y,Y as K,S as R,a2 as B,u as k,T as D}from"./vue.979f7bee.js";var C="data:image/png;base64,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",P=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));function I(){const a=y(),t=y([]),s=y([]),r=()=>{const{detail:s,gameType:r,systemId:l,homeTeamAbbr:A,awayTeamAbbr:y}=a.value;if(s&&s.length>0){const a=[];s.forEach((t=>{var s;const{playData:n,game:c}=t;for(const u of n){const t=i({},u),n={gameType:r,homeTeam:A,awayTeam:y,playType:t.playType,championType:c.championType,session:c.session},d=t.ratioData.map((a=>{return new p((s=i({},a),n={systemId:l,gameType:r,homeTeam:A,awayTeam:y,gameId:c.gameId,gidm:c.gidm,playType:t.playType,sw:t.sw,championType:t.championType},e(s,o(n))));var s,n}));(null==(s=t.ratioData)?void 0:s.length)>0&&a.push({typeTemp:`${n.playType}${n.session}`,playType:n.playType,playInfo:n,ratioList:d})}}));const d=["HDNB2","HDNB","HTS2","HW3","W3","W3_conner","PD_conner","HT_conner","T_conner"],g=a.filter((a=>!d.includes(a.playType))),m=n(g,t.value.playData),f=u(m);return c(f,"typeTemp")}},n=(a,e)=>{const o={},t=[],s=[];a.map((a=>{const{typeTemp:t}=a,r=e.indexOf(t);r>-1?(o[r]||(o[r]=[]),o[r].push(a)):s.push(a)}));return Object.keys(o).map((a=>{const e=o[a];t.push(...e)})),t.concat(s).filter((a=>a))},c=(a,e="playType")=>a.reduce(((a,o)=>{const t=a.find((a=>a[e]===o[e]));return t?t.ratioList=[...t.ratioList,...o.ratioList]:a.push(o),a}),[]),u=a=>{const e=a=>{if(a&&(a=(a+="").replace(/-|(\+)/g,"")).indexOf("/")>-1){const[e,o]=a.split("/");a=(1*e+1*o)/2}return a};return a.map((a=>{const{playType:o,gameType:t}=a.playInfo,{sort:s}=A.getGamePlayData({gameType:t,playType:o});return a.ratioList.sort(((a,o)=>{const t=a.ratio&&A.isStrong({ratio:a.ratio}),s=o.ratio&&A.isStrong({ratio:o.ratio});return e(t)-e(s)})),a.ratioList.sort(((a,e)=>(null==s?void 0:s.indexOf(a.ratioType))-(null==s?void 0:s.indexOf(e.ratioType)))),a}))};return{getPlayGroupType:async e=>{const{gameType:o}=a.value=e;return new Promise((async a=>{const e=await l({gameType:o}),n=e.data||{};if(200==e.code){const e=n.veteran;t.value=e.find((a=>0==a.id)),s.value=r(),a(s.value)}}))}}}const S={class:"betting-collapse"},E={class:"bet-top"},L={class:"name"},j={key:0,class:"tag"},N={class:"bet-bot"},V={key:0,class:"lock",src:C,alt:""},G={key:1,class:"odds"},Q={key:0,class:"vior"},J={key:1,class:"vior"},x={key:2,class:"vior"},X={key:2,class:"vior"};var H=c({props:{dataList:{type:Array,default:()=>[]},matchInfo:{type:Object,default:()=>{}}},setup(a){const e=a,o=u((()=>e.matchInfo)),t=y(["1"]);return(a,s)=>{const r=d("BettingOption"),n=d("van-collapse-item"),i=d("van-collapse"),l=g("play");return m(),f("div",S,[T(i,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a)},{default:v((()=>[(m(!0),f(b,null,h(e.dataList,((a,e)=>(m(),O(n,{key:e,name:`${e+1}`,border:!1},{title:v((()=>[w(Y("span",null,null,512),[[l,a.playInfo]])])),default:v((()=>{var e;return[Y("div",{class:K(["bet",3===(null==(e=a.ratioList)?void 0:e.length)?"col-3":"col-2"])},[(m(!0),f(b,null,h(a.ratioList,((a,e)=>(m(),O(r,{key:e,"market-info":a,class:"bet-item"},{default:v((e=>[Y("div",E,[Y("span",L,R(a.ratioMatch||a.ratioName),1),a.ratioTag?(m(),f("span",j,R(a.ratioTag),1)):B("",!0)]),Y("div",N,[e.lock?(m(),f("img",V)):(m(),f("div",G,["RB"==k(o).showtype?(m(),f("i",{key:0,class:K(["vior-down",{"change-odds":"down-ior"===e.iorChange}])},null,2)):B("",!0),"RB"==k(o).showtype?(m(),f("div",{key:1,class:K(["RB-ChangeIor",{"no-RBtransition":!["up-ior","down-ior"].includes(a.iorChangeTransition)}])},[T(D,{name:["up-ior","down-ior"].includes(a.iorChangeTransition)?"listdown":""},{default:v((()=>["up-ior"===a.iorChangeTransition?(m(),f("div",Q,R("up-ior"===a.iorChangeTransition?a.vior:a.oldIor),1)):"down-ior"===a.iorChangeTransition?(m(),f("div",J,R("down-ior"===a.iorChangeTransition?a.vior:a.oldIor),1)):(m(),f("div",x,R(a.vior),1))])),_:2},1032,["name"])],2)):(m(),f("span",X,R(a.vior),1)),"RB"==k(o).showtype?(m(),f("i",{key:3,class:K(["vior-up",{"change-odds":"up-ior"===e.iorChange}])},null,2)):B("",!0)]))])])),_:2},1032,["market-info"])))),128))],2)]})),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])}}});H.__scopeId="data-v-34e88774";export{P as _,H as a,I as u};
