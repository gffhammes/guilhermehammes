(this["webpackJsonpsite-gh"]=this["webpackJsonpsite-gh"]||[]).push([[0],{20:function(e,t,s){},21:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(6),c=s.n(i),n=(s(20),s(12)),o=(s(21),s(2)),r=s(0);var l=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),s=t[0],i=t[1],c=Object(a.useState)(!1),l=Object(n.a)(c,2),d=l[0],j=l[1],m=function(){return i(!1)};return window.addEventListener("scroll",(function(){(window.pageYOffset||document.documentElement.scrollTop)>50?j(!0):j(!1)})),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar ".concat(d?"bg--blue":""),id:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container container",children:[Object(r.jsx)(o.Link,{className:"navbar-logo",onClick:m,to:"hero__section",smooth:!0,children:Object(r.jsx)("img",{src:"/guilhermehammes/images/logo-branca.png",alt:"Logo"})}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return i(!s)},children:Object(r.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:s?"nav-menu active shadow-5":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{activeClass:"active",to:"hero__section",className:"nav-link",smooth:!0,onClick:m,spy:!0,children:"in\xedcio"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{activeClass:"active",to:"about__section",className:"nav-link",smooth:!0,onClick:m,spy:!0,children:"sobre-mim"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{activeClass:"active",to:"portfolio__section",className:"nav-link",smooth:!0,onClick:m,spy:!0,children:"portfolio"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{activeClass:"active",to:"services__section",className:"nav-link",smooth:!0,onClick:m,spy:!0,children:"servi\xe7os"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{activeClass:"active",to:"benefits__section",className:"nav-link",smooth:!0,onClick:m,spy:!0,children:"vantagens"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{activeClass:"active",to:"contact__section",className:"nav-link",smooth:!0,onClick:m,spy:!0,children:"contato"})})]})]})})})},d=(s(33),s(34),["btn--medium","btn--large"]),j=function(e){var t=e.children,s=e.btnSize,a=e.targetId,i=e.isRound,c=e.externalLink,n=d.includes(s)?s:d[0];return Object(r.jsx)(o.Link,{activeClass:"active",to:a,spy:!0,smooth:!0,className:"shadow-1 btn ".concat(n," ").concat(i?"round":""),onClick:c?function(){return window.open(c,"_blank")}:null,children:t})};var m=function(){return Object(r.jsxs)("section",{id:"hero__section",children:[Object(r.jsx)("div",{className:"overlay"}),Object(r.jsx)("video",{loop:"true",autoplay:"autoplay",id:"vid",muted:!0,children:Object(r.jsx)("source",{src:"".concat("/guilhermehammes","/videos/guilherme-hammes.mp4"),type:"video/mp4"})}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("h1",{children:[Object(r.jsxs)("span",{children:["ol\xe1, eu sou",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"guilherme hammes"})," />",Object(r.jsx)("br",{})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"desenvolvedor front-end"}),Object(r.jsx)("br",{}),"desenvolvo sites, landing pages, hotsites e e-commerces responsivos e otimizados para os motores de busca"]}),Object(r.jsx)(j,{btnSize:"btn--large",targetId:"about__section",children:"saber mais >"})]})})]})},u=(s(35),s(36),["align--left","align--center","align--right"]),b=function(e){var t=e.textAlign,s=e.title,a=e.subtitle,i=u.includes(t)?t:u[0];return Object(r.jsxs)("div",{className:"title ".concat(i),children:[Object(r.jsx)("span",{children:"<"+a+" />"}),Object(r.jsx)("h2",{children:s})]})};var h=function(){return Object(r.jsx)("section",{id:"about__section",name:"about__section",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(b,{textAlign:"align--left",subtitle:"sobre-mim",title:"quem sou eu"}),Object(r.jsxs)("div",{className:"photo-resume",children:[Object(r.jsx)("div",{className:"photo",children:Object(r.jsx)("img",{src:"/guilhermehammes/images/guilherme-hammes.jpg",alt:"Guilherme Hammes"})}),Object(r.jsxs)("div",{className:"resume",children:[Object(r.jsx)("h3",{children:"Guilherme Hammes"}),Object(r.jsxs)("p",{children:[function(){var e=new Date,t=new Date("15 sep 2000"),s=e.getFullYear()-t.getFullYear(),a=e.getMonth()-t.getMonth();return(a<0||0===a&&e.getDate()<t.getDate())&&s--,s}()," anos"]}),Object(r.jsx)("p",{children:"Joinville/SC"}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/guilherme-felipe-ferreira-hammes/",target:"_blank",children:Object(r.jsx)("i",{class:"fab fa-linkedin"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/guilherme-felipe-ferreira-hammes/",target:"_blank",children:Object(r.jsx)("i",{class:"fab fa-whatsapp"})})]})]}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("p",{children:"Graduando em an\xe1lise e desenvolvimento de sistemas na Udesc, sou um grande apaixonado por tecnologia, inova\xe7\xe3o e design."}),Object(r.jsx)("p",{children:"Estudo e aplico programa\xe7\xe3o em meu trabalho desde 2016, criando automa\xe7\xf5es e at\xe9 sistemas utilizando a ferramenta Visual Basic for Applications, nativa do pacote Office."}),Object(r.jsx)("p",{children:"Em 2020, no entanto, colaborando em uma ag\xeancia de marketing, tive meu primeiro contato com web design e descobri uma paix\xe3o por interfaces e programa\xe7\xe3o front-end."}),Object(r.jsx)("p",{children:"Comecei a estudar e criar sites responsivos e otimizados para SEO utilizando HTML, CSS e Javascript e, em meados de 2021, decidi mergulhar nesse mundo e me desenvolver em ReactJs, meu foco atualmente."})]}),Object(r.jsx)(j,{targetId:"contact__section",children:"contato >"})]})})},x=(s(37),s(38),function(e){var t=e.imgPath,s=e.title,a=e.resume,i=e.stacks,c=e.siteAddress;return Object(r.jsxs)("div",{className:"portfolio-item",children:[Object(r.jsx)("img",{src:"/guilhermehammes"+t,alt:s}),Object(r.jsxs)("div",{className:"content shadow-2",children:[Object(r.jsx)("h3",{children:s}),Object(r.jsx)("span",{children:a}),Object(r.jsx)("div",{className:"stack-list",children:i.map((function(e,t){return Object(r.jsx)("span",{className:"stack-item",children:e},t)}))}),Object(r.jsx)(j,{externalLink:c,children:"conhecer >"})]})]})});var p=function(){return Object(r.jsx)("section",{id:"portfolio__section",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(b,{textAlign:"align--center",subtitle:"portfolio",title:"conhe\xe7a o meu trabalho"}),Object(r.jsxs)("div",{className:"portfolio-items",children:[Object(r.jsx)(x,{imgPath:"/images/portfolio-credestados.png",title:"CredEstados",resume:"Site responsivo para promotora de cr\xe9dito de Balne\xe1rio Cambori\xfa/SC.",stacks:["HTML","SCSS","Javascript","ReactJs"],siteAddress:"https://credestados.com.br/"}),Object(r.jsx)(x,{imgPath:"/images/portfolio-don-toro.png",title:"Don Toro",resume:"Site responsivo para a\xe7ougue de Joinville/SC.",stacks:["HTML","CSS","Javascript"],siteAddress:"https://dontoro.com.br/"})]})]})})},v=(s(39),s(40),function(e){var t=e.title,s=e.text;return Object(r.jsx)("a",{href:"",children:Object(r.jsxs)("div",{className:"services-card",children:[Object(r.jsx)("h3",{children:t}),Object(r.jsx)("p",{children:s})]})})});var O=function(){return Object(r.jsx)("section",{id:"services__section",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(b,{textAlign:"align--left",subtitle:"servi\xe7os",title:"veja como posso ajudar o seu neg\xf3cio"}),Object(r.jsxs)("div",{className:"services-cards",children:[Object(r.jsx)(v,{title:"site",text:"O objetivo do site \xe9 posicionar sua marca no mundo digital. Num site voc\xea deve falar sobre o seu neg\xf3cio, seu produto/servi\xe7o e disponibilizar meios de contato para o visitante, como WhatsApp, telefone e e-mail."}),Object(r.jsx)(v,{title:"landing page",text:"A landing page, ou p\xe1gina de captura, \xe9 a p\xe1gina que deve receber o tr\xe1fego de campanhas digitais. Nela voc\xea foca nos principais pontos e diferenciais do seu produto. Geralmente entrega algum material rico ao visitante em troca de seu e-mail."}),Object(r.jsx)(v,{title:"hotsite",text:"No hotsite voc\xea tem uma oportunidade de detalhar seu produto/servi\xe7o para uma promo\xe7\xe3o ou campanha espec\xedfica. \xc9 um site mais simples e com prazo de validade."}),Object(r.jsx)(v,{title:"e-commerce",text:"O e-commerce, como o nome sugere, \xe9 uma loja virtual. Nela voc\xea pode comercializar seus produtos 24h por dia e 7 dias por semana por um custo muito baixo! "})]}),Object(r.jsx)(j,{targetId:"contact__section",children:"contato >"})]})})},g=(s(41),s(42),function(e){var t=e.iconPath,s=e.title,a=e.text;return Object(r.jsxs)("div",{className:"benefit-item",children:[Object(r.jsx)("img",{src:"/guilhermehammes"+t,alt:s}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h3",{children:s}),Object(r.jsx)("p",{children:a})]})]})});var f=function(){return Object(r.jsx)("section",{id:"benefits__section",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(b,{textAlign:"align--center",subtitle:"vantagens",title:"saiba os diferenciais dos sites que eu desenvolvo"}),Object(r.jsxs)("div",{className:"benefits-items",children:[Object(r.jsx)(g,{iconPath:"/images/icone-vantagens-01.png",title:"Responsividade",text:"Hoje em dia n\xe3o d\xe1 para pensar em um site que fica lindo no computador, mas desfigurado nos celulares, tablets e televisores. Por isso, todos os sites s\xe3o testados e ajustados para ficarem lindos em qualquer dispositivo :)"}),Object(r.jsx)(g,{iconPath:"/images/icone-vantagens-02.png",title:"Mobile first",text:"O celular \xe9 o principal meio de acesso \xe0 internet de 90% dos brasileiros. N\xe3o faz sentido desenvolver um site para computador e adapta-lo para celulares. A experi\xeancia dos sites que eu desenvolvo \xe9 pensada para os celulares e adaptada para outros dispositivos."}),Object(r.jsx)(g,{iconPath:"/images/icone-vantagens-03.png",title:"Desempenho",text:"Utilizo uma tecnologia que permite alterar o conte\xfado da p\xe1gina sem precisar recarrega-la, o que gera um aumento de desempenho absurdo para o seu site, diminuindo a taxa de rejei\xe7\xe3o e aumentando suas convers\xf5es."}),Object(r.jsx)(g,{iconPath:"/images/icone-vantagens-04.png",title:"SEO",text:"Al\xe9m da velocidade de carregamento, os sites desenvolvidos em linha de c\xf3digo t\xeam uma sem\xe2ntica mais organizada, o que ajuda muito no seu SEO. Cuido de pequenos detalhes como o uso de palavras-chave e acessibilidade, que contam muito no seu desempenho."})]}),Object(r.jsx)(j,{children:"or\xe7amento >"})]})})};s(43);var N=function(){return Object(r.jsx)("section",{id:"contact__section",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(b,{textAlign:"align--left",subtitle:"contato",title:"vamos tomar um caf\xe9 e mudar o futuro do seu neg\xf3cio?"}),Object(r.jsxs)("div",{className:"contact-icons",children:[Object(r.jsxs)("a",{href:"",target:"_blank",children:[Object(r.jsx)("i",{class:"fab fa-whatsapp"}),Object(r.jsx)("span",{children:"(47) 9256-9136"})]}),Object(r.jsxs)("a",{href:"",target:"_blank",children:[Object(r.jsx)("i",{class:"fas fa-phone-alt"}),Object(r.jsx)("span",{children:"(47) 9 9256-9136"})]}),Object(r.jsxs)("a",{href:"",target:"_blank",children:[Object(r.jsx)("i",{class:"far fa-envelope"}),Object(r.jsx)("span",{children:"hello@guilhermehammes.com.br"})]})]})]})})};s(44);var k=function(){return Object(r.jsx)("footer",{id:"footer",children:Object(r.jsx)("div",{className:"container",children:"a"})})};var _=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(m,{}),Object(r.jsx)(h,{}),Object(r.jsx)("div",{className:"transition bottom--light-grey right--white"}),Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"transition bottom--white left--light-grey"}),Object(r.jsx)(O,{}),Object(r.jsx)("div",{className:"transition bottom--light-grey right--white"}),Object(r.jsx)(f,{}),Object(r.jsx)("div",{className:"transition bottom--white left--light-grey"}),Object(r.jsx)(N,{}),Object(r.jsx)(k,{})]})};c.a.render(Object(r.jsx)(_,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.73da0622.chunk.js.map