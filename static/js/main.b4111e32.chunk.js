(this["webpackJsonpatriusx.github.io"]=this["webpackJsonpatriusx.github.io"]||[]).push([[0],{141:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){e.exports=n.p+"static/media/About.867188b4.md"},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(21),r=n.n(c),i=(n(50),n(51),n(1)),l=(n(52),n(53),function(e){return o.a.createElement("a",{className:"container",href:e.url,onMouseDown:function(e){e.preventDefault&&e.preventDefault()}},e.name)}),u=(n(54),function(e){return o.a.createElement("img",{className:"avatar",src:e.url,alt:"",onMouseDown:function(e){e.preventDefault&&e.preventDefault()}})}),s=function(){return o.a.createElement("div",{id:"landing"},o.a.createElement("span",{className:"landing_text"},"Hey! I'm Atrius!"),o.a.createElement(u,{url:"https://avatars0.githubusercontent.com/u/7331441?s=460&u=d4025a5731648accb32ec70057dc1df5e514a588&v=4"}),o.a.createElement("p",{className:"description"},"Check out some of the projects I've contributed to below~!"),o.a.createElement(l,{url:"https://github.com/atriusx/dungeonkit",name:"DungeonKit"}),o.a.createElement(l,{url:"https://github.com/DV8FromTheWorld/JDA",name:"JDA"}))},m=(n(55),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null))}),h=function(){return o.a.createElement(o.a.Fragment,null)},d=n(17),p=n(7),b=n(9),f=n(12),v=n(11),A={Test:n(56),Other:n(57),E:n(58)},E=n(16),g=n.n(E),w=(n(141),n(10)),k=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object.entries(A),t=e.length;Promise.all(e.reverse().map((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return fetch(a).then((function(e){return[n,e.text()]}))}))).then((function(e){var n=e.map((function(e){var n=Object(d.a)(e,2),a=n[0],c=n[1];return Promise.resolve(c).then((function(e){return o.a.createElement("div",{key:t,className:"blogpost"},o.a.createElement(w.b,{to:"/blog/".concat(t--),className:"blog-title"},o.a.createElement("h1",null,a)),o.a.createElement("br",null),o.a.createElement(g.a,{source:e}))}))}));Promise.all(n).then((function(e){r.a.render(o.a.createElement(w.a,null,e),document.getElementById("blog-container"))}))}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"blog-container"})}}]),n}(a.Component),M=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={title:void 0,post:void 0},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id-1,n=Object.entries(A);if(void 0!==n[t]){var a=Object(d.a)(n[t],2),c=a[0],r=a[1];fetch(r).then((function(e){return e.text()})).then((function(t){return e.setState({title:c,post:o.a.createElement(g.a,{source:t})})}))}else this.setState({title:void 0,post:void 0})}},{key:"render",value:function(){return void 0!==this.state.post?o.a.createElement("div",{className:"blogpost"},o.a.createElement("h1",null,this.state.title),o.a.createElement("br",null),this.state.post):o.a.createElement(o.a.Fragment,null," 404 ")}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.componentDidMount()}}]),n}(a.Component),D=(n(143),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={about:""},n}return Object(b.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=n(144);fetch(t).then((function(e){return e.text()})).then((function(t){return e.setState({about:t})}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"about-container"},o.a.createElement(g.a,{source:this.state.about})))}}]),a}(a.Component)),x=n(43),j=n.n(x),B=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).canvas=void 0,e.wrapper=a.createRef(),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.setSketch(this.props)}},{key:"componentDidUpdate",value:function(e){this.props.sketch!==e.sketch&&this.setSketch(e)}},{key:"render",value:function(){return a.createElement("div",{ref:this.wrapper})}},{key:"setSketch",value:function(e){var t=this.wrapper.current;t&&(t.childNodes[0]&&t.removeChild(t.childNodes[0]),this.canvas=new j.a(e.sketch,t),e.onP5Changed&&e.onP5Changed(this.canvas))}}]),n}(a.Component),y=n(18),I=n.n(y),O=n(31),N=function(e){var t=[],n=function(){return e.windowWidth},a=function(){return e.windowHeight};e.setup=Object(O.a)(I.a.mark((function o(){var c;return I.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:for(e.createCanvas(n(),a()),c=0;c<(n()<768?50:75);c++)t.push(new C(Math.random()*n(),Math.random()*a(),Math.random()-.5,Math.random()-.5));case 2:case"end":return o.stop()}}),o)})));var o=0;e.draw=Object(O.a)(I.a.mark((function c(){return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:document.body.style.backgroundColor="hsl(".concat(276+70*Math.sin(o+=.001),", 100%, 10%)"),e.background(30,0,50,150),t.forEach((function(t){e.fill(e.color("hsl(".concat(t.hue+=2,", 100%, 60%)"))),e.windowWidth>=768&&(e.stroke(t.x,t.y,255,Math.abs(30*t.velX|Math.sin(t.velY))),e.line(t.x,t.y,t.x^t.y,t.y<<2)),e.noStroke(),e.circle(t.x,t.y,2),t.x=(t.x+2*t.velX)%n(),t.y=(t.y+2*t.velY)%a(),t.x<0&&(t.x=n()),t.y<0&&(t.y=a()),100*Math.random()>99&&(t.velX=2*Math.random()-1,t.velY=2*Math.random()-1),t.hue>230&&(t.hue=170)}));case 3:case"end":return c.stop()}}),c)}))),e.windowResized=function(){e.resizeCanvas(n(),a())}},C=function e(t,n,a,o){Object(p.a)(this,e),this.x=t,this.y=n,this.velX=a,this.velY=o,this.hue=void 0,this.hue=Math.floor(170+60*Math.random())},J=(n(146),n(44)),G=n.n(J),T=function(){return o.a.createElement("a",{className:"github",href:"https://github.com/AtriusX"},o.a.createElement("img",{draggable:!1,src:G.a,alt:"Github",onMouseDown:function(e){e.preventDefault&&e.preventDefault()}}))},Y=(n(147),function(e){return o.a.createElement("div",{className:"box"},o.a.createElement(w.b,{to:e.url,className:"button",onMouseDown:function(e){e.preventDefault&&e.preventDefault()}},e.title))}),Q=(n(148),function(){return document.body.onscroll=function(){var e=Math.max(0,Math.min(window.scrollY/50,.95));document.getElementById("navbar").style.backgroundColor="rgba(21,0,43,".concat(e,")")},o.a.createElement("div",{id:"navbar"},o.a.createElement(T,null),o.a.createElement("ul",{className:"options"},o.a.createElement(Y,{url:"/",title:"Home"}),o.a.createElement(Y,{url:"/portfolio",title:"Portfolio"}),o.a.createElement(Y,{url:"/blog",title:"Blog"}),o.a.createElement(Y,{url:"/about",title:"About Me"})))}),F=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,{sketch:N,onP5Changed:function(e){return console.log(e)}}),o.a.createElement(Q,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:m}),o.a.createElement(i.a,{exact:!0,path:"/portfolio",component:h}),o.a.createElement(i.a,{exact:!0,path:"/blog",component:k}),o.a.createElement(i.a,{path:"/blog/:id",component:M}),o.a.createElement(i.a,{exact:!0,path:"/about",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w.a,null,o.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII="},45:function(e,t,n){e.exports=n(149)},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){e.exports=n.p+"static/media/Test.ed076287.md"},57:function(e,t,n){e.exports=n.p+"static/media/Other.17c0f2a1.md"},58:function(e,t,n){e.exports=n.p+"static/media/Third.c4edbd0c.md"}},[[45,1,2]]]);
//# sourceMappingURL=main.b4111e32.chunk.js.map