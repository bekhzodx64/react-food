(this["webpackJsonpfood-project"]=this["webpackJsonpfood-project"]||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),s=c.n(a),i=(c(25),c(4)),j=c(2),o=c(0);function l(){return Object(o.jsx)("nav",{className:"orange ",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)(i.b,{to:"/",className:"logo",children:"React Food"}),Object(o.jsxs)("ul",{id:"nav-mobile",className:"right",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",className:"nav-link",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contact",className:"nav-link",children:"Contact"})})]})]})})}function b(){return Object(o.jsx)("footer",{className:"page-footer orange",children:Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repository"})]})})})}var u=c(8),d=c(10),h=c.n(d),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),m=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function g(){return Object(o.jsx)("div",{className:"progress orange lighten-4",children:Object(o.jsx)("div",{className:"indeterminate orange"})})}var v=c(12);function N(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:t}),Object(o.jsxs)("p",{children:[n.slice(0,90)," ..."]})]}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/category/".concat(t),className:"btn orange",children:"Watch category"})})]})}function y(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"list",children:c.map((function(e){return Object(o.jsx)(N,Object(v.a)({},e),e.idCategory)}))})}function w(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),a=Object(u.a)(r,2),s=a[0],i=a[1],j=function(){c(s)};return Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{type:"search",id:"search-field",placeholder:"Search",onKeyDown:function(e){"Enter"===e.key&&j()},onChange:function(e){return i(e.target.value)},value:s}),Object(o.jsx)("button",{className:"btn-small orange",style:{position:"absolute",top:0,right:0},onClick:j,children:"Search"})]})})}function k(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(u.a)(a,2),i=s[0],l=s[1],b=Object(j.g)(),d=b.pathname,h=b.search,O=Object(j.f)().push;return Object(n.useEffect)((function(){p().then((function(e){r(e.categories),l(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(w,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:d,search:"?search=".concat(e)})}}),c.length?Object(o.jsx)(y,{catalog:i}):Object(o.jsx)(g,{})]})}function C(){return Object(o.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 About"})}function M(){return Object(o.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 Contact"})}function S(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:n,alt:t})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("span",{className:"card-title",children:t})}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/meal/".concat(c),className:"btn orange",children:"Watch recipe"})})]})}function F(e){var t=e.meals;return Object(o.jsx)("div",{className:"list",children:t.map((function(e){return Object(o.jsx)(S,Object(v.a)({},e),e.idMeal)}))})}function A(){var e=Object(j.h)().name,t=Object(n.useState)([]),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(j.f)().goBack;return Object(n.useEffect)((function(){f(e).then((function(e){return a(e.meals)}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"btn orange go-back",onClick:s,children:"Go Back"}),r.length?Object(o.jsx)(F,{meals:r}):Object(o.jsx)(g,{})]})}function B(){return Object(o.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})}function E(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(j.h)().id,s=Object(j.f)().goBack;return Object(n.useEffect)((function(){m(a).then((function(e){return r(e.meals[0])}))}),[a]),Object(o.jsxs)(o.Fragment,{children:[c.idMeal?Object(o.jsxs)("div",{className:"recipe",children:[Object(o.jsx)("img",{src:c.strMealThumb,alt:c.strMeal}),Object(o.jsx)("h1",{children:c.strMeal}),Object(o.jsxs)("h6",{className:"category",children:["Category: ",c.strCategory]}),c.strArea?Object(o.jsxs)("h6",{className:"area",children:["Area: ",c.strArea]}):null,Object(o.jsx)("p",{children:c.strInstructions}),Object(o.jsxs)("table",{className:"striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Ingredient"}),Object(o.jsx)("th",{children:"Measure"})]})}),Object(o.jsx)("tbody",{children:Object.keys(c).map((function(e){return e.includes("Ingredient")&&c[e]?Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:c[e]}),Object(o.jsx)("td",{children:c["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),c.strYoutube?Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(o.jsx)("iframe",{title:a,src:"https://www.youtube.com/embed/".concat(c.strYoutube.slice(-11)),allowFullScreen:!0})]}):null]}):Object(o.jsx)(g,{}),Object(o.jsx)("button",{className:"btn orange go-back",onClick:s,children:"Go Back"})]})}var I=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{basename:"/react-food",children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"container content",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:k}),Object(o.jsx)(j.a,{path:"/about",component:C}),Object(o.jsx)(j.a,{path:"/contact",component:M}),Object(o.jsx)(j.a,{path:"/category/:name",component:A}),Object(o.jsx)(j.a,{path:"/meal/:id",component:E}),Object(o.jsx)(j.a,{component:B})]})}),Object(o.jsx)(b,{})]})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.46dbfe39.chunk.js.map