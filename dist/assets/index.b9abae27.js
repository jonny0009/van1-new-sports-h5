import{d as O,j as _,M as t,o as a,a as P,b as e,n as s,e as n,t as o}from"./vue.d4af3fe6.js";var u=O({props:{active:{type:Boolean,default:function(){return!1}},text:{type:String,default:function(){return""}}},setup(O){const u=O,B=_({FT:"足球",BK:"篮球",TN:"网球",BS:"棒球",JC:"竞彩",BF:"比分",BK_AFT:"美式足球",OP_DJ:"电竞",OP_IH:"冰球",OP_RU:"橄榄球",OP_HB:"手球",OP:"其他",SY:"首页",RB:"滚球",COMBO:"串关",FT_VI:"虚拟足球",OP_MMA:"综合格斗",OP_BO:"拳击",OP_SN:"斯诺克",OP_DR:"飞镖",OP_TN:"乒乓球",OP_FH:"曲棍球",OP_FB:"地板球",OP_BV:"沙滩排球",OP_CK:"板球",OP_VB:"排球",OP_MS:"赛车",OP_BA:"自行车",OP_GF:"高尔夫",DR:"赛狗",OP_BM:"羽毛球",OP_JR:"金融投注",OP_LO:"彩票",OP_CY:"自行车赛",OP_OF:"水球",OP_SB:"垒球",OP_FU:"室内足球",OP_TT:"桌球",OP_GY:"体操",OP_TAF:"田径",OP_SS:"帆船",OP_SW:"游泳",OP_BS:"沙滩足球",OP_WS:"冬季运动",OP_BD:"班迪球",AH:"主播"}),c=_(!1);c.value=u.active,t(u,(O=>{if(O){const{active:_,text:t}=O;c.value=_,l.value=`icon-${t}`}}));const v=_("");v.value=B.value[u.text];const l=_("icon-FT");return l.value=`icon-${u.text}`,(O,_)=>(a(),P("div",{class:s(["SportsButton",[{active:c.value}]])},[e("i",{class:s(["iconfont",l.value])},null,2),n(" "+o(v.value),1)],2))}});u.__scopeId="data-v-2077ad16";export{u as _};
