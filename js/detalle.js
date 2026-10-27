/**
 * detalle.js
 * Lógica para la página de detalle del destino (detalle.html)
 */

document.addEventListener('DOMContentLoaded', function () {
    if (typeof DESTINOS === 'undefined') {
        return;
    }

    // Obtener el ID del destino desde la URL (?id=...)
    const parametros = new URLSearchParams(window.location.search);
    const idDestino = parametros.get('id');

    // Buscar el destino; si no se encuentra o no viene ID, toma el primero por defecto
    let destino = DESTINOS.find(d => d.id === idDestino);
    if (!destino && DESTINOS.length > 0) {
        destino = DESTINOS[0];
    }

    if (!destino) {
        const titulo = document.getElementById('titulo-destino');
        if (titulo) titulo.textContent = 'Destino no encontrado';
        return;
    }

    function obtenerFavoritos() {
        try {
            return JSON.parse(localStorage.getItem('exploraHidalgoFavoritos')) || [];
        } catch (error) {
            return [];
        }
    }

    function actualizarBotonFavorito() {
        const boton = document.getElementById('boton-favorito');
        if (!boton) return;
        const guardado = obtenerFavoritos().includes(destino.id);
        boton.classList.toggle('guardado', guardado);
        boton.setAttribute('aria-pressed', String(guardado));
        boton.innerHTML = `<i class="fa-${guardado ? 'solid' : 'regular'} fa-heart"></i> ${guardado ? 'Guardado' : 'Guardar'}`;
    }

    const botonFavorito = document.getElementById('boton-favorito');
    if (botonFavorito) {
        actualizarBotonFavorito();
        botonFavorito.addEventListener('click', function () {
            const favoritos = obtenerFavoritos();
            const indice = favoritos.indexOf(destino.id);
            if (indice === -1) favoritos.push(destino.id);
            else favoritos.splice(indice, 1);
            localStorage.setItem('exploraHidalgoFavoritos', JSON.stringify(favoritos));
            actualizarBotonFavorito();
        });
    }

    // Actualizar títulos e información principal
    document.title = `${destino.nombre} | Explora Hidalgo`;
    
    const migaNombre = document.getElementById('miga-nombre-destino');
    if (migaNombre) migaNombre.textContent = destino.nombre;

    const tituloDestino = document.getElementById('titulo-destino');
    if (tituloDestino) tituloDestino.textContent = destino.nombre;

    const ubicacionDestino = document.getElementById('ubicacion-destino');
    if (ubicacionDestino) {
        ubicacionDestino.innerHTML = `<i class="fa-solid ${destino.categoria === 'gastronomia' ? 'fa-utensils' : 'fa-location-dot'}"></i> ${destino.categoria === 'gastronomia' ? 'Se disfruta en ' : ''}${destino.ubicacion}, Hidalgo`;
    }

    const descDestino = document.getElementById('descripcion-destino');
    if (descDestino) descDestino.textContent = destino.descripcion;

    if (destino.categoria === 'gastronomia') {
        const tituloDescripcion = document.getElementById('titulo-descripcion');
        const tituloAtractivos = document.getElementById('titulo-atractivos');
        const tituloActividades = document.getElementById('titulo-actividades');
        const tituloUbicacion = document.getElementById('titulo-ubicacion');
        if (tituloDescripcion) tituloDescripcion.innerHTML = '<i class="fa-solid fa-circle-info"></i> Sobre este platillo';
        if (tituloAtractivos) tituloAtractivos.innerHTML = '<i class="fa-solid fa-star"></i> Dónde conocerlo';
        if (tituloActividades) tituloActividades.innerHTML = '<i class="fa-solid fa-utensils"></i> Cómo disfrutarlo';
        if (tituloUbicacion) tituloUbicacion.innerHTML = '<i class="fa-solid fa-map-location-dot"></i> Dónde probarlo';
    }

    const historiaDestino = document.getElementById('historia-destino');
    const bloqueHistoria = document.getElementById('bloque-historia');
    if (historiaDestino && bloqueHistoria) {
        if (destino.historia) {
            historiaDestino.textContent = destino.historia;
            bloqueHistoria.style.display = 'block';
        } else {
            bloqueHistoria.style.display = 'none';
        }
    }

    const recDestino = document.getElementById('texto-recomendaciones');
    if (recDestino) recDestino.textContent = destino.recomendaciones;

    // Etiqueta e icono de categoría
    const etiquetaEl = document.getElementById('etiqueta-categoria');
    if (etiquetaEl) {
        etiquetaEl.className = `insignia-categoria categoria-${destino.categoria}`;
        let iconoCat = '<img src="../img/pin-turistico-hidalgo-icono-favicon.png" alt="" class="icono-pin-turistico" aria-hidden="true">';
        if (destino.categoria === 'naturaleza') iconoCat = 'fa-mountain-sun';
        if (destino.categoria === 'gastronomia') iconoCat = 'fa-utensils';
        etiquetaEl.innerHTML = `${destino.categoria === 'pueblos-magicos' ? iconoCat : `<i class="fa-solid ${iconoCat}"></i>`} ${destino.etiqueta}`;
    }

    // Imagen principal
    const imagenPrincipal = document.getElementById('imagen-principal-destino');
    if (imagenPrincipal) {
        imagenPrincipal.src = destino.imagen;
        imagenPrincipal.alt = destino.nombre;
    }

    // Lista de atractivos principales
    const listaAtractivos = document.getElementById('lista-atractivos');
    if (listaAtractivos) {
        listaAtractivos.innerHTML = '';
        if (Array.isArray(destino.atractivos)) {
            destino.atractivos.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-check"></i> <span>${item}</span>`;
                listaAtractivos.appendChild(li);
            });
        }
    }

    // Lista de actividades
    const listaActividades = document.getElementById('lista-actividades');
    if (listaActividades) {
        listaActividades.innerHTML = '';
        if (Array.isArray(destino.actividades)) {
            destino.actividades.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-person-walking"></i> <span>${item}</span>`;
                listaActividades.appendChild(li);
            });
        }
    }

    // Galería de imágenes (espacio para fotos)
    const galeriaContenedor = document.getElementById('galeria-imagenes');
    if (galeriaContenedor) {
        galeriaContenedor.innerHTML = '';
        const fotos = Array.isArray(destino.galeria) && destino.galeria.length > 0 
            ? destino.galeria 
            : [destino.imagen, destino.imagen, destino.imagen];

        fotos.slice(0, 3).forEach((foto, indice) => {
            const itemGaleria = document.createElement('div');
            itemGaleria.className = 'espacio-foto-galeria';
            itemGaleria.innerHTML = `
                <img src="${foto}" alt="${destino.nombre} - Foto ${indice + 1}" class="foto-galeria" loading="lazy">
            `;
            galeriaContenedor.appendChild(itemGaleria);
        });
    }

    // Mini Mapa con Leaflet
    const mapaMiniaturaEl = document.getElementById('mapa-miniatura');
    if (mapaMiniaturaEl && destino.coordenadas && destino.coordenadas.length === 2 && typeof L !== 'undefined') {
        const mapa = L.map('mapa-miniatura', {
            scrollWheelZoom: false
        }).setView(destino.coordenadas, 12);

        // Capa base de mapas (CARTO Voyager con API Key oficial)
        L.tileLayer('https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_4vkw_1_554e982ebdc003fae95cfb04', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
            maxZoom: 19
        }).addTo(mapa);

        // Delimitación sutil del límite estatal de Hidalgo
        if (typeof LIMITE_HIDALGO !== 'undefined') {
            L.geoJSON(LIMITE_HIDALGO, {
                style: {
                    color: '#b45309',
                    weight: 2,
                    opacity: 0.8,
                    dashArray: '5, 5',
                    fillColor: '#d97706',
                    fillOpacity: 0.03
                }
            }).addTo(mapa);
        }

        const marcador = L.marker(destino.coordenadas).addTo(mapa);
        marcador.bindPopup(`<strong>${destino.nombre}</strong><br>${destino.ubicacion}`).openPopup();
    }

    // Sugerencias de otros destinos
    const contenedorSugeridos = document.getElementById('contenedor-sugeridos');
    if (contenedorSugeridos) {
        const otros = DESTINOS.filter(d => d.id !== destino.id).slice(0, 3);
        contenedorSugeridos.innerHTML = '';
        otros.forEach(otro => {
            const tarjeta = document.createElement('article');
            tarjeta.className = 'tarjeta-destino';
            tarjeta.innerHTML = `
                <div class="espacio-imagen-destino">
                    <img src="${otro.imagen}" alt="${otro.nombre}" class="imagen-destino" loading="lazy">
                    <span class="insignia-categoria categoria-${otro.categoria}">
                        ${otro.etiqueta}
                    </span>
                </div>
                <div class="cuerpo-tarjeta-destino">
                    <h3 class="titulo-destino">${otro.nombre}</h3>
                    <p class="ubicacion-destino">
                        <i class="fa-solid fa-location-dot"></i> ${otro.ubicacion}
                    </p>
                    <p class="resumen-destino">${otro.resumen}</p>
                    <div class="pie-tarjeta-destino">
                        <a href="detalle.html?id=${encodeURIComponent(otro.id)}" class="boton-ver-detalle">
                            Ver detalles <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
            contenedorSugeridos.appendChild(tarjeta);
        });
    }
});
