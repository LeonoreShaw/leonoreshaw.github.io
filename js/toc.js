!function(f,d){void 0!==f.IntersectionObserver&&d.querySelectorAll("#toc").forEach(function(e){const r=new Set,s=new Map,n=Array.from(e.querySelectorAll(".menu-list > li > a"));for(const a of n){var t=a.getAttribute("href").trim().slice(1),t=d.getElementById(t);t&&s.set(t,a)}const l=Array.from(s.keys());var o=new IntersectionObserver(t=>{for(const e of t)e.isIntersecting?r.add(e.target):r.delete(e.target);let o;if(r.size?o=[...r].sort((e,t)=>e.offsetTop-t.offsetTop)[0]:l.length&&(o=l.filter(e=>e.offsetTop<f.scrollY).sort((e,t)=>t.offsetTop-e.offsetTop)[0]),o&&s.has(o)){n.forEach(e=>e.classList.remove("is-active"));t=s.get(o);t.classList.add("is-active");let e=t.parentElement.parentElement;for(;e.classList.contains("menu-list")&&"li"===e.parentElement.tagName.toLowerCase();)e.parentElement.children[0].classList.add("is-active"),e=e.parentElement.parentElement}},{threshold:0});for(const i of l)if(o.observe(i),s.has(i)){const c=s.get(i);c.setAttribute("data-href",c.getAttribute("href")),c.setAttribute("href","javascript:;"),c.addEventListener("click",()=>{"function"==typeof i.scrollTo&&(e=i.id,e=d.getElementById(e).offsetTop- -20,d.documentElement.scrollTop=e,d.body.scrollTop=e);var e=c.getAttribute("data-href");history.pushState?history.pushState(null,null,e):location.hash=e}),i.style.scrollMargin="3.5em"}})}(window,document);