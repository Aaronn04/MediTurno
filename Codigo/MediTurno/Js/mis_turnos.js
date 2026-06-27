document.addEventListener("DOMContentLoaded", () => {

    iniciarBuscador();

    iniciarFiltro();

    iniciarBotones();

    actualizarEstadisticas();

});

/*==================================================
=            BUSCADOR
==================================================*/

function iniciarBuscador() {

    const buscador = document.getElementById("buscar");

    buscador.addEventListener("keyup", filtrarTurnos);

}

/*==================================================
=            FILTRO POR ESTADO
==================================================*/

function iniciarFiltro() {

    const filtro = document.getElementById("estadoFiltro");

    filtro.addEventListener("change", filtrarTurnos);

}

/*==================================================
=            FILTRAR TURNOS
==================================================*/

function filtrarTurnos() {

    const texto = document.getElementById("buscar").value.toLowerCase();

    const estado = document.getElementById("estadoFiltro").value;

    const turnos = document.querySelectorAll(".turno");

    turnos.forEach(turno => {

        const contenido = turno.innerText.toLowerCase();

        let coincideTexto = contenido.includes(texto);

        let coincideEstado = true;

        if (estado !== "todos") {

            coincideEstado = contenido.includes(estado.toLowerCase());

        }

        turno.style.display =

            (coincideTexto && coincideEstado)

                ? "block"

                : "none";

    });

}

/*==================================================
=            BOTONES
==================================================*/

function iniciarBotones() {

    const cancelar = document.querySelectorAll(".btn-cancelar");

    cancelar.forEach(boton => {

        boton.addEventListener("click", cancelarTurno);

    });

    const reprogramar = document.querySelectorAll(".btn-reprogramar");

    reprogramar.forEach(boton => {

        boton.addEventListener("click", reprogramarTurno);

    });

}

/*==================================================
=            CANCELAR
==================================================*/

function cancelarTurno(e) {

    const tarjeta = e.target.closest(".turno");

    const estado = tarjeta.querySelector(".estado");

    if (confirm("¿Desea cancelar este turno?")) {

        estado.textContent = "Cancelado";

        estado.classList.remove("verde", "amarillo");

        estado.classList.add("rojo");

        tarjeta.classList.remove("confirmado", "pendiente");

        tarjeta.classList.add("cancelado");

        actualizarEstadisticas();

        alert("El turno fue cancelado.");

    }

}

/*==================================================
=            REPROGRAMAR
==================================================*/

function reprogramarTurno() {

    alert("Función simulada.\n\nEn una versión futura se permitirá seleccionar una nueva fecha y horario.");

}

/*==================================================
=            ESTADÍSTICAS
==================================================*/

function actualizarEstadisticas() {

    const tarjetas = document.querySelectorAll(".turno");

    let total = 0;

    let confirmados = 0;

    let pendientes = 0;

    let cancelados = 0;

    tarjetas.forEach(t => {

        if (t.style.display === "none") return;

        total++;

        if (t.classList.contains("confirmado")) confirmados++;

        if (t.classList.contains("pendiente")) pendientes++;

        if (t.classList.contains("cancelado")) cancelados++;

    });

    const numeros = document.querySelectorAll(".card-estadistica h3");

    if (numeros.length >= 4) {

        numeros[0].textContent = total;

        numeros[1].textContent = confirmados;

        numeros[2].textContent = pendientes;

        numeros[3].textContent = cancelados;

    }

}

/*==================================================
=            EFECTO TARJETAS
==================================================*/

document.querySelectorAll(".turno").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/*==================================================
=            MENSAJE CONSOLA
==================================================*/

console.log("MediTurno - Módulo Mis Turnos cargado correctamente.");