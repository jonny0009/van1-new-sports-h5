import{k as a,t as e,o as t,s as l,q as s,u as i}from"./index.cf20efe0.js";import{z as n,G as c,s as d,u as m}from"./index.2daa3ef0.js";import{s as v,a6 as o,d as r,r as u,o as A,R as p,q as y,O as w,c as h,P as f,u as g,$ as D,b as I,w as T,j as k,W as b,F as B,S as L,E as _,_ as S,x as U,Y as E,Z as x,a2 as O,a0 as R,n as z}from"./vue.c62eea93.js";const Y={class:"panel"},G={class:"panel-main"},H={class:"panel-main__wrapper"},C={class:"panel-main"},J={class:"panel-main__wrapper"},V={class:"panel-main"},F={class:"panel-main__wrapper"};var N=v({props:{matchData:{type:Object,default:()=>{}},staticsList:{type:Array,default:()=>[]},scoreList:{type:Array,default:()=>[]},anlyzeList:{type:Object,default:()=>{}}},setup(a){const e=o((()=>n((()=>import("./PanelAnalyze.948df357.js")),["/assets/PanelAnalyze.948df357.js","/assets/PanelAnalyze.7b1c3046.css","/assets/index.2daa3ef0.js","/assets/index.21c3bde8.css","/assets/vue.c62eea93.js"]))),t=o((()=>n((()=>import("./PanelScore.ca822407.js")),["/assets/PanelScore.ca822407.js","/assets/PanelScore.28e738b0.css","/assets/index.2daa3ef0.js","/assets/index.21c3bde8.css","/assets/vue.c62eea93.js"]))),l=o((()=>n((()=>import("./PanelStatistic.ed8741e5.js")),["/assets/PanelStatistic.ed8741e5.js","/assets/PanelStatistic.771afa01.css","/assets/vue.c62eea93.js"]))),s=r(["1","2","3"]);return(i,n)=>{const c=u("EmptyData"),d=u("van-collapse-item"),m=u("van-collapse");return A(),p("div",Y,[y(m,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=a=>s.value=a)},{default:w((()=>["{}"!==JSON.stringify(a.anlyzeList)?(A(),h(d,{key:0,name:"1",title:i.$t("live.solveAnalyse"),border:!1},{default:w((()=>[f("div",G,[f("div",H,["{}"===JSON.stringify(a.anlyzeList)?(A(),h(c,{key:0})):(A(),h(g(e),{key:1,data:a.anlyzeList,matchData:a.matchData},null,8,["data","matchData"]))])])])),_:1},8,["title"])):D("",!0),a.scoreList.length?(A(),h(d,{key:1,name:"2",title:i.$t("live.score"),border:!1},{default:w((()=>[f("div",C,[f("div",J,[0===a.scoreList.length?(A(),h(c,{key:0})):(A(),h(g(t),{key:1,"score-list":a.scoreList,matchData:a.matchData},null,8,["score-list","matchData"]))])])])),_:1},8,["title"])):D("",!0),a.staticsList.length?(A(),h(d,{key:2,name:"3",title:i.$t("live.summaryInfo"),border:!1},{default:w((()=>[f("div",V,[f("div",F,[0===a.staticsList.length?(A(),h(c,{key:0})):(A(),h(g(l),{key:1,data:a.staticsList},null,8,["data"]))])])])),_:1},8,["title"])):D("",!0)])),_:1},8,["modelValue"])])}}});N.__scopeId="data-v-f5fa1224";const Q={class:"panel"},j={class:"panel-main"},Z={class:"panel-main__wrapper"},K={class:"battle-wating"},X={class:"title"},q={class:"team-name"},M={class:"host"},P={class:"away"},W={class:"team-grid"},$={key:0,class:"team-grid__wrap"},aa={key:1,class:"team-grid__wrap"},ea={key:2,class:"team-grid__wrap"},ta={key:3,class:"team-grid__wrap"};var la=v({props:{matchData:{type:Object,default:()=>{}},firstHomeList:{type:Array,default:()=>[]},firstAwayList:{type:Array,default:()=>[]},backupHomeList:{type:Array,default:()=>[]},backupAwayList:{type:Array,default:()=>[]}},setup(e){const t=e,l=o((()=>n((()=>import("./PanelBattle.0c45d77d.js")),["/assets/PanelBattle.0c45d77d.js","/assets/PanelBattle.6b653de2.css","/assets/index.2daa3ef0.js","/assets/index.21c3bde8.css","/assets/vue.c62eea93.js"]))),s=I((()=>t.matchData||{}));T((()=>s.value),(()=>{})),k((()=>{h()}));const i=r(["1"]),c=r([]),d=r([]),m=r([]),v=r([]),h=async()=>{const{icGidm:e,homeTeamId:l,awayTeamId:s}=t.matchData||{},i={gidm:e,homeId:l,awayId:s},n=await a(i);if(200===n.code){const{lineup:a}=n.data||{},e=(a||[]).filter((a=>a.position>0));c.value=e.filter((a=>1===parseInt(a.team_id))),d.value=e.filter((a=>2===parseInt(a.team_id)));const t=(a||[]).filter((a=>1===parseInt(a.substitute)));m.value=t.filter((a=>1===parseInt(a.team_id))),v.value=t.filter((a=>2===parseInt(a.team_id)))}};return(a,e)=>{const t=u("EmptyData"),n=u("van-collapse-item"),o=u("van-collapse");return A(),p("div",Q,[y(o,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a)},{default:w((()=>[y(n,{name:"1",title:a.$t("live.navBattle"),border:!1},{default:w((()=>[f("div",j,[f("div",Z,[y(g(l),{"home-list":c.value,"away-list":d.value},null,8,["home-list","away-list"]),f("div",K,[f("h3",X,b(a.$t("live.battleWait")),1),f("div",q,[f("span",M,b(g(s).homeTeamShort),1),f("span",P,b(g(s).awayTeamShort),1)]),f("div",W,[0===m.value.length?(A(),p("section",$,[y(t,{text:a.$t("live.noDataHost")},null,8,["text"])])):(A(),p("section",aa,[(A(!0),p(B,null,L(m.value,(a=>(A(),p("div",{class:"team-grid__item",key:a.playerId},[f("span",null,b(`${a.shirtNumber} ${a.playerName}`),1)])))),128))])),0===v.value.length?(A(),p("section",ea,[y(t,{text:a.$t("live.noDataAway")},null,8,["text"])])):(A(),p("section",ta,[(A(!0),p(B,null,L(v.value,(a=>(A(),p("div",{class:"team-grid__item",key:a.playerId},[f("span",null,b(`${a.shirtNumber} ${a.playerName}`),1)])))),128))]))])])])])])),_:1},8,["title"])])),_:1},8,["modelValue"])])}}});la.__scopeId="data-v-c34c0758";const sa={class:"panel"},ia={class:"panel-main"},na={class:"panel-main__wrapper"},ca={class:"panel-recent"},da={class:"recent-header"},ma={class:"team"},va={class:"team-host"},oa={type:4,alt:""},ra={class:"team-score"},ua={class:"team-away"},Aa={type:5,alt:""},pa={class:"time"},ya=(a=>(E("data-v-e68bd802"),a=a(),x(),a))((()=>f("span",null," ",-1))),wa={class:"panel-main"},ha={class:"panel-main__wrapper"},fa={key:1,class:"panel-integral"},ga={class:"list-title list-box"},Da={class:"team"},Ia={class:"team text-overflow"};var Ta=v({props:{matchData:{type:Object,default:()=>{}},recentList:{type:Array,default:()=>[]},integralList:{type:Array,default:()=>[]}},emits:["fetchRecentEmit"],setup(a,{emit:e}){const t=a,l=I((()=>t.matchData?.homeTeamShort||t.matchData?.homeTeam)),s=I((()=>t.matchData?.awayTeamShort||t.matchData?.awayTeam)),i=r(["1","2"]),n=r(1),d=async(a=1)=>{n.value=a;const{homeTeamId:l,awayTeamId:s}=t.matchData||{},i={teamId:1===n.value?l:s,limit:5};e("fetchRecentEmit",i)},m=(a,e)=>{const t=parseFloat(a.homeTeamScore),l=parseFloat(a.awayTeamScore);return t===l?"":"home"===e?t>l?"green":"red":"away"===e?l>t?"green":"red":void 0};return(e,t)=>{const v=u("EmptyData"),o=u("van-collapse-item"),r=u("van-collapse"),D=_("img");return A(),p("div",sa,[y(r,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=a=>i.value=a)},{default:w((()=>[y(o,{name:"1",title:e.$t("live.navRecent"),border:!1},{default:w((()=>[f("div",ia,[f("div",na,[f("div",ca,[f("div",da,[f("div",{class:S(["header-item home",{active:1===n.value}]),onClick:t[0]||(t[0]=a=>d(1))},b(g(l)),3),f("div",{class:S(["header-item away",{active:2===n.value}]),onClick:t[1]||(t[1]=a=>d(2))},b(g(s)),3)]),a.recentList.length?(A(!0),p(B,{key:0},L(a.recentList,(a=>(A(),p("div",{class:"panel-recent__item",key:a.matchId},[f("div",{class:S(["bar","host",m(a,"home")])},null,2),f("section",ma,[f("div",va,[f("span",null,b(a.homeTeamAlias),1),U(f("img",oa,null,512),[[D,a.homeLogo]])]),f("div",ra,[f("span",null,b(`${a.homeTeamScore}:${a.awayTeamScore}`),1)]),f("div",ua,[U(f("img",Aa,null,512),[[D,a.awayLogo]]),f("span",null,b(a.awayTeamAlias),1)])]),f("section",pa,[f("span",null,b(g(c)(a.matchTime)),1),ya,f("span",null,"("+b(g(c)(a.matchTime,"HH:mm"))+")",1)]),f("div",{class:S(["bar","away",m(a,"away")])},null,2)])))),128)):(A(),h(v,{key:1}))])])])])),_:1},8,["title"]),y(o,{name:"2",title:e.$t("live.leaguePoints"),border:!1},{default:w((()=>[f("div",wa,[f("div",ha,[0===a.integralList.length?(A(),h(v,{key:0})):(A(),p("ul",fa,[f("li",ga,[f("div",null,b(e.$t("live.rank")),1),f("div",Da,b(e.$t("live.balls")),1),f("div",null,b(e.$t("live.win")),1),f("div",null,b(e.$t("live.tie")),1),f("div",null,b(e.$t("live.lose")),1),f("div",null,b(e.$t("live.point")),1)]),(A(!0),p(B,null,L(a.integralList,((a,e)=>(A(),p("li",{key:e,class:"list-item list-box"},[f("div",null,b(a.rank||"-"),1),f("div",Ia,b(a.teamShortName),1),f("div",null,b(a.winTime||"-"),1),f("div",null,b(a.peaceTime||"-"),1),f("div",null,b(a.loseTime||"-"),1),f("div",null,b(a.integral||"-"),1)])))),128))]))])])])),_:1},8,["title"])])),_:1},8,["modelValue"])])}}});Ta.__scopeId="data-v-e68bd802";var ka="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTADdYgDeZQDaaADcYwDcYwDbYwDcYwDcYwDcYwDcYwDcYwDcYgDfZADcYwDdYwDcYwDcYwDcYwDcY+gb5s0AAAATdFJOUwBHFwSiwz7vcvnj1rQLKZTKWIQGDvCTAAACrklEQVRIx6VX69KrIAyUOwgi6Pu/6xFUbonabw4/OtOWDcmyG2Ca0LEQzcOsjFFz4Jos08+DamH2bhih6U9Q6QbkhXfyGyr2xyHe4ZTvr4O/JE9UmhHQCDykT0WesDpDyWQxsJ1IhmsUytKCRrNpmjGwOmboRCVnSLmJKetz9gh6zvn6lJQAhbOEdZcYlm3c5+3+xyX0uHbKea1fvWuxztdF1pQ55Kr/SRbaLAHLdKyRxAjf+kJ03jil+yRpTFGbeFSda8TBHZsQ2+AJFk7uaZfJDmvBhh+nyrIfn1gW77m3zqsXvn23FpcMC3c8PIyw90s3W7p9YZeqHpepbtTkhqkxDmQ3WRp6e6mqv515aHyW0HjX0B1dx/ANsdtVChvk1VC2dB6IvcvOSc0etFY3S1YmwlhUTTEl5NJNJl0VRfHL2ltyvXhjw+S+YZ01e9CIrIdpHxINyMIBdpJwbYDpfmtajrlrw3rYvX0NF/NUv9S2ivWwYqu5UUXJQ3mo/oaysv201G0K2HpUhKMDWwWYO+3QupGBvOdWZou70z7mhdp0n/Je4fmQeDiQmkT2aB6Q9WkQztNW8TFsDq2Gs4ZhLYUneQpo+uGgRDqjSJIi2R7gsN0HC2C5kWxJ5L/5kevCSlpTYEVPMqgygkS7qDg7C8LHV/+eTxelBhj/Co5XA0ytVxx6N9atOsqXvk9l1KuzSudaXVEE2aoxLfcwTe1ssZBhsurmCGO7w9wA+l3fb2wVh0SuPqDE7qbQChZevAiQ0/6kOarG/xx6KDdip49q7I+Oz8z0m4EpuAbrVxvtanmJzLFLHB4cNCVwiWsOtnG34oilDxdXjJMhKmfPV2ZQmH/larysD3z7lmtFfnkmqHohIPanZ0LzQDEi+dN7SfQqfnug/OfT6D8fZX94Dv4DuRh1w6mQXooAAAAASUVORK5CYII=",ba="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA8BAMAAADml+XTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURUdwTPTXQ/LXRPPXQ/XWR/PXQ0nxnTIAAAAFdFJOUwDDZfMZs3VULAAAAEtJREFUOMtjYGASDkUBhgoMDCyioWgg0IGBMRQDCDCoYgoGMYhiCgYymGIKBjOEYgGjgqOCo4LDUxBrIYC1uMBasGAtgrAWVtiKNQCut4eY234apwAAAABJRU5ErkJggg==";const Ba={class:"panel"},La={class:"panel-main"},_a={class:"panel-main__wrapper"},Sa={key:0,class:"panel-scene"},Ua={class:"label"},Ea={class:"labs"},xa=["src"],Oa={key:1,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUdwTN9JRnaSx3aSx3aSx3aSx3aSx3SSx3WSxnaSx3aSx3aSx95JR3aSx3aSx99IR3aSyHeSx3aSyN9JR95JR95JR95JR99JRt5JR3aSx95JR4fZK9oAAAAZdFJOUwATJjUR+JNDXulSybnYuTJqgKeWcurbTtFGyhOZAAABhElEQVRIx+2W25KDIBBEUUAEQfCW6P7/hy5I0N2NFxhq3zJvqXik7ZmeAqH36iitELDKxRYDwszB9VBkwF9fcnwWYNjVNMthfOoCBId6DGMBhl3JGP4MdvwzA7Ym3Bx/AU9SzvOgId8cOqcv3D+GB7jbk4b3WRbwIZEZE/YoEBzWCAzPGpiqSQ4aFsnHqMHLYMjYJDJnh+kcuMiB0Qf+wP8EGwf3BHYwdfDCBYDFnrXVlskXEr5sRSsCYGl4A0/xjaiVqUkVTm+itZNmCW3CTcBjtXvA+B91mvZ2fbbbdFTB+Abfsv1vFol2N/5Ou/eI9pURQtRd+6Nnt9q75bh4hHZzTFYMle2d9nr9Vym6g6rvXldfpsK7zBEr/DA7i7Go7Tcz/OcGfq7dB6m9cJT0Z9p9kJrrbpxo92FobqfQ8HftnlURE7zHJewZHyQVN/1bXKjZw8Cjg7fFRbHXRPOEhbPHxWpnaawzKYycnQvFceqiE6t2bn0yOH3FEjtyFCNola31+xs9LEyqh1Ks+QAAAABJRU5ErkJggg==",alt:""},Ra={class:"context"},za={class:"head"},Ya={type:4,alt:""},Ga={class:"cont"};var Ha=v({props:{matchData:{type:Object,default:()=>{}},eventsList:{type:Array,default:()=>[]}},setup(a){const e=a,t=r(["1"]),l=I((()=>d.state.match.matchInfo)),s=I((()=>({9:ka,18:ba,21:ba,22:ba,23:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUdwTOLi8dzn7tzl7t7l79/o8Nvl79vk7dzm7tzm7tzk7dzl7tzl7tvl7tvm7tzl7t3m7wAAANzl7lxgZCAhIgsMDMzV3URHSnl+gzU3OWtvc6ettLi/x6+2vY6UmhYYwy4AAAARdFJOUwAIR8YXET/76aJzw8ezecJwRBGPuwAAAgpJREFUSMell+m6giAQht2egFIT1NzS+7/MI5ZsDqMdvj+ZD68wMBtRBCpOSpZTSgilKSuTOLqsrHoSsWt7Is8qu4TeCk0aIsXtHH0Irx44njGBiiGLT6g4EU187F1c0B0+HSYuiQHnlqXiotKD4fFldqXduZn4Qewfe+XZtUS/fw3N5Ax9Dy1f1fT6lXFimT7fV8N5+7bhjn+lv0ozyOBtYPOy4HaHR8Dsm37Xb4PazgoJDsBi93MdC9M+rAfh2owSd+KXWmA7G+NA+Dt1oaYY1DDLbBgutq1WsV9zQ90ZTOSGV/u/hVvqT2BRrfBzd4XWhvl8Aj/XiCDaO2wpsz0wiZVndvygznUSG159tPw8jBxQj8Pl1zUnDmpGYRbl228DwwMK59EnoAYYbjCY0C9MpmVZemP+oa7HccSXTSOztrydKd2j6pwKZMHwMM8nJUzBsK9BY1rTGLlsDEa3UcIpAqMHuOZvO2E7MOo60klKBEadVrpngsFYuMjAiAmWrZBAlSGpkgEcuf4UIZOBTkNw2HuT05aGMoKnOl9a3BKgTr0w7EvIhVttwGylSwGfj/XmgVcluAg93EJHPHmyByLydiixLTQHWHjZsbgDZRwu+UZxVz4KNBAfe9xmI/mloSFoGxjSSoU1cUHtY1jjGtYyBzbrYdeEsAtK4NXocCkTP13K3Otg7r8O/gGB/8RupAzs+QAAAABJRU5ErkJggg==",30:ka}))),i=I((()=>{const{gameType:a,showtype:t}=l.value;return e.eventsList.length>0&&"FT"===a&&"RB"==t}));return k((()=>{})),(e,l)=>{const n=u("EmptyData"),c=u("van-collapse-item"),d=u("van-collapse"),m=_("img");return A(),p("div",Ba,[y(d,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=a=>t.value=a)},{default:w((()=>[y(c,{name:"1",title:e.$t("live.navEvents"),border:!1},{default:w((()=>[f("div",La,[f("div",_a,[g(i)?(A(),p("div",Sa,[(A(!0),p(B,null,L(a.eventsList,((a,e)=>(A(),p("div",{class:"panel-scene__item",key:e},[f("div",Ua,[f("div",Ea,[g(s)[a.typeId]?(A(),p("img",{key:0,src:g(s)[a.typeId],alt:""},null,8,xa)):(A(),p("img",Oa)),f("strong",null,b(a.time)+"’",1)])]),f("div",Ra,[f("div",za,[U(f("img",Ya,null,512),[[m,a.homeLogo]]),f("span",null,b(a.homeOrAway),1)]),f("div",Ga,[f("span",null,b(a.playerName)+" "+b(a.typeName),1)])])])))),128))])):(A(),h(n,{key:1}))])])])),_:1},8,["title"])])),_:1},8,["modelValue"])])}}});Ha.__scopeId="data-v-8679ef1c";const Ca={class:"database"};var Ja=v({props:{sticky:{type:Boolean,default:!1}},setup(n){const c=O(),{t:v}=m(),o=I((()=>U.value.every((a=>!1===a.active)))),k=I((()=>d.state.match.matchInfo)),_=[{name:0,title:v("live.navSummary"),active:!1},{name:1,title:v("live.navBattle"),active:!1},{name:2,title:v("live.navRecent"),active:!1},{name:3,title:v("live.navEvents"),active:!1}],U=r([]);let E="";T((()=>k.value),(()=>{E=k.value.gameType,Y()})),T((()=>c.params.id),(a=>{a&&Y()}));const x=r(!0),Y=async()=>{U.value=[..._],"FT"===E?-1===C.value&&z((()=>{C.value=0})):"BK"===E&&-1===C.value&&z((()=>{C.value=0})),await H(),await Z(),await ea(),await ia(),await P(),await W(),x.value=!1,0===X.value.length&&0===q.value.length&&"{}"===JSON.stringify(K.value)?U.value.find((a=>0===a.name)).active=!1:U.value.find((a=>0===a.name)).active=!0,0===$.value.length&&0===sa.value.length?U.value.find((a=>2===a.name)).active=!1:U.value.find((a=>2===a.name)).active=!0,M.value.length&&"FT"===E?U.value.find((a=>3===a.name)).active=!0:U.value.find((a=>3===a.name)).active=!1},G=r(),H=async()=>{const{gidm:a,systemId:e}=k.value;if(a){const l=await t({gidm:a});if(200===l.code){const t=l.data;G.value={...t,icGidm:a,systemId:e}}}},C=r(-1),J=[N,la,Ta,Ha],V=r([]),F=r([]),Q=r([]),j=r([]),Z=async()=>{const{icGidm:e,homeTeamId:t,awayTeamId:l}=G.value||{},s={gidm:e,homeId:t,awayId:l},i=await a(s);if(200===i.code){const a=(i.data||{}).lineup||[];0===a.length?U.value.find((a=>1===a.name)).active=!1:U.value.find((a=>1===a.name)).active=!0;const e=(a||[]).filter((a=>a.position>0));V.value=e.filter((a=>1===parseInt(a.team_id))),F.value=e.filter((a=>2===parseInt(a.team_id)));const t=(a||[]).filter((a=>1===parseInt(a.substitute)));Q.value=t.filter((a=>1===parseInt(a.team_id))),j.value=t.filter((a=>2===parseInt(a.team_id)))}},K=r({}),X=r([]),q=r([]),M=r([]),P=async()=>{if(!G.value.icGidm)return;const{homeTeamId:a,awayTeamId:e,icGidm:t}=G.value,s={gidm:t,homeId:a,awayId:e},i=await l(s);if(200===i.code){const a=i.data||{};X.value=a.statics||[],q.value=a.scores||[],M.value=a.events||[]}},W=async()=>{try{if(!G.value.systemId)return;const{systemId:a}=G.value,e=await s({systemId:a});if(200===e.code){const a=e.data||{};K.value=a}}catch(a){console.log(a)}},$=r([]),aa=r(1),ea=async(a=1)=>{aa.value=a;const{homeTeamId:t,awayTeamId:l}=G.value||{},s={teamId:1===aa.value?t:l,limit:5},i=await e(s);if(200===i.code){const a=i.data||{};$.value=a.list||[]}},ta=async a=>{const t=await e(a);if(200===t.code){const a=t.data||{};$.value=a.list||[]}},sa=r([]),ia=async()=>{const{icGidm:a,homeTeamId:e,awayTeamId:t}=G.value||{},l={gidm:a,teamId:e,awayId:t},s=await i(l);200===s.code&&(sa.value=s.data||[])};return(a,e)=>{const t=u("van-tab"),l=u("van-tabs"),s=u("van-loading"),i=u("EmptyData");return A(),p("div",Ca,[y(l,{active:C.value,"onUpdate:active":e[0]||(e[0]=a=>C.value=a),scrollspy:"",shrink:"",sticky:n.sticky,"offset-top":"12.8vw",border:!1,"line-height":"0"},{default:w((()=>[(A(!0),p(B,null,L(U.value,((a,e)=>(A(),h(t,{disabled:!a.active,key:e,name:a.name},{title:w((()=>[f("div",{class:S(["tab-title",{active:a.active}])},[f("span",null,b(a.title),1)],2)])),default:w((()=>[a.active?(A(),h(R(J[a.name]),{key:0,"match-data":G.value,firstHomeList:V.value,firstAwayList:F.value,backupHomeList:Q.value,backupAwayList:j.value,staticsList:X.value,scoreList:q.value,anlyzeList:K.value,recentList:$.value,integralList:sa.value,eventsList:M.value,onFetchRecentEmit:ta},null,8,["match-data","firstHomeList","firstAwayList","backupHomeList","backupAwayList","staticsList","scoreList","anlyzeList","recentList","integralList","eventsList"])):D("",!0)])),_:2},1032,["disabled","name"])))),128))])),_:1},8,["active","sticky"]),x.value?(A(),h(s,{key:0,class:"loading-text",size:"60px"})):g(o)?(A(),h(i,{key:1})):D("",!0)])}}});Ja.__scopeId="data-v-0f2670e2";export{Ja as _};
