import{u as a}from"./index.fd0f1937.js";import{s,b as e,E as t,o as l,S as c,P as r,V as o,u as n,x as m,Z as i,F as u,_ as d,X as p,Y as v}from"./vue.144c3097.js";const h=a=>(p("data-v-707fd320"),a=a(),v(),a),y={class:"panel-score"},f={class:"score"},g={class:"score-team"},T={class:"score-team_head"},D={class:"score-team_wrap"},_={type:4,alt:""},w={class:"score-team_wrap"},S={type:5,alt:""},L={class:"head"},b={class:"nums"},j={class:"nums"},x=h((()=>r("div",{class:"score-line"},null,-1))),C={class:"score-result"},F={class:"head"},P={class:"nums"},k={class:"nums"},A=h((()=>r("div",{class:"bot-bg"},null,-1)));var B=s({props:{scoreList:{type:Array,default:()=>[]},matchData:{type:Object,default:()=>{}}},setup(s){const p=s,{t:v}=a(),h=e((()=>p.matchData.homeTeamShort||p.matchData.homeTeam)),B=e((()=>p.matchData.awayTeamShort||p.matchData.awayTeam)),E=e((()=>{const a=["Current","Normaltime"];return p.scoreList.filter((s=>!a.includes(s.type)))})),I=e((()=>p.scoreList.find((a=>"Current"===a.type))||{})),K=e((()=>({FT:v("live.halfPlay"),BK:v("live.section")}[p.matchData.gameType]||"")));return(a,e)=>{const p=t("img");return l(),c("div",y,[r("div",f,[r("div",g,[r("div",T,o(n(K)),1),r("div",D,[m(r("img",_,null,512),[[p,s.matchData.homeLogo]]),r("span",null,o(n(h)),1)]),r("div",w,[m(r("img",S,null,512),[[p,s.matchData.awayLogo]]),r("span",null,o(n(B)),1)])]),r("div",{class:i(["score-main",n(E).length<4?"score-main-right":""])},[(l(!0),c(u,null,d(n(E),((a,s)=>(l(),c("div",{key:s,class:"score-main__item"},[r("div",L,[r("strong",null,o(s+1),1)]),r("div",b,[r("span",null,o(a.homeTeamScore),1)]),r("div",j,[r("span",null,o(a.awayTeamScore),1)])])))),128))],2),x,r("div",C,[r("div",F,[r("strong",null,o(a.$t("user.result")),1)]),r("div",P,[r("span",null,o(n(I).homeTeamScore),1)]),r("div",k,[r("span",null,o(n(I).awayTeamScore),1)])]),A])])}}});B.__scopeId="data-v-707fd320";export{B as default};
