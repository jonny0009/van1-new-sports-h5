import{s as a,l as e,h as s,_ as t,r as l,b as i,e as r,f as n}from"./index.43d748b0.js";import{_ as A}from"./noData.1caa3bb3.js";import{s as c,r as o,o as m,R as g,F as u,Z as d,P as p,U as v,a1 as y,W as h,q as k,X as C,Y as f,E as b,x as E,u as I,B as O,b as S,e as R,d as V,j as T,O as B,c as w,_ as U}from"./vue.ffab6494.js";import{h as P}from"./moment.40bc58bf.js";import{_ as Y}from"./go@2x.edb15ae5.js";const K={class:"matchList-1"},M=["onClick"],H=["innerHTML"],L={key:0,class:"noData"},J=(a=>(C("data-v-0bc38520"),a=a(),f(),a))((()=>p("img",{class:"img_1",src:A},null,-1)));var W=c({props:{leagueList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(e){const s=e,t=h(),l=(a,e)=>{const s=new RegExp(a,"gi");return e.replace(s,`<span style="color:var(--color-bg-1);font-weight:600">${a}</span>`)};return(e,i)=>{const r=o("SportsIcon");return m(),g("div",K,[(m(!0),g(u,null,d(s.leagueList,((e,i)=>(m(),g("div",{key:i,class:"left1",onClick:s=>(async e=>{a.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),t.push({path:`/sport/${e.gameType}`,query:{leagueId:e.id}})})(e)},[k(r,{"icon-src":e.gameType,class:"itemImg"},null,8,["icon-src"]),p("div",{class:"font_2",innerHTML:l(s.keyWords,e.name)},null,8,H)],8,M)))),128)),s.leagueList.length?y("",!0):(m(),g("div",L,[J,p("p",null,v(e.$t("user.noDataRelated")),1)]))])}}});W.__scopeId="data-v-0bc38520";const x=a=>(C("data-v-2a686058"),a=a(),f(),a),N={class:"matchList-1"},z=["onClick"],Q={class:"left3"},X={class:"itemImg"},G={class:"itemImg-1",alt:"",type:4,style:{"object-fit":"contain"}},j={class:"itemImg-2",alt:"",type:5,style:{"object-fit":"contain"}},q={class:"center"},D=["innerHTML"],F=O(" VS "),Z=["innerHTML"],_={class:"center_1"},$={class:"right"},aa={key:0,class:"noData"},ea=x((()=>p("img",{class:"img_1",src:A},null,-1)));var sa=c({props:{gameList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(e){const s=e,t=h(),l=a=>a?P(a).format("MM/DD HH:mm"):"",i=(a,e)=>{const s=new RegExp(a,"gi");return e.replace(s,`<span style="color:var(--color-bg-1);font-weight:600">${a}</span>`)};return(e,r)=>{const n=o("SportsIcon"),A=o("van-image"),c=b("img");return m(),g("div",N,[(m(!0),g(u,null,d(s.gameList,((e,r)=>(m(),g("div",{key:r,class:"left1 left2",onClick:s=>(async e=>{a.dispatch("betting/setMoreShow",{status:!1,moreParams:{}});const s=JSON.stringify(e);t.push({path:"/home",query:{gidm:e.gidm,obj:s}})})(e)},[p("div",Q,[p("div",X,[E(p("img",G,null,512),[[c,e.homeLogo]]),E(p("img",j,null,512),[[c,e.awayLogo]])]),p("div",q,[p("div",null,[p("span",{innerHTML:i(s.keyWords,e.homeTeam)},null,8,D),F,p("span",{innerHTML:i(s.keyWords,e.awayTeam)},null,8,Z)]),p("div",_,[k(n,{"icon-src":e.gameType,class:"ball4"},null,8,["icon-src"]),p("span",null,v(l(e.gameDate)),1)])])]),p("div",$,[k(A,{class:"goImg",fit:"contain",src:I(Y)},null,8,["src"])])],8,z)))),128)),s.gameList.length?y("",!0):(m(),g("div",aa,[ea,p("p",null,v(e.$t("user.noDataRelated")),1)]))])}}});sa.__scopeId="data-v-2a686058";const ta={class:"search"},la={class:"search_box"},ia={key:0,class:"searchImg",fit:"contain",src:t},ra={key:0,class:"content"},na={key:0},Aa={class:"font_1 font-2"},ca={class:"historyList"},oa=["onClick"],ma={key:1,class:"hot-recommend"},ga={class:"font_1"},ua={class:"hot-list"},da=["onClick"],pa={class:"font_1"},va={class:"content-list"},ya=["onClick"],ha={class:"left"},ka={class:"font_2"},Ca={class:"right"},fa={key:1,class:"matchList"},ba={class:"area-btn_1"};var Ea=c({setup(t){const A=h(),c=S((()=>a.state.app.theme)),C=S((()=>"blue"===c.value)),f=R({arr:e.getItem("searchHistory")||[]}),b=V(""),E=V(1),O=R({arr:[]}),P=R({arr:[]}),Y=V(!1),K=R({arr:[]});T((async()=>{H(),a.dispatch("app/getAllSports")}));const M=S((()=>{const e=(a.state.app.sports||[]).filter((a=>!["SY","RB","COMBO","JC"].includes(a.gameType)&&a.gameCount));let s=[];if(e.length){s=[...e.map((a=>({value:a.gameType,gameType:a.gameType,gameCount:a.gameCount,name:"Sport"})))]}return s})),H=async()=>{const a={lang:localStorage.getItem("locale")||"zh-cn",gameType:""},e=await s(a)||{};200===e.code&&(K.arr=e.data)},L=async()=>{f.arr=[],e.setItem("searchHistory",f.arr)},J=a=>{b.value=a,x()},x=async()=>{Y.value=!0,E.value=1,P.arr=[],O.arr=[];const a=await l({keywords:b.value});if(200!==a.code)return Y.value=!1,i(a.msg);200===a.code&&(b.value&&(f.arr.includes(b.value)||(f.arr.unshift(b.value),e.setItem("searchHistory",f.arr.slice(0,100)),f.arr=e.getItem("searchHistory"))),Y.value=!1,P.arr=a.data.gameInfo||[],O.arr=a.data.league||[])};return(e,s)=>{const t=o("van-image"),l=o("van-field"),i=o("van-cell-group"),c=o("van-divider"),h=o("van-loading");return m(),g("div",ta,[p("div",la,[k(i,{inset:""},{default:B((()=>[k(l,{modelValue:b.value,"onUpdate:modelValue":[s[0]||(s[0]=a=>b.value=a),x],center:"",clearable:"",placeholder:e.$t("user.search")},{"left-icon":B((()=>[I(C)?(m(),g("img",ia)):(m(),w(t,{key:1,class:"searchImg",fit:"contain",src:I(r)},null,8,["src"]))])),_:1},8,["modelValue","placeholder"])])),_:1}),p("span",{class:"cancel",onClick:s[1]||(s[1]=e=>(a.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),void A.push({path:"/home"})))},v(e.$t("user.cancellation")),1)]),b.value?(m(),g("div",fa,[p("div",ba,[p("span",{class:U(1===E.value?"active":""),onClick:s[2]||(s[2]=a=>E.value=1)},v(e.$t("user.league")),3),p("span",{class:U(2===E.value?"active":""),onClick:s[3]||(s[3]=a=>E.value=2)},v(e.$t("user.competition")),3)]),Y.value?(m(),w(h,{key:0,size:"24",type:"spinner",vertical:""})):y("",!0),1===E.value?(m(),w(W,{key:1,"league-list":I(O).arr,"key-words":b.value},null,8,["league-list","key-words"])):y("",!0),2===E.value?(m(),w(sa,{key:2,"game-list":I(P).arr,"key-words":b.value},null,8,["game-list","key-words"])):y("",!0)])):(m(),g("div",ra,[I(f).arr.length?(m(),g("div",na,[p("p",Aa,[p("span",null,v(e.$t("user.SearchHistory")),1),I(C)?(m(),g("img",{key:0,class:"img_3",src:"data:image/png;base64,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",alt:"",onClick:L})):(m(),g("img",{key:1,class:"img_3",src:"/assets/del.922dc0c6.svg",alt:"",onClick:L}))]),k(c,{class:"line-color"}),p("div",ca,[(m(!0),g(u,null,d(I(f).arr,(a=>(m(),g("div",{key:a,class:"item"},[k(t,{class:"itemImg",fit:"contain",src:I("data:image/png;base64,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")},null,8,["src"]),p("span",{class:"font_2",onClick:e=>J(a)},v(a),9,oa)])))),128))])])):y("",!0),I(K).arr.length?(m(),g("div",ma,[p("p",ga,v(e.$t("user.hotSearch")),1),k(c,{class:"line-color"}),p("div",ua,[(m(!0),g(u,null,d(I(K).arr,(a=>(m(),g("span",{key:a,class:"item",onClick:e=>J(a.hotSearchName)},v(a.hotSearchName),9,da)))),128))])])):y("",!0),p("p",pa,v(e.$t("user.recommend")),1),k(c,{class:"line-color"}),p("div",va,[(m(!0),g(u,null,d(I(M),((s,t)=>(m(),g("div",{key:t,class:"detail",onClick:e=>(e=>{a.dispatch("betting/setMoreShow",{status:!1,moreParams:{}}),A.push({path:`/sport/${e.gameType}`})})(s)},[p("div",ha,[k(n,{"icon-src":s.value,class:"itemImg"},null,8,["icon-src"]),p("span",ka,v(e.$t(`user.sports.${s.gameType}`)),1)]),p("div",Ca,v(s.gameCount),1)],8,ya)))),128))])]))])}}});Ea.__scopeId="data-v-280ce12a";export{Ea as default};
