const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let d=null;function o(t,e){t.disabled=!1,e.disabled=!0}e.disabled=!0,t.addEventListener("click",(function(a){o(e,t),d=setInterval((function(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(n){clearInterval(d),o(t,e),t.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.74c2f5a9.js.map
