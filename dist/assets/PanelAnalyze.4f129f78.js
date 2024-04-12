import{aj as t,m as a}from"./index.957b49aa.js";import{s as e,b as s,r as o,E as l,o as n,R as i,q as A,O as r,F as u,S as c,u as b,c as d,P as R,W as C,X as g,$ as y,x as h,Y as v,Z as p}from"./vue.1f547d27.js";const B=t=>(v("data-v-066cb57f"),t=t(),p(),t),m={class:"analyze"},Q={class:"analyze-header"},z={class:"host"},U=B((()=>R("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAyBAMAAADhD+XFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTABlzQBlzQBlzQBmzgBlzQBkzgBlzgBkzQBlzQBlzQBlzQBlzQBlzW+AfNAAAAANdFJOUwCy7gmByFQmuXL235S+o/zEAAAA5UlEQVQ4y2NgAAPTu0jgogEDArDHIkvdFUaSqkaRQdbGvhdVCklbEZjvAGKyoGpjWwvmXwGxfVG1ZUGNcYBpgmtjg9lwBa7p7t1msNRcuO0OLHDmDQMGhBkgbb4INkjb2btYAVCb4V0coJlBFpfUDVzm3b17h6EKl9RyBh5cUg4MzGuxy1wyQAoAVHAT6C8j7FLKQClO7FITgFLMuthkbhugBi8SuAYOeWtsUgGQ+AoNRTczNDQBljjQAvISUmIblRqVQkmESFK+6LkOAaqwpU8IQEv3Agy4TEQpDxnMhRAyqtCUCwBJvu49thPsSAAAAABJRU5ErkJggg==",alt:""},null,-1))),w={class:"away"},k=B((()=>R("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAyBAMAAADhD+XFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTMsAKMsAKMsAKM0AKcsAKMsAJ8oAJ8sAKMwAKMsAKMwAJ8wAKM0AJssAKJsjKUMAAAAOdFJOUwC07oEGyBNZ4XL2PpQj9El57gAAAN9JREFUOMtjYACD1HdI4KEDAwKwxSFLvRNBkrqBIoOsjbcPVQpJ2yYw3wDEZEbVxr0OzH8MYtuhaquCGmMA0wTXxg6z4TFcE0zbPLjtBsyojkRw3z22Q3XkuXdYAVCb4zscIIRBDpfUQ1zmvXv3hiELl9QyBh5cUgYMbOuwyzxKQAoAVPAS6K8k7FItQClO7FITgFIsethkXjigBi8SeA4OeQ9sUgGQ+AoNRTczNHQDLHGgBeQjpMQ2KjUqhZIIkaTs0HMdAtzClj4hAC3dCzDgMvFhArIUtxBCRrUAIgYA7Q8nVfYkuT0AAAAASUVORK5CYII=",alt:""},null,-1))),G={class:"analyze-item"},D={class:"analyze-title"},E={class:"analyze-content"},K={class:"percent"},O=B((()=>R("div",{class:"bar"},null,-1))),T={key:0,class:"value"},f={class:"percent"},M=B((()=>R("div",{class:"bar"},null,-1))),j={key:0,class:"value"},x={class:"percent"},F=B((()=>R("div",{class:"bar"},null,-1))),I={key:0,class:"value"},N={class:"analyze-item"},V={class:"analyze-title"},S={class:"analyze-content"},J={class:"percent"},L=B((()=>R("div",{class:"bar"},null,-1))),Y={key:0,class:"value"},X={class:"percent"},H=B((()=>R("div",{class:"bar"},null,-1))),q={key:0,class:"value"},P={class:"percent"},Z=B((()=>R("div",{class:"bar"},null,-1))),W={key:0,class:"value"};var _=e({props:{data:{type:Array,default:()=>[]},matchData:{type:Object,default:()=>{}}},setup(e){const v=e,p=["RE","R","RM","M","ROU","OU"],B=s((()=>{const a=[],e=v.matchData.gameType,s="BK"===e?"0":"";return p.forEach((o=>{const l=v.data[o];if(l?.length){const n=window.aiRatioType[o].sort.map((t=>{const a=l.find((a=>a.ratioType===t));return a||{...l[0],betCountRate:0,betGoldRate:0,playType:o,ratioType:t}}));console.log(n,"--"),a.push({name:t({gameType:e,playType:o,session:s}),ratios:n})}})),a})),_=t=>(100*t)?.toFixed(2);return(t,s)=>{const v=o("van-swipe-item"),p=o("van-swipe"),$=l("points");return n(),i("div",m,[A(p,{"indicator-color":"#9417D5"},{default:r((()=>[(n(!0),i(u,null,c(b(B),(s=>(n(),d(v,{key:s},{default:r((()=>[R("div",Q,[R("div",z,[U,R("span",null,C(e.matchData.homeTeamShort||e.matchData.homeTeam),1)]),R("div",w,[R("span",null,C(e.matchData.awayTeamShort||e.matchData.awayTeam),1),k])]),R("div",G,[R("div",D,C(s.name)+" — "+C(t.$t("user.NumberOfBets")),1),R("div",E,[R("section",{class:"host",style:g({flex:100*s.ratios[0].betCountRate+" 1 0%"})},[R("div",K,C(_(s.ratios[0].betCountRate))+"%",1),O,2==s.ratios.length&&s.ratios[0].betCountRate>=s.ratios[1].betCountRate||3==s.ratios.length&&s.ratios[0].betCountRate>=s.ratios[1].betCountRate&&s.ratios[0].betCountRate>=s.ratios[2].betCountRate?(n(),i("div",T,[R("span",null,C(s.ratios[0].betCount),1)])):y("",!0)],4),3===s.ratios.length?(n(),i("section",{key:0,class:"draw",style:g({flex:100*s.ratios[1].betCountRate+" 1 0%"})},[R("div",f,C(_(s.ratios[1].betCountRate))+"%",1),M,s.ratios[1].betCountRate>s.ratios[0].betCountRate&&s.ratios[1].betCountRate>s.ratios[2].betCountRate?(n(),i("div",j,[R("span",null,C(s.ratios[1].betCount),1)])):y("",!0)],4)):y("",!0),R("section",{class:"away active",style:g({flex:100*s.ratios[s.ratios.length-1].betCountRate+" 1 0%"})},[R("div",x,C(_(s.ratios[s.ratios.length-1].betCountRate))+"%",1),F,2==s.ratios.length&&s.ratios[1].betCountRate>s.ratios[0].betCountRate||3==s.ratios.length&&s.ratios[2].betCountRate>=s.ratios[1].betCountRate&&s.ratios[2].betCountRate>s.ratios[0].betCountRate?(n(),i("div",I,[R("span",null,C(s.ratios[s.ratios.length-1].betCount),1)])):y("",!0)],4)])]),R("div",N,[R("div",V,C(s.name)+" — "+C(t.$t("user.BetAmount")),1),R("div",S,[R("section",{class:"host",style:g({flex:100*s.ratios[0].betGoldRate+" 1 0%"})},[R("div",J,C(_(s.ratios[0].betGoldRate))+"%",1),L,2==s.ratios.length&&s.ratios[0].betCountRate>=s.ratios[1].betCountRate||3==s.ratios.length&&s.ratios[0].betCountRate>=s.ratios[1].betCountRate&&s.ratios[0].betCountRate>=s.ratios[2].betCountRate?(n(),i("div",Y,[A(a),h(R("span",null,null,512),[[$,s.ratios[0].betGold]])])):y("",!0)],4),3===s.ratios.length?(n(),i("section",{key:0,class:"draw",style:g({flex:100*s.ratios[1].betGoldRate+" 1 0%"})},[R("div",X,C(_(s.ratios[1].betGoldRate))+"%",1),H,s.ratios[1].betCountRate>s.ratios[0].betCountRate&&s.ratios[1].betCountRate>s.ratios[2].betCountRate?(n(),i("div",q,[A(a),h(R("span",null,null,512),[[$,s.ratios[1].betGold]])])):y("",!0)],4)):y("",!0),R("section",{class:"away active",style:g({flex:100*s.ratios[s.ratios.length-1].betGoldRate+" 1 0%"})},[R("div",P,C(_(s.ratios[s.ratios.length-1].betGoldRate))+"%",1),Z,2==s.ratios.length&&s.ratios[1].betCountRate>s.ratios[0].betCountRate||3==s.ratios.length&&s.ratios[2].betCountRate>=s.ratios[1].betCountRate&&s.ratios[2].betCountRate>s.ratios[0].betCountRate?(n(),i("div",W,[A(a),h(R("span",null,null,512),[[$,s.ratios[s.ratios.length-1].betGold]])])):y("",!0)],4)])])])),_:2},1024)))),128))])),_:1})])}}});_.__scopeId="data-v-066cb57f";export{_ as default};
