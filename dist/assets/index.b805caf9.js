import{u as e,D as a,s as l}from"./index.d41a2bcf.js";import{s,d as t,r as u,o,R as n,P as r,F as i,_ as m,Z as c,U as v,q as d,n as p,X as f,Y as g,b as T,w as h,e as b,M as y,O as D,u as Y,c as x,a2 as M}from"./vue.bfc6c13a.js";import{t as k}from"./title-time.58d4efee.js";import{r as H}from"./index.5cf4d7a8.js";const _=["onClick"],S=[(e=>(f("data-v-287274ed"),e=e(),g(),e))((()=>r("i",{class:"iconfont icon-timeMore"},null,-1)))];var w=s({emits:["returnTimeSuccess"],setup(l,{expose:s,emit:f}){const{t:g}=e(),T=t([{text:g("sport.all"),defaultToggle:!0,values:""},{text:g("home.numberHour",{number:"8"}),defaultToggle:!0,values:"8"},{text:g("home.numberHour",{number:"24"}),defaultToggle:!0,values:"24"},{text:g("home.numberDay",{number:"7"}),defaultToggle:!0,values:"168"}]),h=t(""),b=t(!1),y=e=>{const[l,s]=e;b.value=!1;const t=T.value.filter((e=>e.defaultToggle)),u=`${a(l).format("YYYY/MM/DD")} - ${a(s).format("YYYY/MM/DD")}`;T.value=[...t,{text:u,values:u}],h.value=u,f("returnTimeSuccess",h.value),p((()=>{var e,a;null==(a=Y.value)||a.scrollTo(null==(e=x.value)?void 0:e.clientWidth,0)}))},D=()=>{b.value=!0};s({active:h});const Y=t(),x=t();return(e,a)=>{const l=u("van-calendar");return o(),n(i,null,[r("div",{ref_key:"refHomeTime",ref:Y,class:"homeTime-Time-Tabs pb10"},[r("div",{ref_key:"refHomeTimePage",ref:x,class:"homeTime-TimePage"},[(o(!0),n(i,null,m(T.value,((e,a)=>(o(),n("div",{key:a,class:c(["item",{active:e.values===h.value}]),onClick:a=>(e=>{h.value=e.values,f("returnTimeSuccess",h.value)})(e)},v(e.text),11,_)))),128)),r("div",{class:"more",onClick:D},S)],512)],512),d(l,{show:b.value,"onUpdate:show":a[0]||(a[0]=e=>b.value=e),type:"range",onConfirm:y},null,8,["show"])],64)}}});w.__scopeId="data-v-287274ed";const C={class:"homeTime-page"};var V=s({setup(e){const s=t("1"),r=T((()=>l.state.home.refreshChangeTime)),v=t(""),p=t();h(r,(e=>{var a;e&&(null==(a=p.value)||a.resetParams(),s.value="1",clearTimeout(v.value),v.value=setTimeout((async()=>{await z(),await j()}),100))}));const f=t(!1),g=b({page:1,pageSize:5,gradeType:2,gameType:"FT"}),_=b([]),S=t(0),V=(e=!1,a="")=>{a?F.value=!e:f.value=e},j=async(e="")=>{V(!1,e);const a=await H(g);if(V(!0,e),200===a.code){const l=(null==a?void 0:a.data)||{},{baseData:s,total:t}=l;S.value=t;const{pageSize:u,page:o}=g;e?P.value=!(u*o<t):_.length=0,_.push(...s)}},F=t(!1),P=t(!1),U=t(""),$=()=>{P.value||F.value||(F.value=!0,clearTimeout(U.value),U.value=setTimeout((()=>{g.page++,j(!0)}),100))},A=e=>{if(e)if((e||"").includes("/")){const[a,l]=e.split("-"),s=a.replaceAll("/","-"),t=l.replaceAll("/","-");g.startDate=s+" 00:00:00",g.endDate=t+" 23:59:59"}else g.startDate=a().format("YYYY-MM-DD HH:mm:ss"),g.endDate=a().add(e,"hour").format("YYYY-MM-DD HH:mm:ss");else g.startDate="",g.endDate="";P.value=!1,g.page=1,j()},R=e=>{f.value=!0,g.gameType=e,P.value=!1,g.page=1,j()},z=()=>{g.page=1,g.gameType="FT"};return y((()=>{j()})),(e,a)=>{const l=u("ArrowTitle"),t=u("SportsTabs"),r=u("HomeMatchHandicap"),v=u("HomeEmpty"),g=u("Loading"),T=u("van-list"),h=u("FooterHeight"),b=u("van-collapse-item"),y=u("van-collapse");return o(),n("div",C,[d(y,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=e=>s.value=e),accordion:"",border:!1,class:"GlobalCollapse"},{default:D((()=>[d(b,{name:"1"},{title:D((()=>[d(l,{class:"mt10 mb10",src:Y(k),text:e.$t("home.latestMatch")},null,8,["src","text"])])),default:D((()=>[d(t,{ref_key:"refSportsTabs",ref:p,class:"pb10",onReturnSportsSuccess:R},null,512),d(w,{onReturnTimeSuccess:A}),d(T,{modelValue:F.value,"onUpdate:modelValue":a[0]||(a[0]=e=>F.value=e),finished:P.value,"finished-text":e.$t("live.noMore"),onLoad:$},{default:D((()=>[e.isShow?M("",!0):(o(),n(i,{key:0},[f.value?(o(),n(i,{key:0},[(o(!0),n(i,null,m(Y(_),((e,a)=>(o(),x(r,{key:a,"send-params":e,class:c({mt20:0!==a})},null,8,["send-params","class"])))),128)),Y(_).length?M("",!0):(o(),x(v,{key:0}))],64)):M("",!0),!f.value||F.value?(o(),x(g,{key:1,class:c({"new_loading mt10":F.value})},null,8,["class"])):M("",!0)],64))])),_:1},8,["modelValue","finished","finished-text"]),d(h)])),_:1})])),_:1},8,["modelValue"])])}}});V.__scopeId="data-v-5c6c6915";export{V as default};
