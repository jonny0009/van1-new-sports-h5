import{m as e,E as s}from"./index.ccbc53c0.js";import{g as i,o as n,b as r,t}from"./getScore.bc640a80.js";import{d as a}from"./vue.1f547d27.js";const{t:o}=e.global,p={0:"",Q1:o("live.Q1"),Q2:o("live.Q2"),Q3:o("live.Q3"),Q4:o("live.Q4"),"1h":o("live.Q1"),"2h":o("live.Q2"),"3h":o("live.Q3"),"4h":o("live.Q4"),OT:o("live.OT"),HT:o("live.HT"),H1:o("live.H1"),H2:o("live.H2"),q1:o("live.Q1"),q2:o("live.Q2"),q3:o("live.Q3"),q4:o("live.Q4"),ot:o("live.OT"),ht:o("live.HT"),h1:o("live.H1"),h2:o("live.H2")};function l(){const e=a(""),l=e=>p[e];return{BKSection:l,showRBTime:function(i={}){const{showtype:a,gameType:p,gameInfo:c,showType:u,homeTeamSuffix:m,gidm:v}=i,f=n(c,5),_=c&&c.se_now;if("RB"===a||"RB"===u){switch(p){case"FT":if(!c)return o("live.inprogress");if((m?.includes("点球")||m?.includes("點球"))&&(c.raceType="dianqiu",c.teamSuffix="点球大战"),(m?.includes("加时赛")||m?.includes("加時賽"))&&(c.raceType="jiashi",c.teamSuffix="加时"),c.raceType){if("jiashi"===c?.raceType&&("HT^^"===c?.re_time||"HT"===c?.re_time))return o("live.HT");if("jiashi"===c?.raceType&&c?.re_time&&new RegExp("LIVE").test(c?.re_time))return o("live.pause");if("jiashi"===c?.raceType&&c?.re_time.indexOf("^")>-1){const[e,s]=c.re_time.split("^"),i="1H"===e?`上${s}`:`下${s}`;return`${c.teamSuffix}<span class='time-h-number'>${i}</span>`}}if("HT^^"===c?.re_time||"HT"===c?.re_time)return o("live.HT");if(c?.re_time&&new RegExp("LIVE").test(c?.re_time))return o("live.pause");if(c?.re_time&&c?.re_time.indexOf("^")>-1){const[e,s]=c.re_time.split("^");let i="";if(s.indexOf("'")>-1){const[e]=s.split("'");i=`${e}<span class="time-h-dot">'</span>`}else i=s;return"1H"===e?`${o("live.H1")}&nbsp;<span class='time-h-Up'>${i}</span>`:`${o("live.H2")}&nbsp;<span class='time-h-d'>${i}</span>`}return c?.re_time?c.re_time:"-:-";case"TN":if(c){const e=t(c);if(e?.sciwd)return o("live.pause");const{panNum:s,score1:i,score2:n}=e;return`${s}<span>${i}${n}</span>`}return o("live.inprogress");case"BS":if(c){if(v&&v.indexOf("ic")>-1)return o("live.inprogress");const e=c?r(c):"";return`<span class="">第${c.inningNum?c?.inningNum:e.se_now>0?e.se_now:e.score.num}局</span>`}return o("live.inprogress");case"BK":return"HT"===c?.se_now||"ht"===c?.se_now?o("live.HT"):c?.se_now.indexOf("OT")>-1||c?.se_now.indexOf("ot")>-1?`加时<span>${s(1e3*e.value,"mm:ss")}</span>`:_&&e?`${l(c?.se_now)}&nbsp;<span>${s(1e3*e.value,"mm:ss")}</span>`:!e.value&&_?`${l(c.se_now)}&nbsp;<span>00:00</span>`:"";case"BK_AFT":if(c){if("HT"===c?.se_now||"ht"===c?.se_now)return o("live.inprogress");if(c?.se_now.indexOf("OT")>-1||c?.se_now.indexOf("ot")>-1)return`加时 <span>${s(1e3*c.t_count,"mm:ss")}</span>`;const e=c&&c.se_now,i=c&&+c.t_count;return e&&i?`${l(c.se_now)}&nbsp;<span>${s(1e3*c.t_count,"mm:ss")}</span>`:""}return o("live.notstarted");case"OP_TN":if(c){return c?.se_now.replace(/[^0-9]/gi,"")||""}return o("live.inprogress");case"OP_VB":return f?`第${f.scorePan.num}局`:"";case"OP_DJ":case"OP_IH":return o("live.inprogress")}return o("live.inprogress")}return o("live.notstarted")},getScore:i}}export{l as u};
