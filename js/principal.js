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

    const visor = document.querySelector('.visor-foto-historia');
    const imagenAmpliada = visor?.querySelector('.visor-foto-imagen');
    const descripcionImagen = visor?.querySelector('.visor-foto-descripcion');
    const botonCerrar = visor?.querySelector('.visor-foto-cerrar');

    if (visor && imagenAmpliada && descripcionImagen && botonCerrar) {
        document.querySelectorAll('.foto-historia-boton').forEach(boton => {
            boton.addEventListener('click', function () {
                const imagen = this.querySelector('img');
                if (!imagen) return;

                imagenAmpliada.src = imagen.src;
                imagenAmpliada.alt = imagen.alt;
                descripcionImagen.textContent = imagen.alt;
                visor.showModal();
            });
        });

        botonCerrar.addEventListener('click', function () {
            visor.close();
        });

        visor.addEventListener('click', function (evento) {
            if (evento.target === visor) visor.close();
        });
    }
});
