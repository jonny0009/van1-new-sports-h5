import{u as a}from"./index.93b9ef4e.js";import{s,b as e,E as l,o as t,R as c,P as r,W as n,u as o,x as i,_ as m,F as u,S as d,Y as v,Z as p}from"./vue.97c0c246.js";const h=a=>(v("data-v-ffdaf8bc"),a=a(),p(),a),f={class:"panel-score"},y={class:"score"},g={class:"score-team"},T={class:"score-team_head"},D={class:"score-team_wrap"},_={type:4,alt:""},b={class:"score-team_wrap"},w={type:5,alt:""},S={class:"head"},L={class:"nums"},j={class:"nums"},x=h((()=>r("div",{class:"score-line"},null,-1))),C={class:"score-result"},F={class:"head"},P={class:"nums"},k={class:"nums"},A=h((()=>r("div",{class:"bot-bg"},null,-1)));var B=s({props:{scoreList:{type:Array,default:()=>[]},matchData:{type:Object,default:()=>{}}},setup(s){const v=s,{t:p}=a(),h=e((()=>{var a,s;return(null==(a=v.matchData)?void 0:a.homeTeamShort)||(null==(s=v.matchData)?void 0:s.homeTeam)})),B=e((()=>{var a,s;return(null==(a=v.matchData)?void 0:a.awayTeamShort)||(null==(s=v.matchData)?void 0:s.awayTeam)})),E=e((()=>{const a=["Current","Normaltime"];return v.scoreList.filter((s=>!a.includes(s.type)))})),I=e((()=>v.scoreList.find((a=>"Current"===a.type))||{})),K=e((()=>({FT:p("live.halfPlay"),BK:p("live.section")}[v.matchData.gameType]||"")));return(a,e)=>{const v=l("img");return t(),c("div",f,[r("div",y,[r("div",g,[r("div",T,n(o(K)),1),r("div",D,[i(r("img",_,null,512),[[v,s.matchData.homeLogo]]),r("span",null,n(o(h)),1)]),r("div",b,[i(r("img",w,null,512),[[v,s.matchData.awayLogo]]),r("span",null,n(o(B)),1)])]),r("div",{class:m(["score-main",o(E).length<4?"score-main-right":""])},[(t(!0),c(u,null,d(o(E),((a,s)=>(t(),c("div",{key:s,class:"score-main__item"},[r("div",S,[r("strong",null,n(s+1),1)]),r("div",L,[r("span",null,n(a.homeTeamScore),1)]),r("div",j,[r("span",null,n(a.awayTeamScore),1)])])))),128))],2),x,r("div",C,[r("div",F,[r("strong",null,n(a.$t("user.result")),1)]),r("div",P,[r("span",null,n(o(I).homeTeamScore),1)]),r("div",k,[r("span",null,n(o(I).awayTeamScore),1)])]),A])])}}});B.__scopeId="data-v-ffdaf8bc";export{B as default};
