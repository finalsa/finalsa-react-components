(this["webpackJsonpfinalsa-react-components-example"]=this["webpackJsonpfinalsa-react-components-example"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);a(5);var n=a(0),l=a.n(n),c=a(2),s=a.n(c),o=a(3),r=a.n(o),i=a(1);function m(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}l.a.Component;function p(e){var t=e.onReturn;return l.a.createElement("nav",{className:"breadcrumb  ml-0 pl-0 mb-0 pb-0","aria-label":"breadcrumbs"},l.a.createElement("li",{className:"tree-li  ml-0 pl-0 mb-0 pb-0"},l.a.createElement("button",{className:"button  ml-0 pl-0 mb-0 pb-0 is-ghost is-size-6",onClick:t},l.a.createElement("span",{className:"mr-1"},l.a.createElement("i",{className:"fas fa-chevron-left"})),l.a.createElement("span",null,"Atras"))))}function f(e){var t=e.onAdd,a=e.onSearch,c=e.onReload,s=e.options,o=[],r=null;if(a&&o.push(l.a.createElement("button",{className:"button is-ghost px-1 has-text-success",key:"table-button-search-action",type:"button",onClick:a},l.a.createElement("i",{className:"fas fa-search"}))),s){r=[];s.map((function(e,t){r.push(l.a.createElement("a",{type:"button",href:"#foo",onClick:e.action,key:"dropdown-button-"+t,className:"dropdown-item"},e.name))}))}return c&&o.push(l.a.createElement("button",{className:"button is-ghost px-1 has-text-primary",key:"table-button-sync-action",type:"button",onClick:c},l.a.createElement("i",{className:"fas fa-sync"}))),t&&o.push(l.a.createElement("button",{className:"button is-ghost px-1 has-text-info",key:"table-button-add-action",type:"button",onClick:t},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement(n.Fragment,null,r?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"dropdown is-hoverable is-right"},l.a.createElement("div",{className:"dropdown-trigger"},l.a.createElement("button",{className:"button is-ghost px-1 has-text-black",key:"table-button-search-action",type:"button",onClick:a},l.a.createElement("i",{className:"fas fa-ellipsis-h"}))),l.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu"},l.a.createElement("div",{className:"dropdown-content"},r)))):null,l.a.createElement("div",{className:"buttons"},o))}function v(e){var t=e.title,a=e.onSearch,n=e.onAdd,c=e.onReload,s=e.options;return l.a.createElement("div",{className:"level py-0 px-1 m-0 table-header"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"has-text-weight-bold has-text-black is-size-6"},t)),l.a.createElement("div",{className:"level-right"},l.a.createElement(f,{onSearch:a,onAdd:n,onReload:c,options:s})))}function E(e){var t=e.onSearch,a=e.isVisible,c=void 0!==a&&a,s=Object(n.useState)(""),o=s[0],r=s[1];if(!c)return l.a.createElement(n.Fragment,null);return l.a.createElement("div",{className:"level py-3 px-1 m-0 table-header"},l.a.createElement("div",{className:"level-left"}),l.a.createElement("div",{className:"level-right"},l.a.createElement("div",{className:"field has-addons"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-ghost",type:"button",onClick:function(){r(""),t("")}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"far fa-times-circle"})))),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",placeholder:"Busqueda",value:o,onChange:function(e){var t=e.target.value;r(t)}})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button",type:"button",onClick:function(){t(o)}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-search"})))))))}function b(e){var t=e.children,a=e.className,c=void 0===a?"is-full":a,s=e.title,o=void 0===s?"":s,r=e.onReturn,i=void 0===r?function(){}:r,m=e.onReload,u=void 0===m?function(){}:m,d=e.onSearch,f=void 0===d?function(){}:d,b=e.onAdd,h=void 0===b?function(){}:b,N=e.options,g=void 0===N?null:N,y=Object(n.useState)(!1),x=y[0],k=y[1],C=null;return f&&(C=function(){k(!0)}),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column "+c},l.a.createElement("div",{className:"card px-5"},l.a.createElement(v,{title:o,onSearch:C,onAdd:h,onReload:u,options:g}),l.a.createElement(E,{isVisible:x,onSearch:f}),l.a.createElement("div",{className:"card-header px-0"},l.a.createElement("div",{className:"level card-header-title  px-0 py-0"},l.a.createElement("div",{className:"level-left"},l.a.createElement(p,{onReturn:i})),l.a.createElement("div",{className:"level-right"},g))),l.a.createElement("div",{className:"card-content px-0"},t))))}function h(e){var t=this,a=e.min,c=void 0===a?0:a,s=e.max,o=void 0===s?1e7:s,r=e.count,i=void 0===r?0:r,m=e.onChange,u=void 0===m?function(){}:m,d=Object(n.useState)(c),p=d[0],f=d[1];Object(n.useEffect)((function(){p&&i!==p&&f(i)}),[i]);return l.a.createElement("div",{className:"field has-addons has-addons-right"},l.a.createElement("p",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input counter-input",style:{width:"150px"},type:"number",placeholder:"numero",value:p,onChange:function(e){var a=e.target.value;/[0-9]?[0-9]?(\.[0-9][0-9]?)?/.test(a)&&(a=parseFloat(a))>=t.min&&a<t.max&&(u(a),f(a))}}),l.a.createElement("span",{className:"icon is-small is-left",onClick:function(){var e=p-1;e>=c?(u(e),f(e)):f(c)}},l.a.createElement("input",{type:"button",value:"-",className:"counter-button button is-ghost"})),l.a.createElement("span",{className:"icon is-small is-right",onClick:function(){var e=p+1;e<=o&&(u(e),f(e))}},l.a.createElement("input",{type:"button",value:"+",className:"counter-button button is-ghost"}))))}l.a.Component;function N(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var a=0;a<e.length;++a)if(!Object(i.isEqual)(e[a],t[a]))return!1;return!0}l.a.Component,a(16);var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{count:1}),l.a.createElement(h,null),l.a.createElement(b,null))};s.a.render(l.a.createElement(g,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(17)},5:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.f3b33b93.chunk.js.map