import{u as s,P as e,Q as c}from"./index.ec7f69b4.js";import{d as n}from"./vue.6c3ce548.js";const t=e=>{const{t:c}=s(),n=e.se_now?+e.se_now.replace(/[^0-9]/gi,""):0;let t,r;e.sc_adv?"40"===e.sc_game_A&&"40"===e.sc_game_H?"0"===e.sc_adv?(t="A",r=+e.sc_game_H):"1"===e.sc_adv?(r="A",t=e.sc_game_A):(t=e.sc_game_A,r=e.sc_game_H):(t=e.sc_game_A,r=e.sc_game_H):"Adv"===e.sc_game_A||"A"===e.sc_game_A?(t="A",r=e.sc_game_H):"Adv"===e.sc_game_H||"A"===e.sc_game_H?(r="A",t=e.sc_game_A):(t=e.sc_game_A,r=e.sc_game_H);const i=e&&e.sc_iwd&&e.sc_iwd.trim()?JSON.parse(e.sc_iwd):"",_={sc1stA:e?+e.sc_1st_A:0,sc1stH:e?+e.sc_1st_H:0,sc2stA:e?+e.sc_2nd_A:0,sc2stH:e?+e.sc_2nd_H:0,sc3stA:e?+e.sc_3th_A:0,sc3stH:e?+e.sc_3th_H:0,sc4stA:e?+e.sc_4th_A:0,sc4stH:e?+e.sc_4th_H:0,sc5stA:e?+e.sc_5th_A:0,sc5stH:e?+e.sc_5th_H:0};let l={};const a=[];let u=1,m={scoreA:0,scoreH:0},H={};for(let s=1;s<5;s++){const e=o(s,_,m);if(a.push(e.scoreObj),!e.hasNext){u=s,m=e.scorePan,H=e.scoreJu;break}5===s&&(u=s,m=e.scorePan,H=e.scoreJu)}let v="",d="",A="",f="",p="",h="";const g=(""+(r||t?r+":"+t:"")).split(":"),$=g[0],T=g[1];return n?(v=c("home.bout",{number:n})+`${_[`sc${n}stH`]}:${_[`sc${n}stA`]}(${r||t?(r||0)+":"+(t||0):""})`,d=c("home.bout",{number:n}),A=`${_[`sc${n}stH`]||0}:${_[`sc${n}stA`]||0}`,f=`(${r||t?(r||0)+":"+(t||0):""})`,p=_[`sc${n}stH`]||0,h=_[`sc${n}stA`]||0):u&&(v=c("home.bout",{number:u})+`${_[`sc${u}stH`]||0}:${_[`sc${u}stA`]||0}(${r||t?(r||0)+":"+(t||0):""})`,d=c("home.bout",{number:u}),A=`${_[`sc${u}stH`]||0}:${_[`sc${u}stA`]||0}`,p=_[`sc${u}stH`]||0,h=_[`sc${u}stA`]||0,f=`(${r||t?(r||0)+":"+(t||0):""})`),l={scoreArr:a,currPanNum:u,sciwd:i,senow:n>0?n:u,showText:v,scorePan:m,scoreJu:H,score1:A,score2:f,score1Home:p,score1Away:h,score2Home:$,score2Away:T,panNum:d},l},o=(s,e,c)=>{const n={hasNext:!1},t=`sc${s}stA`,o=`sc${s}stH`,r=e[t],i=e[o];return r>=7||i>=7?n.hasNext=!0:6!==r&&6!==i||Math.abs(r-i)>=2&&(n.hasNext=!0),n.hasNext&&(r>i?c.scoreA+=1:c.scoreH+=1),n.scoreObj={[t]:r,[o]:i},n.scoreJu={scoreA:r,scoreH:i},n.scorePan=c,n},r=(e,c=5)=>{var n;const{t:t}=s();if(!e)return"";const o={sc1stA:1*e.sc_1st_A||0,sc1stH:1*e.sc_1st_H||0,sc2stA:1*e.sc_2nd_A||0,sc2stH:1*e.sc_2nd_H||0,sc3stA:1*e.sc_3th_A||0,sc3stH:1*e.sc_3th_H||0,sc4stA:1*e.sc_4th_A||0,sc4stH:1*e.sc_4th_H||0,sc5stA:1*e.sc_5th_A||0,sc5stH:1*e.sc_5th_H||0,sc6stA:1*e.sc_6th_A||0,sc6stH:1*e.sc_6th_H||0,sc7stA:1*e.sc_7th_A||0,sc7stH:1*e.sc_7th_H||0,sc8stA:1*e.sc_8th_A||0,sc8stH:1*e.sc_8th_H||0,sc9stA:1*e.sc_9th_A||0,sc9stH:1*e.sc_9th_H||0,sc10stA:1*e.sc_10th_A||0,sc10stH:1*e.sc_10th_H||0};let r={};const _=[];let l=1;const a={scoreA:0,scoreH:0};let u={};for(let s=1;s<c+1;s++){const e=i(s,o,a);_.push(e.scoreObj),l=s,a.scoreA+=e.scoreJu.scoreA,a.scoreH+=e.scoreJu.scoreH,a.num=e.scorePan.num,(e.scoreJu.scoreA||e.scoreJu.scoreH)&&(u=e.scoreJu)}return a.num=(null==(n=e.se_now)?void 0:n.replace(/[^0-9]/gi,""))||null,e.inningNum&&"0"!==e.inningNum&&(a.num=e.inningNum),r={scoreArr:_,currPanNum:l,showText:t("home.set",{number:a.num})+` (${a.scoreH} : ${a.scoreA})`,scorePan:a,scoreJu:u},r},i=(s,e,c)=>{const n={},t=`sc${s}stA`,o=`sc${s}stH`,r=1*e[t],i=1*e[o];return n.scoreJu={},r>0||i>0?(n.hasNext=!0,c.num=s,n.scoreJu={scoreA:r,scoreH:i}):(c.num||(c.num=1),n.scoreJu.scoreA||(n.scoreJu={scoreA:r,scoreH:i})),n.scoreObj={[t]:r,[o]:i},n.scorePan=c,n},_=e=>{const{t:c}=s(),n={};return n.se_now=e.se_now&&"0"!==e.se_now?e.se_now.replace(/[^0-9]/gi,""):"",n.sc_half=e.sc_half?+e.sc_half?c("home.down"):c("home.up"):"",n.score=r(e,9).scorePan,n.sc_ot=e.sc_ot?+e.sc_ot:"",n.sc_fb=e.sc_fb?JSON.parse(e.sc_fb):"",n.sc_sb=e.sc_sb?JSON.parse(e.sc_sb):"",n.sc_tb=e.sc_tb?JSON.parse(e.sc_tb):"",n},l=(s,e="H")=>{if((null==s?void 0:s.gameInfo)&&("RB"===(null==s?void 0:s.showtype)||"RB"===(null==s?void 0:s.showType))){let c,n;if("TN"===(null==s?void 0:s.gameType)){const c=t(null==s?void 0:s.gameInfo);return"H"===e?c.scorePan.scoreH||"0":c.scorePan.scoreA||"0"}if("BS"===s.gameType&&s.gidm.indexOf("ib")>-1){const c=_(s.gameInfo);return"H"===e?c.score.scoreH||"0":c.score.scoreA||"0"}return"FT"===s.gameType&&s.gidm.indexOf("ib")>-1&&s.homeTeamSuffix&&s.gameScene&&s.gameScene.scene&&s.gameScene.scene.score&&s.gameScene.scene.score.fullScore?"H"===e?s.gameScene.scene.score.fullScore.team1||"0":s.gameScene.scene.score.fullScore.team2||"0":"H"===e?((s.gameInfo.sc_FT_H||s.gameInfo.sc_game_H)&&(c=s.gameInfo.sc_FT_H||0),c||"0"):((s.gameInfo.sc_FT_H||s.gameInfo.sc_game_H)&&(n=s.gameInfo.sc_FT_A||s.gameInfo.sc_FT_C||0),n||"0")}},{t:a}=e.global,u={0:"",Q1:a("live.Q1"),Q2:a("live.Q2"),Q3:a("live.Q3"),Q4:a("live.Q4"),"1h":a("live.Q1"),"2h":a("live.Q2"),"3h":a("live.Q3"),"4h":a("live.Q4"),OT:a("live.OT"),HT:a("live.HT"),H1:a("live.H1"),H2:a("live.H2"),q1:a("live.Q1"),q2:a("live.Q2"),q3:a("live.Q3"),q4:a("live.Q4"),ot:a("live.OT"),ht:a("live.HT"),h1:a("live.H1"),h2:a("live.H2")};function m(){const s=n(""),e=s=>u[s];return{BKSection:e,showRBTime:function(n={}){const{showtype:o,gameType:i,gameInfo:l,showType:u,homeTeamSuffix:m,gidm:H}=n,v=r(l,5),d=l&&l.se_now;if("RB"===o||"RB"===u){switch(i){case"FT":if(!l)return a("live.inprogress");if(((null==m?void 0:m.includes("点球"))||(null==m?void 0:m.includes("點球")))&&(l.raceType="dianqiu",l.teamSuffix="点球大战"),((null==m?void 0:m.includes("加时赛"))||(null==m?void 0:m.includes("加時賽")))&&(l.raceType="jiashi",l.teamSuffix="加时"),l.raceType){if("jiashi"===(null==l?void 0:l.raceType)&&("HT^^"===(null==l?void 0:l.re_time)||"HT"===(null==l?void 0:l.re_time)))return a("live.HT");if("jiashi"===(null==l?void 0:l.raceType)&&(null==l?void 0:l.re_time)&&new RegExp("LIVE").test(null==l?void 0:l.re_time))return a("live.pause");if("jiashi"===(null==l?void 0:l.raceType)&&(null==l?void 0:l.re_time.indexOf("^"))>-1){const[s,e]=l.re_time.split("^"),c="1H"===s?`上${e}`:`下${e}`;return`${l.teamSuffix}<span class='time-h-number'>${c}</span>`}}if("HT^^"===(null==l?void 0:l.re_time)||"HT"===(null==l?void 0:l.re_time))return a("live.HT");if((null==l?void 0:l.re_time)&&new RegExp("LIVE").test(null==l?void 0:l.re_time))return a("live.pause");if((null==l?void 0:l.re_time)&&(null==l?void 0:l.re_time.indexOf("^"))>-1){const[s,e]=l.re_time.split("^");let c="";if(e.indexOf("'")>-1){const[s]=e.split("'");c=`${s}<span class="time-h-dot">'</span>`}else c=e;return"1H"===s?`${a("live.H1")}<span class='time-h-Up'>${c}</span>`:`${a("live.H2")}<span class='time-h-d'>${c}</span>`}return(null==l?void 0:l.re_time)?l.re_time:"-:-";case"TN":if(l){const s=t(l);if(null==s?void 0:s.sciwd)return a("live.pause");const{panNum:e,score1:c,score2:n}=s;return`${e}<span>${c}${n}</span>`}return a("live.inprogress");case"BS":if(l){if(H&&H.indexOf("ic")>-1)return a("live.inprogress");const s=l?_(l):"";return`<span class="">第${l.inningNum?null==l?void 0:l.inningNum:s.se_now>0?s.se_now:s.score.num}局</span>`}return a("live.inprogress");case"BK":return"HT"===(null==l?void 0:l.se_now)||"ht"===(null==l?void 0:l.se_now)?a("live.HT"):(null==l?void 0:l.se_now.indexOf("OT"))>-1||(null==l?void 0:l.se_now.indexOf("ot"))>-1?`加时<span>${c(1e3*s.value,"mm:ss")}</span>`:d&&s?`${e(null==l?void 0:l.se_now)}<span>${c(1e3*s.value,"mm:ss")}</span>`:!s.value&&d?`${e(l.se_now)}<span>00:00</span>`:"";case"BK_AFT":if(l){if("HT"===(null==l?void 0:l.se_now)||"ht"===(null==l?void 0:l.se_now))return a("live.inprogress");if((null==l?void 0:l.se_now.indexOf("OT"))>-1||(null==l?void 0:l.se_now.indexOf("ot"))>-1)return`加时 <span>${c(1e3*l.t_count,"mm:ss")}</span>`;const s=l&&l.se_now,n=l&&+l.t_count;return s&&n?`${e(l.se_now)}<span>${c(1e3*l.t_count,"mm:ss")}</span>`:""}return a("live.notstarted");case"OP_TN":if(l){return(null==l?void 0:l.se_now.replace(/[^0-9]/gi,""))||""}return a("live.inprogress");case"OP_VB":return v?`第${v.scorePan.num}局`:"";case"OP_DJ":case"OP_IH":return a("live.inprogress")}return a("live.inprogress")}return a("live.notstarted")},getScore:l}}export{_ as b,l as g,r as o,t,m as u};
