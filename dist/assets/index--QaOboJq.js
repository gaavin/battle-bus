(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var I,a,$e,E,_e,we,Z,x={},Pe=[],Te=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j=Array.isArray;function S(e,_){for(var t in _)e[t]=_[t];return e}function Se(e){var _=e.parentNode;_&&_.removeChild(e)}function G(e,_,t){var n,r,o,u={};for(o in _)o=="key"?n=_[o]:o=="ref"?r=_[o]:u[o]=_[o];if(arguments.length>2&&(u.children=arguments.length>3?I.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return T(e,u,n,r,null)}function T(e,_,t,n,r){var o={type:e,props:_,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++$e,__i:-1,__u:0};return r==null&&a.vnode!=null&&a.vnode(o),o}function H(e){return e.children}function $(e,_){this.props=e,this.context=_}function C(e,_){if(_==null)return e.__?C(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?C(e):null}function Ee(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Ee(e)}}function te(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!F.__r++||_e!==a.debounceRendering)&&((_e=a.debounceRendering)||we)(F)}function F(){var e,_,t,n,r,o,u,l,c;for(E.sort(Z);e=E.shift();)e.__d&&(_=E.length,n=void 0,o=(r=(t=e).__v).__e,l=[],c=[],(u=t.__P)&&((n=S({},r)).__v=r.__v+1,a.vnode&&a.vnode(n),X(u,n,r,t.__n,u.ownerSVGElement!==void 0,32&r.__u?[o]:null,l,o??C(r),!!(32&r.__u),c),n.__.__k[n.__i]=n,Ne(l,n,c),n.__e!=o&&Ee(n)),E.length>_&&E.sort(Z));F.__r=0}function He(e,_,t,n,r,o,u,l,c,f,p){var i,d,s,y,k,m=n&&n.__k||Pe,h=_.length;for(t.__d=c,Me(t,_,m),c=t.__d,i=0;i<h;i++)(s=t.__k[i])!=null&&typeof s!="boolean"&&typeof s!="function"&&(d=s.__i===-1?x:m[s.__i]||x,s.__i=i,X(e,s,d,r,o,u,l,c,f,p),y=s.__e,s.ref&&d.ref!=s.ref&&(d.ref&&Y(d.ref,null,s),p.push(s.ref,s.__c||y,s)),k==null&&y!=null&&(k=y),65536&s.__u||d.__k===s.__k?c=Ce(s,c,e):typeof s.type=="function"&&s.__d!==void 0?c=s.__d:y&&(c=y.nextSibling),s.__d=void 0,s.__u&=-196609);t.__d=c,t.__e=k}function Me(e,_,t){var n,r,o,u,l,c=_.length,f=t.length,p=f,i=0;for(e.__k=[],n=0;n<c;n++)(r=e.__k[n]=(r=_[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?T(null,r,null,null,r):j(r)?T(H,{children:r},null,null,null):r.__b>0?T(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,l=We(r,t,u=n+i,p),r.__i=l,o=null,l!==-1&&(p--,(o=t[l])&&(o.__u|=131072)),o==null||o.__v===null?(l==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):l!==u&&(l===u+1?i++:l>u?p>c-u?i+=l-u:i--:i=l<u&&l==u-1?l-u:0,l!==n+i&&(r.__u|=65536))):(o=t[n])&&o.key==null&&o.__e&&(o.__e==e.__d&&(e.__d=C(o)),J(o,o,!1),t[n]=null,p--);if(p)for(n=0;n<f;n++)(o=t[n])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=C(o)),J(o,o))}function Ce(e,_,t){var n,r;if(typeof e.type=="function"){for(n=e.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=e,_=Ce(n[r],_,t));return _}return e.__e!=_&&(t.insertBefore(e.__e,_||null),_=e.__e),_&&_.nextSibling}function V(e,_){return _=_||[],e==null||typeof e=="boolean"||(j(e)?e.some(function(t){V(t,_)}):_.push(e)),_}function We(e,_,t,n){var r=e.key,o=e.type,u=t-1,l=t+1,c=_[t];if(c===null||c&&r==c.key&&o===c.type)return t;if(n>(c!=null&&!(131072&c.__u)?1:0))for(;u>=0||l<_.length;){if(u>=0){if((c=_[u])&&!(131072&c.__u)&&r==c.key&&o===c.type)return u;u--}if(l<_.length){if((c=_[l])&&!(131072&c.__u)&&r==c.key&&o===c.type)return l;l++}}return-1}function ne(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||Te.test(_)?t:t+"px"}function A(e,_,t,n,r){var o;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(_ in n)t&&_ in t||ne(e.style,_,"");if(t)for(_ in t)n&&t[_]===n[_]||ne(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/(PointerCapture)$|Capture$/,"$1")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?n?t.u=n.u:(t.u=Date.now(),e.addEventListener(_,o?oe:re,o)):e.removeEventListener(_,o?oe:re,o);else{if(r)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_!=="rowSpan"&&_!=="colSpan"&&_!=="role"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function re(e){var _=this.l[e.type+!1];if(e.t){if(e.t<=_.u)return}else e.t=Date.now();return _(a.event?a.event(e):e)}function oe(e){return this.l[e.type+!0](a.event?a.event(e):e)}function X(e,_,t,n,r,o,u,l,c,f){var p,i,d,s,y,k,m,h,g,w,O,N,ee,U,B,b=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),o=[l=_.__e=t.__e]),(p=a.__b)&&p(_);e:if(typeof b=="function")try{if(h=_.props,g=(p=b.contextType)&&n[p.__c],w=p?g?g.props.value:p.__:n,t.__c?m=(i=_.__c=t.__c).__=i.__E:("prototype"in b&&b.prototype.render?_.__c=i=new b(h,w):(_.__c=i=new $(h,w),i.constructor=b,i.render=Ve),g&&g.sub(i),i.props=h,i.state||(i.state={}),i.context=w,i.__n=n,d=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=S({},i.__s)),S(i.__s,b.getDerivedStateFromProps(h,i.__s))),s=i.props,y=i.state,i.__v=_,d)b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(b.getDerivedStateFromProps==null&&h!==s&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,w),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,w)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(i.props=h,i.state=i.__s,i.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(D){D&&(D.__=_)}),O=0;O<i._sb.length;O++)i.__h.push(i._sb[O]);i._sb=[],i.__h.length&&u.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,w),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(s,y,k)})}if(i.context=w,i.props=h,i.__P=e,i.__e=!1,N=a.__r,ee=0,"prototype"in b&&b.prototype.render){for(i.state=i.__s,i.__d=!1,N&&N(_),p=i.render(i.props,i.state,i.context),U=0;U<i._sb.length;U++)i.__h.push(i._sb[U]);i._sb=[]}else do i.__d=!1,N&&N(_),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ee<25);i.state=i.__s,i.getChildContext!=null&&(n=S(S({},n),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(k=i.getSnapshotBeforeUpdate(s,y)),He(e,j(B=p!=null&&p.type===H&&p.key==null?p.props.children:p)?B:[B],_,t,n,r,o,u,l,c,f),i.base=_.__e,_.__u&=-161,i.__h.length&&u.push(i),m&&(i.__E=i.__=null)}catch(D){_.__v=null,c||o!=null?(_.__e=l,_.__u|=c?160:32,o[o.indexOf(l)]=null):(_.__e=t.__e,_.__k=t.__k),a.__e(D,_,t)}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=Fe(t.__e,_,t,n,r,o,u,c,f);(p=a.diffed)&&p(_)}function Ne(e,_,t){_.__d=void 0;for(var n=0;n<t.length;n++)Y(t[n],t[++n],t[++n]);a.__c&&a.__c(_,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){a.__e(o,r.__v)}})}function Fe(e,_,t,n,r,o,u,l,c){var f,p,i,d,s,y,k,m=t.props,h=_.props,g=_.type;if(g==="svg"&&(r=!0),o!=null){for(f=0;f<o.length;f++)if((s=o[f])&&"setAttribute"in s==!!g&&(g?s.localName===g:s.nodeType===3)){e=s,o[f]=null;break}}if(e==null){if(g===null)return document.createTextNode(h);e=r?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,h.is&&h),o=null,l=!1}if(g===null)m===h||l&&e.data===h||(e.data=h);else{if(o=o&&I.call(e.childNodes),m=t.props||x,!l&&o!=null)for(m={},f=0;f<e.attributes.length;f++)m[(s=e.attributes[f]).name]=s.value;for(f in m)s=m[f],f=="children"||(f=="dangerouslySetInnerHTML"?i=s:f==="key"||f in h||A(e,f,null,s,r));for(f in h)s=h[f],f=="children"?d=s:f=="dangerouslySetInnerHTML"?p=s:f=="value"?y=s:f=="checked"?k=s:f==="key"||l&&typeof s!="function"||m[f]===s||A(e,f,s,m[f],r);if(p)l||i&&(p.__html===i.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),_.__k=[];else if(i&&(e.innerHTML=""),He(e,j(d)?d:[d],_,t,n,r&&g!=="foreignObject",o,u,o?o[0]:t.__k&&C(t,0),l,c),o!=null)for(f=o.length;f--;)o[f]!=null&&Se(o[f]);l||(f="value",y!==void 0&&(y!==e[f]||g==="progress"&&!y||g==="option"&&y!==m[f])&&A(e,f,y,m[f],!1),f="checked",k!==void 0&&k!==e[f]&&A(e,f,k,m[f],!1))}return e}function Y(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(n){a.__e(n,t)}}function J(e,_,t){var n,r;if(a.unmount&&a.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Y(n,null,_)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){a.__e(o,_)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(r=0;r<n.length;r++)n[r]&&J(n[r],_,t||typeof e.type!="function");t||e.__e==null||Se(e.__e),e.__=e.__e=e.__d=void 0}function Ve(e,_,t){return this.constructor(e,t)}function Re(e,_,t){var n,r,o,u;a.__&&a.__(e,_),r=(n=typeof t=="function")?null:t&&t.__k||_.__k,o=[],u=[],X(_,e=(!n&&t||_).__k=G(H,null,[e]),r||x,x,_.ownerSVGElement!==void 0,!n&&t?[t]:r?null:_.firstChild?I.call(_.childNodes):null,o,!n&&t?t:r?r.__e:_.firstChild,n,u),Ne(o,e,u)}I=Pe.slice,a={__e:function(e,_,t,n){for(var r,o,u;_=_.__;)if((r=_.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),u=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,n||{}),u=r.__d),u)return r.__E=r}catch(l){e=l}throw e}},$e=0,$.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},t),this.props)),e&&S(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),te(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},$.prototype.render=H,E=[],we=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Z=function(e,_){return e.__v.__b-_.__v.__b},F.__r=0;var R,v,q,ie,K=0,xe=[],M=[],le=a.__b,ue=a.__r,ce=a.diffed,fe=a.__c,ae=a.unmount;function Oe(e,_){a.__h&&a.__h(v,e,K||_),K=0;var t=v.__H||(v.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:M}),t.__[e]}function Ie(e){return K=1,je(Ue,e)}function je(e,_,t){var n=Oe(R++,2);if(n.t=e,!n.__c&&(n.__=[t?t(_):Ue(void 0,_),function(l){var c=n.__N?n.__N[0]:n.__[0],f=n.t(c,l);c!==f&&(n.__N=[f,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.u)){var r=function(l,c,f){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(d){return d.__c});if(p.every(function(d){return!d.__N}))return!o||o.call(this,l,c,f);var i=!1;return p.forEach(function(d){if(d.__N){var s=d.__[0];d.__=d.__N,d.__N=void 0,s!==d.__[0]&&(i=!0)}}),!(!i&&n.__c.props===l)&&(!o||o.call(this,l,c,f))};v.u=!0;var o=v.shouldComponentUpdate,u=v.componentWillUpdate;v.componentWillUpdate=function(l,c,f){if(this.__e){var p=o;o=void 0,r(l,c,f),o=p}u&&u.call(this,l,c,f)},v.shouldComponentUpdate=r}return n.__N||n.__}function Be(e,_){var t=Oe(R++,3);!a.__s&&Ze(t.__H,_)&&(t.__=e,t.i=_,v.__H.__h.push(t))}function qe(){for(var e;e=xe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(_){e.__H.__h=[],a.__e(_,e.__v)}}a.__b=function(e){v=null,le&&le(e)},a.__r=function(e){ue&&ue(e),R=0;var _=(v=e.__c).__H;_&&(q===v?(_.__h=[],v.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=M,t.__N=t.i=void 0})):(_.__h.forEach(W),_.__h.forEach(Q),_.__h=[],R=0)),q=v},a.diffed=function(e){ce&&ce(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(xe.push(_)!==1&&ie===a.requestAnimationFrame||((ie=a.requestAnimationFrame)||ze)(qe)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==M&&(t.__=t.__V),t.i=void 0,t.__V=M})),q=v=null},a.__c=function(e,_){_.some(function(t){try{t.__h.forEach(W),t.__h=t.__h.filter(function(n){return!n.__||Q(n)})}catch(n){_.some(function(r){r.__h&&(r.__h=[])}),_=[],a.__e(n,t.__v)}}),fe&&fe(e,_)},a.unmount=function(e){ae&&ae(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{W(n)}catch(r){_=r}}),t.__H=void 0,_&&a.__e(_,t.__v))};var se=typeof requestAnimationFrame=="function";function ze(e){var _,t=function(){clearTimeout(n),se&&cancelAnimationFrame(_),setTimeout(e)},n=setTimeout(t,100);se&&(_=requestAnimationFrame(t))}function W(e){var _=v,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),v=_}function Q(e){var _=v;e.__c=e.__(),v=_}function Ze(e,_){return!e||e.length!==_.length||_.some(function(t,n){return t!==e[n]})}function Ue(e,_){return typeof _=="function"?_(e):_}function Ge(e,_){for(var t in _)e[t]=_[t];return e}function pe(e,_){for(var t in e)if(t!=="__source"&&!(t in _))return!0;for(var n in _)if(n!=="__source"&&e[n]!==_[n])return!0;return!1}function de(e){this.props=e}(de.prototype=new $).isPureReactComponent=!0,de.prototype.shouldComponentUpdate=function(e,_){return pe(this.props,e)||pe(this.state,_)};var he=a.__b;a.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),he&&he(e)};var Je=a.__e;a.__e=function(e,_,t,n){if(e.then){for(var r,o=_;o=o.__;)if((r=o.__c)&&r.__c)return _.__e==null&&(_.__e=t.__e,_.__k=t.__k),r.__c(e,_)}Je(e,_,t,n)};var ve=a.unmount;function De(e,_,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=Ge({},e)).__c!=null&&(e.__c.__P===t&&(e.__c.__P=_),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return De(n,_,t)})),e}function Ae(e,_,t){return e&&t&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return Ae(n,_,t)}),e.__c&&e.__c.__P===_&&(e.__e&&t.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=t)),e}function z(){this.__u=0,this.t=null,this.__b=null}function Le(e){var _=e.__.__c;return _&&_.__a&&_.__a(e)}function L(){this.u=null,this.o=null}a.unmount=function(e){var _=e.__c;_&&_.__R&&_.__R(),_&&32&e.__u&&(e.type=null),ve&&ve(e)},(z.prototype=new $).__c=function(e,_){var t=_.__c,n=this;n.t==null&&(n.t=[]),n.t.push(t);var r=Le(n.__v),o=!1,u=function(){o||(o=!0,t.__R=null,r?r(l):l())};t.__R=u;var l=function(){if(!--n.__u){if(n.state.__a){var c=n.state.__a;n.__v.__k[0]=Ae(c,c.__c.__P,c.__c.__O)}var f;for(n.setState({__a:n.__b=null});f=n.t.pop();)f.forceUpdate()}};n.__u++||32&_.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(u,u)},z.prototype.componentWillUnmount=function(){this.t=[]},z.prototype.render=function(e,_){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=De(this.__b,t,n.__O=n.__P)}this.__b=null}var r=_.__a&&G(H,null,e.fallback);return r&&(r.__u&=-33),[G(H,null,_.__a?null:e.children),r]};var ye=function(e,_,t){if(++t[1]===t[0]&&e.o.delete(_),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};(L.prototype=new $).__a=function(e){var _=this,t=Le(_.__v),n=_.o.get(e);return n[0]++,function(r){var o=function(){_.props.revealOrder?(n.push(r),ye(_,e,n)):r()};t?t(o):o()}},L.prototype.render=function(e){this.u=null,this.o=new Map;var _=V(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&_.reverse();for(var t=_.length;t--;)this.o.set(_[t],this.u=[1,0,this.u]);return e.children},L.prototype.componentDidUpdate=L.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(_,t){ye(e,t,_)})};var Ke=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Qe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Xe=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ye=/[A-Z0-9]/g,e_=typeof document<"u",__=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function t_(e,_,t){return _.__k==null&&(_.textContent=""),Re(e,_),typeof t=="function"&&t(),e?e.__c:null}$.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty($.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(_){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:_})}})});var me=a.event;function n_(){}function r_(){return this.cancelBubble}function o_(){return this.defaultPrevented}a.event=function(e){return me&&(e=me(e)),e.persist=n_,e.isPropagationStopped=r_,e.isDefaultPrevented=o_,e.nativeEvent=e};var i_={enumerable:!1,configurable:!0,get:function(){return this.class}},ge=a.vnode;a.vnode=function(e){typeof e.type=="string"&&function(_){var t=_.props,n=_.type,r={};for(var o in t){var u=t[o];if(!(o==="value"&&"defaultValue"in t&&u==null||e_&&o==="children"&&n==="noscript"||o==="class"||o==="className")){var l=o.toLowerCase();o==="defaultValue"&&"value"in t&&t.value==null?o="value":o==="download"&&u===!0?u="":l==="ondoubleclick"?o="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||__(t.type)?l==="onfocus"?o="onfocusin":l==="onblur"?o="onfocusout":Xe.test(o)?o=l:n.indexOf("-")===-1&&Qe.test(o)?o=o.replace(Ye,"-$&").toLowerCase():u===null&&(u=void 0):l=o="oninput",l==="oninput"&&r[o=l]&&(o="oninputCapture"),r[o]=u}}n=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=V(t.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),n=="select"&&r.defaultValue!=null&&(r.value=V(t.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",i_)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),_.props=r}(e),e.$$typeof=Ke,ge&&ge(e)};var be=a.__r;a.__r=function(e){be&&be(e),e.__c};var ke=a.diffed;a.diffed=function(e){ke&&ke(e);var _=e.props,t=e.__e;t!=null&&e.type==="textarea"&&"value"in _&&_.value!==t.value&&(t.value=_.value==null?"":_.value)};var l_=0;function P(e,_,t,n,r,o){var u,l,c={};for(l in _)l=="ref"?u=_[l]:c[l]=_[l];var f={type:e,props:c,key:t,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--l_,__i:-1,__u:0,__source:r,__self:o};if(typeof e=="function"&&(u=e.defaultProps))for(l in u)c[l]===void 0&&(c[l]=u[l]);return a.vnode&&a.vnode(f),f}function u_(){const[e,_]=Ie();return Be(()=>{const t=setInterval(async()=>{try{const r=await(await fetch("https://www.ttrack.info/api/timetrack/json")).json();_(r)}catch(n){console.error("Error fetching data:",n)}},3e4);return()=>clearInterval(t)},[]),P("div",{children:P("pre",{children:JSON.stringify(e,null,2)})})}function c_(){return P(H,{children:[P("div",{children:P("p",{children:"root"})}),P("div",{children:P(u_,{})})]})}t_(P(c_,{}),document.getElementById("app"));
