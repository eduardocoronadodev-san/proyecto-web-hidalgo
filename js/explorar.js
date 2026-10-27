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

    function obtenerFavoritos() {
        try {
            return JSON.parse(localStorage.getItem('exploraHidalgoFavoritos')) || [];
        } catch (error) {
            return [];
        }
    }

    function guardarFavoritos(favoritos) {
        localStorage.setItem('exploraHidalgoFavoritos', JSON.stringify(favoritos));
    }

    // Leer si la URL viene con hash (#pueblos-magicos, #naturaleza, #gastronomia)
    const hash = window.location.hash.replace('#', '');
    if (hash && ['pueblos-magicos', 'naturaleza', 'gastronomia', 'favoritos'].includes(hash)) {
        categoriaActual = hash;
        botonesFiltro.forEach(b => {
            b.classList.toggle('activo', b.dataset.categoria === hash);
        });
    }

    // Renderizar tarjetas de destinos
    function renderizar() {
        const favoritos = obtenerFavoritos();
        const filtrados = DESTINOS.filter(destino => {
            const coincideCategoria = (categoriaActual === 'todos') ||
                (categoriaActual === 'favoritos' ? favoritos.includes(destino.id) : destino.categoria === categoriaActual);
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

            let iconoCat = '<img src="../img/pin-turistico-hidalgo-icono-favicon.png" alt="" class="icono-pin-turistico" aria-hidden="true">';
            if (destino.categoria === 'naturaleza') iconoCat = 'fa-mountain-sun';
            if (destino.categoria === 'gastronomia') iconoCat = 'fa-utensils';

            tarjeta.innerHTML = `
                <div class="espacio-imagen-destino">
                    <img src="${destino.imagen}" alt="${destino.nombre}" class="imagen-destino" loading="lazy">
                    <span class="insignia-categoria categoria-${destino.categoria}">
                        ${destino.categoria === 'pueblos-magicos' ? iconoCat : `<i class="fa-solid ${iconoCat}"></i>`} ${destino.etiqueta}
                    </span>
                </div>
                <div class="cuerpo-tarjeta-destino">
                    <h2 class="titulo-destino">${destino.nombre}</h2>
                    <p class="ubicacion-destino">
                        <i class="fa-solid ${destino.categoria === 'gastronomia' ? 'fa-utensils' : 'fa-location-dot'}"></i> ${destino.categoria === 'gastronomia' ? `Se disfruta en ${destino.ubicacion}, Hidalgo` : `${destino.ubicacion}, Hidalgo`}
                    </p>
                    <p class="resumen-destino">${destino.resumen}</p>
                    <div class="pie-tarjeta-destino">
                        <a href="detalle.html?id=${encodeURIComponent(destino.id)}" class="boton-ver-detalle">
                            Ver detalles <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <button type="button" class="boton-favorito ${favoritos.includes(destino.id) ? 'guardado' : ''}" data-id="${destino.id}" aria-label="${favoritos.includes(destino.id) ? 'Quitar de guardados' : 'Guardar'} ${destino.nombre}" aria-pressed="${favoritos.includes(destino.id)}">
                            <i class="fa-${favoritos.includes(destino.id) ? 'solid' : 'regular'} fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            contenedor.appendChild(tarjeta);
        });

        contenedor.querySelectorAll('.boton-favorito').forEach(boton => {
            boton.addEventListener('click', function () {
                const id = this.dataset.id;
                const favoritosActuales = obtenerFavoritos();
                const indice = favoritosActuales.indexOf(id);
                if (indice === -1) favoritosActuales.push(id);
                else favoritosActuales.splice(indice, 1);
                guardarFavoritos(favoritosActuales);
                renderizar();
            });
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
