import{u as s}from"./index.a0c0579a.js";const c=c=>{const{t:t}=s(),_=c.se_now?+c.se_now.replace(/[^0-9]/gi,""):0;let o,r;c.sc_adv?"40"===c.sc_game_A&&"40"===c.sc_game_H?"0"===c.sc_adv?(o="A",r=+c.sc_game_H):"1"===c.sc_adv?(r="A",o=c.sc_game_A):(o=c.sc_game_A,r=c.sc_game_H):(o=c.sc_game_A,r=c.sc_game_H):"Adv"===c.sc_game_A||"A"===c.sc_game_A?(o="A",r=c.sc_game_H):"Adv"===c.sc_game_H||"A"===c.sc_game_H?(r="A",o=c.sc_game_A):(o=c.sc_game_A,r=c.sc_game_H);const n=c&&c.sc_iwd&&c.sc_iwd.trim()?JSON.parse(c.sc_iwd):"",a={sc1stA:c?+c.sc_1st_A:0,sc1stH:c?+c.sc_1st_H:0,sc2stA:c?+c.sc_2nd_A:0,sc2stH:c?+c.sc_2nd_H:0,sc3stA:c?+c.sc_3th_A:0,sc3stH:c?+c.sc_3th_H:0,sc4stA:c?+c.sc_4th_A:0,sc4stH:c?+c.sc_4th_H:0,sc5stA:c?+c.sc_5th_A:0,sc5stH:c?+c.sc_5th_H:0};let m={};const A=[];let H=1,u={scoreA:0,scoreH:0},g={};for(let s=1;s<5;s++){const c=e(s,a,u);if(A.push(c.scoreObj),!c.hasNext){H=s,u=c.scorePan,g=c.scoreJu;break}5===s&&(H=s,u=c.scorePan,g=c.scoreJu)}let h="",f="",$="",i="",b="",l="";const d=(""+(r||o?r+":"+o:"")).split(":"),p=d[0],w=d[1];return _?(h=t("home.bout",{number:_})+`${a[`sc${_}stH`]}:${a[`sc${_}stA`]}(${r||o?(r||0)+":"+(o||0):""})`,f=t("home.bout",{number:_}),$=`${a[`sc${_}stH`]||0}:${a[`sc${_}stA`]||0}`,i=`(${r||o?(r||0)+":"+(o||0):""})`,b=a[`sc${_}stH`]||0,l=a[`sc${_}stA`]||0):H&&(h=t("home.bout",{number:H})+`${a[`sc${H}stH`]||0}:${a[`sc${H}stA`]||0}(${r||o?(r||0)+":"+(o||0):""})`,f=t("home.bout",{number:H}),$=`${a[`sc${H}stH`]||0}:${a[`sc${H}stA`]||0}`,b=a[`sc${H}stH`]||0,l=a[`sc${H}stA`]||0,i=`(${r||o?(r||0)+":"+(o||0):""})`),m={scoreArr:A,currPanNum:H,sciwd:n,senow:_>0?_:H,showText:h,scorePan:u,scoreJu:g,score1:$,score2:i,score1Home:b,score1Away:l,score2Home:p,score2Away:w,panNum:f},m},e=(s,c,e)=>{const t={hasNext:!1},_=`sc${s}stA`,o=`sc${s}stH`,r=c[_],n=c[o];return r>=7||n>=7?t.hasNext=!0:6!==r&&6!==n||Math.abs(r-n)>=2&&(t.hasNext=!0),t.hasNext&&(r>n?e.scoreA+=1:e.scoreH+=1),t.scoreObj={[_]:r,[o]:n},t.scoreJu={scoreA:r,scoreH:n},t.scorePan=e,t},t=(c,e=5)=>{const{t:t}=s();if(!c)return"";const o={sc1stA:1*c.sc_1st_A||0,sc1stH:1*c.sc_1st_H||0,sc2stA:1*c.sc_2nd_A||0,sc2stH:1*c.sc_2nd_H||0,sc3stA:1*c.sc_3th_A||0,sc3stH:1*c.sc_3th_H||0,sc4stA:1*c.sc_4th_A||0,sc4stH:1*c.sc_4th_H||0,sc5stA:1*c.sc_5th_A||0,sc5stH:1*c.sc_5th_H||0,sc6stA:1*c.sc_6th_A||0,sc6stH:1*c.sc_6th_H||0,sc7stA:1*c.sc_7th_A||0,sc7stH:1*c.sc_7th_H||0,sc8stA:1*c.sc_8th_A||0,sc8stH:1*c.sc_8th_H||0,sc9stA:1*c.sc_9th_A||0,sc9stH:1*c.sc_9th_H||0,sc10stA:1*c.sc_10th_A||0,sc10stH:1*c.sc_10th_H||0};let r={};const n=[];let a=1;const m={scoreA:0,scoreH:0};let A={};for(let s=1;s<e+1;s++){const c=_(s,o,m);n.push(c.scoreObj),a=s,m.scoreA+=c.scoreJu.scoreA,m.scoreH+=c.scoreJu.scoreH,m.num=c.scorePan.num,(c.scoreJu.scoreA||c.scoreJu.scoreH)&&(A=c.scoreJu)}return m.num=c.se_now?.replace(/[^0-9]/gi,"")||null,c.inningNum&&"0"!==c.inningNum&&(m.num=c.inningNum),r={scoreArr:n,currPanNum:a,showText:t("home.set",{number:m.num})+` (${m.scoreH} : ${m.scoreA})`,scorePan:m,scoreJu:A},r},_=(s,c,e)=>{const t={},_=`sc${s}stA`,o=`sc${s}stH`,r=1*c[_],n=1*c[o];return t.scoreJu={},r>0||n>0?(t.hasNext=!0,e.num=s,t.scoreJu={scoreA:r,scoreH:n}):(e.num||(e.num=1),t.scoreJu.scoreA||(t.scoreJu={scoreA:r,scoreH:n})),t.scoreObj={[_]:r,[o]:n},t.scorePan=e,t},o=c=>{const{t:e}=s(),_={};return _.se_now=c.se_now&&"0"!==c.se_now?c.se_now.replace(/[^0-9]/gi,""):"",_.sc_half=c.sc_half?+c.sc_half?e("home.down"):e("home.up"):"",_.score=t(c,9).scorePan,_.sc_ot=c.sc_ot?+c.sc_ot:"",_.sc_fb=c.sc_fb?JSON.parse(c.sc_fb):"",_.sc_sb=c.sc_sb?JSON.parse(c.sc_sb):"",_.sc_tb=c.sc_tb?JSON.parse(c.sc_tb):"",_},r=(s,e="H")=>{if(s?.gameInfo&&("RB"===s?.showtype||"RB"===s?.showType)){let t,_;if("TN"===s?.gameType){const t=c(s?.gameInfo);return"H"===e?t.scorePan.scoreH||"0":t.scorePan.scoreA||"0"}if("BS"===s.gameType&&s.gidm.indexOf("ib")>-1){const c=o(s.gameInfo);return"H"===e?c.score.scoreH||"0":c.score.scoreA||"0"}return"FT"===s.gameType&&s.gidm.indexOf("ib")>-1&&s.homeTeamSuffix&&s.gameScene&&s.gameScene.scene&&s.gameScene.scene.score&&s.gameScene.scene.score.fullScore?"H"===e?s.gameScene.scene.score.fullScore.team1||"0":s.gameScene.scene.score.fullScore.team2||"0":"H"===e?((s.gameInfo.sc_FT_H||s.gameInfo.sc_game_H)&&(t=s.gameInfo.sc_FT_H||0),t||"0"):((s.gameInfo.sc_FT_H||s.gameInfo.sc_game_H)&&(_=s.gameInfo.sc_FT_A||s.gameInfo.sc_FT_C||0),_||"0")}};export{o as b,r as g,t as o,c as t};
