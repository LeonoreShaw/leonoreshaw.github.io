!function(){function t(){e.matches?(document.body.classList.add("dark"),localStorage.setItem("dark",!0)):(document.body.classList.remove("dark"),localStorage.setItem("dark",!1));c({true:"dark",false:"light"}[e.matches])}let e=window.matchMedia("(prefers-color-scheme: dark)");t();var r,a=e=>{t()},o=("function"==typeof e.addEventListener?e.addEventListener("change",a):"function"==typeof e.addListener&&e.addListener(a),localStorage.getItem("dark"));function d(e){"true"===e.toString()?document.body.classList.add("dark"):document.body.classList.remove("dark")}function n(){d(o=!o||"true"!==o.toString()),localStorage.setItem("dark",o);c({true:"dark",false:"light"}[o])}function c(a=void 0){document.querySelectorAll("picture > source[data-cloned-theme]").forEach(e=>{e.remove()}),a&&document.querySelectorAll(`picture > source[media*="(prefers-color-scheme: ${a})"]`).forEach(e=>{const t=e.cloneNode();t.removeAttribute("media"),t.setAttribute("data-cloned-theme",a),t.setAttribute("class","lg_img"),e.parentNode.prepend(t);var r=setInterval(function(){"gallery-item"===e.parentNode.parentNode.classList.value&&(e.parentNode.parentNode.setAttribute("href",t.srcset),clearInterval(r))},100)})}!function e(){(r=document.getElementById("dark-nav"))?(r.addEventListener("click",n),c({true:"dark",false:"light"}[o])):setTimeout(e,100)}(),o&&d(o)}();