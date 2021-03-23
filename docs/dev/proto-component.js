!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n}function s(t,n){t.appendChild(n)}function c(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function f(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function p(t){const n={};for(const e of t)n[e.name]=e.value;return n}let m;function h(t){m=t}function g(){if(!m)throw new Error("Function called outside component initialization");return m}const $=[],y=[],b=[],v=[],E=Promise.resolve();let _=!1;function x(t){b.push(t)}let T=!1;const w=new Set;function k(){if(!T){T=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];h(n),F(n.$$)}for(h(null),$.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];w.has(n)||(w.add(n),n())}b.length=0}while($.length);for(;v.length;)v.pop()();_=!1,T=!1,w.clear()}}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const C=new Set;function L(t,n){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,E.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function I(r,s,c,l,u,d,f=[-1]){const p=m;h(r);const g=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:f,skip_bound:!1};let $=!1;if(g.ctx=c?c(r,s.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&u(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),$&&L(r,t)),n})):[],g.update(),$=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();s.intro&&((y=r.$$.fragment)&&y.i&&(C.delete(y),y.i(b))),function(t,e,r,s){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,r),s||x((()=>{const e=a.map(n).filter(i);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(x)}(r,s.target,s.anchor,s.customElement),k()}var y,b;h(p)}let S;function z(t,n,e){const o=t.slice();return o[10]=n[e],o}function A(t){let n,e;return{c(){n=l("div"),d(n,"class",e=`TranscriptItem ${null!==t[10].entityType?"Entity":""} ${t[10].isFinal?"Final":""} ${t[10].entityType??""}`)},m(t,e){c(t,n,e)},p(t,o){1&o&&e!==(e=`TranscriptItem ${null!==t[10].entityType?"Entity":""} ${t[10].isFinal?"Final":""} ${t[10].entityType??""}`)&&d(n,"class",e)},d(t){t&&a(n)}}}function N(n){let e,o,i,r,p,m,h=n[0],g=[];for(let t=0;t<h.length;t+=1)g[t]=A(z(n,h,t));return{c(){e=l("div"),o=l("div"),o.textContent="Test test 3",i=u(),r=l("div");for(let t=0;t<g.length;t+=1)g[t].c();this.c=t,f(o,"color","red"),f(r,"margin-bottom","1.5rem"),d(e,"class","BigTranscript")},m(t,a){c(t,e,a),s(e,o),s(e,i),s(e,r);for(let t=0;t<g.length;t+=1)g[t].m(r,null);var l,u,d,f;p||(l=window,u="message",d=n[2],l.addEventListener(u,d,f),m=()=>l.removeEventListener(u,d,f),p=!0)},p(t,[n]){if(1&n){let e;for(h=t[0],e=0;e<h.length;e+=1){const o=z(t,h,e);g[e]?g[e].p(o,n):(g[e]=A(o),g[e].c(),g[e].m(r,null))}for(;e<g.length;e+=1)g[e].d(1);g.length=h.length}},i:t,o:t,d(t){t&&a(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(g,t),p=!1,m()}}}function B(t,n,e){const o=g(),i=(t,n)=>{o.dispatchEvent(new CustomEvent(t,{detail:n,composed:!0}))};let r=[{word:"Initializing",entityType:null,isFinal:!0,serialNumber:1}];const s=t=>{i("debug","proto-component.ping 1")},c=t=>{i("debug","proto-component.onSegmentUpdate 1"),void 0!==t&&(i("debug","proto-component.onSegmentUpdate 2"),t.isFinal,e(0,r=[]),t.words.forEach((t=>{e(0,r[t.index]={word:t.value,serialNumber:t.index,entityType:null,isFinal:t.isFinal},r)})),t.entities.forEach((t=>{r.slice(t.startPosition,t.endPosition).forEach((n=>{n.entityType=t.type,n.isFinal=t.isFinal}))})),e(0,r=r.flat()))};var a;o.onSegmentUpdate=c,a=()=>{console.log("-------------------------");const t=t=>c(t.detail);return o.addEventListener("segment-update",t),o.addEventListener("ping",s),()=>{cancelAnimationFrame(null),o.removeEventListener("ping",s),o.removeEventListener("segment-update",t)}},g().$$.on_mount.push(a);return[r,c,t=>{"segment-update"===t.data.type&&c(t.data.segment)}]}"function"==typeof HTMLElement&&(S=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});customElements.define("proto-component",class extends S{constructor(t){super(),this.shadowRoot.innerHTML="<style>.BigTranscript{position:relative;user-select:none}.TranscriptItem{position:relative;display:inline-block;margin-left:0.25rem}.Entity{color:cyan}.TransscriptItemContent{z-index:1}.TransscriptItemBgDiv{position:absolute;box-sizing:content-box;width:100%;height:100%;margin:-0.4rem -0.6rem;padding:0.4rem 0.6rem;background-color:#000;z-index:-1}</style>",I(this,{target:this.shadowRoot,props:p(this.attributes),customElement:!0},B,N,r,{}),t&&t.target&&c(t.target,this,t.anchor)}})}();
//# sourceMappingURL=proto-component.js.map
