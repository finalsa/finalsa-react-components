(this["webpackJsonpfinalsa-react-components-example"]=this["webpackJsonpfinalsa-react-components-example"]||[]).push([[0],{10:function(e,t,a){e.exports=a(24)},11:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);a(11);var n=a(0),l=a.n(n),c=a(9),i=a.n(c),s=(a(18),a(6)),o=a(2),r=a(3),u=a(1),m=a(5),p=a(4),h=a(7),d=a.n(h),b=a(8),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={actualPage:e.actualPage?e.actualPage:1},n.handleNextPage=n.handleNextPage.bind(Object(u.a)(n)),n.handlePreviousPage=n.handlePreviousPage.bind(Object(u.a)(n)),n.handleClickPage=n.handleClickPage.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"handleNextPage",value:function(){if(this.state.actualPage<=this.props.count){var e=this.state.actualPage+1;this.setState({actualPage:e}),this.props.onPageChange&&this.props.onPageChange(e)}}},{key:"handlePreviousPage",value:function(){if(this.state.actualPage>1){var e=this.state.actualPage-1;this.setState({actualPage:e}),this.props.onPageChange&&this.props.onPageChange(e)}}},{key:"handleClickPage",value:function(e){this.props.onPageChange&&this.props.onPageChange(e),this.setState({actualPage:e})}},{key:"render",value:function(){var e=this;if(this.props.isHidden)return l.a.createElement(Fragment,null);var t=this.props.count;if(!t)return null;var a=[];if(t>10){if(this.state.actualPage<4)for(var n=function(t){a.push(e.state.actualPage===t?l.a.createElement("button",{className:"pagination-link is-current button",key:"pagination-".concat(t),"aria-label":"Page ".concat(t),"aria-current":"page",type:"button"},t):l.a.createElement("button",{className:"pagination-link button",key:"pagination-".concat(t),"aria-label":"Goto Page ".concat(t),"aria-current":"page",type:"button",onClick:function(){return e.handleClickPage(t)}},t))},c=1;c<4;++c)n(c);else a.push(l.a.createElement("button",{className:"pagination-link button","aria-label":"Goto page 1",type:"button",key:"pagination-1",onClick:function(){return e.handleClickPage(1)}},1));a.push(l.a.createElement("li",null,l.a.createElement("span",{className:"pagination-ellipsis"},"\u2026")));var i=t-3;if(this.state.actualPage<=i+1)if(3===this.state.actualPage)a.push(l.a.createElement("button",{className:"pagination-link button","aria-label":"Goto page 4",type:"button",key:"pagination-4",onClick:function(){return e.handleClickPage(4)}},4)),a.push(l.a.createElement("li",null,l.a.createElement("span",{className:"pagination-ellipsis"},"\u2026")));else if(this.state.actualPage===i+1)a.push(l.a.createElement("button",{className:"pagination-link button ",type:"button","aria-label":"Goto Page ".concat(i),onClick:function(){return e.handleClickPage(i)}},i));else if(this.state.actualPage>3){var s=this.state.actualPage,o=s-1,r=s+1;a.push(l.a.createElement("button",{className:"pagination-link button",key:"pagination-".concat(o),type:"button","aria-label":"Goto Page ".concat(o),onClick:function(){return e.handleClickPage(o)}},o)),a.push(l.a.createElement("button",{className:"pagination-link button is-current","aria-label":"Page ".concat(s),type:"button",key:"pagination-".concat(s)},s)),a.push(l.a.createElement("button",{className:"pagination-link button","aria-label":"Goto Page ".concat(r),key:"pagination-".concat(r),type:"button",onClick:function(){return e.handleClickPage(r)}},r)),a.push(l.a.createElement("li",null,l.a.createElement("span",{className:"pagination-ellipsis"},"\u2026")))}if(this.state.actualPage>i)for(var u=function(t){a.push(e.state.actualPage===t?l.a.createElement("button",{className:"pagination-link is-current button",key:"pagination-".concat(t),type:"button","aria-label":"Page ".concat(t),"aria-current":"page"},t):l.a.createElement("button",{className:"pagination-link button",key:"pagination-".concat(t),"aria-label":"Page ".concat(t),type:"button","aria-current":"page",onClick:function(){return e.handleClickPage(t)}},t))},m=t-2;m<=t;++m)u(m);else a.push(l.a.createElement("button",{className:"pagination-link button","aria-label":"Goto page ".concat(t),key:"pagination-".concat(t),type:"button",onClick:function(){return e.handleClickPage(t)}},t))}else{a.push(1===this.state.actualPage?l.a.createElement("button",{className:"pagination-link is-current button",type:"button",key:"pagination-1","aria-label":"Page 1","aria-current":"page"},1):l.a.createElement("button",{className:"pagination-link button",type:"button","aria-label":"Goto page 1",onClick:function(){return e.handleClickPage(1)}},1));for(var p=function(t){a.push(e.state.actualPage===t?l.a.createElement("button",{className:"pagination-link is-current  button",type:"button",key:"pagination-".concat(t),"aria-label":"Page ".concat(t," "),"aria-current":"page"},t):l.a.createElement("button",{className:"pagination-link button",type:"button",key:"pagination-".concat(t),"aria-label":"Go to page ".concat(t," "),onClick:function(){return e.handleClickPage(t)}},t))},h=2;h<t;++h)p(h);1!==t&&a.push(this.state.actualPage===t?l.a.createElement("button",{className:"pagination-link is-current button",type:"button",key:"pagination-".concat(t),"aria-label":"Page ".concat(t," "),"aria-current":"page"},t):l.a.createElement("button",{className:"pagination-link button",type:"button",key:"pagination-".concat(t),"aria-label":"Go to Page ".concat(t," "),onClick:function(){return e.handleClickPage(t)}},t))}return l.a.createElement("div",{className:"pagination is-left",role:"navigation","aria-label":"pagination"},l.a.createElement("button",{className:"pagination-previous button",type:"button",onClick:this.handlePreviousPage,disabled:!(this.state.actualPage>1)||void 0},"Anterior"),l.a.createElement("button",{className:"pagination-next button",type:"button",onClick:this.handleNextPage,disabled:!(this.state.actualPage<t)||void 0},"Siguiente"),l.a.createElement("ul",{className:"pagination-list"},a))}}]),a}(l.a.Component);function v(e){var t=e.onReturn;return l.a.createElement("nav",{className:"breadcrumb  ml-0 pl-0 mb-0 pb-0","aria-label":"breadcrumbs"},l.a.createElement("li",{className:"tree-li  ml-0 pl-0 mb-0 pb-0"},l.a.createElement("button",{className:"button  ml-0 pl-0 mb-0 pb-0 is-ghost is-size-6",onClick:t},l.a.createElement("span",{className:"mr-1"},l.a.createElement("i",{className:"fas fa-chevron-left"})),l.a.createElement("span",null,"Atras"))))}function f(e){var t=e.onAdd,a=e.onSearch,c=e.onReload,i=e.options,s=[],o=null;if(a&&s.push(l.a.createElement("button",{className:"button is-ghost px-1 has-text-success",key:"table-button-search-action",type:"button",onClick:a},l.a.createElement("i",{className:"fas fa-search"}))),i){o=[];i.map((function(e,t){o.push(l.a.createElement("a",{type:"button",href:"#foo",onClick:e.action,key:"dropdown-button-".concat(t),className:"dropdown-item"},e.name))}))}return c&&s.push(l.a.createElement("button",{className:"button is-ghost px-1 has-text-primary",key:"table-button-sync-action",type:"button",onClick:c},l.a.createElement("i",{className:"fas fa-sync"}))),t&&s.push(l.a.createElement("button",{className:"button is-ghost px-1 has-text-info",key:"table-button-add-action",type:"button",onClick:t},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement(n.Fragment,null,o?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"dropdown is-hoverable is-right"},l.a.createElement("div",{className:"dropdown-trigger"},l.a.createElement("button",{className:"button is-ghost px-1 has-text-black",key:"table-button-search-action",type:"button",onClick:a},l.a.createElement("i",{className:"fas fa-ellipsis-h"}))),l.a.createElement("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu"},l.a.createElement("div",{className:"dropdown-content"},o)))):null,l.a.createElement("div",{className:"buttons"},s))}function E(e){var t=e.title,a=e.onSearch,n=e.onAdd,c=e.onReload,i=e.options;return l.a.createElement("div",{className:"level py-0 px-1 m-0 table-header"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"has-text-weight-bold has-text-black is-size-6"},t)),l.a.createElement("div",{className:"level-right"},l.a.createElement(f,{onSearch:a,onAdd:n,onReload:c,options:i})))}function N(e){e.options;var t=e.onSearch,a=e.isVisible,c=void 0!==a&&a,i=Object(n.useState)(""),o=Object(s.a)(i,2),r=o[0],u=o[1];if(!c)return l.a.createElement(n.Fragment,null);return l.a.createElement("div",{className:"level py-3 px-1 m-0 table-header"},l.a.createElement("div",{className:"level-left"}),l.a.createElement("div",{className:"level-right"},l.a.createElement("div",{className:"field has-addons"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-ghost",type:"button",onClick:function(){u(""),t("")}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"far fa-times-circle"})))),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",placeholder:"Busqueda",value:r,onChange:function(e){var t=e.target.value;u(t)}})),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button",type:"button",onClick:function(){t(r)}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-search"})))))))}function k(e){var t=e.children,a=e.className,c=void 0===a?"is-full":a,i=e.title,o=void 0===i?"":i,r=e.onReturn,u=void 0===r?function(){}:r,m=e.onReload,p=void 0===m?function(){}:m,h=e.onSearch,d=void 0===h?function(){}:h,b=e.onAdd,g=void 0===b?function(){}:b,f=e.options,k=void 0===f?null:f,P=Object(n.useState)(!1),y=Object(s.a)(P,2),C=y[0],S=y[1],x=null;return d&&(x=function(){S(!0)}),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column ".concat(c)},l.a.createElement("div",{className:"card px-5"},l.a.createElement(E,{title:o,onSearch:x,onAdd:g,onReload:p,options:k}),l.a.createElement(N,{isVisible:C,onSearch:d}),l.a.createElement("div",{className:"card-header px-0"},l.a.createElement("div",{className:"level card-header-title  px-0 py-0"},l.a.createElement("div",{className:"level-left"},l.a.createElement(v,{onReturn:u})),l.a.createElement("div",{className:"level-right"},k))),l.a.createElement("div",{className:"card-content px-0"},t))))}function P(e){var t=this,a=e.min,c=void 0===a?0:a,i=e.max,o=void 0===i?1e7:i,r=e.count,u=void 0===r?0:r,m=e.onChange,p=void 0===m?function(){}:m,h=Object(n.useState)(c),d=Object(s.a)(h,2),b=d[0],g=d[1];Object(n.useEffect)((function(){b&&u!==b&&g(u)}),[u]);return l.a.createElement("div",{className:"field has-addons has-addons-right"},l.a.createElement("p",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input counter-input",style:{width:"150px"},type:"number",placeholder:"numero",value:b,onChange:function(e){var a=e.target.value;/[0-9]?[0-9]?(\.[0-9][0-9]?)?/.test(a)&&(a=parseFloat(a))>=t.min&&a<t.max&&(p(a),g(a))}}),l.a.createElement("span",{className:"icon is-small is-left",onClick:function(){var e=b-1;e>=c?(p(e),g(e)):g(c)}},l.a.createElement("input",{type:"button",value:"-",className:"counter-button button is-ghost"})),l.a.createElement("span",{className:"icon is-small is-right",onClick:function(){var e=b+1;e<=o&&(p(e),g(e))}},l.a.createElement("input",{type:"button",value:"+",className:"counter-button button is-ghost"}))))}l.a.Component;function y(e){var t=e.value,a=void 0===t?-1:t,n=e.style,c=void 0===n?{}:n;return l.a.createElement(Fragment,null,l.a.createElement("progress",{className:"progress is-link",max:"100",style:c,value:a}))}function C(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var a=0;a<e.length;++a)if(!Object(b.isEqual)(e[a],t[a]))return!1;return!0}l.a.Component;function S(e){var t=e.col,a=e.data,n=e.index,c=void 0===n?1:n;if(t.cell)return l.a.createElement("td",{key:"tb-data-".concat(c,"-").concat(t.name,"-"),style:{width:"1%",whiteSpace:"nowrap"},className:"".concat(t.className," m-0 px-0")},t.cell(a,c));var i=d()(a,t.selector).safeObject;return i||(i=t.default?t.default:""),l.a.createElement("td",{key:"tb-data-".concat(c,"-").concat(t.name,"-"),className:"".concat(t.className," m-0")},i)}function x(e){var t=e.className,a=void 0===t?"":t,c=e.isSelected,i=void 0!==c&&c,s=e.index,o=void 0===s?0:s,r=e.data,u=void 0===r?{}:r,m=e.cols,p=void 0===m?[]:m,h=e.handleSelectedRow,d=void 0===h?function(){}:h,b=[];return p.map((function(e,t){b.push(l.a.createElement(S,{key:"tb-row-".concat(o,"-col-").concat(t," "),col:e,data:u,index:o}))})),l.a.createElement(n.Fragment,null,l.a.createElement("tr",{key:"tb-row-".concat(o,"-").concat(i),className:"".concat(a," ").concat(i?"is-selected":""),onClick:function(){return d(u,o)}},b))}function w(e){var t=e.col,a=void 0===t?{}:t,n=e.index,c=void 0===n?1:n;return a.abbr?l.a.createElement("th",{key:"th-h-".concat(c),className:"has-text-left"},l.a.createElement("abbr",{title:a.name},a.abbr)):l.a.createElement("th",{key:"th-h-".concat(c),className:"has-text-left"},a.name)}var j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data:e.data,actualPage:1,selected:null,objectPerPage:100,rowSelected:-1,selectedItems:[],searchVisible:!1},n.setDefaultProperties=n.setDefaultProperties.bind(Object(u.a)(n)),n.handleChangePage=n.handleChangePage.bind(Object(u.a)(n)),n.isSelected=n.isSelected.bind(Object(u.a)(n)),n.setSearch=n.setSearch.bind(Object(u.a)(n)),n.handleSelectedRow=n.handleSelectedRow.bind(Object(u.a)(n)),n.setDefaultProperties(e),n}return Object(r.a)(a,[{key:"setDefaultProperties",value:function(e){var t=e.horizontal,a=void 0!==t&&t,n=e.automatic,l=void 0!==n&&n,c=e.title,i=void 0===c?"":c,s=e.className,o=void 0===s?"box px-5":s,r=e.onSearch,u=void 0!==r&&r,m=e.withoutFooter,p=void 0!==m&&m,h=e.multipleSelection,d=void 0!==h&&h,b=e.noContentMessage,g=void 0===b?":( No hay datos suficientes para mostrar.":b,v=e.isSelectable,f=void 0===v||v,E=e.hasHeader,N=void 0===E||E,k=e.key,P=void 0===k?"":k;this.horizontal=a,this.automatic=l,this.title=i,this.onSearch=u?this.setSearch:null,this.className=o,this.withoutFooter=p,this.noContentMessage=g,this.multipleSelection=d,this.isSelectable=f,this.hasHeader=N,this.key=P}},{key:"handleSelectedRow",value:function(e,t){var a=this;if(this.isSelectable)if(this.multipleSelection){var n=this.state.selectedItems;n.push(e);this.setState({selectedItems:n},(function(){a.props.onSelectedRows&&a.props.onSelectedRows(n)}))}else{if(this.state.rowSelected===t)return void this.setState({selected:null,rowSelected:-1});this.setState({selected:e,rowSelected:t},(function(){a.props.onSelectedRow&&a.props.onSelectedRow(e,t)}))}}},{key:"setSearch",value:function(){this.setState({searchVisible:!this.state.searchVisible})}},{key:"handleChangePage",value:function(e){this.props.handleChangePage&&this.props.handleChangePage(e-1),this.setState({actualPage:e,selected:null,rowSelected:-1})}},{key:"isSelected",value:function(e,t){return this.multipleSelection?this.state.selectedItems.includes(t):this.state.selected&&this.state.rowSelected===e}},{key:"render",value:function(){var e=this,t=this.props,a=t.cols,n=t.isLoading,c=[],i=0;if(this.automatic){var s=(this.state.actualPage-1)*this.state.objectPerPage,o=s+this.state.objectPerPage;c=this.props.data?this.props.data.slice(s,o):[],i=Math.ceil(this.props.data.length/10)}else c=this.props.data,i=this.props.totalPages;c&&0!==c.length||(c=[]);var r=[];a.map((function(t,a){r.push(l.a.createElement(w,{col:t,index:a,key:"th-".concat(a,"-").concat(e.key,"-").concat(e.state.actualPage)}))}));var u=[];return c.map((function(t,n){u.push(l.a.createElement(x,{isSelected:e.isSelected(n,t),key:"".concat(e.key,"-tb-").concat(n,"-").concat(e.state.actualPage),index:n,data:t,cols:a,handleSelectedRow:e.handleSelectedRow}))})),l.a.createElement("div",{className:"".concat(this.className," pt-1 ")},l.a.createElement("div",{className:"p-0 mx-0 my-0 mt-2 table-container"},l.a.createElement(E,{title:this.props.title,onSearch:this.onSearch,onAdd:this.props.onAdd,onReload:this.props.onReload,options:this.props.options}),l.a.createElement(N,{isVisible:this.state.searchVisible,onSearch:this.props.onSearch}),n?l.a.createElement("div",{className:"table"},l.a.createElement(y,{className:"container mt-3",isSmall:!0,reload:this.onReload})):u.length>0?l.a.createElement("table",{className:"table is-fullwidth  is-striped is-narrow  is-hoverable"},l.a.createElement("thead",{className:"py-6 my-6"},l.a.createElement("tr",null,r)),l.a.createElement("tbody",null,u)):l.a.createElement("div",{className:"container mt-4 py-5"},l.a.createElement("div",{className:"subtitle has-text-centered"},this.noContentMessage))),l.a.createElement("div",{className:"p-0 mx-0 my-0 mt-4"},l.a.createElement(g,{isHidden:this.withoutFooter,count:i,actualPage:this.state.actualPage,onPageChange:this.handleChangePage})))}}]),a}(l.a.Component),O=(a(23),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{count:1}),l.a.createElement(P,null),l.a.createElement(k,null),l.a.createElement(j,{title:"People",cols:[{name:"Name",selector:"name"}],data:[{name:"Luis"}]}))});i.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3387f7a8.chunk.js.map