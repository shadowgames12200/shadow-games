// ==============================
// SHADOW GAMES V2
// ==============================

// Animação ao rolar

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

document.querySelectorAll(

".produto-card,.beneficio,.avaliacao,.faq-item,.numero"

).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

// Navbar

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.background="rgba(9,9,11,.95)";

    }else{

        header.style.background="rgba(9,9,11,.75)";

    }

});

// Botão voltar ao topo

const topo=document.createElement("a");

topo.href="#inicio";

topo.className="topo";

topo.innerHTML="↑";

document.body.appendChild(topo);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topo.classList.add("show");

    }else{

        topo.classList.remove("show");

    }

});
// ==============================
// CONTADOR DA OFERTA
// ==============================

const destino = new Date();

destino.setDate(destino.getDate() + 7);

function atualizarContador(){

    const agora = new Date();

    const diferenca = destino - agora;

    if(diferenca <= 0) return;

    const dias = Math.floor(diferenca / (1000*60*60*24));

    const horas = Math.floor((diferenca/(1000*60*60))%24);

    const minutos = Math.floor((diferenca/1000/60)%60);

    const segundos = Math.floor((diferenca/1000)%60);

    document.getElementById("dias").textContent =
    String(dias).padStart(2,"0");

    document.getElementById("horas").textContent =
    String(horas).padStart(2,"0");

    document.getElementById("minutos").textContent =
    String(minutos).padStart(2,"0");

    document.getElementById("segundos").textContent =
    String(segundos).padStart(2,"0");

}

setInterval(atualizarContador,1000);

atualizarContador();

// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

console.log("Shadow Games V2 carregado com sucesso.");
