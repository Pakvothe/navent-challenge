(this.webpackJsonpnaventchallenge=this.webpackJsonpnaventchallenge||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a,c,i,r,s,o,l,d,j=t(1),h=t.n(j),b=t(13),u=t.n(b),O=(t(25),t(26),t(3)),x=t(2),f=t(14),p=t(10),m=function e(n,t){Object(p.a)(this,e),this.data=n,this.next=t},g=function(){function e(){Object(p.a)(this,e),this.head=null}return Object(f.a)(e,[{key:"addTail",value:function(e){var n=new m(e,null);if(this.head){for(var t=this.head;t.next;)t=t.next;t.next=n}else this.head=n}},{key:"addHead",value:function(e,n){var t=new m(n,null);return this.head?(t.next=this.head,this.head=t,this.head):(this.head=t,e)}}]),e}(),v=function(e,n){if(!e)return n;if(!n)return e;for(var t=new g,a=e.head,c=n.head;null!==a||null!==c;)if(a.data<=c.data){if(t.addTail(a.data),!a.next)return t.addTail(c.data),t;a=a.next}else if(c.data<=a.data){if(t.addTail(c.data),!c.next)return t.addTail(a.data),t;c=c.next}return t},S=new g,N=new g,w=new g,y=t.p+"static/media/NaventLogo.8435c853.svg",k=t(4),C=t(5),L=t(19),I=C.a.div(a||(a=Object(k.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),T=C.a.header(c||(c=Object(k.a)(["\n  background: #fafafa;\n  color: #582568;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100px;\n  box-shadow: 0 9px 20px rgb(0 0 0 / 6%), 0 2px 3px rgb(0 0 0 / 4%);\n  margin-bottom: 2em;\n\n  h4 {\n    flex: 1;\n    color: #9595a0;\n  }\n\n  @media (max-width: 750px) {\n    font-size: 18px;\n    h4 {\n      font-size: 16px;\n    }\n  }\n"]))),z=C.a.div(i||(i=Object(k.a)(["\n  width: 80%;\n  margin: 0 auto;\n  background: #fafafa;\n\n  .problemContainer {\n    margin-bottom: 2em;\n\n    p {\n      font-size: 16px;\n    }\n\n    .showList {\n      text-align: center;\n      font-size: 24px;\n    }\n    .codeContainer {\n      border-radius: 0.25rem;\n      text-align: left;\n      margin: 1em 0;\n      padding: 10px 20px;\n      font-size: 16px;\n      background-color: #582568;\n      color: #fafafa;\n\n      h5 {\n        margin: 1em 0;\n      }\n    }\n  }\n"]))),J=Object(C.a)(L.a)(r||(r=Object(k.a)(["\n  height: 120px;\n  flex: 1;\n  @media (max-width: 750px) {\n    height: 80px;\n  }\n"]))),E=C.a.input(s||(s=Object(k.a)(["\n  border: 1px solid #7c7c84;\n  border-radius: 0.25rem;\n  height: 30px;\n  margin: 10px;\n\n  &:focus {\n    border: 2px solid #582568;\n    outline: none;\n  }\n"]))),F=C.a.button(o||(o=Object(k.a)(["\n  border: 1px solid #582568;\n  background-color: transparent;\n  color: #582568;\n  font-weight: bold;\n  border-radius: 0.25rem;\n  padding: 0.3em 0.5em;\n  height: 30px;\n  cursor: pointer;\n  margin: 1em 10px;\n  transition: background-color color 0.5s ease-in-out;\n  &:hover {\n    background-color: #582568;\n    color: #fafafa;\n  }\n  &:focus {\n    border: 2px solid #582568;\n    outline: none;\n  }\n"]))),A=C.a.p(l||(l=Object(k.a)(["\n  color: #582568;\n  font-weight: bold;\n"]))),B=C.a.footer(d||(d=Object(k.a)(["\n  background: rgba(88, 37, 104, 0.712);\n  color: #fafafa;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100px;\n  margin-top: 2em;\n\n  a {\n    color: #fafafa;\n    text-decoration: none;\n\n    &:hover {\n      color: #582568;\n      text-decoration: underline;\n      font-weight: bold;\n    }\n  }\n\n  @media (max-width: 750px) {\n    font-size: 18px;\n    h4 {\n      font-size: 16px;\n    }\n  }\n"]))),M=t(0),D=function(){var e=Object(j.useState)(),n=Object(x.a)(e,2),t=n[0],a=n[1],c=Object(j.useState)([]),i=Object(x.a)(c,2),r=i[0],s=i[1],o=Object(j.useState)(!1),l=Object(x.a)(o,2),d=l[0],h=l[1],b=Object(j.useState)(!1),u=Object(x.a)(b,2),f=u[0],p=u[1],m=Object(j.useState)(!1),g=Object(x.a)(m,2),v=g[0],N=g[1],w=Object(j.useState)(!1),k=Object(x.a)(w,2),C=k[0],L=k[1];console.log("listItem",t);var B=function(e){e?(S.addTail(parseInt(e,10)),h(!1),s((function(n){return[].concat(Object(O.a)(n),[e])}))):(S.addTail(parseInt(t,10)),h(!1),s([].concat(Object(O.a)(r),[parseInt(G(t))])))},D=function(){S.addHead(S.head,parseInt(t,10)),h(!0),s([parseInt(G(t))].concat(Object(O.a)(r)))},G=function(e){var n=[];if(d){if(d)return n.unshift(e),n[0]}else n.push(e);return n[0]};return Object(M.jsxs)(I,{children:[Object(M.jsxs)(T,{children:[Object(M.jsx)(J,{src:y}),Object(M.jsx)("h2",{children:"Navent Challenge"}),Object(M.jsxs)("h4",{children:[Object(M.jsx)("small",{children:"by. "}),"Franco Ortiz"]})]}),Object(M.jsxs)(z,{children:[Object(M.jsxs)("div",{className:"problemContainer",children:[Object(M.jsx)("h4",{children:"Problema A:"}),Object(M.jsx)("p",{children:"Dado una lista encadenada, y 5 valores para insertar, insertar dichos\n  valores alternadamente al final y al principio de la lista. Ejemplo:\n  Lista inicial: 1 -> 4 -> 5 -> 3 Lista luego de la inserci\xf3n secuencial\n  de los valores: 6, 7, 8, 9, 10 9 -> 7 -> 1 -> 4 -> 5 -> 3 -> 6 -> 8 ->\n  10"})]}),Object(M.jsxs)("div",{className:"problemContainer",children:[Object(M.jsx)("h4",{children:"Soluci\xf3n:"}),v?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("p",{className:"showList",children:JSON.stringify(r)}),Object(M.jsxs)("div",{className:"codeContainer",children:[Object(M.jsx)("h5",{children:"C\xf3digo de la LinkedList"}),Object(M.jsx)("p",{children:JSON.stringify(S)})]}),Object(M.jsx)("p",{children:"Ingresa numeros para ir agregando a la lista de forma secuencial."}),Object(M.jsx)(E,{type:"number",name:"createList",onChange:function(e){a(e.target.value)}}),Object(M.jsx)(F,{onClick:t&&t.length?function(){L(!1),f?D():B(),p(!f)}:function(){return L(!0)},children:"Agregar"}),C&&Object(M.jsx)(A,{children:"Introduce un numero por favor"})]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("p",{children:"Toca el Bot\xf3n para generar una lista aleatoria o para generar la lista del ejemplo del ejercicio."}),Object(M.jsx)(F,{onClick:function(){for(var e=0;e<4;)B(Math.floor(10*Math.random()+1)),e++;N(!0)},children:"Generar Lista"}),Object(M.jsx)(F,{onClick:function(){B(1),B(4),B(5),B(3),N(!0)},children:"Ejemplo"})]})]})]})]})},G=Object(j.memo)(D),H=function(){var e=Object(j.useState)([]),n=Object(x.a)(e,2),t=n[0],a=n[1],c=Object(j.useState)([]),i=Object(x.a)(c,2),r=i[0],s=i[1],o=Object(j.useState)(!1),l=Object(x.a)(o,2),d=l[0],h=l[1],b=Object(j.useState)(!1),u=Object(x.a)(b,2),f=u[0],p=u[1],m=Object(j.useState)(!1),g=Object(x.a)(m,2),S=g[0],y=g[1],k=Object(j.useState)([]),C=Object(x.a)(k,2),L=C[0],I=C[1],T=function(e){N.addTail(parseInt(e)),a((function(n){return[].concat(Object(O.a)(n),[e])}))},J=function(e){w.addTail(parseInt(e)),s((function(n){return[].concat(Object(O.a)(n),[e])}))},E=function(e,n){for(var t=e,a=n,c=[];t.length&&a.length;)t[0]<a[0]?c.push(t.shift()):c.push(a.shift());return[].concat(c,Object(O.a)(t),Object(O.a)(a))};return Object(M.jsxs)("div",{children:[Object(M.jsxs)(z,{children:[Object(M.jsxs)("div",{className:"problemContainer",children:[Object(M.jsx)("h4",{children:"Problema B:"}),Object(M.jsx)("p",{children:"Dadas 2 listas ordenadas, obtener una 3era ordenada:\n  Ejemplo:\n  Listas iniciales:\n  1 -> 3 -> 5 -> 8\n  2 -> 3-> 6 -> 9\n  Lista final luego de unirlas ordenadamente:\n  1 -> 2 -> 3 -> 3 -> 5 -> 6 -> 8 -> 9"})]}),Object(M.jsxs)("div",{className:"problemContainer",children:[Object(M.jsx)("h4",{children:"Soluci\xf3n:"}),!d&&Object(M.jsx)("p",{children:"Toca el Bot\xf3n para generar la lista del ejemplo del ejercicio."}),f?Object(M.jsx)("p",{className:"showList",children:JSON.stringify(L)}):Object(M.jsx)(M.Fragment,{children:d&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("p",{className:"showList",children:JSON.stringify(t)}),Object(M.jsx)("p",{className:"showList",children:JSON.stringify(r)})]})}),d?Object(M.jsx)(M.Fragment,{children:!S&&Object(M.jsx)(F,{onClick:function(){var e=E(t,r);I((function(n){return e})),p(!0),y(!0)},children:"Unir Listas"})}):Object(M.jsx)(F,{onClick:function(){T(1),T(3),T(5),T(8),J(2),J(3),J(6),J(9),h(!0)},children:"Generar lista de Ejemplo"}),Object(M.jsxs)("div",{className:"codeContainer",children:[Object(M.jsx)("h5",{children:"Lista1:"}),Object(M.jsx)("p",{children:JSON.stringify(N)}),Object(M.jsx)("h5",{children:"Lista2:"}),Object(M.jsx)("p",{children:JSON.stringify(w)}),Object(M.jsxs)("h5",{children:[Object(M.jsx)("h5",{children:"Resultado:"}),Object(M.jsx)("p",{children:JSON.stringify(v(N,w))})]})]})]})]}),Object(M.jsx)(B,{children:Object(M.jsxs)("p",{children:["Contacto:"," ",Object(M.jsx)("a",{href:"mailto:ortiz.franco@yandex.com?Subject=Entrevista%20Navent",children:"ortiz.franco@yandex.com"})]})})]})},P=Object(j.memo)(H),R=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsxs)("header",{className:"App-header",children:[Object(M.jsx)(G,{}),Object(M.jsx)(P,{})]})})};u.a.render(Object(M.jsx)(h.a.StrictMode,{children:Object(M.jsx)(R,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0b657f59.chunk.js.map