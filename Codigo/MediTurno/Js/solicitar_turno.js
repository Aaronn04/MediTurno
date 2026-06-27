document.addEventListener("DOMContentLoaded", () => {

    inicializarFormulario();

    actualizarResumen();

    animarCampos();

});

/*==================================================
=            ELEMENTOS
==================================================*/

const especialidad = document.getElementById("especialidad");
const medico = document.getElementById("medico");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const observaciones = document.getElementById("observaciones");

const rEspecialidad = document.getElementById("rEspecialidad");
const rMedico = document.getElementById("rMedico");
const rFecha = document.getElementById("rFecha");
const rHora = document.getElementById("rHora");

const mensaje = document.getElementById("mensajeTurno");

const formulario = document.getElementById("formTurno");

/*==================================================
=            INICIALIZAR
==================================================*/

function inicializarFormulario() {

    especialidad.addEventListener("change", actualizarResumen);

    medico.addEventListener("change", actualizarResumen);

    fecha.addEventListener("change", actualizarResumen);

    hora.addEventListener("change", actualizarResumen);

    formulario.addEventListener("submit", confirmarTurno);

}

/*==================================================
=            ACTUALIZAR RESUMEN
==================================================*/

function actualizarResumen() {

    rEspecialidad.textContent =
        especialidad.value || "-";

    rMedico.textContent =
        medico.value || "-";

    rFecha.textContent =
        fecha.value || "-";

    rHora.textContent =
        hora.value || "-";

}

/*==================================================
=            CONFIRMAR TURNO
==================================================*/

function confirmarTurno(e) {

    e.preventDefault();

    if (
        especialidad.value === "" ||
        medico.value === "" ||
        fecha.value === "" ||
        hora.value === ""
    ) {

        alert("Debe completar todos los campos obligatorios.");

        return;

    }

    const boton = document.querySelector(".btn-confirmar");

    boton.disabled = true;

    boton.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';

    setTimeout(() => {

        mensaje.style.display = "block";

        mensaje.innerHTML = `
            <i class="fa-solid fa-circle-check"></i><br><br>
            ¡Su turno fue solicitado correctamente!
        `;

        boton.disabled = false;

        boton.innerHTML =
            '<i class="fa-solid fa-calendar-check"></i> Confirmar Turno';

        formulario.reset();

        actualizarResumen();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }, 1500);

}

/*==================================================
=            EFECTOS INPUTS
==================================================*/

function animarCampos() {

    const campos =
        document.querySelectorAll("input, select, textarea");

    campos.forEach(campo => {

        campo.addEventListener("focus", () => {

            campo.style.transform = "scale(1.02)";

        });

        campo.addEventListener("blur", () => {

            campo.style.transform = "scale(1)";

        });

    });

}

/*==================================================
=            FECHA MÍNIMA
==================================================*/

const hoy = new Date();

const anio = hoy.getFullYear();

const mes = String(hoy.getMonth() + 1).padStart(2, "0");

const dia = String(hoy.getDate()).padStart(2, "0");

fecha.min = `${anio}-${mes}-${dia}`;

/*==================================================
=            MENSAJE CONSOLA
==================================================*/

console.log("MediTurno - Solicitud de turnos iniciada correctamente.");