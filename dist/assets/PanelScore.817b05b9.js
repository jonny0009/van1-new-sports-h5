import{u as a}from"./index.c8c237af.js";import{s,b as e,E as t,o as l,S as c,P as r,V as o,u as m,x as n,F as i,_ as u,X as d,Y as p}from"./vue.7833d4f2.js";const v=a=>(d("data-v-c617eaca"),a=a(),p(),a),h={class:"panel-score"},y={class:"score"},f={class:"score-team"},T={class:"score-team_head"},g={class:"score-team_wrap"},D={type:4,alt:""},_={class:"score-team_wrap"},w={type:5,alt:""},S={class:"score-main"},L={class:"head"},b={class:"nums"},j={class:"nums"},x=v((()=>r("div",{class:"score-line"},null,-1))),C={class:"score-result"},F={class:"head"},P={class:"nums"},k={class:"nums"},A=v((()=>r("div",{class:"bot-bg"},null,-1)));var B=s({props:{scoreList:{type:Array,default:()=>[]},matchData:{type:Object,default:()=>{}}},setup(s){const d=s,{t:p}=a(),v=e((()=>d.matchData.homeTeamShort||d.matchData.homeTeam)),B=e((()=>d.matchData.awayTeamShort||d.matchData.awayTeam)),E=e((()=>{const a=["Current","Normaltime"];return d.scoreList.filter((s=>!a.includes(s.type)))})),I=e((()=>d.scoreList.find((a=>"Current"===a.type))||{})),K=e((()=>({FT:p("live.halfPlay"),BK:p("live.section")}[d.matchData.gameType]||"")));return(a,e)=>{const d=t("img");return l(),c("div",h,[r("div",y,[r("div",f,[r("div",T,o(m(K)),1),r("div",g,[n(r("img",D,null,512),[[d,s.matchData.homeLogo]]),r("span",null,o(m(v)),1)]),r("div",_,[n(r("img",w,null,512),[[d,s.matchData.awayLogo]]),r("span",null,o(m(B)),1)])]),r("div",S,[(l(!0),c(i,null,u(m(E),((a,s)=>(l(),c("div",{key:s,class:"score-main__item"},[r("div",L,[r("strong",null,o(s+1),1)]),r("div",b,[r("span",null,o(a.homeTeamScore),1)]),r("div",j,[r("span",null,o(a.awayTeamScore),1)])])))),128))]),x,r("div",C,[r("div",F,[r("strong",null,o(a.$t("user.result")),1)]),r("div",P,[r("span",null,o(m(I).homeTeamScore),1)]),r("div",k,[r("span",null,o(m(I).awayTeamScore),1)])]),A])])}}});B.__scopeId="data-v-c617eaca";export{B as default};
