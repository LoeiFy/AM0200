!function t(e,n,i){function o(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var n=e[a][1][t];return o(n?n:t)},c,c.exports,t,e,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];if(!(T.length>=x)){var e=j.width,n=j.height,i=new R(M.random(n/k),M.random(e/k),t);i.createElectrons()}}function a(){q.paint(function(t,e){var n=e.width,i=e.height;t.fillStyle=E,t.fillRect(0,0,n,i)})}function s(){for(var t=Date.now(),e=0,n=T.length;e<n;e++){var i=T[e];t>=i.expireAt?(T.splice(e,1),e--,n--):i.paintNextTo(j)}}function u(){var t=Date.now();t<H||(H=t+M.random(300,1e3),r())}function l(){a(),j.paint(function(t,e){var n=e.width,i=e.height;t.fillStyle="#fff",t.fillRect(0,0,n,i)}),j.blendBackground(q.canvas,.9)}function c(){j.blendBackground(q.canvas),s(),u(),requestAnimationFrame(c)}function h(){I.innerHTML=P.substr(0,B),B++,P.length>=B?(v(),setTimeout(h,100)):I.setAttribute("contenteditable",!0)}function d(){var t=F.children[1].querySelector("a"),e=F.children[2].querySelector("a");t.setAttribute("target","_blank"),t.setAttribute("href","mailto:LoeiFy@gmail.com"),e.setAttribute("target","_blank"),e.setAttribute("href","https://github.com/LoeiFy"),X.style.top=M.random(8,20)+"%",X.style.right=M.random(6,18)+"%",X.style.display="block"}function f(){F.innerHTML=O.substr(0,Y)+"<em>|</em>",Y++,O.length>=Y?setTimeout(f,100):(d(),h())}function v(){for(var t=document.querySelector(".line"),e=(I.offsetHeight-28)/16,n="",i=1;i<=e;i++)n+=i+"<br />";t.innerHTML=n}var p=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),m=function(){function t(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=3,g=10,b=20,w=2,x=3,k=b+w,E="#263238",L="#d34b6a",A=window.devicePixelRatio||1,T=[],C=[[0,1],[0,-1],[1,0],[-1,0]].map(function(t){var e=m(t,2),n=e[0],i=e[1];return[n*k,i*k]}),D=[[0,0],[0,1],[1,0],[1,1]].map(function(t){var e=m(t,2),n=e[0],i=e[1];return[n*k-w/2,i*k-w/2]}),M={random:function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},debounce:function(t,e){var n=void 0,i=void 0,o=void 0,r=void 0,a=void 0,s=function s(){var u=Date.now-r;u<e&&u>=0?n=setTimeout(s,e-u):(n=null,a=t.apply(o,i),n||(o=i=null))};return function(){return o=this,i=arguments,r=Date.now,n||(n=setTimeout(s,e)),a}}},S=function(){function t(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];o(this,t);var n=document.createElement("canvas"),i=n.getContext("2d");this.canvas=n,this.context=i,this.disableScale=e,this.resizeHandlers=[],this.handleResize=M.debounce(this.handleResize.bind(this),100),this.adjust(),window.addEventListener("resize",this.handleResize)}return p(t,[{key:"adjust",value:function(){var t=this.canvas,e=this.context,n=this.disableScale,i=window,o=i.innerWidth,r=i.innerHeight;this.width=o,this.height=r;var a=n?1:A;this.realWidth=t.width=o*a,this.realHeight=t.height=r*a,t.style.width=o+"px",t.style.height=r+"px",e.scale(a,a)}},{key:"makeCallback",value:function(t){t(this.context,this)}},{key:"blendBackground",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?.05:arguments[1];return this.paint(function(n,i){var o=i.realWidth,r=i.realHeight,a=i.width,s=i.height;n.globalCompositeOperation="source-over",n.globalAlpha=e,n.drawImage(t,0,0,o,r,0,0,a,s)})}},{key:"paint",value:function(t){var e=this.context;return e.save(),this.makeCallback(t),e.restore(),this}},{key:"onResize",value:function(t){this.resizeHandlers.push(t)}},{key:"handleResize",value:function(){var t=this.resizeHandlers;t.length&&(this.adjust(),t.forEach(this.makeCallback.bind(this)))}},{key:"renderIntoView",value:function(){var t=arguments.length<=0||void 0===arguments[0]?document.body:arguments[0],e=this.canvas;this.container=t,e.style.position="absolute",e.style.left="0px",e.style.top="0px",t.appendChild(e)}}]),t}(),z=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],r=i.lifeTime,a=void 0===r?1e3*g:r,s=i.speed,u=void 0===s?y:s,l=i.color,c=void 0===l?L:l;o(this,t),this.lifeTime=a,this.expireAt=Date.now()+a,this.speed=u,this.color=c,this.radius=w/2,this.current=[e,n],this.visited={},this.setDest(this.randomPath())}return p(t,[{key:"randomPath",value:function(){var t=m(this.current,2),e=t[0],n=t[1],i=C.length,o=m(C[M.random(i-1)],2),r=o[0],a=o[1];return[e+r,n+a]}},{key:"composeCoord",value:function(t){return t.join(",")}},{key:"hasVisited",value:function(t){var e=this.composeCoord(t);return this.visited[e]}},{key:"setDest",value:function(t){this.destination=t,this.visited[this.composeCoord(t)]=!0}},{key:"next",value:function(){var t=this.speed,e=this.current,n=this.destination;if(Math.abs(e[0]-n[0])<=t/2&&Math.abs(e[1]-n[1])<=t/2){n=this.randomPath();for(var o=1,r=4;this.hasVisited(n)&&o<=r;)o++,n=this.randomPath();this.setDest(n)}var a=n[0]-e[0],s=n[1]-e[1];return a&&(e[0]+=a/Math.abs(a)*t),s&&(e[1]+=s/Math.abs(s)*t),[].concat(i(this.current))}},{key:"paintNextTo",value:function(){var t=arguments.length<=0||void 0===arguments[0]?new S:arguments[0],e=this.radius,n=this.color,i=this.expireAt,o=this.lifeTime,r=this.next(),a=m(r,2),s=a[0],u=a[1];t.paint(function(t){t.globalAlpha=Math.max(0,i-Date.now())/o,t.fillStyle=n,t.shadowColor=n,t.shadowBlur=5*e,t.globalCompositeOperation="lighter",t.beginPath(),t.arc(s,u,e,0,2*Math.PI),t.closePath(),t.fill()})}}]),t}(),R=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],r=i.electronCount,a=void 0===r?M.random(1,4):r,s=i.background,u=void 0===s?L:s,l=i.forceElectrons,c=void 0!==l&&l,h=i.electronOptions,d=void 0===h?{}:h;o(this,t),this.background=u,this.electronOptions=d,this.forceElectrons=c,this.electronCount=Math.min(a,4),this.startY=e*k,this.startX=n*k}return p(t,[{key:"popRandom",value:function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=M.random(t.length-1);return t.splice(e,1)[0]}},{key:"createElectrons",value:function(){var t=this.startX,e=this.startY,n=this.electronCount,o=this.electronOptions,r=this.forceElectrons;if(n)for(var a=[].concat(i(D)),s=r?n:Math.min(n,x-T.length),u=0;u<s;u++){var l=this.popRandom(a),c=m(l,2),h=c[0],d=c[1];T.push(new z(t+h,e+d,o))}}}]),t}(),q=new S,j=new S,H=void 0;q.onResize(a),j.onResize(l),j.renderIntoView(),l(),c(),document.addEventListener("touchmove",function(t){return t.preventDefault()});var O='{\n    <p>Bio:<a>"Web/UI Designer and Front-end Developer"</a>,</p>\n    <p>Email:<a>"LoeiFy@gmail.com"</a>,</p>\n    <p>Github:<a>"https://github.com/LoeiFy"</a></p>\n    }',P=".object {\n    font-family: monospace;\n    font-size: 14px;\n    color: #d2dee8;\n}\n.object p {\n    margin-left: 40px;\n    line-height: 1.4;\n}\n.object a {\n    color: #93d7f7;\n    margin-left: 10px;\n}\n",F=document.querySelector(".object"),I=document.querySelector(".css"),X=document.querySelector(".style"),Y=0,B=0;f(),I.addEventListener("focus",function(t){X.style.background="#262c2f"}),I.addEventListener("blur",function(t){X.style.background="#000",window.scroll(0,0)}),I.addEventListener("input",function(t){v()});var N=[],V={},W=!1;X.addEventListener("mousedown",function(t){"P"==t.target.tagName&&(W=!0,N=[X.offsetLeft-t.clientX,X.offsetTop-t.clientY])},!1),X.addEventListener("touchstart",function(t){W=!0,N=[X.offsetLeft-t.touches[0].clientX,X.offsetTop-t.touches[0].clientY]},!1),document.addEventListener("mouseup",function(t){return W=!1}),document.addEventListener("touchend",function(t){return W=!1}),document.addEventListener("mousemove",function(t){t.preventDefault(),W&&(V={x:t.clientX,y:t.clientY},X.style.right="auto",X.style.left=V.x+N[0]+"px",X.style.top=V.y+N[1]+"px")}),document.addEventListener("touchmove",function(t){t.preventDefault(),W&&(V={x:t.touches[0].clientX,y:t.touches[0].clientY},X.style.right="auto",X.style.left=V.x+N[0]+"px",X.style.top=V.y+N[1]+"px")})},{}]},{},[1]);