import{s}from"./index.470b35b1.js";import{u as a}from"./useMatch.1fa76435.js";import{s as e,b as l,E as r,o as n,S as o,P as t,u as c,x as m,V as i,F as u,Z as d,X as p,Y as v}from"./vue.9399d1f0.js";const b=s=>(p("data-v-242a2e32"),s=s(),v(),s),h={class:"panel-score"},y={class:"score"},T={class:"score-team"},f={class:"score-team_head"},g=["innerHTML"],w={class:"score-team_wrap"},L={type:4,alt:""},S={class:"score-team_wrap"},_={type:5,alt:""},A={class:"score-main"},$={class:"head"},j={class:"nums"},x={class:"nums"},M={class:"score-result"},C=b((()=>t("div",{class:"head"},[t("strong",null,"结果")],-1))),H={class:"nums"},I={class:"nums"},k=b((()=>t("div",{class:"bot-bg"},null,-1))),B={class:"footer"},E={class:"left"},F=b((()=>t("span",null," ",-1)));var N=e({props:{scoreList:{type:Array,default:()=>[]}},setup(e){const p=e,v=a(),b=l((()=>s.state.match.matchInfo)),N=l((()=>{const s=["Current","Normaltime"];return p.scoreList.filter((a=>!s.includes(a.type)))})),P=l((()=>p.scoreList.find((s=>"Current"===s.type))||{}));return(s,a)=>{const e=r("img");return n(),o("div",h,[t("div",y,[t("div",T,[t("div",f,[t("span",{innerHTML:c(v).showRBTime(c(b))},null,8,g)]),t("div",w,[m(t("img",L,null,512),[[e,c(b).homeLogo]]),t("span",null,i(c(b).homeTeamAbbr),1)]),t("div",S,[m(t("img",_,null,512),[[e,c(b).awayLogo]]),t("span",null,i(c(b).awayTeamAbbr),1)])]),t("div",A,[(n(!0),o(u,null,d(c(N),((s,a)=>(n(),o("div",{class:"score-main__item",key:a},[t("div",$,[t("strong",null,i(a+1),1)]),t("div",j,[t("span",null,i(s.homeTeamScore),1)]),t("div",x,[t("span",null,i(s.awayTeamScore),1)])])))),128))]),t("div",M,[C,t("div",H,[t("span",null,i(c(P).homeTeamScore),1)]),t("div",I,[t("span",null,i(c(P).awayTeamScore),1)])]),k]),t("div",B,[t("div",E,[t("strong",null,i(`${c(P).homeTeamScore} : ${c(P).awayTeamScore}`),1),F,t("strong",null,i(`${c(b).homeTeamAbbr} vs ${c(b).awayTeamAbbr}`),1)])])])}}});N.__scopeId="data-v-242a2e32";export{N as default};
