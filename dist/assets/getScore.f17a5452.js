import{u as s}from"./index.e7f1c6c6.js";const c=c=>{const{t:o}=s(),t=c.se_now?+c.se_now.replace(/[^0-9]/gi,""):0;let _,r;c.sc_adv?"40"===c.sc_game_A&&"40"===c.sc_game_H?"0"===c.sc_adv?(_="A",r=+c.sc_game_H):"1"===c.sc_adv?(r="A",_=c.sc_game_A):(_=c.sc_game_A,r=c.sc_game_H):(_=c.sc_game_A,r=c.sc_game_H):"Adv"===c.sc_game_A||"A"===c.sc_game_A?(_="A",r=c.sc_game_H):"Adv"===c.sc_game_H||"A"===c.sc_game_H?(r="A",_=c.sc_game_A):(_=c.sc_game_A,r=c.sc_game_H);const n=c&&c.sc_iwd&&c.sc_iwd.trim()?JSON.parse(c.sc_iwd):"",a={sc1stA:c?+c.sc_1st_A:0,sc1stH:c?+c.sc_1st_H:0,sc2stA:c?+c.sc_2nd_A:0,sc2stH:c?+c.sc_2nd_H:0,sc3stA:c?+c.sc_3th_A:0,sc3stH:c?+c.sc_3th_H:0,sc4stA:c?+c.sc_4th_A:0,sc4stH:c?+c.sc_4th_H:0,sc5stA:c?+c.sc_5th_A:0,sc5stH:c?+c.sc_5th_H:0};let m={};const A=[];let H=1,u={scoreA:0,scoreH:0},g={};for(let s=1;s<5;s++){const c=e(s,a,u);if(A.push(c.scoreObj),!c.hasNext){H=s,u=c.scorePan,g=c.scoreJu;break}5===s&&(H=s,u=c.scorePan,g=c.scoreJu)}let h="",l="",i="",f="",$="",b="";const d=(""+(r||_?r+":"+_:"")).split(":"),p=d[0],w=d[1];return t?(h=o("home.bout",{number:t})+`${a[`sc${t}stH`]}:${a[`sc${t}stA`]}(${r||_?(r||0)+":"+(_||0):""})`,l=o("home.bout",{number:t}),i=`${a[`sc${t}stH`]||0}:${a[`sc${t}stA`]||0}`,f=`(${r||_?(r||0)+":"+(_||0):""})`,$=a[`sc${t}stH`]||0,b=a[`sc${t}stA`]||0):H&&(h=o("home.bout",{number:H})+`${a[`sc${H}stH`]||0}:${a[`sc${H}stA`]||0}(${r||_?(r||0)+":"+(_||0):""})`,l=o("home.bout",{number:H}),i=`${a[`sc${H}stH`]||0}:${a[`sc${H}stA`]||0}`,$=a[`sc${H}stH`]||0,b=a[`sc${H}stA`]||0,f=`(${r||_?(r||0)+":"+(_||0):""})`),m={scoreArr:A,currPanNum:H,sciwd:n,senow:t>0?t:H,showText:h,scorePan:u,scoreJu:g,score1:i,score2:f,score1Home:$,score1Away:b,score2Home:p,score2Away:w,panNum:l},m},e=(s,c,e)=>{const o={hasNext:!1},t=`sc${s}stA`,_=`sc${s}stH`,r=c[t],n=c[_];return r>=7||n>=7?o.hasNext=!0:6!==r&&6!==n||Math.abs(r-n)>=2&&(o.hasNext=!0),o.hasNext&&(r>n?e.scoreA+=1:e.scoreH+=1),o.scoreObj={[t]:r,[_]:n},o.scoreJu={scoreA:r,scoreH:n},o.scorePan=e,o},o=(c,e=5)=>{var o;const{t:_}=s();if(!c)return"";const r={sc1stA:1*c.sc_1st_A||0,sc1stH:1*c.sc_1st_H||0,sc2stA:1*c.sc_2nd_A||0,sc2stH:1*c.sc_2nd_H||0,sc3stA:1*c.sc_3th_A||0,sc3stH:1*c.sc_3th_H||0,sc4stA:1*c.sc_4th_A||0,sc4stH:1*c.sc_4th_H||0,sc5stA:1*c.sc_5th_A||0,sc5stH:1*c.sc_5th_H||0,sc6stA:1*c.sc_6th_A||0,sc6stH:1*c.sc_6th_H||0,sc7stA:1*c.sc_7th_A||0,sc7stH:1*c.sc_7th_H||0,sc8stA:1*c.sc_8th_A||0,sc8stH:1*c.sc_8th_H||0,sc9stA:1*c.sc_9th_A||0,sc9stH:1*c.sc_9th_H||0,sc10stA:1*c.sc_10th_A||0,sc10stH:1*c.sc_10th_H||0};let n={};const a=[];let m=1;const A={scoreA:0,scoreH:0};let H={};for(let s=1;s<e+1;s++){const c=t(s,r,A);a.push(c.scoreObj),m=s,A.scoreA+=c.scoreJu.scoreA,A.scoreH+=c.scoreJu.scoreH,A.num=c.scorePan.num,(c.scoreJu.scoreA||c.scoreJu.scoreH)&&(H=c.scoreJu)}return A.num=(null==(o=c.se_now)?void 0:o.replace(/[^0-9]/gi,""))||null,c.inningNum&&"0"!==c.inningNum&&(A.num=c.inningNum),n={scoreArr:a,currPanNum:m,showText:_("home.set",{number:A.num})+` (${A.scoreH} : ${A.scoreA})`,scorePan:A,scoreJu:H},n},t=(s,c,e)=>{const o={},t=`sc${s}stA`,_=`sc${s}stH`,r=1*c[t],n=1*c[_];return o.scoreJu={},r>0||n>0?(o.hasNext=!0,e.num=s,o.scoreJu={scoreA:r,scoreH:n}):(e.num||(e.num=1),o.scoreJu.scoreA||(o.scoreJu={scoreA:r,scoreH:n})),o.scoreObj={[t]:r,[_]:n},o.scorePan=e,o},_=c=>{const{t:e}=s(),t={};return t.se_now=c.se_now&&"0"!==c.se_now?c.se_now.replace(/[^0-9]/gi,""):"",t.sc_half=c.sc_half?+c.sc_half?e("home.down"):e("home.up"):"",t.score=o(c,9).scorePan,t.sc_ot=c.sc_ot?+c.sc_ot:"",t.sc_fb=c.sc_fb?JSON.parse(c.sc_fb):"",t.sc_sb=c.sc_sb?JSON.parse(c.sc_sb):"",t.sc_tb=c.sc_tb?JSON.parse(c.sc_tb):"",t},r=(s,e="H")=>{if((null==s?void 0:s.gameInfo)&&("RB"===(null==s?void 0:s.showtype)||"RB"===(null==s?void 0:s.showType))){let o,t;if("TN"===(null==s?void 0:s.gameType)){const o=c(null==s?void 0:s.gameInfo);return"H"===e?o.scorePan.scoreH||"0":o.scorePan.scoreA||"0"}if("BS"===s.gameType&&s.gidm.indexOf("ib")>-1){const c=_(s.gameInfo);return"H"===e?c.score.scoreH||"0":c.score.scoreA||"0"}return"FT"===s.gameType&&s.gidm.indexOf("ib")>-1&&s.homeTeamSuffix&&s.gameScene&&s.gameScene.scene&&s.gameScene.scene.score&&s.gameScene.scene.score.fullScore?"H"===e?s.gameScene.scene.score.fullScore.team1||"0":s.gameScene.scene.score.fullScore.team2||"0":"H"===e?((s.gameInfo.sc_FT_H||s.gameInfo.sc_game_H)&&(o=s.gameInfo.sc_FT_H||0),o||"0"):((s.gameInfo.sc_FT_H||s.gameInfo.sc_game_H)&&(t=s.gameInfo.sc_FT_A||s.gameInfo.sc_FT_C||0),t||"0")}};export{_ as b,r as g,o,c as t};
