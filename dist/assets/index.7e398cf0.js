import{b as a,a as s,_ as e,t,c as r}from"./del.1fb63bfa.js";import{s as l,I as n,l as i,g as c,r as o,d as u,e as m}from"./index.e79a695e.js";import{_ as d}from"./ball1.001cf2ba.js";import{_ as g}from"./noData.663f85f3.js";import{s as p,r as v,o as y,R as f,F as h,Z as k,a2 as _,V as I,q as L,u as w,P as b,W as T,X as $,S as C,B as H,e as M,d as S,j,O as x,Y as D,c as O}from"./vue.93da156d.js";import{h as P}from"./moment.9709ab41.js";import{_ as W}from"./go@2x.cdab0429.js";const V=a=>(T("data-v-3529a091"),a=a(),$(),a),F={class:"matchList-1"},N=["onClick"],q=["innerHTML"],B={key:0,class:"noData"},J=[V((()=>b("img",{class:"img_1",src:g},null,-1))),V((()=>b("p",null," 未查询到相关数据 ",-1)))];var R=p({props:{leagueList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(s){const e=s,t=I(),r=(a,s)=>{const e=new RegExp(a,"gi");return s.replace(e,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(s,n)=>{const i=v("van-image");return y(),f("div",F,[(y(!0),f(h,null,k(e.leagueList,((s,n)=>(y(),f("div",{key:n,class:"left1",onClick:a=>(async a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),t.push({path:`/sport/${a.gameType}`,query:{leagueId:a.id}})})(s)},[L(i,{class:"itemImg",fit:"contain",src:w(a)},null,8,["src"]),b("div",{class:"font_2",innerHTML:r(e.keyWords,s.name)},null,8,q)],8,N)))),128)),e.leagueList.length?_("",!0):(y(),f("div",B,J))])}}});R.__scopeId="data-v-3529a091";const A=a=>(T("data-v-3e175da0"),a=a(),$(),a),E={class:"matchList-1"},Y=["onClick"],z={class:"left3"},K={class:"itemImg"},U=["src"],X=["src"],Z={class:"center"},G=["innerHTML"],Q=H(" VS "),aa=["innerHTML"],sa={class:"center_1"},ea=A((()=>b("img",{class:"ball4",fit:"contain",src:d},null,-1))),ta={class:"right"},ra={key:0,class:"noData"},la=[A((()=>b("img",{class:"img_1",src:g},null,-1))),A((()=>b("p",null," 未查询到相关数据 ",-1)))];var na=p({props:{gameList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(a){const e=a,t=I(),r=a=>a?P(a).format("MM/DD HH:mm"):"",i=a=>(console.log(a),a?`${n}${a}`:s),c=(a,s)=>{const e=new RegExp(a,"gi");return s.replace(e,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(a,s)=>{const n=v("van-image");return y(),f("div",E,[(y(!0),f(h,null,k(e.gameList,((a,s)=>(y(),f("div",{key:s,class:"left1 left2",onClick:s=>(async a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}});const s=JSON.stringify(a);t.push({path:"/home",query:{gidm:a.gidm,obj:s}})})(a)},[b("div",z,[b("div",K,[b("img",{class:"itemImg-1",fit:"contain",src:i(a.homeLogo)},null,8,U),b("img",{class:"itemImg-2",fit:"contain",src:i(a.awayLogo)},null,8,X)]),b("div",Z,[b("div",null,[b("span",{innerHTML:c(e.keyWords,a.homeTeam)},null,8,G),Q,b("span",{innerHTML:c(e.keyWords,a.awayTeam)},null,8,aa)]),b("div",sa,[ea,b("span",null,C(r(a.gameDate)),1)])])]),b("div",ta,[L(n,{class:"goImg",fit:"contain",src:w(W)},null,8,["src"])])],8,Y)))),128)),e.gameList.length?_("",!0):(y(),f("div",ra,la))])}}});na.__scopeId="data-v-3e175da0";const ia={class:"search"},ca={class:"search_box"},oa={key:0,class:"content"},ua={key:0,class:"font_1"},ma={key:1,class:"font_1 font-2"},da={key:2,class:"historyList"},ga=["onClick"],pa={class:"content-list"},va=["onClick"],ya={class:"left"},fa={class:"font_2"},ha={class:"right"},ka={key:1,class:"matchList"},_a={class:"area-btn_1"};var Ia=p({setup(g){const p=I(),T=M({arr:i.getItem("searchHistory")||[]}),$=S(""),H=S(1),P=M({arr:[]}),W=M({arr:[]}),V=S(!1),F=S(!1),N=M({arr:[]});j((async()=>{B()}));const q=(e,t)=>e.icon&&t>3?`${n}${e.icon}`:0===t?d:1===t?s:2===t?a:3===t?r:d,B=async()=>{const a=await c()||{};if(200===a.code&&a.data){let s=a.data||{};s=s.filter((a=>"SY"!==a.gameType)),s=JSON.parse(JSON.stringify(s));const e=["OP_BM","TN","BK","FT"];s.sort((function(a,s){return e.indexOf(s.gameType)-e.indexOf(a.gameType)})),N.arr=s}},J=async()=>{T.arr=[],i.setItem("searchHistory",T.arr)},A=async()=>{F.value=!0,H.value=1,W.arr=[],P.arr=[];const a=await o({keywords:$.value});if(200!==a.code)return F.value=!1,u(a.msg);200===a.code&&($.value&&(T.arr.unshift($.value),i.setItem("searchHistory",T.arr.slice(0,6)),T.arr=i.getItem("searchHistory")),F.value=!1,W.arr=a.data.gameInfo||[],P.arr=a.data.league||[])};return(a,s)=>{const r=v("van-image"),n=v("van-field"),i=v("van-cell-group"),c=v("van-divider"),o=v("van-loading");return y(),f("div",ia,[b("div",ca,[L(i,{inset:""},{default:x((()=>[L(n,{modelValue:$.value,"onUpdate:modelValue":[s[0]||(s[0]=a=>$.value=a),A],center:"",clearable:"",placeholder:a.$t("user.search")},{"left-icon":x((()=>[L(r,{class:"searchImg",fit:"contain",src:w(m)},null,8,["src"])])),_:1},8,["modelValue","placeholder"])])),_:1}),b("span",{class:"cancel",onClick:s[1]||(s[1]=a=>(l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),void p.push({path:"/home"})))},C(a.$t("user.cancellation")),1)]),$.value?(y(),f("div",ka,[b("div",_a,[b("span",{class:D(1==H.value?"active":""),onClick:s[2]||(s[2]=a=>H.value=1)},C(a.$t("user.league")),3),b("span",{class:D(2==H.value?"active":""),onClick:s[3]||(s[3]=a=>H.value=2)},C(a.$t("user.competition")),3)]),F.value?(y(),O(o,{key:0,size:"24",type:"spinner",vertical:""})):_("",!0),1===H.value?(y(),O(R,{key:1,"league-list":w(P).arr,"key-words":$.value},null,8,["league-list","key-words"])):_("",!0),2===H.value?(y(),O(na,{key:2,"game-list":w(W).arr,"key-words":$.value},null,8,["game-list","key-words"])):_("",!0)])):(y(),f("div",oa,[w(T).arr.length?(y(),f("p",ma,[b("span",null,C(a.$t("user.SearchHistory")),1),b("img",{class:"img_3",src:e,alt:"",onClick:J})])):(y(),f("p",ua,C(a.$t("user.recommend")),1)),L(c),V.value?_("",!0):(y(),f("div",da,[(y(!0),f(h,null,k(w(T).arr,(a=>(y(),f("div",{key:a,class:"item"},[L(r,{class:"itemImg",fit:"contain",src:w(t)},null,8,["src"]),b("span",{class:"font_2",onClick:s=>{return e=a,$.value=e,void A();var e}},C(a),9,ga)])))),128))])),b("div",pa,[(y(!0),f(h,null,k(w(N).arr,((s,e)=>(y(),f("div",{key:e,class:"detail",onClick:a=>(a=>{l.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),p.push({path:`/sport/${a.gameType}`})})(s)},[b("div",ya,[L(r,{class:"itemImg",fit:"contain",src:q(s,e)},null,8,["src"]),b("span",fa,C(a.$t(`user.sports.${s.gameType}`)),1)]),b("div",ha,C(s.gameCount),1)],8,va)))),128))])]))])}}});Ia.__scopeId="data-v-6531a3e0";export{Ia as default};
