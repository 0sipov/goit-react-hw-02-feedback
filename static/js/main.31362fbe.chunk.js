(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(5),i=n.n(a),s=n(4),r=n(6),d=n(7),b=n(11),u=n(10),p=(n(16),n(8)),l=n.n(p),f=n(0),j=function(e){var t=e.title,n=e.children;return Object(f.jsxs)("section",{className:l.a.feedback,children:[Object(f.jsx)("h2",{children:t}),n]})},k=n(9),h=n.n(k),O=function(e){var t=e.message;return Object(f.jsx)("p",{children:t})},v=function(e){var t=e.options,n=e.total,o=e.countTotalFeedback,c=e.positivePercentage;return Object(f.jsxs)("div",{className:h.a.Statistics,children:[Object(f.jsx)("h2",{children:"Statistics"}),o()>0?Object(f.jsxs)(f.Fragment,{children:[t.map((function(e){return Object(f.jsxs)("p",{children:[e.option[0].toUpperCase()+e.option.slice(1),":"," ",e.feedbacks]},e.option)})),Object(f.jsxs)("p",{children:["Total: ",n," "]}),Object(f.jsxs)("p",{children:["Positive feedback: ",c,"%"]})]}):Object(f.jsx)(O,{message:"No feedback given"})]})},x=n(2),_=n.n(x),g=function(e){var t=e.addFeedback,n=e.options;return Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:_.a.feedbackControl,children:n.map((function(e){return Object(f.jsx)("button",{className:_.a.borderButton+" "+_.a[e.option],type:"button",name:e.option,onClick:t,children:e.option},e.option)}))})})},F=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={options:[{option:"good",feedbacks:0},{option:"neutral",feedbacks:0},{option:"bad",feedbacks:0},{option:"refrain",feedbacks:0}]},e.addFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return{options:e.options.map((function(e){return e.option===n?Object(s.a)(Object(s.a)({},e),{},{feedbacks:e.feedbacks+1}):e}))}}))},e.countTotalFeedback=function(){return e.state.options.reduce((function(e,t){return e+t.feedbacks}),0)},e.countPositiveFeedbackPercentage=function(t){var n=e.state.options.find((function(e){return"good"===e.option})).feedbacks;return Math.round(t()&&n/t()*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.options;return Object(f.jsxs)(j,{title:"Please leave feedback",children:[Object(f.jsx)(g,{addFeedback:this.addFeedback,options:e}),Object(f.jsx)(v,{options:e,total:this.countTotalFeedback(),countTotalFeedback:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage(this.countTotalFeedback)})]})}}]),n}(o.Component);n(18);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={feedbackControl:"FeedbackOptions_feedbackControl__1G3te",borderButton:"FeedbackOptions_borderButton__3yoVV",good:"FeedbackOptions_good__13biB",neutral:"FeedbackOptions_neutral__2r7Z7",bad:"FeedbackOptions_bad__ZhYg8"}},8:function(e,t,n){e.exports={feedback:"Section_feedback__2VHML"}},9:function(e,t,n){e.exports={Statistics:"Statistics_Statistics__3R-0i"}}},[[19,1,2]]]);
//# sourceMappingURL=main.31362fbe.chunk.js.map