(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),l=n(2725),f=n(3462),c=n(1018),i=n(7190),s=n(1210),d=n(8684);var p="undefined"!==typeof u.default.useTransition,v={};function h(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var y=u.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,_=e.children,b=e.prefetch,g=e.passHref,j=e.replace,M=e.shallow,x=e.scroll,m=e.locale,C=e.onClick,E=e.onMouseEnter,O=e.legacyBehavior,k=void 0===O?!0!==Boolean(!1):O,w=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=_,!k||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var L=!1!==b,R=r(p?u.default.useTransition():[],2)[1],P=u.default.useContext(f.RouterContext),I=u.default.useContext(c.AppRouterContext);I&&(P=I);var N,T=u.default.useMemo((function(){var e=r(a.resolveHref(P,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?a.resolveHref(P,y):n||t}}),[P,o,y]),U=T.href,A=T.as,B=u.default.useRef(U),D=u.default.useRef(A);k&&(N=u.default.Children.only(n));var H=k?N&&"object"===typeof N&&N.ref:t,K=r(i.useIntersection({rootMargin:"200px"}),3),S=K[0],X=K[1],Z=K[2],q=u.default.useCallback((function(e){D.current===A&&B.current===U||(Z(),D.current=A,B.current=U),S(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[A,H,U,Z,S]);u.default.useEffect((function(){var e=X&&L&&a.isLocalURL(U),t="undefined"!==typeof m?m:P&&P.locale,n=v[U+"%"+A+(t?"%"+t:"")];e&&!n&&h(P,U,A,{locale:t})}),[A,U,X,m,L,P]);var z={ref:q,onClick:function(e){k||"function"!==typeof C||C(e),k&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,l,f,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var i=function(){t[o?"replace":"push"](n,r,{shallow:u,locale:f,scroll:l})};c?c(i):i()}}(e,P,U,A,j,M,x,m,I?R:void 0)},onMouseEnter:function(e){k||"function"!==typeof E||E(e),k&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),a.isLocalURL(U)&&h(P,U,A,{priority:!0})}};if(!k||g||"a"===N.type&&!("href"in N.props)){var F="undefined"!==typeof m?m:P&&P.locale,G=P&&P.isLocaleDomain&&s.getDomainLocale(A,F,P.locales,P.domainLocales);z.href=G||d.addBasePath(l.addLocale(A,F,P&&P.defaultLocale))}return k?u.default.cloneElement(N,z):u.default.createElement("a",Object.assign({},w,z),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,i=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],v=r(o.useState(null),2),h=v[0],y=v[1];o.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),c||d)return;return h&&h.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=f.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&f.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[h,c,n,t,d]);var _=o.useCallback((function(){p(!1)}),[]);return[y,d,_]};var o=n(7294),u=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.AppRouterContext=o},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return c}});var r=n(5893),o=n(9008),u=n.n(o),a=n(1664),l=n.n(a),f=!0;function c(e){var t=e.posts,n=e.date;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u(),{children:(0,r.jsx)("title",{children:"Mon super blog"})}),(0,r.jsx)("h1",{children:n}),(0,r.jsx)("ul",{children:t.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/blog/".concat(e.id),children:(0,r.jsx)("a",{children:(0,r.jsxs)("h3",{children:[e.id,"--",e.title]})})})},e.id)}))})]})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);