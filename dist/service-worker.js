if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,n,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const l={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return i;case"module":return l;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"828b78efffa2bab83487bad0356699ec"},{url:"09987230334d5fd7ca55.jpg",revision:null},{url:"1ff4812f21968bf6f1ff.jpg",revision:null},{url:"32fbb9d7563d7e2d86cc.jpg",revision:null},{url:"47a447cdadeafeef114068e71c3ed62e.jpg",revision:null},{url:"5ebfb956e03c3ebff3008541109e45e4.jpg",revision:null},{url:"7a5be874cbd6da9dc643ec663d0d0813.jpg",revision:null},{url:"9962f118e298c3130c585bf86f4bbdaa.jpg",revision:null},{url:"c1cc7ed07feb7f99fa4a.jpg",revision:null},{url:"e8c6154c251cbd2d65fe764ba5ababd8.jpg",revision:null},{url:"main.css",revision:"1f45c42a2fe51ceea5f6a61caaab4b5c"},{url:"main.js",revision:"fddb54544833a36a9d0d168e8db8cb93"}],{})}));
//# sourceMappingURL=service-worker.js.map