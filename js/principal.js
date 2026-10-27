/**
 * principal.js
 * Lógica para la página principal (index.html)
 */

document.addEventListener('DOMContentLoaded', function () {
    const barra = document.getElementById('barra-principal');

    // Cambiar fondo de la barra de navegación al hacer scroll
    if (barra) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 60) {
                barra.classList.add('barra-con-fondo');
            } else {
                barra.classList.remove('barra-con-fondo');
            }
        });
    }
});
