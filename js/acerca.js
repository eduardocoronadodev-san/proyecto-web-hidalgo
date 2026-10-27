/**
 * acerca.js
 * Lógica para la página acerca del proyecto (acerca.html)
 */

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');

    if (formulario) {
        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            alert('¡Gracias por tu mensaje! Tu sugerencia para Explora Hidalgo ha sido recibida con éxito.');
            formulario.reset();
        });
    }
});
