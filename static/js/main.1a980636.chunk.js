(this["webpackJsonpatriusx.github.io"]=this["webpackJsonpatriusx.github.io"]||[]).push([[0],{176:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Test.b2a5cc34.md"},179:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Other.d75b475c.md"},180:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/Third.c29f6f19.md"},181:function(t,e,n){},182:function(t,e,n){},183:function(t,e,n){},184:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/About.7c708e85.md"},185:function(t,e,n){},186:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n.n(c),i=n(23),o=n.n(i),s=(n(56),n(57),n(58),n(2)),u=n(17),l=(n(59),n(15)),d=function(t){return t.preventDefault()};function h(t){return Object(r.jsxs)("a",{href:t.to.toString(),style:t.style,className:"link ".concat(t.className),onMouseDown:d,children:[t.children," ",t.text]})}var j=function(t){return Object(r.jsx)(l.b,{to:t.to,style:t.style,className:"link ".concat(t.className),onMouseDown:d,children:t.text})};n(65),n(66);var p=function(t){var e=t.children,n=t.columnize,c=t.style,a=t.height,i=t.justify,o=t.align,l=Object(u.a)(t,["children","columnize","style","height","justify","align"]),d=Object(s.a)(Object(s.a)({},c),{},{flexDirection:n?"column":"row",height:null!==a&&void 0!==a?a:"fit-content",justifyContent:null!==i&&void 0!==i?i:"center",alignItems:null!==o&&void 0!==o?o:"center"});return Object(r.jsx)("div",Object(s.a)(Object(s.a)({},l),{},{style:d,className:"badge-container",children:e}))};var b=function(t){var e=t.look,n=t.style,c=t.link,a=t.buttonText,i=t.className,o=t.children,l=t.width,d=t.flat,j=t.flatText,p=(t.icon,Object(u.a)(t,["look","style","link","buttonText","className","children","width","flat","flatText","icon"])),b={backgroundImage:e,boxShadow:d?void 0:"0 0 60px -20px #000",textShadow:j?void 0:"0 0 5px #333"},f=t.icon,x="badge ".concat(i),O=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:o}),Object(r.jsx)("br",{})]});return Object(r.jsxs)("div",Object(s.a)(Object(s.a)({},p),{},{style:Object(s.a)(Object(s.a)(Object(s.a)({},b),n),{},{width:null!==l&&void 0!==l?l:"fit-content"}),className:x,children:[void 0!==o?O:"",Object(r.jsx)(h,{style:b,className:"support",to:c,text:null!==a&&void 0!==a?a:"Support",children:void 0!==f?Object(r.jsx)(f,{className:"logo",size:"1.5em"}):""})]}))},f=n(24),x=n(19),O=n(7),m=n(8),v=n(13),g=n(12),y=n(46),k=n.n(y);n(67);var w=function(t){var e=t.to,n=t.text;return Object(r.jsx)("li",{style:{listStyle:e?"square":void 0},children:e?Object(r.jsx)(h,{to:e,text:n}):Object(r.jsx)("p",{children:n})})};function D(t,e){var n=t.getTime()-e.getTime();return Math.ceil(n/864e5)}var F,N,C=function(t){Object(v.a)(n,t);var e=Object(g.a)(n);function n(t){var r;return Object(O.a)(this,n),(r=e.call(this,t)).state={width:0},r}return Object(m.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.topic,c=e.startDate,a=e.color,i=e.glow,o=e.rounded,l=e.keepOpen,d=e.children,h=e.open,j=Object(u.a)(e,["topic","startDate","color","glow","rounded","keepOpen","children","open"]),p={width:this.state.width,background:a||"#37ecba",borderRadius:o?"10em":void 0,filter:i?"drop-shadow(25px 0 1.5em ".concat(i,")"):void 0},b=this.getData(c),f=Object(x.a)(b,3),O=f[0],m=f[1],v=f[2];return Object(r.jsxs)("div",Object(s.a)(Object(s.a)({},j),{},{className:"experience-bar",children:[Object(r.jsxs)("div",{className:"flex-container",children:[Object(r.jsx)("p",{className:"topic",children:n}),Object(r.jsx)("p",{className:"start",children:"Started in ".concat(v)})]}),Object(r.jsx)(k.a,{onChange:function(e){return e?t.updateWidth(O):void 0},children:Object(r.jsxs)("div",{className:"bar",children:[Object(r.jsx)("p",{className:"time",children:m}),Object(r.jsx)("span",{style:p,className:"progress"})]})}),d?Object(r.jsxs)("details",{className:"tech ".concat(l?"keep-open":""),open:h,children:[Object(r.jsx)("summary",{children:"Related"}),Object(r.jsx)("ul",{className:"tect-items",children:d})]}):""]}))}},{key:"getData",value:function(t){var e=new Date,n=new Date(t),r=new Date(n.getFullYear(),0,0),c=D(e,n),a=365-D(n,r);return[Math.ceil(.273972602739726*a+c/365),Math.floor(c/365),n.getFullYear()]}},{key:"updateWidth",value:function(t){this.setState({width:t})}}]),n}(c.Component),M=n(47),T=n.n(M),S=n(48),E=n(50),A=n.n(E),z=n(4),B=n.n(z),P=n(16),I=[],W=function(t){return t.windowWidth},X=function(t){return t.windowHeight};function J(t,e){return R.apply(this,arguments)}function R(){return(R=Object(P.a)(B.a.mark((function t(e,n){var r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===N){t.next=2;break}return t.abrupt("return");case 2:for(e.frameRate(120),N=e.createCanvas(W(e),900).parent(n),F=new Z(0,0,0,0),r=0;r<125;r++)I.push(new Z(Math.random()*W(e),Math.random()*X(e),(Math.random()-.5)/2,(Math.random()-.5)/2));I.push(F),Q(e);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Y=[];function H(t){return L.apply(this,arguments)}function L(){return(L=Object(P.a)(B.a.mark((function t(e){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.frameCount%5===0&&K(e);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(t){return U.apply(this,arguments)}function U(){return(U=Object(P.a)(B.a.mark((function t(e){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=0;n<3;n++)Y.push(new _(e,e.mouseX,e.mouseY,10*n,10));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function V(t){return q.apply(this,arguments)}function q(){return(q=Object(P.a)(B.a.mark((function t(e){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.clear(),e.background(e.color("rgba(0,0,0,0.4)")),I.forEach((function(t){e.fill(e.color("hsl(".concat(t.hue+=2,", 100%, 60%)"))),t.hue%=360,t.connect(e,I),e.circle(t.x,t.y,3),t.x=(t.x+2*t.velX)%W(e),t.y=(t.y+2*t.velY)%X(e),t.x<0&&(t.x=W(e)),t.y<0&&(t.y=X(e))})),F.x=e.mouseX,F.y=e.mouseY,G();case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(){return $.apply(this,arguments)}function $(){return($=Object(P.a)(B.a.mark((function t(){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y.forEach((function(t){t.isDead()||t.update()}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Q(t){t.resizeCanvas(W(t),X(t))}var Z=function(){function t(e,n,r,c){Object(O.a)(this,t),this.x=e,this.y=n,this.velX=r,this.velY=c,this.hue=void 0,this.counter=0,this.hue=Math.floor(170+60*Math.random())}return Object(m.a)(t,[{key:"connect",value:function(t,e){var n=this;e.forEach((function(e){if(e!==n){var r=t.dist(n.x,n.y,e.x,e.y);if(r<150){var c=150-r;t.stroke(Math.max(100,255*Math.sin((n.x+e.y)/125)),Math.max(100,255*Math.cos((e.y-n.x+e.x|n.y)/110)),Math.max(100,255*Math.cos(Math.sin(n.y-e.x)/100)),c),t.line(n.x,n.y,e.x,e.y)}}})),this.counter+=this.counter%5e5}}]),t}(),_=function(){function t(e,n,r,c,a){Object(O.a)(this,t),this.x=n,this.y=r,this.p5=void 0,this.size=void 0,this.speed=void 0,this.p5=e,this.size=c,this.speed=a}return Object(m.a)(t,[{key:"update",value:function(){var t=this.p5;t.push(),t.noFill(),t.stroke(t.color("hsla(".concat(this.size/2%360,", 100%, 50%, ").concat(1-this.size/500,")"))),t.circle(this.x,this.y,this.size),t.pop(),this.size+=this.speed}},{key:"isDead",value:function(){return this.size>500}}]),t}();n(96);function tt(t){return t.map((function(t,e){return Object(r.jsx)("li",{children:Object(r.jsx)(h,{to:t.link,text:t.text})},e)}))}var et=function(t){var e=t.links,n=t.background,c=t.icon,a=t.rightBias,i=t.height,o=Object(u.a)(t,["links","background","icon","rightBias","height"]),l={background:null!==n&&void 0!==n?n:"#121212",height:i},d=[],h=[];null===e||void 0===e||e.forEach((function(t,e){return e%2===0!==!!a?d.push(t):h.push(t)}));var j=c?Object(r.jsx)("img",{src:c,alt:"logo"}):void 0;return Object(r.jsxs)("footer",Object(s.a)(Object(s.a)({},o),{},{style:l,id:"footer",children:[Object(r.jsx)("ul",{children:tt(d)}),j,Object(r.jsx)("ul",{children:tt(h)})]}))},nt=n.p+"static/media/logo.7f5c9ab4.png",rt=["linear-gradient( 101.2deg,  rgba(247,0,0,1) -21.9%, rgba(164,50,237,1) 92.2% )","linear-gradient( 123.9deg,  rgba(241,81,104,1) 34.2%, rgba(196,12,183,0.51) 100.1% )","linear-gradient( 111.9deg,  rgba(0,81,146,1) 0.3%, rgba(14,250,255,1) 90% )","radial-gradient( circle 933.4px at 0.9% -2.6%,  rgba(1,220,215,1) 0%, rgba(171,196,251,1) 47.6%, rgba(224,188,253,1) 72.8%, rgba(255,182,194,1) 100.3% )","linear-gradient( 109.6deg,  rgba(243,118,118,1) 12.6%, rgba(191,159,237,1) 91.1% )","linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)","linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)","linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)","linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)","linear-gradient(167deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)","radial-gradient(circle at 43.88% 39.4%, #009764 0, #009875 3.33%, #009886 6.67%, #009996 10%, #0099a7 13.33%, #0098b6 16.67%, #0098c5 20%, #0097d2 23.33%, #0095de 26.67%, #0093e7 30%, #0090ef 33.33%, #008df5 36.67%, #0089f8 40%, #0084f8 43.33%, #007ef6 46.67%, #3c78f2 50%, #6971eb 53.33%, #8769e3 56.67%, #9f61d8 60%, #b258cc 63.33%, #c24fbe 66.67%, #cf46af 70%, #d93ea0 73.33%, #e03890 76.67%, #e53580 80%, #e7356f 83.33%, #e7395f 86.67%, #e53f50 90%, #e14640 93.33%, #db4e31 96.67%, #d45721 100%)","linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)","linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)"];function ct(){return Object(r.jsxs)("div",{id:"landing",children:[Object(r.jsxs)("div",{className:"gradient",children:[Object(r.jsx)(S.a,{stateTransitionSpeed:0,id:"gradient"}),Object(r.jsx)(A.a,{setup:J,draw:V,windowResized:Q,mouseDragged:H,mouseClicked:K,className:"sketch"}),Object(r.jsx)(T.a,{className:"landing-text",typeSpeed:40,startDelay:500,fadeOut:!0,fadeOutDelay:1e3,showCursor:!1,strings:["Hey! I'm Atri!","Feel free to look around!"]})]}),Object(r.jsxs)(p,{height:"20em",justify:"space-between",columnize:!0,children:[Object(r.jsx)(b,{icon:f.c,link:"https://soundcloud.com/atriusedm/apex",buttonText:"Stream Apex",flatText:!0,look:rt[1],children:"Follow me on snodclod!"}),Object(r.jsx)(b,{icon:f.b,link:"https://paypal.me/Atrius",flatText:!0,look:rt[4],children:"Please consider supporting Atri's work through Paypal!"}),Object(r.jsx)(b,{icon:f.d,link:"https://twitter.com/ImAtrius",buttonText:"Follow",flatText:!0,look:rt[6],children:"Check out my twitter page!"}),Object(r.jsx)(b,{icon:f.a,link:"https://github.com/AtriusX",buttonText:"View",flatText:!0,look:rt[3],children:"Check out my github profile!"})]}),Object(r.jsxs)("div",{className:"test",style:{display:"flex",position:"relative",left:"50%",transform:"translateX(-50%)",alignItems:"start",width:"80%",flexWrap:"wrap",justifyContent:"space-evenly",paddingBottom:"1em"},children:[Object(r.jsx)(C,{startDate:"7/15/2017",color:rt[0],glow:"rgba(164,50,237,1)",topic:"Kotlin",rounded:!0,children:Object(r.jsx)(w,{text:"DungeonKit",to:"https://github.com/atriusx/dungeonkit"})}),Object(r.jsxs)(C,{startDate:"9/10/2013",topic:"Java",keepOpen:!0,open:!0,rounded:!0,children:[Object(r.jsx)(w,{text:"JDA",to:"https://github.com/DV8FromTheWorld/JDA"}),Object(r.jsx)(w,{text:"Spigot/Paper"})]}),Object(r.jsx)(C,{startDate:"6/10/2019",topic:"Typescript",rounded:!0,children:Object(r.jsx)(w,{text:"React"})}),Object(r.jsx)(C,{startDate:"5/13/2017",topic:"Javascript",open:!0,rounded:!0,children:Object(r.jsx)(w,{text:"React"})}),Object(r.jsx)(C,{startDate:"9/1/2010",topic:"HTML",rounded:!0}),Object(r.jsx)(C,{startDate:"9/8/2010",topic:"CSS",rounded:!0})]}),Object(r.jsx)(et,{icon:nt,links:[{text:"Soundcloud",link:"https://soundcloud.com/AtriusEDM"},{text:"Github",link:"https://github.com/AtriusX"},{text:"Twitter",link:"https://twitter.com/ImAtrius"}]})]})}var at=n(22),it=n.n(at);n(176);function ot(){return Object(r.jsx)("div",{className:"portfolio-container",children:Object(r.jsx)(it.a,{source:"# This area is still work in progress!\n### **Thank you for your interest, please check back later.**"})})}n(177);function st(t){var e;return e=void 0!==t.id?Object(r.jsx)(l.b,{to:"/blog/".concat(t.id),className:"blog-title",children:Object(r.jsxs)("h1",{children:["[",t.id,"] ",t.title]})}):Object(r.jsx)("h1",{children:t.title}),Object(r.jsxs)("div",{className:"blogpost",children:[e,Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"blog-content",children:Object(r.jsx)(it.a,{source:t.text})})]},t.id)}var ut={Test:n(178),Other:n(179),E:n(180)},lt=Object.entries(ut),dt=(lt.length,function(){var t=Object(P.a)(B.a.mark((function t(){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",pt(0,lt,!0));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),ht=function(){var t=Object(P.a)(B.a.mark((function t(e,n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",pt(e,lt.slice(e,n)));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),jt=function(){var t=Object(P.a)(B.a.mark((function t(e){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ht(e,e+1);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function pt(t,e){return bt.apply(this,arguments)}function bt(){return(bt=Object(P.a)(B.a.mark((function t(e,n){var c,a=arguments;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.length>2&&void 0!==a[2]&&a[2],t.next=3,Promise.all(n.map((function(t){var e=Object(x.a)(t,2),n=e[0],r=e[1];return fetch(r).then((function(t){return[n,t.text()]}))}))).then((function(t){var n=t.map((function(t,n){var a=Object(x.a)(t,2),i=a[0],o=a[1];return Promise.resolve(o).then((function(t){return Object(r.jsx)(st,{id:c?e+n+1:void 0,title:i,text:t},e+n+1)}))})).reverse();return Promise.all(n)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(181);var ft=function(t){Object(v.a)(n,t);var e=Object(g.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){dt().then((function(t){return o.a.render(Object(r.jsx)(l.a,{children:t}),document.getElementById("blog-container"))}))}},{key:"render",value:function(){return Object(r.jsx)("div",{id:"blog-container"})}}]),n}(c.Component),xt=(n(182),function(){return Object(r.jsxs)("div",{className:"error-container",children:[Object(r.jsx)("h1",{children:"Uh oh! Look like you got lost!"}),Object(r.jsx)("br",{}),Object(r.jsxs)("h4",{children:["Let's take you back ",Object(r.jsx)(l.b,{to:"/",children:"home"}),"..."]})]})}),Ot=function(t){Object(v.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(O.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={post:void 0},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params;jt(e.id-1).then((function(e){return t.setState({post:e})}))}},{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&this.componentDidMount()}},{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:void 0!==this.state.post?this.state.post:Object(r.jsx)(xt,{})})}}]),n}(c.Component),mt=(n(183),function(t){Object(v.a)(c,t);var e=Object(g.a)(c);function c(t){var n;return Object(O.a)(this,c),(n=e.call(this,t)).state={about:""},n}return Object(m.a)(c,[{key:"componentWillMount",value:function(){var t=this,e=n(184);fetch(e).then((function(t){return t.text()})).then((function(e){return t.setState({about:e})}))}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"about-container",children:Object(r.jsx)(it.a,{source:this.state.about})})}}]),c}(c.Component)),vt=n(3),gt=function(t){Object(v.a)(n,t);var e=Object(g.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(j,{to:this.props.path,text:this.props.text})})}}]),n}(a.a.Component),yt=(n(185),function(t){Object(v.a)(n,t);var e=Object(g.a)(n);function n(t){var r;return Object(O.a)(this,n),(r=e.call(this,t)).scrollElem=void 0,r.oldPosition=0,r.counter=0,r.state={background:"transparent"},r}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t,e;this.props.transparentScrolling&&(this.scrollElem=null!==(t=document.getElementById("landing"))&&void 0!==t?t:void 0,null===(e=this.scrollElem)||void 0===e||e.addEventListener("scroll",this.scroll.bind(this)))}},{key:"scroll",value:function(){var t,e,n=null!==(t=null===(e=this.scrollElem)||void 0===e?void 0:e.scrollTop)&&void 0!==t?t:0,r=this.props,c=r.solidPosition,a=r.background;this.setState({background:n>(null!==c&&void 0!==c?c:0)?a:"transparent"})}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.style,c=Object(u.a)(t,["children","style"]),a=this.state,i=a.background,o=a.opacity,l=Object.entries(null!==e&&void 0!==e?e:[]).map((function(t){var e=Object(x.a)(t,2);e[0];return e[1]})),d=l.filter((function(t){return void 0!==t.props.text})),h=Object(s.a)(Object(s.a)({},n),{},{background:i,opacity:o});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",Object(s.a)(Object(s.a)({},c),{},{style:h,children:Object(r.jsx)("ul",{children:d})})),Object(r.jsx)(vt.c,{children:l.map((function(t,e){return Object(r.jsx)(vt.a,{path:t.props.path,exact:t.props.exact,component:t.props.component},e)}))})]})}}]),n}(c.Component));function kt(){return Object(r.jsxs)(yt,{background:"#121212",transparentScrolling:!0,solidPosition:200,children:[Object(r.jsx)(gt,{text:"Home",path:"/",component:ct,exact:!0}),Object(r.jsx)(gt,{text:"Portfolio",path:"/portfolio",component:ot,exact:!0}),Object(r.jsx)(gt,{text:"Blog",path:"/blog",component:ft,exact:!0}),Object(r.jsx)(gt,{path:"/blog/:id",component:Ot}),Object(r.jsx)(gt,{text:"About",path:"/about",component:mt,exact:!0}),Object(r.jsx)(gt,{path:"*",component:xt})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(kt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},96:function(t,e,n){}},[[186,1,2]]]);
//# sourceMappingURL=main.1a980636.chunk.js.map