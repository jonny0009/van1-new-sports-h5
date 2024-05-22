import{k as a,s as e,t,o as l,q as s,u as i}from"./index.f2dd6336.js";import{z as n,G as c,s as d,u as m}from"./index.e4c434df.js";import{s as v,a6 as o,d as r,r as A,o as u,R as p,q as y,O as w,c as h,P as g,u as f,$ as D,b as I,w as T,j as k,W as b,F as B,S as _,E as L,_ as S,x as U,Y as E,Z as x,a2 as O,a0 as R,n as z}from"./vue.16414fe4.js";const Y={class:"panel"},G={class:"panel-main"},H={class:"panel-main__wrapper"},C={class:"panel-main"},J={class:"panel-main__wrapper"},V={class:"panel-main"},N={class:"panel-main__wrapper"};var Q=v({props:{matchData:{type:Object,default:()=>{}},staticsList:{type:Array,default:()=>[]},scoreList:{type:Array,default:()=>[]},anlyzeList:{type:Object,default:()=>{}}},setup(a){const e=o((()=>n((()=>import("./PanelAnalyze.7d4a22df.js")),["/assets/PanelAnalyze.7d4a22df.js","/assets/PanelAnalyze.7b1c3046.css","/assets/index.e4c434df.js","/assets/index.8edffa4e.css","/assets/vue.16414fe4.js"]))),t=o((()=>n((()=>import("./PanelScore.28139c68.js")),["/assets/PanelScore.28139c68.js","/assets/PanelScore.28e738b0.css","/assets/index.e4c434df.js","/assets/index.8edffa4e.css","/assets/vue.16414fe4.js"]))),l=o((()=>n((()=>import("./PanelStatistic.23b57c2c.js")),["/assets/PanelStatistic.23b57c2c.js","/assets/PanelStatistic.771afa01.css","/assets/vue.16414fe4.js"]))),s=r(["1","2","3"]);return(i,n)=>{const c=A("EmptyData"),d=A("van-collapse-item"),m=A("van-collapse");return u(),p("div",Y,[y(m,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=a=>s.value=a)},{default:w((()=>["{}"!==JSON.stringify(a.anlyzeList)?(u(),h(d,{key:0,name:"1",title:i.$t("live.solveAnalyse"),border:!1},{default:w((()=>[g("div",G,[g("div",H,["{}"===JSON.stringify(a.anlyzeList)?(u(),h(c,{key:0})):(u(),h(f(e),{key:1,data:a.anlyzeList,matchData:a.matchData},null,8,["data","matchData"]))])])])),_:1},8,["title"])):D("",!0),a.scoreList.length?(u(),h(d,{key:1,name:"2",title:i.$t("live.score"),border:!1},{default:w((()=>[g("div",C,[g("div",J,[0===a.scoreList.length?(u(),h(c,{key:0})):(u(),h(f(t),{key:1,"score-list":a.scoreList,matchData:a.matchData},null,8,["score-list","matchData"]))])])])),_:1},8,["title"])):D("",!0),a.staticsList.length?(u(),h(d,{key:2,name:"3",title:i.$t("live.summaryInfo"),border:!1},{default:w((()=>[g("div",V,[g("div",N,[0===a.staticsList.length?(u(),h(c,{key:0})):(u(),h(f(l),{key:1,data:a.staticsList},null,8,["data"]))])])])),_:1},8,["title"])):D("",!0)])),_:1},8,["modelValue"])])}}});Q.__scopeId="data-v-f5fa1224";const j={class:"panel"},F={class:"panel-main"},Z={class:"panel-main__wrapper"},K={class:"battle-wating"},X={class:"title"},q={class:"team-name"},M={class:"host"},P={class:"away"},W={class:"team-grid"},$={key:0,class:"team-grid__wrap"},aa={key:1,class:"team-grid__wrap"},ea={key:2,class:"team-grid__wrap"},ta={key:3,class:"team-grid__wrap"};var la=v({props:{matchData:{type:Object,default:()=>{}},firstHomeList:{type:Array,default:()=>[]},firstAwayList:{type:Array,default:()=>[]},backupHomeList:{type:Array,default:()=>[]},backupAwayList:{type:Array,default:()=>[]}},setup(e){const t=e,l=o((()=>n((()=>import("./PanelBattle.48ba5d97.js")),["/assets/PanelBattle.48ba5d97.js","/assets/PanelBattle.b4bb7c4a.css","/assets/index.e4c434df.js","/assets/index.8edffa4e.css","/assets/vue.16414fe4.js"]))),s=I((()=>t.matchData||{}));T((()=>s.value),(()=>{})),k((()=>{h()}));const i=r(["1"]),c=r([]),d=r([]),m=r([]),v=r([]),h=async()=>{const{icGidm:e,homeTeamId:l,awayTeamId:s}=t.matchData||{},i={gidm:e,homeId:l,awayId:s},n=await a(i);if(200===n.code){const{lineup:a}=n.data||{},e=(a||[]).filter((a=>a.position>0));c.value=e.filter((a=>1===parseInt(a.team_id))),d.value=e.filter((a=>2===parseInt(a.team_id)));const t=(a||[]).filter((a=>1===parseInt(a.substitute)));m.value=t.filter((a=>1===parseInt(a.team_id))),v.value=t.filter((a=>2===parseInt(a.team_id)))}};return(a,e)=>{const t=A("EmptyData"),n=A("van-collapse-item"),o=A("van-collapse");return u(),p("div",j,[y(o,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a)},{default:w((()=>[y(n,{name:"1",title:a.$t("live.navBattle"),border:!1},{default:w((()=>[g("div",F,[g("div",Z,[y(f(l),{"home-list":c.value,"away-list":d.value},null,8,["home-list","away-list"]),g("div",K,[g("h3",X,b(a.$t("live.battleWait")),1),g("div",q,[g("span",M,b(f(s).homeTeamShort),1),g("span",P,b(f(s).awayTeamShort),1)]),g("div",W,[0===m.value.length?(u(),p("section",$,[y(t,{text:a.$t("live.noDataHost")},null,8,["text"])])):(u(),p("section",aa,[(u(!0),p(B,null,_(m.value,(a=>(u(),p("div",{class:"team-grid__item",key:a.playerId},[g("span",null,b(`${a.shirtNumber} ${a.playerName}`),1)])))),128))])),0===v.value.length?(u(),p("section",ea,[y(t,{text:a.$t("live.noDataAway")},null,8,["text"])])):(u(),p("section",ta,[(u(!0),p(B,null,_(v.value,(a=>(u(),p("div",{class:"team-grid__item",key:a.playerId},[g("span",null,b(`${a.shirtNumber} ${a.playerName}`),1)])))),128))]))])])])])])),_:1},8,["title"])])),_:1},8,["modelValue"])])}}});la.__scopeId="data-v-c34c0758";const sa={class:"panel"},ia={class:"panel-main"},na={class:"panel-main__wrapper"},ca={class:"panel-recent"},da={class:"recent-header"},ma={class:"team"},va={class:"team-host"},oa={type:4,alt:""},ra={class:"team-score"},Aa={class:"team-away"},ua={type:5,alt:""},pa={class:"time"},ya=(a=>(E("data-v-e68bd802"),a=a(),x(),a))((()=>g("span",null," ",-1))),wa={class:"panel-main"},ha={class:"panel-main__wrapper"},ga={key:1,class:"panel-integral"},fa={class:"list-title list-box"},Da={class:"team"},Ia={class:"team text-overflow"};var Ta=v({props:{matchData:{type:Object,default:()=>{}},recentList:{type:Array,default:()=>[]},integralList:{type:Array,default:()=>[]}},emits:["fetchRecentEmit"],setup(a,{emit:e}){const t=a,l=I((()=>t.matchData?.homeTeamShort||t.matchData?.homeTeam)),s=I((()=>t.matchData?.awayTeamShort||t.matchData?.awayTeam)),i=r(["1","2"]),n=r(1),d=async(a=1)=>{n.value=a;const{homeTeamId:l,awayTeamId:s}=t.matchData||{},i={teamId:1===n.value?l:s,limit:5};e("fetchRecentEmit",i)},m=(a,e)=>{const t=parseFloat(a.homeTeamScore),l=parseFloat(a.awayTeamScore);return t===l?"":"home"===e?t>l?"green":"red":"away"===e?l>t?"green":"red":void 0};return(e,t)=>{const v=A("EmptyData"),o=A("van-collapse-item"),r=A("van-collapse"),D=L("img");return u(),p("div",sa,[y(r,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=a=>i.value=a)},{default:w((()=>[y(o,{name:"1",title:e.$t("live.navRecent"),border:!1},{default:w((()=>[g("div",ia,[g("div",na,[g("div",ca,[g("div",da,[g("div",{class:S(["header-item home",{active:1===n.value}]),onClick:t[0]||(t[0]=a=>d(1))},b(f(l)),3),g("div",{class:S(["header-item away",{active:2===n.value}]),onClick:t[1]||(t[1]=a=>d(2))},b(f(s)),3)]),a.recentList.length?(u(!0),p(B,{key:0},_(a.recentList,(a=>(u(),p("div",{class:"panel-recent__item",key:a.matchId},[g("div",{class:S(["bar","host",m(a,"home")])},null,2),g("section",ma,[g("div",va,[g("span",null,b(a.homeTeamAlias),1),U(g("img",oa,null,512),[[D,a.homeLogo]])]),g("div",ra,[g("span",null,b(`${a.homeTeamScore}:${a.awayTeamScore}`),1)]),g("div",Aa,[U(g("img",ua,null,512),[[D,a.awayLogo]]),g("span",null,b(a.awayTeamAlias),1)])]),g("section",pa,[g("span",null,b(f(c)(a.matchTime)),1),ya,g("span",null,"("+b(f(c)(a.matchTime,"HH:mm"))+")",1)]),g("div",{class:S(["bar","away",m(a,"away")])},null,2)])))),128)):(u(),h(v,{key:1}))])])])])),_:1},8,["title"]),y(o,{name:"2",title:e.$t("live.leaguePoints"),border:!1},{default:w((()=>[g("div",wa,[g("div",ha,[0===a.integralList.length?(u(),h(v,{key:0})):(u(),p("ul",ga,[g("li",fa,[g("div",null,b(e.$t("live.rank")),1),g("div",Da,b(e.$t("live.balls")),1),g("div",null,b(e.$t("live.win")),1),g("div",null,b(e.$t("live.tie")),1),g("div",null,b(e.$t("live.lose")),1),g("div",null,b(e.$t("live.point")),1)]),(u(!0),p(B,null,_(a.integralList,((a,e)=>(u(),p("li",{key:e,class:"list-item list-box"},[g("div",null,b(a.rank||"-"),1),g("div",Ia,b(a.teamShortName),1),g("div",null,b(a.winTime||"-"),1),g("div",null,b(a.peaceTime||"-"),1),g("div",null,b(a.loseTime||"-"),1),g("div",null,b(a.integral||"-"),1)])))),128))]))])])])),_:1},8,["title"])])),_:1},8,["modelValue"])])}}});Ta.__scopeId="data-v-e68bd802";var ka="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTADdYgDeZQDaaADcYwDcYwDbYwDcYwDcYwDcYwDcYwDcYwDcYgDfZADcYwDdYwDcYwDcYwDcYwDcY+gb5s0AAAATdFJOUwBHFwSiwz7vcvnj1rQLKZTKWIQGDvCTAAACrklEQVRIx6VX69KrIAyUOwgi6Pu/6xFUbonabw4/OtOWDcmyG2Ca0LEQzcOsjFFz4Jos08+DamH2bhih6U9Q6QbkhXfyGyr2xyHe4ZTvr4O/JE9UmhHQCDykT0WesDpDyWQxsJ1IhmsUytKCRrNpmjGwOmboRCVnSLmJKetz9gh6zvn6lJQAhbOEdZcYlm3c5+3+xyX0uHbKea1fvWuxztdF1pQ55Kr/SRbaLAHLdKyRxAjf+kJ03jil+yRpTFGbeFSda8TBHZsQ2+AJFk7uaZfJDmvBhh+nyrIfn1gW77m3zqsXvn23FpcMC3c8PIyw90s3W7p9YZeqHpepbtTkhqkxDmQ3WRp6e6mqv515aHyW0HjX0B1dx/ANsdtVChvk1VC2dB6IvcvOSc0etFY3S1YmwlhUTTEl5NJNJl0VRfHL2ltyvXhjw+S+YZ01e9CIrIdpHxINyMIBdpJwbYDpfmtajrlrw3rYvX0NF/NUv9S2ivWwYqu5UUXJQ3mo/oaysv201G0K2HpUhKMDWwWYO+3QupGBvOdWZou70z7mhdp0n/Je4fmQeDiQmkT2aB6Q9WkQztNW8TFsDq2Gs4ZhLYUneQpo+uGgRDqjSJIi2R7gsN0HC2C5kWxJ5L/5kevCSlpTYEVPMqgygkS7qDg7C8LHV/+eTxelBhj/Co5XA0ytVxx6N9atOsqXvk9l1KuzSudaXVEE2aoxLfcwTe1ssZBhsurmCGO7w9wA+l3fb2wVh0SuPqDE7qbQChZevAiQ0/6kOarG/xx6KDdip49q7I+Oz8z0m4EpuAbrVxvtanmJzLFLHB4cNCVwiWsOtnG34oilDxdXjJMhKmfPV2ZQmH/larysD3z7lmtFfnkmqHohIPanZ0LzQDEi+dN7SfQqfnug/OfT6D8fZX94Dv4DuRh1w6mQXooAAAAASUVORK5CYII=",ba="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA8BAMAAADml+XTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURUdwTPTXQ/LXRPPXQ/XWR/PXQ0nxnTIAAAAFdFJOUwDDZfMZs3VULAAAAEtJREFUOMtjYGASDkUBhgoMDCyioWgg0IGBMRQDCDCoYgoGMYhiCgYymGIKBjOEYgGjgqOCo4LDUxBrIYC1uMBasGAtgrAWVtiKNQCut4eY234apwAAAABJRU5ErkJggg==";const Ba={class:"panel"},_a={class:"panel-main"},La={class:"panel-main__wrapper"},Sa={key:0,class:"panel-scene"},Ua={class:"label"},Ea={class:"labs"},xa=["src"],Oa={key:1,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUdwTN9JRnaSx3aSx3aSx3aSx3aSx3SSx3WSxnaSx3aSx3aSx95JR3aSx3aSx99IR3aSyHeSx3aSyN9JR95JR95JR95JR99JRt5JR3aSx95JR4fZK9oAAAAZdFJOUwATJjUR+JNDXulSybnYuTJqgKeWcurbTtFGyhOZAAABhElEQVRIx+2W25KDIBBEUUAEQfCW6P7/hy5I0N2NFxhq3zJvqXik7ZmeAqH36iitELDKxRYDwszB9VBkwF9fcnwWYNjVNMthfOoCBId6DGMBhl3JGP4MdvwzA7Ym3Bx/AU9SzvOgId8cOqcv3D+GB7jbk4b3WRbwIZEZE/YoEBzWCAzPGpiqSQ4aFsnHqMHLYMjYJDJnh+kcuMiB0Qf+wP8EGwf3BHYwdfDCBYDFnrXVlskXEr5sRSsCYGl4A0/xjaiVqUkVTm+itZNmCW3CTcBjtXvA+B91mvZ2fbbbdFTB+Abfsv1vFol2N/5Ou/eI9pURQtRd+6Nnt9q75bh4hHZzTFYMle2d9nr9Vym6g6rvXldfpsK7zBEr/DA7i7Go7Tcz/OcGfq7dB6m9cJT0Z9p9kJrrbpxo92FobqfQ8HftnlURE7zHJewZHyQVN/1bXKjZw8Cjg7fFRbHXRPOEhbPHxWpnaawzKYycnQvFceqiE6t2bn0yOH3FEjtyFCNola31+xs9LEyqh1Ks+QAAAABJRU5ErkJggg==",alt:""},Ra={class:"context"},za={class:"head"},Ya={type:4,alt:""},Ga={class:"cont"};var Ha=v({props:{matchData:{type:Object,default:()=>{}}},setup(a){const t=a,l=r(["1"]),s=I((()=>d.state.match.matchInfo)),i=r([]),n=I((()=>({9:ka,18:ba,21:ba,22:ba,23:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUdwTOLi8dzn7tzl7t7l79/o8Nvl79vk7dzm7tzm7tzk7dzl7tzl7tvl7tvm7tzl7t3m7wAAANzl7lxgZCAhIgsMDMzV3URHSnl+gzU3OWtvc6ettLi/x6+2vY6UmhYYwy4AAAARdFJOUwAIR8YXET/76aJzw8ezecJwRBGPuwAAAgpJREFUSMell+m6giAQht2egFIT1NzS+7/MI5ZsDqMdvj+ZD68wMBtRBCpOSpZTSgilKSuTOLqsrHoSsWt7Is8qu4TeCk0aIsXtHH0Irx44njGBiiGLT6g4EU187F1c0B0+HSYuiQHnlqXiotKD4fFldqXduZn4Qewfe+XZtUS/fw3N5Ax9Dy1f1fT6lXFimT7fV8N5+7bhjn+lv0ozyOBtYPOy4HaHR8Dsm37Xb4PazgoJDsBi93MdC9M+rAfh2owSd+KXWmA7G+NA+Dt1oaYY1DDLbBgutq1WsV9zQ90ZTOSGV/u/hVvqT2BRrfBzd4XWhvl8Aj/XiCDaO2wpsz0wiZVndvygznUSG159tPw8jBxQj8Pl1zUnDmpGYRbl228DwwMK59EnoAYYbjCY0C9MpmVZemP+oa7HccSXTSOztrydKd2j6pwKZMHwMM8nJUzBsK9BY1rTGLlsDEa3UcIpAqMHuOZvO2E7MOo60klKBEadVrpngsFYuMjAiAmWrZBAlSGpkgEcuf4UIZOBTkNw2HuT05aGMoKnOl9a3BKgTr0w7EvIhVttwGylSwGfj/XmgVcluAg93EJHPHmyByLydiixLTQHWHjZsbgDZRwu+UZxVz4KNBAfe9xmI/mloSFoGxjSSoU1cUHtY1jjGtYyBzbrYdeEsAtK4NXocCkTP13K3Otg7r8O/gGB/8RupAzs+QAAAABJRU5ErkJggg==",30:ka}))),c=I((()=>{const{gameType:a,showtype:e}=s.value;return i.value.length>0&&"FT"===a&&"RB"==e}));return k((()=>{(async()=>{if(!t.matchData||!t.matchData.icGidm)return;const{homeTeamId:a,awayTeamId:l,icGidm:s}=t.matchData,n={gidm:s,homeId:a,awayId:l},c=await e(n);if(200===c.code){const a=c.data||{};i.value=a.events||[]}})()})),(a,e)=>{const t=A("EmptyData"),s=A("van-collapse-item"),d=A("van-collapse"),m=L("img");return u(),p("div",Ba,[y(d,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a)},{default:w((()=>[y(s,{name:"1",title:a.$t("live.navEvents"),border:!1},{default:w((()=>[g("div",_a,[g("div",La,[f(c)?(u(),p("div",Sa,[(u(!0),p(B,null,_(i.value,((a,e)=>(u(),p("div",{class:"panel-scene__item",key:e},[g("div",Ua,[g("div",Ea,[f(n)[a.typeId]?(u(),p("img",{key:0,src:f(n)[a.typeId],alt:""},null,8,xa)):(u(),p("img",Oa)),g("strong",null,b(a.time)+"’",1)])]),g("div",Ra,[g("div",za,[U(g("img",Ya,null,512),[[m,a.homeLogo]]),g("span",null,b(a.homeOrAway),1)]),g("div",Ga,[g("span",null,b(a.playerName)+" "+b(a.typeName),1)])])])))),128))])):(u(),h(t,{key:1}))])])])),_:1},8,["title"])])),_:1},8,["modelValue"])])}}});Ha.__scopeId="data-v-bd25a584";const Ca={class:"database"};var Ja=v({props:{sticky:{type:Boolean,default:!1}},setup(n){const c=O(),{t:v}=m(),o=I((()=>U.value.every((a=>!1===a.active)))),k=I((()=>d.state.match.matchInfo)),L=[{name:0,title:v("live.navSummary"),active:!1},{name:1,title:v("live.navBattle"),active:!1},{name:2,title:v("live.navRecent"),active:!1},{name:3,title:v("live.navEvents"),active:!1}],U=r([]);let E="";T((()=>k.value),(()=>{E=k.value.gameType,Y()})),T((()=>c.params.id),(a=>{a&&Y()}));const x=r(!0),Y=async()=>{U.value=[...L],"FT"===E?-1===C.value&&z((()=>{C.value=0})):"BK"===E&&-1===C.value&&z((()=>{C.value=0})),await H(),await Z(),await aa(),await sa(),await M(),await P(),x.value=!1,0===X.value.length&&0===q.value.length&&"{}"===JSON.stringify(K.value)?U.value.find((a=>0===a.name)).active=!1:U.value.find((a=>0===a.name)).active=!0,0===W.value.length&&0===ta.value.length?U.value.find((a=>2===a.name)).active=!1:U.value.find((a=>2===a.name)).active=!0},G=r(),H=async()=>{const{gidm:a,systemId:e}=k.value;if(a){const t=await l({gidm:a});if(200===t.code){const l=t.data;G.value={...l,icGidm:a,systemId:e}}}},C=r(-1),J=[Q,la,Ta,Ha],V=r([]),N=r([]),j=r([]),F=r([]),Z=async()=>{const{icGidm:e,homeTeamId:t,awayTeamId:l}=G.value||{},s={gidm:e,homeId:t,awayId:l},i=await a(s);if(200===i.code){const a=(i.data||{}).lineup||[];0===a.length?U.value.find((a=>1===a.name)).active=!1:U.value.find((a=>1===a.name)).active=!0;const e=(a||[]).filter((a=>a.position>0));V.value=e.filter((a=>1===parseInt(a.team_id))),N.value=e.filter((a=>2===parseInt(a.team_id)));const t=(a||[]).filter((a=>1===parseInt(a.substitute)));j.value=t.filter((a=>1===parseInt(a.team_id))),F.value=t.filter((a=>2===parseInt(a.team_id)))}},K=r({}),X=r([]),q=r([]),M=async()=>{if(!G.value.icGidm)return;const{homeTeamId:a,awayTeamId:t,icGidm:l}=G.value,s={gidm:l,homeId:a,awayId:t},i=await e(s);if(200===i.code){const a=i.data||{};X.value=a.statics||[],q.value=a.scores||[]}},P=async()=>{try{if(!G.value.systemId)return;const{systemId:a}=G.value,e=await s({systemId:a});if(200===e.code){const a=e.data||{};K.value=a}}catch(a){console.log(a)}},W=r([]),$=r(1),aa=async(a=1)=>{$.value=a;const{homeTeamId:e,awayTeamId:l}=G.value||{},s={teamId:1===$.value?e:l,limit:5},i=await t(s);if(200===i.code){const a=i.data||{};W.value=a.list||[]}},ea=async a=>{const e=await t(a);if(200===e.code){const a=e.data||{};W.value=a.list||[]}},ta=r([]),sa=async()=>{const{icGidm:a,homeTeamId:e,awayTeamId:t}=G.value||{},l={gidm:a,teamId:e,awayId:t},s=await i(l);200===s.code&&(ta.value=s.data||[])};return(a,e)=>{const t=A("van-tab"),l=A("van-tabs"),s=A("van-loading"),i=A("EmptyData");return u(),p("div",Ca,[y(l,{active:C.value,"onUpdate:active":e[0]||(e[0]=a=>C.value=a),scrollspy:"",shrink:"",sticky:n.sticky,"offset-top":"12.8vw",border:!1,"line-height":"0"},{default:w((()=>[(u(!0),p(B,null,_(U.value,((a,e)=>(u(),h(t,{disabled:!a.active,key:e,name:a.name},{title:w((()=>[g("div",{class:S(["tab-title",{active:a.active}])},[g("span",null,b(a.title),1)],2)])),default:w((()=>[a.active?(u(),h(R(J[a.name]),{key:0,"match-data":G.value,firstHomeList:V.value,firstAwayList:N.value,backupHomeList:j.value,backupAwayList:F.value,staticsList:X.value,scoreList:q.value,anlyzeList:K.value,recentList:W.value,integralList:ta.value,onFetchRecentEmit:ea},null,8,["match-data","firstHomeList","firstAwayList","backupHomeList","backupAwayList","staticsList","scoreList","anlyzeList","recentList","integralList"])):D("",!0)])),_:2},1032,["disabled","name"])))),128))])),_:1},8,["active","sticky"]),x.value?(u(),h(s,{key:0,class:"loading-text",size:"60px"})):f(o)?(u(),h(i,{key:1})):D("",!0)])}}});Ja.__scopeId="data-v-7183d3fa";export{Ja as _};
