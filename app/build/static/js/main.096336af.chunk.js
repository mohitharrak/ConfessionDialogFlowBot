(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){},49:function(e,t,n){e.exports=n(58)},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(25),r=n.n(o),i=(n(54),n(55),n(35),n(5)),c=n(10),l=n(9),u=n(6),m=n(8),g=(n(56),n(16)),d={Incoming:0,Outgoing:1},h=n(88),p=n(92),f=n(85),b=n(93),v=n(87),y=n(84),E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"_renderMessage",value:function(){}},{key:"_buttonClick",value:function(e){e.event?this.props.onTriggerEvent&&this.props.onTriggerEvent(e):this.props.onSendMessage&&this.props.onSendMessage(e.payload)}},{key:"render",value:function(){var e=this;return s.createElement("div",{className:"ms-Grid-col ms-sm12"},this.props.message.direction==d.Incoming?s.createElement(h.a,{style:{backgroundColor:"#f4f7f9",float:"left",width:"100%",margin:10}},s.createElement(p.a,null,s.createElement(f.a,{activity:"0 minutes ago",people:[{name:this.props.message.member.username,profileImageSrc:""}]}),s.createElement(b.a,{className:"message-box-text",title:this.props.message.text,showAsSecondaryTitle:!0}),this.props.message.buttons&&this.props.message.buttons.length>0&&s.createElement(v.a,{gap:10,padding:10},this.props.message.buttons.map(function(t){return s.createElement(y.a,{onClick:e._buttonClick.bind(e,t),text:t.title})})),s.createElement("div",null))):s.createElement(h.a,{style:{backgroundColor:"#f4f9f8",float:"right",width:"100%",margin:10}},s.createElement(p.a,null,s.createElement(f.a,{activity:"10 minutes ago",people:[{name:"Me",profileImageSrc:""}]}),s.createElement(b.a,{title:this.props.message.text,showAsSecondaryTitle:!0}))))}}]),t}(s.Component),O=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"_renderMessage",value:function(e){return s.createElement(E,{onSendMessage:this.props.onSendMessage,onTriggerEvent:this.props.onTriggerEvent,message:e})}},{key:"render",value:function(){var e=this;return s.createElement("div",{className:"ms-Grid-row"},this.props.messages.map(function(t){return e._renderMessage(t)}))}}]),t}(s.Component),j=n(86),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={text:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({text:""}),this.props.onSendMessage(this.state.text)}},{key:"render",value:function(){var e=this;return s.createElement("div",{className:"ms-Grid-row"},s.createElement("div",{className:"ms-Grid-col ms-sm12"},s.createElement("div",{style:{float:"left",width:"calc(100% - 80px)"}},s.createElement(j.a,{autoFocus:!0,onChange:function(t){return e.onChange(t)},value:this.state.text,type:"multiline",placeholder:"Enter your message and click Send"})),s.createElement(y.a,{onClick:this.onSubmit.bind(this),text:"Send"})))}}]),t}(s.Component),k=new(n(43).a)({accessToken:"ba8b1e5dad804cbfbd1bd9d1fcc08991"}),M=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).scrollToBottom=function(){window.scrollTo(0,document.body.scrollHeight)},n._decodeMessage=function(e){var t={};try{var n=e.replace(/#\(/g,"{").replace(/\)#/g,"}");t=JSON.parse(n)}catch(s){t={text:e}}return t},n.SendMessage=function(e){n._showMessage({text:e,member:n.state.member,direction:d.Outgoing}),k.textRequest(e).then(n._handleQueryResponse.bind(Object(g.a)(Object(g.a)(n)))).catch(function(e){console.log(e)})},n.TriggerEvent=function(e){n._showMessage({text:e.payload,member:n.state.member,direction:d.Outgoing}),k.eventRequest(e.event,{}).then(n._handleQueryResponse.bind(Object(g.a)(Object(g.a)(n)))).catch(function(e){console.log(e)})},k.eventRequest("Welcome").then(n._handleQueryResponse.bind(Object(g.a)(Object(g.a)(n)))).catch(function(e){alert("error"),console.log(e)}),n.state={messages:[],member:{username:"Me"}},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}}]),Object(c.a)(t,[{key:"_showMessage",value:function(e){var t=this.state.messages;t.push(e),this.setState({messages:t})}},{key:"_handleQueryResponse",value:function(e){var t=this;e.result&&e.result.fulfillment&&e.result.fulfillment.messages&&e.result.fulfillment.messages.forEach(function(e){if(4==e.type)console.log(e),(n=e.payload).member={username:"Confession Bot"},n.direction=d.Incoming,t._showMessage(n);else if(0==e.type){var n;console.log(e),(n=t._decodeMessage(e.speech)).member={username:"Confession Bot"},n.direction=d.Incoming,t._showMessage(n)}})}},{key:"render",value:function(){return s.createElement("div",null,s.createElement(O,{onSendMessage:this.SendMessage.bind(this),onTriggerEvent:this.TriggerEvent.bind(this),messages:this.state.messages}),s.createElement(w,{onSendMessage:this.SendMessage}))}}]),t}(s.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"ms-Grid-row",style:{margin:"0px",marginBottom:"10px"}},a.a.createElement("div",{className:"ms-Grid-col ms-sm12"},a.a.createElement(M,null))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.096336af.chunk.js.map