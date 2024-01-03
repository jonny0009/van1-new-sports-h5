import{U as e,W as i,j as n}from"./index.59405184.js";import{g as s,o as l,b as t,t as r}from"./getScore.0eae021b.js";import{d as a}from"./vue.93da156d.js";const{t:o}=e.global,u={0:"",Q1:o("live.Q1"),Q2:o("live.Q2"),Q3:o("live.Q3"),Q4:o("live.Q4"),"1h":o("live.Q1"),"2h":o("live.Q2"),"3h":o("live.Q3"),"4h":o("live.Q4"),OT:o("live.OT"),HT:o("live.HT"),H1:o("live.H1"),H2:o("live.H2"),q1:o("live.Q1"),q2:o("live.Q2"),q3:o("live.Q3"),q4:o("live.Q4"),ot:o("live.OT"),ht:o("live.HT"),h1:o("live.H1"),h2:o("live.H2")};function m(){const e=a(""),n=e=>u[e];return{BKSection:n,showRBTime:function(s={}){const{showtype:a,gameType:u,gameInfo:m,showType:v,homeTeamSuffix:d,gidm:p}=s,c=l(m,5),f=m&&m.se_now;if("RB"===a||"RB"===v){switch(u){case"FT":if(!m)return o("live.inprogress");if(((null==d?void 0:d.includes("点球"))||(null==d?void 0:d.includes("點球")))&&(m.raceType="dianqiu",m.teamSuffix="点球大战"),((null==d?void 0:d.includes("加时赛"))||(null==d?void 0:d.includes("加時賽")))&&(m.raceType="jiashi",m.teamSuffix="加时"),m.raceType){if("jiashi"===(null==m?void 0:m.raceType)&&("HT^^"===(null==m?void 0:m.re_time)||"HT"===(null==m?void 0:m.re_time)))return o("live.HT");if("jiashi"===(null==m?void 0:m.raceType)&&(null==m?void 0:m.re_time)&&new RegExp("LIVE").test(null==m?void 0:m.re_time))return o("live.pause");if("jiashi"===(null==m?void 0:m.raceType)&&(null==m?void 0:m.re_time.indexOf("^"))>-1){const[e,i]=m.re_time.split("^"),n="1H"===e?`上${i}`:`下${i}`;return`${m.teamSuffix}<span class='time-h-number'>${n}</span>`}}if("HT^^"===(null==m?void 0:m.re_time)||"HT"===(null==m?void 0:m.re_time))return o("live.HT");if((null==m?void 0:m.re_time)&&new RegExp("LIVE").test(null==m?void 0:m.re_time))return o("live.pause");if((null==m?void 0:m.re_time)&&(null==m?void 0:m.re_time.indexOf("^"))>-1){const[e,i]=m.re_time.split("^");let n="";if(i.indexOf("'")>-1){const[e]=i.split("'");n=`${e}<span class="time-h-dot">'</span>`}else n=i;return"1H"===e?`${o("live.H1")}<span class='time-h-Up'>${n}</span>`:`${o("live.H2")}<span class='time-h-d'>${n}</span>`}return(null==m?void 0:m.re_time)?m.re_time:"-:-";case"TN":if(m){const e=r(m);if(null==e?void 0:e.sciwd)return o("live.pause");const{panNum:i,score1:n,score2:s}=e;return`${i}<span>${n}${s}</span>`}return o("live.inprogress");case"BS":if(m){if(p&&p.indexOf("ic")>-1)return o("live.inprogress");const e=m?t(m):"";return`<span class="">第${m.inningNum?null==m?void 0:m.inningNum:e.se_now>0?e.se_now:e.score.num}局</span>`}return o("live.inprogress");case"BK":return"HT"===(null==m?void 0:m.se_now)||"ht"===(null==m?void 0:m.se_now)?o("live.HT"):(null==m?void 0:m.se_now.indexOf("OT"))>-1||(null==m?void 0:m.se_now.indexOf("ot"))>-1?`加时<span>${i(1e3*e.value,"mm:ss")}</span>`:f&&e?`${n(null==m?void 0:m.se_now)}<span>${i(1e3*e.value,"mm:ss")}</span>`:!e.value&&f?`${n(m.se_now)}<span>00:00</span>`:"";case"BK_AFT":if(m){if("HT"===(null==m?void 0:m.se_now)||"ht"===(null==m?void 0:m.se_now))return o("live.inprogress");if((null==m?void 0:m.se_now.indexOf("OT"))>-1||(null==m?void 0:m.se_now.indexOf("ot"))>-1)return`加时 <span>${i(1e3*m.t_count,"mm:ss")}</span>`;const e=m&&m.se_now,s=m&&+m.t_count;return e&&s?`${n(m.se_now)}<span>${i(1e3*m.t_count,"mm:ss")}</span>`:""}return o("live.notstarted");case"OP_TN":if(m){return(null==m?void 0:m.se_now.replace(/[^0-9]/gi,""))||""}return o("live.inprogress");case"OP_VB":return c?`第${c.scorePan.num}局`:"";case"OP_DJ":case"OP_IH":return o("live.inprogress")}return o("live.inprogress")}return o("live.notstarted")},getScore:s}}const v=e=>n({url:"/ai/mobile/game/anchorLiveList",method:"get",params:e}),d=e=>n({url:"/ai/mobile/detail/matches",method:"get",params:e}),p=e=>n({url:"/ai/mobile/detail/extend",method:"get",params:e}),c=e=>n({url:"/ai/mobile/detail/playGroup",method:"get",params:e}),f=e=>n({url:"/ai/mobile/detail/betRecordAll",method:"get",params:e}),_=e=>n({url:"/ai/mobile/detail/betRecord",method:"get",params:e}),h=e=>n({url:"/ai/mobile/game/rbLiveList",method:"get",params:e}),g=e=>n({url:"/chat/intoRoom",method:"get",params:e}),T=e=>n({url:"/chat/findAllLastMessageByPage",method:"get",params:e});export{v as a,_ as b,f as c,p as e,g as i,T as l,d as m,c as p,h as r,m as u};
