!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){o[n]=e},e.parcelRequired7c6=r);var i={},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,p="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,v=p||d||Function("return this")(),g=Object.prototype.toString,m=Math.max,h=Math.min,b=function(){return v.Date.now()};function y(e){var t=void 0===e?"undefined":n(a)(e);return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":n(a)(e))||function(n){return!!n&&"object"==typeof n}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var o=f.test(e);return o||l.test(e)?s(e.slice(2),o?2:8):u.test(e)?NaN:+e}i=function(n,e,t){var o,r,i,a,c,u,f=0,l=!1,s=!1,p=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function d(e){var t=o,i=r;return o=r=void 0,f=e,a=n.apply(i,t)}function v(n){return f=n,c=setTimeout(M,e),l?d(n):a}function g(n){var t=n-u;return void 0===u||t>=e||t<0||s&&n-f>=i}function M(){var n=b();if(g(n))return w(n);c=setTimeout(M,function(n){var t=e-(n-u);return s?h(t,i-(n-f)):t}(n))}function w(n){return c=void 0,p&&o?d(n):(o=r=void 0,a)}function L(){var n=b(),t=g(n);if(o=arguments,r=this,u=n,t){if(void 0===c)return v(u);if(s)return c=setTimeout(M,e),d(u)}return void 0===c&&(c=setTimeout(M,e)),a}return e=T(e)||0,y(t)&&(l=!!t.leading,i=(s="maxWait"in t)?m(T(t.maxWait)||0,e):i,p="trailing"in t?!!t.trailing:p),L.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=u=r=c=void 0},L.flush=function(){return void 0===c?a:w(b())},L};var M=r("6JpON"),w=document.querySelector("#search-box"),L=document.querySelector(".country-list"),x=document.querySelector(".country-info");w.addEventListener("input",i((function(e){var t=e.target.value.trim();console.log(t),""!==t?(o=t,fetch("".concat("https://restcountries.com/v3.1","/name/").concat(o,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))).then((function(e){var t,o,r,i,a,c,u;console.log(e),e.length>10?(L.innerHTML="",x.innerHTML="",n(M).Notify.warning("Too many matches found. Please enter a more specific name.")):e.length>=2&&e.length<=10?(L.innerHTML="",x.innerHTML="",e.forEach((function(n){return function(n){var e=n.name.official,t=n.flags.svg,o=(n.flags.png,'<li><img width = "50px" src = "'.concat(t,'"/><h2>').concat(e,"</h2></li>"));L.innerHTML+=o,console.log(L)}(n)}))):(L.innerHTML="",x.innerHTML="",t=e[0],o=t.name.official,r=t.flags.svg,i=t.capital,a=t.population,c=Object.values(t.languages),u='\n  <img width = "50px" src = "'.concat(r,'"/>\n  <h2>').concat(o,"</h2>\n  <p><b>Capital</b> ").concat(i,"</p>\n  <p><b>Population</b> ").concat(a,"</p>\n  <p><b>Languages</b> ").concat(c,"</p>"),x.innerHTML+=u)})).catch((function(e){n(M).Notify.failure("Oops, there is no country with that name"),L.innerHTML="",x.innerHTML=""})):(L.innerHTML="",x.innerHTML="");var o}),300))}();
//# sourceMappingURL=index.63618bdd.js.map