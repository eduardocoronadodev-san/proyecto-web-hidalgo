/**
 * explorar.js
 * Lógica para el catálogo interactivo de destinos (explorar.html)
 */

document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor-destinos');
    const campoBusqueda = document.getElementById('campo-busqueda');
    const botonesFiltro = document.querySelectorAll('.boton-filtro');
    const textoContador = document.getElementById('texto-contador');
    const mensajeSinResultados = document.getElementById('mensaje-sin-resultados');
    const botonLimpiar = document.getElementById('boton-limpiar-busqueda');

    if (!contenedor || typeof DESTINOS === 'undefined') {
        return;
    }

    let categoriaActual = 'todos';
    let terminoBusqueda = '';

    // Leer si la URL viene con hash (#pueblos-magicos, #naturaleza, #gastronomia)
    const hash = window.location.hash.replace('#', '');
    if (hash && ['pueblos-magicos', 'naturaleza', 'gastronomia'].includes(hash)) {
        categoriaActual = hash;
        botonesFiltro.forEach(b => {
            b.classList.toggle('activo', b.dataset.categoria === hash);
        });
    }

    // Renderizar tarjetas de destinos
    function renderizar() {
        const filtrados = DESTINOS.filter(destino => {
            const coincideCategoria = (categoriaActual === 'todos') || (destino.categoria === categoriaActual);
            const texto = (destino.nombre + ' ' + destino.ubicacion + ' ' + destino.resumen).toLowerCase();
            const coincideBusqueda = texto.includes(terminoBusqueda.toLowerCase());
            return coincideCategoria && coincideBusqueda;
        });

        contenedor.innerHTML = '';

        if (filtrados.length === 0) {
            if (mensajeSinResultados) mensajeSinResultados.classList.remove('d-none');
            if (textoContador) textoContador.textContent = '0 destinos encontrados';
            return;
        }

        if (mensajeSinResultados) mensajeSinResultados.classList.add('d-none');
        if (textoContador) {
            textoContador.textContent = `Mostrando ${filtrados.length} destino${filtrados.length === 1 ? '' : 's'}`;
        }

        filtrados.forEach(destino => {
            const tarjeta = document.createElement('article');
            tarjeta.className = 'tarjeta-destino';

            let iconoCat = 'fa-landmark';
            if (destino.categoria === 'naturaleza') iconoCat = 'fa-mountain-sun';
            if (destino.categoria === 'gastronomia') iconoCat = 'fa-utensils';

            tarjeta.innerHTML = `
                <div class="espacio-imagen-destino">
                    <img src="${destino.imagen}" alt="${destino.nombre}" class="imagen-destino" loading="lazy">
                    <span class="insignia-categoria categoria-${destino.categoria}">
                        <i class="fa-solid ${iconoCat}"></i> ${destino.etiqueta}
                    </span>
                </div>
                <div class="cuerpo-tarjeta-destino">
                    <h2 class="titulo-destino">${destino.nombre}</h2>
                    <p class="ubicacion-destino">
                        <i class="fa-solid fa-location-dot"></i> ${destino.ubicacion}, Hidalgo
                    </p>
                    <p class="resumen-destino">${destino.resumen}</p>
                    <div class="pie-tarjeta-destino">
                        <a href="detalle.html?id=${encodeURIComponent(destino.id)}" class="boton-ver-detalle">
                            Ver detalles <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
            contenedor.appendChild(tarjeta);
        });
    }

    // Eventos en botones de filtro por categoría
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function () {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            this.classList.add('activo');
            categoriaActual = this.dataset.categoria;
            renderizar();
        });
    });

    // Evento de búsqueda en tiempo real
    if (campoBusqueda) {
        campoBusqueda.addEventListener('input', function (e) {
            terminoBusqueda = e.target.value.trim();
            renderizar();
        });
    }

    // Botón para limpiar filtros y búsqueda
    if (botonLimpiar) {
        botonLimpiar.addEventListener('click', function () {
            if (campoBusqueda) campoBusqueda.value = '';
            terminoBusqueda = '';
            categoriaActual = 'todos';
            botonesFiltro.forEach(b => b.classList.toggle('activo', b.dataset.categoria === 'todos'));
            renderizar();
        });
    }

    // Render inicial
    renderizar();
});
