/**
 * acerca.js
 * Lógica para la página acerca del proyecto (acerca.html)
 */

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');

    if (formulario) {
        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje recibido!',
                text: 'Gracias por tu sugerencia para Descubre Hidalgo.',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0f172a'
            });
            formulario.reset();
        });
    }
});
