document.addEventListener("DOMContentLoaded", () => {

    iniciarAccionesRapidas();

    iniciarAgenda();

    animarTarjetas();

    mostrarMensajeInicio();

    actualizarHora();

});

/*==================================================
=            ACCIONES RÁPIDAS
==================================================*/

function iniciarAccionesRapidas() {

    const acciones = [

        {
            id: "historiaClinica",
            mensaje: "Función simulada:\n\nAquí se abriría la Historia Clínica del paciente."
        },

        {
            id: "receta",
            mensaje: "Función simulada:\n\nAquí se emitiría una receta médica."
        },

        {
            id: "certificado",
            mensaje: "Función simulada:\n\nAquí se generaría un certificado médico."
        },

        {
            id: "agendaCompleta",
            mensaje: "Función simulada:\n\nAquí se visualizaría la agenda completa del profesional."
        }

    ];

    acciones.forEach(accion => {

        const boton = document.getElementById(accion.id);

        if (boton) {

            boton.addEventListener("click", () => {

                alert(accion.mensaje);

            });

        }

    });

}

/*==================================================
=            BOTONES DE LA AGENDA
==================================================*/

function iniciarAgenda() {

    const botones = document.querySelectorAll("table button");

    botones.forEach(boton => {

        boton.addEventListener("click", () => {

            const fila = boton.closest("tr");

            const paciente = fila.children[1].textContent.trim();
            const motivo = fila.children[2].textContent.trim();
            const estado = fila.children[3].textContent.trim();

            alert(
                `Atendiendo paciente

Paciente: ${paciente}
Motivo: ${motivo}
Estado: ${estado}

Esta es una demostración del sistema MediTurno.`
            );

        });

    });

}

/*==================================================
=            ANIMACIÓN DE TARJETAS
==================================================*/

function animarTarjetas() {

    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";

        });

    });

}

/*==================================================
=            SIDEBAR
==================================================*/

document.querySelectorAll(".sidebar li").forEach(item => {

    item.addEventListener("click", () => {

        document
            .querySelectorAll(".sidebar li")
            .forEach(li => li.classList.remove("activo"));

        item.classList.add("activo");

    });

});

/*==================================================
=            HORA EN EL TÍTULO
==================================================*/

function actualizarHora() {

    const titulo = document.querySelector(".topbar h1");

    if (!titulo) return;

    const ahora = new Date();

    const hora = ahora.toLocaleTimeString("es-AR", {

        hour: "2-digit",
        minute: "2-digit"

    });

    titulo.textContent =
        `Panel del Médico - ${hora}`;

}

setInterval(actualizarHora, 60000);

/*==================================================
=            EFECTO BOTONES
==================================================*/

document.querySelectorAll("button").forEach(boton => {

    boton.addEventListener("mousedown", () => {

        boton.style.transform = "scale(.96)";

    });

    boton.addEventListener("mouseup", () => {

        boton.style.transform = "scale(1)";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.transform = "scale(1)";

    });

});

/*==================================================
=            MENSAJE DE INICIO
==================================================*/

function mostrarMensajeInicio() {

    console.log("Panel Médico cargado correctamente.");

}