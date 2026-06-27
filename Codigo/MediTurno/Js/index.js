document.addEventListener("DOMContentLoaded", () => {

    console.log("MediTurno iniciado correctamente.");

    cambiarNavbar();
    menuResponsive();
    animacionScroll();
    botonHero();
    efectoCards();

});

/*==================================================
=            NAVBAR AL HACER SCROLL
==================================================*/

function cambiarNavbar() {

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scroll");

        } else {

            header.classList.remove("scroll");

        }

    });

}

/*==================================================
=            MENÚ RESPONSIVE
==================================================*/

function menuResponsive() {

    const boton = document.querySelector(".menu-mobile");

    const menu = document.querySelector(".menu");

    boton.addEventListener("click", () => {

        menu.classList.toggle("ativo");

    });

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("ativo");

        });

    });

}

/*==================================================
=            BOTÓN HERO
==================================================*/

function botonHero() {

    const boton = document.querySelector(".btn-principal");

    boton.addEventListener("click", () => {

        console.log("Ir a solicitar turno");

    });

}

/*==================================================
=            ANIMACIÓN DE SCROLL
==================================================*/

function animacionScroll() {

    const elementos = document.querySelectorAll(

        ".card, .card-beneficio, .porque-grid div"

    );

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.style.opacity = "1";
                entrada.style.transform = "translateY(0px)";

            }

        });

    }, {

        threshold: 0.20

    });

    elementos.forEach(elemento => {

        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(40px)";
        elemento.style.transition = ".7s";

        observador.observe(elemento);

    });

}

/*==================================================
=            EFECTO HOVER EN LAS CARDS
==================================================*/

function efectoCards() {

    const cards = document.querySelectorAll(

        ".card, .card-beneficio"

    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px) scale(1)";

        });

    });

}

/*==================================================
=            MENSAJE DE BIENVENIDA
==================================================*/

setTimeout(() => {

    console.log(

        "Bienvenido a MediTurno."

    );

}, 1000);

/*==================================================
=            AÑO AUTOMÁTICO EN FOOTER
==================================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    const anio = new Date().getFullYear();

    copyright.innerHTML = `© ${anio} MediTurno - Todos los derechos reservados.`;

}