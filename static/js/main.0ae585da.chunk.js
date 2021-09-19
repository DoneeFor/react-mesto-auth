(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),i=n(8),r=(n(16),n(23)),l=n(2),u=n(19),p=n(20),d=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(u.a)(this,e),this._baseUrl=n,this._headers=a}return Object(p.a)(e,[{key:"_checkRequestResult",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkRequestResult)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkRequestResult)}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"".concat(t),headers:this._headers}).then(this._checkRequestResult)}},{key:"likeCardStatus",value:function(e,t){return t?this.like(e):this.dislike(e)}},{key:"postCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e),link:"".concat(t)})}).then(this._checkRequestResult)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRequestResult)}},{key:"updateUserData",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then(this._checkRequestResult)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkRequestResult)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"46e8784b-6100-4cb8-864a-061229038de1","Content-Type":"application/json"}}),h=n.p+"static/media/header__logo.6129e9de.svg",j=n(3),m=n(0);var b=function(e){var t=e.email,n=e.onSignOut;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("img",{src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(m.jsxs)("div",{className:"header__container",children:[Object(m.jsxs)(j.b,{exact:!0,path:"/",children:[Object(m.jsx)("p",{className:"header__email",children:t}),Object(m.jsx)(i.b,{to:"/sign-in",className:"header__link",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(m.jsx)(j.b,{exact:!0,path:"/sign-in",children:Object(m.jsx)(i.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(m.jsx)(j.b,{exact:!0,path:"/sign-up",children:Object(m.jsx)(i.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})};var _=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},f=n.p+"static/media/Trash.e3c42771.svg",O=c.a.createContext();var x=function(e){var t=c.a.useContext(O),n=e.card.owner._id===t._id,a="card__trash ".concat(n?"card__trash":"card__trash_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),o="card__like ".concat(s?"card__like_active":"");return Object(m.jsxs)("figure",{className:"card",children:[Object(m.jsx)("img",{src:e.link,alt:e.name,className:"card__image",onClick:function(){e.onCardClick(e.card)}}),n&&Object(m.jsx)("button",{className:a,onClick:function(){e.onCardDelete(e.card._id)},children:Object(m.jsx)("img",{src:f,alt:"delete"})}),Object(m.jsxs)("figcaption",{className:"card__description",children:[Object(m.jsx)("h2",{className:"card__title",children:e.name}),Object(m.jsxs)("div",{className:"card__like-place",children:[Object(m.jsx)("button",{type:"submit",className:o,onClick:function(){e.onCardLike(e.card)}}),Object(m.jsx)("span",{className:"card__like-count",children:e.like})]})]})]})};var g=function(e){var t=c.a.useContext(O);return Object(m.jsxs)("main",{className:"container",children:[Object(m.jsxs)("section",{className:"profile",children:[Object(m.jsx)("div",{className:"profile__avatar",children:Object(m.jsx)("img",{src:t?t.avatar:null,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430",className:"profile__image",onClick:e.onEditAvatar})}),Object(m.jsxs)("div",{className:"profile__info",children:[Object(m.jsxs)("div",{className:"profile__block",children:[Object(m.jsx)("h1",{className:"profile__name",children:t?t.name:null}),Object(m.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile})]}),Object(m.jsx)("p",{className:"profile__description",children:t?t.about:null})]}),Object(m.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(m.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(m.jsx)(x,{card:t,link:t.link,name:t.name,likes:t.likes.length,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var v=function(e){return Object(m.jsx)("article",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":" "," "),children:Object(m.jsxs)("div",{className:"popup__container",children:[Object(m.jsx)("button",{onClick:e.onClose,type:"button",className:"popup__close popup__close_".concat(e.name)}),Object(m.jsx)("h2",{className:"popup__title",children:e.title}),Object(m.jsx)("form",{name:"popup-form-".concat(e.name),className:"popup__form popup__form_".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:Object(m.jsxs)("fieldset",{className:"popup__field",children:[e.children,Object(m.jsx)("button",{type:"submit",className:"popup__submit",children:e.buttonText})]})})]})})};var k=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(l.a)(o,2),r=i[0],u=i[1];return Object(m.jsxs)(v,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace(a,r),s(""),u("")},children:[Object(m.jsx)("input",{id:"placename",className:"popup__input",type:"text",name:"placename",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,value:a,onChange:function(e){s(e.target.value)}}),Object(m.jsx)("span",{className:"popup__input-error",id:"placename-error"}),Object(m.jsx)("input",{id:"link",className:"popup__input",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:r,onChange:function(e){u(e.target.value)}}),Object(m.jsx)("span",{className:"popup__input-error",id:"link-error"})]})};var N=function(e){var t=c.a.useContext(O),n=c.a.useState(""),a=Object(l.a)(n,2),s=a[0],o=a[1],i=c.a.useState(""),r=Object(l.a)(i,2),u=r[0],p=r[1];return c.a.useEffect((function(){o(t?t.name:null),p(t?t.about:null)}),[t]),Object(m.jsxs)(v,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser(s,u)},children:[Object(m.jsx)("input",{id:"name",className:"popup__input",type:"text",name:"username",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:s||"",onChange:function(e){o(e.target.value)}}),Object(m.jsx)("span",{className:"popup__input-error",id:"name-error"}),Object(m.jsx)("input",{id:"occupation",className:"popup__input",type:"text",name:"occupation",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",minLength:"2",maxLength:"200",required:!0,value:u||"",onChange:function(e){p(e.target.value)}}),Object(m.jsx)("span",{className:"popup__input-error",id:"occupation-error"})]})};var C=function(e){var t=c.a.useRef("");return Object(m.jsxs)(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value),t.current.value=""},children:[Object(m.jsx)("input",{ref:t,id:"av_link",className:"popup__input",type:"url",name:"av_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e",minLength:"2",required:!0}),Object(m.jsx)("span",{className:"popup__input-error",id:"av_link-error"})]})};var y=function(e){return Object(m.jsx)("article",{className:"popup popup_type_image-overlay ".concat(e.isOpen?"popup_opened":" "),children:Object(m.jsxs)("figure",{className:"popup__figure",children:[Object(m.jsx)("button",{type:"button",className:"popup__close popup__close_image",onClick:e.onClose}),Object(m.jsx)("img",{src:e.link,alt:"#",className:"popup__image"}),Object(m.jsx)("figcaption",{className:"popup__caption",children:e.name})]})})};var S=function(e){var t=e.onSubmit,n=c.a.useState(""),a=Object(l.a)(n,2),s=a[0],o=a[1],i=c.a.useState(""),r=Object(l.a)(i,2),u=r[0],p=r[1];return Object(m.jsxs)("div",{className:"authorization",children:[Object(m.jsx)("h2",{className:"authorization__title",children:"\u0412\u0445\u043e\u0434"}),Object(m.jsxs)("form",{className:"authorization__form",name:"login-form",onSubmit:function(e){e.preventDefault(),t(s,u)},children:[Object(m.jsx)("input",{required:!0,minLength:"5",onChange:function(e){o(e.target.value)},value:s,maxLength:"40",type:"email",name:"login-email",placeholder:"Email",className:"authorization__input"}),Object(m.jsx)("input",{required:!0,minLength:"5",onChange:function(e){p(e.target.value)},value:u,maxLength:"40",type:"password",name:"login-password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"authorization__input authorization__input_password"}),Object(m.jsx)("button",{type:"submit",className:"authorization__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},L=n(24),w=n(25),R=["component"];var U=function(e){var t=e.component,n=Object(w.a)(e,R);return Object(m.jsx)(j.b,{children:function(){return n.isLoggedIn?Object(m.jsx)(t,Object(L.a)({},n)):Object(m.jsx)(j.a,{to:"/sign-in"})}})};var E=function(e){var t=e.onSubmit,n=c.a.useState(""),a=Object(l.a)(n,2),s=a[0],o=a[1],r=c.a.useState(""),u=Object(l.a)(r,2),p=u[0],d=u[1];return Object(m.jsxs)("div",{className:"authorization",children:[Object(m.jsx)("h2",{className:"authorization__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsxs)("form",{className:"authorization__form",name:"register-form",onSubmit:function(e){e.preventDefault(),t(s,p)},children:[Object(m.jsx)("input",{required:!0,onChange:function(e){o(e.target.value)},value:s,minLength:"5",maxLength:"40",type:"email",name:"register-email",placeholder:"Email",className:"authorization__input"}),Object(m.jsx)("input",{required:!0,onChange:function(e){d(e.target.value)},value:p,minLength:"5",maxLength:"40",type:"password",name:"register-password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"authorization__input authorization__input_password"}),Object(m.jsx)("button",{type:"submit",className:"authorization__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(m.jsx)(i.b,{className:"authorization__login-link",to:"/sing-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})]})},T=n.p+"static/media/Deny.df8eddf6.svg",q=n.p+"static/media/Success.1b6082f8.svg";var z=function(e){var t=e.onClose,n=e.isOpen,a=e.isRegSucces;return Object(m.jsx)("div",{className:"popup popup_type_view ".concat(n?"popup_opened":" "),children:Object(m.jsxs)("div",{className:"popup__content",children:[Object(m.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button popup__close popup__close_image",onClick:t}),Object(m.jsx)("img",{src:a?q:T,className:"popup__info-icon",alt:"\u0443\u0441\u043f\u0435\u0445 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(m.jsx)("h2",{className:"popup__title-info",children:a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]})})},D="https://auth.nomoreparties.co",P=function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a ".concat(e.status)))};var A=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(l.a)(s,2),i=o[0],u=o[1],p=c.a.useState(!1),h=Object(l.a)(p,2),f=h[0],x=h[1],L=c.a.useState(!1),w=Object(l.a)(L,2),R=w[0],T=w[1],q=c.a.useState({}),A=Object(l.a)(q,2),I=A[0],J=A[1],F=c.a.useState(),B=Object(l.a)(F,2),H=B[0],M=B[1],G=c.a.useState([]),V=Object(l.a)(G,2),K=V[0],Q=V[1],W=Object(j.g)(),X=c.a.useState(""),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=c.a.useState(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=c.a.useState(!1),se=Object(l.a)(ce,2),oe=se[0],ie=se[1],re=c.a.useState(!1),le=Object(l.a)(re,2),ue=le[0],pe=le[1];function de(e){e.classList.contains("popup")&&he()}c.a.useEffect((function(){!function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(D,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(P)}(e).then((function(e){ae(!0),$(e.data.email),W.push("/")})).catch((function(e){401===e.status&&console.log("401 \u2014 \u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"),console.log("401 \u2014 \u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")}))}(),d.getUserData().then((function(e){M(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),c.a.useEffect((function(){d.getInitialCards().then((function(e){Q(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),c.a.useEffect((function(){window.addEventListener("keydown",(function(e){"Escape"===e.key&&he()}))}),[]);var he=function(){u(!1),x(!1),a(!1),T(!1),J(!1),pe(!1)};return Object(m.jsx)("div",{className:"body",children:Object(m.jsxs)(O.Provider,{value:H,children:[Object(m.jsx)(b,{email:Z,onSignOut:function(){localStorage.removeItem("jwt"),ae(!1),W.push("/sign-in")}}),Object(m.jsxs)(j.d,{children:[Object(m.jsx)(U,{exact:!0,path:"/",component:g,isLoggedIn:ne,onEditProfile:function(){a(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){x(!0)},onCardClick:function(e){T(!0),J(e)},cards:K,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===H._id}));d.likeCardStatus(e._id,!t).then((function(t){var n=K.map((function(n){return n._id===e._id?t:n}));Q(n)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){d.deleteCard(e).then((function(){Q(K.filter((function(t){return t._id!==e})))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(m.jsx)(j.b,{path:"/sign-in",children:Object(m.jsx)(S,{onSubmit:function(e,t){(function(e,t){return fetch("".concat(D,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(P).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(t){localStorage.setItem("jwt",t.token),ae(!0),$(e),W.push("/")})).catch((function(e){return 400===e.status?console.log("400 - \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status&&console.log("401 - \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d "),console.log("Error: 500")}))}})}),Object(m.jsx)(j.b,{path:"/sign-up",children:Object(m.jsx)(E,{onSubmit:function(e,t){(function(e,t){return fetch("".concat(D,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(P)})(e,t).then((function(){pe(!0),ie(!0),W.push("/sign-in")})).catch((function(e){400===e.status&&console.log("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439 "),pe(!0),ie(!1)}))}})})]}),Object(m.jsx)(_,{}),Object(m.jsx)(v,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClose:he,overlay:de}),Object(m.jsx)(z,{isRegSucces:oe,isOpen:ue,onClose:he}),Object(m.jsx)(k,{isOpen:i,onClose:he,overlay:de,onAddPlace:function(e,t){d.postCard(e,t).then((function(e){Q([e].concat(Object(r.a)(K)))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(m.jsx)(N,{isOpen:n,onClose:he,overlay:de,onUpdateUser:function(e,t){d.updateUserData(e,t).then((function(e){M(e),he()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(m.jsx)(C,{isOpen:f,onClose:he,overlay:de,onUpdateAvatar:function(e){d.updateAvatar(e).then((function(e){M(e),he()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(m.jsx)(y,{isOpen:R,onClose:he,card:I,link:I.link,name:I.name,overlay:de})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(A,{})})}),document.getElementById("root")),I()}},[[36,1,2]]]);
//# sourceMappingURL=main.0ae585da.chunk.js.map