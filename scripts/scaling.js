var b=(y,u,a,f,c,l,m)=>{let i=window.innerWidth,t;y.matches?t=i/320:u.matches?t=i/768:a.matches&&(t=i/1200);let o=document.querySelectorAll(".main__section:not(.feedback)");if(!o)return;let e=document.querySelector(".main__section.feedback"),n,r;if(e&&(n=e.querySelector(".main__section-title"),r=e.querySelector(".sw-app")),f.matches){if(t>=1){l&&l.setAttribute("style",`zoom: ${t}`);for(let s=0;s<o.length;s++)o[s].setAttribute("style",`zoom: ${t}`);m&&m.setAttribute("style",`zoom: ${t}`),e&&(c.matches?(n.setAttribute("style",`zoom: ${t}`),r.setAttribute("style",`zoom: ${t}`)):!c.matches&&u.matches?(t=i/768,e.setAttribute("style",`zoom: ${t}`)):!c.matches&&a.matches&&(t=i/1200,e.setAttribute("style",`zoom: ${t}`)))}}else{t=1,l&&l.setAttribute("style",`zoom: ${t}`);for(let s=0;s<o.length;s++)o[s].setAttribute("style",`zoom: ${t}`);e&&(n.setAttribute("style",`zoom: ${t}`),c.matches&&r.setAttribute("style",`zoom: ${t}`)),m&&m.setAttribute("style",`zoom: ${t}`)}};export{b as scalingPage};