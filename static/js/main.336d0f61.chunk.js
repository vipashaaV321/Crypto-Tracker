(this["webpackJsonpcrypto-currency"]=this["webpackJsonpcrypto-currency"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/1.d5b57417.jpg"},22:function(e,a,t){e.exports=t(50)},27:function(e,a,t){},46:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),l=t.n(c),o=(t(27),t(8)),m=t(18),i=t.n(m),s=t(7),u=function(e){var a=e.name,t=e.image,n=(e.symbol,e.price),c=e.volume,l=e.priceChange,o=e.marketcap,m=e.marketcaprank;return r.a.createElement(s.a,{style:{width:"18rem"},className:"m-2 col-md-6 col-sm-12 col-lg-3 mx-auto cardd"},r.a.createElement("br",null),r.a.createElement(s.a.Img,{variant:"top",src:t,style:{width:"100px",height:"100px"},className:"mx-auto d-block"}),r.a.createElement(s.a.Body,null,r.a.createElement(s.a.Title,null,r.a.createElement("h2",null,a)),r.a.createElement("hr",null),r.a.createElement(s.a.Text,null,r.a.createElement("p",{className:"coin-price"},"Price = \u20b9",n),r.a.createElement("p",{className:"coin-volume"},"Volume = \u20b9",c.toLocaleString()),l<0?r.a.createElement("p",{className:"coin-percent red",style:{color:"red"}},r.a.createElement("i",{class:"fa fa-arrow-circle-down"}),"  ",l.toFixed(2),"%"):r.a.createElement("p",{className:"coin-percent green",style:{color:"#009988"}},r.a.createElement("i",{class:"fa fa-arrow-circle-up"}),"  ",l.toFixed(2),"%"),r.a.createElement("p",{className:"coin-marketcap"},"MKT Cap:\u20b9",o.toLocaleString()),r.a.createElement("p",{className:"coin-marketcap"},"Market Rank : ",m.toLocaleString()))),r.a.createElement("br",null))},d=(t(45),t(20)),p=t(21);var E=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-dark display-4",style:{color:"#ffff",fontFamily:"fantasy"}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"navbar-brand",style:{fontSize:"30px"}},r.a.createElement("i",{class:"fa fa-btc","aria-hidden":"true"}),"  CryptoCurrency Tracker"))))};var f=function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"navbar navbar-expand-lg bg-dark display-4",style:{color:"#ffff",fontFamily:"fantasy"}},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"mx-auto",style:{textAlign:"center"}},r.a.createElement("a",{href:"https://github.com/vipashaaV321"}," ",r.a.createElement("i",{class:"fa fa-copyright","aria-hidden":"true"})," Made By Vipasha")))))},g=(t(46),t(19)),h=t.n(g);var v=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),m=Object(o.a)(l,2),s=m[0],g=m[1],v=Object(n.useState)(""),y=Object(o.a)(v,2),b=y[0],N=y[1];Object(n.useEffect)((function(){i.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){g(e.data)})).catch((function(e){return console.log(e)}))}),[]);var x=s.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("section",{id:"header",className:"d-flex align-items-center"},r.a.createElement("div",{className:"container-fluid nav_bg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 pt-3 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column mx-auto"},r.a.createElement("h1",{style:{color:"#333"}},"Find Any CryptoCurrency Here And Start Trading!! "),r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,{onClick:function(){return c(!t)},"aria-controls":"example-fade-text","aria-expanded":t,className:"col-6  btn-lg btn-info mx-auto"},"Search Currency")),r.a.createElement("br",null),r.a.createElement(d.a,{in:t},r.a.createElement("div",{id:"example-fade-text"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"col-12 mx-auto",onChange:function(e){N(e.target.value)},placeholder:"Enter Currency Name"})))))),r.a.createElement("div",{class:"col-lg-6 order-1 order-lg-2 header-img pt-3"},r.a.createElement("img",{src:h.a,className:"img-fluid animated",alt:"home-img"}))))))),r.a.createElement("div",{className:"coin-app mx-auto App-header "},r.a.createElement("div",{className:"coin-search"},r.a.createElement("h1",{className:"coin-text "})),r.a.createElement("div",{className:"row p-2 m-2"},x.map((function(e){return r.a.createElement(u,{key:e.id,name:e.name,image:e.image,symbol:e.symbol,volume:e.total_volume,price:e.current_price,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap,marketcaprank:e.market_cap_rank})})))),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.336d0f61.chunk.js.map