(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[15],{1086:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n(11),c=n(31),u=n.n(c),a=n(53),i=n(73),o=n(2),s=n(32),l=n(250),d=n(934),f=n(888),b=n(895),h=n(196),v=n(260),j=n(893),O=n(932),p=n(3),m=function(e,t,n){var r=function(e,t,n){return Object(o.useMemo)((function(){var r,c,u=null===(r=e.videos||(null===t||void 0===t?void 0:t.episodes))||void 0===r?void 0:r.find((function(e){return e.number===n.number+1}));if(u)return u;var a=null===(c=e.seasons)||void 0===c?void 0:c.find((function(e){return e.number===t.number+1}));return a?a.episodes[0]:void 0}),[e,t,n])}(e,t,n);return[function(e,t,n){return Object(o.useMemo)((function(){var r,c,u=null===(r=e.videos||(null===t||void 0===t?void 0:t.episodes))||void 0===r?void 0:r.find((function(e){return e.number===n.number-1}));if(u)return u;var a=null===(c=e.seasons)||void 0===c?void 0:c.find((function(e){return e.number===t.number-1}));return a?a.episodes[a.episodes.length-1]:void 0}),[e,t,n])}(e,t,n),r]},k=function(){var e=Object(s.h)(),t=Object(s.i)(),n=Object(h.a)("watchingMarkTime").watchingMarkTimeAsync,c=Object(v.a)("streaming_type"),k=Object(i.a)(c,1)[0],y=t.state||{},g=y.item,T=y.video,C=y.season,x=Object(o.useState)(T),R=Object(i.a)(x,2),S=R[0],E=R[1],w=m(g,C,S),N=Object(i.a)(w,2),I=N[0],U=N[1],L=Object(b.a)("itemMediaLinks",[S.id]),P=Object(o.useCallback)(function(){var e=Object(a.a)(u.a.mark((function e(t,r){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.number,e.next=3,n([g.id,r,c,null===C||void 0===C?void 0:C.number]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[n,g,C]),A=Object(o.useMemo)((function(){return(null===L||void 0===L?void 0:L.data)?{title:Object(j.c)(g,S,C),description:Object(j.a)(g,S,C),poster:g.posters.wide||g.posters.big,audios:Object(O.a)(S.audios),sources:Object(O.b)(L.data.files,k),subtitles:Object(O.c)(L.data.subtitles),startTime:S.watching.status===l.b.Watching?S.watching.time:0}:null}),[g,C,S,null===L||void 0===L?void 0:L.data,k]),Q=Object(o.useCallback)((function(e){P(S,e)}),[P,S]),F=Object(o.useCallback)((function(t){P(S,t),U?E(U):e.goBack()}),[P,e,S,U]),M=Object(o.useCallback)((function(e){var t=e.currentTime;P(S,t),I&&E(I)}),[P,S,I]),D=Object(o.useCallback)((function(e){var t=e.currentTime;P(S,t),U&&E(U)}),[P,S,U]),B=Object(o.useCallback)(function(){var e=Object(a.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(S,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[P,S]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f.a,{title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440: ".concat(g.title," - \u0412\u0438\u0434\u0435\u043e")}),A&&Object(p.jsx)(d.a,Object(r.a)(Object(r.a)({},A),{},{streamingType:k,onPause:Q,onEnded:F,onJumpBackward:M,onJumpForward:D,onTimeSync:B}),S.id)]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(11),c=n(892),u=n(3),a=function(e){return Object(u.jsx)(c.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(11),c=n(57),u=n(2),a=n(52),i=n.n(a),o=n(73),s=n(106),l=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=t.onEnterViewport,a=t.onLeaveViewport,i=Object(u.useState)(),l=Object(o.a)(i,2),d=l[1],f=Object(u.useRef)(null),b=Object(u.useRef)(!1),h=Object(u.useRef)(!1),v=Object(u.useRef)(0),j=Object(u.useRef)(0),O=Object(u.useCallback)((function(){if(e.current&&f.current){var t=Object(s.findDOMNode)(e.current);t&&f.current.observe(t)}}),[e,f]),p=Object(u.useCallback)((function(){if(e.current&&f.current){var t=Object(s.findDOMNode)(e.current);t&&(f.current.unobserve(t),f.current.disconnect(),f.current=null)}}),[e,f]),m=Object(u.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,u=t.intersectionRatio,i="undefined"!==typeof n?n:u>0;if(!h.current&&i)return h.current=!0,null===c||void 0===c||c(),v.current+=1,b.current=i,void d(i);h.current&&!i&&(h.current=!1,null===a||void 0===a||a(),r.disconnectOnLeave&&f.current&&f.current.disconnect(),j.current+=1,b.current=i,d(i))}),[f,r.disconnectOnLeave,c,a]),k=Object(u.useCallback)((function(){f.current||(f.current=new IntersectionObserver(m,n))}),[f,n,m]);return Object(u.useEffect)((function(){return k(),O(),function(){p()}}),[k,O,p]),{inViewport:b.current,enterCount:v.current,leaveCount:j.current}},d=n(3),f=["children","className","onScrollToEnd"],b=function(e){var t=e.children,n=e.className,a=e.onScrollToEnd,o=Object(c.a)(e,f),s=Object(u.useRef)(null);return l(s,{onEnterViewport:a}),Object(d.jsxs)("div",Object(r.a)(Object(r.a)({className:i()("overflow-y-auto h-full",n)},o),{},{children:[t,a&&Object(d.jsx)("div",{className:"h-40",ref:s})]}))}},893:function(e,t,n){"use strict";function r(e,t,n){var r=(null===e||void 0===e?void 0:e.title)||"";return n?"".concat(r," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function c(e,t,n){var r=(null===t||void 0===t?void 0:t.title)||"";return n?"".concat(r," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function u(e){return(null===e||void 0===e?void 0:e.quality)?2160===e.quality?"4k":1080===e.quality||720===e.quality?"hd":"sd":null}n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}))},894:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),c=n.n(r),u=n(25);function a(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var i=c.a.createContext(a()),o=n(257);function s(e,t){var n=c.a.useRef(!1),r=c.a.useState(0)[1],a=Object(o.b)(),s=c.a.useContext(i),l=a.defaultQueryObserverOptions(e);l.optimisticResults=!0,l.onError&&(l.onError=u.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=u.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=u.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(s.isReset()||(l.retryOnMount=!1));var d=c.a.useState((function(){return new t(a,l)}))[0],f=d.getOptimisticResult(l);if(c.a.useEffect((function(){n.current=!0,s.clearReset();var e=d.subscribe(u.a.batchCalls((function(){n.current&&r((function(e){return e+1}))})));return d.updateResult(),function(){n.current=!1,e()}}),[s,d]),c.a.useEffect((function(){d.setOptions(l,{listeners:!1})}),[l,d]),l.suspense&&f.isLoading)throw d.fetchOptimistic(l).then((function(e){var t=e.data;null==l.onSuccess||l.onSuccess(t),null==l.onSettled||l.onSettled(t,null)})).catch((function(e){s.clearReset(),null==l.onError||l.onError(e),null==l.onSettled||l.onSettled(void 0,e)}));if((l.suspense||l.useErrorBoundary)&&f.isError&&!f.isFetching)throw f.error;return"tracked"===l.notifyOnChangeProps&&(f=d.trackResult(f)),f}},895:function(e,t,n){"use strict";var r=n(105),c=n(2),u=n(921),a=n(250);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,i=Object(c.useMemo)((function(){return new a.c}),[]),o=Object(u.a)([e].concat(Object(r.a)(t)),(function(){return i[e].apply(i,Object(r.a)(t))}),n);return o}},899:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(11),c=n(57),u=n(2),a=n(52),i=n.n(a),o=n(253),s=n(252),l=n(3),d=["icon","iconOnly","children","autoFocus","className"],f=function(e){var t=e.icon,n=e.iconOnly,a=e.children,f=e.autoFocus,b=e.className,h=Object(c.a)(e,d),v=Object(u.useRef)(null);return Object(u.useEffect)((function(){var e;return f&&(e=requestAnimationFrame((function(){var e,t;null===(e=v.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[v,f]),Object(l.jsx)(s.a,Object(r.a)(Object(r.a)({},h),{},{ref:v,className:i()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",b),role:"button",children:Object(l.jsxs)("div",{className:"flex items-center",children:[t&&Object(l.jsx)(o.a,{className:i()({"mr-2":!n}),name:t}),!n&&a]})}))}},905:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(6),c=n(30),u=n(5),a=n(25),i=n(108),o=n(68),s=n(153),l=n(72),d=function(e){function t(t,n){var r;return(r=e.call(this)||this).client=t,r.options=n,r.trackedProps=[],r.previousSelectError=null,r.bindMethods(),r.setOptions(n),r}Object(c.a)(t,e);var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),f(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnReconnect||!1!==t.refetchOnReconnect&&h(e,t));var e,t},n.shouldFetchOnWindowFocus=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnWindowFocus||!1!==t.refetchOnWindowFocus&&h(e,t));var e,t},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(e,t){var n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();var c=this.hasListeners();c&&b(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(t),!c||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout(),!c||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.refetchInterval===n.refetchInterval||this.updateRefetchInterval()},n.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(e){var t=this,n={};return Object.keys(e).forEach((function(r){Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){var n=r;return t.trackedProps.includes(n)||t.trackedProps.push(n),e[n]}})})),n},n.getNextResult=function(e){var t=this;return new Promise((function(n,r){var c=t.subscribe((function(t){t.isFetching||(c(),t.isError&&(null==e?void 0:e.throwOnError)?r(t.error):n(t))}))}))},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(e){return this.fetch(e)},n.fetchOptimistic=function(e){var t=this,n=this.client.defaultQueryObserverOptions(e),r=this.client.getQueryCache().build(this.client,n);return r.fetch().then((function(){return t.createResult(r,n)}))},n.fetch=function(e){var t=this;return this.executeFetch(e).then((function(){return t.updateResult(),t.currentResult}))},n.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return(null==e?void 0:e.throwOnError)||(t=t.catch(u.i)),t},n.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!u.e&&!this.currentResult.isStale&&Object(u.f)(this.options.staleTime)){var t=Object(u.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}},n.updateRefetchInterval=function(){var e=this;this.clearRefetchInterval(),!u.e&&!1!==this.options.enabled&&Object(u.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||i.a.isFocused())&&e.executeFetch()}),this.options.refetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},n.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},n.createResult=function(e,t){var n,r=this.currentQuery,c=this.options,a=this.currentResult,i=this.currentResultState,o=this.currentResultOptions,l=e!==r,d=l?e.state:this.currentQueryInitialState,v=l?this.currentResult:this.previousQueryResult,j=e.state,O=j.dataUpdatedAt,p=j.error,m=j.errorUpdatedAt,k=j.isFetching,y=j.status,g=!1,T=!1;if(t.optimisticResults){var C=this.hasListeners(),x=!C&&f(e,t),R=C&&b(e,r,t,c);(x||R)&&(k=!0,O||(y="loading"))}if(t.keepPreviousData&&!j.dataUpdateCount&&(null==v?void 0:v.isSuccess)&&"error"!==y)n=v.data,O=v.dataUpdatedAt,y=v.status,g=!0;else if(t.select&&"undefined"!==typeof j.data)if(a&&j.data===(null==i?void 0:i.data)&&t.select===(null==o?void 0:o.select)&&!this.previousSelectError)n=a.data;else try{n=t.select(j.data),!1!==t.structuralSharing&&(n=Object(u.n)(null==a?void 0:a.data,n)),this.previousSelectError=null}catch(E){Object(s.a)().error(E),p=E,this.previousSelectError=E,m=Date.now(),y="error"}else n=j.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof n&&"loading"===y){var S;if((null==a?void 0:a.isPlaceholderData)&&t.placeholderData===(null==o?void 0:o.placeholderData))S=a.data;else if(S="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof S)try{S=t.select(S),!1!==t.structuralSharing&&(S=Object(u.n)(null==a?void 0:a.data,S)),this.previousSelectError=null}catch(E){Object(s.a)().error(E),p=E,this.previousSelectError=E,m=Date.now(),y="error"}"undefined"!==typeof S&&(y="success",n=S,T=!0)}return{status:y,isLoading:"loading"===y,isSuccess:"success"===y,isError:"error"===y,isIdle:"idle"===y,data:n,dataUpdatedAt:O,error:p,errorUpdatedAt:m,failureCount:j.fetchFailureCount,isFetched:j.dataUpdateCount>0||j.errorUpdateCount>0,isFetchedAfterMount:j.dataUpdateCount>d.dataUpdateCount||j.errorUpdateCount>d.errorUpdateCount,isFetching:k,isLoadingError:"error"===y&&0===j.dataUpdatedAt,isPlaceholderData:T,isPreviousData:g,isRefetchError:"error"===y&&0!==j.dataUpdatedAt,isStale:h(e,t),refetch:this.refetch,remove:this.remove}},n.shouldNotifyListeners=function(e,t){if(!t)return!0;if(e===t)return!1;var n=this.options,r=n.notifyOnChangeProps,c=n.notifyOnChangePropsExclusions;if(!r&&!c)return!0;if("tracked"===r&&!this.trackedProps.length)return!0;var u="tracked"===r?this.trackedProps:r;return Object.keys(e).some((function(n){var r=n,a=e[r]!==t[r],i=null==u?void 0:u.some((function(e){return e===n})),o=null==c?void 0:c.some((function(e){return e===n}));return a&&!o&&(!u||i)}))},n.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(u.p)(this.currentResult,t)){var n={cache:!0};!1!==(null==e?void 0:e.listeners)&&this.shouldNotifyListeners(this.currentResult,t)&&(n.listeners=!0),this.notify(Object(r.a)({},n,e))}},n.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}},n.onQueryUpdate=function(e){var t={};"success"===e.type?t.onSuccess=!0:"error"!==e.type||Object(l.c)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},n.notify=function(e){var t=this;a.a.batch((function(){e.onSuccess?(null==t.options.onSuccess||t.options.onSuccess(t.currentResult.data),null==t.options.onSettled||t.options.onSettled(t.currentResult.data,null)):e.onError&&(null==t.options.onError||t.options.onError(t.currentResult.error),null==t.options.onSettled||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))},t}(o.a);function f(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||function(e,t){return!1!==t.enabled&&e.state.dataUpdatedAt>0&&("always"===t.refetchOnMount||!1!==t.refetchOnMount&&h(e,t))}(e,t)}function b(e,t,n,r){return!1!==n.enabled&&(e!==t||!1===r.enabled)&&h(e,n)}function h(e,t){return e.isStaleByTime(t.staleTime)}},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(11),c=n(57),u=n(2),a=n(52),i=n.n(a),o=n(252),s=n(261),l=n(3),d=["defaultChecked","checked","onChange","className","children"],f=function(e){var t=e.defaultChecked,n=e.checked,a=e.onChange,f=e.className,b=e.children,h=Object(c.a)(e,d),v=Object(u.useRef)(null),j=Object(u.useCallback)((function(e){null===a||void 0===a||a(e.target.checked,e)}),[a]),O=Object(u.useCallback)((function(e){var t;Object(s.a)(e,"Enter")&&(null===(t=v.current)||void 0===t||t.click())}),[]);return Object(l.jsx)(o.a,{component:"label",className:i()("text-gray-200 p-2",f),onKeyPress:O,role:"button",children:Object(l.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(l.jsx)("input",Object(r.a)(Object(r.a)({type:"checkbox"},h),{},{ref:v,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:j})),Object(l.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:b})]})})}},921:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(905),c=n(5),u=n(894);function a(e,t,n){var a=Object(c.l)(e,t,n);return Object(u.a)(a,r.a)}},926:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(941),c=n.n(r);function u(e){return c()(1e3*(e||0),{leading:!0})}},927:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(11),c=n(57),u=n(2),a=n(255),i=n.n(a),o=n(52),s=n.n(o),l=n(889),d=n(929),f=n.n(d),b=n(3),h=f()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(b.jsx)("div",Object(r.a)({},e))})),v=n(256),j=["visible","onClose","children","className","closeButton"],O=function(e){var t=e.visible,n=e.onClose,a=e.children,o=e.className,d=e.closeButton,f=void 0===d?"Blue":d,O=Object(c.a)(e,j),p=Object(u.useMemo)((function(){return i.a.add({})}),[]),m=Object(u.useCallback)((function(){n()}),[n]),k=Object(u.useCallback)((function(){if(t)return m(),!1}),[t,m]),y=Object(u.useCallback)((function(){if(!i.a.focus(p)){var e=i.a.getCurrent();e&&e.blur(),i.a.setActiveContainer(p),setTimeout((function(){i.a.setPointerMode(!1),i.a.focus(p)}),500)}}),[p]);return Object(v.a)("Back",k),Object(v.a)(f,k),Object(u.useEffect)((function(){t&&y()}),[t,y]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:s()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:m}),Object(b.jsx)(h,Object(r.a)(Object(r.a)({},O),{},{spotlightId:p,spotlightRestrict:"self-only",spotlightDisabled:!t,className:s()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},o),children:Object(b.jsx)(l.a,{className:"max-h-screen",children:a})}))]})}},928:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(11),c=(n(2),n(907)),u=n(3),a=function(e){return Object(u.jsx)(c.a,Object(r.a)(Object(r.a)({},e),{},{type:"radio"}))}},932:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return h}));var r=n(898),c=n.n(r),u=n(193),a=n.n(u),i=n(933),o=n.n(i),s=n(960),l=n.n(s),d=function(e){return e<10?"0".concat(e):e};function f(e){return a()(e,(function(e,t){var n,r,u,a,i,o,s;return{lang:e.lang,name:c()(["".concat(d(t+1),"."),(null===(n=e.type)||void 0===n?void 0:n.title)&&(null===(r=e.author)||void 0===r?void 0:r.title)?"".concat(null===(u=e.type)||void 0===u?void 0:u.title,"."):null===(a=e.type)||void 0===a?void 0:a.title,null===(i=e.author)||void 0===i?void 0:i.title,(null===(o=e.type)||void 0===o?void 0:o.title)||(null===(s=e.author)||void 0===s?void 0:s.title)?"(".concat(l()(e.lang),")"):l()(e.lang),"aac"!==e.codec&&l()(e.codec)]).join(" ")}}))}function b(e,t){return o()(a()(e,(function(e){var n="string"===typeof e.url?e.url:e.url[t]||e.url.http;return{src:n,name:e.quality,type:n.includes(".m3u8")?"application/x-mpegURL":"video/mp4"}})),(function(e){var t=e.name;return parseInt(t)}),"desc")}function h(e){return a()(e,(function(e,t){return{src:e.url,lang:e.lang,name:"".concat(l()(e.lang)," #").concat(d(t+1))}}))}},934:function(e,t,n){"use strict";n.d(t,"a",(function(){return $}));var r=n(11),c=n(31),u=n.n(c),a=n(53),i=n(73),o=n(57),s=n(2),l=n.n(s),d=n(944),f=n.n(d),b=n(899),h=n(93),v=n(52),j=n.n(v),O=n(948),p=n.n(O),m=n(940),k=n.n(m),y=n(955),g=n.n(y),T=n(900),C=n.n(T),x=n(260),R=n(89),S=n(90),E=function(){function e(t){Object(R.a)(this,e),this.resource=void 0,this.objectURL=void 0,this.resource=t}return Object(S.a)(e,[{key:"blobToBuffer",value:function(){var e=this;return new Promise((function(t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(e.resource)}))}},{key:"getURL",value:function(){var t=this;return new Promise((function(n,r){return t.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(t.resource,(function(r){var c="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),u=new Blob([c],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(u),n(t.objectURL)}),(function(){t.blobToBuffer().then((function(r){var c=new TextDecoder("utf-8").decode(r),u="WEBVTT FILE\r\n\r\n".concat(e.toVTT(c)),a=new Blob([u],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(a),n(t.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(e,t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(e)}},{key:"toVTT",value:function(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(e){var t=[];return e.split("").forEach((function(e){t.push(parseInt("".concat(e.charCodeAt(0)),16))})),Uint8Array.from(t)}}]),e}();function w(){return(w=Object(a.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.blob();case 4:return n=e.sent,r=new E(n),e.abrupt("return",r.getURL());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=n(3),I=["autoPlay","audioTracks","sourceTracks","subtitleTracks","streamingType","isSettingsOpen","onUpdate","className","mediaComponent"];function U(e){var t=e.autoPlay,n=e.audioTracks,r=e.sourceTracks,c=e.subtitleTracks,u=e.streamingType,a=e.isSettingsOpen,o=Object(s.useRef)(null),l=Object(s.useRef)(null),d=Object(s.useRef)(0),f=Object(s.useRef)(!1),b=Object(x.a)("is_hls.js_active"),h=Object(i.a)(b,1)[0],v=Object(s.useState)(null===n||void 0===n?void 0:n[0]),j=Object(i.a)(v,2),O=j[0],m=j[1],y=Object(s.useState)(null===r||void 0===r?void 0:r[0]),T=Object(i.a)(y,2),R=T[0],S=T[1],E=Object(s.useState)(null),N=Object(i.a)(E,2),I=N[0],U=N[1],L=Object(s.useCallback)((function(){return"hls2"===u?[]:n}),[n,u]),P=Object(s.useCallback)((function(){return null===O||void 0===O?void 0:O.name}),[O]),A=Object(s.useCallback)((function(e){var t=null===n||void 0===n?void 0:n.find((function(t){return t.name===e}));t&&m(t)}),[n]),Q=Object(s.useCallback)((function(){return C()(r,"src")}),[r]),F=Object(s.useCallback)((function(){return null===R||void 0===R?void 0:R.name}),[R]),M=Object(s.useCallback)((function(e){var t=null===r||void 0===r?void 0:r.find((function(t){return t.name===e}));t&&S(t)}),[r]),D=Object(s.useCallback)((function(){return c}),[c]),B=Object(s.useCallback)((function(){return null===I||void 0===I?void 0:I.name}),[I]),V=Object(s.useCallback)((function(e){var t=null===c||void 0===c?void 0:c.find((function(t){return t.name===e}));U(t||null)}),[c]),W=Object(s.useMemo)((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.findIndex((function(e){return e.name===O.name})))&&void 0!==e?e:0}),[n,O]),q=Object(s.useMemo)((function(){return"hls"===u?null===R||void 0===R?void 0:R.src.replace(/master-v1a\d/,"master-v1a".concat(W+1)):null===R||void 0===R?void 0:R.src}),[u,W,null===R||void 0===R?void 0:R.src]),_=Object(s.useCallback)((function(){if(o.current){for(o.current.removeEventListener("canplay",_);o.current.firstChild;)o.current.lastChild.track.mode="disabled",o.current.removeChild(o.current.lastChild);if(l.current){var e=k()(l.current.audioTracks,(function(e){return e.name===(null===O||void 0===O?void 0:O.name)}));e&&(l.current.audioTrack=e.id)}else{var n;(null===(n=o.current.audioTracks)||void 0===n?void 0:n[W])&&g()(o.current.audioTracks,(function(e,t){e.enabled=t===W}))}if(d.current>0?(o.current.currentTime=d.current,f.current?o.current.pause():o.current.play()):t&&o.current.play(),I){var r=function(e){if(o.current){var t=document.createElement("track");o.current.appendChild(t),t.src=e,t.kind="captions",t.id=I.name,t.label=I.name,t.srclang=I.lang,t.track.mode="showing"}};I.src.endsWith(".srt")?function(e){return w.apply(this,arguments)}(I.src).then(r):r(I.src)}}}),[t,W,null===O||void 0===O?void 0:O.name,I]);return Object(s.useEffect)((function(){if(o.current){if(h&&q.includes(".m3u8")&&p.a.isSupported()){var e=l.current=new p.a({enableWebVTT:!1,enableCEA708Captions:!1});e.attachMedia(o.current),e.on(p.a.Events.MEDIA_ATTACHED,(function(){e.loadSource(q)}))}else o.current.src=q;o.current.addEventListener("canplay",_)}return function(){o.current&&(o.current.currentTime>0&&(d.current=o.current.currentTime),o.current.removeEventListener("canplay",_)),l.current&&(l.current.destroy(),l.current=null)}}),[q,o,d,_,h,u,O,R,I,W,n]),Object(s.useEffect)((function(){f.current=Boolean(a)}),[a]),Object(s.useMemo)((function(){return{videoRef:o,getAudioTracks:L,getAudioTrack:P,setAudioTrack:A,getSourceTracks:Q,getSourceTrack:F,setSourceTrack:M,getSubtitleTracks:D,getSubtitleTrack:B,setSubtitleTrack:V}}),[o,L,P,A,Q,F,M,D,B,V])}var L=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],P=l.a.forwardRef((function(e,t){var n=e.autoPlay,c=e.audioTracks,i=e.sourceTracks,l=e.subtitleTracks,d=e.streamingType,f=e.isSettingsOpen,b=e.onUpdate,v=e.className,O=(e.mediaComponent,Object(o.a)(e,I)),p=Object(s.useCallback)((function(){null===b||void 0===b||b()}),[b]),m=Object(s.useMemo)((function(){return L.reduce((function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(h.a)({},t,(function(){var e;p();for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];null===(e=O[t])||void 0===e||e.call.apply(e,[O].concat(r))})))}),{})}),[O,p]),k=function(e,t){var n=U(t),r=n.videoRef,c=Object(s.useCallback)((function(){return r.current?r.current.currentTime:0}),[r]),i=Object(s.useCallback)((function(e){r.current&&(r.current.currentTime=e)}),[r]),o=Object(s.useCallback)((function(){return r.current?r.current.playbackRate:1}),[r]),l=Object(s.useCallback)((function(e){r.current&&(r.current.playbackRate=e)}),[r]),d=Object(s.useCallback)((function(){return!!r.current&&r.current.paused}),[r]),f=Object(s.useCallback)((function(){return r.current?r.current.duration:0}),[r]),b=Object(s.useCallback)((function(){return!!r.current&&r.current.networkState===r.current.NETWORK_NO_SOURCE}),[r]),h=Object(s.useCallback)((function(){return!r.current||r.current.readyState<r.current.HAVE_ENOUGH_DATA}),[r]),v=Object(s.useCallback)((function(){return r.current?r.current.buffered.length&&r.current.buffered.end(r.current.buffered.length-1)/r.current.duration:0}),[r]),j=Object(s.useCallback)((function(){return r.current?r.current.currentTime/r.current.duration:0}),[r]),O=Object(s.useCallback)(Object(a.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=r.current)||void 0===t?void 0:t.play();case 2:case"end":return e.stop()}}),e)}))),[r]),p=Object(s.useCallback)((function(){var e;null===(e=r.current)||void 0===e||e.pause()}),[r]),m=Object(s.useCallback)(Object(a.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d()){e.next=5;break}return e.next=3,O();case 3:e.next=6;break;case 5:p();case 6:case"end":return e.stop()}}),e)}))),[O,p,d]),k=Object(s.useCallback)((function(){var e;null===(e=r.current)||void 0===e||e.load()}),[r]),y=Object(s.useMemo)((function(){return{play:O,pause:p,playPause:m,load:k,get currentTime(){return c()},set currentTime(e){i(e)},get audioTracks(){return n.getAudioTracks()},get audioTrack(){return n.getAudioTrack()},set audioTrack(e){n.setAudioTrack(e)},get sourceTracks(){return n.getSourceTracks()},get sourceTrack(){return n.getSourceTrack()},set sourceTrack(e){n.setSourceTrack(e)},get subtitleTracks(){return n.getSubtitleTracks()},get subtitleTrack(){return n.getSubtitleTrack()},set subtitleTrack(e){n.setSubtitleTrack(e)},get playbackRate(){return o()},set playbackRate(e){l(e)},get paused(){return d()},get duration(){return f()},get error(){return b()},get loading(){return h()},get proportionLoaded(){return v()},get proportionPlayed(){return j()}}}),[n,O,p,m,k,c,i,o,l,d,f,b,h,v,j]);return Object(s.useImperativeHandle)(e,(function(){return y}),[y]),Object(s.useMemo)((function(){return{api:y,player:n}}),[y,n])}(t,{autoPlay:n,audioTracks:c,sourceTracks:i,subtitleTracks:l,streamingType:d,isSettingsOpen:f}).player;return Object(N.jsx)("video",Object(r.a)(Object(r.a)(Object(r.a)({},O),m),{},{autoPlay:!1,className:j()("w-screen h-screen",v),ref:k.videoRef}))})),A=n(251),Q=n(256),F=n(193),M=n.n(F),D=n(927),B=n(928),V="NONE",W=function(e){var t=e.visible,n=e.onClose,r=e.player,c=Object(s.useState)(t),u=Object(i.a)(c,2),a=u[0],o=u[1],l=Object(s.useState)([]),d=Object(i.a)(l,2),f=d[0],b=d[1],h=Object(s.useState)(null),v=Object(i.a)(h,2),j=v[0],O=v[1],p=Object(s.useState)([]),m=Object(i.a)(p,2),k=m[0],y=m[1],g=Object(s.useState)(null),T=Object(i.a)(g,2),C=T[0],x=T[1],R=Object(s.useState)([]),S=Object(i.a)(R,2),E=S[0],w=S[1],I=Object(s.useState)(null),U=Object(i.a)(I,2),L=U[0],P=U[1],Q=Object(s.useCallback)((function(e,t){r.current&&(r.current.getVideoNode()[e]=t)}),[r]),F=Object(s.useCallback)((function(e){return function(){O(e),Q("audioTrack",e)}}),[Q]),W=Object(s.useCallback)((function(e){return function(){x(e),Q("sourceTrack",e)}}),[Q]),q=Object(s.useCallback)((function(e){return function(){P(e),Q("subtitleTrack",e)}}),[Q]),_=Object(s.useCallback)((function(){n()}),[n]);return Object(s.useEffect)((function(){if(t&&r.current){var e=r.current.getVideoNode(),n=e.audioTracks,c=e.audioTrack,u=e.sourceTracks,a=e.sourceTrack,i=e.subtitleTracks,o=e.subtitleTrack;(null===n||void 0===n?void 0:n.length)>1||(null===u||void 0===u?void 0:u.length)>1||(null===i||void 0===i?void 0:i.length)>0?(b(n),O(c),y(u),x(a),w(i),P(o)):_()}}),[t,r,_]),Object(s.useEffect)((function(){var e;return t?e=setTimeout((function(){o(!0)}),100):o(!1),function(){clearTimeout(e)}}),[t]),Object(N.jsx)(D.a,{visible:a,onClose:_,children:Object(N.jsxs)("div",{className:"flex flex-col",children:[(null===f||void 0===f?void 0:f.length)>1&&Object(N.jsxs)("div",{className:"flex flex-col py-4",children:[Object(N.jsx)(A.a,{children:"\u0417\u0432\u0443\u043a"}),Object(N.jsx)("div",{className:"flex flex-wrap mt-2",children:M()(f,(function(e){var t=e.name;return Object(N.jsx)("div",{className:"w-1/2",children:Object(N.jsx)(B.a,{checked:t===j,onChange:F(t),children:t})},t)}))})]}),(null===k||void 0===k?void 0:k.length)>1&&Object(N.jsxs)("div",{className:"flex flex-col py-4",children:[Object(N.jsx)(A.a,{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(N.jsx)("div",{className:"flex flex-wrap mt-2",children:M()(k,(function(e){var t=e.name;return Object(N.jsx)("div",{className:"w-1/6",children:Object(N.jsx)(B.a,{checked:t===C,onChange:W(t),children:t})},t)}))})]}),(null===E||void 0===E?void 0:E.length)>0&&Object(N.jsxs)("div",{className:"flex flex-col py-4",children:[Object(N.jsx)(A.a,{children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(N.jsxs)("div",{className:"flex flex-wrap mt-2",children:[Object(N.jsx)("div",{className:"w-1/6",children:Object(N.jsx)(B.a,{checked:!L||L===V,onChange:q(V),children:"\u041d\u0435\u0442"})}),M()(E,(function(e){var t=e.name;return Object(N.jsx)("div",{className:"w-1/6",children:Object(N.jsx)(B.a,{checked:t===L,onChange:q(t),children:t})},t)}))]})]})]})})},q=n(926),_=function(e){var t=e.startTime,n=e.startInDelay,r=void 0===n?5:n,c=e.player,u=Object(s.useState)(!0),a=Object(i.a)(u,2),o=a[0],l=a[1],d=Object(s.useState)(r),f=Object(i.a)(d,2),h=f[0],v=f[1],j=Object(s.useMemo)((function(){return Object(q.a)(t)}),[t]),O=Object(s.useCallback)((function(){c.current&&(l(!1),c.current.getVideoNode().currentTime=t)}),[t,c]),p=Object(s.useCallback)((function(){l(!1)}),[]);return Object(s.useEffect)((function(){var e;return o&&(e=setInterval((function(){v((function(e){var t=e-1;return t<=0&&O(),t}))}),1e3)),function(){clearInterval(e)}}),[o,O]),t&&o?Object(N.jsxs)("div",{className:"flex justify-center absolute w-full z-101 bottom-32",children:[Object(N.jsxs)(b.a,{onClick:O,children:["\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 ",j," \u0447\u0435\u0440\u0435\u0437 ",h]}),Object(N.jsx)(b.a,{autoFocus:!0,onClick:p,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"})]}):null},K=["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","streamingType","onPlay","onPause","onEnded","onTimeSync"],$=function(e){var t=e.title,n=e.description,c=e.poster,l=e.audios,d=e.sources,h=e.subtitles,v=e.startTime,j=e.timeSyncInterval,O=void 0===j?30:j,p=e.streamingType,m=e.onPlay,k=e.onPause,y=e.onEnded,g=e.onTimeSync,T=Object(o.a)(e,K),C=Object(s.useRef)(),x=Object(s.useState)(!0),R=Object(i.a)(x,2),S=R[0],E=R[1],w=Object(s.useState)(!1),I=Object(i.a)(w,2),U=I[0],L=I[1],F=Object(s.useState)(!1),M=Object(i.a)(F,2),D=M[0],B=M[1],V=Object(s.useCallback)((function(){E(!1),B(!1),null===m||void 0===m||m()}),[m]),q=Object(s.useCallback)((function(e){E(!0),null===k||void 0===k||k(e.currentTime)}),[k]),$=Object(s.useCallback)((function(e){null===y||void 0===y||y(e.target.currentTime)}),[y]),z=Object(s.useCallback)(Object(a.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C.current||!g){e.next=5;break}return t=C.current.getVideoNode(),n=t.currentTime,e.next=5,g(n);case 5:case"end":return e.stop()}}),e)}))),[g,C]),H=Object(s.useCallback)((function(){L(!0)}),[]),J=Object(s.useCallback)((function(){C.current&&(B(!0),C.current.getVideoNode().pause())}),[C]),G=Object(s.useCallback)((function(){C.current&&(B(!1),C.current.getVideoNode().play())}),[]),X=Object(s.useCallback)((function(){C.current&&C.current.getVideoNode().pause()}),[C]);return Object(s.useEffect)((function(){var e;return S&&(e=setTimeout((function(){E(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[S]),Object(s.useEffect)((function(){var e;return g&&(e=setInterval(z,1e3*O)),function(){e&&clearInterval(e)}}),[O,g,z]),Object(Q.a)("Back",z),Object(Q.a)("Blue",J),Object(Q.a)("Play",G),Object(Q.a)("Pause",X),Object(Q.a)("ArrowUp",J),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(W,{visible:D,onClose:G,player:C}),S&&Object(N.jsx)(A.a,{className:"absolute z-10 top-0 p-4",children:t}),S&&Object(N.jsx)(b.a,{className:"absolute z-101 bottom-8 right-10 text-blue-600",icon:"settings",iconOnly:!0,onClick:J}),U&&v>0&&Object(N.jsx)(_,{startTime:v,player:C}),Object(N.jsx)(f.a,Object(r.a)(Object(r.a)({},T),{},{ref:C,poster:c,title:n,onPlay:V,onPause:q,onEnded:$,onLoadedMetadata:H,streamingType:p,isSettingsOpen:D,audioTracks:l,sourceTracks:d,subtitleTracks:h,videoComponent:Object(N.jsx)(P,{})}))]})}}}]);
//# sourceMappingURL=15.6613b50c.chunk.js.map