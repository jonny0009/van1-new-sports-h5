<<<<<<<< HEAD:dist/assets/useMatch.c063f7e8.js
import{A as e,B as i}from"./index.7c141abc.js";import{g as n,o as s,b as l,t as r}from"./getScore.a9f048ac.js";import{d as t}from"./vue.5fe62a63.js";const{t:o}=e.global,u={0:"",Q1:o("live.Q1"),Q2:o("live.Q2"),Q3:o("live.Q3"),Q4:o("live.Q4"),"1h":o("live.Q1"),"2h":o("live.Q2"),"3h":o("live.Q3"),"4h":o("live.Q4"),OT:o("live.OT"),HT:o("live.HT"),H1:o("live.H1"),H2:o("live.H2"),q1:o("live.Q1"),q2:o("live.Q2"),q3:o("live.Q3"),q4:o("live.Q4"),ot:o("live.OT"),ht:o("live.HT"),h1:o("live.H1"),h2:o("live.H2")};function a(){const e=t(""),a=e=>u[e];return{BKSection:a,showRBTime:function(n={}){const{showtype:t,gameType:u,gameInfo:v,showType:p,homeTeamSuffix:c,gidm:d}=n,m=s(v,5),f=v&&v.se_now;if("RB"===t||"RB"===p){switch(u){case"FT":if(!v)return o("live.inprogress");if(((null==c?void 0:c.includes("点球"))||(null==c?void 0:c.includes("點球")))&&(v.raceType="dianqiu",v.teamSuffix="点球大战"),((null==c?void 0:c.includes("加时赛"))||(null==c?void 0:c.includes("加時賽")))&&(v.raceType="jiashi",v.teamSuffix="加时"),v.raceType){if("jiashi"===(null==v?void 0:v.raceType)&&("HT^^"===(null==v?void 0:v.re_time)||"HT"===(null==v?void 0:v.re_time)))return o("live.HT");if("jiashi"===(null==v?void 0:v.raceType)&&(null==v?void 0:v.re_time)&&new RegExp("LIVE").test(null==v?void 0:v.re_time))return o("live.pause");if("jiashi"===(null==v?void 0:v.raceType)&&(null==v?void 0:v.re_time.indexOf("^"))>-1){const[e,i]=v.re_time.split("^"),n="1H"===e?`上${i}`:`下${i}`;return`${v.teamSuffix}<span class='time-h-number'>${n}</span>`}}if("HT^^"===(null==v?void 0:v.re_time)||"HT"===(null==v?void 0:v.re_time))return o("live.HT");if((null==v?void 0:v.re_time)&&new RegExp("LIVE").test(null==v?void 0:v.re_time))return o("live.pause");if((null==v?void 0:v.re_time)&&(null==v?void 0:v.re_time.indexOf("^"))>-1){const[e,i]=v.re_time.split("^");let n="";if(i.indexOf("'")>-1){const[e]=i.split("'");n=`${e}<span class="time-h-dot">'</span>`}else n=i;return"1H"===e?`${o("live.H1")}&nbsp;<span class='time-h-Up'>${n}</span>`:`${o("live.H2")}&nbsp;<span class='time-h-d'>${n}</span>`}return(null==v?void 0:v.re_time)?v.re_time:"-:-";case"TN":if(v){const e=r(v);if(null==e?void 0:e.sciwd)return o("live.pause");const{panNum:i,score1:n,score2:s}=e;return`${i}<span>${n}${s}</span>`}return o("live.inprogress");case"BS":if(v){if(d&&d.indexOf("ic")>-1)return o("live.inprogress");const e=v?l(v):"";return`<span class="">第${v.inningNum?null==v?void 0:v.inningNum:e.se_now>0?e.se_now:e.score.num}局</span>`}return o("live.inprogress");case"BK":return"HT"===(null==v?void 0:v.se_now)||"ht"===(null==v?void 0:v.se_now)?o("live.HT"):(null==v?void 0:v.se_now.indexOf("OT"))>-1||(null==v?void 0:v.se_now.indexOf("ot"))>-1?`加时<span>${i(1e3*e.value,"mm:ss")}</span>`:f&&e?`${a(null==v?void 0:v.se_now)}&nbsp;<span>${i(1e3*e.value,"mm:ss")}</span>`:!e.value&&f?`${a(v.se_now)}&nbsp;<span>00:00</span>`:"";case"BK_AFT":if(v){if("HT"===(null==v?void 0:v.se_now)||"ht"===(null==v?void 0:v.se_now))return o("live.inprogress");if((null==v?void 0:v.se_now.indexOf("OT"))>-1||(null==v?void 0:v.se_now.indexOf("ot"))>-1)return`加时 <span>${i(1e3*v.t_count,"mm:ss")}</span>`;const e=v&&v.se_now,n=v&&+v.t_count;return e&&n?`${a(v.se_now)}&nbsp;<span>${i(1e3*v.t_count,"mm:ss")}</span>`:""}return o("live.notstarted");case"OP_TN":if(v){return(null==v?void 0:v.se_now.replace(/[^0-9]/gi,""))||""}return o("live.inprogress");case"OP_VB":return m?`第${m.scorePan.num}局`:"";case"OP_DJ":case"OP_IH":return o("live.inprogress")}return o("live.inprogress")}return o("live.notstarted")},getScore:n}}export{a as u};
========
import{P as e,Q as i}from"./index.3daf5e8c.js";import{g as n,o as s,b as l,t as r}from"./getScore.d24908d2.js";import{d as t}from"./vue.7833d4f2.js";const{t:o}=e.global,u={0:"",Q1:o("live.Q1"),Q2:o("live.Q2"),Q3:o("live.Q3"),Q4:o("live.Q4"),"1h":o("live.Q1"),"2h":o("live.Q2"),"3h":o("live.Q3"),"4h":o("live.Q4"),OT:o("live.OT"),HT:o("live.HT"),H1:o("live.H1"),H2:o("live.H2"),q1:o("live.Q1"),q2:o("live.Q2"),q3:o("live.Q3"),q4:o("live.Q4"),ot:o("live.OT"),ht:o("live.HT"),h1:o("live.H1"),h2:o("live.H2")};function a(){const e=t(""),a=e=>u[e];return{BKSection:a,showRBTime:function(n={}){const{showtype:t,gameType:u,gameInfo:v,showType:p,homeTeamSuffix:d,gidm:c}=n,m=s(v,5),f=v&&v.se_now;if("RB"===t||"RB"===p){switch(u){case"FT":if(!v)return o("live.inprogress");if(((null==d?void 0:d.includes("点球"))||(null==d?void 0:d.includes("點球")))&&(v.raceType="dianqiu",v.teamSuffix="点球大战"),((null==d?void 0:d.includes("加时赛"))||(null==d?void 0:d.includes("加時賽")))&&(v.raceType="jiashi",v.teamSuffix="加时"),v.raceType){if("jiashi"===(null==v?void 0:v.raceType)&&("HT^^"===(null==v?void 0:v.re_time)||"HT"===(null==v?void 0:v.re_time)))return o("live.HT");if("jiashi"===(null==v?void 0:v.raceType)&&(null==v?void 0:v.re_time)&&new RegExp("LIVE").test(null==v?void 0:v.re_time))return o("live.pause");if("jiashi"===(null==v?void 0:v.raceType)&&(null==v?void 0:v.re_time.indexOf("^"))>-1){const[e,i]=v.re_time.split("^"),n="1H"===e?`上${i}`:`下${i}`;return`${v.teamSuffix}<span class='time-h-number'>${n}</span>`}}if("HT^^"===(null==v?void 0:v.re_time)||"HT"===(null==v?void 0:v.re_time))return o("live.HT");if((null==v?void 0:v.re_time)&&new RegExp("LIVE").test(null==v?void 0:v.re_time))return o("live.pause");if((null==v?void 0:v.re_time)&&(null==v?void 0:v.re_time.indexOf("^"))>-1){const[e,i]=v.re_time.split("^");let n="";if(i.indexOf("'")>-1){const[e]=i.split("'");n=`${e}<span class="time-h-dot">'</span>`}else n=i;return"1H"===e?`${o("live.H1")}&nbsp;<span class='time-h-Up'>${n}</span>`:`${o("live.H2")}&nbsp;<span class='time-h-d'>${n}</span>`}return(null==v?void 0:v.re_time)?v.re_time:"-:-";case"TN":if(v){const e=r(v);if(null==e?void 0:e.sciwd)return o("live.pause");const{panNum:i,score1:n,score2:s}=e;return`${i}<span>${n}${s}</span>`}return o("live.inprogress");case"BS":if(v){if(c&&c.indexOf("ic")>-1)return o("live.inprogress");const e=v?l(v):"";return`<span class="">第${v.inningNum?null==v?void 0:v.inningNum:e.se_now>0?e.se_now:e.score.num}局</span>`}return o("live.inprogress");case"BK":return"HT"===(null==v?void 0:v.se_now)||"ht"===(null==v?void 0:v.se_now)?o("live.HT"):(null==v?void 0:v.se_now.indexOf("OT"))>-1||(null==v?void 0:v.se_now.indexOf("ot"))>-1?`加时<span>${i(1e3*e.value,"mm:ss")}</span>`:f&&e?`${a(null==v?void 0:v.se_now)}&nbsp;<span>${i(1e3*e.value,"mm:ss")}</span>`:!e.value&&f?`${a(v.se_now)}&nbsp;<span>00:00</span>`:"";case"BK_AFT":if(v){if("HT"===(null==v?void 0:v.se_now)||"ht"===(null==v?void 0:v.se_now))return o("live.inprogress");if((null==v?void 0:v.se_now.indexOf("OT"))>-1||(null==v?void 0:v.se_now.indexOf("ot"))>-1)return`加时 <span>${i(1e3*v.t_count,"mm:ss")}</span>`;const e=v&&v.se_now,n=v&&+v.t_count;return e&&n?`${a(v.se_now)}&nbsp;<span>${i(1e3*v.t_count,"mm:ss")}</span>`:""}return o("live.notstarted");case"OP_TN":if(v){return(null==v?void 0:v.se_now.replace(/[^0-9]/gi,""))||""}return o("live.inprogress");case"OP_VB":return m?`第${m.scorePan.num}局`:"";case"OP_DJ":case"OP_IH":return o("live.inprogress")}return o("live.inprogress")}return o("live.notstarted")},getScore:n}}export{a as u};
>>>>>>>> feature/setloca:dist/assets/useMatch.8942fe89.js
