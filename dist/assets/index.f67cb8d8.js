import{s as a,M as e,P as t}from"./index.f78e2000.js";import{p as o}from"./index.746cc57a.js";import{g as n,f as s,w as i,a as l,a8 as r,d as p,r as A,K as u,o as y,R as c,c as d,u as g,$ as m,C as v,D as f,m as T,O as h,F as w,S as b,P as B,W as k,_ as D,B as K}from"./vue.2cb7924b.js";const C={1:"veteran",2:"novice",3:"veteran"};function L(p){const A=n((()=>a.state.match.matchInfo)),u=n((()=>a.state.user.userConfig)),y=n((()=>a.state.match.needTimer)),c=s(!0);i((()=>A.value),(()=>{v()})),l((()=>{}));const d=s(!0),g=s("0"),m=s([]),v=async()=>{if(y.value&&!p)return;const{formatType:a}=u.value,{gameType:e}=A.value;if(e&&d.value){const t=await o({gameType:e}),n=t.data||{};if(200===t.code){const e=n[C[a]];m.value=e,d.value=!1}}p&&T(g.value)},f=s([]),T=a=>{g.value=a;const e=m.value?.find((a=>a.id?.toString()===g.value));f.value=e?.playData,w()},h=s([]),w=()=>{const{detail:a,gameType:t,systemId:o,homeTeamAbbr:n,awayTeamAbbr:s}=A.value;if(a&&a.length>0){const i=[];a.forEach((a=>{const{playData:l,game:r}=a;for(const p of l){const a={...p},l={gameType:t,homeTeam:n,awayTeam:s,playType:a.playType,championType:r.championType,session:r.session},A=a.ratioData.map((i=>new e({...i,systemId:o,gameType:t,homeTeam:n,awayTeam:s,gameId:r.gameId,gidm:r.gidm,strong:r.strong,hstrong:r.hstrong,playType:a.playType,sw:a.sw,championType:a.championType})));a.ratioData?.length>0&&i.push({typeTemp:`${l.playType}${l.session}`,playType:l.playType,playInfo:l,ratioList:A})}}));const l=["HDNB2","HDNB","HTS2","HW3","W3","W3_conner","PD_conner","HT_conner","T_conner"],r=i.filter((a=>!l.includes(a.playType))),p=B(r,f.value||[]),A=D(p),u=k(A,"typeTemp");m.value=b(r),h.value=u,c.value=!1}},b=a=>{const e=r(m.value)||[];let t=[];return e.forEach((e=>{const o=B(a,e.playData||[]),n=o.map((a=>a.typeTemp)),s=[...new Set(n)],i={id:e.id,name:e.name,groupType:e.groupType,playData:e.playData,count:s.length,playDataList:o};t.push(i)})),t=t.filter((a=>a.playDataList.length>0)),t},B=(a,e=[])=>{const t={},o=[];a.map((a=>{const{typeTemp:o}=a,n=e.indexOf(o);n>-1&&(t[n]||(t[n]=[]),t[n].push(a))}));return Object.keys(t).map((a=>{const e=t[a];o.push(...e)})),o.concat([])},k=(a,e="playType")=>a.reduce(((a,t)=>{const o=a.find((a=>a[e]===t[e]));return o?o.ratioList=[...o.ratioList,...t.ratioList]:a.push(t),a}),[]),D=a=>{const e=a=>{if(a&&(a=(a+="").replace(/-|(\+)/g,"")).indexOf("/")>-1){const[e,t]=a.split("/");a=(1*e+1*t)/2}return a};return a.map((a=>{const{playType:o,gameType:n}=a.playInfo,{sort:s}=t.getGamePlayData({gameType:n,playType:o});return a.ratioList.sort(((a,o)=>{const n=a.ratio&&t.isStrong({ratio:a.ratio}),s=o.ratio&&t.isStrong({ratio:o.ratio});return e(n)-e(s)})),a.ratioList.sort(((a,e)=>s?.indexOf(a.ratioType)-s?.indexOf(e.ratioType))),a}))};return{findGroupById:T,playGroupBetList:m,playBettingList:h,apiLoading:c}}const R={class:"betting-collapse"},Y={class:"tab-title"},O={class:"num"},I={class:"bet-top"},E={class:"name"},S={key:0,class:"tag"},N={class:"bet-bot"},V={key:0,class:"lock",src:"data:image/png;base64,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",alt:""},P={key:1,class:"odds"},G={key:0,class:"vior"},Q={key:1,class:"vior"},J={key:2,class:"vior"},x={key:2,class:"vior"};var j=p({props:{groupList:{type:Array,default:()=>[]},bettingList:{type:Array,default:()=>[]},matchInfo:{type:Object,default:()=>{}},loading:{type:Boolean,default:!1}},emits:["tab-change"],setup(a,{emit:e}){const t=a,o=n((()=>t.groupList)),i=n((()=>t.bettingList)),l=s(null),r=a=>{e("tab-change",a)},p=n((()=>t.matchInfo)),C=s(["1"]);return(e,t)=>{const n=A("Loading"),s=A("EmptyData"),L=A("BettingOption"),j=A("van-collapse-item"),X=A("van-collapse"),H=A("van-tab"),F=A("van-tabs"),U=u("play");return y(),c("div",R,[a.loading?(y(),d(n,{key:0})):0===g(i).length?(y(),d(s,{key:1,text:e.$t("live.platCloseAll")},null,8,["text"])):m("",!0),v(T(F,{active:l.value,"onUpdate:active":t[1]||(t[1]=a=>l.value=a),shrink:"","line-height":"0",onChange:r},{default:h((()=>[(y(!0),c(w,null,b(g(o),((a,e)=>(y(),d(H,{key:e,name:a.id+""},{title:h((()=>[B("div",Y,[B("span",null,k(a.name),1),B("span",O,k(a.count),1)])])),default:h((()=>[T(X,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=a=>C.value=a)},{default:h((()=>[(y(!0),c(w,null,b(g(i),((a,e)=>(y(),d(j,{key:e,name:`${e+1}`,border:!1},{title:h((()=>[v(B("span",null,null,512),[[U,a.playInfo]])])),default:h((()=>[B("div",{class:D(["bet",3===a.ratioList?.length?"col-3":"col-2"])},[(y(!0),c(w,null,b(a.ratioList,(a=>(y(),d(L,{key:a.playOnlyId,"market-info":a,class:"bet-item"},{default:h((e=>[B("div",I,[B("span",E,k(a.ratioMatch||a.ratioName),1),a.ratioTag?(y(),c("span",S,k(a.ratioTag),1)):m("",!0)]),B("div",N,[e.lock?(y(),c("img",V)):(y(),c("div",P,["RB"==g(p).showtype?(y(),c("i",{key:0,class:D(["vior-down",{"change-odds":"down-ior"===e.iorChange}])},null,2)):m("",!0),"RB"==g(p).showtype?(y(),c("div",{key:1,class:D(["RB-ChangeIor",{"no-RBtransition":!["up-ior","down-ior"].includes(a.iorChangeTransition)}])},[T(K,{name:["up-ior","down-ior"].includes(a.iorChangeTransition)?"listdown":""},{default:h((()=>["up-ior"===a.iorChangeTransition?(y(),c("div",G,k("up-ior"===a.iorChangeTransition?a.vior:a.oldIor),1)):"down-ior"===a.iorChangeTransition?(y(),c("div",Q,k("down-ior"===a.iorChangeTransition?a.vior:a.oldIor),1)):(y(),c("div",J,k(a.vior),1))])),_:2},1032,["name"])],2)):(y(),c("span",x,k(a.vior),1)),"RB"==g(p).showtype?(y(),c("i",{key:3,class:D(["vior-up",{"change-odds":"up-ior"===e.iorChange}])},null,2)):m("",!0)]))])])),_:2},1032,["market-info"])))),128))],2)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])),_:2},1032,["name"])))),128))])),_:1},8,["active"]),[[f,g(i).length>0]])])}}});j.__scopeId="data-v-e727c53a";export{j as _,L as u};
