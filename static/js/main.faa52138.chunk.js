(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,s){e.exports={list:"statistics_list__D7k0J",value:"statistics_value__39sCB"}},function(e,t,s){e.exports={button:"feedback_button__3bQJS",list:"feedback_list__3Mbxm",listItem:"feedback_listItem__sub6Z"}},,,,function(e,t,s){e.exports={title:"notification_title__K6_C_"}},function(e,t,s){e.exports={container:"app_container__10J8P"}},,,,,,function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(6),i=s.n(n),l=s(4),r=s(2),o=s.n(r),j=s(0),b=function(e){var t=e.good,s=e.neutral,c=e.bad,a=e.total,n=e.positivePercentage;return Object(j.jsxs)("ul",{className:o.a.list,children:[Object(j.jsxs)("li",{children:["Good: ",Object(j.jsx)("span",{className:o.a.value,children:t})]}),Object(j.jsxs)("li",{children:["Neutral: ",Object(j.jsx)("span",{className:o.a.value,children:s})]}),Object(j.jsxs)("li",{children:["Bad: ",Object(j.jsx)("span",{className:o.a.value,children:c})]}),Object(j.jsxs)("li",{children:["Total: ",Object(j.jsx)("span",{className:o.a.value,children:a})]}),Object(j.jsxs)("li",{children:["Positive feedback:"," ",Object(j.jsxs)("span",{className:o.a.value,children:[0!==a?n:0,"%"]})]})]})},d=s(3),u=s.n(d),h=function(e){var t=e.options,s=e.onLeaveFeedback;return Object(j.jsx)("ul",{className:u.a.list,children:t.map((function(e,t){return Object(j.jsx)("li",{className:u.a.listItem,children:Object(j.jsx)("button",{type:"button",className:u.a.button,onClick:function(){s[t]((function(e){return e+1}))},children:e})},e)}))})},O=function(e){var t=e.title,s=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:t}),s]})},x=s(7),_=s.n(x),f=function(e){var t=e.message;return Object(j.jsx)("h2",{className:_.a.title,children:t})},p=s(8),v=s.n(p);function m(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(0),i=Object(l.a)(n,2),r=i[0],o=i[1],d=Object(c.useState)(0),u=Object(l.a)(d,2),x=u[0],_=[a,o,u[1]],p=s+r+x,m=Math.round(s/p*100);return Object(j.jsxs)("div",{className:v.a.container,children:[Object(j.jsx)(O,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:_})}),Object(j.jsx)(O,{title:"Statistics",children:0===p?Object(j.jsx)(f,{message:"No feedback given"}):Object(j.jsx)(b,{good:s,neutral:r,bad:x,total:p,positivePercentage:m})})]})}i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.faa52138.chunk.js.map