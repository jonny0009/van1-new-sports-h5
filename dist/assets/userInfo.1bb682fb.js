import{_ as a}from"./return@2x.4699c821.js";import{_ as s}from"./edit.4295f099.js";import{_ as e,a as d,b as i,c as l,d as t,e as v,f as c}from"./star.cd52df69.js";import{d as m,a as r,b as n,c as g,_ as u,e as p,f as o}from"./data4.c014e19f.js";import{a as f,_,b as h,c as b}from"./win.be5bc0a4.js";import{h as j}from"./head-img.2b5edb0e.js";import{_ as k}from"./plate.f0ab7fde.js";import{s as I,b as C,d as x,e as y,j as w,r as F,o as N,R as P,q as U,O as $,P as q,S as B,u as O,F as R,Z as S,a5 as T,V,W,X}from"./vue.85a22cc6.js";import{p as Z}from"./index.f2ca0c63.js";import{d as z,s as A,I as D,j as E,g as G}from"./index.32c9cbe4.js";const H=a=>(W("data-v-45d1e4ee"),a=a(),X(),a),J={class:"userInfo"},K={class:"user"},L={class:"user-info"},M=["src"],Q={class:"user-right"},Y={class:"user-1"},aa=H((()=>q("img",{class:"img_1",src:e,alt:""},null,-1))),sa={class:"user-2"},ea={class:"user-3"},da=H((()=>q("img",{class:"img_1",src:d,alt:""},null,-1))),ia={class:"user-4"},la=H((()=>q("span",null,"关注",-1))),ta=H((()=>q("div",{class:"center"},null,-1))),va=H((()=>q("span",null,"粉丝",-1))),ca={class:"content"},ma=H((()=>q("div",{class:"top-1"},[q("img",{class:"img_1",src:u,alt:""}),q("span",null,"投注数据（近90天）")],-1))),ra={class:"circle"},na={class:"left"},ga=["src"],ua={class:"right"},pa=T('<div class="top-1 top-2" data-v-45d1e4ee><img class="img_1" src="'+i+'" alt="" data-v-45d1e4ee><span data-v-45d1e4ee>注单</span><div class="right" data-v-45d1e4ee><span data-v-45d1e4ee>近期战绩:</span><img class="img_1" src="'+l+'" alt="" data-v-45d1e4ee><img class="img_1" src="'+f+'" alt="" data-v-45d1e4ee><img class="img_1" src="'+_+'" alt="" data-v-45d1e4ee><img class="img_1" src="'+_+'" alt="" data-v-45d1e4ee><img class="img_1" src="'+f+'" alt="" data-v-45d1e4ee></div></div>',1),oa={class:"top-3"},fa=[H((()=>q("img",{class:"img_1",src:j,alt:""},null,-1))),H((()=>q("div",{class:"name"},[q("div",null,"ai-sport"),q("div",null,"@ai-sport")],-1)))],_a=H((()=>q("div",{class:"right"}," 进行中 ",-1))),ha=T('<div class="top4" data-v-45d1e4ee><div class="game-1" data-v-45d1e4ee><img class="img_1" src="'+t+'" alt="" data-v-45d1e4ee><span data-v-45d1e4ee> 中华台北 - 超级联赛 </span></div><div class="game-1 game-2" data-v-45d1e4ee><img class="img_1" src="'+v+'" alt="" data-v-45d1e4ee><span data-v-45d1e4ee> 半场 </span></div><div class="game-3" data-v-45d1e4ee><div class="match-1" data-v-45d1e4ee><div class="left" data-v-45d1e4ee><img class="img_1" src="'+p+'" alt="" data-v-45d1e4ee><span data-v-45d1e4ee> 台北 </span></div><div class="right" data-v-45d1e4ee> 2 </div></div><div class="match-1 match-2" data-v-45d1e4ee><div class="left" data-v-45d1e4ee><img class="img_2" src="'+o+'" alt="" data-v-45d1e4ee><span data-v-45d1e4ee> 台北天龙 </span></div><div class="right" data-v-45d1e4ee> 0 </div></div></div><div class="game-3 game-4" data-v-45d1e4ee><div class="match-1" data-v-45d1e4ee><div class="left" data-v-45d1e4ee><img class="img_1" src="'+k+'" alt="" data-v-45d1e4ee><div data-v-45d1e4ee><p data-v-45d1e4ee>大于 2</p><p class="plate" data-v-45d1e4ee>全场 大小盘</p></div></div><div class="right-1" data-v-45d1e4ee> @3.64 </div></div></div><div class="game-5" data-v-45d1e4ee><p data-v-45d1e4ee>投注额：</p><div data-v-45d1e4ee><img class="img_1" src="'+h+'" alt="" data-v-45d1e4ee><span data-v-45d1e4ee>1.00</span></div></div><div class="game-5 game-6" data-v-45d1e4ee><p data-v-45d1e4ee>可赔付额：</p><div data-v-45d1e4ee><img class="img_1" src="'+b+'" alt="" data-v-45d1e4ee><span class="num" data-v-45d1e4ee>3.65</span></div></div><div class="addBtn" data-v-45d1e4ee><span data-v-45d1e4ee>加注</span><img class="img_1" src="'+c+'" alt="" data-v-45d1e4ee></div></div><div class="foot" data-v-45d1e4ee></div>',2);var ba=I({setup(e){const d=C((()=>A.state.user.userInfo)),i=x({}),l=V(),t=a=>{l.push("/user"+a)},v=x("个人档案"),c=y({arr:[{num:0,name:"投注次数",img:m},{num:0,name:"被跟注次数",img:r},{num:0,name:"平均投注额",img:n},{num:0,name:"平均赔率",img:g}]});w((()=>{u()}));const u=async()=>{const a={fPlayerId:d.value.playerId},s=await Z(a);if(200!==s.code)return z(s.msg);i.value=s.data};return(e,d)=>{const m=F("van-nav-bar");return N(),P("div",J,[U(m,{class:"bg-title",title:v.value,border:!1},{left:$((()=>[q("img",{class:"img_1",src:a,alt:"",onClick:d[0]||(d[0]=a=>{l.push("/home")})})])),right:$((()=>[q("img",{class:"img_1",src:s,alt:"",onClick:d[1]||(d[1]=a=>t("/editUser"))})])),_:1},8,["title"]),q("div",K,[q("div",L,[q("div",{class:"user-img",onClick:d[2]||(d[2]=a=>t("/editImg"))},[q("img",{class:"img_1",src:(r=i.value.headImg,r?`${D}${r}`:E),alt:""},null,8,M)]),q("div",Q,[q("div",Y,[aa,q("span",null,B(i.value.nickName),1)]),q("div",sa,B(i.value.email||""),1),q("div",ea,[da,q("span",null,B("注册时间")+" "+B(O(G)(i.value.createTime)),1)]),q("div",ia,[q("div",{class:"left",onClick:d[3]||(d[3]=a=>t("/selfFocus?num=1"))},[q("span",null,B(i.value.followNum),1),la]),ta,q("div",{class:"left right",onClick:d[4]||(d[4]=a=>t("/selfFocus?num=2"))},[q("span",null,B(i.value.fansCount),1),va])])])]),q("p",{class:"note",onClick:d[5]||(d[5]=a=>t("/editUser"))},B(i.value.profiles),1)]),q("div",ca,[ma,q("div",ra,[(N(!0),P(R,null,S(O(c).arr,((a,s)=>(N(),P("div",{key:s,class:"num-1"},[q("div",na,[q("img",{class:"img_1",src:a.img,alt:""},null,8,ga)]),q("div",ua,[q("div",null,B(a.num),1),q("div",null,B(a.name),1)])])))),128))]),pa,q("div",oa,[q("div",{class:"left",onClick:d[6]||(d[6]=a=>t("/elseInfo"))},fa),_a]),ha])]);var r}}});ba.__scopeId="data-v-45d1e4ee";export{ba as default};
