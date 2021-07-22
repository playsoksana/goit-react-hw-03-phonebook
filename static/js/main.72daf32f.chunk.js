(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports={item:"Contact_item__3cDqG",name:"Contact_name__2-l_c",number:"Contact_number__21VWJ",button:"Contact_button__3R5gO"}},,,function(t,e,n){t.exports={form:"Form_form__3qt52",container:"Form_container__32jXk"}},function(t,e,n){t.exports={contacts:"ContactList_contacts__2ehKz",notification:"ContactList_notification__1_YZ5"}},,,function(t,e,n){t.exports={Label:"Input_Label__tlA6-",Input:"Input_Input__lQdVI",label:"Input_label__2Y3kS"}},function(t,e,n){t.exports={Backdrop:"Modal_Backdrop__1fFwI",Modal:"Modal_Modal__KuNJv"}},,function(t,e,n){},,function(t,e,n){t.exports={button:"Button_button__1ZRyn"}},function(t,e,n){t.exports={Container:"Filter_Container__2eFpF"}},function(t,e,n){t.exports={ButtonIcon:"ButtonIcon_ButtonIcon__1LXJZ"}},,,,,,,function(t,e,n){"use strict";n.r(e);var a,r=n(0),c=n.n(r),o=n(2),i=n.n(o),s=(n(17),n(16)),l=n(3),u=n(4),d=n(6),b=n(5),h=n(8),m=n(19),p=n.n(m),j=n(1),f=function(){return Object(j.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})},O=n(30),v=n(10),g=n.n(v),x=n(13),y=n(22),C=n(14),_=n.n(C),w=["name","textLabel","value","onChangeInput"],k=function(t){var e=t.name,n=t.textLabel,a=t.value,r=t.onChangeInput,c=Object(y.a)(t,w);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(x.a)(Object(x.a)({className:_.a.Input,value:a,onChange:r},c),{},{name:e,required:!0})),Object(j.jsx)("label",{htmlFor:e,className:_.a.Label,children:n})]})},I=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.onChangeInput=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(h.a)({},a,r))},t.addContactOnPhonebook=function(e){e.preventDefault(),t.props.onSubmit({name:e.currentTarget.name.value,number:e.currentTarget.number.value,id:Object(O.a)()}),t.clearInput()},t}return Object(u.a)(n,[{key:"clearInput",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.addContactOnPhonebook,e=this.onChangeInput,n=this.state,a=n.name,r=n.number;return Object(j.jsxs)("form",{className:g.a.form,onSubmit:t,children:[Object(j.jsx)("div",{className:g.a.container,children:Object(j.jsx)(k,{id:"name",value:a,placeholder:" ",onChangeInput:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",textLabel:"name"})}),Object(j.jsx)("div",{className:g.a.container,children:Object(j.jsx)(k,{id:"number",value:r,placeholder:" ",onChangeInput:e,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",textLabel:"number"})}),Object(j.jsx)(f,{})]})}}]),n}(r.Component),S=n(20),N=n.n(S),E=function(t){var e=t.value,n=t.filterContacts;return Object(j.jsx)("div",{className:N.a.Container,children:Object(j.jsx)(k,{value:e,name:"search",textLabel:"Find contact by name",placeholder:"Enter",onChangeInput:n})})},L=n(7),B=n.n(L),M=function(t){var e=t.name,n=t.number,a=t.id,r=t.deleteContactOnClick;return Object(j.jsxs)("li",{className:B.a.item,children:[Object(j.jsxs)("p",{className:B.a.name,children:[e,":"]}),Object(j.jsx)("p",{className:B.a.number,children:n}),Object(j.jsx)("button",{className:B.a.button,onClick:function(){r(a)},type:"button",children:"Delete contact"})]})},V=n(11),P=n.n(V),F=function(t){var e=t.deleteContactOnClick,n=t.contactsRender;return t.contacts.length?n.length?Object(j.jsx)("ul",{className:P.a.contacts,children:n.map((function(t){var n=t.name,a=t.number,r=t.id;return Object(j.jsx)(M,{deleteContactOnClick:e,name:n,number:a,id:r},r)}))}):Object(j.jsxs)("p",{className:P.a.notification,children:["There is no such name in the database"," "]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:P.a.notification,children:'"The phone book is empty"'}),Object(j.jsx)("img",{src:"https://homsk.com/upload/media/posts/2020-05/16/krik-mona-liza-i-dr-o-chem-rasskazyvayut-samye-smeshnye-memy-po-motivam-shedevrov-izobrazitelnogo-iskusstva_1589644460-b.jpg",alt:"a cat and woman"})]})},z=function(t){var e=t.children;return Object(j.jsx)("div",{children:e})},A=n(21),D=n.n(A),R=function(t){var e=t.children,n=t.toggleIsVisible,a=t.aria;return Object(j.jsx)("button",{className:D.a.ButtonIcon,onClick:n,"aria-label":a,type:"button",children:e})},J=n(15),T=n.n(J),K=["title","titleId"];function Z(){return(Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function q(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function H(t,e){var n=t.title,c=t.titleId,o=q(t,K);return r.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",width:22,height:28,viewBox:"0 0 22 28",ref:e,"aria-labelledby":c},o),void 0===n?r.createElement("title",{id:c},"close"):n?r.createElement("title",{id:c},n):null,a||(a=r.createElement("path",{d:"M20.281 20.656c0 0.391-0.156 0.781-0.438 1.062l-2.125 2.125c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-4.594-4.594-4.594 4.594c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-2.125-2.125c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l4.594-4.594-4.594-4.594c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.594 4.594-4.594c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062s-0.156 0.781-0.438 1.062l-4.594 4.594 4.594 4.594c0.281 0.281 0.438 0.672 0.438 1.062z"})))}var U,W=r.forwardRef(H),X=(n.p,document.querySelector("#modal-root")),Y=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={},t.handleKeyDown=function(e){"Escape"===e.code&&t.props.toggleIsVisible()},t.closeBackdropOnClick=function(e){var n=e.target;e.currentTarget===n&&t.props.toggleIsVisible()},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this.props,e=t.toggleIsVisible,n=t.children,a=this.closeBackdropOnClick;return Object(o.createPortal)(Object(j.jsxs)("div",{className:T.a.Backdrop,onClick:a,children:[Object(j.jsx)("div",{className:T.a.Modal,children:n}),Object(j.jsx)(R,{toggleIsVisible:e,aria:"close",children:Object(j.jsx)(W,{width:"20px",height:"20px"})})]}),X)}}]),n}(r.Component),G=n(9),Q=["title","titleId"];function $(){return($=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function tt(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function et(t,e){var n=t.title,a=t.titleId,c=tt(t,Q);return r.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:22,height:28,viewBox:"0 0 22 28",ref:e,"aria-labelledby":a},c),void 0===n?r.createElement("title",{id:a},"plus"):n?r.createElement("title",{id:a},n):null,U||(U=r.createElement("path",{d:"M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-6.5v6.5c0 0.828-0.672 1.5-1.5 1.5h-3c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-6.5c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h6.5v-6.5c0-0.828 0.672-1.5 1.5-1.5h3c0.828 0 1.5 0.672 1.5 1.5v6.5h6.5c0.828 0 1.5 0.672 1.5 1.5z"})))}var nt=r.forwardRef(et),at=(n.p,n(18),function(t){return G.b.error("".concat(t," is already in contact!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})});function rt(){try{var t=localStorage.getItem("contacts");return t?JSON.parse(t):null}catch(e){throw new Error}}var ct=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:Object(s.a)(t.props.contacts),filter:"",isVisibleModal:!1},t.addContactOnSubmit=function(e){if(t.state.contacts.find((function(t){return t.name===e.name.toLowerCase()})))at(e.name);else{var n={name:e.name.toLowerCase(),number:e.number,id:e.id};t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))}},t.filterOnRender=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.onChangeInputFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.toggleIsVisible=function(){t.setState((function(t){return{isVisibleModal:!t.isVisibleModal}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("contacts")&&this.setState({contacts:rt()})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;!function(t,e){try{e!==t&&localStorage.setItem("contacts",JSON.stringify(t))}catch(n){throw new Error}}(this.state.contacts,e.contacts),n.length>e.contacts.length&&0!==e.contacts.length&&this.setState({isVisibleModal:!1})}},{key:"render",value:function(){var t=this.addContactOnSubmit,e=this.onChangeInputFilter,n=this.filterOnRender,a=this.deleteContact,r=this.toggleIsVisible,c=this.state,o=c.filter,i=c.contacts,s=c.isVisibleModal;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(R,{toggleIsVisible:r,aria:"add contact",children:Object(j.jsx)(nt,{width:"40px",height:"40px"})}),i.length?Object(j.jsx)(z,{children:Object(j.jsx)(E,{value:o,filterContacts:e})}):"",Object(j.jsx)(z,{children:Object(j.jsx)(F,{contactsRender:n(),deleteContactOnClick:a,contacts:i})}),Object(j.jsx)(G.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),s&&Object(j.jsx)(Y,{toggleIsVisible:r,children:Object(j.jsx)(I,{onSubmit:t})})]})}}]),n}(r.PureComponent);ct.defaultProps={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]};var ot=ct;i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(ot,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.72daf32f.chunk.js.map