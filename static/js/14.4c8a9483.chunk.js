(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[14],{1075:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(73),c=n(2),i=n(32),a=n(933),u=n.n(a),o=n(961),l=n(888),s=n(919),d=n(904),v=n(11),b={useHistoryReplace:!1,deserialize:function(e){return e},serialize:function(e){return String(e)}};var f=function(e,t,n){var r=Object(i.h)(),a=Object(c.useMemo)((function(){return Object(v.a)(Object(v.a)({},b),n)}),[n]),u=Object(c.useMemo)((function(){var n=new URLSearchParams(r.location.search).get(e);return n?a.deserialize(n):t}),[e,t,a,r.location.search]),o=Object(c.useCallback)((function(t,n){var c=r.location,i=c.search,u=new URLSearchParams(i),o=a.serialize(t);o?u.set(e,o):u.delete(e);var l="?".concat(u);i!==l&&(n||a.useHistoryReplace?r.replace:r.push)({search:l,hash:c.hash,pathname:c.pathname},c.state)}),[e,a,r]),l=Object(c.useCallback)((function(e){o(t,e)}),[t,o]);return[u,o,l]},j=n(3);function O(e){return u()(e,"year","desc")}var m=function(){var e,t,n=Object(i.i)(),a=f("q",""),u=Object(r.a)(a,2),v=u[0],b=u[1],m=Object(d.a)("itemsSearch",[{q:v,type:null===(e=n.state)||void 0===e?void 0:e.type,field:null===(t=n.state)||void 0===t?void 0:t.field}]),p=Object(c.useCallback)((function(e){b(e)}),[b]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{title:"\u041f\u043e\u0438\u0441\u043a"}),Object(j.jsx)("div",{className:"m-1 mb-3 mr-2",children:Object(j.jsx)(o.a,{autoFocus:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430 \u0438\u043b\u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u0430...",value:v,onChange:p})}),v.length>=3&&Object(j.jsx)(s.a,{queryResult:m,processItems:O})]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(11),c=n(892),i=n(3),a=function(e){return Object(i.jsx)(c.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(11),c=n(57),i=n(2),a=n(52),u=n.n(a),o=n(73),l=n(106),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=t.onEnterViewport,a=t.onLeaveViewport,u=Object(i.useState)(),s=Object(o.a)(u,2),d=s[1],v=Object(i.useRef)(null),b=Object(i.useRef)(!1),f=Object(i.useRef)(!1),j=Object(i.useRef)(0),O=Object(i.useRef)(0),m=Object(i.useCallback)((function(){if(e.current&&v.current){var t=Object(l.findDOMNode)(e.current);t&&v.current.observe(t)}}),[e,v]),p=Object(i.useCallback)((function(){if(e.current&&v.current){var t=Object(l.findDOMNode)(e.current);t&&(v.current.unobserve(t),v.current.disconnect(),v.current=null)}}),[e,v]),h=Object(i.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,i=t.intersectionRatio,u="undefined"!==typeof n?n:i>0;if(!f.current&&u)return f.current=!0,null===c||void 0===c||c(),j.current+=1,b.current=u,void d(u);f.current&&!u&&(f.current=!1,null===a||void 0===a||a(),r.disconnectOnLeave&&v.current&&v.current.disconnect(),O.current+=1,b.current=u,d(u))}),[v,r.disconnectOnLeave,c,a]),x=Object(i.useCallback)((function(){v.current||(v.current=new IntersectionObserver(h,n))}),[v,n,h]);return Object(i.useEffect)((function(){return x(),m(),function(){p()}}),[x,m,p]),{inViewport:b.current,enterCount:j.current,leaveCount:O.current}},d=n(3),v=["children","className","onScrollToEnd"],b=function(e){var t=e.children,n=e.className,a=e.onScrollToEnd,o=Object(c.a)(e,v),l=Object(i.useRef)(null);return s(l,{onEnterViewport:a}),Object(d.jsxs)("div",Object(r.a)(Object(r.a)({className:u()("overflow-y-auto h-full",n)},o),{},{children:[t,a&&Object(d.jsx)("div",{className:"h-40",ref:l})]}))}},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),c=n(57),i=n(52),a=n.n(i),u=n(251),o=n(3),l=["title","className"],s=function(e){var t=e.title,n=e.className,i=Object(c.a)(e,l);return t?Object(o.jsx)(u.a,Object(r.a)(Object(r.a)({},i),{},{className:a()("m-1 mb-3",n),children:t})):null}},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),c=n(57),i=n(52),a=n.n(i),u=n(252),o=n(3),l=["className","wrapperClassName","source","caption","children"],s=function(e){var t=e.className,n=e.wrapperClassName,i=e.source,s=e.caption,d=e.children,v=Object(c.a)(e,l);return Object(o.jsxs)(u.a,Object(r.a)(Object(r.a)({},v),{},{className:a()("rounded-xl w-1/5 cursor-pointer",n),children:[Object(o.jsxs)("div",{className:a()("h-40 m-1 flex flex-col relative",t),children:[Object(o.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:i,alt:s}),d]}),s&&Object(o.jsx)("div",{className:"px-2",children:Object(o.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:s})})]}))}},893:function(e,t,n){"use strict";function r(e,t,n){var r=(null===e||void 0===e?void 0:e.title)||"";return n?"".concat(r," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function c(e,t,n){var r=(null===t||void 0===t?void 0:t.title)||"";return n?"".concat(r," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function i(e){return(null===e||void 0===e?void 0:e.quality)?2160===e.quality?"4k":1080===e.quality||720===e.quality?"hd":"sd":null}n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}))},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r,c,i=n(2),a=n(32),u=n(52),o=n.n(u),l=n(250),s=n(253),d=n(891),v=n(7),b=["title","titleId"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function O(e,t){var n=e.title,a=e.titleId,u=j(e,b);return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":a},u),n?i.createElement("title",{id:a},n):null,r||(r=i.createElement("path",{d:"M436.714 26.001H75.287c-27.21 0-49.285 22.075-49.285 49.286v361.427c0 27.211 22.075 49.285 49.285 49.285h361.427c27.211 0 49.284-22.074 49.284-49.285V75.287c0-27.211-22.073-49.286-49.284-49.286z",fill:"#fbbf14"})),c||(c=i.createElement("path",{fill:"#273238",d:"M91.716 190.287h33.883v131.222H91.716zM241.831 321.509h-29.469v-88.714l-11.912 88.714H179.3l-12.528-86.763v86.763h-29.776V190.287h43.947c3.39 20.329 6.16 40.968 8.934 61.504l7.803-61.504h44.152v131.222zM330.544 236.8c0-8.317.31-17.25-1.438-25.055-4.414-23.102-32.24-21.458-50.311-21.458h-25.261v131.222c88.408.103 77.01 6.16 77.01-84.709zm-43.022 61.913v-85.94c12.219 0 10.576 6.47 10.576 16.428v50.622c.001 9.958 1.951 19.199-10.576 18.89zM395.949 223.656c-9.137 0-15.298 2.773-21.457 9.447v-42.816h-32.55v131.222h30.597l1.953-8.317c5.852 6.982 12.218 10.063 21.457 10.063 20.331 0 22.795-15.607 22.795-31.729v-36.963c0-17.763-.821-30.907-22.795-30.907zm-16.427 80.706c-1.642 0-3.081-.823-3.902-2.465-2.26-5.237-1.128-45.281-1.128-45.897 0-3.901-1.132-13.04 5.03-13.04 7.496 0 6.364 7.496 6.364 13.04v33.574c.001 5.546 1.644 14.788-6.364 14.788z"})))}var m,p=i.forwardRef(O),h=(n.p,["title","titleId"]);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function w(e,t){var n=e.title,r=e.titleId,c=g(e,h);return i.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"#ff6600",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,m||(m=i.createElement("path",{d:"M15.518 10.736A8 8 0 11.482 5.264a8 8 0 0115.036 5.472zM8.94 8.342a1 1 0 10-1.88-.684 1 1 0 001.88.684zm-2.906 2.135A2 2 0 102.275 9.11a2 2 0 003.76 1.368zM8.086 4.84A2 2 0 104.328 3.47a2 2 0 003.758 1.368zm5.639 2.052a2 2 0 10-3.76-1.368 2 2 0 003.76 1.368zm-2.053 5.638a2 2 0 10-3.758-1.368 2 2 0 003.758 1.368z"})))}var y=i.forwardRef(w),N=(n.p,n(893)),k=n(908),C=n.n(k);var E=n(3),z=function(e){var t=e.item,n=e.className,r=e.wrapperClassName,c=e.showViews,u=e.noCaption,b=e.disableNavigation,f=Object(a.h)(),j=Object(i.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),O=Object(i.useMemo)((function(){return c&&(null===t||void 0===t?void 0:t.views)&&(e=null===t||void 0===t?void 0:t.views,C()(e))||"";var e}),[c,null===t||void 0===t?void 0:t.views]),m=Object(i.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&!b&&f.push(Object(v.b)(v.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,b,f]),h=Object(N.b)(t);return Object(E.jsxs)(d.a,{onClick:m,source:null===t||void 0===t?void 0:t.posters.medium,caption:u?"":j,className:o()("h-72",n),wrapperClassName:r,children:[(null===t||void 0===t?void 0:t.new)&&Object(E.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new}),O&&Object(E.jsxs)("div",{className:"absolute top-2 right-2 h-6 pr-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:[Object(E.jsx)(s.a,{name:"visibility"}),O]}),(h||(null===t||void 0===t?void 0:t.ac3)||(null===t||void 0===t?void 0:t.advert))&&Object(E.jsxs)("div",{className:"absolute top-2 left-2 h-6 bg-black bg-opacity-50 rounded flex items-center",children:[h&&Object(E.jsx)(s.a,{name:h}),(null===t||void 0===t?void 0:t.ac3)===l.a.True&&Object(E.jsx)(s.a,{name:"graphic_eq"}),(null===t||void 0===t?void 0:t.advert)&&Object(E.jsx)(s.a,{name:"report"})]}),((null===t||void 0===t?void 0:t.rating)||(null===t||void 0===t?void 0:t.imdb_rating)||(null===t||void 0===t?void 0:t.kinopoisk_rating))&&Object(E.jsxs)("div",{className:"absolute bottom-2 left-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex justify-between items-center",children:[Object(E.jsxs)("div",{className:"flex items-center justify-start w-1/3",children:[Object(E.jsx)(p,{className:"h-3 w-3 mr-1"}),Object(E.jsx)("span",{children:(t.imdb_rating||0).toFixed(1)})]}),Object(E.jsxs)("div",{className:"flex items-center justify-center w-1/3",children:[Object(E.jsx)(y,{className:"h-3 w-3 mr-1"}),Object(E.jsx)("span",{children:(t.kinopoisk_rating||0).toFixed(1)})]}),Object(E.jsxs)("div",{className:"flex items-center justify-end w-1/3",children:[Object(E.jsx)(s.a,{name:"thumb_up"}),Object(E.jsxs)("span",{children:[t.rating_percentage||0,"%"]})]})]})]})}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(105),c=(n(2),n(52)),i=n.n(c),a=n(193),u=n.n(a),o=n(889),l=n(890),s=n(896),d=n(3),v=function(e){var t=e.title,n=e.items,c=e.loading,a=e.onScrollToEnd,v=e.scrollable,b=void 0===v||v,f=e.className,j=Object(d.jsxs)("div",{children:[Object(d.jsx)(l.a,{title:t}),Object(d.jsxs)("div",{className:i()("flex flex-wrap",f),children:[u()(n,(function(e){return Object(d.jsx)(s.a,{item:e},e.id)})),c&&u()(Object(r.a)(new Array(15)),(function(e,t){return Object(d.jsx)(s.a,{},t)}))]})]});return b?Object(d.jsx)(o.a,{onScrollToEnd:a,children:j}):j}},902:function(e,t,n){"use strict";var r=n(73),c=n(2),i=n(898),a=n.n(i),u=n(906),o=n.n(u),l=n(900),s=n.n(l);t.a=function(e,t){var n=e.data,i=e.isLoading,u=e.isFetchingNextPage,l=e.fetchNextPage,d=Object(c.useState)(!1),v=Object(r.a)(d,2),b=v[0],f=v[1],j=Object(c.useMemo)((function(){return s()(a()(o()(null===n||void 0===n?void 0:n.pages,(function(e){return e.items}))),"id")}),[null===n||void 0===n?void 0:n.pages]),O=Object(c.useMemo)((function(){return t?t(j):j}),[j,t]),m=Object(c.useCallback)((function(){b&&(l(),f(!1))}),[b,l]);return Object(c.useEffect)((function(){f(!0)}),[j.length]),[O,i||u,m]}},904:function(e,t,n){"use strict";var r=n(11),c=n(105),i=n(2),a=n(943),u=n(250);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,o=Object(i.useMemo)((function(){return new u.c}),[]),l=Object(a.a)([e].concat(Object(c.a)(t)),(function(n){var r=n.pageParam;return o[e].apply(o,Object(c.a)(t).concat([r]))}),Object(r.a)({getNextPageParam:function(e){var t;return(null===e||void 0===e||null===(t=e.pagination)||void 0===t?void 0:t.current)+1||1}},n));return l}},919:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(73),c=n(897),i=n(902),a=n(3),u=function(e){var t=e.title,n=e.queryResult,u=e.processItems,o=Object(i.a)(n,u),l=Object(r.a)(o,3),s=l[0],d=l[1],v=l[2];return Object(a.jsx)(c.a,{title:t,items:s,loading:d,onScrollToEnd:v})}},933:function(e,t,n){var r=n(956),c=n(58);e.exports=function(e,t,n,i){return null==e?[]:(c(t)||(t=null==t?[]:[t]),c(n=i?void 0:n)||(n=null==n?[]:[n]),r(e,t,n))}},956:function(e,t,n){var r=n(264),c=n(265),i=n(375),a=n(395),u=n(957),o=n(394),l=n(958),s=n(393),d=n(58);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return d(e)?function(t){return c(t,1===e.length?e[0]:e)}:e})):[s];var v=-1;t=r(t,o(i));var b=a(e,(function(e,n,c){return{criteria:r(t,(function(t){return t(e)})),index:++v,value:e}}));return u(b,(function(e,t){return l(e,t,n)}))}},957:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},958:function(e,t,n){var r=n(959);e.exports=function(e,t,n){for(var c=-1,i=e.criteria,a=t.criteria,u=i.length,o=n.length;++c<u;){var l=r(i[c],a[c]);if(l)return c>=o?l:l*("desc"==n[c]?-1:1)}return e.index-t.index}},959:function(e,t,n){var r=n(194);e.exports=function(e,t){if(e!==t){var n=void 0!==e,c=null===e,i=e===e,a=r(e),u=void 0!==t,o=null===t,l=t===t,s=r(t);if(!o&&!s&&!a&&e>t||a&&u&&l&&!o&&!s||c&&u&&l||!n&&l||!i)return 1;if(!c&&!a&&!s&&e<t||s&&n&&i&&!c&&!a||o&&n&&i||!u&&i||!l)return-1}return 0}},961:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(11),c=n(57),i=n(2),a=n(106),u=n(980),o=n.n(u),l=n(52),s=n.n(l),d=n(3),v=["className","onChange","autoFocus"],b=function(e){var t=e.className,n=e.onChange,u=e.autoFocus,l=Object(c.a)(e,v),b=Object(i.useRef)(null),f=Object(i.useCallback)((function(e){var t=e.value;null===n||void 0===n||n(t)}),[n]);return Object(i.useEffect)((function(){var e;return u&&(e=requestAnimationFrame((function(){var e,t=Object(a.findDOMNode)(b.current);null===t||void 0===t||null===(e=t.querySelector("input"))||void 0===e||e.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[b,u]),Object(d.jsx)(o.a,Object(r.a)(Object(r.a)({},l),{},{ref:b,className:s()("w-full",t),onChange:f}))}}}]);
//# sourceMappingURL=14.4c8a9483.chunk.js.map