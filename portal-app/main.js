!function(t){function e(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,a){"use strict";a(1),function(){console.log("start");var t=document.getElementById("nav");t&&t.addEventListener("click",function(t){if(t.target&&"SPAN"==t.target.nodeName){-1===t.target.className.indexOf("tw-nav--item-active")&&(t.target.className+=" tw-nav--item-active");var e=t.target.previousElementSibling||t.target.nextElementSibling;-1!==e.className.indexOf("tw-nav--item-active")&&(e.className=-1!==e.className.indexOf("tw-nav--item-hasBadge")?"tw-nav--item tw-nav--item-hasBadge":"tw-nav--item"),document.getElementById("apps").className="tw-apps",document.getElementById("news").className="tw-news",document.getElementById(t.target.dataset.nav).className="tw-"+t.target.dataset.nav+" tw-"+t.target.dataset.nav+"-active"}})}()},function(t,e){}]);