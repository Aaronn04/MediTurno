document.addEventListener("DOMContentLoaded", () => {

    iniciarLogin();

    animacionFormulario();

});

/*==================================================
=            LOGIN
==================================================*/

function iniciarLogin() {

    const formulario = document.getElementById("formLogin");

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const correo = document.getElementById("correo").value.trim();

        const password = document.getElementById("password").value.trim();

        const rol = document.getElementById("rol").value;

        if (correo === "" || password === "" || rol === "") {

            alert("Complete todos los campos.");

            return;

        }

        if (!correo.includes("@")) {

            alert("Ingrese un correo válido.");

            return;

        }

        botonCargando();

        setTimeout(() => {

            switch (rol) {

                case "paciente":

                    alert("Bienvenido al sistema MediTurno.");

                    window.location.href = "mis_turnos.html";

                    break;

                case "medico":

                    alert("Bienvenido Doctor.");

                    window.location.href = "panel_medico.html";

                    break;

                case "admin":

                    alert("Bienvenido Administrador.");

                    window.location.href = "panel_admin.html";

                    break;

                default:

                    alert("Rol incorrecto.");

            }

        }, 1200);

    });

}

/*==================================================
=            BOTÓN CARGANDO
==================================================*/

function botonCargando() {

    const boton = document.querySelector(".btn-login");

    boton.disabled = true;

    boton.innerHTML =

        '<i class="fa-solid fa-spinner fa-spin"></i> Verificando...';

}

/*==================================================
=            ANIMACIÓN INPUTS
==================================================*/

function animacionFormulario() {

    const campos = document.querySelectorAll("input, select");

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
=            ENTER EN EL FORMULARIO
==================================================*/

document.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        console.log("Intentando iniciar sesión...");

    }

});

/*==================================================
=            MENSAJE EN CONSOLA
==================================================*/

console.log("MediTurno - Login cargado correctamente.");

/*==================================================
=            EFECTO TÍTULO
==================================================*/

let titulo = document.querySelector(".lado-derecho h2");

if (titulo) {

    titulo.addEventListener("mouseenter", () => {

        titulo.style.color = "#00A896";

    });

    titulo.addEventListener("mouseleave", () => {

        titulo.style.color = "#0F4C81";

    });

}

/*==================================================
=            EFECTO BOTÓN
==================================================*/

const boton = document.querySelector(".btn-login");

if (boton) {

    boton.addEventListener("mouseover", () => {

        boton.style.transform = "translateY(-4px)";

    });

    boton.addEventListener("mouseout", () => {

        boton.style.transform = "translateY(0px)";

    });

}

/*==================================================
=            PREVENIR DOBLE ENVÍO
==================================================*/

window.history.replaceState(null, null, window.location.href);