let t=null;const e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(()=>{t||(t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3),e.disabled=!0)})),a.addEventListener("click",(()=>{t&&(clearInterval(t),t=null,e.disabled=!1)}));
//# sourceMappingURL=01-color-switcher.e967b988.js.map
