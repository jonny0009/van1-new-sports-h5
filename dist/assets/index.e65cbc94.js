import{b as a,a as s,_ as e,c as l,t as n}from"./del.a067c2c3.js";import{r as t}from"./index.19388678.js";import{f as r,l as c,d as i,e as o}from"./index.e96292d5.js";import{_ as u}from"./ball1.71c95316.js";import{_ as d}from"./noData.d948af1f.js";import{d as m,r as v,o as p,u as g,F as y,E as f,O as k,m as h,v as _,q as L,B as I,C,y as w,x as H,J as T,a as b,f as x,p as D,D as j,c as M,A as W}from"./vue.3b4f9705.js";import{_ as F}from"./go@2x.663d8ac1.js";const V=a=>(I("data-v-1058c313"),a=a(),C(),a),A={class:"matchList-1"},B=["onClick"],E=["innerHTML"],S={key:0,class:"noData"},$=[V((()=>L("img",{class:"img_1",src:d},null,-1))),V((()=>L("p",null," 未查询到相关数据 ",-1)))];var O=m({props:{leagueList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(s){const e=s,l=(a,s)=>{const e=new RegExp(a,"gi");return s.replace(e,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(s,n)=>{const t=v("van-image");return p(),g("div",A,[(p(!0),g(y,null,f(e.leagueList,((s,n)=>(p(),g("div",{key:n,class:"left1",onClick:a=>(async a=>{console.log(a,"联赛跳转====")})(s)},[h(t,{class:"itemImg",fit:"contain",src:_(a)},null,8,["src"]),L("div",{class:"font_2",innerHTML:l(e.keyWords,s.name)},null,8,E)],8,B)))),128)),e.leagueList.length?k("",!0):(p(),g("div",S,$))])}}});O.__scopeId="data-v-1058c313";const R=a=>(I("data-v-1be5d1ce"),a=a(),C(),a),q={class:"matchList-1"},z=["onClick"],J={class:"left3"},K={class:"center"},N=["innerHTML"],P=H(" VS "),U=["innerHTML"],G={class:"center_1"},Q={class:"right"},X={key:0,class:"noData"},Y=[R((()=>L("img",{class:"img_1",src:d},null,-1))),R((()=>L("p",null," 未查询到相关数据 ",-1)))];var Z=m({props:{gameList:{type:Array,default:function(){return[]}},keyWords:{type:String,default:function(){return""}}},setup(a){const e=a,l=(a,s)=>{const e=new RegExp(a,"gi");return s.replace(e,`<span style="color: #7642FD;font-weight:600">${a}</span>`)};return(a,n)=>{const t=v("van-image");return p(),g("div",q,[(p(!0),g(y,null,f(e.gameList,((a,n)=>{return p(),g("div",{key:n,class:"left1 left2",onClick:s=>(async a=>{console.log(a,"比赛跳转======")})(a)},[L("div",J,[h(t,{class:"itemImg",fit:"contain",src:(c=a.homeLogo,console.log(c),s)},null,8,["src"]),L("div",K,[L("div",null,[L("span",{innerHTML:l(e.keyWords,a.homeTeam)},null,8,N),P,L("span",{innerHTML:l(e.keyWords,a.awayTeam)},null,8,U)]),L("div",G,[L("span",null,w(a.gameDate?_(r)(a.gameDate):""),1)])])]),L("div",Q,[h(t,{class:"goImg",fit:"contain",src:_(F)},null,8,["src"])])],8,z);var c})),128)),e.gameList.length?k("",!0):(p(),g("div",X,Y))])}}});Z.__scopeId="data-v-1be5d1ce";const aa=a=>(I("data-v-06d46a12"),a=a(),C(),a),sa={class:"search"},ea={class:"search_box"},la={key:0,class:"content"},na={key:0,class:"font_1"},ta={key:1,class:"font_1 font-2"},ra=aa((()=>L("span",null,"搜索历史",-1))),ca={key:2,class:"historyList"},ia=["onClick"],oa=["onClick"],ua={class:"left"},da={class:"font_2"},ma=aa((()=>L("div",{class:"right"},null,-1))),va={key:1,class:"matchList"},pa={class:"area-btn_1"};var ga=m({setup(r){const d=T({arr:c.getItem("searchHistory")||[]}),m=W(),I=b(""),C=b(1),H=T({arr:[]}),F=T({arr:[]}),V=b(!1),A=b(!1),B=T([{name:"足球",img:u,type:"FT"},{name:"篮球",img:l,type:"BK"},{name:"网球",img:a,type:"TN"},{name:"羽毛球",img:s,type:"OP_BM"}]);x((async()=>{}));const E=async()=>{d.arr=[],c.setItem("searchHistory",d.arr)},S=async()=>{A.value=!0,C.value=1,F.arr=[],H.arr=[];const a=await t({keywords:I.value});if(200!==a.code)return A.value=!1,i(a.msg);200===a.code&&(I.value&&(d.arr.unshift(I.value),c.setItem("searchHistory",d.arr.slice(0,6)),d.arr=c.getItem("searchHistory")),A.value=!1,F.arr=a.data.gameInfo||[],H.arr=a.data.league||[])};return(a,s)=>{const l=v("van-image"),t=v("van-field"),r=v("van-cell-group"),c=v("van-divider"),i=v("van-loading");return p(),g("div",sa,[L("div",ea,[h(r,{inset:""},{default:D((()=>[h(t,{modelValue:I.value,"onUpdate:modelValue":[s[0]||(s[0]=a=>I.value=a),S],center:"",clearable:"",placeholder:"搜索"},{"left-icon":D((()=>[h(l,{class:"searchImg",fit:"contain",src:_(o)},null,8,["src"])])),_:1},8,["modelValue"])])),_:1}),L("span",{class:"cancel",onClick:s[1]||(s[1]=a=>{m.push({path:"/home"})})},"取消")]),I.value?(p(),g("div",va,[L("div",pa,[L("span",{class:j(1==C.value?"active":""),onClick:s[2]||(s[2]=a=>C.value=1)},"联赛",2),L("span",{class:j(2==C.value?"active":""),onClick:s[3]||(s[3]=a=>C.value=2)},"比赛",2)]),A.value?(p(),M(i,{key:0,size:"24",type:"spinner",vertical:""})):k("",!0),1===C.value?(p(),M(O,{key:1,"league-list":_(H).arr,"key-words":I.value},null,8,["league-list","key-words"])):k("",!0),2===C.value?(p(),M(Z,{key:2,"game-list":_(F).arr,"key-words":I.value},null,8,["game-list","key-words"])):k("",!0)])):(p(),g("div",la,[_(d).arr.length?(p(),g("p",ta,[ra,L("img",{class:"img_3",src:e,alt:"",onClick:E})])):(p(),g("p",na,"推荐")),h(c),V.value?k("",!0):(p(),g("div",ca,[(p(!0),g(y,null,f(_(d).arr,(a=>(p(),g("div",{key:a,class:"item"},[h(l,{class:"itemImg",fit:"contain",src:_(n)},null,8,["src"]),L("span",{class:"font_2",onClick:s=>{return e=a,void(I.value=e);var e}},w(a),9,ia)])))),128))])),(p(!0),g(y,null,f(_(B),((a,s)=>(p(),g("div",{key:s,class:"detail",onClick:s=>(a=>{m.push({path:`/sport/${a.type}`})})(a)},[L("div",ua,[h(l,{class:"itemImg",fit:"contain",src:a.img},null,8,["src"]),L("span",da,w(a.name),1)]),ma],8,oa)))),128))]))])}}});ga.__scopeId="data-v-06d46a12";export{ga as default};
