(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[22],{1081:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n(2),c=n(897),i=n(266),a=n(889),l=n(888),s=n(895),o=n(7),u=n(3),d=function(e){var t=e.title,n=e.params,a=Object(s.a)("items",[n,0,10]),l=a.data,d=a.isLoading,b=Object(r.useMemo)((function(){return Object(o.b)(o.a.Category,{categoryId:n.type})}),[n]);return Object(u.jsxs)("div",{className:"pb-2",children:[Object(u.jsx)(i.a,{href:b,state:{params:n,title:t},className:"mb-2",children:t}),Object(u.jsx)(c.a,{items:null===l||void 0===l?void 0:l.items,loading:d,scrollable:!1})]})},b=new Date,j=b.setMonth(b.getMonth()-1)/1e3,v=function(){return Object(u.jsx)(d,{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b",params:{type:"movie",sort:"views-",conditions:["created>".concat(j)]}})},f=function(){return Object(u.jsx)(d,{title:"\u041d\u043e\u0432\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b",params:{type:"movie",sort:"created-"}})},O=function(){return Object(u.jsx)(d,{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b",params:{type:"serial",sort:"watchers-"}})},m=function(){return Object(u.jsx)(d,{title:"\u041d\u043e\u0432\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b",params:{type:"serial",sort:"created-"}})},p=function(){return Object(u.jsx)(d,{title:"\u041d\u043e\u0432\u044b\u0435 \u043a\u043e\u043d\u0446\u0435\u0440\u0442\u044b",params:{type:"concert",sort:"created-"}})},x=function(){return Object(u.jsx)(d,{title:"\u041d\u043e\u0432\u044b\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b",params:{type:"documovie",sort:"created-"}})},h=function(){return Object(u.jsx)(d,{title:"\u041d\u043e\u0432\u044b\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b",params:{type:"docuserial",sort:"created-"}})},w=function(){return Object(u.jsx)(d,{title:"\u041d\u043e\u0432\u044b\u0435 \u0422\u0412 \u0448\u043e\u0443",params:{type:"tvshow",sort:"created-"}})},g=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(u.jsxs)(a.a,{children:[Object(u.jsx)(v,{}),Object(u.jsx)(f,{}),Object(u.jsx)(O,{}),Object(u.jsx)(m,{}),Object(u.jsx)(p,{}),Object(u.jsx)(x,{}),Object(u.jsx)(h,{}),Object(u.jsx)(w,{})]})]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(11),c=n(892),i=n(3),a=function(e){return Object(i.jsx)(c.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(11),c=n(57),i=n(2),a=n(52),l=n.n(a),s=n(73),o=n(106),u=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=t.onEnterViewport,a=t.onLeaveViewport,l=Object(i.useState)(),u=Object(s.a)(l,2),d=u[1],b=Object(i.useRef)(null),j=Object(i.useRef)(!1),v=Object(i.useRef)(!1),f=Object(i.useRef)(0),O=Object(i.useRef)(0),m=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(o.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),p=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(o.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),x=Object(i.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,i=t.intersectionRatio,l="undefined"!==typeof n?n:i>0;if(!v.current&&l)return v.current=!0,null===c||void 0===c||c(),f.current+=1,j.current=l,void d(l);v.current&&!l&&(v.current=!1,null===a||void 0===a||a(),r.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,j.current=l,d(l))}),[b,r.disconnectOnLeave,c,a]),h=Object(i.useCallback)((function(){b.current||(b.current=new IntersectionObserver(x,n))}),[b,n,x]);return Object(i.useEffect)((function(){return h(),m(),function(){p()}}),[h,m,p]),{inViewport:j.current,enterCount:f.current,leaveCount:O.current}},d=n(3),b=["children","className","onScrollToEnd"],j=function(e){var t=e.children,n=e.className,a=e.onScrollToEnd,s=Object(c.a)(e,b),o=Object(i.useRef)(null);return u(o,{onEnterViewport:a}),Object(d.jsxs)("div",Object(r.a)(Object(r.a)({className:l()("overflow-y-auto h-full",n)},s),{},{children:[t,a&&Object(d.jsx)("div",{className:"h-40",ref:o})]}))}},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=n(57),i=n(52),a=n.n(i),l=n(251),s=n(3),o=["title","className"],u=function(e){var t=e.title,n=e.className,i=Object(c.a)(e,o);return t?Object(s.jsx)(l.a,Object(r.a)(Object(r.a)({},i),{},{className:a()("m-1 mb-3",n),children:t})):null}},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=n(57),i=n(52),a=n.n(i),l=n(252),s=n(3),o=["className","wrapperClassName","source","caption","children"],u=function(e){var t=e.className,n=e.wrapperClassName,i=e.source,u=e.caption,d=e.children,b=Object(c.a)(e,o);return Object(s.jsxs)(l.a,Object(r.a)(Object(r.a)({},b),{},{className:a()("rounded-xl w-1/5 cursor-pointer",n),children:[Object(s.jsxs)("div",{className:a()("h-40 m-1 flex flex-col relative",t),children:[Object(s.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:i,alt:u}),d]}),u&&Object(s.jsx)("div",{className:"px-2",children:Object(s.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:u})})]}))}},893:function(e,t,n){"use strict";function r(e,t,n){var r=(null===e||void 0===e?void 0:e.title)||"";return n?"".concat(r," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function c(e,t,n){var r=(null===t||void 0===t?void 0:t.title)||"";return n?"".concat(r," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function i(e){return(null===e||void 0===e?void 0:e.quality)?2160===e.quality?"4k":1080===e.quality||720===e.quality?"hd":"sd":null}n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}))},895:function(e,t,n){"use strict";var r=n(105),c=n(2),i=n(921),a=n(250);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,l=Object(c.useMemo)((function(){return new a.c}),[]),s=Object(i.a)([e].concat(Object(r.a)(t)),(function(){return l[e].apply(l,Object(r.a)(t))}),n);return s}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r,c,i=n(2),a=n(32),l=n(52),s=n.n(l),o=n(250),u=n(253),d=n(891),b=n(7),j=["title","titleId"];function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function O(e,t){var n=e.title,a=e.titleId,l=f(e,j);return i.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":a},l),n?i.createElement("title",{id:a},n):null,r||(r=i.createElement("path",{d:"M436.714 26.001H75.287c-27.21 0-49.285 22.075-49.285 49.286v361.427c0 27.211 22.075 49.285 49.285 49.285h361.427c27.211 0 49.284-22.074 49.284-49.285V75.287c0-27.211-22.073-49.286-49.284-49.286z",fill:"#fbbf14"})),c||(c=i.createElement("path",{fill:"#273238",d:"M91.716 190.287h33.883v131.222H91.716zM241.831 321.509h-29.469v-88.714l-11.912 88.714H179.3l-12.528-86.763v86.763h-29.776V190.287h43.947c3.39 20.329 6.16 40.968 8.934 61.504l7.803-61.504h44.152v131.222zM330.544 236.8c0-8.317.31-17.25-1.438-25.055-4.414-23.102-32.24-21.458-50.311-21.458h-25.261v131.222c88.408.103 77.01 6.16 77.01-84.709zm-43.022 61.913v-85.94c12.219 0 10.576 6.47 10.576 16.428v50.622c.001 9.958 1.951 19.199-10.576 18.89zM395.949 223.656c-9.137 0-15.298 2.773-21.457 9.447v-42.816h-32.55v131.222h30.597l1.953-8.317c5.852 6.982 12.218 10.063 21.457 10.063 20.331 0 22.795-15.607 22.795-31.729v-36.963c0-17.763-.821-30.907-22.795-30.907zm-16.427 80.706c-1.642 0-3.081-.823-3.902-2.465-2.26-5.237-1.128-45.281-1.128-45.897 0-3.901-1.132-13.04 5.03-13.04 7.496 0 6.364 7.496 6.364 13.04v33.574c.001 5.546 1.644 14.788-6.364 14.788z"})))}var m,p=i.forwardRef(O),x=(n.p,["title","titleId"]);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function g(e,t){var n=e.title,r=e.titleId,c=w(e,x);return i.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"#ff6600",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,m||(m=i.createElement("path",{d:"M15.518 10.736A8 8 0 11.482 5.264a8 8 0 0115.036 5.472zM8.94 8.342a1 1 0 10-1.88-.684 1 1 0 001.88.684zm-2.906 2.135A2 2 0 102.275 9.11a2 2 0 003.76 1.368zM8.086 4.84A2 2 0 104.328 3.47a2 2 0 003.758 1.368zm5.639 2.052a2 2 0 10-3.76-1.368 2 2 0 003.76 1.368zm-2.053 5.638a2 2 0 10-3.758-1.368 2 2 0 003.758 1.368z"})))}var y=i.forwardRef(g),N=(n.p,n(893)),k=n(908),E=n.n(k);var M=n(3),z=function(e){var t=e.item,n=e.className,r=e.wrapperClassName,c=e.showViews,l=e.noCaption,j=e.disableNavigation,v=Object(a.h)(),f=Object(i.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),O=Object(i.useMemo)((function(){return c&&(null===t||void 0===t?void 0:t.views)&&(e=null===t||void 0===t?void 0:t.views,E()(e))||"";var e}),[c,null===t||void 0===t?void 0:t.views]),m=Object(i.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&!j&&v.push(Object(b.b)(b.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,j,v]),x=Object(N.b)(t);return Object(M.jsxs)(d.a,{onClick:m,source:null===t||void 0===t?void 0:t.posters.medium,caption:l?"":f,className:s()("h-72",n),wrapperClassName:r,children:[(null===t||void 0===t?void 0:t.new)&&Object(M.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new}),O&&Object(M.jsxs)("div",{className:"absolute top-2 right-2 h-6 pr-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:[Object(M.jsx)(u.a,{name:"visibility"}),O]}),(x||(null===t||void 0===t?void 0:t.ac3)||(null===t||void 0===t?void 0:t.advert))&&Object(M.jsxs)("div",{className:"absolute top-2 left-2 h-6 bg-black bg-opacity-50 rounded flex items-center",children:[x&&Object(M.jsx)(u.a,{name:x}),(null===t||void 0===t?void 0:t.ac3)===o.a.True&&Object(M.jsx)(u.a,{name:"graphic_eq"}),(null===t||void 0===t?void 0:t.advert)&&Object(M.jsx)(u.a,{name:"report"})]}),((null===t||void 0===t?void 0:t.rating)||(null===t||void 0===t?void 0:t.imdb_rating)||(null===t||void 0===t?void 0:t.kinopoisk_rating))&&Object(M.jsxs)("div",{className:"absolute bottom-2 left-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex justify-between items-center",children:[Object(M.jsxs)("div",{className:"flex items-center justify-start w-1/3",children:[Object(M.jsx)(p,{className:"h-3 w-3 mr-1"}),Object(M.jsx)("span",{children:(t.imdb_rating||0).toFixed(1)})]}),Object(M.jsxs)("div",{className:"flex items-center justify-center w-1/3",children:[Object(M.jsx)(y,{className:"h-3 w-3 mr-1"}),Object(M.jsx)("span",{children:(t.kinopoisk_rating||0).toFixed(1)})]}),Object(M.jsxs)("div",{className:"flex items-center justify-end w-1/3",children:[Object(M.jsx)(u.a,{name:"thumb_up"}),Object(M.jsxs)("span",{children:[t.rating_percentage||0,"%"]})]})]})]})}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(105),c=(n(2),n(52)),i=n.n(c),a=n(193),l=n.n(a),s=n(889),o=n(890),u=n(896),d=n(3),b=function(e){var t=e.title,n=e.items,c=e.loading,a=e.onScrollToEnd,b=e.scrollable,j=void 0===b||b,v=e.className,f=Object(d.jsxs)("div",{children:[Object(d.jsx)(o.a,{title:t}),Object(d.jsxs)("div",{className:i()("flex flex-wrap",v),children:[l()(n,(function(e){return Object(d.jsx)(u.a,{item:e},e.id)})),c&&l()(Object(r.a)(new Array(15)),(function(e,t){return Object(d.jsx)(u.a,{},t)}))]})]});return j?Object(d.jsx)(s.a,{onScrollToEnd:a,children:f}):f}},921:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(905),c=n(5),i=n(894);function a(e,t,n){var a=Object(c.l)(e,t,n);return Object(i.a)(a,r.a)}}}]);
//# sourceMappingURL=22.72f85211.chunk.js.map