import{b as a,a as s,_ as e,t,c as r}from"./del.095ae08d.js";import{s as l,I as n,l as c,h as i,g as o,r as u,d as m,e as d}from"./index.0625f0eb.js";import{_ as g}from"./ball1.17e86b88.js";import{_ as p}from"./noData.b9def74d.js";import{s as v,r as f,o as y,R as h,F as k,Z as _,a2 as I,V as w,q as L,u as S,P as T,W as $,X as b,S as C,B as H,e as M,d as j,j as x,O as D,Y as O,c as N}from"./vue.e791136f.js";import{h as P}from"./moment.9709ab41.js";import{_ as W}from"./go@2x.cdab0429.js";const V=a=>($("data-v-1c306447"),a=a(),b(),a),F={class:"matchList-1"},q=["onClick"],B=["innerHTML"],J={key:0,class:"noData"},R=[V((()=>T("img",{class:"img_1",src:p},null,-1))),V((()=>T("p",null," 未查询到相关数据 ",-1)))];var z=v({props:{leagueList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(s){const e=s,t=w(),r=(a,s)=>{const e=new RegExp(a,"gi");return s.replace(e,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(s,n)=>{const c=f("van-image");return y(),h("div",F,[(y(!0),h(k,null,_(e.leagueList,((s,n)=>(y(),h("div",{key:n,class:"left1",onClick:a=>(async a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),t.push({path:`/sport/${a.gameType}`,query:{leagueId:a.id}})})(s)},[L(c,{class:"itemImg",fit:"contain",src:S(a)},null,8,["src"]),T("div",{class:"font_2",innerHTML:r(e.keyWords,s.name)},null,8,B)],8,q)))),128)),e.leagueList.length?I("",!0):(y(),h("div",J,R))])}}});z.__scopeId="data-v-1c306447";const A=a=>($("data-v-fea37d88"),a=a(),b(),a),E={class:"matchList-1"},Y=["onClick"],K={class:"left3"},U={class:"itemImg"},X=["src"],Z=["src"],G={class:"center"},Q=["innerHTML"],aa=H(" VS "),sa=["innerHTML"],ea={class:"center_1"},ta=A((()=>T("img",{class:"ball4",fit:"contain",src:g},null,-1))),ra={class:"right"},la={key:0,class:"noData"},na=[A((()=>T("img",{class:"img_1",src:p},null,-1))),A((()=>T("p",null," 未查询到相关数据 ",-1)))];var ca=v({props:{gameList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(a){const e=a,t=w(),r=a=>a?P(a).format("MM/DD HH:mm"):"",c=a=>(console.log(a),a?`${n}${a}`:s),i=(a,s)=>{const e=new RegExp(a,"gi");return s.replace(e,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(a,s)=>{const n=f("van-image");return y(),h("div",E,[(y(!0),h(k,null,_(e.gameList,((a,s)=>(y(),h("div",{key:s,class:"left1 left2",onClick:s=>(async a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}});const s=JSON.stringify(a);t.push({path:"/home",query:{gidm:a.gidm,obj:s}})})(a)},[T("div",K,[T("div",U,[T("img",{class:"itemImg-1",fit:"contain",src:c(a.homeLogo)},null,8,X),T("img",{class:"itemImg-2",fit:"contain",src:c(a.awayLogo)},null,8,Z)]),T("div",G,[T("div",null,[T("span",{innerHTML:i(e.keyWords,a.homeTeam)},null,8,Q),aa,T("span",{innerHTML:i(e.keyWords,a.awayTeam)},null,8,sa)]),T("div",ea,[ta,T("span",null,C(r(a.gameDate)),1)])])]),T("div",ra,[L(n,{class:"goImg",fit:"contain",src:S(W)},null,8,["src"])])],8,Y)))),128)),e.gameList.length?I("",!0):(y(),h("div",la,na))])}}});ca.__scopeId="data-v-fea37d88";const ia={class:"search"},oa={class:"search_box"},ua={key:0,class:"content"},ma={key:0},da={class:"font_1 font-2"},ga={class:"historyList"},pa=["onClick"],va={key:1,class:"hot-recommend"},fa={class:"font_1"},ya={class:"hot-list"},ha=["onClick"],ka={class:"font_1"},_a={class:"content-list"},Ia=["onClick"],wa={class:"left"},La={class:"font_2"},Sa={class:"right"},Ta={key:1,class:"matchList"},$a={class:"area-btn_1"};var ba=v({setup(p){const v=w(),$=M({arr:c.getItem("searchHistory")||[]}),b=j(""),H=j(1),P=M({arr:[]}),W=M({arr:[]}),V=j(!1),F=M({arr:[]}),q=M({arr:[]});x((async()=>{J(),R()}));const B=(e,t)=>e.icon&&t>3?`${n}${e.icon}`:0===t?g:1===t?s:2===t?a:3===t?r:g,J=async()=>{const a={lang:localStorage.getItem("locale")||"zh-cn",gameType:""},s=await i(a)||{};200===s.code&&(q.arr=s.data,console.log(q.arr,"===="))},R=async()=>{const a=await o()||{};if(200===a.code&&a.data){let s=a.data||{};s=s.filter((a=>"SY"!==a.gameType)),s=JSON.parse(JSON.stringify(s));const e=["OP_BM","TN","BK","FT"];s.sort((function(a,s){return e.indexOf(s.gameType)-e.indexOf(a.gameType)})),F.arr=s}},A=async()=>{$.arr=[],c.setItem("searchHistory",$.arr)},E=a=>{b.value=a,Y()},Y=async()=>{V.value=!0,H.value=1,W.arr=[],P.arr=[];const a=await u({keywords:b.value});if(200!==a.code)return V.value=!1,m(a.msg);200===a.code&&(b.value&&($.arr.includes(b.value)||($.arr.unshift(b.value),c.setItem("searchHistory",$.arr.slice(0,6)),$.arr=c.getItem("searchHistory"))),V.value=!1,W.arr=a.data.gameInfo||[],P.arr=a.data.league||[])};return(a,s)=>{const r=f("van-image"),n=f("van-field"),c=f("van-cell-group"),i=f("van-divider"),o=f("van-loading");return y(),h("div",ia,[T("div",oa,[L(c,{inset:""},{default:D((()=>[L(n,{modelValue:b.value,"onUpdate:modelValue":[s[0]||(s[0]=a=>b.value=a),Y],center:"",clearable:"",placeholder:a.$t("user.search")},{"left-icon":D((()=>[L(r,{class:"searchImg",fit:"contain",src:S(d)},null,8,["src"])])),_:1},8,["modelValue","placeholder"])])),_:1}),T("span",{class:"cancel",onClick:s[1]||(s[1]=a=>(l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),void v.push({path:"/home"})))},C(a.$t("user.cancellation")),1)]),b.value?(y(),h("div",Ta,[T("div",$a,[T("span",{class:O(1==H.value?"active":""),onClick:s[2]||(s[2]=a=>H.value=1)},C(a.$t("user.league")),3),T("span",{class:O(2==H.value?"active":""),onClick:s[3]||(s[3]=a=>H.value=2)},C(a.$t("user.competition")),3)]),V.value?(y(),N(o,{key:0,size:"24",type:"spinner",vertical:""})):I("",!0),1===H.value?(y(),N(z,{key:1,"league-list":S(P).arr,"key-words":b.value},null,8,["league-list","key-words"])):I("",!0),2===H.value?(y(),N(ca,{key:2,"game-list":S(W).arr,"key-words":b.value},null,8,["game-list","key-words"])):I("",!0)])):(y(),h("div",ua,[S($).arr.length?(y(),h("div",ma,[T("p",da,[T("span",null,C(a.$t("user.SearchHistory")),1),T("img",{class:"img_3",src:e,alt:"",onClick:A})]),L(i),T("div",ga,[(y(!0),h(k,null,_(S($).arr,(a=>(y(),h("div",{key:a,class:"item"},[L(r,{class:"itemImg",fit:"contain",src:S(t)},null,8,["src"]),T("span",{class:"font_2",onClick:s=>E(a)},C(a),9,pa)])))),128))])])):I("",!0),S(q).arr.length?(y(),h("div",va,[T("p",fa,C(a.$t("user.hotSearch")),1),L(i),T("div",ya,[(y(!0),h(k,null,_(S(q).arr,(a=>(y(),h("span",{key:a,class:"item",onClick:s=>E(a.hotSearchName)},C(a.hotSearchName),9,ha)))),128))])])):I("",!0),T("p",ka,C(a.$t("user.recommend")),1),L(i),T("div",_a,[(y(!0),h(k,null,_(S(F).arr,((s,e)=>(y(),h("div",{key:e,class:"detail",onClick:a=>(a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),v.push({path:`/sport/${a.gameType}`})})(s)},[T("div",wa,[L(r,{class:"itemImg",fit:"contain",src:B(s,e)},null,8,["src"]),T("span",La,C(a.$t(`user.sports.${s.gameType}`)),1)]),T("div",Sa,C(s.gameCount),1)],8,Ia)))),128))])]))])}}});ba.__scopeId="data-v-5ddf8f78";export{ba as default};
