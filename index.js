!function t(e,n,i){function r(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var h=n[a]={exports:{}};e[a][0].call(h.exports,function(t){var n=e[a][1][t];return r(n?n:t)},h,h.exports,t,e,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];if(!(T.length>=k)){var e=j.width,n=j.height,i=new R(L.random(n/x),L.random(e/x),t);i.createElectrons()}}function a(){q.paint(function(t,e){var n=e.width,i=e.height;t.fillStyle=A,t.fillRect(0,0,n,i)})}function s(){for(var t=Date.now(),e=0,n=T.length;e<n;e++){var i=T[e];t>=i.expireAt?(T.splice(e,1),e--,n--):i.paintNextTo(j)}}function u(){var t=Date.now();t<H||(H=t+L.random(300,1e3),o())}function l(){a(),j.paint(function(t,e){var n=e.width,i=e.height;t.fillStyle="#fff",t.fillRect(0,0,n,i)}),j.blendBackground(q.canvas,.9)}function h(){j.blendBackground(q.canvas),s(),u(),requestAnimationFrame(h)}function c(){I.innerHTML=P.substr(0,V),V++,P.length>=V?(v(),setTimeout(c,100)):I.setAttribute("contenteditable",!0)}function d(){var t=F.children[1].querySelector("a"),e=F.children[2].querySelector("a");t.setAttribute("target","_blank"),t.setAttribute("href","mailto:LoeiFy@gmail.com"),e.setAttribute("target","_blank"),e.setAttribute("href","https://github.com/LoeiFy"),B.style.display="block"}function f(){F.innerHTML=O.substr(0,N)+"<em>|</em>",N++,O.length>=N?setTimeout(f,100):(d(),c())}function v(){for(var t=document.querySelector(".line"),e=(I.offsetHeight-28)/16,n="",i=1;i<=e;i++)n+=i+"<br />";t.innerHTML=n}var p=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),m=function(){function t(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=3,y=10,b=20,w=2,k=3,x=b+w,A="#263238",E="#d34b6a",C=window.devicePixelRatio||1,T=[],D=[[0,1],[0,-1],[1,0],[-1,0]].map(function(t){var e=m(t,2),n=e[0],i=e[1];return[n*x,i*x]}),M=[[0,0],[0,1],[1,0],[1,1]].map(function(t){var e=m(t,2),n=e[0],i=e[1];return[n*x-w/2,i*x-w/2]}),L={random:function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},debounce:function(t,e){var n=void 0,i=void 0,r=void 0,o=void 0,a=void 0,s=function s(){var u=Date.now-o;u<e&&u>=0?n=setTimeout(s,e-u):(n=null,a=t.apply(r,i),n||(r=i=null))};return function(){return r=this,i=arguments,o=Date.now,n||(n=setTimeout(s,e)),a}}},S=function(){function t(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];r(this,t);var n=document.createElement("canvas"),i=n.getContext("2d");this.canvas=n,this.context=i,this.disableScale=e,this.resizeHandlers=[],this.handleResize=L.debounce(this.handleResize.bind(this),100),this.adjust(),window.addEventListener("resize",this.handleResize)}return p(t,[{key:"adjust",value:function(){var t=this.canvas,e=this.context,n=this.disableScale,i=window,r=i.innerWidth,o=i.innerHeight;this.width=r,this.height=o;var a=n?1:C;this.realWidth=t.width=r*a,this.realHeight=t.height=o*a,t.style.width=r+"px",t.style.height=o+"px",e.scale(a,a)}},{key:"makeCallback",value:function(t){t(this.context,this)}},{key:"blendBackground",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?.05:arguments[1];return this.paint(function(n,i){var r=i.realWidth,o=i.realHeight,a=i.width,s=i.height;n.globalCompositeOperation="source-over",n.globalAlpha=e,n.drawImage(t,0,0,r,o,0,0,a,s)})}},{key:"paint",value:function(t){var e=this.context;return e.save(),this.makeCallback(t),e.restore(),this}},{key:"onResize",value:function(t){this.resizeHandlers.push(t)}},{key:"handleResize",value:function(){var t=this.resizeHandlers;t.length&&(this.adjust(),t.forEach(this.makeCallback.bind(this)))}},{key:"renderIntoView",value:function(){var t=arguments.length<=0||void 0===arguments[0]?document.body:arguments[0],e=this.canvas;this.container=t,e.style.position="absolute",e.style.left="0px",e.style.top="0px",t.appendChild(e)}}]),t}(),z=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=i.lifeTime,a=void 0===o?1e3*y:o,s=i.speed,u=void 0===s?g:s,l=i.color,h=void 0===l?E:l;r(this,t),this.lifeTime=a,this.expireAt=Date.now()+a,this.speed=u,this.color=h,this.radius=w/2,this.current=[e,n],this.visited={},this.setDest(this.randomPath())}return p(t,[{key:"randomPath",value:function(){var t=m(this.current,2),e=t[0],n=t[1],i=D.length,r=m(D[L.random(i-1)],2),o=r[0],a=r[1];return[e+o,n+a]}},{key:"composeCoord",value:function(t){return t.join(",")}},{key:"hasVisited",value:function(t){var e=this.composeCoord(t);return this.visited[e]}},{key:"setDest",value:function(t){this.destination=t,this.visited[this.composeCoord(t)]=!0}},{key:"next",value:function(){var t=this.speed,e=this.current,n=this.destination;if(Math.abs(e[0]-n[0])<=t/2&&Math.abs(e[1]-n[1])<=t/2){n=this.randomPath();for(var r=1,o=4;this.hasVisited(n)&&r<=o;)r++,n=this.randomPath();this.setDest(n)}var a=n[0]-e[0],s=n[1]-e[1];return a&&(e[0]+=a/Math.abs(a)*t),s&&(e[1]+=s/Math.abs(s)*t),[].concat(i(this.current))}},{key:"paintNextTo",value:function(){var t=arguments.length<=0||void 0===arguments[0]?new S:arguments[0],e=this.radius,n=this.color,i=this.expireAt,r=this.lifeTime,o=this.next(),a=m(o,2),s=a[0],u=a[1];t.paint(function(t){t.globalAlpha=Math.max(0,i-Date.now())/r,t.fillStyle=n,t.shadowColor=n,t.shadowBlur=5*e,t.globalCompositeOperation="lighter",t.beginPath(),t.arc(s,u,e,0,2*Math.PI),t.closePath(),t.fill()})}}]),t}(),R=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=i.electronCount,a=void 0===o?L.random(1,4):o,s=i.background,u=void 0===s?E:s,l=i.forceElectrons,h=void 0!==l&&l,c=i.electronOptions,d=void 0===c?{}:c;r(this,t),this.background=u,this.electronOptions=d,this.forceElectrons=h,this.electronCount=Math.min(a,4),this.startY=e*x,this.startX=n*x}return p(t,[{key:"popRandom",value:function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=L.random(t.length-1);return t.splice(e,1)[0]}},{key:"createElectrons",value:function(){var t=this.startX,e=this.startY,n=this.electronCount,r=this.electronOptions,o=this.forceElectrons;if(n)for(var a=[].concat(i(M)),s=o?n:Math.min(n,k-T.length),u=0;u<s;u++){var l=this.popRandom(a),h=m(l,2),c=h[0],d=h[1];T.push(new z(t+c,e+d,r))}}}]),t}(),q=new S,j=new S,H=void 0;q.onResize(a),j.onResize(l),j.renderIntoView(),l(),h(),document.addEventListener("touchmove",function(t){return t.preventDefault()});var O='{\n    <p>Bio:    <a>"Web/UI Designer and Front-end Developer"</a>,</p>\n    <p>Email:  <a>"LoeiFy@gmail.com"</a>,</p>\n    <p>Github: <a>"https://github.com/LoeiFy"</a></p>\n    }',P=".object {\n    font-family: monospace;\n    font-size: 14px;\n    color: #d2dee8;\n}\n.object p {\n    white-space: pre;\n    margin-left: 40px;\n}\n.object a {\n    color: #93d7f7;\n}\n",F=document.querySelector(".object"),I=document.querySelector(".css"),B=document.querySelector(".style"),N=0,V=0;f(),I.addEventListener("focus",function(t){B.style.background="#262c2f"}),I.addEventListener("blur",function(t){B.style.background="#000"}),I.addEventListener("input",function(t){v()})},{}]},{},[1]);
//# sourceMappingURL=index.js.map
