document.addEventListener("DOMContentLoaded", () => {

    iniciarBotones();

    iniciarTabla();

    animarTarjetas();

    mostrarBienvenida();

});

/*==================================================
=            BOTONES DE ACCIONES RÁPIDAS
==================================================*/

function iniciarBotones() {

    const acciones = [

        {
            id: "nuevoTurno",
            mensaje: "Función simulada:\n\nAquí se registraría un nuevo turno."
        },

        {
            id: "nuevoPaciente",
            mensaje: "Función simulada:\n\nAquí se registraría un nuevo paciente."
        },

        {
            id: "nuevoMedico",
            mensaje: "Función simulada:\n\nAquí se registraría un nuevo médico."
        },

        {
            id: "reporte",
            mensaje: "Función simulada:\n\nAquí se generaría un reporte del sistema."
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
=            BOTONES DE LA TABLA
==================================================*/

function iniciarTabla() {

    const botones = document.querySelectorAll("table button");

    botones.forEach((boton, index) => {

        boton.addEventListener("click", () => {

            const fila = boton.closest("tr");

            const paciente = fila.children[0].textContent.trim();
            const medico = fila.children[1].textContent.trim();
            const especialidad = fila.children[2].textContent.trim();
            const fecha = fila.children[3].textContent.trim();
            const estado = fila.children[4].textContent.trim();

            alert(
                `Información del turno

Paciente: ${paciente}
Médico: ${medico}
Especialidad: ${especialidad}
Fecha: ${fecha}
Estado: ${estado}`
            );

        });

    });

}

/*==================================================
=            ANIMACIÓN DE TARJETAS
==================================================*/

function animarTarjetas() {

    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(tarjeta => {

        tarjeta.addEventListener("mouseenter", () => {

            tarjeta.style.transform = "translateY(-8px) scale(1.02)";

        });

        tarjeta.addEventListener("mouseleave", () => {

            tarjeta.style.transform = "translateY(0) scale(1)";

        });

    });

}

/*==================================================
=            MENSAJE DE BIENVENIDA
==================================================*/

function mostrarBienvenida() {

    console.log("Panel de Administración iniciado correctamente.");

}

/*==================================================
=            EFECTO SIDEBAR
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
=            FECHA Y HORA
==================================================*/

function actualizarTitulo() {

    const titulo = document.querySelector(".topbar h1");

    if (!titulo) return;

    const ahora = new Date();

    const hora = ahora.toLocaleTimeString("es-AR", {

        hour: "2-digit",

        minute: "2-digit"

    });

    titulo.textContent =
        `Panel de Administración - ${hora}`;

}

actualizarTitulo();

setInterval(actualizarTitulo, 60000);

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