(this["webpackJsonpatriusx.github.io"]=this["webpackJsonpatriusx.github.io"]||[]).push([[0],{139:function(e,t,n){},141:function(e,t,n){e.exports=n.p+"static/media/Test.ed076287.md"},142:function(e,t,n){e.exports=n.p+"static/media/Other.17c0f2a1.md"},143:function(e,t,n){e.exports=n.p+"static/media/Third.c4edbd0c.md"},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){e.exports=n.p+"static/media/About.867188b4.md"},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=(n(50),n(51),n(1)),u=(n(52),function(e){return r.a.createElement("a",{className:"container",href:e.url,onMouseDown:function(e){e.preventDefault&&e.preventDefault()}},e.name)}),l=(n(53),function(e){return r.a.createElement("img",{className:"avatar",src:e.url,alt:"",onMouseDown:function(e){e.preventDefault&&e.preventDefault()}})}),s=(n(54),function(){return r.a.createElement("div",{id:"landing"},r.a.createElement("span",{className:"landing_text"},"Hey! I'm Atrius!"),r.a.createElement(l,{url:"https://avatars0.githubusercontent.com/u/7331441?s=460&u=d4025a5731648accb32ec70057dc1df5e514a588&v=4"}),r.a.createElement("p",{className:"description"},"Check out some of the projects I've contributed to below~!"),r.a.createElement(u,{url:"https://github.com/atriusx/dungeonkit",name:"DungeonKit"}),r.a.createElement(u,{url:"https://github.com/DV8FromTheWorld/JDA",name:"JDA"}))}),h=(n(55),function(){return r.a.createElement("div",{className:"portfolio-container"},r.a.createElement("h1",null,"This area is still work in progress!"),r.a.createElement("br",null),r.a.createElement("h3",null,"Thank you for your interest, please check back later."))}),m=n(9),p=n(11),f=n(13),d=n(12),b=n(8),v=n(31),E=n(3),A=n.n(E),g=n(14),k=n(21),w=n.n(k),x=(n(139),function(e){var t;return t=void 0!==e.id?r.a.createElement(b.b,{to:"/blog/".concat(e.id),className:"blog-title"},r.a.createElement("h1",null,"[",e.id,"] ",e.title)):r.a.createElement("h1",null,e.title),r.a.createElement("div",{key:e.id,className:"blogpost"},t,r.a.createElement("br",null),r.a.createElement("div",{className:"blog-content"},r.a.createElement(w.a,{source:e.text})))}),M={Test:n(141),Other:n(142),E:n(143)},D=Object.entries(M),y=(D.length,function(){var e=Object(g.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(0,D,!0));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),j=function(){var e=Object(g.a)(A.a.mark((function e(t,n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t,D.slice(t,n)));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(g.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t,t+1);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function I(e,t){return O.apply(this,arguments)}function O(){return(O=Object(g.a)(A.a.mark((function e(t,n){var a,o=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2&&void 0!==o[2]&&o[2],e.next=3,Promise.all(n.map((function(e){var t=Object(v.a)(e,2),n=t[0],a=t[1];return fetch(a).then((function(e){return[n,e.text()]}))}))).then((function(e){var n=e.map((function(e,n){var o=Object(v.a)(e,2),c=o[0],i=o[1];return Promise.resolve(i).then((function(e){return r.a.createElement(x,{key:t+n+1,id:a?t+n+1:void 0,title:c,text:e})}))})).reverse();return Promise.all(n)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(144);var N=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){y().then((function(e){return c.a.render(r.a.createElement(b.a,null,e),document.getElementById("blog-container"))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"blog-container"})}}]),n}(a.Component),C=(n(145),function(){return r.a.createElement("div",{className:"error-container"},r.a.createElement("h1",null,"Uh oh! Look like you got lost!"),r.a.createElement("br",null),r.a.createElement("h4",null,"Let's take you back ",r.a.createElement(b.b,{to:"/"},"home"),"..."))}),J=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={post:void 0},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;B(t.id-1).then((function(t){return e.setState({post:t})}))}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.componentDidMount()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,void 0!==this.state.post?this.state.post:r.a.createElement(C,null))}}]),n}(a.Component),G=(n(146),function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={about:""},n}return Object(p.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=n(147);fetch(t).then((function(e){return e.text()})).then((function(t){return e.setState({about:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"about-container"},r.a.createElement(w.a,{source:this.state.about}))}}]),a}(a.Component)),T=n(43),Y=n.n(T),Q=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).canvas=void 0,e.wrapper=a.createRef(),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setSketch(this.props)}},{key:"componentDidUpdate",value:function(e){this.props.sketch!==e.sketch&&this.setSketch(e)}},{key:"render",value:function(){return a.createElement("div",{ref:this.wrapper})}},{key:"setSketch",value:function(e){var t=this.wrapper.current;t&&(t.childNodes[0]&&t.removeChild(t.childNodes[0]),this.canvas=new Y.a(e.sketch,t),e.onP5Changed&&e.onP5Changed(this.canvas))}}]),n}(a.Component),F=function(e){var t=[],n=function(){return e.windowWidth},a=function(){return e.windowHeight};e.setup=Object(g.a)(A.a.mark((function r(){var o;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(e.createCanvas(n(),a()),o=0;o<(n()<768?50:75);o++)t.push(new R(Math.random()*n(),Math.random()*a(),Math.random()-.5,Math.random()-.5));case 2:case"end":return r.stop()}}),r)})));var r=0;e.draw=Object(g.a)(A.a.mark((function o(){return A.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:document.body.style.backgroundColor="hsl(".concat(276+70*Math.sin(r+=.001),", 100%, 10%)"),e.background(30,0,50,150),t.forEach((function(t){e.fill(e.color("hsl(".concat(t.hue+=2,", 100%, 60%)"))),e.windowWidth>=768&&(e.stroke(t.x,t.y,255,Math.abs(30*t.velX|Math.sin(t.velY))),e.line(t.x,t.y,t.x^t.y,t.y<<2)),e.noStroke(),e.circle(t.x,t.y,2),t.x=(t.x+2*t.velX)%n(),t.y=(t.y+2*t.velY)%a(),t.x<0&&(t.x=n()),t.y<0&&(t.y=a()),100*Math.random()>99&&(t.velX=2*Math.random()-1,t.velY=2*Math.random()-1),t.hue>230&&(t.hue=170)}));case 3:case"end":return o.stop()}}),o)}))),e.windowResized=function(){e.resizeCanvas(n(),a())}},R=function e(t,n,a,r){Object(m.a)(this,e),this.x=t,this.y=n,this.velX=a,this.velY=r,this.hue=void 0,this.hue=Math.floor(170+60*Math.random())},W=(n(148),n(44)),Z=n.n(W),P=function(){return r.a.createElement("a",{className:"github",href:"https://github.com/AtriusX"},r.a.createElement("img",{draggable:!1,src:Z.a,alt:"Github",onMouseDown:function(e){e.preventDefault&&e.preventDefault()}}))},U=(n(149),function(e){return r.a.createElement("div",{className:"box"},r.a.createElement(b.b,{to:e.url,className:"button",onMouseDown:function(e){e.preventDefault&&e.preventDefault()}},e.title))}),L=(n(150),function(){return document.body.onscroll=function(){var e=Math.max(0,Math.min(window.scrollY/50,.95));document.getElementById("navbar").style.backgroundColor="rgba(21,0,43,".concat(e,")")},r.a.createElement("div",{id:"navbar"},r.a.createElement(P,null),r.a.createElement("ul",{className:"options"},r.a.createElement(U,{url:"/",title:"Home"}),r.a.createElement(U,{url:"/portfolio",title:"Portfolio"}),r.a.createElement(U,{url:"/blog",title:"Blog"}),r.a.createElement(U,{url:"/about",title:"About Me"})))}),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{sketch:F,onP5Changed:function(e){return console.log(e)}}),r.a.createElement(L,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:s}),r.a.createElement(i.a,{exact:!0,path:"/portfolio",component:h}),r.a.createElement(i.a,{exact:!0,path:"/blog",component:N}),r.a.createElement(i.a,{path:"/blog/:id",component:J}),r.a.createElement(i.a,{exact:!0,path:"/about",component:G}),r.a.createElement(i.a,{path:"*",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII="},45:function(e,t,n){e.exports=n(151)},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.47f88879.chunk.js.map