!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(6)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n(3),r=n(4);let i=["Complete a letra ","Acerte a nome da música","A letra , pertence a qual Artista/Banda?","Qual o Artista/Banda ilustrado na foto?"];var l=document.querySelector("#generoMusical"),c=document.querySelector("#art-banda"),s=document.querySelector("#numPer"),u=document.querySelector(".parametroPergunta"),d=document.querySelector(".perguntas"),p=document.querySelector(".botao"),f=[],m="c3f6644637dc1802b86c528e33ba0f78";function h(){var t=new Date,e=t.getSeconds();t=t.setSeconds(e+10),$("#clock").countdown(t,function(t){$(this).html(t.strftime("CONTAGEM REGRESSIVA PARA RESPOSTA: %S"))}).on("finish.countdown",function(t){$(this).html("Tempo limite atingido!"),location.reload()})}Object(a.a)(["vazio","axe","forro","funk-carioca","hip-hop","indie","infantil","pagode","pop","reggae","rock","samba","sertanejo"],generoMusical),Object(a.b)([5,10,15,20],s),l.addEventListener("change",()=>{c.innerHTML="",c.innerHTML='<option value="vazio">Escolha um Artista/banda (opcional)</option>',f=Object(o.a)(l.value,c)}),p.addEventListener("click",t=>{t.preventDefault(),h(),Object(r.a)(i,d,u,c.value,f,m)}),$(function(){$("a[data-modal-id]").click(function(t){t.preventDefault(),$("body").append("<div class='modal-overlay js-modal-close'></div>"),$(".modal-overlay").fadeTo(500,.7);var e=$(this).attr("data-modal-id");$("#"+e).fadeIn($(this).data())}),$(".js-modal-close, .modal-overlay").click(function(){$(".modal-box, .modal-overlay").fadeOut(500,function(){$(".modal-overlay").remove(),location.reload()})}),$(".js-modal-proxima").click(function(){h(),Object(r.a)(i,d,u,c.value,f,m)}),$(window).resize(function(){$(".modal-box").css({top:($(window).height()-$(".modal-box").outerHeight())/2,left:($(window).width()-$(".modal-box").outerWidth())/2})}),$(window).resize()})},function(t,e,n){"use strict";e.a=function(t,e){t.forEach(t=>{let n;n="vazio"!=t?`<option value="${t}">${t.toUpperCase().replace("-"," ")}</option>`:`<option value="${t}">Escolha um Gênero (Obrigatório)</option>`;e.insertAdjacentHTML("beforeend",n)})},e.b=function(t,e){t.forEach(t=>{e.insertAdjacentHTML("beforeend",`<option value="${t}">${t}</option>`)})}},function(t,e,n){"use strict";e.a=async function(t,e){let n=`https://www.vagalume.com.br/browse/style/${t}.js`;const a=t=>`<option value="${t.artUrl}">${t.artDesc}</option>`;return await fetch(n).then(t=>t.json()).then(t=>(e.innerHTML+=t.playlist.map(a).sort().uniq().join(""),function(t){if(void 0!==t)return t.map(t=>({artUrl:t.artUrl,musDesc:t.musDesc,artDesc:t.artDesc}))}(t.playlist)))},Array.prototype.uniq=function(){let t=[];return this.forEach(function(e){t.includes(e)||t.push(e)}),t}},function(t,e,n){"use strict";e.a=function(t,e,n,o,r,i){let l=Object(a.a)(0,t.length),c=Object(a.a)(1,5),s=`<h2>${t[l]}</h2>`;"vazio"===o?(0===l&&(n.innerHTML="",e.innerHTML="",e.innerHTML+=s,e.innerHTML+="<p> Não fiz o codigo ainda</p>"),1===l&&async function(){r.then(t=>{let o=Object(a.a)(0,t.length),r=`https://api.vagalume.com.br/search.php?art=${t[o].artUrl}&mus=${t[o].musDesc}&key=${i}`,l="";n.innerHTML="",fetch(r).then(t=>t.json()).then(t=>{let e=t.mus[0].text,a=e.split("\n").slice(0,5).join("\n");n.innerHTML+=`<p>${a}</p>`}),e.innerHTML="",e.innerHTML+=s;for(let e=1;e<=4;e++)l+=e===c?`<input type="radio" class="radio-inline" value="respCorreta name="optradio" id="radio${e}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio${e}">${t[o].musDesc}</label>`:`<input type="radio" class="radio-inline" value="respErrada name="optradio" id="radio${e}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio${e}">${t[Object(a.a)(0,t.length)].musDesc}</label>`;e.innerHTML+=l})}(),2===l&&async function(){r.then(t=>{let o=Object(a.a)(0,t.length),r=`https://api.vagalume.com.br/search.php?art=${t[o].artUrl}&mus=${t[o].musDesc}&key=${i}`;n.innerHTML="",fetch(r).then(t=>t.json()).then(t=>{let e=t.mus[0].text,a=e.split("\n").slice(0,5).join("\n");n.innerHTML+=`<p>${a}</p>`}),e.innerHTML="",e.innerHTML+=s;for(let e=1;e<=4;e++)htmlRespostas+=e===c?`<input type="radio" class="radio-inline" value="respCorreta name="optradio" id="radio${e}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio${e}">${t[o].artDesc}</label>`:`<input type="radio" class="radio-inline" value="respErrada name="optradio" id="radio${e}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio${e}">${t[Object(a.a)(0,t.length)].artDesc}</label>`;e.innerHTML+=htmlRespostas})}(),3===l&&async function(){r.then(t=>{let o=Object(a.a)(0,t.length),r=`https://www.vagalume.com.br/${t[o].artUrl}/index.js`,i="";n.innerHTML="",fetch(r).then(t=>t.json()).then(t=>{let e="https://www.vagalume.com.br/";e+=t.artist.pic_small,n.innerHTML+=`<img src="${e}" alt="">`}),e.innerHTML="",e.innerHTML+=s;for(let e=1;e<=4;e++)i+=e===c?`<input type="radio" class="radio-inline" value="respCorreta name="optradio" id="radio${e}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio${e}">${t[o].artDesc}</label>`:`<input type="radio" class="radio-inline" value="respErrada name="optradio" id="radio${e}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio${e}">${t[Object(a.a)(0,t.length)].artDesc}</label>`;e.innerHTML+=i})}()):(l=Object(a.a)(0,2),s=`<h2>${t[l]}</h2>`,0===l?(e.innerHTML="",e.innerHTML+=s,e.innerHTML+="<p> Não fiz o codigo ainda</p>"):async function(){r.then(t=>{let r=function(t,e){let n,a=[];if("vazio"!==e){for(n=0;n<t.length;n++)e===t[n].artUrl&&a.push(t[n]);t=a}return a}(t,o),l=Object(a.a)(0,r.length),u=`https://api.vagalume.com.br/search.php?art=${r[l].artUrl}&mus=${r[l].musDesc}&key=${i}`,d="";n.innerHTML="",fetch(u).then(t=>t.json()).then(t=>{let e=t.mus[0].text,a=e.split("\n").slice(0,5).join("\n").replace(" (?=[A-Z])","\n");n.innerHTML+=`<p>${a}</p>`}),e.innerHTML="",e.innerHTML+=s;for(let e=1;e<=4;e++)e===c?(console.log(r),d+=`<input type="radio" class="radio-inline" value="respCorreta name="optradio" id="radio${e}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio${e}">${r[l].musDesc}</label>`):d+=`<input type="radio" class="radio-inline" value="respErrada name="optradio" id="radio${e}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio${e}">${t[Object(a.a)(0,t.length)].musDesc}</label>`;e.innerHTML+=d})}())};var a=n(5)},function(t,e,n){"use strict";e.a=function(t,e){return Math.floor(Math.random()*(e-t))+t}},function(t,e,n){t.exports=n.p+"css/bundle.css"}]);